---
sidebar_position: 2
---

# 👨‍💻 Práticas no Código

## Trabalhos repetidos

Um `while` infinito mantém a execução inicial do script ocupada, mesmo quando usa `wait`. Use um `Timer` para permitir que a inicialização termine e para que a tarefa possa ser iniciada, parada ou destruída explicitamente.

```lua
-- Evite para tarefas recorrentes em segundo plano
while true do
    print("Hello World")
    wait(100)
end

-- Preferível
Timer("HelloWorld", function()
    print("Hello World")
end, 100)
```

## Enums

Use os nomes disponíveis em `Enums` em vez de constantes numéricas sem explicação:

```lua
-- Evite
Spells.groupIsInCooldown(2)

-- Preferível
Spells.groupIsInCooldown(Enums.SpellGroups.SPELLGROUP_HEALING)
```

## Depuração de tabelas

`print` não formata uma tabela automaticamente. Percorra a tabela ou codifique os dados serializáveis:

```lua
local tableVar = {"Hello", "World"}

for index, value in pairs(tableVar) do
    print(index, value)
end

print(JSON.encode(tableVar))
```

## Teclas de atalho

Analise a combinação uma vez e use o evento de atalho quando a ação deve executar uma vez por pressionamento. Use `Client.isKeyPressed` por polling apenas quando precisar detectar que a tecla continua pressionada.

```lua
local success, expectedModifiers, expectedKey =
    HotkeyManager.parseKeyCombination("ctrl+x")

if not success then
    print("Atalho inválido")
    return
end

local function onKeyPressed(key, modifiers)
    if key == expectedKey and modifiers == expectedModifiers then
        print("Hello World")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, onKeyPressed)

-- Quando o callback não for mais necessário:
Game.unregisterEvent(Game.Events.HOTKEY_SHORTCUT_PRESS, onKeyPressed)
```
