---
sidebar_position: 11
---

# Hunting Tasks: Bounty, Weekly e Shop

Estes métodos de Hunting Tasks exigem protocolo 15.20 ou mais recente e um servidor que implemente o recurso. Os nomes públicos Lua mantêm `TaskBoard` por compatibilidade. Eles são separados dos métodos antigos `Game.huntingTask*` e do evento `TASK_HUNTING_DATA`.

```lua
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
```

## Retornos e dados do servidor

Cada método retorna `true` quando o pedido é aceito pelo emissor de pacotes do ZeroBot, ou `nil` quando o protocolo não é suportado, falta um snapshot necessário, uma validação de estado/recurso falha ou o emissor rejeita o pedido. `true` não confirma que o servidor concluiu a ação ou concedeu uma recompensa. Quantidades ou tipos de argumentos incorretos e valores fora das faixas numéricas do protocolo geram erro Lua, em vez de retornar `nil`.

Antes de uma ação com estado, abra a janela correspondente e aguarde `Game.Events.TASK_BOARD_DATA`. O ZeroBot guarda o último snapshot completo do servidor separadamente para Bounty, Weekly e Shop, e limpa esses snapshots ao desconectar. Registre o callback antes de abrir a janela; após uma ação, aguarde dados atualizados em vez de repetir pedidos usando um snapshot antigo.

```lua
local function onHuntingTasksData(data)
    if not data.complete then
        return
    end

    if data.windowType == Enums.TaskBoardWindow.BOUNTY then
        for _, task in ipairs(data.bounty.tasks) do
            -- task.index é o índice zero-based do servidor, não a posição no array Lua.
            print("bounty", task.index, task.raceId, task.currentKills)
        end
    elseif data.windowType == Enums.TaskBoardWindow.WEEKLY then
        for _, task in ipairs(data.weekly.deliveryTasks) do
            print("entrega", task.index, task.itemId, task.availableItems)
        end
    elseif data.windowType == Enums.TaskBoardWindow.SHOP then
        print("quantidade de ofertas", data.shop.offerCount)
    end
end

Game.registerEvent(Game.Events.TASK_BOARD_DATA, onHuntingTasksData)
local requested = Game.openTaskBoardBounty()
if not requested then
    print("O pedido de Hunting Tasks não foi aceito")
end

-- Quando o listener não for mais necessário:
-- Game.unregisterEvent(Game.Events.TASK_BOARD_DATA, onHuntingTasksData)
```

## Referência das ações

Todos os índices e dificuldades abaixo são inteiros. Use o campo explícito `task.index` para selecionar uma Bounty e entregar uma Weekly. `talismanLines` e `preferenceSlots` são arrays Lua iniciados em `1`; subtraia `1` da posição do array ao passar o índice de caminho ou slot de preferência.

