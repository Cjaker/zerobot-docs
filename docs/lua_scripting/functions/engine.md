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
Engine.isCaveBotEnabled()
Engine.isEquipmentEnabled()
Engine.isTimerEnabled()
Engine.isAutoSSAEnabled()
Engine.isHoldTargetEnabled()
Engine.isAutoMightRingEnabled()
Engine.isAntiPushEnabled()
Engine.isRuneMaxEnabled()
Engine.isReconnectEnabled()
Engine.enableTargeting(enable)
Engine.enableMagicShooter(enable)
Engine.enableHealFriend(enable)
Engine.enableHealing(enable)
Engine.enableEquipment(enable)
Engine.enableTimer(enable)
Engine.enableCaveBot(enable)
Engine.enableBot(enable)
Engine.magicShooterSwitchProfile(profileIndex)
Engine.magicShooterGetProfile()
Engine.magicShooterGetProfileName(index)
Engine.autoSSAEnable(enable)
Engine.holdTargetEnable(enable)
Engine.autoMightRingEnable(enable)
Engine.antiPushEnable(enable)
Engine.setFirstAntiPushId(itemId)
Engine.setSecondAntiPushId(itemId)
Engine.runeMaxEnable(enable)
Engine.reconnectEnable(enable)
Engine.getRuneMaxId()
Engine.setRuneMaxId(runeMaxId)
Engine.targetingSwitchProfile(profileIndex)
Engine.targetingGetProfile()
Engine.targetingGetProfileName(index)
Engine.targetingGetProfileSettings(index)
Engine.targetingSetProfileSettings(index, settings)
Engine.equipmentSwitchProfile(profileIndex)
Engine.equipmentGetProfile()
Engine.equipmentGetProfileName(index)
Engine.healingSwitchProfile(profileIndex)
Engine.healingGetProfile()
Engine.healingGetProfileName(index)
Engine.getScriptsDirectory()
Engine.getScriptsDirectoryUtf8()
Engine.getUserId(lowerCase)
Engine.getLicenseTime()
Engine.setAlarm(alarmType, enable)
Engine.isAlarmEnabled(alarmType)
Engine.isAllAlarmsDisabled()
Engine.allAlarmsEnable(enable)
Engine.loadScript(scriptName)
Engine.unloadScript(scriptName)
Engine.reloadScript(scriptName)
Engine.loadConfig(config)
Engine.isScriptLoaded(scriptName)
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

--- Returns if cavebot function is enabled
-- This function is a wrapper around the external function engineIsCaveBotEnabled.
function Engine.isCaveBotEnabled()

--- Returns if equipment function is enabled
-- This function is a wrapper around the external function engineIsEquipmentEnabled.
function Engine.isEquipmentEnabled()

--- Returns if timer function is enabled
-- This function is a wrapper around the external function engineIsTimerEnabled.
function Engine.isTimerEnabled()

--- Returns if auto SSA function is enabled. Refer to native function located on Tools -> PvP -> Auto SSA.
--- This function is a wrapper around the external function engineIsAutoSSAEnabled.
--- @return (boolean) - Returns true if the auto SSA function is enabled, false otherwise.
function Engine.isAutoSSAEnabled()

--- Returns if hold target function is enabled. Refer to native function located on Tools -> PvP -> Hold Target.
--- This function is a wrapper around the external function engineIsHoldTargetEnabled.
--- @return (boolean) - Returns true if the hold target function is enabled, false otherwise.
function Engine.isHoldTargetEnabled()

--- Returns if auto might ring function is enabled. Refer to native function located on Tools -> PvP -> Auto Might Ring.
--- This function is a wrapper around the external function engineIsAutoMightRingEnabled.
--- @return (boolean) - Returns true if the auto might ring function is enabled, false otherwise.
function Engine.isAutoMightRingEnabled()

--- Returns if anti-push function is enabled. Refer to native function located on Tools -> PvP -> Anti-Push.
--- This function is a wrapper around the external function engineIsAntiPushEnabled.
--- @return (boolean) - Returns true if the anti-push function is enabled, false otherwise.
function Engine.isAntiPushEnabled()

--- Returns if rune max function is enabled. Refer to native function located on Tools -> PvP -> Rune Max.
--- This function is a wrapper around the external function engineIsRuneMaxEnabled.
--- @return (boolean) - Returns true if the rune max function is enabled, false otherwise.
function Engine.isRuneMaxEnabled()

--- Returns if reconnect function is enabled. Refer to native function located on Tools -> Reconnect.
--- This function is a wrapper around the external function engineIsReconnectEnabled.
--- @return (boolean) - Returns true if the reconnect function is enabled, false otherwise.
function Engine.isReconnectEnabled()

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

--- Enables or disables the cavebot system.
-- This function is a wrapper around the external function engineCaveBotEnable.
-- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the cavebot system.
function Engine.enableCaveBot(enable)

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

--- Gets the current magic shooter profile name.
--- This function is a wrapper around the external function engineMagicShooterGetProfileName.
--- @param index (number) - The index of the profile to get the name from (from 0 to 9).
--- @return (string) - The name of the current selected profile.
function Engine.magicShooterGetProfileName(index)

