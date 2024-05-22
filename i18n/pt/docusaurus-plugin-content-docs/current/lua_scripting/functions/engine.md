---
sidebar_position: 7
---

# Engine
Controla o motor do bot

```lua
Engine.isHealingEnabled()
Engine.isHealFriendEnabled()
Engine.getBotVersion()
Engine.isBotEnabled()
Engine.isTargetingEnabled()
Engine.isMagicShooterEnabled()
Engine.isEquipmentEnabled()
Engine.isTimerEnabled()
Engine.enableTargeting(enable)
Engine.enableMagicShooter(enable)
Engine.enableHealFriend(enable)
Engine.enableHealing(enable)
Engine.enableEquipment(enable)
Engine.enableTimer(enable)
Engine.enableBot(enable)
Engine.magicShooterSwitchProfile(profileIndex)
Engine.magicShooterGetProfile()
Engine.equipmentSwitchProfile(profileIndex)
Engine.equipmentGetProfile()
Engine.getScriptsDirectory()
Engine.getUserId()
```

### Código

```lua
--- Retorna se a função de cura está ativada
-- Esta função é um wrapper em torno da função externa engineIsHealingEnabled.
function Engine.isHealingEnabled()

--- Retorna se a função de curar amigo está ativada
-- Esta função é um wrapper em torno da função externa engineIsHealFriendEnabled.
function Engine.isHealFriendEnabled()

--- Retorna a versão atual do bot
-- Esta função é um wrapper em torno da função externa engineGetBotVersion.
function Engine.getBotVersion()

--- Retorna se o bot está ativado
-- Esta função é um wrapper em torno da função externa engineIsBotEnabled.
function Engine.isBotEnabled()

--- Retorna se a função de mira está ativada
-- Esta função é um wrapper em torno da função externa engineIsTargetingEnabled.
function Engine.isTargetingEnabled()

--- Retorna se a função de magic shooter está ativada
-- Esta função é um wrapper em torno da função externa engineIsMagicShooterEnabled.
function Engine.isMagicShooterEnabled()

--- Retorna se a função de equipamento está ativada
-- Esta função é um wrapper em torno da função externa engineIsEquipmentEnabled.
function Engine.isEquipmentEnabled()

--- Retorna se a função de temporizador está ativada
-- Esta função é um wrapper em torno da função externa engineIsTimerEnabled.
function Engine.isTimerEnabled()

--- Ativa ou desativa o sistema de mira.
-- Esta função é um wrapper em torno da função externa engineTargetingEnable.
-- @param enable (boolean) - Um sinalizador indicando se deve ativar (true) ou desativar (false) o sistema de mira.
function Engine.enableTargeting(enable)

--- Ativa ou desativa o sistema de magic shooter.
-- Esta função é um wrapper em torno da função externa engineMagicShooterEnable.
-- @param enable (boolean) - Um sinalizador indicando se deve ativar (true) ou desativar (false) o sistema de magic shooter.
function Engine.enableMagicShooter(enable)

--- Ativa ou desativa o sistema de curar amigo.
-- Esta função é um wrapper em torno da função externa engineHealFriendEnable.
-- @param enable (boolean) - Um sinalizador indicando se deve ativar (true) ou desativar (false) o sistema de curar amigo.
function Engine.enableHealFriend(enable)

--- Ativa ou desativa o sistema de cura.
-- Esta função é um wrapper em torno da função externa engineHealingEnable.
-- @param enable (boolean) - Um sinalizador indicando se deve ativar (true) ou desativar (false) o sistema de cura.
function Engine.enableHealing(enable)

--- Ativa ou desativa o sistema de equipamento.
-- Esta função é um wrapper em torno da função externa engineEquipmentEnable.
-- @param enable (boolean) - Um sinalizador indicando se deve ativar (true) ou desativar (false) o sistema de equipamento.
function Engine.enableEquipment(enable)

--- Ativa ou desativa o sistema de temporizador.
-- Esta função é um wrapper em torno da função externa engineTimerEnable.
-- @param enable (boolean) - Um sinalizador indicando se deve ativar (true) ou desativar (false) o sistema de temporizador.
function Engine.enableTimer(enable)

--- Ativa ou desativa todas as funções do bot.
-- Esta função é um wrapper em torno da função externa engineBotEnable.
-- @param enable (boolean) - Um sinalizador indicando se deve ativar (true) ou desativar (false) todas as funções do bot.
function Engine.enableBot(enable)

--- Alterna o perfil do magic shooter pelo índice.
-- Esta função é um wrapper em torno da função externa engineMagicShooterSwitchProfile.
-- @param profileIndex (number) - O índice do perfil para alternar (de 0 a 9).
function Engine.magicShooterSwitchProfile(profileIndex)

--- Obtém o índice do perfil atualmente selecionado no magic shooter.
-- Esta função é um wrapper em torno da função externa engineMagicShooterGetProfile.
-- @return (number) - O índice do perfil atualmente selecionado.
function Engine.magicShooterGetProfile()

--- Alterna o perfil do equipamento pelo índice.
-- Esta função é um wrapper em torno da função externa engineEquipmentSwitchProfile.
-- @param profileIndex (number) - O índice do perfil para alternar (de 0 a 9).
function Engine.equipmentSwitchProfile(profileIndex)

--- Obtém o índice do perfil atualmente selecionado no equipamento.
-- Esta função é um wrapper em torno da função externa engineEquipmentGetProfile.
-- @return (number) - O índice do perfil atualmente selecionado.
function Engine.equipmentGetProfile()

--- Obtém o diretório padrão de scripts.
-- Esta função é um wrapper em torno da função externa engineGetScriptsDirectory.
-- @return (string) - O caminho para o diretório padrão de scripts.
function Engine.getScriptsDirectory()

--- Obtém o último ID do usuário.
-- Esta função é útil para identificar o usuário atual. Você pode usar engineGetUserId diretamente se precisar evitar hooks.
-- @return (string) - O último ID de usuário gerado, dados não confidenciais.
function Engine.getUserId()
```