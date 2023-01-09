---
title: Configure Veeam Backup for Nutanix
slug: nutanix-veeam-backup
excerpt: Installing Veeam Backup on a Nutanix cluster
section: Backups
order: 02
kb: Hosted Private Cloud
category_l1: Nutanix on OVHcloud
category_l2: Backups
---

**Last updated 31st May 2022**

## Objective

Veeam Backup is a backup software available for Nutanix. 

**Find out how to install, configure and use Veeam on a Nutanix cluster**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Requirements

- A Nutanix cluster in your OVHcloud account.
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).
- You must be connected to the cluster via **Prism Central**. 
- **Veeam Backup & Replication** installed on a virtual machine in your Nutanix cluster via this procedure: [Setting up Veeam Backup & Replication](https://docs.ovh.com/us/en/storage/veeam-backup-replication/).
- Knowing the public IP address used by **Veeam Backup** to access the internet.
- You must have 4 GB of RAM, 60 GB of storage and 4 vCPUs to add an additional virtual machine when configuring extensions for **Veeam Backup & Replication**.
- You must have remote storage outside of the cluster, such as [OVHcloud Enterprise File Storage](https://www.ovhcloud.com/en/storage-solutions/enterprise-file-storage/).

## Instructions

We will customise **Veeam Backup & Replication** for use on a Nutanix cluster, with a remote repository for this cluster at OVHcloud, using the [OVHcloud Enterprise File Storage solution](https://www.ovhcloud.com/en/storage-solutions/enterprise-file-storage/).

### Add a user in Prism Element for Veeam Backup

First, you need to create a specific user in Prism Element to use Veeam Backup.

Through **Prism Central**, connect to **Prism Element** by clicking on the cluster under `Cluster Quick Access`.

![Create User VEEAM PE 01](images/01-create-pe-veeamuser01.png){.thumbnail}

Once in the **Prism Element**, go to the settings by clicking on the `gear`{.action} icon in the top right.

![Create User VEEAM PE 02](images/01-create-pe-veeamuser02.png){.thumbnail}

Scroll down the menu on the left using the scroll bar.

![Create User VEEAM PE 03](images/01-create-pe-veeamuser03.png){.thumbnail}

Click `Local User Management`{.action}.

![Create User VEEAM PE 04](images/01-create-pe-veeamuser04.png){.thumbnail}

Click the `New User`{.action} button.

![Create User VEEAM PE 05](images/01-create-pe-veeamuser05.png){.thumbnail}

Enter the information:

- **Username**: `svc_veeam`
- **First Name**: `Veeam`
- **Last Name**: `Backup`
- **Email**: `veeam@example.com`
- **Password**: `password`

> [!primary]
> This data is provided as an example. The email address is mandatory but is not used.

Select the `Cluster Admin`{.action} checkbox and click `Save`{.action}

![Create User VEEAM PE 06](images/01-create-pe-veeamuser06.png){.thumbnail}

This user account is created and added to the **Prism Element** user list.

![Create User VEEAM PE 07](images/01-create-pe-veeamuser07.png){.thumbnail}

### Download and install the extension for a Nutanix cluster under AHV

Log in to the virtual machine where Veeam Backup is located.

From a web browser, download the latest version of the [AHV extension for Veeam](https://www.veeam.com/availability-nutanix-ahv-download.html). You must have a user account on the **Veeam** website, you can create it freely and free of charge.

Start the installation of the extension.

> [!warning]
> Before starting the installation, make sure that the **Veeam Backup & replication** console is closed.
>

Open the "NutanixAHPlugin" installer.

![Addon Installation 01](images/02-install-addon-nutanix-veeam01.png){.thumbnail}

Accept the General Terms and Conditions of Use and click `Next`{.action}.

![Addon Installation 02](images/02-install-addon-nutanix-veeam02.png){.thumbnail}

Click `Next`{.action}.

![Addon Installation 03](images/02-install-addon-nutanix-veeam03.png){.thumbnail}

Click `Install`{.action}.

![Addon Installation 04](images/02-install-addon-nutanix-veeam04.png){.thumbnail}

Once the installation is complete, click `Finish`{.action}.

![Addon Installation 06](images/02-install-addon-nutanix-veeam06.png){.thumbnail}

### Integrate Nutanix cluster in **Veeam Backup configuration**

When Configuring Veeam Backup for Nutanix, a new virtual machine is added to the cluster, which serves as the interface between the **Veeam Backup** software and the cluster.

Launch the **Veeam Backup** console and click `Connect`{.action}.

![Addon Cluster Nutanix to Veeam 01](images/03-addclusternutanix-to-veeam01.png){.thumbnail}

Go to `Backup Infrastructure`{.action} in the menu at the bottom right, choose `Managed Servers`{.action} and click `Add Server`{.action}.

![Addon Cluster Nutanix to Veeam 02](images/03-addclusternutanix-to-veeam02.png){.thumbnail}

Click `Nutanix AHV`{.action}.

![Addon Cluster Nutanix to Veeam 03](images/03-addclusternutanix-to-veeam03.png){.thumbnail}

Enter the `private IP address`{.action} of **Prism Element** in `DNS name or IP address` and click `Next`{.action}.

![Addon Cluster Nutanix to Veeam 04](images/03-addclusternutanix-to-veeam04.png){.thumbnail}

Click `Add`{.action} to add the **Prism Element** user account

![Addon Cluster Nutanix to Veeam 05](images/03-addclusternutanix-to-veeam05.png){.thumbnail}

Enter the information for the account created earlier in **Prism Element**:

- **Username**: `svc_veeam`
- **Password**: `Password`

Click `OK`{.action}.

![Addon Cluster Nutanix to Veeam 06](images/03-addclusternutanix-to-veeam06.png){.thumbnail}

Check that the account you have created has been selected in the "Credentials" field, then click `Next`{.action}.

![Addon Cluster Nutanix to Veeam 07](images/03-addclusternutanix-to-veeam07.png){.thumbnail}

Click `Continue`{.action} to validate the certificate warning message.

![Addon Cluster Nutanix to Veeam 08](images/03-addclusternutanix-to-veeam08.png){.thumbnail}

Check `Use the following IP address`{.action} and choose an unused private IP address (this address is used when backing up and restoring files), then click `Next`{.action}.

![Addon Cluster Nutanix to Veeam 09](images/03-addclusternutanix-to-veeam09.png){.thumbnail}

Click `Next`{.action}.

![Addon Cluster Nutanix to Veeam 10](images/03-addclusternutanix-to-veeam10.png){.thumbnail}

Click `Finish`{.action}.

![Addon Cluster Nutanix to Veeam 11](images/03-addclusternutanix-to-veeam11.png){.thumbnail}

Click `Yes`{.action}.

![Addon Cluster Nutanix to Veeam 12](images/03-addclusternutanix-to-veeam12.png){.thumbnail}

Select `Deploy a new proxy`{.action} and click `Next`{.action}.

![Addon Cluster Nutanix to Veeam 13](images/03-addclusternutanix-to-veeam13.png){.thumbnail}

Name the VM in the “Name” field, then click `Next`{.action}. 

![Addon Cluster Nutanix to Veeam 14](images/03-addclusternutanix-to-veeam14.png){.thumbnail}

Click `Configure`{.action}. 

![Addon Cluster Nutanix to Veeam 15](images/03-addclusternutanix-to-veeam15.png){.thumbnail}

Choose an unused `IP address`{.action} on the LAN for the virtual machine and click `OK`{.action}. 

![Addon Cluster Nutanix to Veeam 16](images/03-addclusternutanix-to-veeam16.png){.thumbnail}

Click `Next`{.action}. 

![Addon Cluster Nutanix to Veeam 17](images/03-addclusternutanix-to-veeam17.png){.thumbnail}

Click on `Add`{.action} to add and create the **NUTANIX-PROXY** VM login account. This VM is added when a Nutanix cluster is added to the **Veeam Backup and replication** console.

> [!warning]
> Take note of the user account and password created. These credentials allow you to connect to the new virtual machine via the web browser, without going through the **Veeam backup** software. The URL will be similar to `https://privateipaddress:8100`.

![Addon Cluster Nutanix to Veeam 18](images/03-addclusternutanix-to-veeam18.png){.thumbnail}

Enter the information for the account you created earlier in Prism Element:

- **Username**: `proxy_user`
- **Password**: `password`

Click `OK`{.action}.

![Addon Cluster Nutanix to Veeam 19](images/03-addclusternutanix-to-veeam19.png){.thumbnail}

Check the user account in the "Credentials" field and click `Next`{.action}.

![Addon Cluster Nutanix to Veeam 20](images/03-addclusternutanix-to-veeam20.png){.thumbnail}

Check the box `Allow access to all backup repositories`{.action} and click `Next`{.action}.

![Addon Cluster Nutanix to Veeam 21](images/03-addclusternutanix-to-veeam21.png){.thumbnail}

Wait a few minutes.

![Addon Cluster Nutanix to Veeam 22](images/03-addclusternutanix-to-veeam22.png){.thumbnail}

The installation ends with a warning message. Please ignore this, as it is the public DNS server that cannot resolve the Veeam server name.<br>
Click `Next`{.action}.

![Addon Cluster Nutanix to Veeam 23](images/03-addclusternutanix-to-veeam23.png){.thumbnail}

#### Modifying the interface virtual machine host file

> [!primary]
> 
> This operation is required if you do not use an internal DNS server to resolve VM names.
> Notably the VM that is used for the Veeam Backup software.

Via **Prism Central**, connect to the NUTANIX-PROXY virtual machine. 

Open the main menu at the top left and choose `VMs`{.action}.

![Configure Nutanix PROXY HOST 01](images/03-modify-etchostproxy01.png){.thumbnail}

Click on the NUTANIX-PROXY virtual machine. 

![Configure Nutanix PROXY HOST 02](images/03-modify-etchostproxy02.png){.thumbnail}

Click `Launch console`{.action}.

![Configure Nutanix PROXY HOST 03](images/03-modify-etchostproxy03.png){.thumbnail}

Log in with the user account you created earlier and the password associated with that account.

![Configure Nutanix PROXY HOST 04](images/03-modify-etchostproxy04.png){.thumbnail}

From the console, edit the `/etc/hosts` file:

```bash
proxy_user@NUTANIX-PROXY~$sudo nano /etc/hosts
[sudo] password for proxy_user:
```

Add this information, which corresponds to the IP address and name of the virtual machine where Veeam Backup is installed:

```bash
192.168.0.245 VEEAM-BACKUP 
```

Save the file and run this command:

```bash
proxy_user@NUTANIX-PROXY~$sudo /etc/init.d/networking restart
[sudo] password for proxy_user:
```

### Creating the Enterprise File Storage volume via the OVHcloud Control Panel

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we). In the `Bare Metal Cloud`{.action} tab, go to `Storage and Backup`{.action}. Select `Enterprise File Storage`{.action}, then the service that will be used for the **Veeam Backup**.

![Create Enterprise Storage Volume 01](images/04-create-enterprise-storage-volume01.png){.thumbnail}

In the `Volumes`{.action} tab, click `Create a volume`{.action}.

![Create Enterprise Storage Volume 02](images/04-create-enterprise-storage-volume02.png){.thumbnail}

Choose these options to create a 500 GB volume.

- **Volume name (optional)**: `BACKUP`
- **Description (optional)**: `BACKUP`
- **Volume size**: `500`

![Create Enterprise Storage Volume 03](images/04-create-enterprise-storage-volume03.png){.thumbnail}

Modify the settings of the new volume by clicking on the `...`{.action} button. Choose `Modify Volume`{.action}.

![Create Enterprise Storage Volume 04](images/04-create-enterprise-storage-volume04.png){.thumbnail}

In the `Access Control (ACL)`{.action} tab, click `Add a new access`{.action}.

![Create Enterprise Storage Volume 05](images/04-create-enterprise-storage-volume05.png){.thumbnail}

In the “Access to” field, enter the public IP address used on the VM Veeam Backup that serves as an internet gateway.
In the “Access permissions” field, choose `Read and write`{.action}.

![Create Enterprise Storage Volume 06](images/04-create-enterprise-storage-volume06.png){.thumbnail}

Once validated, a message will appear informing you that the access control has been created.

![Create Enterprise Storage Volume 07](images/04-create-enterprise-storage-volume07.png){.thumbnail}

In the `General Information`{.action} tab, click the `Copy`{.action} icon to copy the "Mount path".  

> [!primary]
> The copied item is the repository that is used by **Veeam Backup**.
> The syntax should be similar to: **ipaddress://share_name**.
>

![Create Enterprise Storage Volume 08](images/04-create-enterprise-storage-volume08.png){.thumbnail}

### Add Enterprise File Storage repository in Veeam Backup

Via the **Veeam Backup** console, click on `Backup Infrastructure`{.action} at the bottom right, choose `Backup Repositories`{.action} and click on `Add repository`{.action}. 

![Add Enterprise File Storage repository 01](images/05-add-enterprise-file-storage-repository01.png){.thumbnail}

Choisissez `Network attached storage`{.action}. 

![Add Enterprise File Storage repository 02](images/05-add-enterprise-file-storage-repository02.png){.thumbnail}

Click on `NFS share`{.action}.

![Add Enterprise File Storage repository 03](images/05-add-enterprise-file-storage-repository03.png){.thumbnail}

Name the repository and click `Next`{.action}.

![Add Enterprise File Storage repository 04](images/05-add-enterprise-file-storage-repository04.png){.thumbnail}

In the “Shared folder” field, type or paste the name of the shared volume and click `Next`{.action}.

> [!primary]
> Enter the "Mount path" copied from the OVHcloud Control Panel.
>

![Add Enterprise File Storage repository 05](images/05-add-enterprise-file-storage-repository05.png){.thumbnail}

Click `Next`{.action}.

![Add Enterprise File Storage repository 06](images/05-add-enterprise-file-storage-repository06.png){.thumbnail}

Click `Next`{.action}.

![Add Enterprise File Storage repository 07](images/05-add-enterprise-file-storage-repository07.png){.thumbnail}

Click `Apply`{.action}.

![Add Enterprise File Storage repository 08](images/05-add-enterprise-file-storage-repository08.png){.thumbnail}

Click `Next`{.action}.

![Add Enterprise File Storage repository 09](images/05-add-enterprise-file-storage-repository09.png){.thumbnail}

Click `Finish`{.action}.

![Add Enterprise File Storage repository 10](images/05-add-enterprise-file-storage-repository10.png){.thumbnail}

### Setting up an automated backup

In **Veeam backup**, open the `Home`{.action} menu (bottom left), then the `Backup Job`{.action} menu and choose `Nutanix AHV`{.action}.

![Create Backup JOB 01](images/06-createbackupjob01.png){.thumbnail}

The **AHV Proxy** web interface opens.

Name the task you want to create, tick the `Backup job`{.action} option, and click `Next`{.action}.

![Create Backup JOB 02](images/06-createbackupjob02.png){.thumbnail}

Click `Add`{.action}.

![Create Backup JOB 03](images/06-createbackupjob03.png){.thumbnail}

Select the virtual machines you want to back up and click `Add`{.action}.

![Create Backup JOB 04](images/06-createbackupjob04.png){.thumbnail}

Click `Next`{.action}.

![Create Backup JOB 05](images/06-createbackupjob05.png){.thumbnail}

Select the repository in `Backup repository`{.action} and click `Next`{.action}.

![Create Backup JOB 06](images/06-createbackupjob06.png){.thumbnail}

Select the `Run the job automatically`{.action} check box, set the frequency, and click `Next`{.action}.

![Create Backup JOB 07](images/06-createbackupjob07.png){.thumbnail}

Click `Finish`{.action} to save the backup job.

![Create Backup JOB 08](images/06-createbackupjob07.png){.thumbnail}

The backup is visible through the **AHV Proxy** web interface.

![Create Backup JOB 09](images/06-createbackupjob09.png){.thumbnail}

Return to the **Veeam Backup** console via the `Home`{.action} menu (at the bottom left). Click `Jobs`{.action} to view the backup job you created.

![Create Backup JOB 10](images/06-createbackupjob10.png){.thumbnail}

### Restoring a Virtual Machine

To test that backups are working properly, we will run a recovery task.

Click on `Home`{.action} in the bottom left. In the `Restore`{.action} option, select `Nutanix AHV`{.action}.

![Restore VM 01](images/07-restorevm01.png){.thumbnail}

Click `Restore from AHV backup`{.action}.

![Restore VM 02](images/07-restorevm02.png){.thumbnail}

Click `Entire VM restore`{.action}.

![Restore VM 03](images/07-restorevm03.png){.thumbnail}

Click `Add`{.action}.

![Restore VM 04](images/07-restorevm04.png){.thumbnail}

Select a virtual machine and click `Add`{.action}.

![Restore VM 05](images/07-restorevm05.png){.thumbnail}

Click `Next`{.action}.

![Restore VM 06](images/07-restorevm06.png){.thumbnail}

Choose `Restore to a new location, or with different settings`{.action} and click `Next`{.action}.

![Restore VM 07](images/07-restorevm07.png){.thumbnail}

Click `Next`{.action}.

![Restore VM 08](images/07-restorevm08.png){.thumbnail}

Click `Next`{.action}.

![Restore VM 09](images/07-restorevm09.png){.thumbnail}

Rename the VM in `New name`{.action} and click `Next`{.action}.

![Restore VM 10](images/07-restorevm10.png){.thumbnail}

Click `Disconnect`{.action} to isolate the restored VM from the network.

![Restore VM 11](images/07-restorevm11.png){.thumbnail}

Click `Next`{.action}.

![Restore VM 12](images/07-restorevm12.png){.thumbnail}

Click `Next`{.action}.

![Restore VM 13](images/07-restorevm13.png){.thumbnail}

Click `Finish`{.action}.

![Restore VM 14](images/07-restorevm14.png){.thumbnail}

A preview of the status of the restoration is launched, it takes some time depending on the size of the virtual machine.

![Restore VM 15](images/07-restorevm15.png){.thumbnail}

## Go further <a name="gofurther"></a>

[VEEAM documentation on installing VEEAM Backup for Nutanix AHV](https://helpcenter.veeam.com/docs/van/userguide/installing.html?ver=30)

[OVHcloud storage solutions](https://docs.ovh.com/us/en/storage/)

Join our community of users on <https://community.ovh.com/en/>.
