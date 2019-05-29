---
title: Create an additional volume and attach it to an instance
slug: create-an-additional-volume-and-attach-it-to-an-instance
excerpt: Walk-through document on creating and attaching an additional hard disk to a cloud server.
section: Quick start
---


## Preamble
You can create additional volumes (or additional disks) for your Public Cloud instances. This is useful if:

- You want to increase your storage capacity without changing the instance model
- You want to have a highly available and high-performances storage space
- You want to be able to move your storage space as well as the data contained on another instance
- You want to install the system on a separate Ceph disk rather than a SSD disk

This guide will explain how to create an additional volume and then how to attach it to one of your instances.


### Prerequisites
- A [Public Cloud instance](../first_steps_start_my_first_server_within_3_minutes/guide.en-gb.md){.ref}


## Creating the volume
- Log in to the OVH Customer [Control Panel](https://www.ovh.com/manager/cloud/){.external}
- Click the `Add`{.action} button and select `Add a hard disk`{.action}

![public-cloud](images/2707.png){.thumbnail}

A new menu will display.

![public-cloud](images/2731.png){.thumbnail}


From this new menu, you can:

- Name your volume
- Select the volume type:

|Classic|200 IOPS guaranteed|
|---|---|
|High performance|Up to 3000 IOPS|

- Choose the volume capacity starting from 10GB.
- Choose the region for your volume


> [!primary]
>
> To attach a volume to an instance, they must both
> be located in the same region.
> 

- Make your hard disk bootable by checking "boot disk" if you want to start the system from this disk.
- Validate the creation of the volume.
A new window will be displayed with your volume:

![public-cloud](images/2732.png){.thumbnail}



## Volume attachment
You can then attach your additional volume to an instance:

- By dragging and dropping your volume on your instance.
- By clicking on the arrow in the bottom-right of your volume and selecting `Attach to a server`{.action}

Once this is done, it will appear just below your instance:


![public-cloud](images/2733.png){.thumbnail}



> [!primary]
>
> To continue, you will probably need to configure this
> new volume on your instance
> <docs/cloud/public-cloud/howto_configure_an_additionnal_volume/>.
> 