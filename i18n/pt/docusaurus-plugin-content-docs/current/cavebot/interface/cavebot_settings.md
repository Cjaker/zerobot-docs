---
sidebar_position: 5
---

# Configurações do CaveBot
## Opções Principais
<div class="text--center">
  <img src="/img/cavebot_settings.png?v=2" />
  <p>Configurações do CaveBot</p>
</div>

**Load** -> carrega um CaveBot específico

**Save** -> salva o CaveBot atual

**Settings** -> configurações gerais do CaveBot

## Configurações Avançadas do CaveBot
<div class="text--center">
  <img src="/img/cavebot_settings_window_2.png?v=3" />
  <p>Configurações Avançadas do CaveBot</p>
</div>

### Ignore Lure List
No campo de texto mostrado na imagem acima, por favor insira os nomes dos monstros que o sistema de lure do cavebot deve ignorar. Insira cada nome de monstro em uma linha separada.

### Safety Lure Settings
**Near Creature Distance**: A distância em tiles entre o jogador e a criatura que o algoritmo de lure do CaveBot considerará como 'próxima'.<br />Para desativar esse recurso, basta defini-lo como 0.

**Near Creatures Count**: O número mínimo de criaturas que podem ser consideradas 'próximas' ao jogador ao mesmo tempo.<br />Lembre-se: este valor funciona em conjunto com a configuração 'Near Creature Distance'.<br />Exemplo: se definido como 3 e houver 3 criaturas ou mais próximas ao jogador, o personagem correrá para evitar acumular muitas criaturas. O bot considerará a criatura como 'próxima' com base na configuração 'Near Creature Distance'.

**Avoid Stuck/Trap**: Número mínimo de tiles bloqueados ao redor do seu personagem para forçar a caminhada e evitar ficar preso/armadilhado. Isso considera tiles e mobs em uma área 1x1.<br />Exemplo: se você definir 7, então o bot forçará a caminhada se houver 7 ou mais tiles bloqueáveis ao seu redor.<br />Para desativar esse recurso, defina-o como 0.

### Lure Settings
**Creatures To Run**: supondo que você está atraindo monstros no waypoint "Start Lure", o bot só andará mais rápido e ignorará as criaturas **sem esperar por elas** se alcançar o valor configurado. Exemplo: se você definir o valor para 3, então o bot só andará sem esperar se houver 3 ou mais criaturas, garantindo assim pelo menos 3 criaturas em sua lure

**Dynamic Lure**: Se habilitado, seu CaveBot será tratado como um tipo de caça de lure dinâmico. As configurações serão as mesmas das configurações de lure padrão, baseadas em Ignore Lure List, Lure Settings, End Lure Settings e Safety Lure Settings.<br />Exemplo: para um teste simples, você pode gravar todo o CaveBot usando stand/nodes e habilitar esta opção.<br />Importante: esta função não é compatível com os waypoints Start Lure, End Lure, Dynamic Start Lure e Dynamic End Lure. Deve ser usado para caçadas simples do CaveBot.

### End Lure Settings
**Creatures To Leave**: supondo que seu personagem alcançou o waypoint "End Lure" e está matando os monstros para terminar a lure, esta configuração define quantas criaturas devem restar para considerar a lure concluída e prosseguir para o próximo waypoint. Exemplo: se você definir o valor para 3, então o bot entenderá que deve haver 3 ou menos criaturas restantes para terminar de matar as criaturas e prosseguir.

**Creatures To Stop**: supondo que seu personagem alcançou o waypoint "End Lure", o bot se baseará nesta configuração para decidir se para seu personagem ou não para matar as criaturas ao redor. Exemplo: se você definir o valor para 3, então o bot só parará para matar as criaturas da lure se houver 3 ou mais criaturas, caso contrário, prossegue normalmente.

**Observação**: Creatures To Stop funciona em conjunto com Creatures To Leave, o primeiro define se o personagem deve parar no waypoint End Lure e o segundo define quantos monstros precisa faltar para voltar ao fluxo normal do CaveBot.

**Try Walk To center**: Se habilitado, o personagem tentará andar para o centro do waypoint de lure final. Se não for possível, o bot seguirá o comportamento padrão.<br />Importante: a validação do waypoint será a mesma, baseada nas configurações de distância de nó.<br />Esta opção se aplica aos seguintes waypoints: End Lure.

## Configurações do Auto Recorder
**Distance**: Distância em SQMs entre waypoints gravados automaticamente.

**Type**: O tipo de waypoint dos waypoints gravados automaticamente

## Configurações de Node
**Distância**: A distância entre o jogador e o waypoint 'nó' que o CaveBot considerará como alcançado.

## Configurações de Movimentação
**Map Walk**: Se habilitado, o bot irá usar click map para caminhar.

**Arrow Keys**: Se habilitado, o bot irá usar o método das setas do teclado para caminhar.

**Disable Player Walkthrough**: Se habilitado, o bot não permitirá que o jogador caminhe através de outros jogadores. (útil para servidores que informam o cliente que é possível andar em cima de jogador X, mas acaba não sendo).