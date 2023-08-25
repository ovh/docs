---
title: Object Storage Swift - Creating an Object Storage container
excerpt: Find out how to create your Object Storage containers in the OVHcloud Control Panel
updated: 2021-10-27
---


## Objectif

The Object Storage solution for Public Cloud offers an unlimited storage solution with simple billing tailored to your needs. There are many types of object containers:

- For static hosting (static website).
- For private hosting (e.g. storage of personal data).
- For public hosting (to store everything that is accessible to the public).
- For cold storage (archiving).

The first step is to create a container that will hold your files.

**This guide explains how to create it from the OVHcloud Control Panel and from the Openstack Horizon interface.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)

If you use Horizon :

- An [OpenStack user](/pages/public_cloud/compute/create_and_delete_a_user){.external}

## Instructions

### Creating an Object Storage container from the OVHcloud Control Panel <a name="controlpanel"></a>

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned. Then, click on `Object Storage`{.action} in the left-hand navigation bar under "Storage".
Finally, click `Create an object container`{.action}.

If this is your first container:

![pcs dashboard](images/create-container-20211005102334181.png)

If this is not your first container:

![pcs dashboard](images/create-container-20211005115040834.png)

Select your solution and click on `Next`{.action}.

![select your solution](images/create-container-20211005110710249.png)

Select the region of your container, then click `Next`{.action}:

![select a region](images/create-container-20211005110859551.png)

Select the container type, then click `Next`{.action}:

![select a type of container](images/create-container-20211005111542718.png)

Name your container, then click `Create the container`{.action}:

> [!warning]
>
> If you want to link your container to a domain name, your container name must not contain the following characters:
>
> - [ . ]  
> - [ _ ]  
> - And you must not use capital letters.  
>  
> See: [Linking a container to a domain name](/pages/storage_and_backup/object_storage/pcs_link_domain)
>

![container name](images/create-container-20211005111805966.png)

Your container is now created:

![container created](images/create-container-20211005112013807.png)

### Creating an Object Storage container from Horizon <a name="horizon"></a>

> [!primary]
>
> It is not possible to create a Public Cloud Archive container from Horizon.
>

Log in to [Horizon](https://horizon.cloud.ovh.net){.external} :

![horizon login](images/create-container-20211005155245752.png)

1. Expand the `Object Store`{.action} menu, click `Containers`{.action} then click `+ Container`{.action}.

![Horizon containers](images/create-container-20211005155704887.png)

Name your container.

> [!warning]
>
> If you want to link your container to a domain name, your container name must not contain the following characters:
>
> - [ . ]  
> - [ _ ]  
> - And you must not use capital letters.  
>  
> See: [Linking a container to a domain name](/pages/storage_and_backup/object_storage/pcs_link_domain)
>

Select the access policy for your container then click `Next`{.action}.

![horizon create container](images/create-container-20211005155824902.png)

Your container is now created:

![horizon container created](images/create-container-20211005155936971.png)

You can also see it in your OVHcloud Control Panel.

![pcs dashboard](images/create-container-20211005160503200.png)

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
