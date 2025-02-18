---
sidebar_position: 12
---

# Spells
Overall spell functions

```lua
Spells.getIdByName(name)
Spells.getIdByWords(words)
Spells.isInCooldown(id)
Spells.getLeftCooldownTime(id)
Spells.groupIsInCooldown(groupId)
```

### Code

```lua
--- Get the ID of a spell by its name.
-- This function is a wrapper around the external function spellGetIdByName.
-- @param name (string) - The name of the spell.
-- @return The ID of the spell, or -1 if there's no spell available.
function Spells.getIdByName(name)

--- Get the ID of a spell by its words.
-- This function is a wrapper around the external function spellGetIdByWords.
-- @param words (string) - The words of the spell.
-- @return The ID of the spell, or -1 if there's no spell available.
function Spells.getIdByWords(words)

--- Check if a spell is in cooldown.
-- This function is a wrapper around the external function spellIsInCooldown.
-- @param id (number) - The ID of the spell.
-- @return True if the spell is in cooldown, false otherwise.
function Spells.isInCooldown(id)

--- Get the left cooldown tiem of a specific spell.
-- This function is a wrapper around the external function spellGetLeftCooldownTime.
-- @param id (number) - The ID of the spell.
-- @return The left cooldown time of the spell, or -1 for following conditions: the spell doesn't exist, the spell is not in cooldown.
function Spells.getLeftCooldownTime(id)

--- Check if a spell group is in cooldown.
-- This function is a wrapper around the external function spellGroupIsInCooldown.
-- @param groupId (number) - The ID of the spell group, refer tthis parameter as Enums.SpellGroups
-- @return True if the spell group is in cooldown, false otherwise.
function Spells.groupIsInCooldown(groupId)
```