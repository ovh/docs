---
title: Quantum computing - Features, Capabilities and Limitations
excerpt: Find out about current features, capabilities and limitations of Quantum Notebooks
updated: 2025-06-17
---

> [!primary]
>
> Quantum Notebooks is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

> [!warning]
>
> Some links on this documentation refer to the AI and Machine Learning solution. Quantum computing shares the same infrastructure as a service so you might be redirected to another section of this documentation.

## Objective

This page provides the technical features, capabilities and limitations of the Public Cloud Quantum computing offer.

## Features

### Available features

Quantum Notebooks are Managed Jupyter or VS Code notebooks, linked to compute resources (`CPUs`, `GPUs`) and storage. You can compare them to Google Colab or Amazon Sagemaker notebooks.

| Feature                                    | Details                                                                                                                                                                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Live code editor and Quantum environments**   |                                                                                                                                                                                                                                              |
| Jupyter and VS Code                        | You can use Jupyter or VS Code as your preferred live-code editor. If you opt for VS Code, you can also set up a remote connection (for example, from your laptop).                                                                          |
| Preinstalled Quantum environments | Quantum Notebooks comes with a generic Python environment (Conda) or pre-installed ones, such as Felis Alice & Bob, C12, myQLM, Pasqal, Perceval, Qiskit and more                                                                                                |
| Easy customization                         | Quantum Notebooks allows installation of almost any Conda or Pip packages. You can easily customize your environment to suit your needs.                                                                                                          |
| **Management**                             |                                                                                                                                                                                                                                              |
| Multiple ways to manage your notebooks     | You can manage your Quantum Notebooks through the OVHcloud Control Panel, API or CLI. Depending on your needs, you can easily automate their creation and deletion as well.                                                                           |
| Easy start and Stop                        | You can start and stop a notebook in one click. Once stopped, your notebook environment is kept and you can restart it later, without losing your data and experiments.                                                                      |
| **Compute resources**                      |                                                                                                                                                                                                                                              |
| Guaranteed compute resources               | Select the amount of CPUs or GPUs required during the creation of the Quantum Notebooks. Once launched, you will keep these resources as long as your notebook is running.                                                                        |
| Background execution                       | Your tasks can be executed in the background, meaning that closing your Web browser will have no effect on your work.                                                                                                                            |
| No maximum runtime                         | Your tasks can last as long as your notebook is running.                                                                                                                                                                                     |
| Monitoring tools                           | Each Quantum Notebooks service comes with a native Grafana dashboard, allowing you to keep track and monitor your CPU, GPU, RAM and storage resources.                                                                                            |
| **Storage**                                |                                                                                                                                                                                                                                              |
| Fast and flexible storage                  | Each Quantum Notebooks service comes with local storage, but also the ability to attach remote storage from Object Storage. From a few GiB to multiple TiB, we push your data near our compute power on fast SSD storage for better performances. |
| Git repositories importation               | During the creation of your Quantum Notebooks, you can specify one or multiple Git repositories to download inside your notebook environment.                                                                                                     |
| **Security**                               |                                                                                                                                                                                                                                              |
| Open or restricted authentication          | During the creation of your Quantum Notebooks, select open or restricted access to your notebook. If restricted, people can be granted access via token or credentials to securely access your environment.                                       |
| European values                            | We respect your privacy and will never use your personal data for our internal purposes.                                                                                                                                                     |
| **Availability and billing**               |                                                                                                                                                                                                                                              |
| Easy billing                               | You only pay for what you consume, billed per minute.                                                                                                                                                                                        |
| Available in many countries                | Quantum Notebooks requires an OVHcloud account. We currently accept dozens of countries. Once created, you will have access to the whole set of features.                                                                                         |

#### Command line interface (CLI)

Quantum Notebooks is compliant with the OVHcloud AI CLI. Discover how to [install the OVHcloud AI CLI](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli).

#### **Monitoring tools**

To see information of your notebook, you can do so with the `ovhai` CLI using the command below:

```{.console}
ovhai notebook get <notebook-id>
```

You can then access your metrics through the `Monitoring Url`.

