---
title: Quantum computing - Troubleshooting
excerpt: Tutorial about how to debug your notebooks
updated: 2025-06-17
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

This tutorial gives you some hints on how to debug your notebooks if things go wrong.

## Requirements

- A Notebook you would like to start with **Quantum Notebooks**
- An [Object Storage Container](/pages/storage_and_backup/object_storage/pcs_create_container) in your OVHcloud account
- A Public Cloud user with the **Administrator** or **Quantum Operator** role

## Instructions


/// details | What is a Quantum notebook emulator and how to launch one?

All steps for starting and working on Quantum Notebooks are described in the [Quantum Notebooks - Getting Started](/pages/public_cloud/quantum_computing/emulators/getting-started) guide.

///

/// details | I can't connect to my notebook

If you are unable to connect to Quantum Notebooks, please ensure the following:

- **Your notebook is up and running:** To connect to your notebook, it must be in `RUNNING` or in `IN SERVICE` status (green color in the OVHcloud Control Panel). If your notebook is starting up, wait a few moments until your data synchronizes and you will be able to connect. Starting time may vary due to some parameters. The more data you synchronize, the more time it will take.
- **You have an authorized user or an authorized token:** To be able to connect to your notebook, you must have created a user or token. To create a new user, log in to the OVHcloud Control Panel and open your Public Cloud project. In the left menu, click the `Quantum computing`{.action} section. This will allow you to manage and create Quantum users. To simply access Quantum computing, use the `Quantum reader` role. For more advanced use, including management, select the `Quantum operator` role.

To follow all the steps in detail, please refer to this [documentation](/pages/public_cloud/quantum_computing/users-roles).

///

/// details | I can't install packets via an APT command

Quantum Notebooks does not allow the use of `apt-get install` because you are not root. You can install your various packages using these commands:

1\. `pip` command:

```{.console}
pip install package-name
```

2\. `conda` command:

```{.console}
conda install package-name
```

- **Install packages in a terminal:** First, open a new terminal.

If you have chosen the `Jupyterlab` editor, open a new terminal: `File`{.action} > `New`{.action} > `Terminal`{.action}.
If you have chosen the `VScode` editor, open a new terminal by clicking the menu icon > `Terminal`{.action} > `New Terminal`{.action}.

You can then execute directly in your terminal one of the two following commands:

```{.console}
pip install package-name
```

or

```{.console}
conda install package-name
```

- **Install packages directly in a notebook cell:** If you want to install a package directly in a notebook cell, do not forget to put an exclamation mark in front of your command. Then, you will be able to install a package with:

```{.console}
!pip install package-name
```

or

```{.console}
!conda install package-name
```

It is still advisable to install or uninstall packages in a terminal, particularly for authorizations. You can authorize (or not) the installation or uninstallation of packages with a yes or no. It is impossible to do this in a notebook cell.

///

/// details | I have compatibility issues between my installed packages

Check the compatibility between the framework you have chosen when launching your notebook and the package you have installed.

If your framework is not compatible with the package version:

- You can uninstall the package with a `pip uninstall <package_name>` or `conda remove <package_name>` command. Then reinstall the package with a version compatible with your framework.
- Otherwise, you have several versions for some frameworks. Choose the one that best suits your project.

///

/// details | How to use my own Docker image with Quantum Notebooks?

Quantum Notebooks does not allow the use of custom Docker images.

///

/// details | I am not sure about the Notebooks billing

You only pay for the resources you use and, if applicable, the local storage. Check [this documentation](/pages/public_cloud/quantum_computing/billing) for detailed examples.

///

/// details | I don't see my data synchronized in the Object Storage

When you create a Quantum Notebook, we copy your data in attached Object Storage containers near your compute resources (`CPU` and `GPU`) to increase performance and reduce latency.

> [!primary]
>
> When you write data inside an attached volume, we wait for the Quantum Notebook to stop to synchronize back your data.
>

If you are unable to see your synchronized data, please ensure that:

