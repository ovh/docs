---
title: Enabling and configuring the Edge Network Firewall
excerpt: "Configure firewall network"
updated: 2023-09-01
---

## Objective

To protect its global infrastructure and its customers’ servers, OVHcloud offers a firewall that can be configured and integrated into the **Anti-DDoS** solution: the Edge Network Firewall (or Firewall Network). This is an option you can use to limit your service's exposure to attacks from the public network.

**This guide will show you how to configure your Network Firewall.**


> [!primary]
>
> You can read more information on our Anti-DDoS solution here: <https://www.ovhcloud.com/en-gb/security/anti-ddos/>.
> 

![The VAC in detail](images/vac-inside.png){.thumbnail}


## Requirements

- An OVHcloud service with a Network Firewall ([Dedicated Server](https://www.ovhcloud.com/en-gb/bare-metal/), [VPS](https://www.ovhcloud.com/en-gb/vps/), [Public Cloud instance](https://www.ovhcloud.com/en-gb/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/), [Additional IP](https://www.ovhcloud.com/en-gb/network/additional-ip/), etc.)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-gb/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-gb/compare/) for more information.

## Instructions

### Enable the Network Firewall

> [!primary]
>
> The Network Firewall protects the IP associated with a server. As a result, if you have a server with multiple IP addresses, you need to configure each IP separately. You cannot configure the firewall on the server as a whole.
> 

In the OVHcloud Control Panel, click on the `Bare Metal Cloud`{.action} section, next click on the `Network`.{action} menu and open `Public IP Adresses`{.action}. You can use the drop-down menu underneath **"My public IP addresses and associated services"** to filter your services according to category.

![filter service](images/selectservice.png){.thumbnail}

Next, click the `...`{.action} button to the right of the relevant IPv4 and select `Create Firewall`{.action}.


![Enabling the Network Firewall](images/firewallcreation2022.png){.thumbnail}

You will then be asked to confirm.

![Confirmation](images/creationvalid.png){.thumbnail}

> [!primary]
> The `Create Firewall`{.action} button will only be available for IPs that have never configured a firewall. If it is not the first time you are configuring your firewall, you can skip this step. 
>

Then click `Edge firewall configuration`{.action} to start configuring it.

![Enabling the configuration](images/activationconfig.png){.thumbnail}

On this page you can choose to **Enable** or **Disable** the firewall using the switch button. 

You can set up to **20 rules per IP**.

> [!warning]
>
> The Network firewall is enabled automatically whenever a DDoS attack is launched, and cannot be disabled before the attack ends. As such, all the rules configured in the firewall are applied. This is why it is important to keep your firewall rules up-to-date.
> As a default setting you do not have any configured rules, so all connections can be set up.
> If you have any, we recommend checking them regularly, even if the firewall is disabled.
>


> [!primary]
>
> - The UDP fragmentation is blocked (DROP) by default. When you enable the Network Firewall, if you use a VPN, remember to configure your maximum transmission unit (MTU) correctly. For example, on OpenVPN, you can tick `MTU test`{.action}.
> - The Network Firewall is not taken into account within the OVHcloud network, so the rules set up do not affect the connections in this internal network.
>


### Configure the Network Firewall

> [!warning]
> Please note that the OVHcloud Network Firewall cannot be used to open ports on a server. To open ports on a server, you must go through the firewall of the operating system installed on the server. 
> For more information, please refer to the following guides: [Configuring the firewall on Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) and [Configuring the firewall on Linux with iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

To add a rule, click on `Add a rule`{.action}:

![Add a rule](images/addarule2022.png){.thumbnail}

For each rule you must choose:

- A priority (from 0 to 19, 0 being the first rule to be applied, followed by the others)
- An action (`Authorise`{.action} or `Refuse`{.action})
- The protocol
- Source IP (optional)
- The source port (TCP only)
- The destination port (TCP only)
- The TCP options (TCP only)

![Details on adding a rule](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priority 0: we advise authorising TCP protocol on all the IPs with an `established`{.action} option. With the established option, you can verify that the packet is part of a session that has previously been opened (already started). If you do not authorise it, the server will not receive the TCP protocol feedback from the SYN/ACK requests.
> - Priority 19: we advise to refuse all IPv4 protocol traffic that has not been accepted by any earlier rule.
> 

### Configuration example

To make sure that only the SSH (22), HTTP (80), HTTPS (443) and UDP (10,000) ports are left open when authorising the ICMP, follow the rules below:

![Configuration example](images/exemple.png){.thumbnail}

The rules are sorted from 0 (the first rule read) to 19 (the last). The chain stops being scanned as soon as a rule is applied to the packet.

For example, a packet for TCP port 80 will be captured by rule 2, and the rules that come after will not be applied. A packet for TCP port 25 will only be captured at the last rule (19) which will block it, because the Firewall does not authorise communication on port 25 in the previous rules.

> [!warning]
> As stated, the configuration above is just an example and should only be used as reference if the rules do not apply to services hosted on your server. It is absolutely necessary to configure the rules in your firewall according to the services hosted on your server. Improper configuration of your firewall rules can cause legitimate traffic to be blocked and server services to be inaccessible. 
> 

### Mitigation

Our Anti-DDoS (VAC) solution includes three mitigation modes: automatic, permanent or forced. The mitigation process is OVHcloud's automatic scrubbing center. This is the place where our advanced technology is taking a deep look into packets and malicious traffic (DDoS or other known vulnerabilities) is removed while allowing legitimate traffic to pass through.

- **Automatic mitigation**: By default, all OVHcloud IPs are under automatic mitigation. Automatic mitigation will be enabled only if the traffic is detected as "unusual" compared to the normal traffic usually received by the server. We **recommend** using this mode as best automations are applied during malicious traffic mitigation.

- **Permanent mitigation**: This mode can be enabled or disabled via the OVHcloud Control Panel. With permanent mitigation (if enabled), you apply a constant first level of filtering through our Shield hardware.<br>
All traffic at all times gets through the mitigation system before reaching the server. We do not recomend enabling this permanently, rather using it as an on/off switch for the protection when necessary.
Please note that as permanent mitigation is part our Anti-DDoS (VAC) solution, you can activate it on your IP without enabling the Network Firewall.

To enable it, click on the `Bare Metal Cloud`{.action} menu and open `IP`{.action}. Next, click on the `...`{.action} button to the right of the relevant IPv4 and select `Mitigation: permanent mode`{.action}.

- **Forced mitigation**: This mode is automatically enabled once an attack is detected on the server. Once enabled on our Anti-DDoS infrastructure, it cannot be disabled. In order to protect our infrastructure, it will be enabled throughout the attack until it is completely mitigated.

> [!success]
> **Tips**
> You can create attack-only rules that will apply only after the Network firewall enters Forced mitigation mode. To do that,firewall rules must be created but disabled. 
>

> [!warning]
> If our Anti-DDoS solution mitigates an attack, your Network Firewall rules will eventually be applied, even if you have disabled the firewall. If you have disabled your firewall, remember to delete your rules as well.
> 
> Since the mitigation is part of our Anti-DDoS (VAC) solution, it cannot be disabled on a service. All OVHcloud products are delivered with the Anti-DDoS protection.
>

## Network Security Dashboard

You can read more information about our [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard) in order to get more details about your traffic.

### Conclusion

Having read this tutorial, you should now be able to configure the Network Firewall to enhance the security of your OVHcloud services.

## Go further

- [Protecting a GAME server with the application firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Join our community of users on <https://community.ovh.com/en/>.