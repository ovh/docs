---
title: AI Training - Tutorial - Train a model to recognize marine mammal sound 
excerpt: Understand how to train a model using AI Training
updated: 2023-07-20
---

## Objective

The aim of the tutorial is to understand how to train a model with AI Training in order to classify sounds. 

This is the next step after you have designed the model with AI Notebooks.
You can see the Notebook step in the tutorial [Audio analysis and classification with AI](/pages/platform/ai/notebook_tuto_06_marine_mammal_sounds_classification/).

> [!primary]
>
> It's strongly recommended to have followed the Notebook tutorial before doing this tutorial.
>

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)
- A Public Cloud project created
- The ovhai CLI interface installed on your system (more information [here](/pages/platform/ai/cli_10_howto_install_cli))
- [Docker](https://www.docker.com/get-started) installed and configured to build images
- A OCI / Docker image registry, you can use a public registry (like [Docker Hub](https://hub.docker.com/) for example) or a private registry. Refer to the [Creating a private registry](/pages/platform/private-registry/creating-a-private-registry/) documentation to create a private registry based on Harbor
- Knowledge about building images with [Dockerfile](https://docs.docker.com/engine/reference/builder/)

## Instructions

### Create object storages for data

To train the model, you'll need data and a place to save the trained model.
You can reuse the previous object storage used in the Notebook tutorial [Audio analysis and classification with AI](/pages/platform/ai/notebook_tuto_06_marine_mammal_sounds_classification/) or follow the step _Uploading your dataset on Public Cloud Storage_ of this tutorial.

### Train your model

To train the model, we will use AI Training. This tool is much more powerful. It will allow you to automate your pipelines and build fine-tuning phases easily.

AI Training allows you to train models directly from your own Docker images.

First, you need to create a Python script that is responsible to do the training.

You can copy and paste the following code in a file named `train-audio-classification.py`:

```python
import numpy as np
import pandas as pd

# preprocessing
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

# model
from keras.models import load_model
import tensorflow as tf
from tensorflow.keras.models import Sequential

########################################################################################################################################################
# The goal of this script is to train a pre-construct model to recognize marine mammal sound.                                                          #
# See the Notebook "notebook-marine-sound-classification" in the ai-training-examples for                                                              #
# more details : https://github.com/ovh/ai-training-examples/blob/main/notebooks/audio/audio-classification/notebook-marine-sound-classification.ipynb #
# You must mount 2 volumes for the data and the model (the same used for the Notebook for example 😉) :                                                #
#   - /workspace/saved_model where the model is stored                                                                                                 #
#   - /workspace/data where store the data for the training                                                                                            #
########################################################################################################################################################


# 🗃 Load pre-transform data
df = pd.read_csv('/workspace/data/data.csv')
# dataframe shape
df.shape
# dataframe types
df.dtypes

# 🔢 Encode the labels (0 => 44) 
class_list = df.iloc[:,-1]
encoder = LabelEncoder()
y = encoder.fit_transform(class_list)
print("y: ", y)

# 🧹 Uniformize data thanks to the initial data 
input_parameters = df.iloc[:, 1:27]
scaler = StandardScaler()
X = scaler.fit_transform(np.array(input_parameters))
print("X:", X)

# ⚗️ Create training and validation sets
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size = 0.2)

# 🧠 Load the pre-trained model 
model = load_model('/workspace/saved_model/my_model')
print(model.summary())

# 💪 Train the model with data
model.compile(optimizer = 'adam', loss = 'sparse_categorical_crossentropy', metrics = 'accuracy')
batch_size = 128
model.fit(X_train, y_train, validation_data = (X_val, y_val), epochs = 100, batch_size = batch_size)

# 💿 Save the model for futur usages
model.save('/workspace/saved_model/my_model2')
print('End of training')
```

Then, create a `requirements.txt` file to declare the Python dependencies:

```
tensorflow
numpy==1.22.4
pandas
scikit-learn
keras
```

Then, create a Dockerfile compliant with AI Training.
You can copy and paste the following code in a file named `Dockerfile`:

```docker
FROM --platform=linux/x86_64 python:3.8

WORKDIR /workspace
ADD . /workspace

RUN pip install -r requirements.txt

# Mandatory to run the jobs in rootless mode
RUN chown -R 42420:42420 /workspace

CMD [ "python3"  , "/workspace/train-audio-classification.py"]
```

Then, build the Docker image and push it in the registry:

```bash
docker build . -f Dockerfile -t <regristry-name>/marine-mammal-job:1.0.0
docker push <regristry-name>/marine-mammal-job:1.0.0
```

Output should be like this:

```bash
$ docker build . -f Dockerfile -t my-registry.gra7.container-registry.ovh.net/ai/marine-mammal-job:1.0.0
...
 => => naming to my-registry.gra7.container-registry.ovh.net/ai/marine-mammal-job:1.0.0

$ docker push my-registry.gra7.container-registry.ovh.net/ai/marine-mammal-job:1.0.0                                                     
The push refers to repository [my-registry.gra7.container-registry.ovh.net/ai/marine-mammal-job]
6e5b7acfda9e: Pushed 
..
1.0.0: digest: sha256:72f19493662aafe3d0a3dc35ea5ab76b8472bd6a709de2da1a52e7ebf8ab7ad1 size: 3054 
```

Once your Docker image is created and pushed into the registry, you can directly use the `ovhai` command to create your model training.
You can launch the training specifying more or less GPU depending on the speed you want for your training.

> [!primary]
>
> If your images are stored in a private registry, please follow the documentation [Registries - Use & manage your registries](/pages/platform/ai/gi_07_manage_registry/) to add your registry. 
>

```bash
ovhai job run \
	--name marine-audio-classification-job \
	--gpu 1 \
	--volume marine-mammal-model@GRA/:/workspace/saved_model:RWD:cache \
	--volume marine-mammal-sounds@GRA/:/workspace/data:RWD:cache \
	<registry name>/ai/marine-mammal-job:1.0.0
```

Output should be like this:

```bash
$ ovhai job run \
	--name marine-audio-classification-job \
	--gpu 1 \
	--volume marine-mammal-model@GRA/:/workspace/saved_model:RWD:cache \
	--volume marine-mammal-sounds@GRA/:/workspace/data:RWD:cache \
	my-registry.gra7.container-registry.ovh.net/ai/marine-mammal-job:1.0.0

Id:         c0c0878c-5564-4660-889a-65724f6e3056
Created At: 04-07-23 14:05:58
Updated At: 04-07-23 14:05:58
User:       my-user
Spec:
  Image:                my-registry.gra7.container-registry.ovh.net/ai/marine-mammal-job:1.0.0
  Command:              
  Env Vars:             ~
  Default Http Port:    8080
  Unsecure Http:        false
  Resources:
    Gpu:               1
    Cpu:               13
    Memory:            40.0 GiB
    Public Network:    1.5 Gbps
    Private Network:   0 bps
    Ephemeral Storage: 750.0 GiB
    Gpu Model:         Tesla-V100S
    Gpu Brand:         NVIDIA
    Gpu Memory:        32.0 GiB
    Flavor:            ai1-1-gpu
  Volumes:
  - Source:
      Container: marine-mammal-model
      Alias:     GRA
      Prefix:    
      Archive:   ~
    Target: ~
    Mount:
      Mount Path: /workspace/saved_model
      Permission: Read & Write & Delete
    Cache:  true
  - Source:
      Container: marine-mammal-sounds
      Alias:     GRA
      Prefix:    
      Archive:   ~
    Target: ~
    Mount:
      Mount Path: /workspace/data
      Permission: Read & Write & Delete
    Cache:  true
  Timeout:              0
  Timeout Auto Restart: false
  Shutdown:             ~
  Name:                 marine-audio-classification-job
  Labels:
    ovh/id:   c0c0878c-5564-4660-889a-65724f6e3056
    ovh/type: job
  Ssh Public Keys:      ~
Status:
  State:           QUEUED
  Ip:              ~
  External Ip:     ~
  Info:
    Message: Job submitted
  History:
    STATE      DATE
    QUEUED     04-07-23 14:05:58
  Data Sync:       ~
  Duration:        0s
  Url:             https://c0c0878c-5564-4660-889a-65724f6e3056.job.gra.ai.cloud.ovh.net
  Info Url:        https://ui.gra.ai.cloud.ovh.net/job/c0c0878c-5564-4660-889a-65724f6e3056
  Ssh Url:         ~
  Monitoring Url:  ~
  Volumes:
  - Mount Path:     /workspace/saved_model
    Id:             81d501c7-8488-4e83-be57-f846a7521fe4
    User Volume Id: 77e923e7-a15b-4442-ad10-37c7eb3eeeca
  - Mount Path:     /workspace/data
    Id:             23fe6d5d-1b9e-401c-b5c9-e3b221bc4cc6
    User Volume Id: 16ab3584-84d1-417a-b33b-e4ff367c516c
```

You can access the execution logs of your job with the CLI:

```bash
ovhai job logs <job id> -f       
```

Output should be like this:

```bash
$ ovhai job logs c0c0878c-5564-4660-889a-65724f6e3056 -f

Starting to watch job logs2023-07-04T15:13:08Z [job] 2023-07-04 15:13:08.579602: I tensorflow/core/util/port.cc:110] oneDNN custom operations are on. You may see slightly different numerical results due to floating-point round-off errors from different computation orders. To turn them off, set the environment variable `TF_ENABLE_ONEDNN_OPTS=0`.
2023-07-04T15:13:08Z [job] 2023-07-04 15:13:08.582765: I tensorflow/tsl/cuda/cudart_stub.cc:28] Could not find cuda drivers on your machine, GPU will not be used.
...
2023-07-04T15:13:10Z [job] Skipping registering GPU devices...
2023-07-04T15:13:11Z [job] y:  [ 0  0  0 ... 44 44 44]
2023-07-04T15:13:11Z [job] X: [[-7.35979608e-01  2.06324223e-01  1.16956344e+00 ...  5.84987427e-01
2023-07-04T15:13:11Z [job]    5.93760708e-01 -4.47715498e-01]
2023-07-04T15:13:11Z [job]  [-6.79393058e-01  4.87389689e-01  1.43717311e+00 ...  6.24553399e-01
2023-07-04T15:13:11Z [job]    1.01619027e-01 -4.27615790e-01]
2023-07-04T15:13:11Z [job]  [-6.95846736e-01  1.96218503e-01  1.15618207e+00 ...  5.78436340e-01
2023-07-04T15:13:11Z [job]    9.53233744e-01 -1.29323842e-01]
2023-07-04T15:13:11Z [job]  ...
2023-07-04T15:13:11Z [job]  [-2.82393403e-01  6.98660564e-01 -8.70768342e-01 ...  4.16732718e-01
2023-07-04T15:13:11Z [job]    8.25026056e-01  1.64726948e-01]
2023-07-04T15:13:11Z [job]  [-1.06498353e-01 -1.16538834e-01  8.56199626e-01 ...  2.10513829e-01
2023-07-04T15:13:11Z [job]    1.61386821e-03  5.61172162e-01]
2023-07-04T15:13:11Z [job]  [ 1.77002149e+00 -6.27526483e-01  1.28201588e-02 ...  6.97330140e-01
2023-07-04T15:13:11Z [job]    5.26611477e-01  6.67499260e-01]]
2023-07-04T15:13:11Z [job] Model: "sequential"
2023-07-04T15:13:11Z [job] _________________________________________________________________
2023-07-04T15:13:11Z [job]  Layer (type)                Output Shape              Param #   
2023-07-04T15:13:11Z [job] =================================================================
2023-07-04T15:13:11Z [job]  dense (Dense)               (None, 512)               13824     
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job]  dropout (Dropout)           (None, 512)               0         
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job]  dense_1 (Dense)             (None, 256)               131328    
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job]  dropout_1 (Dropout)         (None, 256)               0         
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job]  dense_2 (Dense)             (None, 128)               32896     
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job]  dropout_2 (Dropout)         (None, 128)               0         
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job]  dense_3 (Dense)             (None, 64)                8256      
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job]  dropout_3 (Dropout)         (None, 64)                0         
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job]  dense_4 (Dense)             (None, 45)                2925      
2023-07-04T15:13:11Z [job]                                                                  
2023-07-04T15:13:11Z [job] =================================================================
2023-07-04T15:13:11Z [job] Total params: 189,229
2023-07-04T15:13:11Z [job] Trainable params: 189,229
2023-07-04T15:13:11Z [job] Non-trainable params: 0
2023-07-04T15:13:11Z [job] _________________________________________________________________
2023-07-04T15:13:11Z [job] None
2023-07-04T15:13:11Z [job] Epoch 1/100
82/82 [==============================] - 2s 13ms/step - loss: 0.1473 - accuracy: 0.9586 - val_loss: 0.1022 - val_accuracy: 0.9637
2023-07-04T15:13:13Z [job] Epoch 2/100
82/82 [==============================] - 1s 12ms/step - loss: 0.1220 - accuracy: 0.9597 - val_loss: 0.1044 - val_accuracy: 0.9668
2023-07-04T15:13:14Z [job] Epoch 3/100
...
```

For more explanation about the CLI command for AI Training, please read this guide: [CLI Reference](/pages/platform/ai/cli_15_commands_reference).

Once you have your model ready, deploy the model to use it.
This will be done with the tool AI Deploy from the Public Cloud.

## Go further

All the source code is available on the OVHcloud GitHub organization: https://github.com/ovh/ai-training-examples/tree/main/jobs/audio/audio-classification

To create the application using the trained model, you can follow the tutorial [Deploy an app for audio classification task using Streamlit](/pages/platform/ai/deploy_tuto_03_streamlit_sounds_classification/)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)