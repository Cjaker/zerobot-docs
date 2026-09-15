---
sidebar_position: 3
---

# HotkeyManager

Converte um atalho legível para os valores numéricos usados pelas APIs de teclado do ZeroBot.

```lua
HotkeyManager.parseKeyCombination(combination)
```

A combinação não diferencia maiúsculas de minúsculas. Separe as partes com espaços, sinais de mais ou ambos. Os modificadores suportados são `ctrl`, `alt`, `shift` e `numlock`; a tecla comum precisa existir em `HotkeyManager.keyMapping`.

Valores retornados:

1. `true` em caso de sucesso ou `false` para uma tecla desconhecida.
2. Uma máscara numérica de modificadores compatível com `Enums.FlagModifiers`, ou `nil` em caso de falha.
3. O código numérico da tecla, ou `nil` em caso de falha.

```lua
local valid, expectedModifier, expectedKey =
    HotkeyManager.parseKeyCombination("Ctrl+Shift+K")

if not valid then
    print("Atalho inválido")
    return
end

local function onShortcut(key, modifier)
    if key == expectedKey and modifier == expectedModifier then
        print("Ctrl+Shift+K pressionado")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, onShortcut)
```

Para consultar o estado da tecla em vez de reagir ao pressionamento, passe os valores retornados para `Client.isKeyPressed(key, flags)`.

Forneça apenas uma tecla que não seja modificadora. Se houver mais de uma, o parser mantém a última; a implementação aceita isso, mas esse formato não deve ser usado como atalho.
