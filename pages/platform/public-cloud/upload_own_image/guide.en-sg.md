---
title: 'Uploading your own image'
excerpt: Find out how to upload your own image to Public Cloud
updated: 2020-10-27
---

**Last updated 27th October 2020**

## Objective

OVHcloud offers ready-to-go images for Public Cloud instances, however we also enable customers to use their own images.

**This guide will provide the steps to upload your own images to your project.**

## Requirements

- A [Public Cloud instance](/pages/platform/public-cloud/public-cloud-first-steps#step-3-creating-an-instance/) in your OVHcloud account
- Your own RAW/QCOW2 (recommended formats) image 
- An [OpenStack user](/pages/platform/public-cloud/create_and_delete_a_user) 
- An [OpenStack CLI ready environment](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api) (if using CLI)

## Instructions

### Before starting

It is advisable to either use cloud-ready images already provided by the distribution vendor or build your own image using solutions such as [Packer OpenStack builder](/pages/platform/public-cloud/create_image_from_existing_image_with_packer).

Cloud-ready images can be found here:

- <https://cloud.centos.org/centos/>{.external}
- <https://cloud.debian.org/images/cloud/>{.external}
- <https://cloud-images.ubuntu.com/releases/>{.external}
- <https://alt.fedoraproject.org/cloud/>{.external}

Other operating systems tend to offer ISO images which are also applicable when [building images with Packer](https://www.packer.io/docs/builders){.external} such as QEMU and VirtualBox builders.

We recommend ensuring the following is installed on your images for them to be cloud-ready:

- *QEMU Guest Agent*: this will provide better snapshot experience as it will allow the host to communicate to the instance for live snapshots. Not all operating systems are compatible with this package but most of them are.
- *cloud-init*: this will allow you to bootstrap your instance on the first boot, such as adding SSH keys and configuring network. Most operating systems are compatible with this.

Finally we recommend images to be either in RAW or QCOW2 format. As best practice, keep the size of the image as small as possible so that you are billed less per month and spawns of your instances are quicker.

### Uploading your image

With OpenStack there are two ways of uploading your own image. You can either upload it via the OpenStack command line interface or with the [Horizon web interface](https://horizon.cloud.ovh.net/auth/login/){.external}.

#### Using CLI

Once your image is ready to upload, you can use the following steps to upload it using the OpenStack CLI:

1\. Download your openrc.sh file for your OpenStack user from the OVHcloud Control Panel (select the region you want to upload to).

![openrc](images/openrc_file.png){.thumbnail}

2\. Source the openrc file:

```sh
source openrc.sh
```

3\. Once the file is sourced, you will be asked to enter the password for the OpenStack user. Enter your password.

4\. Now you can upload your image. This example command will do the following:

- Disk format is "RAW"
- Upload an image from the current path called "debian9.raw"
- Call the image "Debian 9 - My Image"
- Set the image to private state
- Set properties which are recommended to set. Set optimal configuration which allow features like *live-snapshot* and *cloud-init* to work (requires the username to be used)

```sh
openstack image create --disk-format raw --container-format bare --file debian9.raw "Debian 9 - My Image" --private --property distribution=debian --property hw_disk_bus=scsi --property hw_scsi_model=virtio-scsi --property hw_qemu_guest_agent=yes --property image_original_user=debian
```

#### Using Horizon

Once your image is ready to upload, you can use the following steps to upload it using the OpenStack Horizon web interface:

1\. Log in to the [Horizon interface](https://horizon.cloud.ovh.net/auth/login/).

2\. Select on the top left the region to which you want to upload your image.

![horizon_1](images/horizon_1.png){.thumbnail}

3\. Go to the `Images` section and click on `Create Image`{.action}.

![horizon_2](images/horizon_2.png){.thumbnail}

4\. Enter the details of your image and select the file from your computer.

![horizon_3](images/horizon_3.png){.thumbnail}

5\. Enter the instance metadata (any custom ones you may have you can also add) and then click `Create Image`{.action}.

![horizon_4](images/horizon_4.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
