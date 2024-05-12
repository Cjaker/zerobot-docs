---
sidebar_position: 4
---

# Sounds
Play default & custom sounds

```lua
Sound.play(filePath, isDefaultSound)
```

**Purpose and Usage**
### 1. `Sound.play`
**Parameters**

- `filePath`: A string specifying the path to the .wav sound file to be played. This path must be an absolute path or relative to the game's script directory.
- `isDefaultSound`: If is true, the function will consider the filePath as a file name inside Documents/ZeroBot/Scripts/sounds directory.

**Purpose:** The `Sound.play` function is designed to augment the gaming experience by providing audio feedback in response to specific game events. It enables the playback of sound files within the game environment, leveraging `.wav` files specified by the developer.

### Usage:
```lua
-- Define the path to the sound file
local soundPath = Engine.getScriptsDirectory().."\\capacitySound.wav"

-- Set up a recurring check on the player's capacity
Timer("CheckCap", function()
    -- Check if the player's capacity is below the threshold
    if Player.getCapacity()/100 <= 400 then
        -- Play the sound as an alert
        Sound.play(soundPath)
    end
end, 5000) -- The timer is set to check this condition every 5000 milliseconds
```

### Notes
- Ensure that the sound file exists at the specified `soundPath` and is in the `.wav` format for compatibility.
- Adjust the path to the sound file and the capacity threshold as necessary to fit the game's specific requirements and directory structure.
- This function is part of a larger framework for interacting with game elements and requires proper integration into the game's scripting environment to function as expected.