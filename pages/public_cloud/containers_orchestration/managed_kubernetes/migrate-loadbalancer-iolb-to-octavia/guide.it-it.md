---
title: How to migrate from Load Balancer for MKS (IOLB) to Public Cloud Load Balancer (Octavia)
excerpt: "The purpose of this guide is to help OVHcloud Managed Kubernetes Service (MKS) users to migrate from an existing Load Balancer for Managed Kubernetes to a Public Cloud Load Balancer"
updated: 2025-05-14
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

The purpose of this guide is to help OVHcloud Managed Kubernetes Service (MKS) users to migrate from an existing [Load Balancer for Managed Kubernetes](/links/public-cloud/load-balancer-kubernetes) to a [Public Cloud Load Balancer](/links/public-cloud/load-balancer).

[Public Cloud Load Balancer](/links/public-cloud/load-balancer) is the default Load Balancer for MKS clusters using Kubernetes versions >1.30.

[Load Balancer for Managed Kubernetes](/links/public-cloud/load-balancer-kubernetes) is deprecated for MKS clusters using Kubernetes versions >1.31.

It explains the steps required to make this transition safely, minimizing service interruptions. Finally, it provides recommendations on DNS management, in particular reducing the TTL, to optimize the propagation of changes and ensure a smooth migration.

> [!warning]
>
> As Load Balancer for Kubernetes and Public Cloud Load Balancer do not use the same solution for Public IP allocation, it is not possible to keep the existing public IP of your Load Balancer for Kubernetes. Changing the Load Balancer class of your Service will lead to the creation of a new Load Balancer and the allocation of a new Public IP (Floating IP).

## Comparison

Below is a comparison between Load Balancer for Kubernetes and Public Cloud Load Balancer, highlighting their key differences and capabilities. Public Cloud Load Balancer introduces several sizes/flavors, you can find the detailed specifications on the [Public Cloud Load Balancer page](/links/public-cloud/load-balancer).

|                                     | Load Balancer for Managed Kubernetes | Public Cloud Load Balancer |
| ----------------------------------- | ------------------------------------ | -------------------------- |
| Maximum number of connections       | 10 000                               | up to 20 000               |
| Maximum number of HTTP requests     | 2000                                 | Up to 80 000               |
| Bandwidth                           | 200 Mbit/s                           | up to 4 Gbit/s (up/down)   |
| Supported protocol                  | TCP                                  | TCP/UDP/SCTP               |
| Supported load balancing layers     | L4                                   | L4/L7                      |
| Capacity to export metrics and logs | No                                   | Yes                        |
| Private to private scenario         | No                                   | Yes                        |
| Floating IP                         | No                                   | Yes                        |

## Annotations

Below is a matching of existing annotations supported on [Load Balancer for Managed Kubernetes](/links/public-cloud/load-balancer-kubernetes) and their equivalent on [Public Cloud Load Balancer](/links/public-cloud/load-balancer).

> [!warning]
>
> If you are using legacy annotations from [Load Balancer for Managed Kubernetes](/links/public-cloud/load-balancer-kubernetes), you must update them to the new format supported by [Public Cloud Load Balancer](/links/public-cloud/load-balancer) during migration.
>
> Some annotations have been **deprecated** and need to be replaced to ensure full compatibility.

You can find full details on the official documentation pages:

