---
title: Understanding OVHcloud Managed Kubernetes architecture
excerpt: 'Learn how OVHcloud Managed Kubernetes Service works under the hood: control plane, worker nodes, networking, and storage'
updated: 2026-06-15
---

## Objective

**This guide explains the architecture of OVHcloud Managed Kubernetes Service (MKS) to help you understand how your clusters are deployed, managed, and connected. Understanding this architecture will help you make informed decisions about cluster configuration, troubleshooting, and scaling.**

## Overview

OVHcloud Managed Kubernetes Service is a CNCF-certified Kubernetes offering that abstracts away the complexity of managing the control plane while giving you full control over your worker nodes and workloads.

```text
+------------------------------------------------------------------+
|                    OVHcloud Managed Kubernetes                    |
+------------------------------------------------------------------+
|                                                                  |
|  +------------------------+      +----------------------------+  |
|  |     CONTROL PLANE      |      |       WORKER NODES         |  |
|  | (Managed by OVHcloud)  |      |   (Your responsibility)    |  |
|  +------------------------+      +----------------------------+  |
|  |                        |      |                            |  |
|  |  +------------------+  |      |  +---------+  +---------+  |  |
|  |  |   API Server     |  |      |  | Node 1  |  | Node 2  |  |  |
|  |  +------------------+  |      |  |+--+ +--+|  |+--+ +--+|  |  |
|  |  +------------------+  |      |  ||P1| |P2||  ||P3| |P4||  |  |
|  |  |   Controller     |  |<---->|  |+--+ +--+|  |+--+ +--+|  |  |
|  |  |   Manager        |  |      |  +---------+  +---------+  |  |
|  |  +------------------+  |      |                            |  |
|  |  +------------------+  |      |  +---------+               |  |
|  |  |   Scheduler      |  |      |  | Node 3  |               |  |
|  |  +------------------+  |      |  |+--+ +--+|               |  |
|  |  +------------------+  |      |  ||P5| |P6||               |  |
|  |  |   etcd           |  |      |  |+--+ +--+|               |  |
|  |  +------------------+  |      |  +---------+               |  |
|  |                        |      |                            |  |
|  +------------------------+      +----------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
      P1, P2, ... = Your Pods running on each node
```

## Control Plane architecture

The control plane is the brain of your Kubernetes cluster. OVHcloud fully manages this component, which includes:

- **API Server**: The front-end for the Kubernetes control plane, handling all API requests
- **etcd**: The distributed key-value store that holds all cluster state and configuration
- **Controller Manager**: Runs controller processes (node controller, replication controller, etc.)
- **Scheduler**: Assigns pods to nodes based on resource requirements and constraints

### What OVHcloud manages for you

OVHcloud handles all operational aspects of the control plane:

| Component | OVHcloud responsibility |
|-----------|------------------------|
| API Server | Deployment, scaling, high availability, security patches |
| etcd | Backups, encryption at rest, cluster health |
| Controller Manager | Updates, configuration, monitoring |
| Scheduler | Updates, configuration |
| Kubernetes versions | New minor versions availability, security patches (defined by user through Security Policy parameter) |

> [!primary]
>
> **About Kubernetes upgrades**: OVHcloud makes new Kubernetes minor versions available. You control when to trigger the upgrade. The only exception is when your cluster runs an End-of-Life version; in this case, OVHcloud will force an upgrade to the next supported version after prior notification.
>

### Free vs Standard plan: Control plane differences

The control plane architecture differs significantly between plans:

```text
FREE PLAN                                STANDARD PLAN
+--------------------+                   +------------------------------------------------+
|   Single Zone      |                   |              Multi-AZ Deployment               |
|                    |                   |                                                |
|  +-------------+   |                   |   Zone A        Zone B        Zone C           |
|  |Control Plane|   |                   |  +------+      +------+      +------+          |
|  |  (shared)   |   |                   |  | CP   |      | CP   |      | CP   |          |
|  +-------------+   |                   |  |Replica|     |Replica|     |Replica|         |
|  +-------------+   |                   |  +------+      +------+      +------+          |
|  |    etcd     |   |                   |  | etcd |      | etcd |      | etcd |          |
|  |  (shared)   |   |                   |  |replica|     |replica|     |replica|         |
|  | max 400MB   |   |                   |  +------+      +------+      +------+          |
|  +-------------+   |                   |       \           |           /                |
|                    |                   |        \          |          /                 |
|  SLO: 99.5%        |                   |         +---------+---------+                  |
|                    |                   |         | Dedicated etcd 8GB |                 |
|                    |                   |         +--------------------+                 |
|                    |                   |                                                |
|                    |                   |  SLA: 99.99%                                   |
+--------------------+                   +------------------------------------------------+
```

