---
sidebar_position: 10
---

# Game
Funções úteis gerais do jogo

```lua
Game.Events
Game.turn(direction)
Game.talk(message, type)
Game.talkChannel(message, channelId)
Game.talkPrivate(message, receiver)
Game.openChannel(channelId)
Game.walk(direction)
Game.attack(creatureId)
Game.follow(creatureId)
Game.getItemCount(itemId, itemTier)
Game.getInventoryItems()
Game.useItemOnGround(itemId, x, y, z)
Game.useItemOnInventory(itemId, inventorySlot)
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
Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)
Game.writeTextWindow(text)
Game.applyImbuement(slot, imbuementId, isProtected)
Game.applyImbuementOnScroll(imbuementId)
Game.clearImbuement(slot)
Game.closeImbuementWindow()
Game.autoLoot()
Game.requestQuestLog()
Game.requestQuestLines(questId)
Game.stashRetrieve(itemId, itemCount)
Game.storeBuyOffer(offerId, offerType)
Game.storeOpen()
Game.storeRequestOffers(categoryName)
Game.storeGetTibiaCoinsBalance()
Game.storeGetTransferableCoinsBalance()
Game.collectDailyReward(isFromShrine, itemsToPick)
Game.openDailyReward()
Game.huntingTaskRerollList(slot)
Game.huntingTaskRerollRewards(slot)
Game.huntingTaskListAllMonsters(slot)
Game.huntingTaskSelectMonster(slot, raceId, selectMaximumAmount)
Game.huntingTaskCancel(slot)
Game.huntingTaskClaim(slot)
Game.taskBoardAction(action, firstValue, secondValue)
Game.openTaskBoardBounty()
Game.openTaskBoardWeekly()
Game.setTaskBoardBountyDifficulty(difficulty)
Game.rerollTaskBoardBounties()
Game.claimTaskBoardDailyReroll()
Game.selectTaskBoardBounty(taskIndex)
Game.claimTaskBoardBountyReward()
Game.upgradeTaskBoardTalisman(pathIndex)
Game.deliverTaskBoardWeekly(taskIndex)
Game.setTaskBoardWeeklyDifficulty(difficulty)
Game.openTaskBoardShop()
Game.buyTaskBoardOffer(offerIndex)
Game.unlockTaskBoardPreferenceSlot()
Game.clearTaskBoardPreferred(slot)
Game.clearTaskBoardUnwanted(slot)
Game.assignTaskBoardPreferred(slot, raceId)
Game.assignTaskBoardUnwanted(slot, raceId)
Game.requestBossSlots()
Game.getBossSlots()
Game.getBossSlotCost(slotId)
Game.setBossSlot(slotId, boss)
Game.applyBoss(boss, slotId)
Game.clearBossSlot(slotId)
Game.registerEvent(type, fn)
Game.unregisterEvent(type, fn)
```

