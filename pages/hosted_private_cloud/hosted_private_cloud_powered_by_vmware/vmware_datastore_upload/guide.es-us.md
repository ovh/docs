---
title: "Uploading an ISO in a datastore"
excerpt: "Find out how to use the html datastore upload client and Govc to manipulate data in your managed VMware vSphere on OVHcloud environment"
updated: 2024-10-04
---

## Objective

**Find out how to manipulate data in a folder in your vSphere database.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- You must be the technical administrator of the [VMware on OVHcloud infrastructure](/links/hosted-private-cloud/vmware).
- If you are using IAM, ensure that you have the rights, roles, and actions to upload files or create directories in the Datastore. For more information, please refer to our guide: [IAM for VMware on OVHcloud - Overview and FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started).

## Instructions

> [!primary]
>
> This guide replaces the SFTP method, which is now deprecated: [Logging in via SFTP](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/sftp_connexion).
>

### Step 1 - Upload with HTML client

#### Access the datastore

Log in to the vSphere web interface, using the guide “[Log in to the vSphere on OVHcloud web console](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/sphere_interface_connexion)” if necessary.

You then need to access the directories where you want to store your files (ISO, for example). The goal is to create a tree-view so that you can easily find your elements within your managed vSphere.

![vSphere Home](images/vsphere_home.png){.thumbnail}

#### Upload files

There are two ways of accessing it, and you are free to choose the one that best suits you:

**1\. From the menu `Inventory`{.action}:**

|                                        **Images**                                         | **Steps**                                                                       |
|:---------------------------------------------------------------------------------------:|:----------------------------------------------------------
| ![vSphere Datastore Upload 01](images/datastore_inventory_2.png){.thumbnail}      | - Click `Inventory`{.action}.                                         |
|![vSphere Datastore Upload 01](images/datastore.png){.thumbnail}<br/>![vSphere Datastore Upload 01](images/datastore_1.png){.thumbnail}| - From `pcc-XXX-XXX-XXX-XXX.ovh.XX`, click `Databases`{.action}. |

You will then find all of your datastores listed.

Click on your database to see a `Files`{.action} section in which your window will automatically open.

![vSphere Datastore Inventory](images/inventory_datastore.png){.thumbnail}

In the `Files`{.action} section of your open database, click `DOWNLOAD FILES`{.action}

Locate the item to upload from your local computer (e.g. a `XXX.iso` file) and click `Open`{.action} to upload the file (ISO or otherwise) from your machine connected to the vSphere HTML client.

The upload of the ISO file begins automatically without validation in the folder (if any) of your selected data store.

You can refresh the Data Store File Explorer to see the uploaded file in the list.

![Datastore Upload - Files](images/datastore_4.png){.thumbnail}

You can then launch this ISO file from a CD/DVD device within your VM, and launch the OS installation by following the installation process. However, it is recommended that you use OVHcloud deployment templates, or VM clones that have been transformed into templates (*templates*) by yourself.

**2\. From the menu `Global Inventory Lists`**

This menu also links you to the `Files`{.action} upload interface:

|                                        **Images**                                         | **Steps**                                                |
|:-------------------------------------------------------------------------------------------:|:---------------------------------------------------
| ![vSphere Global Inventory](images/global_inventory.png){.thumbnail}      | - Click `Global Inventory Lists`{.action}. |
| ![vSphere Global Inventory Datastore](images/global_inventory_datastores.png){.thumbnail} | - Then on `Databases`{.action}.                  |

![vSphere Global Inventory Datastore](images/global_inventory_datastores_2.png){.thumbnail}

Click on the desired `Datastore`.

You will find yourself in the `Files`{.action} section, where you can upload data to your database.

Then click `DOWNLOAD FILES`{.action} to select the file (ISO or other) to upload from your local machine.

Locate the item you want to upload from your local computer (e.g. file `XXX.iso`) and click `Open`{.action}

#### Upload folders

From your database, in the `Files`{.action} section, click `DOWNLOAD A FOLDER`{.action}.

Locate the item to upload from your machine connected to the vSphere HTML client and click `Open`{.action}

Upload will not start until you confirm:

|                                       **Images**                                       | **Steps**                                       |
|:-----------------------------------------------------------------------------------:|:----------------------------------------|
|        ![vSphere Upload Folder](images/datastore_folder_upload.png){.thumbnail}        | - To confirm, click `Send`{.action}. |

#### Move/Copy files

From your database, click `MOVE TO`{.action} or `COPY TO`{.action}.

![Datastore Upload - Move/copy](images/datastore_4.png){.thumbnail}

Locate the destination item to move from the database and click `OK`{.action}.

