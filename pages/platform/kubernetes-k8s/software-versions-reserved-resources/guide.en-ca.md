---
title: Kubernetes Plugins (CNI, CRI, CSI...) & softwares versions and reserved resources
excerpt: ''
slug: kubernetes-plugins-software-versions-reserved-resources
section: Technical resources
---

**Last updated May 30<sup>th</sup>, 2022.**

We list here some details on the Control Panel, the plugins (CNI, CRI, CSI...) & software versions we use and the resources we reserve on each Node.

## Kubernetes versions

Currently, we support the following Kubernetes releases:

* `1.18` (deprecated)
* `1.19` (deprecated)
* `1.20`
* `1.21`
* `1.22`
* `1.23`

If you run a Managed Kubernetes Service using an older version we strongly encourage you to use the [version upgrade feature](../upgrading-kubernetes-version/) to receive official support for your cluster.

You will find more details about our [End-of-Sale, End-of-Service and End-of-life-Policy in the dedicated section](../eos-eol-policies/).

We will closely follow the Kubernetes releases, and new versions will be regularly available.

## OS and Docker versions

The OS and Docker demon version on your nodes will be regularly updated. Current versions are:

* OS: Ubuntu 18.04 LTS
* Docker: 18.06.3
* Containerd: 1.4.3

## CRI (Container Runtime Interface)

As recommended by Kubernetes, `docker` used as CRI is now deprecated since `1.20`, you can find more information [here](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/).

* If you create a new cluster or a node pool after February 19th 2021 (in any supported Kubernetes version) or if you upgrade an existing cluster to 1.20, `containerd` is used as the default CRI for each nodes. Docker remains installed in our managed OS to ensure compatibilty for specific use cases.
* For node pools created before that date, existing node pools will still use `docker` as the CRI on all nodes until you update that cluster to `1.20` or above.

## CNI (Cluster Network Interface)

The CNI plugin installed is [canal](https://github.com/projectcalico/canal){.external} which embedded [calico](https://github.com/projectcalico/calico){.external} for policy and [flannel](https://github.com/coreos/flannel/){.external} for networking.

The versions installed depends on the Kubernetes version:

* `1.18`: calico v3.10.3, flannel v0.11.0 (deprecated)
* `1.19`: calico v3.10.3, flannel v0.11.0 (deprecated)
* `1.20`: calico v3.10.3, flannel v0.11.0
* `1.21`: calico v3.22.2, flannel v0.17.0
* `1.22`: calico v3.22.2, flannel v0.17.0
* `1.23`: calico v3.22.2, flannel v0.17.0

## CSI (Container Storage Interface)

The CSI plugin installed is [cinder](https://github.com/kubernetes/cloud-provider-openstack).

The versions depend on the Kubernetes cluster version:

* `1.18`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v2.2.2, csi-snapshotter v3.0.3, snapshot-controller: v3.0.3, csi-resizer v1.4.0 (deprecated)
* `1.19`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v2.2.2, csi-snapshotter v3.0.3, snapshot-controller: v3.0.3, csi-resizer v1.4.0 (deprecated)
* `1.20`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v3.1.0, csi-snapshotter v5.0.1, snapshot-controller: v4.2.1, csi-resizer v1.4.0
* `1.21`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v3.1.0, csi-snapshotter v5.0.1, snapshot-controller: v4.2.1, csi-resizer v1.4.0
* `1.22`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v3.1.0, csi-snapshotter v5.0.1, snapshot-controller: v4.2.1, csi-resizer v1.4.0
* `1.23`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v3.1.0, csi-snapshotter v5.0.1, snapshot-controller: v4.2.1, csi-resizer v1.4.0

## Other components

The versions are:

* `1.18`: coredns v1.8.0, metrics-server v0.3.6 (deprecated)
* `1.19`: coredns v1.9.1, metrics-server v0.6.1 (deprecated)
* `1.20`: coredns v1.9.1, metrics-server v0.6.1
* `1.21`: coredns v1.9.1, metrics-server v0.6.1
* `1.22`: coredns v1.9.1, metrics-server v0.6.1
* `1.23`: coredns v1.9.1, metrics-server v0.6.1

## Enabled policies

* [Network policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/){.external}
* [Resource quotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/){.external}
* [Limit range](https://kubernetes.io/docs/concepts/policy/limit-range/){.external}


Authorization modes:

* [Node](https://kubernetes.io/docs/reference/access-authn-authz/node/){.external}: Authorise API requests made by Kubelets.
* [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/){.external}: Role-Based Access Control is a method of regulating access to computer or network resources based on the roles of individual users within an organisation.

Feature gates:

* `TTLAfterFinished`: Allow a TTL controller to clean up resources after they finish execution.

### Kubelet

* `protect-kernel-defaults`: Protect tuned kernel parameters from overriding kubelet default kernel parameter values.

## Reserved resources

Each worker node has a certain amount of CPU, RAM and storage reserved for Kubernetes components.  
These reserved quotas may evolve in the future; the page will be updated accordingly.

To guarantee the availability of a customer's node, the amount of reserved resources depends on the instance flavor.

* **CPU** reservation is defined through this formula:  
    > 15 % of 1 CPU + 0,5% of all CPU cores

* **RAM** reservation is defined through this formula:  
    > 1024 MB + 5% of total memory

* **Storage** reservation is defined through this formula:  
    > log10(total storage in GB) * 10 + 10% of total storage

This table sums up the reserved resources on b2 flavors:

| Flavor | vCore | Reserved CPU (ms) | Total RAM | Reserved RAM (MB) | Total storage (GB) | Reserved storage (GB) |
|-|-|-|-|-|-|-|
| b2-7 | 2 | 160 | 7 | 1,85 | 50 | 22 |
| b2-15 | 4 | 170 | 15 | 2,25 | 100 | 30 |
| b2-30 | 8 | 190 | 30 | 3 | 200 | 43 |
| b2-60 | 16 | 230 | 60 | 4,5 | 400 | 66 |
| b2-120 | 32 | 310 | 120 | 7,5 | 400 | 66 |
