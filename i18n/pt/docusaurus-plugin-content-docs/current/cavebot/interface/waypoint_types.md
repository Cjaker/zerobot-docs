---
sidebar_position: 1
---

# Tipos de Waypoint
<div class="text--center">
  <img src="/img/waypoint_type.png?v=2" alt="Seletor de tipo de waypoint do CaveBot" />
  <p>Tipos de Waypoint do CaveBot</p>
</div>

**Stand** -> força seu personagem a pisar nessa posição

**Node** -> considera o waypoint alcançado dentro da **Distância do Node** configurada

**Start Lure** -> ativa o fluxo normal de lure quando o personagem alcança o raio do waypoint

**End Lure** -> aplica as condições configuradas de End Lure depois que o personagem alcança o raio do waypoint

**Dynamic Start** -> ativa o fluxo de lure dinâmico baseado em waypoints

**Dynamic End** -> encerra o fluxo de lure dinâmico baseado em waypoints

**Rope** -> usa qualquer ferramenta que funcione como corda na posição específica

**Ladder** -> usa qualquer item do tipo escada para subir na posição específica

**Hole** -> usa qualquer ferramenta que funcione para cavar o buraco na posição específica

**Use** -> usa o item no topo escolhido pelo client na posição específica

**Teleport** -> move seu personagem para o teletransporte na posição específica, com verificações para garantir a teleportação

**Label** -> nomeia o waypoint (útil para organização e para waypoints do tipo Goto). **Para editar o waypoint, basta dar um duplo clique nele**

**Goto** -> pula para algum waypoint pelo seu nome (lembra do Label? É por isso). **Para editar o waypoint, basta dar um duplo clique nele**

**Script** -> executa um script ao ativar esse tipo de waypoint. **Para editar o waypoint, basta dar um duplo clique nele**

**Door** -> abre ou fecha uma porta na posição do waypoint

**Hur Up** -> usa a magia exani hur "up" na posição do waypoint

**Hur Down** -> usa a magia exani hur "down" na posição do waypoint

**Machete** -> usa uma ferramenta machete disponível na vegetação cortável da posição do waypoint

## Botões de ação rápida

A janela CaveBot Options também oferece os botões **Sell Loot** e **Refill**. Eles são auxiliares, não valores adicionais de `Enums.WaypointType`: cada botão cria um Node seguido de um waypoint Script gerado.

- **Sell Loot** usa a Sell List atual e vende os itens correspondentes que não estão equipados por meio da janela de trade de um NPC.
- **Refill** usa a Refill List atual. Cada entrada possui o formato `{id=268,min=100,max=500}`.

Revise o script gerado e teste-o com o NPC de destino. Diálogos, disponibilidade de itens, preços e limites de ações podem variar entre OT servers.
