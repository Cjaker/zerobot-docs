---
sidebar_position: 5
---

# Configurações do CaveBot

## Controles principais

<div class="text--center">
  <img src="/img/cavebot_settings.png?v=2" alt="Controles principais do CaveBot" />
  <p>Controles principais do CaveBot. A disposição exata pode variar entre versões do ZeroBot.</p>
</div>

- **Load** carrega uma configuração de CaveBot salva.
- **Save** salva a configuração atual.
- **New** limpa a configuração atual para criar uma nova. Alterações não salvas são perdidas após a confirmação.
- **Settings** abre as configurações avançadas descritas abaixo.
- **Special Areas** abre o editor de áreas.
- **Enable Waypoint Colors** usa cores diferentes para identificar os tipos de waypoint.
- **Encrypt CaveBot on Save** criptografa o arquivo ao salvá-lo. Um CaveBot criptografado não pode ser convertido novamente para o formato legível; mantenha um backup não criptografado.

## Configurações avançadas

<div class="text--center">
  <img src="/img/cavebot_settings_window_2.png?v=3" alt="Configurações avançadas do CaveBot" />
  <p>Configurações avançadas do CaveBot. Versões mais novas podem conter campos adicionais.</p>
</div>

### Ignore Lure List

Nomes dos monstros que a lógica de lure deve ignorar, um nome por linha.

### Safety Lure Settings

- **Near Creature Distance** define a distância máxima, em tiles, para uma criatura ser considerada próxima. Use `0` para desativar essa condição.
- **Near Creatures Count** define quantas criaturas próximas acionam o comportamento de segurança. É avaliado junto com **Near Creature Distance**.
- **Avoid Stuck Trap** define quantos tiles adjacentes bloqueados ou criaturas acionam uma tentativa de caminhada forçada. Use `0` para desativar.

Essas configurações dependem das informações de mapa e criaturas fornecidas pelo cliente e servidor. Teste-as no OTServer de destino antes de usar o bot sem supervisão.

### Configurações de lure {#configurações-de-lure}

- **Creatures To Run** é o número mínimo de criaturas consideradas necessário para o personagem continuar o lure sem esperar por todas elas.
- **Dynamic Lure** aplica o comportamento de lure a uma rota comum. Não combine essa opção com waypoints **Start Lure**, **End Lure**, **Dynamic Start** ou **Dynamic End**.
- **Skip Unreachable Creatures** exclui criaturas para as quais o bot não consegue calcular uma rota alcançável. Essa opção usa mais processamento, pois pode calcular rotas para várias criaturas.

### End Lure Settings

- **Creatures To Stop** é o número mínimo de criaturas necessário para o personagem parar e começar a matar em um waypoint **End Lure**.
- **Creatures To Leave** é o número máximo de criaturas restantes a partir do qual o CaveBot pode sair do local.
- **Creatures To Leave By HP%** é uma condição alternativa usada quando **Creatures To Leave** não foi satisfeita. O bot pode sair quando, no máximo, a quantidade configurada de criaturas tiver HP acima da porcentagem escolhida.
- **Don't Leave If HP%-** mantém o personagem no local quando a condição de quantidade encontra criaturas enfraquecidas com HP igual ou inferior à porcentagem selecionada.
- **Try Walk To Center** faz o personagem tentar chegar ao centro do waypoint **End Lure**. A validação da chegada continua respeitando a distância de Node configurada.

Condições baseadas em HP são úteis em rotas especializadas, mas o resultado depende das criaturas que o cliente expõe ao bot naquele momento. Valide os valores com o Debug HUD do CaveBot.

## Configurações do Auto Recorder {#auto-recorder-settings}

- **Distance** é o intervalo, em tiles, entre os waypoints gravados automaticamente.
- **Type** é o tipo de waypoint criado pelo gravador.

O gravador cria waypoints de movimentação e interação suportados; revise a rota gerada antes de usá-la sem supervisão.

## Configurações de Node

**Distance** é a distância máxima de um waypoint do tipo Node na qual ele é considerado alcançado. Essa opção também afeta os tipos de waypoint que usam a validação de distância de Node.

## Configurações de movimentação

- **Map Walk** usa o método de pathfinding por clique no mapa.
- **Arrow Keys** usa a lógica de caminhada pelas setas do teclado. Esse modo está marcado como beta na interface atual.
- **Walk Delay** é o intervalo, em milissegundos, entre os passos feitos pelo método Arrow Keys.
- **Disable Player Walkthrough** faz o CaveBot tratar outros jogadores como bloqueios mesmo quando o servidor informa ao cliente que é permitido atravessá-los. Ative apenas em servidores onde essa informação esteja incorreta e faça a rota travar.

## Configurações internas

**Teleport IDs** é uma lista, separada por vírgulas, dos IDs de teleportes usados pelo Auto Recorder e por outras funções internas do CaveBot. Altere-a somente quando o OTServer de destino usar um ID personalizado ou houver um ID incompatível na lista.

## Special Areas

Special Areas marcam regiões que o algoritmo de movimentação deve evitar.

- **Width** e **Height** definem as dimensões da área.
- **Wp. Range** limita a área a um intervalo inclusivo de IDs de waypoint. Por exemplo, `5-10` vale do waypoint 5 ao 10.
- **Type** seleciona se a área vale para a movimentação do CaveBot, do Targeting ou para ambas (**All**).
- **Direction** escolhe onde a nova área será criada em relação ao personagem.
- **Extended If Drunk** aumenta em uma unidade a largura e a altura de todas as áreas enquanto o personagem estiver bêbado.

Depois de criar uma área, use o Debug HUD para confirmar sua posição, dimensões e intervalo de waypoints.
