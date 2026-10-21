---
sidebar_position: 1
---

# Eventos do jogo

Os eventos permitem que um script reaja a dados recebidos pelo cliente, interações com a interface, estados do CaveBot e recursos do ZeroBot.

## Registrando e removendo eventos

```lua
local function onMagicEffect(effectType, x, y, z)
    print("effect", effectType, x, y, z)
end

Game.registerEvent(Game.Events.MAGIC_EFFECT, onMagicEffect)

-- Use a mesma referência de função quando ela não for mais necessária.
Game.unregisterEvent(Game.Events.MAGIC_EFFECT, onMagicEffect)
```

`Game.registerEvent` e `Game.unregisterEvent` retornam o callback recebido. Mantenha callbacks em variáveis locais quando o script puder removê-los mais tarde.

## Eventos disponíveis

| Evento | Argumentos do callback | Quando é acionado |
| --- | --- | --- |
| `Game.Events.TALK` | `authorName, authorLevel, type, x, y, z, text, channelId` | Uma mensagem de fala é recebida. `type` usa `Enums.TalkTypes`; `channelId` identifica o canal quando aplicável. |
| `Game.Events.MAGIC_EFFECT` | `type, x, y, z` | Um magic effect é recebido. |
| `Game.Events.HUD_CLICK` | `id` | Um HUD criado por script é clicado. |
| `Game.Events.HOTKEY_SHORTCUT_PRESS` | `key, modifier` | Um atalho de teclado suportado é pressionado. Compare os dois valores com `HotkeyManager.parseKeyCombination`. |
| `Game.Events.TEXT_MESSAGE` | `messageData` | Uma mensagem de texto do servidor é recebida. `messageData.messageType` pode ser comparado com `Enums.MessageTypes`, mas os tipos podem variar conforme a versão do cliente. |
| `Game.Events.MODAL_WINDOW` | `modalWindowData` | O servidor abre uma janela modal do jogo. |
| `Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK` | `modalId, buttonIndex` | Um botão de uma `CustomModalWindow` criada por script é clicado. |
| `Game.Events.IMBUEMENT_DATA` | `imbuementData` | Os dados da janela de imbuement são recebidos. |
| `Game.Events.IMBUEMENT_OPEN_WINDOW` | nenhum | A janela de imbuement é aberta. Disponível no cliente 15.10 ou mais recente. |
| `Game.Events.QUEST_LOG` | `quests` | Os dados do quest log são recebidos após a solicitação do cliente ou do script. |
| `Game.Events.QUEST_LINES` | `questId, missions` | As missões de uma quest são recebidas. |
| `Game.Events.DISTANCE_SHOOT_EFFECT` | `type, fromX, fromY, fromZ, toX, toY, toZ` | Um efeito de distância é recebido. |
| `Game.Events.PARTY_HUNT` | `output` | A saída de Party Hunt é capturada. A opção Party Hunt da aba Engine precisa estar ativada. |
| `Game.Events.LABEL` | `wpId, label` | O CaveBot chega a um waypoint Label. Ele fica pausado até o callback continuar a execução com `CaveBot.pause(0)`. |
| `Game.Events.OPEN_STASH` | `stashData` | Os dados do stash são recebidos quando ele é aberto. |
| `Game.Events.HUD_DRAG` | `id, x, y` | Um HUD arrastável é solto em uma nova posição da tela. |
| `Game.Events.STORE_CATEGORIES` | `storeCategoriesData` | Os dados de categorias da Game Store são recebidos. |
| `Game.Events.STORE_OFFERS` | `storeOffersData` | Os dados de ofertas da Game Store são recebidos. |
| `Game.Events.OPEN_DAILY_REWARD` | `dailyRewardData` | Os dados da janela de Daily Reward são recebidos. |
| `Game.Events.DAILY_REWARD_DAYS_DATA` | `dailyRewardDaysData` | Os dados dos dias de Daily Reward são recebidos. |
| `Game.Events.ALARM` | `alarmType` | Um alarme do ZeroBot é acionado. Compare `alarmType` com `Enums.AlarmType`. |
| `Game.Events.TASK_HUNTING_DATA` | `taskHuntingData` | Dados de Hunting Tasks ou uma atualização de slot são recebidos. Interprete `taskHuntingData.state` com `Enums.PreyTaskDataState`. |
| `Game.Events.TASK_BOARD_DATA` | `taskBoardData` | Dados da janela Bounty, Weekly ou Shop são recebidos. Consulte a [API de Hunting Tasks](./functions/hunting_tasks). |
| `Game.Events.BOSS_SLOT_UPDATE` | `bossSlotsData` | Um snapshot completo dos Boss Slots do Bosstiary é recebido do servidor. Consulte a [API de Boss Slots](./functions/game). |

