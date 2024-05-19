---
sidebar_position: 6
---

# HUD
Exibir texto/itens personalizados na tela

Este documento descreve os métodos da classe `HUD`, que permite a manipulação de heads-up displays (HUDs) no jogo, incluindo posicionamento, aparência e interatividade.

```lua
HUD(x, y, value)
HUD.new(x, y, value)
HUD:getId()
HUD:getPos()
HUD:setPos(x, y)
HUD:setDraggable(draggable)
HUD:setText(text)
HUD:setColor(r, g, b)
HUD:setItemId(id)
HUD:setSize(width, height)
HUD:setCallback(callback)
HUD:destroy()
```

### 1. `HUD:new(x, y, value)`

**Propósito**: A função `HUD.new` é projetada para criar um novo objeto HUD dentro de um ambiente de jogo. Esta função gera dinamicamente um item HUD ou um elemento de texto HUD com base no tipo de valor fornecido. É um construtor versátil usado para aprimorar a interface do jogo, exibindo informações importantes ou itens diretamente na tela sem obstruir o jogo.

## Uso:
```lua
-- Criando um elemento de texto HUD
local myTextHUD = HUD.new(100, 50, "Pontuação do Jogador: 1000")
-- Criando um elemento de item HUD
local myItemHUD = HUD.new(200, 100, 12345) -- Supondo que 12345 seja um ID de item válido
```

## Explicação:
- `x`: A coordenada horizontal (eixo x) da janela do jogo onde o elemento HUD será posicionado.
- `y`: A coordenada vertical (eixo y) da janela do jogo onde o elemento HUD será posicionado.
- `value`: O conteúdo a ser exibido pelo elemento HUD. Se `value` for um número, um item HUD é criado. Se `value` for uma string, um elemento de texto HUD é criado.

## Valor de Retorno

- Retorna um novo objeto HUD, que pode ser um item ou um elemento de texto com base no valor fornecido.

### 2. `HUD:getId()`

**Propósito**: O método `HUD:getId` é projetado para recuperar o identificador único (ID) de um objeto HUD. Este ID é essencial para gerenciar elementos HUD dentro do jogo, permitindo controle preciso sobre seu comportamento, aparência e remoção.

## Uso:
```lua
local myTextHUD = HUD.new(100, 50, "Pontuação do Jogador: 1000")
local hudId = myTextHUD:getId()
print(hudId) -- Exibe o ID do elemento HUD
```

## Explicação:
- `hudElement`: Uma instância de um objeto HUD para a qual você deseja obter o ID.

## Valor de Retorno

- Retorna o ID do objeto HUD. Este ID é um identificador único usado internamente para gerenciar elementos HUD.

## 3. `HUD:getPos()`
**Propósito**: A função `HUD:getPos` é projetada para recuperar a posição atual de um elemento HUD dentro da janela do jogo. Esta função é crucial para entender onde um elemento HUD está localizado na tela, o que pode ser essencial para ajustes de layout, detecção de colisão ou para atualizar dinamicamente a posição do HUD com base em eventos do jogo.

## Uso:

```lua
-- Supondo que hudElement tenha sido criado anteriormente com HUD.new
local position = hudElement:getPos()
print("Posição do HUD - X:", position.x, "Y:", position.y)
```

## Explicação:

`hudElement`: Uma instância de um objeto HUD para a qual você deseja obter a posição.

## Valor de Retorno

Retorna uma tabela com a seguinte estrutura:

- `x`: A coordenada horizontal (eixo x) da posição atual do elemento HUD.
- `y`: A coordenada vertical (eixo y) da posição atual do elemento HUD.

## 4. `HUD:setPos(x, y)`
**Propósito**: A função `HUD:setPos` é projetada para definir ou atualizar a posição de um elemento HUD na tela do jogo. Especificando novas coordenadas `x` e `y`, os desenvolvedores podem ajustar dinamicamente onde um elemento HUD aparece, permitindo atualizações em tempo real na interface do usuário do jogo com base em eventos do jogo, ações do jogador ou outros elementos da interface.

## Uso:

```lua
-- Supondo que hudElement tenha sido criado anteriormente com HUD.new
-- Movendo o elemento HUD para uma nova posição em (200, 150)
hudElement:setPos(200, 150)
```

## Explicação:

- `x`: Um número representando a nova coordenada horizontal (eixo x) onde o elemento HUD será posicionado.
- `y`: Um número representando a nova coordenada vertical (eixo y) onde o elemento HUD será posicionado.

## 5. `HUD:setDraggable(draggable)`
**Propósito**: A função `HUD:setDraggable` permite ou desativa o estado de arrastar de um elemento HUD específico. Esta funcionalidade permite que os desenvolvedores tornem os elementos HUD interativamente móveis pelo usuário ou fixos na tela, aumentando a flexibilidade e a usabilidade da interface do jogo.

## Uso:

```lua
-- Supondo que hudElement tenha sido criado anteriormente com HUD.new
-- Tornando o elemento HUD arrastável
hudElement:setDraggable(true)

-- Posteriormente, tornando o elemento HUD não arrastável
hudElement:setDraggable(false)
```

