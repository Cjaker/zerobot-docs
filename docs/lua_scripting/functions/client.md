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
Client.getMapIndexes()
Client.getLatency()
Client.getServerLatency()
Client.getLootBlackWhitelist(playerId)
Client.setLootBlackWhitelist(playerId, content)
Client.getAllItems()
Client.getAllMonsters()
Client.getMonsterByRaceId(raceId)
Client.getWorldName()
Client.login(email, password, characterIndex)
Client.logout()
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
Client.isChatEnabled()
Client.toggleChatEnabled()
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
-- @param key (number) - The numeric key code returned by HotkeyManager.parseKeyCombination.
-- @param flags (number) - The Enums.FlagModifiers bitmask. Combine multiple flags with bit.bor.
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

--- Get the current map indexes offsets. These offsets are updated every time the camera or player moves, useful for real time HUD positioning.
--- This function is a wrapper around the external function clientGetMapIndexes.
--- @return the following structure in table {x=0,y=0}
function Client.getMapIndexes()

--- Get the current latency from the client latency indicator UI.
-- This function is a wrapper around the external function clientGetLatency.
-- @return The current latency in milliseconds, if the information isn't available will return -1.
function Client.getLatency()

--- Get the current latency from the server.
-- This function is a wrapper around the external function clientGetServerLatency.
-- @return The current server latency in milliseconds, if the information isn't available will return 0.
function Client.getServerLatency()

--- Get the loot black/white list json content.
--- This function is a wrapper around the external function clientGetLootBlackWhitelist.
--- @param playerId (number) - The player id to get the loot black/white list.
--- @return The loot black/white list json content, if the information isn't available will return an empty string.
function Client.getLootBlackWhitelist(playerId)

--- Set the loot black/white list json content.
--- This function is a wrapper around the external function clientSetLootBlackWhitelist.
--- @param playerId (number) - The player id to replace the loot black/white list.'
--- @param content (string) - The json content to be set.
function Client.setLootBlackWhitelist(playerId, content)

--- Get all items data available from the client.
--- This function is a wrapper around the external function clientGetAllItems.
--- @return The items data in table format, every item will contains id and flags field, but some items can have extra data depending of it type. All informations can be based on this project: https://github.com/Arch-Mina/Assets-Editor
--- The flags field is a bitwise representation of the item flags, you can use the Enums.ThingFlagAttr to get the item flags.
--- Example: local isGround = bit.band(item.flags, Enums.ThingFlagAttr.Ground) ~= 0
function Client.getAllItems()

--- Get all monsters data available from the client.
--- This function is a wrapper around the external function clientGetAllMonsters.
--- @return The monsters data in table format, every monster will contains raceId, name, outfit and isBoss field.
function Client.getAllMonsters()

--- Get monster information by raceId. All monsters informations comes from client static data file. It's used by bestiary and other functions.
--- This function is a wrapper around the external function clientGetMonsterByRaceId.
--- @param raceId (number) - The monster raceId.
--- @return a table containing the monster information, with the following structure: {raceId=0, name="", outfit={...}, isBoss=false}
function Client.getMonsterByRaceId(raceId)

--- Get the current OT world name. This function is experimental, please test it before the usage to see if it's compatible with the OT target version.
--- This function is a wrapper around the external function clientGetWorldName.
--- @return The current OT world name, if the information isn't available will return an empty string.
function Client.getWorldName()

--- Login into the client using the provided email, password and character index.
--- IMPORTANT: The developer should check if the character can logout, this function logout's the character first and then login into the specified credentials.
--- This function is a wrapper around the external function clientLogin.
--- @param email (string) - The email to be used for login.
--- @param password (string) - The password to be used for login.
--- @param characterIndex (number) - The character index to be used for login.
function Client.login(email, password, characterIndex)

--- Send logout action to server.
--- This function is a wrapper around the external function clientLogout.
--- @return true if the logout action was sent to server, false otherwise.
function Client.logout()

--- Focus the client window.
-- This function is a wrapper around the external function clientFocus.
-- Note from Windows documentation: An application cannot force a window to the foreground while the user is working with another window. Instead, Windows flashes the taskbar button of the window to notify the user.
function Client.focus()

-- Send a key press event to the client.
-- This function is a wrapper around the external function clientSendHotkey.
-- You can base the key and modifier params on HotkeyManager.parseKeyCombination function returns.
-- @param key (number) - The key code.
-- @param modifier (number) - The modifier flags.
function Client.sendHotkey(key, modifier)

