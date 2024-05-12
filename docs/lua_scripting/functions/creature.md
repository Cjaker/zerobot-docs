---
sidebar_position: 13
---

# Creature
Overall creature functions

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

### Code

```lua
--- Constructor for the Creature class
-- @param creatureId The ID for the creature
-- @return A new Creature object
function Creature.new(creatureId)

--- Get the creature's ID.
-- @return The creature's ID
function Creature:getId()

--- Get the creature's type.
-- @return The creature's type, refer the returned value as Enums.CreatureTypes
function Creature:getType()

--- Get the creature's type.
-- This function gets the creature's type.
-- @return The creature's type, refer the returned value as Enums.CreatureTypes
function Creature:getName()

--- Get the creature's health as a percentage.
-- @return The creature's health as a percentage
function Creature:getHealthPercent()

--- Get the creature's guild emblem.
-- @return The creature's guild emblem, refer the returned value as Enums.GuildEmblem
function Creature:getGuildEmblem()

--- Get the creature's party icon.
-- @return The creature's party icon, refer the returned value as Enums.PartyIcons
function Creature:getPartyIcon()

--- Get the creature's vocation.
-- @return The creature's vocation, refer the returned value as Enums.Vocations
function Creature:getVocation()

--- Get the direction the creature is facing.
-- @return The direction the creature is facing, refer the returned value as Enums.Directions
function Creature:getDirection()

--- Get the creature's position.
-- @return The creature's position as table, following the format {x=0,y=0,z=0}
function Creature:getPosition()

--- Get the creature's speed.
-- @return The creature's speed
function Creature:getSpeed()

--- Get the creature's outfit.
-- @return The creature's outfit as table, following the format:
-- { type = 0, typeEx = 0, head = 0, body = 0, legs = 0, feet = 0, addons = 0, mountId = 0, mountHead = 0, mountLegs = 0, mountFeet = 0 }
function Creature:getOutfit()

--- Get the creature's skull type.
-- @return The creature's skull type, refer the returned value as Enums.Skulls
function Creature:getSkull()

--- Get the creature's icon.
-- @return The creature's icon, refer the returned value as Enums.CreatureIcons
function Creature:getIcon()
```