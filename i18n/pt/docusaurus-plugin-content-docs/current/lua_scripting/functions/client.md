---
sidebar_position: 16
---

# Client
Funções gerais do cliente

```lua
Client.isConnected()
Client.isKeyPressed(key, flags)
Client.showMessage(message)
Client.XLog()
Client.getGameWindowDimensions()
Client.getMapIndexes()
Client.getLatency()
Client.getServerLatency()
Client.getLootBlackWhitelist(playerId)
Client.setLootBlackWhitelist(playerId, content)
Client.getAllItems()
Client.getAllMonsters()
Client.getMonsterByRaceId(raceId)
Client.getStaticDataInfo()
Client.getBossByRaceId(raceId)
Client.getAllBosses()
Client.getCreatureClassById(id)
Client.getAllCreatureClasses()
Client.getAchievementById(id)
Client.getAllAchievements()
Client.getHouseById(id)
Client.getAllHouses()
Client.getQuestById(id)
Client.getAllQuests()
Client.getWorldName()
Client.login(email, password, characterIndex)
Client.logout()
Client.focus()
Client.sendHotkey(key, modifier)
Client.getCursorMapPosition()
Client.getFightMode()
Client.setFightMode(fightMode)
Client.getChaseMode()
Client.setChaseMode(chaseMode)
Client.setWindowTitle(title)
Client.getVersion()
Client.isTradeShopOpen()
Client.isChatEnabled()
Client.toggleChatEnabled()
Client.flashWindow()
Client.getFps()
```

### Código