You are also able to check it from the [OVHcloud Control Panel](/links/manager) in your notebook's general information by clicking the `Go to Graph Dashboard`{.action} button.

### Planned features

We continuously improve our offers. You can follow, vote and submit ideas to add to our roadmap at <https://github.com/orgs/ovh/projects/16/views/19>.

## Capabilities and limitations

### Supported regions for notebooks

Quantum Notebooks can be used from any country in the world, as long as you have an OVHcloud account.
Physically, two datacenters are available:

- `BHS` (Beauharnois, Canada, America)
- `GRA` (Gravelines, France, Europe)

### Attached resources

#### Compute resources

You can either choose the number of `GPUs` or `CPUs` for a notebook, not both.
By default, a notebook uses one GPU.
The memory resource is not customizable.

If you choose `GPU`:

- CPU, memory and local storage resources are not customizable but scaled linearly with each additional GPU.

If you choose `CPU`:

- Memory and local storage resources are not customizable but scaled linearly with each additional CPU.

The maximum amount of CPU/GPU, memory per CPU/GPU and local storage is available on the [OVHcloud website](/links/public-cloud/prices), Control Panel and the `ovhai` CLI.

```{.console}
ovhai capabilities flavor list
```

For your information, the current limits are:

- CPU: 12 per notebook.
- GPU: 4 per notebook.

##### **Available hardware for Quantum Notebooks**

Currently, we provide:

- **NVIDIA V100S** ([pricing available here](/links/public-cloud/prices)).

#### Available storage

##### **Local storage**

Each Quantum Notebook comes with a local storage space, which is ephemeral. When you delete your notebook, this storage space is also deleted.
This storage space depends on the selected instances during the notebook creation. Please refer to the compute resources section for more information.

> [!primary]
> **Local storage** is limited and not the recommended way to handle data, see the [OVHcloud documentation on data](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data) for more information.
>

##### **Attached storage**

You can attach data volumes from Public Cloud Object Storage. The Object Storage bucket should be in the same region as your Quantum Notebooks.
Attached storage allows you to work on several TB of data, while being persistent when you delete your Quantum Notebooks.

#### Maximum execution time

There is no duration limitation on Quantum Notebooks execution.

### Live-code editors

You can choose between two **live-code editors** to launch and edit your notebook:

- Jupyterlab
- VS Code

You cannot install your own code editor on Quantum Notebooks.

With VS Code, you get the capability to use remote connections (from a local computer).

### Pre-installed Quantum environments

OVHcloud Quantum Notebooks comes with pre-installed Quantum environments.

List of available Quantum Environments:

- Alice & Bob Felis
- Atos myQLM
- C12
- IBM Qiskit
- IQM SQK
- Pasqal Pulser
- Pasqal Pulser for QPU
- QPerfect MIMIQ
- Quandela Perceval
- Quobly

#### Environment customization

Each environment can be customized directly with PIP or CONDA (we support almost any package and library).

**Limitations**:

- You are **not administrator (root)**. You cannot install Linux packages (such as *apt-get*).
- Quantum Notebooks **does not allow the use of custom Docker images**.

### Network

- **Public networking** can be used for all the Quantum Notebooks.
- **Private networking (OVHcloud vRack)** is not supported.

#### Available ports to public network

Each notebook has a public URL, by default this URL accesses the port 8080 of the notebook. The default port cannot be changed.

Notebook URL for accessing the default port (starting with the notebook's ID):

-  `https://00000000-0000-0000-0000-000000000000.notebook.gra.ai.cloud.ovh.net`

Only the HTTP layer is accessible.

### Quotas per Public Cloud project

Each Public Cloud project grants a customer by default a maximum of 4 GPUs used simultaneously. Reach out to our [support](https://help.ovhcloud.com/csm?id=csm_get_help) if you need to increase this limitation.

## Go further

Browse the full [Quantum Notebooks documentation](/products/public-cloud-quantum-computing) to further understand the main concepts and get started.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

We would love to help answer questions and appreciate any feedback you may have.

Please send us your questions, feedback, and suggestions regarding Quantum Notebooks:

* In the #quantum-computing channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud).
