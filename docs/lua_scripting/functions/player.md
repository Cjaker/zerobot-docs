---
sidebar_position: 11
---

# Player
Overall player functions

```lua
Player.getId()
Player.getName()
Player.getHealth()
Player.getMana()
Player.getHealthPercent()
Player.getManaPercent()
Player.getMagicShield()
Player.getMaxMagicShield()
Player.getCapacity()
Player.getSoulPoints()
Player.isHungry()
Player.getStamina()
Player.getLevel()
Player.getLevelPercent()
Player.getStamina()
Player.getSkills()
Player.getTargetId()
Player.getFollowId()
Player.getInventorySlot(slot)
Player.getState(index)
Player.getContainers()
Player.joinParty(targetId)
Player.inviteParty(targetId)
Player.enableSharedExpParty(enabled)
```

### Code

```lua
--- Get the player's unique ID.
-- This function is a wrapper around the external function playerGetId.
-- @return The player's unique ID, or 0 if isn't in-game.
function Player.getId()

--- Get the player's name.
-- This function is a wrapper around the external function playerGetName.
-- @return The player's name, or nil if isn't in-game.
function Player.getName()

--- Get the player's current health.
-- This function is a wrapper around the external function playerGetHealth.
-- @return The player's current health, or last value if isn't in-game.
function Player.getHealth()

--- Get the player's current mana.
-- This function is a wrapper around the external function playerGetMana.
-- @return The player's current mana, or last value if isn't in-game.
function Player.getMana()

--- Get the player's current health as a percentage.
-- This function is a wrapper around the external function playerGetHealthPercent.
-- @return The player's current health as a percentage, or last value if isn't in-game.
function Player.getHealthPercent()

--- Get the player's current mana as a percentage.
-- This function is a wrapper around the external function playerGetManaPercent.
-- @return The player's current mana as a percentage, or last value if isn't in-game.
function Player.getManaPercent()

--- Get the player's current magic shield value.
-- This function is a wrapper around the external function playerGetMagicShield.
-- @return The player's current magic shield value, or last value if isn't in-game.
function Player.getMagicShield()

--- Get the player's maximum magic shield capacity.
-- This function is a wrapper around the external function playerGetMaxMagicShield.
-- @return The player's maximum magic shield capacity, or last value if isn't in-game.
function Player.getMaxMagicShield()

--- Get the player's current capacity.
-- This function is a wrapper around the external function playerGetCapacity.
-- @return The player's current capacity, or last value if isn't in-game.
function Player.getCapacity()

--- Get the player's current soul points.
-- This function is a wrapper around the external function playerGetSoulPoints.
-- @return The player's current soul points, or last value if isn't in-game.
function Player.getSoulPoints()

--- Return if player is hungry.
-- This function is a wrapper around the external function playerIsHungry.
-- @return The player's hungry state, or last value if isn't in-game.
function Player.isHungry()

--- Get the player's current stamina in minutes.
-- This function is a wrapper around the external function playerGetStamina.
-- @return The player's current stamina in minutes, or last value if isn't in-game.
function Player.getStamina()

--- Get the player's current level.
-- This function is a wrapper around the external function playerGetLevel.
-- @return The player's current level, or last value if isn't in-game.
function Player.getLevel()

--- Get the player's current level percentage.
-- This function is a wrapper around the external function playerGetLevelPercent.
-- @return The player's current level percentage, or last value if isn't in-game.
function Player.getLevelPercent()

--- Get the player's current stamina in minutes.
-- This function is a wrapper around the external function playerGetStamina.
-- @return The player's current stamina in minutes, or last value if isn't in-game.
function Player.getStamina()

--- Retrieves the XP boost remaining time in seconds of the player.
-- This function is a wrapper around the external function playerGetXpBoostTime.
--- @return number The remaining time of the XP boost in seconds, or last value if isn't in-game.
function Player.getXpBoostTime()

--- Get the player's skills.
-- This function is a wrapper around the external function playerGetSkills.
-- This information will be available if you logged in with bot injected, so it can gather skills informations
-- @return The player's current skills by level and percentage as table, or last value if isn't in-game.
-- Example output:
-- {
--     "lifeLeechDamage": 2500,
--     "manaLeechChance": 0,
--     "manaLeechDamage": 0,
--     "fist": 10,
--     "axe": 10,
--     "club": 10,
--     "sword": 10,
--     "distance": 10,
--     "shield": 10,
--     "fishing": 10,
--     "magic": 0,
--     "fistPercent": 0,
--     "axePercent": 0,
--     "clubPercent": 0,
--     "swordPercent": 0,
--     "distancePercent": 0,
--     "shieldPercent": 0,
--     "fishingPercent": 0,
--     "magicPercent": 0,
--     "criticalChance": 0,
--     "criticalDamage": 0,
--     "lifeLeechChance": 0
-- }
function Player.getSkills()

--- Get the ID of the player's current target.
-- This function is a wrapper around the external function playerGetTargetId.
-- @return The ID of the player's current target, or last value if isn't in-game.
function Player.getTargetId()

--- Get the ID of the player's current follow target.
-- This function is a wrapper around the external function playerGetFollowId.
-- @return The ID of the player's current follow target, or last value if isn't in-game.
function Player.getFollowId()

--- Get the item information of specific player's inventory slot.
-- This function is a wrapper around the external function playerGetInventorySlot.
-- @param slot (number) - The inventory slot to get item information, refer the parameter value as Enums.InventorySlot
-- @return The item information of specific the player's inventory slot, or nil if there's no item. Table format: {id=0,count=0,tier=0,holdingCount=0}
function Player.getInventorySlot(slot)

--- Get the status of specified state index of player.
-- This function is a wrapper around the external function playerGetState.
-- @param index (number) - The state index to check if is active, refer the parameter value as Enums.States
-- @return The state status if is active on player or not, or nil if there's no state from specified param index
function Player.getState(index)

--- Get the player opened containers.
-- This function is a wrapper around the external function playerGetContainers.
-- @return A table containing all open container indexes, or nil if there's no container opened
function Player.getContainers()

--- Join into other player party if the invitation request is pending.
-- This function is a wrapper around the external function playerJoinParty.
-- @param targetId (number) - The target player id who are invitating you
function Player.joinParty(targetId)

--- Invite other player to your party.
-- This function is a wrapper around the external function playerInviteParty.
-- @param targetId (number) - The target player to invite
function Player.inviteParty(targetId)

--- Enable shared experience state on your party.
-- This function is a wrapper around the external function playerEnableSharedExpParty.
-- @param enabled (boolean) - Enabled state
function Player.enableSharedExpParty(enabled)
```