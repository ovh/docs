---
title: AI Training - Tutorial - Run your first Tensorflow code with GPUs
slug: training/tensorflow-gpu-examples
excerpt: Example on how to use Tensorflow library with GPUs
section: AI Training - Tutorials
order: 03
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/training/tensorflow-gpu-examples/'
---

**Last updated 1st September, 2022.**

## Objective

This tutorial covers the process of starting a new Jupyter notebook and experiment examples on using GPUs with it.

## Requirements

-   access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)
-   an **AI Training project** created inside a **Public Cloud** project
-   a [user for AI Training](https://docs.ovh.com/us/es/publiccloud/ai/users)
-   some knowledge about [Tensorflow](https://www.tensorflow.org/) library

## Launch and access Jupyter notebook with Tensorflow library

If you want to launch it from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), just follow this [guide](https://docs.ovh.com/us/es/publiccloud/ai/training/start-use-notebooks) and select the `Tensorflow 2` docker image.

If you want to launch it with the `CLI`, just choose the number of GPUs (`<nb-gpus>`) to use on jour job and use the following command:

``` {.bash}
ovhai job run ovhcom/ai-training-tensorflow:2.3.0 --gpu <nb-gpus>
```

You can then reach your notebook's URL once the job is `Running`.

## Clone the GitHub example repository

The GitHub repository containing all examples for `OVHcloud AI TRAINING` is available [here](https://github.com/ovh/ai-training-examples).

Inside your notebook, open a new `Terminal` tab by clicking `File` > `New` > `Terminal`.

![image](images/new-terminal.png){.thumbnail}

Run the following command in the notebook's terminal to clone the repository:

``` {.bash}
git clone https://github.com/ovh/ai-training-examples.git
```

## Experiment with examples notebooks

We currently provide the following tutorials for [Tensorflow](https://www.tensorflow.org/) as `ipython notebooks`:

-   **Basic computation using single CPU or GPU**: accessible on `notebooks/tensorflow/tuto/basic_gpu_cpu_benchmark.ipynb`
-   **Basic computation using multiple GPUs**: accessible on `notebooks/tensorflow/tuto/multiple_gpus_computation.ipynb.ipynb`

### Basic computation using a single CPU or GPU

The aim of this tutorial is to do a **very simple tensor computation** with the `Tensorflow` library and to compare performances of running it over CPU versus GPU.

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/getting-started/tensorflow/basic_gpu_cpu_benchmark.ipynb).

### Basic computation using multiple GPUs

The aim of this tutorial is to do a **very simple tensor computation** with the `Tensorflow` library and to compare performances of running it over CPU versus GPU.

A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/getting-started/tensorflow/multiple_gpus_computation.ipynb).

## Go further

- You can compare AI models based on resource consumption, accuracy and training time. Refer to this [tutorial](https://docs.ovh.com/us/es/publiccloud/ai/training/tuto-models-comparaison-weights-and-biases/).
- It is possible to do the same thing with **PyTorch** based on this [notebook](https://github.com/ovh/ai-training-examples/blob/main/notebooks/getting-started/pytorch/multi_gpu_benchmark.ipynb).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
