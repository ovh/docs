---
title: AI Notebooks - Manage and use data in a notebook via UI
excerpt: Learn how to manage and access data from your Object Storage in your Notebook
updated: 2023-08-08
---

**Last updated 08th August, 2023.**

## Objective

This guide shows how to access Object Storage data from your [**notebooks**](/pages/platform/ai/notebook_guide_introduction_definition) via the OVHcloud Control Panel.

## Requirements

- a [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- a Public Cloud user with `Administrator` or `AI Training operator` role, see [here](/pages/platform/ai/gi_01_manage_users) for more information

## Upload data to your Object Storage

First, you need to push some data to the `Object Storage` before accessing it from the notebook.

You can access to the `Object Storage` section of your Public Cloud project on the OVHcloud Control Panel.

![image](images/ui-object-storage.png){.thumbnail}

> [!primary]
>
> You can upload different types of data: datasets, code, notebooks, connection weights, text or csv files, etc.
>

To upload your data, go to `Create an object container`.

Let's assume that a file named `my-dataset.zip` exists locally on your computer and contains your dataset. You will be able to upload it into an object container in your Object Storage by following these steps.

### 1- Select your solution

> [!warning]
>
> If you choose an S3 solution, please note that they are not yet compatible with our AI products from the Control Panel. **To use S3 buckets, you will need to use [ovhai](/pages/platform/ai/cli_10_howto_install_cli)**. The Control Panel allows you to use Swift containers only.
>

If you want to know more about the different storage solutions, refer to this [page](/products/storage-backup).

![image](images/ui-container-solution.png){.thumbnail}

### 2- Select a region

> [!primary]
>
> To optimize the download and upload times, we advise you to store your data in the same place as your notebook (`GRA` or `BHS`).
>

![image](images/ui-container-region.png){.thumbnail}

### 3- Select a type of container

Choose the type of your data according to what you want to do.

> [!primary]
>
> **Example:** for a dataset that you use to train your model, the `Private` type is appropriate
>

![image](images/ui-container-type.png){.thumbnail}

### 4- Name your container

![image](images/ui-container-name.png){.thumbnail}

You have created your container to host your dataset.

![image](images/ui-object-container-created.png){.thumbnail}

You are now ready to load your data!

### 5- Add objects to your container

In order to upload your dataset into your object container `my-dataset`, you have to go on `Add objects` and select your local `my-dataset.zip` file.

![image](images/ui-add-objects-to-container.png){.thumbnail}

You will now see your `my-dataset.zip` file displayed in your object container.

![image](images/ui-zip-file-uploaded.png){.thumbnail}

> [!primary]
>
> You can also create a new empty `my-weights` container in which you can save your **connection weights** (or your **validated model**) at the end of your training.
>

We assume that we now have two object containers available:

- `my-dataset`, containing the file `my-dataset.zip`
- `my-weights`, empty

You are now ready to launch a notebook with your data!

## Launch a notebook with attached data

To launch an AI notebook, access the **AI Notebooks** section of your Public Cloud project in the OVHcloud Control Panel.

![image](images/ui-ai-notebooks.png){.thumbnail}

For the *first 4 steps* of the notebook creation, please refer to this [tutorial](/pages/platform/ai/notebook_guide_introduction_definition).

### Choose the notebook location

You can choose between *2 datacenters* for the storage of your notebook: `GRA` or `BHS`.

![image](images/ui-notebook-localisation.png){.thumbnail}

### Attach container or a Git repository

You can attach your different types of data to your notebook.

> [!warning]
>
> As mentioned before, S3 buckets are not yet compatible with our AI products from the Control Panel. To use S3 solutions, you will need to use [ovhai](/pages/platform/ai/cli_10_howto_install_cli)**.
>

#### Access with Read-Only permissions

You can load the container `my-dataset` in the `/workspace/dataset` directory, with `Read-only` permission.

![image](images/ui-notebook-dataset-ro.png){.thumbnail}

You will not be able to modify the dataset from this notebook because you loaded it with `Read-only` permission.

`Read-only` permissions are to ensure you don't modify your data by mistake. If you want to modify data from your
notebooks, to store a trained neural network for example, you can use the `Read-write` permission instead.

#### Access with Read-Write permissions

Similarly to the `Read-only` mode, you can load data with `Read-write` permission.

Once you have some data that you want to save from the notebook to Object Storage (connection weights in this example), you can simply write it to the `/workspace/weights` folder.

![image](images/ui-notebook-weights-rw.png){.thumbnail}

This folder will be uploaded to your Object Storage when you stop your notebook.

As long as your notebook is in the `STOPPING` state, this means that the upload is still in progress. Once the state changes to `STOPPED`, it means all the data was uploaded to your Object Storage.

#### Attach a public Git repository

If Python code, notebooks or other files are available on a public GitHub repository, you can attach them to your notebook.
To be able to edit and make changes easily, use the Read-write permission.

The command is as follows:

![image](images/ui-notebook-git-repo-rw.png){.thumbnail}

> [!warning]
>
> To make your command valid, don't forget to add a `.git` at the end of the GitHub repository URL.
>

#### Use cached volumes

When loading large files from the `Object Storage`, it can take some time to download to your notebooks. In these cases, you can cache the volumes so that it does not need to be downloaded again when you start new notebooks that use the same data.

To do so, you can check `Cache`.

![image](images/ui-notebook-dataset-cache.png){.thumbnail}

Cached volumes will be deleted at least 72 hours after the last notebook using it has stopped.
Note that the cache is shared with all users in your project. The main consequence you need to be careful about
is the fact that if someone else modifies the data in your cached volume, you will also see the modifications on your side.

### Launch and access the notebook

Your notebook is now ready to be launched with your data!

![image](images/ui-notebook-attached-data.png){.thumbnail}

You can read the [Getting started](/pages/platform/ai/notebook_guide_introduction_definition) page to know how to find this URL.

As soon as you access your notebook, you will see your different folders containing your data.

![image](images/ui-notebook-containers.png){.thumbnail}

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
