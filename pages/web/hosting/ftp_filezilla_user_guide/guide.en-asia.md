---
title: "Tutorial - Using FileZilla with your OVHcloud hosting"
slug: web_hosting_filezilla_user_guide
excerpt: "Find here a tutorial for using the Filezilla software on your web hosting"
section: FTP and SSH
order: 04
---

**Last updated 13th September 2022**

## Objective

FileZilla is free software available on several operating systems (Windows, macOS, etc.).
You can use it to put files or your website online by [connecting to your web hosting plan’s FTP space](https://docs.ovh.com/asia/en/hosting/log-in-to-storage-ftp-web-hosting/).

**Find out how to use the Filezilla software on your web hosting plan.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/) and/or the software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [“Go further”](#go-further) section of this tutorial.
> 

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- An [OVH Web Hosting plan](https://www.ovhcloud.com/asia/web-hosting/){.external}
- You need to have installed Filezilla software on your computer. It is available free of charge from the page [filezilla-project.org](https://filezilla-project.org/download.php){.external}

## Interface overview <a name="interface"></a>

![hosting](images/1818.png){.thumbnail}

- The top **connection bar** allows you to log in to your hosting plan quickly, by entering its **host** name, **user** name, associated **password** and **port** number.
- **Section 1**: Displays details on the operation history, connection to the FTP space, file transfers, errors, etc. For more information, please refer to the official FileZilla [documentation](https://filezilla-project.org/){.external}.
- **Section 2**: The directory tree of local files on your computer
- **Section 3**: The directory tree of remote files when you are connected to your hosting
- **Section 4**: The list of directories/files in the directory selected locally on your computer
- **Section 5**: The list of remote directories/files in the selected directory on your hosting
- **Section 6**: The list of pending transfer operations or transfers in error status between your computer and your hosting

## Instructions

### Logging in to Filezilla via FTP

![hosting](images/quickcnt.png){.thumbnail}

In the quick connection bar, enter the information using the table below:

|Information to enter|Details|
|---|---|
|Host|The server address for accessing your hosting plan’s storage space.<br><br> For shared hosting, it usually has this form: `ftp.clusterXXX.hosting.ovh.net` (in which `XXX` stands for the cluster number where your hosting is located).|
|User|The login/username for accessing your web hosting plan’s storage space.|
|Password|The password associated with the user.|
|Port|It is usually filled in automatically by the software. Otherwise, enter:<br><br>\- Port `21` for an FTP connection.<br>\- Port `22` for an SFTP connection (if it is enabled). You can find more information on SFTP in [the dedicated section of this tutorial](#sftp).|

In case you do not have this information, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}, go to the Web Cloud section, then click on `Hosting`{.action}. Select the name of the web hosting plan, and click on the `FTP - SSH`{.action} tab. The information associated with your storage space will then appear:

![hosting](images/loginFTP-SSH.png){.thumbnail}

> [!warning]
>
> Some OVHcloud solutions do not use port 22 for SFTP and/or SSH connections. so make good use of the ports displayed in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}
>

Once everything is entered correctly into section **1** as shown in the image below, click on `Quickconnect`{.action}.

![hosting](images/1819.png){.thumbnail}

If the connection is successful, you will be informed via the status in section **2** of the image above. You can see your directories and files already present on your hosting (section **3**).

### Logging in to Filezilla via SFTP <a name="sftp"></a>

The **SFTP** (**S**ecure **F**ile **T**ransfer **P**rotocol) is a protocol similar to **FTP**. Like SSH, it uses port 22 by default instead of port 21. If you are using a Cloud Web hosting plan, you will need to use the port listed in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external} instead. Port 22 on Cloud Web hostings is disabled for security reasons and therefore not used for SSH and SFTP connections.

> [!success]
>
> SFTP can be enabled free of charge for all OVHcloud hosting plans (with the exception of the old 60free/demo1g solutions).
> 

#### Check SFTP activation

First, check that SFTP is enabled for your **FTP** login.

Go to the Web Cloud section of your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}, then click on `Hosting plans`{.action}. Select the name of the web hosting plan and click on the `FTP - SSH`{.action} tab.

Then check if the **SFTP** is active in the table at the bottom of the page.

![Activate SFTP offer start](images/enable_sftp_start.png){.thumbnail}

If **SFTP** is not active:

- Click on the `...`{.action} button to the right of the table, then `Edit`{.action}.

![Activation SFTP 1](images/enable_sftp_1.png){.thumbnail}

- In the window that appears, check that one of the following 2 options is enabled:
    - **FTP and SFTP**: To activate SFTP in addition to FTP.
    - **FTP, SFTP and SSH**: To activate FTP, SFTP and SSH.

![Activation SFTP 2](images/enable_sftp_2.png){.thumbnail}

- Then click `Next`{.action} and `Confirm`{.action}

#### Launch the SFTP connection

![hosting](images/quickcnt.png){.thumbnail}

To establish a connection to the remote server (your hosting), enter the following information into the quick connection bar:

- Host: `ftp.clusterXXX.hosting.ovh.net` (Replace `XXX` with the number of your hosting cluster)
- ID: Your FTP login
- Password: The FTP password associated with the login
- Port: 22

After clicking the `Quickconnect`{.action} button, a dialogue box opens (see image below) to certify the connection to the host you are about to connect to. When you are logged in to an OVHcloud host, you can tick the option *Always trust this host, add this key to the cache* so that the software will not ask again for future connections to this host.

![hosting](images/1834.png){.thumbnail}

### Connection errors

The message displayed below indicates an identification error when connecting to the shared hosting plan using FTP or SFTP:

![hosting](images/1820.png){.thumbnail}

This type of message is generated by an error in the Login/Password pair.

Check your login details to ensure that no errors are entered. If required, you can change the FTP access password for your web hosting plan directly in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}.

