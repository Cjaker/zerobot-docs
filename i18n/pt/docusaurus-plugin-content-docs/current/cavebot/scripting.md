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