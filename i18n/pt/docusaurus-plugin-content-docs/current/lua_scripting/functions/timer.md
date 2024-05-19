---
sidebar_position: 5
---

# Timer
Criar e executar funções de ciclo de loop

```lua
Timer(name, timerFunction, timeDelay, autoStart = true)
Timer.new(name, timerFunction, timeDelay, autoStart = true)
Timer:name()
Timer:start()
Timer:stop()
```

### Código

```lua
--- Destroi um temporizador pelo nome.
-- @param name (string) - O nome do temporizador a ser destruído.
function destroyTimer(name)

--- Construtor para a classe Timer.
-- @param name (string) - O nome do temporizador.
-- @param timerFunction (function) - A função a ser executada quando o temporizador for acionado.
-- @param timeDelay (number) - O atraso entre os acionamentos do temporizador, em milissegundos.
-- @param autoStart (boolean) - Se o temporizador deve iniciar automaticamente.
-- @return Um novo objeto Timer.
function Timer.new(name, timerFunction, timeDelay, autoStart)

--- Executa a função do temporizador. Não é necessário usá-lo diretamente, crie o temporizador usando o novo construtor
-- @return O resultado da função do temporizador.
function Timer:run()

--- Obtém o nome do temporizador.
-- @return O nome do temporizador.
function Timer:name()

--- Inicia o temporizador.
function Timer:start()

--- Atualiza o tempo de acionamento do temporizador. Não é necessário usá-lo diretamente.
-- @param delayTime (number) - O novo tempo de atraso para o temporizador, em milissegundos.
function Timer:update(delayTime)

--- Para o temporizador.
function Timer:stop()

--- Verifica se o temporizador está ativo.
-- @return True se o temporizador estiver ativo, caso contrário, false.
function Timer:isActive()
```