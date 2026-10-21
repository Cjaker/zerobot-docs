---
sidebar_position: 1
---

# Game events

Game events let a script react to data received from the client, UI interactions, CaveBot state, and ZeroBot features.

## Registering and unregistering

```lua
local function onMagicEffect(effectType, x, y, z)
    print("effect", effectType, x, y, z)
end

Game.registerEvent(Game.Events.MAGIC_EFFECT, onMagicEffect)

-- Use the same function reference when it is no longer needed.
Game.unregisterEvent(Game.Events.MAGIC_EFFECT, onMagicEffect)
```

`Game.registerEvent` and `Game.unregisterEvent` return the callback passed to them. Keep callbacks in local variables when the script may unregister them later.

## Available events

| Event | Callback arguments | Trigger |
| --- | --- | --- |
| `Game.Events.TALK` | `authorName, authorLevel, type, x, y, z, text, channelId` | An in-game talk message is received. `type` uses `Enums.TalkTypes`; `channelId` identifies the channel when applicable. |
| `Game.Events.MAGIC_EFFECT` | `type, x, y, z` | A magic effect is received. |
| `Game.Events.HUD_CLICK` | `id` | A script-created HUD is clicked. |
| `Game.Events.HOTKEY_SHORTCUT_PRESS` | `key, modifier` | A supported keyboard shortcut is pressed. Compare both values with `HotkeyManager.parseKeyCombination`. |
| `Game.Events.TEXT_MESSAGE` | `messageData` | A server text message is received. `messageData.messageType` can be compared with `Enums.MessageTypes`, but message types may vary by client version. |
| `Game.Events.MODAL_WINDOW` | `modalWindowData` | The server opens an in-game modal window. |
| `Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK` | `modalId, buttonIndex` | A button in a script-created `CustomModalWindow` is clicked. |
| `Game.Events.IMBUEMENT_DATA` | `imbuementData` | Imbuement window data is received. |
| `Game.Events.IMBUEMENT_OPEN_WINDOW` | none | The imbuement window opens. Available for client version 15.10 or newer. |
| `Game.Events.QUEST_LOG` | `quests` | Quest-log data is received after the client or script requests it. |
| `Game.Events.QUEST_LINES` | `questId, missions` | Mission lines for a quest are received. |
| `Game.Events.DISTANCE_SHOOT_EFFECT` | `type, fromX, fromY, fromZ, toX, toY, toZ` | A distance-shoot effect is received. |
| `Game.Events.PARTY_HUNT` | `output` | Party Hunt output is captured. The Party Hunt option in the Engine tab must be enabled. |
| `Game.Events.LABEL` | `wpId, label` | CaveBot reaches a Label waypoint. CaveBot pauses until the callback resumes it with `CaveBot.pause(0)`. |
| `Game.Events.OPEN_STASH` | `stashData` | Stash data is received when the stash opens. |
| `Game.Events.HUD_DRAG` | `id, x, y` | A draggable HUD is released at a new screen position. |
| `Game.Events.STORE_CATEGORIES` | `storeCategoriesData` | Game Store category data is received. |
| `Game.Events.STORE_OFFERS` | `storeOffersData` | Game Store offer data is received. |
| `Game.Events.OPEN_DAILY_REWARD` | `dailyRewardData` | The Daily Reward window data is received. |
| `Game.Events.DAILY_REWARD_DAYS_DATA` | `dailyRewardDaysData` | Daily Reward day data is received. |
| `Game.Events.ALARM` | `alarmType` | A ZeroBot alarm triggers. Compare `alarmType` with `Enums.AlarmType`. |
| `Game.Events.TASK_HUNTING_DATA` | `taskHuntingData` | Hunting Tasks data or a slot update is received. Interpret `taskHuntingData.state` with `Enums.PreyTaskDataState`. |
| `Game.Events.TASK_BOARD_DATA` | `taskBoardData` | Bounty, Weekly or Shop window data is received. See the [Hunting Tasks API](./functions/hunting_tasks). |
| `Game.Events.BOSS_SLOT_UPDATE` | `bossSlotsData` | A complete Bosstiary Boss Slots snapshot is received from the server. See the [Boss Slots API](./functions/game). |

