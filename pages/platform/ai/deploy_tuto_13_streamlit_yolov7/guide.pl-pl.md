---
title: AI Deploy - Tutorial - Create a web service to recognize sign language with YOLOv7
excerpt: How to build a sign language recognition app with Streamlit
updated: 2023-04-03
routes:
    canonical: '/pages/platform/ai/deploy_tuto_13_streamlit_yolov7'
---

**Last updated 3rd April, 2023.**

## Objective

The purpose of this tutorial is to show how to deploy a web service to recognize **American Sign Language letters** using YOLOv7 model.

In order to do this, you will use [Streamlit](https://streamlit.io/), a Python framework that turns scripts into a shareable web application. You will also learn how to build and use a custom Docker image for a Streamlit application.

For more information on how to train YOLOv7 on a custom dataset, refer to the following [documentation](/pages/platform/ai/notebook_tuto_11_yolov7).

Here is an overview of the Sign Language recognition app:

![Overview](images/overview-streamlit-yolov7-asl.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- An AI Deploy project created inside a Public Cloud project
- A [user for AI Deploy](/pages/platform/ai/gi_01_manage_users)
- [Docker](https://www.docker.com/get-started) installed on your local computer
- Some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/)
- Your weights obtained from training YOLOv7 model on the [ASL letters dataset](https://public.roboflow.com/object-detection/american-sign-language-letters/1) (refer to the *"Export trained weights for future inference"* part of the [notebook for YOLOv7](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/object-detection/miniconda/yolov7/notebook_object_detection_yolov7_asl.ipynb)

## Instructions

You are going to follow different steps to build your Streamlit application.

- More information about Streamlit capabilities can be found [here](https://docs.streamlit.io/en/stable/).
- Direct link to the full Python script can be found [here](https://github.com/ovh/ai-training-examples/blob/main/apps/streamlit/sign-language-recognition-yolov7-app/main.py).

> [!warning]
> **Warning**
> You must have previously created an `asl-volov7-model` Object Storage container when training your model via [AI Notebooks](/pages/platform/ai/notebook_tuto_11_yolov7).
>
> Check that this container contains your **YOLOv7 custom weights**. They will be necessary for the deployment of the app!

Here we will mainly discuss how to write the `main.py` code, the `requirements.txt` file and the `Dockerfile`. If you want to see the whole code, please refer to the [GitHub](https://github.com/ovh/ai-training-examples/tree/main/apps/streamlit/sign-language-recognition-yolov7-app) repository.

### Write the Streamlit application

Create a Python file named `main.py`.

Inside that file, import your required modules:

```python
import streamlit as st
from PIL import Image
import numpy as np
import torch
import cv2
import io
import os
```

Load the **YOLOv7** model and your own weights. Put this function in **cache**:

```python
@st.cache
def load_model():

    custom_yolov7_model = torch.hub.load("WongKinYiu/yolov7", 'custom', '/workspace/asl-volov7-model/yolov7.pt')

    return custom_yolov7_model
```

Create the inference function to get prediction:

```python
def get_prediction(img_bytes, model):

    img = Image.open(io.BytesIO(img_bytes))
    results = model(img, size=640)

    return results
```

Write the image analysis function:

```python
def analyse_image(image, model):

    if image is not None:

        img = Image.open(image)
        bytes_data = image.getvalue()
        img_bytes = np.asarray(bytearray(bytes_data), dtype=np.uint8)
        result = get_prediction(img_bytes, model)
        result.render()

        for img in result.imgs:
            RGB_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            im_arr = cv2.imencode('.jpg', RGB_img)[1]
            st.image(im_arr.tobytes())

        result_list = list((result.pandas().xyxy[0])["name"])

    else:
        st.write("no asl letters were detected!")
        result_list = []

    return result_list
```

Define the Python function that displays the letters and forms a word:

```python
def display_letters(letters_list):

    word = ''.join(letters_list)
    path_file = "/workspace/word_file.txt"
    with open(path_file, "a") as f:
        f.write(word)

    return path_file
```

Define the main and start your app:

```python
if __name__ == '__main__':

    st.image("/workspace/head-asl-yolov7-app.png")
    st.write("## Welcome on your ASL letters recognition app!")

    model = load_model()

    img_file_buffer = st.camera_input("Take your picture in real time:")

    result_list = analyse_image(img_file_buffer, model)
    path_file = display_letters(result_list)

    if st.button("Clear result"):
        if os.path.isfile(path_file):
            os.remove(path_file)
            print("File has been deleted")
        else:
            print("File does not exist")

    if (os.path.exists(path_file)==True):
        with open(path_file, "r") as f:
            content = f.read()
            st.write(content)
            f.close()
    else:
        pass
```

### Write the requirements.txt file for the application

The `requirements.txt` file will allow us to write all the modules needed to make our application work. This file will be useful when writing the `Dockerfile`.

```console
torchvision==0.14.0
numpy==1.23.4
pandas==1.5.1
matplotlib==3.6.2
pillow==9.3.0
opencv-python-headless==4.6.0.66
streamlit==1.14.0
tqdm==4.64.1
seaborn==0.12.1
scipy==1.9.3
ipython==8.6.0
psutil==5.9.4
pyyaml==6.0
```

### Write the Dockerfile for the application

Your Dockerfile should start with the `FROM` instruction indicating the parent image to use. In our case we choose to start from a `python:3.8` image:

```console
FROM python:3.8
```

Create the home directory and add your files to it:

```console
WORKDIR /workspace
ADD . /workspace
```

Install the `requirements.txt` file which contains your needed Python modules using a `pip install ...` command:

```console
RUN pip install -r requirements.txt
```

Define your default launching command to start the application:

```console
CMD [ "streamlit" , "run" , "/workspace/main.py", "--server.address=0.0.0.0" ]
```

Give correct access rights to **OVHcloud user** (`42420:42420`):

```console
RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace
```

### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

```console
docker build . -t yolov7-streamlit-asl-recognition:latest
```

> [!primary]
> **Notes**
>
> - The dot `.` argument indicates that your build context (place of the **Dockerfile** and other needed files) is the current directory.
>
> - The `-t` argument allows you to choose the identifier to give to your image. Usually image identifiers are composed of a **name** and a **version tag** `<name>:<version>`. For this example we chose **yolov7-streamlit-asl-recognition:latest**.

### Test it locally (optional)

Launch the following **Docker command** to launch your application locally on your computer:

```console
docker run --rm -it -p 8501:8051 --user=42420:42420 yolov7-streamlit-asl-recognition:latest
```

> [!primary]
> **Notes**
>
> - The `-p 8501:8501` argument indicates that you want to execute a port redirection from the port **8501** of your local machine into the port **8501** of the Docker container. The port **8501** is the default port used by **Streamlit** applications.
>
> - Don't forget the `--user=42420:42420` argument if you want to simulate the exact same behaviour that will occur on **AI Deploy apps**. It executes the Docker container as the specific OVHcloud user (user **42420:42420**).

Once started, your application should be available on `http://localhost:8501`.

### Push the image into the shared registry

> [!warning]
> **Warning**
> The shared registry of AI Deploy should only be used for testing purpose. Please consider attaching your own Docker registry. More information about this can be found [here](/pages/platform/ai/training_guide_05_howto_add_registry).

Find the address of your shared registry by launching this command:

```console
ovhai registry list
```

Log in to the shared registry with your usual OpenStack credentials:

```console
docker login -u <user> -p <password> <shared-registry-address>
```

Push the compiled image into the shared registry:

```console
docker tag yolov7-streamlit-asl-recognition:latest <shared-registry-address>/yolov7-streamlit-asl-recognition:latest
docker push <shared-registry-address>/yolov7-streamlit-asl-recognition:latest
```

### Launch the AI Deploy app

The following command starts a new app running your Streamlit application:

```console
ovhai app run <shared-registry-address>/yolov7-streamlit-asl-recognition:latest \
	   --gpu 1 \
	   --default-http-port 8501 \
	   --volume asl-volov7-model@GRA/:/workspace/asl-volov7-model:RO
```

> [!primary]
> **Notes**
>
> - `--default-http-port 8501` indicates that the port to reach on the app URL is `8501`.
>
> - `--gpu 1` indicates that we request 4 CPUs for that app.
>
> - Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.

## Go further

- You can imagine deploying an app using YOLO models with another Python framework: **Flask**. Refer to this [tutorial](/pages/platform/ai/deploy_tuto_04_flask_yolov5).
- Feel free to use **Streamlit** for other AI tasks! Deploy a Speech-to-Text app [here](/pages/platform/ai/deploy_tuto_09_streamlit_speech_to_text_app).