| Feature | Free Plan | Standard Plan |
|---------|-----------|---------------|
| Control Plane | Managed, single-zone | Managed, cross-AZ resilient |
| Availability | 99.5% SLO | 99.99% SLA (at GA) |
| etcd storage | Shared, up to 400MB | Dedicated, up to 8GB, distributed across 3 AZs |
| Max cluster size | 100 nodes | 500 nodes |
| Regional availability | Single-zone | 3 Availability Zones |
| CNI | Canal (Flannel + Calico) | Cilium |

> [!primary]
>
> Based on SLA/SLO commitments, a Free plan cluster could experience up to ~43 minutes of downtime per month (worst case), while a Standard plan cluster limits this to approximately 4 minutes maximum.
>

## Worker Nodes architecture

Worker nodes are the machines where your containerized applications run. Unlike the control plane, you have direct control over node configuration.

### How nodes are provisioned

Worker nodes are based on OVHcloud Public Cloud instances. When you create a node pool:

1. OVHcloud provisions Public Cloud instances with your chosen flavor
2. The instances are automatically configured with the required Kubernetes components
3. Nodes register themselves with the control plane via Konnectivity

The CNI differs depending on your plan:

```text
FREE PLAN - Worker Node                     STANDARD PLAN - Worker Node
+------------------------------+            +------------------------------+
|                              |            |                              |
| +----------+ +-------------+ |            | +----------+ +-------------+ |
| | kubelet  | | kube-proxy  | |            | | kubelet  | | kube-proxy  | |
| +----------+ +-------------+ |            | +----------+ +-------------+ |
|                              |            |                              |
| +----------+ +-------------+ |            | +----------+ +-------------+ |
| |containerd| | CNI: Canal  | |            | |containerd| | CNI: Cilium | |
| |          | | (Flannel +  | |            | |          | | (eBPF-based)| |
| |          | |  Calico)    | |            | |          | |             | |
| +----------+ +-------------+ |            | +----------+ +-------------+ |
|                              |            |                              |
| +-------+ +-------+ +------+ |            | +-------+ +-------+ +------+ |
| | Pod A | | Pod B | | ...  | |            | | Pod A | | Pod B | | ...  | |
| +-------+ +-------+ +------+ |            | +-------+ +-------+ +------+ |
|                              |            |                              |
| OS: Ubuntu 22.04 LTS         |            | OS: Ubuntu 22.04 LTS         |
+------------------------------+            +------------------------------+
```

### Node pools concept

Nodes are organized into node pools - groups of nodes sharing the same configuration:

- **Flavor**: Instance type (b3-8, b3-16, t1-45 for GPU, etc.)
- **Autoscaling settings**: Min/max nodes, scale-down thresholds
- **Anti-affinity**: Distribute nodes across different hypervisors
- **Billing**: Hourly or monthly (for gen2 flavors), Saving Plans for gen3 and above
- **Labels and taints**: For workload scheduling

```text
+------------------------------------------------------------------+
|                         KUBERNETES CLUSTER                        |
+------------------------------------------------------------------+
|                                                                  |
|  NODE POOL: "general"          NODE POOL: "gpu"                  |
|  Flavor: b3-16                 Flavor: t1-45                     |
|  Autoscale: true               Autoscale: false                  |
|  Min: 2, Max: 10               Nodes: 2                          |
|  +---------+ +---------+       +---------+ +---------+           |
|  | Node 1  | | Node 2  |  ...  | GPU-1   | | GPU-2   |           |
|  |+--+ +--+| |+--+ +--+|       |+--+ +--+| |+--+ +--+|           |
|  ||P1| |P2|| ||P3| |P4||       ||P5| |P6|| ||P7| |P8||           |
|  |+--+ +--+| |+--+ +--+|       |+--+ +--+| |+--+ +--+|           |
|  +---------+ +---------+       +---------+ +---------+           |
|                                                                  |
|  NODE POOL: "high-memory"                                        |
|  Flavor: r3-128                                                  |
|  Anti-affinity: true (max 5 nodes)                               |
|  +---------+ +---------+ +---------+                             |
|  | Node 1  | | Node 2  | | Node 3  |                             |
|  |+--+ +--+| |+--+ +--+| |+--+ +--+|                             |
|  ||P9||P10|| ||P ||P  || ||P ||P  ||                             |
|  |+--+ +--+| |+--+ +--+| |+--+ +--+|                             |
|  +---------+ +---------+ +---------+                             |
|                                                                  |
+------------------------------------------------------------------+
```

