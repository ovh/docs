---
title: "How to protect a Game server with the application firewall"
excerpt: "Learn how to configure the OVHcloud Game DDoS Protection firewall"
updated: 2024-10-24
---

## Objective

This guide's objective is to help you better understand our Game DDoS Protection (also known as *Game firewall*) and to provide instructions on how to configure effective protection.

> [!primary]
> Find more information on our [Game DDoS Protection on our website](/links/security/ddos).
> 

Our dedicated Bare Metal gaming servers include an additional network attack protection specifically designed to secure gaming applications against targeted attacks, ensuring stability and accessibility for gamers. This dedicated protection solution is both robust and easy to use, allowing you to focus on developing your business without the distraction of defending against cybercrime.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Anti-DDoS infrastructure & game protection services diagram at OVHcloud |

## Requirements

- An [OVHcloud **Game** dedicated server](/links/bare-metal/bare-metal/game)
- Access to the [OVHcloud Control Panel](/links/manager)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](/links/bare-metal/eco-about).
>
> Please visit our [comparison page](/links/bare-metal/eco-compare) for more information.

## Instructions

### Introduction

The Anti-DDoS Infrastructure, together with the Edge Network firewall, keeps the network safe from common threats (mostly focused on ISO OSI layers 3 and 4). Hosting gaming applications however can be a challenging experience in terms of network security. **Game DDoS Protection** is here to help - this is a Layer 7 (application) firewall focused on protecting specific gaming protocols. Its main advantages are:

- **Very low latency**: We know that latency and its stability is crucial for online gaming. These solutions are put as close as possible to the servers and work together with a high-performance hardware.
- **2-way**: The platform analyses incoming and outgoing traffic for best understanding of every player's situation.
- **Instant**: It can distinguish real players from harmful attacks on a server from the very first network packets.
- **Always-on**: The ability to detect and stop attacks ensures a smooth experience for sensitive gaming applications without any disruptions and latency changes.

### Enabling and configuring Game DDoS Protection

> [!primary]
> The *Game firewall* protects the IP associated with a server. As a result, if you have a server with multiple IP addresses (i.e. [Additional IP addresses](/links/network/additional-ip)), you need to configure each of them separately.
>

To configure game protection rules for your Bare Metal Game server, log in to the OVHcloud Control Panel and follow these steps:

- Click the `Bare Metal Cloud`{.action} tab.
- Go to `Network`{.action} in the left-hand sidebar.
- Open `IP`{.action}.

You can filter IP addresses by using the `All services`{.action} drop-down menu. Enter the name or category of the corresponding server:  
| ![configure-game-firewall](images/ip_listing.png) |
|:--:|
| IP listing: Find your IP address by corresponding service |

Navigate to the *Game firewall* configuration:  
| ![game-server](images/firewall_game_01_blur.png) |
|:--:|
| Click on the `...`{.action} button next to the IP address of your Game server. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Click on `Configure the GAME firewall`{.action}. |

Now you can configure game protection rules for the selected IP address.

> [!primary]
> It is important to note that Game DDoS Protection will not take any action unless game rules are configured.
> 

To enable Game DDoS Protection, simply define game applications and their associated network port range (or single port):

| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| On the following screen, click the `Add a rule`{.action} button to add a rule to the *Game firewall*. |


Game DDoS Protection allows you to configure up to **100 rules per IP address** that points to a 3rd generation Bare Metal Game server (servers released in 2024 or later), or up to **30 rules per IP address** for the older Bare Metal game ranges (usually identified as RISE-GAME or SYS-GAME).

Please note that supported gaming protocols (game titles and versions that can be protected) may change over time. Moreover, they can be different between older Bare Metal Game server ranges and the newer ones. The most recent list of supported game profiles can be found [here](/links/security/ddos).

| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Configure game protections by selecting a **Protocol** from the list and defining the **port-range** on which your gaming application is receiving connections (please refer to the game's setup documentation). Then click on the `Confirm`{.action} button to save. You have now successfully configured *Game firewall* rules. |

*Game firewall* protection rules must not overlap in terms of ports defined.

The option **Other** may be selected for applications hosted on specific ports (for which there is no available protection) to let client traffic pass through. Please note that there is not much added security for the traffic matching the rule **Other** and it should be used with caution.

Also, we strongly recommend to set the rule **"Default policy = DROP"** on every IP pointing to your Game server. That option will allow Game DDoS Protection to drop any traffic not matching the defined rules, i.e. all listed game applications will be protected and no other connections will be able to reach your server.

> [!warning]
> Game DDoS Protection takes effect after the rules defined in the [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). For both to work properly, the Edge Network Firewall cannot be too strict and needs to pass traffic to the Game DDoS Protection.
>

### Game-specific notices

#### Ark Survival Evolved

- **Ark Survival Evolved**: Basic protection engine
- **Ark Survival Evolved v.311.78**: Updated protection engine, added in the 3rd gen. of Bare Metal Game servers (2024 release)

#### Counter Strike 2

- **Counter Strike 2**: New protection engine added in the 3rd gen. of Bare Metal Game servers (2024 release)

#### FiveM

- **FiveM** is a Grand Theft Auto V multiplayer mod by Cfx.re which is now recognized by the game publisher Rockstar. We added FiveM support in the 3rd gen. of Bare Metal Game servers (2024 release).

#### Rust

- **Rust** is supported with a dedicated protection profile on all generations of Bare Metal Game servers. Please note that we updated this protection profile (i.e. added RakNet cookies support) for the 3rd gen. of Bare Metal Game servers (2024 release).  
You can read more about hosting Rust on OVHcloud servers [here](/links/bare-metal/bare-metal/game-rust).

#### Minecraft

Minecraft is well supported by the following profiles:

- **Minecraft Java**: Should be the best fit for all Minecraft Java versions. It protects the Minecraft Query protocol and is tuned for TCP traffic. It was added in 2024 but is also available for previous generations of Bare Metal Game servers. Use with caution if other UDP games are hosted on the same IP. 
- **Minecraft Query**: General Minecraft Query protocol protection.
- **Minecraft Bedrock**: Minecraft Bedrock protection (with RakNet cookies support), added in the 3rd gen. of Bare Metal Game servers (2024 release).
- **Minecraft Pocket Edition**: Minecraft PE/Bedrock protection.

#### Valheim

- **Valheim**: New protecion engine, added in the 3rd gen. of Bare Metal Game servers (2024 release). 

> [!primary]
> If you host a bigger service with one of the supported games, but still observe false positives from Anti-DDoS Infrastructure systems, please reach out to our support using the [Help Centre](https://help.ovhcloud.com/csm?id=csm_get_help) with all the details to tune up the application profile.
>

### Using Additional IPs with Game dedicated servers

Additional IPs are offering a flexible way to manage your applications across multiple servers or hosted services. They provide value for your game-hosting infrastructure by allowing to manage scalability or failover actions without an impact on public IP addresses. With Additional IPs you can also define different geographical IP locations or even leverage your own IP block (using the BYOIP service) for OVHcloud Game servers.

While Additional IPs are enabling flexibility, there are situations that require some additional attention.

#### Per-IP configuration specific to a Game server generation

To provide the most flexibility of configuration, different gaming protection rules can be set on different Additional IPs pointing to the same Bare Metal Game server.  
The maximum number of rules and available protection settings are defined on a per-IP address basis, but are specific to the particular Bare Metal Game server generation behind the firewall.

Differences may be observed between the newer Game servers (3rd gen. of Game Bare Metal servers, released in 2024) and the older Game servers (previous generations, usually identified as RISE-GAME or SYS-GAME).

##### Veryfying supported game protections

All supported Game DDoS Protection protocols for a specific server are visible on the `GAME firewall`{.action} configuration page for any IP address pointing to that server, in the `Game protocol`{.action} drop-down menu:

| ![control-panel-game-protocols](images/game_protocols_list.png) |
|:--:|
| List of supported protection protocols |

If you prefer automation, protocol details can be retrieved using the OVHcloud APIv6:

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/game/{ipOnGame}
>

API response example:

```python
{
    ipOnGame: "1.2.3.4"
    maxRules: 30
    state: "ok"
    firewallModeEnabled: true
  - supportedProtocols: [
        "arkSurvivalEvolved"
        "arma"
        "gtaMultiTheftAutoSanAndreas"
        "gtaSanAndreasMultiplayerMod"
        "hl2Source"
        "minecraftPocketEdition"
        "minecraftQuery"
        "mumble"
        "other"
        "rust"
        "teamspeak2"
        "teamspeak3"
        "trackmaniaShootmania"
    ]
}
```


#### Moving an Additional IP between servers

While a static rule set configuration may be self-explanatory, Additional IP moving actions may require a few comments.

**Moving an IP from an old generation to a new generation of Bare Metal Game servers:**  
    - The process is transparent and all protection rules and IP settings will be kept.

**Moving an IP from a new generation to an old generation of Bare Metal Game servers:** 
    - If the destination server supports less protection rules than the origin one, an error will be displayed and the action will be stopped.
    - Otherwise:
        - Backward compatible rules are kept (protection profile name must equal).
        - Rules that are not supported on the destination server will be removed.
    
**Moving an IP from a Bare Metal Game server to other servers or services:**  
    - All Game DDoS Protection rules applied to the IP will be deleted, as they are not supported outside Bare Metal Game servers.


## FAQ

### Can I use Game DDoS Protection on other ranges than Bare Metal Game servers?

No, Game DDoS Protection is only available for our Bare Metal Game dedicated servers.

### How can I ensure automation to work for an Additional IP between a new and an old generation of Bare Metal Game servers?

You can either limit your protection rules to 30 per IP or configure your automation scripts so they can remove and add rules before and after moving an IP to another server. We recommend to use the latest generation of Bare Metal Game servers as they come with many improvements.

### Can I disable Game DDoS Protection?

This is possible, but not recommended. You can do it by removing all game protocol rules from the configuration and disabling the entry `Default policy: DROP`.

### My game is not on the supported protocol list, what can I do?

You can propose your need on our [infrastructure solutions roadmap on GitHub](https://github.com/orgs/ovh/projects/16/views/14). This will help us to decide on prioritization of the next features to be developed.

### While having configured my game with appropriate ports and default policy to drop, I still receive attacks that are impacting my Game server. What to do?

You will need to share relevant network traffic dumps as examples for such attacks (*.pcap* file) in order to request protection tuning of your profile. To do this, please log in to our [Help Centre](https://help.ovhcloud.com/csm?id=csm_get_help).

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).