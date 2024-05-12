---
sidebar_position: 14
---

# Map
Overall map functions

```lua
Map.getCreatureIds(sameFloor, onlyPlayer)
Map.getTiles()
Map.getThings(x, y, z)
Map.getThingsCount(x, y, z)
Map.moveItemToInventory(x, y, z, count, slot)
Map.moveItemToContainer(x, y, z, count, index, slot)
Map.moveItemToGround(x, y, z, count, toX, toY, toZ)
Map.moveCreatureToGround(x, y, z, toX, toY, toZ)
Map.goTo(x, y, z)
Map.stopAutoWalk()
Map.browseField(x, y, z)
Map.canWalk(x, y, z, ignoreBlockPath, ignoreMagicField, ignoreMonsters, ignoreNpcs)
Map.getCameraPosition()
Map.getPlayerOnScreen(var)
```