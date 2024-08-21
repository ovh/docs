---
title: "Log in to the vSphere web interface" 
excerpt: "Find out how to log in to your managed vSphere Web interface from the Hosted Private Cloud VMware on OVHcloud control panel" 
updated: 2024-08-21
---

## Objective

**The objective is to show you how to log in to your managed vSphere Web interface from the HPC* VMware on OVHcloud control panel.**

## Requirements

- You must be administrator of the [Hosted Private Cloud](/links/hosted-private-cloud/vmware) infrastructure.
- You need to have added IP addresses in the `Sécurity` section of your [OVHcloud Control Panel](/links/manager). For more information, please read our guide on [Authorizing IPs to connect to vCenter](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter).

To use IAM, you must enable the feature in order to delegate rights management with a role. Please read the guides:

- Guide 1: [IAM for VMware on OVHcloud - Introduction and FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2: [IAM for VMware on OVHcloud - How to enable IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3: [IAM for VMware on OVHcloud - How to create an IAM vSphere role](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)

## Instructions

To log in to the managed vSphere Web interface, you need OVHcloud login credentials. A vSphere user (with a local user), or a vSphere rôle (with IAM).

### Step 1 - User management with vSphere and OVHcloud

#### From the OVHcloud Control Panel

You can manage your login credentials via the OVHcloud Control Panel for your VMware product managed on OVHcloud.

Log in to the [OVHcloud Control Panel](/links/manager) and click on the `Hosted Private Cloud`{.action} tab.

Click on the `VMware`{.action} section, select your infrastructure, then go to the `Users`{.action} tab.

Under the `Manage user permissions in the vSphere client`{.action} section, click `Create a user`{.action} or `Edit`{.action} an existing user.

![Connexion à l'interface vSphere HTML5](/pages/assets/screens/control_panel/product-selection/hosted-private-cloud/vmware/vmware_users.png){.thumbnail}

For your knowledge, if you edit an existing user by clicking on the `...`{.action} button to the right of a user. You can modify the users or the IAM roles, modify the permissions by DC, change the password or delete the users.

![Connexion à l'interface vSphere HTML5](/pages/assets/screens/control_panel/product-selection/hosted-private-cloud/vmware/vmware_user_modification.png){.thumbnail}

#### From the OVHcloud API

You can manage users via the OVHcloud API, within Hosted Private Cloud.

> [!primary] 
> If you are unfamiliar using the OVHcloud API, please refer to our [Getting started guide with OVHcloud APIs](/pages/manage_and_operate/api/first-steps).
>

Here are some examples of API calls:

- Create a user:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/user
>

> **Parameters**:
>
> - `serviceName`: your service in the form of pcc-XX-XX-XX-XX.
> - ` userId`: the name of your user in the form below.
>
> Example:
>
> ```shell
> {
> "name": "User name"
> }
> ```

- Change a user password:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/user/{userId}/changePassword
> 

> **Parameters**:
>
> - `serviceName`: your service in the form of pcc-XX-XX-XX-XX.
> - `userId`: the password of your user in the form below.
>
> Example:
>
> ```shell
> {
> "password": "XXX"
> }
> ```

### Step 2 - Log in to the managed vSphere Web interface

#### From the OVHcloud Control Panel

**Using the HTML5 Web Client**

The HTML5 web client link is available on your Hosted Private Cloud VMware on OVHcloud control panel at this url: <https://pcc-xxx-xxx-xxx-xxx.ovh.xxx/ui> (replace pcc-xxx-xx-xx-xxx.ovh.xxx) with your IP and region.

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_all.png){.thumbnail}

You will then access this Web interface:

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_iam_vs_local.png){.thumbnail}

With an IAM user:

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_iam.png){.thumbnail}

With a local user:

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_local.png){.thumbnail}

On the `Home`{.action} page, you can view your managed vSphere's main menus.

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_pcc_home.png){.thumbnail}

**Glossaire**

- **HPC** : Hosted Private Cloud

## Go further

This VMware document lists the different ports that you must open on your firewall to, for example, [Console access](https://kb.vmware.com/kb/1012382).

If you require training or technical support to implement our solutions, please contact your Technical Account Manager or visit [this page](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
