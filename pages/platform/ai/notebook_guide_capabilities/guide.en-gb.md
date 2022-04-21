---
title: AI Notebooks - Features, Capabilities and Limitations
slug: notebooks/capabilities
excerpt: Find out about current features, capabilities and limitations of AI Notebooks
section: AI Notebooks guides
order: 04
---

**Last updated 20th April, 2021.**

## Available features

AI Notebooks are Managed Jupyter or VSCode notebooks, linked to compute resources (CPUs, GPUs) and storage. You can compare them to Google Colab or Amazon Sagemaker Notebooks.

Main features:

| Feature                                    | Details                                                                                                                                                                                                                      |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Live code editor and AI environments**   |                                                                                                                                                                                                                              |
| Jupyter and VSCode                         | You can use Jupyter or VSCode as your preferred live-code editor. If you opt for VSCode, you can also set up a remote connection (for example, from your laptop)                                                               |
| Preinstalled Machine Learning environments | AI Notebooks comes with a generic Python environment (Conda) or pre-installed ones, such as Pytorch, Tensorflow, FastAI, HuggingFace and more                                                                                   |
| Easy customization                         | AI Notebooks allows installation of almost any Conda or Pip packages. You can easily customize your environment to suit your needs.                                                                                           |
| **Management**                             |                                                                                                                                                                                                                              |
| Multiple ways to manage your notebooks     | You can manage your AI Notebooks through OVHcloud control panel, API or CLI. Depending of your needs, you can easily automate their creation and deletion as well.                                                               |
| Easy start and Stop                        | You can start and stop a notebook in one click. Once stopped, your Notebook environment is kept and you can restart it later, without losing your data and experiments.                                                    |
| **Compute resources**                      |                                                                                                                                                                                                                              |
| Guaranteed compute resources               | Select the amount of CPU or GPUs required during the creation of the AI Notebooks. Once launched, you will keep these resources as long as your notebook is running.                                                         |
| Background execution                       | Your tasks can be executed in background, meaning that closing your Web browser will have no effect on your work.                                                                                                            |
| No maximum runtime                         | Your tasks can last as long as your notebook is running.                                                                                                                                                                     |
| Monitoring tools                           | Each AI Notebooks comes with native Grafana dashboard, allowing you to keep track and monitor your CPU, GPU, RAM and storage resources                                                                                               |
| **Storage**                                |                                                                                                                                                                                                                              |
| Fast and flexible storage                  | Each AI Notebooks comes with local storage, but also the ability to attach remote storage from Object Storage. From few GiB to multiple TiB, we push your data near our compute power on fast SSD storage for better performances. |
| Git repositories importation               | During the creation of your AI Notebooks, you can specify one or multiple Git repositories to download inside your notebook environment.                                                                                                     |
| **Security**                               |                                                                                                                                                                                                                              |
| Open or restricted authentication          | During the creation of your AI Notebooks, select open or restricted access to your notebook. If restricted, people can be granted access via token of credentials to securely access your environment                                             |
| European values                            | We respect your privacy and will never use your personal data for our internal purposes.                                                                                                                                    |
| **Availability and billing**               |                                                                                                                                                                                                                              |
| Easy billing                               | You only pay for what you consume, billed per minute.                                                                                                                                                                        |
| Available in many countries                | AI Notebooks requires an OVHcloud account. We currently accept dozen of countries. Once created, you will have access to the whole set of features.                                                                         |


## Planned features (Roadmap)
We now publicly publish the roadmap of this service, as all of our Public Cloud services, in the [OVHcloud GitHub repository](https://github.com/ovh/public-cloud-roadmap/projects).
When visiting the “AI / Machine Learning” board, you can view the whole backlog, vote or subscribe to notifications on features and even propose new ones to be considered.


## Known capabilities and limitations

### Quotas per Public Cloud project

Each Public Cloud project grants a customer by default  a maximum of 4 GPU used simultaneously. Reach our support if you need to increase this limitation.

### Physical locations

AI Notebooks can be used from any country in the world, as long as you have an OVHcloud account.
Physically, two datacenters are available
- Europe : `France (GRA)`
- America : `Canada (BHS)`

### Compute resources

- There is no duration limitation on notebook execution (no maximum runtime)
- No limitation on number of parallel execution

You can either choose the number of GPU or CPU for a notebook, not both.
By default, a notebook uses one GPU.
The memory resource is not customizable.

If you choose the number of `GPU`:

- CPU, memory and local storage resources are not customizable but scaled linearly with each additional GPU.

If you choose the number of `CPU`:

- Memory and local storage resource is not customizable but scaled linearly with each additional CPU.

Maximum amount of CPU/GPU, memory per CPU/GPU and local storage is available through our (OVHcloud website)[https://www.ovhcloud.com/en-gb/public-cloud/prices/], control panel and the `ovhai` CLI.

For information, current limits are:

- CPU : 12 per notebook.
- GPU : 4 per notebook.

> [!primary]
> **Local storage** refers to a drive mounted on the node. It's limited and not the recommended way to handle data, see [OVHcloud documentation on data](https://docs.ovh.com/gb/en/publiccloud/ai/data).
>

#### GPU hardware for notebooks

Currently we provide:

- **NVIDIA V100S** ([pricing available here](https://www.ovhcloud.com/en/public-cloud/prices/)).

### Storage

Each AI Notebooks comes with a local storage space, called ephemeral storage. When you delete your notebook, this storage space is also deleted.

Each AI Notebooks has the ability to sync data from Public Cloud Object Storage (all available regions).


### Live-code editors

You can choose between two **live-code editors** to launch and edit your notebook:
- VScode
- Jupyterlab

You cannot install your own code-editor on AI Notebooks.

With VSCode, you get the capability to use remote connection (from local computer).


### Pre-installed AI environments

OVHcloud AI Notebooks comes with preinstalled AI environments: PyTorch, TensorFlow, Miniconda and many others.

Available AI Environment list:

- AutoGluon + MXNet
- FastAI
- HuggingFace
- MiniConda (Python generic)
- MXNet
- One image to rule them all
- PyTorch
- TensorFlow

#### Environment customization

Each environment can be customized directly with PIP or CONDA (we support almost any package and libraries).

Limitation: you are **not administrator (root)**. You cannot install linux packages (such as *apt-get*).

Limitation: AI Notebooks **does not allow the use of custom Docker images**. In case you need a very specific package or framework, you can bring your custom Docker images with **OVHcloud AI Training**.
AI Training allows you to benefit from the same technology, same pricing, but you can create notebooks directly with your own Docker images.
If you want to build and use a custom Docker image, you can do it with AI Training by following this [tutorial](https://docs.ovh.com/gb/en/publiccloud/ai/training/build-use-custom-image/).


### Network access

AI Notebooks can access public network (Internet).
AI Notebooks cannot use or access private network (OVHcloud vRack).


## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
