---
sidebar_position: 14
---

# Mapa
Funções gerais do mapa

```lua
Map.getCreatureIds(sameFloor, onlyPlayer)
Map.getTiles()
Map.getThings(x, y, z)
Map.getThingsCount(x, y, z)
Map.moveItemToInventory(x, y, z, count, slot)
Map.moveItemToContainer(x, y, z, count, index, slot)
Map.moveItemToGround(x, y, z, count, toX, toY, toZ)
Map.moveCreatureToGround(x, y, z, toX, toY, toZ)
Map.goTo(x, y, z)
Map.stopAutoWalk()
Map.browseField(x, y, z)
Map.canWalk(x, y, z, ignoreBlockPath, ignoreMagicField, ignoreMonsters, ignoreNpcs)
Map.isTileWalkable(x, y, z, options)
Map.getCameraPosition()
Map.useItemWithInventory(x, y, z, slot)
Map.useItemWithContainer(x, y, z, index, slot)
Map.lookAt(x, y, z)
Map.getPlayerOnScreen(var)
```

### Código

```lua
--- Obtém os IDs das criaturas no mapa.
-- Esta função é um wrapper em torno da função externa mapGetCreatureIds.
-- @param sameFloor (boolean) - Se deve considerar apenas criaturas no mesmo andar.
-- @param onlyPlayer (boolean) - Se deve considerar apenas criaturas do tipo jogador.
-- @return Uma tabela de IDs de criaturas, ou nil se não houver criaturas na tela.
function Map.getCreatureIds(sameFloor, onlyPlayer)

--- Obtém todos os tiles do mapa na tela.
-- Esta função é um wrapper em torno da função externa mapGetTiles.
-- @return Uma tabela de todos os tiles contendo coisas e suas posições.
function Map.getTiles()

--- Obtém as coisas em uma posição específica do mapa.
-- Esta função é um wrapper em torno da função externa mapGetThings.
-- @param x (número) - A coordenada x da posição do mapa.
-- @param y (número) - A coordenada y da posição do mapa.
-- @param z (número) - A coordenada z da posição do mapa.
-- @return Uma tabela de coisas na posição especificada, ou nil se o tile não existir ou não houver informações do mapa disponíveis.
function Map.getThings(x, y, z)

--- Obtém a contagem de coisas em uma posição específica do mapa.
-- Esta função é um wrapper em torno da função externa mapGetThings.
-- @param x (número) - A coordenada x da posição do mapa.
-- @param y (número) - A coordenada y da posição do mapa.
-- @param z (número) - A coordenada z da posição do mapa.
-- @return A contagem de coisas na posição específica, ou nil se o tile não existir ou não houver informações do mapa disponíveis.
function Map.getThingsCount(x, y, z)

--- Move item da posição do mapa para o slot do inventário.
-- Esta função é um wrapper em torno da função externa mapMoveItemToInventory.
-- @param x (número) - A coordenada x da posição do mapa.
-- @param y (número) - A coordenada y da posição do mapa.
-- @param z (número) - A coordenada z da posição do mapa.
-- @param count (número) - A quantidade de itens a ser movida.
-- @param slot (número) - O slot de destino do inventário para mover.
-- @return True se for bem-sucedido, ou nil se o tile/item/slot do inventário não existir ou não houver informações do mapa disponíveis.
function Map.moveItemToInventory(x, y, z, count, slot)

--- Move item da posição do mapa para o slot do contêiner.
-- Esta função é um wrapper em torno da função externa mapMoveItemToContainer.
-- @param x (número) - A coordenada x da posição do mapa.
-- @param y (número) - A coordenada y da posição do mapa.
-- @param z (número) - A coordenada z da posição do mapa.
-- @param count (número) - A quantidade de itens a ser movida.
-- @param index (número) - O índice do contêiner de destino.
-- @param slot (número) - O slot do contêiner de destino para mover.
-- @return True se for bem-sucedido, ou nil se o tile/item/slot do contêiner não existir ou não houver informações do mapa disponíveis.
function Map.moveItemToContainer(x, y, z, count, index, slot)

--- Move item da posição do mapa para a posição de destino no mapa.
-- Esta função é um wrapper em torno da função externa mapMoveItemToGround.
-- @param x (número) - A coordenada x da posição do mapa.
-- @param y (número) - A coordenada y da posição do mapa.
-- @param z (número) - A coordenada z da posição do mapa.
-- @param count (número) - A quantidade de itens a ser movida.
-- @param toX (número) - A coordenada x da posição de destino no mapa.
-- @param toY (número) - A coordenada y da posição de destino no mapa.
-- @param toZ (número) - A coordenada z da posição de destino no mapa.
-- @return True se a solicitação foi enviada ao servidor, ou nil se o tile/item/slot do contêiner não existir ou não houver informações do mapa disponíveis.
function Map.moveItemToGround(x, y, z, count, toX, toY, toZ)

--- Move criatura da posição do mapa para a posição de destino no mapa.
-- Esta função é um wrapper em torno da função externa mapMoveCreatureToGround.
-- @param x (número) - A coordenada x da posição do mapa.
-- @param y (número) - A coordenada y da posição do mapa.
-- @param z (número) - A coordenada z da posição do mapa.
-- @param toX (número) - A coordenada x da posição de destino no mapa.
-- @param toY (número) - A coordenada y da posição de destino no mapa.
-- @param toZ (número) - A coordenada z da posição de destino no mapa.
-- @return True se a solicitação foi enviada para o servidor, ou nil se o tile/criatura não existir, não puder mover a criatura ou se não houver informações do mapa disponíveis.
function Map.moveCreatureToGround(x, y, z, toX, toY, toZ)

-- Caminha para uma posição específica usando o algoritmo de clique do mapa do Tibia
-- @param x (número) - A coordenada x da posição de destino no mapa.
-- @param y (número) - A coordenada y da posição de destino no mapa.
-- @param z (número) - A coordenada z da posição de destino no mapa.
function Map.goTo(x, y, z)

-- Interage com um tile específico do mapa na posição especificada
-- @param x (número) - A coordenada x da posição de destino no mapa.
-- @param y (número) - A coordenada y da posição de destino no mapa.
-- @param z (número) - A coordenada z da posição de destino no mapa.
function Map.browseField(x, y, z)

-- AVISO: Esta função será descontinuada e removida no futuro. Use Map.isTileWalkable em vez disso
-- Verifica se uma posição específica é caminhável
-- @deprecated Use Map.isTileWalkable em vez disso
-- @param x (número) - A coordenada x da posição de destino no mapa.
-- @param y (número) - A coordenada y da posição de destino no mapa.
-- @param z (número) - A coordenada z da posição de destino no mapa.
-- @param ignoreBlockPath (boolean) - Se for true, considerará tiles de caminho bloqueado como caminháveis. O valor padrão é true.
-- @param ignoreMagicField (boolean) - Se for true, não considerará magic fields como um obstáculo bloqueante no tile. O valor padrão é true.
-- @param ignoreMonsters (boolean) - Se for true, não considerará monstros como um obstáculo bloqueante no tile. O valor padrão é false.
-- @param ignoreNpcs (boolean) - Se for true, não considerará npcs como um obstáculo bloqueante no tile. O valor padrão é false.
-- @return True se a posição for caminhável, ou false se não for.
function Map.canWalk(x, y, z, ignoreBlockPath, ignoreMagicField, ignoreMonsters, ignoreNpcs)

-- Verifica se uma posição específica é transitável
-- @param x (número) - A coordenada x da posição de destino no mapa.
-- @param y (número) - A coordenada y da posição de destino no mapa.
-- @param z (número) - A coordenada z da posição de destino no mapa.
-- @param options (tabela) - Uma tabela com as seguintes opções:
-- @field ignoreBlockPath (booleano) - Se verdadeiro, considerará os blocos de caminho como transitáveis. O valor padrão é verdadeiro.
-- @field ignoreMagicField (booleano) - Se verdadeiro, não considerará campo mágico como um obstáculo bloqueável na tile. O valor padrão é verdadeiro.
-- @field ignoreFloorChange (booleano) - Se verdadeiro, não considerará mudanças de piso como um obstáculo bloqueável na tile. O valor padrão é verdadeiro.
-- @field ignoreMonsters (booleano) - Se verdadeiro, não considerará monstros como um obstáculo bloqueável na tile. O valor padrão é falso.
-- @field ignoreNpcs (booleano) - Se verdadeiro, não considerará NPCs como um obstáculo bloqueável na tile. O valor padrão é falso.
-- @return Verdadeiro se a posição for transitável, ou falso se não for.
function Map.isTileWalkable(x, y, z, options)

-- Obtém a posição da câmera no mundo do mapa atual
-- Esta função é útil se você quiser uma posição em tempo real do seu personagem
-- O jogo leva algum tempo para atualizar a posição de uma criatura diretamente, então em casos específicos isso pode ser útil
-- Exemplos de bons casos: pathfinding
function Map.getCameraPosition()

-- Usa um item do inventário em uma posição específica do mapa
-- @param x (número) - A coordenada x da posição de destino no mapa.
-- @param y (número) - A coordenada y da posição de destino no mapa.
-- @param z (número) - A coordenada z da posição de destino no mapa.
-- @param slot (número) - O slot do inventário para usar.
function Map.useItemWithInventory(x, y, z, slot)

-- Usa um item do container em uma posição específica do mapa
-- @param x (número) - A coordenada x da posição de destino no mapa.
-- @param y (número) - A coordenada y da posição de destino no mapa.
-- @param z (número) - A coordenada z da posição de destino no mapa.
-- @param index (número) - O índice do container para usar.
-- @param slot (número) - O slot do container para usar.
function Map.useItemWithContainer(x, y, z, index, slot)

-- Olha para uma posição específica do mapa
-- @param x (número) - A coordenada x da posição de destino no mapa.
-- @param y (número) - A coordenada y da posição de destino no mapa.
-- @param z (número) - A coordenada z da posição de destino no mapa.
function Map.lookAt(x, y, z)

--- Obtém uma criatura do jogador na tela, seja pelo ID ou nome.
-- @param var (number|string) - O ID do jogador se for um número, ou o nome do jogador se for uma string.
-- @return A criatura do jogador se encontrada, ou nil se não encontrada.
function Map.getPlayerOnScreen(var)
```