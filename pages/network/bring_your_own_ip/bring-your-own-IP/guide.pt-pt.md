---
title: How to use the Bring Your Own IP feature (EN)
excerpt: Find out how to easily import your own IP as Additional IP to your OVHcloud account
updated: 2023-09-05
---

## Objective

The [Bring Your Own IP (BYOIP)](https://www.ovhcloud.com/pt/network/byoip/) feature allows you to use IP addresses ranges that you already own, as Additional IPs directly on the OVHcloud network and products.

These IP addresses will be imported in the form of a /24 IP block size and will behave like a regular OVHcloud [Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/) block product.

## Requirements

- [Your IP range must be in a supported RIR](#supportedrir)
- [Your IP range must have a supported size](#supportedsize)
- [Your IP range is not in use on the Internet](#notinuseontheinternet)
- [Your IP/AS have a clean reputation](#cleanipreputation)
- [You need to choose a campus](#chooseacampus)
- [You must prove ownership of the IP range](#proveownershipip)
- [You must prove ownership of the AS number](#proveownershipas)
- [You have to allow OVHcloud to announce the IP range](#announceip)

### Your IP range must be in a supported RIR <a name="supportedrir"></a>

A [Regional Internet registry](https://en.wikipedia.org/wiki/Regional_Internet_registry) (RIR) is an organization that manages IP addresses in a given region.

You need to own (see below) a public IPv4 block with one of the following RIRs:

- [ARIN](https://www.arin.net/)
- [RIPE](https://www.ripe.net/)

It is now possible to use ARIN or RIPE IP blocks on any OVHcloud campus. This enhanced flexibility enables more efficient management and optimized allocation of IP addresses to meet your company's specific needs.

Unlike the previous policy, where an ARIN block could only be used with OVHcloud services located in Canada or the USA, and a RIPE block could only be used with OVHcloud services located in Europe, this restriction has been lifted.

To be considered as a valid owned block, imported blocks must be one of the following types :

- ARIN (object «Network type »)
    - Direct Allocation
    - Direct Assignment

See <https://www.arin.net/resources/registry/whois/#network> and <https://www.arin.net/resources/registry/reassignments/> for more information on Net Types objects.

- RIPE (object « status »)
    - ASSIGNED PI
    - LEGACY
    - ALLOCATED PA

See [« Description of the INETNUM Object »](https://apps.db.ripe.net/docs/04.RPSL-Object-Types/02-Descriptions-of-Primary-Objects.html#description-of-the-inetnum-object) for more information on status objects.

### Your IP range must have a supported size <a name="supportedsize"></a>

We accept IP blocks from size /24 up to size /19. Below, is the number of /24 you will receive from the imported range:

|CIDR|Number of /24 blocks|
|---|---|
| /24 | 1 |
| /23 | 2 |
| /22 | 4 |
| /21 | 8 |
| /20 | 16 |
| /19 | 32 |

### Your IP range is not in use on the Internet <a name="notinuseontheinternet"></a>

The range should not be announced or in use on the Internet (no announcement in terms of Border Gateway Protocol (BGP) on at least one public network). You are free not to meet this prerequisite, in which case OVHcloud will not be able to ensure the proper functioning and support of this service.

### Your IP/AS have a clean reputation <a name="cleanipreputation"></a>

We may refuse using IPs/AS with a bad reputation, and we reserve the right to stop announcing the IPs/AS if their reputation has a negative impact on OVHcloud's reputation.

### You need to choose a campus <a name="chooseacampus"></a>

A campus can be viewed as a list of datacenters where an IP can be used.

You will need to choose one campus where your IP will be used. Once the delivery is done, you will be able to move any /24 size block obtained from the imported range to any OVHcloud services in the same campus as the one chosen at order time.

Below is a list of current campuses:

- RBX (Roubaix)
    - rbx (1-8)
- GRA (Gravelines)
    - gra (1-3)
- SBG (Strasbourg)
    - sbg (1-5)
- WAW (Warsaw)
    - waw1
- LIM (Limburg)
    - lim (1,3)
- ERI (Erith)
    - eri1
- BHS (Beauharnois)
    - bhs (1-8)
- SGP (Singapore)
    - sgp1
- YNM (Mumbai)
    - ynm1

### You must prove ownership of the IP range <a name="proveownershipip"></a>

To prove that you are the owner of the range, you will be requested to enter a special token which we will provide, into the public whois object corresponding to your range. This will be done via the web portal of the RIR managing your IPs. This token will be provided at order.

- For RIPE, edit the « **descr** » field of the « **inetnum** » object of the IP.
- For ARIN, edit the « **Public Comments** » field of the « **Network** » object.

The token needs to appears in the description field (see above) of the whois object, in a dedicated line. Other lines may be present, as long as the token is present in its own dedicated line in the description. The token must be added before placing the order, and must not be removed until the end of the delivery process.

### You must prove ownership of the AS number (required only if you provide an AS number) <a name="proveownershipas"></a>

To prove that you are the owner of the AS number, you will be required to reuse the same token previously used to prove ownership of the IP range, and insert it into the public whois object corresponding to the AS number. This will be done via the web portal of the RIR managing your AS number. This token will be provided at order (it may also be found directly in the OVHcloud Control Panel, in the IP section).

- For RIPE, edit the « **descr** » field of the « **aut-num** » object of the AS number.
- For ARIN, edit the « **Public Comments** » field of the « **ASN** » object.

The token needs to appears in the description field (see above) of the whois object, in a dedicated line. Other lines may be present, as long as the token is present in its own dedicated line in the description. The token must be added before placing the order, and must not be removed until the end of the delivery process.

### You have to allow OVHcloud to announce the IP range <a name="announceip"></a>

On the RIR where the IP range is registered, you will need to create a **route object** for it (matching exactly the IP range), with the OVHcloud **AS number** ("AS16276") or your own AS number in the **origin** field of the route object.

For more information on route objects, please refer to your RIR’s documentation page :

- RIPE - [Managing Route Objects](https://www.ripe.net/manage-ips-and-asns/db/support/managing-route-objects-in-the-irr)
- ARIN - [Submitting Routing Information](https://www.arin.net/resources/manage/irr/#submitting-routing-information)

> [!warning]
> If your imported IP block is already advertized on the Internet from sites other than OVHcloud (multihoming case), you risk packet loss or other routing issues. We will therefore not be able to guarantee connectivity to OVHcloud services with your imported IP block.

## Instructions

### How to use the product

The imported IPs will behave like the current Additional IP product. An imported IP range will be split into /24 blocks that will be movable to any service in the same campus.<br>
To activate the announcement of your imported IP range on the Internet, simply assign one of your block to an eligible product via the control panel or the OVHcloud API.<br>

> [!warning]
> Some operations available on the Additional IP product will not be available on the BYOIP product.
>
> For example, you will not be able to customize your blocks' WHOIS via the OVHcloud Control Panel/API, because OVHcloud does not own them.
>
> For the same reason, you will not be able to edit your IP's reverses out of the box via the OVHcloud Control Panel/API.
>

<br>During the delivery, we will create ARPA zones on our DNS servers and any reverse DNS modification via the OVHcloud Control Panel/API will be applied on them. However, these modifications will be visible to the public when our DNS servers receive delegations of the ARPA zones by the RIR. (This is optional, if you want to continue managing your reverse DNS on your own, you can).

### Range slicing <a name="range-slicing"></a>

Any imported IP block can be further split into smaller blocks and/or individual addresses.

> [!warning] 
> To be able to slice/merge an existing IP block, it must be unused (i.e. in the parking area) and there must not be any pending task associated with it (e.g. no pending move operation).

To slice a block, use the following API call :

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/bringYourOwnIp/slice
>

Use the following parameters:

- ip : the IP block you want to slice, in CIDR notation.
- slicingSize : the resulting size of the sliced blocks, expressed as a network prefix size, in bits. For example if you want to slice a /24 block into 2 smaller blocks of size /25, you should enter the value "25".

> [!primary]
> This API call is asynchronous, the newly created blocks are made available shortly after the call. They will be usable as any other Additional IP block or individual address.

You can preview the resulting blocks that would be created for each block size, by using the following API call:

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/bringYourOwnIp/slice
>

Use the following parameters:

- ip : the IP block you want to slice, in CIDR notation.

To merge back a block into a parent block, use this API call :

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/bringYourOwnIp/aggregate
>

Use the following parameters:

- ip : the IP block you want to slice, in CIDR notation.
- aggregationIp : the resulting block, in CIDR notation.

The resulting block will be an aggregate of all its children blocks.

> [!primary]
> This API call is asynchronous, the re-aggregated blocks are made available shortly after the call.

You can preview all the possible configurations of aggregated blocks for a given IP block, by using the following API call:

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/bringYourOwnIp/aggregate
>

Use the following parameters:

- ip : the IP block you want to merge into a parent block, in CIDR notation.

This call returns a list of possible aggregated blocks and, for each one of them, gives the list of children blocks to be merged back.

**Limitations**:

- This feature is currently available via API only. It will be added to the OVHcloud Control Panel in the near future.
- Configuration elements associated to individual IP addresses (/32) such as firewall rules or reverse DNS entries will be kept after slicing/merging operations.
- Slice/Aggregate API tasks cannot be followed up by the asynchronous task number returned by API, as associated IP objects will be destroyed in the slice/aggregate process.
- The listing of IP addresses and blocks returned by API is ordered by network prefix size. We are working to provide a solution to list IPs by numerical order.
- Once sliced, smaller blocks are not movable outside the campus chosen during the order of the product.
- Moving a /24 block across french campuses won't work if :
    - It has been reaggregated from a previous slicing.
    - The /24 block was imported from a bigger block (/23 to /19).

## FAQ

### Is it possible to import an IP range lower than a /24?

No, the minimum accepted size is a /24.

### Is it possible to import an IP range bigger than a /19?

Not at product launch, but feel free to contact us to discuss this.

### Is splitting the imported /24 into smaller block size (/25, /26, /27, /28, /29, /30) or into /32 supported?

Yes, please see the [Range slicing](#range-slicing) section for more details.

### Can I import an ARIN range in campuses accepting only RIPE ranges, and vice-versa?

Yes, with our updated policy, it is now possible to use ARIN or RIPE IP blocks on OVHcloud campus where the BYOIP product is available. We've removed previous restrictions to offer greater flexibility and efficiency in IP address management and allocation. You can import and use your IP blocks according to your specific needs, regardless of the geographical location of the campus.

### Can I import an ARIN AS number with a RIPE IP range, and vice-versa?

Yes.

### Can I import an IP range or AS number managed by APNIC/AFRINIC/LACNIC?

Not for the moment.

### Is it possible to use an IP range on more than one campus?

No, an IP range must be used in only one campus.

### Is changing the campus of an imported IP range possible?

It is not possible to change the campus of an imported IP range. To achieve this you would have to release the product and purchase it again. However, if you have chosen a French campus at the time of the order and if you ordered the service after January 1st, 2023, you will be able to move your IP blocks across all the datacenters located in France (Gravelines, Roubaix and Strasbourg).

### How will I know which OVHcloud DNS servers will handle the ARPA zone for my imported IP?

Their names will be communicated in the delivery email.

### Is it possible to import an IPv6?

Not for the moment.

### Can I order the service while I still have my IP range announced from another site?

Yes, but once the BYOIP service has been delivered, you must immediately cancel the annoucement from the other site, as you risk connectivity issues with any services hosted at OVHcloud. In this case, OVHcloud cannot be held responsible.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
