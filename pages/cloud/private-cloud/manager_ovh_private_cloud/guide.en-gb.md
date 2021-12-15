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


### Hosted Private Cloud

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


### Datacenters

On this tab, you will find a brief summary of virtual data centres in your offer.

![Data centre](images/controlpanel5.png){.thumbnail}

Please refer to the [data centre view section](./#data-centre-view) below for more information.

> [!primary]
>
> You can add another data centre from this page, this will not incur any additional charges.
> 

### Users tab

All users who can log in to vSphere are listed in this section:

![Users](images/controlpanel6.png){.thumbnail}

You can create a user by clicking on the `Create User`{.action} button.

For each user, their general information and the rights granted to them are specified in the table:

- the user ID
- the first name (optional)
- the last name (optional)
- the email address (optional)
- the phone number (optional)
- the right *token validator*, which allows to validate sensitive operations on a Hosted Private Cloud with the options HDS or PCI-DSS
- the right *IP*, which allows access with the OVHcloud Network plugin
- the right *Failover IP*, which allows to manage Failover IPs on the Hosted Private Cloud
- the right *NSX Interface*, which allows access to the NSX interface if this option is activated on your Private Cloud
- the *Diagnosis* status, informing you whether this user is actually enabled

You have several options when you click on the `...`{.action} button next to a user:

- editing the entries in this table (changing the rights listed above, adding an email address, adding a phone number)
- viewing and modifying this user's rights per data centre
- changing this user's password
- deleting this user

Following are detailed listings of the available user rights by data centre.

![User rights per data centre](images/controlpanel7.png){.thumbnail}

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


### Security tab

The vCenter access policy can be managed in this tab.

![Security settings](images/controlpanel8.png){.thumbnail}

You can configure security settings with the buttons on the right:

- Set the timeout for a login session.
- Specify the number of concurrent connections allowed.
- Change the access policy to "Restricted" or "Open", with permission by source IP. IP addresses are being managed in the table in this tab (`...`{.action} button).

> [!warning]
>
>  If you set the access policy to "Restricted" and do not enter any IP addresses, no user will be able to connect to the vSphere client. However, virtual machines will remain accessible.
> 

- The disconnection policy decides whether to disconnect the first or last logged-in user if the limit is reached. For example, if 50 users are logged in, and a 51st user logs in, the first (or last) user to log in will be disconnected.

The second table at the bottom of the page concerns the management of Virtual Machine Encryption Key Management Servers.

You can find more details about this option in [this guide](../vm-encrypt/).

### Operations tab

This tab shows the history of tasks executed on your Hosted Private Cloud service.

![Operations](images/controlpanel9.png){.thumbnail}

The list provides details on each task, so you can verify if an operation is in error, if a scheduled maintenance is ongoing, and more. You can change the date of a maintenance by clicking on `...`{.action}.

> [!primary]
>
> If your access to the vSphere client is denied, a scheduled maintenance may be in progress. Check this tab first before taking further measures.
>


### Windows Licence tab

This tab allows you to activate Windows SPLA licences for your data centre by clicking on the button.

![Windows SPLA Licence](images/controlpanel10.png){.thumbnail}

You can find more information on the [pricing page](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/images-licenses/).


### Data centre view 

A Hosted Private Cloud may include multiple virtual data centres. The left-hand navigation bar will list them when you select a Hosted Public Cloud service. Click on a data centre to open its dedicated management page.

![Data centre view ](images/controlpanel11.png){.thumbnail}

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
