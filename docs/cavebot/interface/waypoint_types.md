---
sidebar_position: 1
---

# Waypoint Types
<div class="text--center"> 
  <img src="/img/waypoint_type.png?v=2" alt="CaveBot waypoint type selector" />
  <p>CaveBot Waypoint Types</p>
</div>
**Stand** -> forces your character to step on that position

**Node** -> considers the waypoint reached within the configured **Node Distance**

**Start Lure** -> activates the regular lure flow when the character reaches the waypoint range

**End Lure** -> applies the configured End Lure conditions after the character reaches the waypoint range

**Dynamic Start** -> activates the waypoint-based dynamic lure flow

**Dynamic End** -> ends the waypoint-based dynamic lure flow

**Rope** -> uses any tool that functions as a rope at the specific position

**Ladder** -> uses any ladder-type item to climb up at the specific position

**Hole** -> uses any tool that works to dig the hole at the specific position

**Use** -> uses the top item selected by the client at the specific position

**Teleport** -> moves your character to the teleport at the specific position, with checks to ensure teleportation

**Label** -> names the waypoint (useful for organization and for Goto type waypoints). **To edit the waypoint, just double-click on it**

**Goto** -> jumps to some waypoint by its name (remember the Label? That’s why). **To edit the waypoint, just double-click on it**

**Script** -> executes script upon activating this type of waypoint. **To edit the waypoint, just double-click on it**

**Door** -> opens or closes a door at the waypoint's position

**Hur Up** -> uses the exani hur "up" spell at the waypoint's position

**Hur Down** -> uses the exani hur "down" spell at the waypoint's position

**Machete** -> uses an available machete tool on cuttable grass at the waypoint's position

## Quick action buttons

The CaveBot Options window also provides **Sell Loot** and **Refill** buttons. They are helpers, not additional values in `Enums.WaypointType`: each button creates a Node followed by a generated Script waypoint.

- **Sell Loot** uses the current Sell List and sells non-equipped matching items through an open NPC shop.
- **Refill** uses the current Refill List. Each entry has the format `{id=268,min=100,max=500}`.

Review the generated script and test it with the target NPC. NPC dialogs, item availability, prices, and action limits can differ between OT servers.
