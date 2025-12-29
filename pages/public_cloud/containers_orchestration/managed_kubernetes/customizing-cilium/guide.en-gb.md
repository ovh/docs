---
title: Customizing Cilium on an OVHcloud Managed Kubernetes cluster
excerpt: 'Find out how to customize Cilium on an OVHcloud Managed Kubernetes cluster'
updated: 2025-12-12
---

## Objective

The OVHcloud Managed Kubernetes Service provides you with Kubernetes clusters without the hassle of installing or operating them.

The Standard plan of OVHcloud Managed Kubernetes clusters uses [Cilium](https://cilium.io/) as the default CNI.

The Cilium agent process (a.k.a. DaemonSet) allows configuration on a per-node basis.

This allows overriding `cilium-config` ConfigMap for a node or set of nodes by using `CiliumNodeConfig` objects.

> [!warning]
> Without using a `CiliumNodeConfig` object, it will not be possible to update `cilium-config` ConfigMap.

## Requirements

- An OVHcloud Managed Kubernetes cluster with Standard plan.

## Instructions

### What is CiliumNodeConfig

As stated in [Cilium documentation](https://docs.cilium.io/en/stable/configuration/per-node-config/#ciliumnodeconfig-objects):

A `CiliumNodeConfig` object allows for overriding ConfigMap / Agent arguments.

It consists of a set of fields and a label selector. The label selector defines to which nodes the configuration applies.

As is the standard with Kubernetes, an empty LabelSelector (e.g. `{}`) selects all nodes.

### CiliumNodeConfig possible values

You can find the full list of possible keys and values in the [cilium-configmap file on GitHub](https://github.com/cilium/cilium/blob/main/install/kubernetes/cilium/templates/cilium-configmap.yaml).

> [!warning]
> Be aware that some keys available on our platform may require certain features to be enabled in the Cilium operator.

### Customization example

#### Enable topology aware routing for 3AZ region

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

Then restart the Cilium agent:

```bash
kubectl -n kube-system rollout restart daemonset cilium
```

Verify that the configuration has been applied:

```bash
kubectl -n kube-system logs $(kubectl -n kube-system get pod -l k8s-app=cilium -o name) | head -n 500 | grep enable-service-topology

time=2025-12-09T15:57:06.161145191Z level=info msg="  --config-sources='[{\"kind\":\"config-map\",\"namespace\":\"kube-system\",\"name\":\"cilium-config\"},{\"kind\":\"cilium-node-config\",\"namespace\":\"kube-system\",\"name\":\"enable-service-topology\"}]'"
time=2025-12-09T15:57:06.165626171Z level=info msg="  --enable-service-topology='true'"
```

## Go further

To have an overview of the OVHcloud Managed Kubernetes Service, see [this page](/links/public-cloud/kubernetes).

To learn more about how to use your Kubernetes cluster the practical way, we invite you to read [our tutorials](/products/public-cloud-containers-orchestration-managed-kubernetes-k8s).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](/links/community).