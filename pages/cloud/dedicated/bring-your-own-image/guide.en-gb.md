---
title: How to use the Bring Your Own Image feature
excerpt: Find out how to easily deploy your own images on dedicated servers using the OVHcloud APIv6
slug: bringyourownimage
section: Advanced use
---

**Last updated 25th February 2021**

## Objective

The Bring Your Own Image technology (BYOI) enables you to deploy *cloudready* images directly on your dedicated server. You can therefore use the bare metal service as a resource for your deployments.

**What does *cloudready* mean?**
<br>In short, to be agnostic of the infrastructure on which the image is deployed.
In addition to the prerequisites and limitations mentioned below, you must ensure that the image (downloaded or generated) answers correctly to the definition of technical expectations of a cloudready image.
The image must be able to boot correctly, whatever the server type, it must also embed the Cloud-Init service if Config Drive is used. Finally, the system configurations must allow the OS to be fully initiated, especially those related to the network.

You can also make use of this option when reinstalling a server from the OVHcloud Control Panel ([see the "Getting started" guide](../getting-started-dedicated-server/#installrtm)). Please use the instructions below as a reference.

**This guide explains how to use BYOI through the OVHcloud APIv6.**

## Requirements

- an OVHcloud [dedicated server](https://www.ovh.com/fr/serveurs_dedies/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) in the “[Deployment via Control Panel”](#viacontrolpanel) section of this guide
- access to the [OVHcloud API](https://api.ovh.com/){.external} in the “[Deployment via API”](#viaapi) section of this guide
- You need to have generated the [credentials to use the APIv6](../../api/api-premiers-pas/) for the “[Deployment via API”](#viaapi) section of this guide.


> [!warning]
>
> A new installation with BYOI will erase all the data on the server.
>

## Instructions

**Technical limitations**

There are some technical limitations linked to the use of physical products such as dedicated servers. Here is a non-exhaustive list, to keep in mind during your deployment preparation:

- Boot type : **uefi** or **legacy**
- Partition type : **MBR** or **GPT**
- Image format : **qcow2** or **raw**

If your server has a **uefi** boot type, be sure to add an **EFI** partition to your image template.

**Deployment methods**

- [Deployment via the Control Panel](#viacontrolpanel): will allow you to deploy your image quickly and easily, directly via the OVHcloud Control Panel.
- [Deployment via API](#viaapi): You can use OVHcloud APIs to integrate them into your own scripts to automate deployment.

### Deploy your image via the OVHcloud Control Panel <a name="viacontrolpanel"></a>

In the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) , go to the `Bare Metal Cloud`{.action} section, then select `Dedicated servers`{.action} .

In the `General information` box, click the `...`{.action} button in front of `General information`. Then click `Install`{.action}.

![bring your ownimage](images/byoi-controlpanel01.png){.thumbnail}

In the window that appears, select `Install from custom image`{.action}, and then click `Install`{.action}.

![bring your ownimage](images/byoi-controlpanel02.png){.thumbnail}

You will be redirected to the configuration page. Make sure your image URL is in the correct format. Complete the rest of the required fields on this page. Once you have confirmed that the information is correct, click `Install System`{.action}.

You can find more details on the options in the “[Options tables”](#options) section of this guide. 

To enable `ConfigDrive`, please find the documentation on [this page](https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html).

![bring your ownimage](images/byoi-controlpanel03.png){.thumbnail}

### Deploy your image via the APIs <a name="viaapi"></a>

Log in to [https://api.ovh.com/](https://api.ovh.com/){.external} then go to the `/dedicated/server`{.action} section. You can use the `Filter` field to look for  "BringYourOwnImage".

The BYOI feature uses 3 API calls.

![calls API](images/apicalls.png){.thumbnail}

To deploy your image, use the following API call and complete the required fields:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Field | Description |
|-|-|
| serviceName | Your server's name. |
| URL | The URL to retrieve your image from. |
| checkSum | Your image's checksum. |
| checkSumType | Your image's checksum type (md5, sha1, sha256, sha512). |
| enable (ConfigDrive)\* | Create ConfigDrive partition (cloud-init) |
| hostname (ConfigDrive)\* | Your server's hostname. |
| sshKey (ConfigDrive)\* | Your public SSH key. |
| userData (ConfigDrive)\* | Your post-install script. |
| userMetadatas (ConfigDrive)\* | Meta data used by CloudInit when booting. |
| description | Your image's name. |
| diskGroupId | The disk ID on which you want to install your image. |
| httpHeader | Only if necessary to download your image. |
| type | Your image's type/format (qcow2, raw, ova). |

\*  ConfigDrive partition is used by cloud-init while first server boot in order to configure it with your needs. You can choose to enable it or not.

![POST API call](images/postapicall.png){.thumbnail}

After you have completed the fields, start the deployment by clicking `Execute`{.action}.

### Checking a deployment

You can track the deployment of your image through the API call below or through the KVM / [IPMI](../use-ipmi-dedicated-servers/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

In this example, the deployment is starting.

![GET API call](images/getapicall.png){.thumbnail}

Deployment can take up to 10 minutes. When the operation is complete, your deployment status will change to "done" and your server will be restarted to disk.

#### Result examples

Here are some results examples you might have :

| Message | Meaning |
|-|-|
| Can't write qcow2 on disk. | Could not burn qcow2 image on disk. |
| Could not download, qcow2 image is too big to download in memory. | There is not enough RAM space to store your image. |
| Could not download image located : http://path/of/your/image. | Impossible to download image located http://path/of/your/image. |
| Bad format image, expected : qcow2, raw. | Incorrect image format. |
| Bad checkSumType, expected : sha1, sha256, md5. | Incorrect checksum type. |
| Bad $checkSumType for downloaded file, got : 1234 while expecting 5678. | Incorrect checksum signature. |
| Can not move backup GPT data structures to the end of disk. | Disk format is not correct. |
| Could not create configdrive on disk. | Impossible to create config-drive partition. |

### Deleting a deployment

You can choose to remove your deployment by using the following API call:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

This will erase the deployment status and put your server in rescue mode.

## Go further

Join our user community on <https://community.ovh.com/en/>.
