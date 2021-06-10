---
title: Getting started with Web PaaS
excerpt: Find out how to set up your Web PaaS solution in the OVHcloud Control Panel
slug: web-paas-manager-setup
section: Getting started
order: 1
---

**Last updated 28th May 2021**

## Objective

OVHcloud Web PaaS powered by Platform.sh enables web developers to manage, develop and deploy applications by offering a centralised collaborative solution with numerous integrated features.

**This guide explains how to order and preconfigure your Web PaaS solution in the OVHcloud Control Panel.**

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- visiting the [product page](https://www.ovhcloud.com/en-gb/web-paas/) to decide which plan is suitable for your project's requirements

## Instructions

### Subscribing to the service

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Web Cloud`{.action} in the top navigation bar.

Select `Web PaaS`{.action} in the services bar on the left-hand side, then click on the button `New project`{.action}.

![order service](images/creation_manager01.png){.thumbnail}

#### Step 1: Name your project

Give your project a name and click on `Next`{.action}.

#### Step 2: Choose a plan

Select a plan that best suits your needs after verifying the details and capabilities on the [product page](https://www.ovhcloud.com/en-gb/web-paas/). If necessary, increase the number of vCPUs in the drop-down menu of the chosen solution.

You can upgrade or downgrade the project later in the Control Panel. Note that a downgrade to the `Start`{.action} plan will not be possible after creating the project.

![choose plan](images/creation_manager02.png){.thumbnail}

#### Step 3: Select the region

Choose the geographical region of the data centre in which your project will be hosted.

![project details](images/creation_manager03.png){.thumbnail}
 
#### Step 4: Select the project type

- If the project relies on your own pre-existing code, you will be able to import it: click on `Create your template`{.action} and continue with `Next`{.action}.

- If you click on `Select an existing template`{.action}, the list of available templates will be displayed along with their properties. You can check the [product page FAQ](https://www.ovhcloud.com/en-gb/web-paas/) to find out which templates are included in the respective plan. Select one and click on `Next`{.action}.

![project type](images/creation_manager04.png){.thumbnail}

#### Step 5: Configure your project

In this step you can choose additional resources for the project, according to the plan you have selected. Please refer to our [product page](https://www.ovhcloud.com/en-gb/web-paas/) for details about the available **Environments**, **Storage**, and **User licenses** for each plan.

![configure details](images/creation_manager05.png){.thumbnail}

Note that it will not be possible to downgrade **Storage** after it has been increased.

#### Step 6: Proceed to complete your order

Finally, review the order summary and click on `Create project`{.action} to confirm. This will initiate the payment process.

> [!primary]
> You can order the service from the [product page](https://www.ovhcloud.com/en-gb/web-paas/) as well.
>
> Each project requires a separate service subscription. In order to add a project, simply repeat the steps above.

After the payment is completed, the project will be deployed and you will be able to log in to the Management Console from the OVHcloud Control Panel.

### Step 7: Check the deployment of your project in the Management Console

On your project's `General information` page, click on `Access project`{.action} in the **Management interface** section. 

![console project](images/manage_console01.png){.thumbnail}

You will be redirected to the `OVERVIEW` tab of the Web PaaS Management Console. Here you can follow the configuration wizard to guide you through the first steps with your project. The project is ready when the status is set to `Active` on the Master environment.

![console project](images/manage_console02.png){.thumbnail}

The "Go further" section below contains links to some useful guides for the next steps.


## Go further

[Using SSH](../development-ssh/)

[Configuring the CLI](../development-cli/)

[Using YAML](../configuration-yaml/)

[Managing Web PaaS from the OVHcloud Control Panel](../web-paas-managing-service/)

Join our community of users on <https://community.ovh.com/en/>.
