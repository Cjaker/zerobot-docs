---
sidebar_position: 6
---

# HUD
Display custom text/items on screen

This document outlines the methods of the `HUD` class, which allows manipulation of in-game heads-up displays (HUDs) including positioning, appearance, and interactivity.

```lua
HUD(x, y, value, newFeatures)
HUD.new(x, y, value, newFeatures)
HUD.newSpellIcon(x, y, spellId, newFeatures)
HUD.newOutfit(x, y, outfitId, newFeatures)
HUD:getId()
HUD:setSpellIconId(id)
HUD:setOutfitId(id)
HUD:setOutfitAddons(addons)
HUD:setOutfitColors(head, body, legs, feet)
HUD:setOutfitDirection(direction)
HUD:setOutfitMoving(moving)
HUD:getPos()
HUD:setPos(x, y)
HUD:getMargins()
HUD:setDraggable(draggable)
HUD:setText(text)
HUD:setHorizontalAlignment(alignment)
HUD:setVerticalAlignment(alignment)
HUD:setColor(r, g, b)
HUD:setFontSize(fontSize)
HUD:setItemId(id)
HUD:setSize(width, height)
HUD:setScale(value)
HUD:setOpacity(value)
HUD:setCallback(callback)
HUD:destroy()
```

#### **HUD:new(x, y, value)**

**Purpose**: The `HUD.new` function is designed to create a new HUD object within a game environment. This function dynamically generates either a HUD item or a HUD text element based on the type of value provided. It's a versatile constructor used to enhance the game interface by displaying important information or items directly on the screen without obstructing the gameplay.

## Usage:
```lua
-- Creating a HUD text element
local myTextHUD = HUD.new(100, 50, "Player Score: 1000", false)
-- Creating a HUD item element
local myItemHUD = HUD.new(200, 100, 12345, false) -- Assuming 12345 is a valid item ID
```

## Explanation:
- `x`: The horizontal coordinate (x-axis) of the game window where the HUD element will be positioned.
- `y`: The vertical coordinate (y-axis) of the game window where the HUD element will be positioned.
- `value`: The content to be displayed by the HUD element. If `value` is a number, a HUD item is created. If `value` is a string, a HUD text element is created.
- `newFeatures`: If the created HUD element should use new features and it functions.

## Return Value

- Returns a new HUD object, which can be either an item or text element based on the provided `value`.

#### **HUD:newSpellIcon(x, y, spellId)**

**Purpose**: The `HUD.newSpellIcon` function is designed to create a new HUD object representing a spell icon within the game environment. This function dynamically generates a HUD spell icon element based on the provided spell ID, allowing for the display of spell icons directly on the screen for quick access and reference.

## Usage:
```lua
-- Creating a HUD spell icon element
local spellId = Spells.getIdByWords("exura")
local spellIconHUD = HUD.newSpellIcon(100, 50, spellId, true)
```

## Explanation:
- `x`: The horizontal coordinate (x-axis) of the game window where the HUD element will be positioned.
- `y`: The vertical coordinate (y-axis) of the game window where the HUD element will be positioned.
- `spellId`: The ID of the spell for which the HUD spell icon will be created.
- `newFeatures`: If the created HUD element should use new features and it functions.

## Return Value

- Returns a new HUD object representing a spell icon element.

#### **HUD:newOutfit(x, y, outfitId)**

**Purpose**: The `HUD.newOutfit` function is designed to create a new HUD object representing an outfit within the game environment. This function dynamically generates a HUD outfit element based on the provided outfit ID, allowing for the display of character outfits directly on the screen for visual customization and reference.

## Usage:
```lua
-- Creating a HUD outfit element
local outfitId = 130
local outfitHUD = HUD.newOutfit(100, 50, outfitId, true)
```

## Explanation:
- `x`: The horizontal coordinate (x-axis) of the game window where the HUD element will be positioned.
- `y`: The vertical coordinate (y-axis) of the game window where the HUD element will be positioned.
- `outfitId`: The ID of the outfit for which the HUD outfit element will be created.
- `newFeatures`: If the created HUD element should use new features and it functions.

## Return Value

