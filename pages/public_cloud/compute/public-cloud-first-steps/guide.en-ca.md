---
title: How to create a Public Cloud instance and connect to it
excerpt: Find out how to configure Public Cloud instances in the OVHcloud Control Panel and the first steps with your instances
updated: 2026-02-24
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


## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!success]
> Take advantage of reduced prices by committing to a period of 1 to 36 months on your Public Cloud resources. More information on our [Savings Plans](/links/public-cloud/savings-plan) page.

## Instructions

> [!primary]
>
> If you have not created a Public Cloud project yet, start with our [guide on how to create a project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
> 
> Important **technical details** about the OVHcloud Public Cloud are available on [this guide page](/pages/public_cloud/public_cloud_cross_functional/00-essential-info-to-get-started-on-public-cloud).
> 

### Content overview

- [Objective](#objective)
- [Requirements](#requirements)
- [Instructions](#instructions)
  - [Content overview](#content-overview)
  - [Step 1: Create an SSH key set](#step-1-create-an-ssh-key-set)
  - [Step 2: Import SSH keys](#step-2-import-ssh-keys)
  - [Step 3: Prepare the network configuration](#step-3-prepare-the-network-configuration)
  - [Step 4: Create the instance](#step-4-create-the-instance)
    - [Step 4.1: Instance Name](#step-41-instance-name)
    - [Step 4.2: Select a location](#step-42-select-a-location)
    - [Step 4.3: Select a model](#step-43-select-a-model)
      - [Additional information](#additional-information)
    - [Step 4.4: Select an image](#step-44-select-an-image)
    - [Step 4.5: Select an SSH key (not applicable to Windows instances)](#step-45-select-an-ssh-key-not-applicable-to-windows-instances)
    - [Step 4.6: Configure backup settings](#step-46-configure-backup-settings)
    - [Step 4.7: Configure the network](#step-47-configure-the-network)
    - [Step 4.8: Select a billing period](#step-48-select-a-billing-period)
    - [Step 4.9: Configure advanced settings](#step-49-configure-advanced-settings)
      - [Flexible instance](#flexible-instance)
      - [Post-installation script](#post-installation-script)
    - [Step 4.10: Finalizing your instance](#step-410-finalizing-your-instance)
  - [Step 5: Connect to the instance](#step-5-connect-to-the-instance)
    - [5.1: Verify the instance status in the OVHcloud Control Panel](#51-verify-the-instance-status-in-the-ovhcloud-control-panel)
    - [5.2: First login on an instance with a GNU/Linux OS installed](#52-first-login-on-an-instance-with-a-gnulinux-os-installed)
    - [5.3: Windows instances](#53-windows-instances)
      - [5.3.1: Finish the installation of the Windows instance](#531-finish-the-installation-of-the-windows-instance)
      - [5.3.2: Log in remotely from Windows](#532-log-in-remotely-from-windows)
      - [5.3.3: Log in remotely from another OS](#533-log-in-remotely-from-another-os)
    - [5.4: VNC console access](#54-vnc-console-access)
  - [Step 6: First steps on a new instance](#step-6-first-steps-on-a-new-instance)
    - [6.1: User management](#61-user-management)
      - [6.1.1: Set a password for the current user account](#611-set-a-password-for-the-current-user-account)
      - [6.1.2: How to enable remote logins via password (optional)](#612-how-to-enable-remote-logins-via-password-optional)
    - [6.2: Additional SSH keys](#62-additional-ssh-keys)
- [Go further](#go-further)


> [!primary]
>
> **You need to provide a public SSH key when creating Public Cloud instances in the OVHcloud Control Panel.** After the instance is created you can configure your remote access at your own discretion.
>
> **Exception**: Login authentication on Windows instances requires username and password because Windows uses RDP (**R**emote **D**esktop **P**rotocol).
> 

### Step 1: Create an SSH key set

If you already have an SSH key pair ready to use, you can skip this step.

The [SSH protocol](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) enables encrypted client-server communication. An **SSH key pair** consists of a public key and a private key.

- The **public key** is added to your Public Cloud instance (and can also be [stored in the OVHcloud Control Panel](#step-2-import-ssh-keys)).
- The **private key** is stored on your local device and must be secured from unauthorized access. Only client devices with the matching private key can access your instance. A user account password is not required to connect.

You have 2 options to create and manage your SSH keys:

- Command line interface of your OS (basic **OpenSSH** client)
- Additional software (compatible with the **OpenSSH** protocol) with a command line or graphical interface

Most contemporary desktop operating systems natively include the **OpenSSH** client which can be accessed through the system's command line application (`cmd`, `Powershell`, `Terminal`, etc.). If you are not familiar with using SSH keys as an authentication method, you can use the instructions in [this guide](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) to get started and create your key pair.

If you use an alternative software, refer to its user documentation. A usage example for the open-source solution `PuTTY` is available in our guide: [How to use PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).


### Step 2: Import SSH keys

You can store your public SSH keys in the `Public Cloud`{.action} section of the [OVHcloud Control Panel](/links/manager). This is not mandatory but makes the instance creation process more convenient.

> [!primary]
>
> Stored SSH keys help you to create your instances faster in the OVHcloud Control Panel. To change key pairs and add users once an instance is created, please refer to the guide on [additional SSH keys](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Public SSH keys added to your OVHcloud Control Panel will be available for Public Cloud services of all [regions](/links/public-cloud/regions-pci). You can store keys encrypted with **RSA**, **ECDSA** and **ED25519**.
>

Open `SSH Keys`{.action} in the left-hand menu under **Settings**. Click on the button `Add an SSH key`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

In the new window, enter a name for the key. Fill in the `Key` field with your public key string, for example the one created in [Step 1](#step-1-create-an-ssh-key-set). Confirm by clicking `Add`{.action}.

![add key](images/24-addkey.png){.thumbnail}

You can now select this key in [Step 4](#step-4-create-the-instance) to add it to a new instance.

### Step 3: Prepare the network configuration

Before creating your instance, we recommend to consider the way the instance will be used in terms of networking.

- If you do not need to configure the instance with a private network at this time, you can proceed with [step 4](#step-4-create-the-instance). You can create an instance exposed to the public Internet. (See **Public Mode** [below](#networking-modes).)
- If the instance needs to be connected to a new private network (OVHcloud [vRack](/links/network/vrack)), please note that the vRack is created automatically when you create your Public Cloud project. No prior action is therefore required. For more information, see the [Public Cloud vRack guide](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modes

**Public Mode**

Instances in Public Mode are exposed to the public Internet directly via IPv4/IPv6. IP addresses cannot be modified but instances can have [Additional IP](/links/network/additional-ip) addresses attached ([including your own](/links/network/byoip)) and they can be connected to a [vRack](/links/network/vrack).

**Private Mode**

Instances in Private Mode can only be exposed to the public Internet via a [Gateway](/links/public-cloud/gateway) or a [Load Balancer](/links/public-cloud/load-balancer) service and [Floating IP](/links/public-cloud/floating-ip) addresses.

For more information, please consult our guides in the [Public Cloud Network Services](/products/public-cloud-network) section. The [Concepts guide](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) provides an introduction to Public Cloud Networking.

**Local Private Mode**
 
Local Private Mode only applies if you create an instance in a **Local Zone**. They can be exposed to the public Internet directly via IPv4/IPv6. Only instances in the same Local Zone can be connected via private networks. Local Zones are not compatible with [vRack](/links/network/vrack). In this mode, DHCP automatically provides IP addresses to your instances.

Find out more on the [Local Zones web page](/links/public-cloud/local-zones).

///

### Step 4: Create the instance

> [!primary]
>
> A public SSH key is required when creating an instance in the OVHcloud Control Panel (except for Windows instances).
>
> Refer to [step 1](#step-1-create-an-ssh-key-set) and [step 2](#step-2-import-ssh-keys) in this guide if you do not have any SSH keys ready to use.
>

On the **Home** page, click `Create an instance`{.action}.

#### Step 4.1: Instance Name

Enter a full name for your instance. The commercial reference of the instance model is the default value. If necessary, you can also add the region and date to facilitate the identification and management of your instances.

#### Step 4.2: Select a location

Select a [location](/links/public-cloud/regions-pci) closest to your users or customers. Note that if you select a **Local Zone** in this step, network limitations will apply to the instance (see [Step 3](#networking-modes)).

Also refer to the information on the [Local Zones web page](/links/public-cloud/local-zones) and the [Local Zones capabilities documentation](/pages/public_cloud/compute/local-zones-capabilities-limitations).

The choice of region determines how your instance is deployed (1-AZ, 3-AZ, or Local Zones). To understand the differences in terms of resilience, availability, and architecture, see our guide [Deployment Mode Comparison and Resilience – Understanding 3-AZ / 1-AZ / Local Zones](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).

#### Step 4.3: Select a model

At this stage, you choose the instance model (also known as flavor), which determines the resources allocated to your instance: processor, memory, and associated capabilities. Open the `Instance Model` drop-down list, then select the model type that best suits your use case to access our range of optimized instances.

The `Discovery` model type brings together instances with shared resources, offered at competitive prices. They are particularly well suited for discovering the OVHcloud Public Cloud, performing tests, or hosting light workloads such as web applications.

`Metal Instances` models offer fully dedicated physical resources, guaranteeing consistent performance and maximum isolation for the most demanding workloads.

> [!primary]
>
> Your total Public Cloud resources will initially be limited for cost control and security reasons. You can check these quotas by clicking on `Quota & Regions`{.action} in the left navigation bar under **Settings**. See [the dedicated documentation](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) for more information.
>
> Note that you can **upgrade** your instance after creation to have more resources available. However, downgrading to a smaller model is not possible with a regular instance. You can find more information on this topic in **step 4.9** below.
>

##### Additional information

/// details | Instance model categories

| Type | Guaranteed Resources | Usage notes |
| :---         |     :---:      |          :--- |
| Best Sellers   | ✓     | Most popular models.    |
| General Purpose   | ✓     | Development servers, web or business applications    |
| Compute Optimized     | ✓       | Video encoding or other high-performance computing      |
| Memory Optimized    | ✓     | Databases, analysis, and in-memory calculations    |
| GPU     | ✓       | Massively parallel processing power for specialized applications (rendering, big data, deep learning, etc.)       |
| Discovery    | -       | Hosted on shared resources for testing and development environments      |
| Storage Optimized   | ✓     | Optimized for disk data transfer    |
| Metal Instances | ✓ | Dedicated resources with direct access to compute, storage and network resources|

///

/// details | Regions and Local Zones

**Regions**

A **region** is defined as a location in the world comprised of one or several data centres where OVHcloud services are hosted. You can find more information on regions, geographical division and availability of services on our [region web page](/links/public-cloud/regions-pci) and our [infrastructure web page](/links/infrareg).

**Local Zones**

Local Zones are an extension of **regions** that bring OVHcloud services closer to specific locations, offering reduced latency and improved performances for applications. You can find more information on the [Local Zones web page](/links/public-cloud/local-zones) and in the [Local Zones capabilities documentation](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

#### Step 4.4: Select an image

Open the `Distribution Type` drop-down list, select the category that corresponds to your needs, then choose the operating system to deploy on your instance using the `Image Version` drop-down menu.

The images available at this stage depend on the choices made in the previous stages, i.e., compatibility with the instance model and regional availability. For example, if you want to select a Windows operating system and there are no options in the Windows tab, you must change your choices from the previous stages.

> [!primary]
>
> If you choose an operating system that requires a paid license, these costs will be automatically included in the project invoice.
>

#### Step 4.5: Select an SSH key (not applicable to Windows instances)

With the exception of Windows instances, configuring your instance also requires **adding a public SSH key**. You have two options:

- Use a public key already stored in the OVHcloud Control Panel
- Enter a public key directly

Click on the tabs below to view their presentation:

> [!tabs]
> **Using a stored key**
>>
>> To add a key stored in your OVHcloud Control Panel (see [Step 2](#step-2-import-ssh-keys)), select it from the list.
>>
> **Enter a key directly**
>>
>> To add a public key by pasting the key string, click the `Create a new SSH Key`{.action} button.
>>
>> Enter a name for the key and the key string in the respective fields. Then click `Validate the key`{.action}.
>>

#### Step 4.6: Configure backup settings

[Automated backups](/pages/public_cloud/compute/save_an_instance) are enabled by default. Review the pricing information and additional details before proceeding.

Next, select the rotation type, i.e., the maximum number of backups kept in the history: 7 or 14 days.

#### Step 4.7: Configure the network

In this step, you will configure the network for your instance.

**Private network**

You can connect your instance to a [private network](#networking-modes) and assign it a [floating IP](/links/public-cloud/floating-ip).

By clicking on `Create a private network`{.action}, you can create one directly:

- Name the network
- **Select the VLAN ID:** identifier used to interconnect multiple services and resources within the same private network, via a common network segmentation number
- **Define the CIDR:** range of IP addresses for the network
- **Enable DHCP by checking the corresponding box, if necessary:** enable this option if you want IP addresses to be assigned automatically

> [!primary]
>
> The instance can remain fully private if you do not assign it a public IP address.
>

**Gateway**

You can enable the option to assign a gateway to your network. By default, the gateway is size S, but you can adjust its size later in the settings.

**Assign public connectivity**

You can enable or disable this feature as needed. If you choose to enable it, you have two options:

- **Basic Public IP:** a temporary public IP address that does not persist beyond the lifetime of the instance. Note that using a Basic Public IP is not compatible with a gateway.
- **Floating IP:** You can create a new Floating IP or reuse an existing address, allowing for a persistent public IP that can be detached from the instance.

#### Step 4.8: Select a billing period

> [!primary]
>
> Please note that, depending on the instance model you choose, **hourly** billing may be the only option displayed. This is a temporary limitation; new Public Cloud billing options will be available soon.
>

> [!tabs]
> **Monthly billing**
>>
>> Monthly billing will result in lower costs over time, but **cannot be changed** to hourly billing once the instance has been created.
>>
> **Hourly billing**
>>
>> Hourly billing is the best choice if you have not clearly determined the length of the usage period. If you decide to keep the instance for long-term use, you can always [switch to a monthly subscription](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).
>>
>> The instance will be billed as long as it is **not deleted**, regardless of the actual usage of the instance.
>>

Find details in our dedicated billing documentation:

- [Public Cloud Billing](/pages/public_cloud/public_cloud_cross_functional/analyze_billing)
- [FAQ on monthly billing](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Once you have finished configuring your instance, you can choose to click the `Launch my instance`{.action} button, or configure advanced settings (see below). It may take a few minutes for your service to be delivered.

#### Step 4.9: Configure advanced settings

##### Flexible instance

A Flex instance is a single 50 GB disk instance designed to offer faster snapshot creation and restoration.

It allows resizing to higher or lower models while maintaining fixed storage. Classic models only allow resizing to higher models.

##### Post-installation script

You can add [your post-installation script](/pages/public_cloud/compute/launching_script_when_creating_instance) in this field.

#### Step 4.10: Finalizing your instance

On the right side of your screen, you will find a summary of your configuration. In this section, you can configure the number of instances to be created. You can create multiple instances based on the selections made during the creation steps, but resource [quota limits](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) will apply.

Once you have finished configuring your instance, click the `Launch my instance`{.action} button. Delivery of your service may take a few minutes.

### Step 5: Connect to the instance

The instructions in this part concern remote connections by means of the **OpenSSH** and **RDP** protocols through a public network (Internet).

Note that we provide alternative ways of access (mainly used for troubleshooting) which are only available via your OVHcloud Control Panel:

- [VNC console](#54-vnc-console-access)
- [Rescue mode](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> If you have installed an **OS with application**, refer to our [guide on first steps with applications](/pages/public_cloud/compute/apps_first_steps) as well as the official documentation by the respective publisher. 
>

#### 5.1: Verify the instance status in the OVHcloud Control Panel

Select `Instances`{.action} in the left-hand navigation bar under **Compute**. Your instance is ready when the status is set to `Enabled` in the table. If the instance was recently created and has a different status, click on the "Refresh" button located next to the search filter.

![instances page](images/24-instance-connect01.png){.thumbnail}

Click on the instance's name in this table to open the `Dashboard`{.action} on which you can find all information about the instance. To learn more about the functions available on this page, consult our guide on [managing instances in the Control Panel](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

A **user with elevated permissions (*sudo*) is automatically created** on the instance. The username reflects the image installed, e.g "ubuntu", "debian", "fedora", etc. You can verify this on the right-hand side of the `Dashboard`{.action} in the section **Networks**.

![instances page](images/24-instance-connect02.png){.thumbnail}

If your [SSH key pair is set up correctly](#step-1-create-an-ssh-key-set), you can now connect to the instance with the preconfigured user and your SSH key. You can find more detailed instructions in the subsequent paragraphs.

> [!primary]
>
> Access via **VNC console** on a new GNU/Linux OS instance created in the Control Panel must be enabled first as described in the [guide section below](#54-vnc-console-access).
>
> This guide does not cover private networking for instances. Please consult our documentation on [Public Cloud Network Services](/products/public-cloud-network) regarding this topic. 
>

#### 5.2: First login on an instance with a GNU/Linux OS installed

> [!primary]
>
> If you receive error messages regarding your **SSH keys**, verify that your local device has a properly configured private SSH key using the information in [this guide](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).<br>
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

[Depending on your setup](#step-1-create-an-ssh-key-set), you will have to enter a passphrase that protects your private key or specify the path to your key file. Consult our [SSH keys guide](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys) for detailed information on this topic.

If you use an alternative SSH client software, refer to its user documentation. A usage example for the open-source solution `PuTTY` is available in [this guide](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

Continue with [Step 6 below](#step-6-first-steps-on-a-new-instance).

#### 5.3: Windows instances

##### 5.3.1: Finish the installation of the Windows instance

After verifying that the Windows instance is [installed](#51-verify-the-instance-status-in-the-ovhcloud-control-panel), open the tab `VNC console`{.action} in your [OVHcloud Control Panel](/links/manager).

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

##### 5.3.2: Log in remotely from Windows

On your local Windows device, you can use the `Remote Desktop Connection` client application to connect to your instance.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Enter the IPv4 address of your instance, then your username and passphrase. Usually a warning message will appear, asking to confirm the connection because of an unknown certificate. Click on `Yes`{.action} to log in.

> [!primary]
>
> If you experience any issues with this procedure, verify that remote (RDP) connections are allowed on your device by checking your system settings, firewall rules and possible network restrictions. 
>

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
>> You can find some useful items in the left-hand toolbar. For example, click on the icon `Toggle dynamic resolution update`{.action} to improve the window resolution.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

#### 5.4: VNC console access

The VNC console allows you to connect to your instances even when other means of access are not available.

Select `Instances`{.action} in the left-hand navigation bar under **Compute**. Click on the instance name and open the tab `VNC console`{.action}.

![vnc console](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Instance with a GNU/Linux OS installed**
>>
>> You will need to have a **user account with a password** configured on the instance in order to use the VNC console. To set a password for the preconfigured account, follow the steps in [section 6.1.1 below](#611-set-a-password-for-the-current-user-account).
>>
> **Windows instance**
>>
>> Log in with your Windows credentials. If there is an active login session, you will have immediate access. There will be a noticeable latency compared to an RDP connection.
>>

### Step 6: First steps on a new instance

> [!primary]
>
> **Windows instances**
>
> There are no additional steps required for instances with a Windows OS installed.
>
> You can find more information in the [Go further](#go-further) section below.
>

#### 6.1: User management

> [!primary]
>
> When configuring user accounts and permission levels on an instance, we recommend to make use of the information in our [user account guide](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1: Set a password for the current user account

When [logged on to your instance](#step-6-first-steps-on-a-new-instance), set a password for the current user by entering this command:

```bash
sudo passwd
```

Enter a passphrase, confirm with `Enter` and repeat.

```console
New password: 
Retype new password:
passwd: password updated successfully
```

**This is sufficient to enable logins via the [VNC console](#54-vnc-console-access) in your [OVHcloud Control Panel](/links/manager)**. Remote SSH logins with this password however are still **disabled** by default.

##### 6.1.2: How to enable remote logins via password (optional)

> [!warning]
>
> This step is not necessary and should only be executed if you have a viable reason to enable this access type; for example if you need to temporarily log in to the instance from a device that does not have your private SSH key stored on it.
>
> The following example illustrates a temporary solution on an instance with Ubuntu installed. Note that you might need to adjust the commands according to your OS. It is not recommended to keep this configuration permanently because it adds a potential security risk by opening the system to SSH-based attacks.
>

When [logged on to your instance](#step-6-first-steps-on-a-new-instance), open the pertinent configuration file with a text editor. Example:

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

#### 6.2: Additional SSH keys

If you want to allow more user accounts to access the instance, the standard procedure is as follows:

- Create the account on the instance.
- Create a new SSH key pair on the device concerned.
- Add the public key to the instance.

Use our [dedicated guide](/pages/public_cloud/compute/configuring_additional_ssh_keys) for a detailed explanation of these steps.

## Go further

[How to activate a Windows licence for an instance in private mode](/pages/public_cloud/compute/activate-windows-license-private-mode)

[How to reset a Windows Administrator password](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Instance management in the Control Panel](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[How to get started with OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

[How to get started with Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)


If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
