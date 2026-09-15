# Visão geral do ZeroBot

O ZeroBot é organizado em módulos que podem ser configurados e ativados separadamente. Os controles e condições disponíveis podem variar conforme a versão do cliente e o OTServer escolhido; valide um perfil novo no servidor de destino antes de usá-lo sem supervisão.

## Overview

![Overview](/img/overview/overview.png "Overview")

A aba **Overview** mostra informações do personagem e inclui o **Outfit Changer**. As alterações de outfit feitas ali são locais ao cliente; elas não mudam o outfit no servidor visto pelos outros jogadores.

## Healing

![Healing](/img/overview/healing.png "Healing")

O **Healing** avalia o estado do personagem e executa as magias ou itens configurados quando suas condições são satisfeitas. Uma regra pode incluir faixas de HP/MP e estados como Drunk, Rooted, Feared ou Paralyzed.

A ordem e a sobreposição das faixas importam: quando várias regras podem ser verdadeiras ao mesmo tempo, configure as prioridades de forma intencional e teste o resultado. O servidor também pode impor cooldowns e limites de ações independentemente do ZeroBot.

Exemplos de faixas:

- lançar uma magia de cura abaixo de uma porcentagem escolhida de HP;
- usar uma poção na faixa crítica e outra em uma faixa mais alta;
- restringir uma regra por MP ou condição do personagem.

## Heal Friend

![Heal Friend](/img/overview/heal-friend.png "Heal Friend")

O **Heal Friend** aplica as ações de cura configuradas a jogadores elegíveis, como membros da party ou criaturas visíveis na tela, conforme a origem e as condições de vida selecionadas. As informações disponíveis dependem do que o cliente atual expõe.

## Conditions

![Conditions](/img/overview/conditions.png "Conditions")

O **Conditions** automatiza a manutenção ou remoção de magias conforme os requisitos configurados de estado, HP e MP. Alguns exemplos são magias de haste, invisibilidade, regeneração e magic shield. Use nomes e comportamentos de magia suportados pelo servidor de destino.

## Hunting

### Targeting

![Targeting](/img/overview/targeting.png "Targeting")

O **Targeting** define como o bot seleciona e se movimenta ao redor das criaturas configuradas. As regras podem incluir nomes, prioridade, modo de combate e faixa de HP. O resultado da rota e da movimentação depende dos dados de mapa e do estado das criaturas recebidos pelo cliente.

### Magic Shooter

![Magic Shooter](/img/overview/magic-shooter.png "Magic Shooter")

O **Magic Shooter** executa as magias de ataque ou runas configuradas quando as condições de alvo, recursos, quantidade e demais filtros são satisfeitas. Cooldowns do jogo e restrições do servidor continuam valendo.

### CaveBot

![CaveBot](/img/overview/cavebot.png "CaveBot")

O **CaveBot** executa uma rota de waypoints com ações de movimentação, interação, lure, label e script. O **Auto Recorder** cria waypoints suportados enquanto você joga, e o **Debug HUD** ajuda a inspecionar a rota e as decisões de movimentação.

Veja [Primeiros passos com o CaveBot](./cavebot/getting_started) para orientações de configuração e segurança.

## Equipment

![Equipment](/img/overview/equipment.png "Equipment")

O **Equipment** equipa ou remove os itens configurados quando condições de HP, MP, estado do personagem ou outros filtros selecionados são satisfeitas. Regras conflitantes devem usar prioridades intencionais e condições que não se sobreponham.

## Tools

### Helper

![Helper](/img/overview/helper.png "Helper")

A aba **Helper** contém utilitários independentes, como conversão de moedas, uso de comida, reconexão e comportamento anti-idle. A disponibilidade e a eficácia dependem do cliente e do servidor.

### PvP

![PvP](/img/overview/pvp.png "PvP")

A aba **PvP** contém utilitários de combate, como automação de equipamentos, Anti-Push e Hold Target. Configure somente as funções apropriadas às regras e mecânicas do servidor onde serão executadas.

### HUD

![HUD](/img/overview/hud.png "HUD")

O HUD integrado pode mostrar o estado dos módulos ativos e outras informações do bot sobre o jogo. Scripts Lua podem criar elementos separados pela [API HUD](./lua_scripting/functions/hud).

### Timer

![Timer](/img/overview/timer.png "Timer")

A interface Timer agenda ações configuradas após um intervalo. Scripts Lua têm uma [API `Timer`](./lua_scripting/functions/timer) separada para callbacks recorrentes.

## Engine

![Engine](/img/overview/engine.png "Engine")

O **Engine** contém opções globais de execução, delays, controles de taxa de ações, controles de scripts e integrações específicas. Altere uma opção por vez e teste: valores seguros em um OTServer podem ser rejeitados ou se comportar de modo diferente em outro.

## Scripting

![Scripting](/img/overview/scripting.png "Scripting")

A aba **Scripting** gerencia scripts Lua armazenados em `Documents/ZeroBot/Scripts`. As bibliotecas do core são carregadas automaticamente. Comece por [Lua scripting](./lua_scripting/) e use somente APIs documentadas para a versão instalada do ZeroBot.

## Settings

![Settings](/img/overview/settings.png "Settings")

O **Settings** gerencia perfis do ZeroBot salvos em formato JSON. Os perfis podem ser associados a nomes de personagem ou hotkeys. Mantenha backups antes de substituir uma configuração estável ou testar um perfil feito para outra combinação de cliente e servidor.
