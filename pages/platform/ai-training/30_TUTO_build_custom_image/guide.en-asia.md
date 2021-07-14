---
title: Build & use custom image
slug: build-use-custom-image
excerpt: Explanations on how to build and use your own custom image
section: Tutorials
order: 1
---
*Last updated 10th June, 2021.*

## Objective

This tutorial covers the process of building your own job image for specific needs

## Requirements

-   access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
-   an **AI Training project** created inside a **Public Cloud** project
-   a [user for AI Training](https://docs.ovh.com/asia/en/ai-training/create-user/)
-   [Docker](https://www.docker.com/get-started) installed on your local computer
-   some knowledge about building an image and a [Dockerfile](https://docs.docker.com/engine/reference/builder/)

## Write your own Dockerfile

Create a new file and name it `Dockerfile`

### Choosing a base image

First you need to choose a base image to start from, that base image should have **cuda driver installed on** to be able to use GPUs when running.

> [!primary]
>
> We recommand to choose one from the following lists if you dont want to install cuda drivers yourself.

Here is the list of base images without notebooks that we use :

-   [pytorch/pytorch:1.6.0-cuda10.1-cudnn7-runtime](https://hub.docker.com/r/pytorch/pytorch)
-   [tensorflow/tensorflow:2.3.0-gpu](https://hub.docker.com/r/tensorflow/tensorflow)
-   [transformers/transformers-pytorch-gpu:3.1.0](https://hub.docker.com/r/transformers/transformers)
-   [mxnet/python:1.5.0_gpu_cu101_py3](https://hub.docker.com/r/mxnet/python)
-   [fastdotai/fastai-course:2.0.9](https://hub.docker.com/r/fastdotai/fastai-course)

Here is the list of base images including notebooks (jupyterlab + Visual Studio Code) that we use :

-   [ovhcom/ai-training-pytorch:1.8.1](https://hub.docker.com/r/ovhcom/ai-training-pytorch/tags)
-   [ovhcom/ai-training-tensorflow:2.4.1](https://hub.docker.com/r/ovhcom/ai-training-tensorflow/tags)
-   [ovhcom/ai-training-transformers:4.5.0](https://hub.docker.com/r/ovhcom/ai-training-transformers/tags)
-   [ovhcom/ai-training-mxnet:1.5.0](https://hub.docker.com/r/ovhcom/ai-training-mxnet/tags)
-   [ovhcom/ai-training-fastai:2.2.5](https://hub.docker.com/r/ovhcom/ai-training-fastai/tags)

Header of your Dockerfile should look like this :

``` {.console}
FROM <base-image>
```

For example if you want to start from the base image `python:1.5.0_gpu_cu101_py3` :

``` {.console}
FROM python:1.5.0_gpu_cu101_py3
```

### Install what you need

Bash command instructions on your Dockerfile should begin with `RUN` prefix.

Example if your want to install vim :

``` {.console}
RUN apt-get update && apt-get install -y vim
```

You can copy files from your local directory inside docker image with the `COPY` prefix.

Example if you want to add the file `example.txt` at the root of the image :

``` {.console}
COPY example.txt /example.txt
```

> [!warning]
>
> Images in AI Training are not run as root user, but by an "ovh" user with UID 42420. It means that if you want to be able to write in a specific directory at runtime you will have to give it specific rights.
> You can do it with the following instruction :
>
>     RUN chown -R 42420:42420 <your-target-directory>
> 


> [!warning]
> 
> The home directory for the "ovh" user (with UID 42420) will be /workspace.
> If your base image (the one used by the FROM instruction) does not create the /workspace directory (and it probably doesn't if you didn't use an image provided by OVHcloud), then you should create it in your Dockerfile.
>
>     WORKDIR /workspace
>     RUN chown -R 42420:42420 /workspace> 
>

You can set environment variables with the `ENV` prefix.

Example if you want to add an environment variable `KEY` with value `VALUE`

``` {.console}
ENV KEY VALUE
```

> [!primary]
>
> For more information about dockerfile we recommand you to refer to the [official documentation](https://docs.docker.com/engine/reference/builder/)

## Build image

Once your **Dockerfile** is complete and match your needs you have to choose a name and build the image using the following command in the same directory :

``` {.console}
docker build -t <image-name> .
```

## Test it locally (Optional)

If you want to verify that your built image is working properly, create 2 files :

-   One file named `group` with following content :

``` {.console}
root:x:0:
ovh:x:42420:
nogroup:x:65534:
```

-   One file named `passwd` with following content :

``` {.console}
root:x:0:0:root:/root:/bin/bash
ovh:x:42420:42420:OVH:/workspace:/bin/bash
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
```

And run the following command :

``` {.console}
docker run --rm -it -v $(pwd)/group:/etc/group -v $(pwd)/passwd:/etc/passwd --user=ovh:ovh <image-name>
```

## Push image in the registry of your choice

Pushing your image to a registry is needed in order for AI Training to pull it.

AI Training provides a default registry called **Shared registry** where users are able to push their custom images. It is linked with every project by default.

If you prefer using your own private docker registry instead of the shared one, feel free to use it. Just don't forget to [add your registry in your AI Training project](../add-private-registry) before using it.

The basic commands to push a docker image to a registry is :

    docker login -u <registry-user> -p <registry-password> <registry>
    docker tag <image-name> <registry>/<image-name>
    docker push <registry>/<image-name>

Example if you want to push an image named `custom-image` inside a registry `registry.gra.training.ai.cloud.ovh.net` :

    docker login -u <registry-user> -p <registry-password> my-registry.ai.cloud.ovh.net
    docker tag custom-image my-registry.ai.cloud.ovh.net/custom-image
    docker push my-registry.ai.cloud.ovh.net/custom-image

If you want to know the exact commands to push on the shared registry, please consult the `Details`{.action} button of the **Shared Docker Registry** section in the **Home** panel of AI Training.

![image](images/shared_registry_details.png){.thumbnail}

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/en/c/Data-AI)
