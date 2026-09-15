---
sidebar_position: 4
---

# Sound

Reproduz um arquivo `.wav` de forma assíncrona.

```lua
Sound.play(filePath, isDefaultSound)
```

## `Sound.play(filePath, isDefaultSound)`

- `filePath` é o nome ou caminho do arquivo de som.
- Quando `isDefaultSound` é `true`, `filePath` é resolvido dentro de `Documents/ZeroBot/Scripts/sounds`.
- Quando é `false` ou omitido, o caminho é passado diretamente para a API de som do Windows. Use um caminho absoluto para não depender do diretório de trabalho do processo.

A função retorna `true` quando o Windows aceita a solicitação de reprodução e `false` caso contrário. Também retorna `false` enquanto os alarmes do ZeroBot estão pausados ou quando o diretório de sons padrão não pode ser resolvido.

```lua
-- Documents/ZeroBot/Scripts/sounds/alert.wav
local played = Sound.play("alert.wav", true)
if not played then
    print("Não foi possível reproduzir alert.wav")
end
```

Para um arquivo em outro local:

```lua
local path = Engine.getScriptsDirectory() .. "\\meu_script\\warning.wav"
Sound.play(path, false)
```

Use um arquivo `.wav` existente. A reprodução é assíncrona, portanto a chamada não espera o som terminar.
