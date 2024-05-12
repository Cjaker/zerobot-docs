---
sidebar_position: 2
---

# JSON
Deserialize/serialize data using JSON format

```lua
JSON.encode(input)
JSON.decode(str)
```

### 1. `JSON.encode(input)`

**Purpose**: This function converts a Lua table (or other supported Lua data structures) into a JSON string. This process is often referred to as "serialization". It allows for the easy transmission of data structures over a network or for storage in a format that can be easily read and processed by other programming languages or systems that support JSON.

**Usage:**
```lua
local myTable = { name = "John", age = 30 }
local jsonString = JSON.encode(myTable)
print(jsonString) -- Output: {"name":"John","age":30}
```

**Explanation**:

- `input`: This is the Lua table or data structure that you want to convert into JSON format.
- The function returns a string in JSON format that represents the data structure passed to it.

### 2. `JSON.decode(str)`

**Purpose**: This function is used to parse a JSON string and convert it into a Lua table or appropriate Lua data structure. This process is often referred to as "deserialization". It is particularly useful when receiving JSON data from a network or file system and converting it into a Lua-readable format.

**Usage:**
```lua
local jsonString = '{"name":"John","age":30}'
local myTable = JSON.decode(jsonString)
print(myTable.name, myTable.age) -- Output: John 30
```