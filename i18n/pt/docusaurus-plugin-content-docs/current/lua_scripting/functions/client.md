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
Client.getLatency()
Client.getServerLatency()
Client.focus()
Client.sendHotkey(key, modifier)
Client.getCursorMapPosition()
Client.getFightMode()
Client.setFightMode(fightMode)
Client.getChaseMode()
Client.setChaseMode(chaseMode)
Client.setWindowTitle(title)
```

### Código

```lua
--- Verifica se o cliente está atualmente conectado.
-- Esta função é um wrapper em torno da função externa clientIsConnected.
-- @return true se o cliente estiver atualmente conectado, false caso contrário.
function Client.isConnected()

--- Verifica se uma tecla de atalho especificada está atualmente pressionada.
-- Esta função é um wrapper em torno da função externa clientIsKeyPressed.
-- @param key (number) - O código da tecla. Exemplo: A (0x65)
-- @param flags (string) - As flags para modificadores. Consulte o valor do parâmetro como Enums.FlagModifiers, aplique a operação bit or para múltiplas flags
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

--- Obtém a latência atual do cliente, baseado na latência da interface do jogo.
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

--- Enviar um evento de pressionamento de tecla para o cliente.
-- Esta função é um wrapper em torno da função externa clientSendHotkey.
-- Você pode basear os parâmetros key e modifier nos retornos da função HotkeyManager.parseKeyCombination.
-- @param key (number) - O código da tecla.
-- @param modifier (number) - As flags do modificador.
function Client.sendHotkey(key, modifier)

--- Obtém a posição (x, y, z) que se encontra o cursor (mouse).
-- Esta função é um wrapper em torno da função externa clientGetCursorMapPosition.
-- @return a seguinte estrutura em tabela {x=0,y=0,z=0}
function Client.getCursorMapPosition()

--- Obtém o modo de luta atual.
-- Esta função é um wrapper em torno da função externa clientGetFightMode.
-- @return o modo de luta atual, caso contrário, o último modo de luta conhecido. Consulte Enums.FightModes para valores possíveis.
function Client.getFightMode()

--- Define o modo de luta atual.
-- Observação: esta função não atualiza o modo de luta instantaneamente, ele será atualizado no próximo quadro do jogo.
-- Esta função é um wrapper em torno da função externa clientSetFightMode.
-- @param fightMode (number) - O modo de luta a ser definido. Consulte Enums.FightModes para valores possíveis.
function Client.setFightMode(fightMode)

--- Obtém o modo de perseguição atual.
-- Esta função é um wrapper em torno da função externa clientGetChaseMode.
-- @return o modo de perseguição atual, caso contrário, o último modo de perseguição conhecido. Consulte Enums.ChaseModes para valores possíveis.
function Client.getChaseMode()

--- Define o modo de perseguição atual.
-- Observação: esta função não atualiza o modo de luta instantaneamente, ele será atualizado no próximo quadro do jogo.
-- Esta função é um wrapper em torno da função externa clientSetChaseMode.
-- @param chaseMode (number) - O modo de perseguição a ser definido. Consulte Enums.ChaseModes para valores possíveis.
function Client.setChaseMode(chaseMode)

--- Define o título da janela do jogo.
-- Esta função é um wrapper em torno da função externa clientSetWindowTitle.
-- @param title (string) - O título a ser definido.
function Client.setWindowTitle(title)
```
