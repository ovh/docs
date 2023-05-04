---
title: NSX - FAQ
excerpt: Frequently asked questions on NSX
updated: 2023-05-04
---

- [Is it possibible to do BGP?](#bgp)
- [How to set up or add another Tier-0 Gateway?](#addt0gw)
- [Can I configure an active-active Tier-0 Gateway in order to have a double bandwidth (10+10=20Gb/s guarantee and 25+25Gb/s "theorical")?](#t0gwdoublebw)
- [How do I configure the Tier-O public Gateway?](#t0config)
- [What is the maximum number of interfaces (connected segments) on a Tier-1 Gateway?](#t1interfacecapacity)
- [What is the maximum number of Tier-1 Gateways per Edge?](#t1edgecapacity)
- [At which point do we need to add more NSX Edge VMs?](#nsxedgevm)
- [Are Edge Transport Nodes managed by OVHcloud or the customers?](#edgetransportnodes)
- [How to add more Public IPs?](#addpublicip)
- [Can IP address blocks be used/distributed between two VMware DCs in the same PCC?](#ipblockdistribution)
- [Does the hourly billing remain the same with NSX?](#hourlybilling)

>> [!faq]
>
> <a name="bgp"></a>
> Is it possibible to do BGP?
>> It is not possible to do Public BGP.
>> Though it is possible to do BGP in the vRack, a documentation will be available soon to detail this workaround.
>
> <a name="addt0gw"></a>
> How to set up or add another Tier-0 Gateway?
>> It is currently not possible to add a new working tier-0 Gateway. You can add a T0 but not the required segments to make it work. 
>
> <a name="t0gwdoublebw"></a>
> Can I configure an active-active Tier-0 Gateway in order to have a double bandwidth (10+10=20Gb/s guarantee and 25+25Gb/s "theorical")?
>> No, the configuration is managed by OVHcloud and is done in active/passive mode with a VIP.
>
> <a name="t0config"></a>
> How do I configure the Tier-O public Gateway?
>> The Tier-0 Gateways are each hosted in a different host, HA is enabled and a VIP is configured between the 2 EDGES in order to maintain service continuit.
>> The HA part is already preconfigured by OVHcloud.
>
> <a name="t1interfacecapacity"></a>
> What is the maximum number of interfaces (connected segments) on a Tier-1 Gateway?
>> This information can be found in NSX > Inventory > Capacity.
>
> <a name="t1edgecapacity"></a>
> What is the maximum number of Tier-1 Gateways per Edge?
>> Regarding the Edges, we refer to the Gateways and the Tier-0 and Tier-1. Tier-0 is already deployed and uses 3 public IPs to route between the active/backup Gateways and uses the concept of a VIP that is in front of the 2 internal public IPs. This is used for failover and redundancy.
>> NSX and NSX-s are different and at the moment you cannot break the current Tier-0 configuration and deploy others.
>
> <a name="nsxedgevm"></a>
> At which point do we need to add more NSX Edge VMs?
>> You can't add NSX Edge VMs.
>
> <a name="edgetransportnodes"></a>
> Are Edge Transport Nodes managed by OVHcloud or the customers?
>> Edges are managed by OVHcloud.
>
> <a name="addpublicip"></a>
> How to add more Public IPs?
>> As indicated in [this guide](/pages/cloud/private-cloud/nsx-01-first-steps#displaying-the-ha-vip-virtual-ip-address), at the moment it is not possible to create new virtual IP addresses, but this feature should be available soon.
>
> <a name="ipblockdistribution"></a>
> Can IP address blocks be used/distributed between two VMware DCs in the same PCC?
>> IP address blocks are PCC dependent, not vDC dependent. Therefore it is possible to use the same IP address block between multiple virtual data centres (withouy any changes).
>
> <a name="hourlybilling"></a>
> Does the hourly billing remain the same with NSX?
>> Hourly billing does not change.


