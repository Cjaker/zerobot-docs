---
sidebar_position: 6
---

# HUD
Exibir texto/itens personalizados na tela

Este documento descreve os métodos da classe `HUD`, que permite a manipulação de heads-up displays (HUDs) no jogo, incluindo posicionamento, aparência e interatividade.

```lua
HUD(x, y, value, newFeatures)
HUD.new(x, y, value, newFeatures)
HUD.newSpellIcon(x, y, spellId, newFeatures)
HUD.newOutfit(x, y, outfitId, newFeatures)
HUD:getId()
HUD:setSpellIconId(id)
HUD:setOutfitId(id)
HUD:setOutfitAddons(addons)
HUD:setOutfitColors(head, body, legs, feet)
HUD:setOutfitDirection(direction)
HUD:setOutfitMoving(moving)
HUD:getPos()
HUD:setPos(x, y)
HUD:getMargins()
HUD:setDraggable(draggable)
HUD:setText(text)
HUD:setHorizontalAlignment(alignment)
HUD:setVerticalAlignment(alignment)
HUD:setColor(r, g, b)
HUD:setFontSize(fontSize)
HUD:setItemId(id)
HUD:setSize(width, height)
HUD:setScale(value)
HUD:setOpacity(value)
HUD:setCallback(callback)
HUD:destroy()
```

#### **HUD:new(x, y, value)****

**Propósito**: A função `HUD.new` é projetada para criar um novo objeto HUD dentro de um ambiente de jogo. Esta função gera dinamicamente um item HUD ou um elemento de texto HUD com base no tipo de valor fornecido. É um construtor versátil usado para aprimorar a interface do jogo, exibindo informações importantes ou itens diretamente na tela sem obstruir o jogo.

## Uso:
```lua
-- Criando um elemento de texto HUD
local myTextHUD = HUD.new(100, 50, "Pontuação do Jogador: 1000", false)
-- Criando um elemento de item HUD
local myItemHUD = HUD.new(200, 100, 12345, false) -- Supondo que 12345 seja um ID de item válido
```

## Explicação:
- `x`: A coordenada horizontal (eixo x) da janela do jogo onde o elemento HUD será posicionado.
- `y`: A coordenada vertical (eixo y) da janela do jogo onde o elemento HUD será posicionado.
- `value`: O conteúdo a ser exibido pelo elemento HUD. Se `value` for um número, um item HUD é criado. Se `value` for uma string, um elemento de texto HUD é criado.
- `newFeatures`: Se o elemento HUD criado deve usar novos recursos e suas funções.

## Valor de Retorno

- Retorna um novo objeto HUD, que pode ser um item ou um elemento de texto com base no valor fornecido.

#### **HUD:getId()****

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

#### **HUD:setOutfitId(id)**  
**Propósito**: A função `HUD:setOutfitId` atualiza o ID do outfit exibido em um elemento HUD de outfit. Isso permite a personalização dinâmica da aparência dos personagens na interface do jogo.

**Uso:**
```lua
-- Supondo que outfitHUD tenha sido criado anteriormente com HUD.newOutfit
outfitHUD:setOutfitId(131)
```
**Explicação:**
- `id`: O novo ID do outfit a ser exibido no elemento HUD.

#### **HUD:setOutfitAddons(addons)**
**Propósito**: A função `HUD:setOutfitAddons` aplica configurações de addons a um elemento HUD de outfit.

**Uso:**
```lua
-- Supondo que outfitHUD tenha sido criado anteriormente com HUD.newOutfit
outfitHUD:setOutfitAddons(3) -- Exemplo: 3 pode representar ambos os addons ativados
```
**Explicação:**
- `addons`: O valor do addon representando quais addons ativar.

#### **HUD:setOutfitColors(head, body, legs, feet)**  
**Propósito**: A função `HUD:setOutfitColors` atualiza dinamicamente as cores do outfit.

**Uso:**
```lua
-- Supondo que outfitHUD tenha sido criado anteriormente com HUD.newOutfit
outfitHUD:setOutfitColors(94, 58, 79, 32)
```
**Explicação:**
- `head`: O ID da cor para a cabeça.
- `body`: O ID da cor para o corpo.
- `legs`: O ID da cor para as pernas.
- `feet`: O ID da cor para os pés.

#### **HUD:setOutfitDirection(direction)**  
**Propósito**: A função `HUD:setOutfitDirection` define a direção para a qual o outfit está voltado em um elemento HUD de outfit.

**Uso:**
```lua
-- Supondo que outfitHUD tenha sido criado anteriormente com HUD.newOutfit
outfitHUD:setOutfitDirection(Enums.Direction.East)
```
**Explicação:**
- `direction`: A nova direção para o outfit, baseada em `Enums.Direction`.

#### **HUD:setOutfitMoving(moving)**  
**Propósito**: A função `HUD:setOutfitMoving` ativa ou desativa a animação de movimento para o elemento HUD de outfit, fazendo parecer que o personagem está se movendo.

