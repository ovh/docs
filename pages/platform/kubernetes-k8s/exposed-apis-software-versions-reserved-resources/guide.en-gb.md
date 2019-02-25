---
title: Exposed APIs, software versions and reserved resources
excerpt: ''
slug: exposed-apis-software-versions-reserved-resources
section: Technical resources
---

**Last updated 25th February, 2019.**

We list here some details on the APIs we expose, the software versions we use and the resources we reserve on each node.


## OVH APIs 

We have added a [Kubernetes section](https://api.ovh.com/console/#/kube) to the [OVH API](https://api.ovh.com/). Using it you will be able to add and remove nodes, update and reset your clusters or getting `kubectl` configuration.

> [!primary]
> If you have never used the OVH API, you can see the basis on [First steps with the OVH API](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/).


## Kubernetes versions

Currently we support both Kubernetes 1.11 and 1.12.

By default, new clusters are generated on Kubernetes 1.12, but you can switch to Kubernetes 1.11 using the [OVH Cloud Manager](https://www.ovh.com/manager/cloud/).

We will closely follow the Kubernetes releases, and new versions will be regularly available.


## Reserved resources

Each worker node has 1 GB of RAM and 100 mCPU reserved for Kubernetes components. 

This reserved quotas may evolve in the future, the page will be updated when it does