--- Enables or disables the auto SSA system. Refer to native function located on Tools -> PvP -> Auto SSA.
--- This function is a wrapper around the external function engineAutoSSAEnable.
--- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the auto SSA system.
function Engine.autoSSAEnable(enable)

--- Enables or disables the hold target system. Refer to native function located on Tools -> PvP -> Hold Target.
--- This function is a wrapper around the external function engineHoldTargetEnable.
--- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the hold target system.
function Engine.holdTargetEnable(enable)

--- Enables or disables the auto might ring system. Refer to native function located on Tools -> PvP -> Auto Might Ring.
--- This function is a wrapper around the external function engineAutoMightRingEnable.
--- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the auto might ring system.
function Engine.autoMightRingEnable(enable)

--- Enables or disables the anti-push system. Refer to native function located on Tools -> PvP -> Anti-Push.
--- This function is a wrapper around the external function engineAntiPushEnable.
--- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the anti-push system.
function Engine.antiPushEnable(enable)

--- Sets the first anti-push id. Refer to native function located on Tools -> PvP -> Anti-Push.
--- This function is a wrapper around the external function engineSetFirstAntiPushId.
--- @param itemId (number) - The first anti-push item id to set.
function Engine.setFirstAntiPushId(itemId)

--- Sets the second anti-push id. Refer to native function located on Tools -> PvP -> Anti-Push.
--- This function is a wrapper around the external function engineSetSecondAntiPushId.
--- @param itemId (number) - The second anti-push item id to set.
function Engine.setSecondAntiPushId(itemId)

--- Enables or disables the rune max system. Refer to native function located on Tools -> PvP -> Rune Max.
--- This function is a wrapper around the external function engineRuneMaxEnable.
--- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the rune max system.
function Engine.runeMaxEnable(enable)

--- Enables or disables the reconnect system. Refer to native function located on Tools -> Reconnect.
--- This function is a wrapper around the external function engineReconnectEnable.
--- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the reconnect system.
function Engine.reconnectEnable(enable)

--- Gets the current rune max id. Refer to native function located on Tools -> PvP -> Rune Max.
--- This function is a wrapper around the external function engineGetRuneMaxId.
--- @return (number) - The current rune max id.
function Engine.getRuneMaxId()

--- Sets the current rune max id. Refer to native function located on Tools -> PvP -> Rune Max.
--- This function is a wrapper around the external function engineSetRuneMaxId.
--- @param runeMaxId (number) - The rune max id to set.
function Engine.setRuneMaxId(runeMaxId)

--- Switches the profile of targeting by index.
-- This function is a wrapper around the external function engineTargetingSwitchProfile.
-- @param profileIndex (number) - The index of the profile to switch to (from 0 to 9).
function Engine.targetingSwitchProfile(profileIndex)

--- Gets the current profile index selected on targeting.
-- This function is a wrapper around the external function engineTargetingGetProfile.
-- @return (number) - The index of current selected profile.
function Engine.targetingGetProfile()

--- Gets the current targeting profile name.
-- This function is a wrapper around the external function engineTargetingGetProfileName.
-- @param index (number) - The index of the profile to get the name from (from 0 to 9).
-- @return (string) - The name of the current selected profile.
function Engine.targetingGetProfileName(index)

--- Get the settings of a specified profile by index.
--- This function is a wrapper around the external function engineTargetingGetProfileSettings.
--- @param index (number) - The index of the profile to get the settings from (from 0 to 9).
--- @return (table) - A table containing the settings of the specified profile. (this reflect in all "Advanced Settings" available on Targeting tab)
function Engine.targetingGetProfileSettings(index)

--engineTargetingSetProfileSettings
--- Set the settings of a specified profile by index.
--- This function is a wrapper around the external function engineTargetingSetProfileSettings.
--- @param index (number) - The index of the profile to set the settings to (from 0 to 9).
--- @param settings (table) - A table containing the settings to be applied to the specified profile. (this reflect in all "Advanced Settings" available on Targeting tab)
function Engine.targetingSetProfileSettings(index, settings)

--- Switches the profile of equipment by index.
-- This function is a wrapper around the external function engineEquipmentSwitchProfile.
-- @param profileIndex (number) - The index of the profile to switch to (from 0 to 9).
function Engine.equipmentSwitchProfile(profileIndex)

--- Gets the current profile index selected on equipment.
-- This function is a wrapper around the external function engineEquipmentGetProfile.
-- @return (number) - The index of current selected profile.
function Engine.equipmentGetProfile()

--- Gets the current equipment profile name.
-- This function is a wrapper around the external function engineEquipmentGetProfileName.
-- @param index (number) - The index of the profile to get the name from (from 0 to 9).
-- @return (string) - The name of the current selected profile.
function Engine.equipmentGetProfileName(index)

--- Switches the profile of healing by index.
--- This function is a wrapper around the external function engineHealingSwitchProfile.
--- @param profileIndex (number) - The index of the profile to switch to (from 0 to 9).
function Engine.healingSwitchProfile(profileIndex)

