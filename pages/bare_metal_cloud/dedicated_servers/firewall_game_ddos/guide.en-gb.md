title: "Protecting a game server with the application firewall"
excerpt: "Learn how to configure the OVHcloud GAME DDoS firewall"
updated: 2024-09-23
---

## Objective

This guide's objective is to help you better understand our GAME DDoS protection (GAME firewall) and to provide instructions on how to configure effective protection for servers that support it.

> [!primary]
> Find more information on our GAME DDoS protection on our website: <https://www.ovhcloud.com/en-gb/security/game-ddos-protection/>.
> 

Our dedicated Bare Metal gaming servers include a DDoS protection specifically designed to secure gaming applications against targeted attacks, ensuring stability and accessibility for gamers. This dedicated protection solution is both robust and easy to use, allowing you to focus on developing your business without the distraction of defending against cybercrime.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Anti-DDoS infrastructure & game protection services diagram at OVHcloud |

## Requirements

- An [OVHcloud **Game** dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/prices/#filterType=range_element&filterValue=game#filterType=range_element&filterValue=game)
- Access to the [OVHcloud Control Panel](/links/manager)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-gb/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-gb/compare/) for more information.

## Instructions

### Introduction

The Anti-DDoS infrastructure, together with the Edge Network firewall, keeps the network safe from common threats (mostly focused on ISO OSI layers 3 and 4). On the other hand, hosting gaming applications can be a challenging experience in terms of network security. GAME DDoS Protection is here to help - this is a Layer 7 (application) firewall focused on protecting specific gaming protocols. Its main advantages are:

- **Low latency**: We know that latency and its stability is crucial for online gaming. These solutions are put as close as possible to the servers and work together with a high-performance hardware.
- **2-way**: The platform analyses incoming and outgoing traffic for best understanding of every player's situation.
- **Instant**: It can distinguish real players from harmful attacks on a server from the very first network packets.
- **Always-on**: The ability to detect and stop attacks ensures a smooth experience for sensitive gaming applications without any disruptions and latency changes.

### Enabling and configuring GAME DDoS Protection

> [!primary]
> The GAME firewall protects the IP associated with a server. As a result, if you have a server with multiple IP addresses (i.e. Additional IP addresses), you need to configure each of them separately.
>

To configure game protection rules for your Bare Metal game server, log in to the OVHcloud Control Panel and follow these steps:

- Click the `Bare Metal Cloud`{.action} tab.
- Go to `Network`{.action} in the left-hand sidebar.
- Open `IP`{.action}.

You can filter IP listing by using `All services`{.action} drop-down field and type-in name/category of your corresponding server there:
| ![configure-game-firewall](images/ip_listing.png) |

Then, for the selected IP, navigate to the GAME firewall configuration:
| ![game-server](images/firewall_game_01_blur.png) |
|:--:|
| Click on the `...`{.action} button next to the IP address of your game server. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Click on `Configure the GAME firewall`{.action}. |

Now, you can configure game protection rules for such IP address.

> [!primary]
> It is important to note that GAME DDoS protection will not take any action unless game rules are configured.
> 

So, to enable GAME DDoS Protection, simply define game applications and network port range (or single port) on which such applications work:

| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| On the following screen, click the `Add a rule`{.action} button to add a rule to the GAME firewall. |


GAME firewall allows you to configure up to **100 rules per IP address** that points to the game server (the 3rd gen. of Bare Metal game servers released in 2024 release), or up to **30 rules per IP address** for the older Bare Metal game ranges. 

