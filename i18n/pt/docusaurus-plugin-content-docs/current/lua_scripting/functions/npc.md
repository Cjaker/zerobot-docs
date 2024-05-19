---
sidebar_position: 15
---

# Npc
Funções gerais para NPCs

```lua
Npc.buy(id, amount, ignoreCap, inBackpacks)
Npc.sell(id, amount, ignoreEquipped)
```

### Código

```lua
--- Compra itens do NPC.
-- Esta função é um wrapper em torno da função externa npcBuy.
-- @param id (número) - O ID do item a ser comprado.
-- @param amount (número) - A quantidade do item a ser comprado.
-- @param ignoreCap (boolean) - Se deve ignorar a verificação de capacidade ao comprar.
-- @param inBackpacks (boolean) - Se deve colocar os itens comprados em mochilas.
-- @return O resultado da chamada da função npcBuy, ou nil se ocorrer um erro.
function Npc.buy(id, amount, ignoreCap, inBackpacks)

--- Vende itens para o NPC.
-- Esta função é um wrapper em torno da função externa npcSell.
-- @param id (número) - O ID do item a ser vendido.
-- @param amount (número) - A quantidade do item a ser vendido.
-- @param ignoreEquipped (boolean) - Se deve ignorar itens equipados ao vender.
-- @return O resultado da chamada da função npcSell, ou nil se ocorrer um erro.
function Npc.sell(id, amount, ignoreEquipped)
```