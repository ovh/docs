---
title: AI Notebooks - Tutorial - Create your first Machine Learning model
slug: notebooks/tuto-first-ml-model-miniconda
excerpt: How to build your first Machine Learning model thanks to Miniconda
section: AI Notebooks - Tutorials
order: 01
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/notebooks/tuto-first-ml-model-miniconda/'
---

**Last updated 1st September, 2022.**

## Objective

This tutorial will allow you to create your first **OVHcloud AI notebook** based on a very simple Machine Learning model: the **simple linear regression**.

At the end of this tutorial, you will have learned to master **OVHcloud AI Notebooks** and be able to predict the scores obtained by students as a function of the number of hours worked.

> [!primary]
>
> We will be able to predict a student's exam score based on the amount of time he has studied using a dataset available on [Kaggle](https://www.kaggle.com/): [Students Score Dataset](https://www.kaggle.com/datasets/shubham47/students-score-dataset-linear-regression).
>

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/es/public-cloud/) in your OVHcloud account
- A user for AI Notebooks

## Instructions

You can launch your notebook from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) or via the ovhai [CLI](https://docs.ovh.com/us/es/publiccloud/ai/cli/getting-started-cli/).

### Launching a Jupyter notebook with "Miniconda" via UI

To launch your notebook from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), refer to the following steps.

#### Code editor

Choose the `Jupyterlab` code editor.

#### Framework

In this tutorial, the `Miniconda` framework is used.

> [!warning]
>
> With **Miniconda**, you will be able to set up your environment by installing the Python libraries you need.
>

You can choose the `conda` version you want.

> [!primary]
>
> The default version of `conda` is functional for this tutorial.
>

#### Resources

You can choose the number of CPUs or GPUs you want.

> [!primary]
>
> Here, using `1 CPU` is sufficient.
>

### Launching a Jupyter notebook with "Miniconda" via CLI

If you want to launch it with the CLI, choose the `jupyterlab` editor and the `conda` framework.

To access the different versions of `conda` available, run the following command.

``` {.console}
ovhai capabilities framework list -o yaml
```

> [!primary]
>
> If you do not specify a version, your notebook starts with the default version of `conda`.
>

Choose the number of CPUs (`<nb-cpus>`) to use in your notebook and use the following command.

``` {.console}
ovhai notebook run conda jupyterlab \
	--name <notebook-name> \
	--framework-version <conda-version> \
  	--cpu <nb-cpus>
```

You can then reach your notebook’s URL once the notebook is running.

### Accessing the notebook

Once the repository has been cloned, find your notebook by following this path: `ai-training-examples` > `notebooks` > `getting-started` > `miniconda` > ` ai-notebooks-introduction` > `notebook-introduction-linear-regression.ipynb`.

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/getting-started/miniconda/ai-notebooks-introduction/notebook-introduction-linear-regression.ipynb).

## Go further

- If you want to learn more about the field of **Computer vision** and **Image Classification**, check out this [notebook](https://docs.ovh.com/us/es/publiccloud/ai/notebooks/tuto-transfer-learning-resnet/).
- If you are interested in **NLP** (Natural Language Processing), familiarise yourself with speech to text by following this [tutorial](https://docs.ovh.com/us/es/publiccloud/ai/notebooks/tuto-speech-to-text-recognition/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
