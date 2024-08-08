---
title: Expose your applications using OVHcloud Public Cloud Load Balancer
excerpt: "How to expose your applications hosted on Managed Kubernetes Service using the OVHcloud Public Cloud Load Balancer"
updated: 2024-08-08
---

> [!warning]
>
> Usage of the [Public Cloud Load Balancer](https://www.ovhcloud.com/es-es/public-cloud/load-balancer/) with Managed Kubernetes Service (MKS) is currently in Beta phase.
> This feature is also available to customers using the services of our US subsidiary.
>

## Objective

This guide aims to explain how to use OVHcloud Public Cloud Load Balancer to expose your applications hosted on [Managed Kubernetes Service (MKS)](https://www.ovhcloud.com/es-es/public-cloud/kubernetes/).
If you're not comfortable with the different ways of exposing your applications in Kubernetes, or if you're not familiar with the notion of 'loadbalancer' service type, we do recommend to start by reading the guide explaining how to [expose your application deployed on an OVHcloud Managed Kubernetes Service](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-lb). This guide details the different methods to expose your containerized applications hosted in Managed Kubernetes Service.

Our Public Cloud Load Balancer is relying on the OpenStack Octavia project which provides a Cloud Controller Manager (CCM) allowing Kubernetes clusters to interact with Load Balancers. For Managed Kubernetes Service (MKS), this Cloud Controller is installed and configured by our team, allowing you to easily create, use and configure our Public Cloud Load Balancers. You can find the CCM opensource project documentation [here](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md).

This guide uses some concepts that are specific to our Public Cloud Load Balancer (listener, pool, health monitor, member, ...) and to the OVHcloud Public Cloud Network (Gateway, Floating IP). You can find more information regarding Public Cloud Network products concepts on our official documentation, for example [networking concepts](/products/public-cloud-network-concepts) and [loadbalancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).


## Requirements

#### Kubernetes version

To be able to deploy [Public Cloud Load Balancer](https://www.ovhcloud.com/es-es/public-cloud/load-balancer/), your Managed Kubernetes Service must run or have been upgraded to the following patch versions:

| Kubernetes versions |
|-------------|
| 1.24.17-7>= |
| 1.25.16-7>= |
| 1.26.4-3>=  |
| 1.27.12-1>= |
| 1.28.8-1>=  |
| 1.29.3-3>=  |

#### Network prerequisite to expose your Load Balancers publicly

The first step is to make sure that you have an existing vRack on your Public Cloud Project. To do so you can follow this guide that explains how to [Configure a vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

If you plan to expose your Load Balancer publicly, in order to attach a [FloatingIP](https://www.ovhcloud.com/es-es/public-cloud/floating-ip/) to your Load Balancer, it is mandatory to have an [OVHcloud Gateway](https://www.ovhcloud.com/es-es/public-cloud/gateway/) (an OpenStack router) deployed on the subnet hosting your Load Balancer.

If it does not exist when you create your first [Public Cloud Load Balancer](https://www.ovhcloud.com/es-es/public-cloud/load-balancer/), an S size Managed Gateway will be automatically created.
That is why we do recommend deploying your MKS clusters on a network and subnet where an [OVHcloud Gateway](https://www.ovhcloud.com/es-es/public-cloud/gateway/) can be created (manually or automatically - cf. [Creating a private network with Gateway](https://www.ovhcloud.com/es-es/public-cloud/gateway/)) or is already existing.

If you have an existing/already deployed cluster and if:

- **The Subnet's GatewayIP is already used by an OVHcloud Gateway**, nothing needs to be done. The current OVHcloud Gateway (OpenStack Router) will be used.
- **The subnet does not have an IP reserved for a Gateway**, you will have to provide or create a compatible subnet. Three options are available:
    - Edit an existing subnet to reserve an IP for a Gateway : please refer to the [Update a subnet properties](/pages/public_cloud/public_cloud_network_services/configuration-04-update_subnet) documentation.
    - Provide another compatible subnet: a subnet with an existing OVHcloud Gateway or with an IP address reserved for a Gateway ([Creating a private network with Gateway](https://www.ovhcloud.com/es-es/public-cloud/gateway/))
    - Use a subnet dedicated for your load balancer: this option can be used in the OVHcloud Control Panel under `Advanced parameters` > `LoadbalancerS ubnet` or using APIs/Infra as Code using the 'LoadBalancerSubnetID' parameter.
- **The GatewayIP is already assigned to a non-OVHcloud Gateway (OpenStack Router)**. Two options are available:
    - Provide another compatible subnet: a subnet with an existing OVHcloud Gateway or with an IP address reserved for a Gateway ([Creating a private network with Gateway](https://www.ovhcloud.com/es-es/public-cloud/gateway/))
    - Use a subnet dedicated for your load balancers: this option can be used in the OVHcloud Control Panel under `Advanced parameters` > `Loadbalancer Subnet` or using APIs/Infra as Code with the 'LoadBalancerSubnetID' parameter.

## Limitations

- Layer 7 Policy & Rules and TLS Termination (`TERMINATED_HTTPS` listener) are not available yet. For such use cases you can rely on [Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- UDP proxy protocol is not supported

## Billing

When exposing your load balancer publicly (public-to-public or public-to-private):

- If it does not already exist, a single OVHcloud Gateway will be automatically created and billed for all Load Balancers spawned in the subnet <https://www.ovhcloud.com/es-es/public-cloud/prices/#10394>.
- A Public Floating IP will be used: <https://www.ovhcloud.com/es-es/public-cloud/prices/#10346>.
- Each Public Cloud Load Balancer is billed according to its flavor: <https://www.ovhcloud.com/es-es/public-cloud/prices/#10420>.

> [!primary]
>
> Note: Each publicly exposed Load Balancer has its own Public Floating IP. Outgoing traffic doesn't consume OVHcloud Gateway bandwidth.
>

> [!warning]
>
> During the MKS-Public Cloud Load Balancer Beta (CCM), since the Public Cloud Load Balancer is already in General Availability phase, the Public Cloud Load Balancer usage as well as the other network components (Gateway & Floating IPs) will be billed.
>

## Instructions

During the beta phase, if you want a Kubernetes load balancer service to be deployed using [Public Cloud Load Balancer](https://www.ovhcloud.com/es-es/public-cloud/load-balancer/) rather than the historical [Loadbalancer for Kubernetes](https://www.ovhcloud.com/es-es/public-cloud/load-balancer-kubernetes/) solution, you'll need to add the annotation: `loadbalancer.ovhcloud.com/class: "octavia"` on your Kubernetes Service manifest.

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
$ kubectl apply -f test-lb-service.yaml
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

## Supported Annotations & Features

### Supported service annotations

- `loadbalancer.ovhcloud.com/class`

  During the Beta phase, it is mandatory to specify the class of the load balancer you want to create.
  Authorized values: 'octavia' = Public Cloud Load Balancer, 'iolb' = Loadbalancer for Managed Kubernetes Service (will be deprecated in futur versions). Default value is 'iolb'.

- `loadbalancer.ovhcloud.com/flavor:`

  Not a standard OpenStack Octavia annotation (specific to OVHcloud). The size used for creating the loadbalancer. Specifications can be found on the [Load Balancer specifications](https://www.ovhcloud.com/es-es/public-cloud/load-balancer/) page. Authorized values => `small`,`medium`,`large`. Default is 'small'.

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

  If 'true', the loadbalancer pool protocol will be set as `PROXY`. Default is 'false'.

- `loadbalancer.openstack.org/x-forwarded-for`

  **Not supported**. If you want perform Layer 7 load balancing we do recommend using the official Octavia Ingress-controller: <https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md>

- `loadbalancer.openstack.org/timeout-client-data`

  Frontend client inactivity timeout in milliseconds for the load balancer. Default value (ms) = 50000.

- `loadbalancer.openstack.org/timeout-member-connect`

  Backend member connection timeout in milliseconds for the load balancer. Default value (ms) = 5000.

- `loadbalancer.openstack.org/timeout-member-data`

  Backend member inactivity timeout in milliseconds for the load balancer. Default value (ms) = 50000.

- `loadbalancer.openstack.org/timeout-tcp-inspect`

  Time to wait for additional TCP packets for content inspection in milliseconds for the load balancer. Default value (ms) = 0.

- `loadbalancer.openstack.org/enable-health-monitor`

  Defines whether to create health monitor for the load balancer pool. Default is `true`. The health monitor can be created or deleted dynamically. A health monitor is required for services with `externalTrafficPolicy: Local`.

- `loadbalancer.openstack.org/health-monitor-delay`

  Defines the health monitor delay in seconds for the loadbalancer pools. Default value (ms) = 5000

- `loadbalancer.openstack.org/health-monitor-timeout`

  Defines the health monitor timeout in seconds for the loadbalancer pools. This value should be less than delay. Default value (ms) = 3000

- `loadbalancer.openstack.org/health-monitor-max-retries`

  Defines the health monitor retry count for the loadbalancer pool members. Default value = 1

- `loadbalancer.openstack.org/flavor-id`

  The id of the flavor that is used for creating the loadbalancer. Not useful as we provide `loadbalancer.ovhcloud.com/flavor`.

- `loadbalancer.openstack.org/load-balancer-id`

  This annotation is automatically added to the Service if it's not specified when creating. After the Service is created successfully it shouldn't be changed, otherwise the Service won't behave as expected.

  If this annotation is specified with a valid cloud load balancer ID when creating Service, the Service is reusing this load balancer rather than creating another one. Please make sure that your load balancer is correctly named according to the [Naming Convention](#namingconvention) using 'kube_service_' as load balancer's name prefix.
. Again, it shouldn't be changed after the Service is created.

  If this annotation is specified, the other annotations which define the load balancer features will be ignored.

- `loadbalancer.openstack.org/hostname`

  This annotation explicitly sets a hostname in the status of the load balancer service.

- `loadbalancer.openstack.org/load-balancer-address`

  This annotation is automatically added and it contains the Floating IP address of the load balancer service.
  When using `loadbalancer.openstack.org/hostname` annotation it is the only place to see the real address of the load balancer.


### Annotations not yet supported

- `loadbalancer.openstack.org/health-monitor-max-retries-down`

  Defines the health monitor retry count for the loadbalancer pool members to be marked down.

- `loadbalancer.openstack.org/availability-zone`

  The name of the loadbalancer availability zone to use. It is ignored if the Octavia version doesn't support availability zones yet.

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

#### Migrate from Loadbalancer for Kubernetes to Public Cloud Load Balancer

In order to migrate from an existing [Loadbalancer for Kubernetes](https://www.ovhcloud.com/es-es/public-cloud/load-balancer-kubernetes/) to a [Public Cloud Load Balancer](https://www.ovhcloud.com/es-es/public-cloud/load-balancer/) you will have to modify an existing Service and change its LoadBalancer class.

Your existing LoadBalancer Service using [Loadbalancer for Kubernetes](https://www.ovhcloud.com/es-es/public-cloud/load-balancer-kubernetes/) should have the following annotation:

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
> As [Loadbalancer for Kubernetes](https://www.ovhcloud.com/es-es/public-cloud/load-balancer-kubernetes/) and [Public Cloud Load Balancer](https://www.ovhcloud.com/es-es/public-cloud/load-balancer/) do not use the same solution for Public IP allocation, **it is not possible to keep the existing public IP** of your Loadbalancer for Kubernetes.
> Changing the LoadBalancer class of your Service will lead to the creation of a new Loadbalancer and the allocation of a new Public IP (Floating IP).
>

### Features not yet supported

#### Sharing load balancer with multiple Services

By default, different Services of LoadBalancer type should have different corresponding cloud load balancers. However, the Cloud Controller Manager (CCM) allows multiple Services to share a single load balancer. We are currently working to provide this feature shortly. Official documentation: [Sharing load balancer with multiple Services](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md#sharing-load-balancer-with-multiple-services).

## Resources Naming Convention <a name="namingconvention"></a>

When deploying LoadBalancer through Kubernetes Service with type LoadBalancer, the Cloud Controller Manager (CCM) implementation will automatically create Public Cloud resources (LoadBalancer, Listener, Pool, Health-monitor, Gateway, Network, Subnet,...). In order to easily identify those resources, here are the naming templates:

> [!warning]
>
> Do not change the name of resources automatically created by MKS, as it may result to inconsistencies.
>


| Resource                                                           | Naming                                                                                                                 |
|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Public Cloud Load Balancer                                         | kube_service_$mks_cluster_shortname_$namespace_$k8s_service_name |
| Listener                                                           | listener_kube_service_$listener_n°_$mks_cluster_shortname_$namespace_$service-name                                    |
| Pool                                                               | pool_kube_service_$pool_n°_$mks_cluster_shortname_$namespace_$service-name                                            |
| Health-monitor                                                     | monitor_kube_service_$mks_cluster_shortname_$namespace_$service-name                                                  |
| Network (only automatically created in Public-to-Public scenario)  | k8s-cluster-$mks_cluster_id                                                                                            |
| Subnet (only automatically created in Public-to-Public scenario)   | k8s-cluster-$mks_cluster_id                                                                                            |
| Gateway/Router                                                     | k8s-cluster-$mks_cluster_id                                                                                            |
| Floating IP                                                        | Name = IP. Description= LB Octavia Name                                                                                |

## Other resources

- [Exposing applications using services of LoadBalancer type](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md)
- [Using Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- [OVHcloud Load Balancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer)
- [How to monitor your Public Cloud Load Balancer with Prometheus](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus)

## Go further

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/).

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Container and Orchestration services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es-es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
