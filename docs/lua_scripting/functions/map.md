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
Map.isTileWalkable(x, y, z, options)
Map.useItemWithInventory(x, y, z, slot)
Map.useItemWithContainer(x, y, z, index, slot)
Map.lookAt(x, y, z)
Map.getCameraPosition()
Map.getPlayerOnScreen(var)
```

### Code

```lua
--- Get the IDs of creatures on the map.
-- This function is a wrapper around the external function mapGetCreatureIds.
-- @param sameFloor (boolean) - Whether to only consider creatures on the same floor.
-- @param onlyPlayer (boolean) - Whether to only consider player creatures.
-- @return A table of creature IDs, or nil if there's no creatures on screen.
function Map.getCreatureIds(sameFloor, onlyPlayer)

--- Get all map tiles on screen
-- This function is a wrapper around the external function mapGetTiles.
-- @return A table of all tiles containing things and their position.
function Map.getTiles()

--- Get the things at a specific map position.
-- This function is a wrapper around the external function mapGetThings.
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @return A table of things at the specified position, or nil if tile doesn't exists or there's no map information available.
function Map.getThings(x, y, z)

--- Get the things count at a specific map position.
-- This function is a wrapper around the external function mapGetThings.
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @return Things count of specific position, or nil if tile doesn't exists or there's no map information available.
function Map.getThingsCount(x, y, z)

--- Move item from map position to inventory slot.
-- This function is a wrapper around the external function mapMoveItemToInventory.
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @param count (number) - The item count to move.
-- @param slot (number) - The inventory slot destination to move.
-- @return True if succeeded, or nil if tile/item/inventory slot doesn't exists or there's no map information available.
function Map.moveItemToInventory(x, y, z, count, slot)

--- Move item from map position to container slot.
-- This function is a wrapper around the external function mapMoveItemToContainer.
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @param count (number) - The item count to move.
-- @param index (number) - The container index to move.
-- @param slot (number) - The container slot destination to move.
-- @return True if succeeded, or nil if tile/item/container slot doesn't exists or there's no map information available.
function Map.moveItemToContainer(x, y, z, count, index, slot)

--- Move item from map position to destination map position.
-- This function is a wrapper around the external function mapMoveItemToGround.
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @param count (number) - The item count to move.
-- @param toX (number) - The x-coordinate of the map position destination.
-- @param toY (number) - The y-coordinate of the map position destination.
-- @param toZ (number) - The z-coordinate of the map position destination.
-- @return True if the request was sent to server, or nil if tile/item/container slot doesn't exists or there's no map information available.
function Map.moveItemToGround(x, y, z, count, toX, toY, toZ)

--- Move creature from map position to destination map position.
-- This function is a wrapper around the external function mapMoveCreatureToGround.
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @param toX (number) - The x-coordinate of the map position destination.
-- @param toY (number) - The y-coordinate of the map position destination.
-- @param toZ (number) - The z-coordinate of the map position destination.
-- @return True if the request was sent to server, or nil if tile/creature doesn't exists, can't move the creature or if there's no map information available.
function Map.moveCreatureToGround(x, y, z, toX, toY, toZ)

-- Walk to a specific position using Tibia map click algorithm
-- @param x (number) - The x-coordinate of the map destination position.
-- @param y (number) - The y-coordinate of the map destination position.
-- @param z (number) - The z-coordinate of the map destination position.
function Map.goTo(x, y, z)

-- Browse Field specific tile by map position
-- @param x (number) - The x-coordinate of the map destination position.
-- @param y (number) - The y-coordinate of the map destination position.
-- @param z (number) - The z-coordinate of the map destination position.
function Map.browseField(x, y, z)

-- WARNING: This function will be deprecated and will be removed in the future. Use Map.isTileWalkable instead
-- Check if a specific position is walkable
-- @deprecated Use Map.isTileWalkable instead
-- @param x (number) - The x-coordinate of the map destination position.
-- @param y (number) - The y-coordinate of the map destination position.
-- @param z (number) - The z-coordinate of the map destination position.
-- @param ignoreBlockPath (boolean) - If is true will consider block path tiles as walkable. Default value is true
-- @param ignoreMagicField (boolean) - If is true will not consider magic field as a blockable obstacle on tile. Default value is true
-- @param ignoreMonsters (boolean) - If is true will not consider monster as a blockable obstacle on tile. Default value is false
-- @param ignoreNpcs (boolean) - If is true will not consider npc as a blockable obstacle on tile. Default value is false
-- @return True if the position is walkable, or false if not
function Map.canWalk(x, y, z, ignoreBlockPath, ignoreMagicField, ignoreMonsters, ignoreNpcs)

-- Check if a specific position is walkable
-- @param x (number) - The x-coordinate of the map destination position.
-- @param y (number) - The y-coordinate of the map destination position.
-- @param z (number) - The z-coordinate of the map destination position.
-- @param options (table) - A table with the following options:
-- @field ignoreBlockPath (boolean) - If is true will consider block path tiles as walkable. Default value is true
-- @field ignoreMagicField (boolean) - If is true will not consider magic field as a blockable obstacle on tile. Default value is true
-- @field ignoreFloorChange (boolean) - If is true will not consider floor change as a blockable obstacle on tile. Default value is true
-- @field ignoreMonsters (boolean) - If is true will not consider monster as a blockable obstacle on tile. Default value is false
-- @field ignoreNpcs (boolean) - If is true will not consider npc as a blockable obstacle on tile. Default value is false
-- @return True if the position is walkable, or false if not
function Map.isTileWalkable(x, y, z, options)

-- Use item from specific position into a specific inventory slot
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @param slot (number) - The inventory slot destination to use the item. Refer to Enums.InventorySlot.
-- @return True if the request was sent to server, or nil if tile/item/inventory slot doesn't exists or there's no map information available.
function Map.useItemWithInventory(x, y, z, slot)

-- Use item from specific position into a specific container slot
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @param index (number) - The container index to use the item.
-- @param slot (number) - The container slot destination to use the item.
-- @return True if the request was sent to server, or nil if tile/item/container slot doesn't exists or there's no map information available.
function Map.useItemWithContainer(x, y, z, index, slot)

-- Look at specific position.
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @return True if the request was sent to server, or nil if tile doesn't exists or there's no map information available.
function Map.lookAt(x, y, z)

-- Collect reward chest from specific position. Only works with reward chest id: 19250
-- @param x (number) - The x-coordinate of the map position.
-- @param y (number) - The y-coordinate of the map position.
-- @param z (number) - The z-coordinate of the map position.
-- @return True if the request was sent to server, or nil if tile doesn't exists or there's no map information available.
function Map.collectRewardChest(x, y, z)

-- Get current map world camera position
-- This function is useful if you wanna a real-time position of your character
-- The game takes some time to update the position of a creature directly, so in specific cases that can be useful
-- Example of good cases: pathfinding
function Map.getCameraPosition()

--- Get a player creature on the screen, either by ID or name.
-- @param var (number|string) - The player ID if a number, or the player name if a string.
-- @return The player creature if found, or nil if not found.
function Map.getPlayerOnScreen(var)
```