--- Get the current cursor position translated into the map position.
--- This function is a wrapper around the external function clientGetCursorMapPosition.
--- @return the following structure in table {x=0,y=0,z=0}
function Client.getCursorMapPosition()

--- Get the current fight mode.
--- Deprecated on client version 15.25+, it will return nil if the client version is 15.25 or higher, but it can still be used on older client versions.
--- This function is a wrapper around the external function clientGetFightMode.
--- @return the current fight mode, otherwise the last known fight mode. Refer to Enums.FightMode for possible values. Nil if the client version is 15.25 or higher.
function Client.getFightMode()

--- Set the current fight mode.
--- Note: this function doesn't updates the fight mode instantly, it will be updated on the next game frame.
--- Deprecated on client version 15.25+; it can still be used on older client versions.
--- This function is a wrapper around the external function clientSetFightMode.
--- @param fightMode (number) - The fight mode to be set. Refer to Enums.FightMode for possible values.
--- This Lua wrapper has no return value.
function Client.setFightMode(fightMode)

--- Get the current chase mode.
--- This function is a wrapper around the external function clientGetChaseMode.
--- @return the current chase mode, otherwise the last known chase mode. Refer to Enums.ChaseMode for possible values.
function Client.getChaseMode()

--- Set the current chase mode.
--- Note: this function doesn't updates the chase mode instantly, it will be updated on the next game frame.
--- This function is a wrapper around the external function clientSetChaseMode.
--- @param chaseMode (number) - The chase mode to be set. Refer to Enums.ChaseMode for possible values.
function Client.setChaseMode(chaseMode)

--- Set game window title.
--- This function is a wrapper around the external function clientSetWindowTitle.
--- @param title (string) - The title to be set.
function Client.setWindowTitle(title)

-- Get the Tibia client version.
-- This function is a wrapper around the external function clientGetVersion.
-- @return The Tibia client version as a string (example: 14.00.f275d0), if not available will return nil.
function Client.getVersion()

-- Get the current trade shop window openned state.
-- This function is a wrapper around the external function clientIsTradeShopOpen.
-- @return true if the trade shop window is open, false otherwise. Note: the bot will only have this information if the player has opened or closed the trade shop window.
function Client.isTradeShopOpen()

--- Returns if in-game chat is enabled.
--- This function is a wrapper around the external function clientIsChatEnabled.
--- @return (boolean) - Returns true if in-game chat is enabled, false otherwise.
function Client.isChatEnabled()

--- Toggle in-game chat enabled/disabled state. After usage, the developer should wait the next game frame to get the updated state using Client.isChatEnabled function.
--- This function is a wrapper around the external function clientToggleChatEnabled.
--- @return (boolean) - Returns true if the in-game chat is enabled, false otherwise.
function Client.toggleChatEnabled()

--- Flash the client window.
--- This function is a wrapper around the external function clientFlashWindow.
function Client.flashWindow()

--- Get the current frames per second (FPS) of the client.
--- This function is a wrapper around the external function clientGetFps.
--- @return The last available frames per second (FPS) of the client, got from UI FPS indicator, if the information isn't available will return 0 or the last one available.
function Client.getFps()
```

<!-- current-core-api:start -->
## Client data and session control

- `Client.getMapIndexes()` returns the current camera/map offsets as `{x, y}`; the values change when the camera or player moves.
- `Client.getLootBlackWhitelist(playerId)` returns the player's loot black/whitelist JSON, or an empty string when unavailable.
- `Client.setLootBlackWhitelist(playerId, content)` replaces that JSON content.
- `Client.getAllItems()` returns the item definitions loaded by the client. Every entry contains `id` and bitwise `flags`; test flags with `Enums.ThingFlagAttr`.
- `Client.getAllMonsters()` returns client monster definitions with `raceId`, `name`, `outfit`, and `isBoss`.
- `Client.getMonsterByRaceId(raceId)` returns one static monster definition.
- `Client.getWorldName()` returns the current OT world name, or an empty string. This API is experimental and should be tested against the target OT client.
- `Client.login(email, password, characterIndex)` logs out the current character first and then logs in with the supplied credentials. Check that logout is safe before calling it.
- `Client.logout()` sends the logout action and returns whether it was sent.
- `Client.isChatEnabled()` returns the current in-game chat state.
- `Client.toggleChatEnabled()` toggles chat and returns the resulting state; read it again on the next game frame if synchronization matters.

:::note Client 15.25+
`Client.getFightMode()` and `Client.setFightMode(...)` are deprecated on client 15.25 and newer. The getter returns `nil` there. The valid enum names are `Enums.FightMode` and `Enums.ChaseMode` (singular).
:::
<!-- current-core-api:end -->
