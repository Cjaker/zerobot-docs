---
sidebar_position: 4
---

# Sound

Play a `.wav` file asynchronously.

```lua
Sound.play(filePath, isDefaultSound)
```

## `Sound.play(filePath, isDefaultSound)`

- `filePath` is the sound file name or path.
- When `isDefaultSound` is `true`, `filePath` is resolved inside `Documents/ZeroBot/Scripts/sounds`.
- When it is `false` or omitted, the path is passed directly to the Windows sound API. Use an absolute path to avoid depending on the process working directory.

The function returns `true` when Windows accepts the playback request and `false` otherwise. It also returns `false` while ZeroBot alarms are paused, or when the default sounds directory cannot be resolved.

```lua
-- Documents/ZeroBot/Scripts/sounds/alert.wav
local played = Sound.play("alert.wav", true)
if not played then
    print("Could not play alert.wav")
end
```

For a file elsewhere:

```lua
local path = Engine.getScriptsDirectory() .. "\\my_script\\warning.wav"
Sound.play(path, false)
```

Use an existing `.wav` file. Playback is asynchronous, so the call does not wait for the sound to finish.
