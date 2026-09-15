---
sidebar_position: 9
---

# Inventory
Interact with player's inventory

```lua
Inventory.moveItemToGround(inventorySlot, inventoryCount, toX, toY, toZ)
Inventory.moveItemToContainer(inventorySlot, inventoryCount, containerIndex, containerSlot)
Inventory.stowContainer(inventorySlot)
Inventory.pickItemImbuement(inventorySlot)
Inventory.useItem(inventorySlot)
Inventory.lookAt(inventorySlot)
```

### Code

```lua
--- Move item from inventory to ground.
-- This function is a wrapper around the external function inventoryMoveItemToGround.
-- @param inventorySlot The inventory slot to move. You can base it on Enums.InventorySlot
-- @param inventoryCount The inventory item count to move.
-- @param toX (number) - The x-coordinate of the map position destination.
-- @param toY (number) - The y-coordinate of the map position destination.
-- @param toZ (number) - The z-coordinate of the map position destination.
-- @return True if succeeds, or nil if item/inventory slot/tile doesn't exists
function Inventory.moveItemToGround(inventorySlot, inventoryCount, toX, toY, toZ)

--- Move item from inventory to specific container slot.
-- This function is a wrapper around the external function inventoryMoveItemToContainer.
-- @param inventorySlot The inventory slot to move. You can base it on Enums.InventorySlot
-- @param inventoryCount The inventory item count to move.
-- @param containerIndex (number) - The destination container index.
-- @param containerSlot (number) - The destination container slot.
-- @return True if succeeds, or nil if item/inventory slot/tile/container doesn't exists
function Inventory.moveItemToContainer(inventorySlot, inventoryCount, containerIndex, containerSlot)

--- Stow specific container in inventory. Refer this as the "Stow container's content" option in-game.
--- This function is a wrapper around the external function inventoryStowContainer.
--- @param inventorySlot The inventory slot to stow. You can base it on Enums.InventorySlot.
--- @return True if the action has been sent to server, or nil if item/inventory slot/container doesn't exists, or false if the action failed to be sent.
function Inventory.stowContainer(inventorySlot)

-- Pick an item from inventory for Imbuement window.
-- This function is a wrapper around the external function inventoryPickItemImbuement.
-- This function should be used only on version 15.10.46b862 or newer, as we have a new option called Pick Item.
-- @param inventorySlot - The inventory slot to pick item from. You can base it on Enums.InventorySlot
-- @return True if the action have been sent to server, or nil if item/inventory slot doesn't exists.
function Inventory.pickItemImbuement(inventorySlot)

-- Use an item from specific inventory slot.
-- This function is a wrapper around the external function inventoryUseItem.
-- @param inventorySlot - The inventory slot to use. You can base it on Enums.InventorySlot
-- @return True if succeeds, or nil if item/inventory slot doesn't exists.
function Inventory.useItem(inventorySlot)

-- Look at specific inventory slot.
-- This function is a wrapper around the external function inventoryLookAt.
-- @param inventorySlot - The inventory slot to look at. You can base it on Enums.InventorySlot
-- @return True if the request was sent to server, or nil if item/inventory slot doesn't exists.
function Inventory.lookAt(inventorySlot)
```

<!-- current-core-api:start -->
## Stow and Imbuement selection

- `Inventory.stowContainer(inventorySlot)` applies **Stow container's content** to the container in `Enums.InventorySlot`.
- `Inventory.pickItemImbuement(inventorySlot)` picks the inventory item for the Imbuement window and requires client 15.10.46b862 or newer.

Both return `nil` when the slot/item is invalid; otherwise they report whether the action was sent.
<!-- current-core-api:end -->
