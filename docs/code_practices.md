---
sidebar_position: 2
---

# 👨‍💻 Code Practices

```lua
-- LOOPING - WHILE TRUE
-- The bad practice example uses a while true loop with a wait function, which can lead to high CPU usage and potentially freeze the application due to continuous execution without efficient resource management. On the other hand, the good practice example uses a Timer, providing a more resource-efficient way to execute the same function at regular intervals. This approach allows better control over the execution and avoids the continuous strain on system resources, making it a more optimized and stable solution.

-- 🚫 Bad practice
while true do
    print("Hello World")
    wait(100)
end

-- ✅ Good practice
Timer("HelloWorld", function()
    print("Hello World")
end, 100)

--------------------------
--------------------------
--------------------------
-- ENUMS
-- In the folder core/enums.lua, we have several enums that can be used to make our development easier.

-- 🚫 Bad practice
Spells.groupIsInCooldown(2)

-- ✅ Good practice
Spells.groupIsInCooldown(Enums.SpellGroups.SPELLGROUP_HEALING)
--------------------------
--------------------------
--------------------------
-- Index 0
-- Generally, the functions in ZeroBot that return tables start with index 0, however, Lua starts with index 1, so we have to make an adjustment so that it starts with index 0.

-- 🚫 Bad practice
local containers = Player.getContainers()
for i = 1, #containers do
    print(containers[i])
end

-- ✅ Good practice
local containers = Player.getContainers()
for i = 0, #containers do
    print(containers[i])
end
--------------------------
--------------------------
--------------------------
-- Print tables for debugging

-- Method 1
local tableVar = {"Hello", "World"}
for index, value in pairs(tableVar) do
    print(index, value)
end

-- Method 2
local tableVar = {"Hello", "World"}
print(JSON.encode(tableVar))
--------------------------
--------------------------
--------------------------
-- Hotkeys handling
-- The better practice in the provided functions examples lies in efficiency and organization. The second approach uses an event-based model, only executing when a key is pressed, thus saving resources and ensuring quicker response. It avoids redundant computations by parsing the key combination once, outside of any function. This makes the code cleaner, more efficient, and easier to maintain compared to the repetitive and resource-intensive first approach using a continuous timer check.

-- 🚫 Bad practice
local keySwitch = "x"
Timer("keys", function()
    local retStatus, retModifiers, retKey = HotkeyManager.parseKeyCombination(keySwitch)
    if retStatus then
        if Client.isKeyPressed(retKey, retModifiers) then
            print("Hello World")
        end
    end
end, 50)

-- ✅ Good practice
local keySwitch = "x"
local retStatus, retModifiers, retKey  = HotkeyManager.parseKeyCombination(keySwitch)

if not retStatus then
    print("Invalid hotkey")
    return
end

function OnKeyPressed(key, modifier)
    if retKey == key and retModifiers == modifier then
        print("Hello World")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS,OnKeyPressed)
```