### Código
```lua
Game.Events = {
    TALK = 0,
    MAGIC_EFFECT = 1,
    HUD_CLICK = 2,
    HOTKEY_SHORTCUT_PRESS = 3,
    TEXT_MESSAGE = 4,
    MODAL_WINDOW = 5,
    CUSTOM_MODAL_WINDOW_BUTTON_CLICK = 6,
    IMBUEMENT_DATA = 7,
    IMBUEMENT_OPEN_WINDOW = 8, -- 15.10+
    QUEST_LOG = 9,
    QUEST_LINES = 10,
    DISTANCE_SHOOT_EFFECT = 11,
    PARTY_HUNT = 12,
    LABEL = 13,
    OPEN_STASH = 14,
    HUD_DRAG = 15,
    STORE_CATEGORIES = 16,
    STORE_OFFERS = 17,
    OPEN_DAILY_REWARD = 18,
    DAILY_REWARD_DAYS_DATA = 19,
    ALARM = 20,
    TASK_HUNTING_DATA = 21,
    TASK_BOARD_DATA = 22,
    BOSS_SLOT_UPDATE = 23
}

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
-- @param direction (number) - A direção numérica do movimento. Use um valor de Enums.Directions.
function Game.walk(direction)

--- Ataca uma criatura especificada.
-- Esta função é um wrapper em torno da função externa gameAttack.
-- @param creatureId (number) - O ID da criatura a ser atacada.
function Game.attack(creatureId)

--- Obtém a quantidade de itens de um ID especificado por Tier.
--- Se o valor do parâmetro itemTier não for fornecido ou for 0, a função retornará a quantidade total de itens sem tier.
-- Esta função é um wrapper em torno da função externa gameGetItemCount.
-- @param itemTier (number) - O tier do item. Este parâmetro é opcional.
function Game.getItemCount(itemId, itemTier)
    itemTier = itemTier or 0
	return gameGetItemCount(itemId, itemTier)
end

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
-- @param id (number) - O ID da janela modal.
-- @param button (number) - O botão da janela modal.
-- @param choice (number) - A escolha da janela modal.
-- @param closeAfterAnswer (boolean) - Se deve fechar a janela após a resposta.
function Game.modalWindowAnswer(id, button, choice, closeAfterAnswer)

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

--- Ação de converter poeiras na forja.
-- Esta função é um wrapper em torno da função externa gameForgeConvertDust.
-- @return true quando o pedido é aceito pelo emissor de pacotes; caso contrário, nil. Não confirma sucesso no servidor.
function Game.forgeConvertDust()

--- Ação de converter lascas na forja.
-- Esta função é um wrapper em torno da função externa gameForgeConvertSlivers.
-- @return true quando o pedido é aceito pelo emissor de pacotes; caso contrário, nil. Não confirma sucesso no servidor.
function Game.forgeConvertSlivers()

--- Ação de aumentar o limite de poeira na forja.
-- Esta função é um wrapper em torno da função externa gameForgeIncreaseLimit.
-- @return true quando o pedido é aceito pelo emissor de pacotes; caso contrário, nil. Não confirma sucesso no servidor.
function Game.forgeIncreaseLimit()

--- Funde dois itens na Exaltation Forge.
-- Esta função é um wrapper em torno da função externa gameForgeFuseItems.
-- O protocolo usa um único valor de tier para os dois itens; portanto, tierA e tierB devem ser iguais.
-- IDs devem ser inteiros de 0 a 65535 e tiers de 0 a 255. Os dois itens devem existir nesse tier no inventário sincronizado.
-- Se os IDs forem iguais, são necessárias ao menos duas cópias. Este método não expõe opções de core.
-- @param itemIdA (number) - O ID do primeiro item.
-- @param tierA (number) - O tier do primeiro item.
-- @param itemIdB (number) - O ID do segundo item.
-- @param tierB (number) - O tier do segundo item.
-- @param useConvergence (boolean) - Se deve usar a Fusão por Convergência.
-- @return true quando o pedido é aceito pelo emissor de pacotes; caso contrário, nil. Não confirma sucesso no servidor.
function Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)
--- Escrever texto em uma janela.
-- Esta função é um wrapper em torno da função externa gameWriteTextWindow.
-- Nota: você precisa abrir uma janela de texto antes de escrever o texto. Além disso, esta função fecha automaticamente a janela após a escrita, simulando a tecla ESCAPE. Essa função já envia direto para o servidor o texto a ser escrito, não é dependente da interface do jogo. Importante ter aberto a janela de texto antes de usar essa função.
-- @param text (string) - O texto a ser escrito.
function Game.writeTextWindow(text)

--- Aplica um imbuement.
-- Esta função é um wrapper em torno da função externa gameApplyImbuement.
-- @param slot (number) - O slot do item para aplicar o imbuement. O valor do slot começa em 0. Exemplo: slot 0, 1, 2.
-- @param imbuementId (number) - O ID do imbuement a ser aplicado.
-- @param isProtected (boolean) - Se deve aumentar a taxa de sucesso para o imbuement.
-- @return true se a ação foi enviada com sucesso para o servidor, caso contrário, false.
function Game.applyImbuement(slot, imbuementId, isProtected)

--- Limpa um imbuement.
-- Esta função é um wrapper em torno da função externa gameClearImbuement.
-- @param slot (number) - O slot do item para limpar o imbuement. O valor do slot começa em 0. Exemplo: slot 0, 1, 2.
-- @return true se a ação foi enviada com sucesso para o servidor, caso contrário, false.
function Game.clearImbuement(slot)

--- Fecha a janela de imbuement.
-- Esta função é um wrapper em torno da função externa gameCloseImbuementWindow.
-- @return true se a ação foi enviada com sucesso para o servidor, caso contrário, false.
function Game.closeImbuementWindow()

--- Solicita um snapshot dos Boss Slots; leia-o após Game.Events.BOSS_SLOT_UPDATE.
--- @return true se a solicitação foi enviada, ou nil se não pôde ser enviada.
function Game.requestBossSlots()

--- Lê o último snapshot completo dos Boss Slots nesta sessão.
--- @return A tabela do snapshot ou nil antes da primeira atualização completa.
function Game.getBossSlots()

--- Consulta o custo de remoção informado pelo servidor; um slot vazio desbloqueado custa zero.
--- @param slotId (number) - ID do slot a partir de zero: 0 ou 1.
--- @return O custo em gold, ou nil para slot bloqueado ou snapshot ausente.
function Game.getBossSlotCost(slotId)

--- Atribui um boss disponível a um slot vazio e desbloqueado.
--- @param slotId (number) - ID do slot a partir de zero: 0 ou 1.
--- @param boss (string|number) - Nome exato do boss (sem diferenciar maiúsculas/minúsculas) ou ID de raça.
--- @return true se a ação foi enviada, ou nil; aguarde a atualização para confirmar.
function Game.setBossSlot(slotId, boss)

--- Atribui um boss disponível usando a ordem de argumentos boss, slot.
--- @param boss (string|number) - Nome exato do boss (sem diferenciar maiúsculas/minúsculas) ou ID de raça.
--- @param slotId (number) - ID do slot a partir de zero: 0 ou 1.
--- @return true se a ação foi enviada, ou nil; aguarde a atualização para confirmar.
function Game.applyBoss(boss, slotId)

--- Remove o boss de um slot ocupado após conferir o saldo em gold no cache local.
--- @param slotId (number) - ID do slot a partir de zero: 0 ou 1.
--- @return true se a ação foi enviada, ou nil; o servidor confirma o resultado depois.
function Game.clearBossSlot(slotId)
```

