---
sidebar_position: 11
---

# Hunting Tasks: Bounty, Weekly and Shop

These Hunting Tasks methods require protocol 15.20 or newer and a server that supports the feature. The public Lua names retain `TaskBoard` for compatibility. They are separate from the older `Game.huntingTask*` methods and their `TASK_HUNTING_DATA` event.

```lua
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
```

## Return values and server data

Each method returns `true` when the request is accepted by ZeroBot's packet sender, or `nil` when the protocol is unsupported, a required snapshot is missing, a state/resource check fails, or the sender rejects the request. `true` is not confirmation that the server completed the action or granted a reward. Invalid argument counts, types, or numeric protocol ranges raise a Lua error rather than returning `nil`.

Before a stateful action, open its corresponding window and wait for `Game.Events.TASK_BOARD_DATA`. ZeroBot caches the latest complete server snapshot separately for Bounty, Weekly and Shop, and clears those snapshots on disconnect. Register the callback before opening the window; wait for updated data after an action instead of repeatedly sending requests against an old snapshot.

```lua
local function onHuntingTasksData(data)
    if not data.complete then
        return
    end

    if data.windowType == Enums.TaskBoardWindow.BOUNTY then
        for _, task in ipairs(data.bounty.tasks) do
            -- task.index is the zero-based server index, not the Lua array position.
            print("bounty", task.index, task.raceId, task.currentKills)
        end
    elseif data.windowType == Enums.TaskBoardWindow.WEEKLY then
        for _, task in ipairs(data.weekly.deliveryTasks) do
            print("delivery", task.index, task.itemId, task.availableItems)
        end
    elseif data.windowType == Enums.TaskBoardWindow.SHOP then
        print("offer count", data.shop.offerCount)
    end
end

Game.registerEvent(Game.Events.TASK_BOARD_DATA, onHuntingTasksData)
local requested = Game.openTaskBoardBounty()
if not requested then
    print("Hunting Tasks request was not accepted")
end

-- When the listener is no longer needed:
-- Game.unregisterEvent(Game.Events.TASK_BOARD_DATA, onHuntingTasksData)
```

## Action reference

All indexes and difficulty values below are integers. Use explicit `task.index` fields for Bounty selection and Weekly delivery. `talismanLines` and `preferenceSlots` are Lua arrays starting at `1`; subtract `1` from an array position when passing a path or preference-slot index.

| Method | Required server data and validation |
| --- | --- |
| `Game.openTaskBoardBounty()` | Requests the Bounty window; no cached snapshot required. |
| `Game.openTaskBoardWeekly()` | Requests the Weekly window; no cached snapshot required. |
| `Game.openTaskBoardShop()` | Requests the Shop window; no cached snapshot required. |
| `Game.setTaskBoardBountyDifficulty(difficulty)` | Complete Bounty snapshot; difficulty `0` through `3`. |
| `Game.rerollTaskBoardBounties()` | Bounty state `SELECTION`; `rerollTasks` is nonzero or `rerollMode` is `DAILY_CLAIMABLE`. |
| `Game.claimTaskBoardDailyReroll()` | Bounty `rerollMode` is `DAILY_CLAIMABLE`. |
| `Game.selectTaskBoardBounty(taskIndex)` | Bounty state `SELECTION`; listed task with matching `index` and `claimRewardType` equal to `SELECT_TASK`. |
| `Game.claimTaskBoardBountyReward()` | Bounty state `COMPLETED`; exactly one task with `claimRewardType` equal to `REWARD_CLICKED`. |
| `Game.upgradeTaskBoardTalisman(pathIndex)` | Path `0` through `3` exists; `upgradeAvailable` is true and the cached Bounty Points balance covers `upgradeCost`. |
| `Game.deliverTaskBoardWeekly(taskIndex)` | Listed Weekly delivery task with matching `index`; `delivered` is `0` and `availableItems` covers `requiredItems`. |
| `Game.setTaskBoardWeeklyDifficulty(difficulty)` | Weekly `weeklyProgressFinished` is nonzero; difficulty `0` through `3`, not above `unlockedDifficulty`. |
| `Game.buyTaskBoardOffer(offerIndex)` | Complete Shop snapshot; zero-based index below `offerCount` and at most `255`. Offer details and purchase success are not exposed by this API. |
| `Game.unlockTaskBoardPreferenceSlot()` | Complete Bounty snapshot; at least one inactive preference slot and sufficient cached Bounty Points. **No argument:** the server chooses the first inactive slot. The local cost check is `min(zeroBasedSlotIndex * 300, 1200)`. |
| `Game.clearTaskBoardPreferred(slot)` | Existing active preference slot with nonzero `preferredRaceId`; at least `10` cached Bounty Points. |
| `Game.clearTaskBoardUnwanted(slot)` | Existing active preference slot with nonzero `unwantedRaceId`; at least `10` cached Bounty Points. |
| `Game.assignTaskBoardPreferred(slot, raceId)` | Existing active preference slot; integer `raceId` from `1` through `65535`. Server eligibility checks still apply. |
| `Game.assignTaskBoardUnwanted(slot, raceId)` | Existing active preference slot; integer `raceId` from `1` through `65535`. Server eligibility checks still apply. |

### Generic action method

