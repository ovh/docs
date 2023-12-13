---
title: NSX - FAQ (EN)
excerpt: Frequently asked questions on NSX
updated: 2023-10-19
---

## Objective

**Find below the frequently asked questions about NSX.**

## FAQ

<a name="diffencepack"></a>

### What are the different assistance packs? What are the differences between the packs?

All packs are based on days (1 day = 8 hours); 1 day, 2 days or more.

The first approach is the same for all packs with a discovery phase but the duration of the pack will depend on the complexity of the environment and the customer maturity.

This would be discussed with the PS team during a first assessment call.

<a name="eofnsxv"></a>

### What is the deadline for the NSX-T migration? What is NSX-V End of Life date?

NSX-V End of Life is planned for the 16th of January 2024, the migration has to be performed before this date. 

<a name="deadlineassistance"></a>

### What is the last date on which you can request migration support?

NSX-V End of Life is planned for January 16th of 2024, so the sooner you take action, the more time to perform your migration.

<a name="nsxvmigrationend"></a>

### What happens if we have not migrated before the 16th of January 2023?

OVhcloud will not cut the service but won't be able to guarantee any SLA. Customers will have to sign a document committing to leave NSX-V at a certain given date by OVHcloud. 

VMware has decided the NSX-V End of Life in January 2024. Discussions are still on-going with them regarding the NSX-V extension of support, OVHcloud will communicate as soon as possible an official statement.

<a name="bgp"></a>

### Is it possible to do BGP?

It is not possible to do Public BGP.

Though it is possible to do BGP in the vRack, a documentation will be available soon to detail this workaround.

<a name="bgpoveripsec"></a>

### Is NSX-T compatible with BGP over IPSEC?

Currently, the BGP over IPEC feature is only available from a T0 (version before 4.1.1 release).

This operation requires specific rights at T0 to create the tunnel.

If you have a specific use case, you can open a ticket so we can support you in this configuration.

<a name="changeas"></a>

### What are the change on the AS?

Before the 4.1.1 version, there is one AS number per environmen coming from the T0.

Opening a ticket with the Support, you can request a modification on the AS number.

With the 4.1.1 version, you will be able to set up different AS on the VRF and not have necessarily the AS number from the T0.

<a name="virtualfirewallt0pcc"></a>

### Can we put a virtual firewall in front of the T0 in the same PCC?

Today it is not possible. The T0 already has a gateway firewall feature so we recommend to configure the firewall with the T0.

<a name="t0vst1">

### Can you explain the difference between T0 and T1?

In the VMware conception, a T1 is always attached to a T0.

Flows go through the T0 to go to the external network.

All the elements that have to stay insinde the Vsphere platform are routed by the T1.

<a name="addt0gw"></a>

### How can I add another Tier-0 Gateway?

It is currently not possible to add a new working tier-0 Gateway.

<a name="publicgateway"></a>

### The "Edit" button in NSX for Tier-0 is disabled, how do I configure the public gateway?

It is not possible by default. The Tier-0 gateways are each hosted in a different host, HA (High Availability) is enabled and a VIP is configured between the 2 EDGES in order to maintain service continuity. The HA part is already preconfigured by OVHCloud.

<a name="t0gwdoublebw"></a>

### Can I configure an active-active Tier-0 Gateway in order to have a double bandwidth (10+10=20Gb/s guarantee and 25+25Gb/s "theoretical")?

No, it is not possible by default, the configuration is managed by OVHcloud and is done in active/passive mode with a VIP (10 Gbp/s guaranteed bandwidth).

<a name="t0commandline"></a>

### Is it possible to connect to the Tier-0 from the command line to perform debugging or packet capture?

No, this is not possible for Tier-0.

<a name="t1interfacecapacity"></a>

### What is the maximum number of interfaces (connected segments) on a Tier-1 Gateway?

This information can be found in NSX > Inventory > Capacity.

Regarding the Edges, we refer to the Gateways and the Tier-0 and Tier-1. Tier-0 is already deployed and uses 3 public IPs to route between the active/backup Gateways and uses the concept of a VIP that is in front of the 2 internal public IPs. This is used for failover and redundancy.

NSX and NSX-v are different and at the moment you cannot break the current Tier-0 configuration and deploy others.

<a name="t1commandline"></a>

### Is it possible to connect to the Tier-1 from the command line to perform debugging or packet capture?

No, this is not possible for Tier-1. Different tools are available in NSX to address these needs.

<a name="addpublicip"></a>

### How can I add more Public IPs?

