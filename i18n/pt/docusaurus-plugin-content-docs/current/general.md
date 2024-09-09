# 📚 ZeroBot - Geral
![Overview](https://zerobot.net/assets/images/1.png "Overview")

A aba Overview é uma visão básica do seu personagem, como também inclui a funcionalidade **Outfit Changer**.

![Outfit Changer](https://i.imgur.com/tIxJgWn.png "Outfit Changer")

O **Outfit Changer** permite ao jogador de Tibia personalizar a aparência do seu personagem localmente, adicionando variedade e diversão à experiência de jogo sem interferir na experiência dos outros jogadores ou no funcionamento do servidor do jogo.

# Healing
![Healing](https://zerobot.net/assets/images/2.png "Healing")

O sistema de **Healing** do ZeroBot busca manter o personagem vivo em situações desafiadoras, permitindo que o jogador se concentre em outras tarefas dentro do jogo.

### Funcionalidades Básicas

**Monitoramento de Saúde:**  
O bot monitora constantemente os pontos de vida (HP) do personagem, através da leitura contínua dos valores de HP exibidos na interface do jogo.

**Configuração de Limites de Cura:**  
O usuário pode definir diferentes limites de HP para ativar a cura, como usar uma poção de cura quando o HP estiver abaixo de 70%, ou lançar uma magia de cura quando o HP estiver abaixo de 30%.

**Tipos de Cura:**  
- **Poções:** O bot pode usar poções de cura (health potions) quando o HP atinge um certo nível.
- **Magias:** O bot pode lançar magias de cura (healing spells) automaticamente quando o HP cai abaixo de um determinado valor.
- **Itens Especiais:** O bot pode usar itens especiais com propriedades de cura quando configurado.

**Prioridades e Combinações:**  
O usuário pode definir prioridades sobre qual método de cura usar primeiro, como dar preferência a uma magia antes de uma poção.

### Recursos Avançados

**Configuração de Hotkeys:**  
O bot pode ser configurado para ativar/desativar o sistema de Healing através de uma hotkey, facilitando uma ativação rápida sem navegar pelos menus.

**Regras de Cura Condicionais:**  
O bot pode ser programado para curar baseado em condições como **Drunk**, **Rooted**, **Feared**, entre outras.

### Exemplo de Configuração
- **Exura Med Ico:** Usar quando HP < 80%
- **Exura Ico:** Usar quando HP < 50%
- **Ultimate Health Potion:** Usar quando HP < 40%
- **Great Health Potion:** Usar quando HP < 70%

# Heal Friend
![Heal Friend](https://zerobot.net/assets/images/3.png "Heal Friend")

A funcionalidade **Heal Friend** automatiza o processo de cura de outros jogadores.

- **Configuração:** O jogador define as condições que ativam a cura, como o tipo de magia e o nível de saúde.
- **Monitoramento:** O bot monitora a saúde dos amigos e cura automaticamente quando necessário.
- **Personalização:** A cura pode ser personalizada conforme as necessidades de jogo.

Essa função é útil para maximizar a eficiência em grupo, mantendo os aliados curados sem intervenção manual.

# Conditions
![Conditions](https://zerobot.net/assets/images/4.png "Conditions")

A aba **Conditions** permite configurar magias para serem renovadas automaticamente, como:
- **Utani Hur:** Mantém ativa a spell de correr.
- **Utana Vid:** Renova o Utana Vid quando a mana está acima do valor definido.
- **Utura/Utura Gran:** Renova ao fim da duração.
- **Utamo Vita:** Usa-se conforme a porcentagem de HP.
- **Exana Vita:** Usa-se para remover o Utamo Vita.

Hotkeys podem ser configuradas para ativar/desativar essas ações rapidamente.

# Hunting
## Targeting
![Targeting](https://zerobot.net/assets/images/5.png "Targeting")

A aba **Targeting** configura como o bot deve focar cada criatura. Algumas das opções incluem:
- **Priority:** Baixa, Média ou Alta.
- **Mode:** Stand, Chase, Distance ou Diagonal.
- **HP %:** Define o percentual de vida da criatura para ativar o targeting.

O sistema de targeting pode ser ativado/desativado rapidamente por uma hotkey.

## Magic Shooter
![Magic Shooter](https://zerobot.net/assets/images/55.png "Magic Shooter")

O **Magic Shooter** automatiza o lançamento de magias contra inimigos. Inclui:
- **Configuração de Spells:** Define quais magias usar e as condições.
- **Alvos e Condições:** Configura nome de monstros, porcentagens de mana/vida, e quantidade de monstros.

Esse sistema pode ser ativado/desativado com uma hotkey.

## CaveBot
![CaveBot](https://zerobot.net/assets/images/10.png "CaveBot")

A interface do **CaveBot** facilita a adição e gerenciamento de waypoints, suportando várias ações, como usar cordas ou escadas.

Possui recursos como:
- **Auto Recorder:** Grava waypoints automaticamente.
- **Debug HUD:** Monitora o funcionamento do CaveBot.

O CaveBot também pode ser ativado/desativado conforme necessário.

# Equipment
![Equipment](https://zerobot.net/assets/images/6.png "Equipment")

A função **Equipment** troca automaticamente os equipamentos com base em condições como HP, MP e status (ex. Rooted ou Paralyzed). 

O sistema pode ser ativado/desativado rapidamente com uma hotkey.

# Tools
## Helper
![Helper](https://zerobot.net/assets/images/7.png "Helper")

Funcionalidades:
- **Auto Change Coins:** Converte moedas para economizar espaço.
- **Eat Food:** Garante que o personagem esteja sempre alimentado.
- **Reconnect:** Reconecta automaticamente após desconexão.
- **Anti-AFK:** Evita que o personagem seja desconectado por inatividade.

## PvP
![PvP](https://zerobot.net/assets/images/8.png "PvP")

A aba **PVP** automatiza o uso de Small Stone Amulet, Might Ring e possui opções como Anti-Push e Hold Target.

## HUD
![HUD](https://i.imgur.com/AXCHOUz.png "HUD")

Exibe informações sobre os módulos ativos, como Healing, Magic Shooter, e aliados/inimigos na tela.

## Timer
![Timer](https://i.imgur.com/ARGeQlD.png "Timer")

O **Timer** pode ser usado para enviar mensagens ou usar itens após um tempo determinado.

# Engine
![Engine](https://i.imgur.com/KaKfF2m.png "Engine")

Permite ajustar o funcionamento do bot, como os delays e ocultar o botão do ZeroBot. Também inclui ferramentas para calcular ganhos em PT e desabilitar scripts.

# Scripting
![Scripting](https://i.imgur.com/nrvnnqi.png "Scripting")

A aba **Script** armazena scripts em .LUA, que podem ser criados ou baixados e colocados na pasta Documents\ZeroBot\Scripts.

# Settings
![Settings](https://i.imgur.com/NfhFcdk.png "Settings")

A aba **Settings** armazena perfis salvos em formato .json. É possível associar perfis a hotkeys, facilitando a troca sem navegar pelos menus.