**Uso:**
```lua
-- Supondo que outfitHUD tenha sido criado anteriormente com HUD.newOutfit
outfitHUD:setOutfitMoving(true) -- Ativa a animação de movimento
```
**Explicação:**
- `moving`: Valor booleano (`true` para ativar a animação de movimento, `false` para desativar).

#### **HUD:setScale(value)**
**Propósito**: A função `HUD:setScale` permite redimensionar um elemento HUD de item, outfit ou ícone de spell, especificando um valor de escala multiplicador. Essa funcionalidade é essencial para ajustar as dimensões dos elementos HUD de acordo com diferentes tamanhos de conteúdo, resoluções de tela ou preferências estéticas.

O valor é um número float, onde 1.0 representa o tamanho padrão.
Pode ser usado apenas se `newFeatures` estiver ativado.

## Uso:
```lua
-- Supondo que hudElement tenha sido criado anteriormente com HUD.new como um elemento de item
-- Aumentando o tamanho do elemento HUD de item para o dobro do seu tamanho original
hudElement:setScale(2)
```

## Explicação:
- `scale`: O novo valor de escala para o elemento HUD de item.

#### **HUD:setOpacity(value)**
**Propósito**: A função `HUD:setOpacity` define o nível de transparência de um elemento HUD. O valor deve estar entre 0 (completamente transparente) e 1 (totalmente visível). Essa função permite ajustes visuais dinâmicos, aumentando a flexibilidade da interface do usuário.

**Uso:**
```lua
-- Supondo que hudElement tenha sido criado anteriormente com HUD.new
-- Definindo a opacidade para 50%
hudElement:setOpacity(0.5)
```
**Explicação:**
- `value`: Um número float entre 0 e 1 que determina o nível de opacidade.

#### **HUD:getPos()****
**Propósito**: A função `HUD:getPos` é projetada para recuperar a posição atual de um elemento HUD dentro da janela do jogo. Esta função é crucial para entender onde um elemento HUD está localizado na tela, o que pode ser essencial para ajustes de layout, detecção de colisão ou para atualizar dinamicamente a posição do HUD com base em eventos do jogo.
Observação: esta função retornará a posição de desenho X, Y na tela e não deve ser usada diretamente para a função setPos. Além disso, essa função pode retornar x:0, y:0 até o primeiro desenho, pois ela retorna a posição de desenho na tela do jogo.

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

#### **HUD:setPos(x, y)****
**Propósito**: A função `HUD:setPos` é projetada para definir ou atualizar a posição de um elemento HUD na tela do jogo. Especificando novas coordenadas `x` e `y`, os desenvolvedores podem ajustar dinamicamente onde um elemento HUD aparece, permitindo atualizações em tempo real na interface do usuário do jogo com base em eventos do jogo, ações do jogador ou outros elementos da interface.
Observação: se você estiver usando alinhamentos, esta função será utilizada como os deslocamentos de margem. Além disso, quando você define a posição de um elemento HUD, isso irá redefinir os deslocamentos de arrasto do mouse para 0,0.

## Uso:

```lua
-- Supondo que hudElement tenha sido criado anteriormente com HUD.new
-- Movendo o elemento HUD para uma nova posição em (200, 150)
hudElement:setPos(200, 150)
```

## Explicação:

- `x`: Um número representando a nova coordenada horizontal (eixo x) onde o elemento HUD será posicionado.
- `y`: Um número representando a nova coordenada vertical (eixo y) onde o elemento HUD será posicionado.

#### **HUD:getMargins****
**Propósito**: A função `HUD:getMargins` é projetada para recuperar os deslocamentos atuais das margens de um elemento HUD dentro da janela do jogo. Esta função é crucial para entender onde um elemento HUD está localizado na tela, o que pode ser essencial para ajustes de layout, detecção de colisão ou para atualizar dinamicamente a posição do HUD com base em eventos do jogo.
Observação: se você estiver usando alinhamentos, esta função será utilizada como os deslocamentos de margem. Também lembre-se de que as margens são definidas pela função setPos se você estiver usando alinhamentos.

## Uso:

```lua
-- Assumindo que hudElement foi previamente criado com HUD.new
local margins = hudElement:getMargins()
print("Margens do HUD - X:", margins.x, "Y:", margins.y)
```

## Explicação:

`hudElement`: Uma instância de um objeto HUD para o qual você deseja obter a posição.

## Valor de Retorno

Retorna uma tabela com a seguinte estrutura:

- `x`: A margem horizontal (eixo x) do elemento HUD.
- `y`: A margem vertical (eixo y) do elemento HUD.

#### **HUD:setDraggable(draggable)****
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

#### **HUD:setText(text)****
**Propósito**: A função `HUD:setText` é projetada para atualizar o conteúdo de texto de um elemento de texto HUD. Este método permite alterações dinâmicas no texto exibido, permitindo que os desenvolvedores reflitam mudanças no estado do jogo, estatísticas do jogador, mensagens ou qualquer outra informação baseada em texto em tempo real. É importante notar que esta função opera apenas em elementos HUD que são especificamente baseados em texto; ela não afetará elementos de itens HUD.

## Uso:

