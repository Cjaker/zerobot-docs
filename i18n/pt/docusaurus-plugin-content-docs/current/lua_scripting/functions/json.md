---
sidebar_position: 2
---

# JSON
Desserializar/serializar dados usando o formato JSON

```lua
JSON.encode(input)
JSON.decode(str)
```

### 1. `JSON.encode(input)`

**Propósito**: Esta função converte uma tabela Lua (ou outras estruturas de dados Lua suportadas) em uma string JSON. Este processo é frequentemente referido como "serialização". Ele permite a fácil transmissão de estruturas de dados pela rede ou para armazenamento em um formato que pode ser facilmente lido e processado por outras linguagens de programação ou sistemas que suportam JSON.

**Uso:**
```lua
local myTable = { name = "John", age = 30 }
local jsonString = JSON.encode(myTable)
print(jsonString) -- Saída: {"name":"John","age":30}
```

**Explicação**:

- `input`: Esta é a tabela Lua ou estrutura de dados que você deseja converter para o formato JSON.
- A função retorna uma string no formato JSON que representa a estrutura de dados passada para ela.

### 2. `JSON.decode(str)`

**Propósito**: Esta função é usada para analisar uma string JSON e convertê-la em uma tabela Lua ou estrutura de dados Lua apropriada. Este processo é frequentemente referido como "desserialização". É particularmente útil ao receber dados JSON de uma rede ou sistema de arquivos e convertê-los em um formato legível pelo Lua.

**Uso:**
```lua
local jsonString = '{"name":"John","age":30}'
local myTable = JSON.decode(jsonString)
print(myTable.name, myTable.age) -- Saída: John 30
```

**Explicação**:

- `str`: Esta é a string JSON que você deseja converter para uma tabela Lua.
- A função retorna uma tabela Lua que representa os dados JSON passados para ela.