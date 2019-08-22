---
title: 'Adding a domain to secondary DNS on a Dedicated Server'
slug: secondary-dns
excerpt: 'This guide will show you how to add a domain to secondary DNS of your Dedicated Server'
section: 'Network Management'
---

**Last updated 13th June 2018**

## Objective

If you want to use your [Dedicated Server](https://www.ovh.co.uk/dedicated_servers/){.external} as the primary DNS for your domain, you can add the domain as a secondary DNS to your server.

**This guide will show you how to create a secondary DNS, and add it to your Dedicated Server.**

## Requirements

* a [Dedicated Server](https://www.ovh.co.uk/dedicated_servers/){.external} with any OS installed
* a [domain](https://www.ovh.co.uk/domains/){.external} in your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
* access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}


## Instructions

### Retrieve the secret value (TXT record)

Click the `Dedicated`{.action} menu, then click `Dedicated Servers`{.action} to expand the list of servers in your account:

![Secondary DNS](images/dns2-01.png){.thumbnail}

Next, select the `Secondary DNS`{.action} tab, and click `Add a domain`{.action}:

![Secondary DNS](images/dns2-02.png){.thumbnail}

Enter your domain in the `Domain` field, then click `Next`{.action}:

![Secondary DNS](images/dns2-03.png){.thumbnail}
>

You will now see a message instructing you to create a TXT record for your domain in order to verify the domain's ownership and add it to the list. Make a note of the sub-domain and the secret value in the instructions, then click `Cancel`{.action}:
>
![Secondary DNS](images/dns2-04a.png){.thumbnail}
>

### Verify your domain's ownership (External DNS Servers)

Create a new TXT record in your DNS zone file with your registrar. In the "Name" field, write "ownercheck" (depending on your registrar this may need to be ownercheck.yourdomain.com). In the "Value" field, write the secret value you were provided. 
>
Prior to clicking the Next button, make sure your newly added record is publicly accessible. You can check this by using * access to the [MX Toolbox](https://mxtoolbox.com/SuperTool.aspx?action#){.external}, a third-party site the performs DNS lookups. Change the option to "TXT Lookup" and put ownercheck.yourdomain.com in the field.

### Verify your domain's ownership (OVH DNS Servers)
> [!warning]
>
> Note: This process is only for domains hosted in OVH DNS servers. If you use external DNS servers the process is the same. However, you will have to adapt it since the Control Panel will be diffrent.
>
Log in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} and click the `Web`{.action} menu. Then click `Domains`{.action} to expand the list of domains:

![Domain verification](images/domain-verification-01.png){.thumbnail}

After selecting your domain, click the `Add an entry`{.action} button:

![Domain verification](images/domain-verification-02.png){.thumbnail}

Next, select the `TXT`{.action} record type, then click `Next`{.action} to continue:

![Domain verification](images/domain-verification-03.png){.thumbnail}

Now fill in the `Sub-domain` and `Value` fields using the information you noted down earlier. When you have done this, click `Next`{.action}:

![Domain verification](images/domain-verification-04.png){.thumbnail}

Finally, confirm your entry by clicking the `Confirm`{.action} button:

![Domain verification](images/domain-verification-05.png){.thumbnail}


### Configuring the DNS Records on Your Server
> [!warning]
>
> This operation is necessary if you want to change your domains name servers towards a personalized ones. Otherwise, dns checks will fail and you won't be able to use personalized name servers. You can use [Men and Mice Dig](https://www.menandmice.com/support/dig/){.external} to perform an online dig before changing your name servers. This tool will help you understand if an error exists or if some additional configuration is necessary.
>
First, you need to install BIND (or any DNS server). You can use this link for [BIND_Installation](https://www.isc.org/downloads/bind/doc/){.external}. BIND stands for Berkeley Internet Name Domain. It is a program you can download and install on your Unix or Linux server to give it the ability to become a DNS server for private (LAN) or public (Internet) networks.
>
To test if you have BIND, use the following command:
>
```sh
$ named -v
```
>
The command will tell you what version of BIND you are running. If nothing shows, BIND is not currently installed. Please consult your distro documentation about how to install BIND. The distro documentation may give you a command to run in your terminal which is an easier way to install BIND. 
>
**If you wish to personalized DNS servers** you have to configure **GLUE records** in your DNS zone. The **GLUE record** is essentially a couple of DNS records (NS and A records) binding the domain mydomain.com to the primary zone of your DNS server ns1.mydomain.com and to the secondary DNS zone in sdns2.ovh.net (OVH’s secondary DNS server).
>
You should change this tutorial according to your server information. Example:
>
```
DOMAIN: mydomain.com
SERVER_HOST: ns0000000.ip-1-2-3.net
SERVER_IP: 1.1.1.1
DNS_SERVER: ns1.mydomain.com
```
>
We will then create glue record's (a pair of NS and A records) at your registrar (the specific instructions and procedures vary with each registrar). Here is an example so you can configure it manually in your dedicated server:

```
; BIND db file for mydomain.com

$TTL 86400

@       IN      SOA     ns1.mydomain.com.      hostmaster.mydomain.com. (
                        2019052201	; serial number YYMMDDNN
                        28800           ; Refresh
                        7200            ; Retry
                        864000          ; Expire
                        86400           ; Min TTL
			)

	            IN		NS      ns1.mydomain.com
	            IN		NS      ns1.mydomain.com
	            IN		MX      1 mail.mydomain.com.
ns1		    IN		A       1.1.1.1.1
ns2		    IN		A       213.251.188.141
mail		    IN		A       1.1.1.1.1
```
>
Bear in mind that those 2 DNS servers must be previously configured in a working DNS zone. Therefore, you should have already a working DNS zone in order to configure the ns1.mydomain.com and ns2.mydomain.com to point to each IP (main IP of server + secondary DNS IP). If you don't do this operation, ns1.mydomain.com and ns2.mydomain.com won't be known in the Internet and they won't work.
>
### Authorizing Zone Transfers
>
You need to authorize zone transfers in your server towards OVH Secondary DNS Server. Remember to only authorize trusted DNS servers.
>
The default locations of DNS zone files vary by distro. The following are the files where domain information is stored in BIND:
>
`Debian`
>
**/etc/bind/named.conf.local**
>
`Fedora`
>
**/var/named/example.com**
>
`Zone File`

```sh
acl trusted-servers  {
    213.251.188.141;   // sdns2.ovh.net
};
zone example.com  {
    type master;
    file "example.com";
    allow-transfer { trusted-servers };
};
```
>
Once configured, don’t forget to restart `named`:
>
```sh
$ sudo systemctl restart named
```
> You can now utilize OVH Secondary DNS.
### Add Your Domain to OVH Secondary DNS

Click the `Dedicated`{.action} menu, and then click `Dedicated Servers`{.action} to expand the list of servers in your account:

![Secondary DNS](images/dns2-01.png){.thumbnail}

Next, select the `Secondary DNS`{.action} tab, and click `Add a domain`{.action}:

![Secondary DNS](images/dns2-02.png){.thumbnail}

Enter your domain in the `Domain` field, then click `Next`{.action}:

![Secondary DNS](images/dns2-03.png){.thumbnail}

Since the TXT record for your domain has already been created, just click `Next`{.action} to continue:

![Secondary DNS](images/dns2-04b.png){.thumbnail}

You will be prompted to click the `Add`{.action} button to validate the ownership:

![Secondary DNS](images/dns2-05.png){.thumbnail}

The OVH Manager will validate that you are the owner of the domain and complete the configuration. If you were successful, you will get a popup message such as the one below:
![Secondary DNS](images/secondarydns.png){.thumbnail}
>
Using this configuration, you can take advantage of a free secondary DNS server provided by OVH which will host a slave zone of your domain.
>
This secondary DNS server works as a backup of your main DNS server.
>

### Final remarks
>
In this guide we have seen how you should integrate your domains in the secondary DNS of your dedicated server.
With this procedure you will be able to use the following name servers:

* **Primary DNS server**: ns0000000.ip-1-2-3.net (your dedicated server name or the additional IP you have used)
* **Secondary DNS server**: sdns2.ovh.net (or the one that appears in your Control Panel).
>
If you have created GLUE records as explained before, you will need to use the following name servers:

* **Primary DNS server**: ns1.mydomain.com
* **Secondary DNS server**: ns2.mydomain.com

## Go further

Join our community of users on <https://community.ovh.com/en/>.