- [Load Balancer for Managed Kubernetes annotations](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-lb#supported-annotations)
- [Public Cloud Load Balancer annotations](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer#supported-annotations-features)

| Load Balancer for Managed Kubernetes                                          | Public Cloud Load Balancer |
| ----------------------------------------------------------------------------- | -------------------------- |
| `service.beta.kubernetes.io/ovh-loadbalancer-proxy-protocol` <br> Supported values: <br>- v1 <br>- v2 <br>- v2-ssl <br>- v2-ssl-cn   | `loadbalancer.openstack.org/proxy-protocol` <br>Supported values: <br>- v1, true: enable the ProxyProtocol version 1 <br>- v2: enable the ProxyProtocol version 2  <br><br><br>       |
| `service.beta.kubernetes.io/ovh-loadbalancer-allowed-sources` <br> --> DEPRECATED**                                      | No annotation.  <br>IP restriction is defined using `.spec.loadBalancerSourceRanges`  |
| `service.beta.kubernetes.io/ovh-loadbalancer-balance` <br> Supported values: <br>- first <br>- leastconn <br>- roundrobin <br>- source | `loadbalancer.openstack.org/lb-method` <br> Supported values: <br>- ROUND_ROBIN <br>- LEAST_CONNECTIONS <br>- SOURCE_IP    <br>                                                |

## Migration of your Load Balancer

> [!warning]
>  
> Starting from MKS cluster using Kubernetes version **1.31**, any cluster upgrade attempt will be blocked if a service of type Load Balancer relying on [Load Balancer for Managed Kubernetes](/links/public-cloud/load-balancer-kubernetes) (IOLB) is still present in the cluster.
>
> **Action required**: Before upgrading, you must **change your services into a Public Cloud Load Balancer (Octavia)** by following the steps described in this guide.
>
> If you attempt to upgrade without first migrating, an error will be returned, preventing the upgrade.
>

There are two methods to move from a [Load Balancer for Managed Kubernetes](/links/public-cloud/load-balancer-kubernetes) to a [Public Cloud Load Balancer](/links/public-cloud/load-balancer), you can either **[Migrate](#migration)** or **[Replace](#replacement)** your Load Balancer.

Your existing Load Balancer Service using [Load Balancer for Kubernetes](/links/public-cloud/load-balancer-kubernetes) should have the following annotation:

```yaml
annotations:
  loadbalancer.ovhcloud.com/class: "iolb"
```

> [!alert]
> Each of the two methods described below ([migration](#migration) or [replacement](#replacement)) requires a DNS switch for which a DNS propagation of 24 to 48 hours is required **before** performing the migration.
>
> Therefore, please **read the entire guide** (and especially the "How to perform a DNS switch" section) before you proceed with the steps below.
>

### Migration

Migrating from an existing [Load Balancer for Kubernetes](/links/public-cloud/load-balancer-kubernetes) to a [Public Cloud Load Balancer](/links/public-cloud/load-balancer) involves creating a new Load Balancer service using Public Cloud Load Balancer with the same label selector to expose your application. For a short period of time, your application will be accessible using both Load Balancers.

At this time you can perform a DNS switch and then delete the old Load Balancer.

To migrate from an existing [Load Balancer for Kubernetes](/links/public-cloud/load-balancer-kubernetes) to a [Public Cloud Load Balancer](/links/public-cloud/load-balancer), follow these steps:

#### Step 1 - Create a new Load Balancer service

You need to create a new Load Balancer service using the Public Cloud Load Balancer while keeping the existing one active:

- Ensure that the new service has the same labelSelector as the old one so that it exposes the same application.
- You can set the annotation `loadbalancer.ovhcloud.com/class: "octavia"` for cluster <1.31 or remove it completely for cluster >= 1.31 as Octavia will be the one used by default.

**labelSelector**:

```yaml
spec:
  selector:
    app: my-app
```

**annotations**:

```yaml
annotations:
  loadbalancer.ovhcloud.com/class: "octavia" # if your cluster <1.31
  loadbalancer.ovhcloud.com/flavor: "small" # Available values: small (default) | medium | large | xl
  loadbalancer.openstack.org/timeout-client-data: 180000 # The default value (in milliseconds) on the iolb solution, can be customized
  loadbalancer.openstack.org/timeout-member-connect: 20000 # The default value (in milliseconds) on the iolb solution, can be customized
  loadbalancer.openstack.org/timeout-member-data: 180000 # The default value (in milliseconds) on the iolb solution, can be customized
```

Apply the new service with:

```yaml
kubectl apply -f your-service-manifest.yaml
```

This will create a new Public Cloud Load Balancer with a new public IP.

#### Step 2 - Test Application access

Once the new Load Balancer is created, get the public IPs of both services:

```yaml
kubectl get svc -o wide
```

You should see two Load Balancer services pointing to the same application with different public IPs.

Test accessibility via both IPs:

```yaml
curl http://<OLD_LOADBALANCER_IP>
curl http://<NEW_LOADBALANCER_IP>
```

Both should return a successful response from your application.

#### Step 3 - Perform a DNS switch

To perform a DNS switch, refer to the [How to perform a DNS switch?](#dns-switch) part of this guide.

#### Step 4 - Remove the Load Balancer service for Kubernetes (a.k.a. IOLB)

Once you confirm that traffic is flowing through the new Load Balancer and the old one is no longer needed, remove the old Load Balancer service by deleting it:

```yaml
kubectl delete svc old-loadbalancer-service
```

### Replacement

Replacing an existing [Load Balancer for Kubernetes](/links/public-cloud/load-balancer-kubernetes) with a [Public Cloud Load Balancer](/links/public-cloud/load-balancer) involves modifying the existing service and changing the loadbalancer class from `iolb` to `octavia`. This will lead to Kubernetes reconciling the loadbalancer class by deleting the old one and creating a new loadbalancer.

Once the new Load Balancer delivered, you can perform a DNS switch using the new public IP.

> [!warning]
>
> Please note that during the deletion and creation process, your service will not be accessible.
>
> You can reduce this impact by lowering your DNS TTL duration, please refer to the [How to perform a DNS switch?](#dns-switch) part of this guide.
>

#### Step 1 - Edit your Service to change the Load Balancer class to 'octavia'

> [!warning]
>
> The old Load Balancer and its IP address will be deleted **permanently**, making services unreachable. Perform the DNS switch immediately with the new provided IP.
>

```yaml
annotations:
  loadbalancer.ovhcloud.com/class: "octavia" // not required for clusters running kubernetes versions >= 1.31, you can just remove the annotation.
```

Apply the service update using:

```yaml
kubectl apply -f your-service-manifest.yaml
```

#### Step 2 - Perform a DNS switch

To perform a DNS switch, follow the steps right below.

<a name="dns-switch"></a>

## How to perform a DNS switch?

### Check the current TTL

By default, DNS servers cache the IP address of a domain for a period defined by the TTL (Time-To-Live).

A TTL that is too long can slow down the transition by forcing some users to wait several hours before accessing the new Load Balancer. To avoid this, we recommend temporarily reducing the TTL before updating the IP.

Before changing the TTL, it is important to know its current value. To do this, run the following command in a terminal:

```bash
dig yourdomain.com +noall +answer

yourdomain.com.             600     IN      A       17*.***.**.*4
```

Here, 600 corresponds to the TTL in seconds (i.e. approximately 10 minutes). This means that the DNS servers keep this IP in cache for this length of time before checking for an update.

### Lower the TTL before migration

To lower the TTL, follow these steps:

- Access your DNS management console.
- Find the A record (or CNAME) associated with your domain.
- Change the TTL of your A or CNAME record by reducing it to 300 seconds (5 minutes).
- Wait 24 to 48 hours for this new TTL to propagate.

> [!primary]
>
> Why waiting? Because DNS servers must first clear their caches before adopting the new TTL.

### Update the Load Balancer IP

Once the TTL reduction has been propagated:

- Replace the old IP with the one of the new Load Balancer in your DNS record.
- Thanks to the short TTL value, users will quickly see the update.
- Check that the change is effective using the same `dig` command used previously. You should see the new IP address displayed in the command output.

### Restore TTL after migration

Once the transition has been validated and the old Load Balancer disconnected, reconfigure the TTL with a higher value.

## Other resources

- [Exposing applications using services of Load Balancer type](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/openstack-cloud-controller-manager/expose-applications-using-loadbalancer-type-service.md)
- [Using Octavia Ingress Controller](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md)
- [OVHcloud Load Balancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer)
- [How to monitor your Public Cloud Load Balancer with Prometheus](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus)

## Go further

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/).

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Container and Orchestration services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
