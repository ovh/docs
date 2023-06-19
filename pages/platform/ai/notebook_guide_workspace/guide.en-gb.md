---
title: AI Notebooks - Workspace
slug: notebooks/workspace-notebooks
excerpt: Tutorial about how to understand AI Notebooks workspace
section: AI Notebooks - Guides
order: 06
updated: 2023-06-19
---

**Last updated 19th June, 2023.**

## Objective

This tutorial explains how AI Notebooks' workspaces work, and what to do and what not to do.

## Requirements

- a notebook you would like to start with **AI Notebooks**
- an [Object Storage Container](https://docs.ovh.com/gb/en/storage/object-storage/pcs/create-container/) in your OVHcloud account
- a Public Cloud user with the **Administrator** or **AI Training Operator** role

## Instructions

### What is a notebook's workspace

**AI Notebooks** are managed **Jupyter** or **Visual Studio Code** notebooks, linked to compute resources (CPUs, GPUs) and **storage**. 

This **storage** includes both the remote containers you have attached to your notebook, and your notebook's default storage.

Indeed, **every notebook has by default an internal object storage volume attached, fully managed by OVHCloud**, which is your workspace storage and is located at `/workspace`.

### How do AI Notebooks' workspace work

When your **notebook is created**, a `/workspace` directory is automatically created. It **contains configuration information**, such as **the machine learning framework** you have chosen to launch your notebook *(Miniconda, PyTorch, Tensorflow, ...)*, but also all **your installed python libraries**. This directory also allows you to store your data (datasets, codes, etc.).

When you **stop your notebook**, your workspace (`/workspace`) is pushed to your object storage. This means that all files contained in your `/workspace` directory will be saved for future use.

Indeed, the next time you **restart your notebook**, your workspace will be pulled directly from your object storage into `/workspace`. You will not need **to reinstall your python libraries, re-import your data** or anything else you put in the `/workspace` directory.

> [!primary]
>
> This workspace is saved as long as your notebook is in `STOPPED` state.
>

*There is also a `/data` folder in which you can also store your data. **This solution is more efficient but ephemeral**, meaning that it will not be persisted if you close your notebook or if it crashes. In other words, the data contained within this directory cannot be recovered if the notebook leaves the `RUNNING` state.*

### Delete workspace files

If you run the `ls -a` command in your notebook's `/workspace` directory, you will see all files and directories that are contained in your workspace, including hidden ones (whose names begin with a dot (.)). 

> [!primary]
>
> Hidden files and directories often contain temporary and configuration files. 
> 
> It may be worth deleting some of these files to free up storage space in your workspace, such as the cache. 
> 

> [!warning]
>
> However, certain configuration files must not be removed under any circumstances, to prevent workspace initialization errors. This is the case of the `.workspace.initialized` file. Do not delete it !
> 
> If you delete this file and stop your notebook, you will not be able to restart it in the future, as it will reach the `Error` status.
>


### Workspace billing

The first 10GB of the `/workspace` directory are free during 30 consecutive days, then you pay at the [price of OVHcloud Object Storage](https://www.ovhcloud.com/en/public-cloud/prices/#439) for each GB.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.