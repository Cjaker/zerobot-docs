---
sidebar_position: 10
---

# CaveBot
Overall cavebot useful functions

```lua
CaveBot.GoTo(labelName)
CaveBot.addWaypoint(waypointType, x, y, z)
CaveBot.insertWaypoint(wpId, waypointType, x, y, z)
CaveBot.replaceWaypoint(wpId, waypointType, x, y, z)
CaveBot.deleteWaypoint(wpId)
CaveBot.clearWaypoints()
CaveBot.selectWaypoint(wpId)
CaveBot.getSelectedWaypointId()
CaveBot.pause(milliseconds)
CaveBot.saveFile(fileName)
CaveBot.loadFile(fileName)
```

### Código
```lua
--- Vai para um waypoint específico com label no cavebot
-- Esta função é um wrapper para a função externa cavebotGoto.
-- @param labelName (string) - O nome do label do waypoint
function CaveBot.GoTo(labelName)

--- Adiciona um waypoint ao sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotAddWaypoint.
-- @param waypointType (number) - O tipo de waypoint a adicionar. Refira-se a waypointType como Enums.WaypointType
-- @param x (number) - A coordenada x do waypoint.
-- @param y (number) - A coordenada y do waypoint.
-- @param z (number) - A coordenada z do waypoint.
function CaveBot.addWaypoint(waypointType, x, y, z)

--- Insere um waypoint antes de um id específico no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotInsertWaypoint.
-- @param wpId (number) - O id do waypoint onde inserir antes.
-- @param waypointType (number) - O tipo de waypoint a adicionar. Refira-se a waypointType como Enums.WaypointType
-- @param x (number) - A coordenada x do waypoint.
-- @param y (number) - A coordenada y do waypoint.
-- @param z (number) - A coordenada z do waypoint.
function CaveBot.insertWaypoint(wpId, waypointType, x, y, z)

--- Substitui um waypoint por um id específico no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotReplaceWaypoint.
-- @param wpId (number) - O id do waypoint para substituir.
-- @param waypointType (number) - O tipo de waypoint a adicionar. Refira-se a waypointType como Enums.WaypointType
-- @param x (number) - A coordenada x do waypoint.
-- @param y (number) - A coordenada y do waypoint.
-- @param z (number) - A coordenada z do waypoint.
function CaveBot.replaceWaypoint(wpId, waypointType, x, y, z)

--- Deleta um waypoint por um id específico no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotDeleteWaypoint.
-- @param wpId (number) - O id do waypoint para deletar.
function CaveBot.deleteWaypoint(wpId)

--- Limpa todos os waypoints no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotClearWaypoints.
function CaveBot.clearWaypoints()

--- Seleciona um waypoint por um id específico no sistema do cavebot.
-- Esta função é um wrapper para a função externa cavebotSelectWaypoint.
-- @param wpId (number) - O id do waypoint para selecionar.
function CaveBot.selectWaypoint(wpId)

--- Obtém o id do waypoint selecionado.
-- Esta função é um wrapper para a função externa cavebotGetSelectedWaypointId.
-- @return (number) - Retorna o id do waypoint se houver um selecionado, caso contrário retorna -1.
function CaveBot.getSelectedWaypointId()

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
