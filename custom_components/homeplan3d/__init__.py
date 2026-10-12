"""Home Plan 3D: draw a floor plan, control your home in 3D."""
from __future__ import annotations

import json
from pathlib import Path

import voluptuous as vol

from homeassistant.components import frontend, panel_custom, websocket_api
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.storage import Store
from homeassistant.loader import async_get_integration

from .const import DOMAIN, MAX_PLAN_BYTES, STORAGE_KEY, STORAGE_VERSION, URL_BASE

EMPTY_PLAN = {"version": 1, "floors": []}


def _asset_version(www: Path, version: str) -> str:
    """Version string for the JS URL; the file's mtime makes a reload pick up a replaced bundle."""
    try:
        return f"{version}-{int((www / 'homeplan3d.js').stat().st_mtime)}"
    except OSError:
        return version


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    store: Store = Store(hass, STORAGE_VERSION, STORAGE_KEY)
    plan = await store.async_load() or dict(EMPTY_PLAN)

    www = Path(__file__).parent / "www"
    version = str((await async_get_integration(hass, DOMAIN)).version)
    if not hass.data.get(f"{DOMAIN}_static"):  # routes cannot be removed again, register only once
        await hass.http.async_register_static_paths(
            [StaticPathConfig(URL_BASE, str(www), False)]
        )
        hass.data[f"{DOMAIN}_static"] = True
    url = f"{URL_BASE}/homeplan3d.js?v={await hass.async_add_executor_job(_asset_version, www, version)}"
    hass.data[DOMAIN] = {"store": store, "plan": plan, "url": url}
    frontend.add_extra_js_url(hass, url)
    await panel_custom.async_register_panel(
        hass,
        webcomponent_name="homeplan3d-panel",
        frontend_url_path="homeplan3d",
        module_url=url,
        sidebar_title="Home Plan 3D",
        sidebar_icon="mdi:floor-plan",
        require_admin=False,
        config={},
    )
    websocket_api.async_register_command(hass, ws_get)
    websocket_api.async_register_command(hass, ws_save)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, "homeplan3d")
    data = hass.data.pop(DOMAIN, None)
    if data:
        frontend.remove_extra_js_url(hass, data["url"])
    return True


@websocket_api.websocket_command({vol.Required("type"): "homeplan3d/get"})
@callback
def ws_get(hass, connection, msg):
    data = hass.data.get(DOMAIN)
    connection.send_result(msg["id"], data["plan"] if data else EMPTY_PLAN)


@websocket_api.websocket_command(
    {vol.Required("type"): "homeplan3d/save", vol.Required("plan"): dict}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_save(hass, connection, msg):
    plan = msg["plan"]
    if not isinstance(plan.get("floors"), list):
        connection.send_error(msg["id"], "invalid_plan", "floors must be a list")
        return
    if len(json.dumps(plan)) > MAX_PLAN_BYTES:
        connection.send_error(msg["id"], "too_large", "plan too large")
        return
    data = hass.data.get(DOMAIN)
    if data is None:
        connection.send_error(msg["id"], "not_loaded", "Home Plan 3D is not loaded")
        return
    data["plan"] = plan
    await data["store"].async_save(plan)
    connection.send_result(msg["id"], {"ok": True})
