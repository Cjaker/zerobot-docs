---
sidebar_position: 9
---

# Inventory
Interact with player's inventory

```lua
Inventory.moveItemToGround(inventorySlot, inventoryCount, toX, toY, toZ)
Inventory.moveItemToContainer(inventorySlot, inventoryCount, containerIndex, containerSlot)
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