```lua
-- Supondo que hudTextElement tenha sido criado anteriormente com HUD.new como um elemento de texto
hudTextElement:setText("Nova Pontuação: 1500")
```

## Explicação:
- `text`: A nova string a ser exibida pelo elemento de texto HUD.

#### **HUD:setHorizontalAlignment(alignment)****
**Propósito**: A função `HUD:setHorizontalAlignment` é projetada para alterar o alinhamento horizontal atual com base nas bordas da tela da janela do jogo. Ela aceita qualquer alinhamento baseado em Enums.HorizontalAlign. Pode ser usada apenas se o recurso `newFeatures` estiver habilitado na função `HUD.new`.
Nota: o deslocamento da posição x será usado como margens se você definir o alinhamento diferente de None.

## Uso:

```lua
-- Supondo que hudTextElement tenha sido previamente criado com HUD.new como um elemento de texto
hudTextElement:setHorizontalAlignment(Enums.HorizontalAlign.Center)
```

## Explicação:
- `alignment`: O tipo de alinhamento horizontal, baseado em Enums.HorizontalAlign.

#### **HUD:setVerticalAlignment(alignment)****
**Propósito**: A função `HUD:setVerticalAlignment` é projetada para alterar o alinhamento vertical atual com base nas bordas da tela da janela do jogo. Ela aceita qualquer alinhamento baseado em Enums.VerticalAlign. Pode ser usada apenas se o recurso `newFeatures` estiver habilitado na função `HUD.new`.
Nota: o deslocamento da posição y será usado como margens se você definir o alinhamento diferente de None.

## Uso:

```lua
-- Supondo que hudTextElement tenha sido previamente criado com HUD.new como um elemento de texto
hudTextElement:setVerticalAlignment(Enums.VerticalAlign.Center)
```

## Explicação:
- `alignment`: O tipo de alinhamento vertical, baseado em Enums.VerticalAlign.

#### **HUD:setColor(r, g, b)****
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

#### **HUD:setFontSize(fontSize)****
**Propósito**: A função `HUD:setFontSize` é projetada para alterar o tamanho da fonte de um texto no HUD. O valor padrão é 8,25, e só pode ser usada se o recurso `newFeatures` estiver habilitado na função `HUD.new`.

## Uso:
```lua
-- Supondo que hudTextElement tenha sido previamente criado com HUD.new como um elemento de texto
-- Aumentando o tamanho da fonte para 12
hudTextElement:setFontSize(12)
```

## Explicação:
- fontSize: O valor que indica o novo tamanho de fonte a ser configurado.

#### **HUD:setItemId(id)****
**Propósito**: A função `HUD:setItemId` é destinada a definir ou atualizar o ID do item para um elemento HUD que representa um item. Isso permite mudanças dinâmicas no item exibido dentro de um HUD, permitindo que os desenvolvedores reflitam mudanças no inventário, objetivos ou outras mecânicas de jogo que envolvem itens. É importante notar que esta função só é eficaz para elementos HUD especificamente designados como itens.

## Uso:
```lua
-- Supondo que hudItemElement tenha sido criado anteriormente com HUD.new como um elemento de item
-- Definindo um novo ID de item para o elemento HUD
hudItemElement:setItemId(4321)
```

## Explicação:
- `id`: O novo ID de item a ser definido para o elemento HUD.

#### **HUD:setSize(width, height)****
**Propósito**: A função `HUD:setSize` permite o redimensionamento de um elemento do HUD especificando sua largura e altura. Essa capacidade é crucial para ajustar as dimensões dos elementos do HUD para acomodar diferentes tamanhos de conteúdo, resoluções de tela ou preferências estéticas. Aplica-se tanto a elementos de texto quanto de item, oferecendo flexibilidade no design da interface do usuário.
O limite de tamanho para os itens é baseado em seu sprite.
Exemplo: o tamanho de uma moeda de ouro é 32x32, então você não pode exceder esses valores.
Se você precisar escalar mais o tamanho, pode usar a função `HUD:setScale(value)`.

## Uso:
```lua
-- Supondo que hudElement tenha sido previamente criado com HUD.new como um elemento de item
-- Redimensionando um elemento do HUD para 200 pixels de largura e 50 pixels de altura
hudElement:setSize(200, 50)
```

## Explicação:
- `width`: A nova largura para o elemento do HUD, em pixels.
- `height`: A nova altura para o elemento do HUD, em pixels.

#### **HUD:setCallback(callback)****
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

#### **HUD:destroy()****
**Propósito**: A função `HUD:destroy` é responsável por remover com segurança um elemento HUD da interface do jogo. Isso envolve o cancelamento do registro do elemento do sistema HUD do jogo, decrementando a contagem global de elementos HUD e limpando quaisquer referências ao elemento HUD para garantir que ele seja coletado pelo garbage collector corretamente. Esta função é crucial para gerenciar elementos HUD dinamicamente, permitindo a remoção de elementos HUD que não são mais necessários sem causar vazamentos de memória ou desorganizar a interface do jogo.

## Uso:
```lua
--- Supondo que hudElement tenha sido criado anteriormente com HUD.new como um elemento de item
hudElement:destroy()
```