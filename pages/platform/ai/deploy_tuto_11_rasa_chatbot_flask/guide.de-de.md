---
title: AI Deploy - Tutorial - Deploy a Rasa chatbot with a simple Flask app
slug: deploy/rasa-chatbot
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/deploy/rasa-chatbot/'
excerpt: Understand how simple it is to deploy a chatbot with AI Deploy
section: AI Deploy - Tutorials
order: 11
updated: 2023-04-04
---

**Last updated 4th April, 2023.**

> [!primary]
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

In a previous tutorial, we created and trained a Rasa Chatbot with AI Notebooks: [How to create and train a chatbot on OVHcloud](https://docs.ovh.com/de/publiccloud/ai/notebooks/create-rasa-chatbot).
Now, the aim of this tutorial is to deploy a chatbot with OVHcloud AI Tools. We also train our chatbot with AI Training. 

We used the famous open source framework [Rasa](https://rasa.community/) to build the chatbot. 
To deploy our chatbot, we will use the [Flask framework](https://flask.palletsprojects.com/en/2.2.x/) and create a web app.

This tutorial's objectives are:

1. Secure the Flask application.
2. Deploy the Rasa model with AI deploy.
3. Deploy the Flask application and converse with the chatbot.

Here is a schema to explain how it works:

![image](images/diagramme.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- A Public Cloud project created
- The ovhai CLI interface installed on your system (more information [here](https://docs.ovh.com/de/publiccloud/ai/cli/install-client/))
- [Docker](https://www.docker.com/get-started) installed on your local computer
- A [Docker Hub account](https://hub.docker.com/)
- Knowledge about building images with [Dockerfile](https://docs.docker.com/engine/reference/builder/)

## Instructions

We will create two AI apps to deploy the Rasa model. First, you will have to create two environment variables for the Flask app.

### Clone our example repository 

Please make sure you have cloned the GitHub repository.
You can find it [here](https://github.com/ovh/ai-training-examples).

### Create environment variables

Frontend and backend (the chatbot) have to communicate safely and securely. We will generate security keys for that.

The first variable will be the secret key for the Json web token signature to access your Rasa chatbot. To generate this key, we use Python. If you have Python 2.6+ installed on your machine, you can run Python inside a terminal and then: 

```python
import secrets
print(secrets.token_urlsafe())
# Should display something like this:
# dux3BudMxlRSm1GI3IoBEuS7UWVU3nYGJ9l_0Cd3rms
```

The second one will be the algorithm used for the Json web token. The algorithm used will be H256.

You have your two environment variables. Time to save them! Create an `.env` file inside the folder `flask_app`. Your `.env` should look like this:

```
JWT_SECRET_KEY=your-jwebtoken-generated-before
JWT_ALGORITHM=HS256
```

Your environment variables are saved. One more thing to do is to add in the `docker-compose.yml` file in the Rasa image the `JWT_SECRET_KEY` value. The value must be the same in the `.env` file. Otherwise, your model will not be able to run. Now, let's test locally our app or let's deploy our chatbot!

If you have already trained a Rasa model with OVHcloud, you should already have an object storage container with your trained models. If you don't have this one, please continue this tutorial to create one. Otherwise, you can go directly [here](#localtest).

### Add one object storage 

The container we will create contain at least one model. This model will be served on a platform with AI Deploy.

We can specify during creation if we want them in read-only, read-write and co.
Splitting input data and output data is a good practice, allowing you faster development code and avoids risk of deleting data.

The obvious goal about using object storage and not the local storage of the AI Notebook is to decorrelate compute and storage, allowing us to stop or delete the notebook while keeping the data safe.

If you want to know more about data storage concept, read this guide: [Create an object container](https://docs.ovh.com/de/storage/object-storage/pcs/create-container/).

For the chatbot deployment, we will create one object storage bucket. It will contain a pretrained model. If you've already trained a model before with other tutorials, don't create a new container.

To create the volume in GRA (Gravelines data centre) in read-only, go into the folder `ai-training-examples/apps/flask/conversational-rasa-chatbot/back-end/models`. After, you will just have to type:

```bash
ovhai data upload GRA <model-output-container> 20221220-094914-yellow-foley.tar.gz
```

The model `20221220-094914-yellow-foley.tar.gz` will be added in your container `<model-output-container>`. That's it, now you can deploy your chatbot.

### Test it locally (optional) <a name="localtest"></a>

A good practice is to test your work locally before going to production.

Open a terminal, move to the project folder (`ai-training-examples/apps/flask/conversational-rasa-chatbot`) then use this command:

```bash
docker compose -f "flask-docker-compose.yml" up -d --build
```

This command will create 2 containers, one for the Rasa model backend and one for the frontend server handled by Flask. Once the two containers are running (it will take 5 minutes max), you can go directly on your [localhost](http://0.0.0.0:5000/) on port 5000, the port of your frontend app. 

To stop the containers, run this command: 

```bash
docker compose -f flask-docker-compose.yml down
```

#### Deploy the Rasa model in the Cloud

For simplicity, we will use the ovhai CLI. With one command line, you will have your model up and running securely with TLS!

If you have already trained your chatbot with **AI Training** and use the same Dockerfile, you don't have to create and push a new image because the two images are the same. In this case, skip the creation of the container and go directly to the creation of the app. 

We will need to create a container in order to deploy the chatbot. Let's create a Dockerfile, build the container and push it to your personal docker account. Here is the Dockerfile:Docker
 
```docker
FROM python:3.8

WORKDIR /workspace
ADD . /workspace

RUN pip install --no-cache-dir -r requirements_rasa.txt


RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace

#If you deploy the chatbot you expose at port 5005.
EXPOSE 5005 


CMD rasa run -m trained-models --cors "*" --debug --connector socketio --credentials "crendentials.yml" --endpoints "endpoints.yml" & rasa run actions
```

This file can be found in the GitHub repository, you don't have to create it. The file is [here](https://github.com/ovh/ai-training-examples/blob/main/apps/flask/conversational-rasa-chatbot/back-end/rasa.Dockerfile).

Now run the following command in this folder (`back-end`) to build and push the container:

```bash
docker build .  -f rasa.Dockerfile -t <yourdockerhubId>/rasa-chatbot:latest
docker push <yourdockerhubId>/rasa-chatbot:latest
```

Now that your container is created, let's run our application and deploy our model!

```console
ovhai app run --name rasa-back \
--unsecure-http \
--default-http-port 5005 \
--cpu 4 \
--volume <model-output-container>@GRA:/workspace/trained-models:RO \
-e JWT_SECRET=<JWT_SECRET_KEY> \
<yourdockerhubId>/rasa-chatbot:latest
```

Explanation of each line:

- Launch an app in AI Deploy with the name "rasa-back".
- Specify that our URL is not secured by OVHcloud. The model will be in fact secured with a Json web token. The only person who will access your model is the Flask frontend application. This is also why you created environment variables before. If you want to know more about Json web tokens, please refer to <https://jwt.io/>. 
- The port of the rasa model is 5005. 
- 4 CPUs are sufficient to deploy the model.
- We will add a volume to get the model file. 
- In the `-e` argument, please put the jwt secret key you've generated which is in your `.env` file. 
- In the last line you specify the Docker image to load and also the bash command to run inside the Docker container.

Explication of the bash command running the chatbot (you can find it inside the Dockerfile):

- `rasa run`: Run a specific model to be used with others applications.
- `-m trained-models`: Specify the path to the models trained before.
- `--cors "*"`: Enable all cors, our frontend application must have access to the model.
- `--debug`: Print all of the logs for each user connected and disconnected.
- `--connector socketio`: Specify this connector to enable a connection to create a new website.
- `--credentials "crendentials.yml"`: Specify here the path of the credentials file.
- `--endpoints "endpoints.yml"`: Specify the path of the `endpoints.yml` file.
- `rasa run actions`: The custom actions you've made before to launch them and use them.

Now, you can wait until your app is started, then go to the URL. Nothing special will happen, just a small message with **hello from Rasa 3.2.0**!

For better interactions, we will now deploy the Flask frontend.
For simplification, everything is on the cloned [GitHub repository](https://github.com/ovh/ai-training-examples/tree/main/apps/flask/conversational-rasa-chatbot).

#### Deploy the frontend App

- Create the Dockerfile

First, we will need to create the Dockerfile. This Dockerfile is already created and it is in the folder `front-end`. Here is what it looks like:

```docker
FROM python:3.8

WORKDIR /workspace
ADD . /workspace

RUN pip install --no-cache-dir -r requirements_flask.txt


RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace


EXPOSE 5000

CMD python3 app.py
```

Let's now run the app on AI Deploy! To do so, you will need to create a Docker image. Go into the folder `front-end` (`ai-training-examples/apps/flask/conversational-rasa-chatbot/front-end`) and run:

```bash
docker build . -f flask.Dockerfile -t <yourdockerhubId>/flask-app:latest
docker push <yourdockerhubId>/flask-app:latest
```

- Deploy the Docker image

Once built, let's run the Frontend application with the ovhai CLI. 

But first, get the URL of your backend Rasa chatbot. It will be something like this: **https://259b36ff-fc61-46a5-9a25-8d9a7b9f8ff6.app.gra.training.ai.cloud.ovh.net/**. You can have it with the CLI by listing all of your apps and locating the one you want. 

Now you can run this command:

```bash
ovhai app run --name flask-app \
--token <token> \
--default-http-port 5000 \
-e API_URL=<RasaURL_Previously_Copied> \
--cpu 2 \
<yourdockerhubId>/flask-app:latest 
```

That's it! On the URL of this app, you can speak to your chatbot. Try to have a simple conversation! If you reload the page, you will notice that the chatbot goes back to zero. So every user is different on each machine.

Here is an example of a discussion with the chatbot:

![image](images/result.jpg){.thumbnail}

## Go further

If you want to see how the model is created and trained with AI Notebooks, please follow this tutorial.

[How to create and train a rasa chatbot](https://docs.ovh.com/de/publiccloud/ai/notebooks/create-rasa-chatbot)
  
If you want to train a Rasa chatbot with the tool AI Training, please refer to this tutorial.

[How to train a chatbot with Docker and AI Training](https://docs.ovh.com/de/publiccloud/ai/training/tuto-train-rasa-chatbot)
  
If you want to use more functionalities of Rasa, please follow this link. We use Rasa Open Source and not Rasa X.  

[Rasa Open source](https://rasa.com/docs/rasa/)

If you want to know more about the Flask framework, please go to this link.
 
[Flask Framework](https://flask.palletsprojects.com/en/2.2.x/)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
