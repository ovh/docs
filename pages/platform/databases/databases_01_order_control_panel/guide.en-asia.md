---
title: Getting started with Public Cloud Databases
excerpt: Find out how to set up your managed database service in the OVHcloud Control Panel
slug: getting-started
section: General guides
order: 010
updated: 2023-04-27
---

**Last updated April 27th, 2023**

## Objective

OVHcloud Databases as-a-service (DBaaS) allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance.

**This guide explains how to order a database solution in the OVHcloud Control Panel.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- A [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account

## Instructions

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) and switch to the `Public Cloud`{.action} section. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar under **Storage**.

Click on the button `Create a database instance`{.action}. (`Create a service`{.action} if your project already contains databases.)

### Step 1: Select your database type

Click on the type of database you want to use and then select the version to install from the respective drop-down menu.

![Choose database](images/databases_01_order_control_panel-20230414145850.png){.thumbnail}

### Step 2: Select a solution

In this step, choose an appropriate service plan. You will be able to upgrade the plan after creation.

![Choose plan](images/databases_01_order_control_panel-20230414150215.png){.thumbnail}

Please visit the [capabilities page](https://docs.ovh.com/asia/en/publiccloud/databases/) of your selected database type for detailed information on each plan's properties.

### Step 3: Select a location

Choose the geographical region of the data centre in which your database will be hosted.

![Choose region](images/databases_01_order_control_panel-20230414150326.png){.thumbnail}

### Step 4: Configure database nodes

You can choose the node template in this step.

![Order nodes](images/databases_01_order_control_panel-20230414150805.png){.thumbnail}

Please visit the [capabilities page](https://docs.ovh.com/asia/en/publiccloud/databases/) of your selected database type for detailed information on the hardware resources and other properties of the database installation.

Take note of the pricing information.

### Step 5: Sizing

Additional storage can be ordered and, depending on the engine, the number of nodes in your cluster can be adjusted:

![Sizing](images/databases_01_order_control_panel-20230414151211.png){.thumbnail}

### Step 6: Configure your options

Define your network configuration:

![Configure options](images/databases_01_order_control_panel-20230414151536.png){.thumbnail}

#### Connecting a private network (optional)

![Attach network](images/databases_01_order_control_panel-20230414152851.png){.thumbnail}

If you already have a private subnet available, check the box **Private** and select it from the drop-down menu. Note that this option might not be available for the selected service type.

You can be forwarded to create a private network or subnet by clicking on the respective links. You will have to start the database order process anew in that case.

Please follow [this guide](https://docs.ovh.com/asia/en/public-cloud/public-cloud-vrack/) for detailed instructions.

### Step 7: Summary and confirmation

The final section will display a summary of your order as well as the API equivalent of creating this database instance with the [OVHcloud API](https://docs.ovh.com/asia/en/api/first-steps-with-ovh-api/).

![Confirm order](images/databases_01_order_control_panel-20230414153010.png){.thumbnail}

Within a few minutes your new database service will be deployed. Messages in the OVHcloud Control Panel will inform you when the database is ready to use.

Continue with the *Configure your instance to accept incoming connections* guide of your selected database type available [here](https://docs.ovh.com/asia/en/publiccloud/databases/) to configure your service after installation.

Note that the configuration options might be different, depending on the database type. You will find example on this repository: <https://github.com/ovh/public-cloud-databases-examples>.

## We want your feedback!

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/asia/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
