---
sidebar_position: 3
---

# Scripting

Um waypoint `Script` executa Lua quando o CaveBot chega até ele. Prefira um tipo de waypoint dedicado quando existir; use um script para ações que precisem de condições personalizadas ou de uma sequência de chamadas da API.

Todas as funções públicas de [Lua Scripting](../lua_scripting/) estão disponíveis. Os módulos do core já estão carregados.

Use `wait(milliseconds)` somente entre ações que precisam de sequenciamento. Ele bloqueia o script do waypoint atual e não deve ser usado em um loop permanente.

## Ações comuns

### Usar um item

```lua
local itemId = 3725
Game.useItem(itemId)
```

### Falar com NPC

```lua
Game.talk("hi", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
wait(500)
Game.talk("trade", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
```

O NPC deve estar próximo e o tipo de fala selecionado deve ser suportado pelo client/servidor de destino.

### Usar uma magia

```lua
Game.talk('exani hur "up"', Enums.TalkTypes.TALKTYPE_SAY)
```

### Mudar de direção

```lua
Game.turn(Enums.Directions.NORTH)
```

```lua
Enums.Directions.NORTH
Enums.Directions.EAST
Enums.Directions.SOUTH
Enums.Directions.WEST
```

### Carregar um arquivo auxiliar

```lua
local ok, err = dofile("helpers_lib/supplies.lua")
if not ok then
    print(err)
    return
end

someFunction()
```

Os caminhos relativos passados para `dofile` começam em `Documents/ZeroBot/Scripts`.

### Usar o item no topo de um tile

Prefira o waypoint `Use` em uma rota fixa. Para uma posição calculada:

```lua
local pos = Map.getCameraPosition()
local target = {
    x = pos.x + 1,
    y = pos.y,
    z = pos.z,
}

local used = Game.useItemFromGround(target.x, target.y, target.z)
if not used then
    print("Não foi possível usar o item no tile de destino")
end
```

Os deslocamentos de coordenadas são:

- oeste: `x - 1`
- leste: `x + 1`
- norte: `y - 1`
- sul: `y + 1`

A ação usa o item escolhido pela pilha do tile no client. Uma criatura ou outro item no tile pode alterar qual item será usado.

## Eventos e timers

Waypoints Script suportam eventos de `Game` e `Timer`. O CaveBot mantém o script do waypoint ativo enquanto ainda existirem callbacks ou timers registrados. Destrua todos os timers e cancele o registro usando a mesma referência do callback quando o trabalho terminar.

```lua
local function sellCycle()
    Game.talk("hi", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
    wait(500)
    Game.talk("trade", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
    wait(500)
    Npc.sell(23721, 1, true)
end

local function messageCallback(messageData)
    if not messageData or not messageData.text then
        return
    end

    if messageData.text:lower():find(
        "you have no items in your loot pouch.",
        1,
        true
    ) then
        destroyTimer("sell-loot")
        Game.unregisterEvent(Game.Events.TEXT_MESSAGE, messageCallback)
    end
end

Game.registerEvent(Game.Events.TEXT_MESSAGE, messageCallback)
Timer("sell-loot", sellCycle, 1000)
```

Se o script precisar ser abortado externamente, use `CaveBot.stopCurrentScript()`.
