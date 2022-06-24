---
title: Technical capabilities and limitations (FAQ)
slug: technical-capabilities
excerpt: Learn the technical capabilities and limitations of Hosted Private Cloud powered by Anthos
section: Getting started
order: 1
---

**Last updated 16th February 2022**

## Objective

This page provides an overview of the technical capabilities and limitations of OVHcloud Hosted Private Cloud powered by Anthos.

### Limitations at launch

- The Dedicated NetApp console is not yet available.

### Technical capabilities and known limits

- **Public network**: Each service is delivered with a block of 50 usable IPv4 addresses. Additional IP addresses can be ordered in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) (256 maximum per service).

- **User cluster capacity**: The production packs include 15 bare metal nodes which can be used for your Kubernetes clusters and containers. Additional bare metal nodes can be added in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). The OVHcloud Hosted Private Cloud powered by Anthos solution can handle multiple Kubernetes clusters, with a total of 100 bare metal nodes running 100 pods each. (Please contact your OVHcloud sales representative if your needs exceed these thresholds.)

- **Persistent storage**: With the included Dedicated NetApp storage (powered by ONTAP), each deployment can support up to 1000 Storage Virtual Machines (SVM) and a total of 2000 volumes per NetApp instance. (Please contact your OVHcloud sales representative if you require storage beyond these limits.) NetApp is only available with the Stateful Production Pack.

- **vRack compatibility**: At first, it will not be possible to connect an Hosted Private Cloud powered by Anthos deployment to an existing vRack. (This option will be added at a later stage.) You can however move existing services to the vRack delivered with your Hosted Private Cloud powered by Anthos.

> [!primary]
> Please also refer to our [product page](https://www.ovhcloud.com/en-gb/hosted-private-cloud/anthos/) to learn the technical details and specifications of the service.
>

### Technical FAQ regarding the service

> [!faq]
>
> What is the main characteristic of OVHcloud Hosted Private Cloud powered by Anthos?
>> Customers can count on a fully isolated and self-managed deployment of Anthos ("Anthos on bare metal, operating in Private Mode"), with OVHcloud as the infrastructure provider.
>
> Will there be additional features for the Hosted Private Cloud powered by Anthos solution?
>> Additional features are on the roadmap for 2022, such as service availability in more data centres, Cloud Run for Anthos, Migrate for Anthos, PCI DSS and SecNumCloud certifications.
>
> How is licensing managed?
>> All necessary Anthos licences are managed on the part of OVHcloud. Costs are already included in the pricing.
>
> How will Anthos software updates be implemented?
>> OVHcloud Hosted Private Cloud powered by Anthos will receive all pertinent component updates. Customers will have control over the updating process (whitelisting updates, rollback).
>
> Will a Marketplace feature be available?
>> An OVHcloud equivalent of Marketplace is planned for 2022.

## Go further

[Getting started with Hosted Private Cloud powered by Anthos](../control-panel-first-steps/)

Join our community of users on <https://community.ovh.com/en/>.