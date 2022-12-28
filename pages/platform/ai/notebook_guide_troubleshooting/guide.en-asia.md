---
title: AI Notebooks - Troubleshooting
slug: notebooks/debug-notebooks
excerpt: Tutorial about how to debug your notebooks
section: AI Notebooks - Guides
order: 05
---

**Last updated 14th April, 2022.**

## Objective

This tutorial gives you some hints on how to debug your notebooks if things go wrong.

## Requirements

- a notebook you would like to start with **AI Notebooks**
- an [Object Storage Container](https://docs.ovh.com/asia/en/storage/object-storage/pcs/create-container/) in your OVHcloud account
- a Public Cloud user with the **Administrator** or **AI Training Operator** role

## Instructions

### I can't connect to my notebook

If you are unable to connect to AI Notebooks, please ensure the following:

- **Your notebook is up and running:** To connect to your notebook, it must be in running or in service status (green colored). If your notebook is starting up, wait a few moments until your data synchronizes and you will be able to connect. Starting time may vary due to some parameters. The more data you synchronize, the more time it will take.

- **You have an autorized user or an authorized token:** To be able to connect to your notebook, you must have created a user or token. To create a new user, log into the OVHcloud Control Panel and open your Public Cloud project. Click on `Users & Roles` in the left menu under `Project Management`. In the roles assignment, don't forget to select `Administrator` and/or `AI Training Operator` for your user.
To follow all the steps in detail, please refer to this [documentation](https://docs.ovh.com/asia/en/publiccloud/ai/users/).

As an alternative, you can generate an authorized token directly via our [CLI](https://docs.ovh.com/asia/en/publiccloud/ai/cli/app-token-cli/).

### I can't install packets via an APT command

AI Notebooks does not allow the use of `apt-get install` because you are not root. You can install your various packages using these commands:

1\. `pip` command:

``` {.console}
pip install package-name
```

2\. `conda` command:

``` {.console}
conda install package-name
```

- **Install packages in a terminal:** First, open a new terminal.
If you have chosen the `Jupyterlab` editor, open a new terminal: `file` > `new` > `terminal`
If you have chosen the `VScode` editor, open a new terminal: `application menu` > `terminal` > `new terminal`

You can then execute:

``` {.console}
pip install package-name
```

or

``` {.console}
conda install package-name
```

directly in your terminal.

- **Install packages directly in a notebook cell:** If you want to install a package directly in a notebook cell, do not forget to put an exclamation mark in front of your command. Then, you will be able to install a package with:

``` {.console}
!pip install package-name
```

or

``` {.console}
!conda install package-name
```

It is still advisable to install or uninstall packages in a terminal, particularly for authorizations. You can authorize (or not) the installation or uninstallation of packages with a yes or no. It is impossible to do this in a notebook cell.

### I don't see my data synchronized in the Object Storage

When you create an AI Notebook, we copy you data pushed in attached Object Storage containers near you compute resources (`CPU` and `GPU`) to increase performance and reduce latency.

> [!primary]
>
> When you write data inside an attached volume, we wait for the AI Notebook to stop to synchronize back your data.
>

If you are unable to see your synchronized data, please ensure the following:

- **Your notebook is stopped:** To see your synchronized data in the Object Storage, your notebook must be stopped beforehand. The status of your notebook must be stopped (red colored). If your notebook is `STOPPING`, wait a few moments and you will be able to see your synchronized data.

- **Your object container is not empty:** If your object container is empty, you may not have saved your data in the right place when using it in your notebook. Check how the volume was mounted when you started your notebook.

### I'm unable to install the CLI (Command Line Interface)

To install the CLI for OVHcloud AI Tools, you can check this and follow the subsequent steps.

For your information, two regions are available: `bhs` and `gra`.

- **Your cluster location is `gra`:** Go to this [page](https://cli.gra.training.ai.cloud.ovh.net/).

- **Your cluster location is `bhs`:** Go to this [page](https://cli.bhs.training.ai.cloud.ovh.net/).

You have to choose the zip file corresponding to your operating system. Then unzip your file by running the following command in a terminal:

``` {.console}
unzip ovhai-<platform>.zip
```

> [!primary]
>
> <platform> is the name of your operating system. It corresponds to the one indicated in the zip file you downloaded.
>

Now all you have to do is add it to your `PATH`:

``` {.console}
mkdir -p $HOME/bin
mv ovhai $HOME/bin/ovhai
export PATH=$PATH:$HOME/bin/
```

Once the ovhai CLI is installed, you need to authenticate with a Public Cloud user, with the role `Administrator` and/or `AI Operator`.

``` {.console}
ovhai login
```

If you want to find this information, check the [documentation](https://docs.ovh.com/asia/en/publiccloud/ai/cli/install-client/#instructions).

### I have compatibility issues between my installed packages

Check the compatibility between the framework you have chosen when launching your notebook and the package you have installed.

If your framework is not compatible with the package version:

- You can uninstall the package with a `pip uninstall` or `conda remove` command. Then reinstall the package with a version compatible with your framework.

- Otherwise, you have several versions for some frameworks. Choose the one that best suits your project.

### I may have reached the resource limits

Each AI Notebooks service comes with a monitoring dashboard, allowing you to closely watch your compute, storage and network consumptions.

To verify your usage metrics, go to the Public Cloud Control Panel and select AI Notebooks. All your notebooks will be listed. Click on your notebook to check its information. In `Resources`, you can then access the monitoring of your resources via the `Graph Dashboard`.

Please note that each AI Notebook is limited to a maximum amount of CPUs and GPUs. You can refer to the AI Notebooks [Capabilities and Limitations](https://docs.ovh.com/asia/en/publiccloud/ai/notebooks/capabilities/) guide.

### I am experiencing slowness

Slowness can be experienced in two major cases: you are running intensive tasks taking all your resources or it's an issue on OVHcloud's side.

For the first case, you may refer to the question *"I may have reached the resource limits"*.

For the second case, you can verify on [OVHcloud status](https://public-cloud.status-ovhcloud.com/) if a task is affecting our infrastructure.

If it is not the case, contact our support.

### I would like to create custom notebooks

OVHcloud AI Notebooks comes with a preinstalled AI environment, such as TensorFlow, PyTorch or HuggingFace, and useful packages.

But it may happen that you need a very specific package or notebook.

While it's not possible with AI Notebooks, you can bring your custom ones with **AI Training**.

AI Training allows you to benefit from the same technology and pricing, but you can create notebooks directly with your **own Docker images**.

If you want to build and use a custom Docker image, you can do it with AI Training by following this [tutorial](https://docs.ovh.com/asia/en/publiccloud/ai/training/build-use-custom-image/).

### CLI: my notebook is in "failed" status

- Check if you have permission to connect to Public Cloud Object Storage (PCS): If you remove the permission to connect to PCS, the data synchronization will fail and so will the notebook.

- Check if you have access to the data of the volume you are trying to connect to your notebook: If you try to connect a volume (from PCS) and you do not have access rights, your notebook will have the `failed` status.

To debug it yourself, run the following command in the CLI:

``` {.console}
ovhai notebook get <notebook_id>
```

You will know if the `failed` status is related to data synchronization and which volume could not be synchronized.

### My notebook shut down unexpectedly

While we are doing our best to avoid this situation, like with any services in the world, outages can happen.

Please open a ticket to our support.

If your notebook has shut down unexpectedly, it may be due to an issue in our backend. Usually, your remote data is safe and will be synchronized in Public Cloud Object Storage.

Your ephemeral local storage will be lost.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
