---
title: AI Notebooks - Workspace
excerpt: Learn how AI Notebooks workspaces work
updated: 2023-06-23
routes:
    canonical: 'https://help.ovhcloud.com/csm/en-gb-public-cloud-ai-notebooks-workspace?id=kb_article_view&sysparm_article=KB0058558'
---

## Objective

This guide details how AI Notebooks workspaces work and the related best practices.

## Instructions

### What is a notebook's workspace?

**AI Notebooks** are managed **Jupyter** or **Visual Studio Code** notebooks, linked to compute resources (CPUs, GPUs) and **storage**. 

This **storage** includes both the remote containers you have attached to your notebook, and your notebook's default storage.

Indeed, **every notebook has by default an internal object storage volume attached, fully managed by OVHCloud**, which is your workspace storage and is located at `/workspace`.

### How do AI Notebooks' workspace work?

When your **notebook is created**, a `/workspace` directory is automatically created. It **contains configuration information** such as **the Machine Learning framework** you have chosen to launch your notebook *(Miniconda, PyTorch, TensorFlow, ...)*, but also all **your installed python libraries**. This directory also allows you to store your data (datasets, codes, etc.).

When you **stop your notebook**, your workspace (`/workspace`) is pushed to your [Object Storage](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data). This means that all files contained in your `/workspace` directory will be saved for future use.

Therefore, the next time you **restart your notebook**, your workspace will be pulled directly from your Object Storage into `/workspace`. You will not need **to reinstall your python libraries, re-import your data** or anything else you put in the `/workspace` directory.

> [!primary]
>
> This workspace is saved as long as your notebook is in `STOPPED` state.
>

*There is also a `/data` folder in which you can store your data. **This solution is more efficient but ephemeral**, meaning that it will not be persisted if you close your notebook or if it crashes. In other words, the data contained within this directory cannot be recovered if the notebook leaves the `RUNNING` state.*

Here is a graph summarizing your notebook's workspace and ephemeral storage usage during its various states:

![image](images/ai-notebooks_workspace.svg){.thumbnail}

### Deleting workspace files

If you run the `ls -a` command in your notebook's `/workspace` directory, you will see all the files and directories that your workspace contains, including hidden ones (whose names begin with a dot (.)). 

> [!primary]
>
> Hidden files and directories often contain temporary files and configuration files. 
> 
> It may be worth deleting some of these files, such as cache, to free up storage space in your workspace.
> 

> [!warning]
>
> Be careful, some configuration files must not be removed under any circumstances, to prevent workspace initialization errors. This is the case of the `.workspace.initialized` file. Never delete it and therefore never delete the entire contents of the `/workspace` directory.
> 
> If you delete this file and stop your notebook, you will not be able to restart it in the future, as it will reach the `Error` status.
>

### Workspace billing

The first 10GB of the `/workspace` directory are free during 30 consecutive days. After this period, the [price of OVHcloud Object Storage](https://www.ovhcloud.com/pt/public-cloud/prices/#439) is applied for each GB. To learn how we bill AI Notebooks, refer to the [Billing and lifecycle documentation](/pages/public_cloud/ai_machine_learning/notebook_guide_billing_concept).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pt/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
