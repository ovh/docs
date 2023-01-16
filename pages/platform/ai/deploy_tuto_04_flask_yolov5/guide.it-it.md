---
title: AI Deploy - Tutorial - Deploy a web service for YOLOv5 using Flask
slug: deploy/web-service-yolov5
excerpt: How to deploy a web service for YOLOv5 using your own weights with Flask
section: AI Deploy - Tutorials
order: 04
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/deploy/web-service-yolov5/'
---

**Last updated 16th January, 2023.**

> [!primary]
>
> AI Deploy is in `beta`. During the beta-testing phase, the infrastructure’s availability and data longevity are not guaranteed. Please do not use this service for applications that are in production, as this phase is not complete.
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

The purpose of this tutorial is to show how to deploy a web service for YOLOv5 using your own weights generated after training a YOLOv5 model on your dataset.

In order to do this, you will use [Flask](https://flask.palletsprojects.com/en/2.0.x/), an open-source micro framework for web development in Python. You will also learn how to build and use a custom Docker image for a Flask application.

For more information on how to train YOLOv5 on a custom dataset, refer to the following [documentation](https://docs.ovh.com/it/publiccloud/ai/notebooks/yolov5-example/).

## Requirements

-   access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
-   an AI Deploy project created inside a Public Cloud project
-   a [user for AI Deploy](https://docs.ovh.com/it/publiccloud/ai/users)
-   [Docker](https://www.docker.com/get-started) installed on your local computer
-   some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/)
-   your weights obtained from training a YOLOv5 model on your dataset (refer to the *"Export trained weights for future inference"* part of the [notebook for YOLOv5](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/object-detection/miniconda/notebook_object_detection_yolov5.ipynb)

## Instructions

First, the tree structure of your folder should be as follows.

![image](images/tree_flask-yolov5_service.png){.thumbnail}

-   You have to create the folder named `models_train` and this is where you can store the weights generated after your trainings. You are free to put as many weight files as you want in the `models_train` folder.

-   Here we will mainly discuss how to write the `app.py` code, the `requirements.txt` file and the `Dockerfile`. If you want to see the whole code, please refer to the [GitHub](https://github.com/ovh/ai-training-examples/tree/main/apps/flask/object-detection-yolov5-app) repository.

### Write the Flask application

Create a Python file named `app.py`.

Inside that file, import your required modules:

``` {.python}
import sys
import io
from PIL import Image
import cv2
import torch
from flask import Flask, render_template, request, make_response
from werkzeug.exceptions import BadRequest
import os
```

Create Flask app:

``` {.python}
app = Flask(__name__)
```

Load your own weights:

Here a python dictionary is created to store the name of each of your weight files (key) and the corresponding model (value).

``` {.python}
# create a python dictionary for your models d = {<key>: <value>, <key>: <value>, ..., <key>: <value>}
dictOfModels = {}
# create a list of keys to use them in the select part of the html code
listOfKeys = []
```

Write the inference function:

``` {.python}
def get_prediction(img_bytes,model):
    img = Image.open(io.BytesIO(img_bytes))
    # inference
    results = model(img, size=640)  
    return results
```

Define the GET method:

``` {.python}
@app.route('/', methods=['GET'])
def get():
  # in the select we will have each key of the list in option
  return render_template("index.html", len = len(listOfKeys), listOfKeys = listOfKeys)
```

Define the POST method:

``` {.python}
@app.route('/', methods=['POST'])
def predict():
    file = extract_img(request)
    img_bytes = file.read()
    # choice of the model
    results = get_prediction(img_bytes,dictOfModels[request.form.get("model_choice")])
    print(f'User selected model : {request.form.get("model_choice")}')
    # updates results.imgs with boxes and labels
    results.render()
    # encoding the resulting image and return it
    for img in results.ims:
        RGB_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        im_arr = cv2.imencode('.jpg', RGB_img)[1]
        response = make_response(im_arr.tobytes())
        response.headers['Content-Type'] = 'image/jpeg'
    return response

def extract_img(request):
    # checking if image uploaded is valid
    if 'file' not in request.files:
        raise BadRequest("Missing file parameter!")
    file = request.files['file']
    if file.filename == '':
        raise BadRequest("Given file is invalid")
    return file
```

Define the main and start your app:

``` {.python}
if __name__ == '__main__':

    print('Starting yolov5 webservice...')
    # Getting directory containing models from command args (or default 'models_train')
    models_directory = 'models_train'
    if len(sys.argv) > 1:
        models_directory = sys.argv[1]
    print(f'Watching for yolov5 models under {models_directory}...')
    for r, d, f in os.walk(models_directory):
        for file in f:
            if ".pt" in file:
                # example: file = "model1.pt"
                # the path of each model: os.path.join(r, file)
                model_name = os.path.splitext(file)[0]
                model_path = os.path.join(r, file)
                print(f'Loading model {model_path} with path {model_path}...')
                dictOfModels[model_name] = torch.hub.load('ultralytics/yolov5', 'custom', path=model_path, force_reload=True)
                # you would obtain: dictOfModels = {"model1" : model1 , etc}
        for key in dictOfModels :
            listOfKeys.append(key) # put all the keys in the listOfKeys

    # starting app
    app.run(debug=True,host='0.0.0.0')
```

Find more information about the Flask application [here](https://flask.palletsprojects.com/en/2.0.x/quickstart/#a-minimal-application) to get ready to use it.

### Write the requirements.txt file for the application

The `requirements.txt` file will allow us to write all the modules needed to make our application work. This file will be useful when writing the `Dockerfile`.

``` {.console}
Flask==2.1.0
torch==1.13.1
torchvision==0.14.1
psutil==5.9.4
IPython==8.8.0
requests==2.28.2
PyYAML==6.0
tqdm==4.64.1
pandas==1.5.2
opencv-python-headless==4.6.0.66
matplotlib==3.6.3
seaborn==0.12.2
```

### Write the Dockerfile for the application

Your Dockerfile should start with the the `FROM` instruction indicating the parent image to use. In our case we choose to start from a python:3.8 image:

``` {.console}
FROM python:3.8
```

Create the home directory and add your files to it:

``` {.console}
WORKDIR /workspace
ADD . /workspace
```

Install the `requirements.txt` file which contains your needed Python modules using a `pip install ...` command:

``` {.console}
RUN pip install -r requirements.txt
```

Define your default launching command to start the application:

``` {.console}
CMD [ "python" , "/workspace/app.py" ]
```

Give correct access rights to **ovhcloud user** (`42420:42420`):

``` {.console}
RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace
```

### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

``` {.console}
docker build . -t flask-yolov5:latest
```

> [!primary]
>
> The dot `.` argument indicates that your build context (place of the **Dockerfile** and other needed files) is the current directory.

> [!primary]
>
> The `-t` argument allows you to choose the identifier to give to your image. Usually image identifiers are composed of a **name** and a **version tag** `<name>:<version>`. For this example we chose **flask-yolov5:latest**.

### Test it locally (optional)

Launch the following **Docker command** to launch your application locally on your computer:

``` {.console}
docker run --rm -it -p 5000:5000 --user=42420:42420 flask-yolov5:latest
```

> [!primary]
>
> The `-p 5000:5000` argument indicates that you want to execute a port redirection from the port **5000** of your local machine into the port **5000** of the Docker container. The port **5000** is the default port used by **Flask** applications.

> [!warning]
>
> Don't forget the `--user=42420:42420` argument if you want to simulate the exact same behaviour that will occur on **AI Deploy apps**. It executes the Docker container as the specific OVHcloud user (user **42420:42420**).

Once started, your application should be available on `http://localhost:5000`.

### Push the image into the shared registry

> [!warning]
>
> The shared registry of AI Deploy should only be used for testing purpose. Please consider attaching your own Docker registry. More information about this can be found [here](https://docs.ovh.com/it/publiccloud/ai/training/add-private-registry).

Find the adress of your shared registry by launching this command:

``` {.console}
ovhai registry list
```

Login on the shared registry with your usual openstack credentials:

``` {.console}
docker login -u <user> -p <password> <shared-registry-address>
```

Push the compiled image into the shared registry:

``` {.console}
docker tag flask-yolov5:latest <shared-registry-address>/flask-yolov5:latest
docker push <shared-registry-address>/flask-yolov5:latest
```

### Launch the AI Deploy app

The following command starts a new app running your Flask application:

``` {.console}
ovhai app run --default-http-port 5000 --cpu 4 <shared-registry-address>/flask-yolov5:latest
```

> [!primary]
>
> `--default-http-port 5000` indicates that the port to reach on the app URL is the `5000`.

> [!primary]
>
> `--cpu 4` indicates that we request 4 CPUs for that app.

> [!primary]
>
> Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.

## Go further

- You can imagine deploying a **Flask** app in order to to classify the feelings in a text. Refer to this [tutorial](https://docs.ovh.com/it/publiccloud/ai/deploy/tuto-flask-hugging-face-sentiment-analysis/).
- Another way to create an AI Deploy app is to use **Streamlit**! [Here it is](https://docs.ovh.com/it/publiccloud/ai/deploy/build-use-streamlit-image/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
