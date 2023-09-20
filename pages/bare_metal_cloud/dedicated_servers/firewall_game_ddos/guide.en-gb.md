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

## Requirements

- An [OVHcloud **Game** Dedicated Server](https://www.ovhcloud.com/en-gb/bare-metal/prices/#filterType=range_element&filterValue=game))
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-gb/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-gb/compare/) for more information.

## Introduction 

The Anti-DDoS Infrastructure together with Edge Network Firewall are keeping network safe from common threats (mostly focusing on ISO OSI Layer 3 and 4). On the other hand, hosting game applications can be challenging experience in terms of network security. We understand that very well and for this usecase OVHcloud is offering Game DDoS Protection - a Layer-7 (application) firewall that focuses on protecting specific gaming protocols (usually using UDP). It's key benefits are:

- **Distance**: We know that latency and it's stability is crucial for gaming. These solutions are put as close as possible to the servers and work together with a dedicated hardware.
- **2-way**: The platform analyzes incoming and outgoing traffic for best understanding of every player's situation.
- **Instant**: It can distinguish real players from harmful attacks on a server from the very first network packets.
- **Always-on**: The ability to detect and stop attacks ensures a smooth experience for sensitive gaming applications without any disruptions and latency changes.

## Instructions

### Enabling the Game DDoS Protection

> [!primary]
> The Game Firewall protects the IP associated with a server. As a result, if you have a server with multiple IP addresses (i.e. Additional IP addresses), you need to configure each of them separately.
>

In order to configure gaming rules in the Game Firewall, you will first need to log in to the OVHcloud Control Panel.

Click the `Bare Metal Cloud`{.action} tab then go to `Network`.{action} and open `Public IP Addresses`{.action}. Next, click on the `...`{.action} button next to the IP address of your Game Server and click on `Configure the GAME firewall`{.action}.

![Game_wall](images/GAMEwall_newUX.png){.thumbnail}

On the following screen, click the `Add a rule`{.action} button to add a rule to the Game Firewall.

You can set up to **30 rules per IP**.

> [!primary]
> By default, the Game Firewall is pre-configured with certain rules that OVHcloud has determined work with the most common games. However, for customers with a Game Dedicated Server, we allow you to go a step further and configure rules for ports as well.
> 

![Configure_Armor](images/ConfigureGameFirewall_newUX.png){.thumbnail}

Enable the ports as needed on the following screen and click on the `Confirm`{.action} button when you are finished adding your rules. You have now successfully configured Game Firewall rules.

> [!primary]
> It is important to note that Game DDoS Protection will not take any action unless rules are configured. 
> Moreover, for the best protection we highly recommend to set "Default policy = DROP" which will drop any traffic that is not matching defined rules. This way, listed application will be protected, and nothing else can reach your server.
> 

> [!warning]
> It's important to notice that Game DDoS protection applies after the Edge Network Firewall. For a proper functioning, the Edge Network protection can not be too strict and has to forward traffic to the Game DDoS protection. It would be optimal to have one rule on the Edge Network Firewall allowing all UDP traffic, then let the Game DDoS protection filter the specific UDP ports.
>

### Important Notices

#### Supported Games

All currently supported Game Firewall profiles can be seen [here](https://www.ovhcloud.com/en/security/game-ddos-protection/).

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