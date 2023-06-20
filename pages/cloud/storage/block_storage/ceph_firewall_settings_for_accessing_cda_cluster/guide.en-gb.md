---
title: Firewall settings for accessing a CDA cluster
excerpt: This guide describes how to properly configure firewall on hosts with access to CDA
updated: 2023-06-20
---

## Objective

If you want to configure the firewall on your hosts that need access to CDA, you first need to get to know a few basic information on how the Ceph client communicates with the Ceph cluster.

For in-depth understanding on how networking works in Ceph, please read the [Ceph documentation](https://docs.ceph.com/en/latest/rados/configuration/network-config-ref/)

## Instructions

A Ceph cluster can be composed of several components:

1. Ceph Monitors.
2. Ceph Managers.
2. Ceph OSD nodes.
3. MDS nodes.

Monitors handle cluster coordination while OSD nodes holds actual data. OSD nodes are dynamic in nature.
They can be added and removed dynamically without affecting cluster availability.
MDS nodes are responsible for exposing cephfs shares. Their IP addresses are also dynamic.

To connect to a cluster client machine, you first need to contact Ceph Monitors and from there get addresses of Ceph OSD nodes in the cluster.
Then the client establishes communication with OSD nodes directly and only periodically contacts Ceph Monitors.

When using cephfs, the client connects to MDS nodes.

Given the above, when you define outgoing firewall, you need to:

- allow outgoing traffic to IP addresses of Ceph Monitors to ports 3300 proto TCP and port 6789 proto TCP.
- allow outgoing traffic to IP addresses of Ceph Managers to ports range 6800-7300 proto TCP.
- allow outgoing traffic to IP addresses of Ceph OSD nodes to ports range 6800-7300 proto TCP.
- allow outgoing traffic to IP addresses of Ceph MSD nodes to ports range 6800-7300 proto TCP.

You can find IP addresses of Ceph Monitors in the CDA section of your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).

Ceph Managers have the same IP addresses as Ceph Monitors.

Ceph OSD nodes IP addresses can change so you need to allow outgoing access to the whole `10.0.0.0/8` network.

Ceph MDS nodes IP addresses can also change so you need to allow outgoing access to the whole `10.0.0.0/8` network.

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Storage and Backup services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.