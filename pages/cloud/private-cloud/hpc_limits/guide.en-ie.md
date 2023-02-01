---
title: Technical capabilities
slug: technical-capabilities
excerpt: 'Learn the technical capabilities and limitations of the OVHcloud Hosted Private Cloud'
section: FAQ
order: 1
---

**Last updated 01/02/2023**

## Objective

**This page provides an overview of the technical capabilities and limitations of OVHcloud Hosted Private Cloud services.**

## Capabilities and known limits


| Item | Description | Value |
|:-----:|:-----:|:----------:|
| Max. number of PCCs per customer ID | Number of vCenters or packs per organisation | No limit |
| Number of linked PCCs | vCenters linked (Enhanced Linked Mode) | 0 (not allowed) |
| Minimum datastores per PCC (SLA) | Number of datastores per vCenter to maintain SLA | 2 |
| Minimum hosts per PCC (SLA) | Number of hosts per vCenter to maintain SLA | 2 |
| Minimum hosts per PCC (no SLA) | Bare minimum hosts to work with vCenter without SLA | 0 |
| Max. number of hosts per cluster | Hosts per cluster | 64 |
| Max. number of clusters per vDC | Number of cluster within the same virtual data centre | No limit |
| Max. number of vDCs per PCC | Virtual data centres customers can add per vCenter | 400 |
| Max. number of hosts per PCC | Limits of hosts per vCenter |  231 hosts, 110 zpools |
| Max. number of VMs per SDDC | VMs managed by the same vCenter | 25000 |
| Max. number of VMs per host | VMs hosted on the same physical host | 1024 |
| Max. number of IPs per PCC |  Max. number of Public IPs assignable and usable per vCenter | 1 x /23 |
| vCPUs, RAM and disk consumed by regular vCenter | Resources assigned to vCenter (VCSA) | 4 vCPU, 16GB RAM, 290GB Disk |
| vCPUs, RAM and disk consumed by regular NSX |  Resources assigned to NSX Manager and Controller | 4 vCPU, 4GB RAM, 60GB Disk<br>4 vCPU, 2GB RAM, 28GB Disk |
| vCPUs, RAM and disk consumed by regular vROPS | Resources assigned to vROPS | 4 vCPU, 16GB RAM |
| Max. number of edge nodes | Max. number of edge devices to be deployed per NSX | 2000 |
| Max. number of IPSec VPN Tunnels | Max. number of VPN tunnels per edge | 512 compact edge<br>1600 large edge<br>4096 quad large edge<br>6000 extra large edge |
| Max. number of vRack per vDC | Max. number of private networks per virtual data centre | 1 |
| Max. number of L2 VPN Clients | Number of VPN clients to connect | 5 |
| Max. number of whitelisted IPs | Number of IPs allowed to connect to your VMware infrastructure | 2048 |

## Go further

Join our community of users on <https://community.ovh.com/en/>.