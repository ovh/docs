---
title: "ESXi Dedicated Servers - FAQ"
excerpt: "Find the most frequently asked questions about the wave of attacks targeting ESXi servers"
updated: 2023-02-10
---


## Objective

Following a major event on pre-7.0 U3i ESXi servers on February 3rd 2023, a wave of attacks is currently underway on these servers.
None of our managed services are affected by this attack. However, many customers use this operating system on their own server.
We intend at providing our users with all the information and recommendations they need.

These attacks are detected worldwide, particularly in Europe. According to our analyses, ecosystem experts as well as the authorities, the malware uses the vulnerability CVE-2021-21974 as a compromise vector.
Investigations are still ongoing to confirm this hypothesis. Our technical teams are working on the detailed identification of the attack characteristics, while coordinating with our peers from other CERTs and security teams.

**Find below the frequently asked questions about the wave of attacks targeting ESXi servers.**

## FAQ

### How do I know if I am a victim of ransomware?

Enter your IP or server name in a browser to determine if a ransom message is displayed to you.

### I am a victim of ransomware, how to recover my data?

If you want to attempt to recover the data on your server, you can rely on the steps in the following documentation: [Enable and use rescue mode - Mounting a datastore](/pages/bare_metal_cloud/dedicated_servers/rescue_mode#mounting-a-datastore).
However, we don't have all the devices we need to recover all of your data.

The US National Cybersecurity and Infrastructure Security Agency ([CISA](https://www.cisa.gov/uscert/ncas/current-activity/2023/02/07/cisa-releases-esxiargs-ransomware-recovery-script){.external}) also made available [a tool](https://github.com/cisagov/ESXiArgs-Recover) to retrieve data from an ESXi server targeted by the ESXiArgs ransomware.<br>
Using this tool requires advanced system administration skills. We advise you to use it only with knowledge of the facts, since OVHcloud cannot provide you with assistance on its use.

In case of difficulties, we recommend that you contact a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) or contact our teams by [creating a support ticket](https://www.ovh.com/manager/dedicated/#/support/tickets/new) from your OVHcloud Control Panel.

### Does OVHcloud have a backup to restore my data?

The Dedicated Server offering is optionally supported by [Backup Storage](https://www.ovhcloud.com/en-gb/bare-metal/backup-storage/). However, the backup is not automatic. More details on how this solution works can be found in our [Use Backup Storage on a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) guide.

Our dedicated servers are also compatible with our [different backup solutions](https://www.ovhcloud.com/en-gb/storage-solutions/).

### What is OVHcloud's responsibility?

The perimeter affected by this attack does not fall under the layer managed by OVHcloud, so the corrective actions we can take are limited. OVHcloud is solely responsible for the dedicated server itself and its availability.

When you order your dedicated server, no security protocols are implemented natively. So it's up to you to secure it. OVHcloud cannot be held responsible for a security failure on your machine.

### How do I reinstall and secure my dedicated ESXi server?

1. Secure access to your dedicated server through [Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) or your own firewall system.
2. Install the VMware ESXi 7.0 U3c version available [via your dedicated server administration interface](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#installing-or-reinstalling-your-dedicated-server).
3. The inability to connect after installing ESXi 7 comes from VMWare's security system. There are no blocking rules in your firewall. It will not be possible to reset the administrator password on VMware.
4. [Secure your dedicated server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server).

Safety best practices include:

- Updating your ESXi systems immediately.
- Disabling the OpenSLP service on the server or restricting access to only trusted IP addresses. Find more information about this on [VMware documentation](https://kb.vmware.com/s/article/76372).
- Updating your antivirus solution regularly.
- Ensuring that access to your servers or network devices is limited, controlled and protected with robust passwords.
- Backing up your critical data to external drives and backup servers that are protected and isolated from the Internet.
- Implementing logging solutions to monitor events on your critical servers and network devices.
- Implementing security packs for malicious action detection, intrusion detection (IPS / NIDS) and network traffic bandwidth control.
- Disabling unused ports.

### How do I track updates about the ESXiArgs ransomware?

You can follow the progress of the situation, as well as future patches, at [this address](https://blog.ovhcloud.com/ransomware-ciblant-vmware-esxi/).
We also advise you to follow the [NCSC threat reports](https://www.ncsc.gov.uk/section/keep-up-to-date/threat-reports?q=&defaultTypes=report&sort=date%2Bdesc).

### What are the right responses to adopt in case of intrusion on an information system?

We invite you to follow the [NCSC incident management guidance](https://www.ncsc.gov.uk/collection/incident-management) and the [NCSC guide to ransomware](https://www.ncsc.gov.uk/ransomware/home).

### Is there a risk of data exfiltration?

Not to our knowledge on this wave of attack.

### Is the Hosted Private Cloud powered by VMware affected by this incident?

Our customers using [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/en-gb/hosted-private-cloud/) solutions are not affected by the ransomware. Specifically, the SSL gateway makes it possible to avoid this type of attack by blocking external access to this port (OpenSLP 427).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
