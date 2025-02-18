---
sidebar_position: 10
---

# Game
Overall game useful functions

```lua
EventsEnums
Game.turn(direction)
Game.talk(message, type)
Game.talkChannel(message, channelId)
Game.talkPrivate(message, receiver)
Game.walk(direction)
Game.attack(creatureId)
Game.getItemCount(itemId, itemTier)
Game.getInventoryItems()
Game.useItemOnGround(itemId, x, y, z)
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
Game.writeTextWindow(text)
Game.applyImbuement(slot, imbuementId, isProtected)
Game.clearImbuement(slot)
Game.closeImbuementWindow()
Game.executeEvents(hookType, ...)
Game.registerEvent(type, fn)
Game.unregisterEvent(type, fn)
```

### Code

```lua
Game = {
    Events = {
        TALK = 1,
        MAGIC_EFFECT = 2,
        HUD_CLICK = 3,
        HOTKEY_SHORTCUT_PRESS = 4,
        TEXT_MESSAGE = 5,
        MODAL_WINDOW = 6,
        CUSTOM_MODAL_WINDOW_BUTTON_CLICK = 7,
        IMBUEMENT_DATA = 8,
        QUEST_LOG = 9,
        QUEST_LINES = 10,
        DISTANCE_SHOOT_EFFECT = 11,
        PARTY_HUNT = 12
    }
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

--- Move the player in a specified direction.
-- This function is a wrapper around the external function gameWalk.
-- @param direction (string) - The direction to move the player. Refer the parameter as Enums.Directions
function Game.walk(direction)

--- Attack a specified creature.
-- This function is a wrapper around the external function gameAttack.
-- @param creatureId (number) - The ID of the creature to attack.
function Game.attack(creatureId)

--- Get item count of specified ID by Tier.
--- If the itemTier parameter value is not provided or is 0, the function will return the total count of items without tier.
-- This function is a wrapper around the external function gameGetItemCount.
-- @param itemTier (number) - The tier of item. This parameter is optional.
function Game.getItemCount(itemId, itemTier)
    itemTier = itemTier or 0
	return gameGetItemCount(itemId, itemTier)
end

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

--- Equip an item.
-- This function is a wrapper around the external function gameEquipItem.
-- Equip a specific item by id and tier.
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
-- @return true if was successfully sent the action to server, otherwise false
function Game.forgeConvertDust()

-- Forge convert slivers action
-- This function is a wrapper around the external function gameForgeConvertSlivers.
-- @return true if was successfully sent the action to server, otherwise false
function Game.forgeConvertSlivers()

-- Forge increase dust limit action
-- This function is a wrapper around the external function gameForgeIncreaseLimit.
-- @return true if was successfully sent the action to server, otherwise false
function Game.forgeIncreaseLimit()

-- Write text to a window
-- This function is a wrapper around the external function gameWriteTextWindow.
-- Note: you need to open a text window before writing the text. Additionally, this function automatically closes the window after writing by simulating the ESCAPE key. This function sends the text directly to the server to be written, it is not dependent on the game interface. It is important to have the text window open before using this function.
-- @param text (string) - The text to be written.
function Game.writeTextWindow(text)

-- Apply imbuement
-- This function is a wrapper around the external function gameApplyImbuement.
-- @param slot (number) - The slot of the item to clear the imbuement. The slot value starts at 0. Example: slot 0, 1, 2.
-- @param imbuementId (number) - The ID of the imbuement to be applied.
-- @param isProtected (boolean) - If should increase success rate for imbuement.
-- @return true if was successfully sent the action to server, otherwise false
function Game.applyImbuement(slot, imbuementId, isProtected)

-- Clear imbuement
-- This function is a wrapper around the external function gameClearImbuement.
-- @param slot (number) - The slot of the item to clear the imbuement. The slot value starts at 0. Example: slot 0, 1, 2.
-- @return true if was successfully sent the action to server, otherwise false
function Game.clearImbuement(slot)

-- Close imbuement window
-- This function is a wrapper around the external function gameCloseImbuementWindow.
-- @return true if was successfully sent the action to server, otherwise false
function Game.closeImbuementWindow()
```