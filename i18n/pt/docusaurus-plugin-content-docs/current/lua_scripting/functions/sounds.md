---
sidebar_position: 4
---

# Sounds
Reproduzir sons padrão e personalizados

```lua
Sound.play(filePath, isDefaultSound)
```

**Propósito e Uso**
### 1. `Sound.play`
**Parâmetros**

- `filePath`: Uma string especificando o caminho para o arquivo de som .wav a ser reproduzido. Este caminho deve ser um caminho absoluto ou relativo ao diretório de scripts do jogo.
- `isDefaultSound`: Se for true, a função considerará o `filePath` como um nome de arquivo dentro do diretório Documents/ZeroBot/Scripts/sounds.

**Propósito:** A função `Sound.play` é projetada para aumentar a experiência de jogo fornecendo feedback de áudio em resposta a eventos específicos do jogo. Ela permite a reprodução de arquivos de som dentro do ambiente do jogo, utilizando arquivos `.wav` especificados pelo desenvolvedor.

### Uso:
```lua
-- Define o caminho para o arquivo de som
local soundPath = Engine.getScriptsDirectory().."\\capacitySound.wav"

-- Configura uma verificação recorrente da capacidade do jogador
Timer("CheckCap", function()
    -- Verifica se a capacidade do jogador está abaixo do limite
    if Player.getCapacity()/100 <= 400 then
        -- Reproduz o som como um alerta
        Sound.play(soundPath)
    end
end, 5000) -- O temporizador é configurado para verificar esta condição a cada 5000 milissegundos
```

### Notas
- Certifique-se de que o arquivo de som exista no `soundPath` especificado e esteja no formato `.wav` para compatibilidade.
- Ajuste o caminho para o arquivo de som e o limite de capacidade conforme necessário para atender aos requisitos específicos do jogo e à estrutura do diretório.
- Esta função faz parte de uma estrutura maior para interagir com elementos do jogo e requer integração adequada no ambiente de script do jogo para funcionar conforme esperado.