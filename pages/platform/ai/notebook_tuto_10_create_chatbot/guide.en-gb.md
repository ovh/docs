---
title: AI Notebooks - Tutorial - Create, Modify and train a Rasa chatbot
slug: notebook/create-rasa-chatbot
excerpt: Understand how to create and train a chatbot with AI Notebooks.
section: AI Notebooks -  Tutorials
order: 10
---

**Last updated 9th December, 2022.**

## Objective

The aim of the tutorial is to understand how to create and train a chatbot model with AI Notebook. We will create and train the chatbot with a jupyter notebook. We will also propose you to train a chatbot in a vscode notebook. This notebook has data which is more advanced than a simple chatbot. There is an another tutorial where you can train your chatbot with the tool `AI Training`. Here is the link [how to train a chatbot with AI Training](https://confluence.ovhcloud.tools/display/~victor.vitcheff@corp.ovh.com/Part+2+Train+a+chatbot+with+AI+Training).

We will use the famous open source framework [Rasa](https://rasa.community/) to build the chatbot. The framework [chatette](https://github.com/SimGus/Chatette) has been used to generate some data for rasa in the vscode notebook. 


**Requirements**

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB);
- A Public Cloud project created.
- The ovhai CLI interface installed on your laptop. More information [here](https://docs.ovh.com/gb/en/publiccloud/ai/cli/install-client/).
- A [user for AI Notebooks](https://docs.ovh.com/gb/en/publiccloud/ai/users/);

## Instructions

### Create a token to access your AI services

The first step consists to create an AI applicative token. With this token, you will be able to securely access all of your AI services. 
To do this, launch this command on the terminal once ovhai CLI installed:
Here is the reference to install the CLI : [CLI Installation](https://docs.ovh.com/gb/en/publiccloud/ai/cli/install-client/)

``` bash
ovhai token create -l model=rasabotRW --role operator token-RW-chatbot
```

Token is now created. Don't forget to save the token to use it later.


### Understand storage concepts

For this tutorial, we will create two object storage buckets.
One will be used to read the data we provide to the chatbot and the other will be for saving the chatbot model created. 

We can specify during creation if we want them in read-only, read-write and co.
Splitting input data and output data is a good practice, allowing you faster development code and avoid risk of deleting data.

The obvious goal about using object storage and not the local storage of the AI Notebook, is to de-correlate compute and storage, allowing us to stop or delete the notebook while keeping the data safe.

If you want to know more about data storage concept please fill free to check this : [Create an object container](https://docs.ovh.com/gb/en/storage/object-storage/pcs/create-container/). 

For the chatbot, we will create two object storage buckets. One with all the data to train and the other wil be filled over time by our trained model output. The container where the model will be saved don't have to be created. When we will launch our notebook, the container will be automatically created. 

To create the volume in GRA (Gravelines Datacenter) in read only, clone the [repo git](https://github.com/ovh/ai-training-examples) and then go in the folder `ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot`. After, you will just have to type : 

```bash
ovhai data upload GRA <data-to-train-container> data
```

Your data will be uploaded and created in the container <data-to-train> and mounted with the prefix "data". 3 files will be uploaded : the "nlu.yml" file, the "stories.yml" file and the "rules.yml" file. 

Let's also consider that our root directory is : `ai-training-examples/notebooks/natural-language-processing/chatbot/conda/`. All of our path will start from this directory. Ok let's launch our first notebook.  

### Launch an AI Notebook

We will now create an AI Notebook with VScode. We can create it directly through the control panel, but here we will use the ovhai CLI.

Copy and run this command to launch on your terminal and create the notebook:

``` bash
ovhai notebook run conda vscode \
	--name vscode-ovh-chatbot \
	--framework-version conda-py39-cuda11.2-v22-4 \
	--volume <data-to-train-container>@GRA/data:/workspace/data:ROe \
	--volume <model-output-container>@GRA/:/workspace/trained-models:RW \
	--cpu 10 \
	--token <token> \
	--label model=rasabotRO \
	-s ~/.ssh/id_rsa.pub
```

Few explanations here, line by line:
- It will launch a notebook with the Python Conda framework an VScode editor.
- With the name "vscode-ovh-chatbot".
- We specify a version for the conda framework (Python 3.9). 
- we attach 2 data volumes to the notebook, as explained previously.
- We request 10 CPUs. The more we add, the more performant it is (but more expensive).
- we add the token previously created.
- We labelize this notebook with label "rasabotRO".
- Optional : the last line is the path to your ssh key on your machine. It is important to setup the key here to connect by remote on VScode. If you don't want to, you can connect directly on the web with the token you create before.

> [!primary]
>
> Note that the repository git don't have to be added because it is already present when you create an AI Notebook. 
>

Now, you have an AI Notebook launched! it should take few seconds to become available.

### Connect to the VSCode notebook and install all of the requirements.

Once your notebook is running, you can access it easily by: 

- Web browser by clicking on the url shown in the control panel or `ovhai CLI`. It will ask you a login/password (a OVHcloud Public Cloud user) or the token previously created.
- Remotely via VScode and your SSH Key. More information here : [Connect on VSCode remotely](https://docs.ovh.com/gb/en/publiccloud/ai/training/vscode-remote-code/)

For this tutorial, we log ourself into VScode via **Web browser directly**.

Now, open a terminal and run :   

```
pip install -r ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/requirements_rasa.txt
```

When you finished this you can train your model with different ways. The first one is directly on the notebook in a terminal and the second one is to use the **AI Training Tool** of OVHcloud. The way to do it with the **AI Training Tool** is described in this [tutorial](https://confluence.ovhcloud.tools/display/~victor.vitcheff@corp.ovh.com/Part+2+Train+a+rasa+chatbot+with+one+docker+file). 

### Train your model

We will study there three ways to train your model efficiently : 
- Via a VScode AI Notebook
- via a Jupyter AI Notebook

#### Train the model with a VScode AI Notebook 

So to train the model in the notebook, please run in a terminal this command:

```bash 
rasa train --data data -c ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/config.yml -d ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/domain.yml --out trained-models --endpoints ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/endpoints.yml --force
```

> [!warning]
>
> Be careful ! This command must be run at the root of the terminal because in the `ai-training-examples` folder you can't write the .rasa folder. So be sure you're at the root directory of your project. 

Explication of the command : 
- `rasa train` : Train a rasa model. Take in parameters the configuration of the training, the data and return a `.tar.gz` file. 
- `--data data` : Specify the path to the data folder where you have your stories, rules and intents entries. This is in your object storage container. 
- `-c ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/config.yml` : Specify the path of the file where you have the configuration of your training. 
- `-d ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/domain.yml` : Specify the path of the domain file. In rasa, this file contains all of the intents and how to connect them with your chatbot. For example how your chatbot will be respond if a user say hello. 
- `--out trained-models` : Specify the folder to store the model file. 
- `--endpoints ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/endpoints.yml` : Specify the path of the endpoints files. It could be useful if you want to deploy your model once he is trained. 
- `--force` : Force the training even if there is already a trained model. 

If you're not using your notebook anymore, don't forget to stop it. Get the notebook id and then just run `ovhai notebook stop <notebook-id>` in a terminal.

Now that we have train the model, we can test it. To do this, you can directly go here [Test your model](#test-your-model). The next part will explain how to train your chatbot with a jupyter notebook. 


#### Create and train a chatbot with a Jupyter notebook

If you are more familiar with Jupyter notebook rather than VScode, we made examples where you can create, train and speak to a Rasa chatbot. 
In order to do it you will need to create a Jupyter notebook. You can attach one volume if you want to save the model created. 
Don't forget to put the model inside the folder `trained-models` before stopping your notebook. Here is the command to run: 

```bash
ovhai notebook run conda jupyterlab \
--name jupyter-ovh-chatbot \
--framework-version conda-py39-cuda11.2-v22-4 \
--volume <model-output-container>@GRA/:/workspace/trained-models:RW \
--cpu 10 \
--token <token> \
```

In this notebook I propose to you to create from scratch the chatbot, train it and speak with him. To do this, you will just have to run all the cells in the jupyter notebook. But for this, don't forget to copy the jupyter notebook in the folder `ai-training-examples/notebooks/natural-language-processing/chatbot/conda/jupyter` at the root of your notebook (`workspace`). 

You've run the jupyter notebook, ok let's speak with him at the end!

### Test your model

So, you've trained your model and you want to see if he is returning good results. Let's go back into your VScode notebook. 
Open two terminals. In one of the terminal we will run one custom action and in the second, we will speak with the chatbot. Here is the command for the first terminal : 

```bash
cd ~/ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot
rasa run actions 
```

In rasa, an interaction with a user is described by an intent from an user and a response from the chatbot. The response from the chatbot is called an action. Sometimes and in this case, we need to create some custom actions (filling a form with the user and collect some data). This is the purpose of the command `rasa run actions`. 

In the other terminal, launch: 

```bash
rasa shell -m ~/trained-models --endpoints ~/ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/endpoints.yml
```

Explication of the command : 
- `rasa shell` : load a model and speak with him to test it
- `-m ~/trained-models` : This is to specify the path of where your model is saved. 
- `--endpoints ~/ai-training-examples/notebooks/natural-language-processing/chatbot/conda/rasa_bot/endpoints.yml` : You specify the way of your endpoints.yml file. This file is used to tell where your model is running and the where the port of your custom actions are running. 

This is a small example of what you can get with this command : 

![image](images/discussion.png){.thumbnail}

Congrats ! you can test your first rasa model and speak with him. If you have several models in your folder trained-models, you can specify after the option -m the folder and the specific model you want to train. 

If you want to train a new model, you can go back earlier and run the command rasa train. [Here](#train-your-model) for the full command. 

Once you have your model is ready, we must deploy the model to use it. This will be ensure with the tool AI Deploy from the public cloud.


## Go further

If you want to use more functionnality about Rasa, please fill free to go into this link. We use Rasa Open Source and not Rasa X. 

[Rasa Open source](https://rasa.com/docs/rasa/)

If you want to deploy your model created with the chatbot, you can follow this tutorial. 

[How to deploy a chatbot](https://confluence.ovhcloud.tools/display/~victor.vitcheff@corp.ovh.com/Part+3+deploy+your+rasa+chatbot+with+a+simple+django+app)

If you want to train a rasa chatbot with the tool AI Training, please look at this tutorial .

[How to train a chatbot with only one docker file](https://confluence.ovhcloud.tools/display/~victor.vitcheff@corp.ovh.com/Part+2+Train+a+rasa+chatbot+with+one+docker+file)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
