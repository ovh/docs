---
title: MongoDB Discovery - Getting started
excerpt: Get started with MongoDB Free Tier through the OVHcloud Control Panel
updated: 2024-02-05
---

## Objective

**This guide will take you through the first steps of creating and connecting to a forever-free MongoDB Discovery managed cloud database service.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/yVUqdhe71Ps?si=ADCQJyVFBhed3_Ms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- A [Public Cloud project](https://www.ovhcloud.com/es/public-cloud/) in your OVHcloud account

## Instructions

Log in to your [OVHcloud Control Panel](/links/manager) and switch to the `Public Cloud`{.action} section. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar under **Databases & Analytics**.

Click the `Create a database instance`{.action} button (click `Create a service`{.action} if your project already contains databases).

### Select the database type

Between all database engines, select **MongoDB**. You can choose to change the version to install from the drop-down menu.

### Review the order

The **Discovery** plan is selected by default along with the following options:

- The region is set to `Gravelines (GRA)`.
- The node type is set to `db2-free` (with a 512 MB storage).
- The number of nodes is set to `3`.
- The network type is `Public (internet)`.

> [!primary]
>
> The **Discovery** plan will let you start with MongoDB for **free** with limited settings options and storage.
>

Review the service settings and click on the `Order`{.action} button.

Within a few minutes your **Discovery** MongoDB service will be deployed.

### Connectivity settings

Once the service is up and running you will be able to configure it to accept incoming connections. A [dedicated guide](/pages/public_cloud/public_cloud_databases/mongodb_02_manage_control_panel) is available to help you configure your service after installation.

### Testing the service

When the service is running and accepting incoming connections, the next step is to access the service. The common way to do so is to use **MongoDB Compass** to connect to the service, following [this guide](/pages/public_cloud/public_cloud_databases/mongodb_07_connect_compass).

If **MongoDB Compass** is not your preferred method, read these other guides to connect to the service :

- [Connect with CLI](/pages/public_cloud/public_cloud_databases/mongodb_03_connect_cli)
- [Connect with Python](/pages/public_cloud/public_cloud_databases/mongodb_05_connect_python)
- [Connect with PHP](/pages/public_cloud/public_cloud_databases/mongodb_04_connect_php)

Other integration examples can be found on the following repository: <https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/mongodb>.

## We want your feedback!

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.