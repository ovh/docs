---
title: Expose your services using OVHcloud Public Cloud Load Balancer
excerpt: ""
updated: 2024-01-09
---

> [!warning]
>
> Usage of the [Public Load Balancer](https://www.ovhcloud.com/en-ie/public-cloud/load-balancer/) with Managed Kubernetes Service (MKS) is currently in Beta phase. This feature is also available to customers using the services of our US subsidiary.
>

## Objective

This guide aim to explain how to use our Public Cloud Load Balancer to expose your app hosted on our [Managed Kubernetes Service (MKS)](https://www.ovhcloud.com/en/public-cloud/kubernetes/).
If you're not comfortable with the different ways of exposing your applications in Kubernetes, or if you're not familiar with the notion of Service's type 'LoadBalancer', we recommend you to start by reading [this guide](https://help.ovhcloud.com/csm/en-ie-public-cloud-kubernetes-using-lb?id=kb_article_view&sysparm_article=KB0050008) detailing the different methods for exposing your containerized applications hosted in Kubernetes.

Our Public Cloud Load Balancer is relying on Openstack Octavia project, this project provides a Cloud Controller Manager (CCM) allowing Kubernetes clusters to interact with Load Balancers. For Managed Kubernetes Service (MKS), this Cloud Controller is installed and configured by our team allowing you to easily create, use and configure our Public Cloud Load Balancers. You can find the [CCM open source project documentation](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md).

This guide uses some concepts that are specific to our Public Cloud Load Balancer (listener, pool, health monitor, member, ...) and to the Public Cloud Network (Gateway, Floating IP). You can find [concepts description for the Load Balancer](../../../public_cloud_network_services/concepts-03-loadbalancer/guide.en-gb.md) and [concepts description for the Public Cloud Network products](../../../public_cloud_network_services/concepts-01-public-cloud-networking-concepts/guide.en-gb.md).


## Prerequisites

#### Kubernetes version
- To be able to deploy Public Cloud Load Balancers, your Managed Kubernetes Service must run or have been upgraded to the following patch versions:

| Kubernetes versions |
|-------------|
| 1.24.13-3>= |   
| 1.25.9-3>=  |   
| 1.26.4-3>=  |   
| 1.27>=      |  

#### Network topologie to expose your Load Balancers publicly   //à reformuler
If you plan to expose your Load Balancer publicly, in order to attach a FloatingIP to your Load Balancer, an OVHcloud Gateway (an OpenStack router) is mandatory on the subnet hosting your Load Balancer.
For such use case we do recommend to create your MKS clusters on a network and subnet using our OVHcloud Gateway.
For existing clusters, if:
- **The Subnet's GatewayIP is already an OVHcloud Gateway**, nothing needs to be done. The current OpenStack Router will be used.
- **The subnet doest not have an IP reserved for a Gateway** --> You will have to provide/create a compatible subnet. You can edit the existing subnet (modop CLI Openstack/Horizon) or use another dedicated subnet (doc LoadBalancerSubnetID)//TODO
- **The GatewayIP is already assigned to a non-OVHcloud Gateway (Openstack Router)** --> You will have to provide/create a compatible subnet. To do so you select another dedicated subnet (doc LoadBalancerSubnetID)//TODO



## Limitations

- Layer 7 Policy & Rules and TLS Termination (`TERMINATED_HTTPS` listener) are not available yet. For such use cases you can rely on [Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- UDP proxy protocol is not supported


## Billing

- When exposing your load balancer publicly (pub-to-pub or pub-to-private):
  - if it does not already exist, an OVHcloud Gateway is automatically created and charged for all Load Balancers spawned in the subnet <https://www.ovhcloud.com/en-gb/public-cloud/prices/#10394>.
  - a Public Floating IP will be used: https://www.ovhcloud.com/en-gb/public-cloud/prices/#10346
- Each Public CLoud Load Balancer is billed according to his flavor: <https://www.ovhcloud.com/en-gb/public-cloud/prices/#10420>

    > [!primary]
    >
    > Note: Each publicly exposed Load Balancer has his own Public Floating IP. Outgoing traffic doesn't consume OVHcloud Gateway bandwidth.
    >

    > [!warning]
    >
    > During the CCM Beta, since the Public Cloud Load Balancer is GA, the Public Cloud Load Balancer usage as well as the other network components (Gateway & Floating IPs) will be billed
    >

## Process

During the beta phase, if you want a Kubernetes load balancer service to be deployed using [Public Cloud Load Balancer](https://www.ovhcloud.com/en-ie/public-cloud/load-balancer/) rather than the current [Loadbalancer for Kubernetes](https://www.ovhcloud.com/en-ie/public-cloud/load-balancer-kubernetes/) solution, you'll need to add an annotation: loadbalancer.ovhcloud.com/class: "octavia" on your Kubernetes Service manifest.

Here's a simple example of how to use the Public Cloud Load Balancer

1. Creation of a functional Managed Kubernetes (MKS) cluster using the OVHcloud manager, Terraform or APIs.
2. Retrieve the kubeconfig needed to use kubectl tool (via OVHcloud manager, Terraform or API). You can use [this guide](https://help.ovhcloud.com/csm/en-ie-public-cloud-kubernetes-configure-kubectl?id=kb_article_view&sysparm_article=KB0049658)
3. Create a 'deployment' using the following command:
```shell
kubectl create deployment test-octavia --image=nginx
```
4. Copy/Paste the following code on a file named `test-lb-todel.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: test-octavia
  name: test-lb-todel
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
6. Create a 'service' using the following command:
```shell
kubectl create service test-lb-todel -f test-lb-todel.yaml
```
7. Retrieve service IP address using the following command line:
```shell
$ kubectl get service test-lb-todel
NAME                 TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
test-lb-todel   LoadBalancer   10.3.107.18   141.94.215.240   80:30172/TCP   12m
```
8. Open a web browser and access: http://IP-retrieved-in-prevous-step



## Use cases

You can find a set a examples on how to use our Public Cloud Load Balancer with Managed Kubernetes Service (MKS) on our dedicated Github repository https://github.com/ovh/public-cloud-examples

#### Public-to-Public (you are using a public Managed Kubernetes Cluster)
//TODO


#### Public to Private (your cluster is attached to a private network/subnet)
In a public-to-private scenario you will use your Load Balancer to publicly expose app that are hosted on your Managed Kubernetes Cluster. Main benefit is that your Kubernetes nodes are not exposed on internet with that scenario.

Service example:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-lb-service
  annotations:
    loadbalancer.ovhcloud.com/class: "octavia"
    loadbalancer.ovhcloud.com/flavor: "medium"
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


#### Private to Private
In a private-to-private scenario your Load Balancer is not exposed publicly, it might be useful if you want to expose your containerized service inside you OVHcloud private network.

Service example:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-lb-service
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


## Supported Annotations & Features

### Service annotations

- `loadbalancer.ovhcloud.com/class`

  During the Beta phase it is mandatory to specify the class of the load balancer you want to create.
  Authorized values: 'octavia' = Public Cloud Load Balancer, 'iolb' = Loadbalancer for Managed Kubernetes Service (will be deprecated in futur versions). Default value is 'iolb'.

- `loadbalancer.ovhcloud.com/flavor:`

  Not a standard Openstack Octavia annotations (specific to OVHcloud). The size used for creating the loadbalancer, specifications can be found [here](https://www.ovhcloud.com/en/public-cloud/load-balancer/). Authorized values => `small`,`medium`,`large`. Default is 'small'.

- `service.beta.kubernetes.io/openstack-internal-load-balancer`

  If 'true', the loadbalancer will only have an IP on the private network (no Floating IP is associated with the Load Balancer). Default is 'false'.


- `loadbalancer.openstack.org/subnet-id`

  The subnet ID where the private IP of the load balancer will be retrieved. By default, the subnet-id of the subnet configured for your OVHcloud Managed Kubernetes Service cluster will be used.

- `loadbalancer.openstack.org/member-subnet-id`

  Member subnet ID of the load balancer created. By default, the subnet-id of the subnet configured for your OVHcloud Managed Kubernetes Service cluster will be used.

- `loadbalancer.openstack.org/network-id`

  The network ID which will allocate virtual IP for loadbalancer. By default, the network-id of the network configured for your OVHcloud Managed Kubernetes Service cluster will be used.

- `loadbalancer.openstack.org/port-id`

  The port ID for load balancer private IP. Can be used if you want to use a specific private IP.

- `loadbalancer.openstack.org/connection-limit`

  The maximum number of connections per second allowed for the listener. Positive integer or -1 for unlimited (default). This annotation supports update operation.

- `loadbalancer.openstack.org/keep-floatingip`

  If 'true', the floating IP will **NOT** be deleted upon load balancer deletion. Default is 'false'. Useful if you want to keep your floating API after Load Balancer deletion.

- `loadbalancer.openstack.org/proxy-protocol`

  If 'true', the loadbalancer pool protocol will be set as `PROXY`. Default is 'false'.

- `loadbalancer.openstack.org/x-forwarded-for`

  **Not supported**. If you want perform Layer 7 load balancing we do recommend to use the official Octavia Ingress-controller: https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md  

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

  The id of the flavor that is used for creating the loadbalancer. Not useful as we provide `loadbalancer.ovhcloud.com/flavor`

- `loadbalancer.openstack.org/load-balancer-id`

  This annotation is automatically added to the Service if it's not specified when creating. After the Service is created successfully it shouldn't be changed, otherwise the Service won't behave as expected.

  If this annotation is specified with a valid cloud load balancer ID when creating Service, the Service is reusing this load balancer rather than creating another one. Again, it shouldn't be changed after the Service is created.

  If this annotation is specified, the other annotations which define the load balancer features will be ignored.

- `loadbalancer.openstack.org/hostname`

  This annotations explicitly sets a hostname in the status of the load balancer service.

- `loadbalancer.openstack.org/load-balancer-address`

  This annotation is automatically added and it contains the floating ip address of the load balancer service.
  When using `loadbalancer.openstack.org/hostname` annotation it is the only place to see the real address of the load balancer.

//
// NOT SUPPORTED YET
//

- `loadbalancer.openstack.org/health-monitor-max-retries-down` //NOT SUPPORTED YET

  Defines the health monitor retry count for the loadbalancer pool members to be marked down.

- `loadbalancer.openstack.org/availability-zone` //NOT SUPPORTED

  The name of the loadbalancer availability zone to use. It is ignored if the Octavia version doesn't support availability zones yet.



//
// NOT REVELANT or NOT SUPPORTED, TO BE REMOVED FROM THE DOC
//
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


- `loadbalancer.openstack.org/default-tls-container-ref` // NOT SUPPORTED

  Reference to a tls container. This option works with Octavia, when this option is set then the cloud provider will create an Octavia Listener of type `TERMINATED_HTTPS` for a TLS Terminated loadbalancer.
  Format for tls container ref: `https://{keymanager_host}/v1/containers/{uuid}`

  When `container-store` parameter is set to `external` format for `default-tls-container-ref` could be any string.

### Features
#### Resize your LoadBalancer //TODO (sample on github)
There is no proper way to 'resize' your loadbalancer yet (work in progress). The best alternative to change the flavor, is to recreate a new Kubernetes Service that will use the same public IP than the previous one.
You can find the HowTo and example on our public Github: https://github.com/ovh/public-cloud-examples


- First, make sure that the existing service is using the `loadbalancer.openstack.org/keep-floatingip` annotation, if not the public floating IP will be released. (It can be added after the service creation).
- Get the public IP of your existing service
```shell
$ kubectl get service my-small-lb
NAME                 TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
test-lb-todel        LoadBalancer   10.3.107.18   141.94.215.240   80:30172/TCP   12m
```
- Create a new service  with the new expected flavor:
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
- Until the deletion of the previous service, this Service will only deploy the LoadBalancer without a floating IP.
- When the Floating IP is available (the deletion of the initial LB service will unbound the IP), the floating IP will be attach to this new LB.

> [!warning]
>
> Changing the flavor will create some outage.
>


#### [Sharing load balancer with multiple Services](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md#sharing-load-balancer-with-multiple-services)
####  [Use PROXY protocol to preserve client IP](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md#use-proxy-protocol-to-preserve-client-ip)


#### Migrate from LoadBalancer for Managed Kubernetes to Public Load Balancer //TODO
(Migration from IOLB to Octavia)
> [!warning]
>
> It is not possible to keep the existing public IP
>

- How to: change annotation lb/class from 'iolb' par 'Octavia'

## Ressources Naming //TODO , WIP
Explain how ressource created by LB are named.


## Others resources
- [Exposing applications using services of LoadBalancer type](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md)
- [Using Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- [OVHcloud Load Balancer concept](https://help.ovhcloud.com/csm/en-gb-public-cloud-network-load-balancer-concepts?id=kb_article_view&sysparm_article=KB0059283)


## Go further

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/cassandra) . //NOT EXISTING FOR MKS, TO BE CREATED

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
