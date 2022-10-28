---
title: Known limits
excerpt: 'Requirements and limits to respect'
slug: known-limits
section: Technical resources
---


**Last updated 4th August 2022.**

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
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

## Nodes and pods

We have tested our OVHcloud Managed Kubernetes service with up to 100 nodes and 100 pods per node.
While we are fairly sure it can go further, we advise you to keep under those limits.

Nodepools with anti-affinity are limited to 5 nodes (but you can create multiple node pools with the same instance flavor if needed of course).
A node can run up to 110 pods. This limit does not depend on node flavor.

In general, it is better to have several mid-size Kubernetes clusters than a monster-size one.

To ensure high availability for your services, it is recommended to possess the computation power capable of handling your workload even when one of your nodes becomes unavailable.  
Note that any operation requested to our services, like node deletions or updates, will be performed even if Kubernetes budget restrictions are present.

Most worker nodes (be them added manually or through cluster autoscaler) are created within a few minutes, with the exception of GPU worker nodes (t1 and t2 flavors) where ready status can take up to a bit more than one hour.

Delivering a fully managed service, including OS and other component updates, you will neither need nor be able to SSH as root into your nodes.

## Data persistence

If an incident is detected by the OVHcloud monitoring, as part of auto-healing, or in case of a version upgrade, the Nodes can be fully reinstalled. 

We advise you to save your data in Persistent Volumes (PV), not to save data directly on Nodes if you don't want to lose your data. Follow our [guide about how to setup and manage Persistent Volumes on OVHcloud Managed Kubernetes](../ovh-kubernetes-persistent-volumes/) for more information.

## LoadBalancer

Creating a Kubernetes service of type LoadBalancer in a Managed Kubernetes cluster triggers the creation of a Public Cloud Load Balancer.
The lifespan of the external Load Balancer (and thus the associated IP address) is linked to the lifespan of this Kubernetes resource.

There is a default quota of 200 external Load Balancers per Openstack project (also named Openstack tenant).
This limit can be exceptionally raised upon request through our support team.

There is also a limit of __10 open ports__ on every Load Balancer, and these ports must be in a range between __6 and 65535__.
(Additionally, node-ports are using default range of 30000 - 32767 , allowing you to expose 2767 services/ports).

A Public Cloud Load Balancer has the following non-configurable timeouts:

- 20 seconds for the backend connection to be established
- 180 seconds for the client & server connections

## OpenStack

Our Managed Kubernetes service is based on OpenStack, and your nodes and persistent volumes are built on it, using OVHcloud Public Cloud. As such, you can see them in the `Compute` > `Instances` section of your [OVHcloud Public Cloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg). Though it doesn't mean that you can deal directly with these nodes and persistent volumes the same way you can do it for other Public Cloud instances.

The *managed* part of OVHcloud Managed Kubernetes Service means that we have configured those nodes and volumes to be part of our Managed Kubernetes.  
Please refrain from manipulating them from the *OVHcloud Public Cloud Control Panel* (modifying ports left opened, renaming, resizing volumes...), as you could break them.

There is also a limit of __20__ Managed Kubernetes Services by Openstack project (also named Openstack tenant).

### Node naming

Due to known limitations currently present in the `Kubelet` service, be careful to set __a unique name__ to all your Openstack instances running in your tenant __including__ your "Managed Kubernetes Service" nodes and the instances that your start directly on Openstack through manager or API.  

The usage of the __period (`.`)__ character is forbidden in node name. Please, prefer the __dash__ (`-`) character instead.

## Ports

In any case, there are some ports that you shouldn't block on your instances if you want to keep your OVHcloud Managed Kubernetes service running:

### Ports to open from public network (INPUT)

- TCP Port 22 (*ssh*): needed for nodes management by OVHcloud
- TCP Ports from 30000 to 32767 (*NodePort* services port range): needed for [NodePort](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport) and [LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) services
- TCP Port 111 (*rpcbind*): needed only if you want to use the NFS client deployed on nodes managed by OVHcloud

### Ports to open from instances to public network (OUTPUT)

