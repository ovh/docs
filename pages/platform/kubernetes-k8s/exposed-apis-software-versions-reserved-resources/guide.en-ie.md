---
title: Exposed APIs, software versions and reserved resources
excerpt: ''
slug: exposed-apis-software-versions-reserved-resources
section: Technical resources
---

**Last updated February 24<sup>th</sup>, 2021.**

We list here some details on the APIs we expose, the software versions we use and the resources we reserve on each node.

## OVHcloud API

We have added a [Kubernetes section](https://api.ovh.com/console/#/cloud/project/{serviceName}/kube) to the [OVHcloud API](https://api.ovh.com/).  
Using it allows you to add and remove nodes, update and reset your clusters or getting `kubectl` configuration.

> [!primary]
> If you have never used the OVHcloud API, you can learn the basics in [First steps with the OVHcloud API](../../api/first-steps-with-ovh-api/).

## Kubernetes versions

Currently, we support the following Kubernetes releases:

* `1.15` (deprecated)
* `1.16` (deprecated)
* `1.17`
* `1.18`
* `1.19`
* `1.20`

If you run a Managed Kubernetes Service using an older version we strongly encourage you to use the [version upgrade feature](../upgrading-kubernetes-version/) to receive official support for your cluster.

You will find more details about our [End-of-Sale, End-of-Service and End-of-life-Policy in the dedicated section](../eos-eol-policies/).

We will closely follow the Kubernetes releases, and new versions will be regularly available.

## OS and Docker versions

The OS and Docker demon version on your nodes will be regularly updated. Current versions are:

* OS: Ubuntu 18.04 LTS
* Docker: 18.06.3
* Containerd: 1.4.3

## CRI (Container Runtime Interface)

As recommended by Kubernetes, `docker` used as CRI is now deprecated since `1.20`, more information [here](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/).

* If you create a new cluster or a node pool after 19 February 2021 (in any supported Kubernetes version) or if you upgrade an existing cluster to 1.20, `containerd` is used as the default CRI for each nodes. Docker remains installed in our managed OS to ensure compatibilty for specific use cases.
* For node pools created before that date, existing node pools will still use `docker` as the CRI on all nodes until you update that cluster to `1.20` or above.

## CNI (Cluster Network Interface)

The CNI plugin installed is [canal](https://github.com/projectcalico/canal){.external} which embedded [calico](https://github.com/projectcalico/calico){.external} for policy and [flannel](https://github.com/coreos/flannel/){.external} for networking.

The versions installed depends on the Kubernetes version:

* `1.15`: calico 3.7.2, flannel 0.11.0 (deprecated)
* `1.16`: calico 3.9.1, flannel 0.11.0 (deprecated)
* `1.17`: calico 3.10.3, flannel 0.11.0
* `1.18`: calico 3.10.3, flannel 0.11.0
* `1.19`: calico 3.10.3, flannel 0.11.0
* `1.20`: calico 3.10.3, flannel 0.11.0

## Enabled policies

* [Network policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/){.external}
* [Resource quotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/){.external}
* [Limit range](https://kubernetes.io/docs/concepts/policy/limit-range/){.external}

## Configuration

### API

Admission plugins (defaults are not listed here):

* `AlwaysPullImages`: Force every new pod to pull the required images every time. In a multi-tenant cluster users can be assured that their private images can only be used by those who have the credentials to pull them.
* `NodeRestriction`: Ensure that the kubelet is restricted to the Node and Pod objects that it could modify as defined. Such kubelets will only be allowed to modify their own NodeAPI object and PodAPI objects that are bound to their node.

Authorization modes:

* [Node](https://kubernetes.io/docs/reference/access-authn-authz/node/){.external}: Authorise API requests made by kubelets.
* [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/){.external}: Role-based access control is a method of regulating access to computer or network resources based on the roles of individual users within an organisation.

Feature gates:

* `TTLAfterFinished`: Allow a TTL controller to clean up resources after they finish execution.

### Kubelet

* `protect-kernel-defaults`: Protect tuned kernel parameters from overriding kubelet default kernel parameter values.

## Reserved resources

Each worker node has a certain amount of GB of RAM and mCPU reserved for Kubernetes components.  
These reserved quotas may evolve in the future; the page will be updated accordingly.

To guarantee the availabilty of a customer's node, we are reserving resources (CPU and RAM), proportionally on the instance flavor.

* CPU

The calculation used to estimate the reservation is: (10 % of 1 CPU + 0,5% of all CPU cores)
The unit is in seconds: 1 CPU = 1 second, 10% of 1 CPU = 100 ms, 50% of 2 CPU = 1 s

For example, the result for the flavour b2-15 with 4 CPU cores: (10 % of 1 CPU + (0,5 * 4)= 120 ms

* RAM

The calculation used to estimate the reservation is: ( (768M Kubernetes + 5% of total memory) + ( 256M system) )

* Storage

The mathematical "log" function is egal to "ln(10)".

The calculation used to estimate the reservation is: ( ( log(total storage)*2 ) + ( log(total storage)*8 ) + ( 10% of total storage ) )
for example: `log(100) = 2`.

This array helps you to predict available resouces.

| Flavor | VCore | CPU Reserved ms | RAM Total | RAM Reserved Mb | Storage Total | Storage Reserved Mb |
|-|-|-|-|-|-|-|
| b2-7 | 2 | 160 | 7 | 1,85 | 50 | 22 |
| b2-15 | 4 | 170 | 15 | 2,25 | 100 | 30 |
| b2-30 | 8 | 190 | 30 | 3 | 200 | 43 |
| b2-60 | 16 | 230 | 60 | 4,5 | 400 | 66 |
| b2-120 | 32 | 310 | 120 | 7,5 | 400 | 66 |
