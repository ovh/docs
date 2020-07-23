---
title: 'Setting up Veeam Backup & Replication'
slug: veeam-backup-replication
excerpt: 'Find out how to set up a Veeam Backup & Replication server with Veeam Enterprise'
section: Veeam
---

**Last updated 23rd July 2020**

## Objective

Veeam Backup & Replication is a data protection software. It offers its users a wide range of options for backing up, replicating and restoring their data.

**Find out how to set up a Veeam Backup & Replication server, then register it with an OVHcloud Veeam Enterprise licence server.**


## Requirements

- a Veeam Enterprise solution
- Windows Server 2012 or newer

## Instructions

### Setting up Veeam Backup & Replication

Download the **Veeam Backup & Replication** solution from the Veeam website. If you do not have an account, you will need to set one up (account setup is free).

The file will appear in ISO disk image format. Once you have transferred it onto your server, select the server’s CD reader, then select the image.

In the server, you can then launch the installation wizard. Select `Veeam Backup & Replication (Install)`{.action}.

![installation Veeam](images/veeamBandR_inst_01.png){.thumbnail}

After you have read the licence agreement, accept the terms and click `Next`{.action}.

![terms conditions](images/veeamBandR_inst_02.png){.thumbnail}

Click `Next`{.action} to proceed to the next stage, where you can save the licence file.

![licence](images/veeamBandR_inst_03.png){.thumbnail}

In the step where you select components to install, leave everything unchanged. However, depending on your requirements, you can change the destination path. Confirm by clicking `Next`{.action}.

![installation path](images/veeamBandR_inst_04.png){.thumbnail}

The installation wizard will then carry out a requirement check. If you are working from a clean Windows installation, some components will be missing, but the installation wizard will download and install them automatically. Confirm by clicking `Next`{.action}.

![validation](images/veeamBandR_inst_05.png){.thumbnail}

Next, wait for the missing components to be installed.

![installation](images/veeamBandR_inst_06.png){.thumbnail}

Once the installations are complete, confirm the **Veeam Backup & Replication** setup by clicking `Next`{.action}.

![system check](images/veeamBandR_inst_07.png){.thumbnail}

During the customisation stage of the setup, confirm the operation by clicking `Install`{.action}.

![customisation](images/veeamBandR_inst_08.png){.thumbnail}

Next, wait for the installation to complete.

![progress bar](images/veeamBandR_inst_09.png){.thumbnail}

Once it is complete, exit the installation wizard by clicking `Finish`{.action}.

![finish install](images/veeamBandR_inst_10.png){.thumbnail}

The installation wizard will prompt you to reboot Windows in order to finalise the operation. At this point, click `Yes`{.action}.

![reboot](images/veeamBandR_inst_11.png){.thumbnail}

### Creating a Veeam Enterprise service account

#### Step 1: Launch a service account

You will need to generate a **complex** password.

Next, create a service account, entering these lines of command as an admin:

```powershell
New-LocalUser "OVHVeeamEnterprise" -Password (ConvertTo-SecureString -AsPlainText "P@ssword01" -Force) -Description "OVHcloud Service Account for Veeam Enterprise" -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

Please note that the account name and password shown here are examples, and must be replaced with your own details:

- Account name: OVHVeeamEnterprise
- Password: P@ssword01

#### Step 2: Define the service account authorisations

Launch the Veeam console.

![veeam console](images/veeamBandR_use_12.png){.thumbnail}

Check that it is in **Free Edition** mode, in the bottom right-hand corner.

![free edition](images/veeamBandR_conf_1.png){.thumbnail}

Go to the menu, and click `Users and Roles`{.action}.

![users and roles](images/veeamBandR_conf_2.png){.thumbnail}

In the `Security`{.action} window, select `Add...`{.action}.

![security](images/veeamBandR_conf_3.png){.thumbnail}

Then, in the "Add User" window, enter the service account name you have created. Select the **Veeam Backup Administrator** role and confirm by clicking `OK`{.action}.

![add admin user](images/veeamBandR_conf_4.png){.thumbnail}

If you go back to the **Security** window, you can check that the account has been defined properly.

![user added](images/veeamBandR_conf_5.png){.thumbnail}

#### Step 3: Register the Veeam Backup & Replication server

You will need to do this via the OVHcloud API.

First, retrieve your serviceName:

> [!api]
>
> @api {GET} /veeam/veeamEnterprise
>

Then register it:

> [!api]
>
> @api {POST} /veeam/veeamEnterprise/{serviceName}/register
>

You will need the following information:

 * the public IP address that can be used to contact your **Veeam Backup & Replication** server
 * your server’s **Veeam Backup & Replication** port (usually **9392/TCP**)
 * the login for the account you have just created
 * the password for your service account

You can retrieve the public IP used by Veeam Enterprise to contact your **Veeam Backup & Replication** server via:

> [!api]
>
> @api {GET} /veeam/veeamEnterprise/{serviceName}
>

#### Step 4: Verify the registration

Launch the Veeam console.

![console veeam](images/veeamBandR_use_12.png){.thumbnail}

Go to the menu, then click `License`{.action}.

![open menu](images/veeamBandR_lic_1.png){.thumbnail}

Check that the information displayed is definitely for your OVHcloud licence.

![licence OVHcloud](images/veeamBandR_lic_2.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
