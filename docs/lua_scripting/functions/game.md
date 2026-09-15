---
sidebar_position: 10
---

# Game
Overall game useful functions

```lua
Game.Events
Game.turn(direction)
Game.talk(message, type)
Game.talkChannel(message, channelId)
Game.talkPrivate(message, receiver)
Game.openChannel(channelId)
Game.walk(direction)
Game.attack(creatureId)
Game.follow(creatureId)
Game.getItemCount(itemId, itemTier)
Game.getInventoryItems()
Game.useItemOnGround(itemId, x, y, z)
Game.useItemOnInventory(itemId, inventorySlot)
Game.useItemFromGround(x, y, z)
Game.getChannelsHistory()
Game.modalWindowAnswer(id, button, choice, closeAfterAnswer)
Game.useItemWithCreature(id, creatureId)
Game.lootCorpse(x, y, z)
Game.equipItem(itemId, tier)
Game.useItem(itemId)
Game.forgeConvertDust()
Game.forgeConvertSlivers()
Game.forgeIncreaseLimit()
Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)
Game.writeTextWindow(text)
Game.applyImbuement(slot, imbuementId, isProtected)
Game.applyImbuementOnScroll(imbuementId)
Game.clearImbuement(slot)
Game.closeImbuementWindow()
Game.autoLoot()
Game.requestQuestLog()
Game.requestQuestLines(questId)
Game.stashRetrieve(itemId, itemCount)
Game.storeBuyOffer(offerId, offerType)
Game.storeOpen()
Game.storeRequestOffers(categoryName)
Game.storeGetTibiaCoinsBalance()
Game.storeGetTransferableCoinsBalance()
Game.collectDailyReward(isFromShrine, itemsToPick)
Game.openDailyReward()
Game.huntingTaskRerollList(slot)
Game.huntingTaskRerollRewards(slot)
Game.huntingTaskListAllMonsters(slot)
Game.huntingTaskSelectMonster(slot, raceId, selectMaximumAmount)
Game.huntingTaskCancel(slot)
Game.huntingTaskClaim(slot)
Game.taskBoardAction(action, firstValue, secondValue)
Game.openTaskBoardBounty()
Game.openTaskBoardWeekly()
Game.setTaskBoardBountyDifficulty(difficulty)
Game.rerollTaskBoardBounties()
Game.claimTaskBoardDailyReroll()
Game.selectTaskBoardBounty(taskIndex)
Game.claimTaskBoardBountyReward()
Game.upgradeTaskBoardTalisman(pathIndex)
Game.deliverTaskBoardWeekly(taskIndex)
Game.setTaskBoardWeeklyDifficulty(difficulty)
Game.openTaskBoardShop()
Game.buyTaskBoardOffer(offerIndex)
Game.unlockTaskBoardPreferenceSlot()
Game.clearTaskBoardPreferred(slot)
Game.clearTaskBoardUnwanted(slot)
Game.assignTaskBoardPreferred(slot, raceId)
Game.assignTaskBoardUnwanted(slot, raceId)
Game.registerEvent(type, fn)
Game.unregisterEvent(type, fn)
```

### Code