### Node lifecycle

```text
                              NORMAL LIFECYCLE
  +------------+      +----------+      +-----------+      +------------+
  |            |      |          |      |           |      |            |
  | Installing |----->|  Ready   |----->|  Draining |----->| Terminated |
  |            |      |          |      |           |      |            |
  +------------+      +-----+----+      +-----------+      +------------+
                            |
                            | (Node becomes unhealthy)
                            v
                      +----------+
                      | NotReady |
                      +-----+----+
                            |
                            | (After 10 min)
                            v
              +-------------------------------+
              |         AUTO-HEALING          |
              +-------------------------------+
              |                               |
              |  FREE PLAN     STANDARD PLAN  |
              |                               |
              | +----------+   +------------+ |
              | | Node is  |   | Node is    | |
              | | reinstall|   | deleted &  | |
              | | in-place |   | new node   | |
              | |          |   | created    | |
              | +----+-----+   +-----+------+ |
              |      |               |        |
              |      v               v        |
              | +----------+   +------------+ |
              | |  Ready   |   | Installing | |
              | +----------+   +-----+------+ |
              |                      |        |
              |                      v        |
              |                +----------+   |
              |                |  Ready   |   |
              |                +----------+   |
              |                               |
              +-------------------------------+
```

- **Installing**: Node is being provisioned and configured
- **Ready**: Node is healthy and can receive pods
- **NotReady**: Node has issues (network, resources, etc.)
- **Draining**: Node is being evacuated (graceful, respects PDBs for 10 min max)
- **Terminated**: Node is deleted

> [!warning]
>
> GPU worker nodes (t1 and t2 flavors) may take more than one hour to reach a ready state.
>

### Auto-healing

OVHcloud monitors node health. If a node remains in `NotReady` state for more than 10 minutes, auto-healing is triggered:

- **Free plan**: The node is reinstalled in-place
- **Standard plan**: The node is deleted and a new one is created

This ensures cluster stability but means:

- Do not store important data directly on nodes
- Always use Persistent Volumes for stateful workloads
- Design applications to be resilient to node failures

### Node upgrades

When upgrading Kubernetes versions, MKS offers two strategies for updating worker nodes:

```text
+=============================================================================+
|                          NODE UPGRADE STRATEGIES                            |
+=============================================================================+
|                                                                             |
|  IN-PLACE UPGRADE                         ROLLING UPGRADE                   |
|  (Free)                                   (Standard only for now)           |
|                                                                             |
|  Same instance,                           New instances replace             |
|  components updated                       old ones                          |
|                                                                             |
|  +-------+  +-------+  +-------+          +-------+  +-------+  +-------+   |
|  |Node 1 |  |Node 2 |  |Node 3 |          |Node 1 |  |Node 2 |  |Node 3 |   |
|  | v1.33 |  | v1.33 |  | v1.33 |          | v1.33 |  | v1.33 |  | v1.33 |   |
|  +---+---+  +-------+  +-------+          +-------+  +-------+  +---+---+   |
|      |                                                              |       |
|      | 1. Cordon & Drain                    1. Create new node +-------+    |
|      v                                                         |Node 4 |    |
|  +-------+                                                     | v1.34 |    |
|  |Node 1 |  Pods moved to                                      +---+---+    |
|  |UPGRADE|  other nodes                     2. Cordon & Drain      |        |
|  +---+---+                                     old node       <----+        |
|      |                                                                      |
|      | 2. Upgrade                             +-------+                     |
|      v    components                          |Node 3 |  3. Migrate pods    |
|  +-------+  +-------+  +-------+              |DRAIN  |     to new node     |
|  |Node 1 |  |Node 2 |  |Node 3 |              +---+---+                     |
|  | v1.34 |  | v1.33 |  | v1.33 |                  |                         |
|  +-------+  +---+---+  +-------+                  | 4. Delete old node      |
|                 |                                 v                         |
|      3. Repeat for                            +-------+  +-------+  +-----+ |
|         next node                             |Node 1 |  |Node 2 |  |Node | |
|                 |                             | v1.33 |  | v1.33 |  |4    | |
|                 v                             +-------+  +-------+  |v1.34| |
|  +-------+  +-------+  +-------+                                    +-----+ |
|  |Node 1 |  |Node 2 |  |Node 3 |                                            |
|  | v1.34 |  | v1.34 |  | v1.34 |              5. Repeat until all upgraded  |
|  +-------+  +-------+  +-------+                                            |
|                                                                             |
+=============================================================================+
```

