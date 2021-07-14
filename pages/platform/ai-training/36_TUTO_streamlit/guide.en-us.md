---
title: Build & use a Streamlit image
slug: build-use-streamlit-image
excerpt: How to build and use a custom Docker image containing a Streamlit application
section: Tutorials
order: 7
---

*Last updated 5th of June, 2021.*

## Objective

[Streamlit](https://streamlit.io/) is a Python framework that turns scripts into a shareable web application.

The purpose of this tutorial is to provide a concrete example on how to build and use a custom Docker image for a Streamlit application.

## Requirements

-   access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
-   an **AI Training project** created inside a **Public Cloud** project
-   a [user for AI Training](https://docs.ovh.com/us/en/ai-training/create-user/)
-   [Docker](https://www.docker.com/get-started) installed on your local computer
-   some knowledge about building an image and a [Dockerfile](https://docs.docker.com/engine/reference/builder/)

## Instructions

### Writing a simple Streamlit application

Create a simple Python file with name `simple_app.py`.

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

-   More information about Streamlit capabilities can be found [here](https://docs.streamlit.io/en/stable/).
-   Direct link to the full Python file can be found [here](https://github.com/ovh/ai-training-examples/blob/main/jobs/streamlit/tuto_simple_app/simple_app.py).

### Writing the the Dockerfile for your application

Your Dockerfile should start with the the `FROM` instruction indicating the parent image to use. In our case we choose to start from a classic Python image.

``` {.console}
FROM python:3.8
```

Install your needed Python module using a `pip install ...` command. In our case we only need these 2 modules:

-   streamlit
-   pandas

``` {.console}
RUN pip install streamlit pandas
```

Install your application inside your image. In our case, we just copy our Python file inside the `/opt` directory

``` {.console}
COPY simple_app.py /opt/simple_app.py
```

Define your default launch command to start the application:

``` {.console}
CMD [ "streamlit" , "run" , "/opt/simple_app.py", "--server.address=0.0.0.0" ]
```

> [!warning]
>
> In order to access the job from the "outside world", don't forget to add the `--server.address=0.0.0.0` instruction on your `streamlit run ...` command. By doing this you indicate to the process that it has to bind on all network interfaces and not only the `localhost`.

Create the home directory of the **ovhcloud user** (`42420:42420`) and give it correct access rights:

``` {.console}
RUN mkdir /workspace && chown -R 42420:42420 /workspace
ENV HOME /workspace
WORKDIR /workspace
```

> [!primary]
>
> This last step is mandatory because Streamlit needs to be able to write inside the `HOME` directory of the owner of the process in order to work properly.

-   More information about Dockerfiles can be found [here](https://docs.docker.com/engine/reference/builder/).
-   Direct link to the full Dockerfile can be found here [here](https://github.com/ovh/ai-training-examples/blob/main/jobs/streamlit/tuto_simple_app/Dockerfile).

### Building the Docker image from the Dockerfile

Launch the following Docker command to build your application image.

``` {.console}
docker build -t streamlit-example:latest .
```

## Testing it locally (Optional)

Launch the following **Docker command** to launch your application locally on your computer.

``` {.console}
docker run --rm -it -p 8501:8501 --user=42420:42420 streamlit-example:latest
```

Once started, your application should be available on `http://localhost:8501`.

### Pushing the image into the shared registry

Find the adress of your shared registry by launching this command:

``` {.console}
ovhai registry list
```

Log on to the shared registry with your usual OpenStack credentials:

``` {.console}
docker login -u <user-password> -p <user-password> <shared-registry-address>
```

Push the compiled image into the shared registry:

``` {.console}
docker tag streamlit-example:latest <shared-registry-address>/streamlit-example:latest
docker push <shared-registry-address>/streamlit-example:latest
```

> [!warning]
>
> The shared registry of AI Training should only be use for testing purposes. Please consider attaching your own Docker registry. More information about this can be found [here](../add-private-registry).

### Launching the job

The following command starts a new job running your Streamlit application:

``` {.console}
ovhai job run --default-http-port 8501 --cpu 1 <shared-registry-address>/streamlit-example:latest
```

> [!primary]
>
> `--default-http-port 8501` indicates that the port to reach on the job URL is `8501`.

> [!primary]
>
> `--cpu 1` indicates that we only request 1 CPU for that job.

> [!primary]
>
> Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.

Once the job is running you can access your Streamlit application directly from the job's URL.

![image](images/streamlit.png){.thumbnail}

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/en/c/Data-AI)
