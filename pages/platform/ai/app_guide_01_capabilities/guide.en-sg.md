---
title: AI Apps - Capabilities and limitations
slug: apps/capabilities
excerpt: Discover the capabilities and limitations of AI Apps
section: AI Apps guides
order: 01
---

**Last updated January 10<sup>th</sup>, 2022**

## Objective

This page provides the technical capabilities and limitations of the Public Cloud AI Apps offer.
We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## ALPHA phase

Please note that the AI Apps offer is currently in ALPHA Phase, meaning:

- the service is free during ALPHA phase.
- the service is not ready for production.
- there is no official support.
- there are no contractual agreements (SLA).
- the General Availability is uncertain.
- some features are under development. Please check the roadmap link above to follow progress.

## Capabilities and limitations

### Supported regions and multi-AZ deployments

The AI Apps offer is available for any OVHcloud account, whatever the country, and physically deployed in the following regions:

- `BHS` (Beauharnois, Canada)
- `GRA` (Gravelines, France)

Entire AI Apps instances have to be in the same region. Multi-AZ is currently not supported.

### Attached resources

#### Compute resources

You can either choose the number of GPU or CPU for an AI App, not both.
By default, a job uses one CPU instance.

If you choose GPU:

- You can go from 1 to 4 GPU per instance.
- You can go from 1 to 10 instances.
- CPU, memory and local storage resources are not customizable but scaled linearly with each additional GPU.

If you choose CPU:

- You can go from 1 to 12 vCPU.
- You can go from 1 to 10 instances.
- Memory and local storage resource is not customizable but scaled linearly with each additional CPU.

Information about maximum number of CPU/GPU, memory per CPU/GPU, and local storage are available with the `ovhai` CLI or OVHcloud Public Cloud price page.

```console
ovhai capability
```

#### Local storage

Local storage is ephemeral.
Local storage depends on the selected instances during AI App deployment. Please refer to the compute resources section for more information.

#### Attached storage

You can attach data volumes from Public Cloud Object Storage. Object Storage bucked should be in the same region as your AI App.
Attached storage allows you to work on several TB of data, while being persistent when you delete your AI App.

### Features and known limits

#### Authorized AI Apps

AI Apps authorize the deployment of your own Docker images or applications from the OVHcloud catalog.

Docker images can be hosted in a public or private registry.

#### Maximum execution time

There is no duration limitation on AI App execution.

#### High-availability

Your application is deployed simultaneously on the amount of selected instances.
To benefit from high-availability, a minimum of two instances is required. In case of instance failure, a new one is automatically created.

#### Network

**Public networking** can be used for all of the offers.

**Private networking (vRack)** is not supported.

**Ports**: you can map your AI App to only one port. Default port is 8080.

**Ingress and Egress traffic** are included in the service plans and not metered.

#### Backups

We do not back up your AI Apps yet.

#### Logs and metrics

We do not provide logs yet.
We do not provide metrics yet.

#### Security 

A security rule is selected during the AI App deployment process.

You can either select **Public Access**, allowing anyone to access your application, or **Restricted Access*, via security tokens.

#### API management

API endpoints to manage your AI Apps can be found here:

- EU: <https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ai/app#GET>
- CA: <https://ca.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ai/app#GET>


#### Command line interface (CLI)

AI Apps is compliant with the OVHcloud AI CLI. Discover how to [install the OVHcloud AI CLI](https://docs.ovh.com/sg/en/publiccloud/ai/cli/install-client/){.external}.

## Going further

Browse the full [AI Apps documentation](https://docs.ovh.com/sg/en/publiccloud/ai/) to further understand the main concepts and get started.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/KbrKSEettv> and interact directly with the team that builds our AI services!
