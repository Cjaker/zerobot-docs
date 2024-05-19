---
sidebar_position: 13
---

# Creature
Funções gerais da criatura

```lua
Creature(creatureId)
Creature.new(creatureId)
Creature:getId()
Creature:getType()
Creature:getName()
Creature:getHealthPercent()
Creature:getGuildEmblem()
Creature:getPartyIcon()
Creature:getVocation()
Creature:getDirection()
Creature:getPosition()
Creature:getSpeed()
Creature:getOutfit()
Creature:getSkull()
Creature:getIcon()
```

### Código

```lua
--- Construtor para a classe Creature
-- @param creatureId O ID da criatura
-- @return Um novo objeto Creature
function Creature.new(creatureId)

--- Obtém o ID da criatura.
-- @return O ID da criatura
function Creature:getId()

--- Obtém o tipo da criatura.
-- @return O tipo da criatura, consulte o valor retornado como Enums.CreatureTypes
function Creature:getType()

--- Obtém o nome da criatura.
-- Esta função obtém o nome da criatura.
-- @return O nome da criatura
function Creature:getName()

--- Obtém a saúde da criatura como uma porcentagem.
-- @return A saúde da criatura como uma porcentagem
function Creature:getHealthPercent()

--- Obtém o emblema da guilda da criatura.
-- @return O emblema da guilda da criatura, consulte o valor retornado como Enums.GuildEmblem
function Creature:getGuildEmblem()

--- Obtém o ícone da party da criatura.
-- @return O ícone da party da criatura, consulte o valor retornado como Enums.PartyIcons
function Creature:getPartyIcon()

--- Obtém a vocação da criatura.
-- @return A vocação da criatura, consulte o valor retornado como Enums.Vocations
function Creature:getVocation()

--- Obtém a direção que a criatura está enfrentando.
-- @return A direção que a criatura está enfrentando, consulte o valor retornado como Enums.Directions
function Creature:getDirection()

--- Obtém a posição da criatura.
-- @return A posição da criatura como uma tabela, seguindo o formato {x=0, y=0, z=0}
function Creature:getPosition()

--- Obtém a velocidade da criatura.
-- @return A velocidade da criatura
function Creature:getSpeed()

--- Obtém o outfit da criatura.
-- @return O outfit da criatura como uma tabela, seguindo o formato:
-- { type = 0, typeEx = 0, head = 0, body = 0, legs = 0, feet = 0, addons = 0, mountId = 0, mountHead = 0, mountLegs = 0, mountFeet = 0 }
function Creature:getOutfit()

--- Obtém o tipo de skull da criatura.
-- @return O tipo de skull da criatura, consulte o valor retornado como Enums.Skulls
function Creature:getSkull()

--- Obtém o ícone da criatura.
-- @return O ícone da criatura, consulte o valor retornado como Enums.CreatureIcons
function Creature:getIcon()
```