---
title: Configurar HYCU Backup (EN)
excerpt: Installing HYCU Backup on a Nutanix cluster
updated: 2024-12-10
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

HYCU for Nutanix is a backup software available for Nutanix. 

**Find out how to install, configure and use HYCU on a Nutanix cluster with Object Storage storage provided by OVHcloud.**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. However, we recommend reaching out to the [OVHcloud Professional Services team](/links/professional-services) or a [specialized provider](/links/partner) if you encounter difficulties or have doubts regarding the administration, use, or setup of a service on a server.>
>

## Requirements

- A valid [HYCU for OVHcloud](/links/hosted-private-cloud/hycu) license in your OVHcloud account (the first step of this guide will detail the procedure to follow) or a HYCU license purchased from a third-party provider.
- A Nutanix on OVHcloud cluster in your OVHcloud account.
- Access to your [OVHcloud Control Panel](/links/manager).
- Access to the cluster via Prism Central.
- A Public Cloud project with a High Performance Object Storage type storage bucket, with a user with read and write permissions for this bucket. You can find more information on how to create a Public Cloud project and how to use the High Performance Object Storage service on the following pages:
    - [Creating your first OVHcloud Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project).
    - [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).
- 60 GB of storage, 8 GB of memory, and 8 cores on your Nutanix Cluster for the HYCU Instance/Appliance.

## Instructions

### Content Overview

