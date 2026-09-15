---
sidebar_position: 7
---

# Custom Modal Window

Cria uma pequena janela modal do ZeroBot com botões definidos pelo script.

```lua
CustomModalWindow(caption, description)
CustomModalWindow.new(caption, description)
CustomModalWindow:getId()
CustomModalWindow:setCaption(caption)
CustomModalWindow:setDescription(description)
CustomModalWindow:setCallback(callback)
CustomModalWindow:addButton(buttonText)
CustomModalWindow:destroy()
```

`CustomModalWindow(...)` é um alias de `CustomModalWindow.new(...)`. Os dois argumentos são opcionais. Durante a construção, as quebras de linha de `description` são removidas e o resultado é limitado a 54 caracteres. Uma chamada posterior de `setDescription` encaminha o valor diretamente e não aplica essa normalização do construtor.

```lua
local modal = CustomModalWindow(
    "Confirmação",
    "Escolha o que o script deve fazer."
)

local confirmButton = modal:addButton("Confirmar")
local cancelButton = modal:addButton("Cancelar")

modal:setCallback(function(buttonId)
    if buttonId == confirmButton then
        print("confirmado")
    elseif buttonId == cancelButton then
        print("cancelado")
    end

    modal:destroy()
end)
```

## Métodos

- `getId()` retorna o ID da janela. Os IDs podem começar em `0`.
- `setCaption(caption)` altera o título.
- `setDescription(description)` altera a descrição.
- `addButton(buttonText)` adiciona um botão e retorna seu ID/índice. Cada janela aceita no máximo 20 botões.
- `setCallback(callback)` instala um callback que recebe o ID/índice do botão clicado.
- `destroy()` remove a janela e seu registro interno.

Chame `destroy()` exatamente uma vez quando a janela não for mais necessária. O wrapper atual não protege contra destruições repetidas.

Também é possível tratar `Game.Events.CUSTOM_MODAL_WINDOW_BUTTON_CLICK` diretamente. Esse evento recebe `modalId, buttonIndex`; `setCallback` costuma ser mais simples quando o script já mantém o objeto da janela.
