---
title: How to create a Public Cloud instance and connect to it
excerpt: Find out how to configure Public Cloud instances in the OVHcloud Control Panel and the first steps with your instances
updated: 2024-10-07
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

Public Cloud instances are easy to deploy and manage. However, being part of the OVHcloud Public Cloud ecosystem, instances offer many configuration options and can be adjusted to different use cases. The following instructions include all the necessary and optional steps to create an instance in the OVHcloud Control Panel and access it remotely.  
You can then go further with your Public Cloud project according to your needs.

**This guide explains how to get started with a Public Cloud instance.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/s-_nstgu8oc?si=KWVlSCO3oAPMhSZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

> [!success]
> Take advantage of reduced prices by committing to a period of 1 to 36 months on your Public Cloud resources. More information on our [Savings Plans](/links/public-cloud/savings-plan) page.

## Instructions

> [!primary]
>
> If you have not created a Public Cloud project yet, start with our [guide on how to create a project](/pages/public_cloud/compute/create_a_public_cloud_project).
> 
> Important **technical details** about the OVHcloud Public Cloud are available on [this guide page](/pages/public_cloud/compute/00-essential-info-to-get-started-on-public-cloud).
> 

### Content overview

- [**1** Creating SSH keys](#create-ssh)
- [**2** Importing SSH keys](#import-ssh)
- [**3** Preparing the network configuration](#network)
- [**4** Creating the instance](#create-instance)
    - [**4.1** Selecting an instance model](#model)
    - [**4.2** Selecting a region](#region)
    - [**4.3** Selecting an image](#image)
    - [**4.4** Configuring your instance](#configuration)
    - [**4.5** Configuring your network](#network)
    - [**4.6** Selecting a billing period](#billing)
- [**5** Connecting to the instance](#connect-instance)
    - [**5.1** Verifying the instance installation in the OVHcloud Control Panel](#verify-status)
    - [**5.2** First login on an instance with a GNU/Linux OS installed](#login-linux)
    - [**5.3** Windows instances](#windows)
        - [**5.3.1** Finishing the installation of a Windows instance](#windows)
        - [**5.3.2** Logging in remotely from Windows](#login-windows)
        - [**5.3.3** Logging in remotely from another OS](#login-other)
    - [**5.4** VNC console access](#vnc-console)
- [**6** First steps on a new instance](#manage-access)
    - [**6.1** User management](#user-mgmt)
        - [**6.1.1** Setting a password for the current user account](#set-password)
        - [**6.1.2** Enabling remote logins via password](#remote-password)
    - [**6.2** Additional SSH keys](#add-keys)


> [!primary]
>
> **You need to provide a public SSH key when creating Public Cloud instances in the OVHcloud Control Panel.** After the instance is created you can configure your remote access at your own discretion.
>
> **Exception**: Login authentication on Windows instances requires username and password because Windows uses RDP (**R**emote **D**esktop **P**rotocol).
> 

<a name="create-ssh"></a>

### Step 1: Create an SSH key set

If you already have an SSH key pair ready to use, you can skip this step.

The [SSH protocol](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) enables encrypted client-server communication. An **SSH key pair** consists of a public key and a private key.

- The **public key** is added to your Public Cloud instance (and can also be [stored in the OVHcloud Control Panel](#import-ssh)).
- The **private key** is stored on your local device and must be secured from unauthorized access. Only client devices with the matching private key can access your instance. A user account password is not required to connect.

You have 2 options to create and manage your SSH keys:

- Command line interface of your OS (basic **Open SSH** client)
- Additional software (compatible with the **Open SSH** protocol) with a command line or graphical interface

Most contemporary desktop operating systems natively include the **Open SSH** client which can be accessed through the system's command line application (`cmd`, `Powershell`, `Terminal`, etc.). If you are not familiar with using SSH keys as an authentication method, you can use the instructions in [this guide](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) to get started and create your key pair.

If you use an alternative software, refer to its user documentation. Instructions for the open-source solution `PuTTY` are available in [this guide](/pages/public_cloud/compute/creating-ssh-keys-pci#useputty).


<a name="import-ssh"></a>

### Step 2: Import SSH keys

You can store your public SSH keys in the `Public Cloud`{.action} section of the [OVHcloud Control Panel](/links/manager). This is not mandatory but makes the instance creation process more convenient.

> [!primary]
>
> Stored SSH keys help you to create your instances faster in the OVHcloud Control Panel. To change key pairs and add users once an instance is created, please refer to the guide on [additional SSH keys](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Public SSH keys added to your OVHcloud Control Panel will be available for Public Cloud services of all [regions](/links/public-cloud/regions-pci). You can store keys encrypted with **RSA**, **ECDSA** and **ED25519**.
>

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Open `SSH Keys`{.action} in the left-hand menu under **Project Management**. Click on the button `Add an SSH key`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

In the new window, enter a name for the key. Fill in the `Key` field with your public key string, for example the one created in [Step 1](#create-ssh). Confirm by clicking `Add`{.action}.

![add key](images/24-addkey.png){.thumbnail}

You can now select this key in [Step 4](#create-instance) to add it to a new instance.

<a name="network"></a>

### Step 3: Prepare the network configuration

Before creating your instance, we recommend to consider the way the instance will be used in terms of networking.

- If you do not need to configure the instance with a private network at this time, you can proceed with [step 4](#create-instance). You can create an instance exposed to the public internet. (See **Public Mode** [below](#networking-modes).)
- If the instance needs to be connected to a new private network (OVHcloud [vRack](/links/network/vrack)), **create your vRack first** before continuing. You can find the details in the [Public Cloud vRack guide](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modes

**Public Mode**

Instances in Public Mode are exposed to the public internet directly via IPv4/IPv6. IP addresses cannot be modified but instances can have [Additional IP](/links/network/additional-ip) addresses attached ([including your own](/links/network/byoip)) and they can be connected to a [vRack](/links/network/vrack).

**Private Mode**

Instances in Private Mode can only be exposed to the public internet via a [Gateway](/links/public-cloud/gateway) or a [Load Balancer](/links/public-cloud/load-balancer) service and [Floating IP](/links/public-cloud/floating-ip) addresses.

For more information, please consult our guides in the [Public Cloud Network Services](/products/public-cloud-network) section. The [Concepts guide](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) provides an introduction to Public Cloud Networking.

**Local Private Mode**
 
Local Private Mode only applies if you create an instance in a **Local Zone**. They can be exposed to the public internet directly via IPv4/IPv6. Only instances in the same Local Zone can be connected via private networks. Local Zones are not compatible with [vRack](/links/network/vrack). In this mode, DHCP automatically provides IP addresses to your instances.

Find out more on the [Local Zones web page](/links/public-cloud/local-zones).

///


<a name="create-instance"></a>

### Step 4: Create the instance

> [!primary]
>
> A public SSH key is mandatory when an instance is created in the OVHcloud Control Panel (Windows instances excluded).
> 
> Refer to [Step 1](#create-ssh) and [Step 2](#import-ssh) of this guide if you do not have SSH keys ready.
> 

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

On the "**Home**" page, click on `Create an instance`{.action}.

![instance creation](images/24-instance-creation01.png){.thumbnail}

<a name="model"></a>

#### Step 4.1: Select a model

In the first step you select an instance model (might also be referred to as a "*flavour*") which defines the resources of the instance. Click on the tab with the key resource for your requirements to find our optimized instance models.

![instance model](images/24-instance-creation02.png){.thumbnail}

In the section `Discovery`{.action}, we offer favourably priced shared-resource instance models. These are ideal to try out the Public Cloud in general or to test a web application, for example.

Instance models of the type `Metal`{.action} provide dedicated physical resources.

> [!primary]
>
Your Public Cloud resources total will initially be limited for cost control and security reasons. You can verify these quotas by clicking `Quota and Regions`{.action} in the left-hand navigation bar under **Project Management**. Please consult [the dedicated documentation](/pages/public_cloud/compute/increasing_public_cloud_quota) for more information.
>
Note that you can **upgrade** your instance after creation to have more resources available. Switching to a smaller model however is not possible with a regular instance. You can find more information on this topic in **Step 4.4** below.
>

##### Additional information

/// details | Instance model categories

| Type | Guaranteed Resources | Usage notes |
| :---         |     :---:      |          :--- |
| General Purpose   | ✓     | Development servers, web or business applications    |
| Compute Optimized     | ✓       | Video encoding or other high-performance computing      |
| Memory Optimized    | ✓     | Databases, analysis, and in-memory calculations    |
| GPU     | ✓       | Massively parallel processing power for specialized applications (rendering, big data, deep learning, etc.)       |
| Discovery    | -       | Hosted on shared resources for testing and development environments      |
| Storage Optimized   | ✓     | Optimized for disk data transfer    |
| Metal | ✓ | Dedicated resources with direct access to compute, storage and network resources|

///

/// details | Regions and Local Zones

**Regions**

A **region** is defined as a location in the world comprised of one or several data centres where OVHcloud services are hosted. You can find more information on regions, geographical division and availability of services on our [region web page](/links/public-cloud/regions-pci) and our [infrastructure web page](/links/infrareg).

**Local Zones**

Local Zones are an extension of **regions** that bring OVHcloud services closer to specific locations, offering reduced latency and improved performances for applications. You can find more information on the [Local Zones web page](/links/public-cloud/local-zones) and in the [Local Zones capabilities documentation](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

<a name="region"></a>

#### Step 4.2: Select a region

Select a [region](/links/public-cloud/regions-pci) closest to your users or customers. These options might be limited, depending on the choice of model in **Step 4.1**. Note that if you select a **Local Zone** in this step, networking limitations will apply to the instance (see [Step 3](#networking-modes)).

Please also refer to the information on the [Local Zones web page](/links/public-cloud/local-zones) and in the [Local Zones capabilities documentation](/pages/public_cloud/compute/local-zones-capabilities-limitations).

![region selection](images/24-instance-creation03.png){.thumbnail}

<a name="image"></a>

#### Step 4.3: Select an image

Click on the appropriate tab and select an operating system for your instance from the drop-down menus.

![image selection](images/24-instance-creation04.png){.thumbnail}

The images available in this step depend on the choices made in the previous steps, i.e. compatibility with the instance model and regional availability. For example, if you want to select a Windows OS and there are no options in the Windows tab, you need to modify the choices of the previous step or steps.

> [!primary]
>
If you select an operating system that requires paid licensing, these costs will automatically be included in the billing of the project.
>

This step also **requires a public SSH key** to be added (Windows instances excluded). You have 2 options:

- Use a public key already stored in the OVHcloud Control Panel
- Enter a public a key directly

Click on the tabs below to view their explanations:

> [!tabs]
> **Use stored key**
>>
>> To add a key that is already stored in the OVHcloud Control Panel (see [Step 2](#import-ssh)), select it from the list.<br><br>
>>![key selection](images/24-instance-creation05.png){.thumbnail}<br>
>>
> **Enter a key directly**
>>
>> To add a public key by pasting the key string, click on the button `Add a key`{.action}.<br><br>
>>![key selection](images/24-instance-creation06.png){.thumbnail}<br>
>> Enter a name for the key and the key string in the respective fields. Then click `Next`{.action}.<br><br>
>>![key selection](images/24-instance-creation07.png){.thumbnail}<br>
>> Before clicking `Next`{.action}, you can optionally use the button `Add a key`{.action} to store this key in the OVHcloud Control Panel (see [Step 2](#import-ssh) for details).
>>

<a name="configuration"></a>

#### Step 4.4: Configure your instance

![instance select](images/24-instance-creation08.png){.thumbnail}

This step offers several configuration options. Click on the tabs below to view the details:

> [!tabs]
> **1: Number of instances to be created**
>>
>> You can create multiple instances based on the selections in the creation steps but [resource quota limitations](/pages/public_cloud/compute/increasing_public_cloud_quota) will apply.<br>
>>
> **2: Flexible instance**
>>
>> If the selected model is compatible, you can choose to create a **Flex instance**. This option allows you to downgrade to a smaller model (and even switch to a different model category) but it will limit the instance to **fixed 50 GB of included storage**, regardless of any other upgrades or downgrades.<br>
>>
> **3: Instance name**
>>
>> Enter a display name for your instance. The instance model's commercial reference is the default.<br>
>>
> **4: Post-installation script**
>>
>> You can add [your script](/pages/public_cloud/compute/launching_script_when_creating_instance) in this field.<br>
>>
> **5: Automatic instance backup**
>>
>> You can enable [automated backups](/pages/public_cloud/compute/save_an_instance) by selecting this option. Please take note of the pricing information and the additional details.
>>

<a name="network"></a>

#### Step 4.5: Configure your network 

In this step you need to apply the Public Cloud network mode you have decided on, based on the information in [Step 3](#network) above. Your options depend on the previous [choice of location](#region) for the instance (**Region** or **Local Zone**).

##### Regions

> [!tabs]
> **Private Mode**
>>
>> The instance can remain fully private.<br><br>
>>![network type](images/24-instance-creation09.png){.thumbnail}<br>
>> You can connect the instance to a [private network](#networking-modes) and a [Floating IP](/links/public-cloud/floating-ip). No dedicated public IP address will be attached.<br><br>
>>![network type](images/24-instance-creation10.png){.thumbnail}<br>
>> Note that if you click on `Create a new private network`{.action}, the instance creation process will be interrupted and has to be restarted from the beginning.<br>
>>
> **Public Mode**
>>
>> The instance will be exposed to the public internet directly via IPv4/IPv6.<br><br>
>>![network type](images/24-instance-creation11.png){.thumbnail}<br>
>> You can additionally connect the instance to a [private network](#networking-modes) (vRack) via the drop-down menu.<br>
>> Note that if you click on `Create a new private network`{.action}, the instance creation process will be interrupted and has to be restarted from the beginning.
>>

Click `Next`{.action} to proceed to the final step.

##### Local Zones

You can choose to attach the instance to a private network, make it publicly reachable or both.

![network type](images/24-instance-creation12.png){.thumbnail}

> [!tabs]
> **Public Network**
>>
>> If you select the option `Public network`, the instance will be exposed to the public internet directly via IPv4/IPv6.<br>
>> You can additionally connect the instance to a [private network](#networking-modes) (not compatible with vRack) if you select `Local Private Network compatible with Local Zones` (see tab **Local Private Network**).
>>
> **Local Private Network**
>>
>> Tick the check box `Local Private Network compatible with Local Zones`. If you select **this option without also selecting** `Public network`, the instance will remain fully private, attached to a [private network](#networking-modes) (not compatible with vRack). Choose an existing network from the list via the option `Attach an existing private network` or create a new one for the Local Zone by choosing `Create a local private network` (without interrupting the instance creation process).<br><br>
>>![network type](images/24-instance-creation13.png){.thumbnail}
>> 

Click `Next`{.action} to proceed to the final step.

<a name="billing"></a>

#### Step 4.6: Select a billing period

![billing method](images/24-instance-creation14.png){.thumbnail}

> [!primary]
>
> Please note that **hourly** billing might be the only selection displayed, depending on the choice of instance model. This is a temporary limitation; new Public Cloud billing options will soon be available.
>

> [!tabs]
> **Monthly billing**
>>
>> Monthly billing will result in lower cost over time but **cannot be changed** to hourly billing after the instance is created.<br>
>>
> **Hourly billing**
>>
>> Hourly billing is the better choice if it is unclear how long the usage period will be. If you decide to keep the instance for long-term use, you can still [switch to a monthly subscription](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).<br>
>> The instance will be billed as long as it is **not deleted**, regardless of the actual usage of the instance.
>>

Find out the details in our dedicated billing documentation:

- [Public Cloud billing](/pages/public_cloud/compute/analyze_billing)
- [Monthly billing FAQ](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Once you have finished your instance configuration, click on the button `Create an instance`{.action}. It may take a few minutes until your service is delivered.

<a name="connect-instance"></a>

### Step 5: Connect to the instance

The instructions in this part concern remote connections by means of the **Open SSH** and **RDP** protocols through a public network (internet).

Note that we provide alternative ways of access (mainly used for troubleshoooting) which are only available via your OVHcloud Control Panel:

- [VNC console](#vnc-console)
- [Rescue mode](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> If you have installed an **OS with application**, refer to our [guide on first steps with applications](/pages/public_cloud/compute/apps_first_steps) as well as the official documentation by the respective publisher. 
>

<a name="verify-status"></a>

#### 5.1: Verify the instance status in the OVHcloud Control Panel

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Select `Instances`{.action} in the left-hand navigation bar under **Compute**. Your instance is ready when the status is set to `Enabled` in the table. If the instance was recently created and has a different status, click on the "Refresh" button located next to the search filter.

![instances page](images/24-instance-connect01.png){.thumbnail}

Click on the instance's name in this table to open the `Dashboard`{.action} on which you can find all information about the instance. To learn more about the functions available on this page, consult our guide on [managing instances in the Control Panel](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

A **user with elevated permissions (*sudo*) is automatically created** on the instance. The username reflects the image installed, e.g "ubuntu", "debian", "fedora", etc. You can verify this on the right-hand side of the `Dashboard`{.action} in the section **Networks**.

![instances page](images/24-instance-connect02.png){.thumbnail}

If your [SSH key pair is set up correctly](#create-ssh), you can now connect to the instance with the preconfigured user and your SSH key. You can find more detailed instructions in the subsequent paragraphs.

> [!primary]
>
> Access via **VNC console** on a new GNU/Linux OS instance created in the Control Panel must be enabled first as described in the [guide section below](#vnc-console).
>
> This guide does not cover private networking for instances. Please consult our documentation on [Public Cloud Network Services](/products/public-cloud-network) regarding this topic. 
>

<a name="login-linux"></a>

#### 5.2: First login on an instance with a GNU/Linux OS installed

> [!primary]
>
> If you receive error messages regarding your **SSH keys**, verify that your local device has a properly configured private SSH key using the information in [this guide](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).</br>
> If you still encounter issues, you can replace the key pair with the help of [this guide](/pages/public_cloud/compute/replacing_lost_ssh_key). 
>
> If you have created an instance without an SSH key, via the [OVHcloud API](/pages/manage_and_operate/api/first-steps) or the [OpenStack Horizon interface](/pages/public_cloud/compute/create_instance_in_horizon), you can only add an SSH key to your instance via [rescue mode](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) by following the instructions set out in [this guide](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

You can access your instance immediately after creation through the command line interface of your local device (`Terminal`, `Command prompt`, `Powershell`, etc.) via SSH.

```bash
ssh username@IPv4_instance
```

Example:

```bash
ssh ubuntu@203.0.113.101
```

[Depending on your setup](#create-ssh), you will have to enter a passphrase that protects your private key or specify the path to your key file. Consult our [SSH keys guide](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys) for detailed information on this topic.

If you use an alternative SSH client software, refer to its user documentation. A usage example for the open-source solution `PuTTY` is available in [this guide](/pages/public_cloud/compute/creating-ssh-keys-pci#useputty).

Continue with [Step 6 below](#manage-access).

<a name="windows"></a>

#### 5.3: Windows instances

##### 5.3.1: Finish the installation of the Windows instance

After verifying that the Windows instance is [installed](#verify-status), open the tab `VNC console`{.action} in your [OVHcloud Control Panel](/links/manager).

You will then need to complete the initial setup of your Windows OS. Follow the steps below by navigating through the tabs:

> [!tabs]
> 1. **Locale settings**
>>
>> Configure your **country/region**, the preferred **Windows language**, and your **keyboard layout**. Then click on the button `Next`{.action} at the bottom right.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Administrator password**
>>
>> Set a password for your Windows `Administrator` account and confirm it, then click on `Finish`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Login screen**
>>
>> Windows will apply your settings and then display the login screen. Click on the `Send CtrlAltDel`{.action} button in the top right corner to sign in.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Administrator login**
>>
>> Enter the `Administrator` password you have created in the previous step and click on the `Arrow` button.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

<a name="login-windows"></a>

##### 5.3.2: Log in remotely from Windows

On your local Windows device, you can use the `Remote Desktop Connection` client application to connect to your instance.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Enter the IPv4 address of your instance, then your username and passphrase. Usually a warning message will appear, asking to confirm the connection because of an unknown certificate. Click on `Yes`{.action} to log in.

> [!primary]
>
> If you experience any issues with this procedure, verify that remote (RDP) connections are allowed on your device by checking your system settings, firewall rules and possible network restrictions. 
>

<a name="login-other"></a>

##### 5.3.3: Log in remotely from another OS

Connections from a desktop OS other than Windows usually require a client software compatible with the `Remote Desktop Protocol` (RDP). Some desktop environments and operating systems might have a native client built in.

Whichever client you are using, you only need the IP address of your instance and your password for the `Administrator` account to connect.

**Example of use**

The free and open-source software `Remmina Remote Desktop Client` is available for many GNU/Linux desktop distributions. If you do not find Remmina in your desktop environment's software manager, you can obtain it from the [official website](https://remmina.org/).

![linux remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Connection**
>>
>> Open Remmina and make sure the connection protocol is set to "RDP". Enter the IPv4 address of your Public Cloud instance and press `Enter`.<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Authentication**
>>
>> If a certificate warning message appears, click on `Yes`{.action}. Enter the username and your password for Windows and click on `OK`{.action} to establish the connection.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Settings**
>>
>> You can find some useful items in the left-hand toolbar. For example, click on on the icon `Toggle dynamic resolution update`{.action} to improve the window resolution.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

<a name="vnc-console"></a>

#### 5.4: VNC console access

The VNC console allows you to connect to your instances even when other means of access are not available.

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Select `Instances`{.action} in the left-hand navigation bar under **Compute**. Click on the instance name and open the tab `VNC console`{.action}.

![vnc console](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Instance with a GNU/Linux OS installed**
>>
>> You will need to have a **user account with a password** configured on the instance in order to use the VNC console. To set a password for the preconfigured account, follow the steps in [section 6.1.1 below](#set-password).
>>
> **Windows instance**
>>
>> Log in with your Windows credentials. If there is an active login session, you will have immediate access. There will be a noticeable latency compared to an RDP connection.
>>

<a name="manage-access"></a>

### Step 6: First steps on a new instance

> [!primary]
>
>**Windows instances**
>
> There are no additional steps required for instances with a Windows OS installed.
>
> You can find more information in the [Go further](#go-further) section below.
>

<a name="user-mgmt"></a>

#### 6.1: User management

<a name="set-password"></a>

> [!primary]
>
> When configuring user accounts and permission levels on an instance, we recommend to make use of the information in our [user account guide](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1: Set a password for the current user account

When [logged on to your instance](#manage-access), set a password for the current user by entering this command:

```bash
sudo passwd
```

Enter a passphrase, confirm with `Enter` and repeat.

```console
New password: 
Retype new password:
passwd: password updated successfully
```

**This is sufficient to enable logins via the [VNC console](#vnc-console) in your [OVHcloud Control Panel](/links/manager)**. Remote SSH logins with this password however are still **disabled** by default.

<a name="remote-password"></a>

##### 6.1.2: How to enable remote logins via password (optional)

> [!warning]
>
This step is not necessary and should only be executed if you have a viable reason to enable this access type; for example if you need to temporarily log in to the instance from a device that does not have your private SSH key stored on it.
>
The following example illustrates a temporary solution on an instance with Ubuntu installed. Note that you might need to adjust the commands according to your OS. It is not recommended to keep this configuration permanently because it adds a potential security risk by opening the system to SSH-based attacks.
>

When [logged on to your instance](#manage-access), open the pertinent configuration file with a text editor. Example:

```bash
sudo nano /etc/ssh/sshd_config
```

Edit the line `#PasswordAuthentication yes` as follows:

```console
PasswordAuthentication yes
```

Edit the line `Include /etc/ssh/sshd_config.d/*.conf` as follows:

```console
#Include /etc/ssh/sshd_config.d/*.conf
```

Save the file and close the editor.

Restart the SSH service with one of the following commands:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

You can now log in via SSH with username and password as well.

Reverse these changes to return to the key-based login for the instance.

<a name="add-keys"></a>

#### 6.2: Additional SSH keys

If you want to allow more user accounts to access the instance, the standard procedure is as follows:

- Create the account on the instance.
- Create a new SSH key pair on the device concerned.
- Add the public key to the instance.

Use our [dedicated guide](/pages/public_cloud/compute/configuring_additional_ssh_keys) for a detailed explanation of these steps.

<a name="go-further"></a>

## Go further

[How to activate a Windows licence for an instance in private mode](/pages/public_cloud/compute/activate-windows-license-private-mode)

[How to reset a Windows Administrator password](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Instance management in the Control Panel](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[How to get started with OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)

[How to get started with Horizon](/pages/public_cloud/compute/introducing_horizon)


If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
