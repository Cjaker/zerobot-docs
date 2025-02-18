---
sidebar_position: 16
---

# Client
Overall client functions

```lua
Client.isConnected()
Client.isKeyPressed(key, flags)
Client.showMessage(message)
Client.XLog()
Client.getGameWindowDimensions()
Client.getLatency()
Client.getServerLatency()
Client.focus()
Client.sendHotkey(key, modifier)
Client.getCursorMapPosition()
Client.getFightMode()
Client.setFightMode(fightMode)
Client.getChaseMode()
Client.setChaseMode(chaseMode)
Client.setWindowTitle(title)
Client.getVersion()
Client.isTradeShopOpen()
Client.flashWindow()
Client.getFps()
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

--- Disconnects the client using X-Log native function.
-- This function is a wrapper around the external function clientXLog.
function Client.XLog()

--- Get client game window dimensions.
-- This function is a wrapper around the external function clientGetGameWindowDimensions.
-- @return the following structure in table {x=0,y=0,width=0,height=0}
function Client.getGameWindowDimensions()

-- Get the current latency from the client latency indicator UI.
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

--- Send a key press event to the client.
-- This function is a wrapper around the external function clientSendHotkey.
-- You can base the key and modifier params on HotkeyManager.parseKeyCombination function returns.
-- @param key (number) - The key code.
-- @param modifier (number) - The modifier flags.
function Client.sendHotkey(key, modifier)

--- Get the current cursor position translated into the map position.
-- This function is a wrapper around the external function clientGetCursorMapPosition.
-- @return the following structure in table {x=0,y=0,z=0}
function Client.getCursorMapPosition()

--- Get the current fight mode.
-- This function is a wrapper around the external function clientGetFightMode.
-- @return the current fight mode, otherwise the last known fight mode. Refer to Enums.FightModes for possible values.
function Client.getFightMode()

--- Set the current fight mode.
-- Note: this function doesn't updates the fight mode instantly, it will be updated on the next game frame.
-- This function is a wrapper around the external function clientSetFightMode.
-- @param fightMode (number) - The fight mode to be set. Refer to Enums.FightModes for possible values.
function Client.setFightMode(fightMode)

--- Get the current chase mode.
-- This function is a wrapper around the external function clientGetChaseMode.
-- @return the current chase mode, otherwise the last known chase mode. Refer to Enums.ChaseModes for possible values.
function Client.getChaseMode()

--- Set the current chase mode.
-- Note: this function doesn't updates the chase mode instantly, it will be updated on the next game frame.
-- This function is a wrapper around the external function clientSetChaseMode.
-- @param chaseMode (number) - The chase mode to be set. Refer to Enums.ChaseModes for possible values.
function Client.setChaseMode(chaseMode)

--- Set game window title.
-- This function is a wrapper around the external function clientSetWindowTitle.
-- @param title (string) - The title to be set.
function Client.setWindowTitle(title)

-- Get the Tibia client version.
-- This function is a wrapper around the external function clientGetVersion.
-- @return The Tibia client version as a string (example: 14.00.f275d0), if not available will return nil.
function Client.getVersion()

-- Get the current trade shop window openned state.
-- This function is a wrapper around the external function clientIsTradeShopOpen.
-- @return true if the trade shop window is open, false otherwise. Note: the bot will only have this information if the player has opened or closed the trade shop window.
function Client.isTradeShopOpen()

--- Flash the client window.
--- This function is a wrapper around the external function clientFlashWindow.
function Client.flashWindow()

--- Get the current frames per second (FPS) of the client.
--- This function is a wrapper around the external function clientGetFps.
--- @return The last available frames per second (FPS) of the client, got from UI FPS indicator, if the information isn't available will return 0 or the last one available.
function Client.getFps()
```
