---
title: AI Training - Tutorial - Use tensorboard inside a job
slug: training/tuto-tensorboard-inside-job
excerpt: How to use a tensorboard inside an AI Training Job
section: AI Training - Tutorials
order: 04
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/training/tuto-tensorboard-inside-job/'
---

**Last updated 1st September, 2022.**

## Objective

The purpose of this tutorial is to show how it is possible to launch a [TensorBoard](https://www.tensorflow.org/tensorboard?hl=fr) with `AI Training`.

TensorBoard is a tool made by TensorFlow, for providing the measurements and visualizations needed during the machine learning workflow. It enables tracking experiment metrics like loss and accuracy, visualizing the model graph, projecting embeddings to a lower dimensional space, and much more.

TensorBoard provides a visual interface :

![image](images/overview_tensorboard.png){.thumbnail}

The tutorial presents a simple example of launching **TensorBoard** in a job.

## Requirements

- a working `ovhai` CLI [how to install ovhai CLI](https://docs.ovh.com/us/es/publiccloud/ai/cli/install-client)

## Instructions

### Have an object store container where your metric logs are saved

First of all, you must have trained your model and saved your results in an object store container (exemple: `my_tf_metrics` located in Gravelines `GRA`).

Alternatively, you can have a job already `RUNNING` that is plugged with that object store container and is writting metric logs inside it (exemple: `my_tf_metrics@GRA:/runs:RW:cache`). In that last case, don't forget the `cache` parameter indicating that the volume is cached and sharable among jobs. More information about volumes configuration in jobs can be found [here](https://docs.ovh.com/us/es/publiccloud/ai/cli/run-job-cli/#attaching-volumes), information about volume caching can be found [here](https://docs.ovh.com/us/es/publiccloud/ai/data/#capabilities).

> [!primary]
>
> If you want to see an example of how to use **TensorBoard** to train a model, please refer to this notebook on [GitHub](https://github.com/ovh/ai-training-examples/blob/main/notebooks/tensorflow/tuto/notebook_tutorial_tensorboard.ipynb).

### Launch TensorBoard in a job

To launch TensorBoard in a job, you need to access the ovhai CLI and run this command:

``` {.console}
ovhai job run tensorflow/tensorflow \
    --cpu 1 \
    --default-http-port 6006 \
    --volume my_tf_metrics@GRA:/runs:RO:cache \
    -- tensorboard --logdir=/runs --bind_all
```

First, set the number of CPUs. For this type of job you don't necessarily need a lot of resources.

> [!primary]
>
> `--cpu 1` indicates that you request 1 CPU for that job.

The default port for TensorBoard is 6006.

> [!primary]
>
> `--default-http-port 6006` indicates that the port to reach on the job url is the `6006`.

Connect the volume containing your tensorboard metric logs.

> [!primary]
>
> `--volume my_tf_metrics@GRA:/runs:RO:cache` indicates that you are connecting the container `my_tf_metrics` from Gravelines (**GRA**) Object Store into the `/runs` directory of your job. The **read only** `RO` permission is enough because TensorBoard does not need access on write. The container `my_tf_metrics@GRA` should contain your tensorflow metrics.

Specify the tensorboard launch command.

> [!primary]
>
> `tensorboard --logdir=/runs --bind_all` indicates that we want tensoboard to be watching over the `/runs` directory. Don't forget the `--bind_all` parameter or you won't be able to access your tensorboard from the public network.

> [!primary]
>
> Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.

Once the job is running you can access your TensorBoard directly from the job's url.

## Go further

- Check how to run Tensorflow code with GPUs [here](https://docs.ovh.com/us/es/publiccloud/ai/training/tensorflow-gpu-examples/).
- You can compare AI models based on resource consumption, accuracy and training time. Refer to this [tutorial](https://docs.ovh.com/us/es/publiccloud/ai/training/tuto-models-comparaison-weights-and-biases/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
