---
sidebar_position: 12
---

# Spells
Overall spell functions

```lua
Spells.getIdByName(name)
Spells.getIdByWords(words)
Spells.getDataById(id)
Spells.isInCooldown(id)
Spells.getLeftCooldownTime(id)
Spells.getLeftGroupCooldownTime(groupId)
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

--- Get spell data by its ID.
--- This function is a wrapper around the external function spellGetDataById.
--- @param id (number) - The ID of the spell.
--- @return A table containing the spell data, or nil if there's no spell available. The table contains the following fields: id (number), name (string), words (string), primaryGroup (number), secondaryGroup (number), vocations (table). See Enums.Vocations for vocation IDs.
function Spells.getDataById(id)

--- Check if a spell is in cooldown.
-- This function is a wrapper around the external function spellIsInCooldown.
-- @param id (number) - The ID of the spell.
-- @return True if the spell is in cooldown, false otherwise.
function Spells.isInCooldown(id)

--- Get the left cooldown time of a specific spell.
-- This function is a wrapper around the external function spellGetLeftCooldownTime.
-- @param id (number) - The ID of the spell.
-- @return The left cooldown time of the spell, or -1 for following conditions: the spell doesn't exist, the spell is not in cooldown.
function Spells.getLeftCooldownTime(id)

-- Get the left cooldown time of a specific spell group.
-- This function is a wrapper around the external function spellGetLeftGroupCooldownTime.
-- @param groupId (number) - The ID of the spell group, refer to this parameter as Enums.SpellGroups
-- @return The left cooldown time of the spell group, or -1 for following conditions: the spell group doesn't exist, the spell group is not in cooldown.
function Spells.getLeftGroupCooldownTime(groupId)

--- Check if a spell group is in cooldown.
-- This function is a wrapper around the external function spellGroupIsInCooldown.
-- @param groupId (number) - The ID of the spell group, refer to this parameter as Enums.SpellGroups
-- @return True if the spell group is in cooldown, false otherwise.
function Spells.groupIsInCooldown(groupId)
```

<!-- current-core-api:start -->
## Spell data and group cooldown

- `Spells.getDataById(id)` returns `{id, name, words, primaryGroup, secondaryGroup, vocations}`, or `nil` for an unknown spell. Vocation IDs use `Enums.Vocations`.
- `Spells.getLeftGroupCooldownTime(groupId)` returns the remaining group cooldown in milliseconds. It returns `-1` when the group is unknown or is not on cooldown. Use `Enums.SpellGroups`.
<!-- current-core-api:end -->