- Returns a new HUD object representing an outfit element.

### **HUD:getId()**

**Purpose**: The `HUD:getId` method is designed to retrieve the unique identifier (ID) of a HUD object. This ID is essential for managing HUD elements within the game, allowing for precise control over their behavior, appearance, and removal.

## Usage:
```lua
local myTextHUD = HUD.new(100, 50, "Player Score: 1000")
local hudId = myTextHUD:getId()
print(hudId) -- Outputs the ID of the HUD element
```

## Explanation:
- `hudElement`: An instance of a HUD object for which you want to get the ID.

## Return Value

- Returns the ID of the HUD object. This ID is a unique identifier used internally to manage HUD elements.

#### **HUD:setOutfitId(id)**
**Purpose**: The `HUD:setOutfitId` function updates the outfit ID displayed in a HUD outfit element. This allows dynamic customization of character appearances within the game's UI.

**Usage:**
```lua
-- Assuming outfitHUD has been previously created with HUD.newOutfit
outfitHUD:setOutfitId(131)
```
**Explanation:**
- `id`: The new outfit ID to be displayed in the HUD element.

#### **HUD:setOutfitAddons(addons)**
**Purpose**: The `HUD:setOutfitAddons` function applies addon configurations to an outfit HUD element.

**Usage:**
```lua
-- Assuming outfitHUD has been previously created with HUD.newOutfit
outfitHUD:setOutfitAddons(3) -- Example: 3 could represent both addons enabled
```
**Explanation:**
- `addons`: The addon value representing which addons to enable.

#### **HUD:setOutfitColors(head, body, legs, feet)**  
**Purpose**: The `HUD:setOutfitColors` function updates the outfit colors dynamically.

**Usage:**
```lua
-- Assuming outfitHUD has been previously created with HUD.newOutfit
outfitHUD:setOutfitColors(94, 58, 79, 32)
```
**Explanation:**
- `head`: The color ID for the head.
- `body`: The color ID for the body.
- `legs`: The color ID for the legs.
- `feet`: The color ID for the feet.

#### **HUD:setOutfitDirection(direction)**
**Purpose**: The `HUD:setOutfitDirection` function sets the direction the outfit is facing in a HUD outfit element.

**Usage:**
```lua
-- Assuming outfitHUD has been previously created with HUD.newOutfit
outfitHUD:setOutfitDirection(Enums.Direction.East)
```
**Explanation:**
- `direction`: The new direction for the outfit, based on `Enums.Direction`.

#### **HUD:setOutfitMoving(moving)**
**Purpose**: The `HUD:setOutfitMoving` function toggles animation for the HUD outfit element, making it appear as if the character is moving.

**Usage:**
```lua
-- Assuming outfitHUD has been previously created with HUD.newOutfit
outfitHUD:setOutfitMoving(true) -- Enables movement animation
```

**Explanation:**
- `moving`: Boolean value (`true` to enable movement animation, `false` to disable).

#### **HUD:getPos()**
**Purpose**: The `HUD:getPos` function is designed to retrieve the current position of a HUD element within the game's window. This function is crucial for understanding where a HUD element is located on the screen, which can be essential for layout adjustments, collision detection, or for dynamically updating the HUD's position based on game events.
Note: this function will return the draw position X, Y on screen, shouldn't be used directly for setPos function. Also this function can return x:0,y:0 until the first draw since it return the draw position on game screen.

## Usage:

```lua
-- Assuming hudElement has been previously created with HUD.new
local position = hudElement:getPos()
print("HUD position - X:", position.x, "Y:", position.y)
```

## Explanation:

`hudElement`: An instance of a HUD object for which you want to get the position.

## Return Value

Returns a table with the following structure:

- `x`: The horizontal coordinate (x-axis) of the HUD element's current position.
- `y`: The vertical coordinate (y-axis) of the HUD element's current position.

#### **HUD:setPos(x, y)**
**Purpose**: The `HUD:setPos` function is designed to set or update the position of a HUD element on the game screen. By specifying new `x` and `y` coordinates, developers can dynamically adjust where a HUD element appears, allowing for real-time updates to the game's user interface based on game events, player actions, or other UI elements.
Note: if you are using alignments, this function will be used as the margin offsets. Also, when you set position of a HUD element it will reset the mouse dragging offsets to 0,0.

