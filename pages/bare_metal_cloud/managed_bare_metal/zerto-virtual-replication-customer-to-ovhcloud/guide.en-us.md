---
title: 'Setting up a VPN for OVHcloud Zerto DRP'
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto-virtual-replication-customer-to-ovhcloud'
excerpt: 'Learn how to setup a VPN tunnel to connect your on-premises plaftorm to your OVHcloud Managed Bare Metal'
updated: 2020-11-18
---

**Last updated 18th November 2020** 

## Objective

This guide provides an outline of how to configure a virtual private network between an on-premises Zerto platform and an OVHcloud Managed Bare Metal.
We will use the OPNsense open-source VPN Solution as an example, and explain the simplest way to set up a VPN tunnel to the Zerto network. 

**Find out how to get started with a VPN for OVHcloud Zerto DRP.**

## Requirements

- one public IP, available on the target Managed Bare Metal for the VPN endpoint
- a Zerto platform installed on the on-premises platform
- VRAs (Virtual Replication Appliances) on both sides that are able to connect to the counterpart on TCP ports 4007 and 4008
- Zerto administration consoles or ZVMs (Zerto Virtual Managers) thatare able to connect to the counterpart on TCP port 9081

### Solution overview

![zerto vpn](images/image-EN-1.png){.thumbnail}

**Listed parameters**:

On-premises side:

- VPN endpoint public IP adress (1)
- VPN endpoint internal IP adress (2)
- ZVM internal IP adress (3)
- ZVM internal network (4)

OVHcloud side:

- VPN endpoint public IP adress (5)
- ZVM internal network (6)
- ZVM internal IP adress (7)

## Instructions

> [!primary]
>
>You need to decide which network to deploy the OVHcloud ZVM in. This avoids any overlap with local networks, which would prevent routing.
>
>You can either accept the suggested network or provide your own, as long as it is within a valid /23 range.
>

### Step 1: Activate Zerto features.

It is easy to activate Zerto features from the OVHcloud Control Panel. You just need to select the datacentre linked to the Managed Bare Metal solution that you want to use, from the `Disaster Recovery Plan`{.action} tab.

![zerto vpn](images/image-EN-2-nucp.png){.thumbnail}

First select `Between your infrastructure and an OVHcloud Managed Bare Metal`{.action}, then click `Activate Zerto DRP`{.action}. Next, select a free public IP from the dropdown menu and enter the desired network range for the ZVM deployment. Confirm the VRA Network range and then click `Install`{.action}.

![zerto vpn](images/image-EN-3.png){.thumbnail}

![zerto vpn](images/image-EN-4.png){.thumbnail}

![zerto vpn](images/image-EN-5.png){.thumbnail}

![zerto vpn](images/image-EN-6.png){.thumbnail}

### Step 2: Activate IPSec service.

From the OPNsense interface, go to the `VPN`{.action} menu on the left, `IPSec`{.action} section and select `Tunnel Setting`{.action}. Click `Enable IPsec`{.action} and click save. 

![zerto vpn](images/image-EN-7.png){.thumbnail}

![zerto vpn](images/image-EN-8.png){.thumbnail}

### Step 3: Set up IPSec tunnel.

You can configure the IPSec tunnel by defining two sets of parameters: **Phase 1** and **Phase 2**.

##### 3.1 Set up Phase 1.

In the `VPN`{.action} menu, go to `Tunnel settings`{.action}, and click on the `+`{.action} to add a new **Phase 1**:

![zerto vpn](images/image-EN-9.png){.thumbnail}

##### 3.1.1 Phase 1: General information.

> ![zerto vpn](images/image-EN-10.png){.thumbnail}

If the default values are correct:

- Connection Method: Default
- Key Exchange version: V2
- Internet Protocol: IPv4
- Interface: WAN

The only required parameter is the OVHcloud IPSec endpoint IP address.

##### 3.1.2 Phase 1: Authentification.

Once the default values are valid, you only need to provide the shared secret for authentication.

![zerto vpn](images/image-EN-11.png){.thumbnail}

##### 3.1.3 Phase 1: Encryption algorithms.

![zerto vpn](images/image-EN-12.png){.thumbnail}

Supported values for each parameters:

- Encryption algorithms: AES 256 bits
- Hash algorithms: SHA256
- Diffie-Hellman key group: 14 (2048 bits)
- Lifetime: 28,800 seconds

You can keep the default values for the other parameters. Click `Save`{.action}, then ` Apply changes`{.action} .

The new Phase 1 is now present in the interface:

![zerto vpn](images/image-EN-13.png){.thumbnail}

#### 3.2 Set up Phase 2.

Click on `Show Phase 2 entries`{.action}.

![zerto vpn](images/image-EN-14.png){.thumbnail}

There is no phase 2 available, so you will need to add one:

![zerto vpn](images/image-EN-15.png){.thumbnail}

Click on `+`{.action}.

![zerto vpn](images/image-EN-16.png){.thumbnail}

##### 3.2.1 Phase 2: General information

Check that the mode is set to  "Tunnel IPv4".

![zerto vpn](images/image-EN-17.png){.thumbnail}

##### 3.2.2 Phase 2: Local Network

The local network type must be set to  "Lan subnet".

![zerto vpn](images/image-EN-18.png){.thumbnail}

##### 3.2.3 Phase 2: Remote Network

