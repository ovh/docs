---
title: 'Tutorials - Using FileZilla with your OVHcloud hosting'
slug: web_hosting_filezilla_user_guide
excerpt: 'Find here a tutorial for using the Filezilla software on your web hosting.'
section: 'FTP and SSH'
order: 04
---

**Last updated 13th September 2022**

## Objective

FileZilla is free software available on several operating systems (Windows, macOS, etc.).
You can use it to put files or your website online by [connecting to your web hosting plan’s FTP space](https://docs.ovh.com/ca/en/hosting/log-in-to-storage-ftp-web-hosting/).

**Find out how to use the Filezilla software on your web hosting plan.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> This tutorial is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialist [provider](https://partner.ovhcloud.com/en-ca/) and/or the software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [“Go further”](#go-further) section of this tutorial.
> 

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- An [OVH Web Hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/){.external}
- You need to have installed Filezilla software on your computer. It is available free of charge from the page [filezilla-project.org](https://filezilla-project.org/download.php){.external}

## Interface overview <a name="interface"></a>

![hosting](images/1818.png){.thumbnail}

- The top **box** allows you to log in to your hosting plan quickly, by entering its **host** name, **user** name, associated **password** and **port** number.
- **zone 1** : details on the operation history, connection to the FTP space, file transfers, errors, etc. For more information, please refer to the official Filezilla [documentation](https://filezilla-project.org/){.external}.
- **zone 2** : directory tree/local files on your computer.
- **zone 3** : directory tree/remote files when you are connected to your hosting.
- **zone 4** : list of directories/files in the directory selected locally on your computer.
- **zone 5** : list of remote directories/files in the selected directory on your hosting.
- **zone 6** : list of pending or error transfer operations between your computer and your hosting.

## Instructions

### Logging in to Filezilla via FTP

![hosting](images/quickcnt.png){.thumbnail}

In the quick connection bar, enter the information using the table below:

|Information to enter|Details|
|---|---|
|Host| Server address for accessing your hosting plan’s storage space.<br><br> For shared hosting, it usually has this form: `ftp.clusterXXX.hosting.ovh.net` (`XXX` is the cluster number where your hosting is located)|
|User|Login credentials for accessing your web hosting plan’s storage space.|
|Password|The password associated with the user.|
|Port|It is usually filled in automatically by the software. Otherwise, enter:<br><br>\- port \`21\` for an FTP connection<br>\- port \`22\` for an SFTP connection (if it is enabled) You can find more information on SFTP in [the dedicated section of this tutorial](#sftp).|

If you don’t have this information, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, go to the Web Cloud section, then click on `Hosting`{.action}. Select the name of the web hosting plan, and click on the `FTP - SSH`{.action} tab. The information associated with your storage space will then appear:

![hosting](images/loginFTP-SSH.png){.thumbnail}

> [!warning]
>
> Some OVHcloud solutions do not use port 22 for SFTP and/or SSH connections. so make good use of the ports displayed in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}
>

Once everything is entered correctly in box **1** of the image below, click `Quick`{.action} Connect.

![hosting](images/1819.png){.thumbnail}

If the connection is successful, you will be informed via the status in box **2** of the image above. You can see your directories/folders and files already present on your hosting (box **3**).

### Logging in to Filezilla via SFTP <a name="sftp"></a>

The **SFTP** (for ****Secure ****File ****Transfer ****Protocol) is a protocol similar to **FTP**. Like SSH, it uses port 22 by default instead of port 21. If you are using a Cloud Web hosting plan, you will need to use the port listed in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Port 22 is by security disabled in SSH and SFTP for Cloud Web hosting.

> [!success]
>
> SFTP can be enabled free of charge for all OVHcloud hosting plans (with the exception of the old 60free/demo1g solutions).
> 

#### Check SFTP activation

First, check that SFTP is enabled for your **FTP** login.

Go to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} , in the “Web Cloud” section, then click on `Hosting`{.action}. Select the name of the web hosting plan, and click on the `FTP - SSH`{.action} tab.

Then check if the **SFTP** is active in the table at the bottom of the page.

![Activate SFTP offer start](images/enable_sftp_start.png){.thumbnail}

If not active:

- Click on the `...`{.action} button to the right of the table, then `Edit`{.action}.

![Activation SFTP 1](images/enable_sftp_1.png){.thumbnail}

- In the window that appears, check that one of the following 2 options is enabled:
    - **FTP and SFTP**\: to activate SFTP in addition to FTP only.
    - **FTP, SFTP and SSH**\: to activate FTP, SFTP and SSH.

![Activation SFTP 2](images/enable_sftp_2.png){.thumbnail}

- Then click `Next`{.action} and `Confirm`{.action}

#### Launch the SFTP connection

![hosting](images/quickcnt.png){.thumbnail}

In the upper part of Filezilla, and in order to establish the connection to the remote server (hosting), enter the following information:

- Host: `ftp.clusterXXX.hosting.ovh.net` (don't forget to replace the `XXX` with those of your hosting cluster)
- ID: your FTP login
- Password: the FTP password associated with the login
- Port: 22

After clicking the `Quick`{.action} Connect button, a dialogue box opens (see image below) to certify the connection to the host you are about to connect to. When you are logged in to an OVHcloud host, you can tick the *Always trust this host box, and add this key to the cache* so that the software will not ask you for it again in the future.

![hosting](images/1834.png){.thumbnail}

### Connection errors

The message displayed below indicates an identification error when connecting to the shared hosting plan using FTP or SFTP:

![hosting](images/1820.png){.thumbnail}

This type of message is generated by an error in the Login/Password pair.

Check your login details to ensure that no errors are entered. If required, you can change the FTP access password for your web hosting plan directly in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

> [!success]
> A guide is available for [changing the FTP](https://docs.ovh.com/ca/en/hosting/modify-ftp-user-password/) password on shared hosting plans.

In the following case, the error is generated by an incorrect host name:

![hosting](images/1824.png){.thumbnail}

Check that it is linked to the host name declared in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

### File transfer

To transfer your files via FTP, you can select them, then drag and drop the directories/files from the left window *(computer)* to the right window *(hosting)* (**zones 4 and 5** described in the section of this tutorial on [the Filezilla interface](#interface)).

Be sure to select the target directory in the right window.

Once this is done, your files will automatically queue to be uploaded to the server.

![hosting](images/drag-drop-en.png){.thumbnail}

### Queue View

A view of the queue is available (**area 6** described in the section of this tutorial about [the Filezilla interface](#interface)).

In this zone, you will find:

- files that are waiting to be dropped to the remote server that are still in the queue
- files for which the transfer failed
- files that are successfully transferred to the remote hosting.

![hosting](images/1822.png){.thumbnail}

### Server Popup

Right-click on one of the files in **zone 5** (described in the section of this tutorial about [the Filezilla interface](#interface)).

A pop-up menu will appear, and you can choose from:

- Download: downloads the file to the local open folder.
- Add files to queue: adds the file to the queue, for example, allows you to delay the data upload.
- View/Edit: allows you to view or edit directly a file on your hosting. However, you must have a software programme that can read the file installed on your desktop.
- Create a folder: allows you to create a new folder directly on the remote hosting.
- Refresh: refreshes the data display to display the various files correctly.
- Delete: allows you to delete the selected file.
- Rename: allows you to rename the selected file.
- Copy address(es) to clipboard: allows you to automatically copy the direct link to the selected file. Example of URL that can be generated: `ftp://loginftp@ftp.cluster0XX.hosting.ovh.net/www/mondossier1/monfichier.jpg`
- File permissions: gives you the ability to modify file permissions (Chmod)

![hosting](images/1830.png){.thumbnail}

## Useful information

### File and Folder Chmod

Right-click on one of the files on the server, then select File `permissions...`{.action}.

You can modify the access rights (Chmod) of your files and folders present on the hosting.

Generally, it is easier to manage Chmod rights with the `XXX` encrypted value (composed of 3 digits, which can range from 0 to 7). The permission panel can then range from `000` (no rights) to `777` (all rights).

> [!alert]
>
> Warning, it is not recommended to set Chmod 000 rights on your folders or files. You will no longer be able (at least via FTP) to manage this item (including as an FTP administrator).
>
> The same goes for Chmod 777 rights, because unlike the Chmod 000, anyone can act on the folder or file, which presents a significant security vulnerability for your hosted data.
>

The first of the three digits `XXX` defining the Chmod corresponds to the owner/administrator rights, the second to group rights (rarely used and generally equal to 0) and the third to visitors to your website on your hosting.

By default, we recommend that you do not exceed Chmod **705** for folders and Chmod **604** for files.

The higher the number, the greater the permissions.

![hosting](images/1831.png){.thumbnail}

Enter the permissions you want to assign. The Chmod value will be automatically updated.

You can select the “Recurrence in subfolders” box.

This will change the rights of the folder in question, as well as the folders and files that might be present in it.

### Site reopening

> [!primary]
>
> Regardless of your action, your hosting plan may be disabled if our security systems detect malicious files or files that are not authorised on your hosting plan.
>
> You must then [secure your solutions](https://docs.ovh.com/ca/en/hosting/diagnostic-403-forbidden/) while correcting the security vulnerabilities mentioned in the block notification received via email.
>

Then click `Server`{.action} and select `Enter Custom`{.action} Order (this option can also be called `Enter FTP`{.action} Command).

Enter the following command:

```bash
SITE CHMOD 705 /
```

> [!warning]
>
> This command does not work via SFTP.
>

![hosting](images/1829.png){.thumbnail}

If you get error `550 would not chance perms on /. not such file or director`, use the following command:

```bash
SITE CHMOD 705.
```

> [!primary]
>
> To check that the reopening is effective, test your website from a web browser after a few minutes.
>

> [!warning]
>
> Be sure to test the display after a maximum of 3 hours.<br>
> Indeed, our robots spend every 3 hours minimum to check the status changes.<br>
> Depending on when the above changes are made, your website may be restored more or less quickly.<br>
> If the 3-hour time limit has passed and your website is still not online, check that the order you have entered has been placed by retrying the operation.<br>
> If it still does not work, please contact our support team.
> 

### Binary file transfer

For binary type files, such as **CGI** files, it may be interesting to choose how the transfer will be done.

To change the transfer type, select `Transfer`{.action} from the main menu, then `Transfer`{.action} Type.

![hosting](images/1832.png){.thumbnail}

### Folder comparison

![hosting](images/1823.png){.thumbnail}

The file comparison option displays colours in **boxes 4** and **5** (shown in the section of this tutorial about [the Filezilla interface](#interface)). Use this option to highlight the differences between local files and folders and those on the server. 

By right-clicking on the icon, you can change the comparison mode. You will then be asked to enable or disable the option, as well as:

- Compare file size
- compare timestamp
- hide identical files.

**Meaning of colours**: 

- Yellow: the file exists only on one side.
- Green: the file is newer than the uncoloured file on the other side.
- Red: file sizes are different.

## Go further <a name="go-further"></a>

Below is the link to our documentation for [resolving recurring errors when using FTP](https://docs.ovh.com/ca/en/hosting/recurring_ftp_problems/) software.

More generally, find all [of our guides related to shared](https://docs.ovh.com/ca/en/hosting/) hosting.

Do not hesitate to consult the official [page of Filezilla](https://filezilla-project.org/).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/) .

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ca/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.