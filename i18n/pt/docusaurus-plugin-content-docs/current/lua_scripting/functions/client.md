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

--- Obtém a latência atual do cliente.
-- Esta função é um wrapper em torno da função externa clientGetLatency.
-- @return A latência atual em milissegundos, se a informação não estiver disponível retornará -1.
function Client.getLatency()
```