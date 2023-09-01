---
title: "Monitoring DDoS attacks with the Network Security Dashboard"
excerpt: "Learn how to navigate the Network Security Dashboard"
updated: 2023-09-01
---

## Objective

This guide aims at introducing the Network Security Dashboard and its features.

## Requirements

- An OVHcloud service with an Edge Network Firewall or Game DDoS Protection ([Dedicated Server](https://www.ovhcloud.com/en-gb/bare-metal/){.external}, [VPS](https://www.ovhcloud.com/en-gb/vps/){.external}, [Public Cloud instance](https://www.ovhcloud.com/en-gb/public-cloud/){.external}, [Hosted Private Cloud](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/){.external}, [Additional IP](https://www.ovhcloud.com/en-gb/network/additional-ip/){.external}, etc.)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Network Security 

OVHcloud's Anti-DDoS Infrastructure is a multi-layered defense system. Each mitigation node consists of few stages. Every part is responsible for a particular task and implements different logics. The protection works mostly on layer 3-4 (with few exceptions that take into account layer 7). 

Together with the [Edge network firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) and the [Game DDoS Protection](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos), the Anti-DDoS Infrastructure is constantly analyzing incoming traffic (detection mechanism) and eventually redirects such traffic via our Scrubbing Centers (formerly known as “Mitigation stages”) located in every DataCenter. In such cases, incoming traffic is deeply analyzed and eventually filtered-out from malicious packets. 

> [!warning]
>
> The Anti-DDoS Infrastructure protects the IP associated with a server. As a result, if you have a server with multiple IP addresses, you need to configure each IP separately. You cannot configure the firewall on the server as a whole.
> 

Depending on the nature of the attack, the mechanism automatically detects the different types of threats and operates different actions accordingly:

- In case of an **internal** attack (an attack sourcing from the internal network and targeting external machines), appropriate actions are taken and our Security teams are informed. 
- In case of an **external** attack, traffic is redirected to the Anti-DDoS Scrubbing Center.

#### What happens when an attack reaches my service's IP? 

Every time an attack is detected towards any IP of your service, you are notified via email with all the details about the attack.
You will receive a second email notification as soon as the attack is finished. 

<Image of "Mange IPs" page on new UX with red icon showcasing attack>

During an attack, active mitigation will be indicated by the appropriate icon, visible next to the impacted IP on the `Manage IPs`{.action} section of your Control Panel.

> [!primary]
>
>F ind more information on how DDoS Mitigation is achieved at OVHcloud [here](https://www.ovhcloud.com/en/security/anti-ddos/ddos-attack-mitigation/).
>

### Network Security Notifications

<Image of "Mange IPs" page on new UX with all icons>

In the OVHcloud Control Panel, access the `Bare Metal Cloud`{.action} tab. Then go to `Network`{.action} and click `Manage IPs`{.action} to see the current mode of the Anti-DDoS Infrastructure.

There are at most 3 visible icons, each of them indicating a sngle status.

- The first icon, starting from the left, indicates the Scrubbing center status:
    - **Green** - The Scrubbing Center is in **automatic** mode. It is the recommended mode to use.
    - **Yellow**** - The Scrubbing Center is **permanently enabled**. We do not reccomend it to be enabled at all times, since it can alter efectiveness of attack mitigation.
    - **Red** - This indicates the Scrubbing Center is **taking action** right now.

- The second icon shows the GAME DDoS Protection (only available for [OVHcloud **Game** Dedicated Servers](https://www.ovhcloud.com/en-gb/bare-metal/prices/#filterType=range_element&filterValue=game))) status:
    - **On** - The GAME Firewall **enabled** on this IP.
    - **Off** - The GAME Firewall is **available** but **disabled** on this IP.

- The third icon indicates the status of the Edge Network Firewall:
    - **On** - The Edge Network Firewall is **enabled** on this IP.
    - **Off** - The Edge Network Firewall is **disabled** on this IP.

> [!warning]
>
> The Edge Network Firewall is enabled automatically whenever a DDoS attack is launched, and cannot be disabled before the attack ends. As a result, all the rules configured in the firewall are applied. This is why it is important to keep your firewall rules up to date.
> By default, there are no configured rules, so all connections can be set up.
> If you have configured some rules, we recommend checking them regularly, even if the firewall is disabled.
>

### Network Security Dashboard

In the OVHcloud Control Panel, access the `Bare Metal Cloud`{.action} tab. Then go to `Network`{.action} and click `Public IP Addresses`{.action} to access the **Network Security Dashboard**.

<image of "Manage IPs" from new NSD UX showing "..." button clicked>

Click on the `...`{.action} button next to the desired IP then select `Anti DDoS report`{.action}.

<image of "Anti-DDoS dashboard" scrubbing center log page>

In the **Scrubbing Center log** tab, you can retrieve all the information about attacks that were detected in the past.

In the table, the following columns are present: 

- **Detection time** - timestamp of the first attack detection.
- **End time** - timestamp of when the Scrubbing Center finished mitigating.
- **Destination IP** - the IP that was the target of the attack.
- **Attack vectors** - provides information about detected type of attack, such as UDP or TCP attack, etc.

<image of "Anti-DDoS dashboard" traffic chart>

In the **Traffic chart** tab, you can see a graph showing all periods of Scrubbing Center mitigation activity. You can retrieve plenty of information about your service's traffic here, such as: the number of events, Packets dropped, Bandwidth cleaned, Attacks detected, the Pps (packets per second) value of an attack, the Bps (bits per second) value of an attack and Scrubbing center activity periods.

### I'm under attack, but still cannot reach my server? What can I do more? 

If the attack is not properly mitigated, or you are experiencing any difficulties with the Anti-DDoS system, we are ready to help you. P

Please use our [Help Center](https://help.ovhcloud.com/csm/en-gb-home?id=csm_index) to contact our support teams with details about your issue and follow the next steps.

#### Step 1 - Capture traffic

In order to deliver the best solution for you, in the first place we will need to analyze a traffic sample.

In order to provide such a capture, please run this command on Linux:

```bash
tcpdump -w capture-ovh -c 100000 port not ssh
```

>[!primary]
>
> If you are using Windows, use [Wireshark](https://www.wireshark.org/) and capture 100000 packets.
>

Once the command finishes running, the capture file is created. Upload it to our file sharing solution using [this guide](/pages/account_and_service_management/account_information/use-plik).

Make sure to share the uploaded file's link in the ticket to the support team.

#### Step 2 - Provide OVHcloud with information

In any case where adjustments to our Anti-DDoS system will be necessary, it is mandatory for you to provide us with the following specific details:

- Service hosted on the server that is affected:
- Date & Time of when the attack started:
- Date & Time of when the attack finished:
- IP(s) affected:
- Service & Protocol & Port used by the affected service:
- Size of service (XS: 1-10, S:10-100, M: 100-1k, L: 1-10k, XL: 10-100k, XXL: 100k+ clients connected):
- Other services hosted on the server:
- Other ports being used on the server: 
- Are there other services on seperate IPs: Yes/No
- If yes, what are the IPs:
- Is legitimate traffic being dropped: YES/NO
- Was connection to the server lost: YES/NO
- Which type of legitimate traffic is being dropped:

## Go further

- [Enabling and configuring the Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

- [Protecting a GAME server with the application firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Join our community of users on <https://community.ovh.com/en/>.