| Método | Dados do servidor e validações necessários |
| --- | --- |
| `Game.openTaskBoardBounty()` | Solicita a janela Bounty; não exige snapshot em cache. |
| `Game.openTaskBoardWeekly()` | Solicita a janela Weekly; não exige snapshot em cache. |
| `Game.openTaskBoardShop()` | Solicita a janela Shop; não exige snapshot em cache. |
| `Game.setTaskBoardBountyDifficulty(difficulty)` | Snapshot Bounty completo; dificuldade de `0` a `3`. |
| `Game.rerollTaskBoardBounties()` | Estado Bounty `SELECTION`; `rerollTasks` diferente de zero ou `rerollMode` igual a `DAILY_CLAIMABLE`. |
| `Game.claimTaskBoardDailyReroll()` | `rerollMode` de Bounty igual a `DAILY_CLAIMABLE`. |
| `Game.selectTaskBoardBounty(taskIndex)` | Estado Bounty `SELECTION`; tarefa listada com `index` correspondente e `claimRewardType` igual a `SELECT_TASK`. |
| `Game.claimTaskBoardBountyReward()` | Estado Bounty `COMPLETED`; exatamente uma tarefa com `claimRewardType` igual a `REWARD_CLICKED`. |
| `Game.upgradeTaskBoardTalisman(pathIndex)` | Caminho de `0` a `3` existente; `upgradeAvailable` verdadeiro e saldo de Bounty Points em cache suficiente para `upgradeCost`. |
| `Game.deliverTaskBoardWeekly(taskIndex)` | Entrega Weekly listada com `index` correspondente; `delivered` igual a `0` e `availableItems` suficiente para `requiredItems`. |
| `Game.setTaskBoardWeeklyDifficulty(difficulty)` | `weeklyProgressFinished` de Weekly diferente de zero; dificuldade de `0` a `3`, sem exceder `unlockedDifficulty`. |
| `Game.buyTaskBoardOffer(offerIndex)` | Snapshot Shop completo; índice zero-based menor que `offerCount` e no máximo `255`. Detalhes da oferta e sucesso da compra não são expostos por esta API. |
| `Game.unlockTaskBoardPreferenceSlot()` | Snapshot Bounty completo; ao menos um slot de preferência inativo e Bounty Points em cache suficientes. **Sem argumento:** o servidor escolhe o primeiro slot inativo. A validação local de custo é `min(indiceZeroBasedDoSlot * 300, 1200)`. |
| `Game.clearTaskBoardPreferred(slot)` | Slot de preferência existente e ativo, com `preferredRaceId` diferente de zero; ao menos `10` Bounty Points em cache. |
| `Game.clearTaskBoardUnwanted(slot)` | Slot de preferência existente e ativo, com `unwantedRaceId` diferente de zero; ao menos `10` Bounty Points em cache. |
| `Game.assignTaskBoardPreferred(slot, raceId)` | Slot de preferência existente e ativo; `raceId` inteiro de `1` a `65535`. As validações de elegibilidade do servidor continuam valendo. |
| `Game.assignTaskBoardUnwanted(slot, raceId)` | Slot de preferência existente e ativo; `raceId` inteiro de `1` a `65535`. As validações de elegibilidade do servidor continuam valendo. |

### Método genérico de ação

`Game.taskBoardAction(action, firstValue, secondValue)` encaminha as mesmas ações nativas dos métodos específicos. Omita os valores não exigidos pela ação. A API nativa valida a quantidade resultante de argumentos.

| Membro de `Enums.TaskBoardAction` | Valor | Argumentos adicionais |
| --- | --- | --- |
| `BOUNTY` | `0` | nenhum |
| `WEEKLY` | `1` | nenhum |
| `BOUNTY_DIFFICULTY` | `2` | `difficulty` |
| `BOUNTY_REROLL` | `3` | nenhum |
| `CLAIM_DAILY_REROLL` | `4` | nenhum |
| `BOUNTY_SELECT` | `5` | `taskIndex` |
| `BOUNTY_CLAIM_REWARD` | `6` | nenhum |
| `TALISMAN_UPGRADE` | `7` | `pathIndex` |
| `WEEKLY_DELIVERY` | `8` | `taskIndex` |
| `WEEKLY_DIFFICULTY` | `9` | `difficulty` |
| `SHOP` | `10` | nenhum |
| `SHOP_BUY` | `11` | `offerIndex` |
| `UNLOCK_PREFERENCE_SLOT` | `12` | `0` (valor reservado, não seleciona um slot) |
| `CLEAR_PREFERRED` | `13` | `slot` |
| `CLEAR_UNWANTED` | `14` | `slot` |
| `ASSIGN_PREFERRED` | `15` | `slot, raceId` |
| `ASSIGN_UNWANTED` | `16` | `slot, raceId` |

A ação deve ser um inteiro de `0` a `16`. Os primeiros valores são inteiros de `0` a `255`; os race IDs de atribuição são inteiros de `0` a `65535`, com `0` rejeitado pela validação de estado. Prefira os métodos específicos, especialmente ao desbloquear um slot de preferência:

