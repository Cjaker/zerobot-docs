---
sidebar_position: 1
---

# Game Events

Internal Game Functions Documentation

### Overview

This documentation outlines the internal Lua functions designed for handling game events. These functions play a vital role in responding to various in-game activities, including messages, magic effects, hotkey actions, and more.

### Events

```lua
1. Game.Events.TALK
2. Game.Events.MAGIC_EFFECT
3. Game.Events.HOTKEY_SHORTCUT_PRESS
4. Game.Events.TEXT_MESSAGE
5. Game.Events.MODAL_WINDOW
6. Game.Events.HUD_CLICK
7. Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK
8. Game.Events.IMBUEMENT_DATA
9. Game.Events.QUEST_LOG
10. Game.Events.QUEST_LINES
11. Game.Events.DISTANCE_SHOOT_EFFECT
12. Game.Events.PARTY_HUNT
```

### Purpose and Usage
### 1. `Game.Events.TALK`
**Purpose**: This event is triggered upon receiving a message in-game. It can be used to capture messages in the in-game chats, such as Local Chat, Advertising, World Chat, etc. It also includes the coordinates (x, y, z), author's name, and level.

## Usage:
```lua
-- Parameters:
-- @param authorName - The name of the message's author.
-- @param authorLevel - The level of the author (usually to identify player level in chat).
-- @param messageType - The type of the message, based on Enums.TalkTypes.
-- @param x, y, z - The coordinates of the map position where the message was sent.
-- @param text - The content of the message.
function onTextMessageCheck(authorName, authorLevel, messageType, x, y, z, text)
    print(authorName, authorLevel, messageType, x, y, z, text)
end

Game.registerEvent(Game.Events.TALK, onTextMessageCheck)
```

### 2. `Game.Events.MAGIC_EFFECT`
**Purpose**: This event is triggered when the server sends a magic effect to the screen. It contains the ID of the effect and the coordinates where this effect is displayed.

## Usage:
```lua
-- Example message data structure:
-- @param Type: The ID of the effect.
-- @param x: The x position of the effect.
-- @param y: The y position of the effect.
-- @param z: The z position of the effect.
function OnEffect(Type, x, y, z)
    print("Effect ID: " .. Type .. " at position: " .. x .. ", " .. y .. ", " .. z)
end

Game.registerEvent(Game.Events.MAGIC_EFFECT, OnEffect)
```

### 3. `Game.Events.HOTKEY_SHORTCUT_PRESS`
**Purpose**: This event is activated when a player presses a key on the keyboard. It responds to hotkey shortcut presses, including the keycode and modifiers.

## Usage:
```lua
-- Example usage with a specific key combination:
-- @param key - The code of the key pressed.
-- @param modifier - The modifier key pressed (e.g., CTRL).
local _, _, REFILLER_KEY = HotkeyManager.parseKeyCombination("p")
local function OnKeyPressed(key, modifier)
    if key == REFILLER_KEY then
        print("Key " .. REFILLER_KEY .. " pressed.")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, OnKeyPressed)
```

### 4. `Game.Events.TEXT_MESSAGE`
**Purpose**: This event is triggered when the server sends a text message. These can be for example the white messages that appear in the middle of the player's screen, like Server Log messages.

#### 

<div class="text--center"> 
  <img src="/img/loot_message.png" />
  <p>This is an example of a text message212z</p>
</div>

## Usage:
```lua
-- Example message data structure:
-- {
--     "channelId": 0,
--     "messagePrimaryValue": 13048,
--     "messagePrimaryColor": 180,
--     "messageSecondaryValue": 0,
--     "x": 32424,
--     "y": 32147,
--     "z": 7,
--     "text": "A monk loses 4 hitpoints due to your attack.",
--     "messageSecondaryColor": 255,
--     "messageType": 23
-- }
--
-- messageType field you can base it on Enums.MessageTypes
-- @param messageData - The message data including channel ID, primary/secondary values and colors, coordinates, and the text.
function onTextEvent(messageData)
    print(JSON.encode(messageData))
end

Game.registerEvent(Game.Events.TEXT_MESSAGE, onTextEvent)
```

Observation: The message type can change dependending of the client version

### 5. `Game.Events.MODAL_WINDOW`
**Purpose**: This event is triggered when the server send a in-game modal window actions, detailing window data like buttons and titles.

#### 

