---
sidebar_position: 12
---

# Spells
Funções gerais de spells

```lua
Spells.getIdByName(name)
Spells.getIdByWords(words)
Spells.isInCooldown(id)
Spells.getLeftCooldownTime(id)
Spells.groupIsInCooldown(groupId)
```

### Código

```lua
--- Obtém o ID de um feitiço pelo seu nome.
-- Esta função é um invólucro em torno da função externa spellGetIdByName.
-- @param name (string) - O nome do feitiço.
-- @return O ID do feitiço, ou -1 se não houver feitiço disponível.
function Spells.getIdByName(name)

--- Obtém o ID de um feitiço pelas suas palavras.
-- Esta função é um invólucro em torno da função externa spellGetIdByWords.
-- @param words (string) - As palavras do feitiço.
-- @return O ID do feitiço, ou -1 se não houver feitiço disponível.
function Spells.getIdByWords(words)

--- Verifica se um feitiço está em cooldown.
-- Esta função é um invólucro em torno da função externa spellIsInCooldown.
-- @param id (number) - O ID do feitiço.
-- @return True se o feitiço estiver em cooldown, caso contrário, false.
function Spells.isInCooldown(id)

--- Obtém o tempo restante de cooldown de um feitiço específico.
-- Esta função é um invólucro em torno da função externa spellGetLeftCooldownTime.
-- @param id (number) - O ID do feitiço.
-- @return O tempo restante de cooldown do feitiço, ou -1 para as seguintes condições: o feitiço não existe, o feitiço não está em cooldown.
function Spells.getLeftCooldownTime(id)

--- Verifica se um grupo de feitiços está em cooldown.
-- Esta função é um invólucro em torno da função externa spellGroupIsInCooldown.
-- @param groupId (number) - O ID do grupo de feitiços, consulte o valor do parâmetro como Enums.SpellGroups
-- @return True se o grupo de feitiços estiver em cooldown, caso contrário, false.
function Spells.groupIsInCooldown(groupId)
```