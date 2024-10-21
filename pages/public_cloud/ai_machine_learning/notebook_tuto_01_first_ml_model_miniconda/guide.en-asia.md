---
title: AI Notebooks - Tutorial - Create your first Machine Learning model
excerpt: How to build your first Machine Learning model thanks to Miniconda
updated: 2022-09-01
---

## Objective

This tutorial will allow you to create your first **OVHcloud AI notebook** based on a very simple Machine Learning model: the **simple linear regression**.

At the end of this tutorial, you will have learned to master **OVHcloud AI Notebooks** and be able to predict the scores obtained by students as a function of the number of hours worked.

> [!primary]
>
> We will be able to predict a student's exam score based on the amount of time he has studied using a dataset available on [Kaggle](https://www.kaggle.com/): [Students Score Dataset](https://www.kaggle.com/datasets/shubham47/students-score-dataset-linear-regression).
>

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account
- A user for AI Notebooks

## Instructions

You can launch your notebook from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) or via the ovhai [CLI](/pages/public_cloud/ai_machine_learning/cli_11_howto_run_notebook_cli).

### Launching a Jupyter notebook with "Miniconda" via UI

To launch your notebook from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), refer to the following steps.

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

- If you want to learn more about the field of **Computer vision** and **Image Classification**, check out this [notebook](/pages/public_cloud/ai_machine_learning/notebook_tuto_07_transfer_learning_resnet50_image_classification).
- If you are interested in **NLP** (Natural Language Processing), familiarise yourself with speech to text by following this [tutorial](/pages/public_cloud/ai_machine_learning/notebook_tuto_08_speech_to_text).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/asia/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