## Usage:

```lua
-- Assuming hudElement has been previously created with HUD.new
-- Moving the HUD element to a new position at (200, 150)
hudElement:setPos(200, 150)
```

## Explanation:

- `x`: A number representing the new horizontal coordinate (x-axis) where the HUD element will be positioned.
- `y`: A number representing the new vertical coordinate (y-axis) where the HUD element will be positioned.

#### **HUD:getMargins**
**Purpose**: The `HUD:getMargins` function is designed to retrieve the current margins offsets of a HUD element within the game's window. This function is crucial for understanding where a HUD element is located on the screen, which can be essential for layout adjustments, collision detection, or for dynamically updating the HUD's position based on game events.
Note: if you are using alignments, this function will be used as the margin offsets. Also remember the margins are set by setPos function if you are using alignments.

## Usage:

```lua
-- Assuming hudElement has been previously created with HUD.new
local margins = hudElement:getMargins()
print("HUD margins - X:", margins.x, "Y:", margins.y)
```

## Explanation:

`hudElement`: An instance of a HUD object for which you want to get the position.

## Return Value

Returns a table with the following structure:

- `x`: The horizontal margin (x-axis) of the HUD element.
- `y`: The vertical margin (y-axis) of the HUD element.

#### **HUD:setDraggable(draggable)**
**Purpose**: The `HUD:setDraggable` function enables or disables the draggable state of a specific HUD  element. This functionality allows developers to make HUD elements interactively movable by the user or fixed in place on the screen, enhancing the flexibility and usability of the game's interface.

## Usage:

```lua
-- Assuming hudElement has been previously created with HUD.new
-- Making the HUD element draggable
hudElement:setDraggable(true)

-- Later, making the HUD element non-draggable
hudElement:setDraggable(false)
```

## Explanation:

- `draggable`: A boolean value where true enables the HUD element to be dragged by the user, and false disables this capability.

#### **HUD:setText(text)**
**Purpose**: The `HUD:setText` function is designed to update the text content of a HUD text element. This method allows for dynamic changes to the displayed text, enabling developers to reflect changes in game state, player statistics, messages, or any other text-based information in real-time. It is important to note that this function only operates on HUD elements that are specifically text-based; it will not affect HUD items.

## Usage:

```lua
-- Assuming hudTextElement has been previously created with HUD.new as a text element
hudTextElement:setText("New Score: 1500")
```

#### **HUD:setHorizontalAlignment(alignment)**
**Purpose**: The `HUD:setHorizontalAlignment` function is designed to change the current horizontal alignment based on game window screen edges. It accepts any alignment based on Enums.HorizontalAlign. Can only be used if newFeatures is enabled on HUD.new function.
Note: the x position offset will be used as margins if you set the alignment different of None.

## Usage:

```lua
-- Assuming hudTextElement has been previously created with HUD.new as a text element
hudTextElement:setHorizontalAlignment(Enums.HorizontalAlign.Center)
```

## Explanation:
- `alignment`: The horizontal alignment type, based on Enums.HorizontalAlign.

#### **HUD:setVerticalAlignment(alignment)**
**Purpose**: The `HUD:setVerticalAlignment` function is designed to change the current vertical alignment based on game window screen edges. It accepts any alignment based on Enums.VerticalAlign. Can only be used if newFeatures is enabled on HUD.new function.
Note: the y position offset will be used as margins if you set the alignment different of None.

## Usage:

```lua
-- Assuming hudTextElement has been previously created with HUD.new as a text element
hudTextElement:setVerticalAlignment(Enums.VerticalAlign.Center)
```

## Explanation:
- `alignment`: The vertical alignment type, based on Enums.VerticalAlign.

#### **HUD:setColor(r, g, b)**
**Purpose**: The `HUD:setColor` function is designed to change the color of text in a hud text element. It accepts RGB (Red, Green, Blue) values to set the color, allowing for a wide range of colors. This function is applicable only to hud elements that display text and does not affect item elements.

