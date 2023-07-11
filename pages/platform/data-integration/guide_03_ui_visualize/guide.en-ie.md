---
title: Data Integration - UI - Visualize workflows and jobs
excerpt: Learn how to use the Control Panel to visualize your workflows and jobs
updated: 2023-07-11
---

## Objective

This guide covers the usage of the Control Panel to explore the **Data Integration** service.

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).
- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account.

## Instructions

### Access to the Data Integration service

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and switch to the `Public Cloud`{.action} section. After selecting your Public Cloud project, click on `Data Integration`{.action} in the left-hand navigation bar under **Data & Analytics**.

![image](images/01_menu.png){.thumbnail}

If your project does not yet contain any `workflow` you will be greated with the following page:

![image](images/02_empty_status.png){.thumbnail}

Click on the `Explore your data integrations` button.

### Command Line Interface

The Command Line Interface page describes how to download and setup the `ovhdata-cli`:

![image](images/03_cli.png){.thumbnail}

For more information please read the [CLI installation guide](/pages/platform/data-integration/guide_01_cli_installation).

### Dashboard

If your project does not yet contain any `workflow` the following page will be displayed:

![image](images/04_no_workflow.png){.thumbnail}

Please read the [CLI commands reference guide](/pages/platform/data-integration/guide_02_cli_commands_reference) to help you create your first workflow:

![image](images/05_workflow_ready.png){.thumbnail}

By clicking on the workflow you will be able to see the associated jobs:

![image](images/06_job_provisioning.png){.thumbnail}

When the job is finished the table is updated to display additional information:

![image](images/07_job_done.png){.thumbnail}

## We want your feedback!

Visit our [Discord server](https://discord.gg/ovhcloud). Ask questions, provide feedback and interact directly with the team that builds the Data Integration service.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ie/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
