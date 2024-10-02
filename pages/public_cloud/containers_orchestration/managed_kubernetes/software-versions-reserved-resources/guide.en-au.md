---
title: Kubernetes Plugins (CNI, CRI, CSI...) & softwares versions and reserved resources
excerpt: ''
updated: 2024-10-02
---

We list here some details on the Control Panel, the plugins (CNI, CRI, CSI...) & software versions we use and the resources we reserve on each Node.

## Kubernetes versions

Currently, we support the following Kubernetes releases:

* `1.26`
* `1.27`
* `1.28`
* `1.29`
* `1.30`
* `1.31`

If you run a Managed Kubernetes Service using an older version we strongly encourage you to use the [version upgrade feature](/pages/public_cloud/containers_orchestration/managed_kubernetes/upgrading-kubernetes-version) to receive official support for your cluster.

You will find more details about our [End-of-Sale, End-of-Service and End-of-life-Policy in the dedicated section](/pages/public_cloud/containers_orchestration/managed_kubernetes/eos-eol-policies).

We will closely follow the Kubernetes releases, and new versions will be regularly available.

## OS, kernel and Docker versions

The OS, kernel and Docker demon version on your nodes will be regularly updated. Current versions are:

* OS: Ubuntu 22.04 LTS
* Kernel: 5.15-generic
* Docker: 23.0.1

## CRI (Container Runtime Interface)

We use `containerd` as the default CRI

* `1.26`: 1.6.20
* `1.27`: 1.7.18
* `1.28`: 1.7.18
* `1.29`: 1.7.18
* `1.30`: 1.7.18
* `1.31`: 1.7.18

## CNI (Cluster Network Interface)

The CNI plugin installed is [canal](https://github.com/projectcalico/canal){.external} which embedded [calico](https://github.com/projectcalico/calico){.external} for policy and [flannel](https://github.com/coreos/flannel/){.external} for networking.

The versions installed depends on the Kubernetes version:

* `1.26`: calico v3.27.3, flannel v0.21.3
* `1.27`: calico v3.28.0, flannel v0.24.3
* `1.28`: calico v3.28.0, flannel v0.24.3
* `1.29`: calico v3.28.0, flannel v0.24.3
* `1.30`: calico v3.28.0, flannel v0.24.3
* `1.31`: calico v3.28.1, flannel v0.24.4

## CCM (Cloud-controller-manager)

Our cloud-controller-manager (CCM) are based on the openstack cloud-controller-manager (OpenstackCCM) available in the [Cloud provider openstack](https://github.com/kubernetes/cloud-provider-openstack) repository.

* `1.26`: OVH IOLB CCM based on OpenstackCCM 1.18, OVH Octavia CCM based on OpenstackCCM 1.29
* `1.27`: OVH IOLB CCM based on OpenstackCCM 1.18, OVH Octavia CCM based on OpenstackCCM 1.29
* `1.28`: OVH IOLB CCM based on OpenstackCCM 1.18, OVH Octavia CCM based on OpenstackCCM 1.29
* `1.29`: OVH IOLB CCM based on OpenstackCCM 1.18, OVH Octavia CCM based on OpenstackCCM 1.29
* `1.30`: OVH IOLB CCM based on OpenstackCCM 1.18, OVH Octavia CCM based on OpenstackCCM 1.29
* `1.31`: OVH IOLB CCM based on OpenstackCCM 1.18, OVH Octavia CCM based on OpenstackCCM 1.29

## CSI (Container Storage Interface)

The CSI plugin installed is [cinder](https://github.com/kubernetes/cloud-provider-openstack).

The versions depend on the Kubernetes cluster version:

* `1.26`: csi-plugin v1.29.0, csi-attacher v4.3.0, csi-provisioner v3.5.0, csi-snapshotter v6.2.2, snapshot-controller: v6.2.2, csi-resizer v1.8.0
* `1.27`: csi-plugin v1.29.0, csi-attacher v4.3.0, csi-provisioner v3.5.0, csi-snapshotter v6.2.2, snapshot-controller: v6.2.2, csi-resizer v1.8.0
* `1.28`: csi-plugin v1.29.0, csi-attacher v4.4.2, csi-provisioner v3.6.2, csi-snapshotter v6.3.2, snapshot-controller: v6.3.2, csi-resizer v1.9.2
* `1.29`: csi-plugin v1.29.0, csi-attacher v4.5.0, csi-provisioner v3.6.3, csi-snapshotter v6.3.3 snapshot-controller: v6.3.3, csi-resizer v1.10.0
* `1.30`: csi-plugin v1.29.0, csi-attacher v4.5.0, csi-provisioner v3.6.3, csi-snapshotter v6.3.3 snapshot-controller: v6.3.3, csi-resizer v1.10.0
* `1.31`: csi-plugin v1.29.0, csi-attacher v4.5.0, csi-provisioner v3.6.3, csi-snapshotter v6.3.3 snapshot-controller: v6.3.3, csi-resizer v1.10.0

## Other components

The versions are:

* `1.26`: coredns v1.11.1, metrics-server v0.6.4
* `1.27`: coredns v1.11.1, metrics-server v0.7.1
* `1.28`: coredns v1.11.1, metrics-server v0.7.1
* `1.29`: coredns v1.11.1, metrics-server v0.7.1
* `1.30`: coredns v1.11.1, metrics-server v0.7.1
* `1.31`: coredns v1.11.3, metrics-server v0.7.2

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

This table sums up the reserved resources on b2 and b3 flavors:

| Flavor | vCore | Reserved CPU (ms) | Total RAM | Reserved RAM (GB) | Total storage (GB) | Reserved storage (GB) |
|-|-|-|-|-|-|-|
| b2-7 | 2 | 160 | 7 | 1,98 | 50 | 22 |
| b2-15 | 4 | 170 | 15 | 2,4 | 100 | 30 |
| b2-30 | 8 | 190 | 30 | 3,16 | 200 | 43 |
| b2-60 | 16 | 230 | 60 | 4,7 | 400 | 66 |
| b2-120 | 32 | 310 | 120 | 7,77 | 400 | 66 |
| b3-8 | 2 | 160 | 8 | 2 | 50 | 22 |
| b3-16 | 4 | 170 | 16 | 2,44 | 100 | 30 |
| b3-32 | 8 | 190 | 32 | 3,26 | 200 | 43 |
| b3-64 | 16 | 230 | 64 | 4,9 | 400 | 66 |
| b3-128 | 32 | 310 | 128 | 8,18 | 400 | 66 |
| b3-256 | 64 | 470 | 256 | 14,73 | 400 | 66 |

## Go further

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/de/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](https://community.ovh.com/en/).
