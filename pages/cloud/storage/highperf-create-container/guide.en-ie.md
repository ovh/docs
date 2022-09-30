---
title: Creating a bucket
slug: s3/create-container
section: Object Storage S3 High Performance
order: 040
---

**Last updated September 27<sup>th</sup> 2022**

## Objective

**This guide aims to familiarise you with creating a bucket**

> [!primary]
>
> - If you are interested in storage class ***Standard object storage - SWIFT API***, please follow this [guide](https://docs.ovh.com/ie/en/storage/pcs/create-container/)
> - If you are interested in storage class ***Cloud Archive - SWIFT API***, please follow this [guide](https://docs.ovh.com/ie/en/storage/pca/create-container/).
>

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.co.uk/\&ovhSubsidiary=GB)

## In practice

### Using the Control Panel

To create an Object Storage bucket, first log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.co.uk/\&ovhSubsidiary=GB) and open your `Public Cloud`{.action} project. Click on `Object Storage`{.action} in the navigation bar on the left and then on the `My containers`{.action} tab.

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

Join our community of users on <https://community.ovh.com/en/>.
