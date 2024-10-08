---
sidebar_position: 1
---

# Getting Started
## IMPORTANT
THIS FEATURE WILL BE AVAILABLE ON 1.7.0.0 VERSION!

CaveBot is in BETA phase, so by using it you agreed the notes written here: [BETA](../about_beta)

## Brief Explanation
A cavebot is an automated script that allows players to navigate through caves and dungeons and engage in combat with creatures.

It simulates player actions such as walking, NPC interactions, and custom scripting, making it possible to perform repetitive tasks and gain experience or resources efficiently.

To use a cavebot effectively, it often needs to be configured alongside other bot functions like Healing, Targeting, and Magic Shooter to ensure the character can survive and maximize gains during its automated activities.

The cavebot itself is composed of waypoints, which are the coordinates or actions that guide your character on where to walk or what actions to perform.

## Recommendations
- Have a complete minimap of the game
- If you want to lure, use the Start Lure and End Lure waypoints
- Avoid using lure waypoints without having node type waypoints, if the path is long
- Always save your configured CaveBot
- For specific actions, scripting is recommended (we do not have ready snippets at the moment)
- Avoid setting waypoints close to holes, teleports, etc.
- Avoid ending lures near holes, teleports, etc.
- Always make short waypoints if you **love** saving your PC's processing power!
- It is recommended to use waypoints of the 'Stand' or 'Node' type before using any other types of waypoints that are not \{Stand, Node, Start Lure, End Lure\}, especially when these waypoints are on different floors.
- In case of accidental falls and climbs on stairs, the cavebot will rely on the Z position of the currently selected waypoint. Make sure your waypoints are well-defined. This is applied for waypoints of type: Stand, Node, Start Lure, End Lure and Script.
- The cavebot works in conjunction with the other bot functions. So, to use it effectively, you first need to configure your Healing, Targeting, Hunting > Magic Shooter, etc. tabs according to your preferences.
- New: there's a good tip discovered recently, if you fall in a hole for example and there's a tile that you can climb up back by using a rope, you can put a "Rope" waypoint there and the bot will use it to climb up back. (It's worth for cases that need Rope or Use a Ladder, for cases like stairs that you step in and your character goes up/down, the bot will automatically climb up back).

## Targeting Recommendations
**[Targeting - Distance for LURE mode!!!]**\
**Distance 'Auto' Mode:** avoids creatures approaching your character + ignores your distance setting + automatically selects a 'central' position to walk around it.

**Distance Custom Value**: considers your distance setting + automatically selects a 'central' position to walk around it.

**[Tips]**
- If you want to keep away from creatures in general = Auto
- If you want to keep away from only one creature = Distance

**[Targeting Recommendations for vocations - LURE mode!!!]**\
**[Mages]**\
Distance Mode: Auto ||| Count: 1 ||| Proximity: 4 or All

**[Knight & RP]**\
Distance Mode: Stand ||| Count: 1 ||| Proximity: 1 or All for RP's

**[RP low gear]**\
Distance Mode: Auto ||| Count: 1 ||| Proximity: 4 or All