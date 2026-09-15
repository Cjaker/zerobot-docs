---
sidebar_position: 6
---

# Opções do CaveBot

<div class="text--center">
  <img src="/img/cavebot_options.png?v=2" alt="Opções do CaveBot" />
  <p>Opções do CaveBot. A disposição exata pode variar entre versões do ZeroBot.</p>
</div>

- **Auto Recorder** cria waypoints suportados enquanto você se movimenta e interage com o jogo. Configure o intervalo e o tipo em [Configurações do Auto Recorder](./cavebot_settings#auto-recorder-settings) e revise a rota gerada.
- **Start From Nearest Waypoint** seleciona o waypoint mais próximo do personagem quando o CaveBot é ativado, em vez de sempre começar na posição atual da lista.
- **Enable Debug HUD** desenha informações da rota do CaveBot sobre o jogo. O botão de engrenagem contém filtros como **Show Path** e **Show Lure Skipped Creatures**.
- **Enable CaveBot** inicia ou interrompe a execução da rota do CaveBot.

Os botões de atalho da janela de opções adicionam ações comuns à lista:

- **Door**, **Hur Up**, **Hur Down** e **Machete** criam seus respectivos tipos de waypoint.
- **Sell Loot** e **Refill** criam um Node seguido por um waypoint Script gerado. As listas de itens são configuradas pelo botão **Settings** da janela e ficam compartilhadas entre as instâncias do ZeroBot pela configuração das opções do CaveBot.

Os scripts gerados de Sell Loot e Refill interagem com NPCs e itens; o resultado depende do diálogo dos NPCs e dos IDs usados pelo OTServer de destino. Inspecione o script gerado e teste-o nesse servidor.
