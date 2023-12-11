---
title: "Protecting a GAME server with the application firewall"
excerpt: "Learn how to configure the GAME DDoS firewall"
updated: 2023-09-20
---

## Objective

This guide's objective is to help you better understand our Game DDoS Protection (Game Firewall) and to provide instructions on how to configure effective protection for servers that support it.

> [!primary]
> Find more information on our Game DDoS Protection on <https://www.ovhcloud.com/en/security/game-ddos-protection/>.
> 

Our dedicated Bare Metal gaming servers include DDoS protection specifically designed to secure gaming applications against cyber-attacks, ensuring stability and accessibility for gamers. This dedicated protection solution is both robust and easy to use, allowing you to focus on developing your business without the distraction of fighting cybercrime.


| ![global-schema](images/global_schema_focus_game.png) | 
|:--:| 
| Anti-DDoS Infrastructure & Game protection services diagram at OVHcloud |

## Requirements

- An [OVHcloud **Game** Dedicated Server](https://www.ovhcloud.com/en-gb/bare-metal/prices/#filterType=range_element&filterValue=game)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-gb/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-gb/compare/) for more information.

## Instructions

### Introduction 

The Anti-DDoS infrastructure, together with the Edge Network Firewall, keeps the network safe from common threats (mostly focused on ISO OSI layers 3 and 4). On the other hand, hosting gaming applications can be a challenging experience in terms of network security. Game DDoS Protection is here to help - it's a Layer 7 (application) firewall focused on protecting specific gaming protocols (usually using UDP). Its main advantages are:

- **Distance**: We know that latency and it's stability is crucial for gaming. These solutions are put as close as possible to the servers and work together with a dedicated hardware.
- **2-way**: The platform analyzes incoming and outgoing traffic for best understanding of every player's situation.
- **Instant**: It can distinguish real players from harmful attacks on a server from the very first network packets.
- **Always-on**: The ability to detect and stop attacks ensures a smooth experience for sensitive gaming applications without any disruptions and latency changes.

### Enabling the Game DDoS Protection

> [!primary]
> The Game Firewall protects the IP associated with a server. As a result, if you have a server with multiple IP addresses (i.e. Additional IP addresses), you need to configure each of them separately.
>

To configure gaming rules in the Gaming Firewall, you must first log in to the OVHcloud Control Panel and then follow these steps : 
 - Click the `Bare Metal Cloud`{.action} tab
 - Then go to `Network`{.action}
 - Open `IP`{.action}

| ![game-server](images/firewall_game_01_blur.png) | 
|:--:| 
| Click on the `...`{.action} button next to the IP address of your Game Server |

| ![configure-game-firewall](images/firewall_game_02.png) | 
|:--:| 
| Click on `Configure the GAME firewall`{.action} |


| ![add-rule-btn](images/firewall_game_03.png) | 
|:--:| 
| On the following screen click the `Add a rule`{.action} button to add a rule to the Game Firewall |


You can set up to **30 rules per IP** to protect one or many games hosted on your server behind the Game Firewall. Actual list of supported game profiles can be seen [here](https://www.ovhcloud.com/en/security/game-ddos-protection/)):


> [!primary]
> By default, the Game Firewall is pre-configured with certain rules that OVHcloud has determined work with the most popular games. However, for customers with a Game Dedicated Server, we allow you to go one step further and configure rules for ports as well.
> 


| ![confirm-new-rule](images/firewall_game_04.png) | 
|:--:| 
| Enable the ports as needed on the following screen and click on the `Confirm`{.action} button when you are finished adding your rules. You have now successfully configured Game Firewall rules |


> [!primary]
> It is important to note that Game DDoS Protection will not take any action unless rules are configured. 
> In addition, for the best protection, we strongly recommend that you set "Default policy = DROP", which will drop any traffic that does not match the defined rules. This way the listed application will be protected and nothing else will be able to reach your server.
> 

> [!warning]
> It's important to note that Game DDoS protection comes after the Edge Network Firewall. For it to work properly, the Edge Network protection cannot be too strict and needs to pass traffic to the Game DDoS protection. It would be optimal to have a rule on the Edge Network Firewall that allows all UDP traffic, and then let the Game DDoS protection filter the specific UDP ports.
>

### Important Notices

#### FiveM

FiveM is a mod of GTA-V. Currently it is not fully recognized by Rockstar (game publisher).

Due to this, we do not plan to release a public FiveM Game firewall profile for layer 7 protection.

#### Rust

Game firewall supports Rust with a detiled profile. You can read more about hosting Rust on OVHcloud's servers [here](https://www.ovhcloud.com/en/bare-metal/game/rust-server/).

#### Minecraft

Minecraft is well supported in the following versions:

- Minecraft Java edition 
- Minecraft Pocket Edition
- Minecraft Query

> [!primary]
> For now Minecraft Java edition is protected in "default" mode and no additional setup is exposed. If you host bigger Minecraft servers, or with specific requirements - please reach our support using [Help Center](https://help.ovhcloud.com/csm/en-gb-home?id=csm_index) with all the details to tune-up the application profile.
>

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.

## FAQ

### Can I use Game Firewall on other ranges than Baremetal GAME?

No, for now Game firewall is only available for Baremetal GAME offering.

### Can I disable GAME firewall protection?

We don't recommend doing this, but yes - this is possible. You can do it by removing all game protocol rules from configuration and disabling "Default policy: Drop".

### I don't see my game supported on the Protocol list, what can I do?

You can propose your need on our github Infrastructure solutions roadmap (https://github.com/orgs/ovh/projects/16/views/14). This will help us to decide on prioritization between next features to be developed.

### While having configured my game with appropriate ports and default policy to drop, I still receive attacks that are impacting for my game server. What to do?

For that you will need to share network traffic dump with such attack (.pcap file) and request protection tuning of your profile. This can be done using our help center (https://help.ovhcloud.com/).

