---
title: AI Deploy - Tutorial - Deploy a Streamlit application for speech to text task
slug: deploy/tuto-streamlit-speech-to-text
excerpt: How to build and use a custom Docker image containing a Streamlit speech-to-text application
section: AI Deploy tutorials
order: 07
---

**Last updated 29th August, 2022.**

## Objective

The purpose of this tutorial is to learn **how to build and deploy an application for speech to text** using pre-trained models.

**Speech to text** consists in transcribing an audio which means **translate spoken language into text**.

The use case is **English speech recognition**, but you can choose another model as showed in the notebook tutorials. Some models work with Chinese, French, German, Japanese, Russian, ...

To create our app, we will use [Streamlit](https://streamlit.io/), a Python framework that turns scripts into a shareable web application. If you don't know this tool, don't worry, it is very simple to use. You will also learn how to build and use a custom Docker image for a Streamlit application.

Overview of the app:

![Overview](images/speech-to-text-app-overview.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).
- An AI Deploy project created inside a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account.
- A [user for AI Deploy](https://docs.ovh.com/gb/en/publiccloud/ai/users/).
- [Docker](https://www.docker.com/get-started) installed on your local computer.
- Some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/).
- You also should have followed the steps of our *speech to text notebook tutorials*, since the code of this application is based on them. They are available on our [GitHub repository](https://github.com/ovh/ai-training-examples/notebooks/natural-language-processing/speech-to-text/conda/) and teach you how to transcribe an audio file, but also how to punctuate and summarize the transcript. You will also learn how to generate video subtitles and differentiate speakers. To launch these notebooks and run them, please refer to this [documentation](https://docs.ovh.com/gb/en/publiccloud/ai/notebooks/tuto-speech-to-text-recognition/)

## Instructions

You are going to follow different steps to build your **Streamlit** application.

- More information about Streamlit capabilities can be found [here](https://docs.streamlit.io/).
- Direct link to the full Python file can be found here [here](https://github.com/ovh/ai-training-examples/apps/streamlit/speech-to-text/app.py).

Here we will mainly discuss on how to write the `requirements.txt` file and the `Dockerfile`. If you want to see the whole code, please refer to the [GitHub repository](https://github.com/ovh/ai-training-examples/tree/main/apps/streamlit/speech-to-text).

> [!primary]
>
> For more information about the Streamlit app code, please refer to the comments in the [Python file](https://github.com/ovh/ai-training-examples/apps/streamlit/speech-to-text/app.py).
>

### Write the requirements.txt file for the application

The `requirements.txt` file will allow us to get all the modules needed to make our application work. This file will be useful for the `Dockerfile`.

```console
youtube_dl==2021.12.17
streamlit==1.9.0
transformers==4.18.0
httplib2==0.20.2
torch==1.11.0
torchaudio==0.11.0
sentencepiece==0.1.96
tokenizers==0.12.1
pyannote.audio==2.0.1
pyannote.core==4.4
```

### Write the Dockerfile for the application

Your `Dockerfile` should start with the `FROM` instruction indicating the parent image to use. In our case we choose to start from the `ovhcom/ai-training-one-for-all` image:

```console
FROM ovhcom/ai-training-one-for-all
```

Define the home directory `workspace` and add your Python file and the image to it:

```console
WORKDIR /workspace
ADD . /workspace
```

Then, indicate that we want to install our needed Python modules using a `pip install ...` command with the `requirements.txt` file which contains all modules:

```console
RUN pip install -r requirements.txt
```

Define your default launching command to start the application:

```console
CMD [ "streamlit" , "run" , "/workspace/main.py", "--server.address=0.0.0.0" ]
```

Finally, create a `data` folder which will temporarily store users' audio files until they are transcribed. Then, give correct access rights to the **ovhcloud user** (`42420:42420`):

```console
RUN mkdir /data ; chown -R 42420:42420 /workspace /data
ENV HOME=/workspace
```

### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

```console
docker build . -t streamlit_app:latest
```

> [!primary]
>
> The dot `.` argument indicates that your build context (place of the **Dockerfile** and other needed files) is the current directory.
>
> The `-t` argument allows you to choose the identifier to give to your image. Usually image identifiers are composed of a **name** and a **version tag** `<name>:<version>`. For this example we chose **streamlit_app:latest**.
>

### Push the image into the shared registry

> [!warning]
>
> The shared registry of AI Deploy should only be used for testing purposes. Please consider attaching your own Docker registry. More information about this can be found [here](https://docs.ovh.com/gb/en/publiccloud/ai/training/add-private-registry/).
>

Find the address of your shared registry by launching this command:

```console
ovhai registry list
```

Log in on the shared registry with your usual OpenStack credentials:

```console
docker login -u <user> -p <password> <shared-registry-address>
```

Push the created image into the shared registry:

```console
docker tag streamlit_app:latest <shared-registry-address>/streamlit_app:latest
docker push <shared-registry-address>/streamlit_app:latest
```

### Launch the app

The following command starts a new app running your Streamlit application:

```console
ovhai app run \
      --default-http-port 8501 \
      --gpu 1 \
      --volume my_speech_to_text_models@GRA/:/workspace/models:RO \
      <shared-registry-address>/streamlit_app:latest
```

> [!primary]
>
> `default-http-port 8501` indicates that the port to reach on the job URL is the 8501. The port 8501 is the default port used by Streamlit applications.
>

> [!primary]
>
> `--gpu 1` indicates that we request 1 GPU for our app.
>

If you want your app to be accessible without the need to authenticate, specify it as follows:

> [!primary]
>
> Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.
>

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