#### In-place upgrades

With in-place upgrades, each worker node is updated directly on its existing Public Cloud instance:

1. MKS **cordons** the node (marks it unschedulable)
2. MKS **drains** the node (evicts all pods, respecting PodDisruptionBudgets)
3. Kubernetes components are **upgraded** on the same instance
4. Node becomes **Ready** again
5. Process **repeats** for the next node (strictly one-by-one)

**Characteristics:**

- No extra instances required
- Preserves instance identity (same IPs, same billing)
- Slower process (sequential, one node at a time)
- Temporary capacity reduction during each node upgrade

> [!warning]
>
> In-place upgrades can lead to resource pressure if your cluster doesn't have enough spare capacity to accommodate pods evicted from the node being upgraded. Ensure your remaining nodes can handle the extra workload.
>

**Use cases:**

- Monthly-billed instances (keep the same instance)
- Need to preserve public IP addresses
- Cost-sensitive environments (no extra instance costs)

#### Rolling upgrades

With rolling upgrades (currently available on Standard plan only), new worker nodes are created with the target Kubernetes version:

1. MKS **creates** a new node running the target version
2. MKS **cordons and drains** an old node
3. Workloads **migrate** to the new node
4. Old node is **deleted**
5. Process **repeats** until all nodes are upgraded

**Characteristics:**

- Requires temporary extra capacity (new nodes created before old ones deleted)
- Faster upgrades with higher availability
- Clean node state (fresh instances)
- Better handling of workload migration

> [!primary]
>
> In the future roadmap, rolling upgrades will support Kubernetes-style `maxSurge` and `maxUnavailable` settings to control how many nodes can be added or taken offline simultaneously.
>

**Use cases:**

- Production environments requiring high availability
- Faster upgrade cycles
- When clean node state is preferred

#### Comparison

| Aspect | In-place | Rolling |
|--------|----------|---------|
| Availability | Free & Standard | Standard only (for now) |
| Extra instances | No | Yes (temporary) |
| Speed | Slower (sequential) | Faster (parallel possible) |
| Instance identity | Preserved | New instances |
| Public IPs | Preserved | Changed |
| Resource pressure | Higher (reduced capacity) | Lower (extra capacity) |
| Best for | Cost optimization | High availability |

### Reserved resources

Each worker node reserves resources for Kubernetes system components:

| Resource | Formula |
|----------|---------|
| CPU | 15% of 1 CPU + 0.5% of all CPU cores |
| RAM | Fixed 1590 MB |
| Storage | log10(total storage in GB) * 10 + 10% of total storage |

Example for b3-16 flavor: 170m CPU, 1.59GB RAM, 30GB storage reserved.

## Networking architecture

### Cluster network overview

