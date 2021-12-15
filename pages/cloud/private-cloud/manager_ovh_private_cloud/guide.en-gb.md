---
title: Introduction to the Hosted Private Cloud Control Panel
slug: control-panel-ovh-private-cloud
excerpt: Find out how to use the OVHcloud Hosted Private Cloud Control Panel
section: Getting started
order: 1
---

**Last updated 15th December 2021**

## Objective


The OVHcloud Hosted Private Cloud Control Panel enables you to easily manage your Hosted Private Cloud infrastructure.

**This guide explains the management options available.**


## Requirements


- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)


## Instructions


### Interface Access


Navigate to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and log on with your administrative credentials.

![LOGIN](images/en01ogin.png){.thumbnail}


### Hosted Private Cloud View


Go to the "Hosted Private Cloud" section and select your service under `Private Cloud`{.action} in the left-hand navigation bar. You can rename your infrastructure by clicking the ![Pen](images/buttonpen.png){.thumbnail} in the center of the page.

![HOSTED](images/en02dashboard.png){.thumbnail}


#### General Information


The General Information tab gives you an overview of your services.

- The "Description" field is editable through the ![Dots](images/buttondots.png){.thumbnail} button
- The "Software solution" shows the vCSA version used
- The "Location" of your Private Cloud
- The "Access policy" of your infrastructure (`Open` or `Restricted`) 
- The "Number of datacenters" in your infrastructure
- The "Number of IP blocks" you own and the option to order more through the ![Dots](images/buttondots.png){.thumbnail} button 
- Links to your management interfaces
- Your "Options and compliance" tab shows your enabled and disabled options with direct access to modification though the ![Dots](images/buttondots.png){.thumbnail} button
- The "Mailing list" section allows you to sign up to the OVHcloud Hosted Private Cloud mailing list
- The "Renewal" date section also allows for license ordering or service cancellation through the ![Dots](images/buttondots.png){.thumbnail} button

![GENERAL](images/en03general.png){.thumbnail}


#### Datacenters


The Datacenters tab shows your current virtual datacenters and offers a button to add more as you need.<br>
The [Datacenter view](./#datacenter-view) will give you more details and options. 

![DATACENTERS](images/en04datacenters.png){.thumbnail}


#### Users

The Users tab lists all the accounts who can log in to vSphere and allows the creation of new ones.

![USERS](images/en05users.png){.thumbnail}


You have several options when you click on the ![Dots](images/buttondots.png){.thumbnail} button next to a user
- Edit the entries in the summary table
- See/Change the user's rights for each Datacenter
- Change the user's password
- Delete the user

Clicking `See/Change the rights for each DC`{.action} will take you to the rights management window.

![RIGHTS](images/en06rights.png){.thumbnail}


Click ![Dots](images/buttondots.png){.thumbnail} and then `Modify rights`{.action} to edit those.

- **vSphere access**: to set the global rights for a user in vSphere

|Right|Description|
|---|---|
|Provider|reserved for OVHcloud administrators|
|None|no access|
|Read-only|read access only|
|Read/Write|read and write access|

- **Access to the VM Network**: concerns management rights over the public network section (a.k.a "VM Network" in the vSphere interface)

|Right|Description|
|---|---|
|Provider|allows VMs to be configured on a public network|
|None|no access|
|Read-only|read access only|

- **Access to the V(X)LANs**: concerns management rights over the private network section (VXLAN for Dedicated Cloud and VLAN for SDDC)

|Right|Description|
|---|---|
|Provider|allows VMs to be configured on a private network|
|Administrator|allows port groups to be managed on the virtual switch (creation, modification, deletion), for SDDCs only|
|None|no access|
|Read-only|read access only|

- **Add resources**: gives the right to add additional resources through the OVHcloud plugin in the vSphere client

![RIGHTS](images/en07editrights.png){.thumbnail}


#### Security

The Security tab allows for management of vCenter access policy.<br>
You can configure options settings with the buttons on the right.

![SECURITY](images/en08security.png){.thumbnail}


> [!warning]
>
>  If you set the access policy to "Restricted" and do not enter any IP addresses, no user will be able to connect to the vSphere client. However, virtual machines will remain accessible.
> 

At the bottom of the page, you can also add or see you Key Management Servers.<br>
Check out the [Enabling Virtual Machine Encryption](https://docs.ovh.com/gb/en/private-cloud/vm-encrypt/) guide for more details.

![KMS](images/en09kms.png){.thumbnail}


#### Operations

The Operations tab keeps a log of all tasks executed on your infrastructure.<br>
You can sort the list by types and if the tasks are acctionable, you'll have options available through the ![Dots](images/buttondots.png){.thumbnail} button.

![OPS](images/en10ops.png){.thumbnail}


> [!primary]
>
> If your access to the vSphere client is denied, a scheduled maintenance may be in progress. Check this tab first before taking further measures.
>


#### Windows Licence

The Windows license tab shows your Windows SPLA licence status.<br>
More information on the [pricing page](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/images-licenses/).

![SPLA](images/en11spla.png){.thumbnail}


### Datacenter View 

A Hosted Private Cloud may include multiple virtual datacenters. The left-hand navigation bar will list them when you select a Hosted Public Cloud service. Click on one to open its management page.

![DATACENTER](images/en12datacenter.png){.thumbnail}

You can customise the name of your data centre by clicking on the pencil icon. Below, you can add a description.

#### General information tab

The first page contains some information about your data centre, its range, and the number of hosts and datastores. Multiple data centres can be leveraged in a single Hosted Private Cloud infrastructure with the Dedicated Cloud and Software Defined Datacenter ranges.

#### Hosts tab

This tab lists the hosts of the selected data centre.

![Hosts](images/controlpanel12.png){.thumbnail}

You can find here:

- the names of the hosts
- their profiles (M, L, L+...)
- the billing mode (switchable via the button on the right, if the billing mode is set to hourly)
- the host status
- the usage in hours (if the billing mode is set to hourly)

You can also order a new host from here by clicking on the button on the left.


#### Datastores tab

The tab for your datastores looks similar to the previous one.

![Datastores](images/controlpanel13.png){.thumbnail}

You can find here:

- the names of the datastores
- their profiles
- the hardware type (hybrid or full SSD)
- the size
- the billing mode
- their status, indicating whether a datastore is correctly installed
- the usage in hours (for hourly-billed resources only)

You can also order a new host from here by clicking on the button on the left (monthly payment).


#### Backup tab

From this tab, you can order a Veeam Backup solution.

![Backup](images/controlpanel14.png){.thumbnail}

You can find more details about this option in [this guide](../veeam-backup-as-a-service/).


## Go further

Join our community of users on <https://community.ovh.com/en/>.
