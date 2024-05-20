---
sidebar_position: 1
---

# Introdução
## IMPORTANTE
ESSA FUNCIONALIDADE ESTARÁ DISPONÍVEL NA VERSÃO 1.7.0.0!

O CaveBot está em fase BETA, portanto, ao usá-lo, você concorda com as notas escritas aqui: [BETA](../about_beta)

## Explicação Breve
Um cavebot é um script automatizado que permite aos jogadores navegar por cavernas e masmorras e engajar-se em combates com criaturas.

Ele simula ações do jogador como caminhar, interagir com NPCs e scripts personalizados, possibilitando a realização de tarefas repetitivas e o ganho de experiência ou recursos de maneira eficiente.

Para usar um cavebot de forma eficaz, geralmente é necessário configurá-lo junto com outras funções do bot, como Cura, Mira e Atirador Mágico, para garantir que o personagem possa sobreviver e maximizar os ganhos durante suas atividades automatizadas.

O próprio cavebot é composto de waypoints, que são as coordenadas ou ações que guiam seu personagem sobre onde caminhar ou que ações realizar.

## Recomendações
- Tenha um minimapa completo do jogo
- Se deseja atrair, use os waypoints de Início de Atração e Fim de Atração
- Evite usar waypoints de atração sem ter waypoints do tipo nó, se o caminho for longo
- Sempre salve seu CaveBot configurado
- Para ações específicas, é recomendado o uso de scripts (no momento não temos snippets prontos)
- Evite definir waypoints próximos a buracos, teletransportes, etc.
- Evite terminar atrações perto de buracos, teletransportes, etc.
- Sempre faça waypoints curtos se você **ama** economizar o poder de processamento do seu PC!
- O cavebot funciona em conjunto com as outras funções do bot. Portanto, para usá-lo eficazmente, você primeiro precisa configurar as abas de Cura, Mira, Atirador Mágico, etc., de acordo com suas preferências.

## Recomendações de Targeting
**[Targeting - Distance para LURE!!!]**\
**Distance Modo 'Auto':** evita que criaturas se aproximem do seu personagem + ignora sua configuração de distância + seleciona automaticamente uma posição 'central' para andar ao redor dela.

**Distance Valor Personalizado**: considera sua configuração de distância + seleciona automaticamente uma posição 'central' para andar ao redor dela.

**[Dicas]**
- Se você quer evitar criaturas se aproximarem em geral = Auto
- Se você quer evitar apenas uma criatura = Distância

**[Recomendações de Targeting para vocações - para LURE!!!]**\
**[Magos]**\
Distance Modo: Auto ||| Count: 1 ||| Proximity: 4 ou All

**[Knight & RP]**\
Distance Modo: Stand ||| Count: 1 ||| Proximity: 1 ou All para RP's

**[RP com equipamentos fracos]**\
Distance Modo: Auto ||| Count: 1 ||| Proximity: 4 ou All