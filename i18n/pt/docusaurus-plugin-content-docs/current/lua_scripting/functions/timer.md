---
sidebar_position: 5
---

# Timer

Executa uma função repetidamente sem bloquear o script com um loop `while`.

```lua
Timer(name, timerFunction, timeDelay, autoStart)
destroyTimer(name)
Timer.new(name, timerFunction, timeDelay, autoStart)
Timer:run()
Timer:name()
Timer:start()
Timer:update(delayTime)
Timer:stop()
Timer:isActive()
```

`Timer(...)` é um alias de `Timer.new(...)`.

## Criando um timer

```lua
local statusTimer = Timer("status", function()
    print("HP", Player.getHealthPercent())
end, 1000)
```

Parâmetros:

- `name`: nome único usado para identificar o timer.
- `timerFunction`: callback executado em cada disparo. Recomenda-se uma função; o nome em string de uma função global também é resolvido quando o timer roda.
- `timeDelay`: intervalo em milissegundos. O padrão é `100` quando omitido.
- `autoStart`: inicia o timer imediatamente, a menos que seja explicitamente `false`.

Criar outro timer com o mesmo nome primeiro destrói o anterior. Mantenha o objeto retornado; no core atual, chamar `Timer.new(name)` sem callback não é uma forma confiável de recuperar um timer existente.

## Ciclo de vida

```lua
local timer = Timer("manual", function()
    print("tick")
end, 500, false)

print(timer:name())       -- manual
print(timer:isActive())   -- false

timer:start()
timer:stop()
timer:run()               -- executa o callback imediatamente

destroyTimer("manual")    -- para e remove o timer pelo nome
```

- `start()` ativa o timer e reinicia seu estado de disparo.
- `stop()` o desativa sem removê-lo.
- `isActive()` retorna o estado de atividade atual.
- `name()` retorna seu nome.
- `run()` chama o callback imediatamente e retorna o resultado dele.
- `destroyTimer(name)` para e remove o primeiro timer com esse nome.

`update(delayTime)` é usado internamente depois de um disparo. Se chamado manualmente, adia o próximo disparo possível em relação ao relógio atual; ele **não** substitui o intervalo recorrente configurado.

Prefira nomes únicos e específicos do script para não substituir um timer criado por outro script.
