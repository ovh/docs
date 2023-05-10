---
title: AI Notebooks - Tutorial - Brain tumor segmentation using U-Net
slug: notebooks/tuto-image-segmentation-unet-tumors
excerpt: Implementing a Convolutional Neural Network for Brain Tumor Segmentation in Medical Imaging
section: AI Notebooks - Tutorials
order: 12
updated: 2023-05-10
---

**Last updated 10th May, 2023.**

## Objective

Over the past few years, the field of **computer vision** has experienced a significant growth. It encompasses a wide range of methods for acquiring, processing, analyzing and understanding digital images.

Among these methods, one is called **image segmentation**.

The purpose of this tutorial is to show you how it is possible to build and train a brain tumor segmentation model with **OVHcloud AI Notebooks**. You will be able to learn the concepts of medical imaging, image segmentation, model evaluation, and much more. We will use a popular convolutional neural network named **U-Net**.

At the end of this tutorial, you will have learnt the principal methods to **segment brain tumors**.

![image](images/mri_orig_pred_segmentation.gif){.thumbnail}

> [!primary]
>
> We will train this model on the *[BraTS2020 dataset](http://braintumorsegmentation.org/)*. We will show you how you can easily download the dataset in the notebook tutorial.
>

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
- A user for AI Notebooks
- A [Kaggle](https://www.kaggle.com/) account to download the dataset

## Instructions

You can launch the notebook from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) or via the ovhai [CLI](https://docs.ovh.com/ca/en/publiccloud/ai/cli/getting-started-cli/).

Direct link to the full code can be found [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-segmentation/tensorflow/brain-tumor-segmentation-unet/notebook_image_segmentation_unet.ipynb).

### Launching a Jupyter notebook with "Tensorflow" via UI (Control Panel)

To launch your notebook from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca), refer to the following steps.

#### Code editor

Choose the `Jupyterlab` code editor.

#### Framework

In this tutorial, the `tensorflow` framework is used. If you use another environment, there may be some compatibility problems such as missing libraries.

#### Resources

Using GPUs is recommended because medical imaging is a training intensive task.

> [!primary]
>
> Here, using `1 GPU` is sufficient.
>

### Launching a Jupyter notebook with "Tensorflow" via CLI

*If you do not use our CLI yet, follow [this guide](https://docs.ovh.com/ca/en/publiccloud/ai/cli/install-client/) to install it.*

If you want to launch your notebook with the OVHcloud AI CLI, choose the `jupyterlab` editor and the `tensorflow` framework.

To access the different versions of `tensorflow` available, run the following command:

```console
ovhai capabilities framework list -o yaml
```

> [!primary]
>
> If you do not specify a version, your notebook starts with the default version of `tensorflow`.
>

You will also need to choose the number of CPUs/GPUs (`<nb-cpus>` or `<nb-gpus>`) to use in your notebook.

> [!primary]
>
> Here we recommend using `1 GPU`.
>

To launch your notebook, run the following command:

```console
ovhai notebook run tensorflow jupyterlab \
		--name <notebook-name> \
		--framework-version <tensorflow-version> \
  	    --gpu <nb-gpus>
```

You can then reach your notebook’s URL once the notebook is running.

### Accessing the notebooks

Once our [AI examples repository](https://github.com/ovh/ai-training-examples/) has been cloned in your environment, find your notebook by following this path: `ai-training-examples` > `notebooks` > `computer-vision` > `image-segmentation` > `tensorflow` > `brain-tumor-segmentation-unet` > `notebook_image_segmentation_unet.ipynb`.

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-segmentation/tensorflow/brain-tumor-segmentation-unet/notebook_image_segmentation_unet.ipynb).

## Go further

There are many other tasks that exist in the computer vision field. Check our other tutorials to learn how to:

- [Use Transfer Learning with ResNet50 for image classification](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/resnet50/notebook-resnet-transfer-learning-image-classification.ipynb)

- [Train YOLOv7 for American Sign Language recognition](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/object-detection/miniconda/yolov7/notebook_object_detection_yolov7_asl.ipynb)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
