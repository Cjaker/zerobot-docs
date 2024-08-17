---
sidebar_position: 10
---

# CaveBot
Overall cavebot useful functions

```lua
CaveBot.GoTo(labelName)
CaveBot.addWaypoint(waypointType, x, y, z, extraData)
CaveBot.insertWaypoint(wpId, waypointType, x, y, z, extraData)
CaveBot.replaceWaypoint(wpId, waypointType, x, y, z, extraData)
CaveBot.deleteWaypoint(wpId)
CaveBot.clearWaypoints()
CaveBot.selectWaypoint(wpId)
CaveBot.getSelectedWaypointId()
CaveBot.getWaypointTypeById(id)
CaveBot.getWaypointDataById(id)
CaveBot.setLureIgnoreList(list)
CaveBot.setSafetyLureSettings(nearCreatureDistance, nearCreatureCount, avoidStuckTrapCount)
CaveBot.setLureSettings(creaturesToRun)
CaveBot.setEndLureSettings(creaturesToStop, creaturesToLeave, tryWalkToCenter)
CaveBot.setAutoRecorderSettings(nodeDistance, type)
CaveBot.setNodeSettings(nodeDistance)
CaveBot.addSpecialArea(x, y, z, type, width, height, fromWp, toWp)
CaveBot.deleteSpecialArea(id)
CaveBot.clearSpecialAreas()
CaveBot.pause(milliseconds)
CaveBot.saveFile(fileName)
CaveBot.loadFile(fileName)
```

