---
sidebar_position: 3
---

# Scripting

## Breve Explicação
O waypoint do tipo `Script` permite que você escreva suas próprias ações personalizadas.

Você pode usar qualquer função disponível na seção [Scripting Lua].

Após cada ação, é recomendado adicionar algum atraso, com a função `wait(delay)`.

Para demonstrar alguns dos casos de uso mais comuns, aqui vão alguns trechos de código:

### Usar um item

```lua
local itemId = 3725
Game.useItem(itemId)
wait(1000)
```

### Falar com NPC

```lua
Game.talk('hi', Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
```

### Usar magia

```lua
Game.talk('exani hur "up"', Enums.TalkTypes.TALKTYPE_SAY)
```

### Mudar de direção

Útil para exani hur "up/down" e alguns outros casos.

```lua
local direction = Enums.Directions.NORTH
Game.turn(direction)
```

Uma Direção pode ser uma das seguintes:
```lua
Enums.Directions.NORTH
Enums.Directions.SOUTH
Enums.Directions.EAST
Enums.Directions.WEST
```

### Usar funções definidas em um arquivo lua

Isso pode ser útil para ativar scripts, por exemplo, scripts para comprar suprimentos ou vender itens.

Você pode encontrar scripts como esses no nosso Discord, na seção `scripts-gerais`.

```lua
dofile("fileName.lua")
someFunction()
```

### Usar objeto no chão

Útil para abrir portas, clicar em escadas, bueiros, vagonetes, etc.

Você já pode fazer isso com o tipo de waypoint `Use`, mas você pode ser realmente criativo com este trecho e um pouco de programação.

```lua
local pos = Map.getCameraPosition() -- sua posição atual
Map.useItemOnGround(pos.x, pos.y, pos.z)
wait(1000)
```

Isso usará o item na sua posição atual.\
Para usar à esquerda: `pos.x-1`\
Para usar à direita: `pos.x+1`\
Para usar ao norte: `pos.y-1`\
Para usar ao sul: `pos.y+1`

Note que se um item ou criatura estiver em pé nesta posição, esse trecho sozinho pode não funcionar.

# Atualização 1.7.5.5
Waypoints do tipo script suportam Game events e Timers.
Depois de você usar essas funcionalidades, você deve destrui-los ou desregistra-los para evitar que o script continue rodando indefinidamente.

Se você mantiver o timer ou Game event em execução, o script continuará rodando indefinidamente.

### Exemplo:
```LUA
function sellCycle()
    gameTalk("hi", 1)
    wait(500)
    gameTalk("trade", 12)
    wait(500)
    Npc.sell(23721, 1, true)
    wait(500)
end

function messageCallback(messageData)
    if not messageData then return end
    local message = messageData.text
    print("message " ..message)
    if message:lower():find("you have no items in your loot pouch.") then
        destroyTimer("sell-loot") -- destruindo o timer
        Game.unregisterEvent(Game.Events.TEXT_MESSAGE, messageCallback) -- desregistrando o evento
    end
end

Game.registerEvent(Game.Events.TEXT_MESSAGE, messageCallback)

Timer("sell-loot", function()
    sellCycle()
end, 1000)
```