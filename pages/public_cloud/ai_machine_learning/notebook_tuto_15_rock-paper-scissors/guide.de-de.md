---
title: AI Notebooks - Tutorial - Train YOLOv8 to play rock paper scissors (EN)
excerpt: How to train the YOLOv8 model on a custom dataset with AI Notebooks
updated: 2023-10-19
---

## Objective

The purpose of this tutorial is to show how to train YOLOv8 to play the game "rock paper scissors".

YOLOv8 is an object detection algorithm. Although closely related to image classification, object detection performs image classification on a more precise scale. Object detection locates and categorizes features in images.

It is based on the YOLOv8 open source [repository](https://github.com/ultralytics/ultralytics).

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/de/public-cloud/) in your OVHcloud account
- A user for AI Notebooks
- A [Public Roboflow](https://public.roboflow.com/) account to access and download the [Rock Paper Scissors Dataset](https://universe.roboflow.com/roboflow-58fyf/rock-paper-scissors-sxsw)

## Instructions

This tutorial is based on the [Rock Paper Scissors SXSW Computer Vision Project Dataset](https://universe.roboflow.com/roboflow-58fyf/rock-paper-scissors-sxsw). It is available for free on [Roboflow](https://public.roboflow.com/).

> [!primary]
>
> To learn more about the license of this dataset, please follow this [link](https://creativecommons.org/publicdomain/zero/1.0/).
>

### Create Object Storage containers

If you want to create it from the [OVHcloud Control Panel](/links/manager), go to the Object Storage section and create a new object container by clicking `Object Storage` > `Create an object container`.

![image](images/new-object-container.png){.thumbnail}

If you want to run it with the CLI, just follow this [guide](/pages/public_cloud/ai_machine_learning/cli_17_how_to_cli_data_notebooks). You have to choose the region, the name of your container and the path where your data is located and use the following commands.

> [!warning]
>
> In this tutorial, you have to create 2 object containers.
>

- An object container `rock-paper-scissors-data` dedicated to the dataset:

```bash
ovhai bucket create <region> rock-paper-scissors-data
```

- An object container `rock-paper-scissors-model` to save the model weights (for a future inference for example):

```bash
ovhai bucket create <region> rock-paper-scissors-model
```

> [!warning]
>
> These two Object Storage containers will be empty initially. You will add data from the notebook.
>

### Launch and access Jupyter notebook with Miniconda framework

You need to attach a volume if your data is in your OVHcloud Object Storage and you want to use it during your experiment, or if you need to save the results of your work in the Object Storage. For more information on data, volumes and permissions, see [our guide on data](/pages/public_cloud/ai_machine_learning/cli_17_how_to_cli_data_notebooks).

If you want to launch it from the [OVHcloud Control Panel](/links/manager), just follow this [guide](/pages/public_cloud/ai_machine_learning/notebook_guide_introduction_definition).

1. `Name your notebook`
2. `Choose Jupyterlab editor`
3. `Select the Miniconda framework`
4. `Choose the access type`
5. `Select the datacenter location`
6. `Choose the number of GPUs or CPUs you need`
7. `Attach your two containers`
8. `Attach public SSH keys only if you want to`
9. `Check that everything is ok and launch your notebook`

Once the repository has been cloned, find the YOLOv8 notebook by following this path: `ai-training-examples` > `notebooks` > `computer-vision` > `object-detection` > `miniconda` > `yolov8` > `notebook_object_detection_yolov8_rock-paper-scissors.ipynb`.

If you want to launch it with the CLI, choose the [volumes](/pages/public_cloud/ai_machine_learning/cli_17_how_to_cli_data_notebooks) you want to attach and the number of GPUs (`<nb-gpus>`) to use on your notebook and use the following command:

```bash
ovhai notebook run conda jupyterlab \
	--name <name> \
	--gpu <nb-gpus> \
	--volume rock-paper-scissors-data@<region>/:/workspace/data:RW \
	--volume rock-paper-scissors-model@<region>/:/workspace/model:RW
```

> [!primary]
>
> For this tutorial, we advise you to use at least **1 GPU**.
>

You can then reach your notebook’s URL once it is running.

### Experimenting with the YOLOv8 notebook

You are now able to train the YOLOv8 model to play the rock paper scissors game.

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/object-detection/miniconda/yolov8/notebook_object_detection_yolov8_rock-paper-scissors.ipynb).

### Go further

- Do you want to observe the evolution of your metrics during the training of your model? Click [here](/pages/public_cloud/ai_machine_learning/notebook_tuto_03_weight_biases).
- Do you want to train your YOLOv8 model? [Here it is](/pages/public_cloud/ai_machine_learning/training_tuto_09_train_rock-paper-scissors).
- Do you want to use your YOLOv8 model in an app? [Here it is](/pages/public_cloud/ai_machine_learning/deploy_tuto_15_rock_paper_scissors).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/de/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)
