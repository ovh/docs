---
title: AI Deploy - Tutorial - Deploy a Gradio app for sketch recognition
excerpt: How to build and use a custom Docker image containing a Gradio application
updated: 2023-11-27
---

> [!primary]
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

The purpose of this tutorial is to deploy an application for sketch recognition using a trained model.

The use case is **handwritten digits recognition**, based on the [MNIST dataset](http://yann.lecun.com/exdb/mnist/).

In order to do this, you will use [Gradio](https://gradio.app/), an open-source Python library which is a quick way to expose and use Machine Learning models. You will also learn how to build and use a custom Docker image for a Gradio application.

Overview of the app:

![Overview](images/overview-gradio-app.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- An AI Deploy project created inside a [Public Cloud project](https://www.ovhcloud.com/es/public-cloud/) in your OVHcloud account.
- A [user for AI Deploy](/pages/public_cloud/ai_machine_learning/gi_01_manage_users).
- [Docker](https://www.docker.com/get-started) installed on your local computer.
- Some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/).
- You also should have followed the steps of the *Image Classification with MNIST dataset* notebook from the [GitHub repository](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/weights-and-biases/notebook_Weights_and_Biases_MNIST.ipynb). You will be able to train and save your model. To launch this notebook and run it, please refer to this [documentation](/pages/public_cloud/ai_machine_learning/notebook_tuto_03_weight_biases).

## Instructions

You are going to follow different steps to build your **Gradio** application.

- More information about Gradio capabilities can be found [here](https://gradio.app/docs/).
- Direct link to the full Python file can be found here [here](https://github.com/ovh/ai-training-examples/blob/main/apps/gradio/sketch-recognition/app.py).

Here we will mainly discuss on how to write the `app.py` code, the `requirements.txt` file and the `Dockerfile`. If you want to see the whole code, please refer to the [GitHub repository](https://github.com/ovh/ai-training-examples/tree/main/apps/gradio/sketch-recognition).

### Write the Gradio application

Create a Python file named `app.py`.

Inside that file, import your required modules.

```python
import gradio as gr
import tensorflow as tf
import cv2
```

Define the elements that make up the AI Deploy app: title, header and references.

```python
title = "Welcome on your first sketch recognition app!"

head = (
  "<center>"
  "<img src='file/mnist-classes.png' width=400>"
  "The robot was trained to classify numbers (from 0 to 9). To test it, write your number in the space provided."
  "</center>"
)

ref = "Find the whole code [here](https://github.com/ovh/ai-training-examples/tree/main/apps/gradio/sketch-recognition)."
```

Specify the input images size and the classes names.

```python
img_size = 28

labels = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
```

Load the previously trained model for handwritten digits classification.

> [!primary]
>
> To learn more about how you can save a model with TensorFlow, please refer to the part *"Save and export the model for future inference"* of the [notebook](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/weights-and-biases/notebook_Weights_and_Biases_MNIST.ipynb).
>

> [!primary]
>
> Here you will use your trained model, then save it in an Object Storage container. Click [here](/pages/public_cloud/ai_machine_learning/cli_16_commands_reference_data) to learn more about Object Storage.
>

```python
model = tf.keras.models.load_model("model/sketch_recognition_numbers_model.h5")
```

Create the function that recognizes the written number.

```python
def predict(img):

  img = cv2.resize(img, (img_size, img_size))
  img = img.reshape(1, img_size, img_size, 1)

  preds = model.predict(img)[0]

  return {label: float(pred) for label, pred in zip(labels, preds)}

label = gr.outputs.Label(num_top_classes=3)
```

Launch the Gradio interface.

```python
interface = gr.Interface(fn=predict, inputs="sketchpad", outputs=label, title=title, description=head, article=ref)
interface.launch(server_name="0.0.0.0", server_port=8080)
```

### Write the requirements.txt file for the application

The `requirements.txt` file will allow us to get all the modules needed to make our application work. This file will be useful when writing the `Dockerfile`.

```console
gradio==3.0.10
tensorflow==2.9.1
opencv-python-headless==4.6.0.66
```

### Write the Dockerfile for the application

Your Dockerfile should start with the `FROM` instruction indicating the parent image to use. In our case we choose to start from the `python:3.7` image:

```console
FROM python:3.7
```

Create the home directory and add your files to it:

```console
WORKDIR /workspace
ADD . /workspace
```

Install your needed Python modules using a `pip install ...` command with the `requirements.txt` file which contains all modules:

```console
RUN pip install -r requirements.txt
```

Give correct access rights to the **ovhcloud user** (`42420:42420`):

```console
RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace
```

Define your default launching command to start the application:

```console
CMD [ "python3" , "/workspace/app.py" ]
```

### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

```console
docker build . -t gradio_app:latest
```

> [!primary]
>
> The dot `.` argument indicates that your build context (place of the **Dockerfile** and other needed files) is the current directory.
>
> The `-t` argument allows you to choose the identifier to give to your image. Usually image identifiers are composed of a **name** and a **version tag** `<name>:<version>`. For this example we chose **gradio_app:latest**.
>

> [!warning]
>
> Please make sure that the docker image you will push in order to run containers using AI products respects the **linux/AMD64** target architecture. You could, for instance, build your image using **buildx** as follows:
>
> `docker buildx build --platform linux/amd64 ...`
>

### Push the image into the shared registry

> [!warning]
>
> The shared registry should only be used for testing purposes. Please consider creating and attaching your own registry. More information about this can be found [here](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry). The images pushed to this registry are for AI Tools workloads only, and will not be accessible for external uses.
>

Find the address of your shared registry by launching this command:

```console
ovhai registry list
```

Log in on the shared registry with your usual AI Platform user credentials:

```console
docker login -u <user> -p <password> <shared-registry-address>
```

Push the created image into the shared registry:

```console
docker tag gradio_app:latest <shared-registry-address>/gradio_app:latest
docker push <shared-registry-address>/gradio_app:latest
```

### Launch the AI Deploy app

The following command starts a new AI Deploy app running your Gradio application:

```console
ovhai app run \
      --cpu 1 \
      --volume <my_saved_model>@<region>/:/workspace/model:RO \
      <shared-registry-address>/gradio_app:latest
```

> [!primary]
>
> `--cpu 1` indicates that we request 1 CPU for that AI Deploy app.
>
> If you want, you can also launch this AI Deploy app with one or more **GPUs**.
>

To launch your Gradio app, you need to attach **1 volume** to this AI Deploy app. It contains the model that you trained before in part *"Save and export the model for future inference"* of the [notebook](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/weights-and-biases/notebook_Weights_and_Biases_MNIST.ipynb).

> [!primary]
>
> `--volume <my_saved_model>@<region>/:/workspace/saved_model:RO` is the volume attached for using your **pretrained model**. This volume is read-only (`RO`) because you just need to use the model and not make any changes to this Object Storage container.
>

If you want your **AI Deploy app** to be accessible without the need to authenticate, specify it as follows.

> [!primary]
>
> Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.
>

## Go further

- You can imagine deploying an AI model with an other tool: **Flask**. Refer to this [tutorial](/pages/public_cloud/ai_machine_learning/deploy_tuto_06_flask_hugging_face).
- Do you want to use **Streamlit** to create a audio classification app? [Here it is](/pages/public_cloud/ai_machine_learning/deploy_tuto_03_streamlit_sounds_classification).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)

