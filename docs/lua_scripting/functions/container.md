---
sidebar_position: 8
---

# Container
Interact with open containers in-game

```lua
Container(containerIndex)
Container.new(containerIndex)
Container:getIndex()
Container:getName()
Container:getItems()
Container:moveItemToInventory(containerSlot, inventorySlot, itemCount)
Container:moveItemToGround(containerSlot, itemCount, toX, toY, toZ)
Container:moveItemToContainer(containerSlot, itemCount, toContainerIndex, toContainerSlot)
Container:useItem(containerSlot, openNewWindow)
Container:useItemWithContainerItem(spotFrom, contTo, spotTo)
Container.useItemOnAnotherItem(itemId, otherId)
Container:moveUp()
Container:close()
Container:getCapacity()
Container:getItemCount()
```

### Code

```lua
--- Constructor for the Container class
-- @param containerIndex The index for the container
-- @return A new Container object
function Container.new(containerIndex)

--- Get the container's index.
-- @return The container's index
function Container:getIndex()

--- Get the container's name.
-- This function gets the container's name.
-- @return The container's name, or nil if container doesn't exists
function Container:getName()

--- Get the container items.
-- This function gets the container items.
-- @return A table containing all container items, or nil if container doesn't exists
function Container:getItems()

--- Move item from container to inventory.
-- This function moves item from a specific container to a specific inventory slot.
-- @param containerSlot The slot that contains the item.
-- @param inventorySlot The destination inventory slot to move.
-- @param itemCount The item count to move.
-- @return True if succeeds, or nil if container/item/inventory slot doesn't exists
function Container:moveItemToInventory(containerSlot, inventorySlot, itemCount)

--- Move item from container to map position.
-- This function moves item from a specific container to a specific map position.
-- @param containerSlot The slot that contains the item.
-- @param itemCount The item count to move.
-- @param toX (number) - The x-coordinate of the map position destination.
-- @param toY (number) - The y-coordinate of the map position destination.
-- @param toZ (number) - The z-coordinate of the map position destination.
-- @return True if succeeds, or nil if container/item/inventory slot/tile doesn't exists
function Container:moveItemToGround(containerSlot, itemCount, toX, toY, toZ)

--- Move item from container to other container.
-- This function moves item from a specific container to other specific container.
-- @param containerSlot The slot that contains the item.
-- @param itemCount The item count to move.
-- @param toContainerIndex (number) - The index of other container.
-- @param toContainerSlot (number) - The slot of other container.
-- @return True if succeeds, or nil if container/item/inventory slot/tile doesn't exists
function Container:moveItemToContainer(containerSlot, itemCount, toContainerIndex, toContainerSlot)

--- Use an item from specified slot.
-- This function uses an item from a specified slot, if the item is a container you can specify if should open on same window.
-- @param containerSlot (number) - The slot that contains the item.
-- @param openNewWindow (boolean) - If should open the item (container) in a new window
-- @return True if succeeds, or nil if container/item doesn't exists
function Container:useItem(containerSlot, openNewWindow)

--- Uses item in the container on another item in a container.
-- Uses an item in a specific spot in the container on a specific spot in a specific container.
-- @param spotfrom the specific slot the item to be used is at
-- @param contTo the container index you want to use the item in
-- @param spotTo the specific slot you want to use the item with in the new container
-- @return True if succeeds, or nil if container/item doesn't exists
function Container:useItemWithContainerItem(spotFrom, contTo, spotTo)

--- Use an item by id on another id
-- Uses an item by id on another item by id, this function will iterate all open containers, searching for the items automatically.
-- Static function, doesn't require a Container object.
-- @param itemId the id of the item to be used
-- @param otherId the id of the item to be used with
-- @return True if succeeds, or nil if container/item doesn't exists
function Container.useItemOnAnotherItem(itemId, otherId)

--- Show higher container.
-- This function request the server to show the previous/higher container.
function Container:moveUp()

--- Close container.
-- This function request the server to close a specific container.
function Container:close()

--- Get the container items capacity.
-- This function gets the container items capacity.
-- @return The container items capacity, or nil if container doesn't exists
function Container:getCapacity()

--- Get the container items count.
-- This function gets the container items count.
-- @return The container items count, or nil if container doesn't exists
function Container:getItemCount()

-- Look at specific container slot.
-- This function is a wrapper around the external function containerLookAt.
-- @param containerSlot - The container slot to look at.
-- @return True if the request was sent to server, or nil if item/container slot doesn't exists.
function Container:lookAt(containerSlot)
```