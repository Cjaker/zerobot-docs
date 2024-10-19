# 📚 ZeroBot - General
![Overview](https://zerobot.net/assets/images/1.png "Overview")

The **Overview** tab provides a basic view of your character, as well as includes the **Outfit Changer** feature.

![Outfit Changer](https://i.imgur.com/tIxJgWn.png "Outfit Changer")

The **Outfit Changer** allows Tibia players to customize their character's appearance locally, adding variety and fun to the game experience without affecting other players or the server's functionality.

# Healing
![Healing](https://zerobot.net/assets/images/2.png "Healing")

The **Healing** system of ZeroBot aims to keep the character alive in challenging situations, allowing the player to focus on other tasks within the game.

### Basic Features

**Health Monitoring:**  
The bot constantly monitors the character's hit points (HP), intercepting it before it appears on your client, using the fastest method because of being a critical action.

**Healing Threshold Configuration:**  
Users can set different HP thresholds to trigger healing actions, such as using a health potion when HP is below 70% or casting a healing spell when HP is below 30%.

**Types of Healing:**  
- **Potions:** The bot can use health potions when the HP reaches a certain level.
- **Spells:** The bot can automatically cast healing spells when HP falls below a certain value.
- **Special Items:** The bot can use special items with healing properties when configured.

**Priorities and Combinations:**  
Users can set priorities on which healing method to use first, such as giving preference to a spell over a potion.

### Advanced Features

**Hotkey Configuration:**  
The bot can be set up to activate/deactivate the Healing system using a hotkey, allowing for quick activation without navigating the menus.

**Conditional Healing Rules:**  
The bot can be programmed to heal based on conditions such as **Drunk**, **Rooted**, **Feared**, and more.

### Example Configuration
- **Exura Med Ico:** Use when HP < 80%
- **Exura Ico:** Use when HP > 80% and HP < 95%
- **Supreme Health Potion:** Use when HP < 40%
- **Ultimate Health Potion:** Use when HP > 40% and HP < 70%
- **Great Health Potion:** Use when HP > 70% and HP < 85%

# Heal Friend
![Heal Friend](https://zerobot.net/assets/images/3.png "Heal Friend")

The **Heal Friend** feature automates the process of healing other players.

- **Configuration:** Players define the conditions that trigger healing, such as the type of spell and the friend's health level.
- **Monitoring:** The bot monitors the friends' health and automatically heals when necessary.

This function is useful for maximizing group efficiency, keeping allies healed without manual intervention.

# Conditions
![Conditions](https://zerobot.net/assets/images/4.png "Conditions")

The **Conditions** tab allows configuring spells to be automatically renewed, such as:
- **Utani Hur:** Keeps the running spell active.
- **Utana Vid:** Renews Utana Vid when mana is above the defined value.
- **Utura/Utura Gran:** Renews after duration ends.
- **Utamo Vita:** Uses according to the player's HP percentage.
- **Exana Vita:** Uses to remove Utamo Vita.

Hotkeys can be configured to quickly activate/deactivate these actions.

# Hunting
## Targeting
![Targeting](https://zerobot.net/assets/images/5.png "Targeting")

The **Targeting** tab configures how the bot should focus on each creature. Some options include:
- **Priority:** Low, Medium, or High.
- **Mode:** Stand, Chase, Distance, or Diagonal.
- **HP %:** Defines the creature's HP percentage to activate targeting.

The targeting system can be activated/deactivated quickly by a hotkey.

## Magic Shooter
![Magic Shooter](https://zerobot.net/assets/images/55.png "Magic Shooter")

The **Magic Shooter** automates spell casting and runes usage against monsters. It includes:
- **Spell Configuration:** Defines which spells to use and under what conditions.
- **Targets and Conditions:** Configures monster names, mana/HP percentages, and monster count.

This system can be activated/deactivated with a hotkey.

## CaveBot
![CaveBot](https://zerobot.net/assets/images/10.png "CaveBot")

The **CaveBot** interface simplifies the addition and management of waypoints, supporting various actions such as using ropes or ladders.

Key features include:
- **Auto Recorder:** Automatically records waypoints, after version 1.7.6.4+ it will record more types of waypoints, being smarter.
- **Debug HUD:** Monitors the CaveBot’s operation.

The CaveBot can also be activated/deactivated as needed.

# Equipment
![Equipment](https://zerobot.net/assets/images/6.png "Equipment")

The **Equipment** function automatically switches the player's equipment based on conditions such as HP, MP, and status (e.g., Rooted or Paralyzed).

The system can be activated/deactivated quickly with a hotkey.

# Tools
## Helper
![Helper](https://zerobot.net/assets/images/7.png "Helper")

Features include:
- **Auto Change Coins:** Automatically converts coins to save space.
- **Eat Food:** Ensures the character is always fed.
- **Reconnect:** Automatically reconnects the player after a disconnection.
- **Anti-AFK:** Prevents the character from being disconnected for inactivity.

## PvP
![PvP](https://zerobot.net/assets/images/8.png "PvP")

The **PVP** tab automates the use of Stone Skin Amulet, Might Ring, and includes options like Anti-Push and Hold Target.

## HUD
![HUD](https://i.imgur.com/AXCHOUz.png "HUD")

Displays information about active modules such as Healing, Magic Shooter, and allies/enemies on the screen.

## Timer
![Timer](https://i.imgur.com/ARGeQlD.png "Timer")

The **Timer** can be used to send messages or use items after a set time.

# Engine
![Engine](https://i.imgur.com/KaKfF2m.png "Engine")

Allows adjustments to the bot's internal functioning, such as delays, hiding the ZeroBot button, and providing tools for calculating party gains and disabling scripts.

# Scripting
![Scripting](https://i.imgur.com/nrvnnqi.png "Scripting")

The **Script** tab stores LUA scripts that can be created or downloaded and placed in the Documents\ZeroBot\Scripts folder.

# Settings
![Settings](https://i.imgur.com/NfhFcdk.png "Settings")

The **Settings** tab stores profiles saved in .json format. It’s possible to associate profiles by character name or hotkeys, making it easy to switch without navigating the menus.