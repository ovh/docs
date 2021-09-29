---
title: Getting started
slug: getting-started
excerpt: How to create a Notebook, train your model, and display your metrics with TensorBoard
section: Introduction
order: 2
---
*Last updated 4th of August, 2021.*

## Objective

The purpose of this tutorial is to show how it is possible to use [TensorBoard](https://www.tensorflow.org/tensorboard?hl=fr) with AI Notebooks.

The tutorial presents a simple example of using TensorBoard with AI Notebooks. This notebook will use the Tensorflow docker image.

## Requirements

-   access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
-   an AI Notebooks project created inside a Public Cloud project
-   a user for AI Notebooks

## Instructions

Follow the instructions below.

### Authenticating

First, you need to authenticate with the **AI Notebooks** service.

You have the choice between two methods to log in:

-   terminal: you can authenticate yourself from within the terminal with the following command

``` {.console}
ovhai login -u <user> -p <password>
```

-   browser: you will reach an authentication page similar to this:

![image](images/00_oauth2_login.png){.thumbnail}

Use the credentials of your **AI Notebooks** user to log in.

If you want to know more about creating users, refer to this [documentation](https://docs.ovh.com/ie/en/ai-training/create-user/).

### Create an object container

You can create a new object container in your OVHCloud Object Storage. This will allow you to store data in it, such as data generated after training for example. For more information on data, volumes and permissions, see the \[data\]\[OVH Data\] page.

> [!primary]
>
> Attaching a volume is done in the same way for a notebook as for a job. You can therefore refer to the AI Training documentation.

### Launch and access Jupyter notebook

If you want to launch it from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca), just follow this \[guide\]\[OVH Notebooks\] and select the docker image `Tensorflow`.

If you want to launch it with the CLI:

``` {.console}
USAGE:
    ovhai notebook run [FLAGS] [OPTIONS] <framework-id> <editor-id>

ARGS:
    <framework-id>
            Framework ID to use in the notebook The list of available frameworks is available under
            capabilities `ovhai capabilities framework`
    <editor-id>
            Editor ID to use in the notebook The list of available editors is available under
            capabilities `ovhai capabilities editor`

FLAGS:
    -h, --help
            Prints help information

        --no-color
            Remove colors from output

        --unsecure-http
            HTTP services inside job will not require authentication to be accessed from the outside

    -V, --version
            Prints version information


OPTIONS:
        --app-token <app-token>
            Authentication using AppToken rather than oauth

    -c, --cpu <cpu>
            Number of CPUs (ignored if GPUs is specified)

    -f, --flavor <flavor>
            the flavor to use, `ovhai capabilities flavor list` to get the whole list

        --framework-version <framework-version>
            Version of the selected framework

    -g, --gpu <gpu>
            Number of GPUs

    -l, --label <name=value>...
            Optional labels, only informative

    -n, --name <name>
            Optional name, only informative

    -o, --output <output>
            Command output format [possible values: json, yaml]

    -v, --volume <container@region/prefix:mount_path(:permission)(:cache) or url:mount_path(:permission)(:cache)>...
            Volumes mounted on the image. `region` is the object storage region of your data. You
            can get a list of all available regions for the object storage by typing `ovhai data
            region`. `/prefix` is optional [default: ""]. `:permission` is optional [default: ro]
            [possible values: ro, rw]. `:cache` is optional [default: "no-cache"] [possible values:
            cache, no-cache].

            A URL can be given instead of container@region/prefix for containers that are publicly
            available.
```

#### Name your notebook

The `--name` flag is used to name your notebook. Choose the name (`<notebook-name>`) you want.

#### Choose the framework version

The `--framework-version` flag is used to select the framework version.

#### Choose the flavor

The `--flavor` flag is used to select the flavor of your choice. Run this command to get the whole list: `ovhai capabilities flavor list`.

#### Size your run

You need to tweak the resources you need for your new run depending on your expected workload. Choose the number of GPUs (`<nb-gpus>`) or CPUs (`<nb-cpus>`) to use on your job.

#### Attach volumes

This step assumes that you have data in your OVHCloud object store (see previous step) that you want to use during your experiment or that you need to save the results of your work in the object store.
For more information on data, volumes and permissions, see the \[data\]\[OVH Data\] page.

The `--volume` flag is used to attach a container as a volume to the job.
The volume description sets the option for the volume and synchronisation process `<container@region/prefix:mount_path:permission:cache>`:

-   `container` the container in OVHcloud Object Storage to synchronise
-   `region` the Object Storage region on which the container is located
-   `prefix` objects in the container are filtered on the base of this prefix, only matching objects are synced
-   `mount_path` the location in the job where the synced data is mounted
-   `permission` the permission rights on the mounted data. Available rights are **read only (ro)** or **read write (rw)**. Data mounted with **ro** permission is not synced back at the end of the job.
-   `cache` whether the synced data should be added to the project cache. Available options are either `cache` or `no-cache`. Data in the cache can be used by other jobs without additional synchronisation, to benefit from the cache the new jobs also need to mount the data with the cache option.

#### Choose your framework

The `<framework-id>` arg is used to precise the framework you want to use. In the case of our notebook, we will use **Tensorflow**.

#### Select your editor

The `<editor-id>` arg allows you to choose your editor. Here, we will use **jupyter**.

#### The command to run

> [!warning]
>
> Don't forget to choose the `RW` (Read & Write) permission so that you can store your training data there

``` {.bash}
ovhai notebook run \
   --name <notebook-name> \
   --framework-version 2.4.1-ovh.beta.0 \
   --flavor ai1-1-gpu \
   --gpu <nb-gpus> \
   --volume <container@region/prefix:mount_path:RW> \
   tensorflow jupyterlab
```

You can then reach your notebook's URL once the job is running.

### Clone the GitHub repository

The GitHub repository containing all examples for OVHcloud AI TRAINING is available [here](https://github.com/ovh/ai-training-examples).

Inside your notebook, open a new Terminal tab by clicking `File` > `New` > `Terminal`.

![image](images/new-terminal.png){.thumbnail}

Run the following command in the notebook's terminal to clone the repository:

``` {.bash}
git clone https://github.com/ovh/ai-training-examples.git
```

### Experiment with example notebook

> [!primary]
>
> Once the repository has been cloned, check that you are in the right conditions before following the tutorial from the notebook.

First you should see your object container (`<my_container>` for example) and the GitHub repository (`<ai-training-examples>`).

![image](images/image_overview_jupyter_notebook_tensorboard.png){.thumbnail}

Then access the example notebook via the following path:

`ai-training-examples` > `notebooks` > `tensorflow` > `tuto` > `notebook_tutorial_tensorboard.ipynb`

The aim of this tutorial is to show how it is possible, thanks to TensorBoard, to see the dynamic display of different metrics.

A preview of this notebook can be found on \[GitHub\]\[link when the pr will be ok\].

### How to use TensorBoard with AI training ?

If you want to launch TensorBoard in a job, please refer to this [documentation](link%20when%20the%20pr%20will%20be%20ok).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/en/c/Data-AI)
