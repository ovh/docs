---
title: Object Storage - Use S3 Object Storage with Rubrik
slug: s3/rubrik
section: Configure Object Storage with your solutions
order: 172
---

**Last updated on 31th January 2023**

## Objective

Rubrik is a robust and secure backup solution that allows archiving to OVHcloud High Performance Object Storage.

**This guide will show you how to configure OVHcloud High Performance Object Storage as a repository for Rubrik software archives.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) and/or discuss the issue with our community on <https://community.ovh.com/en/>. OVHcloud cannot provide you with technical support in this regard.
>
> The Rubrik licences are not provided by OVHcloud. For more information, contact the Rubrik sales department.
>

## Requirements

- Creating a public project via the OVHcloud Control Panel

Please refer to our guide [Creating your first OVHcloud Public Cloud project](https://docs.ovh.com/gb/en/public-cloud/create_a_public_cloud_project/) for more details.

## Instructions

You need to create a user in an OVHcloud public account who can generate *Buckets*, then produce a 2048-bit RSA key before you can use **High Performance Storage** as the Rubrik software archive repository.

### Creating a user on an OVHcloud public project

We will create an account in a public project that will be able to add *buckets* to **High Performance Object Storage** storage

Log in to the OVHcloud Control Panel via the [OVHcloud] URL (https://www.ovhcloud.com).

Click on the `main menu`{.action} in the top left-hand corner.

![01 Create User 01](images/01-createuser01.png)

Choose `Public Cloud`{.action}.

![01 Create User 01](images/01-createuser02.png)

Click the `right arrow`{.action} in the top right-hand corner.

![01 Create User 03](images/01-createuser03.png)

Click your `project`{.action}.

![01 Create User 04](images/01-createuser04.png)

Click on the `main menu`{.action} in the top left-hand corner.

![01 Create User 06](images/01-createuser05.png)

Select `Public Cloud`{.action}.

![01 Create User 06](images/01-createuser06.png)

Use the `scroll bar`{.action} and click `Users & Roles`{.action}.

![01 Create User 07](images/01-createuser07.png)

Click `Add User`{.action}.

![01 Create User 08](images/01-createuser08.png)

Type a `user name` in **User Description** and click `Next`{.action}.

![01 Create User 09](images/01-createuser09.png)

Select the `ObjectStore operator`{.action} box and click `Validate`{.action}.

![01 Create User 10](images/01-createuser10.png)

Click on the `round icon with 3 small dots`{.action} to the right of the user account created to generate S3 access.

![01 Create User 11](images/01-createuser11.png)

Choose `Generate S3 credentials`{.action} on the right.

![01 Create User 12](images/01-createuser12.png)

S3 access is created it is composed of these elements:

- **access key** ;
- **secret key** .

![01 Create User 13](images/01-createuser13.png)

### Generating an RSA private key

We will use the openssl command line tools available on Linux or Windows.

Run this command in a terminal :

```bash
openssl genrsa -out rubrik_encryption_key.pem 2048
```

The contents of the file are of this form, for example:

```console
-----BEGIN RSA PRIVATE KEY-----
tbEH9hP4TVC6ZRdxqL59hEuKMLQru93sW1b4uZ/S8W7y5Ip1WwnqJPNqUbwOto/f
LhsVAoGBAOnHOBJeUabERcur4It6NJdwQ/TPSrOkLnW5WMjEOcbwZr0Pq7GaW6l/
tbEH9hP4TVC6ZRdxqL59hEuKMLQru93sW1b4uZ/S8W7y5Ip1WwnqJPNqUbwOto/f
LhsVAoGBAOnHOBJeUabERcur4It6NJdwQ/TPSrOkLnW5WMjEOcbwZr0Pq7GaW6l/
oic8XYh0OdAA5aY1kIy33Gg8NVarnGMe+ezc9NhF6AHIhAgwXZ+NBLdcUujPBaqx
7p3lZs1vEEBX4ouHX93qz7ymNJ+MTeQtCNX4tQfE4kcLT0pY+DtW
-----END RSA PRIVATE KEY-----
```


### Storage configuration in the Rubrik software

Enter this information in the Rubrik software when configuring the archive repository.

* ** Acces Key** : Your `Acces key` ; 
* ** Secret Key** : Your `Secret key` ;
* ** hostname** : Either `s3.gra.perf.cloud.ovh.net` for the Gravelines datacentre or `s3.sbg.perf.cloud.ovh.net` for the Strasbourg datacenter ;
* ** bucket Prefix** : lowercase `bucket prefix` ;
* ** Number of Buckets** : Choose `1` ;
* ** Archival Location Name** : `S3Compatible` ;
* ** RSA Key** : Copy the `RSA key` ; 

Then click `Add`{.action}

![02 Configure rubrik repository 01](images/02-configure-rubrik-repository01.png)

A *bucket* is automatically created in the OVHcloud public project with the name contained in **bucket Prefix** as a prefix.

## Go further

Official [Rubrik] website (https://www.rubrik.com/)

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.

