---
title: 'Upgrading your Cisco ASA firewall'
excerpt: 'Find out how to upgrade your Cisco ASA firewall'
slug: upgrading-cisco-asa-firewall
section: 'Advanced use'
---

**Last updated 28th February 2018**

## Objective

To ensure that your system is optimally protected, you will need to regularly upgrade your Cisco Adaptive Security Appliance (ASA) firewall with the latest patches. By doing so, you will avoid potential security vulnerabilities.

**This guide will explain how to upgrade your Cisco ASA firewall.**


## Requirements

- You must have access to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Instructions

### Disable the Cisco ASA firewall through the Control Panel

The upgrade process will require your system to reboot several times. For this reason, we recommend disabling the Cisco ASA firewall, so that your server does not experience any outages during the upgrade process.

To do this, go to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and open the `Dedicated`{.action} section. Then select your dedicated server, and `Cisco ASA Firewall`{.action}. Next, click `Disable the Cisco ASA firewall`{.action}, on the right-hand side.

![Disable ASA](images/customer_panel_asa_disable.png){.thumbnail}

### Apply configuration

#### First method: Via the ASDM

Log in to your Cisco Adaptive Security Device Manager (ASDM), then choose `File`{.action} and `Save Running Configuration to Flash`{.action}.

![Saving configuration via ASDM](images/asa1.jpg){.thumbnail}

#### Second method: Via SSH

Log in to the ASA via the SSH protocol:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password: ********
```

Then run the following command:

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```


### Save the configuration

Create a local file, e.g. `backupAsa.txt`. Next, log in to the ASDM and go to `Tools`{.action}, then `Backup Configurations`{.action}.

![Save configuration via ASDM 1](images/asa2.jpg){.thumbnail}

In the pop-up menu that opens, select the local file that you have just created (with `Browse Local...`{.action}), then save the configuration by clicking `Backup`{.action}.

![Save configuration via ASDM 2](images/asa3.jpg){.thumbnail}


### Reload the ASA

This step is important, as you need to ensure that the ASA works properly and is accessible after a single reload.

#### First method: Via the ASDM

Log in to your Cisco Adaptive Security Device Manager, then choose `Tools`{.action}, and `System Reload...`{.action}.

![Reload ASA via ASDM 1](images/asa5.jpg){.thumbnail}

To reload the service immediately, select the following in the window that appears: `Reload Start Time` > `Now`{.action} > `Schedule Reload`{.action}.

![Reload ASA via ASDM 2](images/asa6.jpg){.thumbnail}

![Reload ASA via ASDM 3](images/asa7.jpg){.thumbnail}


#### Second method: Via SSH

Log in to the ASA using the SSH protocol, then run the following command: `reload`

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

The reboot to reload the configuration will take a few minutes.


### Re-enable the Cisco ASA firewall through the Control Panel

As per the first step, go to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and open the `Dedicated`{.action} section. Select your dedicated server, then `Cisco ASA Firewall`{.action}. Next, click `Enable the Cisco ASA firewall`{.action}, on the right-hand side.

![Enable ASA](images/customer_panel_asa_enable.png){.thumbnail}


After the reload, once the ASA firewall is enabled again, check that all of your server's services are working properly. If everything works, move onto the next step. If you experience any issues, carry out the checks required to resolve them before you move onto the next steps.


### Disable the Cisco ASA firewall again through the Control Panel

You now need to disable the Cisco ASA firewall again, as you did in the first step.

To do this, go to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and open the `Dedicated`{.action} section. Then select your dedicated server, and `Cisco ASA Firewall`{.action}. Next, click `Disable the Cisco ASA firewall`{.action}, on the right-hand side.

![Disable ASA](images/customer_panel_asa_disable.png){.thumbnail}.


### Check the binary image that is currently being used

#### First method: Via the ASDM

Log in to the Cisco Adaptive Security Device Manager, then go to `Device Information`{.action}, and `General`{.action}. Here, you will see the Cisco ASA and ASDM versions you are using. We recommend taking note of these details, and keeping them to hand.

![Check binary images via ASDM](images/asa9.jpg){.thumbnail}


#### Second method: Via SSH

Log in via the SSH protocol, and run the following command:


```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- *boot system*: ASA version
- *asdm image*: ASDM version


### Check which binary image must be used

To find the binary image you need to use, refer to the table below:

|Current ASA version|First required upgrade|Final required upgrade|
|---|---|---|
|8.2(x) or older|8.4(6)|9.1(3) or later|
|8.3(x)|8.4(6)|9.1(3) or later|
|8.4(1) to 8.4(4)|8.4(6) to 9.0(2+)|9.1(3) or later|
|8.4(5+)|None|9.1(3) or later|
|8.5(1)|9.0(2+)|9.1(3) or later|
|8.6(1)|9.0(2+)|9.1(3) or later|
|9.0(1)|9.0(2+)|9.1(3) or later|
|9.0(2+)|None|9.1(3) or later|
|9.1(1)|9.1(2)|9.1(3) or later|
|9.1(2+)|None|9.1(3) or later|
|9.2(x)|None|9.2(2) or later|

For example, if you are using ASA version 8.4(2), you will need to upgrade your system to version 8.4(6) first, then upgrade it to 8.4(7+) or 9.2+.


For further information, please refer to the [Cisco ASA upgrade guide](https://www.cisco.com/c/en/us/td/docs/security/asa/upgrade/asa-upgrade.html){.external}.

> [!primary]
>
> For Cisco ASA firewalls with 256 MB memory, we recommend only upgrading to 8.4(x). Versions 9.1(x) and 9.2(x) will use almost all of the available memory before they even start running.
>

There are two ways of checking which version you have:

- Via the SSH protocol, with the following command:

```
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- In the ASDM, via the `Tools`{.action} section, using `Command Line Interface...`{.action}:

