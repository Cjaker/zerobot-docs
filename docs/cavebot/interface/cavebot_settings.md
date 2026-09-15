---
sidebar_position: 5
---

# CaveBot settings

## Main controls

<div class="text--center">
  <img src="/img/cavebot_settings.png?v=2" alt="CaveBot main controls" />
  <p>CaveBot main controls. The exact layout may vary between ZeroBot versions.</p>
</div>

- **Load** loads a saved CaveBot configuration.
- **Save** saves the current configuration.
- **New** clears the current configuration so a new one can be created. Unsaved changes are lost after confirmation.
- **Settings** opens the advanced settings described below.
- **Special Areas** opens the area editor.
- **Enable Waypoint Colors** uses different colors to identify waypoint types.
- **Encrypt CaveBot on Save** encrypts the file when it is saved. An encrypted CaveBot cannot be converted back to its readable form, so keep an unencrypted backup.

## Advanced settings

<div class="text--center">
  <img src="/img/cavebot_settings_window_2.png?v=3" alt="CaveBot advanced settings" />
  <p>CaveBot advanced settings. Newer versions may contain additional fields.</p>
</div>

### Ignore Lure List

Monster names that the lure logic must ignore, one name per line.

### Safety Lure Settings

- **Near Creature Distance** defines how far, in tiles, a creature may be to count as near. Use `0` to disable this condition.
- **Near Creatures Count** defines how many near creatures trigger the safety behavior. It is evaluated together with **Near Creature Distance**.
- **Avoid Stuck Trap** defines how many blocked adjacent tiles or creatures trigger a forced-walk attempt. Use `0` to disable it.

These settings depend on the map and creature information supplied by the client and server. Test them on the target OTServer before unattended use.

### Lure Settings

- **Creatures To Run** is the minimum number of considered creatures required for the character to continue the lure without waiting for all of them.
- **Dynamic Lure** applies lure behavior to a regular route. Do not combine it with **Start Lure**, **End Lure**, **Dynamic Start**, or **Dynamic End** waypoints.
- **Skip Unreachable Creatures** excludes creatures for which the bot cannot calculate a reachable route. This costs additional processing time because routes may be calculated for multiple creatures.

### End Lure Settings

- **Creatures To Stop** is the minimum number of creatures required for the character to stop and begin killing at an **End Lure** waypoint.
- **Creatures To Leave** is the maximum number of remaining creatures at which the CaveBot may leave the killing spot.
- **Creatures To Leave By HP%** is a fallback condition used when **Creatures To Leave** was not satisfied. The bot may leave when no more than the configured count of creatures have HP above the configured percentage.
- **Don't Leave If HP%-** keeps the character at the spot when the configured count condition finds weakened creatures at or below the selected HP percentage.
- **Try Walk To Center** makes the character try to reach the center of the **End Lure** waypoint. Reaching it still follows the configured node distance.

HP-based conditions are useful for specialized routes, but their result depends on which creatures the client currently exposes to the bot. Validate the values with the CaveBot Debug HUD.

## Auto Recorder Settings {#auto-recorder-settings}

- **Distance** is the tile interval between automatically recorded waypoints.
- **Type** is the waypoint type created by the recorder.

The recorder creates supported movement and interaction waypoints; review the generated route before using it unattended.

## Node Settings

**Distance** is the maximum distance from a node-like waypoint at which it is considered reached. This setting also affects the waypoint types that use node-distance validation.

## Walking Settings

- **Map Walk** uses the map-click pathfinding method.
- **Arrow Keys** uses the arrow-key walking logic. This mode is marked as beta in the current interface.
- **Walk Delay** is the delay, in milliseconds, between steps made by the Arrow Keys method.
- **Disable Player Walkthrough** makes CaveBot treat other players as blocking even when the server tells the client that walking through them is allowed. Enable it only on servers where that information is incorrect and causes the route to get stuck.

## Core Settings

**Teleport IDs** is a comma-separated list of teleport item IDs used by the Auto Recorder and other CaveBot internals. Change it only when the target OTServer uses a custom teleport ID or an incompatible ID is present.

## Special Areas

Special Areas mark regions that the movement algorithm should avoid.

- **Width** and **Height** define the area dimensions.
- **Wp. Range** limits the area to an inclusive waypoint-ID range. For example, `5-10` applies from waypoint 5 through 10.
- **Type** selects whether the area applies to CaveBot movement, Targeting movement, or both (**All**).
- **Direction** chooses where the new area is created relative to the character.
- **Extended If Drunk** increases every special area's width and height by one while the character is drunk.

After creating an area, use the Debug HUD to confirm its position, dimensions, and waypoint range.
