---
sidebar_position: 3
---

# HotkeyManager
Auxiliar da biblioteca de teclas de atalho

```lua
HotkeyManager.parseKeyCombination(combination)
```

**Propósito e Uso**
### 1. `HotkeyManager.parseKeyCombination`
**Parâmetros**

- `combination`: Uma string que representa a combinação de teclas, onde as partes são separadas por espaços ou sinais de mais (`+`). Partes válidas incluem teclas modificadoras (`ctrl`, `alt`, `shift`, `numlock`) e qualquer tecla representada no `HotkeyManager.keyMapping`.

**Valores de Retorno**
- **Boolean:** `true` se a análise foi bem-sucedida, `false` caso contrário.
- **Modifiers:** Uma máscara de bits numérica representando os modificadores que foram analisados a partir da combinação. Esta máscara de bits corresponde às flags definidas em `Enums.FlagModifiers`.
- **Key:** Uma string representando o código da tecla da parte não modificadora da combinação. Se a combinação for inválida, este valor será `nil`.

### Uso:
```lua
-- Tenta analisar a combinação de teclas
local success, modifiers, key = HotkeyManager.parseKeyCombination("ctrl+shift+K")

-- Verifica se a análise foi bem-sucedida
if success then
    print("Máscara de bits dos modificadores:", modifiers)
    print("Código da tecla:", key)

    -- Configura um temporizador para verificar se a combinação de teclas foi pressionada
    Timer("KeyTest", function()
        -- Usa a tecla e os modificadores analisados para verificar se a combinação especificada foi pressionada
        if Client.isKeyPressed(key, modifiers) then
            print("A combinação de teclas foi pressionada.")
        end
    end, 50)
else
    print("Combinação de teclas inválida.")
end
```

### Notas
- Certifique-se de que todas as teclas e modificadores estejam corretamente escritos e sejam suportados por `HotkeyManager.keyMapping` e `Enums.FlagModifiers`.
- A função não suporta várias teclas não modificadoras em uma única combinação. Se tal cenário for encontrado, apenas a última tecla da sequência será considerada.