<!-- current-core-api:start -->
## Eventos

Registre e remova a mesma referência de callback:

```lua
local function onTalk(authorName, authorLevel, talkType, x, y, z, text, channelId)
    print(authorName, text)
end

Game.registerEvent(Game.Events.TALK, onTalk)
-- Depois:
Game.unregisterEvent(Game.Events.TALK, onTalk)
```

`Game.executeEvents` é um dispatcher interno e, intencionalmente, não faz parte da API pública.

## Ações adicionais do jogo

- `Game.openChannel(channelId)` abre um canal. Use `Game.getChannelsHistory()` para consultar os IDs vistos durante a sessão injetada atual.
- `Game.follow(creatureId)` segue uma criatura.
- `Game.useItemOnInventory(itemId, inventorySlot)` usa um item em `Enums.InventorySlot`.
- `Game.applyImbuementOnScroll(imbuementId)` aplica um imbuement em um Imbuement Scroll e exige o client 15.10+.
- `Game.autoLoot()` dispara a ação nativa de Auto Loot do ZeroBot.
- `Game.requestQuestLog()` solicita os dados entregues por `Game.Events.QUEST_LOG`.
- `Game.requestQuestLines(questId)` solicita os dados entregues por `Game.Events.QUEST_LINES`.
- `Game.stashRetrieve(itemId, itemCount)` exige o stash aberto e dados atuais de `Game.Events.OPEN_STASH`.

## Store e Daily Reward

- `Game.storeOpen()` abre a store remota.
- `Game.storeRequestOffers(categoryName)` solicita ofertas; receba-as por `Game.Events.STORE_OFFERS`.
- `Game.storeBuyOffer(offerId, offerType)` compra uma oferta disponível. Use `Enums.GameStoreOfferType`.
- `Game.storeGetTibiaCoinsBalance()` e `Game.storeGetTransferableCoinsBalance()` retornam os últimos saldos recebidos da store.
- `Game.openDailyReward()` abre a janela remota da Reward Wall.
- `Game.collectDailyReward(isFromShrine, itemsToPick)` coleta a recompensa atual. Passe `nil` em `itemsToPick` quando o streak não possuir itens selecionáveis. Antes de tratar recompensas premium, verifique `Player.hasReceivedBasicData()` e `Player.isPremium()`.

