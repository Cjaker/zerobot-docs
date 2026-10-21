---
sidebar_position: 10
---

# CaveBot
Overall cavebot useful functions

```lua
CaveBot.GoTo(labelName, section)
CaveBot.addWaypoint(waypointType, x, y, z, extraData)
CaveBot.insertWaypoint(wpId, waypointType, x, y, z, extraData)
CaveBot.replaceWaypoint(wpId, waypointType, x, y, z, extraData)
CaveBot.deleteWaypoint(wpId)
CaveBot.clearWaypoints()
CaveBot.selectWaypoint(wpId, section)
CaveBot.getSelectedWaypointId()
CaveBot.getWaypointTypeById(id)
CaveBot.getWaypointDataById(id)
CaveBot.getWaypoints()
CaveBot.getWaypointsCount()
CaveBot.isDebugEnabled()
CaveBot.getCoreTeleportIds()
CaveBot.stopCurrentScript()
CaveBot.setStartFromNearestWaypoint(startFromNearest)
CaveBot.setLureIgnoreList(list)
CaveBot.setSafetyLureSettings(nearCreatureDistance, nearCreatureCount, avoidStuckTrapCount)
CaveBot.getSafetyLureSettings()
CaveBot.setLureSettings(creaturesToRun, dynamicLure, skipUnreachableCreatures)
CaveBot.getLureSettings()
CaveBot.setEndLureSettings(creaturesToStop, creaturesToLeave, tryWalkToCenter, creaturesToLeaveByHp, creaturesToLeaveByHpValue, creaturesToLeaveByHpCount, dontLeaveIfHp, dontLeaveIfHpValue, dontLeaveIfHpCount)
CaveBot.getEndLureSettings()
CaveBot.getSellList()
CaveBot.setSellList(list)
CaveBot.getRefillList()
CaveBot.setRefillList(list)
CaveBot.setAutoRecorderSettings(nodeDistance, type)
CaveBot.setNodeSettings(nodeDistance)
CaveBot.setDebugHUDSettings(debugHUD, showPath, showSkippedLureCreatures)
CaveBot.addSpecialArea(x, y, z, type, width, height, fromWp, toWp)
CaveBot.deleteSpecialArea(id)
CaveBot.clearSpecialAreas()
CaveBot.setWalkMode(mode)
CaveBot.setWalkDelay(delay)
CaveBot.disablePlayerWalkthrough(disabled)
CaveBot.setCoreTeleportIds(ids)
CaveBot.enableAutoRecorder(enabled)
CaveBot.pause(milliseconds)
CaveBot.saveFile(fileName)
CaveBot.loadFile(fileName)
```

