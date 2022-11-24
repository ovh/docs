---
title: AI Deploy - Tutorial - Deploy an app for audio classification task using Streamlit
slug: deploy/tuto-streamlit-sounds-classification
excerpt: How to deploy a Streamlit app to classify marine mammal sounds
section: AI Deploy - Tutorials
order: 03
---

**Last updated 24th November, 2022.**

> [!primary]
>
> AI Deploy is in `beta`. During the beta-testing phase, the infrastructure’s availability and data longevity are not guaranteed. Please do not use this service for applications that are in production, as this phase is not complete.
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

The purpose of this tutorial is to deploy an application to classify sounds from a pre-trained model.

The use case is marine mammal sounds, a topic already covered in a previous [tutorial](https://blog.ovhcloud.com/ai-notebooks-analyze-and-classify-sounds-with-ai/).

In order to do this, you will use [Streamlit](https://streamlit.io/), a Python framework that turns scripts into a shareable web application. You will also learn how to build and use a custom Docker image for a Streamlit application.

Overview of the app:

![Overview](images/overview-streamlit-sounds.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au);
- An AI Deploy project created inside a [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account;
- A [user for AI Deploy](https://docs.ovh.com/au/en/publiccloud/ai/users/);
- [Docker](https://www.docker.com/get-started) installed on your local computer;
- Some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/);
- You also should have followed the steps of the marine mammal sounds classification notebook from the [GitHub repository](https://github.com/ovh/ai-training-examples/blob/main/notebooks/audio/audio-classification/notebook-marine-sound-classification.ipynb). You will be able to obtain your `data.csv` file and save your model.

## Instructions

You are going to follow different steps to build your Streamlit application.

- More information about Streamlit capabilities can be found [here](https://docs.streamlit.io/en/stable/).
- Direct link to the full python file can be found here [here](https://github.com/ovh/ai-training-examples/tree/main/apps/streamlit/audio-classification-app).

### Write the Streamlit application

Create a Python file named `app.py`.

Inside that file, import your required modules.

```python
import streamlit as st
import librosa
import csv
import os
import numpy as np
import pandas as pd
from PIL import Image
from keras.models import load_model
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import LabelEncoder
```

Create the function that allows to save the uploaded sounds in an `Object Container`.

```python
def save_file(sound_file):
    # save your sound file in the right folder by following the path
    with open(os.path.join('audio_files/', sound_file.name),'wb') as f:
         f.write(sound_file.getbuffer())
    return sound_file.name
```

Create the function that allows to transform each sound into a `csv` file.

```python
def transform_wav_to_csv(sound_saved):
    # define the column names
    header_test = 'filename length chroma_stft_mean chroma_stft_var rms_mean rms_var spectral_centroid_mean spectral_centroid_var spectral_bandwidth_mean \
        spectral_bandwidth_var rolloff_mean rolloff_var zero_crossing_rate_mean zero_crossing_rate_var harmony_mean harmony_var perceptr_mean perceptr_var tempo mfcc1_mean mfcc1_var mfcc2_mean \
        mfcc2_var mfcc3_mean mfcc3_var mfcc4_mean mfcc4_var'.split()
    # create the csv file
    file = open(f'csv_files/{os.path.splitext(sound_saved)[0]}.csv', 'w', newline = '')
    with file:
        writer = csv.writer(file)
        writer.writerow(header_test)      
    # calculate the value of the librosa parameters
    sound_name = f'audio_files/{sound_saved}'
    y, sr = librosa.load(sound_name, mono = True, duration = 30)
    chroma_stft = librosa.feature.chroma_stft(y = y, sr = sr)
    rmse = librosa.feature.rms(y = y)
    spec_cent = librosa.feature.spectral_centroid(y = y, sr = sr)
    spec_bw = librosa.feature.spectral_bandwidth(y = y, sr = sr)
    rolloff = librosa.feature.spectral_rolloff(y = y, sr = sr)
    zcr = librosa.feature.zero_crossing_rate(y)
    mfcc = librosa.feature.mfcc(y = y, sr = sr)
    to_append = f'{os.path.basename(sound_name)} {np.mean(chroma_stft)} {np.mean(rmse)} {np.mean(spec_cent)} {np.mean(spec_bw)} {np.mean(rolloff)} {np.mean(zcr)}'
    for e in mfcc:
        to_append += f' {np.mean(e)}'
    # fill in the csv file
    file = open(f'csv_files/{os.path.splitext(sound_saved)[0]}.csv', 'a', newline = '')
    with file:
        writer = csv.writer(file)
        writer.writerow(to_append.split())
    # create test dataframe
    df_test = pd.read_csv(f'csv_files/{os.path.splitext(sound_saved)[0]}.csv')
    # each time you add a sound, a line is added to the test.csv file
    # if you want to display the whole dataframe, you can deselect the following line
    #st.write(df_test)
    return df_test
```

Define the function that classifies the sounds from the previously trained model.

> [!primary]
>
> To learn more about how you can save a model with TensorFlow, please refer to the **step 8** *"Save the model for future inference"* of the [notebook](https://github.com/ovh/ai-training-examples/blob/main/notebooks/audio/audio-classification/notebook-marine-sound-classification.ipynb).
>

> [!primary]
>
> Here you will use your trained model, then save it in an Object Container. Click [here](https://docs.ovh.com/au/en/publiccloud/ai/cli/data-cli/) to learn more about Object Storage.
>

```python
def classification(dataframe):
    # create a dataframe with the csv file of the data used for training and validation
    df = pd.read_csv('csv_files/data.csv')
    # OUTPUT: labels => last column
    labels_list = df.iloc[:,-1]
    # encode the labels (0 => 44)
    converter = LabelEncoder()
    y = converter.fit_transform(labels_list)
    # INPUTS: all other columns are inputs except the filename
    scaler = StandardScaler()
    X = scaler.fit_transform(np.array(df.iloc[:, 1:27]))
    X_test = scaler.transform(np.array(dataframe.iloc[:, 1:27]))
    # load the pretrained model
    model = load_model('saved_model/my_model')
    # generate predictions for test samples
    predictions = model.predict(X_test)
    # generate argmax for predictions
    classes = np.argmax(predictions, axis = 1)
    # transform class number into class name
    result = converter.inverse_transform(classes)
    return result
```

In the sidebar, if you have chosen `Prediction`, you will access the `choice_prediction` function.

It allows you to upload a sound file, convert it to a `csv` file and obtain the classification result by calling the functions defined previously.

```python
def choice_prediction():
    st.write('# Prediction')
    st.write('### Choose a marine mammal sound file in .wav format')
    # upload sound
    uploaded_file = st.file_uploader(' ', type='wav')
    if uploaded_file is not None:  
        # view details
        file_details = {'filename':uploaded_file.name, 'filetype':uploaded_file.type, 'filesize':uploaded_file.size}
        st.write(file_details)
        # read and play the audio file
        st.write('### Play audio')
        audio_bytes = uploaded_file.read()
        st.audio(audio_bytes, format='audio/wav')
        # save_file function
        save_file(uploaded_file)
        # define the filename
        sound = uploaded_file.name
        # transform_wav_to_csv function
        transform_wav_to_csv(sound)
        st.write('### Classification results')
        # if you select the predict button
        if st.button('Predict'):
            # write the prediction: the prediction of the last sound sent corresponds to the first column
            st.write("The marine mammal is: ",  str(classification(transform_wav_to_csv(sound))).replace('[', '').replace(']', '').replace("'", '').replace('"', ''))
    else:
        st.write('The file has not been uploaded yet')
    return
```

All that remains is to define the `main`, where the sidebar and the home page are created.

```python
if __name__ == '__main__':
    st.image(Image.open('logo_ovh.png'), width=200)
    st.write('___')
    # create a sidebar
    st.sidebar.title('Marine mammal sounds classification')
    select = st.sidebar.selectbox('', ['Marine mammals', 'Prediction'], key='1')
    st.sidebar.write(select)
    # if sidebar selection is "Prediction"
    if select=='Prediction':
        # choice_prediction function
        choice_prediction()
    # else: stay on the home page
    else:
        st.write('# Marine mammals')
        st.write('The different marine mammals studied are the following.')
        st.write('For more information, please refer to this [link](https://cis.whoi.edu/science/B/whalesounds/index.cfm).')
        st.image(Image.open('marine_mammal_animals.png'))
```

### Write the requirements.txt file for the application

The `requirements.txt` file will allow us to write all the modules needed to make our application work. This file will be useful when writing the `Dockerfile`.

```console
streamlit
```

Here we will mainly discuss how to write the `app.py` code, the `requirements.txt` file and the `Dockerfile`. If you want to see the whole code, please refer to the [GitHub repository](https://github.com/ovh/ai-training-examples/tree/main/apps/streamlit/audio-classification-app).

### Write the Dockerfile for the application

Your Dockerfile should start with the the `FROM` instruction indicating the parent image to use. In our case we choose to start from the `one-for-all` OVHcloud image:

```console
ovhcom/ai-training-one-for-all
```

Create the home directory and add your files to it:

```console
WORKDIR /workspace
ADD . /workspace
```

Install the `requirements.txt` file which contains your needed Python modules using a `pip install ...` command:

```console
RUN pip install -r requirements.txt
```

Define your default launching command to start the application:

```console
CMD [ "streamlit" , "run" , "/workspace/app.py", "--server.address=0.0.0.0" ]
```

Give correct access rights to **ovhcloud user** (`42420:42420`):

```console
RUN chown -R 42420:42420 /workspace
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

### Test it locally (optional)

Launch the following **Docker command** to launch your application locally on your computer:

```console
docker run --rm -it -p 8501:8501 --user=42420:42420 streamlit_app:latest
```

> [!primary]
>
> The `-p 8501:8501` argument indicates that you want to execute a port redirection from the port **8501** of your local machine into the port **8501** of the Docker container. The port **8501** is the default port used by **Streamlit** applications.
>

> [!warning]
>
> Don't forget the `--user=42420:42420` argument if you want to simulate the exact same behaviour that will occur on **AI Deploy apps**. It executes the Docker container as the specific OVHcloud user (user **42420:42420**).
>

Once started, your application should be available on `http://localhost:8501`.

### Push the image into the shared registry

> [!warning]
>
> The shared registry of AI Deploy should only be used for testing purpose. Please consider attaching your own Docker registry. More information about this can be found [here](https://docs.ovh.com/au/en/publiccloud/ai/training/add-private-registry/).
>

Find the address of your shared registry by launching this command:

```console
ovhai registry list
```

Log in on the shared registry with your usual OpenStack credentials:

```console
docker login -u <user> -p <password> <shared-registry-address>
```

Push the compiled image into the shared registry:

```console
docker tag streamlit_app:latest <shared-registry-address>/streamlit_app:latest
docker push <shared-registry-address>/streamlit_app:latest
```

### Launch the AI Deploy app

The following command starts a new app running your Streamlit application:

```console
ovhai app run --default-http-port 8501 \
      --cpu 1 \
      --volume <my_csv_files>@<region>/:/workspace/csv_files:RW \
      --volume <my_audio_files>@<region>/:/workspace/audio_files:RW \
      --volume <my_saved_model>@<region>/:/workspace/saved_model:RO \
      <shared-registry-address>/streamlit_app:latest
```

> [!primary]
>
> `--default-http-port 8501` indicates that the port to reach on the app URL is the `8501`.
>
> `--cpu 1` indicates that we request 1 CPU for that app.
>

To launch your Streamlit app, you need to attach **3 volumes** to your app.

The first volume contains the csv files from the transformation of the sound files. By launching the app, this Object Container contains only the data.csv file created from **step 4** *"Data preprocessing"* of the [notebook](https://github.com/ovh/ai-training-examples/blob/main/notebooks/audio/audio-classification/notebook-marine-sound-classification.ipynb).

> [!primary]
>
> `--volume <my_csv_files>@<region>/:/workspace/csv_files:RW` is the first volume attached for storing **csv files**. This volume is read/write (`RW`) because new `csv` files will be created and saved each time a new sound is uploaded.
>

The second volume contains the sound files that you will upload directly from the Streamlit app. By running the app, this Object Container is empty. It will fill up as the sound files are uploaded.

> [!primary]
>
> `--volume <my_audio_files>@<region>/:/workspace/audio_files:RW` is the second volume attached for storing **audio files**. This volume is read/write (`RW`) attached because new audio files will be saved there.
>

The third container contains the model that you trained before in **step 8** *"Save the model for future inference"* of the [notebook](https://github.com/ovh/ai-training-examples/blob/main/notebooks/audio/audio-classification/notebook-marine-sound-classification.ipynb).

> [!primary]
>
> `--volume <my_saved_model>@<region>/:/workspace/saved_model:RO` is the third volume attached for using your **pretrained model**. This volume is read-only (`RO`) because you just need to use the model and not make any changes to this Object Container.
>

If you want your notebook to be accessible without the need to authenticate, specify it as follows.

> [!primary]
>
> Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.
>

## Go further

- You can imagine deploying an AI model with an other tool: **Gradio**. Refer to this [tutorial](https://docs.ovh.com/au/en/publiccloud/ai/deploy/tuto-gradio-sketch-recognition/).
- Another way to create an AI Deploy app is to use **Flask**! [Here it is](https://docs.ovh.com/au/en/publiccloud/ai/deploy/web-service-yolov5/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
