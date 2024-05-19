---
sidebar_position: 2
---

# 👨‍💻 Práticas no Código

```lua
-- LOOPING - WHILE TRUE
-- O exemplo de má prática usa um loop while true com uma função wait, o que pode levar a um alto uso da CPU e potencialmente travar o aplicativo devido à execução contínua sem gerenciamento eficiente de recursos. Por outro lado, o exemplo de boa prática usa um Timer, proporcionando uma maneira mais eficiente em termos de recursos para executar a mesma função em intervalos regulares. Essa abordagem permite um melhor controle sobre a execução e evita a carga contínua nos recursos do sistema, tornando-a uma solução mais otimizada e estável.

-- 🚫 Má prática
while true do
    print("Hello World")
    wait(100)
end

-- ✅ Boa prática
Timer("HelloWorld", function()
    print("Hello World")
end, 100)

--------------------------
--------------------------
--------------------------
-- ENUMS
-- Na pasta core/enums.lua, temos vários enums que podem ser usados para facilitar nosso desenvolvimento.

-- 🚫 Má prática
Spells.groupIsInCooldown(2)

-- ✅ Boa prática
Spells.groupIsInCooldown(Enums.SpellGroups.SPELLGROUP_HEALING)
--------------------------
--------------------------
--------------------------
-- Imprimir tabelas para depuração

-- Método 1
local tableVar = {"Hello", "World"}
for index, value in pairs(tableVar) do
    print(index, value)
end

-- Método 2
local tableVar = {"Hello", "World"}
print(JSON.encode(tableVar))
--------------------------
--------------------------
--------------------------
-- Manipulação de teclas de atalho
-- A melhor prática nos exemplos de funções fornecidos reside na eficiência e organização. A segunda abordagem usa um modelo baseado em eventos, executando apenas quando uma tecla é pressionada, economizando assim recursos e garantindo uma resposta mais rápida. Ela evita cálculos redundantes ao analisar a combinação de teclas uma vez, fora de qualquer função. Isso torna o código mais limpo, eficiente e fácil de manter em comparação com a abordagem repetitiva e intensiva em recursos do primeiro exemplo, que usa uma verificação contínua com timer.

-- 🚫 Má prática
local keySwitch = "x"
Timer("keys", function()
    local retStatus, retModifiers, retKey = HotkeyManager.parseKeyCombination(keySwitch)
    if retStatus then
        if Client.isKeyPressed(retKey, retModifiers) then
            print("Hello World")
        end
    end
end, 50)

-- ✅ Boa prática
local keySwitch = "x"
local retStatus, retModifiers, retKey  = HotkeyManager.parseKeyCombination(keySwitch)

if not retStatus then
    print("Invalid hotkey")
    return
end

function OnKeyPressed(key, modifier)
    if retKey == key and retModifiers == modifier then
        print("Hello World")
    end
end

Game.registerEvent(Game.Events.HOTKEY_SHORTCUT_PRESS,OnKeyPressed)
```