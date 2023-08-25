---
title: Object Storage - Creazione di un secchio (EN)
routes:
    canonical: '/pages/storage_and_backup/object_storage/s3_create_bucket'
updated: 2022-09-27
---


## Objective

**This guide aims to familiarise you with creating a bucket**

> [!primary]
>
> - If you are interested in storage class ***Standard object storage - SWIFT API***, please follow this [guide](/pages/storage_and_backup/object_storage/pcs_create_container)
> - If you are interested in storage class ***Cloud Archive - SWIFT API***, please follow this [guide](/pages/storage_and_backup/object_storage/pca_create_container).
>

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/it/public-cloud/) in your OVHcloud account
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Instructions

### Using the Control Panel

To create an Object Storage bucket, first log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) and open your `Public Cloud`{.action} project. Click on `Object Storage`{.action} in the navigation bar on the left and then on the `My containers`{.action} tab.

![My Dashboard containers](images/highperf-create-container-2022092808185322.png)

Click `Create Object Container`{.action} and select your storage class:

![Select your solution](images/highperf-create-container-20220928081750384.png)

Select a region:

> [!primary]
>
> Regions can vary depending on the storage class selected.
>

![Select a region](images/highperf-create-container-20220928082104424.png)

You must link a user to the bucket:

![Link to user](images/highperf-create-container-20220928082210758.png)

To do this, you can either link an existing S3 user:

![Link to user](images/highperf-create-container-20220928082306958.png)

You can view the user credentials by clicking on `View credentials`{.action}:

![view credentials](images/highperf-create-container-20220928082435427.png)

Or you can create a new S3 user:

![Create S3 user](images/highperf-create-container-20220928082604314.png)

The user credentials are then displayed:

![User created credentials](images/highperf-create-container-20220928082836834.png)

Finally, name your bucket:

![Container name](images/highperf-create-container-20220928082938155.png)

Congratulations, your bucket is created:

![Result](images/highperf-create-container-20220928083209650.png)

### Where to find the Endpoint URL of a bucket

Click on the name of your bucket to view its details and content:

![Bucket details](images/highperf-create-container-20220928091433895.png)

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/it/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
