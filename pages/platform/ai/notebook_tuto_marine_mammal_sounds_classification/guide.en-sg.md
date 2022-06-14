---
title: AI Notebooks - Tutorial - Audio analysis and classification with AI
slug: notebooks/tuto-marine-mammal-sounds-classification
excerpt: How to classify sounds with AI
section: AI Notebooks tutorials
order: 6
---

**Last updated 6th April, 2022.**

## Objective

The purpose of this tutorial is to show how it is possible to train a model in oder to classify sounds. To do this, we take as an example a dataset of **marine mammals sounds**.

![image](images/marine-mammals-categories.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg);
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/en-sg/public-cloud/) in your OVHcloud account;
- A user for AI Notebooks
- Your own dataset

## Instructions

### Uploading your dataset on Public Cloud Storage

If you want to upload it from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), go to the Object Storage section and create a new object container by clicking `Object Storage`{.action} > `Create an object container`{.action}.

![image](images/new-object-container.png){.thumbnail}

If you want to run it with the CLI, just follow this [this guide](https://docs.ovh.com/sg/en/publiccloud/ai/cli/access-object-storage-data/). You have to choose the region, the name of your container and the path where your data is located and use the following command:

```bash
ovhai data upload <region> <container> <paths>
```

> [!primary]
>
> This tutorial has been realized with the [Best of Watkins Marine Mammal Sound Database](https://cis.whoi.edu/science/B/whalesounds/index.cfm). If you don't have your own dataset, you can use it by downloading the dataset on [Kaggle](https://www.kaggle.com/shreyj1729/best-of-watkins-marine-mammal-sound-database/version/3).
>

### Launching and accessing Jupyter notebook with "One image to rule them all" framework

> [!warning]
>
> Although this tutorial is based on the use of the **TensorFlow** image, we advise you to use this image: **One image to rule them all**. This will help you avoid errors when installing libraries such as Librosa or SoundFile, Python audio libraries.
>

You need to attach a volume if your data is in your OVHcloud Object Storage and you want to use it during your experiment. For more information on data, volumes and permissions, see [our guide on data](https://docs.ovh.com/sg/en/publiccloud/ai/cli/access-object-storage-data/).

If you want to launch it from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), just follow this [guide](https://docs.ovh.com/sg/en/publiccloud/ai/cli/getting-started-cli/).

`Choose the same region as your object container` > `"One image to rule them all" framework` > `Attach Object Storage containers (the one that contains your dataset)`

If you want to launch it with the CLI, choose the [volume](https://docs.ovh.com/sg/en/publiccloud/ai/cli/access-object-storage-data/) you want to attach and the number of GPUs (`<nb-gpus>`) to use on your notebook and use the following command:

```bash
ovhai notebook run one-for-all jupyterlab \
  --name <notebook-name> \
  --gpu <nb-gpus>
  --volume <container@region/prefix:mount_path:permission>
```

You can then reach your notebook’s URL once the notebook is Running.

### Cloning the GitHub repository

The GitHub repository containing all examples for OVHcloud AI NOTEBOOKS is available [here](https://github.com/ovh/ai-training-examples).

Inside your notebook, open a new Terminal tab by clicking `File`{.action} > `New`{.action} > `Terminal`{.action}.

![image](images/new-terminal.png){.thumbnail}

Run the following command in the notebook’s terminal to clone the repository:

```bash
git clone https://github.com/ovh/ai-training-examples.git
```

Once the repository has been cloned, find your notebook by following this path: `ai-training-examples` > `notebooks` > `tensorflow` > `tuto` > `notebook_marine_sound_classification`.

### Experimenting classification sound notebook

Once your dataset is ready and uploaded, you are able to train the model!

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/tensorflow/tuto/notebook-marine-sound-classification.ipynb).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