```text
+====================================================================================+
|                            NETWORKING ARCHITECTURE                                 |
+====================================================================================+
|                                                                                    |
|   INTERNET                                                                         |
|   +------+                                                                         |
|   |      |                                                                         |
|   +--+---+                                                                         |
|      |                                                                             |
|      +------------------+------------------------+                                 |
|      |                  ^                        ^                                 |
|      | OPTION 1         | OPTION 2               | OPTION 3                        |
|      | Load Balancer    | Node Floating IPs      | Gateway (SNAT)                  |
|      | (recommended)    | (direct access)        | (outbound only)                 |
|      |                  |                        |                                 |
|      v                  |                        |                                 |
|   +----------+          |                 +------------+                           |
|   |Floating  |          |                 |  Gateway   |                           |
|   |   IP     |          |                 | (Octavia)  |                           |
|   +----+-----+          |                 +-----+------+                           |
|        |                |                       ^                                  |
|        v                |                       | SNAT                             |
|   +----------+          |                       | (outbound)                       |
|   |   Load   |          |                       |                                  |
|   | Balancer |          |                       |                                  |
|   | (Octavia)|          |                       |                                  |
|   +----+-----+          |                       |                                  |
|        |                |                       |                                  |
|   +----|----------------|----------------------------------------------------+     |
|   |    |    PRIVATE NETWORK (or vRack)          |                            |     |
|   |    v                v                       |                            |     |
|   | +--------------------------------------------------------------------+   |     |
|   | |                      KUBERNETES CLUSTER                            |   |     |
|   | |                                                                    |   |     |
|   | |  +------------+     +------------+     +------------+              |   |     |
|   | |  |   Node 1   |     |   Node 2   |     |   Node 3   |--------------+   |     |
|   | |  | +--------+ |     | +--------+ |     | +--------+ |              |   |     |
|   | |  | |Floating| |     | |Floating| |     | |Floating| |  (Option 2)  |   |     |
|   | |  | |IP (opt)| |     | |IP (opt)| |     | |IP (opt)| |              |   |     | 
|   | |  | +--------+ |     | +--------+ |     | +--------+ |              |   |     |
|   | |  | +--+ +--+  |     | +--+ +--+  |     | +--+ +--+  |              |   |     |
|   | |  | |P1| |P2|  |<--->| |P3| |P4|  |<--->| |P5| |P6|  |              |   |     |
|   | |  | +--+ +--+  |     | +--+ +--+  |     | +--+ +--+  |              |   |     |
|   | |  +------------+     +------------+     +------------+              |   |     |
|   | |        ^                  ^                  ^                     |   |     |
|   | |        +------------------+------------------+                     |   |     |
|   | |                           |                                        |   |     |
|   | |              CNI: Canal (Free) / Cilium (Standard)                 |   |     |
|   | +--------------------------------------------------------------------+   |     |
|   +--------------------------------------------------------------------------+     |
|                                                                                    |
+====================================================================================+
```

### Internet access options

MKS clusters support three networking patterns for Internet connectivity:

| Option | Direction | Use case |
|--------|-----------|----------|
| **Load Balancer** | Inbound | Expose services (recommended for production) |
| **Node Floating IPs** | Inbound & Outbound | Direct node access, preserve source IP |
| **Gateway (SNAT)** | Outbound only | Default outbound, shared IP for all nodes |

**Option 1 - Load Balancer (Octavia):**

- Recommended for exposing services to the Internet
- Provides health checking, load distribution
- Single entry point with a Floating IP
- Supports L4 (TCP/UDP) load balancing

**Option 2 - Node Floating IPs:**

- Each node can have its own Floating IP attached
- Enables direct inbound access (e.g., via NodePort services)
- Preserves source IP addresses for outbound traffic (no SNAT)
- Useful when pods need to reach external services that whitelist IPs
- IP is preserved during in-place upgrades, but changes with rolling upgrades

> [!warning]
>
> To attach a Floating IP to a node, a Gateway (OpenStack router) must be configured on the private network subnet. Without a Gateway, Floating IPs cannot be associated with instances in that subnet.
>

**Option 3 - Gateway (SNAT):**

- Default for outbound Internet access when no Floating IP is attached
- All nodes share the same outbound IP (Gateway IP)
- Does NOT expose services to the Internet
- Source IP is translated (SNAT)

### CNI: Container Network Interface

The CNI plugin differs between plans:

| Plan | CNI | Description |
|------|-----|-------------|
| **Free** | Canal (Flannel + Calico) | Flannel for overlay network, Calico for network policies |
| **Standard** | Cilium | eBPF-based, high performance, advanced observability |

Reserved subnets (do not use in your private network):

**Free plan:**

| Subnet | Purpose |
|--------|---------|
| 10.2.0.0/16 | Pod network |
| 10.3.0.0/16 | Service network |
| 172.17.0.0/16 | Docker daemon (legacy) |

**Standard plan:**

| Subnet | Purpose |
|--------|---------|
| 10.240.0.0/13 | Pod network |
| 10.3.0.0/16 | Service network |

### Service exposure options

Kubernetes Services can be exposed in several ways:

```text
+------------------------------------------------------------------+
|                    SERVICE EXPOSURE OPTIONS                       |
+------------------------------------------------------------------+
|                                                                  |
|  ClusterIP (Internal only)                                       |
|  +------------------+                                            |
|  |  10.3.x.x        |  Only accessible within the cluster        |
|  +------------------+                                            |
|                                                                  |
|  NodePort (Direct node access)                                   |
|  +------------------+                                            |
|  |  <NodeIP>:30000- |  Accessible on all nodes                   |
|  |           32767  |  (Port range 30000-32767)                  |
|  +------------------+                                            |
|                                                                  |
|  LoadBalancer (Recommended for production)                       |
|  +------------------+     +------------------+                   |
|  |  Floating IP     |---->|  Octavia LB      |---> Nodes         |
|  |  (Public)        |     |  (L4)            |                   |
|  +------------------+     +------------------+                   |
|                                                                  |
|  Ingress (L7 routing)                                            |
|  +------------------+     +------------------+                   |
|  |  LoadBalancer    |---->|  Ingress         |---> Services      |
|  |                  |     |  Controller      |                   |
|  |                  |     |  (nginx, etc.)   |                   |
|  +------------------+     +------------------+                   |
|                                                                  |
+------------------------------------------------------------------+
```