## Explicação:

- `draggable`: Um valor booleano onde true permite que o elemento HUD seja arrastado pelo usuário, e false desativa essa capacidade.

## 6. `HUD:setText(text)`
**Propósito**: A função `HUD:setText` é projetada para atualizar o conteúdo de texto de um elemento de texto HUD. Este método permite alterações dinâmicas no texto exibido, permitindo que os desenvolvedores reflitam mudanças no estado do jogo, estatísticas do jogador, mensagens ou qualquer outra informação baseada em texto em tempo real. É importante notar que esta função opera apenas em elementos HUD que são especificamente baseados em texto; ela não afetará elementos de itens HUD.

## Uso:

```lua
-- Supondo que hudTextElement tenha sido criado anteriormente com HUD.new como um elemento de texto
hudTextElement:setText("Nova Pontuação: 1500")
```

## Explicação:
- `text`: A nova string a ser exibida pelo elemento de texto HUD.

## 7. `HUD:setColor(r, g, b)`
**Propósito**: A função `HUD:setColor` é projetada para alterar a cor do texto em um elemento de texto HUD. Aceita valores RGB (Red, Green, Blue) para definir a cor, permitindo uma ampla gama de cores. Esta função é aplicável apenas a elementos HUD que exibem texto e não afeta elementos de itens.

## Uso:
```lua
-- Supondo que hudTextElement tenha sido criado anteriormente com HUD.new como um elemento de texto
-- Definindo a cor do texto para azul para um elemento de texto
hudTextElement:setColor(0, 0, 255)
```

## Explicação:
- r: O componente vermelho da cor, um número entre 0 e 255.
- g: O componente verde da cor, um número entre 0 e 255.
- b: O componente azul da cor, um número entre 0 e 255.

## 8. `HUD:setItemId(id)`
**Propósito**: A função `HUD:setItemId` é destinada a definir ou atualizar o ID do item para um elemento HUD que representa um item. Isso permite mudanças dinâmicas no item exibido dentro de um HUD, permitindo que os desenvolvedores reflitam mudanças no inventário, objetivos ou outras mecânicas de jogo que envolvem itens. É importante notar que esta função só é eficaz para elementos HUD especificamente designados como itens.

## Uso:
```lua
-- Supondo que hudItemElement tenha sido criado anteriormente com HUD.new como um elemento de item
-- Definindo um novo ID de item para o elemento HUD
hudItemElement:setItemId(4321)
```

## Explicação:
- `id`: O novo ID de item a ser definido para o elemento HUD.

## 9. `HUD:setSize(width, height)`
**Propósito**: A função `HUD:setSize` permite redimensionar um elemento HUD especificando sua largura e altura. Esta capacidade é crucial para ajustar as dimensões dos elementos HUD para se adequar a diferentes tamanhos de conteúdo, resoluções de tela ou preferências estéticas. Aplica-se tanto a elementos de texto quanto a elementos de itens HUD, oferecendo flexibilidade no design da interface do usuário.

## Uso:
```lua
-- Supondo que hudElement tenha sido criado anteriormente com HUD.new como um elemento de item
-- Redimensionando um elemento HUD para 200 pixels de largura e 50 pixels de altura
hudElement:setSize(200, 50)
```

## Explicação:
- `width`: A nova largura para o elemento HUD, em pixels.
- `height`: A nova altura para o elemento HUD, em pixels.

## 10. `HUD:setCallback(callback)`
**Propósito**: A função `HUD:setCallback` é projetada para atribuir uma função de callback a um elemento HUD. Esta função de callback é destinada a ser acionada por eventos específicos, como interação do usuário com o elemento HUD (por exemplo, clicar). Atribuir um callback permite elementos HUD interativos e dinâmicos que podem responder às entradas do usuário, melhorando a experiência do

 usuário e o engajamento dentro do jogo.

## Uso:
```lua
-- Função de callback de exemplo
local function onHudClick()
    print("Elemento HUD clicado!")
end

-- Supondo que hudElement tenha sido criado anteriormente com HUD.new como um elemento de item
hudElement:setCallback(onHudClick)
```

## Explicação:
- `callback`: A função a ser atribuída como callback para o elemento HUD. Esta função será chamada quando o evento correspondente ocorrer.

## 11. `HUD:destroy()`
**Propósito**: A função `HUD:destroy` é responsável por remover com segurança um elemento HUD da interface do jogo. Isso envolve o cancelamento do registro do elemento do sistema HUD do jogo, decrementando a contagem global de elementos HUD e limpando quaisquer referências ao elemento HUD para garantir que ele seja coletado pelo garbage collector corretamente. Esta função é crucial para gerenciar elementos HUD dinamicamente, permitindo a remoção de elementos HUD que não são mais necessários sem causar vazamentos de memória ou desorganizar a interface do jogo.

## Uso:
```lua
--- Supondo que hudElement tenha sido criado anteriormente com HUD.new como um elemento de item
hudElement:destroy()
```