You need to give the ZVM IP and the associated network range.

On OVHcloud side, the ZVM network is always a /23 network (512 IPs).

> [!warning]
>
>Make sure to double-check the parameters, otherwise the VPN tunnel won't come up.
>

![zerto vpn](images/image-EN-19.png){.thumbnail}

##### 3.2.4 Phase 2: Key exchange

Supported values are:

- Protocole: ESP
- Encryption algorithm: AES 256 bits
- Hash algorithms: SHA256
- PFS: Off

![zerto vpn](images/image-EN-20.png){.thumbnail}

You can leave advanced parameters to their default value. Click `Save`{.action}, then `Apply changes`{.action}.

#### 3.3. Check VPN status.

![zerto vpn](images/image-EN-21.png){.thumbnail}

Click the orange triangle on the right to initialise the connection:

![zerto vpn](images/image-EN-22.png){.thumbnail}

If all the parameters are correct, the tunnel will come up and two new icons will appear:

* tear down tunnel
* tunnel information

![zerto vpn](images/image-EN-23.png){.thumbnail}

Click on the information icon.

![zerto vpn](images/image-EN-24.png){.thumbnail}

The tunnel is now up. Make sure to add, if required, a route to the OVHcloud ZVM network on your local ZVM.

**Troubleshooting**

If the tunnel is not coming up, make sure that the parameters values are identical on both sides:

- Shared secret
- Remote endpoint IP address
- Remote network range

Make sure that a firewall is not interfering in the dialog between the local and remote endpoints.

You can check the IPSec logfile in /var/log/ipsec.log on the OPNsense appliance to get more information.

### Step 4: Set up firewall.

To allow pairings of on-premises and OVHcloud instances, traffic must be authorised on the following ports:

* TCP 9081 between ZVMs
* TCP 4007/4008 between vRAs

#### 4.1 ZVM opening.

Go to the `Firewall`{.action} menu, `Rules`{.action}  section, `IPSec`{.action} interface:

![zerto vpn](images/image-EN-25.png){.thumbnail}

Click on `Add`{.action} to create a new rule.

![zerto vpn](images/image-EN-26.png){.thumbnail}

![zerto vpn](images/image-EN-27.png){.thumbnail}

Rule parameters are as follow:

- Action: "Pass" (authorise traffic)
- Interface: "IPsec" (incoming traffic coming from the VPN tunnel)
- Protocol: "TCP"

For "Source" and "Destination", select "Single host or Network" type. The source is the OVHcloud ZVM, and the destination is your on-premises ZVM.

![zerto vpn](images/image-EN-28.png){.thumbnail}

Destination TCP port is 9081. Click `Save`{.action} and `Apply Change`{.action}.

#### 4.2 vRAs opening.

vRAs opening is a bit more complex since there are multiple vRAs on each side that need to be able to exchange information on TCP ports 4007 and 4008.
To simplify this setup, we are going to use the alias feature of OPNsense. An alias is a group of objects IPs, networks, URLs…) that can be used in firewall rules.

We will define three aliases:

* one for vRA IPs on the customer side
* one for vRA IPs on the OVHCloud side
* one for the ports

You can get the OVHcloud vRAs IP from the destination Managed Bare Metal vCenter interface.  

![zerto vpn](images/image-EN-29.png){.thumbnail}

Let's create the OVH_VRA alias for OVHCLoud vRAs:

![zerto vpn](images/image-EN-30.png){.thumbnail}

Similarly, we can create an alias for the on-premises vRAs:

![zerto vpn](images/image-EN-31.png){.thumbnail}

Finally, you need to create the ports alias:

![zerto vpn](images/image-EN-32.png){.thumbnail}

We have now all the elements we need to implement the required firewall rules to authorise data coming from the OVHcloud platform. It is the same procedure as before, we just need to use the aliases instead of explicit IPs or ports:

![zerto vpn](images/image-EN-33.png){.thumbnail}

At this point, we have a functional and secure link between our on-premises platform and cloud instance.

![zerto vpn](images/image-EN-34.png){.thumbnail}

### Step 5: ZVM Pairing

Log in to your on-premises ZVM. The following screen is displayed:

![zerto vpn](images/image-EN-35.png){.thumbnail}

Select `Pair to a site with a licence`{.action}, enter the OVHcloud ZVM IP and press `Start`{.action}.

In the dashboard, you can see the pairing is ongoing:

![zerto vpn](images/image-EN-36.png){.thumbnail}

You will be notified when the pairing is successfull:

![zerto vpn](images/image-EN-37.png){.thumbnail}

You can check that your OVHcloud PCC is visible in the `Sites`{.action} tab.

![zerto vpn](images/image-EN-38.png){.thumbnail}

At this point, your Zerto setup is functional and you can start to create your virtual protection groups (VPGs).

#### Troubleshooting

If the on-premises ZVM is not able to successfully contact the OVHcloud ZVM (due to an incorrect firewall setup, for example) you will get the following message:

![zerto vpn](images/image-EN-39.png){.thumbnail}

You will then be brought back to the log-in screen, with the following error message:

![zerto vpn](images/image-EN-40.png){.thumbnail}

The most probable cause is that the OVHcloud ZVM is not authorised to contact your on-premises ZVM on TCP 9081 (it needs to be able to initiate the connection).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