### Load Balancer integration

Creating a `Service` of type `LoadBalancer` automatically provisions an OVHcloud Public Cloud Load Balancer (based on OpenStack Octavia):

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
  annotations:
    # Required for Kubernetes < 1.31
    loadbalancer.ovhcloud.com/class: octavia
    # Optional: choose LB size (small, medium, large, xl)
    loadbalancer.ovhcloud.com/flavor: small
spec:
  type: LoadBalancer
  ports:
    - port: 80
      targetPort: 8080
  selector:
    app: my-app
```

> [!primary]
>
> For Kubernetes versions >= 1.31, Octavia is the default Load Balancer and no annotation is required.
>

### Private networking options

OVHcloud offers two ways to use private networks with MKS:

#### 1. Public Cloud Private Network (without vRack)

For connecting OVHcloud Public Cloud services within the same region:

- MKS clusters
- Public Cloud instances
- Managed Databases (DBaaS)
- Other Public Cloud services

This is the simplest option when you only need private connectivity between Public Cloud resources.

#### 2. vRack integration

For broader interconnectivity across OVHcloud product universes and regions:

```text
+------------------------------------------------------------------+
|                         vRack INTEGRATION                         |
+------------------------------------------------------------------+
|                                                                  |
|  +------------------------+    +------------------------+        |
|  |  MKS Cluster           |    |  Dedicated Servers     |        |
|  |  (Region: GRA)         |    |  (Bare Metal)          |        |
|  +------------------------+    +------------------------+        |
|           |                              |                       |
|           v                              v                       |
|  +----------------------------------------------------------+    |
|  |                        vRack                              |   |
|  |     (Private Layer 2 network across OVHcloud universe)    |   |
|  +----------------------------------------------------------+    |
|           |                              |                       |
|           v                              v                       |
|  +------------------------+    +------------------------+        |
|  |  Hosted Private Cloud  |    |  MKS Cluster           |        |
|  |  (VMware)              |    |  (Region: SBG)         |        |
|  +------------------------+    +------------------------+        |
|                                                                  |
+------------------------------------------------------------------+
```

vRack enables:

- Cross-region private connectivity
- Interconnection with Bare Metal servers
- Interconnection with Hosted Private Cloud (VMware)
- Interconnection with other OVHcloud dedicated products

> [!warning]
>
> When using a private network (with or without vRack), you will still see a public IPv4 on worker nodes. This IP is not reachable from the Internet and is used exclusively for node administration and control plane communication.
>

## Storage architecture

### Persistent Volumes with Cinder CSI

MKS uses the OpenStack Cinder CSI driver for persistent storage:

```text
+------------------------------------------------------------------+
|                    STORAGE ARCHITECTURE                           |
+------------------------------------------------------------------+
|                                                                  |
|  KUBERNETES                           OVHcloud BLOCK STORAGE     |
|                                                                  |
|  +------------------+                                            |
|  |      Pod         |                                            |
|  |  +------------+  |                                            |
|  |  | Container  |  |                                            |
|  |  |  /data     |  |    Mount                                   |
|  |  +-----+------+  |       |                                    |
|  +--------+---------+       |                                    |
|           |                 |                                    |
|           v                 v                                    |
|  +------------------+     +------------------+                   |
|  |       PVC        |<--->|       PV         |                   |
|  | (Request)        |     | (Provisioned)    |                   |
|  +------------------+     +--------+---------+                   |
|                                    |                             |
|                                    | Cinder CSI                  |
|                                    v                             |
|                           +------------------+                   |
|                           |  Block Storage   |                   |
|                           |  Volume          |                   |
|                           |  (Cinder)        |                   |
|                           +------------------+                   |
|                                                                  |
+------------------------------------------------------------------+
```

### Storage classes

| Storage Class | Description | IOPS | Recommended for |
|--------------|-------------|------|-----------------|
| `csi-cinder-high-speed` (default) | Fixed performance SSD | Up to 3,000 | Volumes up to 100GB |
| `csi-cinder-high-speed-gen2` | Progressive performance NVMe | 30 IOPS/GB (max 20k) | Volumes > 100GB |
| `csi-cinder-classic` | Traditional spinning disks | 200 guaranteed | Cost-sensitive workloads |
| `*-luks` variants | Encrypted versions | Same as base | Sensitive data |

### Access modes and limitations

| Access Mode | Support | Description |
|-------------|---------|-------------|
| ReadWriteOnce (RWO) | Supported | Single node read-write |
| ReadOnlyMany (ROX) | Not supported* | Multi-node read-only |
| ReadWriteMany (RWX) | Not supported* | Multi-node read-write |

*For multi-attach volumes (RWX), use one of these OVHcloud storage solutions:

| Solution | Protocol | Documentation |
|----------|----------|---------------|
| **File Storage** (Public Cloud) | NFS | [File Storage documentation](/products/public-cloud-storage-file-storage) |
| **Enterprise File Storage** | NFS | [EFS with MKS](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_trident_csi) |
| **NAS-HA** | NFS | [NAS-HA with MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-multi-attach-persistent-volumes-with-ovh-nas-ha) |
| **Cloud Disk Array** | CephFS | [CDA with MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-multi-attach-persistent-volumes-with-ovh-cloud-disk-array) |

> [!warning]
>
> A worker node can have a maximum of 100 Cinder persistent volumes attached to it.
>

## Security model

### Shared responsibility

```text
+------------------------------------------------------------------+
|                    SHARED RESPONSIBILITY MODEL                    |
+------------------------------------------------------------------+
|                                                                  |
|  OVHcloud RESPONSIBILITY              YOUR RESPONSIBILITY        |
|  +---------------------------+       +------------------------+  |
|  |                           |       |                        |  |
|  | - Control plane security  |       | - Application security |  |
|  | - Control plane updates   |       | - Container images     |  |
|  | - Node OS patches         |       | - RBAC configuration   |  |
|  | - etcd encryption         |       | - Network policies     |  |
|  | - Infrastructure security |       | - Secrets management   |  |
|  | - Physical security       |       | - Workload isolation   |  |
|  | - Node provisioning       |       | - Data backup          |  |
|  | - Auto-healing            |       | - Application updates  |  |
|  | - K8s version availability|       | - K8s upgrade trigger  |  |
|  | - Force upgrade EOL vers. |       | - Access management    |  |
|  |                           |       |                        |  |
|  +---------------------------+       +------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