--- Gets the current profile index selected on healing.
--- This function is a wrapper around the external function engineHealingGetProfile.
--- @return (number) - The index of current selected profile.
function Engine.healingGetProfile()

--- Gets the current healing profile name.
--- This function is a wrapper around the external function engineHealingGetProfileName.
--- @param index (number) - The index of the profile to get the name from (from 0 to 9).
--- @return (string) - The name of the current selected profile.
function Engine.healingGetProfileName(index)

--- Gets the default scripts directory. Legacy function.
-- This function is a wrapper around the external function engineGetScriptsDirectory.
-- @return (string) - The path to default scripts directory.
function Engine.getScriptsDirectory()

--- Gets the default scripts directory as UTF-8.
-- This function is a wrapper around the external function engineGetScriptsDirectoryUtf8.
-- @return (string) - The path to default scripts directory.
function Engine.getScriptsDirectoryUtf8()

--- Returns a hashed version of the user's email to be used as a unique user ID.
-- This function is useful to identify current user. You can use engineGetUserId directly if you need to avoid hooks.
-- @param lowerCase - If true, the email will be converted to lowercase before hashing, ensuring case insensitivity in the generated hash.
function Engine.getUserId(lowerCase)

--- Gets the remaining time of the license.
--- This function is a wrapper around the external function engineGetLicenseTime.
--- To allow this function, the user should consent to share this information with the script by enabling "Allow Scripts Access License Time" on Engine tab.
--- @return (string) - The last visible license time from ZeroBot overview tab. If this information is not available, it will return nil.
function Engine.getLicenseTime()

--- Enables or disables specific alarm type.
--- @param alarmType (number) - The alarm type to enable or disable.
--- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) the alarm type.
function Engine.setAlarm(alarmType, enable)

--- Get the status of a specific alarm type.
--- @param alarmType (number) - The alarm type to check. Refer to Enums.AlarmType.
--- @return (boolean) - Returns true if the alarm type is enabled, false otherwise.
function Engine.isAlarmEnabled(alarmType)

--- Check if all alarms are disabled.
--- This function is a wrapper around the external function engineIsAllAlarmsDisabled.
--- @return (boolean) - Returns true if all alarms are disabled, false otherwise.
function Engine.isAllAlarmsDisabled()

--- Enables or disables all alarms.
--- This function changes the state of the "Disable All Alarms" option located on the Alarms tab.
--- @param enable (boolean) - A flag indicating whether to enable (true) or disable (false) all alarms.
function Engine.allAlarmsEnable(enable)

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

--- Reload specific script.
--- This function is a wrapper around the external function engineReloadScript.
--- @param scriptName (string) - The name of the script to reload. This name is based on "Enabled Scripts" list in "Scripting" tab.
--- @return (boolean) - Returns true if the script was reloaded successfully, false if the script doesn't exists.
function Engine.reloadScript(scriptName)

--- Load specific configuration by name. For privacy reasons we don't have a function to list available configurations.
--- This function is a wrapper around the external function engineLoadConfig.
--- @param config (string) - The name of the config file to load. This name is based on available configurations list in "Settings" tab.
function Engine.loadConfig(config)

--- Check if a specific script is loaded.
--- This function is a wrapper around the external function engineIsScriptLoaded.
--- @param scriptName (string) - The name of the script to check. This name is based on "Enabled Scripts" list in "Scripting" tab.
--- @return (boolean) - Returns true if the script is loaded, false otherwise.
function Engine.isScriptLoaded(scriptName)
```

<!-- current-core-api:start -->
## Additional engine controls

The following getters report whether each native feature is active:

- `Engine.isCaveBotEnabled()`
- `Engine.isAutoSSAEnabled()`
- `Engine.isHoldTargetEnabled()`
- `Engine.isAutoMightRingEnabled()`
- `Engine.isAntiPushEnabled()`
- `Engine.isRuneMaxEnabled()`
- `Engine.isReconnectEnabled()`

Use `Engine.enableCaveBot(enable)`, `Engine.autoSSAEnable(enable)`, `Engine.holdTargetEnable(enable)`, `Engine.autoMightRingEnable(enable)`, `Engine.antiPushEnable(enable)`, `Engine.runeMaxEnable(enable)`, and `Engine.reconnectEnable(enable)` to change the matching feature.

- `Engine.setFirstAntiPushId(itemId)` and `Engine.setSecondAntiPushId(itemId)` set the Anti-Push items.
- `Engine.getRuneMaxId()` and `Engine.setRuneMaxId(runeMaxId)` read and change the Rune Max item.
- `Engine.targetingGetProfileSettings(index)` returns the Advanced Settings for profile index `0` through `9`.
- `Engine.targetingSetProfileSettings(index, settings)` applies an Advanced Settings table to that profile.
- `Engine.getScriptsDirectoryUtf8()` returns the scripts directory with UTF-8 encoding.
- `Engine.isAllAlarmsDisabled()` reports the global alarm-disabled state.
- `Engine.allAlarmsEnable(enable)` changes the global alarm enable state.

`Engine.getUserId(lowerCase)` accepts the optional `lowerCase` argument; the old zero-argument signature was incomplete.
<!-- current-core-api:end -->