## Hunting Tasks

Os slots de Hunting Tasks usam índices de `0` a `2`. Os dados chegam após o login e sempre que os dados de Hunting Tasks mudam:

```lua
local function onTaskHuntingData(task)
    if task.state == Enums.PreyTaskDataState.PREY_TASK_DATA_STATE_SELECTION then
        for _, option in ipairs(task.raceIdList or {}) do
            local monster = Client.getMonsterByRaceId(option.raceId)
            print(task.slotId, option.raceId, monster and monster.name or "desconhecido")
        end
    end
end

Game.registerEvent(Game.Events.TASK_HUNTING_DATA, onTaskHuntingData)
```

Payload de cada estado:

| Estado | Campos adicionais |
| --- | --- |
| `PREY_TASK_DATA_STATE_LOCKED` | `isPremium`, `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_INACTIVE` | `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_SELECTION` | `raceIdList = {{raceId, isUnlocked}}`, `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_LIST_SELECTION` | `bestiaryList = {{raceId, isUnlocked}}`, `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_ACTIVE` | `selectedRaceId`, `isSlotUpgrade`, `firstKills`, `secondKills`, `currentKills`, `rarity`, `freeRerollTimestamp` |
| `PREY_TASK_DATA_STATE_COMPLETED` | `selectedRaceId`, `isSlotUpgrade`, `firstKills`, `secondKills`, `currentFirstKills`, `currentSecondKills`, `rarity`, `freeRerollTimestamp` |

Todo payload também contém `slotId` e `state`. Compare `state` com `Enums.PreyTaskDataState`.

- `Game.huntingTaskRerollList(slot)` sorteia novamente a lista de monstros oferecidos.
- `Game.huntingTaskRerollRewards(slot)` sorteia novamente as recompensas.
- `Game.huntingTaskListAllMonsters(slot)` abre a seleção de todos os monstros mediante o custo em prey wildcards.
- `Game.huntingTaskSelectMonster(slot, raceId, selectMaximumAmount)` seleciona um monstro. O último argumento é `true` por padrão; a quantidade máxima só está disponível para uma entrada desbloqueada no bestiary.
- `Game.huntingTaskCancel(slot)` cancela a task selecionada.
- `Game.huntingTaskClaim(slot)` coleta a recompensa de uma task concluída.

Esses métodos de ação retornam `true` quando a ação validada foi enviada e `nil` quando não pôde ser enviada. Preços e saldos atuais estão disponíveis em `Player.getHuntingTaskPrices()`, `Player.getHuntingPoints()` e `Player.getPreyWildcards()`.

## Hunting Tasks: Bounty, Weekly e Shop

Consulte a [API de Hunting Tasks](./hunting_tasks) para os 18 métodos, payloads de `TASK_BOARD_DATA`, enums, índices zero-based, validações de estado/recurso e desbloqueio de preferência sem argumento. Estes métodos exigem protocolo 15.20+ e um servidor que implemente o recurso; os nomes públicos Lua mantêm `TaskBoard` por compatibilidade.

## Bosstiary Boss Slots (ZeroBot 1.8.9.3+)

`Game.requestBossSlots()` retorna `true` quando a solicitação é enviada ou `nil` se não pôde ser enviada. Registre `Game.Events.BOSS_SLOT_UPDATE` antes da solicitação; `Game.getBossSlots()` retorna o último snapshot completo da sessão atual, ou `nil` até ele chegar. A janela nativa de Boss Slots também pode causar uma atualização do servidor. O envio de uma ação não prova que o servidor a aceitou.

