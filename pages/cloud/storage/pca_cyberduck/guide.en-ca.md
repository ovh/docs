---
title: Manage your archives with a Swift client
slug: pca/cyberduck
excerpt: This guide shows you how to manage your Public Cloud Archives.
section: Public Cloud Archive
---


## Preamble
Object Storage is a storage solution that is managed primarily through the OpenStack API. However, you might not be familiar with managing storage space via command line.

There are graphical interface solutions that seamlessly make use the OpenStack APIs. Cyberduck is a Swift client.

Other interfaces can be found on the Internet and configuration is similar to the configuration explained in this guide.

This guide will explain how to configure Cyberduck to manage your Object Storage using a GUI based on Openstack APIs.


### Requirements
- A configured Horizon user :  view [guide](../horizon){.ref}
- The Tenant ID of your project and your user ID, viewable in the downloadable OpenRC file.
- The password of your user.


![projet](images/project.png){.thumbnail}


## Configuration of Cyberduck
- Download [Cyberduck](https://cyberduck.io/){.external}
- Connect to an account type  "Swift - OpenStack Object Storage"


![configuration](images/Cyberduck.png){.thumbnail}

You need to provide some information in the form :

- Server : auth.cloud.ovh.net (Authentification Server)
- Project:Domain:Username : OS_TENANT_NAME:default:OS_USERNAME
- Password : Password of your Horizon_User
- Connect


![connexion](images/2756.png){.thumbnail}