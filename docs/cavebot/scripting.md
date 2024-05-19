---
sidebar_position: 3
---

# Scripting

## Brief Explanation
The `Script` waypoint allows you to write your own custom actions.

You can use any function avaiable at [Lua Scripting] section.

After each action, it is recommended to add some delay, with the function `wait( delay )`.

To demonstrate a few of the most common use cases, here goes some code snippets:

### Use an item

```lua
Game.useItem( Item_ID )
wait(1000)
```

### Talk to NPC

```lua
Game.talk('words', Enums.TalkTypes.TALKTYPE_PRIVATE_PN)`
```

### Use magic

```lua
Game.talk('spell words', Enums.TalkTypes.TALKTYPE_SAY)
```

### Change direction

Useful for exani hur "up/down" and a few other cases.

```lua
Game.turn( Direction )
```

A Direction can be one of the following:
```lua
Enums.Directions.NORTH
Enums.Directions.SOUTH
Enums.Directions.EAST
Enums.Directions.WEST
```

### Use functions defined in a lua file

This can be useful to activate scripts, for example scripts to buy supplies or sell items.

You can find scripts like these on our Discord, in the `scripts-gerais` section.

```lua
dofile("fileName.lua")
someFunction()
```

### Use object on the ground

Useful to open doors, click on ladders, sewer grates, minecarts, etc.

You can do this already with the waypoint type `Use`, but you can get really creative with this snippet and a little bit of coding.

```lua
local pos = Map.getCameraPosition()
Map.useItemOnGround(pos.x, pos.y, pos.z)
wait(1000)
```

This will use the item on your current position.\
To use on your left: `pos.x-1`\
To use on our right: `pos.x+1`\
To use on the north: `pos.y-1`\
To use on the south: `pos.y+1`

Note that if an item or creature is standing on this position, this snippet alone may not work.