> [!primary]
>
> **About Kubernetes version upgrades**: OVHcloud provides new minor versions. You decide when to upgrade. However, if your cluster runs an End-of-Life version, OVHcloud will force an upgrade to the next version after prior notification.
>

### Access control mechanisms

1. **kubeconfig authentication**: Downloaded from OVHcloud Control Panel, provides admin access
2. **OIDC integration**: Connect your identity provider for SSO
3. **API server IP restrictions**: Limit access to specific IP ranges
4. **RBAC**: Role-Based Access Control for fine-grained permissions

### Security features

- **Free plan**: Network policies via Calico
- **Standard plan**: Network policies via Cilium (eBPF-based)
- Secrets encryption in transit and at rest
- Node isolation via security groups
- Audit logs available in Control Panel

## Component versions

Current software versions (as of the latest Kubernetes releases):

| Component | Free Plan | Standard Plan |
|-----------|-----------|---------------|
| OS | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |
| Kernel | 5.15-generic | 5.15-generic |
| Container runtime | containerd 2.1.4 | containerd 2.1.4 |
| CNI | Canal (Calico v3.30.1 + Flannel v0.24.4) | Cilium |
| CSI | Cinder CSI v1.29.0 | Cinder CSI v1.29.0 |
| CoreDNS | v1.12.4 | v1.12.4 |
| Metrics Server | v0.8.0 | v0.8.0 |

For the complete version matrix, see [Kubernetes Plugins & Software versions](/pages/public_cloud/containers_orchestration/managed_kubernetes/software-versions-reserved-resources).

## Architecture diagram: Complete overview

