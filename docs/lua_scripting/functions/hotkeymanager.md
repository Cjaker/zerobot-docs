---
sidebar_position: 3
---

# HotkeyManager
Hotkey library helper

```lua
HotkeyManager.parseKeyCombination(combination)
```

**Purpose and Usage**
### 1. `HotkeyManager.parseKeyCombination`
**Parameters**

- `combination`: A string representing the key combination, where parts are separated by spaces or plus signs (`+`). Valid parts include modifier keys (`ctrl`, `alt`, `shift`, `numlock`) and any key represented in the `HotkeyManager.keyMapping`.

**Return Values**
- **Boolean:** `true` if the parsing was successful, `false` otherwise.
- **Modifiers:** A numeric bitmask representing the modifiers that were parsed from the combination. This bitmask corresponds to flags defined in `Enums.FlagModifiers`.
- **Key:** A string representing the key code of the non-modifier key part of the combination. If the combination is invalid, this will be `nil`.

### Usage:
```lua
-- Attempt to parse the key combination
local success, modifiers, key = HotkeyManager.parseKeyCombination("ctrl+shift+K")

-- Check if the parsing was successful
if success then
    print("Modifiers bitmask:", modifiers)
    print("Key code:", key)

    -- Set up a timer to check if the key combination is pressed
    Timer("KeyTest", function()
        -- Use the parsed key and modifiers to check if the specified combination is pressed
        if Client.isKeyPressed(key, modifiers) then
            print("The key combination has been pressed.")
        end
    end, 50)
else
    print("Invalid key combination.")
end
```

### Notes
- Ensure that all keys and modifiers are correctly spelled and supported by `HotkeyManager.keyMapping` and `Enums.FlagModifiers`.
- The function does not support multiple non-modifier keys in a single combination. If such a scenario is encountered, only the last key in the sequence is considered.