## Payloads estruturados

Vários eventos entregam uma tabela Lua cujos campos dependem do pacote e, em alguns casos, da versão do cliente. Inspecione o payload completo antes de depender de campos opcionais:

```lua
local function onTextMessage(messageData)
    print(JSON.encode(messageData))
end

Game.registerEvent(Game.Events.TEXT_MESSAGE, onTextMessage)
```

Payloads comuns incluem:

- `TEXT_MESSAGE`: canal, tipo, texto, posição, cores e valores numéricos fornecidos pelo cliente.
- `MODAL_WINDOW`: ID, título, mensagem, botões, escolhas, botões padrão e prioridade.
- `OPEN_STASH`: `stashItems`, com entradas contendo `itemId` e `count`, além de `freeSlots`.
- `TASK_HUNTING_DATA`: ID do slot, estado e campos de Hunting Tasks específicos desse estado. Veja a seção Hunting Tasks na [API Game](./functions/game).
- `BOSS_SLOT_UPDATE`: Boss Points, dois slots, boosted boss e bosses disponíveis para atribuição naquele momento. Consulte a [API de Boss Slots](./functions/game).

Sempre proteja o acesso a campos opcionais e dados específicos de cada estado:

```lua
local function onHuntingTasks(data)
    if data.state == Enums.PreyTaskDataState.PREY_TASK_DATA_STATE_ACTIVE then
        print("slot", data.slotId, "kills", data.currentKills)
    end
end

Game.registerEvent(Game.Events.TASK_HUNTING_DATA, onHuntingTasks)
```

## Exemplos de interação

### Hotkey

```lua
local valid, expectedModifier, expectedKey =
    HotkeyManager.parseKeyCombination("Ctrl+F8")

local function onShortcut(key, modifier)
    if valid and key == expectedKey and modifier == expectedModifier then
        print("Ctrl+F8 pressionado")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, onShortcut)
```

### Label do CaveBot

```lua
local function onLabel(waypointId, label)
    print("Label alcançado", waypointId, label)

    -- O CaveBot fica pausado enquanto este handler executa a ação do label.
    CaveBot.pause(0)
end

Game.registerEvent(Game.Events.LABEL, onLabel)
```

### Clique e arraste de HUD

```lua
local hud = HUD(40, 40, "Arraste ou clique", true)
hud:setDraggable(true)

local function onHudClick(id)
    if id == hud:getId() then
        print("clicado")
    end
end

local function onHudDrag(id, x, y)
    if id == hud:getId() then
        print("solto em", x, y)
    end
end

Game.registerEvent(Game.Events.HUD_CLICK, onHudClick)
Game.registerEvent(Game.Events.HUD_DRAG, onHudDrag)
```

## Hunting Tasks: Bounty, Weekly e Shop

`Game.Events.TASK_BOARD_DATA` (valor `22`) recebe uma tabela `taskBoardData` quando chegam dados de uma janela de Hunting Tasks em um servidor que implemente o recurso. A tabela contém `windowType`, `complete` booleano e o payload correspondente `bounty`, `weekly` ou `shop`. Este evento é separado do antigo `TASK_HUNTING_DATA`.

Registre o listener antes de abrir a janela e use somente snapshots completos nas ações com estado. Consulte a [API de Hunting Tasks](./functions/hunting_tasks) para exemplos de registro, enums, todos os campos expostos e limitações do parser.

## Bosstiary Boss Slots

`Game.Events.BOSS_SLOT_UPDATE` (valor `23`) recebe uma tabela `bossSlotsData` quando chega um pacote completo dos Boss Slots, inclusive após `Game.requestBossSlots()` ou uma atualização pela janela nativa. Registre o listener antes de solicitar os dados. `availableBosses` pode estar vazio quando os dois slots estão ocupados; os nomes dependem de staticdata correspondente no cliente e podem ficar vazios para bosses customizados. O retorno `true` de uma ação significa que o pacote foi enviado, não que o servidor aceitou a mudança. Consulte a [API de Boss Slots](./functions/game) para os campos e a sequência segura de ações.
