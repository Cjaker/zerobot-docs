---
sidebar_position: 16
---

# Client
Funções gerais do cliente

```lua
Client.isConnected()
Client.isKeyPressed(key, flags)
Client.showMessage(message)
Client.getLatency()
Client.getServerLatency()
Client.focus()
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

-- Obtém a latência atual do cliente, baseado na latência da interface do jogo.
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
```