- TCP Port 443 (*kubelet*): needed for communication between the kubelets and the Kubernetes API server
- TCP Port 80 IP 169.254.169.254/32 (*init service*): needed for OpenStack metadata service
- TCP Ports from 25000 to 31999 (*TLS tunnel*): needed to tunnel traffic between pods and the Kubernetes API server
- TCP Port 8090 (*internal service*): needed for nodes management by OVHcloud
- UDP Port 123 (*systemd-timesync*): needed to allow NTP servers synchronization
- TCP/UDP Port 53 (*systemd-resolve*): needed to allow domain name resolution
- TCP Port 111 (*rpcbind*): needed only if you want to use the NFS client deployed on nodes managed by OVHcloud
- TCP Port 4443 (metrics server): needed for communication between the metrics server and the Kubernetes API server

### Ports to open from others worker nodes (INPUT/OUPUT)

- UDP Port 8472 (*flannel*): needed for communication between pods
- UDP Port 4789 (*kube-dns internal usage*): needed for DNS resolution between nodes
- TCP Port 10250 (*kubelet*): needed for [communication between apiserver and worker nodes](https://kubernetes.io/docs/concepts/architecture/master-node-communication/#apiserver-to-kubelet)

### About Openstack security groups

In case you want to apply OpenStack security groups onto your nodes, it is mandatory to add the above ports in a ruleset concerning the `0.0.0.0/24` CIDR.

> [!warning]
> If you remove the default rules accepting all input and output
> when creating a new security group, be sure to allow the ports needed by your application, as well as the mandatory ports mentioned above.
>

> [!info]
> In order to simplify your policy, you can add these rules which do not specify any port and will allow all internal traffic between pods and services within the cluster:
>> | Direction | Ether Type | IP Protocol | Port Range | Remote IP Prefix | Description |
>> |---|---|---|---|---|---|
>> | Ingress | IPv4 | TCP | Any | 10.2.0.0/16 | Allow trafic from pods|
>> | Ingress | IPv4 | TCP | Any | 10.3.0.0/16 | Allow trafic from services|
> It allow you to trust the internal trafic between pods and services within the cluster.

For more details, please refer to the [Creating and configuring a security group in Horizon documentation](../../public-cloud/setup_security_group/).

## Private Networks

The `vRack` feature is currently available and compliant with our Managed Kubernetes Service.  

To prevent any conflict, we advise you to keep `DHCP` service running in your private network.

> [!warning]
> If you create your subnet via the [OVHcloud APIv6](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private/{networkId}/subnet#POST), please ensure that this option `noGateway` is checked if you do not have a gateway on this subnet. Not doing so will result in faulty services of type LoadBalancer.
>

### Known not compliant IP ranges

The following subnets are not compliant with the `vRack` feature and can generate some incoherent behaviours with our used overlay networks:

```text
10.2.0.0/16 # Subnet used by pods
10.3.0.0/16 # Subnet used by services
172.17.0.0/16 # Subnet used by the Docker daemon
```

## Cluster health

The command `kubectl get componentstatus` is reporting the scheduler, the controller manager and the etcd service as unhealthy. This is a limitation due to our implementation of the Kubernetes control plane as the endpoints needed to report the health of these components are not accesible.

## Persistent Volumes

Kubernetes `Persistent Volume Claims` resizing only allows to __expand__ volumes, not to __decrease__ them.  
If you try to decrease the storage size, you will get a message like:

```bash
The PersistentVolumeClaim "mysql-pv-claim" is invalid: spec.resources.requests.storage: Forbidden: field can not be less than previous value
```

For more details, please refer to the [Resizing Persistent Volumes documentation](../resizing-persistent-volumes/).

The Persistent Volumes are using our Cinder-based block-storage solution through Cinder CSI.  
A worker node can have a maximum of 254 persistent volumes attached to it, and a persistent volume can only be attached to a single worker node.  
You can manually [configure multi-attach persistent volumes with NAS-HA](../Configuring-multi-attach-persistent-volumes-with-ovhcloud-nas-ha/).