- [Order a HYCU for OVHcloud license](#license-order)
    - [Activate the license](#license-activation)
    - [Regenerate a HYCU for OVHcloud license](#license-renew)
    - [Cancel a HYCU for OVHcloud subscription (and its associated license)](#license-cancel)
    - [Upgrade a HYCU for OVHcloud license](#license-upgrade)
- [Install and configure HYCU](#installation)
    - [Add the HYCU installation image](#adding-image)
    - [Configure the IP address for ISCSI](#adding-ip)
    - [Add a user account in Prism Element for HYCU](#adding-user)
    - [Create the virtual machine for HYCU](#create-vm)
    - [Configure URL redirection for HYCU to the public network](#url-redirection)
    - [Configure HYCU](#hycu-configuration)
- [HYCU update](#hycu-update)
    - [Add sources for a new HYCU version](#adding-new-sources)
    - [Start the update from HYCU](#update-launch)
- [Configure backups in HYCU](#backup-configuration)
    - [Set passwords for virtual machine connections](#setting-passwords)
    - [Create backup strategies](#backup-strategies)
    - [Assign backup strategies](#backup-strategies-assignment)
- [Check the backup status](#backup-check)
- [Restore from HYCU](#restoring)
    - [Restore a virtual machine](#restoring-vm)
    - [Retrieve a file](#restoring-file)
    - [Restore an application](#restoring-app)

### Order a HYCU for OVHcloud license <a name="license-order"></a>

We offer different license packs based on the number of virtual machines (VMs) used by your Nutanix workloads.

> [!success]
> For more information, visit our [HYCU for OVHcloud](/links/hosted-private-cloud/hycu) page.

> [!primary]
> **You already have a HYCU license?**<br>
> Continue reading this guide at the [Install and configure HYCU](#installation) step.

Log in to the [OVHcloud Control Panel](/links/manager) and navigate to `Hosted Private Cloud`{.action} and `Storage and Backup`{.action}.

Click on `HYCU`{.action} then `All My Licenses`{.action}.

![Order a HYCU license](images/hycu-for-ovhcloud-license-order.png){.thumbnail}

Click the `Get Started`{.action} button to choose and order a HYCU for OVHcloud pack.

Once your order is complete, you will receive a confirmation email and your subscription will appear in the `All My Licenses`{.action} dashboard.

Click on your license to proceed with activation.

#### Activate the license <a name="license-activation"></a>

> [!warning]
> This step requires that you have **the HYCU software already installed and configured on your Nutanix cluster**.<br>
> If you have not already done so, please read the [Install and configure HYCU](#installation) step of this guide before following the HYCU license activation step below.
>

/// details | Activate the HYCU license

When you click on a license in your dashboard, a menu will appear allowing you to rename, activate, renew, or cancel your HYCU for OVHcloud license.

Click the `Activate License`{.action} button (in the `Shortcuts` box).

![Activate a HYCU license](images/hycu-for-ovhcloud-license-activation-01.png){.thumbnail}

A window will open to upload the license request file.

![Activate a HYCU license](images/hycu-for-ovhcloud-license-activation-02.png){.thumbnail}

To obtain your license request file, log in to your Hybrid Cloud HYCU instance/appliance and go to the `Licensing`{.action} menu.

![Activate a HYCU license](images/hycu-for-ovhcloud-license-activation-03.png){.thumbnail}

Click `Download Request`{.action} and download the file.

![Activate a HYCU license](images/hycu-for-ovhcloud-license-activation-04.png){.thumbnail}

Back in the OVHcloud Control Panel, drag and drop the downloaded file into the open window, then click `Activate`{.action}.

![Activate a HYCU license](images/hycu-for-ovhcloud-license-activation-05.png){.thumbnail}

After verification, the status of your license will change to `Active`.

![Activate a HYCU license](images/hycu-for-ovhcloud-license-activation-06.png){.thumbnail}

Once the license is active, click the `Download License`{.action} button (at the bottom of the `General Information` box).

Return to the `Licensing`{.action} menu of your Hybrid Cloud HYCU instance/appliance and upload the license you just downloaded from the OVHcloud Control Panel.

![Activate a HYCU license](images/hycu-for-ovhcloud-license-activation-07.png){.thumbnail}

A window will inform you that your license has been validated.

![Activate a HYCU license](images/hycu-for-ovhcloud-license-activation-08.png){.thumbnail}

///

#### Regenerate a HYCU for OVHcloud license <a name="license-renew"></a>

If your HYCU technical configuration has changed, you will need to make a new request to obtain a new license file compatible with your HYCU controller.

/// details | Regenerate a HYCU for OVHcloud license

Log in to the [OVHcloud Control Panel](/links/manager) and navigate to `Hosted Private Cloud`{.action} and `Storage and Backup`{.action}. Click on `HYCU`{.action}.

Once in your license dashboard, click the `Regenerate License`{.action} button (in the `Shortcuts` box).

![Regenerate HYCU license](images/hycu-for-ovhcloud-license-renew.png){.thumbnail}

As with the activation of your license, download and upload your license request.

Then follow the same process as for license activation:

- Download the license key.
- Upload the license key to your Hybrid Cloud instance/appliance.

///

#### Cancel a HYCU for OVHcloud subscription (and its associated license) <a name="license-cancel"></a>

/// details | How to cancel a HYCU for OVHcloud subscription

Log in to the [OVHcloud Control Panel](/links/manager) and navigate to `Hosted Private Cloud`{.action} and `Storage and Backup`{.action}. Click on `HYCU`{.action}.

Once in your license dashboard, click `Cancel License`{.action} in the `Subscription` box.

![Cancel HYCU subscription](images/hycu-for-ovhcloud-license-cancel-01.png){.thumbnail}

Then confirm the cancellation by typing `TERMINATE` in the provided box, then click `Cancel`{.action}.

![Cancel HYCU subscription](images/hycu-for-ovhcloud-license-cancel-02.png){.thumbnail}

///

#### Upgrade a HYCU for OVHcloud license <a name="license-upgrade"></a>

To upgrade your offer, you must first cancel your current HYCU for OVHcloud subscription (see above) and then [order a new subscription](/links/hosted-private-cloud/hycu) with the required virtual machines pack.

### Install and Configure HYCU <a name="installation"></a>

#### Add the HYCU installation image <a name="adding-image"></a>

Log in to **Prism Central**.

For more information on how to connect to the cluster, refer to the [Go further](#gofurther) section of this guide.

From the main menu, click `Images`{.action} from the `Compute & Storage menu`{.action}.

![Add Image HYCU 01](images/00-addimagehycu01.png){.thumbnail}

Click `Add Image`{.action}.

![Add Image HYCU 02](images/00-addimagehycu02.png){.thumbnail}

Choose `URL`{.action} as the source type, enter the URL `https://download.hycu.com/ec/v4.X.X/hycu-4.X.X-XXXX.qcow2` in **Enter Image URL**, and click `Upload file`{.action}. 

> [!primary]
> 
> The URL used for the download is the latest version available on the HYCU website.

![Add Image HYCU 03](images/00-addimagehycu03.png){.thumbnail}

Remove the **.qcow2** extension behind the name and leave `hycu-4.X.X-XXXX`. Enter a description and click `Next`{.action}.

> [!warning]
> It is important to remove the extension in the name to facilitate the HYCU configuration process.

![Add Image HYCU 04](images/00-addimagehycu04.png){.thumbnail}

Click `Save`{.action} to import the image.

![Add Image HYCU 05](images/00-addimagehycu05.png){.thumbnail}

On the **Prism Central** dashboard, click the `cluster name`{.action} in the **Cluster Quick Access** section to go to the **Prism Element**.

![Configure ISCSI 01](images/00-configureiscsi01.png){.thumbnail}

#### Configuring the IP address for ISCSI <a name="adding-ip"></a>

Go to the settings by clicking on the `gear icon`{.action}.

![Configure ISCSI 02](images/00-configureiscsi02.png){.thumbnail}

Click `Cluster Details`{.action}.

![Configure ISCSI 03](images/00-configureiscsi03.png){.thumbnail}

Enter an unused local IP address in **Virtual IP** and click `Save`{.action}.

![Configure ISCSI 04](images/00-configureiscsi04.png){.thumbnail}

Check your choice and click `Yes`{.action}.

![Configure ISCSI 05](images/00-configureiscsi05.png){.thumbnail}

The IP address is displayed in **virtual IP**.

![Configure ISCSI 06](images/00-configureiscsi06.png){.thumbnail}

#### Adding a user account in **Prism Element** for HYCU <a name="adding-user"></a>

Click the gear to go to the **Prism Element configuration**.

![Add local user to Prism Element 01](images/01-adduserprismelement01.png){.thumbnail}

Scroll down the menu and click `Local User Management`{.action}.

![Add local user to Prism Element 02](images/01-adduserprismelement02.png){.thumbnail}

Click `New User`{.action}.

![Add local user to Prism Element 03](images/01-adduserprismelement03.png){.thumbnail}

Enter these values:

- **Username**: `svc_hycu`
- **First Name**: `HYCU`
- **Last Name**: `HYCU`
- **Email**: `hycu@example.com`
- **Password**: `password`

> [!primary]
> This information is provided as an example, the email address is mandatory but is not used.

Select the `Cluster Admin`{.action} checkbox and click `Save`{.action}.

![Add local user to Prism Element 04](images/01-adduserprismelement04.png){.thumbnail}

The user is then created.

![Add local user to Prism Element 05](images/01-adduserprismelement05.png){.thumbnail}

#### Creating the virtual machine for HYCU <a name="create-vm"></a>

Go to **Prism Central**.

In the main menu, click `VMs`{.action} from the `Compute & Storage`{.action} menu.

![Create HYCUVM 01](images/02-createhycuvm01.png){.thumbnail}

Click `Create VM`{.action}.

![Create HYCUVM 02](images/02-createhycuvm02.png){.thumbnail}

Name the virtual machine and change the properties of the virtual machine with these settings:

- **CPU**: `4 vCPU`
- **Cores Per CPU**: `2 Cores`
- **Memory**: `8GB`

Click `Next`{.action}.

![Create HYCUVM 03](images/02-createhycuvm03.png){.thumbnail}

Click `Attach Disk`{.action}.

![Create HYCUVM 04](images/02-createhycuvm04.png){.thumbnail}

Enter these values:

- **Type**: `Disk`
- **Operation**: `Clone from Image`
- **Image**: `hycu-4.X.X-XXXX`

Click `Save`{.action}.

![Create HYCUVM 05](images/02-createhycuvm05.png){.thumbnail}

Click `Attach Disk`{.action}.

![Create HYCUVM 06](images/02-createhycuvm06.png){.thumbnail}

Choose these options:

- **Type**: `Disk`
- **Operation**: `Allocate on Storage Container`
- **Image**: `default-container`
- **Capacity**: `32Gib`

Click `Save`{.action}.

![Create HYCUVM 07](images/02-createhycuvm07.png){.thumbnail}

Click `Attach to Subnet`{.action}.

![Create HYCUVM 08](images/02-createhycuvm08.png){.thumbnail}

Select the `infra`{.action} network from the **Subnet** drop-down menu, select `Connected`{.action} in the **Network Connection State** drop-down menu. Then click `Save`{.action}.

![Create HYCUVM 09](images/02-createhycuvm09.png){.thumbnail}

Click `Next`{.action}.

![Create HYCUVM 10](images/02-createhycuvm10.png){.thumbnail}

Create a **yaml** file by editing these values:

- **< IP address >**: The local IP address of the virtual machine with the subnet mask as XX.XX.XX.XX/XX.
- **< GATEWAY >**: Local gateway for the virtual machine to access the Internet.
- **< DNS >**: DNS used on the Internet.

```yaml
#cloud-config
bootcmd:
- /opt/grizzly/bin/cloud_init_setup.sh hycubc < IP address > < GATEWAY > < DNS > `hycu.local,ntnx.local`
```

Modify **Guest Customisation** options by selecting `Cloud-init (Linux)`{.action} in the **Script Type** drop-down menu. Select `Custom Script`{.action} in the **Configuration Method** drop-down menu.

Copy the contents of the yaml script and paste it to the field below **Clear Script**. Then click `Next`{.action}.

![Create HYCUVM 11](images/02-createhycuvm11.png){.thumbnail}

Click `Create VM`{.action}.

![Create HYCUVM 12](images/02-createhycuvm12.png){.thumbnail}

Select the virtual machine created by using the `checkbox`{.action} to the right of the virtual machine.

![Create HYCUVM 13](images/02-createhycuvm13.png){.thumbnail}

Click `Power On`{.action} in the `Actions` menu.

![Create HYCUVM 14](images/02-createhycuvm14.png){.thumbnail}.

The virtual machine is started and has the IP address defined in **cloud-init**.

![Create HYCUVM 15](images/02-createhycuvm15.png){.thumbnail}

#### Configuring HYCU URL redirection to public network <a name="url-redirection"></a>

In this section, we will configure a redirection so that you can configure HYCU using the web interface from outside your cluster.

In the OVHcloud Control Panel, select `Bare Metal Cloud`{.action}, then click on your `Load Balancer`{.action} in the menu bar on the left-hand side.

In the `Server clusters`{.action} tab, click `Add a server cluster`{.action}.

![Configure Load Balancer 01](images/03a-configureloadbalancer01.png){.thumbnail}

Name your server cluster, then select `TCP`{.action} and enter this information:

- **Port**: `8443`
- **Datacenter**: `ALL`
- **Private network**: `nutanix`

Click `Add`{.action} to confirm the server farm creation.

![Configure Load Balancer 02](images/03a-configureloadbalancer02.png){.thumbnail}

Click `Add a server`{.action}.

![Configure Load Balancer 03](images/03a-configureloadbalancer03.png){.thumbnail}

Enter these values:

- **Name (optional)**: `VM-HYCU`
- **IPv4** address: `ipaddresshycu`
- **Port**: `8443`

Click `Add`{.action} to confirm the cluster creation.

![Configure Load Balancer 04](images/03a-configureloadbalancer04.png){.thumbnail}

Next, click on the `Front-ends`{.action} tab, and `Add a front-end`{.action}.

![Configure Load Balancer 05](images/03a-configureloadbalancer05.png){.thumbnail}

Name your front-end, choose the `TCP`{.action} protocol, and modify these values:

- **Port**: `8443`
- **Datacenter**: `ALL`
- **Default server cluster**: `HYCU (TCP)`

Click `Add`{.action}.

![Configure Load Balancer 06](images/03a-configureloadbalancer06.png){.thumbnail}

Click `Apply configuration`{.action}.

![Configure Load Balancer 07](images/03a-configureloadbalancer07.png){.thumbnail}

Select the `Datacenter`{.action} and click `Apply configuration`{.action}.

![Configure Load Balancer 08](images/03a-configureloadbalancer08.png){.thumbnail}

In the `Tasks`{.action} tab, you can track the progress of applying the changes.

![Configure Load Balancer 08](images/03a-configureloadbalancer09.png){.thumbnail}

For more information on the OVHcloud Load Balancer, please refer to the [Go further](#gofurther) section of this guide. 

#### Configuring HYCU <a name="hycu-configuration"></a>

Connect with a web browser to the HYCU administration interface, which should be similar to **https://nutanixfqdncluster:8443**. The `fqdn` variable corresponds to the URL provided when the Nutanix cluster was created.

Enter the default password and click `Sign In`{.action}.

![Configure HYCU 01](images/03-configurehycu01.png){.thumbnail}

Change the login password for more security.

Click `Change Password`{.action} in the `admin`{.action} menu in the top right-hand corner of the interface.

![Configure HYCU 02](images/03-configurehycu02.png){.thumbnail}

Enter the default password in the **OLD PASSWORD** field, the new password in the **PASSWORD** and **CONFIRM PASSWORD** fields.

Then click `Save`{.action}.

![Configure HYCU 03](images/03-configurehycu03.png){.thumbnail}

We will now connect HYCU to the Nutanix cluster.

Click the `Administration`{.action} gear icon in the top right corner and choose `Sources`{.action}

![Configure HYCU 04](images/03-configurehycu04.png){.thumbnail}

Enter information about **Prism Element**:

- **URL**: `https://url_prism_element_local:9440`
- **USERNAME**: `Prism Element user`
- **PASSWORD**: `Prism Element user password`

Click `Next`{.action}.

![Configure HYCU 05](images/03-configurehycu05.png){.thumbnail}

Enter this information about **Prism Central**:

- **URL**: `https://url_prism_central_local:9440`
- **USERNAME**: `Prism Central user`
- **PASSWORD**: `Prism Central password`

Click `Next`{.action}.

![Configure HYCU 06](images/03-configurehycu06.png){.thumbnail}

The `VALIDATION SUCCESSFUL` information appears to indicate that the entered information is correct. Click `Save`{.action}.

![Configure HYCU 07](images/03-configurehycu07.png){.thumbnail}

Click `Close`{.action}.

![Configure HYCU 08](images/03-configurehycu08.png){.thumbnail}

Select `Targets`{.action} in the menu on the left and click `+ Add`{.action} in the top right of the interface.

![Configure HYCU 09](images/03-configurehycu09.png){.thumbnail}

Enter the configuration settings and authentication keys for your Object Storage user with read/write access to the  Object Storage bucket used as explained below:

- **name** Name
- **Size**: Storage size
- **Type**: `AWS S3/Compatible`

> [!warning]
> OVHcloud **High Performance Object Storage** service has no storage limits and is billed on a per-use basis.
> In the HYCU software configuration, it is necessary to set a size as in the example below. You can of course choose another value.
>

Enable `ENABLE COMPRESSION`{.action} and scroll down through the window. 

![Configure HYCU 10](images/03-configurehycu10.png){.thumbnail}.

Complete the information:

- SERVICE ENDPOINT: `Object Storage URL`
- BUCKET NAME: `Bucket name`
- ACCESS KEY ID: `Object Storage User Access Key`
- SECRET ACCESS KEY: `Object Storage User Secret Key`

Enable `TARGET ENCRYPTION`{.action} and click `Save`{.action}.

![Configures HYCU 11](images/03-configurehycu11.png){.thumbnail}.

The target is enabled for Nutanix cluster backups.

![Configures HYCU 12](images/03-configurehycu12.png){.thumbnail}.

### Updating HYCU <a name="hycu-update"></a>

HYCU regularly provides updates for which we detail the process below.

#### Adding sources for a new version of HYCU  <a name="adding-new-sources"></a>

From the **Prism Central** main menu, click `Images`{.action} from the `Compute & Storage`{.action} menu.

![Add Image HYCU for update 01](images/04-addimageforupdate01.png){.thumbnail}

Click `Add Image`{.action}.

![Add Image HYCU for update 02](images/04-addimageforupdate02.png){.thumbnail}

Select `URL`{.action}. 

Enter the URL for the qcow2 image of the latest version of HYCU, such as: 

- `https://download.hycu.com/ec/v4.X.X/hotfixes/4.X.X-XXXX/hycu-4.X.X-XXXX.qcow2`

> [!primary]
> 
> The URL used for the download is the latest version available on the HYCU website. 

Click `Upload file`{.action}.

![Add Image HYCU for update 03](images/04-addimageforupdate03.png){.thumbnail}

Remove the extension **.qcow2** behind the name `hycu-'4.X.X-XXXX`, enter a description and click `Next`{.action}.

> [!warning]
> It is important to remove the extension in the name to facilitate the HYCU update process.

![Add Image HYCU for update 04](images/04-addimageforupdate04.png){.thumbnail}

Click `Save`{.action} to import the image. 

![Add Image HYCU for update 05](images/04-addimageforupdate05.png){.thumbnail}

#### Runing the update from HYCU <a name="update-launch"></a>

Log in via the URL provided when you created the Nutanix cluster, replacing the port **https://fqdnclusternutanix:8443**.

Go to the HYCU configuration by clicking the `Administration`{.action} gear icon and choose `Power Options`{.action}.

![Before Update 01](images/05-beforeupdate01.png){.thumbnail}
 
Select `Suspend All`{.action}, check `AUTO RESUME AFTER`{.action} and leave the **Hours** field at `1`{.action}, then click `Save`{.action}.

![Before Update 02](images/05-beforeupdate02.png){.thumbnail}

Click `Software Upgrade`{.action} from the `Administration`{.action} gear menu. 

![Update 01](images/06-updatehycu01.png){.thumbnail}

Choose the latest version from the **AVAILABLE VERSIONS** drop-down menu and click `Software Upgrade`{.action}.

![Update HYCU 02](images/06-updatehycu02.png){.thumbnail}

Click `Yes`{.action} to start the update process.

![Update HYCU 03](images/06-updatehycu03.png){.thumbnail}

A backup copy is made during the update process so that it can be restored if there are any issues.

![Update HYCU 04](images/06-updatehycu04.png){.thumbnail}

Log in to the HYCU administration interface. 

Click the gear icon and click `Power Options`{.action}.

![After Update 01](images/07-afterupdate01.png){.thumbnail}

Uncheck `Suspend All`{.action} and click `Save`{.action}.

![After Update 01](images/07-afterupdate02.png){.thumbnail}

### Configuring backup in HYCU <a name="backup-configuration"></a>

#### Setting up VM login passwords <a name="setting-passwords"></a>

Virtual machine login passwords enable backup of applications such as a Microsoft SQL database or Exchange server.

Log in via the `Virtual Machines`{.action} menu on the left and click the key-shaped `Credentials`{.action} button at the top right of the interface.

![Add credential 01](images/08-addcredential01.png){.thumbnail}

Click the `+`{.action} sign.

![Add credential 02](images/08-addcredential02.png){.thumbnail}

Enter these values:

- **NAME**: password storage name
- **PROTOCOL**: `AUTOMATIC`
- **USERNAME**: virtual machine user account
- **PASSWORD**: password

Click `Save`{.action}.

![Add credential 03](images/08-addcredential03.png){.thumbnail}

Click the `+`{.action} sign to add another account.

![Add credential 04](images/08-addcredential04.png){.thumbnail}

Enter these values:

- **NAME**: password storage name
- **PROTOCOL**: `AUTOMATIC`
- **USERNAME**: virtual machine user account
- **PASSWORD**: password

Click `Save`{.action}.

![Add credential 05](images/08-addcredential05.png){.thumbnail}

Click `Close`{.action}.

![Add credential 06](images/08-addcredential06.png){.thumbnail}

Select the virtual machines that will use a password by ticking the box to the right of the virtual machine, then click the `credentials`{.action} key button.

![Add vm to credential 01](images/08-addvmtocredential01.png){.thumbnail}

Select the password you want to use and click `Assign`{.action}.

![Add vm to credential 02](images/08-addvmtocredential02.png){.thumbnail}

Select another virtual machine that will use a password by ticking the box to the right of the virtual machine, then click the `credentials`{.action} key button.

![Add vm to credential 03](images/08-addvmtocredential03.png){.thumbnail}

Select the password you want to use and click `Assign`{.action}.

![Add vm to credential 04](images/08-addvmtocredential04.png){.thumbnail}

#### Creating backup policies <a name="backup-strategies"></a>

Go to the `policies`{.action} menu on the left and click the `+`{.action} button in the top right corner.

![Create Policy ](images/09-createpolicy01.png){.thumbnail}

Enter this information:

- **NAME**: `HYCU VM`
- **BACKUP EVERY**: `4 hours`
- **BACKUP THRESHOLD**: `42`

Leave the `BACKUP`{.action} option checked and use the scroll bar on the right.

![Create Policy for HYCU 01 ](images/09-createpolicyforhycuvm01.png){.thumbnail}

Click `Save`{.action}.

![Create Policy for HYCU 02 ](images/09-createpolicyforhycuvm02.png){.thumbnail}

This policy is created for the HYCU virtual machine. 

In the `policies` menu, click the `+`{.action} button in the top right corner.

![Create Policy ](images/09-createpolicy01.png){.thumbnail}

Set the policy name `BACKUP to Object Storage OVHcloud and local SNAPSHOTS`{.action} in the **NAME** field.

Check the `FAST RESTORE`{.action} option, leave the `BACKUP`{.action} option checked.

Change the backup options in **Backup** and change the **BACKUP THREESHOLD** value to `25`{.action}. Then scroll down the page.

![Create Policy for General Usage 01 ](images/10-createpolicyforgeneralusage01.png){.thumbnail}

Edit the **Fast restore** option with your settings and click `Save`{.action}.

![Create Policy for General Usage 02 ](images/10-createpolicyforgeneralusage02.png){.thumbnail}

This strategy makes a backup on OVHcloud Object Storage and also takes **snapshots** inside the Nutanix cluster, allowing for faster recovery.

#### Assigning backup policies <a name="backup-strategies-assignment"></a>

Select all VMs via the check box next to **NAME**, then click the shield-shaped `Policies`{.action} button in the top right to assign a policy to all VMs.

![Exclude ALL VM for BACKUP](images/10-excludeallvmfrombackup01.png){.thumbnail}

Choose the `Exclude`{.action} policy and click `Assign`{.action}.

![Exclude ALL VM for BACKUP](images/10-excludeallvmfrombackup02.png){.thumbnail}

Select the HYCU virtual machine by selecting the check box next to it, then click the `Policies`{.action} button to assign a policy to this virtual machine.

![Affect policy to HYCU VM 01](images/11-addhycuvmtopolicy01.png){.thumbnail}

Choose the `HYCU VM`{.action} policy and click `Assign`{.action}.

![Affect policy to HYCU VM 02](images/11-addhycuvmtopolicy02.png){.thumbnail}

Select four virtual machines and click the `Policies`{.action} button to assign a policy.

![Affect policy to HYCU VM 01](images/11-addsomevmtopolicy01.png){.thumbnail}

Choose the `BACKUP to Object Storage and local SNAPSHOTS`{.action} policy and click `Assign`{.action}.

![Affect policy to HYCU VM 02](images/11-addsomevmtopolicy02.png){.thumbnail}

### Monitoring backup status <a name="backup-check"></a>

Go to the `Dashboard`{.action} menu on the left to view the dashboard and view the backup status.

![Display Dashboard](images/12-dashbord01.png){.thumbnail}

Open the `Jobs`{.action} menu on the left to view the job status.

![Display JobState](images/12-jobstate01.png){.thumbnail}

### Restoring from HYCU <a name="restoring"></a>

Use the `Virtual Machines`{.action} menu and click a backed up virtual machine.

![Restore VM 01](images/13-restorevm01.png){.thumbnail}

#### Restoring a virtual machine <a name="restoring-vm"></a>	

Click the `Restore VM`{.action} button in the bottom right-hand corner.

![Restore VM 02](images/13-restorevm02.png){.thumbnail}

Select `Restore VM`{.action} and click `Next`{.action}.

![Restore VM 03](images/13-restorevm03.png){.thumbnail}

Leave the default options and click `Restore`{.action}.

![Restore VM 04](images/13-restorevm04.png){.thumbnail}

The virtual machine is fully restored. 

#### Retrieving a file <a name="restoring-file"></a>

Click the `Restore files`{.action} button in the bottom right-hand corner.

![Restore FILES 01](images/15-restorefile01.png){.thumbnail}

Leave `AUTOMATIC`{.action} in the **RESTORE FROM** drop-down menu and click `Next`{.action}.

![Restore FILES 02](images/15-restorefile02.png){.thumbnail}

Select the file to restore and click `Next`{.action}.

![Restore FILES 03](images/15-restorefile03.png){.thumbnail}

Leave the default options and click `Next`{.action}.

![Restore FILES 04](images/15-restorefile04.png){.thumbnail}

Choose `Rename restored`{.action} and click `Restore`{.action}.

![Restore FILES 05](images/15-restorefile05.png){.thumbnail}

The restored file is located inside the virtual machine with a new name so as not to delete the old file.

#### Restoring an application <a name="restoring-app"></a>

Click the `Applications`{.action} menu and then choose an application to restore by clicking an application below **Name**.

![Restore Application 01](images/16-restoreapplication01.png){.thumbnail}

Click the `Restore`{.action} button in the bottom right-hand corner.

![Restore Application 02](images/16-restoreapplication02.png){.thumbnail}

Select `Restore Databases`{.action} and click `Next`{.action}.

![Restore Application 03](images/16-restoreapplication03.png){.thumbnail}

Choose a database and click `Next`{.action}.

![Restore Application 04](images/16-restoreapplication04.png){.thumbnail}

Disable `OVERWRITE EXISTING DATABASES`{.action} and click `Restore`{.action}.

![Restore Application 05](images/16-restoreapplication05.png){.thumbnail}

The database is restored into a new database.

## Go further <a name="gofurther"></a>

[Nutanix on OVHcloud - High-level documentation](/pages/hosted_private_cloud/nutanix_on_ovhcloud/01-global-high-level-doc)

[Nutanix Hyper-Convergence](/pages/hosted_private_cloud/nutanix_on_ovhcloud/03-nutanix-hci)

[HYCU Home Page](https://www.hycu.com/)

[HYCU documentation](https://support.hycu.com/hc/en-us/sections/115001018365-Product-documentation)

[OVHcloud Load Balancer documentation](/products/network-load-balancer)

[Our OVHcloud Object Storage solutions](/links/public-cloud/object-storage)

If you need training or technical assistance for implementing our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
