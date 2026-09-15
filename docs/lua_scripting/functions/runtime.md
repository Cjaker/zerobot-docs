---
sidebar_position: 0
---

# Lua runtime

ZeroBot embeds LuaJIT and automatically loads the files in `Documents/ZeroBot/Scripts/core`. Those files expose the globals documented in this section; scripts must not load the core files again.

## ZeroBot globals

### `wait(milliseconds)`

Pauses the current script for the requested number of milliseconds. A negative value raises an error.

Use `wait` to sequence a short series of actions:

```lua
Game.talk("hi", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
wait(500)
Game.talk("trade", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
```

`wait` blocks the current script while it sleeps. Use a `Timer` for repeated or long-running work.

### `dofile(path)`

Loads and executes another Lua file. Relative paths are resolved from `Documents/ZeroBot/Scripts`.

Unlike the standard Lua function, ZeroBot's implementation returns `true` on success or `nil, errorMessage` on failure:

```lua
local ok, err = dofile("helpers_lib/inventory.lua")
if not ok then
    print(err)
    return
end
```

Prefer relative paths in scripts that will be shared with other users.

## Modified standard functions

- `print(...)` joins compatible string/number arguments with tab characters and writes the result through ZeroBot's debug output. Use `JSON.encode(value)` before printing a table.
- `require("ffi")` always raises an error in the production scripting environment.
- `os.execute(...)`, `io.popen(...)`, and `os.remove(...)` are disabled. Calling them does not perform the requested operation; it only prints a disabled-function message.
- The core seeds Lua's random number generator with `os.time()` while loading.

These restrictions are part of the production scripting environment. Shared scripts must not depend on bypassing them.