## Usage:
```lua
-- Assuming hudTextElement has been previously created with HUD.new as a text element
-- Setting the text color to blue for a text element
hudTextElement:setColor(0, 0, 255)
```

## Explanation:
- r: The red component of the color, a number between 0 and 255.
- g: The green component of the color, a number between 0 and 255.
- b: The blue component of the color, a number between 0 and 255.

#### **HUD:setFontSize(fontSize)**
**Purpose**: The `HUD:setFontSize` function is designed to change the font size of a HUD text. The default value is 8.25, can only be used if newFeatures is enabled on HUD.new function.

## Usage:
```lua
-- Assuming hudTextElement has been previously created with HUD.new as a text element
-- Increasing the font size to 12
hudTextElement:setFontSize(12)
```

## Explanation:
- fontSize: The value indicating new font size to be setted up.

#### **HUD:setItemId(id)**
**Purpose**: The `HUD:setItemId` function is intended to set or update the item ID for a hud element that represents an item. This allows for dynamic changes to the item displayed within a hud, enabling developers to reflect changes in inventory, objectives, or other game mechanics that involve items. It is important to note that this function is only effective for hud elements specifically designated as items.

## Usage:
```lua
-- Assuming hudItemElement has been previously created with HUD.new as an item element
-- Setting a new item ID for the hud element
hudItemElement:setItemId(4321)
```

## Explanation:
- `id`: The new item ID to be set for the hud element.

#### **HUD:setSize(width, height)**
**Purpose**: The `HUD:setSize` function enables the resizing of a hud element by specifying its width and height. This capability is crucial for adjusting the dimensions of hud elements to fit different content sizes, screen resolutions, or aesthetic preferences. It applies to both text and item hud elements, offering flexibility in designing the user interface.
The limit of size for items is based on their sprite.
Example: gold coin size is 32x32, so you can't pass these values.
If you need to scale more the size, you can use HUD:setScale(value) function.

## Usage:
```lua
-- Assuming hudElement has been previously created with HUD.new as an item element
-- Resizing a hud element to 200 pixels wide and 50 pixels tall
hudElement:setSize(200, 50)
```

## Explanation:
- `width`: The new width for the hud element, in pixels.
- `height`: The new height for the hud element, in pixels.

#### **HUD:setScale(value)**
**Purpose**: The `HUD:setScale` function enables the resizing of a hud item/outfit/spell icon element by specifying and multiplying from scale value. This capability is crucial for adjusting the dimensions of hud item elements to fit different content sizes, screen resolutions, or aesthetic preferences. It applies to item hud elements, offering flexibility in designing the user interface.
The value is a float number, where 1.0 is the default size.
Can be used only if newFeatures is enabled

## Usage:
```lua
-- Assuming hudElement has been previously created with HUD.new as an item element
-- Scaling the hud item element by 2x it original size.
hudElement:setScale(2)
```

## Explanation:
- `scale`: The new scale value for the hud item element.

#### **HUD:setCallback(callback)**
**Purpose**: The `HUD:setCallback` function is designed to assign a callback function to a hud element. This callback function is intended to be triggered by specific events, such as user interaction with the hud element (e.g., clicking). Assigning a callback allows for interactive and dynamic hud elements that can respond to user inputs, enhancing the user experience and engagement within the game.

## Usage:
```lua
-- Example callback function
local function onHudClick()
    print("HUD element clicked!")
end

-- Assuming hudElement has been previously created with HUD.new as an item element
hudElement:setCallback(onHudClick)
```

## Explanation:
- `callback`: The function to be assigned as the callback for the hud element. This function will be called when the corresponding event occurs.

#### **HUD.destroy()**
**Purpose**: The `HUD:destroy` function is responsible for safely removing a hud element from the game's UI. This involves unregistering the element from the game's hud system, decrementing the global hud element count, and cleaning up any references to the hud element to ensure it is properly garbage collected. This function is crucial for managing hud elements dynamically, allowing for the removal of hud elements that are no longer needed without causing memory leaks or cluttering the game's interface.

## Usage:
```lua
--- Assuming hudElement has been previously created with HUD.new as an item element
hudElement:destroy()
```