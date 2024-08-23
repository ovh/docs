---
title: "How to upload and retrieve data on a dedicated server via SFTP"
excerpt: "Find out how to easily transfer data to and from your dedicated server"
updated: 2024-02-23
---

## Objective

As part of a migration process, you may find that you need to retrieve data stored on a dedicated server, and move it onto another server. There are different ways of doing this, but SFTP (Secure File Transfer Protocol) is best for transferring files quickly and simply via a secure SSH connection.

**This tutorial explains how to use SFTP to connect to a server in order to upload or download files.**

> [!warning]
> This tutorial will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.
>
> We recommend that you contact a [specialist service provider](/links/partner) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/) with a GNU/Linux distribution installed
- An FTP client that supports SFTP connections (this tutorial uses [FileZilla](https://filezilla-project.org/))
- Administrative access via SSH to your server

## Instructions

### Using FileZilla to retrieve and upload your data

SFTP can be used to transfer files via a secure connection (SSH). There are two possibilities for this scenario: either you have normal access to your server or you connect to it in [rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

By default, a server using a GNU/Linux-based operating system will have SSH access via port 22. However, you might have previously changed this port (for example by following [our guide](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)).

#### **If you have access to your server**

In the FileZilla GUI, enter your server's IP address into the `Host` field and your username and password into their respective fields. As for the `Port` field, enter "22" or whichever port your SSH service is listening on if you have modified it.

> [!warning]
> Note that access to the folder of the `root` user via SFTP is only possible by using the credentials of this user account. If you are certain that you need to access this folder remotely, you can find further information on how to enable this connection in our [user account guide](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

As soon as the connection is established, you will see a tree-view of your files in the `Remote Site` section.

![remote site sftp](images/sftp_sd_01.png){.thumbnail}

In our example, the data to be retrieved is located in the folder "/home/data". You can drag and drop the files you want to download from the right-hand pane (`Remote Site`) to the left-hand one (`Local Site`) to save it on your local device.

To upload files to the server, drag and drop your files from your local folder to the remote destination folder in the right-hand pane.

The progress of the data transfer will then be displayed at the bottom of the FileZilla window.

![sftp transfer progress](images/sftp_sd_02.png){.thumbnail}

#### **If your server is in rescue mode**

In rescue mode, you first need to mount your partition. To do this, you can follow the instructions set out in [this guide](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Once you have mounted your partition, use the FileZilla client in the same way as described above, using port 22 for the connection to your server.

> [!primary]
>
> The login credentials you need to use are sent to you via email when you put your server into rescue mode.
>

If you have created the mount point according to the guide, the data will be located in the "/mnt" directory (i.e. "/mnt/home/data" in this example).

![remote site sftp rescue mode](images/sftp_sd_03.png){.thumbnail}

## Go further

[Activating and using rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Securing a dedicated server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

Join our [community of users](/links/community).