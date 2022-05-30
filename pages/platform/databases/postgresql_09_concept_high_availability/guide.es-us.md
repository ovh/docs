---
title: PostgreSQL - Concepts - High availability and failure scenarios
slug: postgresql/concept-high-availability
excerpt: Learn the concepts of high-availability for PostgreSQL offers
section: PostgreSQL - Guides
order: 800
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/postgresql/concept-high-availability/'
---

**Last updated 27<sup>th</sup> May 2022**

## Objective

This page provides the main concepts and mechanisms to achieve high availability for our PostgreSQL managed databases.
We then describe multiple failure scenarios and consequences.

## High availability

Public Cloud Databases for PostgreSQL are available on three service plans, offering different levels of high availability. The selected plan defines the features available. A summary is provided in the table below:

| Service plan | Cluster topology                         | High Availability Features             | Backup retention |
|--------------|------------------------------------------|----------------------------------------|------------------|
| Essential    | Single-node                              | No high availability                   | 2 days           |
| Business     | Two nodes: Primary + replica             | Higher availability                    | 14 days          |
| Enterprise   | Three nodes: One primary +  two replicas | Best high availability characteristics | 30 days          |


## About primary and replica nodes

A node is a virtual machine with dedicated resources (CPU, RAM, storage).

The primary node, also known as the master node, acts as the leader of your cluster. It can read and write in your database. There is only one primary node per PostgreSQL cluster.

Replica nodes are optional, and maintain up-to-date copies of the primary node data. Replica nodes do not allow write operations, only reads.

Primary and replica nodes are interchangeable: When the primary node encounters an issue, the system triggers an automatic failover. A replica node is promoted and becomes the new leader of the cluster. From that point on, it carries out the duties of the primary node (e.g. writes, data replication source). The **Service URI** remains the same, and the internal IP address changes to point to the new primary node.

Having at least one replica node in a PostgreSQL cluster brings a lot of benefits:

- Data resilience: your data gets replicated to another physical resource, carrying "hot data".
- High availability: in case of  failure of the primary node, the time to restore is drastically reduced. Thanks to the automatic failover to a replica node, your cluster and your data is up and ready again in a few minutes.
- Performance: for read-only operations, you can connect to replica nodes, allowing you to reduce the load on the primary server.

Having at least two replica nodes is important, so that even during recovery from (single-node) failures, there are always two copies of the data on two different nodes.
If another failure strikes after a failover when there is just a single master node running, we again risk losing some of the latest changes written to the database. It takes time to rebuild a new standby node and getting it in sync node after a failover when there is a lot of data in the database, and it often makes sense to protect the data over this time period by having another replica.
This is especially important when the database size is large and recreating a replacement node for the faulted one can take hours.

We can represent a cluster like this:

![Public Cloud Databases for PostgreSQL cluster](images/postgresql-cluster.png){.thumbnail}

## About backups and restores

OVHcloud uses the popular and open source backup daemon PGHoard for backups and restores. It makes real-time copies of PostgreSQL Write Ahead Logs (WAL) files, encrypts and compresses the files.  Backup files are stored in OVHcloud Object storage containers.

You can find more information on their official page : <https://github.com/aiven/pghoard>.

### Failure scenarios

We distinguish between two categories of failures:

- **Minor failures**, such as service process crashes or temporary loss of network access, are handled automatically by OVHcloud in all plans without any major changes to the service deployment.
- **Severe failures**, such as losing a node entirely in case of hardware or critical software problems. OVHcloud monitoring infrastructure detects a failed node automatically when the node starts reporting issues in self-diagnostics or when it stops communicating. In such cases, the monitoring infrastructure automatically schedules the creation of a new node to replace the faulty one.

The impact of different failure scenarios depends on the selected service plan, since the amount of nodes are related to them. Browse the right section according to your offer.

### Comparative table

The table below summarizes the scenarios detailed in the following paragraphs.

**RPO** is the **Recovery Point Objective**, meaning how far back before the incident you can recover the data.
**RTO** is the **Recovery Time Objective**, meaning how long it takes to go back to a normal situation.

| Scenario                                   | Essential (1 node)                                                                                             | Business (2 nodes) or Enterprise (3 nodes)                                                           |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Primary node failure                       | **RPO**: approx. 5 minutes or 1 WAL file. **RTO**: multiple hours (time to restore your backup)                | **RPO**: Near zero. **RTO**: Approx. 60 seconds then auto failover                                   |
| Replica node failure                       | N/A                                                                                                            | **RP0**: zero, no data loss. **RTO**: zero, no downtime                                              |
| All-nodes failure                          | N/A                                                                                                            | **RPO**: approx. 5 minutes or 1 WAL file. **RTO**: multiple hours (time to restore your backup)      |
| Datacenter outage (backups in same DC)     | **RPO**: depends of manual backups made by the customer. **RTO**: multiple hours/days (time to restore your backup) | **RPO**: depends of manual backups made by the customer. **RTO**: depends of customer actions            |
| Datacenter outage (backups in another DC)  | **RPO**: approx. 5 minutes or 1 WAL file. **RTO**: multiple hours/days (time to restore your backup)           | **RPO**: approx. 5 minutes or 1 WAL file. **RTO:** multiple hours/days (time to restore your backup) |


