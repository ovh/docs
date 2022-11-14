---
title: AI Notebooks - Tutorial - Audio analysis and classification with AI
slug: notebooks/tuto-marine-mammal-sounds-classification
excerpt: How to classify sounds with AI
section: AI Notebooks - Tutorials
order: 06
---

**Last updated 1st September, 2022.**

## Objective

The purpose of this tutorial is to show how it is possible to train a model in oder to classify sounds. To do this, we take as an example a dataset of **marine mammals sounds**.

![image](images/marine-mammals-categories.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account
- A user for AI Notebooks
- Two [Object Storage containers](https://docs.ovh.com/asia/en/storage/pcs/create-container/) to store the data and the model
- Your own dataset

## Instructions

### Uploading your dataset on Public Cloud Storage

If you want to upload it from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), go to the Object Storage section and [create a new object container](https://docs.ovh.com/asia/en/storage/pcs/create-container/) by clicking `Object Storage`{.action} > `Create an object container`{.action}.

![image](images/new-object-container.png){.thumbnail}

> [!primary]
>
> In the OVHcloud Control Panel, you can upload files but not folders. For instance, you can upload a .zip file to optimize the bandwidth, then unzip it later when accessing it through your JupyterLab.
> You can also use the OVHcloud AI CLI to upload files and folders (and be more stable than through your browser).
>

If you want to run it with the CLI, just follow this [this guide](https://docs.ovh.com/asia/en/publiccloud/ai/cli/access-object-storage-data/). You have to choose the region, the name of your container and the path where your data is located and use the following command:

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

You need to attach a volume if your data is in your OVHcloud Object Storage and you want to use it during your experiment. For more information on data, volumes and permissions, see [our guide on data](https://docs.ovh.com/asia/en/publiccloud/ai/cli/access-object-storage-data/).

To be able to use the source code below in this article you have to create 2 Object Storage containers mounted as follows:

 - mount point name: `/workspace/data`, permissions: `read & write`
 - mount point name: `/workspace/saved_model`, permissions: `read & write`

`Choose the same region as your object container` > `"One image to rule them all" framework` > `Attach Object Storage containers (the one that contains your dataset)`

If you want to launch it with the CLI, choose the [volume](https://docs.ovh.com/asia/en/publiccloud/ai/cli/access-object-storage-data/) you want to attach and the number of GPUs (`<nb-gpus>`) to use on your notebook and use the following command:

```bash
ovhai notebook run one-for-all jupyterlab \
  --name <notebook-name> \
  --gpu <nb-gpus>
  --volume <container@region/prefix:mount_path:permission>
```

You can then reach your notebook’s URL once the notebook is running.

Find the notebook by following this path: `ai-training-examples` > `notebooks` > `audio` > `audio-classification` > `notebook-marine-sound-classification.ipynb`.

### Experimenting classification sound notebook

Once your dataset is ready and uploaded, you are able to train the model!

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/audio/audio-classification/notebook-marine-sound-classification.ipynb).

## Go further

- If you want to deploy a **Streamlit** app in order to classify marine mammal sounds using your model, please check out this [notebook](https://docs.ovh.com/asia/en/publiccloud/ai/deploy/tuto-streamlit-sounds-classification/).
- You can also compare two methods for audio classification task by following this [tutorial](https://docs.ovh.com/asia/en/publiccloud/ai/training/tuto-models-comparaison-weights-and-biases/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
