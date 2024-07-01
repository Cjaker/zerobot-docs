---
sidebar_position: 10
---

# Game
Funções úteis gerais do jogo

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

### Código

```lua
--- Gira o jogador em uma direção especificada.
-- Esta função é um wrapper em torno da função externa gameTurn.
-- @param direction (number) - A direção para girar o jogador, consulte o parâmetro como Enums.Directions
function Game.turn(direction)

--- Envia uma mensagem ou realiza uma determinada ação de conversa.
-- Esta função é um wrapper em torno da função externa gameTalk.
-- @param message (string) - A mensagem a ser enviada ou a ação de conversa a ser realizada.
-- @param type (number) - O tipo de ação de conversa a ser realizada, se aplicável. Consulte o parâmetro como Enums.TalkTypes
function Game.talk(message, type)

--- Envia uma mensagem para um canal específico.
-- Esta função é um wrapper em torno da função externa gameTalkChannel.
-- Para obter o histórico dos canais abertos, use Game.getChannelsHistory
-- @param message (string) - A mensagem a ser enviada.
-- @param channelId (number) - O ID do canal.
function Game.talkChannel(message, channelId)

--- Envia uma mensagem privada para um jogador específico pelo nome.
-- Esta função é um wrapper em torno da função externa gameTalkPrivate.
-- @param message (string) - A mensagem a ser enviada.
-- @param receiver (string) - O nome do jogador.
function Game.talkPrivate(message, receiver)

--- Move o jogador em uma direção especificada.
-- Esta função é um wrapper em torno da função externa gameWalk.
-- @param direction (string) - A direção para mover o jogador. Consulte o parâmetro como Enums.Directions
function Game.walk(direction)

--- Ataca uma criatura especificada.
-- Esta função é um wrapper em torno da função externa gameAttack.
-- @param creatureId (number) - O ID da criatura a ser atacada.
function Game.attack(creatureId)

--- Obtém a quantidade de itens de um ID especificado.
-- Esta função é um wrapper em torno da função externa gameGetItemCount.
-- @param itemId (number) - O ID do item.
function Game.getItemCount(itemId)

--- Obtém todos os itens armazenados no inventário do jogador.
-- Esta função é um wrapper em torno da função externa gameGetInventoryItems.
-- @return uma tabela contendo todos os itens disponíveis no inventário, cada item segue este formato: {id=0, count=0, tier=0}
function Game.getInventoryItems()

--- Usa um item no chão.
-- Esta função é um wrapper em torno da função externa gameUseItemOnGround.
-- Permite o uso de um item especificado no chão em uma posição específica.
-- @param itemId (number) - O ID do item a ser usado.
-- @param x (number) - A coordenada x da posição onde o item será usado.
-- @param y (number) - A coordenada y da posição onde o item será usado.
-- @param z (number) - A coordenada z da posição onde o item será usado.
-- @return true se o item foi usado corretamente, false caso contrário.
function Game.useItemOnGround(itemId, x, y, z)

--- Usa um item do chão.
-- Esta função é um wrapper em torno da função externa gameUseItemFromGround.
-- Permite o uso de um item localizado em uma posição específica.
-- @param x (number) - A coordenada x da posição onde o item está localizado.
-- @param y (number) - A coordenada y da posição onde o item está localizado.
-- @param z (number) - A coordenada z da posição onde o item está localizado.
-- @return true se foi possível usar o item, false caso contrário.
function Game.useItemFromGround(x, y, z)

--- Obtém o histórico de canais da sessão atual.
-- Esta informação estará disponível se você fez login com o bot injetado, assim pode coletar informações dos canais.
-- @return tabela contendo o histórico de canais abertos com ID e nome
function Game.getChannelsHistory()

--- Responde a uma janela modal atual.
-- Esta função é um wrapper em torno da função externa gameModalWindowAnswer.
-- @return true se a ação foi enviada com sucesso, caso contrário, falha
function Game.modalWindowAnswer(id, button, choice)

--- Usa um item com uma criatura pelo ID.
-- Esta função é um wrapper em torno da função externa gameUseItemWithCreature.
-- @return true se a ação foi enviada com sucesso, caso contrário, falha
function Game.useItemWithCreature(id, creatureId)

--- Saqueia um cadáver em uma coordenada específica do mapa.
-- Esta função é um wrapper em torno da função externa gameLootCorpse.
-- @param x (number) - A coordenada x da posição de destino no mapa.
-- @param y (number) - A coordenada y da posição de destino no mapa.
-- @param z (number) - A coordenada z da posição de destino no mapa.
-- @return true se a ação foi enviada com sucesso, caso contrário, falha
function Game.lootCorpse(x, y, z)

--- Equipa um item.
-- Esta função é um wrapper em torno da função externa gameEquipItem.
-- Equipa um item específico pelo ID e tier.
-- @param itemId (number) - O ID do item a ser equipado.
-- @param tier (number) - O tier do item a ser equipado.
function Game.equipItem(itemId, tier)

--- Usa um item.
-- Esta função é um wrapper em torno da função externa gameUseItem.
-- Permite o uso de um item especificado.
-- @param itemId (number) - O ID do item a ser usado.
function Game.useItem(itemId)

--- Ação de converter poeiras na forja
-- Esta função é um wrapper em torno da função externa gameForgeConvertDust.
-- @return verdadeiro se a ação foi enviada com sucesso para o servidor, caso contrário, falso.
function Game.forgeConvertDust()
    return gameForgeConvertDust()
end

--- Ação de converter lascas na forja
-- Esta função é um wrapper em torno da função externa gameForgeConvertSlivers.
-- @return verdadeiro se a ação foi enviada com sucesso para o servidor, caso contrário, falso.
function Game.forgeConvertSlivers()
    return gameForgeConvertSlivers()
end

--- Ação de aumentar o limite de poeira na forja
-- Esta função é um wrapper em torno da função externa gameForgeIncreaseLimit.
-- @return verdadeiro se a ação foi enviada com sucesso para o servidor, caso contrário, falso.
function Game.forgeIncreaseLimit()
    return gameForgeIncreaseLimit()
end
```