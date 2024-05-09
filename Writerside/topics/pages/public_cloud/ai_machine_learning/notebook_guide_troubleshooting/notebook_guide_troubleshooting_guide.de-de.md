---
title: AI Notebooks - Troubleshooting
excerpt: Tutorial about how to debug your notebooks
updated: 2023-12-14
---

## Objective

This tutorial gives you some hints on how to debug your notebooks if things go wrong.

## Requirements

- a Notebook you would like to start with **AI Notebooks**
- an [Object Storage Container](pcs_create_container1.) in your OVHcloud account
- a Public Cloud user with the **Administrator** or **AI Training Operator** role

## Instructions

### What is an AI Notebook and how to launch one?

All steps for starting and working on AI Notebooks are described in the [AI Notebooks - Getting Started](notebook_guide_introduction_definition1.) guide.

### I can't connect to my notebook

If you are unable to connect to AI Notebooks, please ensure the following:

- **Your notebook is up and running:** To connect to your notebook, it must be in `RUNNING` or in `IN SERVICE` status (green color in the OVHcloud Control Panel). If your notebook is starting up, wait a few moments until your data synchronizes and you will be able to connect. Starting time may vary due to some parameters. The more data you synchronize, the more time it will take.

- **You have an authorized user or an authorized token:** To be able to connect to your notebook, you must have created a user or token. To create a new user, log into the OVHcloud Control Panel and open your Public Cloud project. In the left menu, click on `AI Dashboard`, in the `AI & Machine Learning` section. This will allow you to manage and create AI users. To simply access AI solutions, use the `AI Platform - Read Only` role. For more advanced use, including management, select the `AI Platform - Operator` role.
To follow all the steps in detail, please refer to this [documentation](gi_01_manage_users1.).

As an alternative, you can generate an authorized token directly via our [CLI](cli_13_howto_app_token_cli1.).

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
If you have chosen the `Jupyterlab` editor, open a new terminal: `File` > `New` > `Terminal`
If you have chosen the `VScode` editor, open a new terminal by clicking the menu icon > `Terminal` > `New Terminal`

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

### I have compatibility issues between my installed packages

Check the compatibility between the framework you have chosen when launching your notebook and the package you have installed.

If your framework is not compatible with the package version:

- You can uninstall the package with a `pip uninstall <package_name>` or `conda remove <package_name>` command. Then reinstall the package with a version compatible with your framework.

- Otherwise, you have several versions for some frameworks. Choose the one that best suits your project.

### How to use my own Docker image with AI notebooks?

AI Notebooks does not allow the use of custom Docker images. In case you need a very specific package or framework, you can bring your custom Docker images with OVHcloud AI Training.

### I am not sure about the Notebooks billing

You only pay for the resources you use and eventually the local storage. Check [this documentation](notebook_guide_billing_concept1.) for detailed examples.

### I don't see my data synchronized in the Object Storage

When you create an AI Notebook, we copy your data in attached Object Storage containers near your compute resources (`CPU` and `GPU`) to increase performance and reduce latency.

> [!primary]
>
> When you write data inside an attached volume, we wait for the AI Notebook to stop to synchronize back your data.
>

If you are unable to see your synchronized data, please ensure that:

- **Your notebook is stopped:** To see your synchronized data in the Object Storage, your notebook must be stopped beforehand. The status of your notebook must be stopped (red colored). If your notebook is `STOPPING`, wait a little and you will be able to see your synchronized data.

- **Your object container is not empty:** If your object container is empty, you may not have saved your data in the right place when using it in your notebook. Check how the volume was mounted when you started your notebook.

### I may have reached the resource limits

Each AI Notebooks service comes with a monitoring dashboard, allowing you to closely watch your compute, storage and network consumptions.

To verify your usage metrics, go to the Public Cloud Control Panel and select AI Notebooks. All your notebooks will be listed. Click on your notebook to check its information. In `Resources`, you can then access the monitoring of your resources via the `Graph Dashboard`.

Please note that each AI Notebook is limited to a maximum amount of CPUs and GPUs. You can refer to the AI Notebooks [Capabilities and Limitations](notebook_guide_capabilities1.) guide.

### I am experiencing slowness

Slowness can be experienced in two major cases: you are running intensive tasks taking all your resources, or it's an issue on OVHcloud's side.

For the first case, you may refer to the question *"I may have reached the resource limits"*.

For the second case, you can verify on [OVHcloud status](https://public-cloud.status-ovhcloud.com/) if a task is affecting our infrastructure.

If it is not the case, contact our support.

### Can I install a new notebook editor?

Currently, you can choose between three live-code editors to launch and edit your notebook:

- VSCode
- JupyterLab
- JupyterLab Real Time (collaborative environment)

You can get the list of available editors using the ovhai CLI with the following command: `ovhai capabilities editor list`

You cannot install your own code editor on AI Notebooks.

### I would like to create custom notebooks

OVHcloud AI Notebooks comes with a preinstalled AI environment, such as TensorFlow, PyTorch or HuggingFace, and useful packages.

But it may happen that you need a very specific package or notebook.

While it's not possible with AI Notebooks, you can bring your custom ones with **AI Training**.

AI Training allows you to benefit from the same technology and pricing, but you can create notebooks directly with your **own Docker images**.

If you want to build and use a custom Docker image, you can do it with AI Training by following this [tutorial](training_tuto_02_build_custom_image1.).

### What are the available ports to public network?

Each notebook has a public URL. By default this URL accesses the port 8080 of the notebook. The default port cannot be changed.

However, you can access other ports by appending them to the URL. For example, the notebook URL (starting with the notebook's ID, filled with 0 here) for accessing the 8501 port is https://00000000-0000-0000-0000-000000000000-8501.job.gra.ai.cloud.ovh.net/

### CLI: My notebook is in "failed" status

- Check if you have permission to connect to Public Cloud Object Storage (PCS): If you remove the permission to connect to PCS, the data synchronization will fail and so will the notebook.

- Check if you have access to the data of the volume you are trying to connect to your notebook: If you try to connect to a volume (from PCS) and you do not have access rights, your notebook will have the `failed` status.

To debug it yourself, run the following command in the CLI:

``` {.console}
ovhai notebook get <notebook_id>
```

You will know if the `failed` status is related to data synchronization and which volume could not be synchronized.

### How long can I use my AI Notebook?

An AI Notebook runs continuously until manually interrupted by the user, unless it exceeds **7 days of running**. It will then be automatically stopped. You can choose to automatically restart it using the `auto-restart` option (set this parameter to `True`). The notebook will then restart as is. To increase this 7-day limit, you will have to contact the support to ask for an upgrade of this quota for your Public Cloud project.

### My notebook shut down unexpectedly

While we are doing our best to avoid this situation, like with any services in the world, outages can happen.

Please open a ticket to our support.

If your notebook has shut down unexpectedly, it may be due to an issue in our backend. Usually, your remote data is safe and will be synchronized in Public Cloud Object Storage.

Your ephemeral local storage will be lost.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/de/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
