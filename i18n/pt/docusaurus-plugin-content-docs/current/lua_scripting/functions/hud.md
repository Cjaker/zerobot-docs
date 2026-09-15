---
sidebar_position: 6
---

# HUD

Cria textos, itens, ícones de magia e outfits sobre a tela do jogo.

```lua
HUD(x, y, value, newFeatures)
HUD.new(x, y, value, newFeatures)
HUD.newSpellIcon(x, y, spellId, newFeatures)
HUD.newOutfit(x, y, outfitId, newFeatures)
HUD:getId()
HUD:getPos()
HUD:setPos(x, y)
HUD:getMargins()
HUD:hide()
HUD:show()
HUD:setDraggable(draggable)
HUD:setText(text)
HUD:setHorizontalAlignment(alignment)
HUD:setVerticalAlignment(alignment)
HUD:setColor(r, g, b)
HUD:setFontSize(fontSize)
HUD:setItemId(id)
HUD:setSpellIconId(id)
HUD:setOutfitId(id)
HUD:setOutfitAddons(addons)
HUD:setOutfitColors(head, body, legs, feet)
HUD:setOutfitDirection(direction)
HUD:setOutfitMoving(moving)
HUD:setSize(width, height)
HUD:setScale(value)
HUD:setOpacity(value)
HUD:setZIndex(zIndex)
HUD:setPhantom(phantom)
HUD:setCallback(callback)
HUD:destroy()
```

## Construtores

`HUD(...)` é um alias de `HUD.new(...)`.

- Quando `value` é um número, `HUD.new` cria um HUD de item usando esse item ID.
- Para qualquer outro valor, cria um HUD de texto e encaminha o valor para `setText`.
- `HUD.newSpellIcon` cria um HUD de ícone de magia.
- `HUD.newOutfit` cria um HUD de outfit.

Passe `newFeatures = true` ao usar alinhamento, margens, ícones de magia, outfits, escala, opacidade, z-index ou o modo phantom. Em especial, os setters de ícone e outfit exigem essa opção; portanto, esses construtores normalmente devem receber `true`.

```lua
local textHud = HUD(30, 30, "Pronto", true)
local itemHud = HUD(30, 60, 3031, true)

local spellId = Spells.getIdByWords("exura")
local spellHud = HUD.newSpellIcon(30, 100, spellId, true)
local outfitHud = HUD.newOutfit(80, 100, 128, true)
```

Cada construtor retorna um objeto HUD. Mantenha esse objeto enquanto o elemento estiver em uso e chame `destroy()` quando ele não for mais necessário.

## Métodos comuns

| Método | Comportamento |
| --- | --- |
| `getId()` | Retorna o ID interno do HUD. Os IDs podem começar em `0`. |
| `getPos()` | Retorna a posição desenhada na tela como `{x, y}`. Antes do primeiro desenho, pode retornar `{x = 0, y = 0}`. Não passe esse valor diretamente para `setPos` quando houver alinhamentos ativos. |
| `setPos(x, y)` | Define a posição. Com alinhamento ativo, os valores viram margens. Também limpa os deslocamentos criados pelo arraste. |
| `getMargins()` | Retorna as margens `{x, y}`. Exige `newFeatures = true`. |
| `hide()` / `show()` | Altera a visibilidade sem destruir o HUD. |
| `setDraggable(draggable)` | Ativa ou desativa o arraste pelo mouse. Escute `Game.Events.HUD_DRAG` se precisar da posição onde ele foi solto. |
| `setSize(width, height)` | Define as dimensões do elemento. As dimensões de itens continuam limitadas pelo sprite; use `setScale` para escalar além disso. |
| `setOpacity(value)` | Define a opacidade: `1.0` é opaco e `0.0`, transparente. Exige `newFeatures = true`. |
| `setZIndex(zIndex)` | Controla a ordem de desenho; valores maiores aparecem sobre os menores. Exige `newFeatures = true`. |
| `setPhantom(phantom)` | Quando `true`, o input do mouse atravessa o HUD e chega aos elementos abaixo. Exige `newFeatures = true`. |
| `destroy()` | Remove o HUD e marca o objeto como destruído. Chamadas repetidas são ignoradas. |

## HUD de texto

Estes métodos são destinados a um HUD criado com `value` não numérico:

- `setText(text)` altera o texto exibido.
- `setColor(r, g, b)` define sua cor RGB.
- `setFontSize(fontSize)` altera o tamanho da fonte; o padrão é `8.25`. Exige `newFeatures = true`.
- `setHorizontalAlignment(alignment)` aceita `Enums.HorizontalAlign` e exige `newFeatures = true`. Quando o alinhamento não é `None`, a posição X é usada como margem.
- `setVerticalAlignment(alignment)` aceita `Enums.VerticalAlign` e exige `newFeatures = true`. Quando o alinhamento não é `None`, a posição Y é usada como margem.

```lua
local status = HUD(12, 12, "Aguardando", true)
status:setColor(0, 220, 120)
status:setFontSize(12)
status:setHorizontalAlignment(Enums.HorizontalAlign.Right)
status:setVerticalAlignment(Enums.VerticalAlign.Top)
status:setPos(20, 20) -- margens a partir das bordas selecionadas
```

## HUD de item e ícone de magia

- `setItemId(id)` altera o item ID de um HUD de item.
- `setSpellIconId(id)` altera um HUD de ícone de magia e exige `newFeatures = true`.
- `setScale(value)` escala um HUD de item, ícone de magia ou outfit. `1.0` é o tamanho padrão e `newFeatures = true` é obrigatório.

Não misture métodos exclusivos de texto com HUDs de item, nem métodos exclusivos de item com outros tipos de HUD.

## HUD de outfit

Todos os setters específicos de outfit exigem um HUD de outfit criado com `newFeatures = true`.

- `setOutfitId(id)` seleciona um outfit ID existente no cliente atual.
- `setOutfitAddons(addons)` aceita `0`, `1`, `2` ou `3`.
- `setOutfitColors(head, body, legs, feet)` aceita índices de cor do cliente de `0` a `132`.
- `setOutfitDirection(direction)` aceita uma direção cardinal de `Enums.Directions`.
- `setOutfitMoving(moving)` ativa ou desativa a animação de caminhada.

```lua
local outfit = HUD.newOutfit(100, 100, 128, true)
outfit:setOutfitAddons(3)
outfit:setOutfitColors(94, 58, 79, 32)
outfit:setOutfitDirection(Enums.Directions.EAST)
outfit:setOutfitMoving(true)
outfit:setScale(1.5)
```

## Interação por clique e arraste

`setCallback(callback)` instala nesse objeto HUD um callback sem argumentos. O core o executa quando o elemento é clicado:

```lua
local button = HUD(100, 40, "Clique aqui", true)

button:setCallback(function()
    print("HUD clicado")
end)
```

Para tratar cliques de forma centralizada, registre `Game.Events.HUD_CLICK`; seu callback recebe o ID do HUD. `Game.Events.HUD_DRAG` recebe `id, x, y` quando um HUD arrastável é solto.

```lua
local movable = HUD(100, 80, 3031, true)
movable:setDraggable(true)

local function onDrag(id, x, y)
    if id == movable:getId() then
        print("nova posição desenhada", x, y)
    end
end

Game.registerEvent(Game.Events.HUD_DRAG, onDrag)
```

Durante a limpeza do script, destrua os HUDs e remova os eventos que ele registrou.
