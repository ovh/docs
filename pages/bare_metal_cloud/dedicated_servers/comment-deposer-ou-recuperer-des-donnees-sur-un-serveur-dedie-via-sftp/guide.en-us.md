---
title: "Transfer Files via SFTP on a Dedicated Server"
excerpt: "Transfer files to and from your dedicated server using SFTP with FileZilla for secure uploads and downloads."
updated: 2025-02-21
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

There a various options to transfer files between a local device and a remote host. To ensure the security of the transfer operation, using a client software capable of the Secure File Transfer Protocol (SFTP) is recommended for most use cases.

**This tutorial explains how to use FileZilla to transfer files via SFTP.**

> [!warning]
> OVHcloud provides services for which you are responsible with regard to their configuration and management. This tutorial will illustrate how to use OVHcloud solutions with external tools. You may need to adapt some specific instructions to the operating system of your local device or your server.
>
> We recommend that you contact a [specialist service provider](/links/partner) or reach out to [our community](/links/community) if you experience any issues.
>

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) or a [VPS](/links/bare-metal/vps) in your OVHcloud account with a GNU/Linux distribution installed
- An FTP client that supports SFTP connections (for example [FileZilla](https://filezilla-project.org/)) installed on your local device
- Administrative access via SSH to your server

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Dedicated Servers](/links/control-panel/baremetal-dedicated-servers)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Dedicated servers`{.action} > Select your server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instructions

You will need the IP address of your server which you can find in the [OVHcloud Control Panel](/links/manager) and the name of the user account to use for the SSH connection. Consult our "Getting started" guides if you require further details on this topic:

- [Dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Dedicated server of the **Eco** product line](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

The following examples are based on [FileZilla](https://filezilla-project.org/). Refer to the user guide of your application if you are using a different FTP client.

The process may require additional steps if your server is booted into **rescue mode**. Open the relevant section below according to the state of your server.

### How to log on to a server via SFTP client

/// details | Unfold this section

In the FileZilla client interface, enter your server's IP address into the `Host` field and your username and password into their respective fields. Enter "22" into the field `Port`, unless you have modified the connection port your server's SSH service is listening on.

Click on the button `Quickconnect`{.action}.

> [!warning]
> In order to access folders belonging to the `root` user account of your OS, you have to use the credentials of the user `root` to establish the SFTP connection. This acccount does not have a password by default.  
> If you are certain that you need to access files of the `root` user via SFTP, learn how to enable this connection in our [user account guide](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

///

### How to log on to a server in rescue mode via SFTP client

/// details | Unfold this section

If you have not already carried out the necessary actions to access your files in rescue mode, use the relevant guide to connect to your server and mount your partitions:

- [Dedicated server rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [VPS rescue mode](/pages/bare_metal_cloud/virtual_private_servers/rescue)

In the FileZilla client interface, enter your server's IP address into the `Host` field and "22" into the field `Port`. Enter "root" into the field 
`Username` and the password that was sent to you via email for rescue mode access into the field `Password`.

Click on the button `Quickconnect`{.action}.

The server's file system will be located in the directory you have defined as the mount point in rescue mode ("/mnt" in this example).

![remote site sftp rescue mode](images/sftp_sd_03.png){.thumbnail}

///

### Using the FileZilla interface to download and upload your files

Once the remote connection is established, a tree-view of the server's files will be displayed in the `Remote Site` section.

![remote site sftp](images/sftp_sd_01.png){.thumbnail}

The middle section of the FileZilla interface acts as a file explorer. You can select multiple files or folders, delete them, drag and drop them from one side to the other, etc. Since the usage details might be different, depending on the software version and your local operating system, refer to the [FileZilla](https://filezilla-project.org/) user guide for details.

For example, to retrieve files located in the folder "/home/data" of the server, open this folder in the right-hand pane (`Remote Site`). Select the files or folders to download and drag them to the left-hand pane (`Local Site`) into a folder of your local device.

The progress of the data transfer will then be displayed in the transfer queue section at the bottom.

![sftp transfer progress](images/sftp_sd_02.png){.thumbnail}

## Go further

[SSH introduction](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[How to configure user accounts and root access on a server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).