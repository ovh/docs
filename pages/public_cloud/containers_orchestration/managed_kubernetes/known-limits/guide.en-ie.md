---
title: Known limits
excerpt: 'Requirements and limits to respect'
updated: 2025-12-02
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24;
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   b   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

## Nodes, pods and etcd limits

|Plan | Max nodes per cluster | Max Pods per node | Max nodes per anti-affinity group | etcd max size |
|---------|---|---|---|---|
| Free    |100|110|5|400MB|
| Standard|500|110|5|8GB|

We have tested our OVHcloud Managed Kubernetes service Plans with a max number of nodes, while higher configurations might work and that there is no hard limits, we recommend staying under these limits for optimal stability.

Keep in mind that impact on the control plane isn't solely determined by the number of nodes. What truly defines a 'large cluster' depends on the combination of resources deployed pods, custom resources, and other objects which all contribute to control plane load. A cluster with fewer nodes but intensive resource utilization can stress the control plane more than a cluster with many nodes running minimal workloads. In such configuration it is recommended to switch to the Standard plan in order to benefit from higher and dedicated control plane resources.

While 110 pods per node is the default value defined by Kubernetes, please note that the OVHcloud teams deploy some management components on nodes (CNI, agents, Konnectivity, etc.), these are considered 'cluster mandatory' and will impact the pods per node capacity for user workloads. For the same reason, as those management components are mandatory and require a small amount of node resources, in case of node overloading you might face some of your pods being in state `Terminated` with `Reason: OOMKilled` and `Exit Code: 137`. That's why it is important to have a clean resources management for your workload in order to avoid nodes overloading and instabilities.