```lua
Game.Events = {
    TALK = 0,
    MAGIC_EFFECT = 1,
    HUD_CLICK = 2,
    HOTKEY_SHORTCUT_PRESS = 3,
    TEXT_MESSAGE = 4,
    MODAL_WINDOW = 5,
    CUSTOM_MODAL_WINDOW_BUTTON_CLICK = 6,
    IMBUEMENT_DATA = 7,
    IMBUEMENT_OPEN_WINDOW = 8, -- 15.10+
    QUEST_LOG = 9,
    QUEST_LINES = 10,
    DISTANCE_SHOOT_EFFECT = 11,
    PARTY_HUNT = 12,
    LABEL = 13,
    OPEN_STASH = 14,
    HUD_DRAG = 15,
    STORE_CATEGORIES = 16,
    STORE_OFFERS = 17,
    OPEN_DAILY_REWARD = 18,
    DAILY_REWARD_DAYS_DATA = 19,
    ALARM = 20,
    TASK_HUNTING_DATA = 21,
    TASK_BOARD_DATA = 22
}

--- Turn the player in a specified direction.
-- This function is a wrapper around the external function gameTurn.
-- @param direction (number) - The direction to turn the player, refer the parameter as Enums.Directions
function Game.turn(direction)

--- Send a message or perform a certain type of talk action.
-- This function is a wrapper around the external function gameTalk.
-- @param message (string) - The message to send or the talk action to perform.
-- @param type (number) - The type of talk action to perform, if applicable. Refer the parameter as Enums.TalkTypes
function Game.talk(message, type)

--- Send a message to a specific channelId.
-- This function is a wrapper around the external function gameTalkChannel.
-- To get history of openned channels use Game.getChannelsHistory
-- @param message (string) - The message to be sent.
-- @param channelId (number) - The id of channel.
function Game.talkChannel(message, channelId)

--- Send a private message to a specific player by name.
-- This function is a wrapper around the external function gameTalkPrivate.
-- @param message (string) - The message to be sent.
-- @param receiver (string) - The player name.
function Game.talkPrivate(message, receiver)

--- Open a specific channel by id. For now, if you need to get the id of a specific channel, you can open it in-game and use the function Game.getChannelsHistory.
--- This function is a wrapper around the external function gameOpenChannel.
--- @param channelId (number) - The id of channel to be opened.
--- @return True if the action was sent to server, or false if the action failed to be sent.
function Game.openChannel(channelId)

--- Move the player in a specified direction.
-- This function is a wrapper around the external function gameWalk.
-- @param direction (number) - The direction to move the player. Use a value from Enums.Directions.
function Game.walk(direction)

--- Attack a specified creature.
-- This function is a wrapper around the external function gameAttack.
-- @param creatureId (number) - The ID of the creature to attack.
function Game.attack(creatureId)

--- Follow a specified creature.
--- This function is a wrapper around the external function gameFollow.
--- @param creatureId (number) - The ID of the creature to follow.
function Game.follow(creatureId)

--- Get item count of specified ID by Tier.
--- If the itemTier parameter value is not provided or is 0, the function will return the total count of items without tier.
-- This function is a wrapper around the external function gameGetItemCount.
-- @param itemId (number) - The ID of item.
-- @param itemTier (number) - The tier of item. This parameter is optional.
function Game.getItemCount(itemId, itemTier)

--- Get all items stored on player inventory.
-- This function is a wrapper around the external function gameGetInventoryItems.
-- @return a table containing all available inventory items, every item follow this format: {id=0,count=0,tier=0}
function Game.getInventoryItems()

--- Use an item on the ground.
-- This function is a wrapper around the external function gameUseItemOnGround.
-- It allows the use of a specified item on the ground at a particular position.
-- @param itemId (number) - The ID of the item to be used.
-- @param x (number) - The x-coordinate of the position where the item is to be used.
-- @param y (number) - The y-coordinate of the position where the item is to be used.
-- @param z (number) - The z-coordinate of the position where the item is to be used.
-- @return true if used item correctly, false otherwise.
function Game.useItemOnGround(itemId, x, y, z)

-- Use an item on inventory.
-- This function is a wrapper around the external function gameUseItemOnInventory.
-- It allows the use of a specified item on a specific inventory slot.
-- @param itemId (number) - The ID of the item to be used.
-- @param inventorySlot (number) - The inventory slot where the item is to be used. Refer the parameter as Enums.InventorySlot
-- @return true if used item correctly, false otherwise.
function Game.useItemOnInventory(itemId, inventorySlot)

--- Use an item from ground.
-- This function is a wrapper around the external function gameUseItemFromGround.
-- It allows the use of a item located in a specific position.
-- @param x (number) - The x-coordinate of the position where the item is located.
-- @param y (number) - The y-coordinate of the position where the item is located.
-- @param z (number) - The z-coordinate of the position where the item is located.
-- @return true if it was possible to use item, false otherwise.
function Game.useItemFromGround(x, y, z)

-- Get channels history of current session
-- This information will be available if you logged in with bot injected, so it can gather channels informations
-- @return table containing history of openned channels with id and name
function Game.getChannelsHistory()

-- Answer current modal window
-- This function is a wrapper around the external function gameModalWindowAnswer.
-- @param id (number) - The ID of the modal window.
-- @param button (number) - The button id to be clicked.
-- @param choice (number) - The choice id to be selected.
-- @param closeAfterAnswer (boolean) - If should close the modal window by using default close event after modal answer. Default is true.
-- @return true if was sent successfully sent the action, if not failed
function Game.modalWindowAnswer(id, button, choice, closeAfterAnswer)

-- Use item with creature by id
-- This function is a wrapper around the external function gameUseItemWithCreature.
-- @return true if was sent successfully sent the action, if not failed
function Game.useItemWithCreature(id, creatureId)

-- Loot a corpse at specific map coordinate
-- This function is a wrapper around the external function gameLootCorpse.
-- @param x (number) - The x-coordinate of the map destination position.
-- @param y (number) - The y-coordinate of the map destination position.
-- @param z (number) - The z-coordinate of the map destination position.
-- @return true if was sent successfully sent the action, if not failed
function Game.lootCorpse(x, y, z)

--- Equip an item. (Can be used to de-equip too, read below)
-- This function is a wrapper around the external function gameEquipItem.
-- Equip a specific item by id and tier. You can use it to de-equip an item by passing the item id equipped.
-- @param itemId (number) - The ID of the item to be equiped.
-- @param tier (number) - The tier of item to be equiped.
function Game.equipItem(itemId, tier)

--- Use an item.
-- This function is a wrapper around the external function gameUseItem.
-- It allows the use of a specified item.
-- @param itemId (number) - The ID of the item to be used.
function Game.useItem(itemId)

-- Forge convert dusts action
-- This function is a wrapper around the external function gameForgeConvertDust.
-- @return true when the request is accepted by the packet sender, otherwise nil; this is not server success confirmation.
function Game.forgeConvertDust()

-- Forge convert slivers action
-- This function is a wrapper around the external function gameForgeConvertSlivers.
-- @return true when the request is accepted by the packet sender, otherwise nil; this is not server success confirmation.
function Game.forgeConvertSlivers()

-- Forge increase dust limit action
-- This function is a wrapper around the external function gameForgeIncreaseLimit.
-- @return true when the request is accepted by the packet sender, otherwise nil; this is not server success confirmation.
function Game.forgeIncreaseLimit()

-- Fuse two items in the Exaltation Forge.
-- This function is a wrapper around the external function gameForgeFuseItems.
-- The protocol uses one tier value for both items, so tierA and tierB must match.
-- IDs must be integers in 0..65535 and tiers in 0..255. Both items must exist at that tier in the synchronized inventory.
-- If the IDs match, at least two copies are required. Core options are not exposed by this method.
-- @param itemIdA (number) - The ID of the first item.
-- @param tierA (number) - The tier of the first item.
-- @param itemIdB (number) - The ID of the second item.
-- @param tierB (number) - The tier of the second item.
-- @param useConvergence (boolean) - Whether to use Convergence Fusion.
-- @return true when the request is accepted by the packet sender, otherwise nil; this is not server success confirmation.
function Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)

-- Write text to a window
-- This function is a wrapper around the external function gameWriteTextWindow.
-- Note: you need to open a text window before writing the text. Additionally, this function automatically closes the window after writing by simulating the ESCAPE key. This function sends the text directly to the server to be written, it is not dependent on the game interface. It is important to have the text window open before using this function.
-- @param text (string) - The text to be written.
function Game.writeTextWindow(text)

-- Apply imbuement.
-- This function is a wrapper around the external function gameApplyImbuement.
-- @param slot (number) - The slot of the item to clear the imbuement. The slot value starts at 0. Example: slot 0, 1, 2.
-- @param imbuementId (number) - The ID of the imbuement to be applied.
-- @param isProtected (boolean) - If should increase success rate for imbuement. This argument can be ignored in version 15.10 or newer.
-- @return true if was successfully sent the action to server, otherwise false
function Game.applyImbuement(slot, imbuementId, isProtected)

-- Apply imbuement on Imbue Scroll.
-- This function is a wrapper around the external function gameApplyImbuementOnScroll.
-- Only available for version 15.10 or newer.
-- @param imbuementId (number) - The ID of the imbuement to be applied.
-- @return true if was successfully sent the action to server, otherwise false
function Game.applyImbuementOnScroll(imbuementId)

-- Clear imbuement
-- This function is a wrapper around the external function gameClearImbuement.
-- @param slot (number) - The slot of the item to clear the imbuement. The slot value starts at 0. Example: slot 0, 1, 2.
-- @return true if was successfully sent the action to server, otherwise false
function Game.clearImbuement(slot)

-- Close imbuement window
-- This function is a wrapper around the external function gameCloseImbuementWindow.
-- @return true if was successfully sent the action to server, otherwise false
function Game.closeImbuementWindow()

-- Trigger ZeroBot native auto loot function (located on Tools -> More... -> Auto Loot)
-- This function is a wrapper around the external function gameAutoLoot.
function Game.autoLoot()

-- Request the quest log from the server. You should use Game.Events.QUEST_LOG event to get the response.
-- This function is a wrapper around the external function gameRequestQuestLog.
-- @return true if was successfully sent the action to server, otherwise false
function Game.requestQuestLog()

-- Request the quest lines from the server. You should use Game.Events.QUEST_LINES event to get the response.
-- This function is a wrapper around the external function gameRequestQuestLines.
-- @param questId (number) - The ID of the quest to request the lines.
-- @return true if was successfully sent the action to server, otherwise false
function Game.requestQuestLines(questId)

-- Retrieve specific item from stash. It's important to refer all data from Game.Events.OPEN_STASH event.
-- To use this function you need to open stash and trigger Game.Events.OPEN_STASH event first.
-- This function is a wrapper around the external function gameStashRetrieve.
-- @param itemId (number) - The ID of the item to be retrieved.
-- @param itemCount (number) - The count of the item to be retrieved.
-- @return true if was successfully sent the action to server, or nil if the item/counting is invalid, otherwise false.
function Game.stashRetrieve(itemId, itemCount)

-- Buy a specific offer from game store. You should use Game.Events.STORE_OFFERS event to get the available offers.
-- This function is a wrapper around the external function gameStoreBuyOffer.
-- @param offerId (number) - The ID of the offer to be purchased.
-- @param offerType (number) - The type of the offer to be purchased. Refer to Enums.GameStoreOfferType.
-- @return true if was successfully sent the action to server and the offer exists and isn't disabled. Otherwise false.
function Game.storeBuyOffer(offerId, offerType)

-- Open game store window
-- This function is a wrapper around the external function gameStoreOpen.
-- @return true if was successfully sent the action to server, otherwise false
function Game.storeOpen()

-- Request game store category offers
-- This function is a wrapper around the external function gameStoreRequestOffers.
-- @param categoryName (string) - The name of the category to request offers from.
-- @return true if was successfully sent the action to server and the category exists, otherwise false
function Game.storeRequestOffers(categoryName)

-- Get current tibia coins balance from game store. This data can be updated after a purchase or when the store window is opened.
-- This function is a wrapper around the external function gameStoreGetCoinsBalance.
-- @return number containing the current coins balance
function Game.storeGetTibiaCoinsBalance()

-- Get current transferable coins balance from game store. This data can be updated after a purchase or when the store window is opened.
-- This function is a wrapper around the external function gameStoreGetTransferableCoinsBalance.
-- @return number containing the current transferable coins balance
function Game.storeGetTransferableCoinsBalance()

--- Collect current daily reward.
--- This function is a wrapper around the external function gameCollectDailyReward.
--- IMPORTANT: about Premium rewards please, make sure you are using these functions: Player.isPremium() and Player.hasReceivedBasicData()
--- @param isFromShrine (boolean) - If the daily reward is being collected from a shrine.
--- @param itemsToPick (table) - A table containing the indexes of the items to pick from the daily reward. If the current day streak doesn't have items to pick, this parameter should be nil.
--- @return true if was successfully sent the action to server, otherwise false
function Game.collectDailyReward(isFromShrine, itemsToPick)

--- Open daily reward window.
--- This function is a wrapper around the external function gameOpenDailyReward.
--- This will open the remote daily reward window version (the one that you click on UI button called Open reward wall), if you want to open the shrine version you can use the shrine item from map.
--- @return true if was successfully sent the action to server, otherwise false
function Game.openDailyReward()

--- Reroll a specific hunt task list column.
--- This function is a wrapper around the external function gameHuntingTaskRerollList.
--- @param slot (number) - The column slot of the task list to reroll. From 0 to 2.
--- @return true if was successfully sent the action to server (validating if it's possible to reroll list), otherwise nil
function Game.huntingTaskRerollList(slot)

--- Reroll the rewards of a specific hunt task column. Remember: you should have hunting task data available, you can get it after a relogin.
--- This function is a wrapper around the external function gameHuntingTaskRerollRewards.
--- @param slot (number) - The column slot of the task list to reroll the rewards. From 0 to 2.
--- @return true if was successfully sent the action to server (validating if it's possible to reroll rewards), otherwise nil
function Game.huntingTaskRerollRewards(slot)

--- Triggers the action that shows all monsters available to select a specific one, by paying a prey wildcard's fee. By doing that the player can choose a monster by name. Remember: you should have hunting task data available, you can get it after a relogin.
--- This function is a wrapper around the external function gameHuntingTaskListAllMonsters.
--- @param slot (number) - The column slot of the task list to show all monsters. From 0 to 2.
--- @return true if was successfully sent the action to server (validating if it's possible to list all monsters), otherwise nil
function Game.huntingTaskListAllMonsters(slot)

--- Select a specific monster in a hunt task column. Remember: you should have hunting task data available, you can get it after a relogin.
--- This function is a wrapper around the external function gameHuntingTaskSelectMonster.
--- @param slot (number) - The column slot of the task list to select the monster. From 0 to 2.
--- @param raceId (number) - The monster raceId. You can use Client.getMonsterByRaceId and hunting task event for more details.
--- @param selectMaximumAmount (boolean) - If should select the maximum amount available for the selected monster. Remember: You can only select the maximum amount option if the monster is unlocked in bestiary. This argument is optional, by default it will try to select the maximum amount.
--- @return true if was successfully sent the action to server (validating if it's possible to select the monster), otherwise nil
function Game.huntingTaskSelectMonster(slot, raceId, selectMaximumAmount)

--- Cancel the selected monster in a hunt task column. Remember: you should have hunting task data available, you can get it after a relogin.
--- This function is a wrapper around the external function gameHuntingTaskCancel.
--- @param slot (number) - The column slot of the task list to cancel the monster selection. From 0 to 2.
--- @return true if was successfully sent the action to server (validating if it's possible to cancel the monster selection), otherwise nil
function Game.huntingTaskCancel(slot)

--- Claim the reward of a specific hunt task column. Remember: you should have hunting task data available, you can get it after a relogin.
--- This function is a wrapper around the external function gameHuntingTaskClaim.
--- @param slot (number) - The column slot of the task list to claim the reward. From 0 to 2.
--- @return true if was successfully sent the action to server (validating if it's possible to claim the reward), otherwise nil
function Game.huntingTaskClaim(slot)

-- Register a game event
-- Example: Game.registerEvent(Game.Events.TALK, myTalkEvent)
function Game.registerEvent(type, fn)

-- Unregister a game event
-- Example: Game.unregisterEvent(Game.Events.TALK, myTalkEvent)
function Game.unregisterEvent(type, fn)
```