`Game.taskBoardAction(action, firstValue, secondValue)` dispatches the same native actions as the named methods. Omit values not required by the action. The native API validates the resulting argument count.

| `Enums.TaskBoardAction` member | Value | Additional arguments |
| --- | --- | --- |
| `BOUNTY` | `0` | none |
| `WEEKLY` | `1` | none |
| `BOUNTY_DIFFICULTY` | `2` | `difficulty` |
| `BOUNTY_REROLL` | `3` | none |
| `CLAIM_DAILY_REROLL` | `4` | none |
| `BOUNTY_SELECT` | `5` | `taskIndex` |
| `BOUNTY_CLAIM_REWARD` | `6` | none |
| `TALISMAN_UPGRADE` | `7` | `pathIndex` |
| `WEEKLY_DELIVERY` | `8` | `taskIndex` |
| `WEEKLY_DIFFICULTY` | `9` | `difficulty` |
| `SHOP` | `10` | none |
| `SHOP_BUY` | `11` | `offerIndex` |
| `UNLOCK_PREFERENCE_SLOT` | `12` | `0` (reserved value, not a slot selector) |
| `CLEAR_PREFERRED` | `13` | `slot` |
| `CLEAR_UNWANTED` | `14` | `slot` |
| `ASSIGN_PREFERRED` | `15` | `slot, raceId` |
| `ASSIGN_UNWANTED` | `16` | `slot, raceId` |

The action must be an integer from `0` through `16`. First values are integers from `0` through `255`; assignment race IDs are integers from `0` through `65535`, with `0` rejected by the stateful validation. Prefer named methods, especially for unlocking a preference slot:

```lua
-- Equivalent requests; both require a complete Bounty snapshot.
Game.unlockTaskBoardPreferenceSlot()
-- Alternative, not a second request to send immediately:
-- Game.taskBoardAction(Enums.TaskBoardAction.UNLOCK_PREFERENCE_SLOT, 0)
```

## Event payload

`Game.Events.TASK_BOARD_DATA` has value `22`. The callback receives one table with `windowType`, boolean `complete`, and the window-specific `bounty`, `weekly`, or `shop` table. Do not treat an incomplete payload as actionable data.

| Enum | Members and values |
| --- | --- |
| `Enums.TaskBoardWindow` | `BOUNTY = 0`, `WEEKLY = 1`, `SHOP = 2` |
| `Enums.TaskBoardBountyState` | `NONE = 0`, `SELECTION = 1`, `ACTIVE = 2`, `COMPLETED = 3` |
| `Enums.TaskBoardBountyClaimRewardType` | `SELECT_TASK = 0`, `REWARD_NO_CLICK = 1`, `REWARD_CLICKED = 2` |
| `Enums.TaskBoardBountyRerollMode` | `DAILY_CLAIMABLE = 0`, `TIMER_RUNNING = 1`, `LIMIT_REACHED = 2` |

### Bounty

| Field | Contents |
| --- | --- |
| `state` | A value from `Enums.TaskBoardBountyState`. |
| `tasks` | Array of `{index, raceId, requiredKills, rewardExperience, rewardBountyPoints, currentKills, claimRewardType, taskGrade}`. |
| `rerollTasks` | Server-reported reroll count. |
| `dailyRerolls` | Compatibility alias for `rerollTasks`, not a separate balance. |
| `rerollMode` | A value from `Enums.TaskBoardBountyRerollMode`. |
| `selectedDifficulty` | Current Bounty difficulty. |
| `talismanLines` | Four entries with numeric `multiplier1`, `multiplier2`, boolean `upgradeAvailable`, and numeric `upgradeCost`. |
| `preferenceSlots` | Entries with boolean `active`, numeric `preferredRaceId`, and numeric `unwantedRaceId`. |

### Weekly

| Fields | Contents |
| --- | --- |
| `anyCreatureRequiredAmount`, `anyCreatureCurrentAmount` | Overall creature-kill requirement and progress. |
| `killTasks` | Array of `{raceId, requiredKills, currentKills}`. |
| `deliveryTasks` | Array of `{index, itemId, unknown1, unknown2, requiredItems, availableItems, delivered}`. The meanings of `unknown1` and `unknown2` are not confirmed. |
| `difficultyMultiplier`, `unlockedDifficulty` | Server-reported difficulty multiplier and unlocked difficulty. |
| `weeklyProgressFinished` | Numeric completion indicator. Test against `0`; Lua treats numeric `0` as truthy. |
| `completedKillTasks`, `completedDeliveryTasks` | Server-reported completed-task counts. |
| `killExperienceReward`, `itemDeliveryExperienceReward` | Experience rewards. |
| `nextResetTimestamp` | Numeric reset value from the server; its time unit is not confirmed here. |
| `thirdWeeklySlotUnlocked` | Boolean third-slot indicator. |
| `huntingPointsReward`, `soulSealsReward` | Weekly rewards. |

### Shop

`shop.offerCount` is the only exposed Shop field. Individual offer names, items, prices, availability, and purchase-result data are not exposed by the current parser. Do not infer them from an offer index.

## Validation scope

This reference is based on the distributed Lua core and native implementation, including the later state/resource and no-argument unlock fixes. The server remains authoritative. Documentation and static API checks do not replace testing these actions in a supported, connected client.
