---
title: CCM Octavia
excerpt: ""
updated: 2023-12-08
---

## Objective

Although the openstack-cloud-controller-manager was initially implemented with Neutron-LBaaS support, Octavia is mandatory now because Neutron-LBaaS has been deprecated since Queens OpenStack release cycle and no longer accepted new feature enhancements. As a result, since v1.26.0 the Neutron-LBaaS is not supported in openstack-cloud-controller-manager and removed from code repo.

## Cloud Controller Manager Octavia

To be able to deploy Octavia load balancers, your Managed Kubernetes Service must have been upgraded to the latest available patch version. This feature is also available to customers using the services of our US subsidiary.

## Billing

- One OpenStack gateway is billed for all Octavia LoadBalancers spawned in the subnet <https://www.ovhcloud.com/en-gb/public-cloud/prices/#10394>.

    > [!primay]
    >
    > Note: Each Octavia has his own bandwidth. Outgoing traffic doesn't consume OpenStack gateway bandwidth.
    >

- Each Octavia is billed regarding his flavor: <https://www.ovhcloud.com/en-gb/public-cloud/prices/#10420>
- If the Octavia is a public one, an OpenStack Floating IP will be used: https://www.ovhcloud.com/en-gb/public-cloud/prices/#10346

## Process

During the beta phase, if you want a load balancer service to be deployed on Octavia rather than the current load balancing solution, you'll need to add an annotation: loadbalancer.ovhcloud.com/class: "octavia".  

Here's a simple example of how to use a LB Octavia

1. Creation of a functional cluster via the OVHcloud manager, Terraform or API.
2. Retrieve the kubeconfig needed to use kubectl tool (via OVHcloud manager, Terraform or API).
3. Create a "deployment" using the following command: kubectl create deploy test-octavia --image=nginx 
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

### Pub to pub (there is no private subnet associated to cluster)

- From service annotations or spec

**annotations:**

- `loadbalancer.openstack.org/flavor` //not openstack annotation values => small,medium,large
- `loadbalancer.openstack.org/flavor-id`
- `loadbalancer.openstack.org/keep-floatingip` //for deletion
- `loadbalancer.openstack.org/class`
- `service.beta.kubernetes.io/openstack-internal-load-balancer` // for priv to priv

**spec:**
- `spec.loadbalancerIP`

**PCI call**

Input
```
{
"flavor":"small"//by default/not present, otherwise the annotation from service flavor-id resolved by its name
"floatingip":true//by default except if spec.loadbalancerip specified
"creategateway":true//by default for priv to priv
"name":cellid+clusterid+service namespace+ service name
"subnet_id"://nothing here this is pub to pub
}
```

Output
```
{
"flavor"://computed or the same as input
"flavor_id"://computed or the same as input
"floatingips"://its an array but it will be one ip
"id"://openstack octavia id
"name"://same as input
"project_id"://same as input
"status"://error/provisionning/active
"status_info"://additionnal info
"vip_network_id"://network id
"vip_port_id"://additionnal info
"vip_subnet_id"://subnet id
}
```

**Annotate service**

- `loadbalancer.openstack.org/network-id`
- `loadbalancer.openstack.org/subnet-id`
- `loadbalancer.openstack.org/load-balancer-id`

Call upstream

### Pub to priv (this is a private subnet associated to cluster)

- From service annotations or spec

**annotations:**

- `loadbalancer.openstack.org/flavor` //not openstack annotation values => small,medium,large
- `loadbalancer.openstack.org/flavor-id`
- `loadbalancer.openstack.org/keep-floatingip` // for deletion
- `loadbalancer.openstack.org/class`
- `service.beta.kubernetes.io/openstack-internal-load-balancer //` for priv to priv

**spec:**

- `spec.loadbalancerIP`

**PCI call**

Input
```
{
"flavor":"small"//by default/not present, otherwise the annotation from service flavor-id resolved by its name
"floatingip":true//by default except if spec.loadbalancerip specified
"creategateway":true//by default for priv to priv
"name":cellid+clusterid+service namespace+ service name
"subnet_id"://the openstack private subnet id
}
```