<div class="text--center"> 
  <img src="/img/modal_window.png" />
  <p>This is an example of a modal window</p>
</div>

## Usage:
```lua
-- {
--     "defaultEscapeButton": 255,
--     "defaultEnterButton": 255,
--     "priority": 0,
--     "title": "Select an option",
--     "buttons": [
--         {
--             "text": "First",
--             "id": 1
--         },
--         {
--             "text": "Second",
--             "id": 2
--         },
--         {
--             "text": "Third",
--             "id": 3
--         },
--         {
--             "text": "Fourth",
--             "id": 4
--         }
--     ],
--     "id": 1,
--     "message": "Hello",
--     "choices": []
-- }
-- Parameters:
-- @param data - The modal window data including default buttons, priority, title, buttons, and message.
function onModalWindow(data)
    print(JSON.encode(data))
end

Game.registerEvent(Game.Events.MODAL_WINDOW, onModalWindow)
```

### 6. `Game.Events.HUD_CLICK`
**Purpose**: This event is triggered by clicks on any HUD (HUD created by HUD functions) element, identified by the HUD's ID.

## Usage:
```lua
-- Parameters:
-- @param id - The ID of the HUD element that was clicked.
function onHUDClick(id)
    print(id)
end

Game.registerEvent(Game.Events.HUD_CLICK, onHUDClick)
```

### 7. `Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK`
**Purpose**: This event is triggered when a player clicks on a custom modal (created by scripting) window button. It includes the button ID and the modal window ID.

## Usage:
```lua
-- Parameters:
-- @param modalId - The ID of the modal window.
-- @param buttonIndex - The index of the button clicked.
function onCustomModalWindowButtonClick(modalId, buttonIndex)
    print(modalId, buttonIndex)
end

Game.registerEvent(Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK, onCustomModalWindowButtonClick)
```

### 8. `Game.Events.IMBUEMENT_DATA`
**Purpose**: This event is triggered when the server sends imbuement data to the client.

## Usage:
```lua
-- Parameters:
-- @param imbuementData - The imbuement data received from the server.
function onImbuementData(imbuementData)
    print(JSON.encode(imbuementData))
end

Game.registerEvent(Game.Events.IMBUEMENT_DATA, onImbuementData)
```

### 9. `Game.Events.QUEST_LOG`
**Purpose**: This event is triggered when the server sends a quest log message to the client.

## Usage:
```lua
-- Parameters:
-- @param questLogData - The quest log data received from the server.
function onQuestLog(quests)
    print(JSON.encode(quests))
end

Game.registerEvent(Game.Events.QUEST_LOG, onQuestLog)
```

### 10. `Game.Events.QUEST_LINES`
**Purpose**: This event is triggered when the server sends quest lines to the client.

## Usage:
```lua
-- Parameters:
-- @param questId - The ID of the quest.
-- @param missions - The missions of the quest.
function onQuestLines(questId, missions)
    print(questId, JSON.encode(missions))
end

Game.registerEvent(Game.Events.QUEST_LINES, onQuestLines)
```

### 11. `Game.Events.DISTANCE_SHOOT_EFFECT`
**Purpose**: This event is triggered when the server sends a distance shoot effect to the client.

## Usage:
```lua
-- Parameters:
-- @param type - The type of the distance shoot effect
-- @param fromX - The x-coordinate of the map position where the effect started.
-- @param fromY - The y-coordinate of the map position where the effect started.
-- @param fromZ - The z-coordinate of the map position where the effect started.
-- @param toX - The x-coordinate of the map position where the effect ended.
-- @param toY - The y-coordinate of the map position where the effect ended.
-- @param toZ - The z-coordinate of the map position where the effect ended.
function onDistanceShootEffect(type, fromX, fromY, fromZ, toX, toY, toZ)
    print(type, fromX, fromY, fromZ, toX, toY, toZ)
end

Game.registerEvent(Game.Events.DISTANCE_SHOOT_EFFECT, onDistanceShootEffect)
```

### 12. `Game.Events.PARTY_HUNT`
-- triggered when player copy party hunt data to clipboard and have allowed for usage in Engine tab.

## Usage:
```lua
-- @param output - The party hunt data copied to clipboard.
function onPartyHunt(output)
    print(output)
end```

Game.registerEvent(Game.Events.PARTY_HUNT, onPartyHunt)
```

```