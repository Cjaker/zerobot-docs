---
sidebar_position: 11
---

# Player
Funções gerais do jogador

```lua
Player.getId()
Player.getName()
Player.getHealth()
Player.getMana()
Player.getHealthPercent()
Player.getManaPercent()
Player.getMagicShield()
Player.getMaxMagicShield()
Player.getCapacity()
Player.getSoulPoints()
Player.isHungry()
Player.getStamina()
Player.getLevel()
Player.getLevelPercent()
Player.getXpBoostTime()
Player.getSkills()
Player.getTargetId()
Player.getFollowId()
Player.getInventorySlot(slot)
Player.getState(index)
Player.getContainers()
Player.joinParty(targetId)
Player.inviteParty(targetId)
Player.enableSharedExpParty(enabled)
Player.passLeadershipParty(targetId)
```

### Código

```lua
--- Obtém o ID único do jogador.
-- Esta função é um wrapper em torno da função externa playerGetId.
-- @return O ID único do jogador, ou 0 se não estiver no jogo.
function Player.getId()

--- Obtém o nome do jogador.
-- Esta função é um wrapper em torno da função externa playerGetName.
-- @return O nome do jogador, ou nil se não estiver no jogo.
function Player.getName()

--- Obtém a saúde atual do jogador.
-- Esta função é um wrapper em torno da função externa playerGetHealth.
-- @return A saúde atual do jogador, ou o último valor se não estiver no jogo.
function Player.getHealth()

--- Obtém a mana atual do jogador.
-- Esta função é um wrapper em torno da função externa playerGetMana.
-- @return A mana atual do jogador, ou o último valor se não estiver no jogo.
function Player.getMana()

--- Obtém a saúde atual do jogador como uma porcentagem.
-- Esta função é um wrapper em torno da função externa playerGetHealthPercent.
-- @return A saúde atual do jogador como uma porcentagem, ou o último valor se não estiver no jogo.
function Player.getHealthPercent()

--- Obtém a mana atual do jogador como uma porcentagem.
-- Esta função é um wrapper em torno da função externa playerGetManaPercent.
-- @return A mana atual do jogador como uma porcentagem, ou o último valor se não estiver no jogo.
function Player.getManaPercent()

--- Obtém o valor atual do magic shield do jogador.
-- Esta função é um wrapper em torno da função externa playerGetMagicShield.
-- @return O valor atual do magic shield do jogador, ou o último valor se não estiver no jogo.
function Player.getMagicShield()

--- Obtém a capacidade máxima do magic shield do jogador.
-- Esta função é um wrapper em torno da função externa playerGetMaxMagicShield.
-- @return A capacidade máxima do magic shield do jogador, ou o último valor se não estiver no jogo.
function Player.getMaxMagicShield()

--- Obtém a capacidade atual do jogador.
-- Esta função é um wrapper em torno da função externa playerGetCapacity.
-- @return A capacidade atual do jogador, ou o último valor se não estiver no jogo.
function Player.getCapacity()

--- Obtém os pontos de alma atuais do jogador.
-- Esta função é um wrapper em torno da função externa playerGetSoulPoints.
-- @return Os pontos de alma atuais do jogador, ou o último valor se não estiver no jogo.
function Player.getSoulPoints()

--- Retorna se o jogador está com fome.
-- Esta função é um wrapper em torno da função externa playerIsHungry.
-- @return O estado de fome do jogador, ou o último valor se não estiver no jogo.
function Player.isHungry()

--- Obtém a stamina atual do jogador em minutos.
-- Esta função é um wrapper em torno da função externa playerGetStamina.
-- @return A stamina atual do jogador em minutos, ou o último valor se não estiver no jogo.
function Player.getStamina()

--- Obtém o nível atual do jogador.
-- Esta função é um wrapper em torno da função externa playerGetLevel.
-- @return O nível atual do jogador, ou o último valor se não estiver no jogo.
function Player.getLevel()

--- Obtém a porcentagem de nível atual do jogador.
-- Esta função é um wrapper em torno da função externa playerGetLevelPercent.
-- @return A porcentagem de nível atual do jogador, ou o último valor se não estiver no jogo.
function Player.getLevelPercent()

--- Obtém a stamina atual do jogador em minutos.
-- Esta função é um wrapper em torno da função externa playerGetStamina.
-- @return A stamina atual do jogador em minutos, ou o último valor se não estiver no jogo.
function Player.getStamina()

--- Obtém o tempo restante de XP boost do jogador em segundos.
-- Esta função é um wrapper em torno da função externa playerGetXpBoostTime.
-- @return O tempo restante de XP boost em segundos, ou o último valor se não estiver no jogo.
function Player.getXpBoostTime()

--- Obtém as habilidades do jogador.
-- Esta função é um wrapper em torno da função externa playerGetSkills.
-- Esta informação estará disponível se você fez login com o bot injetado, assim ele pode coletar informações das habilidades.
-- @return As habilidades atuais do jogador por nível e porcentagem como tabela, ou o último valor se não estiver no jogo.
-- Exemplo de saída:
-- {
--     "lifeLeechDamage": 2500,
--     "manaLeechChance": 0,
--     "manaLeechDamage": 0,
--     "fist": 10,
--     "axe": 10,
--     "club": 10,
--     "sword": 10,
--     "distance": 10,
--     "shield": 10,
--     "fishing": 10,
--     "magic": 0,
--     "fistPercent": 0,
--     "axePercent": 0,
--     "clubPercent": 0,
--     "swordPercent": 0,
--     "distancePercent": 0,
--     "shieldPercent": 0,
--     "fishingPercent": 0,
--     "magicPercent": 0,
--     "criticalChance": 0,
--     "criticalDamage": 0,
--     "lifeLeechChance": 0
-- }
function Player.getSkills()

--- Obtém o ID do alvo atual do jogador.
-- Esta função é um wrapper em torno da função externa playerGetTargetId.
-- @return O ID do alvo atual do jogador, ou o último valor se não estiver no jogo.
function Player.getTargetId()

--- Obtém o ID do alvo de seguir atual do jogador.
-- Esta função é um wrapper em torno da função externa playerGetFollowId.
-- @return O ID do alvo de seguir atual do jogador, ou o último valor se não estiver no jogo.
function Player.getFollowId()

--- Obtém as informações do item de um slot específico do inventário do jogador.
-- Esta função é um wrapper em torno da função externa playerGetInventorySlot.
-- @param slot (número) - O slot do inventário para obter as informações do item, consulte o valor do parâmetro como Enums.InventorySlot
-- @return As informações do item do slot específico do inventário do jogador, ou nil se não houver item. Formato da tabela: {id=0,count=0,tier=0,holdingCount=0}
function Player.getInventorySlot(slot)

--- Obtém o status do índice de estado especificado do jogador.
-- Esta função é um wrapper em torno da função externa playerGetState.
-- @param index (número) - O índice de estado para verificar se está ativo, consulte o valor do parâmetro como Enums.States
-- @return O status do estado se está ativo no jogador ou não, ou nil se não houver estado do parâmetro especificado
function Player.getState(index)

--- Obtém os contêineres abertos pelo jogador.
-- Esta função é um wrapper em torno da função externa playerGetContainers.
-- @return Uma tabela contendo todos os índices de contêineres abertos, ou nil se não houver contêineres abertos
function Player.getContainers()

--- Obter a quantidade atual de poeiras do jogador.
-- Esta função é um wrapper em torno da função externa playerGetDusts.
-- @return A quantidade atual de poeiras do jogador, ou o último valor se não estiver no jogo.
function Player.getDusts()
	return playerGetDusts()
end

--- Obter a quantidade máxima de poeiras.
-- Esta função é um wrapper em torno da função externa playerGetDustsMaximum.
-- @return A quantidade máxima de poeiras do jogador, ou o último valor se não estiver no jogo.
function Player.getDustsMaximum()
	return playerGetDustsMaximum()
end

--- Junta-se a uma party de outro jogador se o pedido de convite estiver pendente.
-- Esta função é um wrapper em torno da função externa playerJoinParty.
-- @param targetId (número) - O ID do jogador que está convidando você
function Player.joinParty(targetId)

--- Convida outro jogador para sua party.
-- Esta função é um wrapper em torno da função externa playerInviteParty.
-- @param targetId (número) - O jogador alvo para convidar
function Player.inviteParty(targetId)

--- Ativa o estado de experiência compartilhada na sua party.
-- Esta função é um wrapper em torno da função externa playerEnableSharedExpParty.
-- @param enabled (boolean) - Estado ativado
function Player.enableSharedExpParty(enabled)

--- Passa a liderança da party para outro jogador.
-- Esta função é um wrapper em torno da função externa playerPassLeadershipParty.
-- @param targetId (número) - O ID do jogador alvo para passar a liderança
function Player.passLeadershipParty(targetId)
```