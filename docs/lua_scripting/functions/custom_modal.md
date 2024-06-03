---
sidebar_position: 7
---

# Custom Modal
This class is typically used in applications where user interaction through modal windows is required, such as confirming actions or displaying information. The methods provide a flexible way to dynamically create, modify, and manage the lifecycle of modal windows.

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

### Code
```lua
--- Constructor for the Custom Modal Window class
-- @param caption the title of the modal window
-- @param description the description of the modal window
-- @return A new Custom Modal Window object
function CustomModalWindow.new(caption, description)

--- Get the custom modal window's ID.
-- @return The custom modal window's ID
function CustomModalWindow:getId()

-- Set the modal window caption
function CustomModalWindow:setCaption(caption)

-- Set the modal window description
function CustomModalWindow:setDescription(description)

-- Set custom modal button on click callback
function CustomModalWindow:setCallback(callback)

-- Add a button to the modal window
-- Note: the limit of buttons is 20
-- @returns The button id, this works as an index, can start from 0
function CustomModalWindow:addButton(buttonText)

-- Destroy the custom modal window
function CustomModalWindow:destroy()
```