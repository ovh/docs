---
title: AI Deploy - Tutorial - Build & use a Streamlit image
slug: deploy/build-use-streamlit-image
excerpt: How to build and use a custom Docker image containing a Streamlit application
section: AI Deploy tutorials
order: 01
---

**Last updated 1st September, 2022.**

> [!success]
>
> AI Apps changes name to AI Deploy.
>

## Objective

[Streamlit](https://streamlit.io/) is a python framework that turns scripts into shareable web application.

The purpose of this tutorial is to provide a concrete example on how to build and - On the use a custom Docker image for a Streamlit applications.

## Requirements

-   access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
-   an **AI Deploy project** created inside a **Public Cloud** project
-   a [user for AI Deploy](https://docs.ovh.com/asia/en/publiccloud/ai/users)
-   [Docker](https://www.docker.com/get-started) installed on your local computer
-   some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/)

## Instructions

### Write a simple Streamlit application

Create a simple python file with name `simple_app.py`.

Inside that file, import your required modules:

``` {.python}
import streamlit as st
import pandas as pd
```

Display all information you want on your Streamlit application:

``` {.python}
st.title('My first app')
st.write("Here's our first attempt at using data to create a table:")
st.write(pd.DataFrame({
    'first column': [1, 2, 3, 4],
    'second column': [10, 20, 30, 40]
}))
```

-   More information about Streamlit capabilities can be found [here](https://docs.streamlit.io/en/stable/)
-   Direct link to the full python file can be found here [here](https://github.com/ovh/ai-training-examples/tree/main/apps/streamlit/simple-app/simple_app.py)

### Write the Dockerfile for your application

Your Dockerfile should start with the the `FROM` instruction indicating the parent image to use. In our case we choose to start from a classic python image.

``` {.console}
FROM python:3.8
```

Install your needed python module using a `pip install ...` command. In our case we only need these 2 modules:

-   streamlit
-   pandas

``` {.console}
RUN pip install streamlit pandas
```

Install your application inside your image. In our case, we just copy our python file inside the `/opt` directory.

``` {.console}
COPY simple_app.py /opt/simple_app.py
```

Define your default launching command to start the application:

``` {.console}
CMD [ "streamlit" , "run" , "/opt/simple_app.py", "--server.address=0.0.0.0" ]
```

> [!warning]
>
> In order to access the app from the outside world, don't forget to add the `--server.address=0.0.0.0` instruction on your `streamlit run ...` command. By doing this you indicate to the process that it have to bind on all network interfaces and not only the `localhost`.

Create the home directory of the **ovhcloud user** (`42420:42420`) and give it correct access rights:

``` {.console}
RUN mkdir /workspace && chown -R 42420:42420 /workspace
ENV HOME /workspace
WORKDIR /workspace
```

> [!primary]
>
> This last step is mandatory because streamit needs to be able to write inside the `HOME` directory of the owner of the process in order to work properly.

-   More information about Dockerfiles can be found [here](https://docs.docker.com/engine/reference/builder/)
-   Direct link to the full Dockerfile can be found here [here](https://github.com/ovh/ai-training-examples/tree/main/apps/streamlit/simple-app/Dockerfile)

### Build the docker image from the dockerfile

Launch the following command from the **Dockerfile** directory to build your application image.

``` {.console}
docker build . -t streamlit-example:latest
```

> [!primary]
>
> The dot `.` argument indicates that your build context (place of the **Dockerfile** and other needed files) is the current directory.

> [!primary]
>
> The `-t` argument allow you to choose the identifier to give to your image. Usually image identifiers are composed of a **name** and a **version tag** `<name>:<version>`. For this example we chose **streamlit-example:latest**.

### Test it locally (optional)

Launch the following **docker command** to launch your application locally on your computer:

``` {.console}
docker run --rm -it -p 8501:8501 --user=42420:42420 streamlit-example:latest
```

> [!primary]
>
> The `-p 8501:8501` argument indicates that you want to execute a port rediction from the port **8501** of your local machine into the port **8501** of the docker container. The port **8501** is the default port used by **streamlit** applications.

> [!warning]
>
> Don't forget the `--user=42420:42420` argument if you want to simulate the exact same behavior that will occur on **AI Deploy apps**. It executes the docker container as the specific OVHcloud user (user **42420:42420**).

Once started, your application should be available on `http://localhost:8501`.

### Push the image into the shared registry

> [!warning]
>
> The shared registry of AI Deploy should only be use for testing purposes. Please consider attaching your own docker registry. More information about this can be found [here](https://docs.ovh.com/asia/en/publiccloud/ai/training/add-private-registry).

Find the address of your shared registry by launching this command:

``` {.console}
ovhai registry list
```

Login on the shared registry with your usual Openstack credentials

``` {.console}
docker login -u <user-password> -p <user-password> <shared-registry-address>
```

Push the compiled image into the shared registry:

``` {.console}
docker tag streamlit-example:latest <shared-registry-address>/streamlit-example:latest
docker push <shared-registry-address>/streamlit-example:latest
```

### Launch the AI Deploy app

The following command starts a new app running your Streamlit application:

``` {.console}
ovhai app run --default-http-port 8501 --cpu 1 <shared-registry-address>/streamlit-example:latest
```

> [!primary]
>
> `--default-http-port 8501` indicates that the port to reach on the app URL is the `8501`.

> [!primary]
>
> `--cpu 1` indicates that we only request 1 CPU for that app.

> [!primary]
>
> Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.

Once the AI Deploy app is running you can access your Streamlit application directly from the app's URL.

![image](images/streamlit.png){.thumbnail}

## Go further

- Do you want to use **Streamlit** to deploy an AI model for audio classification task? [Here it is](https://docs.ovh.com/asia/en/publiccloud/ai/deploy/tuto-streamlit-sounds-classification/).
- You can imagine deploying an AI model with an other tool: **Flask**. Refer to this [tutorial](https://docs.ovh.com/asia/en/publiccloud/ai/deploy/tuto-build-use-flask-image/).

## Feedback 

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
