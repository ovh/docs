---
title: AI Notebooks - Tutorial - Brain tumor segmentation using U-Net
excerpt: Implementing a Convolutional Neural Network for Brain Tumor Segmentation in Medical Imaging
updated: 2023-05-11
---


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

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
- A user for AI Notebooks
- A [Kaggle](https://www.kaggle.com/) account to download the dataset

## Instructions

You can launch the notebook from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) or via the ovhai [CLI](/pages/public_cloud/ai_machine_learning/cli_11_howto_run_notebook_cli).

Direct link to the full code can be found [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-segmentation/tensorflow/brain-tumor-segmentation-unet/notebook_image_segmentation_unet.ipynb).

### Launching a Jupyter notebook with "Tensorflow" via UI (Control Panel)

To launch your notebook from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca), refer to the following steps.

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

*If you do not use our CLI yet, follow [this guide](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli) to install it.*

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

- [Use Transfer Learning with ResNet50 for image classification](/pages/public_cloud/ai_machine_learning/notebook_tuto_07_transfer_learning_resnet50_image_classification)

- [Train YOLOv7 for American Sign Language recognition](/pages/public_cloud/ai_machine_learning/notebook_tuto_11_yolov7)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