### Scenarios for Essential service plans with single-node

Essential plans provide a single node : there is no replica.

#### Node failure

OVHcloud detects when the node is lost. It immediately starts creating a new replacement node. Once the new node is up, it restores its state to the latest available backup, then resumes its operations.

Since there is only one node, during the whole recovery process, your databases are unavailable. You cannot read them neither write on them.
Also, some write operations data may have been lost since we restore from the last backup and latest backed up PostgreSQL Write Ahead Logs (WAL) files. Typically, this time window is limited to either five minutes of time or one WAL file.

The duration of recovery process depends on the amount of data stored, the region, the network bandwidth. OVHcloud cannot guarantee a maximum recovery time, and you can expect few hours.

No intervention is required from the customer.

#### Datacenter failure

> [!primary]
>
> You can verify your backups physical location in your OVHcloud Control Panel, directly in the *Backups* tab of your service.
>

OVHcloud also detects when a whole datacenter is lost. As a user, your cluster will still be visible in API and Control Panel.

As of writing, **automatic backups are stored in the same datacenter location**. In case of Datacenter failure, OVHcloud cannot perform a restoration process.
A restoration process can be launched manually by the customer if manual backups (pg_dump) are available. It will require the creation of a new cluster, configuring users, authorized IPs, ...

We plan to provide backups storage in another location during the 2022 calendar year.
If the automatic backups are stored in another datacenter location, it will be possible from API or UI to restore a previously made automatic backup. You will be able to select the right one and restore it in the datacenter of your choice.
It's a manual intervention, that will also create a new Service URI. You will need to modify all the applications that were using the previous (and now unavailable) Service URI.

In both cases the Recovery Time Objective will vary, depending of multiples parameters such as the amount of data to restore, network congestion and latency or node performances. It can go from a few hours up to a few days.

### Scenarios for Highly available Business and Enterprise service plans

The Business plan provides a primary and a replica node, the Enterprise plan starts with a primary and two replica nodes.

#### Replica node failure

When the failed node is a PostgreSQL **replica** node, the primary node keeps running normally and provides a normal service level to client applications. However, applications that read data directly from the defective replica node may experience degraded service.

OVHcloud automatically detects the loss of a replica node, and waits 300 seconds before creating a new replica node. This timeout allows OVHcloud to make sure that the node is persistently faulty (and that a network failure is not involved for example). Once the new replacement replica node is ready and synchronised with the primary node, it starts replicating the primary node in real time as the situation reverts back to normal.

If both PostgreSQL replica nodes have a failure, the same process happens, but this time twice.

Although OVHcloud cannot commit to a set duration of the whole process, you can expect zero downtime since the primary is up and few hours to get the new replacement nodes up and ready (allowing time to restore the data).

No intervention is required from the customer.

#### Primary node failure

When the failed node is a PostgreSQL **primary** node, the combined information from the OVHcloud monitoring infrastructure and the replica node is used to decide an automatic failover.

After a 60 seconds timeout, the replica node is then promoted to the primary role and immediately starts serving client applications. A new replacement node is automatically scheduled and becomes the new replica node.

#### All-node failure

If all the **primary** and **replica nodes** fail at the same time, creation of new nodes to become the new primary and replicas is automatically scheduled. The primary node is restored from the latest available backup. This could involve some data loss because any write operation since the backup of the latest WAL file are lost. Typically, this time window is limited to either five minutes of time or one WAL file.

The duration of recovery process depends on the amount of data stored, the region, the network bandwidth. OVHcloud cannot guarantee a maximum recovery time, but you can expect a few hours.
During this period, your service remains unavailable.

No intervention is required from the customer.

#### Datacenter failure

> [!primary]
>
> Public Cloud Databases for PostgreSQL do not support multi-AZ so far: all the nodes are in the same datacenter.
> You can verify your backups physical location in your OVHcloud Control Panel, directly in the *Backups* tab of your service.
>

OVHcloud also detects when a whole datacenter is lost. As a user, your cluster will still be visible in API and Control Panel.

As of writing, **automatic backups are stored in the same datacenter location**. In case of Datacenter failure, OVHcloud cannot perform a restoration process.
A restoration process can be launched manually by the customer if manual backups (pg_dump) are available. It will require the creation of a new cluster, configuring users, authorized IPs, ...

We plan to provide backups storage in another location during the 2022 calendar year.
If the automatic backups are stored in another datacenter location, it will be possible from API or UI to restore a previously made automatic backup. You will be able to select the right one and restore it in the datacenter of your choice.
It's a manual intervention, that will also create a new Service URI. You will need to modify all the applications that were using the previous (and now unavailable) Service URI.

In both cases the Recovery Time Objective will vary, depending of multiples parameters such as the amount of data to restore, network congestion and latency or node performances. It can go from a few hours up to a few days.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
