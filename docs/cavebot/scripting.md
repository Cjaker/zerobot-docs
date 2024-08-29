---
sidebar_position: 3
---

# Scripting

## Brief Explanation
The waypoint of type `Script` allows you to write your own custom actions.

You can use any function avaiable at [Lua Scripting] section.

After each action, it is recommended to add some delay, with the function `wait(delay)`.

To demonstrate a few of the most common use cases, here goes some code snippets:

### Use an item

```lua
local itemId = 3725
Game.useItem(itemId)
wait(1000)
```

### Talk to NPC

```lua
Game.talk('hi', Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
```

### Use magic

```lua
Game.talk('exani hur "up"', Enums.TalkTypes.TALKTYPE_SAY)
```

### Change direction

Useful for exani hur "up/down" and a few other cases.

```lua
local direction = Enums.Directions.NORTH
Game.turn(direction)
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
local pos = Map.getCameraPosition() -- your current position
Map.useItemOnGround(pos.x, pos.y, pos.z)
wait(1000)
```

This will use the item on your current position.\
To use on your left: `pos.x-1`\
To use on our right: `pos.x+1`\
To use on the north: `pos.y-1`\
To use on the south: `pos.y+1`

Note that if an item or creature is standing on this position, this snippet alone may not work.

# Update 1.7.5.5
Waypoints of type script now supports Game events and Timers.
After you use them you should destroy the timer and unregister the event.

If you keep the timer or game event running the script will keep running indefinitely.

### Example:
```LUA
function sellCycle()
    gameTalk("hi", 1)
    wait(500)
    gameTalk("trade", 12)
    wait(500)
    Npc.sell(23721, 1, true)
    wait(500)
end

function messageCallback(messageData)
    if not messageData then return end
    local message = messageData.text
    print("message " ..message)
    if message:lower():find("you have no items in your loot pouch.") then
        destroyTimer("sell-loot") -- destroying the timer
        Game.unregisterEvent(Game.Events.TEXT_MESSAGE, messageCallback) -- unregistering the event
    end
end

Game.registerEvent(Game.Events.TEXT_MESSAGE, messageCallback)

Timer("sell-loot", function()
    sellCycle()
end, 1000)
```