---
title: 'Starting an instance on an bootable volume'
excerpt: 'Find out how to start an instance on an bootable volume'
updated: 2025-02-19
---

## Objective

Cloud servers come with an original disk that is copied from a system image (Debian 12, Windows Server, etc.). It is also possible to use additional volumes, these are persistent disks that will allow data to be stored.

It is also possible to deploy an operating system to and from a volume. The cloud server will then start on this volume instead of the original disk.

**This guide provides you with instructions on how to start an instance on an attached volume.**

![public-cloud](images/3704.png){.thumbnail}

> [!success]
>
> Openstack natively allows you to boot from a volume. 
> It involves making the volume bootable and starting the instance from this volume.
> The changes will cause the original disk to disappear as the new volume is taking over.
> The functionality described in this guide eliminates the need to access the original disk and therefore takes advantage of the volume.
>
> [!warning]
>
> Regarding Openstack version used at the moment, with a bootable volume, you cannot rescue a volume-backed instance.
>  
## Requirements

- [Configuring user access to Horizon](/pages/public_cloud/compute/loading_introducing_horizon)){.external}
- [Setting OpenStack environment variables](/pages/public_cloud/compute/loading_openstack_environment_variables){.external}

### Creating a bootable volume from an image.

> [!tabs] 
> **Horizon**
>> > Log in to [the Horizon interface](https://horizon.cloud.ovh.net/auth/login/).  
>> >
>> > Select the `appropriate region`{.action} from the drop down menu at the top left.  
>> >
>> > On the Project tab, open the `Volumes tab`{.action} and click `Volumes category`{.action}
>> >
>> > Click `Create Volume`{.action}
>> > .![public-cloud](images/create-a-volume-2.png){.thumbnail}  
>> >
>> > In the dialog box that opens, enter or select the following values.  
>> > | Information | Description |
>> > | --- | --- |
>> > | Volume Name | Specify a name for the volume.|
>> > | Description | Optionally, provide a brief description for the volume|
>> > | Volume Source | choose the option Image. .![public-cloud](images/create-a-volume-3.png){.thumbnail}|
>> > | Use image as a source | You can select the image from the list. .![public-cloud](images/create-a-volume-4.png){.thumbnail}|
>> > | Type| Depend on the volume type you want to use |
>> > | Size (GB) | The size of the volume in gibibytes (GiB). |
>> > | Availability Zone | nova .![public-cloud](images/create-a-volume-5.png){.thumbnail}|
>> >
>> > Click `Create Volume.`{.action}.  
>> >
>> > The volume will be in a creating then a downloading state before being available
>> > .![public-cloud](images/create-a-volume-8.png){.thumbnail}  
>> > 
>> > As you can see with the screenshot or with `clicking on the volume name.`{.action}., it is set as bootable .![public-cloud](images/create-a-volume-9.png){.thumbnail}  
>> >
> **Openstack client**
>> > You can create a bootable volume from an existing image, volume, or snapshot. This procedure shows you how to create a volume from an image and use the volume to boot an instance.
>> > 
>> > ```console
>> > $ openstack image list
>> > ```
>> > 
>> > > [!primary]
>> > >
>> > > Note the ID or the name of the image that you wish to use.
>> > 
>> > Create a bootable 10GB high-speed volume named **volume_ubuntu** from an image ubuntu 24.04:
>> > 
>> > You can install an image on a volume using the `--image` argument:
>> > 
>> > ```console
>> > $ openstack volume create --type high-speed --image 2c2e28dc-9124-49c3-b92d-7f00bd83ac86 --size 10 volume_ubuntu
>> > +---------------------+--------------------------------------+
>> > | Field | Value |
>> > +---------------------+--------------------------------------+
>> > | attachments | [] |
>> > | availability_zone | nova |
>> > | bootable | false |
>> > | consistencygroup_id | None |
>> > | created_at | 2025-02-06T17:04:34.000000 |
>> > | description | None |
>> > | encrypted | False |
>> > | id | d7611318-fd7b-4b6a-8a7a-8d368049f747 |
>> > | multiattach | False |
>> > | name | volume_ubuntu |
>> > | properties | |
>> > | replication_status | None |
>> > | size | 20 |
>> > | snapshot_id | None |
>> > | source_volid | None |
>> > | status | creating |
>> > | type | high-speed |
>> > | updated_at | None |
>> > | user_id | 1a67934f87ef481d9cb617a913bfa8bb |
>> > +---------------------+--------------------------------------+
>> > ```
>> > In this command, **2c2e28dc-9124-49c3-b92d-7f00bd83ac86** is the ubuntu 24.04 image ID.
>> > 
>> > > [!primary]
>> > >
>> > > Cinder makes a volume bootable when --image parameter is passed.


### Starting Instance using a bootable volume

> [!tabs] 
> **Horizon**
>> > Log in to [the Horizon interface](https://horizon.cloud.ovh.net/auth/login/).   
>> >
>> > Select the `appropriate region`{.action} from the drop down menu at the top left.
>> >
>> > On the Project tab, open the `Compute tab`{.action} and click `Instances category`{.action}  
>> >
>> > Click `Launch Instance`{.action} .![public-cloud](images/create-an-instance-with-a-bootable-volume-1.png){.thumbnail}  
>> >
>> > In the Launch Instance dialog box, for the Source tab, in the `Select Boot Source` choose volume .![public-cloud](images/create-an-instance-with-a-bootable-volume-3.png){.thumbnail}  
>> >
>> > With choosing this option, a new field for Volume displays. You can select the volume created bofore from the list. .![public-cloud](images/create-an-instance-with-a-bootable-volume-4.png){.thumbnail}  
>> >
>> > Click `Launch Instance`{.action}.   
>> >
>> > The instance will be in a build then Block Device Mapping state before being available.  
>> >
>> > The instance will have the volume attached. .![public-cloud](images/create-an-instance-with-a-bootable-volume-9.png){.thumbnail}
>> >
> > **Openstack client**
>> > Create an instance, specifying the bootable volume **volume_ubuntu** as the boot device.
>> > ```console
>> > openstack server create --volume volume_ubuntu --flavor d2-2 --key-name publickey --nic net-id=Ext-Net InstanceTest
>> > ```
>> >  
>> > List volumes to ensure the status has changed to in-use and the volume is correctly reporting the attachment.
>> > ```console
>> > $ openstack volume list
>> > +--------------------------------------+---------------+--------+------+--------------------------------------+
>> > | ID | Name | Status | Size | Attached to |
>> > +--------------------------------------+---------------+--------+------+--------------------------------------+
>> > | d7611318-fd7b-4b6a-8a7a-8d368049f747 | volume_ubuntu | in-use | 10 | Attached to InstanceTest on /dev/sda |
>> > +--------------------------------------+---------------+--------+------+--------------------------------------+
>> > ```
>> > List volumes attached to Instance InstanceTest
>> > 
>> > ```console
>> > $ openstack server volume list InstanceTest
>> > +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> > | ID | Device | Server ID | Volume ID | Tag |
>> > +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> > | d7611318-fd7b-4b6a-8a7a-8d368049f747 | /dev/sda | 5d97c190-f2e3-4af4-a010-6fa7bffbf88b | d7611318-fd7b-4b6a-8a7a-8d368049f747 | None |
>> > +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> > ```
>> > 
>> > > [!primary]
>> > >
>> > > You can also create an instance, using the chosen image and requesting “boot from volume” behavior.
>> > > 
>> > > ```console
>> > > $ openstack server create --flavor d2-2 --key-name publickey --nic net-id=Ext-Net --image b680f0aa-8eb8-4ac8-b008-2a90bb71af4f --boot-from-volume 10 InstanceTest2
>> > > +-----------------------------+---------------------------------------------+
>> > > | Field | Value |
>> > > +-----------------------------+---------------------------------------------+
>> > > | OS-DCF:diskConfig | MANUAL |
>> > > | OS-EXT-AZ:availability_zone | |
>> > > | OS-EXT-STS:power_state | NOSTATE |
>> > > | OS-EXT-STS:task_state | scheduling |
>> > > | OS-EXT-STS:vm_state | building |
>> > > | OS-SRV-USG:launched_at | None |
>> > > | OS-SRV-USG:terminated_at | None |
>> > > | accessIPv4 | |
>> > > | accessIPv6 | |
>> > > | addresses | |
>> > > | adminPass | dP4e4iY3eWWC |
>> > > | config_drive | |
>> > > | created | 2025-02-06T17:20:06Z |
>> > > | flavor | d2-2 (dc3fe9e7-e374-4ad8-b200-fa3bdf45069f) |
>> > > | hostId | |
>> > > | id | a4632249-e1b4-4047-be1c-87f8b0328f7c |
>> > > | image | N/A (booted from volume) |
>> > > | key_name | publickey |
>> > > | name | InstanceTest2 |
>> > > | progress | 0 |
>> > > | project_id | d7fb756ae2c24b1cb8630ec7f56ee4a8 |
>> > > | properties | |
>> > > | security_groups | name='default' |
>> > > | status | BUILD |
>> > > | updated | 2025-02-06T17:20:06Z |
>> > > | user_id | 1a67934f87ef481d9cb617a913bfa8bb |
>> > > | volumes_attached | |
>> > > +-----------------------------+---------------------------------------------+
>> > > ```
>> > > 
>> > > In this command, **b680f0aa-8eb8-4ac8-b008-2a90bb71af4f ** is the Debian 12 image ID.
>> > > 
>> > > - List the volumes:
>> > > 
>> > > List volumes to ensure the status has changed to in-use and the volume is correctly reporting the attachment.
>> > > 
>> > > ```console
>> > > $ openstack volume list
>> > > +--------------------------------------+---------------+--------+------+----------------------------------------+
>> > > | ID | Name | Status | Size | Attached to |
>> > > +--------------------------------------+---------------+--------+------+----------------------------------------+
>> > > | 27f8332d-8bfd-4515-b0a8-18667ae50ff8 | | in-use | 10 | Attached to InstanceTest2 on /dev/sda |
>> > > | d7611318-fd7b-4b6a-8a7a-8d368049f747 | volume_ubuntu | in-use | 10 | Attached to InstanceTest on /dev/sda |
>> > > +--------------------------------------+---------------+--------+------+----------------------------------------+
>> > > ```
>> > > List volumes on the server to ensure it is correctly attached.
>> > > ```console
>> > > $ openstack server volume list InstanceTest
>> > > +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> > > | ID | Device | Server ID | Volume ID | Tag |
>> > > +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> > > | d7611318-fd7b-4b6a-8a7a-8d368049f747 | /dev/sda | 5d97c190-f2e3-4af4-a010-6fa7bffbf88b | d7611318-fd7b-4b6a-8a7a-8d368049f747 | None |
>> > > +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> > > ```

## Go further

Join our [community of users](/links/community). 