<!-- current-core-api:start -->
## Events

Register and unregister the same callback reference:

```lua
local function onTalk(authorName, authorLevel, talkType, x, y, z, text, channelId)
    print(authorName, text)
end

Game.registerEvent(Game.Events.TALK, onTalk)
-- Later:
Game.unregisterEvent(Game.Events.TALK, onTalk)
```

`Game.executeEvents` is an internal dispatcher and is intentionally not part of the public API.

## Additional game actions

- `Game.openChannel(channelId)` opens a channel. Use `Game.getChannelsHistory()` to inspect IDs seen during the current injected session.
- `Game.follow(creatureId)` follows a creature.
- `Game.useItemOnInventory(itemId, inventorySlot)` uses an item in `Enums.InventorySlot`.
- `Game.applyImbuementOnScroll(imbuementId)` applies an imbuement to an Imbuement Scroll and requires client 15.10+.
- `Game.autoLoot()` triggers ZeroBot's native Auto Loot action.
- `Game.requestQuestLog()` requests data delivered through `Game.Events.QUEST_LOG`.
- `Game.requestQuestLines(questId)` requests data delivered through `Game.Events.QUEST_LINES`.
- `Game.stashRetrieve(itemId, itemCount)` requires an open stash and current `Game.Events.OPEN_STASH` data.

