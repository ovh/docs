---
title: Deploy an OVF Linux, Windows Server and Windows SQL Server template
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_template'
excerpt: Find out how to deploy a Linux, Windows Server or Windows SQL Server template
updated: 2020-11-18
---

**Last updated 18th November 2020**

## Objective

OVHcloud offers Linux, Windows Server and Windows SQL server templates (in OVF format) that you can deploy directly from your web client (HTML 5).

Windows VMs deployed from a template automatically use the SPLA licences provided by OVHcloud. Deploying a Windows VM will therefore automatically trigger additional billing.

**This guide will show you where you can find the source files, and how to deploy them.**

> [!primary]
> 
> You can find the prices of the images offered by OVHcloud on this [page](https://www.ovhcloud.com/en-ie/managed-bare-metal/options/).
>

## Requirements

- Web client access (HTML5)
- [active Windows licences](/pages/bare_metal_cloud/managed_bare_metal/manager-ovhcloud#windows-licence-tab) (activate via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, in the `Windows licence`{.action} tab for the datacentre)

## Instructions

### Find the URL of the OVF template

In your web browser, go to your Managed Bare Metal homepage, and click on `OVH Templates`{.action}.

![Name of photo](images/gatewayssl.png){.thumbnail}

In the `OVH Templates` screen that opens, you will see the details of the Linux, Windows and SQL templates available. 

Select the template you want. A window will open and offer you the links that you will use to deploy the template, depending on your vSphere version.

![Name of photo](images/copylink.png){.thumbnail}


### Deploy the OVF template

Once you have logged into your vSphere Web Client, go to the `Hosts and clusters`{.action} page, right-click on your datacentre and click `Deploy OVF template...`{.action}:

![Name of photo](images/01selectdeploy.png){.thumbnail}

The context menu will open, and you can start configuring how the template is deployed. The first step is to add the OVH template URL:

![Name of photo](images/02puturl.png){.thumbnail}

In the next step, you can choose the datacentre:

![Name of photo](images/03selectdatacenter.png){.thumbnail}

Now you can choose the cluster in which the virtual machine will be deployed:

![Name of photo](images/04selectcluster.png){.thumbnail}

This page lists all of the template’s details, including its default password. For security reasons, it is important that you change your password as soon as you log in for the first time:

![Name of photo](images/05detailstemplate.png){.thumbnail}

Select the datastore in which the virtual machine will be located, and the format of the disk:

![Name of photo](images/06selectdatastore.png){.thumbnail}

You now need to select the network that will be used. 

![Name of photo](images/07selectnetwork.png){.thumbnail}

The configuration process is nearly complete, and you will see a summary of the configuration requested:

![Name of photo](images/08resume.png){.thumbnail}

When you click on `Finish`{.action}, a task is created, and you can use it to track the progress of the deployment.

![Name of photo](images/09startdeploy.png){.thumbnail}

Once the deployment is complete, you can close this window.

You will now find the new virtual machine in your inventory.

![Name of photo](images/10inventory.png){.thumbnail}

### Finalising Setup for SQL Server

Start your newly deployed virtual machine and open the console.

Log in to Windows and enter your SQL instance name, password and character set in the window provided.

![Name of photo](images/sqlinformations.png){.thumbnail}


> [!primary]
> 
> We recommend setting a password that meets these criteria:
> 
> * Must contain at least eight characters.
> * Must contain at least three types of characters (uppercase, lowercase, numbers, special characters).
> * Not to be taken from the dictionary.
> * Do not include personal information (e.g. your first name, surname or date of birth).
>

Once you have entered this information, click `Ok`{.action}.

A window will open showing the deployment. At the end of the installation, a final window will open, informing you that the deployment has been successful.

Click `OK`{.action} again to complete the installation and restart your virtual machine.

Following this reboot, you can start using your virtual machine.


## Go further

Join our community of users on <https://community.ovh.com/en/>.