```text
+=======================================================================================+
|                        OVHCLOUD MANAGED KUBERNETES SERVICE                             |
+=======================================================================================+
|                                                                                       |
|   INTERNET                                                                            |
|   +------+                                                                            |
|   |      |                                                                            |
|   +--+---+                                                                            |
|      |                                                                                |
|      +------------------+------------------------+                                    |
|      |                  |                        |                                    |
|      v                  |                        v                                    |
|   +----------+          |                 +------------+                              |
|   |Floating  |          |                 |  Gateway   | (SNAT for                    |
|   |   IP     |          |                 | (Octavia)  |  outbound)                   |
|   +----+-----+          |                 +-----+------+                              |
|        |                |                       ^                                     |
|        v                |                       |                                     |
|   +----------+          |                       |                                     |
|   |   Load   |          |                       |                                     |
|   | Balancer |          |                       |                                     |
|   | (Octavia)|          |                       |                                     |
|   +----+-----+          |                       |                                     |
|        |                |                       |                                     |
|   +----|----------------|----------------------------------------------------+        |
|   |    |    PRIVATE NETWORK (Public Cloud network or vRack)                  |       |
|   |    v                |                       |                            |        |
|   | +--------------------------------------------------------------------+   |        |
|   | |                        MKS CLUSTER                                  |  |        |
|   | |                                                                    |   |        |
|   | |  CONTROL PLANE (OVHcloud Managed)                                  |   |        |
|   | |  +--------------------------------------------------------------+  |   |        |
|   | |  |                                                              |  |   |        |
|   | |  |  FREE: Single zone          STANDARD: Multi-AZ               |  |   |        |
|   | |  |  +------------------+       +-------+ +-------+ +-------+    |  |   |        |
|   | |  |  | API | etcd | CM  |       |API|etcd| |API|etcd| |API|etcd| |  |   |        |
|   | |  |  | Scheduler        |       | Zone A | | Zone B | | Zone C | |  |   |        |
|   | |  |  +------------------+       +-------+ +-------+ +-------+    |  |   |        |
|   | |  |                                                              |  |   |        |
|   | |  +--------------------------------------------------------------+  |   |        |
|   | |                             ^                                      |   |        |
|   | |                             | Konnectivity                         |   |        |
|   | |                             v                                      |   |        |
|   | |  WORKER NODES                                                      |   |        |
|   | |  +------------------+ +------------------+ +------------------+    |   |        |
|   | |  |     Node 1       | |     Node 2       | |     Node 3       |----+   |        |
|   | |  | +-----+ +-----+  | | +-----+ +-----+  | | +-----+ +-----+  |    |   |        |
|   | |  | |Pod A| |Pod B|  | | |Pod C| |Pod D|  | | |Pod E| |Pod F|  |    |   |        |
|   | |  | +-----+ +-----+  | | +-----+ +-----+  | | +-----+ +-----+  |    |   |        |
|   | |  | kubelet|kube-prx | | kubelet|kube-prx | | kubelet|kube-prx |    |   |        |
|   | |  | containerd      | | containerd       | | containerd       |    |   |        |
|   | |  +--------+---------+ +--------+---------+ +--------+---------+    |   |        |
|   | |           |                    |                    |              |   |        |
|   | |           +--------------------+--------------------+              |   |        |
|   | |                                |                                   |   |        |
|   | |             FREE: Canal (Flannel + Calico)                         |   |        |
|   | |             STANDARD: Cilium (eBPF)                                |   |        |
|   | |                                                                    |   |        |
|   | +--------------------------------------------------------------------+   |        |
|   |                                                                          |        |
|   +--------------------------------------------------------------------------+        |
|                                                                                       |
|   STORAGE                                                                             |
|   +------------------+  +------------------+  +-------------------+                   |
|   |  Block Storage   |  |  Block Storage   |  |  File Storage     |                  |
|   |  (Cinder PV)     |  |  (Cinder PV)     |  |  (NFS - RWX)      |                   |
|   |  RWO only        |  |  RWO only        |  |  Multi-attach     |                  |
|   +------------------+  +------------------+  +-------------------+                   |
|                                                                                       |
+=======================================================================================+
```

## Go further

- [Known limits](/pages/public_cloud/containers_orchestration/managed_kubernetes/known-limits)
- [Choosing the right plan: Free vs Standard](/pages/public_cloud/containers_orchestration/managed_kubernetes/mks_plans)
- [Responsibility model](/pages/public_cloud/containers_orchestration/managed_kubernetes/responsibility-model)
- [Software versions and reserved resources](/pages/public_cloud/containers_orchestration/managed_kubernetes/software-versions-reserved-resources)
- [Using vRack Private Network](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-vrack)
- [Persistent Volumes](/pages/public_cloud/containers_orchestration/managed_kubernetes/setting-up-a-persistent-volume)
- [Expose your applications using Load Balancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
