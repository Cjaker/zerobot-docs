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
```

<!-- current-core-api:start -->
## Dados do client e controle de sessão

- `Client.getMapIndexes()` retorna os offsets atuais da câmera/mapa como `{x, y}`; os valores mudam quando a câmera ou o personagem se move.
- `Client.getLootBlackWhitelist(playerId)` retorna o JSON da black/whitelist de loot do jogador, ou uma string vazia quando indisponível.
- `Client.setLootBlackWhitelist(playerId, content)` substitui esse conteúdo JSON.
- `Client.getAllItems()` retorna as definições de itens carregadas pelo client. Cada entrada contém `id` e `flags` bit a bit; teste as flags com `Enums.ThingFlagAttr`.
- `Client.getAllMonsters()` retorna as definições de monstros com `raceId`, `name`, `outfit` e `isBoss`.
- `Client.getMonsterByRaceId(raceId)` retorna a definição estática de um monstro.
- `Client.getWorldName()` retorna o nome do mundo OT atual, ou uma string vazia. Essa API é experimental e deve ser testada no client OT alvo.
- `Client.login(email, password, characterIndex)` primeiro desloga o personagem atual e depois entra com as credenciais informadas. Verifique se o logout é seguro antes de chamar.
- `Client.logout()` envia a ação de logout e informa se ela foi enviada.
- `Client.isChatEnabled()` retorna o estado atual do chat do jogo.
- `Client.toggleChatEnabled()` alterna o chat e retorna o estado resultante; consulte novamente no próximo frame do jogo quando precisar sincronizar o estado.

:::note Client 15.25+
`Client.getFightMode()` e `Client.setFightMode(...)` estão obsoletas no client 15.25 ou superior. Nessa versão, o getter retorna `nil`. Os nomes corretos dos enums são `Enums.FightMode` e `Enums.ChaseMode` (no singular).
:::
<!-- current-core-api:end -->
