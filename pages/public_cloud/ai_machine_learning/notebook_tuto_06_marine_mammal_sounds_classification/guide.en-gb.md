---
title: AI Notebooks - Tutorial - Audio analysis and classification with AI
excerpt: How to classify sounds with AI
updated: 2023-05-11
---

## Objective

The purpose of this tutorial is to show how it is possible to train a model in oder to classify sounds. To do this, we take as an example a dataset of **marine mammals sounds**.

![image](images/marine-mammals-categories.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- A user for AI Notebooks
- Two [Object Storage containers](/pages/storage_and_backup/object_storage/pcs_create_container) to store the data and the model
- Your own dataset

## Instructions

### Uploading your dataset on Public Cloud Storage

If you want to upload it from the [OVHcloud Control Panel](/links/manager), go to the Object Storage section and [create a new object container](/pages/storage_and_backup/object_storage/pcs_create_container) by clicking `Object Storage`{.action} > `Create an object container`{.action}.

![image](images/new-object-container.png){.thumbnail}

> [!primary]
>
> In the OVHcloud Control Panel, you can upload files but not folders. For instance, you can upload a .zip file to optimize the bandwidth, then unzip it later when accessing it through your JupyterLab.
> You can also use the OVHcloud AI CLI to upload files and folders (and be more stable than through your browser).
>

If you want to run it with the CLI, just follow this [this guide](/pages/public_cloud/ai_machine_learning/cli_17_how_to_cli_data_notebooks). You have to choose the region, the name of your container and the path where your data is located and use the following command:

```bash
ovhai bucket object upload <container>@<region> <paths>
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

You need to attach a volume if your data is in your OVHcloud Object Storage and you want to use it during your experiment. For more information on data, volumes and permissions, see [our guide on data](/pages/public_cloud/ai_machine_learning/cli_17_how_to_cli_data_notebooks).

To be able to use the source code below in this article you have to create 2 Object Storage containers and a git repository mounted as follows:

 - mount point name: `/workspace/data`, permissions: `read & write`
 - mount point name: `/workspace/saved_model`, permissions: `read & write`
 - mount point name: `/workspace/ai-training-examples`, permissions: `read & write`, Git URL: `https://github.com/ovh/ai-training-examples.git`

`Choose the same region as your object container` > `"One image to rule them all" framework` > `Attach Object Storage containers (the one that contains your dataset)`

If you want to launch it with the CLI, choose the [volume](/pages/public_cloud/ai_machine_learning/cli_17_how_to_cli_data_notebooks) you want to attach and the number of GPUs (`<nb-gpus>`) to use on your notebook and use the following command:

```bash
ovhai notebook run one-for-all jupyterlab \
  --name <notebook-name> \
  --gpu <nb-gpus> \
  --volume <container@region/prefix:mount_path:permission>
```

For example:
```bash
ovhai notebook run one-for-all jupyterlab \
  --name marine-mammal-sounds-classification \
  --gpu 1 \
  --volume marine-mammal-sounds@GRA/:/workspace/data:RW:cache \
  --volume marine-mammal-model@GRA/:/workspace/saved_model:RW:cache \
  --volume https://github.com/ovh/ai-training-examples.git:/workspace/ai-training-examples:RW
```

You can then reach your notebook’s URL once the notebook is running.

Find the notebook by following this path: `ai-training-examples` > `notebooks` > `audio` > `audio-classification` > `notebook-marine-sound-classification.ipynb`.

### Experimenting classification sound notebook

Once your dataset is ready and uploaded, you are able to train the model!

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/audio/audio-classification/notebook-marine-sound-classification.ipynb).

## Go further

- If you want to train your model, please check out this [AI Training tutorial](/pages/public_cloud/ai_machine_learning/training_tuto_08_train_marine_mammal_sound).
- If you want to deploy a **Streamlit** app in order to classify marine mammal sounds using your model, please check out this [notebook](/pages/public_cloud/ai_machine_learning/deploy_tuto_03_streamlit_sounds_classification).
- You can also compare two methods for audio classification task by following this [tutorial](/pages/public_cloud/ai_machine_learning/training_tuto_06_models_comparaison_weights_and_biases).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)
