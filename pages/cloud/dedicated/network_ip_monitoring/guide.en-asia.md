---
title: What are the IP addresses of the OVHcloud monitoring?
slug: monitoring-ip-ovh
excerpt: Find here the IP addresses to fill in when setting up a firewall so that OVHcloud monitoring will continue to work on your server
section: Network Management
---

**Last updated 13th December 2022**

## Objective

The monitoring service allows OVHcloud to monitor the status of your machine and automatically trigger the intervention of a technician in the datacenter.

All the servers of our customers and the entire network are monitored 24/7 by OVHcloud technical teams.

OVHcloud intervenes as soon as an alert (non-response to the pings) is triggered in order to minimize the downtime of the servers and the network.

To implement a restrictive firewall, especially on ICMP, and continue to benefit from OVHcloud monitoring, it is necessary to authorize the IPs that you will find below.

## Requirements

- An OVHcloud service on which you have installed a firewall
- Access to the firewall rules

## Instructions

### IP addresses to be authorised

|Reverse|IP|Protocol|
|---|---|---|
|mrtg-rbx-100|37.187.231.251|icmp|
|mrtg-sbg-100|37.187.231.251|icmp|
|mrtg-gra-100|37.187.231.251|icmp|
|mrtg-bhs-100|37.187.231.251|icmp|
|mrtg-rbx-101|151.80.231.244|icmp|
|mrtg-rbx-102|151.80.231.245|icmp|
|mrtg-rbx-103|151.80.231.246|icmp|
|mrtg-gra-101|151.80.231.247|icmp|
|a2.ovh.net|213.186.33.62|icmp|
|---|---|---|
|netmon-rbx-probe|92.222.184.0/24|icmp|
|netmon-sbg-probe|92.222.185.0/24|icmp|
|netmon-gra-probe|92.222.186.0/24|icmp|
|netmon-bhs-probe|167.114.37.0/24|icmp|
|netmon-sgp-probe|139.99.1.144/28|icmp|
|---|---|---|
|proxy.p19.ovh.net|213.186.45.4|icmp|
|proxy.rbx.ovh.net|213.251.184.9|icmp|
|proxy.sbg.ovh.net|37.59.0.235|icmp|
|proxy.bhs.ovh.net|8.33.137.2|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|proxy.ovh.net|213.186.50.98|icmp|
||xxx.xxx.xxx.250 (xxx.xxx.xxx.aaa is the server ip)|icmp|
||xxx.xxx.xxx.251 (xxx.xxx.xxx.aaa is the server ip)|icmp + Port monitored by the monitoring service|

**Communication between the RTM service and your server also requires that you allow inbound and outbound connections on UDP ports 6100 through 6200.**

> [!primary]
>
> If your server is located in Roubaix 3, you have to retrieve the last IP via tcpdump.
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@nsXXXX:# tcpdump host server.ip | grep ICMP</span> </pre></div>
>

### Server monitoring

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external} and select the `Bare Metal Cloud`{.action} tab. Select the server concerned in the `Dedicated servers`{.action} menu.

You can set the monitoring status for a dedicated server from the `General information`{.action} tab (section **Service status**).

![Monitoring](images/monitoring-server.png){.thumbnail}

Click on the button `Configure`{.action}. In the popup window, you have three options for the monitoring behaviour:

- **Disabled**: This option stops alert messages and interventions by OVHcloud. Choose this if you are executing pertinent administrative actions on the server which prevent an ICMP response.
- **Enabled with proactive intervention**: If the server stops responding, an alert email is sent to you and the server will be checked by a technician.
- **Enabled without proactive intervention**: You will receive an alert message by email in case the server stops responding. To initiate an intervention, you will need to create a support request.

![Monitoring](images/monitoring-server2.png){.thumbnail}

Click on `Confirm`{.action} to update your monitoring configuration.

### Enabling monitoring for specific services

In addition to standard monitoring, you can authorise OVHcloud to monitor specific services such as HTTP, SSH and other protocols.

In the `General information`{.action} tab, click the `...`{.action} button next to "Monitored services" in the **Service status** box. Click `Monitor my services`{.action}.

![monitoring](images/monitoring02.png){.thumbnail}

You will be redirected to the page below. Click `Monitor a service`{.action}, then enter the IP address, protocol, port number, server response, and time interval between your service checks. Click the validation symbol (**V**) to confirm the changes.

![monitoring](images/monitoring3.png){.thumbnail}

## Go further

[Configure the Network Firewall](../firewall-network/)

Join our community of users on <https://community.ovh.com/en/>.