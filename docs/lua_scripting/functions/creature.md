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
Creature:getIcons()
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

--- Get the creature name.
-- This function gets the creature name
-- @return The creature name, if the creature doesn't exists anymore, returns nil
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

-- Get all creature icons. (Example: Hazard, Influenced...)
-- @return All creature icons, as a table, or nil if creature doesn't exists. Refer type as Enums.CreatureIconType. The id should be referred depending of type, please read Enums.CreatureIconType comments on enums.lua.
-- Sample output format:
-- {{type = 0,id = 16,count = 4},{type = 0,id = 17,count = 4},{type = 0,id = 18,count = 4}}
function Creature:getIcons()
```

<!-- current-core-api:start -->
## Multiple creature icons

`Creature:getIcons()` returns all icons currently attached to the creature, or `nil` if it no longer exists. The result is an array such as:

```lua
{
    { type = Enums.CreatureIconType.QUEST, id = 16, count = 4 },
    { type = Enums.CreatureIconType.MODIFIER, id = 1, count = 1 }
}
```

Interpret `id` with `Enums.CreatureQuestIcons` when `type` is `QUEST`, and with `Enums.CreatureIcons` when it is `MODIFIER`.
<!-- current-core-api:end -->
