---
sidebar_position: 7
---

# Custom Modal Window

Create a small ZeroBot modal window with script-defined buttons.

```lua
CustomModalWindow(caption, description)
CustomModalWindow.new(caption, description)
CustomModalWindow:getId()
CustomModalWindow:setCaption(caption)
CustomModalWindow:setDescription(description)
CustomModalWindow:setCallback(callback)
CustomModalWindow:addButton(buttonText)
CustomModalWindow:destroy()
```

`CustomModalWindow(...)` is an alias for `CustomModalWindow.new(...)`. Both arguments are optional. During construction, newline characters are removed from `description` and the result is truncated to 54 characters. The later `setDescription` call forwards its value directly and does not perform that constructor normalization.

```lua
local modal = CustomModalWindow(
    "Confirmation",
    "Choose what the script should do."
)

local confirmButton = modal:addButton("Confirm")
local cancelButton = modal:addButton("Cancel")

modal:setCallback(function(buttonId)
    if buttonId == confirmButton then
        print("confirmed")
    elseif buttonId == cancelButton then
        print("cancelled")
    end

    modal:destroy()
end)
```

## Methods

- `getId()` returns the modal ID. IDs may start at `0`.
- `setCaption(caption)` changes the title.
- `setDescription(description)` changes the description.
- `addButton(buttonText)` adds a button and returns its button ID/index. A modal supports at most 20 buttons.
- `setCallback(callback)` installs a callback that receives the clicked button ID/index.
- `destroy()` removes the modal and its internal registration.

Call `destroy()` exactly once when the modal is no longer needed. The current wrapper does not guard repeated destruction.

You may also handle `Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK` directly. That event receives `modalId, buttonIndex`; `setCallback` is usually simpler when the script already retains the modal object.
