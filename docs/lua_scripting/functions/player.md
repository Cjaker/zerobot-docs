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
Player.getExperience()
Player.getXpBoostTime()
Player.getSkills()
Player.getTargetId()
Player.getFollowId()
Player.getInventorySlot(slot)
Player.getState(index)
Player.getContainers()
Player.getDusts()
Player.getDustsMaximum()
Player.getTotalGoldBalance()
Player.joinParty(targetId)
Player.inviteParty(targetId)
Player.enableSharedExpParty(enabled)
Player.passLeadershipParty(targetId)
Player.getBlessingState()
Player.isSerene()
Player.getHarmony()
Player.getMonkPassiveType()
Player.getStances()
Player.getUnjustifiedData()
Player.isPremium()
Player.hasReceivedBasicData()
Player.getHuntingTaskPrices()
Player.getHuntingPoints()
Player.getPreyWildcards()
Player.getBountyPoints()
Player.getSoulSeals()
Player.leaveParty()
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

--- Get the player's current experience.
--- This function is a wrapper around the external function playerGetExperience.
--- @return The player's current experience, or last value if isn't in-game.
function Player.getExperience()

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

-- Get current player dusts amount.
-- This function is a wrapper around the external function playerGetDusts.
-- @return The player's current dusts amount, or last value if isn't in-game.
function Player.getDusts()

-- Get maximum dusts amount.
-- This function is a wrapper around the external function playerGetDustsMaximum.
-- @return The player's maximum dusts amount, or last value if isn't in-game.
function Player.getDustsMaximum()

-- Get the player's total gold balance.
-- This function is a wrapper around the external function playerGetTotalGoldBalance.
-- @return The player's total gold balance, or last value if isn't in-game. This value is generally updated when you open some window in-game that have this information, some cases like: open market, open prey window & etc.
function Player.getTotalGoldBalance()

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

--- Pass the party leadership to another player.
--- This function is a wrapper around the external function playerPassLeadershipParty.
--- @param targetId (number) - The target player id to pass the leadership
function Player.passLeadershipParty(targetId)

-- Get the player's blessing state.
-- This function is a wrapper around the external function playerGetBlessingState.
function Player.getBlessingState()

-- Get player's serene state.
-- This function is a wrapper around the external function playerIsSerene.
-- @return If player is in serene state, or last value if isn't in-game.
function Player.isSerene()

-- Get the player's harmony.
-- This function is a wrapper around the external function playerGetHarmony.
-- @return The player's current harmony, or last value if isn't in-game.
function Player.getHarmony()

-- Get the player's enabled passive type. (Only for Monk vocation).
-- This function is a wrapper around the external function playerGetMonkPassiveType.
-- @return The player's current enabled passive type, or last value if isn't in-game. Refer to Enums.MonkPassiveType for the returned value.
function Player.getMonkPassiveType()

-- Get all enabled stances.
-- ONLY SUPPORTED IN VERSION 15.25 OR SUPERIOR.
-- This function is a wrapper around the external function playerGetStances.
-- @return A table containing all stances spell ids, or nil if you are using it in an unsupported version. You can check what's the spell by using functions from Spells library.
function Player.getStances()

-- Get the player's unjustified data.
-- This function is a wrapper around the external function playerGetUnjustifiedData.
-- Output example: {
--    dayProgress = 0,
--    dayLeft = 0,
--    weekProgress = 0,
--    weekLeft = 0,
--    monthProgress = 0,
--    monthLeft = 0,
--    skullDuration = 0
--}
-- This information will only be available if server sent it (not when you injected the bot after logged in), if isn't available it's recommended to relogin your character.
-- @return The player's current unjustified data as a table, or last value if isn't in-game.
function Player.getUnjustifiedData()

-- Return if player is premium.
-- This function is a wrapper around the external function playerIsPremium.
-- This information will only be available if server sent it (not when you injected the bot after logged in), if isn't available it's recommended to relogin your character.
-- To guarantee that information has been received, you can use: Player.hasReceivedBasicData()
-- @return The player's premium state.
function Player.isPremium()

