---
sidebar_position: 16
---

# Client
Overall client functions

```lua
Client.isConnected()
Client.isKeyPressed(key, flags)
Client.showMessage(message)
Client.getLatency()
Client.getServerLatency()
Client.focus()
```

### Code

```lua
--- Check if the client is currently connected.
-- This function is a wrapper around the external function clientIsConnected.
-- @return true if the client is currently connected, false otherwise.
function Client.isConnected()

--- Check if a specified hotkey is currently pressed.
-- This function is a wrapper around the external function clientIsKeyPressed.
-- @param key (number) - The key code. Example: A (0x65)
-- @param flags (string) - The flags for modifiers. Refer the parameter value as Enums.FlagModifiers, apply bit or operation for multiple flags
-- @return true if the specified key is currently pressed, false otherwise.
function Client.isKeyPressed(key, flags)

--- Show a message on center of game screen.
-- This function is a wrapper around the external function clientShowMessage.
-- @param message (string) - The message to be shown
function Client.showMessage(message)

--- Get the current latency of the client.
-- This function is a wrapper around the external function clientGetLatency.
-- @return The current latency in milliseconds, if the information isn't available will return -1.
function Client.getLatency()

--- Get the current latency from the server.
-- This function is a wrapper around the external function clientGetServerLatency.
-- @return The current server latency in milliseconds, if the information isn't available will return 0.
function Client.getServerLatency()

--- Focus the client window.
-- This function is a wrapper around the external function clientFocus.
-- Note from Windows documentation: An application cannot force a window to the foreground while the user is working with another window. Instead, Windows flashes the taskbar button of the window to notify the user.
function Client.focus()
```