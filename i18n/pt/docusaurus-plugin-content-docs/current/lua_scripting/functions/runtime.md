---
sidebar_position: 0
---

# Runtime Lua

O ZeroBot utiliza LuaJIT e carrega automaticamente os arquivos de `Documents/ZeroBot/Scripts/core`. Esses arquivos expõem os globais documentados nesta seção; o script não deve carregar os arquivos do core novamente.

## Globais do ZeroBot

### `wait(milliseconds)`

Pausa o script atual pela quantidade solicitada de milissegundos. Um valor negativo gera um erro.

Use `wait` para sequenciar uma série curta de ações:

```lua
Game.talk("hi", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
wait(500)
Game.talk("trade", Enums.TalkTypes.TALKTYPE_PRIVATE_PN)
```

`wait` bloqueia o script atual durante a espera. Para trabalhos repetidos ou de longa duração, use um `Timer`.

### `dofile(path)`

Carrega e executa outro arquivo Lua. Caminhos relativos são resolvidos a partir de `Documents/ZeroBot/Scripts`.

Diferentemente da função padrão do Lua, a implementação do ZeroBot retorna `true` em caso de sucesso ou `nil, errorMessage` em caso de falha:

```lua
local ok, err = dofile("helpers_lib/inventory.lua")
if not ok then
    print(err)
    return
end
```

Prefira caminhos relativos em scripts que serão compartilhados com outros usuários.

## Funções padrão modificadas

- `print(...)` junta argumentos compatíveis do tipo string/número com tabulações e envia o resultado para a saída de debug do ZeroBot. Use `JSON.encode(value)` antes de imprimir uma tabela.
- `require("ffi")` sempre gera um erro no ambiente de scripting de produção.
- `os.execute(...)`, `io.popen(...)` e `os.remove(...)` estão desativadas. Chamá-las não executa a operação solicitada; apenas imprime uma mensagem de função desativada.
- O core inicializa o gerador aleatório do Lua com `os.time()` durante o carregamento.

Essas restrições fazem parte do ambiente de scripting de produção. Scripts compartilhados não devem depender de contorná-las.
