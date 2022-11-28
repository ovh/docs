---
title: OVHgateway replacement
slug: software-gateway-replacement
excerpt: Setting up an IPsec VPN between two remote Nutanix clusters
section: Network & Security
order: 02
---

**Last updated 28th November 2022**

## Objective

This guide will show you how to interconnect two Nutanix clusters, provided by OVHcloud through an IPsec VPN. To do this, we will replace the **OVHgateway** virtual machines that provide internet access with a gateway under the **pfSense** operating system.

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) or reaching out to [our community](https://community.ovh.com/en/) if you experience any issues.
>


## Requirements

- One Nutanix cluster provided by OVHcloud
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- Access to your clusters via Prism Central

## Instructions

In this guide, we will carry out part of the installation on the cluster in Canada, and another part in France. Below is the list of tasks to be performed in stages on each cluster:

[Step 1 Solution Overview](#presentation)<br /> 
[Step 2 Gateway Replacement in Canada](#configurecanada)<br />
&ensp;[Step 2.1 Downloading sources for pfSense installation](#downloadsources)<br />
&ensp;[Step 2.2 Creating the virtual machine **GW-PFSENSE**](#createvmpfsense)<br />
&ensp;[Step 2.3 Shutting down the virtual machine **OVH-GATEWAY**](#shutdownovhgateway)<br />
&ensp;[Step 2.4 Retrieving the public address in the OVHcloud Control Panel](#getpublicaddress)<br />
&ensp;[Step 2.5 Starting the virtual machine **GW-PFSENSE**](#poweronvmpfsense)<br />
&ensp;[Step 2.6 Installing **pfSense**](#pfsenseinstall)<br />
&ensp;[Step 2.7 Ejecting pfSense CDROM from virtual machine **GW-PFSENSE**](#pfsenseremovecdrom)<br />
&ensp;[Step 2.8 Configuring pfSense IP addresses through the console](#configureippfsense)<br />
&ensp;&ensp;[Step 2.9 Configuring certain options through the Web interface](#configurepfsenseoptions)<br />
&emsp;&emsp;[Step 2.9.1 Changing the default password for **pfSense**](#changepassword)<br />
&emsp;&emsp;[Step 2.9.2 Adding a rule to allow remote administration from a public address](#addadminrule)<br />
[Step 3 Gateway configuration in France](#configuregatewayfrance)<br />
&ensp;&ensp;[Step 3.1 Downloading sources for pfsense installation](#downloadsources)<br />
&ensp;[Step 3.2 Creating the virtual machine **GW-PFSENSE**](#createvmpfsensefr)<br />
&ensp;[Step 3.3 Shutting down the virtual machine **OVH-GATEWAY**](#shutdownovhgatewayfr)<br />
&ensp;[Step 3.4 Retrieving the public address on the OVHcloud Control Panel](#getpublicaddressfr)<br />
&ensp;[Step 3.5 Starting the virtual machine **GW-PFSENSE**](#poweronvmpfsensefr)<br />
&ensp;[Step 3.6 Installing **pfSense**](#pfsenseinstallfr)<br />
&ensp;[Step 3.7 Ejecting pfSense CDROM from virtual machine **GW-PFSENSE**](#pfsenseremovecdromfr)<br />
&ensp;[Step 3.8 Configure pfSense IP addresses through the console](#configureippfsensefr)<br />
&ensp;&ensp;[Step 3.9 Configuring certain options through the Web interface](#configurepfsenseoptionsfr)<br />
&emsp;&emsp;[Step 3.9.1 Changing the default password for **pfSense**](#changepassworden)<br />
&emsp;&emsp;[Step 3.9.2 Adding a rule to allow remote administration from a public address](#addadminruleen)<br />
[Step 4 Setting up IPsec VPN](#configurevpnipsec)<br />
&ensp;[Step 4.1 Setting Up the site in Canada](#ipseccanada)<br />
&emsp;&emsp;[Step 4.1.1 Setting up IPsec VPN in France](#paramipsectofrance)<br />
&emsp;&emsp;[Step 4.1.2 Adding a firewall rule to allow network flow through IPsec VPN between Canada and France](#addfwruletofrance)<br />
&ensp;[Step 4.2 Setting up your website in France](#ipsecfrance)<br />
&emsp;&emsp;[Step 4.2.1 Setting up IPsec VPN to Canada](#paramipsectocanada)<br />
&emsp;&emsp;[Step 4.2.2 Adding a firewall rule to allow network flow through IPsec VPN between Canada and France](#addruletocanada)<br />

<a name="presentation"></a>
### Step 1 Solution Overview

We will interconnect two Nutanix clusters, one in Canada and the other in France, both in OVHcloud data centres.<br>
They each use a different IP address scheme, as follows:

- **Cluster in Canada**: 192.168.10.0/24
- **Cluster in France**: 192.168.0.0/24

To allow this configuration, we will replace the **OVHgateway** virtual machine on each site with a virtual machine with the **pfSense** operating system, which will continue to provide outbound internet access and manage the VPN tunnel using IPsec.

<a name="configurecanada"></a>
### Step 2 Bridge replacement in Canada 

<a name="downloadsources"></a>
#### Step 2.1 Downloading sources for pfSense installation

Download an ISO image for the **pfSense** installation from this link: [Downloading pfSense](https://www.pfsense.org/download/){.external}.

Using [this documentation](https://docs.ovh.com/gb/en/nutanix/image-import/), add the **pfSense ISO** image to your Nutanix cluster.

<a name="createvmpfsense"></a>
#### Step 2.2 Creating the **GW-PFSENSE virtual machine**

Create a virtual machine with these settings:

- **Name**: `GW-PFSENSE`
- **Storage1**: `60 GB HDD` 
- **Storage2**: `DVD drive connected to the pfSense ISO file`
- **RAM**: `4 GB` 
- **CPU**: `2 vCPU`
- **Network**: `two network cards on the AHV network: **Base**`

You can use [our guide on virtual machine management](https://docs.ovh.com/gb/en/nutanix/virtual-machine-management/) to create this virtual machine.

![Create VM 01](images/00-createvm01.png){.thumbnail}

<a name="shutdownovhgateway"></a>
#### Step 2.3 Shutting down the **OVH-GATEWAY virtual machine**

To avoid duplicate IP addresses on the network, stop the **OVHgateway** virtual machine before starting the new virtual machine on **pfSense**.

Via **Prism Central**, click in the top left on the `main menu`{.action}.

![OVHGateway 01](images/01-stop-ovhgateway01.png){.thumbnail}

Click `VMs`{.action}.

![OVHGateway 02 stop](images/01-stop-ovhgateway02.png){.thumbnail}

Click on the `OVHgateway`{.action} virtual machine.

![OVHGateway 03](images/01-stop-ovhgateway03.png){.thumbnail}

From the `More` menu at the top, click `Soft Shutdown`{.action}.

![OVHGateway 04](images/01-stop-ovhgateway04.png){.thumbnail}

<a name="getpublicaddress"></a>
#### Step 2.4 Retrieving the public address in the OVHcloud Control Panel 

Retrieve information about the OVHcloud gateway network settings.

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), select your Nutanix cluster, and find the information in the `IPFO` field.

![Get IP Fail OVER](images/02-get-ipfailover.png){.thumbnail}

What is called **IPFO** is a range of 4 addresses. The first and last are reserved, the third is on OVHcloud hardware and serves as an **internet** gateway. The only usable IP address is the second address in the range. 

During installation, we will reuse this information to assign it to the new **GW-PFSENSE virtual machine**

```console
XX.XX.XX.N Reserved network address that appears on the OVHcloud client site
XX.XX.XX.N+1 IP address to be assigned to the GW-PFSENSE virtual machine WAN interface
XX.XX.XX.N+2 Address to be used as a gateway on the GW-PFSENSE VM WAN interface
XX.XX.XX.N+3 Reserved broadcast IP address
```

For example, if the **IPFO** address displayed on the client site is 123.123.123.4/30, use:

- **123.123.123.5** for the **WAN** interface address.
- **123.123.123.6** for the gateway on the **WAN** interface.

<a name="poweronvmpfsense"></a>
#### Step 2.5 Start the **GW-PFSENSE virtual machine**

Go back to virtual machine management in **Prism Central** and click on `GW-PFSENSE`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense01.png){.thumbnail}

Select `Power On`{.action} from the `More` menu.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense02.png){.thumbnail}

Click `Launch console`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense03.png){.thumbnail}

<a name="pfsenseinstall"></a>
#### Step 2.6 Installing **pfSense**

Review the pfSense licence information and press the `Enter`{.action} key to accept it.

![pfsense Installation 01](images/03-install-pfsense01.png){.thumbnail}

Choose `Install`, switch to `OK` with the `Tab`{.action} key and press `Enter`{.action}.

![pfsense Installation 02](images/03-install-pfsense02.png){.thumbnail}

Select `Continue with default keymap`, go to `Select` with the `Tab`{.action} key and press the `Enter`{.action} key.

![pfsense Installation 03](images/03-install-pfsense03.png){.thumbnail}

Select `Auto (ZFS)`, switch to `OK` with the `Tab`{.action} key, and then press the `Enter`{.action} key.

![pfsense Installation 04](images/03-install-pfsense04.png){.thumbnail}

Go to `Select` with the `Tab`{.action} key and press `Enter`{.action}.

![pfsense Installation 05](images/03-install-pfsense05.png){.thumbnail}

Select `Stripe`, switch to `OK` with the `Tab`{.action} key, and then press `Enter`{.action}.

![pfsense Installation 06](images/03-install-pfsense06.png){.thumbnail}

Select `NUTANIX VDISK` with the `Space`{.action} bar. Then go to `OK` with the `Tab`{.action} key and press `Enter`{.action}.

![pfsense Installation 07](images/03-install-pfsense07.png){.thumbnail}

Go to `YES` with the `Tab`{.action} key and press the `Enter`{.action} key.

![pfsense Installation 08](images/03-install-pfsense08.png){.thumbnail}

Choose `NO` with the `Tab`{.action} key and press the `Enter`{.action} key.

![pfsense Installation 09](images/03-install-pfsense09.png){.thumbnail}

Select `Reboot` and press the `Enter`{.action} key.

![pfsense Installation 10](images/03-install-pfsense10.png){.thumbnail}

<a name="pfsenseremovecdrom"></a>
#### Step 2.7 Eject the pfSense CDROM from the GW-PFSENSE virtual machine

From **Prism Central**, go back to **GW-PFSENSE** virtual machine management and perform the following steps to eject the **CDROM**.

Click on `Soft Shutdown`{.action} in the `More` menu on the **GW-PFSENSE** virtual machine to stop this virtual machine.

![Remove CDROM 01](images/03-remove-cdrom01.png){.thumbnail}

Click `Update`{.action}.

![Remove CDROM 02](images/03-remove-cdrom02.png){.thumbnail}

Click `Next`{.action}.

![Remove CDROM 03](images/03-remove-cdrom03.png){.thumbnail}

Click the `Eject`{.action} icon next to the CDROM.

![Remove CDROM 04](images/03-remove-cdrom04.png){.thumbnail}

Click `Next`{.action}.

![Remove CDROM 05](images/03-remove-cdrom05.png){.thumbnail}

Click `Next`{.action}.

![Remove CDROM 06](images/03-remove-cdrom06.png){.thumbnail}

Click `Save`{.action}.

![Remove CDROM 07](images/03-remove-cdrom07.png){.thumbnail}

Click `Power On`{.action} in the `More` menu.

![Remove CDROM 08](images/03-remove-cdrom08.png){.thumbnail}

Click `Launch Console`{.action} to continue the installation after startup. 

![Remove CDROM 09](images/03-remove-cdrom09.png){.thumbnail}

<a name="configureippfsense"></a>
#### Step 2.8 Configure pfSense IP Addresses Through the Console

We will configure the **pfSense** gateway IP addresses as follows:

- WAN interface: Use this part of the guide “[Retrieving a public address in the OVHcloud Control Panel](#getpublicaddress)” to assign the IP address and gateway on this interface.
- LAN Interface: 192.168.10.254/24 which is the gateway address of the Nutanix cluster private network followed by the subnet mask. 

Accept the licence by pressing the `Enter`{.action} key.

![Configure pfsense 01](images/04-configureip-pfsense01.png){.thumbnail}

Type `n` and press the `Enter`{.action} key when asked if you need **VLANs**.

![Configure pfsense 02](images/04-configureip-pfsense02.png){.thumbnail}

Type `vtnet0` as the interface name for the **WAN** and press `Enter`{.action}.

![Configure pfsense 03](images/04-configureip-pfsense03.png){.thumbnail}

Type `vtnet1` as the interface name for the **LAN** and press `Enter`{.action}.

![Configure pfsense 04](images/04-configureip-pfsense04.png){.thumbnail}

Confirm the changes by entering `y`, then press the `Enter`{.action} key.

![Configure pfsense 05](images/04-configureip-pfsense05.png){.thumbnail}

Type `2` to choose `Set interface(s) IP address` and press `Enter`{.action}.

![Configure pfsense 06](images/04-configureip-pfsense06.png){.thumbnail}

Select the **WAN** interface by typing `1` and pressing `Enter`{.action}.

![Configure pfsense 07](images/04-configureip-pfsense07.png){.thumbnail}

Type `n` and press `Enter`{.action} when prompted to configure the address by DHCP.

![Configure pfsense 08](images/04-configureip-pfsense08.png){.thumbnail}

Type **the public IP address with the mask** and press the `Enter`{.action} key, for example: **123.123.123.5/30**.

Then enter **the public** gateway IP address and press the `Enter`{.action} key, for example: **123.123.123.6**.

![Configure pfsense 09](images/04-configureip-pfsense09.png){.thumbnail}

Type `n` and press the `Enter`{.action} key when the wizard offers you the configuration of the **IPv6 address WAN interface via DHCP6**.

![Configure pfsense 10](images/04-configureip-pfsense10.png){.thumbnail}

When requested to **revert to HTTP as the webConfigurator protocol**, type `n` and press `Enter`{.action}.

![Configure pfsense 11](images/04-configureip-pfsense11.png){.thumbnail}

Press `Enter`{.action} to validate the registration of the IP address of the **WAN**.

![Configure pfsense 12](images/04-configureip-pfsense12.png){.thumbnail}

Type `2` and press the `Enter`{.action} key to configure IP addresses.

![Configure pfsense 13](images/04-configureip-pfsense13.png){.thumbnail}

Take option `2` and press the `Enter`{.action} key to change the LAN IP address.

![Configure pfsense 14](images/04-configureip-pfsense14.png){.thumbnail}

Type the private IP address followed by the mask `192.168.10.254/24` and press the `Enter`{.action} key.

![Configure pfsense 15](images/04-configureip-pfsense15.png){.thumbnail}

Press the `Enter`{.action} key to not put a gateway on the **LAN interface**.

![Configure pfsense 16](images/04-configureip-pfsense16.png){.thumbnail}

Press the `Enter`{.action} key to disable IPv6 usage.

![Configure pfsense 17](images/04-configureip-pfsense17.png){.thumbnail}

Type `n` and press the `Enter`{.action} key on the DHCP server activation request.

![Configure pfsense 18](images/04-configureip-pfsense18.png){.thumbnail}

Answer `n` and press the `Enter`{.action} key when prompted to **revert to HTTP as the webConfigurator protocol**.

![Configure pfsense 19](images/04-configureip-pfsense19.png){.thumbnail}

You can now manage the HTTPS gateway on the private network of the **Nutanix** cluster.

Press the `Enter`{.action} key to complete the command line configuration.

![Configure pfsense 20](images/04-configureip-pfsense20.png){.thumbnail}

<a name="configurepfsenseoptions"></a>
#### Step 2.9 Configure some options through the web interface

Connect to the pfSense Web Console with the URL <https://192.168.10.254> from a cluster virtual machine on the **AHV LAN: Base**.

Enter the following information:

- **User account**: admin
- **Default password**: pfsense

Then click on `SIGN IN`{.action}.

![WEB Configure pfsense 01](images/05-configure-pfsense01.png){.thumbnail}

<a name="changepassword"></a>
##### **Step 2.9.1 Change the pfSense default password**

From the `System`{.action} menu, choose `User Manager`{.action}.

![Change Password 01](images/06-change-password01.png){.thumbnail}

Click the `Pen`{.action} icon.

![Change Password 02](images/06-change-password02.png){.thumbnail}

Enter and confirm the password to the right of `Password`.

![Change Password 03](images/06-change-password03.png){.thumbnail}

Confirm the changes by clicking `Save`{.action} at the bottom of the menu.

![Change Password 03](images/06-change-password04.png){.thumbnail}.

<a name="addadminrule"></a>
##### **Step 2.9.2 Add a rule to allow remote administration from a public address**

Go to the `Firewall`{.action} menu and choose `Rules`{.action}.

![Authorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress01.png){.thumbnail}

Check that you are on the `WAN` tab, then click the `Add`{.action} button (at the bottom with the up arrow) to create a firewall rule.

![Authorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress02.png){.thumbnail}

Set these options in the **Edit Firewall Rule** section:

- **Action**: `Pass`
- **Interface**: `WAN`
- **Address Family**: `IPv4`
- **Protocol**: `TCP`

Select `Single host or alias` from the **Source** drop-down menu and enter the `public address` that can connect to the **pfSense** firewall.

![Authorisation admin from public ADDRESS 03](images/07-authorize-admin-from-publicaddress03.png){.thumbnail}

Then set these options in the **Destination** section:

- **Destination**: `WAN address`
- **Destination Port Range From**: `HTTPS`
- **Destination Port Range To**: `HTTPS`

Click `Save`{.action}.

![Authorisation admin from public ADDRESS 04](images/07-authorize-admin-from-publicaddress04.png){.thumbnail}

Click `Apply Changes`{.action} to activate the rule.

![Authorisation admin from public ADDRESS 05](images/07-authorize-admin-from-publicaddress05.png){.thumbnail}

The **pfSense** administration interface is then accessible from the Internet, only from the authorised network in HTTPS, here `https://123.123.123.5`.

<a name="configuregatewayfrance"></a>
### Step 3 Configuring the gateway in France

We will install the **GW-PFSENSE** gateway in France on the IP plan **192.168.0.0/24**.

<a name="downloadsourcesfr"></a>
#### Step 3.1 Downloading sources for pfSense installation

Download the ISO image of **pfSense** installation from this link: [Downloading pfSense](https://www.pfsense.org/download/){.external}.

Using [this documentation](https://docs.ovh.com/gb/en/nutanix/image-import/), add the pfSense **ISO image** to your Nutanix cluster.

<a name="createvmpfsensefr"></a>
#### Step 3.2 Creating the **GW-PFSENSE virtual machine**

Create a virtual machine with these settings:

- **Name**: `GW-PFSENSE`
- **Storage1**: `60 Go HDD` 
- **Storage2**: `DVD drive connected to pfSense ISO image`
- **RAM**: `4 GB` 
- **CPU**: `2 vCPU`
- **Network**: `two network cards on the AHV network: **Base**`

You can use [our guide on virtual machine management](https://docs.ovh.com/gb/en/nutanix/virtual-machine-management/) to create this virtual machine.

![Create VM 01](images/00-createvm01.png){.thumbnail}

<a name="shutdownovhgatewayfr"></a>
#### Step 3.3 Shutting down the **OVH-GATEWAY virtual machine**

To avoid duplicate IP addresses on the network, stop the **OVHgateway** virtual machine before starting the new virtual machine on **pfSense**.

Via **Prism Central**, click in the top left on the `main menu`{.action}.

![OVHGateway 01](images/01-stop-ovhgateway01.png){.thumbnail}

Click `VMs`{.action}.

![OVHGateway 02 stop](images/01-stop-ovhgateway02.png){.thumbnail}

Click the `OVHgateway`{.action} virtual machine.

![OVHGateway 03](images/01-stop-ovhgateway03.png){.thumbnail}

From the `More` menu at the top, click `Soft Shutdown`{.action}.

![OVHGateway 04](images/01-stop-ovhgateway04.png){.thumbnail}

<a name="getpublicaddressfr"></a>
#### Step 3.4 Retrieving the public address in the OVHcloud Control Panel

Retrieve information about the OVHcloud gateway network settings.

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), select your Nutanix cluster, and find the information in the `IPFO` field.

![Get IP Fail OVER](images/02-get-ipfailover.png){.thumbnail}

What is called **IPFO** is a range of 4 addresses. The first and last are reserved, the third is on OVHcloud hardware and serves as an **Internet** gateway. The only usable IP address is the second address in the range. 

During installation, we will reuse this information to assign it to the new **GW-PFSENSE virtual machine**

```console
XX.XX.XX.N Reserved network address that appears on the OVHcloud client site.
XX.XX.XX.N+1 IP address to be assigned to the GW-PFSENSE virtual machine WAN interface.
XX.XX.XX.N+2 Address to be used as a gateway on the GW-PFSENSE virtual machine WAN interface. 
XX.XX.XX.N+3 Reserved broadcast IP address.
```

For example, if the **IPFO** address displayed on the client site is 123.123.123.4/30, use:

- **123.123.123.5** for the **WAN** interface address;
- **123.123.123.6** for the gateway on the **WAN** interface.

<a name="poweronvmpfsensefr"></a>
#### Step 3.5 Start the **GW-PFSENSE virtual machine**

Go back to virtual machine management in **Prism Central** and click on `GW-PFSENSE`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense01.png){.thumbnail}

From the `More` menu, click `Power On`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense02.png){.thumbnail}

Click `Launch console`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense03.png){.thumbnail}

<a name="pfsenseinstallfr"></a>
#### Step 3.6 Installing pfSense

Review the pfSense licence information and press the `Enter`{.action} key to accept it.

![pfsense Installation 01](images/03-install-pfsense01.png){.thumbnail}

Choose `Install`, click `OK` with the `Tab`{.action} key, and then press `Enter`{.action}.

![pfsense Installation 02](images/03-install-pfsense02.png){.thumbnail}

Select `Continue with default keymap`, go to `Select` with the `Tab`{.action} key and press the `Enter`{.action} key.

![pfsense Installation 03](images/03-install-pfsense03.png){.thumbnail}

Select `Auto (ZFS)`, click `OK` with the `Tab`{.action} key, and then press the `Enter`{.action} key.

![pfsense Installation 04](images/03-install-pfsense04.png){.thumbnail}

Press `Select` with the `Tab`{.action} key and press `Enter`{.action}.

![pfsense Installation 05](images/03-install-pfsense05.png){.thumbnail}

Select `Stripe`, press `OK` with the `Tab`{.action} key, and then press `Enter`{.action}.

![pfsense Installation 06](images/03-install-pfsense06.png){.thumbnail}

Select `NUTANIX VDISK` with the `Space`{.action} bar. Then click `OK` with the `Tab`{.action} key and press `Enter`{.action}.

![pfsense Installation 07](images/03-install-pfsense07.png){.thumbnail}

Go to `YES` with the `Tab`{.action} key and press the `Enter`{.action} key.

![pfsense Installation 08](images/03-install-pfsense08.png){.thumbnail}

Choose `NO` with the `Tab`{.action} key and press the `Enter`{.action} key.

![pfsense Installation 09](images/03-install-pfsense09.png){.thumbnail}

Select `Reboot` and press the `Enter`{.action} key.

![pfsense Installation 10](images/03-install-pfsense10.png){.thumbnail}

<a name="pfsenseremovecdromfr"></a>
#### Step 3.7 Eject the pfSense CDROM from the GW-PFSENSE virtual machine

From **Prism Central**, go back to **GW-PFSENSE** virtual machine management and perform the following steps to eject the **CDROM**.

Click `Soft Shutdown`{.action} via the `More` menu on the **GW-PFSENSE** virtual machine to stop this virtual machine.

![Remove CDROM 01](images/03-remove-cdrom01.png){.thumbnail}

Click `Update`{.action}.

![Remove CDROM 02](images/03-remove-cdrom02.png){.thumbnail}

Click `Next`{.action}.

![Remove CDROM 03](images/03-remove-cdrom03.png){.thumbnail}

Click the `Eject`{.action} icon next to the CDROM.

![Remove CDROM 04](images/03-remove-cdrom04.png){.thumbnail}

Click `Next`{.action}.

![Remove CDROM 05](images/03-remove-cdrom05.png){.thumbnail}

Click `Next`{.action}.

![Remove CDROM 06](images/03-remove-cdrom06.png){.thumbnail}

Click `Save`{.action}.

![Remove CDROM 07](images/03-remove-cdrom07.png){.thumbnail}

Click `Power On`{.action} in the `More` menu.

![Remove CDROM 08](images/03-remove-cdrom08.png){.thumbnail}

Click `Launch Console`{.action} to continue the installation after startup. 

![Remove CDROM 09](images/03-remove-cdrom09.png){.thumbnail}

<a name="configureippfsensefr"></a>
#### Step 3.8 Configure pfSense IP Addresses Through the Console

We will configure the **pfSense** gateway IP addresses as follows:

- WAN interface: Use this part of the guide “[Retrieving a public address in the OVHcloud Control Panel](#getpublicaddressfr)” to assign the IP address and gateway on this interface.
- LAN interface: 192.168.0.254/24 which is the gateway address of the Nutanix private network followed by the subnet mask. 

Accept the licence by pressing the `Enter`{.action} key.

![Configure pfsense 01](images/04-configureip-pfsense01.png){.thumbnail}

Type `n`{.action} and press the `Enter`{.action} key when querying for **VLANs**.

![Configure pfsense 02](images/04-configureip-pfsense02.png){.thumbnail}

Type `vtnet0` as the interface name for the **WAN** and press `Enter`{.action}.

![Configure pfsense 03](images/04-configureip-pfsense03.png){.thumbnail}

Type `vtnet1` as the interface name for the **LAN** and press `Enter`{.action}.

![Configure pfsense 04](images/04-configureip-pfsense04.png){.thumbnail}

Confirm the changes by entering `y` and press the `Enter`{.action} key.

![Configure pfsense 05](images/04-configureip-pfsense05.png){.thumbnail}

Type `2` to choose `Set interface(s) IP address` and press `Enter`{.action}.

![Configure pfsense 06](images/04-configureip-pfsense06.png){.thumbnail}

Select the **WAN** interface by typing `1` and press `Enter`{.action}.

![Configure pfsense 07](images/04-configureip-pfsense07.png){.thumbnail}

Type `n`{.action} and press `Enter`{.action} when prompted to configure the address by DHCP.

![Configure pfsense 08](images/04-configureip-pfsense08.png){.thumbnail}

Type **the public IP address with the mask** and press the `Enter`{.action} key. For example, **123.123.123.5/30**.

Then enter **the public gateway IP address** and press the `Enter`{.action} key. For example, **123.123.123.6**.

![Configure pfsense 09](images/04-configureip-pfsense09.png){.thumbnail}

Answer `n` and press the `Enter`{.action} key when prompted to configure the **IPv6 address WAN interface via DHCP6**.

![Configure pfsense 10](images/04-configureip-pfsense10.png){.thumbnail}

When prompted to **revert to HTTP as the webConfigurator protocol**, type `n` and press `Enter`{.action}.

![Configure pfsense 11](images/04-configureip-pfsense11.png){.thumbnail}

Press `Enter`{.action} to validate the registration of the IP address of the **WAN**.

![Configure pfsense 12](images/04-configureip-pfsense12.png){.thumbnail}

Type `2` and press the `Enter`{.action} key to configure IP addresses.

![Configure pfsense 13](images/04-configureip-pfsense13.png){.thumbnail}

Take option `2` and press the `Enter`{.action} key to change the LAN IP address.

![Configure pfsense 14](images/04-configureip-pfsense14.png){.thumbnail}

Type the private IP address followed by the mask `192.168.0.254/24` and press the `Enter`{.action} key.

![Configure pfsense 15](images/04-yconfigureip-pfsense15-fr.png){.thumbnail}

Press the `Enter`{.action} key to avoid putting a gateway on the **LAN interface**.

![Configure pfsense 16](images/04-yconfigureip-pfsense16-fr.png){.thumbnail}

Press the `Enter`{.action} key to disable IPv6 on the **LAN** interface.

![Configure pfsense 17](images/04-yconfigureip-pfsense17-fr.png){.thumbnail}

Type `n` and press the `Enter`{.action} key on the DHCP server activation request.

![Configure pfsense 18](images/04-yconfigureip-pfsense18-fr.png){.thumbnail}

Answer `n` and press the `Enter`{.action} key when prompted to **revert to HTTP as the webConfigurator protocol**.

![Configure pfsense 19](images/04-yconfigureip-pfsense19-fr.png){.thumbnail}

You can now manage the gateway in HTTPS on the private network.

Press the `Enter`{.action} key to complete the command line configuration.

![Configure pfsense 20](images/04-yconfigureip-pfsense20-fr.png){.thumbnail}

<a name="configurepfsenseoptionsfr"></a>
#### Step 3.9 Configure some options through the web interface

Connect to the pfSense Web Console with this URL `https://192.168.0.254` from a virtual machine on the **AHV LAN: Base**.

Enter this information:

- **User account**: admin
- **Default password**: pfsense

Then click `SIGN IN`{.action}.

![WEB Configure pfsense 01](images/05-configure-pfsense01-fr.png){.thumbnail}

<a name="changepasswordfr"></a>
##### **Step 3.9.1 Change the pfSense default password**

From the `System`{.action} menu, choose `User Manager`{.action}.

![Change Password 01](images/06-change-password01.png){.thumbnail}

Click the `Pen`{.action} icon.

![Change Password 02](images/06-change-password02.png){.thumbnail}

Enter and confirm the password to the right of `Password`.

![Change Password 03](images/06-change-password03.png){.thumbnail}

Confirm the changes by clicking `Save`{.action} at the bottom of the menu.

![Change Password 03](images/06-change-password04.png){.thumbnail}.

<a name="addadminrulefr"></a>
##### **Step 3.9.2 Add a rule to allow remote administration from a public address.**

Go to the `Firewall`{.action} menu and choose `Rules`{.action}.

![Authorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress01.png){.thumbnail}

Check that you are on the `WAN` tab, then click the `Add`{.action} button (at the bottom with the up arrow) to create a firewall rule.

![Authorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress02.png){.thumbnail}

Choose these options from **Edit Firewall Rule**:

- **Action**: `Pass`
- **Interface**: `WAN`
- **Address Family**: `IPv4`
- **Protocol**: `TCP`

Select `Single host or alias` from the **Source** drop-down menu and enter the `public address` that can connect to the **pfSense** firewall.

![Authorisation admin from public ADDRESS 03](images/07-authorize-admin-from-publicaddress03.png){.thumbnail}

Add these options in **Destination**:

- **Destination**: `WAN address`
- **Destination Port Range From**: `HTTPS`
- **Destination Port Range To**: `HTTPS`

Click `Save`{.action}.

![Authorisation admin from public ADDRESS 04](images/07-authorize-admin-from-publicaddress04.png){.thumbnail}

Click `Apply Changes`{.action} to activate the rule.

![Authorisation admin from public ADDRESS 05](images/07-authorize-admin-from-publicaddress05.png){.thumbnail}

The administration interface of **pfSense** is then accessible from the Internet, on the authorised network via this URL `https://WANaddress`, here `https://123.123.123.5`.

<a name="configurevpnipsec"></a>
### Step 4 Setting up the IPsec VPN

Now that the two gateways have been replaced, we will configure the IPsec VPN to allow communication between the two clusters.

<a name="ipseccanada"></a>
#### Step 4.1 Setting Up the Site in Canada

<a name="paramipsectofrance"></a>
##### **Step 4.1.1 Set up IPsec VPN in France**

Connect from an authorised network to Canada's public address in HTTPS with this URL `https://publicaddress-pfsense-canada`. 

Go to the `VPN`{.action} menu and choose `IPsec`{.action}.

![Create VPN from Canada 01](images/08-configure-vpn-from-canada01.png){.thumbnail}

Click `Add P1`{.action} to create IPsec VPN Phase 1.

![Create VPN from Canada 02](images/08-configure-vpn-from-canada02.png){.thumbnail}

Enter this information:

- **Description**: `VPN TO FRANCE`
- **Key Exchange version**: `IKEv2`
- **Internet Protocol**: `IPv4`
- **Interface**: `WAN`
- **Remote Gateway**: `Public address of the pfSense virtual machine in France`

![Create VPN from Canada 03](images/08-configure-vpn-from-canada03.png){.thumbnail}

Click `Generate new Pre-Shared Key`{.action} to generate a pre-shared key in the `Pre-Share Key` field.

> [!primary]
> 
> Write down or copy the key, it will be used for the VPN configuration on the gateway in France.
> 
> Keep the information in `Encryption Algorithm`.
>

![Create VPN from Canada 04](images/08-configure-vpn-from-canada04.png){.thumbnail}

Click `Save`{.action} at the bottom of the menu.

![Create VPN from Canada 05](images/08-configure-vpn-from-canada05.png){.thumbnail}

Click `Apply Changes`{.action}.

![Create VPN from Canada 06](images/08-configure-vpn-from-canada06.png){.thumbnail}

Click `Show Phase 2 Entries`{.action}.

![Create VPN from Canada 07](images/08-configure-vpn-from-canada07.png){.thumbnail}

Click `Add P2`{.action} to add IPsec VPN Phase 2.

![Create VPN from Canada 08](images/08-configure-vpn-from-canada08.png){.thumbnail}

Enter this information:

- **Description**: `TO LAN 192.168.0.0/24 France`
- **Local Network**: `Subnet LAN`
- **Remote Network**: Type `Network`, Address `192.168.0.0/24`


![Create VPN from Canada 09](images/08-configure-vpn-from-canada09.png){.thumbnail}

> [!primary]
> 
> Take note of the encryption settings.
>

![Create VPN from Canada 10](images/08-configure-vpn-from-canada10.png){.thumbnail}

Click `Save`{.action}.

![Create VPN from Canada 11](images/08-configure-vpn-from-canada11.png){.thumbnail}

Click `Apply Changes`{.action} to complete the creation of the IPsec VPN on Canada's **pfSense** virtual machine.

![Create VPN from Canada 12](images/08-configure-vpn-from-canada12.png){.thumbnail}

<a name="addfwruletofrance"></a>
##### **Step 4.1.2 Adding a firewall rule to allow network flow through the IPsec VPN between Canada and France**

Click `Rules`{.action} in the `Firewall`{.action} menu.

![Create IPsec firewall rule Canada 01](images/09-addipsecrule-from-canada01.png){.thumbnail}

Go to the `IPsec`{.action} tab and click the `Add`{.action} button (at the bottom with the up arrow).

![Create IPsec firewall rule Canada 02](images/09-addipsecrule-from-canada02.png){.thumbnail}

Modify these options:

- **Source**: `Net LAN`
- **Destination**: `Network` and `192.168.0.0/24` 

Then click `Save`{.action}.

![Create IPsec firewall rule Canada 03](images/09-addipsecrule-from-canada03.png){.thumbnail}

Click the same `Add`{.action} button again (at the bottom with the up arrow) to add a second rule.

![Create IPsec firewall rule Canada 04](images/09-addipsecrule-from-canada04.png){.thumbnail}

Modify these options: 

- **Source**: `Network` et `192.168.0.0/24` 
- **Destination**: `Net LAN`

Click `Save`{.action}.

![Create IPsec firewall rule Canada 05](images/09-addipsecrule-from-canada05.png){.thumbnail}

Click `Apply Changes`{.action}.

![Create IPsec firewall rule Canada 06](images/09-addipsecrule-from-canada06.png){.thumbnail}

The setting on the bridge in Canada is then completed.

<a name="ipsecfrance"></a>
#### Step 4.2 Website configuration in France

<a name="paramipsectocanada"></a>
##### **Step 4.2.1 Set up IPsec VPN to Canada**

Log in to the public address of the France gateway in HTTPS via: `https://publicaddress-pfsense-france`

Go to the `VPN`{.action} menu and choose `IPsec`{.action}.

![Create VPN from France 01](images/10-configure-vpn-from-france01.png){.thumbnail}

Click `Add P1`{.action} to create IPsec VPN Phase 1.

![Create VPN from France 02](images/10-configure-vpn-from-france02.png){.thumbnail}

Choose this information:

- **Description**: `VPN TO CANADA`
- **Key Exchange version**: `IKEv2`
- **Internet Protocol**: `IPv4`
- **Interface**: `WAN`
- **Remote Gateway**: `Public address of the pfSense virtual machine in Canada`

![Create VPN from France 03](images/10-configure-vpn-from-france03.png){.thumbnail}

Paste the pre-shared key that was generated on the gateway in Canada into **Pre-shared Key**.

Compare and match the parameters in `Encryption Algorithm` with the gateway of Canada.

![Create VPN from France 04](images/10-configure-vpn-from-france04.png){.thumbnail}

Click `Save`{.action}.

![Create VPN from France 05](images/10-configure-vpn-from-france05.png){.thumbnail}

Click `Apply Changes`{.action}.

![Create VPN from France 06](images/10-configure-vpn-from-france06.png){.thumbnail}

Click `Show Phase 2 Entries`{.action}.

![Create VPN from France 07](images/10-configure-vpn-from-france07.png){.thumbnail}

Click `Add P2`{.action} to add IPsec VPN Phase 2.

![Create VPN from France 08](images/10-configure-vpn-from-france08.png){.thumbnail}

Enter the following information:

- **Description**: `TO LAN 192.168.10.0/24 CANADA`
- **Local Network**: `Subnet LAN`
- **Remote Network**: Type `Network`, Address `192.168.10.0/24`

![Create VPN from France 09](images/10-configure-vpn-from-france09.png){.thumbnail}

Check the encryption settings and make them identical with the ones set on the Canada gateway.

![Create VPN from France 10](images/10-configure-vpn-from-france10.png){.thumbnail}

Click `Save`{.action}.

![Create VPN from France 11](images/10-configure-vpn-from-france11.png){.thumbnail}

Click `Apply Changes`{.action} to finish creating the IPsec VPN.

![Create VPN from France 12](images/10-configure-vpn-from-france12.png){.thumbnail}

<a name="addruletocanada"></a>
##### **Step 4.2.2 Adding a firewall rule to allow network flow through IPsec VPN between Canada and France**

Click `Rules`{.action} in the `Firewall`{.action} menu.

![Create IPsec firewall rule France01](images/11-addipsecrule-from-france01.png){.thumbnail}

Go to the `IPsec`{.action} tab and click the `Add`{.action} button (at the bottom with the up arrow).

![Create IPsec firewall rule France02](images/11-addipsecrule-from-france02.png){.thumbnail}

Modify these options:

- **Source**: `Net LAN`
- **Destination**: `Network` and `192.168.10.0/24` 

Then click `Save`{.action}.

![Create IPsec firewall rule France03](images/11-addipsecrule-from-france03.png){.thumbnail}

Click `Add`{.action} again (at the bottom with the up arrow) to add a second rule.

![Create IPsec firewall rule France04](images/11-addipsecrule-from-france04.png){.thumbnail}

Modify these options: 

- **Source**: `Network` with this network `192.168.10.0/24` which corresponds to the private network of Canada
- **Destination**: `Net LAN`

Click `Save`{.action}.

![Create IPsec firewall rule France05](images/11-addipsecrule-from-france05.png){.thumbnail}

Click `Apply Changes`{.action}. 

![Create IPsec firewall rule France06](images/11-addipsecrule-from-france06.png){.thumbnail}

VPN setup is complete on both clusters. It is now possible to set up replicas through the secure VPN tunnel.

<a name="gofurther"></a>
## Go further

[Disaster Recovery Plan on Nutanix](https://docs.ovh.com/gb/en/nutanix/disaster-recovery-plan-overview/)

[Asynchronous or *NearSync* replication through Prism Element](https://docs.ovh.com/gb/en/nutanix/prism-element-nutanix-replication/)

Join our community of users on <https://community.ovh.com/en/>.