## Store and Daily Reward

- `Game.storeOpen()` opens the remote store.
- `Game.storeRequestOffers(categoryName)` requests offers; consume them through `Game.Events.STORE_OFFERS`.
- `Game.storeBuyOffer(offerId, offerType)` buys an available offer. Use `Enums.GameStoreOfferType`.
- `Game.storeGetTibiaCoinsBalance()` and `Game.storeGetTransferableCoinsBalance()` return the last balances received from the store.
- `Game.openDailyReward()` opens the remote Reward Wall window.
- `Game.collectDailyReward(isFromShrine, itemsToPick)` collects the current reward. Pass `nil` for `itemsToPick` when the streak has no selectable items. Before handling premium rewards, verify `Player.hasReceivedBasicData()` and `Player.isPremium()`.

## Hunting Tasks

Hunting Task slots use indexes `0` through `2`. Task data is delivered after login and whenever the Hunting Tasks data changes:

```lua
local function onTaskHuntingData(task)
    if task.state == Enums.PreyTaskDataState.PREY_TASK_DATA_STATE_SELECTION then
        for _, option in ipairs(task.raceIdList or {}) do
            local monster = Client.getMonsterByRaceId(option.raceId)
            print(task.slotId, option.raceId, monster and monster.name or "unknown")
        end
    end
end

Game.registerEvent(Game.Events.TASK_HUNTING_DATA, onTaskHuntingData)
```