## Structured payloads

Several events pass a Lua table whose fields depend on the packet and, in some cases, the client version. Inspect the complete payload before relying on optional fields:

```lua
local function onTextMessage(messageData)
    print(JSON.encode(messageData))
end

Game.registerEvent(Game.Events.TEXT_MESSAGE, onTextMessage)
```

Common payloads include:

- `TEXT_MESSAGE`: channel, message type, text, position, colors, and numeric values supplied by the client.
- `MODAL_WINDOW`: modal ID, title, message, buttons, choices, default buttons, and priority.
- `OPEN_STASH`: `stashItems`, containing entries with `itemId` and `count`, plus `freeSlots`.
- `TASK_HUNTING_DATA`: a slot ID, state, and state-specific Hunting Tasks fields. See the Hunting Tasks section in the [Game API](./functions/game).
- `BOSS_SLOT_UPDATE`: Boss Points, two slots, boosted boss, and bosses currently available for assignment. See the [Boss Slots API](./functions/game).

Always guard optional fields and state-specific data:

```lua
local function onHuntingTasks(data)
    if data.state == Enums.PreyTaskDataState.PREY_TASK_DATA_STATE_ACTIVE then
        print("slot", data.slotId, "kills", data.currentKills)
    end
end

Game.registerEvent(Game.Events.TASK_HUNTING_DATA, onHuntingTasks)
```

## Interaction examples

### Hotkey

```lua
local valid, expectedModifier, expectedKey =
    HotkeyManager.parseKeyCombination("Ctrl+F8")

local function onShortcut(key, modifier)
    if valid and key == expectedKey and modifier == expectedModifier then
        print("Ctrl+F8 pressed")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, onShortcut)
```

### CaveBot Label

```lua
local function onLabel(waypointId, label)
    print("Reached label", waypointId, label)

    -- CaveBot is paused while this handler performs the label action.
    CaveBot.pause(0)
end

Game.registerEvent(Game.Events.LABEL, onLabel)
```

### HUD click and drag

```lua
local hud = HUD(40, 40, "Drag or click me", true)
hud:setDraggable(true)

local function onHudClick(id)
    if id == hud:getId() then
        print("clicked")
    end
end

local function onHudDrag(id, x, y)
    if id == hud:getId() then
        print("released at", x, y)
    end
end

Game.registerEvent(Game.Events.HUD_CLICK, onHudClick)
Game.registerEvent(Game.Events.HUD_DRAG, onHudDrag)
```

## Hunting Tasks: Bounty, Weekly and Shop

`Game.Events.TASK_BOARD_DATA` (value `22`) receives one `taskBoardData` table when Hunting Tasks window data arrives on a supporting server. The table contains `windowType`, boolean `complete`, and the corresponding `bounty`, `weekly`, or `shop` payload. It is separate from the older `TASK_HUNTING_DATA` event.

Register the listener before opening a window, and use only complete snapshots for stateful actions. See the [Hunting Tasks API](./functions/hunting_tasks) for registration examples, enums, every exposed field, and parser limitations.

## Bosstiary Boss Slots

`Game.Events.BOSS_SLOT_UPDATE` (value `23`) receives one `bossSlotsData` table when a complete Boss Slots packet arrives, including after `Game.requestBossSlots()` or a native-window update. Register the listener before requesting data. `availableBosses` can be empty when both slots are occupied; boss names require matching client staticdata and may be empty for custom bosses. A `true` return from a Boss Slots action means its packet was sent, not that the server accepted the change. See the [Boss Slots API](./functions/game) for the payload fields and safe action sequence.