Output
```
{
"flavor"://computed or the same as input
"flavor_id"://computed or the same as input
"floatingips"://its an array but it will be one ip
"id"://openstack octavia id
"name"://same as input
"project_id"://same as input
"status"://error/provisionning/active
"status_info"://additionnal info
"vip_network_id"://network id
"vip_port_id"://additionnal info
"vip_subnet_id"://subnet id
}
```

**Annotate service**

- `loadbalancer.openstack.org/network-id`
- `loadbalancer.openstack.org/subnet-id`
- `loadbalancer.openstack.org/load-balancer-id`

Call upstream

### Priv to priv (annotation is present service.beta.kubernetes.io/openstack-internal-load-balancer)

- From service annotations or spec

**annotations:**

- `loadbalancer.openstack.org/flavor` //not openstack annotation values => small,medium,large
- `loadbalancer.openstack.org/flavor-id`
- `loadbalancer.openstack.org/keep-floatingip` //for deletion
- `loadbalancer.openstack.org/class`
- `service.beta.kubernetes.io/openstack-internal-load-balancer` //priv to priv

**spec:**

- `spec.loadbalancerIP`

**PCI call**

Input
```
{
"flavor":"small"//by default/not present, otherwise the annotation from service flavor-id resolved by its name
"floatingip":false// do not create priv to priv mode
"creategateway":false// do not create priv to priv
"name":cellid+clusterid+service namespace+ service name
"subnet_id"://nothing here this is pub to pub
}
```

Output
```
{
"flavor"://computed or the same as input
"flavor_id"://computed or the same as input
"floatingips"://its an array but it will be one ip
"id"://openstack octavia id
"name"://same as input
"project_id"://same as input
"status"://error/provisionning/active
"status_info"://additionnal info
"vip_network_id"://network id
"vip_port_id"://additionnal info
"vip_subnet_id"://subnet id
}
```

**Annotate service**

- `loadbalancer.openstack.org/network-id`
- `loadbalancer.openstack.org/subnet-id`
- `loadbalancer.openstack.org/load-balancer-id`


Call upstream


## Supported Features

### Service annotations

- `loadbalancer.openstack.org/floating-network-id`

  The public network id which will allocate public IP for loadbalancer. This annotation works when the value of `service.beta.kubernetes.io/openstack-internal-load-balancer` is false.

- `loadbalancer.openstack.org/floating-subnet`

  A public network can have several subnets. This annotation is the name of subnet belonging to the floating network. This annotation is optional.

- `loadbalancer.openstack.org/floating-subnet-id`

  This annotation is the ID of a subnet belonging to the floating network, if specified, it takes precedence over `loadbalancer.openstack.org/floating-subnet` or `loadbalancer.openstack.org/floating-tag`.

- `loadbalancer.openstack.org/floating-subnet-tags`

  This annotation is the tag of a subnet belonging to the floating network.

- `loadbalancer.openstack.org/class`

  The name of a preconfigured class in the config file. If provided, this config options included in the class section take precedence over the annotations of floating-subnet-id, floating-network-id, network-id, subnet-id and member-subnet-id . See the section below for how it works.

- `loadbalancer.openstack.org/subnet-id`

  VIP subnet ID of load balancer created.

- `loadbalancer.openstack.org/member-subnet-id`

  Member subnet ID of the load balancer created.

- `loadbalancer.openstack.org/network-id`

  The network ID which will allocate virtual IP for loadbalancer.

- `loadbalancer.openstack.org/port-id`

  The VIP port ID for load balancer created.

- `loadbalancer.openstack.org/connection-limit`

  The maximum number of connections per second allowed for the listener. Positive integer or -1 for unlimited (default). This annotation supports update operation.

- `loadbalancer.openstack.org/keep-floatingip`

  If 'true', the floating IP will **NOT** be deleted. Default is 'false'.

