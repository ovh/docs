---
title: Premiers pas avec les bases de données Public Cloud (EN)
excerpt: Find out how to set up your managed database service in the OVHcloud Control Panel
slug: getting-started
section: Guides généraux
order: 010
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/getting-started/'
---

**Last updated 1st February 2022**

## Objective

OVHcloud Databases as-a-service (DBaaS) allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance.

**This guide explains how to order a database solution in the OVHcloud Control Panel.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- A [Public Cloud project](https://www.ovhcloud.com/fr-ca/public-cloud/) in your OVHcloud account

## Instructions

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y8Px-NhCRAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Subscribing to the service

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) and switch to the `Public Cloud`{.action} section. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar under **Storage**.

Click on the button `Create a database instance`{.action}. (`Create a service`{.action} if your project already contains databases.)

#### Step 1: Select your database type

Click on the type of database you want to use and then select the version to install from the respective drop-down menu. Click on `Next`{.action} to continue.

![Choose database](images/creation_mongo01.png){.thumbnail}

#### Step 2: Select a solution

In this step, choose an appropriate service plan. You will be able to upgrade the plan after creation.

![Choose plan](images/creation_mongo02.png){.thumbnail}

Please visit the [capabilities page](https://docs.ovh.com/ca/fr/publiccloud/databases/) of your selected database type for detailed information on each plan's properties.

Click on `Next`{.action} to continue.

#### Step 3: Select a location

Choose the geographical region of the data centre in which your database will be hosted.

![Choose region](images/creation_mongo03.png){.thumbnail}

Click on `Next`{.action} to continue.

#### Step 4: Configure database nodes

You can increase the number of nodes and choose the node model in this step. The initial and maximum numbers of nodes depends on the solution chosen in step 2.

![Order nodes](images/creation_mongo04.png){.thumbnail}

Please visit the [capabilities page](https://docs.ovh.com/ca/fr/publiccloud/databases/) of your selected database type for detailed information on the hardware resources and other properties of the database installation.

Take note of the pricing information and click on `Next`{.action} to continue.

#### Step 5: Configure your options

You can name your database in this step and decide to attach a private network.

![Configure options](images/creation_mongo05.png){.thumbnail}

##### **Connecting a private network (optional)**

![Attach network](images/creation_mongo06.png){.thumbnail}

If you already have a private subnet available, check the box **Private** and select it from the drop-down menu. Note that this option might not be available for the selected service type.

You can be forwarded to create a private network or subnet by clicking on the respective links. You will have to start the database order process anew in that case.

Please follow [this guide](https://docs.ovh.com/ca/fr/public-cloud/public-cloud-vrack/) for detailed instructions.

#### Step 6: Summary and confirmation

The final section will display a summary of your order as well as the API equivalent of creating this database instance with the [OVHcloud API](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/).

![Confirm order](images/creation_mongo07.png){.thumbnail}

Within a few minutes your new database service will be deployed. Messages in the OVHcloud Control Panel will inform you when the database is ready to use.

Continue with the [Database Management guide](https://docs.ovh.com/ca/fr/publiccloud/databases/mongodb/managing-service/) to configure your service after installation.

Note that the configuration options might be different, depending on the database type.

> [!warning]
> For security reasons the default network configuration doesn't allow any incoming connections. It is thus critical you [authorise the suitable IP addresses](https://docs.ovh.com/ca/fr/publiccloud/databases/mongodb/managing-service/#configuring-authorised-ips) in order to successfully access your database.

## Go further

[Managing a MongoDB service from the OVHcloud Control Panel](https://docs.ovh.com/ca/fr/publiccloud/databases/mongodb/managing-service/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/ca/fr/public-cloud/public-cloud-vrack/)

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/>.
