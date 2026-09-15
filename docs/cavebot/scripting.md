---
sidebar_position: 3
---

# Scripting

A `Script` waypoint executes Lua when CaveBot reaches it. Prefer a dedicated waypoint type when one exists; use a script for actions that need custom conditions or a sequence of API calls.

All public functions in [Lua Scripting](../lua_scripting/) are available. Core modules are already loaded.

Use `wait(milliseconds)` only between actions that need sequencing. It blocks the current waypoint script, so it should not be used for a permanent loop.

## Common actions

### Use an item

```lua
local itemId = 3725
Game.useItem(itemId)
```

### Talk to NPC

```lua
Game.talk("hi", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
wait(500)
Game.talk("trade", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
```

The NPC must be close enough and the selected talk type must be supported by the target client/server.

### Cast a spell

```lua
Game.talk('exani hur "up"', Enums.TalkTypes.TALKTYPE_SAY)
```

### Change direction

```lua
Game.turn(Enums.Directions.NORTH)
```

```lua
Enums.Directions.NORTH
Enums.Directions.EAST
Enums.Directions.SOUTH
Enums.Directions.WEST
```

### Load a helper file

```lua
local ok, err = dofile("helpers_lib/supplies.lua")
if not ok then
    print(err)
    return
end

someFunction()
```

Relative paths passed to `dofile` start at `Documents/ZeroBot/Scripts`.

### Use the top item on a tile

Prefer the `Use` waypoint for a fixed route. For a calculated position:

```lua
local pos = Map.getCameraPosition()
local target = {
    x = pos.x + 1,
    y = pos.y,
    z = pos.z,
}

local used = Game.useItemFromGround(target.x, target.y, target.z)
if not used then
    print("Could not use the item on the target tile")
end
```

Coordinate offsets are:

- west: `x - 1`
- east: `x + 1`
- north: `y - 1`
- south: `y + 1`

The action uses the item selected by the client's tile stack. A creature or another item on the tile can change which item is used.

## Events and timers

Script waypoints support `Game` events and `Timer`. CaveBot keeps the waypoint script active while it still has registered callbacks or timers. Destroy every timer and unregister the same callback reference when the work finishes.

```lua
local function sellCycle()
    Game.talk("hi", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
    wait(500)
    Game.talk("trade", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
    wait(500)
    Npc.sell(23721, 1, true)
end

local function messageCallback(messageData)
    if not messageData or not messageData.text then
        return
    end

    if messageData.text:lower():find(
        "you have no items in your loot pouch.",
        1,
        true
    ) then
        destroyTimer("sell-loot")
        Game.unregisterEvent(Game.Events.TEXT_MESSAGE, messageCallback)
    end
end

Game.registerEvent(Game.Events.TEXT_MESSAGE, messageCallback)
Timer("sell-loot", sellCycle, 1000)
```

If a script must be aborted externally, use `CaveBot.stopCurrentScript()`.
