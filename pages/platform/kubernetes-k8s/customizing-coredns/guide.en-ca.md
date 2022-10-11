---
title: Customizing CoreDNS on an OVHcloud Managed Kubernetes cluster
slug: customizing-coredns
excerpt: 'Find out how to customize CoreDNS on an OVHcloud Managed Kubernetes cluster'
section: User guides
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
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Last updated 11th October 2022**

## Objective

The OVHcloud Managed Kubernetes service provides you with Kubernetes clusters without the hassle of installing or operating them.

The OVHcloud Managed Kubernetes clusters are using [CoreDNS](https://coredns.io/) as a DNS server for Service Discovery.

At OVHcloud, we listen to our users and improve our products and services accordingly, which is why we give you the ability to customize the CoreDNS configuration, thanks to the expansion mechanism in a special ConfigMap which is not modified by a redeployment.

## Requirements 

- An OVHcloud Managed Kubernetes cluster

## Instructions

### Displaying the CoreDNS default configuration

In an OVHcloud Managed Kubernetes cluster the DNS are handled by CoreDNS.

Take a look at the `ConfigMap` to see the default configuration.

```bash
kubectl get configmap coredns -n kube-system -o yaml
```

The result should be similar to the following:

<pre class="console"><code>$ kubectl get configmap coredns -n kube-system -o yaml
apiVersion: v1
data:
  Corefile: |
    .:53 {
        errors
        health {
            lameduck 5s
        }
        ready
        kubernetes cluster.local in-addr.arpa ip6.arpa {
            pods insecure
            fallthrough in-addr.arpa ip6.arpa
            ttl 30
        }
        prometheus :9153
        forward . /etc/resolv.conf {
          prefer_udp
          policy sequential
        }
        cache 30
        loop
        reload
        loadbalance
        import custom/*.include
        log
    }
    import custom/*.server
kind: ConfigMap
metadata:
  creationTimestamp: "2022-09-22T07:00:39Z"
  labels:
    addonmanager.kubernetes.io/mode: EnsureExists
  name: coredns
  namespace: kube-system
  resourceVersion: "5786561917"
  uid: a4e7310b-50b9-4976-a014-13e4bee12344
</code</pre>

> [!warning]
> When the Kubernetes Control Plane is redeployed or when the cluster is upgrading to the latest patch, this default CoreDNS configuration is restored to the default one. 

To understand what this CoreDNS configuration means, please read the [CoreDNS official documentation and CoreDNS plugins documentation](https://coredns.io/plugins/).

### Customizing the CoreDNS configuration

If you want to edit and customize the CoreDNS configuration, it can be done by editing the `coredns-custom` ConfigMap, which will never be altered by OVHCloud services:

```bash
$ kubectl get cm coredns-custom -n kube-system -o yaml
apiVersion: v1
data:
  example.include: |
    # Include .:53 example
  example.server: |
    # Server example
kind: ConfigMap
metadata:
  creationTimestamp: "2022-10-10T09:14:03Z"
  labels:
    addonmanager.kubernetes.io/mode: EnsureExists
  name: coredns-custom
  namespace: kube-system
  resourceVersion: "5786561924"
  uid: 95c51a5d-c413-4520-b84d-a16892626620
```

You can add some new configuration in `data.example.include` and `data.example.server` blocks.

Edit the `coredns-custom` ConfigMap with the following command:

```bash
kubectl edit cm coredns-custom -n kube-system  
```

For example, if you want to use a custom nameserver that will point to your private DNS all FQDN resolutions for `*.myprivatedomain.com`:

<pre class="console"><code>$ kubectl edit cm coredns-custom -n kube-system
# Please edit the object below. Lines beginning with a '#' will be ignored,
# and an empty file will abort the edit. If an error occurs while saving this file will be
# reopened with the relevant failures.
#
apiVersion: v1
data:
  example.include: |
    # Include .:53 example
  myprivatedomain.server: |
    myprivatedomain.com.:53 {
    forward . [my-custom-dns-server-private-ip]
  }
kind: ConfigMap
metadata:
  creationTimestamp: "2022-10-10T09:14:03Z"
  labels:
    addonmanager.kubernetes.io/mode: EnsureExists
  name: coredns-custom
  namespace: kube-system
  resourceVersion: "5786561924"
  uid: 95c51a5d-c413-4520-b84d-a16892626620
</code></pre>

Check the logs to make sure that the customization has been applied:

```bash
kubectl logs -n kube-system -l k8s-app=kube-dns -f
```

## Known limitations

* Full private DNS resolution is not possible, only private domain can be resolved. This means that public FQDN are resolved by the public OVHcloud DNS. For example, when resolving `kubernetes.io` from a Pod, first the CoreDNS resolves to `.:53` which is the default nameserver then it resolves the `/etc/resolv.conf` of the underlying worker Node. Then it resolves the public OVHcloud DNS (which is configured by the OVHcloud Managed Kubernetes).

* When upgrading the cluster Nodes (or when a node restarts), the CoreDNS pod can be restarted and takes the new configuration. That's for this reason you need to customize the configuration through the `coredns-custom` ConfigMap.

* CoreDNS is configured to reload its configuration (ConfigMap here) every 30 seconds.

* New Kubernetes clusters will have the new CoreDNS Deployment & ConfigMaps, whereas the old ones will need to update their control plane to the latest patch.


## Go further

To have an overview of the OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovh.com/public-cloud/kubernetes/).

To learn more about how to use your Kubernetes cluster the practical way, we invite you to read our [tutorials](../).

Join our [community of users](https://community.ovh.com/en/).