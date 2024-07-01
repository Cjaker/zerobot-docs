---
sidebar_position: 7
---

# Engine
Control's the bot engine

```lua
Engine.isHealingEnabled()
Engine.isHealFriendEnabled()
Engine.getBotVersion()
Engine.isBotEnabled()
Engine.isTargetingEnabled()
Engine.isMagicShooterEnabled()
Engine.isEquipmentEnabled()
Engine.isTimerEnabled()
Engine.enableTargeting(enable)
Engine.enableMagicShooter(enable)
Engine.enableHealFriend(enable)
Engine.enableHealing(enable)
Engine.enableEquipment(enable)
Engine.enableTimer(enable)
Engine.enableBot(enable)
Engine.magicShooterSwitchProfile(profileIndex)
Engine.magicShooterGetProfile()
Engine.getScriptsDirectory()
Engine.getUserId()
Engine.loadScript(scriptName)
Engine.unloadScript(scriptName)
```

### Code

```lua
--- Returns if healing function is enabled
-- This function is a wrapper around the external function engineIsHealingEnabled.
function Engine.isHealingEnabled()

--- Returns if heal friend function is enabled
-- This function is a wrapper around the external function return IsHealFriendEnabled.
function Engine.isHealFriendEnabled()

--- Returns current bot version
-- This function is a wrapper around the external function engineGetBotVersion.
function Engine.getBotVersion()

--- Returns if bot is enabled
-- This function is a wrapper around the external function engineIsBotEnabled.
function Engine.isBotEnabled()

--- Returns if targeting function is enabled
-- This function is a wrapper around the external function engineIsTargetingEnabled.
function Engine.isTargetingEnabled()

--- Returns if magic shooter function is enabled
-- This function is a wrapper around the external function engineIsMagicShooterEnabled.
function Engine.isMagicShooterEnabled()

--- Returns if equipment function is enabled
-- This function is a wrapper around the external function engineIsEquipmentEnabled.
function Engine.isEquipmentEnabled()

--- Returns if timer function is enabled
-- This function is a wrapper around the external function engineIsTimerEnabled.
function Engine.isTimerEnabled()

--- Enables or disables the targeting system.
-- This function is a wrapper around the external function engineTargetingEnable.
-- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the targeting system.
function Engine.enableTargeting(enable)

--- Enables or disables the magic shooter system.
-- This function is a wrapper around the external function engineMagicShooterEnable.
-- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the magic shooter system.
function Engine.enableMagicShooter(enable)

--- Enables or disables the heal friend system.
-- This function is a wrapper around the external function engineHealFriendEnable.
-- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the heal friend system.
function Engine.enableHealFriend(enable)

--- Enables or disables the healing system.
-- This function is a wrapper around the external function engineHealingEnable.
-- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the healing system.
function Engine.enableHealing(enable)

--- Enables or disables the equipment system.
-- This function is a wrapper around the external function engineEquipmentEnable.
-- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the equipment system.
function Engine.enableEquipment(enable)

--- Enables or disables the timer system.
-- This function is a wrapper around the external function engineTimerEnable.
-- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the timer system.
function Engine.enableTimer(enable)

--- Enables or disables all bot functions.
-- This function is a wrapper around the external function engineBotEnable.
-- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) all bot functions.
function Engine.enableBot(enable)

--- Switches the profile of magic shooter by index.
-- This function is a wrapper around the external function engineMagicShooterSwitchProfile.
-- @param profileIndex (number) - The index of the profile to switch to (from 0 to 9).
function Engine.magicShooterSwitchProfile(profileIndex)

--- Gets the current profile index selected on magic shooter.
-- This function is a wrapper around the external function engineMagicShooterGetProfile.
-- @return (number) - The index of current selected profile.
function Engine.magicShooterGetProfile()

--- Switches the profile of equipment by index.
-- This function is a wrapper around the external function engineEquipmentSwitchProfile.
-- @param profileIndex (number) - The index of the profile to switch to (from 0 to 9).
function Engine.equipmentSwitchProfile(profileIndex)

--- Gets the current profile index selected on equipment.
-- This function is a wrapper around the external function engineEquipmentGetProfile.
-- @return (number) - The index of current selected profile.
function Engine.equipmentGetProfile()

--- Gets the default scripts directory.
-- This function is a wrapper around the external function engineGetScriptsDirectory.
-- @return (string) - The path to default scripts directory.
function Engine.getScriptsDirectory()

--- Gets the last user ID.
-- This function is useful to identify current user. You can use engineGetUserId directly if you need to avoid hooks.
-- @return (string) - The last generated user ID, non-sensitive data.
function Engine.getUserId()

--- Load specific script.
-- This function is a wrapper around the external function engineLoadScript.
-- This function runs asynchronously, so it may take some time to load the script, so if you will use Engine.unloadScript right after this function, you should wait for the script to be loaded, wait some delay.
-- @param scriptName (string) - The name of the script to load. This name is based on "Available Scripts" list in "Scripting" tab.
-- @return (boolean) - Returns true if the script is loaded successfully, false if the script doesn't exists.
function Engine.loadScript(scriptName)

--- Unload specific script.
-- This function is a wrapper around the external function engineUnloadScript.
-- @param scriptName (string) - The name of the script to unload. This name is based on "Enabled Scripts" list in "Scripting" tab.
-- @return (boolean) - Returns true if the script was unloaded successfully, false if the script doesn't exists.
function Engine.unloadScript(scriptName)
```