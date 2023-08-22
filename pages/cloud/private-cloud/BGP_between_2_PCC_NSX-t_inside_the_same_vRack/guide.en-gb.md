---
title: "BGP between 2 PCC NSX-t inside the same vRack"
excerpt: "How to link 2 VMs from 2 PCCs NSX-t inside the same vRack."
updated: 2023-08-21
---
- [Context](#context)
- [DE preparation](#de-preparation)
    - [Segment creation](#segment-creation)
        - [VLAN12 vlan](#vlan12-vlan)
        - [Segment DE (overlay Geneve)](#segment-de-overlay-geneve)
    - [VRF Creation](#vrf-creation)
    - [T1 Creation](#t1-creation)
    - [Connect the "Segment DE" to the T1 GW](#connect-the-segment-de-to-the-t1-gw)
    - [Create your VM in the vSphere](#create-your-vm-in-the-vsphere)
- [UK preparation](#uk-preparation)
    - [Segment creation](#segment-creation-1)
        - [VLAN12 vlan](#vlan12-vlan-1)
        - [Segment UK (overlay Geneve)](#segment-uk-overlay-geneve)
    - [VRF Creation](#vrf-creation-1)
    - [T1 Creation](#t1-creation-1)
    - [Connect the "Segment DE" to the T1 GW](#connect-the-segment-uk-to-the-t1-gw)
    - [Create your VM in the vSphere](#create-your-vm-in-the-vsphere-1)
- [Prepare NSX for BGP routing](#prepare-nsx-for-bgp-routing)
   - [DE preparation](#de-preparation-1)
      - [On the VRF](#on-the-vrf)
         - [Enable BGP and peers](#enable-bgp-and-peers)
         - [Configure a Route Re-distribution](#configure-a-route-re-distribution)
       - [On the T1](#on-the-t1)
   - [UK preparation](#uk-preparation-1)
      - [On the VRF](#on-the-vrf-1)
         - [Enable BGP and peers](#enable-bgp-and-peers-1)
         - [Configure a Route Re-distribution](#configure-a-route-re-distribution-1)
       - [On the T1](#on-the-t1-1)
- [It pings](#it-pings)
   - [From UK to DE](#from-uk-to-de)
   - [From DE to UK](#from-de-to-uk)
- [NSX Network Topology view](#nsx-network-topology-view)
   - [UK](#uk)
   - [DE](#de)

# Context
I want to link 2 VMs from 2 PCCs.



PCC in DE : pcc-145-239-250-146.ovh.de

PCC in UK : pcc-145-239-249-80.ovh.uk

I will use a vlan in vRack for the BGP peer connectivity. Vlan 12.
![Context](images/1.png)

# DE preparation
## Segment creation
### VLAN12 (vlan)
Create a segment in the ovh-tz-vrack transportzone with the vlan ID 12. Give any IP for the Gateway, we are not going to use it.
![DE_Preparation](images/2.png)

### Segment DE (overlay Geneve)
Create an overlay segment where we are going to deploy our VM. I will use the 172.16.0.254 as Gateway on that segment. Configure a DHCP server to ease the deployment. This is not mandatory.

Note that we connect our segment to the **ovh-T1-gw** T1, we are going to change that later.

![DE_Preparation2](images/3.png)

![DE_Preparation3](images/4.png)

## VRF Creation
On the T0 menu, add a VRF type GW.
![VRF_creation](images/5.png)

I name it VRF-12 and I connect it to the **ovh-T0-gw** gateway. Save it and keep editing.
![VRF_creation2](images/6.png)
![VRF_creation3](images/7.png)

Create 2 interfaces. One for each edge. On my IP plan, I have chosen 10.0.0.1 and 10.0.0.2, and I connect them to the previously created **vlan12** segment.
![VRF_creation4](images/8.png)
![VRF_creation5](images/9.png)
![VRF_creation6](images/10.png)

## T1 Creation
On the Tier-1 Gateways, add a new T1, name it as you want, I did **T1**, connect it to our VRF, connect it to our Edge cluster.
![T1_creation](images/11.png)

## Connect the "Segment DE" to the T1 GW
Edit the Segment DE that we have just created, and change the Connected GW to **T1**.
![DE](images/12.png)
At the end you should have something like this :
![DE1](images/13.png)

## Create your VM in the vSphere
Create a VM, put it in your **Segment DE** portgroup, and you should have an IP. I have 172.16.0.10.
![VM](images/14.png)

# UK preparation
## Segment creation
### VLAN12 (vlan)
Create a segment in the ovh-tz-vrack transportzone with the vlan ID 12. Give any IP for the Gateway, we are not going to use it.
![UK](images/15.png)

### Segment UK (overlay Geneve)
Create an overlay segment where we are going to deploy our VM. I will use the 192.168.0.254 as Gateway on that segment. Configure a DHCP server to ease the deployment. This is not mandatory.

Note that we connect our segment to the **ovh-T1-981** T1, we are going to change that later.
![UK1](images/16.png)
![UK2](images/17.png)

## VRF Creation
On the T0 menu, add a VRF type GW.
![VRF](images/18.png)

I name it VRF-12 and I connect it to the **ovh-T0-gw** gateway. Save it and keep editing.
![VRF1](images/19.png)
![VRF2](images/20.png)

Create 2 interfaces. One for each edge. On my IP plan, I have chosen 10.0.0.3 and 10.0.0.3, and I connect them to the previously created **vlan12** segment
![VRF2](images/21.png)
![VRF3](images/22.png)
![VRF4](images/23.png)

## T1 Creation
On the Tier-1 Gateways, add a new T1, name it as you want, I did **T1**, connect it to our VRF, connect it to our Edge cluster.
![T1](images/24.png)

## Connect the "Segment UK" to the T1 GW
Edit the **Segment UK** that we have just created, and change the Connected GW to **T1**.
![SEG](images/25.png)

At the end you should have something like this :
![SEG1](images/26.png)

## Create your VM in the vSphere
Create a VM, put it in your **Segment UK** portgroup, and you should have an IP. I have 192.168.0.10.
![VM](images/27.png)

# Prepare NSX for BGP routing
Note the AS Numbers.

Note : As of today ( 11 Jul 2023 ) the feature is not available at the vrf level. It will be available with release 4.1.1 of NSX. The AS is 65000 on both PCC if you do not change anything because natively configured at the T0 level by the automation.

UK is 65000, IPs of my Edges are 10.0.0.3 and 10.0.0.4.
![BGP](images/28.png)

DE is 65005, IPs of my Edges are 10.0.0.1 and 10.0.0.2.
![BGP1](images/29.png)

## DE preparation
### On the VRF
#### Enable BGP and peers
Enable BGP and add the Peers from UK.
![VRFDE](images/30.png)
![VRFDE1](images/31.png)

#### Configure a Route Re-distribution
You need to configure a Route Redistribution of the connected Segments.

On the **Route Re-distribution** section of your VRF.
![VRFDE2](images/32.png)

Add one Route Re-distribution rules with the connected segments of your T1.
![VRFDE3](images/33.png)
![VRFDE4](images/34.png)
![VRFDE5](images/35.png)

### On the T1
Allow on the **Route Advertisement** the Connected Segments & Service Ports.
![T1DE](images/36.png)

## UK preparation
### On the VRF
#### Enable BGP and peers
Enable BGP and add the Peers from DE.
![VRFUK](images/37.png)
![VRFUK1](images/38.png)

#### Configure a Route Re-distribution
You need to configure a Route Redistribution of the connected Segments.

On the **Route Re-distribution** section of your VRF.
![VRFUK2](images/39.png)

Add one Route Re-distribution rules with the connected segments of your T1.
![VRFUK3](images/40.png)
![VRFUK4](images/41.png)
![VRFUK5](images/42.png)

### On the T1
Allow on the **Route Advertisement** the Connected Segments & Service Ports.
![T1UK](images/43.png)

# It pings
## From UK to DE
![PING](images/44.png)

## From DE to UK
![PING1](images/45.png)

# NSX Network Topology view
## UK
![TOPO](images/46.png)

## DE
![TOPO1](images/47.png)
  
Join our community of users on <https://community.ovh.com/en/>.
