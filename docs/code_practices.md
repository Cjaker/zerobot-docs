---
sidebar_position: 3
---

# 👨‍💻 Code Practices

## Repeated work

An infinite `while` loop keeps the script's initial execution occupied, even when it sleeps with `wait`. Use a `Timer` so initialization can finish and the task can be started, stopped, or destroyed explicitly.

```lua
-- Avoid for recurring background work
while true do
    print("Hello World")
    wait(100)
end

-- Preferred
Timer("HelloWorld", function()
    print("Hello World")
end, 100)
```

## Enums

Use the names from `Enums` instead of unexplained numeric constants:

```lua
-- Avoid
Spells.groupIsInCooldown(2)

-- Preferred
Spells.groupIsInCooldown(Enums.SpellGroups.SPELLGROUP_HEALING)
```

## Debugging tables

`print` does not format a table automatically. Iterate through it or encode serializable data:

```lua
local tableVar = {"Hello", "World"}

for index, value in pairs(tableVar) do
    print(index, value)
end

print(JSON.encode(tableVar))
```

## Hotkeys

Parse a combination once and use the shortcut event when the action should run once per key press. Poll with `Client.isKeyPressed` only when you specifically need held-key state.

```lua
local success, expectedModifiers, expectedKey =
    HotkeyManager.parseKeyCombination("ctrl+x")

if not success then
    print("Invalid hotkey")
    return
end

local function onKeyPressed(key, modifiers)
    if key == expectedKey and modifiers == expectedModifiers then
        print("Hello World")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, onKeyPressed)

-- When the callback is no longer needed:
Game.unregisterEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, onKeyPressed)
```
