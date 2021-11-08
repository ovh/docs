---
title: Creating a Public Cloud Archive container
slug: pca/create-container
excerpt: Find out how to create your Public Cloud Archive containers from your Customer Area
section: Public Cloud Archive
---



**Dernière mise à jour le 27/10/2021**

## Objectif

Public Cloud is an unlimited storage solution with simple billing tailored to your needs. There are many types of object containers:

- For static hosting (static website).
- For private hosting (e.g. storage of personal data)
- For public hosting (to store everything that is accessible to the public)
- For cold storage (archiving)

The first step is to create a container that will hold your files. This guide explains how to create it from the customer area and from the Horizon interface of Openstack

## Requirements

- Be logged in to your customer area

## Instructions

### Creating a Public Cloud Archive container from the customer area

Log in to your [customer area](https://www.ovh.com/manager/#/){.external} :

1. Click on the `Public Cloud`{.action} tab
1. Click on `Cloud Archive`{.action} in the menu on the left
1. Click `Create an object container`{.action}

If this is your first container :

![pca dashboard](images/create-container-20211006094158312.png)

If this is not your first container:

![pca dashboard](images/create-container-20211006094851682.png)

Select the region of your container, then click `Next`{.action} :

![select a region](images/create-container-20211006094448923.png)

Name your container, then click `Create the container`{.action} :

> [!warning]
>
> If you want to link your container to a domain name, your container name must not contain the following characters:
> - [ . ]
> - [ _ ]
> - And you must not use capital letters.
>  
> See : [Linking a container to a domain name](https://docs.ovh.com/fr/storage/pcs/link-domain/)
>

![container name](images/create-container-20211006094550334.png)

Your container is now created:

![container created](images/create-container-20211006094630754.png)

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