> [!success]
> A guide is available for [changing the FTP](https://docs.ovh.com/asia/en/hosting/modify-ftp-user-password/) password on shared hosting plans.

In the following case, the error is generated by an incorrect host name:

![hosting](images/1824.png){.thumbnail}

Check that it is linked to the host name declared in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}.

### File transfer

To transfer your files via FTP, you can select them, then drag and drop the directories/files from the left window (*Local site*) to the right window (*Remote site*) (**sections 4 and 5** described in this tutorial under [Interface overview](#interface)).

Be sure to select the correct target directory on the hosting in the right-hand window.

Once this is done, your files will automatically queue to be uploaded to the server.

![hosting](images/drag-drop-en.png){.thumbnail}

### Queue view

A view of the queue is available (**section 6** described in this tutorial under [Interface overview](#interface)).

In this zone, you will find:

- Files that are waiting to be transferred to the remote server that are still in the queue.
- Files for which the transfer failed.
- Files that are successfully transferred to the remote hosting.

![hosting](images/1822.png){.thumbnail}

### Server context menu

You can right-click on one of the files in **section 5** (described in this tutorial under [Interface overview](#interface)).

A popup menu will appear, and you can choose from:

- **Download**: Downloads the file to the local open folder.
- **Add files to queue**: Adds the file to the queue, to delay the data upload for example.
- **View/Edit**: Allows you to view or edit directly a file on your hosting. However, you must have a software program installed on your device that can read the file.
- **Create directory**: Allows you to create a new folder directly on the remote hosting.
- **Refresh**: Refreshes the data display to provide an up-to-date view of the files.
- **Delete**: Allows you to delete the selected file.
- **Rename**: Allows you to rename the selected file.
- **Copy URL(s) to clipboard**: Allows you to automatically copy the direct link to the selected file. Example of a URL that can be generated: `ftp://loginftp@ftp.clusterXXX.hosting.ovh.net/www/MY_FOLDER/my_file.jpg`.
- **File permissions...**: Allows you to modify access permissions (*chmod*).

![hosting](images/1830.png){.thumbnail}

## Useful information

### File and folder access rights (CHMOD)

Right-click on one of the files on the server, then select `File permissions...`{.action}.

You can modify the access rights (*chmod*) of your files and folders present on the hosting.

Generally, it is easier to manage *chmod* rights with the three-digit number format (composed of 3 digits from 0 to 7). The permissions can range from `000` (no rights) to `777` (all rights).

> [!alert]
>
> Warning, it is not recommended to set "*chmod* 000" rights on your folders or files. You will no longer be able (at least via FTP) to manage this item (including as an FTP administrator).
>
> Similarly, do not use "*chmod* 777", because in this case anyone can edit these folders or files. This results in a significant security vulnerability for your hosted data.
>

The first of the three *chmod* digits corresponds to the owner/administrator rights, the second to group rights (rarely used and generally set to 0) and the third to visitors to your website on your hosting.

By default, we recommend that you do not exceed "*chmod* **705**" for folders and "*chmod* **604**" for files.

The higher the number is, the more elevated are the permissions.

![hosting](images/1831.png){.thumbnail}

Enter the permissions you want to assign. The *chmod* value will be automatically updated.

You can select the “Recurse into subdirectories” option to not only change the rights of the folder in question but those of the folders and files located inside this folder as well.

### Site reopening

> [!primary]
>
> Regardless of your actions, your hosting plan may be disabled if our security systems detect malicious files or files that are not authorised on your hosting plan.
>
> You must then [secure your solutions](https://docs.ovh.com/asia/en/hosting/diagnostic-403-forbidden/) while correcting the security vulnerabilities mentioned in the block notification received via email.
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

If you get error `550 would not change perms on /. not such file or directory`, use the following command:

```bash
SITE CHMOD 705 .
```

> [!primary]
>
> To check that the reopening is effective, test your website from a web browser after a few minutes.
>

> [!warning]
>
> Be sure to test the website display after a maximum waiting time of 3 hours.<br>
> Our robots check status changes every 3 hours.<br>
> Depending on when the above changes are made, your website may be restored more or less quickly.<br>
> If the 3-hour time limit has passed and your website is still not online, verify that the command you have entered has been applied by retrying the operation.<br>
> If it still does not work, please contact our support team.
> 

### Binary file transfer

For binary type files, such as **CGI** files, it may be of interest to choose how the transfer will be done.

To change the transfer type, select `Transfer`{.action} from the main menu, then `Transfer type`{.action}.

![hosting](images/1832.png){.thumbnail}

### Folder comparison

![hosting](images/1823.png){.thumbnail}

The file comparison option displays colours in **zones 4** and **5** (shown in this tutorial under [Interface overview](#interface)). Use this option to highlight the differences between local files and folders and those on the server. 

By right-clicking on the icon, you can change the comparison mode. You have the choice to enable or disable the option, as well as:

- Compare the file size.
- Compare timestamps.
- Hide identical files.

**Meaning of the colour coding**:

- Yellow: The file exists only on one side.
- Green: The file is newer than the uncoloured file on the other side.
- Red: The file sizes are different.

## Go further <a name="go-further"></a>

Consult our documentation for [resolving recurring errors when using FTP](https://docs.ovh.com/asia/en/hosting/recurring_ftp_problems/) software.

Generally, find all our [of our guides related to shared](https://docs.ovh.com/asia/en/hosting/).

Do not hesitate to consult the the [official page of FileZilla](https://filezilla-project.org/).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/asia/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
