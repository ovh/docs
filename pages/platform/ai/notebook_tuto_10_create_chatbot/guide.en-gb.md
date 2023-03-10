---
title: AI Notebooks - Tutorial - Create, Modify and train a Rasa chatbot
slug: notebook/create-rasa-chatbot
excerpt: Understand how to create and train a chatbot with AI Notebooks.
section: AI Notebooks -  Tutorials
order: 10
---

**Last updated 9th December, 2022.**

## Objective

The aim of the tutorial is to understand how to create and train a chatbot model with AI Notebook. We will create and train the chatbot with a vscode notebook. We will also propose you to train a chatbot in a jupyter notebook. This notebook has data which is more advanced than a simple chatbot. There is an another tutorial where you can train your chatbot with the tool `AI Training`. Here is the link [how to train a chatbot with AI Training](https://confluence.ovhcloud.tools/display/~victor.vitcheff@corp.ovh.com/Part+2+Train+a+chatbot+with+AI+Training).

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

Now, if you already have train some models with AI Training by following the tutorial ([Train with AI Training](https://confluence.ovhcloud.tools/x/BIaBDw)), you can skip the next part and go directly [here](#launch-an-ai-notebook).

### Understand storage concepts

The obvious goal about using object storage and not the local storage of the AI Notebook, is to de-correlate compute and storage, allowing us to stop or delete the notebook while keeping the data safe.
If you want to know more about data storage concept please fill free to check this : [Create an object container](https://docs.ovh.com/gb/en/storage/object-storage/pcs/create-container/). 

For the chatbot, we will create one object storage bucket. This bucket will be filled over time by our trained model output. The container where the model will be saved don't have to be created. When we will launch our notebook, the container will be automatically created. 

Now, let's start to create and train our chatbot. To do this, clone the [repo git](https://github.com/ovh/ai-training-examples) and go directly in the folder `notebooks/natural-language-processing/conversational/miniconda/rasa-chatbot/`. Now, let's run the Jupyter notebook !

#### Create and train a chatbot with a Jupyter notebook

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

In this notebook I propose to you to create from scratch the chatbot, train it and speak with him. To do this, you will just have to run all the cells in the jupyter notebook. But for this, don't forget to copy the jupyter notebook in the folder `ai-training-examples/notebooks/natural-language-processing/conversational/miniconda/rasa-chatbot/` at the root of your notebook (`workspace`). 

But just before training the notebook, you must install all the dependencies of rasa. So open a terminal and launch this 2 command !
```console 
pip install --no-cache-dir -r ~/ai-training-examples/notebooks/natural-language-processing/conversational/miniconda/rasa-chatbot/requirements_rasa.txt
pip install nest_asyncio
```

Once you installed all the dependecies, you can run the notebook. 

You've run the jupyter notebook, ok let's speak with him at the end! You can have a small conversation with him, that's great !


## Go further

If you want to use more functionnality about Rasa, please fill free to go into this link. We use Rasa Open Source and not Rasa X. 

[Rasa Open source](https://rasa.com/docs/rasa/)

If you want to deploy your model created with the chatbot, you can follow this tutorial. 

[How to deploy a chatbot](https://docs.ovh.com/gb/en/publiccloud/ai/)

If you want to train a rasa chatbot with the tool AI Training, please look at this tutorial .

[How to train a chatbot with docker and AI Training](https://docs.ovh.com/gb/en/publiccloud/ai/)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
