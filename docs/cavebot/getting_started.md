---
sidebar_position: 1
---

# Getting Started

Test a new route with a character and location where an incorrect movement, floor change, or server rate limit will not cause a significant loss. OT servers can differ in map items, movement rules, action limits, and protocol behavior.

## Brief Explanation

CaveBot follows a list of waypoints. A waypoint can describe a destination, a floor-change action, a lure transition, a label/jump, or a Lua script.

CaveBot handles navigation; combat and survival behavior must be configured separately through modules such as Healing, Targeting, Magic Shooter, and Equipment.

## Recommendations

- Reveal the required minimap area before testing the route.
- Start with a conservative **Actions Per Second** value. Increase it only if ZeroBot is visibly waiting on its own action limiter and the server permits the higher rate; decrease it if the server rate-limits or disconnects the character. A character's level alone does not determine the correct value.
- Use enough `Stand` or `Node` waypoints to keep long paths and floor transitions unambiguous.
- Use `Start Lure` and `End Lure` only for routes that intentionally use the regular lure flow. Dynamic Lure has separate compatibility rules in [CaveBot Settings](./interface/cavebot_settings#lure-settings).
- Keep important waypoints away from unintended holes, teleports, and other floor changes whenever possible.
- Use the dedicated `Rope`, `Ladder`, `Hole`, `Use`, `Door`, and `Machete` types for their respective map interactions.
- Save the route before enabling it and after any important change. If **Encrypt CaveBot on Save** is enabled, also keep an unencrypted backup because the encrypted file cannot be converted back by the interface.
- Use a Script waypoint only when a dedicated waypoint type cannot express the action. Keep waits short and clean up every event and timer created by the script.
- Test the complete loop, including refill, selling, death/reconnect behavior, and the return path.

## Targeting Recommendations

Targeting settings depend on the vocation, speed, terrain, creature behavior, and OT server.

- **Auto distance** lets the targeting logic choose its movement distance.
- **Fixed distance** uses the configured distance as its target.
- **Stand** avoids distance movement and is appropriate when the character should hold position.

Treat any shared profile as a starting point. Verify it in the actual hunting area before leaving CaveBot unattended.
