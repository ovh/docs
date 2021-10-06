---
title: 'Changing the DNS servers of Public Cloud instances'
slug: change-instance-dns-servers
excerpt: 'Find out how to change the default DNS servers on a Public Cloud instance'
legacy_guide_number: 1985
section: Networking
order: 12
---

**Last updated 30th September 2021**

## Objective

The default DNS server configured on instances will be the OVHcloud server (213.186.33.99). You can add a secondary one or replace this configuration with your own. However, the DNS servers are configured automatically by a DHCP server, and you will not be able to change it by editing the resolv.conf file.

**This guide explains how to change the DHCP configuration of an instance in order to change the DNS servers.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- a [Public Cloud instance](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- administrative access (root) via SSH or GUI to your instance
- basic networking and administration knowledge

## Instructions

### For Debian/Ubuntu

- Connect to your instance via SSH. To do this, you can refer to our guide on [Logging in to a Public Cloud instance](../first-login/){.external}.
- Make yourself the root user. To do this, you can refer to our guide on [Becoming the root user and selecting a password](../become_the_root_user_and_select_a_password/){.external}.

> [!primary]
>
> You can check the `resolv.conf` file to verify the configured DNS servers.
> 

```
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver 213.186.33.99
```


- Edit the /etc/dhcp/dhclient.conf file with the DNS servers you want.

There are two ways of configuring this:

You can add a DNS server in addition to the one we provide by default.
  
```
supersede domain-name-servers 127.0.0.1;
```

You can add a DNS server to replace the one we provide by default.
    
```
prepend domain-name-servers 127.0.0.1;
```
 
- Check that the configuration has been applied properly (this may take several minutes):

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver 127.0.0.1
nameserver 213.186.33.99
```

### For CentOS/Fedora

- Connect to your instance via SSH. To do this, you can refer to our guide on [Logging in to a Public Cloud instance](../first-login/).
- Make yourself the root user. To do this, you can refer to our guide on [Becoming the root user and selecting a password](../become_the_root_user_and_select_a_password/).
- Check the current configuration via the nmcli command:

```
nmcli
 
eth0: connected to System eth0
        "Red Hat Virtio"
        ethernet (virtio_net), FA:16:3E:B6:FB:89, hw, mtu 1500
        ip4 default
        inet4 51.77.205.51/32
        route4 0.0.0.0/0
        route4 51.77.205.51/32
        route4 51.77.204.1/32
        inet6 fe80::f816:3eff:feb6:fb89/64
        route6 ff00::/8
        route6 fe80::/64
 
lo: non-managed
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

- Find the name of your public interface:

```
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```

- Disable automatic DNS modification, and enter the DNS you want:

```
nmcli con mod "Your interface name" ipv4.ignore-auto-dns yes
nmcli con mod "Your interface name" ipv4.dns "127.0.0.1 213.186.33.99"
```

- Apply the configuration:

```
nmcli con down "Your interface name" && nmcli con up "Your interface name"
```

- Check that the configuration has been properly applied:

```
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

### On Windows

- Connect via remote desktop, or via the VNC console. To do this, you can refer to our guide on [Logging in to a Public Cloud instance](../first-login/).

- Open the network configuration control panel.

![change-dns-servers](images/changednsservers1.png){.thumbnail}

- Then go to your public network adapter’s IPv4 configuration.

![change-dns-servers](images/changednsservers2.png){.thumbnail}

- Add the servers you want to use:

![change-dns-servers](images/changednsservers3.png){.thumbnail}

> [!success]
>
In PowerShell, you can use the command `nslookup` to check which DNS server is used by default.
>

## Go further

[Logging in to an OVHcloud Public Cloud instance](../first-login/)

[Becoming the root user and selecting a password](../become_the_root_user_and_select_a_password/)

[Changing the hostname of a Public Cloud instance](../changing_the_hostname_of_an_instance/)

Join our community of users on <https://community.ovh.com/en/>.