```lua
local function onBossSlots(data)
    if not data.complete then return end
    for _, slot in ipairs(data.slots) do
        print(slot.slotId, slot.bossId, slot.bossName, slot.replacementCost)
    end
end

Game.registerEvent(Game.Events.BOSS_SLOT_UPDATE, onBossSlots)
Game.requestBossSlots()
```

O snapshot contém `complete`, `bossPoints`, `pointsToNextBonus`, `currentBonus`, `nextBonus`, `slots`, `boostedBoss` e `availableBosses`. `slots` é um array Lua indexado por `1` e `2`, mas cada entrada traz `slotId` de ação `0` ou `1`. Cada slot contém `slotId`, `unlocked`, `bossId`, `bossName`, `unlockBossPoints`, `bossRace`, `killCount`, `lootBonus`, `killBonus`, `replacementCost` e `inactive`. `boostedBoss` expõe os mesmos campos informativos, exceto `slotId`; não é um slot para ações. Cada entrada de `availableBosses` contém `bossId`, `bossName` e `bossRace`. O servidor pode enviar a lista de disponíveis vazia mesmo com os dois slots ocupados; abrir a janela não garante uma lista preenchida.

`bossId` identifica o boss. `bossRace` é outro campo do servidor, não substitui o ID. Os nomes vêm do staticdata do cliente; um boss customizado ou ausente pode ter `bossName = ""`. Veja as [definições estáticas em Client](./client).

- `Game.getBossSlotCost(slotId)` retorna `0` para um slot desbloqueado e vazio, o custo de remoção informado pelo servidor para um slot ocupado, ou `nil` se o slot estiver bloqueado ou não houver snapshot.
- `Game.setBossSlot(slotId, boss)` e `Game.applyBoss(boss, slotId)` aceitam nome exato (sem diferenciar maiúsculas/minúsculas) ou ID numérico de raça. O boss precisa existir no staticdata do cliente e na lista `availableBosses` mais recente do servidor. O slot deve estar desbloqueado e vazio; a substituição direta de um slot ocupado retorna `nil`.
- `Game.clearBossSlot(slotId)` exige um slot desbloqueado e ocupado, além de saldo em gold conhecido localmente pelo menos igual a `replacementCost`. O servidor continua sendo a autoridade sobre a cobrança e o resultado final.

Os IDs dos slots devem ser os inteiros `0` ou `1`; valores inválidos geram erro Lua. Argumentos válidos que falham na validação prévia ou no envio retornam `nil`. Para substituir um boss, consulte `Game.getBossSlotCost(slotId)`, limpe o slot ocupado, aguarde `BOSS_SLOT_UPDATE` com `bossId == 0`, atribua um boss disponível e aguarde outra atualização. Não interprete o retorno `true` como confirmação do servidor.

## Exaltation Forge

`Game.forgeConvertDust()`, `Game.forgeConvertSlivers()`, `Game.forgeIncreaseLimit()` e `Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)` retornam `true` quando o ZeroBot aceita o pedido para envio, ou `nil` quando a validação ou submissão do pacote falha. O emissor também pode rejeitar pedidos sem conexão, por limite de pacotes ou por pacote duplicado na fila. Não interprete `true` como conversão, fusão ou entrega de recompensa concluída pelo servidor.

A fusão exige os cinco argumentos: quatro valores numéricos e `useConvergence` booleano. Quantidades ou tipos de argumentos incorretos geram erro Lua. A validação nativa retorna `nil` para IDs/tiers fracionários ou fora da faixa, tiers diferentes ou itens insuficientes no inventário sincronizado do servidor. IDs devem ser inteiros de `0` a `65535`; tiers devem ser inteiros de `0` a `255`. As duas contagens são lidas do mesmo snapshot. IDs de item iguais exigem ao menos duas cópias nesse tier; IDs diferentes exigem ao menos uma de cada.

O emissor rejeita Fusão por Convergência em versões do cliente que não a suportam; use `false` para fusão comum. Este método não expõe aumento de sucesso por core nem redução de perda de tier: ambas as opções de core ficam desativadas no pedido de fusão comum. A checagem do inventário é apenas uma proteção local, não confirma elegibilidade dos itens, ouro, poeira ou aceitação pelo servidor. O servidor continua sendo a autoridade.
<!-- current-core-api:end -->