![Datastore Upload - Move/copy](images/datastore_move.png){.thumbnail}

You must have sufficient rights to perform these actions.

#### Rename files

From your database, click `Replace name with`{.action}.

![Datastore Upload - Rename](images/datastore_upload_rename.png){.thumbnail}

Rename your file, then click `OK`{.action}.

#### Create a folder (optional)

In the `Files`{.action} section of your database, click `NEW FOLDER`{.action} to create a folder to store your files.

Name your folder and click `OK`{.action}.

![Datastore Upload - Create a folder](images/datastore_4.png){.thumbnail}

### Step 2 - Upload with Govc

A GB library for interacting with VMware vSphere APIs (ESXi and/or vCenter Server) is provided by VMware. You can read the `READ ME` of the Github repository at this [url](https://github.com/vmware/govmomi?tab=readme-ov-file)

In addition to the vSphere API client, this repository includes:

- [govc](https://github.com/vmware/govmomi/blob/main/govc/README.md) - vSphere CLI
- [vcsim](https://github.com/vmware/govmomi/blob/main/vcsim/README.md) - vSphere API mock framework
- [toolbox](https://github.com/vmware/govmomi/blob/main/toolbox/README.md) - VM Guest Tools Framework

These are the environment variables that will be required to configure Govc authentication with the VMware api:

|                                        **Environment variable**                                         |                                    **Standard**                                    |                          **Advanced/Premium (NSX + vSAN)**                          | **Comments**                                                                                                                                                                                                                                                                                                                                                                    |
|:-------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                            `GOVC_DATACENTER`                                            |                         `pcc-XXX-XX-XX-XX_datacenterXXXX`                          |                          `pcc-XXX-XX-XX-XX_datacenterXXXX`                          | - The name of the default datacentre in the VMWare sense.                                                                                                                                                                                                                                                                                                                       |
|                                             `GOVC_USERNAME`                                             |                                      `uname`                                       |                                       `uname`                                       | - The local VMware vSphere on OVHcloud connection user. You can omit this variable if you specify your credentials in the `GOVC-URL` variable.                                                                                                                                                                                                                                  |
|                                             `GOVC_PASSWORD`                                             |                                 `p4sswor_DXXXXXx`                                  |                                  `p4sswor_DXXXXXx`                                  | - The login password for the local VMware vSphere on OVHcloud user. You can omit this variable if you specify your credentials in the `GOVC-URL` variable.                                                                                                                                                                                                                      |
|                                               `GOVC_URL`                                                | `user:pass@host`<br/>`vsphere.local`<br/>`vc.local`<br/>`pcc-XXX-XX-XX-XX.ovh.XX`  |  `user:pass@host`<br/>`vsphere.local`<br/>`vc.local`<br/>`pcc-XXX-XX-XX-XX.ovh.XX`  | - The IP or hostname of the VMware vSphere on OVHcloud host. You can also specify the user ID and password, such as `user:pass@host`. And you pass variables `GOVC_USERNAME/PASSWORD`. Warning: the `host` defines the IP of your ESX and not the `pcc-XXX-XXX-XXX-XXX`. If you use govc within a VM in your environment, you can add in `host`: `vsphere.local` or `vc.local`. |
|                                            `GOVC_DATASTORE`                                             |                           `ssd-XXXXXX`<br/>`nfs-XXXXXX`                            |                  `ssd-XXXXXX`<br/>`nfs-XXXXXX`<br/>`vsanDatastore`                  | - The default datastore in the VMWare sense.                                                                                                                                                                                                                                                                                                                                    |
|                                             `GOVC_NETWORK`                                              |                                   `172.XX.XX.XX`                                   |                                   `172.XX.XX.XX`                                    | - The default network in the VMWare sense. You can find them in your global inventory `Networks`.                                                                                                                                                                                                                                                                               |
|                                               `GOVC_HOST`                                               |                                   `172.XX.XX.XX`                                   |                                   `172.XX.XX.XX`                                    | - The default host in the VMWare sense. You can find them in your global inventory `Hosts`.                                                                                                                                                                                                                                                                                     |
|                                          `GOVC_RESOURCE_POOL`                                           |                                    `ovhServer`                                     |                                     `ovhServer`                                     | - The default resource pool in the VMWare sense. You can find them in your global inventory `Resource Pools`.                                                                                                                                                                                                                                                                   |
|                                              `HTTP_PROXY`                                               |                            `http://XXX.XX.XX.XX:XXXXX`                             |                             `http://XXX.XX.XX.XX:XXXXX`                             | - The URL of your proxy server without https.                                                                                                                                                                                                                                                                                                                                   |
|                                              `HTTPS_PROXY`                                              |                            `https://XXX.XX.XX.XX:XXXXX`                            |                            `https://XXX.XX.XX.XX:XXXXX`                             | - The URL of your proxy server with https.                                                                                                                                                                                                                                                                                                                                      |

> [!tabs]
>
> **Linux**
>>
>> **Installation**
>>
>> With the binary:
>>
>> You can download the binary from the official VMware Github repository assets: https://github.com/vmware/govmomi/releases
>>
>> The Curl below automatically chooses the correct version needed for your operating system (`uname`) and downloads the binary in compressed version `tar.gz`.
>>
>> You must have access to the internet to download it, otherwise the curl will not work. If you do not have a `curl`, `tar` and `uname`. Install them before launching the command by running this command:
>>
>> Depending on the operating system: `Ubuntu/debian -> apt`, `Redhat/Centos -> yum/dnf`.
>>
>> Choose the installer you want.
>>
>> ```bash
>> sudo apt/dnf/yum install curl tar uname -y
>> ```
>>
>> Be careful to download the `Govc` asset, which has the correct version of the operating system you are using (Windows/Linux, Debian/Freebsd, x64_86/arm, arm/arm64, etc.).
>>
>>
>> ```bash
>> # extract govc binary to /usr/local/bin
>> # note: the "tar" command must run with root permissions
>> curl -L -o - "https://github.com/vmware/govmomi/releases/latest/download/govc_$(uname -s)_$(uname -m).tar.gz" | tar -C /usr/local/bin -xvzf - govc
>> ```
>>
>> We also advise you to check the sum of the hash downloaded.
>>
>> ```bash
>> wget https://github.com/vmware/govmomi/releases/download/v0.43.0/checksums.txt
>> sha256sum govc_xxxx.tar.gz > checksums_govc_XX.txt
>> sha256sum -c checksums_govc_XX.txt 2>&1 | grep OK
>> cat checksums.txt
>> ```
>>
>> **Note**: You must be root to run `tar` or have sufficient `sudo` rights. Depending on the rights of the user used on your operating system, you must also add the execution rights on the Govc binary, for example.
>>
>> With go install :
>>
>> ```bash
>> go install github.com/vmware/govmomi/govc@latest
>> ```
>>
>> With Docker:
>>
>> A Docker image can be a good way to run the Govc binary in a versioned, isolated way.
>>
>> [The official VMware Docker image](https://hub.docker.com/r/vmware/govc) `govc` is built from this [Dockerfile](https://github.com/vmware/govmomi/blob/main/Dockerfile.govc).
>>
>> Example of Docker govc image execution with environment variables see concepts in the rest of the documentation.
>>
>> ```bash
>> docker run -e GOVC_USERNAME=XXXXX -e GOVC_PASSWORD=XXXXX -e GOVC_URL=https://pcc-XX-XX-XX-XX.ovh.de --rm -it vmware/govc /govc ls
>> or
>> docker run -e GOVC_URL=user:pass@host --rm -it vmware/govc /govc ls
>> ```
>>
>> For alternative installations, check out the official VMware Git `Govc` repository at [this URL](https://github.com/vmware/govmomi/blob/main/govc/README.md).
>>
>> **Configuration/Authentication**
>>
>> The program provides a wide range of arguments for defining the conditions for accessing the API (e.g. its URL, user/password, etc.). However, we recommend using environment variables to manage your clusters more efficiently, especially if you need to connect to several APIs. They can also be placed in a file for reuse during another session, for example.
>>
>> Here is a configuration example for a Linux OS. Remember to create your `govc.env` file in the root of the folder where you launch the binary.
>>
>> ```bash
>> # govc.env
>> export GOVC_DATACENTER=<Default datacenter name as defined by VMWare>
>> export GOVC_USERNAME=<vmware local user>
>> export GOVC_PASSWORD=<VMware local user password>
>> export GOVC_URL=<IP or hostname of vsphere>
>> export GOVC_DATASTORE=<Default Datastore>
>>
>> # If you need to use a network proxy
>> # export HTTP_PROXY=http://XXX.XX.X.X:XXXXX
>> export HTTPS_PROXY=http://XXX.XX.X.X:XXXXX
>> ```
>>
>> As with any file containing variables, you just need to source it from a terminal.
>>
>> ```bash
>> source govc.env
>> ```
>>
>> At the launch of each command, options can be modified on the fly to overload the environment variables, for example:
>>
>> ```bash
>> govc datastore.ls -dc=Datacenter2 -ds=Datastore1 -debug=true
>> ```
>>
>> Please note that if you use the debug command (the “=true” is optional, as it is a Go flag), a hidden folder `.govmomi/debug” will be created, with logs you can use to trace your problem.
>>
>> **Usage**
>>
>> We will show you the Govc `datastore.upload` upload command here.
>>
>> First of all, it is important to understand that within a datacentre, objects are grouped in the same type, under `VM`, `Network`, `Host` and `Datastore`. Thus, there is only one method for uploading files with the command `govc datastore.upload`.
>>
>> ```bash
>> gov datastore.upload image.iso folder-isos/image.iso
>> ```
>>
>> Download + Upload :
>>
>> Here is an example of uploading an ISO image with `govc`. Be sure to locate the folder to which you want to import your ISO, if you have one:
>>
>> Download an ISO with curl before uploading it using a shell pipe:
>>
>> ```bash
>> curl https://example.com/iso/image.iso | govc datastore.upload - folder-iso/image.iso
>> ```
>>
>> Govc has a large number of commands to call the VMware API to manage your managed resources. Please see the full list in the official documentation.
>>
> **Windows**
>
>> **Installation**
>>
>> Since 2017 `Curl` and `bsdtar -> tar` are installed by default, so you can run the command below with `Powershell`, `CMD` or the prompt you prefer.
>>
>> With Powershell :
>>
>> You can install the Govc binary with Powershell by running the command below:
>>
>> ```powershell
>> curl -L -o - "https://github.com/vmware/govmomi/releases/latest/download/govc_$(uname -s)_$(uname -m).tar.gz" | tar -C /usr/local/bin -xvzf - govc
>> ```
>>
>> If you prefer, you can simply unzip the following `Govc` Windows asset (x86_64.zip) after downloading it at the following URL: https://github.com/vmware/govmomi/releases/download/v0.43.0/govc_Windows_x86_64.zip
>>
>> With Chocolatey :
>>
>> You can use the official Powershell Chocolatey repository, however we recommend the most recent version on the VMware Github repository (above).
>>
>> ```powershell
>> Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolate.org/install.ps1'))
>> choco install govc
>> choco install jq
>> ```
>>
>> `jq` allows you to list Govc returns correctly in Powershell.
>>
>> **Configuration/Authentication**
>>
>> With Powershell :
>>
>> There are several ways to configure environment variables with Windows and Powershell, here are some examples (see the comments for each command and powershell variable).
>>
>> ```powershell
>> # Set env variables with Set-item :
>> Set-Item -Path env:GOVC_URL -Value "https://pcc-XX-XX-XX-XX.ovh.xx"
>>
>> # Set env variables for your vCenter, just push "Enter" :
>> $vcenter = "<your_vcenter_fqdn>"
>> $cred = get-credential
>>
>> # Credentials configuration :
>> New-VICredentialStoreItem -Host $vcenter -User $cred.username -Password $cred.GetNetworkCredential().password
>>
>> # Set env variables, just push "Enter" :
>> $env:GOVC_URL="https://"<pcc-XX-XX-XX-XX.ovh.xx>"
>> $env:GOVC_USERNAME="<uname>"
>> $env:GOVC_PASSWORD="<p4sswor_DXXXXXx>"
>> $env:GOVC_DATASTORE="<datastore_name>"
>> $env:GOVC_NETWORK="<portgroup_name>"
>> $env:GOVC_RESOURCE_POOL="<ovhServer>"
>>
>> # Check GOVC variables:
>> ls env:GOVC*
>>
>> # Check configuration from env vars setup :
>> Get-Item env:* | sort-object name
>> gov about
>>
>> # With jq :
>> gov about -json | jq '.'
>> ```
>>
>> There are several ways to make Govc work with Windows, powershell being the most well-known. But there is an alternative solution, Windows has implemented WSL 2 (Windows subsystem for Linux) which can be a good alternative to simplify the configuration.
>>
>> **Usage**
>>
>> Upload:
>>
>> To upload an ISO with powershell and Govc, use the `Govc datastore.upload` argument
>>
>> ```powershell
>> gov datastore.upload - folder-iso/image.iso
>> ```
>>
>> Download + Upload :
>>
>> ```powershell
>> curl https://example.com/iso/image.iso | govc datastore.upload - folder-isos/image.iso
>> ```
>> Govc has a large number of commands to call the VMware API to manage your managed resources. Please see the full list in the official documentation.
>>

## Go further

- [IAM for VMware on OVHcloud - Overview and FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)

If you require training or technical support to implement our solutions, please contact your Technical Account Manager or visit [this page](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the [dedicated Discord channel](https://discord.gg/ovhcloud).

Join our [OVHcloud user community](/links/community).
