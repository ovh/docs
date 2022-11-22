---
title: AI Notebooks - Tutorial - Build your spam classifier
slug: notebooks/tuto-spam-classifier
excerpt: How to build your Spam classifier thanks to Machine Learning
section: AI Notebooks - Tutorials
order: 09
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/notebooks/tuto-spam-classifier/'
---

**Last updated 22nd November, 2022.**

## Objective

This tutorial will show you how to build a simple spam classifier with **OVHcloud AI Notebooks**. You will be able to learn the concepts of logistic regression, dimension reduction, stop words, quantiles and much more. A very simple Machine Learning model will be used: the **logistic regression**.

At the end of this tutorial, you will have learnt the principal methods to build your own **spam classifier**.

![image](images/spam-classifier.png){.thumbnail}

> [!primary]
>
> We will be able to create this model with the dataset named **SMSSPamCollection**. Find it on the SMS Spam Collection Dataset [link](https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection).
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
> Here, using `4 CPU` is sufficient.
>

### Launching a Jupyter notebook with "Miniconda" via CLI

If you want to launch it with the CLI, choose the `jupyterlab` editor and the `conda` framework.

To access the different versions of `conda` available, run the following command.

```console
ovhai capabilities framework list -o yaml
```

> [!primary]
>
> If you do not specify a version, your notebook starts with the default version of `conda`.
>

Choose the number of CPUs (`<nb-cpus>`) to use in your notebook and use the following command.

```console
ovhai notebook run conda jupyterlab \
	--name <notebook-name> \
	--framework-version <conda-version> \
  --cpu <nb-cpus>
```

You can then reach your notebook’s URL once the notebook is running.

### Accessing the notebook

Once the repository has been cloned, find your notebook by following this path: `ai-training-examples` > `notebooks` > `natural-language-processing` > `text-classification` > `miniconda` > `spam-classifier` > `notebook-spam-classifier.ipynb`.

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/natural-language-processing/text-classification/miniconda/spam-classifier/notebook-spam-classifier.ipynb).

## Go further

- If you are interested in **NLP** (Natural Language Processing), familiarise yourself with speech to text by following this [tutorial](https://docs.ovh.com/us/es/publiccloud/ai/notebooks/tuto-speech-to-text-recognition/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
