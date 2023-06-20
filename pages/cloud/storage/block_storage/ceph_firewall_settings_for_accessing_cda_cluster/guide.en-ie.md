---
title: Firewall settings for accessing CDA cluster
slug: ceph/configure-firewall-for-cda-access
excerpt: This guide describes how to properly configure firewall on hosts with access to CDA
section: Cloud Disk Array
updated: 2023-06-16
---

**Last update 16th July 2023**

If you want to configure firewall on your hosts that needs access to CDA you first need to get to know a few basic things on how Ceph client communicates with Ceph cluster.

For in-depth understanding on how networking works in Ceph you can check Ceph documentation: https://docs.ceph.com/en/latest/rados/configuration/network-config-ref/

Ceph cluster can be composed of several components:

1. Ceph Monitors.
2. Ceph Managers.
2. Ceph OSD nodes.
3. MDS nodes.

Monitors handle cluster coordination while OSD nodes holds actual data. OSD nodes are dynamic in nature.  
They can be added and removed dynamically without affecting cluster availability.  
MDS nodes are responsible for exposing cephfs shares their IP addresses are also dynamic.

To connect to cluster client machine first contact Ceph Monitors and from there gets addresses of Ceph OSD nodes in the cluster,  
then the client establishes communication with OSD nodes directly and only periodically contacts Ceph Monitors.

When using cephfs client connects to MDS nodes.

Given the above when you define outgoing firewall you need to enable:
* allow outgoing traffic to IP addresses of Ceph Monitors to ports 3300 proto TCP and port 6789 proto TCP,
* allow outgoing traffic to IP addresses of Ceph Managers to ports range 6800-7300 proto TCP,
* allow outgoing traffic to IP addresses of Ceph OSD nodes to ports range 6800-7300 proto TCP,
* allow outgoing traffic to IP addresses of Ceph MSD nodes to ports range 6800-7300 proto TCP.

You can find IP addresses of Ceph Monitors in OVHcloud Manager admin panel for CDA.

Ceph Managers have the same IP addresses as Ceph Monitors.

Ceph OSD nodes IP address can change so you need to allow outgoing access to whole `10.0.0.0/8` network.

Ceph MDS nodes IP addresses can also change so the you need to allow outgoing access to whole `10.0.0.0/8` network.