As a fully managed service, you will **not have SSH access** to the nodes. All OS and component updates are handled by OVHcloud through patches and minor updates. If you need to perform **node-level debugging**, you can use the Kubernetes native tooling with [kubectl debug](https://kubernetes.io/docs/tasks/debug/debug-cluster/kubectl-node-debug/#debugging-a-node-using-kubectl-debug-node)to inspect or troubleshoot a node without requiring direct SSH access.

## Patch, Upgrades & Maintenances considerations

Any operation requested to our services, such as node deletions, patches or versions updates, follows a **graceful draining procedure** respecting [Pod Disruption Budgets](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) for a maximum duration of 10 minutes. After this period, nodes are forcefully drained to allow operations to continue. Patch and Kubernetes version upgrade are performed using an In Place upgrade procedure, meaning the nodes are fully reinstalled one by one.

Worker nodes (added manually or through the Cluster Autoscaler) are generally ready within a few minutes.

> [!primary]
>
> GPU worker nodes (t1 and t2 flavors) may take more than one hour to reach a ready state.
>

If an incident is detected by the OVHcloud monitoring, as part of auto-healing, the nodes can be fully reinstalled after being in 'NotReady' state for more than 10 minutes.

## Data persistence & Persistent Volumes

To avoid data loss in case of node failure, patch or upgrade, it is recommended to save your data Persistent Volumes (PV) based on Persistent Storage classes (such as Block or File Storage), not directly on nodes (including NVMe additional disks).
Follow our [guide about how to setup and manage Persistent Volumes on OVHcloud Managed Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/setting-up-a-persistent-volume) for more information.

By default, OVHcloud provides [storage classes](https://github.com/ovh/docs/blob/develop/pages/public_cloud/containers_orchestration/managed_kubernetes/setting-up-a-persistent-volume/guide.en-gb.md#storage-classes) based on Cinder block-storage solution through Cinder CSI.
A worker node can have a maximum of 100 Cinder persistent volumes attached to it, and a Cinder persistent volume can only be attached to a single worker node.

You can manually [configure multi-attach persistent volumes with NAS-HA](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-multi-attach-persistent-volumes-with-ovh-nas-ha).

### Multi availability zones deployments

MKS clusters deployed on regions with 3 availability zones can use Cinder Persistent Volumes provisioned using **zone-specific StorageClasses**:

- `csi-cinder-high-speed`
- `csi-cinder-high-speed-gen2`

> [!primary]
>
> A PVC provisioned in a given zone will only be accessible from nodes in that same zone.
> Classic multi-attach (`csi-cinder-classic-multiattach`) is **not supported** for multi-AZ clusters yet, as attaching volumes to multiple instances in different zones can lead to data corruption.
>

### Volumes Resizing

Kubernetes `Persistent Volume Claims` resizing only allows to expand volumes, not to decrease them.

If you try to decrease the storage size, you will get a message like:

```bash
The PersistentVolumeClaim "mysql-pv-claim" is invalid: spec.resources.requests.storage: Forbidden: field can not be less than previous value
```

For more details, please refer to the [Resizing Persistent Volumes documentation](/pages/public_cloud/containers_orchestration/managed_kubernetes/resizing-persistent-volumes).

## LoadBalancer

Creating a Kubernetes service of type LoadBalancer triggers the creation of a Public Cloud Load Balancer based on OpenStack Octavia.
The lifespan of the external Load Balancer (and the associated IP address, if not explicitly specified to keep it) is linked to the lifespan of the Kubernetes resource.

For more information, see How to [expose services through a LoadBalancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer).

## Resources & Quota

Managed Kubernetes service resources including nodes, persistent volumes and load balancers are based on standard Public Cloud resources deployed on user Project. As such, you can see them in the [OVHcloud Public Cloud Control Panel](/links/manager) or through APIs. Though it doesn't mean that you can interact directly with these resources the same way you can do it for other Public Cloud instances. The *managed* part of OVHcloud Managed Kubernetes Service means that we have configured those resources to be part of our Managed Kubernetes.

Please avoid manipulating them 'manually' (modifying ports left opened, renaming, deleting, resizing volumes, etc.), as you could break them. As part of our auto-healing process, any deletion or modification may lead to a new resource creation or duplication.

By default, there is a quota of 20 Managed Kubernetes 'Free' plan clusters by Project (also named OpenStack tenant).

The MKS Cluster's quota relies on your project's quota. If necessary, consult [this documentation](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) to increase your quota.

### Node naming

Due to known limitations currently present in the `Kubelet` service, be careful to set __a unique name__ to all your OpenStack instances running in your tenant **including** your "Managed Kubernetes Service" nodes and the instances that your start directly on OpenStack through the OVHcloud Control Panel or API.

## Ports

To ensure proper operation of your OVHcloud Managed Kubernetes cluster, certain ports must remain open.

### Free plan

#### Ports to open from public network (INGRESS)

| Port(s)       | Protocol | Usage |
| ------------- | -------- | ----- |
| 22            | TCP      | SSH access for node management by OVHcloud |
| 30000–32767   | TCP      | Needed for [NodePort](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport) and [LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) services |
| 111           | TCP      | rpcbind (only if using NFS client) |

#### Ports to open from instances to public network (EGRESS)

| Port(s)                 | Protocol | Usage                                                |
| ----------------------- | -------- | ---------------------------------------------------- |
| 443                     | TCP      | Kubelet communication with the kubernetes API server |
| 80 (169.254.169.254/32) | TCP      | Init service (OpenStack metadata)                    |
| 25000–31999             | TCP      | TLS tunnel between pods and kubernetes API server    |
| 8090                    | TCP      | Internal (OVHcloud) node management service          |
| 123                     | UDP      | NTP servers synchronization (systemd-timesync)       |
| 53                      | TCP/UDP  | Allow domain name resolution (systemd-resolve)       |
| 111                     | TCP      | rpcbind (only if using NFS client)                   |
| 4443                    | TCP      | Metrics server communication                         |

#### Ports to open from others worker nodes (INGRESS/EGRESS)

| Port(s)       | Protocol | Usage |
| ------------- | -------- | ----- |
| 8472          | UDP      | Flannel overlay network (for communication between pods) |
| 4789          | UDP      | Kubernetes DNS internal usage |
| 10250         | TCP      | Needed for [communication between apiserver and worker nodes](https://kubernetes.io/docs/concepts/architecture/master-node-communication/#apiserver-to-kubelet) (kubelet) |

> [!warning]
>
> Blocking any of the above ports may cause cluster malfunction.
>
> For Standard Plan clusters, the same rules apply.
>
> Keep the default OpenStack security group unchanged to avoid disconnecting nodes; only add application-specific rules carefully.
>

#### About OpenStack security groups

In case you want to apply OpenStack security groups onto your nodes, it is mandatory to add the above ports in a ruleset concerning the `0.0.0.0/0` CIDR.

> [!warning]
> If you remove the default rules accepting all input and output when creating a new security group, make sure to allow the ports needed by your application, as well as the mandatory ports mentioned above.
>

> [!primary]
> In order to simplify your policy, you can add these rules which do not specify any port and will allow all internal traffic between pods and services within the cluster:
>
> | Direction | Ether Type | IP Protocol | Port Range | Remote IP Prefix | Description |
> |---|---|---|---|---|---|
> | Ingress | IPv4 | TCP | Any | 10.2.0.0/16 | Allow traffic from pods|
> | Ingress | IPv4 | TCP | Any | 10.3.0.0/16 | Allow traffic from services|
>
> It allows you to trust the internal traffic between pods and services within the cluster.

For more details, please refer to the [Creating and configuring a security group in Horizon documentation](/pages/public_cloud/compute/setup_security_group).

### Standard plan

## Security group

The OpenStack security group for worker nodes is the default one. It allows all egress and ingress traffic by default on your private network.

```bash
openstack security group rule list default
```

```bash
+--------------------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Direction | Remote Security Group | Remote Address Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+
| 0b31c652-b463-4be2-b7e9-9ebb25d619f8 | None        | IPv4      | 0.0.0.0/0 |            | egress    | None                  | None                 |
| 25628717-0339-4caa-bd23-b07376383dba | None        | IPv6      | ::/0      |            | ingress   | None                  | None                 |
| 4b0b0ed2-ed16-4834-a5be-828906ce4f06 | None        | IPv4      | 0.0.0.0/0 |            | ingress   | None                  | None                 |
| 9ac372e3-6a9f-4015-83df-998eec33b790 | None        | IPv6      | ::/0      |            | egress    | None                  | None                 |
+--------------------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+
```

For now it is recommended to leave these security rules in their "default" configuration or the nodes could be disconnected from the cluster.

## Private Networks

> [!warning]
>
> If your cluster was created using an OpenStack Private Network, **do not change** the private network name or the subnet name.
>
> The OpenStack Cloud Controller Manager (CCM) relies on these names to create private network connectivity inside the cluster and to link nodes to the private network.
>
> Changing either the network or subnet name may prevent new nodes from being deployed correctly. Nodes will have a `"uninitialized=true:NoSchedule"` taint, which prevents the kube-scheduler from deploying pods on these nodes.
>
> Nodes affected in this way will also lack an External-IP.
>

### Free Plan

### Known not compliant IP ranges

The following subnets can generate some incoherent behaviours with our used overlay networks:

```bash
10.2.0.0/16 # Subnet used by pods
10.3.0.0/16 # Subnet used by services
172.17.0.0/16 # Subnet used by the Docker daemon
```

> [!primary]
>
> These subnets must be avoided in your private network to prevent networking issues.
>

To prevent network conflicts, it is recommended to **keep the DHCP service running** in your private network.

> [!warning]
>
> At the moment, MKS worker nodes cannot use provided subnet DNS nameservers.
>

### Standard Plan

#### Reserved IP ranges

The following ranges are used by the cluster, and should not be used elsewhere on the private network attached to the cluster:

```bash
10.240.0.0/13 # Subnet used by pods
10.3.0.0/16 # Subnet used by services
```

> [!warning]
>
> These ranges are fixed for now but will be configurable in a future release. Do not use them elsewhere in your private network.
>

## Cluster health

The command `kubectl get componentstatus` is reporting the scheduler, the controller manager and the etcd service as unhealthy. This is a limitation due to our implementation of the Kubernetes control plane as the endpoints needed to report the health of these components are not accessible.

## Go further

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](/links/community).
