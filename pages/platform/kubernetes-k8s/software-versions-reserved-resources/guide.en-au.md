---
title: Kubernetes Plugins (CNI, CRI, CSI...) & softwares versions and reserved resources
excerpt: ''
slug: kubernetes-plugins-software-versions-reserved-resources
section: Technical resources
---

**Last updated December 21<sup>st</sup>, 2022.**

We list here some details on the Control Panel, the plugins (CNI, CRI, CSI...) & software versions we use and the resources we reserve on each Node.

## Kubernetes versions

Currently, we support the following Kubernetes releases:

* `1.20` (deprecated)
* `1.21` (deprecated)
* `1.22` (deprecated)
* `1.23`
* `1.24`
* `1.25`

If you run a Managed Kubernetes Service using an older version we strongly encourage you to use the [version upgrade feature](../upgrading-kubernetes-version/) to receive official support for your cluster.

You will find more details about our [End-of-Sale, End-of-Service and End-of-life-Policy in the dedicated section](../eos-eol-policies/).

We will closely follow the Kubernetes releases, and new versions will be regularly available.

## OS and Docker versions

The OS and Docker demon version on your nodes will be regularly updated. Current versions are:

* OS: Ubuntu 18.04 LTS
* Docker: 19.03.15

## CRI (Container Runtime Interface)

Since `1.20`, we use `containerd` as the default CRI

* `1.20`: 1.5.11 (deprecated)
* `1.21`: 1.5.11 (deprecated)
* `1.22`: 1.5.11 (deprecated)
* `1.23`: 1.6.10
* `1.24`: 1.6.10
* `1.25`: 1.6.10

## CNI (Cluster Network Interface)

The CNI plugin installed is [canal](https://github.com/projectcalico/canal){.external} which embedded [calico](https://github.com/projectcalico/calico){.external} for policy and [flannel](https://github.com/coreos/flannel/){.external} for networking.

The versions installed depends on the Kubernetes version:

* `1.20`: calico v3.10.3, flannel v0.11.0 (deprecated)
* `1.21`: calico v3.22.5, flannel v0.17.0 (deprecated)
* `1.22`: calico v3.22.5, flannel v0.17.0 (deprecated)
* `1.23`: calico v3.22.5, flannel v0.17.0
* `1.24`: calico v3.23.5, flannel v0.17.0
* `1.25`: calico v3.24.5, flannel v0.20.1

## CSI (Container Storage Interface)

The CSI plugin installed is [cinder](https://github.com/kubernetes/cloud-provider-openstack).

The versions depend on the Kubernetes cluster version:

* `1.20`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v3.1.0, csi-snapshotter v5.0.1, snapshot-controller: v4.2.1, csi-resizer v1.4.0 (deprecated)
* `1.21`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v3.1.0, csi-snapshotter v5.0.1, snapshot-controller: v4.2.1, csi-resizer v1.4.0 (deprecated)
* `1.22`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v3.1.0, csi-snapshotter v5.0.1, snapshot-controller: v4.2.1, csi-resizer v1.4.0 (deprecated)
* `1.23`: csi-plugin v1.21.0, csi-attacher v3.4.0, csi-provisioner v3.1.0, csi-snapshotter v5.0.1, snapshot-controller: v4.2.1, csi-resizer v1.4.0
* `1.24`: csi-plugin v1.21.0, csi-attacher v3.5.0, csi-provisioner v3.2.1, csi-snapshotter v6.0.1, snapshot-controller: v6.0.1, csi-resizer v1.5.0
* `1.25`: csi-plugin v1.21.0, csi-attacher v3.5.0, csi-provisioner v3.2.1, csi-snapshotter v6.0.1, snapshot-controller: v6.0.1, csi-resizer v1.5.0

## Other components

The versions are:

* `1.20`: coredns v1.10.0, metrics-server v0.6.2 (deprecated)
* `1.21`: coredns v1.10.0, metrics-server v0.6.2 (deprecated)
* `1.22`: coredns v1.10.0, metrics-server v0.6.2 (deprecated)
* `1.23`: coredns v1.10.0, metrics-server v0.6.2
* `1.24`: coredns v1.10.0, metrics-server v0.6.2
* `1.25`: coredns v1.10.0, metrics-server v0.6.2

## Enabled policies

* [Network policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/){.external}
* [Resource quotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/){.external}
* [Limit range](https://kubernetes.io/docs/concepts/policy/limit-range/){.external}


Authorization modes:

* [Node](https://kubernetes.io/docs/reference/access-authn-authz/node/){.external}: Authorise API requests made by Kubelets.
* [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/){.external}: Role-Based Access Control is a method of regulating access to computer or network resources based on the roles of individual users within an organisation.

Feature gates:

* `TTLAfterFinished`: Allow a TTL controller to clean up resources after they finish execution. (enabled by default for `v1.23+`, parameter removed in `v1.25`)

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
