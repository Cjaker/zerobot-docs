---
sidebar_position: 5
---

# CaveBot Settings
## Main Options
<div class="text--center">
  <img src="/img/cavebot_settings.png" />
  <p>CaveBot Settings</p>
</div>

**Load** -> loads a specific CaveBot

**Save** -> saves the current CaveBot

**Settings** -> general settings of the CaveBot

## CaveBot Settings - Advanced
<div class="text--center">
  <img src="/img/cavebot_settings_window.png" />
  <p>CaveBot Advanced Settings</p>
</div>

### Ignore Lure List
In the text field shown in the image above, please enter the names of monsters that the cavebot lure system should ignore. Enter each monster name on a separate line.

### Lure Settings
**Creatures To Run**: assuming you are luring monsters at the "Start Lure" waypoint, the bot will only walk faster and ignore creatures **without waiting for them** if it reached the configured value. Example: if you set the value to 3, then the bot will only walk without waiting if there are 3 or more creatures, thus ensuring at least 3 creatures in your Lure

**Avoid Stuck/Trap**: Minimum number of blockable tiles around your character in a 1x1 area to consider it safe to force step-walk and avoid getting stuck. To disable this feature, set it to 0.

### End Lure Settings
**Creatures To Leave**: assuming your character reached the "End Lure" waypoint and is killing the monsters to finish the lure, this setting defines how many creatures must remain to consider the lure finished and proceed to the next waypoint. Example: if you set the value to 3, then the bot will understand that there should be 3 or fewer creatures remaining to finish killing the creatures and proceed.

**Creatures To Stop**: assuming your character reached the "End Lure" waypoint, the bot will base on this setting to decide whether to stop your character or not to kill the creatures around. Example: if you set the value to 3, then the bot will only stop to kill the creatures of the lure if there are 3 or more creatures, otherwise, it proceeds normally.

## Auto Recorder Settings
**Distance**: SQM's distance between auto recorded waypoints.

**Type**: The waypoint type of auto recorded waypoints

## Node Settings
**Distance**: The distance between the player and the 'node' waypoint that CaveBot will consider as reached.
