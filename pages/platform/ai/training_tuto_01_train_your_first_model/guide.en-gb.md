---
title: AI Training - Tutorial - Train your first ML model
slug: training/tuto-train-first-ml-model
excerpt: How to train your first machine learning model in AI Training
section: AI Training - Tutorials
order: 01	
---

**Last updated 24th January, 2023.**

This tutorial will allow you to train your first **Model in AI Training**. 


## What is AI Training?
AI Training allows you to train your models easily, with just a few clicks or commands. This solution runs your training job on the computational cloud resources you have chosen (CPU/GPU). As soon as your training job is finished, the status of the AI Training job will change from *Run* to *Done*, which means that the billing will be stopped immediately. Thus, you will save time and increase the productivity of your team, while respecting the integrity of your sensitive data [(GDPR)](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).

AI Training is compatible with leading applications and frameworks such as *Pytorch, Scikit-learn, TensorFlow, Transformers* and others!

More information about AI Training can be found [here](https://www.ovhcloud.com/en-gb/public-cloud/ai-training/).


## Objective of this tutorial

At the end of this tutorial, you will have learned to master **OVHcloud AI Training**.

We will show you how you can:
- **Upload your data to the OVH Public Cloud**, in the Object Storage. 
- **Launch your training job and attach your data to its environment**, so your model can access to your data.
- **Monitor** the progress of your job.
- **Download your model** in the cloud in order to retrieve it, once trained.

*Each step will be accompanied by an example to guide you.*


## Use case:
We will train an image classifier on the *Fashion MNIST* dataset.
This dataset contains 70,000 examples of *Zalando*'s article images. Each one is a 28x28 grayscale image, associated with a label from 10 classes. 
This dataset is available on their [GitHub repository](https://github.com/zalandoresearch/fashion-mnist), but I will directly download it from [Kaggle](https://www.kaggle.com/datasets/zalando-research/fashionmnist). It is a `.zip` file of 72MB size. 
 

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- An AI Training project created inside a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- A user for AI Training
- A Python script that trains a model

## Instructions

You will follow different steps to export your data, train your model and save it.

### Step 1 - Upload your own data to the OVH cloud (Optional)

This step is optional because you may load some famous datasets through libraries, commands, ..., so you will not need to upload your own data on the cloud. 

On the other hand, you can upload your data (dataset, python and requirements files, ...) to the cloud, in the Object Storage. This can be done in two ways: either from the [OVHcloud Control Panel](https://www.ovh.com/manager/#/public-cloud/) or via the [OVH AI CLI](https://cli.bhs.training.ai.cloud.ovh.net/).

*This data can be deleted at any time.*

#### 1.1 - Upload your data via UI (Control Panel)
If you do not feel comfortable with commands, this way will be more intuitive for you.

First, go to the [OVH Public Cloud](https://www.ovh.com/manager/#/public-cloud/).

Then, select the Object Storage section (in the Storage category) and [create a new Object Container](https://docs.ovh.com/gb/en/storage/pcs/create-container/) by clicking `Storage` > `Object Storage` > `Create an object container`.

Here you can create the object container that will store your datas. Several `types` and `regions` are available, choose the best parameters for you.

Once your object container is created, you will see it in the Object Storage list. Click the one you just created. Here, you will be able to click the `Add Objects` button, which will allow you to store your data in the cloud.

> [!primary]
>
> Using the manager to upload your data can be very long. We recommend you to use the OVHcloud AI CLI.
>
> In the OVHcloud Control Panel, you can upload files but not folders. For instance, you can upload a `.zip` file to optimize the bandwidth, then unzip it in your code. But if your dataset is already split in several folders, you must use the AI CLI to upload them.
>


#### 1.2 - Upload your data via CLI
To follow this part, make sure you have installed the [OVH AI CLI](https://cli.bhs.training.ai.cloud.ovh.net/) on your computer or on an instance. 

As on the manager, you will have to specify the `region`, the `name of your container` and the `path` where your data will be located. The creation of your object container can be done by the following command:

```console
ovhai data upload <region> <container> <paths>
```

For example: 

Assuming a file named `my-dataset.zip` exists in your current working directory, you can use the following command to create an object container named `fashion_MNIST_dataset`, located in the `GRA` region that will contain your `my-dataset.zip` file.

```console
ovhai data upload GRA fashion_MNIST_dataset my-dataset.zip
```

This `.zip` file can now be accessed from all OVH AI products, either with read-only (RO) or read-write (RW) permissions.

### Step 2 - Launch your training job and attach your data to its environment

To launch your training job, you can also use the [OVHcloud Control Panel](https://www.ovh.com/manager/#/public-cloud/) or the [OVH AI CLI](https://cli.bhs.training.ai.cloud.ovh.net/).

#### 2.1 - Launch a training job via UI (Control Panel)

Now, select the `AI Training section` (in the `AI & Machine Learning` category) and create your job by clicking `Launch a new job`.

Here you will have to specify a `region` and a `Docker image`. Depending on the framework you are using in your project, you will have to select the Docker image that suits you best. This will reduce the number of library installations you need to do.

Make sure to mention in a `requirements.txt` file all the libraries that are not included in the image. For example, the *Pytorch* image does not contain the *Pandas* library. Since my code uses it, I will have to mention it in my `requirements.txt` file and install it, otherwise the job will not run correctly.

Then, you can toggle the `I want to link volumes of data to the job` switch, to attach your Object Storage container(s) to your job environment and access the data you have stored in the cloud (dataset, python files, requirements.txt, ...). 

If you have not created an Object Storage, don't worry, this step is optional.

If you want to add yours, just select the container that contains your data and specify the mount directory you have mentioned in your Python code. 

For example, I load my datas by calling the `/workspace/my_data/my-dataset.zip` folder in my Python code. This is why I choose `/workspace/my_data` as the mount directory.

Depending on your needs, you can enable or disable the cache and select the permission you want. Since I want to both read my data, but also be able to extract the zip file (which means write new files) and save my model once dragged into this object container, I will opt for the Read & Write permission on this container.


> [!primary]
>
> A good practice is to attach a container with your input data, and attach a second container to save the output data in. 
>
> But since I want to keep this tutorial fairly simple, I will use only one container for my data.
>

Then, in the `Enter the Docker command` step, you can specify the command that allows you to install your librairies and run your Python script, which are both contained in your object container. 

Example:
Assuming you have added your main .py file and your requirements.txt file to a container that you have linked to your job with `my_data` as your mount directory, you can then use: 

```console
-- bash -c 'pip install -r /workspace/my_data/requirements.txt && python /workspace/my_data/cnn_classification_mode_dataset.py'
```

> [!primary]
>
> This feature is currently being updated. It is possible that you will encounter problems when using it. If this is the case, we advise you to use the AI CLI way.
>

To finish, you just have to enter an SSH command in case you would like to access the job remotely via SSH, and you must specify the resources of your job (number of `CPUs` or `GPUs`). 
When everything is done, you can launch the job by clicking the `Create` button.


#### 2.2 - Launch a training job via CLI

If you prefer to launch your job with the CLI, the principle is identical to the UI method. Indeed, you will have to attach your data volumes to a `mount directory`, specify your resources (number of `CPUs` or `GPUs`), your `region`, for the same reasons explained above. 

A classic training job can be launched with the following command:

```console
ovhai job run <docker_image_name> \
  	  --gpu <nb_gpus> \
	  --volume <object_storage_name>@<region>/:/workspace/<mount_directory_name>:<permission_mode> \
	  -- bash -c 'pip install -r /workspace/mount_directory_name/requirements.txt && python /workspace/mount_directory_name/python_script.py'
```

> [!primary]
>
> Arguments:
> `<docker_image_name>` Choose the image you want to use to create your environment. You can get a list of the frameworks images hosted by OVH [here](https://registry.hub.docker.com/u/ovhcom). You can also use another Docker image, but it may take longer to load.
>
> `<nb_gpus>` Number of GPUs your job will be run on. You can also use CPUs by replacing this line by `--cpu <nb_cpus>`.
>
> `--volume` Volume you want to add to your job (object container or public GitHub repository).
>
> You can add several volumes to your job by calling the --volume argument several times. You can also add a GitHub repository as a volume.
>
> `-- bash -c` allows you to provide commands through which you can for example install the librairies mentioned in your requirements.txt file, and run a Python script. 
>

If you have followed the optional part that shows you how to store your data (first step), you can load your volume with the `--volume` parameter. You will have to specify the `object_storage_name`, its `region` and its `mount_directory`. Depending on your needs, you can select the `permission_mode` you want (Read-Only with `RO`, Read & Write with `RW`, and Read, Write & Delete with `RWD`). To finish, you can also enable or disable the cache on your volume, by adding `:cache` just after the `permission_mode`.

Otherwise, you can remove the --volume line, since it will not bring anything to your app.

To give you a real example, here is the command I will use to launch my job, assuming this time that my dataset.zip is contained in a fashion_MNIST_dataset container, with a mount_directory named my_data, and that my Python file and my requirements.txt file are in the ovh/ai-training-examples GitHub repository: 

```console
ovhai job run ovhcom/ai-training-pytorch \
	  --gpu 1 \
	  --volume fashion_to_delete@GRA/:/workspace/my_data:RW \
	  --volume https://github.com/ovh/ai-training-examples.git:/workspace/github_repo:RO \
	  -- bash -c 'pip install -r /workspace/github_repo/jobs/getting-started/train-first-model/requirements.txt && python /workspace/github_repo/jobs/getting-started/train-first-model/train-first-model.py'
```

> [!primary]
>
> Whatever method you use, make sure to **specify one mount path per volume**. They must be different in order not to conflict.
>

### Step 3 - Monitor the progress of your job
When your job is launched, you can follow its progress (loading of your volumes, evolution of the job status, follow your prints...)

#### Monitor via UI
This can be done by clicking on your job's name, in the `AI & Machine Learning` > `AI Training`. You will find there two categories:

- `Job Information` : There you will find the general progress of your job. 

- `Logs` : This is particularly useful to track your prints and to understand why your job could not be launched, in the case of errors. You will find a console that will display all this information.

#### Monitor via CLI
Once your job is launched, you will get a lot of information via the CLI. Two main ones will be useful: the `Id` of your AI Training job, given in the very first lines (not to be confused with the id of the added volumes), and the `Info URL`. 

The `Info URL` will allow you to visually follow your job live. You will see the progress of the loading of your volumes, the status of your job which is evolving and will go to `Running` at the time of launch. 
Warning: When the job is running, the auto-refresh option of the Info URL page is automatically disabled. Remember to reactivate it if you want to see when your job will be finished and will switch to `Done` status.

As mentioned before, logs are useful to follow and understand the progress of your job. To take a look at it, use the following command:

```console
ovhai job logs <job_id>
```

If you are not present when the job is finished and goes to `Done`, don't worry, the billing stops automatically!

### Step 4 - Download the trained model

We can now download the trained model, again in two ways (UI/CLI).

#### Download via UI
Just click your `object container` as if you still wanted to add new files to it. This will allow you to see all the files that are contained in it. You should find your trained model in it, that you can download by clicking the `...` button.


#### Download via CLI
If you prefer to use the AI CLI, you will need to use the following command:

```console
ovhai data download [OPTIONS] <DATA_STORE> <CONTAINER> [OBJECTS]...
```

> [!primary]
>
> Arguments:
>
> `<DATA_STORE>` Data store of the container to download from. You can get a list of all available stores for the Object Storage by typing `ovhai data store list`.
>
> `<CONTAINER>` Name of container to download from.
>
> `[OBJECTS]...` Name(s) of object(s) to download.
>

For more info about this command, you can use:
```console
ovhai data download --help
```

For example, in my case I will use:
```console
ovhai data download GRA fashion_MNIST_dataset model.net
```


## Go further

- If you are interested in **deploying your model** in a Python app, discover AI Deploy by following this [tutorial](https://docs.ovh.com/gb/en/publiccloud/ai/deploy/build-use-streamlit-image/).
- If you want learn about Docker, check out this [tutorial](https://docs.ovh.com/gb/en/publiccloud/ai/training/build-use-custom-image/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
