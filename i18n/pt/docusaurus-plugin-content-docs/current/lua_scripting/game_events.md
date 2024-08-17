---
sidebar_position: 1
---

# Eventos do Jogo

Documentação dos eventos internos do jogo

### Introdução

Esta documentação descreve as funções internas de Lua projetadas para lidar com eventos do jogo. Essas funções desempenham um papel vital na resposta a várias atividades no jogo, incluindo mensagens, magic effects, ações de teclas de atalho e muito mais.

### Eventos

```lua
1. Game.Events.TALK
2. Game.Events.MAGIC_EFFECT
3. Game.Events.HOTKEY_SHORTCUT_PRESS
4. Game.Events.TEXT_MESSAGE
5. Game.Events.MODAL_WINDOW
6. Game.Events.HUD_CLICK
7. Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK
8. Game.Events.IMBUEMENT_DATA
```

### Propósito e Uso
### 1. `Game.Events.TALK`
**Propósito**: Este evento é acionado ao receber uma mensagem no jogo. Ele pode ser usado para capturar mensagens nos chats do jogo, como Chat Local, Publicidade, Chat Mundial, etc. Ele também inclui as coordenadas (x, y, z), nome do autor e nível.

## Uso:
```lua
-- Parâmetros:
-- @param authorName - O nome do autor da mensagem.
-- @param authorLevel - O nível do autor (geralmente para identificar o nível do jogador no chat).
-- @param messageType - O tipo da mensagem, baseado em Enums.TalkTypes.
-- @param x, y, z - As coordenadas da posição do mapa onde a mensagem foi enviada.
-- @param text - O conteúdo da mensagem.
function onTextMessageCheck(authorName, authorLevel, messageType, x, y, z, text)
    print(authorName, authorLevel, messageType, x, y, z, text)
end

Game.registerEvent(Game.Events.TALK, onTextMessageCheck)
```

### 2. `Game.Events.MAGIC_EFFECT`
**Purpose**: Este evento é acionado quando o servidor envia um magic effect para a tela. Contém o ID do efeito e as coordenadas onde este efeito é exibido.

## Usage:
```lua
-- Estrutura de dados de mensagem de exemplo:
-- @param Type: O ID do efeito.
-- @param x: A posição x do efeito.
-- @param y: A posição y do efeito.
-- @param z: A posição z do efeito.
function OnEffect(Type, x, y, z)
    print("ID do efeito: " .. Type .. " na posição: " .. x .. ", " .. y .. ", " .. z)
end

Game.registerEvent(Game.Events.MAGIC_EFFECT, OnEffect)
```

**Propósito**: Este evento é acionado ao receber uma mensagem no jogo. Ele pode ser usado para capturar mensagens nos chats do jogo, como Chat Local, Publicidade, Chat Mundial, etc. Ele também inclui as coordenadas (x, y, z), nome do autor e nível.

## Uso:
```lua
-- Parâmetros:
-- @param authorName - O nome do autor da mensagem.
-- @param authorLevel - O nível do autor (geralmente para identificar o nível do jogador no chat).
-- @param messageType - O tipo da mensagem, baseado em Enums.TalkTypes.
-- @param x, y, z - As coordenadas da posição do mapa onde a mensagem foi enviada.
-- @param text - O conteúdo da mensagem.
function onTextMessageCheck(authorName, authorLevel, messageType, x, y, z, text)
    print(authorName, authorLevel, messageType, x, y, z, text)
end

Game.registerEvent(Game.Events.TALK, onTextMessageCheck)
```

### 2. `Game.Events.MAGIC_EFFECT`
**Propósito**: Este evento é acionado quando o servidor envia um magic effect para a tela. Ele contém o ID do efeito e as coordenadas onde este efeito é exibido.

## Uso:
```lua
-- Estrutura de dados de mensagem de exemplo:
-- @param Type: O ID do efeito.
-- @param x: A posição x do efeito.
-- @param y: A posição y do efeito.
-- @param z: A posição z do efeito.
function OnEffect(Type, x, y, z)
    print("ID do efeito: " .. Type .. " na posição: " .. x .. ", " .. y .. ", " .. z)
end

Game.registerEvent(Game.Events.MAGIC_EFFECT, OnEffect)
```

### 3. `Game.Events.HOTKEY_SHORTCUT_PRESS`
**Propósito**: Este evento é ativado quando um jogador pressiona uma tecla no teclado. Ele responde a pressões de teclas de atalho, incluindo o código da tecla e modificadores.

