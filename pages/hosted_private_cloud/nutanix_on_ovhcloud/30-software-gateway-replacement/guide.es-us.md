---
title: Sustitución de OVHgateway (EN)
excerpt: Find out how to replace the OVHgateway with another manageable virtual machine
updated: 2022-12-05
---

## Objective

This guide will explain how to replace the outgoing internet gateway (OVHgateway) with another network operating system that will give you, in addition to internet access, the ability to configure NAT and VPN (Ipsec or SSL VPN).

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure  that they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) or reaching out to [our community](https://community.ovh.com/en/) if you experience any issues.
>

## Requirements

- One Nutanix cluster provided by OVHcloud
- Access to the [OVHcloud Control Panel](/links/manager)
- Access to your clusters via Prism Central

## Instructions

The OVHgateway uses two network cards by default: 

- One on VLAN 0 (base) connected to the internet with an additional OVHcloud IP address.
- One on VLAN 1 (infra) connected to the local administration network with a range of IP addresses, in this example in 192.168.10.0/24.

In our guide, we will replace this gateway with the network operating system **pfSense Community edition** without software support.

> [!primary]
> It is entirely possible to use this guide to install other network operating systems compatible with AHV.

<a name="downloadsources"></a>

### Downloading sources for pfSense installation

Download an ISO image for the **pfSense** installation from this link: [Downloading pfSense](https://www.pfsense.org/download/){.external}.

Using [this documentation](/pages/hosted_private_cloud/nutanix_on_ovhcloud/05-image-import), add the **pfSense ISO** image to your Nutanix cluster.

<a name="createvmpfsense"></a>

### Creating the GW-PFSENSE virtual machine

Create a virtual machine with these settings:

- **Name**: `GW-PFSENSE`
- **Storage1**: `100 GB HDD` 
- **Storage2**: `DVD drive connected to the pfSense ISO file`
- **RAM**: `4 GB` 
- **CPU**: `2 vCPU`
- **Network**: `2 network cards, one on VLAN 0 (base) and the other on VLAN 1 (infra)`

You can use [our guide on virtual machine management](/pages/hosted_private_cloud/nutanix_on_ovhcloud/06-virtual-machine-management) to create this virtual machine.

![Create VM 01](images/00-createvm01.png){.thumbnail}

<a name="shutdownovhgateway"></a>

### Shutting down the OVH-GATEWAY virtual machine

To avoid duplicate IP addresses on the network, stop the **OVHgateway** virtual machine before starting the new virtual machine on **pfSense**.

Via **Prism Central**, click in the top left on the `main menu`{.action}.

![OVHGateway 01](images/01-stop-ovhgateway01.png){.thumbnail}

Click `VMs`{.action}.

![OVHGateway 02 stop](images/01-stop-ovhgateway02.png){.thumbnail}

Click on the `OVHgateway`{.action} virtual machine.

![OVHGateway 03](images/01-stop-ovhgateway03.png){.thumbnail}

From the `More`{.action} menu at the top, click `Soft Shutdown`{.action}.

![OVHGateway 04](images/01-stop-ovhgateway04.png){.thumbnail}

<a name="getpublicaddress"></a>

### Retrieving the public address in the OVHcloud Control Panel 

Retrieve information about the OVHcloud gateway network settings.

Log in to the [OVHcloud Control Panel](/links/manager), select your Nutanix cluster, and find the information in the `IPFO` field.

![Get IP Fail OVER](images/02-get-ipfailover.png){.thumbnail}

**IPFO** is a range of 4 addresses. The first and last are reserved, the third is on OVHcloud hardware and serves as an **Internet** gateway. The only usable IP address is the second address in the range.

During installation, we will reuse this information to assign it to the new **GW-PFSENSE virtual machine**.

```console
XX.XX.XX.N Reserved network address that appears on the OVHcloud client site
XX.XX.XX.N+1 IP address to be assigned to the GW-PFSENSE virtual machine WAN interface
XX.XX.XX.N+2 Address to be used as a gateway on the GW-PFSENSE VM WAN interface
XX.XX.XX.N+3 Reserved broadcast IP address
```

For example, if the **IPFO** address displayed on the client site is 198.51.100.0/30, use:

- **198.51.100.1** for the **WAN** interface address.
- **198.51.100.2** for the gateway on the **WAN** interface.

<a name="poweronvmpfsense"></a>

### Start the GW-PFSENSE virtual machine

Go back to virtual machine management in **Prism Central** and click on `GW-PFSENSE`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense01.png){.thumbnail}

Select `Power On`{.action} from the `More`{.action} menu.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense02.png){.thumbnail}

Click `Launch console`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense03.png){.thumbnail}

<a name="pfsenseinstall"></a>

### Installing pfSense

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

### Eject the pfSense CDROM from the GW-PFSENSE virtual machine

From **Prism Central**, go back to **GW-PFSENSE** virtual machine management and perform the following steps to eject the CDROM.

Click on `Soft Shutdown`{.action} in the `More`{.action} menu on the **GW-PFSENSE** virtual machine to stop this virtual machine.

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

Click `Power On`{.action} in the `More`{.action} menu.

![Remove CDROM 08](images/03-remove-cdrom08.png){.thumbnail}

Click `Launch Console`{.action} to continue the installation after startup. 

![Remove CDROM 09](images/03-remove-cdrom09.png){.thumbnail}

<a name="configureippfsense"></a>

### Configure pfSense IP addresses through the console