### Código
```lua
--- Vai para um waypoint específico com label no cavebot
-- Esta função é um wrapper para a função externa cavebotGoto.
-- Nota: esta função não definirá instantaneamente o waypoint, ele será definido no próximo tick. Se você precisar executar esta função duas ou mais vezes, deverá usar um atraso entre as chamadas.
-- No script do ponto de passagem, ele encerrará a execução do script após o uso desta função.
-- @param labelName (string) - O nome do label do waypoint
function CaveBot.GoTo(labelName)

--- Adiciona um waypoint ao sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotAddWaypoint.
-- @param waypointType (number) - O tipo de waypoint a adicionar. Refira-se a waypointType como Enums.WaypointType
-- @param x (number) - A coordenada x do waypoint.
-- @param y (number) - A coordenada y do waypoint.
-- @param z (number) - A coordenada z do waypoint.
-- @param extraData (string) - O dado extra do waypoint. Este parâmetro é opcional e deve ser usado apenas quando waypointType é Label/Goto/Script.
function CaveBot.addWaypoint(waypointType, x, y, z, extraData)

--- Insere um waypoint antes de um id específico no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotInsertWaypoint.
-- @param wpId (number) - O id do waypoint onde inserir antes.
-- @param waypointType (number) - O tipo de waypoint a adicionar. Refira-se a waypointType como Enums.WaypointType
-- @param x (number) - A coordenada x do waypoint.
-- @param y (number) - A coordenada y do waypoint.
-- @param z (number) - A coordenada z do waypoint.
-- @param extraData (string) - O dado extra do waypoint. Este parâmetro é opcional e deve ser usado apenas quando waypointType é Label/Goto/Script.
function CaveBot.insertWaypoint(wpId, waypointType, x, y, z, extraData)

--- Substitui um waypoint por um id específico no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotReplaceWaypoint.
-- @param wpId (number) - O id do waypoint para substituir.
-- @param waypointType (number) - O tipo de waypoint a adicionar. Refira-se a waypointType como Enums.WaypointType
-- @param x (number) - A coordenada x do waypoint.
-- @param y (number) - A coordenada y do waypoint.
-- @param z (number) - A coordenada z do waypoint.
-- @param extraData (string) - O dado extra do waypoint. Este parâmetro é opcional e deve ser usado apenas quando waypointType é Label/Goto/Script.
function CaveBot.replaceWaypoint(wpId, waypointType, x, y, z, extraData)

--- Deleta um waypoint por um id específico no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotDeleteWaypoint.
-- @param wpId (number) - O id do waypoint para deletar.
function CaveBot.deleteWaypoint(wpId)

--- Limpa todos os waypoints no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotClearWaypoints.
function CaveBot.clearWaypoints()

--- Seleciona um waypoint por um id específico no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotSelectWaypoint.
-- Nota: esta função não definirá instantaneamente o waypoint, ele será definido no próximo tick. Se você precisar executar esta função duas ou mais vezes, deverá usar um atraso entre as chamadas.
-- No script do ponto de passagem, ele encerrará a execução do script após o uso desta função.
-- @param wpId (number) - O id do waypoint para selecionar.
function CaveBot.selectWaypoint(wpId)

--- Obtém o id do waypoint selecionado.
-- Esta função é um wrapper para a função externa cavebotGetSelectedWaypointId.
-- @return (number) - Retorna o id do waypoint se houver um selecionado, caso contrário retorna -1.
function CaveBot.getSelectedWaypointId()

--- Obtém o tipo de waypoint por um id específico.
-- Esta função é um wrapper para a função externa cavebotGetWaypointTypeById.
-- @param id (number) - O id do waypoint para obter o tipo.
-- @return (number) - Retorna o tipo de waypoint se o id for válido, caso contrário retorna -1.
function CaveBot.getWaypointTypeById(id)

--- Obtém os dados do waypoint por um id específico.
-- Esta função é um wrapper para a função externa cavebotGetWaypointDataById.
-- @param id (number) - O id do waypoint para obter os dados.
-- @return (table) - Retorna os dados do waypoint se o id for válido, caso contrário nil. Formato dos dados: {x = number, y = number, z = number, type = number, data = string}
function CaveBot.getWaypointDataById(id)

--- Define a lista de ignorados para o sistema de Lure do CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotSetLureIgnoreList.
--- @param list (table) - A lista de criaturas a serem ignoradas.
function CaveBot.setLureIgnoreList(list)

--- Define as configurações de segurança do Lure para o sistema de CaveBot.
--- Todos os parâmetros abaixo são baseados na seção de Configurações de Segurança do Lure na janela de configurações do CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotSetSafetyLureSettings.
--- @param nearCreatureDistance (number) - A distância para considerar uma criatura próxima ao jogador.
--- @param nearCreatureCount (number) - A quantidade de criaturas para considerar próximas ao jogador.
--- @param avoidStuckTrapCount (number) - A quantidade de criaturas ou objetos para considerar uma situação de trap.
function CaveBot.setSafetyLureSettings(nearCreatureDistance, nearCreatureCount, avoidStuckTrapCount)

--- Define as configurações de Lure para o sistema de CaveBot.
--- Todos os parâmetros abaixo são baseados na seção de Configurações de Lure na janela de configurações do CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotSetLureSettings.
--- @param creaturesToRun (number) - A quantidade de criaturas para correr.
function CaveBot.setLureSettings(creaturesToRun)

--- Define as configurações de Lure End para o sistema de CaveBot.
--- Todos os parâmetros abaixo são baseados na seção de Configurações de Lure End na janela de configurações do CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotSetEndLureSettings.
--- @param creaturesToStop (number) - A quantidade de criaturas para parar.
--- @param creaturesToLeave (number) - A quantidade de criaturas para deixar.
--- @param tryWalkToCenter (boolean) - A flag para tentar caminhar até o centro.
function CaveBot.setEndLureSettings(creaturesToStop, creaturesToLeave, tryWalkToCenter)

--- Define as configurações de gravação automática para o sistema de CaveBot.
--- Todos os parâmetros abaixo são baseados na seção de Configurações de Gravação Automática na janela de configurações do CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotSetAutoRecorderSettings.
--- @param nodeDistance (number) - A distância para adicionar um novo Node/parada entre o último Node e o jogador.
--- @param type (number) - O tipo de gravação automática. 0 = Stand / 1 = Node.
function CaveBot.setAutoRecorderSettings(nodeDistance, type)

--- Define as configurações de Node para o sistema de CaveBot.
--- Todos os parâmetros abaixo são baseados na seção de Configurações de Node na janela de configurações do CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotSetNodeSettings.
--- @param nodeDistance (number) - A distância para considerar um Node.
function CaveBot.setNodeSettings(nodeDistance)

--- Adiciona uma área especial ao sistema de CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotAddSpecialArea.
--- Se você quiser desabilitar o alcance de wp, defina fromWp e toWp como 0.
--- @param x (number) - A coordenada x da área especial.
--- @param y (number) - A coordenada y da área especial.
--- @param z (number) - A coordenada z da área especial.
--- @param type (number) - O tipo da área especial. Consulte o valor como Enums.SpecialAreaType.
--- @param width (number) - A largura da área especial.
--- @param height (number) - A altura da área especial.
--- @param fromWp (number) - O ID do waypoint inicial da área especial.
--- @param toWp (number) - O ID do waypoint final da área especial.
--- @return (boolean) - Retorna true se os parâmetros forem válidos, caso contrário retorna false.
function CaveBot.addSpecialArea(x, y, z, type, width, height, fromWp, toWp)

--- Exclui uma área especial por um ID específico no sistema de CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotDeleteSpecialArea.
--- @param id (number) - O ID da área especial a ser excluída.
function CaveBot.deleteSpecialArea(id)

--- Limpa todas as áreas especiais no sistema de CaveBot.
--- Esta função é um wrapper em torno da função externa cavebotClearSpecialAreas.
function CaveBot.clearSpecialAreas()

--- Pausa o sistema do cavebot por um tempo específico em milissegundos.
-- Esta função é um wrapper para a função externa cavebotPause.
-- @param milliseconds (number) - O tempo para pausar o sistema do cavebot em milissegundos. Se o tempo especificado for 0, o cavebot irá continuar.
function CaveBot.pause(milliseconds)

--- Salva todos os waypoints em um arquivo.
-- Esta função é um wrapper para a função externa cavebotSaveFile.
-- @param fileName (string) - O nome do arquivo para salvar os waypoints. O caminho é relativo ao diretório Documents/ZeroBot.
-- @return (boolean) - Retorna verdadeiro se a ação for bem-sucedida, ou falso se o nome do arquivo for inválido. Lembre-se: esta função não retornará o resultado do salvamento do arquivo.
function CaveBot.save

File(fileName)

--- Carrega todos os waypoints de um arquivo.
-- Esta função é um wrapper para a função externa cavebotLoadFile.
-- @param fileName (string) - O nome do arquivo para carregar os waypoints. O caminho é relativo ao diretório Documents/ZeroBot.
function CaveBot.loadFile(fileName)
```
