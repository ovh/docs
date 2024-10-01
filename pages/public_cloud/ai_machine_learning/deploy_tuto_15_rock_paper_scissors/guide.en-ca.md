---
title: AI Deploy - Tutorial - Create an application to play rock paper scissors with YoloV8
excerpt: How to build an application based on the computer vision with YoloV8
updated: 2023-11-27
---

## Objective

The purpose of this tutorial is to explain how to deploy an application to play the game "rock paper scissors" using the YOLOv8 model.

In order to do this, you will use [Streamlit](https://streamlit.io/), a Python framework that turns scripts into a shareable web application. You will also learn how to build and use a custom Docker image for a Streamlit application.

## Requirements

- You have access to the [OVHcloud Control Panel](/links/manager).
- You have created an AI Deploy project inside a Public Cloud project.
- You have created a [user for AI Deploy](/pages/public_cloud/ai_machine_learning/gi_01_manage_users).
- You have [Docker](https://www.docker.com/get-started) installed on your machine.
- You have knowledge about building images with [Dockerfile](https://docs.docker.com/engine/reference/builder/).
- You have weights obtained from training the YOLOv8 model on the [Rock Paper Scissors Dataset](https://universe.roboflow.com/roboflow-58fyf/rock-paper-scissors-sxsw). You can use the tutorial [Train YOLOv8 to play rock paper scissors](/pages/public_cloud/ai_machine_learning/notebook_tuto_15_rock-paper-scissors) to generate these weights.

## Instructions

You are going to follow different steps to build your Streamlit application.

- More information about Streamlit capabilities can be found [here](https://docs.streamlit.io/en/stable/).
- All [source files](https://github.com/ovh/ai-training-examples/tree/main/apps/streamlit/rock-paper-scissors-yolov8) can be found on GitHub.


### Write the Streamlit application

Create a Python file named `app.py` and paste the following code:

```python
from ultralytics import YOLO
import streamlit as st

#######################################################################################################################
## 🎯 The aim of this script is to create an Rock/Paper/Scissors application based on a trained model (from YOLOv8). ##
## 🏞 The uploaded snapshots are stored in /workspace/                                                               ##
## 🧠 The train model is stored in /workspace/model/rock-paper-scissors/                                             ##
#######################################################################################################################

# Save uploaded photo
def save_photo(photo):
    
    photoAbsolutePath = '/workspace/' + photo.name
    
    with open(photoAbsolutePath,'wb') as f:
         f.write(photo.getbuffer())
    
    return photoAbsolutePath

# main
if __name__ == '__main__':

    st.write("## Welcome on the 🪨 📄 ✂️ game!")
    # 🧠 Load the model
    model = YOLO('/workspace/model/rock-paper-scissors/best.torchscript')

    # 📸 Camera input
    img_file_buffer = st.camera_input("Take your picture in real time:")
    if img_file_buffer is not None:
      photoPath = save_photo(img_file_buffer) 

      # 🔎 Prediction
      results = model.predict(photoPath, verbose=True, save=True, conf=0.5)

      # 📈 Display results
      for r in results:
        for c in r.boxes.cls:
          st.write(r.names[int(c)])
```

### Write the requirements.txt file for the application

The `requirements.txt` file will allow us to write all the modules needed to make our application work. This file will be useful when writing the `Dockerfile`.

```console
ultralytics==8.0.194 
opencv-python-headless==4.8.1.78 
streamlit==1.27.2 
```

### Write the Dockerfile for the application

Your Dockerfile should start with the `FROM` instruction indicating the parent image to use. In our case we choose to start from a `python:3.8` image:

```dockerfile
# 🐳 Base image to execute Python application
FROM python:3.8

# 👱 Userspace for AI Deploy
WORKDIR /workspace
# 📚 Libraries for the application
ADD requirements.txt /workspace
RUN pip install -r requirements.txt
RUN apt-get update
RUN apt-get install ffmpeg libsm6 libxext6  -y

# 🐍 Python application
ADD app.py /workspace

# 👮 Rootless execution
RUN chown -R 42420:42420 /workspace

# 🚀 Run the Python application
CMD [ "streamlit" , "run" , "/workspace/app.py", "--server.address=0.0.0.0" ]

ENV HOME=/workspace
```
### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

```bash
docker build . -f Dockerfile -t <shared-regristry-name>/rock-paper-scissors-app:1.0.0
```

### Push the image into the shared registry

> [!warning]
> **Warning**
> The shared registry of AI Deploy should only be used for testing purpose. Please consider attaching your own Docker registry. More information about this can be found [here](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry). The images pushed to this registry are for AI Tools workloads only, and will not be accessible for external uses.

Find the address of your shared registry by launching this command:

```bash
ovhai registry list
```

Log in to the shared registry with your usual AI Platform user credentials:

```bash
docker login -u <user> -p <password> <shared-registry-address>
```

Push the compiled image into the shared registry:

```bash
docker push <shared-registry-address>/rock-paper-scissors-app:1.0.0
```

### Launch the AI Deploy app

The following command starts a new app running your Streamlit application:

```bash
ovhai app run \
	--name rock-paper-scissors-app \
	--cpu 1 \
	--default-http-port 8501 \
	--volume rock-paper-scissors-model@GRA:/workspace/model:R0:cache \
	--unsecure-http \
	<shared-registry-address>/rock-paper-scissors-app:1.0.0
```

> [!primary]
> **Notes**
>
> - `--default-http-port 8501` indicates that the port to reach on the app URL is `8501`.
>
> - `--cpu 1` indicates that we request only one CPU for that app.
>
> - Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)
