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
Engine.magicShooterGetProfileName(index)
Engine.targetingSwitchProfile(profileIndex)
Engine.targetingGetProfile()
Engine.targetingGetProfileName(index)
Engine.equipmentSwitchProfile(profileIndex)
Engine.equipmentGetProfile()
Engine.equipmentGetProfileName(index)
Engine.getScriptsDirectory()
Engine.getUserId()
Engine.setAlarm(alarmType, enable)
Engine.isAlarmEnabled(alarmType)
Engine.loadScript(scriptName)
Engine.unloadScript(scriptName)
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

--- Obtém o nome do perfil de lançador de magia (magic shooter) atual.
--- Esta função é um wrapper em torno da função externa engineMagicShooterGetProfileName.
--- @param index (number) - O índice do perfil para obter o nome (de 0 a 9).
--- @return (string) - O nome do perfil atualmente selecionado.
function Engine.magicShooterGetProfileName(index)


--- Alterna o perfil de mira pelo índice.
-- Esta função é um wrapper em torno da função externa engineTargetingSwitchProfile.
-- @param profileIndex (number) - O índice do perfil para alternar (de 0 a 9).
function Engine.targetingSwitchProfile(profileIndex)

--- Obtém o índice do perfil atualmente selecionado na mira.
-- Esta função é um wrapper em torno da função externa engineTargetingGetProfile.
-- @return (number) - O índice do perfil atualmente selecionado.
function Engine.targetingGetProfile()

--- Obtém o nome do perfil de alvo (targeting) atual.
-- Esta função é um wrapper em torno da função externa engineTargetingGetProfileName.
-- @param index (number) - O índice do perfil para obter o nome (de 0 a 9).
-- @return (string) - O nome do perfil atualmente selecionado.
function Engine.targetingGetProfileName(index)

--- Alterna o perfil do equipamento pelo índice.
-- Esta função é um wrapper em torno da função externa engineEquipmentSwitchProfile.
-- @param profileIndex (number) - O índice do perfil para alternar (de 0 a 9).
function Engine.equipmentSwitchProfile(profileIndex)

--- Obtém o índice do perfil atualmente selecionado no equipamento.
-- Esta função é um wrapper em torno da função externa engineEquipmentGetProfile.
-- @return (number) - O índice do perfil atualmente selecionado.
function Engine.equipmentGetProfile()

--- Obtém o nome do perfil de equipamento atual.
-- Esta função é um wrapper em torno da função externa engineEquipmentGetProfileName.
-- @param index (number) - O índice do perfil para obter o nome (de 0 a 9).
-- @return (string) - O nome do perfil atualmente selecionado.
function Engine.equipmentGetProfileName(index)

--- Obtém o diretório padrão de scripts.
-- Esta função é um wrapper em torno da função externa engineGetScriptsDirectory.
-- @return (string) - O caminho para o diretório padrão de scripts.
function Engine.getScriptsDirectory()

--- Obtém o último ID do usuário.
-- Esta função é útil para identificar o usuário atual. Você pode usar engineGetUserId diretamente se precisar evitar hooks.
-- @return (string) - O último ID de usuário gerado, dados não confidenciais.
function Engine.getUserId()

--- Habilita ou desabilita um tipo específico de alarme.
--- @param alarmType (number) - O tipo de alarme a ser habilitado ou desabilitado.
--- @param enable (boolean) - Uma flag indicando se deve habilitar (true) ou desabilitar (false) o tipo de alarme.
function Engine.setAlarm(alarmType, enable)

--- Obtém o status de um tipo específico de alarme.
--- @param alarmType (number) - O tipo de alarme a ser verificado. Consulte Enums.AlarmType.
--- @return (boolean) - Retorna true se o tipo de alarme estiver habilitado, caso contrário, retorna false.
function Engine.isAlarmEnabled(alarmType)

--- Carregar script específico.
-- Esta função é um wrapper em torno da função externa engineLoadScript.
-- Esta função é executada de forma assíncrona, então pode levar algum tempo para carregar o script. Portanto, se você usar Engine.unloadScript logo após esta função, deverá esperar que o script seja carregado, aguarde um pouco de atraso.
-- @param scriptName (string) - O nome do script a ser carregado. Este nome é baseado na lista de "Scripts Disponíveis" na aba "Scripting".
-- @return (boolean) - Retorna verdadeiro se o script for carregado com sucesso, falso se o script não existir.
function Engine.loadScript(scriptName)

--- Descarregar script específico.
-- Esta função é um wrapper em torno da função externa engineUnloadScript.
-- @param scriptName (string) - O nome do script a ser descarregado. Este nome é baseado na lista de "Scripts Habilitados" na aba "Scripting".
-- @return (boolean) - Retorna verdadeiro se o script foi descarregado com sucesso, falso se o script não existir.
function Engine.unloadScript(scriptName)
```