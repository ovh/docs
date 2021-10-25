---
title: Weights & Biases integration in notebooks
slug: weights-and-biases
excerpt: How to use wandb in notebooks  
section: Tutorials
order: 6
---

**Last updated 4th of October, 2021.**

## Objective

The purpose of this tutorial is to show how it is possible to use Weights & Biases with AI Training.

This tutorial presents two examples of using Weights & Biases. The first notebook will use the Tensorflow and the second Pytorch docker image.

## Requirements

-   access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
-   an AI Training project created inside a Public Cloud project
-   a user for AI Training
-   a Weights & Biases account, you can create it on their [website](https://wandb.ai/site).

## Instructions

### Launch and access Jupyter notebook

If you want to launch it from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), just follow this [guide](../start-use-notebooks) and select the docker image of your choice.

If you want to launch it with the CLI, just choose the number of GPUs (`<nb-gpus>`) to use on your job and use the following command:

-   Tensorflow image docker:

``` {.bash}
ovhai job run ovhcom/ai-training-tensorflow:2.3.0 --gpu <nb-gpus>
```

-   Pytorch image docker:

``` {.bash}
ovhai job run ovhcom/ai-training-pytorch:1.8.1 --gpu <nb-gpus>
```

You can then reach your notebook's URL once the job is Running.

### Clone the GitHub repository

The GitHub repository containing all examples for OVHcloud AI TRAINING is available [here](https://github.com/ovh/ai-training-examples).

Inside your notebook, open a new Terminal tab by clicking `File` > `New` > `Terminal`.

![image](images/new-terminal.png){.thumbnail}

Run the following command in the notebook's terminal to clone the repository:

``` {.bash}
git clone https://github.com/ovh/ai-training-examples.git
```

### Experiment with examples notebooks

Once the repository has been cloned, find the notebook of your choice.

-   The notebook using Tensorflow and Weights & Biases is based on the MNIST dataset. To access it, follow this path:

`ai-training-examples` > `notebooks` > `tensorflow` > `tuto` > `notebook_Weights_and_Biases_MNIST.ipynb`

-   The notebook using Pytorch and Weights & Biases is based on YOLOv5 and the COCO dataset. To access it, follow this path:

`ai-training-examples` > `notebooks` > `pytorch` > `tuto` > `notebook_Weights_and_Biases_yolov5.ipynb`

#### Notebook using Tensorflow and Weights & Biases is based on the MNIST dataset

The aim of this tutorial is to show how it is possible, thanks to Weights & Biases, to compare the results of trainings according to the chosen hyperparameters. Accuracy and loss will be displayed for both train and valid data during each training. The error rate will also be calculated using Weights & Biases.

A preview of this notebook can be found on [GitHub](https://github.com/ovh/ai-training-examples/blob/main/notebooks/tensorflow/tuto/notebook_Weights_and_Biases_MNIST.ipynb).

#### Notebook using Pytorch and Weights & Biases is based on YOLOv5 and the COCO dataset

The aim of this tutorial is to show how Weights & Biases can be used with the YOLOv5 real-time object detection framework. In order to achieve this, the YOLOv5 s, m, l and x models performance will be compared on the COCO dataset for the same number of epochs.

A preview of this notebook can be found on [GitHub](https://github.com/ovh/ai-training-examples/blob/main/notebooks/pytorch/tuto/notebook_Weights_and_Biases_yolov5.ipynb).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
