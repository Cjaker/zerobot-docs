---
sidebar_position: 3
---

# HotkeyManager

Convert a human-readable shortcut into the numeric values used by ZeroBot keyboard APIs.

```lua
HotkeyManager.parseKeyCombination(combination)
```

The combination is case-insensitive. Separate its parts with spaces, plus signs, or both. Supported modifiers are `ctrl`, `alt`, `shift`, and `numlock`; the non-modifier key must exist in `HotkeyManager.keyMapping`.

Return values:

1. `true` on success or `false` for an unknown key.
2. A numeric modifier bitmask compatible with `Enums.FlagModifiers`, or `nil` on failure.
3. The numeric key code, or `nil` on failure.

```lua
local valid, expectedModifier, expectedKey =
    HotkeyManager.parseKeyCombination("Ctrl+Shift+K")

if not valid then
    print("Invalid shortcut")
    return
end

local function onShortcut(key, modifier)
    if key == expectedKey and modifier == expectedModifier then
        print("Ctrl+Shift+K pressed")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, onShortcut)
```

For state polling instead of press events, pass the returned key and modifier values to `Client.isKeyPressed(key, flags)`.

Only one non-modifier key should be provided. If more than one is present, the parser keeps the last one; this is accepted by the implementation but should not be relied upon as a shortcut format.
