---
title: AI Deploy - Tutorial - Deploy a rasa chatbot with a simple Flask app
slug: deploy/deploy-rasa-chatbot
excerpt: Understand how simple it is to deploy a chatbot with AI deploy.
section: AI Deploy -  Tutorials
order: 11
---

**Last updated 10th March, 2023.**

## Objective

In a previous tutorial, we created and trained a Rasa Chatbot with AI Notebooks: [How to create and train a chatbot on OVHcloud](https://docs.ovh.com/gb/en/publiccloud/ai/).
Now, the aim of this tutorial is to deploy a chatbot with OVHcloud AI Tools. We also train our chatbot with AI Training. 

We used the famous open source framework [Rasa](https://rasa.community/) to build the chatbot. 
To deploy our chatbot, we will use the [Flask framework](https://flask.palletsprojects.com/en/2.2.x/) to create a web app.

This tutorial objectives are:
1. Secure Flask application
2. Deploy rasa model with AI deploy
3. Deploy Flask application and converse with the chatbot.

Here is the small schema to explain to you how it works:

![image](images/diagramme.png){.thumbnail}

**Requirements**

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).
- A Public Cloud project created.
- The ovhai CLI interface installed on your laptop. More information [here](https://docs.ovh.com/gb/en/publiccloud/ai/cli/install-client/).
- [Docker](https://www.docker.com/get-started) installed on your local computer.
- Make sure you have a Docker Hub [account](https://hub.docker.com/) or another Docker registry.
- Some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/).

## Instructions

We will create two AI apps to deploy the rasa model. First, you will have to create two environments variables for the Flask app. Let's do this!

### Clone our example repository 

Please make sure you have cloned the GitHub repository.
You can find it [here](https://github.com/ovh/ai-training-examples).

### Create environment variables

Frontend and Backend (the chatbot) have to communicate safely and securely. We will generate security keys for that.

The first variable will be the secret key for the Json web token signature to access your Rasa chatbot. To generate this key, I've used python. If you have python2.6+ installed on your machine, you can run python inside a terminal and then : 

```python
import secrets
print(secrets.token_urlsafe())
# Should display something like this:
# dux3BudMxlRSm1GI3IoBEuS7UWVU3nYGJ9l_0Cd3rms
```

The second one will be the algorithm used for the json web token. The algorithm will use will be H256.

You have your two environnements variables. Time to save it! Create an `.env` file inside the folder `flask_app`. Your `.env` should look like this:

```
JWT_SECRET_KEY=your-jwebtoken-generated-before
JWT_ALGORITHM=HS256
```

Your environment variables are saved. One more thing to do is to add in the docker-compose.yml file in the image Rasa the JWT_SECRET_KEY value. The value must be the same in the `.env` file. Otherwise, your model will not be able to run. Now, let's test locally our app or let's deploy our chatbot !

If you have already train a rasa model with OVHcloud, you should already have an object storage container with your trained models. If you don't have this one, please continue this tutorial to create one. Otherwise, you can go directly [here](#test-it-locally-optional).

### Add one object storage 

The container we will create contain at least one model. This model will be serve on a platform with AI Deploy.

We can specify during creation if we want them in read-only, read-write and co.
Splitting input data and output data is a good practice, allowing you faster development code and avoid risk of deleting data.

The obvious goal about using object storage and not the local storage of the AI Notebook, is to de-correlate compute and storage, allowing us to stop or delete the notebook while keeping the data safe.

If you want to know more about data storage concept please fill free to check this : [Create an object container](https://docs.ovh.com/gb/en/storage/object-storage/pcs/create-container/). 

For the chatbot deployment, we will create one object storage bucket. It will contain a pre trained model. If you've already train a model before with others tutorials, don't create a new container.

To create the volume in GRA (Gravelines Datacenter) in read only, go in the folder `ai-training-examples/apps/flask/conversational-rasa-chatbot/back-end/models`. After, you will just have to type : 

```bash
ovhai data upload GRA <model-output-container> 20221220-094914-yellow-foley.tar.gz
```

The model `20221220-094914-yellow-foley.tar.gz` will be added in your container <model-output-container> ! That's it, now you can deploy your chatbot. 

### Test it locally (optional)

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

For simplicity, we will use the ovhai CLI. And with one command line, you will have your model up and running securely with TLS !

If you have already train your chatbot with ***AI Training*** and use the same dockerfile, you don't have to create and push a new image because the two images are the same. In this case, skip the creation of the container and go directly in the creation of the app. 

We will need to create a container to deploy the chatbot. So, let's create a dockerfile, build the container and push it to your personnal docker account. Here is the dockerfile :
 
```
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
This file can be found in the repository git, you don't have to create it. The file is [here](https://github.com/Victor2103/ai-training-examples/blob/main/apps/flask/conversational-rasa-chatbot/back-end/rasa.Dockerfile).

Now please run in this folder (`back-end`) the command here to build and push the container : 
```bash
docker build .  -f rasa.Dockerfile -t <yourdockerhubId>/rasa-chatbot:latest
docker push <yourdockerhubId>/rasa-chatbot:latest
```

Now, that your container is created, let's run our application and deploy our model !

```bash
ovhai app run --name rasa-back \
--unsecure-http \
--default-http-port 5005 \
--cpu 4 \
--volume <model-output-container>@GRA:/workspace/trained-models:RO \
-e JWT_SECRET=<JWT_SECRET_KEY> \
<yourdockerhubId>/rasa-chatbot:latest
```

Few explanations here, line by line:
- Il will launch an app in AI Deploy with the name rasa-back
- We specify that our url is not secure by OVHcloud. The model will be in fact secured with a Json web token. The only person who will access your model is the flask frontend application. This is also why your created environment variables before. If you want to know more about json web token, please refer to <https://jwt.io/>. 
- The port of the rasa model is 5005. 
- 4 cpu is sufficient to deploy the model. 
- We will add a volume to get the model file. 
- In the -e argument, please put the jwt secret key you've generated which is in your `.env` file. 
- The last line you specify the docker image to load and also the bash command to run inside the docker container.

Explication of the bash command who run the chatbot (you can found it inside the dockerfile) :
- `rasa run` : run a specific model to be use with others applications
- `-m trained-models` : Here, we specify the path to the models trained before. 
- `--cors "*"` : Enable all cors, our front end application must have access to the model
- `--debug` : Print all of the logs for each user connected and disconnected
- `--connector socketio` : Specify this connector to enable connection to create a new website
- `--credentials "crendentials.yml"`: Specify here the path of the credentials file
- `--endpoints "endpoints.yml"` : Specify the path of the "endpoints.yml file 
- `rasa run actions` : The custom actions you've made before to launch them and use them. 

Now, you can wait that your app is started. Once she is started, you can go on the url and.. nothing special will happen.
Just a small message with **hello from Rasa 3.2.0** ! 

For better interactions, we will now deploy the Flask frontend.
For easiness, everything is on the cloned Git repository. 

#### Deploy the front End App

* Create the dockerfile


First, we will need to create the dockerfile. This dockerfile is already created and it is in the folder `front-end`. Here is what she look like : 

```
FROM python:3.8

WORKDIR /workspace
ADD . /workspace

RUN pip install --no-cache-dir -r requirements_flask.txt


RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace



EXPOSE 5000

CMD python3 app.py
```

Let's now run the app on AI Deploy ! To do so, you will need to create a docker image. Go on the folder `front-end` (`ai-training-examples/apps/flask/conversational-rasa-chatbot/front-end`) and run simply : 

```bash
docker build . -f flask.Dockerfile -t <yourdockerhubId>/flask-app:latest
docker push <yourdockerhubId>/flask-app:latest
```

* Deploy the Docker image

Once built, let's run the frontend application with the ovhai CLI. 
But just before, get the url of your backend Rasa chatbot. It will be something like this : **https://259b36ff-fc61-46a5-9a25-8d9a7b9f8ff6.app.gra.training.ai.cloud.ovh.net/**. You can have it with the cli by listing all of your app and get the one you want. 

Now you can run this command : 

```bash
ovhai app run --name flask-app \
--token <token> \
--default-http-port 5000 \
-e API_URL=<RasaURL_Previously_Copied> \
--cpu 2 \
<yourdockerhubId>/flask-app:latest 
```

That's it ! On the URL of this app, you can speak to your chatbot ! Try to have a simple conversation ! And if you reload the page, you can notice that the chatbot go back to zero. So every user is different on each machine. 

Here is an example of a discussion with the chatbot : 

![image](images/result.jpg){.thumbnail}


## Go further

If you want to see how the model is created and train it with AI Notebooks please follow this tutorial 

[How to create and train a rasa chatbot](https://docs.ovh.com/gb/en/publiccloud/ai/)
  
If you want to train a rasa chatbot with the tool AI Training, please look at this tutorial. 

[How to train a chatbot with docker and AI Training](https://docs.ovh.com/gb/en/publiccloud/ai/)
  
If you want to use more features about Rasa, please fill free to go into this link. We use Rasa Open Source and not Rasa X. 

[Rasa Open source](https://rasa.com/docs/rasa/)

If you want to know more about the framework flask please go to this link :
 
[Flask Framework](https://flask.palletsprojects.com/en/2.2.x/)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/go/ovhcloud)
