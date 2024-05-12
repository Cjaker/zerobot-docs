---
sidebar_position: 10
---

# Game
Overall game useful functions

```lua
Game.turn(direction)
Game.talk(message, type)
Game.talkChannel(message, channelId)
Game.talkPrivate(message, receiver)
Game.walk(direction)
Game.attack(creatureId)
Game.getItemCount(itemId)
Game.getInventoryItems()
Game.useItemOnGround(itemId, x, y, z)
Game.useItemFromGround(x, y, z)
Game.getChannelsHistory()
Game.modalWindowAnswer(id, button, choice)
Game.useItemWithCreature(id, creatureId)
Game.lootCorpse(x, y, z)
Game.equipItem(itemId, tier)
Game.useItem(itemId)
Game.executeEvents(hookType, ...)
Game.registerEvent(type, fn)
Game.unregisterEvent(type, fn)
```