![Check the binary version in the ASDM 1](images/asa10.jpg){.thumbnail}

![Check the binary version in the ASDM 2](images/asa11.jpg){.thumbnail}


### Removing unused binary images

Before you add new binary images, we recommend removing old ones.

#### First method: Via the ASDM
Log in to the Cisco Adaptive Security Device Manager. Then go to `Tools`{.action}, and `File Management...`{.action}.

![Remove unused binary images in ASDM 1](images/asa12.jpg){.thumbnail}

Then delete the binary images (*.bin*) that you are not using. You should now have just one file for the ASA, and another for the ASDM on the disk.

![Remove unused binary images in ASDM 2](images/asa13.jpg){.thumbnail}


#### Second method: Via SSH

Log in to your ASA via the SSH protocol, then remove the files after you have listed them:

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin? [confirm]
```

### Add and install the ASDM binary images

#### First method: Via the ASDM

Log in to the Cisco Adaptive Security Device Manager. Go to `Tools`{.action}, then click `Upgrade Software from Local Computer...`{.action}.

![Add and install the ASDM binary images via ASDM 1](images/asa14.jpg){.thumbnail}.

In the window that opens, select:

- *Image to upload*: ASDM
- *Local File Patch*: click `Browse Local Files`{.action} and choose your ASDM binary image version.

To confirm your choice, click `Upload Image`{.action}, then click `Yes`{.action} to confirm that this should be the boot image.

![Add and install the ASDM binary images via ASDM 2](images/asa15.jpg){.thumbnail}

![Add and install the ASDM binary images via ASDM 3](images/asa16.jpg){.thumbnail}


#### Second method: Via SSH

The binary image should be placed on an FTP server in advance. You will then need to configure the ASA using the SSH protocol and save its configuration:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-781.bin]?

Destination filename [asdm-781.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-781.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
25025404 bytes copied in 41.690 secs (610375 bytes/sec)
```

```sh
asa12345# conf t

asa12345(config)# asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Add and install the new ASA binary images

#### First method: Via the ASDM

Log in to the Cisco Adaptive Security Device Manager. Then go to `Tools`{.action}, and click `Upgrade Software from Local Computer...`{.action}.

![Add and install the ASA binary images via ASDM 1](images/asa14.jpg){.thumbnail}

In the window that opens, select:

- *Image to upload*: ASA
- *Local File Patch*: click `Browse Local Files`{.action} and choose your ASA binary image version.

 
To confirm your choice, click `Upload Image`{.action}, then click `Yes`{.action} to confirm that this should be the boot image.

![Add and install the ASA binary images via ASDM 2](images/asa18.jpg){.thumbnail}

![Add and install the ASA binary images via ASDM 3](images/asa20.jpg){.thumbnail}


#### Second method: Via SSH

Log in using the SSH protocol, and run the following commands:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asa-924.bin]?

Destination filename [asa-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asa-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)# asdm image disk0:/asa-924.bin

asa12345(config)# end

asa12345# write memory
```
 

### Reload the ASA

This step is important, as you need to ensure that the ASA firewall works properly and is accessible after a single reload.

#### First method: Via the ASDM

Log in to the Cisco Adaptive Security Device Manager. Next, click `Tools`{.action}, then `System Reload...`{.action}.

![Reload ASA via ASDM 1](images/asa5.jpg){.thumbnail}

To reload the service immediately, in the window that appears, select `Reload Start Time`: `Now`{.action}, then click `Schedule Reload`{.action}.

![Reload ASA via ASDM 2](images/asa6.jpg){.thumbnail}

![Reload ASA via ASDM 3](images/asa7.jpg){.thumbnail}


#### Second method: Via SSH

Log in to the ASA using the SSH protocol, then run the following command: `reload`

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

The reboot to reload the configuration will take a few minutes.

 
> [!warning]
>
> At this stage, if you are unable to add the ASA binary image, reboot the system to upgrade the ASDM, then remove the unused ASDM binary image to free up space.
> 
> You should then update the ASA binary image, following the procedure detailed above.
>

 

### Correct the configuration

When you upgrade the ASA from versions older than 8.4.6, you will see this new configuration after the reboot:

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```


Correct the configuration as follows:

```sh
asa12345# conf t
asa12345(config)# aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Upgraded Cisco ASA firewall](images/asa10.jpg){.thumbnail}

![Upgraded Cisco ASA firewall](images/asa23.jpg){.thumbnail}



### Re-enable the Cisco ASA firewall through the Control Panel

As per the first step, go to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, and open the `Dedicated`{.action} section. Then select your dedicated server, and `Cisco ASA Firewall`{.action}. Next, click `Enable the Cisco ASA firewall`{.action}, on the right-hand side.

![Enable ASA](images/customer_panel_asa_enable.png){.thumbnail}



Your ASA is now upgraded.

![Upgraded Cisco ASA firewall](images/asa22.jpg){.thumbnail}



## Go further

Join our community of users on <https://community.ovh.com/en/>.
