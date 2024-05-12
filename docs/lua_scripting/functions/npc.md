---
sidebar_position: 15
---

# Npc
Overall npc functions

```lua
Npc.buy(id, amount, ignoreCap, inBackpacks)
Npc.sell(id, amount, ignoreEquipped)
```

### Code

```lua
--- Buy items from the NPC.
-- This function is a wrapper around the external function npcBuy.
-- @param id (number) - The ID of the item to buy.
-- @param amount (number) - The amount of the item to buy.
-- @param ignoreCap (boolean) - Whether to ignore the capacity check when buying.
-- @param inBackpacks (boolean) - Whether to place the bought items in backpacks.
-- @return The result of the npcBuy function call, or nil if an error occurs.
function Npc.buy(id, amount, ignoreCap, inBackpacks)

--- Sell items to the NPC.
-- This function is a wrapper around the external function npcSell.
-- @param id (number) - The ID of the item to sell.
-- @param amount (number) - The amount of the item to sell.
-- @param ignoreEquipped (boolean) - Whether to ignore equipped items when selling.
-- @return The result of the npcSell function call, or nil if an error occurs.
function Npc.sell(id, amount, ignoreEquipped)
```