```lua
--- Verifica se o cliente está atualmente conectado.
-- Esta função é um wrapper em torno da função externa clientIsConnected.
-- @return true se o cliente estiver atualmente conectado, false caso contrário.
function Client.isConnected()

--- Verifica se uma tecla de atalho especificada está atualmente pressionada.
-- Esta função é um wrapper em torno da função externa clientIsKeyPressed.
-- @param key (number) - O código numérico retornado por HotkeyManager.parseKeyCombination.
-- @param flags (number) - A máscara de bits de Enums.FlagModifiers. Combine várias flags com bit.bor.
-- @return true se a tecla especificada estiver pressionada, false caso contrário.
function Client.isKeyPressed(key, flags)

--- Mostra uma mensagem no centro da tela do jogo.
-- Esta função é um wrapper em torno da função externa clientShowMessage.
-- @param message (string) - A mensagem a ser mostrada
function Client.showMessage(message)

--- Desconecta o cliente usando a função nativa X-Log do cliente.
-- Esta função é um wrapper em torno da função externa clientXLog.
function Client.XLog()

--- Obtém as dimensões da janela do jogo do cliente.
-- Esta função é um wrapper em torno da função externa clientGetGameWindowDimensions.
-- @return a seguinte estrutura em tabela {x=0,y=0,width=0,height=0}
function Client.getGameWindowDimensions()

--- Obtém a latência atual do cliente, baseado na latência mostrada na interface do jogo.
-- Esta função é um wrapper em torno da função externa clientGetLatency.
-- @return A latência atual em milissegundos, se a informação não estiver disponível retornará -1.
function Client.getLatency()

--- Obtém a latência atual do servidor.
-- Esta função é um wrapper em torno da função externa clientGetServerLatency.
-- @return A latência atual do servidor em milissegundos; se a informação não estiver disponível, retornará 0.
function Client.getServerLatency()

--- Foca na janela do cliente.
-- Esta função é um wrapper em torno da função externa clientFocus.
-- Nota da documentação do Windows: Um aplicativo não pode forçar uma janela para o primeiro plano enquanto o usuário está trabalhando com outra janela. Em vez disso, o Windows pisca o botão da barra de tarefas da janela para notificar o usuário.
function Client.focus()

--- Envia um evento de pressionamento de tecla para o cliente.
-- Esta função é um wrapper em torno da função externa clientSendHotkey.
-- Você pode basear os parâmetros key e modifier nos retornos da função HotkeyManager.parseKeyCombination.
-- @param key (number) - O código da tecla.
-- @param modifier (number) - As flags do modificador.
function Client.sendHotkey(key, modifier)

--- Obtém a posição do mapa (x, y, z) no piso onde está posicionado o seu cursor (mouse).
-- Esta função é um wrapper em torno da função externa clientGetCursorMapPosition.
-- @return a seguinte estrutura em tabela {x=0,y=0,z=0}
function Client.getCursorMapPosition()

--- Obtém o modo de luta atual.
-- Esta função é um wrapper em torno da função externa clientGetFightMode.
-- @return o modo de luta atual, caso contrário, o último modo de luta conhecido. Consulte Enums.FightMode para saber os possíveis valores de retorno.
function Client.getFightMode()

--- Define o modo de luta atual.
-- Observação: esta função não atualiza o modo de luta instantaneamente, ele será atualizado na próxima renderização de frame/quadro do jogo.
-- Esta função é um wrapper em torno da função externa clientSetFightMode.
-- @param fightMode (number) - O modo de luta a ser definido. Consulte Enums.FightMode para saber os possíveis valores que possam ser definidos.
function Client.setFightMode(fightMode)

--- Obtém o modo de perseguição atual.
-- Esta função é um wrapper em torno da função externa clientGetChaseMode.
-- @return o modo de perseguição atual, caso contrário, o último modo de perseguição conhecido. Consulte Enums.ChaseMode para saber os possíveis valores de retorno.
function Client.getChaseMode()

--- Define o modo de perseguição atual.
-- Observação: esta função não atualiza o modo de luta instantaneamente, ele será atualizado na próxima renderização de frame/quadro do jogo.
-- Esta função é um wrapper em torno da função externa clientSetChaseMode.
-- @param chaseMode (number) - O modo de perseguição a ser definido. Consulte Enums.ChaseMode para saber os possíveis valores que possam ser definidos.
function Client.setChaseMode(chaseMode)

--- Define o título da janela do cliente.
-- Esta função é um wrapper em torno da função externa clientSetWindowTitle.
-- @param title (string) - O título a ser definido.
function Client.setWindowTitle(title)

--- Obtém a versão do cliente.
-- Esta função é um wrapper em torno da função externa clientGetVersion.
function Client.getVersion()

--- Verifica se a janela de trade está atualmente aberta.
-- Esta função é um wrapper em torno da função externa clientIsTradeShopOpen.
function Client.isTradeShopOpen()

--- Faz a janela do jogo piscar.
-- Esta função é um wrapper em torno da função externa clientFlashWindow.
function Client.flashWindow()

--- Obtém o FPS atual do cliente.
-- Esta função é um wrapper em torno da função externa clientGetFps.
function Client.getFps()

--- Consulta o estado e as contagens das coleções do staticdata do cliente atual.
--- @return Uma tabela com loaded, schemaVersion, hasCreatureClasses, creatures, bosses, creatureClasses, achievements, houses e quests.
function Client.getStaticDataInfo()

--- Consulta a definição de um boss nos assets do cliente.
--- @param raceId (number) - O ID de raça do boss.
--- @return Uma tabela com raceId, name, outfit, isBoss e category opcional, ou nil para ID inválido ou ausente.
function Client.getBossByRaceId(raceId)

--- Lista todas as definições de bosses dos assets do cliente.
--- @return Um array de tabelas de bosses, ou uma tabela vazia quando nenhuma estiver disponível.
function Client.getAllBosses()

--- Consulta uma Creature Class (staticdata 15.30+).
--- @param id (number) - O ID da Creature Class.
--- @return Uma tabela com id e name, ou nil para ID inválido ou ausente.
function Client.getCreatureClassById(id)

--- Lista as Creature Classes (staticdata 15.30+).
--- @return Um array de tabelas com id e name, ou uma tabela vazia quando nenhuma estiver disponível.
function Client.getAllCreatureClasses()

--- Consulta uma definição de achievement nos assets do cliente.
--- @param id (number) - O ID do achievement.
--- @return Uma tabela com id, name, description e grade, ou nil para ID inválido ou ausente.
function Client.getAchievementById(id)

--- Lista as definições de achievements dos assets do cliente.
--- @return Um array de tabelas com id, name, description e grade, ou uma tabela vazia quando nenhuma estiver disponível.
function Client.getAllAchievements()

--- Consulta uma definição de house nos assets do cliente.
--- @param id (number) - O ID da house.
--- @return Uma tabela de house com position opcional, ou nil para ID inválido ou ausente.
function Client.getHouseById(id)

--- Lista as definições de houses dos assets do cliente.
--- @return Um array de tabelas de houses, ou uma tabela vazia quando nenhuma estiver disponível.
function Client.getAllHouses()

--- Consulta uma definição de quest nos assets do cliente.
--- @param id (number) - O ID da quest.
--- @return Uma tabela com id e name, ou nil para ID inválido ou ausente.
function Client.getQuestById(id)

--- Lista as definições de quests dos assets do cliente.
--- @return Um array de tabelas com id e name, ou uma tabela vazia quando nenhuma estiver disponível.
function Client.getAllQuests()
```

