---
sidebar_position: 5
---

# Timer
Create and run loop cycle functions

```lua
Timer(name, timerFunction, timeDelay, autoStart = true)
Timer.new(name, timerFunction, timeDelay, autoStart = true)
Timer:name()
Timer:start()
Timer:stop()
```

### Code

```lua
--- Destroy a timer by name.
-- @param name (string) - The name of the timer to destroy.
function destroyTimer(name)

--- Constructor for the Timer class.
-- @param name (string) - The name of the timer.
-- @param timerFunction (function) - The function to execute when the timer triggers.
-- @param timeDelay (number) - The delay between timer triggers, in milliseconds.
-- @param autoStart (boolean) - Whether to start the timer automatically.
-- @return A new Timer object.
function Timer.new(name, timerFunction, timeDelay, autoStart)

--- Run the timer's function. No need to use it directly, create timer by using new constructor
-- @return The result of the timer's function.
function Timer:run()

--- Get the timer's name.
-- @return The name of the timer.
function Timer:name()

--- Start the timer.
function Timer:start()

--- Update the timer's last trigger time. No need to use it directly.
-- @param delayTime (number) - The new delay time for the timer, in milliseconds.
function Timer:update(delayTime)

--- Stop the timer.
function Timer:stop()

---- Check if timer is active
function Timer:isActive()
```