## Uso:
```lua
-- Exemplo de uso com uma combinação de teclas específica:
-- @param key - O código da tecla pressionada.
-- @param modifier - A tecla modificadora pressionada (por exemplo, CTRL).
local _, _, REFILLER_KEY = HotkeyManager.parseKeyCombination("p")
local function OnKeyPressed(key, modifier)
    if key == REFILLER_KEY then
        print("Tecla " .. REFILLER_KEY .. " pressionada.")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, OnKeyPressed)
```

### 4. `Game.Events.TEXT_MESSAGE`
**Propósito**: Este evento é acionado quando o servidor envia uma mensagem de texto. Estas podem ser, por exemplo, as mensagens brancas que aparecem no meio da tela do jogador, como mensagens de Log do Servidor.

####

<div class="text--center">
  <img src="/img/loot_message.png" />
  <p>Este é um exemplo de uma mensagem de texto</p>
</div>

## Uso:
```lua
-- Estrutura de dados de mensagem de exemplo:
-- {
--     "channelId": 0,
--     "messagePrimaryValue": 13048,
--     "messagePrimaryColor": 180,
--     "messageSecondaryValue": 0,
--     "x": 32424,
--     "y": 32147,
--     "z": 7,
--     "text": "A monk loses 4 hitpoints due to your attack.",
--     "messageSecondaryColor": 255,
--     "messageType": 23
-- }
--
-- O campo messageType pode ser baseado em Enums.MessageTypes
-- @param messageData - Os dados da mensagem incluindo ID do canal, valores e cores primárias/secundárias, coordenadas e o texto.
function onTextEvent(messageData)
    print(JSON.encode(messageData))
end

Game.registerEvent(Game.Events.TEXT_MESSAGE, onTextEvent)
```

Observação: O tipo de mensagem pode mudar dependendo da versão do cliente

### 5. `Game.Events.MODAL_WINDOW`
**Propósito**: Este evento é acionado quando o servidor envia ações de janela modal no jogo, detalhando dados da janela como botões e títulos.

####

<div class="text--center">
  <img src="/img/modal_window.png" />
  <p>Este é um exemplo de uma janela modal</p>
</div>

## Uso:
```lua
-- {
--     "defaultEscapeButton": 255,
--     "defaultEnterButton": 255,
--     "priority": 0,
--     "title": "Select an option",
--     "buttons": [
--         {
--             "text": "First",
--             "id": 1
--         },
--         {
--             "text": "Second",
--             "id": 2
--         },
--         {
--             "text": "Third",
--             "id": 3
--         },
--         {
--             "text": "Fourth",
--             "id": 4
--         }
--     ],
--     "id": 1,
--     "message": "Hello",
--     "choices": []
-- }
-- Parâmetros:
-- @param data - Os dados da janela modal incluindo botões padrão, prioridade, título, botões e mensagem.
function onModalWindow(data)
    print(JSON.encode(data))
end

Game.registerEvent(Game.Events.MODAL_WINDOW, onModalWindow)
```

### 6. `Game.Events.HUD_CLICK`
**Propósito**: Este evento é acionado por cliques em qualquer elemento HUD (HUD criado por funções HUD), identificado pelo ID do HUD.

## Uso:
```lua
-- Parâmetros:
-- @param id - O ID do elemento HUD que foi clicado.
function onHUDClick(id)
    print(id)
end

Game.registerEvent(Game.Events.HUD_CLICK, onHUDClick)
```

### 7. `Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK`
**Propósito**: Este evento é acionado quando um jogador clica em um botão personalizado em uma janela modal.

## Uso:
```lua
-- Parâmetros:
-- @param modalId - O ID da janela modal.
-- @param buttonId - O ID do botão clicado.
function onCustomModalWindowButtonClick(modalId, buttonId)
    print(modalId, buttonId)
end

Game.registerEvent(Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK, onCustomModalWindowButtonClick)
```

### 8. `Game.Events.IMBUEMENT_DATA`
**Propósito**: Este evento é acionado quando o servidor envia dados de imbuimento para a janela de imbuimento.

## Uso:
```lua
-- Parâmetros:
-- @param imbuementData - Os dados de imbuimento recebidos do servidor.
function onImbuementData(imbuementData)
    print(JSON.encode(imbuementData))
end

Game.registerEvent(Game.Events.IMBUEMENT_DATA, onImbuementData)
```