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
Container:moveUp()
Container:close()
Container:getCapacity()
Container:getItemCount()
```