```lua
-- Pedidos equivalentes; ambos exigem snapshot Bounty completo.
Game.unlockTaskBoardPreferenceSlot()
-- Alternativa, não um segundo pedido para enviar imediatamente:
-- Game.taskBoardAction(Enums.TaskBoardAction.UNLOCK_PREFERENCE_SLOT, 0)
```

## Payload do evento

`Game.Events.TASK_BOARD_DATA` tem valor `22`. O callback recebe uma tabela com `windowType`, `complete` booleano e a tabela específica `bounty`, `weekly` ou `shop`. Não trate um payload incompleto como dados válidos para ações.

| Enum | Membros e valores |
| --- | --- |
| `Enums.TaskBoardWindow` | `BOUNTY = 0`, `WEEKLY = 1`, `SHOP = 2` |
| `Enums.TaskBoardBountyState` | `NONE = 0`, `SELECTION = 1`, `ACTIVE = 2`, `COMPLETED = 3` |
| `Enums.TaskBoardBountyClaimRewardType` | `SELECT_TASK = 0`, `REWARD_NO_CLICK = 1`, `REWARD_CLICKED = 2` |
| `Enums.TaskBoardBountyRerollMode` | `DAILY_CLAIMABLE = 0`, `TIMER_RUNNING = 1`, `LIMIT_REACHED = 2` |

### Bounty

| Campo | Conteúdo |
| --- | --- |
| `state` | Valor de `Enums.TaskBoardBountyState`. |
| `tasks` | Array de `{index, raceId, requiredKills, rewardExperience, rewardBountyPoints, currentKills, claimRewardType, taskGrade}`. |
| `rerollTasks` | Quantidade de rerolls informada pelo servidor. |
| `dailyRerolls` | Alias de compatibilidade de `rerollTasks`, não é um saldo separado. |
| `rerollMode` | Valor de `Enums.TaskBoardBountyRerollMode`. |
| `selectedDifficulty` | Dificuldade atual de Bounty. |
| `talismanLines` | Quatro entradas com `multiplier1`, `multiplier2` numéricos, `upgradeAvailable` booleano e `upgradeCost` numérico. |
| `preferenceSlots` | Entradas com `active` booleano, `preferredRaceId` e `unwantedRaceId` numéricos. |

### Weekly

| Campos | Conteúdo |
| --- | --- |
| `anyCreatureRequiredAmount`, `anyCreatureCurrentAmount` | Requisito e progresso geral de mortes de criaturas. |
| `killTasks` | Array de `{raceId, requiredKills, currentKills}`. |
| `deliveryTasks` | Array de `{index, itemId, unknown1, unknown2, requiredItems, availableItems, delivered}`. Os significados de `unknown1` e `unknown2` não estão confirmados. |
| `difficultyMultiplier`, `unlockedDifficulty` | Multiplicador de dificuldade informado pelo servidor e dificuldade desbloqueada. |
| `weeklyProgressFinished` | Indicador numérico de conclusão. Compare com `0`; Lua trata o número `0` como verdadeiro. |
| `completedKillTasks`, `completedDeliveryTasks` | Quantidades de tarefas concluídas informadas pelo servidor. |
| `killExperienceReward`, `itemDeliveryExperienceReward` | Recompensas de experiência. |
| `nextResetTimestamp` | Valor numérico de reset enviado pelo servidor; sua unidade de tempo não está confirmada aqui. |
| `thirdWeeklySlotUnlocked` | Indicador booleano do terceiro slot. |
| `huntingPointsReward`, `soulSealsReward` | Recompensas semanais. |

### Shop

`shop.offerCount` é o único campo exposto da loja. Nomes, itens, preços, disponibilidade das ofertas e dados do resultado da compra não são expostos pelo parser atual. Não os deduza a partir de um índice de oferta.

## Escopo da validação

Esta referência usa o core Lua distribuído e a implementação nativa, incluindo as correções posteriores de estado/recurso e desbloqueio sem argumento. O servidor continua sendo a autoridade. Documentação e verificações estáticas da API não substituem testes dessas ações em um cliente conectado e suportado.
