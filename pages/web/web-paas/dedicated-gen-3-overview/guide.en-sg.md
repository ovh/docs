---
title: Dedicated Generation 3
slug: dedicated-gen-3-overview
section: Dedicated-Gen-3
---

**Last updated 7th January 2022**


## Objective  

Dedicated Generation 3 provides a scalable solution as an additional option on top of your existing Grid applications.
It provides redundant configuration with a minimum of three Virtual Machine instances. 
Every service is replicated across all three virtual machines in a failover configuration (as opposed to sharding, allowing a site to remain up even if one of the VMs is lost entirely.

Projects will often require a Dedicated production cluster when they require high availability, or they need more resources than normally offered by Web PaaS plans. 
Data location requirements is also common in choosing a Dedicated cluster, such as the need to deploy to a location Web PaaS does not currently have a region, or simply that production data cannot be kept on shared infrastructure.

Dedicated Generation 3 works nearly identically to Web PaaS environments, and does not require additional configuration on your part. The only difference is that of service availability.

> [!primary]  
> 
> Dedicated Generation 3 is not [PCI](../security/pci.md) compliant.
> For a PCI-compliant option, use a [previous-generation Dedicated Cluster](../dedicated/overview/_index.md).
> 
> 

## Why a Generation 3?

Our existing [dedicated infrastructure](/dedicated/overview) ensures increased uptime and availability for your applications and services, but configuration or application topology changes have to go through our Customer Success team, as the VMs are provisioned by us. Generation 3 gives you both the high availability from our Dedicated offer combined with the self-service flexibility and features of Web PaaS Professional. 

This means that you are able to edit your configuration yourself - in your `services.yaml`, `routes.yaml`, and `.platform.app.yaml` files - and then see those changes reflected in your Dedicated Generation 3 environments on every push without opening a ticket. 

## Features

* A minimum of three virtual machine cluster is associated with your default (production) environment, and also optionally with a staging environment. 
* Configuration changes on development environments (through your `services.yaml`, `routes.yaml`, and `.platform.app.yaml` files) are reflected on these Dedicated Gen 3 clusters when you merge them. It is not necessary to open a support ticket to change production infrastructure like it is on Dedicated. 
* You can deploy your application in any of our [supported cloud providers](../development-faq#which-geographic-zones-does-platformsh-cover).

## Differences from the Grid

Although Dedication Generation 3 adds plenty of features to your existing Grid applications, there are a few differences and limitations to be aware of when considering an upgrade. 

### Available services

In our [services documentation](/configuration/services) you will notice that not every service is available on Dedicated Generation 3 that is available on the Grid, nor is every version. The table below shows the currently available services and their versions for Dedicated Generation 3. 

{{< gen-3-services >}}

### Local mounts

Because you get a redundant infrastructure, note that local mounts will be local to each Virtual Machine. Since you can't know which VM is going to handle a specific request, you also don't have a guarantee regarding which local mount is going to be used. Whether you actually want to use a local mount or in fact need to set up a network storage mount depends on your specific use-case.

## Setting up

If you are interested in Web PaaS's data cloning, environment control and infrastructure-as-code philisophy across our supported runtimes and services, but you also need a large amount of resources and data isolation, you can [contact us](https://platform.sh/contact) to start setting up a Dedicated Generation 3 project.

At this time, existing Web PaaS Professional projects cannot be migrated to Dedicated Generation 3, but they soon will be. Migrations will then require contacting our sales team, at which point your infrastructure will be reviewed for compatibility and pricing. After that, your existing project settings will be modified to set up a production environment using Dedicated Generation 3. 

At the moment, Dedicated projects cannot be migrated to Dedicated Generation 3, but support for this type of migration will soon be available. 
