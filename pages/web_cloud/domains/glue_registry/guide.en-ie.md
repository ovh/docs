---
title: "Customising a domain name’s DNS servers (Hosts)"
excerpt: "Find out how to customise your OVHcloud domain name’s DNS servers"
updated: 2026-02-10
---

## Objective

**DNS servers** host the DNS configurations for domain names: *DNS zones*.

These *DNS zones* consist of technical information: *DNS records*. In standard usage, *DNS records* allow you to:

- Display your website with your domain name, using your hosting server’s IP address (DNS records of the types *A* and *AAAA*).
- Redirect the emails received at your domain name's email address(es) (DNS records of the type *MX*).
- Configure security/authentication information for your services (web hosting plan, email server, etc.) associated with your domain name (DNS records such as *SPF*, *DKIM*, *DMARC*, etc.).

For more information on these topics, see the following guides:

- [Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)
- [Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)
- [How to edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

Depending on your needs, you can customise your OVHcloud domain name’s DNS servers using **Hosts**.

**This guide explains how to customise your OVHcloud domain name’s DNS servers.**

## Requirements

- A [domain name](/links/web/domains) registered with OVHcloud

<!-- CP-NAV-START:web-domains -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Domain names](/links/control-panel/web-domains)
- **Navigation path:** `Web Cloud`{.action} > `Domain names`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-domains -->

## Instructions

> [!warning]
>
> **Customising a domain name’s DNS servers is a sensitive procedure**: An inappropriate change can prevent access to your website and/or interrupt the reception of emails sent to your email addresses.
> Please follow the instructions below carefully, or contact a [specialist provider](/links/partner) if you have any doubts.
>

### 1 – General rule <a name="step1"></a>

Some registries, such as **Verisign** (which manages the *.com*, *.net* extensions as well as other TLDs), use a technical model called **host objects**.<br>
In some cases, this model requires that a specific record be created in advance for a DNS server before it can be **used by a domain name**.<br>
Other registries do not require this record and directly accept the DNS server name.

In general, OVHcloud automatically creates the **host objects** when they are related to a domain name managed by OVHcloud.

> [!warning]
>
> **The "Hosts" tab is only required in one specific case**: the DNS server belongs to a domain name managed by OVHcloud and must be used by another domain name that is not managed by OVHcloud *but is governed by the same registry* (for example, two *.com* domain names).
>

#### Possible cases

| DNS server domain name | Domain name to configure | Host creation by OVHcloud | Manual action required in the "Hosts" menu | Example |
| ---------------------- | ------------------------ | -------------------------- | ------------------------------------------ | ------- |
| Managed by OVHcloud | Managed by OVHcloud | Automatic | No | *ns1.example.com* (domain *example.com* managed by OVHcloud) is used as the DNS server for the domain *test.com* (managed by OVHcloud) |
| Managed by OVHcloud | Managed by OVHcloud | Automatic | No | *ns1.example.com* (domain *example.com* managed by OVHcloud) is used as the DNS server for the domain *test.fr* (managed by OVHcloud) |
| **Managed by OVHcloud** | **Other registrar** | **Automatic configuration not possible** | **Yes** | ***ns1.example.com* (domain *example.com* managed by OVHcloud) is used as the DNS server for the domain *test.com* (managed by another registrar, same *.com* extension)** |
| Managed by OVHcloud | Other registrar | N/A | No | *ns1.example.com* (domain *example.com* managed by OVHcloud) is used as the DNS server for the domain *test.fr* (managed by another registrar) |
| Not managed by OVHcloud | Managed by OVHcloud | Out of scope | No | *ns1.example.net* (domain managed by another registrar) is used as the DNS server for the domain *test.com* (managed by OVHcloud) – the host must be created with the registrar managing *example.net* |

**The third row of the table above is the only scenario where manual creation in the "Hosts" tab is required.**

### 2 - Retrieving the DNS servers currently used by your domain name <a name="step2"></a>

