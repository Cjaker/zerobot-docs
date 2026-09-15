---
sidebar_position: 6
---

# HUD

Create text, item, spell-icon, and outfit overlays on the game screen.

```lua
HUD(x, y, value, newFeatures)
HUD.new(x, y, value, newFeatures)
HUD.newSpellIcon(x, y, spellId, newFeatures)
HUD.newOutfit(x, y, outfitId, newFeatures)
HUD:getId()
HUD:getPos()
HUD:setPos(x, y)
HUD:getMargins()
HUD:hide()
HUD:show()
HUD:setDraggable(draggable)
HUD:setText(text)
HUD:setHorizontalAlignment(alignment)
HUD:setVerticalAlignment(alignment)
HUD:setColor(r, g, b)
HUD:setFontSize(fontSize)
HUD:setItemId(id)
HUD:setSpellIconId(id)
HUD:setOutfitId(id)
HUD:setOutfitAddons(addons)
HUD:setOutfitColors(head, body, legs, feet)
HUD:setOutfitDirection(direction)
HUD:setOutfitMoving(moving)
HUD:setSize(width, height)
HUD:setScale(value)
HUD:setOpacity(value)
HUD:setZIndex(zIndex)
HUD:setPhantom(phantom)
HUD:setCallback(callback)
HUD:destroy()
```

## Constructors

`HUD(...)` is an alias for `HUD.new(...)`.

- When `value` is a number, `HUD.new` creates an item HUD using that item ID.
- For any other value, it creates a text HUD and forwards the value to `setText`.
- `HUD.newSpellIcon` creates a spell-icon HUD.
- `HUD.newOutfit` creates an outfit HUD.

Pass `newFeatures = true` when using alignment, margins, spell icons, outfits, scale, opacity, z-index, or phantom behavior. In particular, the spell-icon and outfit setters require it, so those constructors should normally receive `true`.

```lua
local textHud = HUD(30, 30, "Ready", true)
local itemHud = HUD(30, 60, 3031, true)

local spellId = Spells.getIdByWords("exura")
local spellHud = HUD.newSpellIcon(30, 100, spellId, true)
local outfitHud = HUD.newOutfit(80, 100, 128, true)
```

Each constructor returns a HUD object. Keep that object while the element is in use and call `destroy()` when it is no longer needed.

## Common methods

| Method | Behavior |
| --- | --- |
| `getId()` | Returns the internal HUD ID. IDs may start at `0`. |
| `getPos()` | Returns the drawn screen position as `{x, y}`. It may return `{x = 0, y = 0}` before the first draw. Do not feed this value directly back into `setPos` when alignments are active. |
| `setPos(x, y)` | Sets the position. With alignment enabled, the values become margin offsets. It also clears offsets created by dragging. |
| `getMargins()` | Returns `{x, y}` margin offsets. Requires `newFeatures = true`. |
| `hide()` / `show()` | Changes visibility without destroying the HUD. |
| `setDraggable(draggable)` | Enables or disables mouse dragging. Listen to `Game.Events.HUD_DRAG` if the release position is needed. |
| `setSize(width, height)` | Sets the element dimensions. Item dimensions remain limited by their sprite; use `setScale` for additional scaling. |
| `setOpacity(value)` | Sets opacity, where `1.0` is opaque and `0.0` is transparent. Requires `newFeatures = true`. |
| `setZIndex(zIndex)` | Controls draw order; higher values are drawn above lower ones. Requires `newFeatures = true`. |
| `setPhantom(phantom)` | When `true`, mouse input passes through the HUD to elements below it. Requires `newFeatures = true`. |
| `destroy()` | Removes the HUD and marks the object as destroyed. Repeated calls are ignored. |

## Text HUD

These methods are intended for a HUD created with a non-numeric `value`:

- `setText(text)` changes the displayed text.
- `setColor(r, g, b)` sets its RGB color.
- `setFontSize(fontSize)` changes the font size; the default is `8.25`. It requires `newFeatures = true`.
- `setHorizontalAlignment(alignment)` accepts `Enums.HorizontalAlign` and requires `newFeatures = true`. When alignment is not `None`, the X position is used as a margin.
- `setVerticalAlignment(alignment)` accepts `Enums.VerticalAlign` and requires `newFeatures = true`. When alignment is not `None`, the Y position is used as a margin.

```lua
local status = HUD(12, 12, "Waiting", true)
status:setColor(0, 220, 120)
status:setFontSize(12)
status:setHorizontalAlignment(Enums.HorizontalAlign.Right)
status:setVerticalAlignment(Enums.VerticalAlign.Top)
status:setPos(20, 20) -- margins from the selected edges
```

## Item and spell-icon HUD

- `setItemId(id)` changes the item ID of an item HUD.
- `setSpellIconId(id)` changes a spell-icon HUD and requires `newFeatures = true`.
- `setScale(value)` scales an item, spell-icon, or outfit HUD. `1.0` is the default size and `newFeatures = true` is required.

Do not mix text-only methods with item HUDs, or item-only methods with other HUD types.

## Outfit HUD

All outfit-specific setters require an outfit HUD created with `newFeatures = true`.

- `setOutfitId(id)` selects an outfit ID that exists in the current client.
- `setOutfitAddons(addons)` accepts `0`, `1`, `2`, or `3`.
- `setOutfitColors(head, body, legs, feet)` accepts client outfit-color indexes from `0` through `132`.
- `setOutfitDirection(direction)` accepts a cardinal value from `Enums.Directions`.
- `setOutfitMoving(moving)` enables or disables the walking animation.

```lua
local outfit = HUD.newOutfit(100, 100, 128, true)
outfit:setOutfitAddons(3)
outfit:setOutfitColors(94, 58, 79, 32)
outfit:setOutfitDirection(Enums.Directions.EAST)
outfit:setOutfitMoving(true)
outfit:setScale(1.5)
```

## Click and drag interaction

`setCallback(callback)` installs a zero-argument callback on that HUD object. The core dispatches it when the element is clicked:

```lua
local button = HUD(100, 40, "Click me", true)

button:setCallback(function()
    print("HUD clicked")
end)
```

For centralized handling, register `Game.Events.HUD_CLICK`; its callback receives the HUD ID. `Game.Events.HUD_DRAG` receives `id, x, y` when a draggable HUD is released.

```lua
local movable = HUD(100, 80, 3031, true)
movable:setDraggable(true)

local function onDrag(id, x, y)
    if id == movable:getId() then
        print("new drawn position", x, y)
    end
end

Game.registerEvent(Game.Events.HUD_DRAG, onDrag)
```

Destroy HUDs and unregister any events created by the script during cleanup.