-- Return if player has received basic data.
-- This function is a wrapper around the external function playerHasReceivedBasicData.
-- To guarantee that information has been received, you need to relogin your character if you injected the bot after logged in.
-- @return true if player has received basic data, otherwise false.
function Player.hasReceivedBasicData()

-- Get the player's current hunting task prices. Remember: you should have hunting task data available, you can get it after a relogin.
-- This function is a wrapper around the external function playerGetHuntingTaskPrices.
-- @return The player's current hunting task prices as a table, or last value if isn't in-game. Table format: {rerollPrice=0,cancelPrice=0,selectionListPrice=0,rewardRerollPrice=0}
function Player.getHuntingTaskPrices()

-- Get the player's current hunting points. Remember: you should have hunting task data available, you can get it after a relogin.
-- This function is a wrapper around the external function playerGetHuntingPoints.
-- @return The player's current hunting points, or last value if isn't in-game.
function Player.getHuntingPoints()

-- Get the player's current prey wildcards. Remember: you should have hunting task data available, you can get it after a relogin.
-- This function is a wrapper around the external function playerGetPreyWildcards.
-- @return The player's current prey wildcards, or last value if isn't in-game.
function Player.getPreyWildcards()

-- Get the player's current Bounty Points balance.
-- This function is a wrapper around the external function playerGetBountyPoints.
-- @return The player's cached Bounty Points, or 0 after login until the server sends the balance.
function Player.getBountyPoints()

-- Get the player's current Soulseals balance.
-- This function is a wrapper around the external function playerGetSoulSeals.
-- @return The player's cached Soulseals, or 0 after login until the server sends the balance.
function Player.getSoulSeals()

--- Leave the current party.
--- This function is a wrapper around the external function playerLeaveParty.
function Player.leaveParty()
```

<!-- current-core-api:start -->
## Additional player data

- `Player.getExperience()` returns current experience.
- `Player.isSerene()`, `Player.getHarmony()`, and `Player.getMonkPassiveType()` expose Monk state. Compare the passive type with `Enums.MonkPassiveType`.
- `Player.getStances()` returns enabled stance spell IDs and is available only on client 15.25+. Use the `Spells` API to inspect each ID.
- `Player.getUnjustifiedData()` returns `{dayProgress, dayLeft, weekProgress, weekLeft, monthProgress, monthLeft, skullDuration}`.
- `Player.isPremium()` returns the received premium state.
- `Player.hasReceivedBasicData()` reports whether basic player data has arrived. If the bot was injected after login, relog before relying on premium or unjustified data.
- `Player.getHuntingTaskPrices()` returns `{rerollPrice, cancelPrice, selectionListPrice, rewardRerollPrice}`.
- `Player.getHuntingPoints()` returns current hunting points.
- `Player.getPreyWildcards()` returns current prey wildcards.
- `Player.getBountyPoints()` returns cached Bounty Points, or `0` after login until the server sends the balance.
- `Player.getSoulSeals()` returns cached Soulseals, or `0` after login until the server sends the balance.

Hunting Task values are available after the server sends hunting-task data, normally after login or a Hunting Tasks update.
## Hunting Tasks balances

```lua
Player.getBountyPoints()
Player.getSoulSeals()
```

Both getters take no arguments and return a number: the corresponding cached balance received from the server. The native getters do not return `nil` to indicate missing balance data. Both balances reset to `0` when a login packet is parsed, and remain `0` until the server supplies an updated balance. Therefore, `0` can mean either an actual zero balance or balance data not yet received for the current login; these getters do not expose a separate availability flag.

The [Hunting Tasks API](./hunting_tasks) uses the cached Bounty Points balance for talisman upgrades, preference-slot unlocks, and clearing preferences. Its `TASK_BOARD_DATA` payload does not include the player's Bounty Points or Soulseals balance; `weekly.soulSealsReward` is a reward amount, not the current balance. Wait for the corresponding complete window snapshot before stateful actions, and treat the server as authoritative.
<!-- current-core-api:end -->
