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
  <img src="/img/cavebot_settings_window_2.png" />
  <p>CaveBot Advanced Settings</p>
</div>

### Ignore Lure List
In the text field shown in the image above, please enter the names of monsters that the cavebot lure system should ignore. Enter each monster name on a separate line.

### Safety Lure Settings
**Near Creature Distance:** The distance in tiles between the player and the creature that CaveBot luring algorithm will consider as 'near'.<br />To disable this feature just set it as 0.

**Near Creatures Count:** The minimum number of creatures that can be considered 'near' the player at the same time.\nRemember: this value works in conjunction with the 'Near Creature Distance' setting.  <br />Example: if set to 3 and there are 3 creatures or more near the player, the character will run to avoid accumulating too many creatures. The bot will consider the creature as 'near' based on the 'Near Creature Distance' setting.

**Avoid Stuck/Trap**: Minimum number of blocked tiles around your character to force walk and avoid getting stuck/trapped. This considers tiles and mobs in a 1x1 area.<br />Example: if you set 7, then the bot will force walk if there's 7 or more blockable tiles around you.<br />To disable this feature, set it to 0.

### Lure Settings
**Creatures To Run**: assuming you are luring monsters at the "Start Lure" waypoint, the bot will only walk faster and ignore creatures **without waiting for them** if it reached the configured value. Example: if you set the value to 3, then the bot will only walk without waiting if there are 3 or more creatures, thus ensuring at least 3 creatures in your Lure.

**Dynamic Lure**: If enabled, your CaveBot will be treated as a dynamic lure hunt type. The settings will be the same of default lure settings, based on Ignore Lure List, Lure Settings, End Lure Settings and Safety Lure Settings.<br />Example: for simple test, you can record all the CaveBot using stand/nodes and enable this option.<br />Important: this function isn't compatible with Start Lure, End Lure, Dynamic Start Lure and Dynamic End Lure waypoints. It should be used for simple CaveBot's hunts.

### End Lure Settings
**Creatures To Leave**: assuming your character reached the "End Lure" waypoint and is killing the monsters to finish the lure, this setting defines how many creatures must remain to consider the lure finished and proceed to the next waypoint. Example: if you set the value to 3, then the bot will understand that there should be 3 or fewer creatures remaining to finish killing the creatures and proceed.

**Creatures To Stop**: assuming your character reached the "End Lure" waypoint, the bot will base on this setting to decide whether to stop your character or not to kill the creatures around. Example: if you set the value to 3, then the bot will only stop to kill the creatures of the lure if there are 3 or more creatures, otherwise, it proceeds normally.

**Note**: Creatures To Stop works in conjunction with Creatures To Leave. The first defines if the character should stop at the End Lure waypoint, and the second defines how many monsters need to be left to return to the normal CaveBot flow.

**Try Walk To center**: If enabled, the character will try walk to the center of the end lure waypoint. If it's not possible, the bot will follow the default behavior.<br />Important: the waypoint validation will be the same, based on node distance settings.<br />This option applies for the following waypoints: End Lure.

## Auto Recorder Settings
**Distance**: SQM's distance between auto recorded waypoints.

**Type**: The waypoint type of auto recorded waypoints

## Node Settings
**Distance**: The distance between the player and the 'node' waypoint that CaveBot will consider as reached.
