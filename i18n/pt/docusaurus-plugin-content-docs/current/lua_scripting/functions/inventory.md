---
sidebar_position: 9
---

# Inventory
Interaja com o inventário do jogador

```lua
Inventory.moveItemToGround(inventorySlot, inventoryCount, toX, toY, toZ)
Inventory.moveItemToContainer(inventorySlot, inventoryCount, containerIndex, containerSlot)
Inventory.useItem(inventorySlot)
Inventory.lookAt(inventorySlot)
```

### Código

```lua
--- Move item do inventário para o chão.
-- Esta função é um wrapper em torno da função externa inventoryMoveItemToGround.
-- @param inventorySlot O slot do inventário para mover. Você pode baseá-lo em Enums.InventorySlot
-- @param inventoryCount A quantidade de itens do inventário a ser movida.
-- @param toX (número) - A coordenada x do destino no mapa.
-- @param toY (número) - A coordenada y do destino no mapa.
-- @param toZ (número) - A coordenada z do destino no mapa.
-- @return True se for bem-sucedido, ou nil se o item/slot do inventário/posição não existir
function Inventory.moveItemToGround(inventorySlot, inventoryCount, toX, toY, toZ)

--- Move item do inventário para um slot específico do contêiner.
-- Esta função é um wrapper em torno da função externa inventoryMoveItemToContainer.
-- @param inventorySlot O slot do inventário para mover. Você pode baseá-lo em Enums.InventorySlot
-- @param inventoryCount A quantidade de itens do inventário a ser movida.
-- @param containerIndex (número) - O índice do contêiner de destino.
-- @param containerSlot (número) - O slot do contêiner de destino.
-- @return True se for bem-sucedido, ou nil se o item/slot do inventário/contêiner não existir
function Inventory.moveItemToContainer(inventorySlot, inventoryCount, containerIndex, containerSlot)

-- Usa um item de um slot específico do inventário.
-- Esta função é um wrapper em torno da função externa inventoryUseItem.
-- @param inventorySlot - O slot do inventário para usar. Você pode baseá-lo em Enums.InventorySlot
-- @return True se for bem-sucedido, ou nil se o item/slot do inventário não existir.
function Inventory.useItem(inventorySlot)

-- Olha para um slot específico do inventário.
-- Esta função é um wrapper em torno da função externa inventoryLookAt.
-- @param inventorySlot - O slot do inventário para olhar. Você pode baseá-lo em Enums.InventorySlot
-- @return True se a solicitação foi enviada para o servidor, ou nil se o item/slot do inventário não existir.
function Inventory.lookAt(inventorySlot)
```