<!-- current-core-api:start -->
## Dados do client e controle de sessão

- `Client.getMapIndexes()` retorna os offsets atuais da câmera/mapa como `{x, y}`; os valores mudam quando a câmera ou o personagem se move.
- `Client.getLootBlackWhitelist(playerId)` retorna o JSON da black/whitelist de loot do jogador, ou uma string vazia quando indisponível.
- `Client.setLootBlackWhitelist(playerId, content)` substitui esse conteúdo JSON.
- `Client.getAllItems()` retorna as definições de itens carregadas pelo client. Cada entrada contém `id` e `flags` bit a bit; teste as flags com `Enums.ThingFlagAttr`.
- `Client.getAllMonsters()` retorna definições de monstros e bosses com `raceId`, `name`, `outfit`, `isBoss` e `category` opcional nos assets 15.30+.
- `Client.getMonsterByRaceId(raceId)` retorna a definição estática de um monstro.
- `Client.getWorldName()` retorna o nome do mundo OT atual, ou uma string vazia. Essa API é experimental e deve ser testada no client OT alvo.
- `Client.login(email, password, characterIndex)` primeiro desloga o personagem atual e depois entra com as credenciais informadas. Verifique se o logout é seguro antes de chamar.
- `Client.logout()` envia a ação de logout e informa se ela foi enviada.
- `Client.isChatEnabled()` retorna o estado atual do chat do jogo.
- `Client.toggleChatEnabled()` alterna o chat e retorna o estado resultante; consulte novamente no próximo frame do jogo quando precisar sincronizar o estado.

## Dados estáticos do cliente (ZeroBot 1.8.9.4+)

Estas APIs leem definições do asset `staticdata` do cliente, não o progresso do personagem nem a seleção atual dos Boss Slots no servidor. Clientes suportados até 15.25 usam o layout legado; clientes 15.30+ usam o layout que também contém Creature Classes. O asset precisa ser legível: alguns OTs protegem ou alteram esse arquivo e podem deixar as coleções indisponíveis.

`Client.getStaticDataInfo()` retorna `{loaded, schemaVersion, hasCreatureClasses, creatures, bosses, creatureClasses, achievements, houses, quests}`. `schemaVersion` é `0` quando indisponível, `1` no layout legado ou `2` no 15.30+. `hasCreatureClasses` identifica o layout, não garante que a lista tenha entradas. A contagem `creatures` inclui bosses porque a consulta existente de monstros é unificada. `loaded` significa que o parse terminou; um asset sintaticamente válido, mas vazio, ainda pode resultar em `loaded=true` e contagens zero.

| Definição | Consulta | Lista | Campos do registro |
| --- | --- | --- | --- |
| Boss | `Client.getBossByRaceId(raceId)` | `Client.getAllBosses()` | `raceId`, `name`, `outfit`, `isBoss`, `category` opcional |
| Creature Class (15.30+) | `Client.getCreatureClassById(id)` | `Client.getAllCreatureClasses()` | `id`, `name` |
| Achievement | `Client.getAchievementById(id)` | `Client.getAllAchievements()` | `id`, `name`, `description`, `grade` |
| House | `Client.getHouseById(id)` | `Client.getAllHouses()` | `id`, `name`, `description`, `rent`, `beds`, `sqms`, `isGuildHall`, `city`, `isShop`, `position = {x, y, z}` opcional |
| Quest | `Client.getQuestById(id)` | `Client.getAllQuests()` | `id`, `name` |

As consultas por ID retornam `nil` para IDs inválidos ou ausentes; as listas retornam tabela vazia quando não há definições. No layout legado, consultas de Creature Classes retornam `nil` e sua lista é vazia. Um boss customizado do OT que não exista no asset não é inventado pela API; seu `bossName` nos Boss Slots pode ficar vazio.

:::note Client 15.25+
`Client.getFightMode()` e `Client.setFightMode(...)` estão obsoletas no client 15.25 ou superior. Nessa versão, o getter retorna `nil`. Os nomes corretos dos enums são `Enums.FightMode` e `Enums.ChaseMode` (no singular).
:::
<!-- current-core-api:end -->