We will configure the **pfSense** gateway IP addresses as follows:

- WAN interface: Use this part of the [Retrieving a public address in the OVHcloud Control Panel](#getpublicaddress) guide to assign the IP address and gateway on this interface.
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

Type **the public IP address with the mask** and press the `Enter`{.action} key, for example: **198.51.100.1/30**.

Then enter **the public** gateway IP address and press the `Enter`{.action} key, for example: **198.51.100.2**.

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

### Configure some options through the web interface

Connect to the pfSense Web Console with the URL <https://192.168.10.254> from a cluster virtual machine on the **AHV LAN: Base**.

Enter the following information:

- **User account**: admin
- **Default password**: pfsense

Then click `SIGN IN`{.action}.

![WEB Configure pfsense 01](images/05-configure-pfsense01.png){.thumbnail}

<a name="changepassword"></a>

#### Change the pfSense default password**

From the `System`{.action} menu, choose `User Manager`{.action}.

![Change Password 01](images/06-change-password01.png){.thumbnail}

Click the `Pen`{.action} icon.

![Change Password 02](images/06-change-password02.png){.thumbnail}

Enter and confirm the password to the right of `Password`.

![Change Password 03](images/06-change-password03.png){.thumbnail}

Confirm the changes by clicking `Save`{.action} at the bottom of the menu.

![Change Password 03](images/06-change-password04.png){.thumbnail}.

<a name="addadminrule"></a>

#### Add a rule to allow remote administration from a public address

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

The **pfSense** administration interface is then accessible from the Internet, only from the authorised network in HTTPS, here `https://198.51.100.1`.

### Configuring Internet Access in a New VLAN

We will create a new subnet in VLAN 2 with an address range in 192.168.2.0/24 and a gateway in 192.168.2.254.

#### PfSense VM modification

Log in to Prism Central to make these changes:

Use the [Isolating management machines from production](/pages/hosted_private_cloud/nutanix_on_ovhcloud/27-isolate-management-vm) guide to create a new VLAN on your Nutanix cluster with these settings:

- **VLAN name**: `Production`
- **VLAN number**: `2`

Your new network must appear in **Subnets**.

![08 add vlan production 01](images/08-add-vlan-production01.png){.thumbnail}

Now that the new subnet has been created, we will add an adapter to the configuration of your **GW-PFSENSE** virtual machine.

Via the virtual machine management, select your **GW-PFSENSE** virtual machine, go to the `Actions`{.action} menu and choose `Update`{.action}.

![09 update-vm-pfsense 01](images/09-update-vm-pfsense01.png){.thumbnail}

Click `Next`{.action}.

![09 update-vm-pfsense 02](images/09-update-vm-pfsense02.png){.thumbnail}

Click `Attach to Subnet`{.action}.

![09 update-vm-pfsense 03](images/09-update-vm-pfsense03.png){.thumbnail}

Choose the `Production`{.action} subnets and click `Save`{.action}.

![09 update-vm-pfsense 04](images/09-update-vm-pfsense04.png){.thumbnail}

Click `Next`{.action}.

![09 update-vm-pfsense 05](images/09-update-vm-pfsense05.png){.thumbnail}

Click `Next`{.action}.

![09 update-vm-pfsense 06](images/09-update-vm-pfsense06.png){.thumbnail}

Click `Save`{.action}.

![09 update-vm-pfsense 07](images/09-update-vm-pfsense07.png){.thumbnail}

#### Enable and configure the new network adapter on pfSense

Log in to the pfSense interface in https, with the public address (for example, **https://198.51.100.1**) in your pfSense administration interface, and follow these instructions:

Go to the `Interfaces`{.action} menu and click `Assignments`{.action}.

![10 addinterface-in-pfsense 01](images/10-addinterface-in-pfsense01.png){.thumbnail}

Click `+ Add`{.action} to the right of **Available network ports:**.

![10 addinterface-in-pfsense 02](images/10-addinterface-in-pfsense02.png){.thumbnail}

Click `Save`{.action}.

![10 addinterface-in-pfsense 03](images/10-addinterface-in-pfsense03.png){.thumbnail}

In the `Interfaces`{.action} menu, click `OPT1`{.action}

![11 assign ip to new interface 01](images/11-assign-ip-to-new-interface01.png){.thumbnail}

Check **Enable Interfaces** and modify these settings :

* **Description** : `VLAN2`
* **IPv4 Address** : `192.168.2.254/24`

Click `Save`{.action}.

![11 assign ip to new interface 02](images/11-assign-ip-to-new-interface02.png){.thumbnail}

Click `Apply Changes`{.action}.

![11 assign ip to new interface 03](images/11-assign-ip-to-new-interface03.png){.thumbnail}

Go to the `Firewall` menu and click `Rules`{.action}.

![12 add rule for new card 01](images/12-add-rule-for-new-card01.png){.thumbnail}

Go to the `VLAN2`{.action} tab and click the `Add`{.action} button on the left.

![12 add rule for new card 02](images/12-add-rule-for-new-card02.png){.thumbnail}

Change these values :

* **Protocol** : `Any`
* **Source** : `VLAN2 net`
* **Destination** : `any`

Click `Save`{.action}.

![12 add rule for new card 03](images/12-add-rule-for-new-card03.png){.thumbnail}

Click `Apply Changes`{.action}.

![12 add rule for new card 04](images/12-add-rule-for-new-card04.png){.thumbnail}

Your VLAN 2 is now connected to the Internet.

<a name="gofurther"></a>

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
