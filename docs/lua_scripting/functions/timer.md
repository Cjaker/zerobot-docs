---
sidebar_position: 5
---

# Timer

Run a function repeatedly without blocking the script with a `while` loop.

```lua
Timer(name, timerFunction, timeDelay, autoStart)
destroyTimer(name)
Timer.new(name, timerFunction, timeDelay, autoStart)
Timer:run()
Timer:name()
Timer:start()
Timer:update(delayTime)
Timer:stop()
Timer:isActive()
```

`Timer(...)` is an alias for `Timer.new(...)`.

## Creating a timer

```lua
local statusTimer = Timer("status", function()
    print("HP", Player.getHealthPercent())
end, 1000)
```

Parameters:

- `name`: unique name used to identify the timer.
- `timerFunction`: callback run on each trigger. A function is recommended; a global function name string is also resolved when the timer runs.
- `timeDelay`: interval in milliseconds. It defaults to `100` when omitted.
- `autoStart`: starts the timer immediately unless explicitly set to `false`.

Creating another timer with the same name first destroys the previous timer. Keep the returned object; in the current core, calling `Timer.new(name)` without a callback is not a reliable way to retrieve an existing timer.

## Lifecycle

```lua
local timer = Timer("manual", function()
    print("tick")
end, 500, false)

print(timer:name())       -- manual
print(timer:isActive())   -- false

timer:start()
timer:stop()
timer:run()               -- runs the callback immediately

destroyTimer("manual")    -- stops and removes the named timer
```

- `start()` activates the timer and resets its trigger state.
- `stop()` deactivates it without removing it.
- `isActive()` returns its current active state.
- `name()` returns its name.
- `run()` invokes the callback immediately and returns the callback result.
- `destroyTimer(name)` stops and removes the first timer with that name.

`update(delayTime)` is used internally after a trigger. If called manually, it postpones the next eligible trigger relative to the current clock; it does **not** replace the timer's configured recurring interval.

Prefer unique, script-specific names to avoid replacing a timer created by another script.
