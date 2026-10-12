"""Integration tests: setup, panel registration and the plan websocket API."""
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.homeplan3d.const import DOMAIN

PLAN = {
    "version": 2,
    "settings": {"wallExterior": 0.24},
    "floors": [{"id": "eg", "name": "EG", "height": 2.6, "rooms": [], "walls": [], "openings": [], "devices": [], "furniture": []}],
    "site": {"buildings": [{"id": "nb1", "name": "Anbau", "points": [[0, 0], [4, 0], [4, 3], [0, 3]], "height": 5.6, "levels": 2}]},
}


async def _setup(hass):
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


async def test_setup_registers_panel_and_unloads(hass):
    entry = await _setup(hass)
    assert "homeplan3d" in hass.data["frontend_panels"]
    assert await hass.config_entries.async_unload(entry.entry_id)
    await hass.async_block_till_done()
    assert "homeplan3d" not in hass.data["frontend_panels"]


async def test_get_save_roundtrip(hass, hass_ws_client):
    await _setup(hass)
    client = await hass_ws_client(hass)

    await client.send_json({"id": 1, "type": "homeplan3d/get"})
    msg = await client.receive_json()
    assert msg["success"] and msg["result"]["floors"] == []

    await client.send_json({"id": 2, "type": "homeplan3d/save", "plan": PLAN})
    assert (await client.receive_json())["success"]

    await client.send_json({"id": 3, "type": "homeplan3d/get"})
    assert (await client.receive_json())["result"] == PLAN


async def test_save_persists_to_storage(hass, hass_ws_client, hass_storage):
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json({"id": 1, "type": "homeplan3d/save", "plan": PLAN})
    assert (await client.receive_json())["success"]
    await hass.async_block_till_done()
    assert hass_storage["homeplan3d.plan"]["data"] == PLAN


async def test_save_rejects_invalid_plan(hass, hass_ws_client):
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json({"id": 1, "type": "homeplan3d/save", "plan": {"floors": "nope"}})
    msg = await client.receive_json()
    assert not msg["success"] and msg["error"]["code"] == "invalid_plan"


async def test_save_requires_admin(hass, hass_ws_client, hass_read_only_access_token):
    await _setup(hass)
    client = await hass_ws_client(hass, hass_read_only_access_token)
    await client.send_json({"id": 1, "type": "homeplan3d/save", "plan": PLAN})
    msg = await client.receive_json()
    assert not msg["success"] and msg["error"]["code"] == "unauthorized"
    # reading is allowed for everyone
    await client.send_json({"id": 2, "type": "homeplan3d/get"})
    assert (await client.receive_json())["success"]


async def test_reload_entry_keeps_panel(hass):
    entry = await _setup(hass)
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done()
    assert "homeplan3d" in hass.data["frontend_panels"]
    assert hass.data[DOMAIN]["url"].startswith("/homeplan3d_static/homeplan3d.js?v=0.1.")
