---
title: AI Training - Tutorial - Train a rasa chatbot with docker and AI Training 
slug: training/train-rasa-chatbot
excerpt: Understand how simple it is to train a chatbot with AI Training.
section: AI Training -  Tutorials
order: 07
---

**Last updated 10th March, 2022.**

## Objective

The aim of the tutorial is to understand how to train a rasa model with AI Training. 
Deployment will be performed in the second part of the tutorial, that you can find here : [How to deploy a chatbot](https://docs.ovh.com/gb/en/publiccloud/ai/).
If you want to access the code, you can find it [here](https://github.com/ovh/ai-training-examples/jobs/rasa-chatbot)  
If you want to create a rasa chatbot with a notebook please follow this tutorial : [Create and train a rasa chatbot](https://docs.ovh.com/gb/en/publiccloud/ai/)

We will use the famous open source framework [Rasa](https://rasa.community/) to build the chatbot and the framework [chatette](https://github.com/SimGus/Chatette) to generate examples of human sentences. 
Both of the frameworks are Python packages.

The tutorial presents a chatbot. 

**Requirements**

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB);
- A Public Cloud project created.
- The ovhai CLI interface installed on your laptop. More information [here](https://docs.ovh.com/gb/en/publiccloud/ai/cli/install-client/).
- A [user for AI Training](https://docs.ovh.com/gb/en/publiccloud/ai/users/);
- [Docker](https://www.docker.com/get-started) installed on your local computer;
- Make sure you have a Docker Hub [account](https://hub.docker.com/);
- Some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/);

## Instructions

### Create a token to access your AI services

The first step consists to create an AI applicative token. With this token, you will be able to securely access all of your AI services. 
To do this, launch this command on the terminal once ovhai CLI installed:

``` bash
ovhai token create -l model=rasabotRW --role operator token-RW-chatbot
```

Token is now created. Don't forget to save the token to use it later.

Now, let's upload the data to train our model on a object container. 

### Understand storage concepts

For this tutorial, we will create two object storage buckets.
One will be used to read the data we provide to the chatbot and the other will be for saving the chatbot model created. 

We can specify during creation if we want them in read-only, read-write and co.
Splitting input data and output data is a good practice, allowing you faster development code and avoid risk of deleting data.

The obvious goal about using object storage and not the local storage of the AI Notebook, is to de-correlate compute and storage, allowing us to stop or delete the notebook while keeping the data safe.

If you want to know more about data storage concept please fill free to check this : [Create an object container](https://docs.ovh.com/gb/en/storage/object-storage/pcs/create-container/). 

For the chatbot, we will create two object storage buckets. One with all the data to train and the other wil be filled over time by our trained model output. The container where the model will be saved don't have to be created. When we will launch our notebook, the container will be automatically created. 

To create the volume in GRA (Gravelines Datacenter), clone the [repo git](https://github.com/ovh/ai-training-examples/) and then go in the folder `jobs/rasa-chatbot`.
`. After, you will just have to type : 

```bash
ovhai data upload GRA <data-to-train-container> data
```

Your data will be uploaded and created in the container <data-to-train> and mounted with the prefix `data`. 3 files will be uploaded : the "nlu.yml" file, the "stories.yml" file and the "rules.yml" file. 

Let's now train our model !

### Train your model

To train the model, we will use AI Training. This tool is much more powerful. It will allow you to automate your pipelines and build fine-tuning phases easily.

AI Training allow you to train models directly from your own Docker images.

First, you need to create a Dockerfile compliant with AI Training. You can find an example here:

```
FROM python:3.8

WORKDIR /workspace
ADD . /workspace

RUN pip install --no-cache-dir -r requirements_rasa.txt


RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace


#If you deploy the chatbot you expose at port 5005.
EXPOSE 5005 


CMD rasa train --force --out trained-models

```
This file can be found in the repository git, you don't have to create it. The file is [here](https://github.com/Victor2103/ai-training-examples/jobs/rasa-chatbot/rasa.Dockerfile).

Second, we will have to build the Docker image and push it inside your public repository (such as Dockerhub) or in a private directory.
Here are the two commands to run inside the folder rasa_bot :

```bash
docker build .  -f rasa.Dockerfile -t <yourdockerhubId>/rasa-chatbot:latest
docker push <yourdockerhubId>/rasa-chatbot:latest
```

Here I decided to use my docker id. To do this, you must be logged in the terminal. To be logged, just run `docker login` in a terminal and fill with your dockerhub's credentials. 

Once your docker image is created and pushed into the repo, you can directly use the ovhai command to create your training of the model. Here is the full command. The training is about 5 minutes. You can change the time of the training if you change the number of gpu or the config file for the rasa training. 
```bash
ovhai job run --name rasa-chatbot \
--gpu 1 \
--volume <data-to-train-container>@GRA/data:/workspace/data:RO \
--volume <model-output-container>@GRA:/workspace/trained-models:RW \
<yourdockerhubId>/rasa-chatbot:latest
```

For more explanation about the CLI command for AI Training please click on this link : [CLI Reference](https://docs.ovh.com/gb/en/publiccloud/ai/cli/overview-cli/).

Explanation here for the command inside the dockerfile:
- rasa train : This command will start to train a model with the NLU data you provide. The training launch some component and follow a pipeline defined in your file config.yml. 
- --force : This line is an option for the Rasa train command. It allows to force Rasa to train a model and not only search if the data provided as been already trained. This option will retrain a model even if the data hasn't changed. 
- --out : This argument permits to say how you want to save your model. Here we saved the model in the folder trained-models and in the container <model-output-container>. 

### Test your model

So, you've trained your model and you want to see if he is returning good results. Let's go ! To do this, let's create a VScode notebook. You can run this command to be fast :
```bash
ovhai notebook run conda vscode \
	--name vscode-ovh-chatbot \
	--framework-version conda-py39-cuda11.2-v22-4 \
	--volume <model-output-container>@GRA:/workspace/trained-models:RW \
	--cpu 10 \
	--token <token> \
```
Then install all the requirements by running in a terminal : 
```bash 
pip install -r ~/ai-training-examples/jobs/rasa-chatbot/requirements_rasa.txt 
```

Now we can test our model !

Open two terminals. In one of the terminal we will run one custom action and in the second, we will speak with the chatbot. Here is the command for the first terminal : 

```bash
cd ~/ai-training-examples/jobs/rasa-chatbot
rasa run actions 
```

In rasa, an interaction with a user is described by an intent from an user and a response from the chatbot. The response from the chatbot is called an action. Sometimes and in this case, we need to create some custom actions (filling a form with the user and collect some data). This is the purpose of the command `rasa run actions`. 

In the other terminal, launch: 

```bash
rasa shell -m ~/trained-models --endpoints ~/ai-training-examples/jobs/rasa-chatbot/endpoints.yml
```

Explication of the command : 
- `rasa shell` : load a model and speak with him to test it
- `-m ~/trained-models` : This is to specify the path of where your model is saved. As see before, your model has been trained and is save in this folder. If you have several models in the folder `trained-models`, you can specify the specific name of the model you want to train in this argument. 
- `--endpoints ~/ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/endpoints.yml` : You specify the way of your endpoints.yml file. This file is used to tell where your model is running and the where the port of your custom actions are running. 

This is a small example of a discussion with the bot : 

![image](images/discussion.png){.thumbnail}


Congrats ! you can test your first rasa model and speak with him. If you have several models in your folder trained-models, you can specify after the option -m the folder and the specific model you want to train. 

If you're not satisfied about the model because your chatbot doesn't respond very well, you can run this command. It will run the job again and create a new model.

```bash
ovhai job rerun <job_id> 
```

To get the job id of the previous job, just run this command to get the list of the job you've run before. 

```bash
ovhai job ls
```

More explanation are here : [CLI Reference](https://docs.ovh.com/gb/en/publiccloud/ai/cli/overview-cli/).


  Once you have your model is ready, we must deploy the model to use it. This will be ensure with the tool AI Deploy from the public cloud.


## Go further

If you want to use more functionnality about Rasa, please fill free to go into this link. We use Rasa Open Source and not Rasa X. 

[Rasa Open source](https://rasa.com/docs/rasa/)

If you want to see how the model is created and train it with AI Notebooks please follow this tutorial 

[How to create and train a rasa chatbot](https://docs.ovh.com/gb/en/publiccloud/ai/)

If you want to deploy your model created with the chatbot, you can follow this tutorial. 

[How to deploy a chatbot](https://docs.ovh.com/gb/en/publiccloud/ai/)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
