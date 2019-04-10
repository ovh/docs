---
title: 'How To Install ownCloud on a Public Cloud Instance'
slug: install-owncloud-on-public-cloud-ubuntu-1804
excerpt: 'This tutorial will show you how to install ownCloud on a Public Cloud Instance running Ubuntu 18.04'
section: Tutorial
---

**Last updated 5th April 2019**

- Level: Intermediate
- OS used: Ubuntu 18.04
- Infrastructure used: B2-15 [Public Cloud Instance](https://www.ovh.lt/public-cloud/instances/){.external}
- Additional information: If you have intensive storage requirements, it is recommended to use a high-performance additional disk or object storage

> [!warning]
>
> While OVH provides you with the devices, the responsibility for their security rests solely in your hands. Since we have no access to these machines, we are not their administrators. It is your responsibility to manage the software, and apply proper security measures on an ongoing basis.
>
> This tutorial is designed to help you with the most common tasks. Nevertheless, we recommend that you contact a specialist service provider if you have difficulties or doubts concerning the administration, usage or implementation of security measures on a server.
>

## Objective

ownCloud is an online storage and file management application. This solution offers several features, including synchronisation between multiple devices. You can also add external storage, such as OpenStack Object Storage.

In this tutorial, we will install ownCloud onto a fresh installation of Ubuntu 18.04 on a Public Cloud Instance, and then configure it. To take it one step further, we will also explore attaching external storage, such as OpenStack Object Storage, to ownCloud.


## Before you begin

Before following this tutorial, please refer to these guides:

* [Guide for creating a Public Cloud Instance](https://docs.ovh.com/lt/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/)
* [Guide for creating Object Storage on the Public Cloud platform](https://docs.ovh.com/gb/en/storage/pcs/create-container/)
* [Guide for creating and configuring an addition disk on a Public Cloud Instance ](https://docs.ovh.com/lt/public-cloud/papildomo_disko_kurimas_ir_konfiguravimas_virtualioje_masinoje/)


## Requirements

- A [Public Cloud Instance](https://www.ovh.lt/public-cloud/instances/kaines/){.external} in the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} with Ubuntu 18.04 installed
- Root SSH access on the Instance
- [Object Storage](https://www.ovh.lt/public-cloud/storage/object-storage/){.external} in the same datacentre as your Public Cloud Instance (optional)
- [High-performance additional disk](https://www.ovh.lt/public-cloud/storage/additional-disks/){.external} in the same datacentre as your Public Cloud Instance (optional)


## Instructions
In this section, you will find step-by-step instructions for installing ownCloud on your OVH Public Cloud Instance.

### Update your system
Distribution and operating system developers offer frequent software updates, often for security reasons. Keeping your distribution or operating system up-to-date is a key aspect of securing your Instances.

This is a two-part process, which involves updating the package list (the list of installed software applications) and updating the packages themselves using the code below:

```sh
apt-get update && apt-get upgrade -y
```

### Installating the required packages and downloading ownCloud
Before we can install ownCloud, we have to install some services that it requires to function, including Apache2, PHP, and MariaDB.

#### Step 1: Install Apache, PHP, and MariaDB
```sh
apt-get install apache2 mariadb-server php libapache2-mod-php php-mysql php-bz2 php-curl php-gd php-imagick php-intl php-mbstring php-xml php-zip -y
```

#### Step 2: Complete the secure installation of MariaDB
```sh
sudo mysql_secure_installation
```

#### Step 3: Download ownCloud
At the time of writing, the latest version of Ubuntu 18.04 was v10.0.8. After downloading the ownCloud files, we will extract the contents of compressed file, remove it, and move the contents to the /var/www folder.
```sh
wget http://download.owncloud.org/download/repositories/production/Ubuntu_18.04/owncloud-files_10.0.8.orig.tar.gz
tar -xf owncloud-files_10.0.8.orig.tar.gz
rm owncloud-files_10.0.8.orig.tar.gz
cp -r owncloud /var/www/
```

### Configure Apache webserver
For ownCloud to work, we first need to configure Apache, as ownCloud requires certain modules to be enabled. We also need to create a configuration file for the ownCloud site.

#### Step 1: Create the configuration file
In this example, we will be using the nano text editor, but if you prefer to use other editors, feel free to do so.
```sh
nano /etc/apache2/sites-available/owncloud.conf
```

Paste the following into the file:
```
Alias /owncloud "/var/www/owncloud/"

<Directory /var/www/owncloud/>
  Options +FollowSymlinks
  AllowOverride All

 <IfModule mod_dav.c>
  Dav off
 </IfModule>

 SetEnv HOME /var/www/owncloud
 SetEnv HTTP_HOME /var/www/owncloud

</Directory>
```

Now save the file and exit nano.

#### Step 2: Create a symlink
We need to create a symlink to /etc/apache2/sites-enabled using the following command:
```sh
ln -s /etc/apache2/sites-available/owncloud.conf /etc/apache2/sites-enabled/owncloud.conf
```

#### Step 3: Enable the required Apache modules
For ownCloud to be successfully set up, we need to ensure certain modules in Apache are enabled, by executing the series of commands listed below:
```sh
a2enmod rewrite
a2enmod headers
a2enmod env
a2enmod dir
a2enmod mime
```
For Apache to reflect these changes, we need to restart it, using the following command:
```sh
service apache2 restart
```

#### Step 4: SSL encryption
You can use ownCloud with plain HTTP, but we strongly encourage you to use SSL/TLS to encrypt all of your server traffic.

```sh
a2enmod ssl
a2ensite default-ssl
service apache2 reload
```

### Set up the database for ownCloud
Like most systems, ownCloud requires a database to function, so we need to set one up. To do this, we will need to create a user and a database for ownCloud, via the following steps:

#### Step 1: Start MySQL and log in with your root account
```sh
mysql -u root -p
```

#### Step 2: Create a database
In this example, we named our database "owncloud", but you can call it something else.
```sh
CREATE DATABASE owncloud;
```

#### Step 3: Create a user
In this example, we named our user "owncloud" but, as before, you can call it something else.

> [!warning]
>
> Remember to change 'yourPASSWORD' to your own password of choice.
To make sure your data is completely secure, your password must follow certain recommendations:
>
> - The password must contain between 12 and 30 characters.
> - The password must contain at least one upper case letter, one lower case letter, and one number.
> - The password must not be taken from the dictionary.
> - The password must not contain personal details (i.e. your first name, second name, or date of birth).
> - The password must be stored in a password vault.
> - The password must be changed every three months.
> - The password must not be the same as any used previously.
>

```sh
GRANT ALL ON owncloud.* to 'owncloud'@'localhost' IDENTIFIED BY 'yourPASSWORD';
```

#### Step 4: Flush the privileges and exit
```sh
FLUSH PRIVILEGES;
exit
```

### Set up ownCloud
Before we can start the configuration process, there is one last command to execute:

```sh
chown -R www-data:www-data /var/www/owncloud/
```

By now, you will have completed all required installations to start the configuration process for ownCloud.

#### Step 1: Open the ownCloud interface
To go to the ownCloud interface, open a new tab in your browser and type in your server's IP address, followed by `/owncloud`. For example: `https://my-server-ip-address/owncloud`

> [!primary]
>
> If you are using a self-signed certificate, your browser will probably display a warning message. This is normal, and you can bypass it by clicking the appropriate button on your browser.
>

#### Step 2: Fill out the form
Just fill out the form that appears on your screen, as in the annotated example below:

![Setup screen](images/owncloud-setup-screen.png){.thumbnail}

You have now installed ownCloud on your OVH Public Cloud Instance!

### Using Openstack Object Storage (optional)
There are advantages and disadvantages to using local disk storage to store your ownCloud files. For example, you have better performance on local storage, but are limited in terms of how much data you can store.

Using OpenStack Object Storage by OVH, you can store your files externally, with no limit on the total volume of data or how long you store it for. Furthermore, OVH guarantees 100% data durability, and replicates your data in three different locations, delivering exceptional value for money.

Find out more about [OVH Object Storage](https://www.ovh.lt/public-cloud/storage/object-storage/){.external}.
Read out guide to using Object Storage for ownCloud: [Object Storage for ownCloud](https://docs.ovh.com/gb/en/storage/configure_owncloud_with_object_storage/){.external}.

### Using an additional disk as storage (optional)
As with Object Storage, the advantage of using an additional disk is that you are less restricted by storage problems. You can also increase the size of an additional disk after its creation, up to 10TB.

Find out more about [Public Cloud additional disks](https://www.ovh.lt/public-cloud/storage/additional-disks/){.external}.

> [!warning]
>
> We strongly advise you to create a backup of your ownCloud folder, or to create a snapshot of the Instance before executing this part of the tutorial.
>
> Be aware that OVH does not take any responsibility for data loss or loss of service. Your ownCloud will go offline until you complete all the required steps. Proceed at your own risk.
>

#### Step 1: Create and attach the disk to your Public Cloud Instance
To do this, just follow the steps in this guide: [Create an additional disk on Public Cloud](https://docs.ovh.com/lt/public-cloud/papildomo_disko_kurimas_ir_konfiguravimas_virtualioje_masinoje/){.external}.

#### Step 2: Configure the additional disk
To do this, just follow the steps in this guide: [Configure an additional disk on Public Cloud](https://docs.ovh.com/lt/public-cloud/papildomo_disko_kurimas_ir_konfiguravimas_virtualioje_masinoje/#using-linux){.external}.

> [!primary]
>
> In this example, the disk will be mounted at `/mnt/owncloud`, so we will move the data to `/mnt/owncloud`, which will be the additional disk.
>

#### Step 3: Backup the ownCloud folder and stop Apache
To relocate the existing ownCloud folder from /var/www/, we first need to stop Apache, using the command below:
```sh
service apache2 stop
```

To backup the files, there are two options with Public Cloud. The first is to simply create a snapshot of the Instance, while the second is to create a copy of the ownCloud folder on local storage (for which you will need to have enough space on your disk).

Option 1 - create a snapshot of the Instance:
Use the following guide to make a snapshot of your Instance:

[Backing Up an Instance](https://docs.ovh.com/gb/en/public-cloud/back-up-instance/){.external}

Option 2 - create copy of the folder using the command below:
```sh
sudo rsync -av /var/www/owncloud/data/ ~/owncloud-data-bak/
```

#### Step 4: Move ownCloud to the additional disk
Once you  have made your backup and stopped Apache, you can move the owncloud folder to the additional disk, using the command below:

```sh
sudo mv /var/www/owncloud/data /mnt/owncloud/
```

You can verify if the data has been moved by executing the following command, which will list all the files in the folder:
```sh
ls /mnt/owncloud/data
```

#### Step 5: Point ownCloud to the new directory location
Now that your ownCloud data has been moved to the disk, you need to change the ownCloud configuration file, which is as follows by default: `/var/www/owncloud/config/config.php`

Execute the following command to edit it using nano:
```sh
nano /var/www/owncloud/config/config.php
```

In this file, change the following line:
```sh
'datadirectory' => '/var/www/owncloud/data',
```

It should be updated to:
```sh
'datadirectory' => '/mnt/owncloud/data',
```

#### Step 6: Update the folder permissions and change the database configuration
Now that the files have been moved, we need to ensure the permissions are correct by executing the following command:
```sh
chown -R www-data:www-data /mnt/owncloud/data
```

Finally, we need to change the user directory information in the database to match the new location.

- Start MySQL and log in with your root account:
```sh
mysql -u root -p
```
- Select the database to use:
```sql
USE owncloud;
```
- Update the oc_storages table:
```sql
UPDATE oc_storages SET id='local::/mnt/owncloud/data' WHERE id='local::/var/www/owncloud/data/';
```
- Update the oc_accounts table, keeping in mind that you need to change the "home" folder for every user. Just change /var/www/owncloud/data/username to /mnt/owncloud/data/username (replace username with the correct username). Below is an example SQL command to change a user with the ID of 1:
```sql
UPDATE oc_accounts SET home='/mnt/owncloud/data/ovh_owncloud' WHERE id=1;
```

#### Step 7: Start Apache
Everything is now moved and reconfigured, which means you can now start Apache again, using the command below:
```sh
service apache2 start
```

## Go further
Join our community of users on <https://community.ovh.com/en/>.