- `loadbalancer.openstack.org/proxy-protocol`

  If 'true', the loadbalancer pool protocol will be set as `PROXY`. Default is 'false'.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/x-forwarded-for`

  If 'true', `X-Forwarded-For` is inserted into the HTTP headers which contains the original client IP address so that the backend HTTP service is able to get the real source IP of the request. Please note that the cloud provider will force the creation of an Octavia listener of type `HTTP` if this option is set. Only applies when using Octavia.

  This annotation also works in conjunction with the `loadbalancer.openstack.org/default-tls-container-ref` annotation. In this case the cloud provider will create an Octavia listener of type `TERMINATED_HTTPS` instead of an `HTTP` listener.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/timeout-client-data`

  Frontend client inactivity timeout in milliseconds for the load balancer.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/timeout-member-connect`

  Backend member connection timeout in milliseconds for the load balancer.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/timeout-member-data`

  Backend member inactivity timeout in milliseconds for the load balancer.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/timeout-tcp-inspect`

  Time to wait for additional TCP packets for content inspection in milliseconds for the load balancer.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `service.beta.kubernetes.io/openstack-internal-load-balancer`

  If 'true', the loadbalancer VIP won't be associated with a floating IP. Default is 'false'. This annotation is ignored if only internal Service is allowed to create in the cluster.

- `loadbalancer.openstack.org/enable-health-monitor`

  Defines whether to create health monitor for the load balancer pool, if not specified, use `create-monitor` config. The health monitor can be created or deleted dynamically. A health monitor is required for services with `externalTrafficPolicy: Local`.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/health-monitor-delay`

  Defines the health monitor delay in seconds for the loadbalancer pools.

- `loadbalancer.openstack.org/health-monitor-timeout`

  Defines the health monitor timeout in seconds for the loadbalancer pools. This value should be less than delay

- `loadbalancer.openstack.org/health-monitor-max-retries`

  Defines the health monitor retry count for the loadbalancer pool members.

- `loadbalancer.openstack.org/health-monitor-max-retries-down`

  Defines the health monitor retry count for the loadbalancer pool members to be marked down.

- `loadbalancer.openstack.org/flavor-id`

  The id of the flavor that is used for creating the loadbalancer.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/availability-zone`

  The name of the loadbalancer availability zone to use. It is ignored if the Octavia version doesn't support availability zones yet.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/default-tls-container-ref`

  Reference to a tls container. This option works with Octavia, when this option is set then the cloud provider will create an Octavia Listener of type `TERMINATED_HTTPS` for a TLS Terminated loadbalancer.
  Format for tls container ref: `https://{keymanager_host}/v1/containers/{uuid}`

  When `container-store` parameter is set to `external` format for `default-tls-container-ref` could be any string.

  Not supported when `lb-provider=ovn` is configured in openstack-cloud-controller-manager.

- `loadbalancer.openstack.org/load-balancer-id`

  This annotation is automatically added to the Service if it's not specified when creating. After the Service is created successfully it shouldn't be changed, otherwise the Service won't behave as expected.

  If this annotation is specified with a valid cloud load balancer ID when creating Service, the Service is reusing this load balancer rather than creating another one. Again, it shouldn't be changed after the Service is created.

  If this annotation is specified, the other annotations which define the load balancer features will be ignored.

- `loadbalancer.openstack.org/hostname`

  This annotations explicitly sets a hostname in the status of the load balancer service.

- `loadbalancer.openstack.org/load-balancer-address`
  
  This annotation is automatically added and it contains the floating ip address of the load balancer service.
  When using `loadbalancer.openstack.org/hostname` annotation it is the only place to see the real address of the load balancer.


## Limitations

- L7 and TLS Termination are not available yet.
- You have to set a GatewayIP for your Subnet (we plan to perform it automatically in the future).

> [!primary]
>
> If you need help to set this up, you can request help from an Administrator on Discord.
>

In case the GatewayIP is already assigned to a non-Openstack Gateway router

In order to use a FloatingIP, we need to setup an Openstack Router.

- In case the Subnet's GatewayIP is already an Openstack Router, nothing needs to be done. The current Openstack Router will be used.
- In case the Subnet's GatewayIP is not an Openstack Router, you need to provide a technical Subnet where we are going to spawn all OpenStack needs. Ping an administrator on Discord if it is your case.

## Others resources

- [Exposing applications using services of LoadBalancer type](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md)

## Go further

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/cassandra) to find how to connect to your database with several languages.

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.