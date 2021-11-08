---
title: Creating an Object Storage container
slug: pcs/create-container
excerpt: Find out how to create your Object Storage containers from your Customer Area
section: Object Storage Standard (Swift)
---

**Last updated 27th October 2021**

## Objectif

Public Cloud is an unlimited storage solution with simple billing tailored to your needs. There are many types of object containers:

- For static hosting (static website).
- For private hosting (e.g. storage of personal data)
- For public hosting (to store everything that is accessible to the public)
- For cold storage (archiving)

The first step is to create a container that will hold your files. This guide explains how to create it from the customer area and from the Horizon interface of Openstack

## Requirements

- Be logged in to your customer area

If you use Horizon :

- Have created an [OpenStack user](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external}.

## Instructions

### Creating an Object Storage container from the customer area

Log in to your [customer area](https://www.ovh.com/manager/#/){.external} :

1. Click on the `Public Cloud`{.action} tab
1. Click on `Object Storage`{.action} in the left hand menu
1. Click `Create an object container`{.action}

If this is your first container :

![pcs dashboard](images/create-container-20211005102334181.png)

If this is not your first container:

![pcs dashboard](images/create-container-20211005115040834.png)

Select your solution and click on `Next`{.action}

![select your solution](images/create-container-20211005110710249.png)

Select the region of your container, then click `Next`{.action} :

![select a region](images/create-container-20211005110859551.png)

Select the container type, then click `Next`{.action} :

![select a type of container](images/create-container-20211005111542718.png)

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

![container name](images/create-container-20211005111805966.png)

Your container is now created:

![container created](images/create-container-20211005112013807.png)

### Creating an Object Storage container from Horizon

> [!primary]
>
> It is not possible to create a Public Cloud Archive container from Horizon
>

Log in to your [Horizon space](https://horizon.cloud.ovh.net){.external} :

![horizon login](images/create-container-20211005155245752.png)

1. Expand the `Object Store`{.action} menu
1. Click `Containers`{.action}
1. Click `+ Container`{.action}

![Horizon containers](images/create-container-20211005155704887.png)

1. Name your container

> [!warning]
>
> If you want to link your container to a domain name, your container name must not contain the following characters:
> - [ . ]
> - [ _ ]
> - And you must not use capital letters.
>  
> See : [Linking a container to a domain name](https://docs.ovh.com/fr/storage/pcs/link-domain/)
>

2. Select the access policy for your container
3. Click `Next`{.action}

![horizon create container](images/create-container-20211005155824902.png)

Your container is now created:

![horizon container created](images/create-container-20211005155936971.png)

You can also see it in your customer area

![pcs dashboard](images/create-container-20211005160503200.png)


## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
