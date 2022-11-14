---
title: AI Notebooks - Tutorial - Use a pretrained ResNet model for image classification
slug: notebooks/tuto-transfer-learning-resnet
excerpt: How to use an existing model to do Transfer Learning?
section: AI Notebooks - Tutorials
order: 07
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/notebooks/tuto-transfer-learning-resnet/'
---

**Last updated 1st September, 2022.**

## Objective

This tutorial will allow you to use **Transfer Learning** to train an existing model on a custom dataset thanks to **OVHcloud AI Notebooks**.

To show how Transfer Learning can be useful, **ResNet50** will be trained on a custom dataset.

### USE CASE: Flower Classification

> [!primary]
>
> To classify flower images, the **Flower Classification** dataset will be used. It is available on [Kaggle](https://www.kaggle.com/datasets/sauravagarwal/flower-classification).
>

*Contains information from [Flower Classification](https://www.kaggle.com/datasets/sauravagarwal/flower-classification), which is made available here under the [CC0: Public Domain](https://creativecommons.org/publicdomain/zero/1.0/).*

## Definition

### Transfer learning

In Machine Learning, the aim of **Transfer Learning** is to use the knowledge already acquired to solve a completely new, but related problem. In other words, the technique is to transfer the notions learned on a source dataset to be more efficient in the processing of a new target dataset.

For this tutorial, the goal is to do **image classification**. An existing model is used: **ResNet50**.

### ResNet50 model

[ResNet](https://en.wikipedia.org/wiki/Residual_neural_network) is a Residual neural Network structure. It is an innovative neural network created for image classification.

The **ResNet** model architecture allows the training error to be reduced with a deeper network through **connection skip**.

Residual neural networks ignore some connections and make double or triple layer jumps that contain non-linearities (ReLU).

![image](images/resnet.png){.thumbnail}

With this method, performance is generally improved.

ResNet has many variants that work on the same concept but have different numbers of layers. **Resnet50** is used to refer to the variant that can work with fifty neural network layers. It was trained on more than a million images from the [ImageNet database](https://www.image-net.org/).

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/es-es/public-cloud/) in your OVHcloud account
- A [user](https://docs.ovh.com/es/publiccloud/ai/users/) for AI Notebooks

## Instructions

First, you have to create 2 object containers in your OVHcloud **Object Storage**.

- The first one contains the non-pre-processed data (base images).
- The second object container is empty. It is intended to receive the data once processed and split for training.

> [!primary]
>
> To know more about how to **push your data to Object Storage**, please refer to the dedicated [documentation](https://docs.ovh.com/es/publiccloud/ai/cli/data-cli/).
>

Then, you can launch your notebook from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) or via the ovhai [CLI](https://docs.ovh.com/es/publiccloud/ai/cli/getting-started-cli/).

### Launching a Jupyter notebook with "Miniconda" via UI

To launch your notebook from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), refer to the following steps.

#### Code editor

Choose the `Jupyterlab` code editor.

#### Framework

In this tutorial, the `TensorFlow` framework is used.

For this tutorial, you can use the following TensorFlow framework version: `tf2.4-py38-cuda11.0-v22-4`.

#### Resources

You can choose the number of CPUs or GPUs you want.

> [!primary]
>
> Here, using `1 GPU` is sufficient.
>

#### Attach a Git container or repository

<ol start="1">
   <li>Attach the object container (from the Object Storage) that contains your <strong>dataset</strong> for image classification.</li>
</ol>

- Mount directory: `/workspace/data`
- Permission: `read only` (RO)

<ol start="2">
   <li>Attach an empty object container to store your <strong>data</strong>, once it has been <strong>processed</strong> and <strong>split</strong> for training, validation and test.</li>
</ol>

- Mount directory: `/workspace/data-split`
- Permission: `read write` (RW)

<ol start="3">
   <li>Attach an empty object container to store your <strong>model</strong> after training.</li>
</ol>

- Mount directory: `/workspace/saved_model`
- Permission: `read write` (RW)

> [!primary]
>
> To learn more about how to use and **manage your data in a notebook with UI**, check this [documentation](https://docs.ovh.com/es/publiccloud/ai/notebooks/manage-data-ui/).
>

### Launching a Jupyter notebook with TensorFlow via CLI

If you want to launch it with the CLI, choose the `jupyterlab` editor and the `tensorflow` framework.

For this tutorial, you can use the following TensorFlow framework version: `tf2.4-py38-cuda11.0-v22-4`.

> [!primary]
>
> To know more about how to use and **manage your data in a notebook with the CLI**, refer to this [documentation](https://docs.ovh.com/es/publiccloud/ai/cli/access-object-storage-data/).
>

Choose the number of GPUs (`<nb-gpus>`) to use in your notebook and use the following command.

```console
ovhai notebook run tensorflow jupyterlab \
        --name <notebook-name> \
        --framework-version tf2.4-py38-cuda11.0-v22-4 \
        --volume <my-data>@<region>/:/workspace/data:RO:cache \
        --volume <my-model>@<region>/:/workspace/saved_model:RW \
        --gpu <nb-gpus>
```

You can then reach your notebook’s URL once the notebook is running.

### Accessing the notebook

Once the repository has been cloned, find your notebook by following this path: `ai-training-examples` > `notebooks` > `computer-vision` > `image-classification` > `tensorflow` > `notebook-resnet-transfer-learning-image-classification.ipynb`.

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/notebook-resnet-transfer-learning-image-classification.ipynb).

## Go further

- If you want to deploy a Gradio app for **Image classification** or **Sketch recognition**, check out this [documentation](https://docs.ovh.com/es/publiccloud/ai/deploy/tuto-gradio-sketch-recognition/).
- If you are interested in **Computer Vision**, familiarise yourself with Object Detection by following this [tutorial](https://docs.ovh.com/es/publiccloud/ai/notebooks/yolov5-example/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
