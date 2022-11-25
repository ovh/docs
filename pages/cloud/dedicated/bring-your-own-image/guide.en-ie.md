---
title: How to use the Bring Your Own Image feature
excerpt: Find out how to easily deploy your own images on dedicated servers
slug: bringyourownimage
section: Advanced use
---

**Last updated 25th November 2022**

## Objective

The Bring Your Own Image feature (BYOI) enables you to deploy *cloudready* images directly on your dedicated server. You can therefore use the bare metal service as a resource for your deployments.

**What does *cloudready* mean?**

The *cloudready* standard generally means to be agnostic of the infrastructure on which the image is deployed.
In addition to the prerequisites and limitations mentioned below, you must ensure that the image (downloaded or generated) answers correctly to the definition of technical expectations of a cloudready image.
<br>
The image must be able to boot correctly, whatever the server type. It must also embed the Cloud-Init service if ConfigDrive is used. Finally, the system configurations must allow the OS to be fully initiated, especially those related to the network.

**This guide explains how to use BYOI on your OVHcloud dedicated server.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-ie/bare-metal/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) (for the method "[Deployment via Control Panel](#viacontrolpanel)")
- Access to the [OVHcloud API](../../api/first-steps-with-ovh-api/) (for the section "[Deployment via API](#viaapi)" of this guide)
- Your image must be smaller than the Server RAM minus 3GiB.

> [!warning]
>
> A new installation with BYOI will erase all the data on the server.
>

## Instructions

**Technical limitations**

There are some technical limitations linked to the use of physical products such as dedicated servers. Here is a non-exhaustive list, to keep in mind during your deployment preparation:

- Boot type: **uefi** or **legacy**
- Partition type: **MBR** or **GPT**
- Image format: **qcow2** or **raw**

If your server has a **uefi** boot type, be sure to add an **EFI** partition to your image template.

**Deployment methods**

- [Deployment via the Control Panel](#viacontrolpanel): allows you to simply deploy your image using the OVHcloud Control Panel.
- [Deployment via API](#viaapi): you can use the OVHcloud API to integrate images into your own scripts to automate deployments.

### Deploying your image in the OVHcloud Control Panel <a name="viacontrolpanel"></a>

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and go to the `Bare Metal Cloud`{.action} section, then select your server under `Dedicated servers`{.action}.

In the `General information` tab, click on the `...`{.action} button next to "System (OS)" and then on `Install`{.action}.

![bring your ownimage](images/byoi-controlpanel01.png){.thumbnail}

In the window that appears, select `Install from custom image`{.action} and click on `Next`{.action}.

![bring your ownimage](images/byoi-controlpanel02.png){.thumbnail}

You will be redirected to the configuration page. Make sure your image URL is in the correct format. Complete the rest of the required fields on this page. Once you have confirmed that the information is correct, click `Install the system`{.action}.

You can find more details on the options in the "[Deployment options](#options)" section below.

For more information on activating ConfigDrive, please consult the documentation on [this page](https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html).

![bring your ownimage](images/byoi-controlpanel03.png){.thumbnail}

### Deploy your image via the APIs <a name="viaapi"></a>

Log in to the [API console](https://api.ovh.com/) and go to the `/dedicated/server`{.action} section. You can use the `Filter` field to find "BringYourOwnImage".

The BYOI feature uses 3 API calls.

![calls API](images/apicalls.png){.thumbnail}

To deploy your image, use the following API call and complete the required fields:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>

#### Deployment options <a name="options"></a>

| Field | Description |
|-|-|
| serviceName | Your server's name. |
| URL | The URL to retrieve your image from. |
| checkSum | Your image's checksum. |
| checkSumType | Your image's checksum type (md5, sha1, sha256, sha512). |
| enable (ConfigDrive) | Create ConfigDrive partition (cloud-init) |
| hostname (ConfigDrive) | Your server's hostname. |
| sshKey (ConfigDrive) | Your public SSH key. |
| userData (ConfigDrive) | Your post-install script. |
| userMetadatas (ConfigDrive) | Meta data used by CloudInit when booting. |
| description | Your image's name. |
| diskGroupId | The disk ID on which you want to install your image. |
| httpHeader | Only if necessary to download your image. |
| type | Your image's type/format (qcow2, raw, ova). |

The ConfigDrive partition is used by cloud-init during the first server boot in order to apply your configurations. You can choose whether to enable it or not.

![POST API call](images/postapicall.png){.thumbnail}

After you have completed the fields, start the deployment by clicking `Execute`{.action}.

### Checking a deployment

You can track the deployment of your image through the API call below or through the KVM / [IPMI](../use-ipmi-dedicated-servers/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

In this example, the deployment is "starting".

![GET API call](images/getapicall.png){.thumbnail}

Deployment can take up to 10 minutes. When the operation is complete, your deployment status will change to "done" and your server will be restarted to disk.

#### Result examples

Here are some results you might have:

| Message | Meaning |
|-|-|
| Can't write qcow2 on disk. | Could not burn qcow2 image on disk. |
| Could not download, qcow2 image is too big to download in memory. | There is not enough RAM space to store your image. |
| Could not download image located: `http://path/of/your/image`. | Impossible to download image located `http://path/of/your/image`. |
| Bad format image, expected: qcow2, raw. | Incorrect image format. |
| Bad checkSumType, expected: sha1, sha256, md5. | Incorrect checksum type. |
| Bad $checkSumType for downloaded file, got: 1234 while expecting 5678. | Incorrect checksum signature. |
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
