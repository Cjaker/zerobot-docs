---
sidebar_position: 2
---

# JSON

Serialize supported Lua values to JSON and parse JSON strings.

```lua
JSON.encode(val)
JSON.decode(str)
```

## `JSON.encode(val)`

Returns a JSON string. The encoder supports `nil`, booleans, finite numbers, strings, and tables.

```lua
local value = {
    name = "Knight",
    position = { x = 100, y = 200, z = 7 },
    supplies = { 268, 3160 }
}

local encoded = JSON.encode(value)
print(encoded)
```

Table rules:

- an empty table or a table with sequential numeric keys starting at `1` is encoded as an array;
- other tables are encoded as objects and must contain only string keys;
- sparse arrays, mixed key types, circular references, unsupported Lua types, `NaN`, and infinite numbers raise an error;
- object key order is not guaranteed because Lua table iteration order is not guaranteed.

## `JSON.decode(str)`

Parses a complete JSON string and returns its Lua representation.

```lua
local decoded = JSON.decode(
    '{"name":"Knight","position":{"x":100,"y":200,"z":7}}'
)

print(decoded.name, decoded.position.z)
```

Invalid JSON, trailing non-whitespace data, or a non-string argument raises an error. JSON `null` maps to Lua `nil`; inside arrays this means a null entry cannot be preserved as a regular Lua array value.

Use `pcall` when input is not trusted:

```lua
local ok, result = pcall(JSON.decode, input)
if not ok then
    print("Invalid JSON:", result)
end
```