As indicated in [this guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps#displaying-the-ha-vip-virtual-ip-address), at the moment it is not possible to create new virtual IP addresses, but this feature should be available soon.

<a name="ipblockdistribution"></a>

### Can IP address blocks be used/distributed between two VMware DCs in the same PCC?

IP address blocks are PCC-dependent, not vDC-dependent. Therefore it is possible to use the same IP address block between multiple virtual data centres (without any changes).

<a name="updatensxtvsphere703"></a>

### Do we need to update the clusters in order to use NSX-T in a Vsphere 7.0.3 environment?

In this case you don't have to update the clusters.

<a name="managemigrationip"></a>

### How do we manage the IPs during the migration?

You will find into [the migration guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc/), how to move your existing IP from your NSX-V platform and route them to the IP attached to the T0 part.

When a NSX-T vDC is delivered, we deploy and configure a new IP Block for NSX T0 (VIP + NSX EDGES). You will be able to re-use the IP attached to the NSX-V DC and point them to the new vDC.

<a name="vdcmigration"></a>

### For the vDC migration, the data store has to go global, is a roll back possible on this configuration?

The global data store is managed at the manager or API level.

This allows you to globalise your data store which will be visible from your new vDC. It allows you to do a compute Vmotion and not a storage Vmotion of the VMs.

In this case a roll back is not possible, you would have to order a new data store and apply on it a Vmotion to free the global one.

<a name="nsxmigrationimpact"></a>

### What is the customer impact of the NSX 4.1.1 migration?

There is normally no downtime, a maintenance task will be initiated, including a move of the edges with a Vmotion.

From your user side, there is no specific task to plan.

<a name="docandtrainingnsxt"></a>

### Will you provide trainings and documentation to improve NSX-T skills?

- [Getting Started with NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)
- [VMware on OVHcloud](products/hosted-private-cloud-hosted-private-cloud-powered-by-vmware)


<a name="nsxtmigrationpfsense"></a>

### If we have anticipated the NSX-T migration and chose a PfSense tier solution, do we still have to request a new vDC creation without NSX-T? Can we do it on the existing vDC?

In this case you don't have to order a new vDC but make sure you deactivate all your NSX-V features so OVHcloud can disable the component.

<a name="internetoutput"></a>

### Is the Internet output configurable? In other words, can I deploy the interface?

It is not possible to manage the Internet output in NSX as the Edge is managed by OVHcloud, but you can configure the network on your VM (vSPHERE).

<a name="ipmigrationperblock"></a>

### Can the IP migration be done IP per IP or by block?

The IP migration is performed by block, you will change the next stop of the IP block, the global block is transitioned to the NSX part.

<a name="ipmigrationinterruption"></a>

### Will this migration cut the service and if yes, how long?

This will depend on the used services. For example, if you are using IPSEC tunnels and public IPs, you will have to move your workloads and reconfigure the IP block you had on your NSX-V insfrastructure to your NSX-T one.

During this IP move, a short service cut can happen. Depending on your network topology, you can have a continuity via the vRack service of the flows among the different workloads carried by an exposition of the NSX-V edges. You move the different machines to the second DC and through the vRack the flow keep rising to your previous NSX-V edges.

The downtime will thus depend on your environment's complexity.

<a name="bandwidthedgenode"></a>

### What will be the bandwidth of the edge node's cards, knowing T0 will be mutualised?

This will depend on the activated services (LB/NAT/Firewall, etc.)

<a name="vrackwithnsxt"></a>

### Does vRack work with NSX-T ?

Yes, vRack works with NSX-T.

You can access it from port groups in vSphere or vLAN segments inside NSX.

<a name="vrackaccess"></a>

### Will the compute cluster have access to vRack? Or will the vRack be connected only to edge node?

The NSX cluster is fully compatible with vRack. You can add the NSX service in your PCC vRack. Find more information about vRack on [this page](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrack_and_hosted_private_cloud).

<a name="ha"></a>

### Can I configure High Availability (HA)?

No, NSX Edges are configured by OVHcloud following VMware best practices regarding HA.

<a name="multipleedgeclusters"></a>

### Can we have multiple edge clusters?

Today, 1 single NSX-T Edge cluster is necessary.

<a name="averageconfiguration"></a>

### We currently have 300 edges and about 5000 simultaneous RDP, will the average configuration "4 vcpu / 8 Go RAM / 200 Go" manage the flows?

The sizing will depend on the services you activate or consume on your edges (firewalling or loadbalancing).

Today the size M edge node might not fit for you. The 4.1.1 release will grant you new features like "edge nodes scale up", allowing you to raise to L or XL profiles.

All this will depend on your use cases and the metrics you have on your platform.

<a name="VRF"></a>

### If we don't want to have a VRF to split the T0, what would be the solution besides training or buying a new PCC?

It is possible not to use the VRF and use the T1.

You can use a T1, hosting the workloads behind it. In this case the T1 is used as a "mini" VRF but the flows will be mixed inside the T0.

The advantage of doing a VRF in T0 is to maintain the partitioning of the routing table of the elements going to the external network of the vSphere platform.

<a name="api"></a>

### Can I use the OVHcloud API to configure and use NSX?

Yes, it is possible to do so.

<a name="migrationzerto"></a>

### What about Zerto in the migration phase?

There are no complexities in this part, you can follow step by step the documentation OVHcloud provides.

<a name="veeamzerto"></a>

### What about my Veeam and Zerto options? Are they still compatible with NSX?

Yes but you will have to reconfigure them after vDC migration.

<a name="nsxtwithnsxv"></a>

### Is it possible to have on our PCC NSX-V and NSX-T at the same time to perform tests?

It is possible if you order a new vDC to get NSX-T.

Please note that ordering the new vDC will automatically initiate the refund mechanism for the coming month.

<a name="nsxvtonsxtmigration"></a>

### How long will the migration take?

This will mainly depend on the discovery/assessment phase of the NSX-V insfrastructure and the design phase on the NSX-T side.

The migration itself is short, it is a re-confirmation of the VMware stack.

It is possible to create an extended network, a VPN between the two environments, vxLAN for NSX-V and segments with NSX-T, allowing to move VMs from a vDC to another and then to perform the migrations steps. This will ease the service cut during the transition.

You can also include Terraform into your NSX-T design in order to push your Terraform configuration directly into the environment your just ordered.

<a name="nsxmigrationcoordinator"></a>

### Can we use "migration coordinator" for the migration between NSX-V and NSX-T?

This tool requires very strong administration rights on the environment, our Professional Services team can execute and duplicate the confirmation. In this tool, it is important to notice that many elements are not supported (options, existing rules in NSX-V).

The reproduction phase would require lots of adaptation from your part so it is not a recommended tool in the migration.

<a name="nsxterraform"></a>

### Why is NSX management via Terraform done via a separate `https://nsxt` endpoint?

The NSX API is dedicated and not linked to the vSphere API. That's why we created a dedicated endpoint to reach it.

<a name="nsxedge"></a>

### Is it possible to communicate an NSX edge between 2 PCC?

Yes, it's possible.

<a name="nsxbackupmanualconfiguration"></a>

### Do you take NSX configuration backups, including for the customer manual configuration?

Yes, OVHcloud is performing some backups, you can see them into your NSX-T control plane.

This backup is not aimed to allow you to do a roll back in case of wrong configuration from your end but exist in case of corruption of the different NSX-T controllers.

<a name="nsxtinto2016pcc"></a>

### Is it possible to have the delivery of an NSX-T vDC in a 2016 PCC or are there delivery issues?

Yes, it is possible, there are no current constraints.

<a name="etarelease"></a>

### What is the ETA for the NSX 4.1.1 release?

ETA is planned for the end of October 2023.

<a name="snclimitations"></a>

### Are there additional limitations in a SecNumCloud context?

There are no additional limitations compared to a non-SNC environment.

<a name="sncmigration"></a>

### Is a SecNumCloud migration the same as a non SNC migration?

Yes both migrations are the same.

<a name="sncbackupoutside"></a>

### Is there any backup outside SecNumCloud?

There is no difference between SNC and non-SNC regarding the backup.

<a name="pricingnsxton411version"></a>

### Why is there a pricing modification for NSX-T and its 4.1.1 version?

The price increase on the NSX offers is based on: 

    - The raise in our costs based on the inflation on all our services in 2022 and 2023.
    - The NSX-T licensing costs.
    - The costs linked to the NSX management insfrastructure.

Waiting for the availability of the NSX 4.1.1 version, physical ressources dedicated the to NSX Edge VM hosting have been assumed by OVHcloud and have not been charged to you.

In consequence, the transition to the 4.1.1 version won't have any pricing impact.

<a name="pricemigrationpcc"></a>

### Will the commitments dates and initial pricess be be maintained after the migration?

Commitment and conditions won't be automatically maintened.

Please get in contact with your preferred OVHcloud contact in order to set up new commercial conditions.

<a name="priceduringmigration"></a>

### During the migration phase, we will have to pay twice for our platform for one month, and then get reimbursed next month?

OVHcloud will refund 1 month of hosts and NSX management fees on the next invoice following the order of your new vDC (1 month considered as 30 days).

<a name="pricealbandipsids"></a>

### Is there an additional cost to use Advanced LB (with WAF) and a distributed IPS/IDS?

The basic version of ALB is already included in the NSX-T licence version, without additional cost.

IPS/IDS is planned to be released in the future without precise ETA for now, with additional cost.

## Go further <a name="gofurther"></a>

[Getting started with NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