Please note that supported gaming protocols (game titles and versions that can be protected) may change over a time. Moreover, they can be different between older Bare Metal game server ranges and the newer ones. The most recent list of supported game profiles can be found [here](https://www.ovhcloud.com/en-gb/security/game-ddos-protection/).


| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Configure game protections by selecting specific **Protocol** from the list and defining **port-range** on which your gaming application is receiving connections (please reffer to your game configuration manual) and click on the `Confirm`{.action} button to save. You have now successfully configured GAME firewall rules. |

Game protections must not overlap in terms of ports defined.

Option **other** may be selected if other applications are hosted on specific port(s) (for which there is no available protection) to let the customer traffic to pass-through. Please note that there is not much added security for the traffic matching rule "other" and it should be used with caution.

Also, we strongly recommend to set **"Default policy = DROP"** on every IP pointing to your game server. That option will let GAME DDoS Protection to drop traffic that doesn't match any of defined rules. Saying it differently: all listed game application will be protected and nothing else will be able to reach out to your server.

> [!warning]
> GAME DDoS Protection takes effect after the [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). For both to work properly, the Edge Network Firewall cannot be too strict and needs to pass traffic to the GAME DDoS Protection. 
>

### Game-specific notices

#### Ark Survival Evolved

- **Ark Survival Evolved** - basic protection engine
- **Ark Survival Evolved v.311.78** - updated protection engine, added in the 3rd gen. of Bare Metal game servers (2024 release).

#### Counter Strike 2

- **Counter Strike 2** - new protecion engine added in the 3rd gen. of Bare Metal game servers (2024 release).

#### FiveM

- **FiveM** is Grant Theft Auto V multiplayer mod by Cfx.re which is now recognized by Rockstar game publisher. We added FiveM support in the 3rd gen. of Bare Metal game servers (2024 release).

#### Rust

- **Rust** is supported with a dedicated protection profile on all generations of Bare Metal game servers. Please note that we refreshed this protection profile (i.e.: added RakNet cookies support) in the 3rd gen. of Bare Metal game servers (2024 release).
You can read more about hosting Rust on OVHcloud servers [here](https://www.ovhcloud.com/en-gb/bare-metal/game/rust-server/).

#### Minecraft

Minecraft is well supported by the following profiles:

- **Minecraft Java** - should be the best fit for all Minecraft Java versions. Protects Minecraft Query protocol behind, but it's also tuned for bigger traffic volumes.
- **Minecraft Query** - general Minecraft Query protocol protection.
- **Minecraft Bedrock** - Minecraft Bedrock protection (with RakNet cookie support).
- **Minecraft Pocket Edition** - Minecraft Pocket Edition protection.

#### Valheim

- **Valheim** - new protecion engine added in the 3rd gen. of Bare Metal game servers (2024 release). 

> [!primary]
> If you host bigger service with one of the supported games, but still observe false-positives from Anti-DDoS Infrastructure systems, please reach our support using the [Help Centre](https://help.ovhcloud.com/csm?id=csm_get_help) with all the details to tune up the application profile.
>

### Using Additional IPs with game dedicated servers

Additional IPs are offering a flexible way to manage your services across a variety of servers or services behind. They bring value also for your game-hosting infrastructure allowing to manage scalability or failover actions without an impact on public IP addresses. Also, with Additional IPs you can define different IP geolocation or even leverage your own IP block (using BYOIP service) with OVHcloud game range servers.

While Additional IPs are bringing flexibility, there are situations that require some additional attention.

#### GAME DDoS Protection is specific to the game server, but configured on per-IP basis

To provide the most flexibility of configuration, different gaming protection rules can be set on different Additional IPs pointing to the same Bare Metal game server.
Maximum number of such rules and available protection settings are defined on per-IP-address basis, but are specific to the particular Bare Metal game server generation behind. 

Differences may be observed between: the newer game servers (3rd gen. of game Bare Metal servers, 2024 release) and the older game servers (previous generations of game Bare Metal, usually seen as Eco ranges).

#### Moving Additional IP between servers

While static configuration may be pretty simple, Additional IP moving actions may require few comments.

Moving an IP from older generation of Bare Metal game server to newer generation will be transparent and result in keeping all rules and IP settings.

Moving an IP from newer Bare Metal game server to the older generation will:
- keep backward compatible rules (same profile name)
- copy arkSurvivalEvolvedV311.78+ profile configuration into arkSurvivalEvolved (older one)
- delete all other rules that are not supported on the older generation of Bare Metal game server

Moving an IP from Bare Metal game server to a non-game server (or other services) will remove all GAME DDoS Protection rules from such IP as they are not supported outside Bare Metal game ranges.

## FAQ

### Can I use GAME firewall on other ranges than Bare Metal game servers?

No, GAME firewall is only available for our Bare Metal game dedicated servers.

### Can I disable GAME firewall protection?

This is possible, but not recommended. You can do it by removing all game protocol rules from the configuration and disabling `Default policy: Drop`.

### My game is not on the supported protocol list, what can I do?

You can propose your need on our [infrastructure solutions roadmap on GitHub](https://github.com/orgs/ovh/projects/16/views/14). This will help us to decide on prioritisation of the next features to be developed.

### While having configured my game with appropriate ports and default policy to drop, I still receive attacks that are impacting my game server. What to do?

For that you will need to share relevant network traffic dumps as examples for such attacks (*.pcap* file) and request protection tuning of your profile. This can be done using our [Help Centre](https://help.ovhcloud.com/csm?id=csm_get_help).

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
