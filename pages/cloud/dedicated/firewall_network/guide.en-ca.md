---
title: Configuring the Network Firewall
slug: firewall-network
section: Network Management
---

**Last updated 31st May 2022**

## Objective

To protect its global infrastructure and its customers’ servers, OVHcloud offers a firewall that can be configured and integrated into the **Anti-DDoS** (VAC) solution: the Network Firewall. This is an option that will enable you to limit how much your service is exposed to attacks from the public network.

**This guide will show you how to configure your Network Firewall.**


> [!primary]
>
> VAC: More information on VAC, our protection system against DDoS attacks, here: <https://www.ovh.com/ca/en/anti-ddos/>.
> 

![VAC in detail](images/vac-inside.png){.thumbnail}


## Requirements

- You must have an OVHcloud service with a Network Firewall ([Dedicated Server](https://www.ovh.com/ca/en/dedicated-servers/){.external}, [VPS](https://www.ovh.com/ca/en/vps/){.external}, [Public Cloud instance](https://www.ovh.com/ca/en/public-cloud/instances/){.external}, [Hosted Private Cloud](https://www.ovh.com/ca/en/private-cloud/){.external},  [Additional IP](https://www.ovhcloud.com/en-ca/bare-metal/ip/){.external}, etc.)
- You must have access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}
- You must have basic network skills

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-ca/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-ca/compare/) for more information.

## Instructions

### Enable the Network Firewall

> [!primary]
>
> The Network Firewall protects the IPs that are associated with a machine. You must therefore configure each IP separately; it is not possible to configure the server as a whole.
> 

In the OVHcloud Control Panel, click on the `Bare Metal Cloud`{.action} menu and open `IP`{.action}. Next, click on the `...`{.action} to the right of the relevant IPv4 and select `Create Firewall`{.action}.

![Enabling the Network Firewall](images/firewall_creation2022.png){.thumbnail}

- You will then be asked to confirm:

![Confirmation](images/creationvalid.png){.thumbnail}

- You can then `Enable the firewall`{.action} and `Configure the Firewall`{.action} by clicking once more on the gear icon next to the IPv4:

![Applying the rules in the configuration](images/activationconfig.png){.thumbnail}

You can set up to **20 rules per IP**.


> [!warning]
>
> The firewall is enabled automatically upon each DDoS attack, and cannot be disabled before the attack ends. This is why it is important to keep the firewall rules up to date.
> As a default setting you do not have any configured rules, so all connections can be set up.
> If you do have any, remember to check your firewall rules regularly, even if you disable it.
> 


> [!primary]
>
> - The UDP fragmentation is blocked (DROP) as a default setting. When you enable the Network Firewall, if you use a VPN, remember to correctly configure your maximum transmission unit (MTU). For example, on OpenVPN, you can tick `MTU test`{.action}.
> - The Network Firewall is not taken into account within the OVHcloud network, so the rules set up do not affect the connections in this internal network.
>


### Configuring the Network Firewall

> [!warning]
> Please note that the OVHcloud Network Firewall cannot be used to open ports on a server. To open ports on a server, you must go through the firewall of the operating system installed on the server. 
> For more information, please refer to the following guides: [Configure the firewall on Windows](https://docs.ovh.com/ca/en/dedicated/firewall-windows/) and [Configuring the firewall on Linux with iptables](https://docs.ovh.com/ca/en/dedicated/firewall-iptables/).
>

To add a rule, click on `Add a rule`{.action}:


![Add a rule](images/ajoutregle1.png){.thumbnail}

For each rule you must choose:

- a priority (from 0 to 19, 0 being the first rule to be applied, followed by the others);
- an action (`Authorise`{.action} or `Refuse`{.action});
- the protocol;
- an IP (optional);
- the source port (TCP only)
- the destination port (TCP only)
- the TCP options (TCP only)


![Details on adding a rule](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priority 0: we advise that you authorise the TCP protocol on all the IPs with an `established`{.action} option. The `established`{.action} option enables you to verify that the packet is part of a session that has previously been opened (already started). If you do not authorise it, the server will not receive the TCP protocol feedback from the SYN/ACK requests.
> - Priority 19: refuses all of the IPv4 protocol if any rules before 19th (the last possible) are not filled in.
> 


### Configuration example

To make sure that only the SSH (22), HTTP (80), HTTPS (443), and UDP (on port 10000) ports are left open when authorising the ICMP, you need to follow the rules below:

![Configuration example](images/exemple.png){.thumbnail}

The rules are sorted chronologically from 0 (the first rule read) to 19 (the last). The chain stops being scanned as soon as a rule is applied to the packet.

For example, a packet for TCP port 80 will be captured by rule 2 and the rules that come after will not be tested. A packet for TCP port 25 will only be captured at the last rule (19) which will block it, because OVHcloud does not authorise communication on port 25 in the previous rules.

> [!warning]
> As stated, the configuration above is just an example and should only be used as reference if the rules do not apply to services hosted on your server. It is absolutely necessary to configure the rules in your firewall according to the services hosted on your server. Improper configuration of your firewall rules can cause legitimate traffic to be blocked and server services to be inaccessible. 
> 

### Mitigation

There are three mitigation modes: automatic, permanent or forced.

**Automatic mitigation**: With this mode, the traffic goes through the mitigation system only if it is detected as "unusual" compared to the normal traffic usually received by the server. 

**Permanent mitigation**: By activating permanent mitigation, you apply a constant first level of filtering through our Shield hardware.<br>
All traffic at all times gets through the mitigation system before reaching the server. We recommend this mode for services under frequent attacks.<br>
Please note that the Network firewall must not be created/enabled to activate permanent mitigation on your IP.

To enable it, click on the `Bare Metal Cloud`{.action} menu and open `IP`{.action}. Next, click on the `...`{.action} to the right of the relevant IPv4 and select `Mitigation: permanent mode`{.action}.

**Forced mitigation**: This mode is automatically activated once an attack is detected on the server. Once enabled, this mode cannot be disabled. In order to protect our infrastructure, it will be activated throughout the attack until it is completely mitigated.

> [!warning]
>
> If anti-DDoS mitigation is enabled, your Network Firewall rules will be applied, even if you have disabled them. If you wish to disable it, remember to delete your rules.
> 
> Please note that the anti-DDoS mitigation cannot be disabled.

### Configuring Armor

> [!primary]
> By default, Armor is pre-configured with certain rules that OVHcloud has determined work with the most common games. However, for customers with a Game Dedicated Server, we allow you to go a step further and configure rules for ports as well.
>

In order to configure rules for your ports in Armor, you will first need to log into the OVHcloud Control Panel.<br>
Go to the `Bare Metal Cloud`{.action} menu and open `IP`{.action}. Next, click on the `...`{.action} next to the IP address of your Game Server and click on `Configure the GAME firewall`{.action}.

![Game_wall](images/GAMEwall2021.png){.thumbnail}

On the following screen, click the `Add a rule`{.action} button to add a rule to Armor.

You can set up to **30 rules per IP**.

![Configure_Armor](images/ConfigureArmor2021.png){.thumbnail}

Enable the ports as needed on the following screen and click on the `Confirm`{.action} button when you are finished adding your rules. You have now successfully configured Armor.

### Conclusion

Having read this tutorial, you should now be able to configure the Network Firewall as well as Armor (for Game dedicated servers) to enhance the security of your OVHcloud services.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
