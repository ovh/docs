---
title: Expose your services using OVHcloud Public Cloud Load Balancer
excerpt: ""
updated: 2024-01-09
---

> [!warning]
>
> Usage of the [Public Load Balancer](https://www.ovhcloud.com/en-ie/public-cloud/load-balancer/) with a Managed Kubernetes Service (MKS) is currently in Beta phase. This feature is also available to customers using the services of our US subsidiary.
>

## Objective

This guide aim to know how to use our Public Cloud Load Balancer to expose your app hosted on our [Managed Kubernetes Service (MKS)](https://www.ovhcloud.com/en/public-cloud/kubernetes/).
If you're not comfortable with the different ways of exposing your applications in Kubernetes, or if you're not familiar with the notion of service type 'loadbalancer', we recommend you start by reading [this guide](https://help.ovhcloud.com/csm/en-ie-public-cloud-kubernetes-using-lb?id=kb_article_view&sysparm_article=KB0050008) detailing the different methods for exposing your containerized applications hosted in Kubernetes.

Our Public Cloud Load Balancer is relying on Openstack Octavia project, you can find the official documentation [here](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md).



## Prerequisites

#### MKS Kubernetes version
- To be able to deploy Octavia load balancers, your Managed Kubernetes Service must have been upgraded to the following patch version:

| Kubenertes versions    |
|-------------|
| 1.24.13-3>= |   
| 1.25.9-3>=  |   
| 1.26.4-3>=  |   
| 1.27>=      |  

#### Network topologie for Public exposition //à reformuler
- If you plan to expose your Load Balancer publicly, in order to use a FloatingIP, an OVHcloud Gateway (or Openstack router) is mandatory on subnet hosting your Load Balancer. We do recommend to create your MKS clusters on a network and subnet using our OVHcloud Gateway. Here is a list of situation you may face:
    - **The Subnet's GatewayIP is already an OVHcloud Gateway**, nothing needs to be done. The current Openstack Router will be used.
    - **The subnet doest not have an IP reserved for a Gateway** --> You will have to provide/create a compatible subnet. You can edit the existing subnet (modop CLI Openstack/Horizon) or use another dedicated subnet (doc LoadBalancerSubnetID)//TODO
    - **The GatewayIP is already assigned to a non-OVHcloud Gateway (Openstack Router)** --> You will have to provide/create a compatible subnet. To do so you select another dedicated subnet (doc LoadBalancerSubnetID)//TODO

// FAIRE UN TABLEAU POUR LISTER LES CAS + SOLUTIONS ?


## Limitations

- Layer 7 and TLS Termination are not available yet. For such use cases you can rely on [Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- UDP proxy protocol is not supported


## Billing

- When exposing your load balancer publicly (pub-to-pub or pub-to-private), if it does not already exist, an OVHcloud Gateway  is automatically creation and charged for all Load Balancers spawned in the subnet <https://www.ovhcloud.com/en-gb/public-cloud/prices/#10394>.
- Each Public CLoud Load Balancer is billed according to his flavor: <https://www.ovhcloud.com/en-gb/public-cloud/prices/#10420>
- If the Public Cloud Load Balancer is a public one, a Public Floating IP will be used: https://www.ovhcloud.com/en-gb/public-cloud/prices/#10346

    > [!primary]
    >
    > Note: Each Public Cloud Load Balancer has his own Public Floating IP. Outgoing traffic doesn't consume OVHcloud Gateway bandwidth.
    >

## Process

During the beta phase, if you want a Kubernetes load balancer service to be deployed using Public Cloud Load Balancer rather than the current Loadbalancer for Kubernetes solution, you'll need to add an annotation: loadbalancer.ovhcloud.com/class: "octavia".  

Here's a simple example of how to use the Public Cloud Load Balancer

1. Creation of a functional Managed Kubernetes (MKS) cluster using the OVHcloud manager, Terraform or APIs.
2. Retrieve the kubeconfig needed to use kubectl tool (via OVHcloud manager, Terraform or API). You can use [this guide](https://help.ovhcloud.com/csm/en-ie-public-cloud-kubernetes-configure-kubectl?id=kb_article_view&sysparm_article=KB0049658)
3. Create a "deployment" using the following command: kubectl create deployment test-octavia --image=nginx
4. Create a service using the following configuration
5. Retrieve service IP address using the following command line: `kubectl describe service test-octavia-todel`
6. Open a web browser at: http://IP-retrieved-in-prevous-step

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: test-octavia
  name: test-octavia-model
  namespace: default
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
    loadbalancer.ovhcloud.com/flavor: "small"
spec:
  ports:
  - name: 80-80
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: test-octavia
  type: LoadBalancer
```

## Use cases

### Public-to-Public (you are using a public Managed Kubernetes Cluster)

- Useful Annotations and Specs

**annotations:**

- `loadbalancer.openstack.org/flavor` //not standard Openstack annotations values => small,medium,large. Default => 'small'
- `loadbalancer.openstack.org/flavor-id` //if 'flavor' is not used
- `loadbalancer.openstack.org/keep-floatingip` // useful if you want to keep your floating API after Load Balancer deletion

**spec:**
- `spec.loadbalancerIP` // A CONFIRMER (DEPRECATED ON 1.24)

**Example:**



### Public to Private (your cluster is attached to a private network/subnet)

- Useful Annotations and Specs

**annotations:**

- `loadbalancer.openstack.org/flavor` //not standard Openstack annotations values => small,medium,large. Default => 'small'
- `loadbalancer.openstack.org/flavor-id` // if 'flavor' is not used
- `loadbalancer.openstack.org/keep-floatingip` // useful if you want to keep your floating API after Load Balancer deletion


**spec:**

- `spec.loadbalancerIP` // A CONFIRMER (DEPRECATED ON 1.24)

**Example:**

### Private to Private

- From service annotations or spec

**annotations:**

- `loadbalancer.openstack.org/flavor` //not standard Openstack annotations values => small,medium,large. Default => 'small'
- `loadbalancer.openstack.org/flavor-id` // if 'flavor' is not used
- `loadbalancer.openstack.org/keep-floatingip` // useful if you want to keep your floating API after Load Balancer deletion
- `service.beta.kubernetes.io/openstack-internal-load-balancer`

**spec:**

- `spec.loadbalancerIP` // A CONFIRMER (DEPRECATED ON 1.24)



## Supported Features/Annotations

- `loadbalancer.openstack.org/floating-network-id`   //NOT SUPPORTED on OVH

  The public network id which will allocate public IP for loadbalancer. This annotation works when the value of `service.beta.kubernetes.io/openstack-internal-load-balancer` is false.


- `loadbalancer.openstack.org/floating-subnet` //NOT SUPPORTED on OVH

  A public network can have several subnets. This annotation is the name of subnet belonging to the floating network. This annotation is optional.

- `loadbalancer.openstack.org/floating-subnet-id` //NOT SUPPORTED on OVH

  This annotation is the ID of a subnet belonging to the floating network, if specified, it takes precedence over `loadbalancer.openstack.org/floating-subnet` or `loadbalancer.openstack.org/floating-tag`.

- `loadbalancer.openstack.org/floating-subnet-tags` //NOT SUPPORTED on OVH

  This annotation is the tag of a subnet belonging to the floating network.

- `loadbalancer.openstack.org/class` //NOT SUPPORTED on OVH

  The name of a preconfigured class in the config file. If provided, this config options included in the class section take precedence over the annotations of floating-subnet-id, floating-network-id, network-id, subnet-id and member-subnet-id . See the section below for how it works.

- `loadbalancer.openstack.org/subnet-id`

  VIP subnet ID of load balancer created. By default, the subnet-id of the subnet configured for your OVHcloud Managed Kubernetes Cluster will be used.

- `loadbalancer.openstack.org/member-subnet-id`

  Member subnet ID of the load balancer created. By default, the subnet-id of the subnet configured for your OVHcloud Managed Kubernetes Cluster will be used.

- `loadbalancer.openstack.org/network-id`

  The network ID which will allocate virtual IP for loadbalancer. By default, the network-id of the network configured for your OVHcloud Managed Kubernetes Cluster will be used.

- `loadbalancer.openstack.org/port-id`

  The VIP port ID for load balancer created.

- `loadbalancer.openstack.org/connection-limit`

  The maximum number of connections per second allowed for the listener. Positive integer or -1 for unlimited (default). This annotation supports update operation.

- `loadbalancer.openstack.org/keep-floatingip`

  If 'true', the floating IP will **NOT** be deleted. Default is 'false'.

- `loadbalancer.openstack.org/proxy-protocol`

  If 'true', the loadbalancer pool protocol will be set as `PROXY`. Default is 'false'.

- `loadbalancer.openstack.org/x-forwarded-for`

  **Not supported**. If you want perform Layer 7 load balancing we do recommend to use the official Octavia Ingress-controller: https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md  

- `loadbalancer.openstack.org/timeout-client-data` //SUPPORTED

  Frontend client inactivity timeout in milliseconds for the load balancer.

- `loadbalancer.openstack.org/timeout-member-connect` //SUPPORTED

  Backend member connection timeout in milliseconds for the load balancer.

- `loadbalancer.openstack.org/timeout-member-data` //SUPPORTED

  Backend member inactivity timeout in milliseconds for the load balancer.

- `loadbalancer.openstack.org/timeout-tcp-inspect` //SUPPORTED

  Time to wait for additional TCP packets for content inspection in milliseconds for the load balancer.

- `service.beta.kubernetes.io/openstack-internal-load-balancer` //SUPPORTED

  If 'true', the loadbalancer VIP won't be associated with a floating IP. Default is 'false'. This annotation is ignored if only internal Service is allowed to create in the cluster.

- `loadbalancer.openstack.org/enable-health-monitor` //TO BE CHECKED, WE WILL PROBABLY CHANGE DEFAULT VALUE TO TRUE

  Defines whether to create health monitor for the load balancer pool, if not specified, default value is True. The health monitor can be created or deleted dynamically. A health monitor is required for services with `externalTrafficPolicy: Local`.

- `loadbalancer.openstack.org/health-monitor-delay`

  Defines the health monitor delay in seconds for the loadbalancer pools. Default value (ms) = 5000

- `loadbalancer.openstack.org/health-monitor-timeout`

  Defines the health monitor timeout in seconds for the loadbalancer pools. This value should be less than delay. Default value (ms) = 3000

- `loadbalancer.openstack.org/health-monitor-max-retries`

  Defines the health monitor retry count for the loadbalancer pool members. Default value = 1

- `loadbalancer.openstack.org/health-monitor-max-retries-down` //NOT SUPPORTED YET

  Defines the health monitor retry count for the loadbalancer pool members to be marked down.

- `loadbalancer.openstack.org/flavor-id`

  The id of the flavor that is used for creating the loadbalancer.

- `loadbalancer.openstack.org/availability-zone` //NOT SUPPORTED

  The name of the loadbalancer availability zone to use. It is ignored if the Octavia version doesn't support availability zones yet.

- `loadbalancer.openstack.org/default-tls-container-ref` // NOT SUPPORTED

  Reference to a tls container. This option works with Octavia, when this option is set then the cloud provider will create an Octavia Listener of type `TERMINATED_HTTPS` for a TLS Terminated loadbalancer.
  Format for tls container ref: `https://{keymanager_host}/v1/containers/{uuid}`

  When `container-store` parameter is set to `external` format for `default-tls-container-ref` could be any string.


- `loadbalancer.openstack.org/load-balancer-id`

  This annotation is automatically added to the Service if it's not specified when creating. After the Service is created successfully it shouldn't be changed, otherwise the Service won't behave as expected.

  If this annotation is specified with a valid cloud load balancer ID when creating Service, the Service is reusing this load balancer rather than creating another one. Again, it shouldn't be changed after the Service is created.

  If this annotation is specified, the other annotations which define the load balancer features will be ignored.

- `loadbalancer.openstack.org/hostname` //nipio

  This annotations explicitly sets a hostname in the status of the load balancer service. Used beside proxy protocol.

- `loadbalancer.openstack.org/load-balancer-address`

  This annotation is automatically added and it contains the floating ip address of the load balancer service.
  When using `loadbalancer.openstack.org/hostname` annotation it is the only place to see the real address of the load balancer.


## Migrate from LoadBalancer for Managed Kubenertes to Public Load Balancer //TODO
- Migration from IOLB to Octavia : Warning, it is not possible to keep existing public IP //TODO
- modop (annotation Octavia) -> replacer 'iolb' par 'Octavia'

## Ressources Naming //TODO
Explication sur le nomage des ressources créés par Octavia / LB name

## Others resources

- [Exposing applications using services of LoadBalancer type](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md)
- [Sharing load balancer with multiple Services](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md#sharing-load-balancer-with-multiple-services)
- [Use PROXY protocol to preserve client IP](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md#use-proxy-protocol-to-preserve-client-ip)
- [Using Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- [OVHcloud Load Balancer concept](https://help.ovhcloud.com/csm/en-gb-public-cloud-network-load-balancer-concepts?id=kb_article_view&sysparm_article=KB0059283)


## Go further

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/cassandra) to find how to connect to your database with several languages. //NOT EXISTING FOR MKS, TO BE CREATED

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
