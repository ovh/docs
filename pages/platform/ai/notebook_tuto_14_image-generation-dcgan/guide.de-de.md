---
title: AI Notebooks - Tutorial - Create and train an image generation model
excerpt: Get started with Generative Adversarial Networks (GANs) to generate synthetic images
updated: 2023-08-04
---

## Objective

Over the past few years, the field of **computer vision** has experienced a significant growth. It encompasses a wide range of methods for acquiring, processing, analyzing and understanding digital images. 

Among these methods, one is called **image generation**. 

The purpose of this tutorial is to show you how it is possible to build and train an image generation model with **OVHcloud AI Notebooks**. We will use a popular convolutional GAN named **DCGAN**.

At the end of this tutorial, you will have learnt the concepts of generative models, model evaluation, and how to generate your own images by training a DCGAN on your dataset.

![DCGAN training animation](images/dcgan_training_animation.gif){.thumbnail}

> [!primary]
>
> We will train the DCGAN on the *[Chest X-Ray dataset](https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia)*. We will show you how you can easily download the dataset in the notebook tutorial.
>

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/de/public-cloud/) in your OVHcloud account
- A user for AI Notebooks
- A [Kaggle](https://www.kaggle.com/) account to download the dataset

## Instructions

You can launch the notebook from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) or via the ovhai [CLI](/pages/platform/ai/cli_11_howto_run_notebook_cli).

### Launching a Jupyter notebook with "Conda" via UI (Control Panel)

To launch your notebook from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), refer to the following steps.

#### Code editor

Choose the `Jupyterlab` code editor.

#### Framework

In this tutorial, the `conda` framework is used.

#### Resources

Using GPUs is recommended because manipulating images is a training intensive task.

> [!primary]
>
> Here, using `1 GPU` is sufficient.
>

### Launching a Jupyter notebook with "conda" via CLI

*If you do not use our CLI yet, follow [this guide](/pages/platform/ai/cli_10_howto_install_cli) to install it.*

If you want to launch your notebook with the OVHcloud AI CLI, choose the `jupyterlab` editor and the `conda` framework.

To access the different versions of `conda` available, run the following command:

```console
ovhai capabilities framework get conda -o yaml
```

> [!primary]
>
> If you do not specify a version, your notebook starts with the default version of `conda`.
>

You will also need to choose the number of GPUs to use in your notebook using `<nb-gpus>`.

To launch your notebook, run the following command: 

```console
ovhai notebook run conda jupyterlab \
		--name <notebook-name> \
		--framework-version <conda-version> \
		--gpu <nb-gpus>

```

You can then reach your notebook’s URL once the notebook is running.

### Accessing the notebooks

Once our [AI examples repository](https://github.com/ovh/ai-training-examples/) has been cloned in your environment, find the fine-tuning notebook tutorial by following this path: `ai-training-examples` > `notebooks` > `computer-vision` > `image-generation` > `miniconda` > `dcgan-image-generation` > `notebook_chest_image_generation_dcgan.ipynb`.

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-generation/miniconda/dcgan-image-generation/notebook_chest_image_generation_dcgan.ipynb).

## Go further

There are many other tasks that exist in the computer vision field. Check our other tutorials to learn how to:

- [Perform Brain tumor segmentation using U-Net](/pages/platform/ai/notebook_tuto_12_image-segmentation-unet-tumors) 

- [Use Transfer Learning with ResNet50 for image classification](/pages/platform/ai/notebook_tuto_07_transfer_learning_resnet50_image_classification)

- [Train YOLOv7 for American Sign Language recognition](/pages/platform/ai/notebook_tuto_11_yolov7)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/de/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
