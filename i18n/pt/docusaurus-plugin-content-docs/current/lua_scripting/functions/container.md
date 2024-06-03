---
sidebar_position: 8
---

# Container
Interaja com Containers abertos no jogo

```lua
Container(containerIndex)
Container.new(containerIndex)
Container:getIndex()
Container:getName()
Container:getItems()
Container:moveItemToInventory(containerSlot, inventorySlot, itemCount)
Container:moveItemToGround(containerSlot, itemCount, toX, toY, toZ)
Container:moveItemToContainer(containerSlot, itemCount, toContainerIndex, toContainerSlot)
Container:useItem(containerSlot, openNewWindow)
Container:useItemWithContainerItem(spotFrom, contTo, spotTo)
Container.useItemOnAnotherItem(itemId, otherId)
Container:moveUp()
Container:close()
Container:getCapacity()
Container:getItemCount()
```

### Código

```lua
--- Construtor para a classe Container
-- @param containerIndex O índice do container
-- @return Um novo objeto Container
function Container.new(containerIndex)

--- Obtém o índice do container.
-- @return O índice do container
function Container:getIndex()

--- Obtém o nome do container.
-- Esta função obtém o nome do container.
-- @return O nome do container, ou nil se o container não existir
function Container:getName()

--- Obtém os itens do container.
-- Esta função obtém os itens do container.
-- @return Uma tabela contendo todos os itens do container, ou nil se o container não existir
function Container:getItems()

--- Move item do container para o inventário.
-- Esta função move um item de um container específico para um slot específico do inventário.
-- @param containerSlot O slot que contém o item.
-- @param inventorySlot O slot de destino do inventário para mover.
-- @param itemCount A quantidade de itens a ser movida.
-- @return True se for bem-sucedido, ou nil se o container/item/slot do inventário não existir
function Container:moveItemToInventory(containerSlot, inventorySlot, itemCount)

--- Move item do container para a posição no mapa.
-- Esta função move um item de um container específico para uma posição específica no mapa.
-- @param containerSlot O slot que contém o item.
-- @param itemCount A quantidade de itens a ser movida.
-- @param toX (número) - A coordenada x do destino no mapa.
-- @param toY (número) - A coordenada y do destino no mapa.
-- @param toZ (número) - A coordenada z do destino no mapa.
-- @return True se for bem-sucedido, ou nil se o container/item/slot do inventário/posição no mapa não existir
function Container:moveItemToGround(containerSlot, itemCount, toX, toY, toZ)

--- Move item do container para outro container.
-- Esta função move um item de um container específico para outro container específico.
-- @param containerSlot O slot que contém o item.
-- @param itemCount A quantidade de itens a ser movida.
-- @param toContainerIndex (número) - O índice do outro container.
-- @param toContainerSlot (número) - O slot do outro container.
-- @return True se for bem-sucedido, ou nil se o container/item/slot do inventário/posição no mapa não existir
function Container:moveItemToContainer(containerSlot, itemCount, toContainerIndex, toContainerSlot)

--- Usa um item do slot especificado.
-- Esta função usa um item de um slot especificado; se o item for um container, você pode especificar se deve abrir em uma nova janela.
-- @param containerSlot (número) - O slot que contém o item.
-- @param openNewWindow (boolean) - Se deve abrir o item (container) em uma nova janela
-- @return True se for bem-sucedido, ou nil se o container/item não existir
function Container:useItem(containerSlot, openNewWindow)

--- Usa um item no contêiner em outro item em um contêiner.
-- Usa um item em um local específico no contêiner em um local específico em outro contêiner.
-- @param spotFrom O slot específico onde o item a ser usado está localizado.
-- @param contTo O índice do contêiner onde você deseja usar o item.
-- @param spotTo O slot específico no novo contêiner onde você deseja usar o item.
-- @return True se for bem-sucedido, ou nil se o contêiner/item não existir.
function Container:useItemWithContainerItem(spotFrom, contTo, spotTo)

--- Usa um item por id em outro id.
-- Usa um item por id em outro item por id; esta função iterará todos os contêineres abertos, procurando os itens automaticamente.
-- Função estática, não requer um objeto Contêiner.
-- @param itemId O id do item a ser usado.
-- @param otherId O id do item com o qual será usado.
-- @return True se for bem-sucedido, ou nil se o contêiner/item não existir.
function Container.useItemOnAnotherItem(itemId, otherId)

--- Mostra o container superior.
-- Esta função solicita ao servidor para mostrar o container anterior/superior.
function Container:moveUp()

--- Fecha o container.
-- Esta função solicita ao servidor para fechar um container específico.
function Container:close()

--- Obtém a capacidade de itens do container.
-- Esta função obtém a capacidade de itens do container.
-- @return A capacidade de itens do container, ou nil se o container não existir
function Container:getCapacity()

--- Obtém a quantidade de itens do container.
-- Esta função obtém a quantidade de itens do container.
-- @return A quantidade de itens do container, ou nil se o container não existir
function Container:getItemCount()
```