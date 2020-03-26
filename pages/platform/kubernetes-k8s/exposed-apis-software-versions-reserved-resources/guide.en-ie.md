---
title: Exposed APIs, software versions and reserved resources
excerpt: ''
slug: exposed-apis-software-versions-reserved-resources
section: Technical resources
---

**Last updated March 26<sup>th</sup>, 2020.**

We list here some details on the APIs we expose, the software versions we use and the resources we reserve on each node.

## OVH APIs

We have added a [Kubernetes section](https://api.ovh.com/console/#/cloud/project/{serviceName}/kube) to the [OVH API](https://api.ovh.com/).  
Using it you will be able to add and remove nodes, update and reset your clusters or getting `kubectl` configuration.

> [!primary]
> If you have never used the OVH API, you can see the basis on [First steps with the OVH API](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/).

## Kubernetes versions

Currently, we support the following Kubernetes releases:

* `1.13`
* `1.14`
* `1.15`
* `1.16`
* `1.17`

If you run a Managed Kubernetes Service using an older version we strongly encourage you to use the [version upgrade feature](../upgrading-kubernetes-version/) to receive official support for your cluster.

You will find more details about our [End-of-Sale, End-of-Service and End-of-life-Policy in the dedicated section](../eos-eol-policies/).

We will closely follow the Kubernetes releases, and new versions will be regularly available.

## OS and Docker versions

The OS and Docker demon version on your nodes will be regularly updated. Current versions are:

* OS: Ubuntu 18.04 LTS
* Docker: 18.06.3

## CNI

The CNI plugin installed is [canal](https://github.com/projectcalico/canal){.external} which embedded [calico](https://github.com/projectcalico/calico){.external} for policy and [flannel](https://github.com/coreos/flannel/){.external} for networking.

The versions installed depends on the Kubernetes version:

* `1.13`: calico 3.6.0, flannel 0.9.1
* `1.14` and `1.15`: calico 3.7.2, flannel 0.11.0
* `1.16`: calico 3.9.1, flannel 0.11.0
* `1.17`: calico 3.10.3, flannel 0.11.0

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

* [Node](https://kubernetes.io/docs/reference/access-authn-authz/node/){.external}: Authorize API requests made by kubelets.
* [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/){.external}: Role-based access control is a method of regulating access to computer or network resources based on the roles of individual users within an organization.

Feature gates:

* `TTLAfterFinished`: Allow a TTL controller to clean up resources after they finish execution.

### Kubelet

* `protect-kernel-defaults`: Protect tuned kernel parameters from overriding kubelet default kernel parameter values.

## Reserved resources

Each worker node has 1 GB of RAM and 100 mCPU reserved for Kubernetes components.  
This reserved quotas may evolve in the future, the page will be updated when it does