State-specific payloads:

| State | Additional fields |
| --- | --- |
| `PREY_TASK_DATA_STATE_LOCKED` | `isPremium`, `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_INACTIVE` | `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_SELECTION` | `raceIdList = {{raceId, isUnlocked}}`, `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_LIST_SELECTION` | `bestiaryList = {{raceId, isUnlocked}}`, `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_ACTIVE` | `selectedRaceId`, `isSlotUpgrade`, `firstKills`, `secondKills`, `currentKills`, `rarity`, `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_COMPLETED` | `selectedRaceId`, `isSlotUpgrade`, `firstKills`, `secondKills`, `currentFirstKills`, `currentSecondKills`, `rarity`, `freeRerollTimestamp` |

Every payload also contains `slotId` and `state`. Compare `state` with `Enums.PreyTaskDataState`.

- `Game.huntingTaskRerollList(slot)` rerolls the offered monster list.
- `Game.huntingTaskRerollRewards(slot)` rerolls rewards.
- `Game.huntingTaskListAllMonsters(slot)` opens the all-monsters selection for the prey-wildcard fee.
- `Game.huntingTaskSelectMonster(slot, raceId, selectMaximumAmount)` selects a monster. The last argument defaults to `true`; maximum amount is only available for an unlocked bestiary entry.
- `Game.huntingTaskCancel(slot)` cancels the selected task.
- `Game.huntingTaskClaim(slot)` claims a completed task reward.

