import sys

import pytest

if sys.platform == "win32":
    # Home Assistant's test plugin blocks all sockets, but asyncio's Windows loop needs a loopback
    # socketpair. Only relevant for running the tests locally on Windows (CI/Linux is unaffected).
    import pytest_homeassistant_custom_component.plugins as _plugins
    import pytest_socket

    for _mod in (_plugins, pytest_socket):
        _mod.disable_socket = lambda *args, **kwargs: None


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(enable_custom_integrations):
    yield