- **Your notebook is stopped:** To see your synchronized data in the Object Storage, your notebook must be stopped beforehand. The status of your notebook must be stopped (red colored). If your notebook is `STOPPING`, wait a little and you will be able to see your synchronized data.
- **Your object container is not empty:** If your object container is empty, you may not have saved your data in the right place when using it in your notebook. Check how the volume was mounted when you started your notebook.

///

/// details | I may have reached the resource limits

Each Quantum Notebooks service comes with a monitoring dashboard, allowing you to closely watch your compute, storage and network consumptions.

To verify your usage metrics, go to the `Public Cloud`{.action} section of the [OVHcloud Control Panel](/links/manager) and select `Quantum Notebooks`{.action}. All your notebooks will be listed. Click on your notebook to check its information. In `Resources`{.action}, you can then access the monitoring of your resources via the `Graph Dashboard`.

Please note that each Quantum Notebook is limited to a maximum amount of CPUs and GPUs. You can refer to the Quantum Notebooks [Capabilities and Limitations](/pages/public_cloud/quantum_computing/capabilities) guide.

///

/// details | I am experiencing slowness

Slowness can be experienced in two major cases: you are running intensive tasks taking all your resources, or it's an issue on OVHcloud's side.

For the first case, you may refer to the question *"I may have reached the resource limits"*.

For the second case, you can verify on [OVHcloud status](https://public-cloud.status-ovhcloud.com/) if a task is affecting our infrastructure.

If it is not the case, contact our [support](https://help.ovhcloud.com/csm?id=csm_get_help).

///

/// details | Can I install a new notebook editor?

Currently, you can choose between three live-code editors to launch and edit your notebook:

- VSCode
- JupyterLab
- JupyterLab Real Time (collaborative environment)

You can get the list of available editors using the ovhai CLI with the following command: `ovhai capabilities editor list`

You cannot install your own code editor on Quantum Notebooks.

///

/// details | What are the available ports to public network?

Each notebook has a public URL. By default this URL accesses the port 8080 of the notebook. The default port cannot be changed.

However, you can access other ports by appending them to the URL. For example, the notebook URL (starting with the notebook's ID, filled with 0 here) for accessing the 8501 port is `https://00000000-0000-0000-0000-000000000000-8501.job.gra.ai.cloud.ovh.net/`

///

/// details | CLI: My notebook is in "failed" status

- Check if you have permission to connect to Public Cloud Object Storage (PCS): If you remove the permission to connect to PCS, the data synchronization will fail and so will the notebook.
- Check if you have access to the data of the volume you are trying to connect to your notebook: If you try to connect to a volume (from PCS) and you do not have access rights, your notebook will have the `failed` status.

To debug it yourself, run the following command in the CLI:

```{.console}
ovhai notebook get <notebook_id>
```

You will know if the `failed` status is related to data synchronization and which volume could not be synchronized.

///

/// details | How long can I use my Quantum notebook?

A Quantum notebook runs continuously until manually interrupted by the user, unless it exceeds **7 days of running**. It will then be automatically stopped. You can choose to automatically restart it using the `auto-restart` option (set this parameter to `True`). The notebook will then restart as is. To increase this 7-day limit, you will have to contact the [support](https://help.ovhcloud.com/csm?id=csm_get_help) to ask for an upgrade of this quota for your Public Cloud project.

///

/// details | My notebook shut down unexpectedly

While we are doing our best to avoid this situation, as for any given service, outages can happen.

Please open a ticket to our [support](https://help.ovhcloud.com/csm?id=csm_get_help).

If your notebook has shut down unexpectedly, it may be due to an issue in our backend. Usually, your remote data is safe and will be synchronized in Public Cloud Object Storage.

Your ephemeral local storage will be lost.

///

## Going further

For training or technical assistance, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis.

## Feedback

We would love to help answer questions and appreciate any feedback you may have.

Please send us your questions, feedback, and suggestions regarding Quantum Notebooks:

* In the #quantum-computing channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud).