You can retrieve the DNS servers currently used by your domain name using the online DNS tool [Zonemaster](https://zonemaster.net/en).

To do this, go to [https://zonemaster.net](https://zonemaster.net/en), enter your domain name without *www* (*domain.tld*), then tick the `Options`{.action} button located just below the domain name entry form.

In the available options, click on the button `Fetch NS from parent zone`{.action}.

A result is displayed:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Retrieve the *DNS servers* information including **all** their associated IPv4 addresses (in the form of *X.X.X.X* where *X* is a number between *0* and *255*) and IPv6 (other addresses that are not IPv4). You will need them for the rest of this guide.

In our example shown above, the **domain.tld** domain currently uses the following **DNS servers**:

- **dnsX1.ovh.net** associated with IPv4 *203.0.113.0* and IPv6 *2001:db8:1:1b00:203:0:113:0*
- **dnsX2.ovh.net** associated with IPv4 *203.0.113.1* and IPv6 *2001:db8:1:1b00:203:0:113:1*

If you need more information, please read [our tutorial on the Zonemaster tool](/pages/web_cloud/domains/dns_zonemaster).

### 3 - Adding the host records <a name="step3"></a>

> [!warning]
>
> The registries for the extensions *.eu*, *.it*, *.be* and *.de* do not consider host records to be "objects", but rather "attributes".
>
> Therefore, for these extensions, skip **directly to [step 4](#step4)** of this guide without completing step 2.
>

> [!success]
>
> Before you begin, be aware that:
>
> - You can create custom DNS servers directly on the domain name that will use them. For example, you can create *dns1.domain.tld* and *dns2.domain.tld* for the domain name *domain.tld*.
>
> - You can also create custom DNS servers on a domain name to use with another domain name. For example, you can create *dns1.domain1.tld* and *dns2.domain1.tld* for the domain name *domain2.tld*. You will need to retrieve the DNS servers and their associated IPs from the *domain2.tld*.
>  
> In addition, *domain1.tld* must be registered with OVHcloud to set up the hosts.
>

Toclick on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Click [this link](/links/control-panel/web-domains), then choose the domain name concerned.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> On the new page, click on the `Hosts`{.action} tab.
>>
>> A table will display the hosts currently configured at OVHcloud for your domain name. To add a new host record, click the `Add`{.action} button.
>>
>> ![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Step 3**
>>
>> In the window that opens, enter the information requested:
>>
>> |Information|Details|
>> |---|---|
>> |Host Name|Customise the host name you want to use as a custom DNS server.|
>> |Target IP(s)|Specify all IP addresses (IPv4 and/or IPv6) to which the host name should resolve. These are IP addresses of the DNS server currently used by your domain name. If there are multiple IP addresses, separate them with *commas*.|
>>
>> ![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> In the image above, taking the example from [step 2](#step2), the host you want to add here (from the domain name *domain.tld*) is **dns1.domain.tld**. 
>>
>> For this host, the IP addresses of *target DNS server* are indicated as *203.0.113.0* (IPv4) and *2001:db8:1:1b00:203:0:113:0* (IPv6). These IPs correspond to one of the two DNS servers currently used for *domain.tld* (**dnsX1.ovh.net**). 
>>
>> This host is added so that **dns1.domain.tld** can ultimately replace the DNS server name **dnsX1.ovh.net** currently used by the domain name *domain.tld*.
>>
>> Once you have entered this information, click the `Next`{.action} button, read the information displayed, then click `Confirm`{.action}. Repeat this step as many times as necessary, depending on the number of DNS servers your domain name uses.
>>
>> In our example, you will need to repeat the operation to create the **dns2.domain.tld** host. This will then replace the DNS server **dnsX2.ovh.net** currently associated with IPv4 *203.0.113.1* and IPv6 *2001:db8:1:1b00:203:0:113:1*.

### 4 - Create the A and AAAA DNS records corresponding to the custom DNS <a name="step4"></a>

You must create the *A* and *AAAA* records for the host names that you defined in the previous step. The *A* and *AAAA* records must target the destination IP address corresponding to the host name created earlier.

You can do this via the interface given by the service provider managing your domain name’s DNS configuration. There are two ways of doing this:

- **If your domain name does not use an active DNS zone with OVHcloud**: Contact the service provider managing it. Once you have made the required changes, please move on to the next step.
- **Your domain name uses an active DNS zone at OVHcloud**: Log in to your [OVHcloud Control Panel](/links/manager) then go to the `Web Cloud`{.action} section. In the left-hand column, click `DNS zones`{.action}, then select the domain name you used to create the hosts in [step 3](#step3). Go to the `DNS Zone`{.action} tab, then click `Add an entry`{.action}. Select the entry of type *A* or *AAAA* depending on the type of associated IP you want to add. Follow the steps by entering the *subdomain* and the address *IPv4* (A) or *IPv6* (AAAA) then proceed until the addition has been validated. If necessary, please refer to our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}

> [!primary]
>
> In all cases, you will need to wait between 4 and 24 hours for the DNS zone modification to propagate across the entire DNS network. We recommend that you wait until the end of this period before continuing.
>

If we go back to our previous example, the GLUE records that we want to add (from the *domain.tld* domain name) are **dns1.domain.tld** and **dns2.domain.tld**. The goal is to replace the current DNS servers **dnsX1.ovh.net** and **dnsX2.ovh.net**.

As a result, the following records are added to the active DNS zone of the domain name *domain.tld*:

 - An *A* DNS record for the *subdomain* **dns1.domain.tld** to the IP *203.0.113.0* (DNS server IPv4 **dnsX1.ovh.net**)
 - An *AAAA* DNS record for the *subdomain* **dns1.domain.tld** to the IP *2001:db8:1:1b00:203:0:113:0* (DNS server IPv6 **dnsX1.ovh.net**)
 - An *A* DNS record for the *subdomain* **dns2.domain.tld** to the IP *203.0.113.1* (DNS server IPv4 **dnsX2.ovh.net**)
 - An *AAAA* DNS record for the *subdomain* **dns2.domain.tld** to the IP *2001:db8:1:1b00:203:0:113:1* (DNS server IPv6 **dnsX2.ovh.net**)

### 5 - Replacing the NS records in your domain name’s active DNS zone

For the customisation of DNS servers to be visible on the DNS network (by performing a *Whois*, a *dig ns* or through a DNS configuration tool), you will need to replace the *NS* records in your domain name’s active DNS zone.

You can do this via the interface given by the service provider managing your domain name’s DNS configuration. There are two possibilities:

- **Your domain name does not use an active DNS zone at OVHcloud**: Contact the service provider managing it to make the change.
- **Your domain name uses an active DNS zone at OVHcloud**: Log in to your [OVHcloud Control Panel](/links/manager) then go to the `Web Cloud`{.action} section. In the left-hand column, click `DNS zones`{.action}, then select the domain name for which you have customised the DNS servers. Go to the `DNS Zone`{.action} tab, then click `Change in text format`{.action}. 

A window will appear with your DNS zone in *text* mode:

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}

> [!warning]
>
> As a reminder, making an inappropriate change in *text* mode in your DNS zone can prevent access to your website and/or make your email addresses unable to receive incoming emails. 
> Contact a [specialist provider](/links/partner) if you have any doubts.
>

In this window, replace **only in records of the type *NS*** the names of the DNS servers with your own custom DNS server names. You **also have to** increment the first numeric value in the *SOA* line by "1". Once you have made your changes, click `Next`{.action} then `Confirm`{.action}.

The change will not be visible immediately in the [OVHcloud Control Panel](/links/manager). Wait around 20 minutes, then log in to the OVHcloud Control Panel to ensure that your changes have been processed.

> [!primary]
>
> You will need to wait between 4 and 24 hours for the changes in your DNS zone to propagate across the entire DNS network.
>

To get a better understanding of this step, let’s take a look at our example: The domain name *domain.tld* and its DNS zone in "text” mode, visible in the image above.

The following elements are observed: 

- The first numeric value of the line *SOA* is as follows: *2023071700*.
- There are two *NS* records for the domain name *domain.tld*.
- Records of type *NS* still target the two DNS servers **dnsX1.ovh.net** and **dnsX2.ovh.net**.

To continue the customisation of the DNS servers for the domain name *domain.tld*, you will need to:

- Increment the first numeric value of the *SOA* line by "1": *202307170**1***. (If the first numeric value was *2023071704*, you would get the following result: *202307170**5***).
- Replace the target **dnsX1.ovh.net.** with **dns1.domain.tld.** only for the line that starts with **IN NS**.
- Replace the target **dnsX2.ovh.net.** with **dns2.domain.tld.** only for the line that starts with **IN NS**.

Once the modifications are made, the result of our example will be the following:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

For the domain name *domain.tld*, the DNS servers displayed after the DNS modification and propagation have been processed are **dns1.domain.tld.** and **dns2.domain.tld.**.

If necessary, please refer to our guide on [editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

> [!success]
>
> If you have customised your DNS servers directly on the domain name that will use them, the DNS zone may not display the domain name in the targets of the *NS* records, but only the *subdomain*.
>
> For example, instead of displaying the following records:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> The DNS zone can display records as follows:
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> Rest assured, this is the same result and this configuration will work. This phenomenon is generated by the fact that the domain name is the same on both sides of the *NS* record.
>

### 6 - Modifying your domain name’s DNS servers

You will need to modify your domain name’s DNS servers by replacing the old DNS servers with the custom DNS servers you have created.

To do this, log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section. In the left-hand column, click `Domain names`{.action}, then select *the domain name for which you want to customise the DNS servers*.
 
Go to the `DNS servers`{.action} tab, then click `Modify DNS servers`{.action}. Then replace your current DNS servers with those you would like to use as custom DNS servers.

> [!warning]
>
> If your custom DNS servers have been created with the extensions *.eu*, *.it*, *.be* or *.de*, it is **obligatory** to enter the associated IP address for each of your custom DNS servers, respectively.
>
> Without this, custom DNS servers will not be registered correctly, and will not work with your domain name.
>

Finalise the steps and, if necessary, refer to the instructions set out in our documentation "[Modifying an OVHcloud domain name’s DNS servers](/pages/web_cloud/domains/dns_server_edit)”.

> [!primary]
> 
> If you have customised DNS servers on one domain name for use with another domain name that is not registered with OVHcloud, contact the service provider where your other domain name is registered to modify the DNS servers.
>

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}

> [!primary]
>
> A propagation delay of 24 to 48 hours is required for the change of DNS servers to take effect across the entire DNS network. We recommend that you wait until the end of this period before continuing.
>

In our example of customising the DNS servers for the domain name *domain.tld*, we replace the DNS server **dnsX1.ovh.net** with **dns1.domain.tld** and the DNS server **dnsX2.ovh.net** with **dns2.domain.tld**, then wait for the DNS propagation to propagate.

## Go further

[General information on OVHcloud DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).