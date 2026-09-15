---
sidebar_position: 1
---

# Introdução

Teste uma rota nova com um personagem e em um local onde um movimento incorreto, mudança de andar ou limite de ações do servidor não cause uma perda significativa. OT servers podem diferir nos itens do mapa, regras de movimento, limites de ações e comportamento do protocolo.

## Explicação Breve

O CaveBot segue uma lista de waypoints. Um waypoint pode representar um destino, uma ação de mudança de andar, uma transição de lure, um label/salto ou um script Lua.

O CaveBot cuida da navegação; o combate e a sobrevivência devem ser configurados separadamente em módulos como Healing, Targeting, Magic Shooter e Equipment.

## Recomendações

- Revele no minimapa a área necessária antes de testar a rota.
- Comece com um valor conservador em **Actions Per Second**. Aumente apenas se o ZeroBot estiver aguardando o próprio limitador e o servidor permitir a taxa maior; diminua se o servidor limitar ou desconectar o personagem. O nível do personagem, sozinho, não determina o valor correto.
- Use waypoints `Stand` ou `Node` suficientes para deixar caminhos longos e mudanças de andar sem ambiguidade.
- Use `Start Lure` e `End Lure` apenas em rotas que utilizam intencionalmente o fluxo normal de lure. O Dynamic Lure possui regras próprias de compatibilidade em [Configurações do CaveBot](./interface/cavebot_settings#configurações-de-lure).
- Sempre que possível, mantenha waypoints importantes longe de buracos, teletransportes e outras mudanças de andar não intencionais.
- Use os tipos dedicados `Rope`, `Ladder`, `Hole`, `Use`, `Door` e `Machete` para as respectivas interações com o mapa.
- Salve a rota antes de ativá-la e depois de qualquer alteração importante. Se **Criptografar CaveBot ao Salvar** estiver ativado, mantenha também um backup não criptografado, pois a interface não converte o arquivo criptografado de volta.
- Use um waypoint Script apenas quando nenhum tipo dedicado representar a ação. Mantenha as esperas curtas e limpe todos os eventos e timers criados pelo script.
- Teste o ciclo completo, incluindo refill, venda, morte/reconexão e o caminho de volta.

## Recomendações de Targeting

As configurações de Targeting dependem da vocação, velocidade, terreno, comportamento das criaturas e do OT server.

- **Distância Auto** deixa a lógica do Targeting escolher a distância de movimento.
- **Distância fixa** usa a distância configurada como objetivo.
- **Stand** evita o movimento por distância e é apropriado quando o personagem deve manter a posição.

Trate qualquer perfil compartilhado como ponto de partida. Valide-o na área real da hunt antes de deixar o CaveBot sem supervisão.
