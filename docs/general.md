# ZeroBot overview

ZeroBot is organized into modules that can be configured and enabled independently. Available controls and conditions can vary with the game-client version and the selected OTServer, so validate a new profile on the target server before unattended use.

## Overview

![Overview](/img/overview/overview.png "Overview")

The **Overview** tab displays character information and includes **Outfit Changer**. Outfit changes made there are local to the client; they do not change the server-side outfit seen by other players.

## Healing

![Healing](/img/overview/healing.png "Healing")

**Healing** evaluates the character state and executes configured spells or items when their conditions match. A rule may include HP/MP ranges and status conditions such as Drunk, Rooted, Feared, or Paralyzed.

Order and overlapping ranges matter: if several rules can match at the same time, configure their priorities deliberately and test the result. The server may also enforce cooldowns or action-rate limits independently of ZeroBot.

Example ranges:

- cast a healing spell below a chosen HP percentage;
- use one potion for a critical range and another for a higher range;
- restrict a rule by MP or character condition.

## Heal Friend

![Heal Friend](/img/overview/heal-friend.png "Heal Friend")

**Heal Friend** applies configured healing actions to eligible players, such as party members or creatures visible on screen, according to the selected source and health conditions. The information available depends on what the current client exposes.

## Conditions

![Conditions](/img/overview/conditions.png "Conditions")

**Conditions** automates spell maintenance or removal according to configured state, HP, and MP requirements. Examples include haste, invisibility, regeneration, and magic-shield spells. Use the spell names and behavior supported by the target server.

## Hunting

### Targeting

![Targeting](/img/overview/targeting.png "Targeting")

**Targeting** defines how the bot selects and moves around configured creatures. Rules may include creature names, priority, combat mode, and HP range. Route and movement results depend on the map data and creature state received by the client.

### Magic Shooter

![Magic Shooter](/img/overview/magic-shooter.png "Magic Shooter")

**Magic Shooter** executes configured attack spells or runes when their target, resource, count, and other conditions match. Game cooldowns and server restrictions still apply.

### CaveBot

![CaveBot](/img/overview/cavebot.png "CaveBot")

**CaveBot** executes a waypoint route with movement, interaction, lure, label, and script actions. Its **Auto Recorder** creates supported waypoints while you play, and its **Debug HUD** helps inspect the route and movement decisions.

See [Getting started with CaveBot](./cavebot/getting_started) for setup and safety guidance.

## Equipment

![Equipment](/img/overview/equipment.png "Equipment")

**Equipment** equips or removes configured items when HP, MP, character state, or other selected conditions match. Conflicting rules should use intentional priority and non-overlapping conditions.

## Tools

### Helper

![Helper](/img/overview/helper.png "Helper")

The **Helper** tab contains independent utilities such as coin conversion, food use, reconnection, and anti-idle behavior. Availability and effectiveness depend on the client and server.

### PvP

![PvP](/img/overview/pvp.png "PvP")

The **PvP** tab contains combat utilities such as equipment automation, Anti-Push, and Hold Target. Configure only the functions appropriate for the rules and mechanics of the server where they will run.

### HUD

![HUD](/img/overview/hud.png "HUD")

The built-in HUD can display the status of enabled modules and other bot information over the game. Lua scripts can create separate custom HUD elements through the [HUD API](./lua_scripting/functions/hud).

### Timer

![Timer](/img/overview/timer.png "Timer")

The Timer interface schedules configured actions after an interval. Lua scripts have a separate [`Timer` API](./lua_scripting/functions/timer) for recurring callbacks.

## Engine

![Engine](/img/overview/engine.png "Engine")

**Engine** contains global runtime options, delays, action-rate controls, script controls, and feature-specific integrations. Change one option at a time and test it; values that are safe on one OTServer may be rejected or behave differently on another.

## Scripting

![Scripting](/img/overview/scripting.png "Scripting")

The **Scripting** tab manages Lua scripts stored under `Documents/ZeroBot/Scripts`. Core libraries are loaded automatically. Start with [Lua scripting](./lua_scripting/) and use only APIs documented for the installed ZeroBot version.

## Settings

![Settings](/img/overview/settings.png "Settings")

**Settings** manages ZeroBot profiles saved in JSON format. Profiles can be associated with character names or hotkeys. Keep backups before replacing a working configuration or testing a profile made for another client/server combination.
