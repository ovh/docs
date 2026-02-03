---
title: Customizing Cilium on an OVHcloud Managed Kubernetes cluster
excerpt: 'Find out how to customize Cilium on an OVHcloud Managed Kubernetes cluster'
updated: 2026-01-09
---

## Objective

The OVHcloud Managed Kubernetes Service provides you with Kubernetes clusters without the hassle of installing or operating them.

The Standard plan of OVHcloud Managed Kubernetes clusters uses [Cilium](https://cilium.io/) as the default CNI.

The Cilium agent process (a.k.a. DaemonSet) allows configuration on a per-node basis.

This allows overriding `cilium-config` ConfigMap for a node or set of nodes by using `CiliumNodeConfig` objects.

> [!warning]
> The **only** method supported by OVHcloud Managed Kubernetes Service to configure Cilium is the [CiliumNodeConfig](https://docs.cilium.io/en/stable/configuration/per-node-config/#ciliumnodeconfig-objects) object. Alternative methods using the `helm` or the `cilium` commands are not supported.

## Requirements

- An OVHcloud Managed Kubernetes cluster with Standard plan.

## Instructions

### What is CiliumNodeConfig

As stated in [Cilium's documentation](https://docs.cilium.io/en/stable/configuration/per-node-config/#ciliumnodeconfig-objects):

A `CiliumNodeConfig` object allows for overriding ConfigMap / Agent arguments.

It consists of a set of fields and a label selector. The label selector defines to which nodes the configuration applies.

As is the standard with Kubernetes, an empty LabelSelector (e.g. `{}`) selects all nodes.

### CiliumNodeConfig possible values

The Cilium project does not provide a complete list of the keys and values that can be set in the ConfigMap (and consequently that can set in the `specs` of a `CiliumNodeConfig` object).

However these keys can be found by looking at the Helm template of the [cilium-configmap file](https://github.com/cilium/cilium/blob/main/install/kubernetes/cilium/templates/cilium-configmap.yaml).

> [!warning]
> Make sure to read the limitations below when deciding to set values in a `CiliumNodeConfig` object.

### Limitations when using CiliumNodeConfig

As a result of the way the Managed Kubernetes Clusters are deployed, some configurations are unsupported even though they are allowed by the `CiliumNodeConfig` object.

#### Kube-proxy replacement

Upon the cluster's creation, the kube-proxy component is replaced by Cilium and although the `CiliumNodeConfig` object allows setting `kube-proxy-replacement: "false"`, it will not work properly and will have unforeseen consequences.

### Customization example

When configuring Cilium through a `CiliumNodeConfig` object, it is required to restart the `cilium` DaemonSet:

```bash
kubectl -n kube-system rollout restart daemonset cilium
```

You can then verify that the configuration has been applied by looking for the values you have set in `cilium`'s logs:

```bash
kubectl -n kube-system logs -l k8s-app=cilium
```

> [!warning]
> The following examples can have various effects depending on your setup and some might disrupt your cluster's operation.
> These examples come with no guarantee and you should always check Cilium's documentation to understand their effect.

### Enable topology aware routing for 3AZ region

> [!success]
> To discover this feature, please refer to the following page: [Discover Kubernetes 1.33 features – Topology aware routing in multi-zones Kubernetes clusters](https://blog.ovhcloud.com/discover-kubernetes-1-33-features-topology-aware-routing-in-multi-zones-kubernetes-clusters/), by [Aurélie Vache](https://blog.ovhcloud.com/author/aurelie-vache/).

To enable topology aware routing for 3AZ region on the Cilium side, apply this configuration of `CiliumNodeConfig`:

```yaml
apiVersion: cilium.io/v2
kind: CiliumNodeConfig
metadata:
  namespace: kube-system
  name: enable-service-topology
spec:
  nodeSelector: {}
  defaults:
    enable-service-topology: "true"
```

After creation, restart `cilium` and check the logs to ensure it is properly applied.

### Enable wireguard transparent encryption

To enable [WireGuard Transparent Encryption](https://docs.cilium.io/en/stable/security/network/encryption-wireguard/), apply the following configuration of `CiliumNodeConfig`:

```yaml
apiVersion: cilium.io/v2
kind: CiliumNodeConfig
metadata:
  namespace: kube-system
  name: enable-wireguard
spec:
  nodeSelector: {}
  defaults:
    enable-wireguard: "true"
```

You can also set wireguard's persistent keepalive (disabled by default) using the key `wireguard-persistent-keepalive`:

```yaml
apiVersion: cilium.io/v2
kind: CiliumNodeConfig
metadata:
  namespace: kube-system
  name: enable-wireguard-with-persistent-keepalive
spec:
  nodeSelector: {}
  defaults:
    enable-wireguard: "true"
    wireguard-persistent-keepalive: "20s"
```

After creation, restart `cilium` and check the logs to ensure it is properly applied.

### Tuning Cilium's performance

[Cilium's tuning guide](https://docs.cilium.io/en/stable/operations/performance/tuning/) provides tips in how to optimize performances depending on your needs.

Here is an example of such a configuration using a `CiliumNodeConfig` object:

```yaml
apiVersion: cilium.io/v2
kind: CiliumNodeConfig
metadata:
  namespace: kube-system
  name: performance-tuning-example
spec:
  nodeSelector: {}
  defaults:
    routing-mode: "native"
    datapath-mode: "netkit" # Beta feature
    enable-bpf-masquerade: "true"
    bpf-distributed-lru: "true"
    bpf-map-dynamic-size-ratio: "0.08"
    enable-ipv4: "true"
    enable-ipv4-big-tcp: "true"
    enable-bpf-clock-probe: "true"
```

After creation, restart `cilium` and check the logs to ensure it is properly applied.

## Go further

To have an overview of the OVHcloud Managed Kubernetes Service, see [this page](/links/public-cloud/kubernetes).

To learn more about how to use your Kubernetes cluster the practical way, we invite you to read [our tutorials](/products/public-cloud-containers-orchestration-managed-kubernetes-k8s).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](/links/community).