### Code
```lua
--- Goto to specific label waypoint on cavebot
-- This function is a wrapper around the external function cavebotGoto.
-- Note: this function will not set instantly the waypoint, it will be set on the next tick. If you need to execute this function twice or more, you should use a delay between the calls.
-- On waypoint script, it will kill the script execution after the use of this function.
-- @param labelName (string) - The waypoint label name.
-- @param section (string) - Optional section (tab) name. Without it, the current section is searched first, then the whole waypoint list.
function CaveBot.GoTo(labelName, section)

--- Adds a waypoint to the cavebot system.
-- This function is a wrapper around the external function cavebotAddWaypoint.
-- @param waypointType (number) - The type of waypoint to add. Refer waypointType as Enums.WaypointType
-- @param x (number) - The x coordinate of the waypoint.
-- @param y (number) - The y coordinate of the waypoint.
-- @param z (number) - The z coordinate of the waypoint.
-- @param extraData (string) - The extra data of the waypoint. This parameter is optional and should be used only when waypointType is Label/Goto/Script/Hur Down-Up. For Label/Goto/Script the extraData should be a string, for Hur Down-Up the extraData should be the direction (Enums.Directions).
function CaveBot.addWaypoint(waypointType, x, y, z, extraData)

--- Insert a waypoint before specific id on the cavebot system.
-- This function is a wrapper around the external function cavebotInsertWaypoint.
-- @param wpId (number) - The id of the waypoint to insert before.
-- @param waypointType (number) - The type of waypoint to add. Refer waypointType as Enums.WaypointType
-- @param x (number) - The x coordinate of the waypoint.
-- @param y (number) - The y coordinate of the waypoint.
-- @param z (number) - The z coordinate of the waypoint.
function CaveBot.insertWaypoint(wpId, waypointType, x, y, z, extraData)

--- Replace a waypoint by specific id on the cavebot system.
-- This function is a wrapper around the external function cavebotReplaceWaypoint.
-- @param wpId (number) - The id of the waypoint to replace.
-- @param waypointType (number) - The type of waypoint to add. Refer waypointType as Enums.WaypointType
-- @param x (number) - The x coordinate of the waypoint.
-- @param y (number) - The y coordinate of the waypoint.
-- @param z (number) - The z coordinate of the waypoint.
function CaveBot.replaceWaypoint(wpId, waypointType, x, y, z, extraData)

--- Delete a waypoint by specific id on the cavebot system.
-- This function is a wrapper around the external function cavebotDeleteWaypoint.
-- @param wpId (number) - The id of the waypoint to delete.
function CaveBot.deleteWaypoint(wpId)

--- Clear all waypoints on the cavebot system.
-- This function is a wrapper around the external function cavebotClearWaypoints.
function CaveBot.clearWaypoints()

--- Select a waypoint by specific id on the cavebot system.
-- This function is a wrapper around the external function cavebotSelectWaypoint.
-- Note: this function will not set instantly the waypoint, it will be set on the next tick. If you need to execute this function twice or more, you should use a delay between the calls.
-- On waypoint script, it will kill the script execution after the use of this function.
-- @param wpId (number) - The global waypoint ID, or its 1-based position inside section when section is supplied.
-- @param section (string) - Optional section (tab) name. Without it, wpId is a global waypoint ID.
function CaveBot.selectWaypoint(wpId, section)

--- Get selected waypoint id.
-- This function is a wrapper around the external function cavebotGetSelectedWaypointId.
-- @return (number) - Returns the waypoint id if there's one selected, otherwise returns -1.
function CaveBot.getSelectedWaypointId()

--- Get waypoint type by specific id.
--- This function is a wrapper around the external function cavebotGetWaypointTypeById.
--- @param id (number) - The id of the waypoint to get the type.
--- @return (number) - Returns the waypoint type if the id is valid, otherwise returns -1.
function CaveBot.getWaypointTypeById(id)

--- Get waypoint data by specific id.
--- This function is a wrapper around the external function cavebotGetWaypointDataById.
--- @param id (number) - The id of the waypoint to get the data.
--- @return (table) - Returns the waypoint data if the id is valid, otherwise nil. Data format: {x = number, y = number, z = number, type = number, data = string}
function CaveBot.getWaypointDataById(id)

--- Get all waypoints data.
--- This function is a wrapper around the external function cavebotGetWaypoints.
--- @return (table) - Returns all waypoints data. Data format: array of {x = number, y = number, z = number, type = number, data = string}
function CaveBot.getWaypoints()

--- Get waypoints count.
--- This function is a wrapper around the external function cavebotGetWaypointsCount.
--- @return (number) - Returns the total count of waypoints.
function CaveBot.getWaypointsCount()

--- Return debug state.
--- This function is a wrapper around the external function cavebotIsDebugEnabled.
--- @return (boolean) - Returns true if debug is enabled, otherwise false.
function CaveBot.isDebugEnabled()

--- Get the core teleport ids list from the cavebot system.
--- This function is a wrapper around the external function cavebotGetCoreTeleportIds.
--- @return (table) - The list of teleport ids.
function CaveBot.getCoreTeleportIds()

--- Stop the execution of the current waypoint script if there's one running.
--- This function is a wrapper around the external function cavebotStopCurrentScript.
function CaveBot.stopCurrentScript()

--- Set whether to start from the nearest waypoint or not.
--- This function is a wrapper around the external function cavebotSetStartFromNearestWaypoint.
--- @param startFromNearest (boolean) - The flag to enable/disable starting from the nearest waypoint.
function CaveBot.setStartFromNearestWaypoint(startFromNearest)

--- Set the lure ignore list for the cavebot system.
--- This function is a wrapper around the external function cavebotSetLureIgnoreList.
--- @param list (table) - The list of creatures to ignore.
function CaveBot.setLureIgnoreList(list)

--- Set the safety lure settings for the cavebot system.
--- All parameters below is based on Safety Lure Settings section from CaveBot settings window.
--- This function is a wrapper around the external function cavebotSetSafetyLureSettings.
--- @param nearCreatureDistance (number) - The distance to consider a creature near the player.
--- @param nearCreatureCount (number) - The count of creatures to consider near the player.
--- @param avoidStuckTrapCount (number) - The count of creatures to consider a stuck trap.
function CaveBot.setSafetyLureSettings(nearCreatureDistance, nearCreatureCount, avoidStuckTrapCount)

--- Get the safety lure settings for the cavebot system.
--- This function is a wrapper around the external function cavebotGetSafetyLureSettings.
--- @return (table) - The safety lure settings. Data format: {nearCreatureDistance = number, nearCreatureCount = number, avoidStuckTrapCount = number}
function CaveBot.getSafetyLureSettings()

--- Set the lure settings for the cavebot system.
--- All parameters below is based on Lure Settings section from CaveBot settings window.
--- This function is a wrapper around the external function cavebotSetLureSettings.
--- @param creaturesToRun (number) - The count of creatures to run.
--- @param dynamicLure (boolean) - The flag to enable/disable the dynamic lure.
--- @param skipUnreachableCreatures (boolean) - The flag to skip unreachable creatures.
function CaveBot.setLureSettings(creaturesToRun, dynamicLure, skipUnreachableCreatures)

--- Get the lure settings for the cavebot system.
--- This function is a wrapper around the external function cavebotGetLureSettings.
--- @return (table) - The lure settings. Data format: {creaturesToRun = number, dynamicLure = boolean, skipUnreachableCreatures = boolean}
function CaveBot.getLureSettings()

--- Set the end lure settings for the cavebot system.
--- All parameters below is based on End Lure Settings section from CaveBot settings window.
--- This function is a wrapper around the external function cavebotSetEndLureSettings.
--- @param creaturesToStop (number) - The count of creatures to stop.
--- @param creaturesToLeave (number) - The count of creatures to leave.
--- @param tryWalkToCenter (boolean) - The flag to try walk to center.
--- @param creaturesToLeaveByHp (boolean) - The flag to leave creatures by hp.
--- @param creaturesToLeaveByHpValue (number) - The value of hp to leave creatures.
--- @param creaturesToLeaveByHpCount (number) - The count of creatures to leave by hp.
--- @param dontLeaveIfHp (boolean) - The flag to dont leave if hp.
--- @param dontLeaveIfHpValue (number) - The value of hp to dont leave.
--- @param dontLeaveIfHpCount (number) - The count of creatures to dont leave.
function CaveBot.setEndLureSettings(creaturesToStop, creaturesToLeave, tryWalkToCenter, creaturesToLeaveByHp, creaturesToLeaveByHpValue, creaturesToLeaveByHpCount, dontLeaveIfHp, dontLeaveIfHpValue, dontLeaveIfHpCount)

--- Get the end lure settings for the cavebot system.
--- This function is a wrapper around the external function cavebotGetEndLureSettings.
--- @return (table) - The end lure settings. Data format: {creaturesToStop = number, creaturesToLeave = number, tryWalkToCenter = boolean, creaturesToLeaveByHp = boolean, creaturesToLeaveByHpValue = number, creaturesToLeaveByHpCount = number, dontLeaveIfHp = boolean, dontLeaveIfHpValue = number, dontLeaveIfHpCount = number}
function CaveBot.getEndLureSettings()

--- Gets the sell list for the cavebot system.
--- This function is a wrapper around the external function cavebotGetSellList.
--- @return (table) - The sell list. Data format: table of ids.
function CaveBot.getSellList()

--- Set the sell list for the cavebot system.
--- This function is a wrapper around the external function cavebotSetSellList.
--- @param list (table) - The sell list. Data format: table of ids.
function CaveBot.setSellList(list)

--- Gets the refill list for the cavebot system.
--- This function is a wrapper around the external function cavebotGetRefillList.
--- @return (string) - The refill list. Data format: same as in CaveBot settings window.
function CaveBot.getRefillList()

--- Set the refill list for the cavebot system.
--- This function is a wrapper around the external function cavebotSetRefillList.
--- @param list (string) - The refill list. Data format: same as in CaveBot settings window.
function CaveBot.setRefillList(list)

--- Set the auto recorder settings for the cavebot system.
--- All parameters below is based on Auto Recorder Settings section from CaveBot settings window.
--- This function is a wrapper around the external function cavebotSetAutoRecorderSettings.
--- @param nodeDistance (number) - The distance to add a new node/stand between the last node and the player.
--- @param type (number) - The type of auto recorder. 0 = Stand / 1 = Node.
function CaveBot.setAutoRecorderSettings(nodeDistance, type)

--- Set the node settings for the cavebot system.
--- All parameters below is based on Node Settings section from CaveBot settings window.
--- This function is a wrapper around the external function cavebotSetNodeSettings.
--- @param nodeDistance (number) - The distance to consider a node.
function CaveBot.setNodeSettings(nodeDistance)

--- Set the debug HUD settings for the cavebot system.
--- All parameters below is based on Debug HUD Settings section from CaveBot settings window.
--- This function is a wrapper around the external function cavebotSetDebugHUDSettings.
--- @param debugHUD (boolean) - The flag to enable/disable the debug HUD.
--- @param showPath (boolean) - The flag to show the path.
--- @param showSkippedLureCreatures (boolean) - The flag to show the skipped lure creatures.
function CaveBot.setDebugHUDSettings(debugHUD, showPath, showSkippedLureCreatures)

--- Add a special area to the cavebot system.
--- This function is a wrapper around the external function cavebotAddSpecialArea.
--- If you wanna disable wp range, set fromWp and toWp to 0.
--- @param x (number) - The x coordinate of the special area.
--- @param y (number) - The y coordinate of the special area.
--- @param z (number) - The z coordinate of the special area.
--- @param type (number) - The type of the special area. Refer the value as Enums.SpecialAreaType.
--- @param width (number) - The width of the special area.
--- @param height (number) - The height of the special area.
--- @param fromWp (number) - The start waypoint id of the special area.
--- @param toWp (number) - The end waypoint id of the special area.
--- @return (boolean) - Return true if parameters are valid, otherwise return false
function CaveBot.addSpecialArea(x, y, z, type, width, height, fromWp, toWp)

--- Delete a special area by specific id on the cavebot system.
--- This function is a wrapper around the external function cavebotDeleteSpecialArea.
--- @param id (number) - The id of the special area to delete.
function CaveBot.deleteSpecialArea(id)

--- Clear all special areas on the cavebot system.
--- This function is a wrapper around the external function cavebotClearSpecialAreas.
function CaveBot.clearSpecialAreas()

--- Set the current walk mode for the cavebot system.
--- This function is a wrapper around the external function cavebotSetWalkMode.
--- @param mode (number) - The walk mode to set. Refer the value as Enums.WalkMode.
function CaveBot.setWalkMode(mode)

--- Sets the walk delay for the cavebot system. Only for arrow keys!
--- This function is a wrapper around the external function cavebotSetWalkDelay.
--- @param delay (number) - The delay to set in milliseconds.
function CaveBot.setWalkDelay(delay)

--- Disable player walkthrough for the cavebot system.
--- This function is a wrapper around the external function cavebotDisablePlayerWalkthrough.
--- @param disabled (boolean) - The flag to enable/disable the player walkthrough.
function CaveBot.disablePlayerWalkthrough(disabled)

--- Set the teleport ids for the cavebot system. The ids list can be found on CaveBot settings window at [Core Settings] section.
--- This function is a wrapper around the external function cavebotSetCoreTeleportIds.
--- @param ids (table) - The list of teleport ids.
function CaveBot.setCoreTeleportIds(ids)

--- Enable auto recorder.
--- This function is a wrapper around the external function cavebotEnableAutoRecorder.
--- @param enabled (boolean) - The flag to enable/disable the auto recorder.
function CaveBot.enableAutoRecorder(enabled)

--- Pause the cavebot system for a specific time in milliseconds.
-- This function is a wrapper around the external function cavebotPause.
-- @param milliseconds (number) - The time to pause the cavebot system in milliseconds. If the specified time is 0, the cavebot will resume.
function CaveBot.pause(milliseconds)

--- Save all waypoints to a file.
-- This function is a wrapper around the external function cavebotSaveFile.
-- @param file (string) - The file name to save the waypoints. The path is relative to the Documents/ZeroBot directory.
-- @return (boolean) - Return true if the action succeeded, or false if the file name is invalid. Remember: this function will not return the result of file saving.
function CaveBot.saveFile(fileName)

--- Load all waypoints from a file.
-- This function is a wrapper around the external function cavebotLoadFile.
-- @param file (string) - The file name to load the waypoints. The path is relative to the Documents/ZeroBot directory.
-- @return (boolean) - Return true if the cavebot loaded the file successfully, or false if failed to load.
function CaveBot.loadFile(fileName)
```

