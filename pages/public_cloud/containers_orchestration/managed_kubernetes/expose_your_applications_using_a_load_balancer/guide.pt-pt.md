---
title: Expose your applications using OVHcloud Public Cloud Load Balancer
excerpt: "How to expose your applications hosted on Managed Kubernetes Service using the OVHcloud Public Cloud Load Balancer"
updated: 2024-09-11
---

> [!warning]
>
> Usage of the [Public Cloud Load Balancer](https://www.ovhcloud.com/pt/public-cloud/load-balancer/) with Managed Kubernetes Service (MKS) is now GA.
> The LoadBalancer based on Octavia is not the default one yet. You must use the annotation `loadbalancer.ovhcloud.com/class: octavia` to deploy an Octavia LoadBalancer from your MKS cluster.
>

## Objective

This guide aims to explain how to use OVHcloud Public Cloud Load Balancer to expose your applications hosted on [Managed Kubernetes Service (MKS)](https://www.ovhcloud.com/pt/public-cloud/kubernetes/).
If you're not comfortable with the different ways of exposing your applications in Kubernetes, or if you're not familiar with the notion of 'loadbalancer' service type, we do recommend to start by reading the guide explaining how to [expose your application deployed on an OVHcloud Managed Kubernetes Service](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-lb). This guide details the different methods to expose your containerized applications hosted in Managed Kubernetes Service.

Our Public Cloud Load Balancer is relying on the OpenStack Octavia project which provides a Cloud Controller Manager (CCM) allowing Kubernetes clusters to interact with Load Balancers. For Managed Kubernetes Service (MKS), this Cloud Controller is installed and configured by our team, allowing you to easily create, use and configure our Public Cloud Load Balancers. You can find the CCM opensource project documentation [here](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md).

This guide uses some concepts that are specific to our Public Cloud Load Balancer (listener, pool, health monitor, member, ...) and to the OVHcloud Public Cloud Network (Gateway, Floating IP). You can find more information regarding Public Cloud Network products concepts on our official documentation, for example [networking concepts](/products/public-cloud-network-concepts) and [loadbalancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

## Requirements

### Kubernetes version

To be able to deploy [Public Cloud Load Balancer](https://www.ovhcloud.com/pt/public-cloud/load-balancer/), your Managed Kubernetes Service must run or have been upgraded to the following patch versions:

| Kubernetes versions |
| ------------------- |
| 1.26.4-3  >=        |
| 1.27.12-1 >=        |
| 1.28.8-1  >=        |
| 1.29.3-3  >=        |
| 1.30.2-1  >=        |

### Network prerequisite to expose your Load Balancers publicly

The first step is to make sure that you have an existing vRack on your Public Cloud Project. To do so you can follow this guide that explains how to [Configure a vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

If you plan to expose your Load Balancer publicly, in order to attach a [Floating IP](https://www.ovhcloud.com/pt/public-cloud/floating-ip/) to your Load Balancer, it is mandatory to have an [OVHcloud Gateway](https://www.ovhcloud.com/pt/public-cloud/gateway/) (an OpenStack router) deployed on the subnet hosting your Load Balancer.

If it does not exist when you create your first [Public Cloud Load Balancer](https://www.ovhcloud.com/pt/public-cloud/load-balancer/), an S size Managed Gateway will be automatically created.
That is why we do recommend deploying your MKS clusters on a network and subnet where an [OVHcloud Gateway](https://www.ovhcloud.com/pt/public-cloud/gateway/) can be created (manually or automatically - cf. [Creating a private network with Gateway](https://www.ovhcloud.com/pt/public-cloud/gateway/)) or is already existing.

If you have an existing/already deployed cluster and if:

- **The Subnet's GatewayIP is already used by an OVHcloud Gateway**, nothing needs to be done. The current OVHcloud Gateway (OpenStack Router) will be used.
- **The subnet does not have an IP reserved for a Gateway**, you will have to provide or create a compatible subnet. Three options are available:
    - Edit an existing subnet to reserve an IP for a Gateway : please refer to the [Update a subnet properties](/pages/public_cloud/public_cloud_network_services/configuration-04-update_subnet) documentation.
    - Provide another compatible subnet: a subnet with an existing OVHcloud Gateway or with an IP address reserved for a Gateway ([Creating a private network with Gateway](https://www.ovhcloud.com/pt/public-cloud/gateway/))
    - Use a subnet dedicated for your load balancer: this option can be used in the OVHcloud Control Panel under `Advanced parameters` > `Loadbalancer Subnet` or using APIs/Infra as Code using the 'loadBalancersSubnetId' parameter.
- **The GatewayIP is already assigned to a non-OVHcloud Gateway (OpenStack Router)**. Two options are available:
    - Provide another compatible subnet: a subnet with an existing OVHcloud Gateway or with an IP address reserved for a Gateway ([Creating a private network with Gateway](https://www.ovhcloud.com/pt/public-cloud/gateway/))
    - Use a subnet dedicated for your load balancers: this option can be used in the OVHcloud Control Panel under `Advanced parameters` > `Loadbalancer Subnet` or using APIs/Infra as Code with the 'loadBalancersSubnetId' parameter.

## Limitations

- Layer 7 Policy & Rules and TLS Termination (`TERMINATED_HTTPS` listener) are not available yet. For such use cases you can rely on [Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- UDP proxy protocol is not supported

## Billing

When exposing your load balancer publicly (public-to-public or public-to-private):

- If it does not already exist, a single OVHcloud Gateway will be automatically created and billed for all Load Balancers spawned in the subnet <https://www.ovhcloud.com/pt/public-cloud/prices/#10394>.
- A Public Floating IP will be used: <https://www.ovhcloud.com/pt/public-cloud/prices/#10346>.
- Each Public Cloud Load Balancer is billed according to its flavor: <https://www.ovhcloud.com/pt/public-cloud/prices/#10420>.

> [!primary]
>
> Note: Each publicly exposed Load Balancer has its own Public Floating IP. Outgoing traffic doesn't consume OVHcloud Gateway bandwidth. ([except for Public-to-Public mode](#public-to-public-scenario))
>

> [!warning]
>
> During the MKS-Public Cloud Load Balancer Beta (CCM), since the Public Cloud Load Balancer is already in General Availability phase, the Public Cloud Load Balancer usage as well as the other network components (Gateway & Floating IPs) will be billed.
>

## Instructions

During the beta phase, if you want a Kubernetes load balancer service to be deployed using [Public Cloud Load Balancer](https://www.ovhcloud.com/pt/public-cloud/load-balancer/) rather than the historical [Loadbalancer for Kubernetes](https://www.ovhcloud.com/pt/public-cloud/load-balancer-kubernetes/) solution, you'll need to add the annotation: `loadbalancer.ovhcloud.com/class: "octavia"` on your Kubernetes Service manifest.

Here's a simple example of how to use the Public Cloud Load Balancer

1\. Deploy a functional Managed Kubernetes (MKS) cluster using the [OVHcloud manager](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster), [Terraform](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster-through-terraform), [Pulumi](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster-with-pulumi) or [APIs](https://api.ovh.com/console-preview/?section=%2Fcloud&branch=v1#post-/cloud/project/-serviceName-/kube).

2\. Retrieve the kubeconfig file needed to use kubectl tool (via the OVHcloud Control Panel, Terraform, Pulumi or API). You can use [this guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster).

3\. Create a Namespace and a Deployment resource using the following command:

```shell
kubectl create namespace test-lb-ns
kubectl create deployment test-lb --image=nginx -n=test-lb-ns
```

4\. Copy/paste the following code on a file named `test-lb-service.yaml`:

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: test-lb
  name: test-lb-service
  namespace: test-lb-ns
  annotations:
    loadbalancer.ovhcloud.com/class: octavia
    loadbalancer.ovhcloud.com/flavor: small
spec:
  ports:
    - name: 80-80
      port: 80
      protocol: TCP
      targetPort: 80
  selector:
      app: test-lb
  type: LoadBalancer
```

5\. Create a 'Service' using the following command:

```shell
kubectl apply -f test-lb-service.yaml
```

6\. Retrieve the Service IP address using the following command line:

```shell
$ kubectl get service test-lb-service -n=test-lb-ns
NAME                 TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
test-lb-service      LoadBalancer   10.3.107.18   141.94.215.240   80:30172/TCP   12m
```

7\. Open a web browser and access: `http://141.94.215.240`

## Use cases

You can find a set a examples on how to use our Public Cloud Load Balancer with Managed Kubernetes Service (MKS) on our dedicated Github repository: <https://github.com/ovh/public-cloud-examples>

### Public-to-Private (your cluster is attached to a private network/subnet)

In a public-to-private scenario you will use your Load Balancer to publicly expose applications that are hosted on your Managed Kubernetes Cluster. The main benefit of this scenario is that your Kubernetes nodes are not exposed on the Internet.

Service example:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-lb-service
  namespace: test-lb-ns
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
    loadbalancer.ovhcloud.com/flavor: "medium" //optional, default = small
  labels:
    app: test-octavia
spec:
  ports:
  - name: client
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

### Private-to-Private

In a private-to-private scenario your Load Balancer is not exposed publicly, it may be useful if you want to expose your containerized service inside your OVHcloud private network.

Service example:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-lb-service
  namespace: test-lb-ns
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
    service.beta.kubernetes.io/openstack-internal-load-balancer: "true"
  labels:
    app: test-octavia
spec:
  ports:
  - name: client
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

<a name="public-to-public-scenario"></a>

### Public-to-Public (you are using a public Managed Kubernetes Cluster)

In a public-to-public scenario, all your Kubernetes nodes have a public network interface. Inter-node/pod communication will rely on public network. This is the easiest way to deploy a MKS cluster as it does not require to create a network and subnet topology. Although all your nodes already carry a public IP address for exposing your applications, you can choose to use a loadbalancer to expose them behind a single IP address.

Service example:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-lb-service
  namespace: test-lb-ns
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
    loadbalancer.ovhcloud.com/flavor: "medium" //optional, default = small
  labels:
    app: test-octavia
spec:
  ports:
  - name: client
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

> [!warning]
>
> A single OpenStack Gateway is spawned for all your LoadBalancers, the Gateway is a small one by default.
> In Public-To-Public mode, the gateway may throttle your LoadBalancers's capacity. To increase the capacity of an OpenStack router, use the [OVHcloud Control Panel](/links/manager) to modify your gateway with a larger size.
>

## Supported Annotations & Features

### Supported service annotations

- `loadbalancer.ovhcloud.com/class`

  During the Beta phase, it is mandatory to specify the class of the load balancer you want to create.
  Authorized values: 'octavia' = Public Cloud Load Balancer, 'iolb' = Loadbalancer for Managed Kubernetes Service (will be deprecated in futur versions). Default value is 'iolb'.

- `loadbalancer.ovhcloud.com/flavor`

  Not a standard OpenStack Octavia annotation (specific to OVHcloud). The size used for creating the loadbalancer. Specifications can be found on the [Load Balancer specifications](https://www.ovhcloud.com/pt/public-cloud/load-balancer/) page. Authorized values => `small`,`medium`,`large`. Default is 'small'.

- `service.beta.kubernetes.io/openstack-internal-load-balancer`

  If 'true', the loadbalancer will only have an IP on the private network (no Floating IP is associated with the Load Balancer). Default is 'false'.

- `loadbalancer.openstack.org/subnet-id`

  The subnet ID where the private IP of the load balancer will be retrieved. By default, the subnet-id of the subnet configured for your OVHcloud Managed Kubernetes Service cluster will be used.

- `loadbalancer.openstack.org/member-subnet-id`

  Member subnet ID of the load balancer created. By default, the subnet-id of the subnet configured for your OVHcloud Managed Kubernetes Service cluster will be used.

- `loadbalancer.openstack.org/network-id`

  The network ID which will allocate the virtual IP for loadbalancer. By default, the network-id of the network configured for your OVHcloud Managed Kubernetes Service cluster will be used.

- `loadbalancer.openstack.org/port-id`

  The port ID for load balancer private IP. Can be used if you want to use a specific private IP.

- `loadbalancer.openstack.org/connection-limit`

  The maximum number of connections per second allowed for the listener. Positive integer or -1 for unlimited (default). This annotation supports update operations.

- `loadbalancer.openstack.org/keep-floatingip`

  If 'true', the floating IP will **NOT** be deleted upon load balancer deletion. Default is 'false'. Useful if you want to keep your Floating IP after Load Balancer deletion.

- `loadbalancer.openstack.org/proxy-protocol`

  Enable the ProxyProtocol on all listeners. Default is 'false'.

> **Values:**
>
> - `v1`, `true`: enable the ProxyProtocol version 1
> - `v2`: enable the ProxyProtocol version 2

- `loadbalancer.openstack.org/timeout-client-data`

  Frontend client inactivity timeout in milliseconds for the load balancer. Default value (ms) = 50000.

- `loadbalancer.openstack.org/timeout-member-connect`

  Backend member connection timeout in milliseconds for the load balancer. Default value (ms) = 5000.

- `loadbalancer.openstack.org/timeout-member-data`

  Backend member inactivity timeout in milliseconds for the load balancer. Default value (ms) = 50000.

- `loadbalancer.openstack.org/timeout-tcp-inspect`

  Time to wait for additional TCP packets for content inspection in milliseconds for the load balancer. Default value (ms) = 0.

- `loadbalancer.openstack.org/enable-health-monitor`

  Defines whether to create health monitor for the load balancer pool. Default is `true`. The health monitor can be created or deleted dynamically. A health monitor is required for services with `spec.externalTrafficPolicy: Local`.

- `loadbalancer.openstack.org/health-monitor-delay`

  Defines the health monitor delay in seconds for the loadbalancer pools. Default value (ms) = 5000

- `loadbalancer.openstack.org/health-monitor-timeout`

  Defines the health monitor timeout in seconds for the loadbalancer pools. This value should be less than delay. Default value (ms) = 3000

- `loadbalancer.openstack.org/health-monitor-max-retries`

  Defines the health monitor retry count for the loadbalancer pool members to be marked online. Default value = 1

- `loadbalancer.openstack.org/health-monitor-max-retries-down`

  Defines the health monitor retry count for the loadbalancer pool members to be marked down. Default value = 3

- `loadbalancer.openstack.org/flavor-id`

  The id of the flavor that is used for creating the loadbalancer. Not useful as we provide `loadbalancer.ovhcloud.com/flavor`.

- `loadbalancer.openstack.org/load-balancer-id`

  This annotation is automatically added to the Service if it's not specified when creating. After the Service is created successfully it shouldn't be changed, otherwise the Service won't behave as expected.

  If this annotation is specified with a valid cloud load balancer ID when creating Service, the Service is reusing this load balancer rather than creating another one. More details [below](#sharing-an-octavia-loadbalancer-between-multiple-kubernetes-loadbalancer-service).

  If this annotation is specified, the other annotations which define the load balancer features will be ignored.

- `loadbalancer.openstack.org/hostname`

  This annotation explicitly sets a hostname in the status of the load balancer service.

- `loadbalancer.openstack.org/load-balancer-address`

  This annotation is automatically added and it contains the Floating IP address of the load balancer service.
  When using `loadbalancer.openstack.org/hostname` annotation it is the only place to see the real address of the load balancer.

### Annotations not supported

- `loadbalancer.openstack.org/availability-zone`

  The name of the loadbalancer availability zone to use. It is ignored if the Octavia version doesn't support availability zones yet.

- `loadbalancer.openstack.org/x-forwarded-for`

  If you want to perform Layer 7 load balancing we do recommend using the official Octavia Ingress-controller: <https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md>

### Features

#### Resize your LoadBalancer

There is no proper way to "resize" your loadbalancer yet (work in progress). The best alternative to change the flavor of your load balancer is to recreate a new Kubernetes Service that will use the same public IP as an existing one.
You can find the complete HowTo and examples on our public Github repository: <https://github.com/ovh/public-cloud-examples>

- First, make sure that the existing service is using the `loadbalancer.openstack.org/keep-floatingip` annotation. If it's not using it, the public Floating IP will be released (it can be added after the service creation).
- Get the public IP of your existing service:

```shell
$ kubectl get service my-small-lb
NAME                 TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
test-lb-todel        LoadBalancer   10.3.107.18   141.94.215.240   80:30172/TCP   12m
```

- Create a new service with the new expected flavor:

```yaml
  apiVersion: v1
  kind: Service
  metadata:
    name: my-medium-lb
    annotations:
      loadbalancer.ovhcloud.com/class: "octavia"
      loadbalancer.ovhcloud.com/flavor: "medium"
    labels:
      app: demo-upgrade
  spec:
    loadBalancerIP: 141.94.215.240 # Use the IP address from the previous service
    ports:
    - name: client
      port: 80
      protocol: TCP
      targetPort: 80
    selector:
      app: nginx
    type: LoadBalancer
```

- Until the deletion of the previous service, this Service will only deploy the LoadBalancer without a Floating IP.
- When the Floating IP is available (the deletion of the initial LB service will unbound the IP), the Floating IP will be attached to this new LB.

> [!warning]
>
> Changing the flavor will lead to a new LoadBalancer creation and deletion of the old LoadBalancer. During this change your applications may become inaccessible.
>

#### Use PROXY protocol to preserve client IP

When exposing services like nginx-ingress-controller, it's a common requirement that the client connection information could pass through proxy servers and load balancers, therefore visible to the backend services. Knowing the originating IP address of a client may be useful for setting a particular language for a website, keeping a denylist of IP addresses, or simply for logging and statistics purposes. You can follow the official Cloud Controller Manager documentation on how to [Use PROXY protocol to preserve client IP](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md#use-proxy-protocol-to-preserve-client-ip).

> [!warning]
>
> Only ProxyProtocol version 1 is supported at the moment by the MKS's integration.
>

#### Migrate from Loadbalancer for Kubernetes to Public Cloud Load Balancer

In order to migrate from an existing [Loadbalancer for Kubernetes](https://www.ovhcloud.com/pt/public-cloud/load-balancer-kubernetes/) to a [Public Cloud Load Balancer](https://www.ovhcloud.com/pt/public-cloud/load-balancer/) you will have to modify an existing Service and change its LoadBalancer class.

Your existing LoadBalancer Service using [Loadbalancer for Kubernetes](https://www.ovhcloud.com/pt/public-cloud/load-balancer-kubernetes/) should have the following annotation:

```yaml
annotations:
  loadbalancer.ovhcloud.com/class: "iolb"
```

##### Step 1 - Edit your Service to change the LoadBalancer class to 'octavia'

```yaml
annotations:
  loadbalancer.ovhcloud.com/class: "octavia"
```

##### Step 2 - Apply the change

```yaml
kubectl apply -f your-service-manifest.yaml
```

> [!warning]
>
> As [Loadbalancer for Kubernetes](https://www.ovhcloud.com/pt/public-cloud/load-balancer-kubernetes/) and [Public Cloud Load Balancer](https://www.ovhcloud.com/pt/public-cloud/load-balancer/) do not use the same solution for Public IP allocation, **it is not possible to keep the existing public IP** of your Loadbalancer for Kubernetes.
> Changing the LoadBalancer class of your Service will lead to the creation of a new Loadbalancer and the allocation of a new Public IP (Floating IP).
>

### Use an existing Floating IP in the tenant

To use an available Floating IP to your K8S LoadBalancer, use the field `.spec.loadBalancerIP` to find this Floating IP in your tenant.

- If the Floating IP is not found, the LoadBalancer will be stuck during the provisioning
- If the Floating IP is already assigned to another component, the LoadBalancer will be provisioned. The Floating IP will only be assigned when the Floating IP becomes available.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: octavia-keepip-with-existing-ip
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
    #loadbalancer.openstack.org/keep-floatingip: "true" # Useless, since the FIP was provided, the FIP will not be managed by the MKS cluster
spec:
  loadBalancerIP: 1.2.3.4
  type: LoadBalancer
```

> [!primary]
>
> Note: the Floating IP must be in the same region as the MKS cluster. A Floating IP cannot be moved to another OpenStack region.
>

### Use a fixed Virtual-IP (VIP) for the LoadBalancer in the subnet

To assign a fixed VIP to the LoadBalancer in the OpenStack subnet, you have to create an OpenStack Port. e.g. with the OpenStack CLI:

```shell
openstack port create --network <network> --fixed-ip subnet=<subnet>,ip-address=10.2.3.4 my-fixed-octavia-vip
```

Then use the annotation `loadbalancer.openstack.org/port-id` with the OpenStack port's UUID:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: octavia-with-fixed-vip
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
    loadbalancer.openstack.org/port-id: "<openstack-port-uuid>"
spec:
  type: LoadBalancer
```

> [!warning]
>
> This feature is only supported when the MKS cluster is attached to a private network. (Public MKS is not supported)
> The port needs to belong to the same network/subnet as the MKS cluster.
> This feature is not compatible when the MKS cluster is configured with a LoadBalancerSubnetId (except if is the same as the NodeSubnetID).
>

### Restrict access for a LoadBalancer Service

To apply IP restriction to the K8S LoadBalancer Service, you can define the array `.spec.loadBalancerSourceRanges` with a list of CIDR ranges.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: octavia-ip-restrictions
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
spec:
  loadBalancerSourceRanges:
  - 1.2.3.4/32
  - 5.6.7.0/24
  type: LoadBalancer
```

If no value is assigned to this spec, no restriction will be applied.

### Sharing an Octavia LoadBalancer between multiple Kubernetes LoadBalancer Services

You can share an Octavia LoadBalancer with up to two Kubernetes Services. These Services can be deployed on different MKS clusters (clusters must be in the same network).

K8S services must expose different protocol/port (you cannot set the same protocol/port on both K8S Services). [Sharing load balancer with multiple Services (GitHub)](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md#sharing-load-balancer-with-multiple-services)

To allow another K8S LoadBalancer Service to use an existing Octavia (created via MKS or via OpenStack), use the annotation `loadbalancer.openstack.org/load-balancer-id`:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: octavia-basic-shared
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
    loadbalancer.openstack.org/load-balancer-id: "<existing-octavia-uuid>"
spec:
  type: LoadBalancer
```

> [!warning]
>
> If you want to delete a MKS cluster which is using SharedLoadBalancer feature, we strongly recommend you to delete the K8S Service which is using it to avoid any issue (such as a remaining Octavia LoadBalancer, configuration not removed, ...).
>

## Common issues when deploying a new LoadBalancer

> [!primary]
>
> If you encounter issues when trying to deploy a Public Cloud LoadBalancer, you can get more information using the `kubectl describe service <svc_name>` command. This will help you get events linked to the service for debugging purposes.
>

### Network is not matching requirements for Public LoadBalancer: No GatewayIP

When trying to spawn a Public LoadBalancer, you must have a GatewayIP assigned to your Subnet to allow a FloatingIP in your subnet. Once the GatewayIP parameter is set with a valid IP, an OpenStack router will be spawned to attach a PublicIP to your Octavia LoadBalancer.

```console
Error syncing load balancer: failed to ensure load balancer: Network is not matching requirement for Public LoadBalancer (no GatewayIP)
```

See the guide: [How set a GatewayIP on an OpenStack Subnet](/pages/public_cloud/public_cloud_network_services/configuration-04-update_subnet).

If you don't want to deploy an OpenStack router in your subnet (e.g. you manage your own router), you have to configure the `LoadBalancerSubnetId` of your MKS cluster. [More information here](#network-prerequisite-to-expose-your-load-balancers-publicly).

### Network is not matching requirements for Public LoadBalancer: Cannot deploy an OpenStack Router

When trying to spawn a Public LoadBalancer, you must have a GatewayIP assigned to your Subnet to allow a FloatingIP in your subnet and this GatewayIP must be avaiable or attached to an OpenStack router.

```console
Error syncing load balancer: failed to ensure load balancer: Network is not matching requirement for Public LoadBalancer (cannot deploy an OpenStack Router)
```

In your case, the GatewayIP is already used by something else and we cannot deploy an OpenStack Router for your Public LoadBalancer. If you are not able to release the IP (e.g. it is used by a router you deployed), you have to configure the `LoadBalancerSubnetId` of your MKS cluster. [More information here](#network-prerequisite-to-expose-your-load-balancers-publicly)

## Resources Naming Convention

When deploying LoadBalancer through Kubernetes Service with type LoadBalancer, the Cloud Controller Manager (CCM) implementation will automatically create Public Cloud resources (LoadBalancer, Listener, Pool, Health-monitor, Gateway, Network, Subnet,...). In order to easily identify those resources, here are the naming templates:

> [!warning]
>
> Do not change the name of resources automatically created by MKS, as it may result to inconsistencies.
>

| Resource                                                          | Naming                                                                             |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Public Cloud Load Balancer                                        | kube_service_$mks_cluster_shortname_$namespace_$k8s_service_name                   |
| Listener                                                          | listener_kube_service_$listener_n°_$mks_cluster_shortname_$namespace_$service-name |
| Pool                                                              | pool_kube_service_$pool_n°_$mks_cluster_shortname_$namespace_$service-name         |
| Health-monitor                                                    | monitor_kube_service_$mks_cluster_shortname_$namespace_$service-name               |
| Network (only automatically created in Public-to-Public scenario) | k8s-cluster-$mks_cluster_id                                                        |
| Subnet (only automatically created in Public-to-Public scenario)  | k8s-cluster-$mks_cluster_id                                                        |
| Gateway/Router                                                    | k8s-cluster-$mks_cluster_id                                                        |
| Floating IP                                                       | Name = IP. Description= LB Octavia Name                                            |

## Other resources

- [Exposing applications using services of LoadBalancer type](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md)
- [Using Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- [OVHcloud Load Balancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer)
- [How to monitor your Public Cloud Load Balancer with Prometheus](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus)

## Go further

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/).

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Container and Orchestration services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pt/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
