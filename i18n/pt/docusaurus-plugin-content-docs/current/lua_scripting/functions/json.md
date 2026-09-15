---
sidebar_position: 2
---

# JSON

Serializa valores Lua suportados para JSON e interpreta strings JSON.

```lua
JSON.encode(val)
JSON.decode(str)
```

## `JSON.encode(val)`

Retorna uma string JSON. O encoder aceita `nil`, booleanos, números finitos, strings e tabelas.

```lua
local value = {
    name = "Knight",
    position = { x = 100, y = 200, z = 7 },
    supplies = { 268, 3160 }
}

local encoded = JSON.encode(value)
print(encoded)
```

Regras para tabelas:

- uma tabela vazia ou com chaves numéricas sequenciais a partir de `1` é codificada como array;
- as demais tabelas são codificadas como objetos e só podem ter chaves do tipo string;
- arrays esparsos, tipos de chave misturados, referências circulares, tipos Lua não suportados, `NaN` e números infinitos geram erro;
- a ordem das chaves de um objeto não é garantida, pois a ordem de iteração de tabelas Lua não é garantida.

## `JSON.decode(str)`

Interpreta uma string JSON completa e retorna sua representação Lua.

```lua
local decoded = JSON.decode(
    '{"name":"Knight","position":{"x":100,"y":200,"z":7}}'
)

print(decoded.name, decoded.position.z)
```

JSON inválido, dados que não sejam espaços após o valor ou um argumento que não seja string geram erro. O valor JSON `null` vira `nil` em Lua; dentro de arrays, isso significa que uma entrada nula não pode ser preservada como um valor comum do array Lua.

Use `pcall` quando a entrada não for confiável:

```lua
local ok, result = pcall(JSON.decode, input)
if not ok then
    print("JSON inválido:", result)
end
```