<!-- current-core-api:start -->
## Waypoint and settings inspection

- `CaveBot.getWaypoints()` returns the waypoint array. Each entry has `x`, `y`, `z`, `type`, and `data`.
- `CaveBot.getWaypointsCount()` returns the current number of waypoints.
- `CaveBot.isDebugEnabled()` reports whether CaveBot debug mode is enabled.
- `CaveBot.getCoreTeleportIds()` returns the teleport item IDs used by the CaveBot core.
- `CaveBot.stopCurrentScript()` stops the currently running Script waypoint, if any.
- `CaveBot.setStartFromNearestWaypoint(startFromNearest)` controls whether CaveBot starts at the nearest waypoint.

## Lure, trade, refill, and debug settings

- `CaveBot.getSafetyLureSettings()` returns `{nearCreatureDistance, nearCreatureCount, avoidStuckTrapCount}`.
- `CaveBot.getLureSettings()` returns `{creaturesToRun, dynamicLure, skipUnreachableCreatures}`.
- `CaveBot.getEndLureSettings()` returns the current End Lure configuration.
- `CaveBot.getSellList()` and `CaveBot.setSellList(list)` read and replace the item-ID sell list.
- `CaveBot.getRefillList()` and `CaveBot.setRefillList(list)` read and replace the refill text in the same format used by the CaveBot settings window.
- `CaveBot.setDebugHUDSettings(debugHUD, showPath, showSkippedLureCreatures)` updates the three Debug HUD options from the CaveBot settings window.
<!-- current-core-api:end -->
