---
title: "Monitoring DDoS attacks with the Network Security Dashboard"
excerpt: "Learn how to navigate through the Network Security Dashboard"
updated: 2023-09-20
---

## Objective

This guide aims at introducing the Network Security Dashboard - an overview of what’s happening when malicious network activity was detected and DDoS protection infrastructure was involved. You can find here details on what triggered to put additional protections in place to keep your services up & running. Moreover, traffic charts are available for such Scrubbing Center activity periods to better visualize the situation.

## Requirements

- An OVHcloud service exposed on dedicated public IP address ([Dedicated Server](https://www.ovhcloud.com/en-gb/bare-metal/){.external}, [VPS](https://www.ovhcloud.com/en-gb/vps/){.external}, [Public Cloud instance](https://www.ovhcloud.com/en-gb/public-cloud/){.external}, [Hosted Private Cloud](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/){.external}, [Additional IP](https://www.ovhcloud.com/en-gb/network/additional-ip/){.external}, etc.)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Network Security 

OVHcloud's Anti-DDoS Infrastructure is a multi-layered, distributed defense system to fight against cyber-attacks. Consists of multiple edge locations and Scrubbing Centers that can analyze and clean-up malicious traffic. Together with the [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) and the [Game DDoS Protection](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos) offers quality protection services for various cases.

Anti-DDoS Infrastructure is constantly analyzing incoming traffic (detection mechanism) and eventually redirects such traffic via our Scrubbing Centers (also known as “Mitigation”) located in DataCenters around the World. Incoming traffic is then deeply analyzed and eventually filtered-out from malicious packets before reaching your server or service.

#### What happens when an attack reaches my service's IP? 

Every time an attack is detected towards any IP of your service, you are notified via email about the fact of re-routing traffic through Anti-DDoS Infrastructure. You will also see this periods on Network Security Dashboard with some more details.

During an attack, active mitigation action will be indicated by a warning icon on IP listing page (`Manage IPs`{.action} section of your Control Panel).

![red-line-attack](images/forced_blur.png)

> [!primary]
>
> Find more information on how DDoS Mitigation is achieved at OVHcloud [here](https://www.ovhcloud.com/en/security/anti-ddos/ddos-attack-mitigation/).
>

> [!warning]
>
> Please note that the protection logic is based on public IP addresses associated with a server (or service). As a result, statistics and charts are displayed or calculated on per-IP basis.
> 

### Network Security Notifications

![red-line-attack](images/nsd_04_blur.png)

In the OVHcloud Control Panel, access the `Bare Metal Cloud`{.action} tab. Then go to `Network`{.action} and click `Manage IPs`{.action} ensuring `Advanced mode` is enabled to see  Anti-DDoS Infrastructure status and configuration of it's components.

There are columns corresponding Anti-DDoS Scrubbing (Mitigation) status, Edge Network Firewall and GAME firewall indicating feature availability and it's statuses.

- Mitigation column indicates:
    - **Automatic** - The Scrubbing Center is in **automatic** mode. It is the recommended mode to use, reroutes traffic for deeper analysis when needed.
    - **Permanent**** - The Scrubbing Center is **permanently enabled**. We do not reccomend it to be enabled permanently, unless latency jitter is noted due to rerouting traffic back-and-forth.
    - **Forced** - This indicates the Scrubbing Center is **taking action** right now.

- Firewall column indicates Edge Network Firewall state:
    - **Enabled** - firewall is **enabled** for this IP.
    - **Disabled** -  firewall is **disabled** for this IP.
    - **(no status)** - firewall configuration is not created for such IP. This can be turned on using: `...`{.action} button and `Create Firewall`{.action}

- GAME firewall (only available for [OVHcloud **Game** Dedicated Servers](https://www.ovhcloud.com/en-gb/bare-metal/prices/#filterType=range_element&filterValue=game))) status:
    - **On** - The GAME DDoS Protection is **enabled** on this IP.
    - **Off** - The GAME Firewall is **available** but **disabled** on this IP.
    - **(no status)** - GAME Firewall is not available for such IP. This means listed IP is not configured on supported product range.

- Alerts column may indicate an active Scrubbing Center with a warning icon and appropriate hint.


### Network Security Dashboard

In the OVHcloud Control Panel, accessing the dashboard can be done either from IP listing page (for a particular IP) or going directly to Network Security Dashboard in Network menu.

Go to the `Bare Metal Cloud`{.action} tab, then to `Network`{.action} and select `Network Security Dashboard`{.action}.
..or from IP listing (option available only when Scrubbing Center is in action): access the `Bare Metal Cloud`{.action} tab, then go to `Network`{.action} and click `Public IP Addresses`{.action}, reach `...`{.action} button and `Network Security Dashboard`{.action}.

In the **Scrubbing Center log** tab, you can retrieve all the information about attacks that were detected in the past (or that are ongoing).

![red-line-attack](images/nsd_main_blur.png)

In the table, the following columns are present: 

- **Detection time** - timestamp of the first attack detection.
- **End time** - timestamp of when the Scrubbing Center finished mitigating.
- **Destination IP** - the IP that was the target of the attack.
- **Attack vectors** - provides information about detected type of attack, such as UDP or TCP attack, etc.

> [!warning]
>
> Please note that source IP addresses for detected events are not displayed. This is done in purpose, as most of the times they are spoofed (DDoS attacks may point to other source than it realy comes from) and such information would be misleading or not usable.
> 

In the **Traffic chart** tab, you can see a graph showing traffic to your IP address (bps or pps). 

![red-line-attack](images/nsd_graph_tab_blur.png)

It presents malicious traffic that was dropped (**in red**) and clean traffic delivered to your IP address (**in green**). There are also basic mitigation statistics displayed, i.e.: how many attacks were detected for selected IP, how much traffic (or packets) were cleaned-up during attacks or how many times Scrubbing Centers took an action to inspect your traffic (number of events) in selected period of time.


## Go further

- [Enabling and configuring the Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

- [Protecting a GAME server with the application firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Join our community of users on <https://community.ovh.com/en/>.



## FAQ

### Why do I see not all of the attacks on the Network Security Dashboard?

Depending on the nature of the attack, different actions may be taken to best eliminate the threat. In both cases attacks are best mitigated as close to the origin as possible:

- In case of an attack comming into OVHcloud network (**external**), traffic is redirected to the Anti-DDoS Scrubbing Centers for cleaning (thus visible on the Dashboard).
- Please note that attacks originating inside OVHcloud network (**internal**) are managed by our Security teams. Mitigation focuses on blocking the origin of the attack and will not be reported by Anti-DDoS Infrastructure systems.

### I don't see any data in Scrubbing Center log, is this normal?

YES, it's good! That means we haven't seen any suspected attacks targeting your public IP addresses.

### I don't see traffic chart / data for IP I enter 

Such data is available only for Public IP addresses during automatic Anti-DDoS Infrastructure detection event (when traffc is redirected via Scrubbing Center)

### I can't view traffic chart for some positions on scrubbing center log 

Traffic chart data is available only for past two weeks, while log entries can be reviewed for past year.

### I'm under attack, how can I protect better my server?

Some types of attacks may be so specific that our Anti-DDoS Infrastructure will not be able to detect & clean it up. In such cases, firewall configured on your server can help and we recommend also offloading some of the server firewall rules to the edge of our network - using Edge network Firewall.

For more information how to configure Edge Network Firewall rules, please see our guide: [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).


### I'm under attack and experience problems on my server. What can I do more? 

Anti-DDoS Infrastructure is a solution designed for best efficiency and wides range of services to protect. In some specific cases, it may need additional tuning (e.g. for application specificity or size). To request that, please visit our [Help Center](https://help.ovhcloud.com/csm/en-gb-home?id=csm_index) and search for appropriate action inside "network attack and/or Anti-DDoS related" category.
To let us better understand your case and to be able to help you, please provide some more details:

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