These action methods return `true` when the validated action was sent and `nil` when it could not be sent. Current prices and balances are available through `Player.getHuntingTaskPrices()`, `Player.getHuntingPoints()`, and `Player.getPreyWildcards()`.

## Hunting Tasks: Bounty, Weekly and Shop

See the [Hunting Tasks API](./hunting_tasks) for all 18 methods, `TASK_BOARD_DATA` payloads, enums, zero-based indexes, state/resource checks, and the no-argument preference-slot unlock. These methods require protocol 15.20+ and a supporting server; the public Lua names retain `TaskBoard` for compatibility.
## Exaltation Forge

`Game.forgeConvertDust()`, `Game.forgeConvertSlivers()`, `Game.forgeIncreaseLimit()`, and `Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)` return `true` when ZeroBot accepts the request for sending, or `nil` when validation or packet submission fails. Sender rejection can also occur when disconnected, rate-limited, or submitting a duplicate queued packet. Do not interpret `true` as successful conversion, fusion, or reward delivery by the server.

Fusion requires all five arguments: four numeric values and a boolean `useConvergence`. Incorrect argument counts or types raise a Lua error. The native preflight returns `nil` for fractional or out-of-range item IDs/tiers, unequal tiers, or insufficient items in the synchronized server inventory. IDs must be integers from `0` through `65535`; tiers must be integers from `0` through `255`. Both item counts are read from the same snapshot. Identical item IDs require at least two copies at that tier; different IDs require at least one of each.

The sender rejects Convergence Fusion on client versions that do not support it; use `false` for ordinary fusion. This method does not expose core-assisted success or tier-loss reduction: both core options are disabled in ordinary fusion requests. Inventory preflight is only a local safety check, not confirmation of item eligibility, gold, dust, or server acceptance. The server remains authoritative.
<!-- current-core-api:end -->
