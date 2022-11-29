---
title: AI Deploy - Tutorial - Deploy and call a spam classifier with FastAPI
slug: deploy/tuto-fastapi-spam-classifier
excerpt: How to deploy and call an API for spam classification using FastAPI
section: AI Deploy - Tutorials
order: 08
---

**Last updated 29th November, 2022.**

> [!primary]
>
> AI Deploy is in `beta`. During the beta-testing phase, the infrastructure’s availability and data longevity are not guaranteed. Please do not use this service for applications that are in production, as this phase is not complete.
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

The objective of this tutorial is to deploy an API for **Spam classification***.

The use case is the [Spam Ham Collection Dataset](https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection).

![Overview](images/overview-spam-classifier.png){.thumbnail}

The objective of this tutorial is to show how it is possible to *create*, *deploy* and *call* an API with **AI Deploy**.

In order to do this, we will use [FastAPI](https://streamlit.io/), a web framework for developing RESTful APIs in Python. You will also learn how to build and use a custom Docker image for a **FastAPI** API.

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we);
- An AI Deploy project created inside a [Public Cloud project](https://www.ovhcloud.com/en/public-cloud/) in your OVHcloud account;
- A [user for AI Deploy](https://docs.ovh.com/us/en/publiccloud/ai/users/);
- [Docker](https://www.docker.com/get-started) installed on your local computer;
- Some knowledge about building image and [Dockerfile](https://docs.docker.com/engine/reference/builder/);
- You also should have followed the tutorial [AI Notebooks - Tutorial - Build your spam classifier](https://docs.ovh.com/us/en/publiccloud/ai/notebooks/tuto-spam-classifier/). Find the code on the [GitHub repository](https://github.com/ovh/ai-training-examples/blob/main/notebooks/natural-language-processing/text-classification/miniconda/spam-classifier/notebook-spam-classifier.ipynb). You will be able to understand the creation of the spam classification model.

## Instructions

You are going to follow different steps to build your **FastAPI** app.

- More information about FastAPI capabilities can be found [here](https://fastapi.tiangolo.com/).
- Direct link to the full code can be found [here](https://github.com/ovh/ai-training-examples/tree/main/apps/fastapi/spam-classifier-api).

Here we will mainly discuss how to write the `model.py` and `app.py` codes, the `requirements.txt` file and the `Dockerfile`. If you want to see the whole code, please refer to the [GitHub repository](https://github.com/ovh/ai-training-examples/tree/main/apps/fastapi/spam-classifier-api).

### Create the API

Two Python files are created for the purpose of defining the model and building the API.

#### Define the model.py file

This Python file is dedicated to build and define the **Logistic Regression** model. You can find the full code [here](https://github.com/ovh/ai-training-examples/blob/main/apps/fastapi/spam-classifier-api/model.py).

> [!primary]
>
> You can find all the information on the method used through this [notebook](https://github.com/ovh/ai-training-examples/blob/main/notebooks/natural-language-processing/text-classification/miniconda/spam-classifier/notebook-spam-classifier.ipynb). You will be able to understand the process and the different steps to follow to build a spam classifier based on **logistic regression**.
>

First, we have to load the [Spam Ham Collection Dataset](https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection).

```python
def load_data():

    PATH = 'SMSSpamCollection'
    df = pd.read_csv(PATH, delimiter = "\t", names=["classe", "message"])
    X = df['message']
    y = df['classe']

    return X, y
```

Then, we create the function to split the dataset for *training* and *test*.

```python
def split_data(X, y):

    ntest = 2000/(3572+2000)
    X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y, test_size=ntest, random_state=0)

    return X_train, y_train
```

The last function allows us to build the model.

```python
def spam_classifier_model(Xtrain, ytrain):

    model_logistic_regression = LogisticRegression()
    model_logistic_regression = model_logistic_regression.fit(Xtrain, ytrain)

    coeff = model_logistic_regression.coef_
    coef_abs = np.abs(coeff)

    quantiles = np.quantile(coef_abs,[0, 0.25, 0.5, 0.75, 0.9, 1])

    index = np.where(coeff[0] > quantiles[1])
    newXtrain = Xtrain[:, index[0]]

    model_logistic_regression = LogisticRegression()

    model_logistic_regression.fit(newXtrain, ytrain)

    return model_logistic_regression, index
```

> [!primary]
>
> By calling the different functions as follows, you will be able to get a **classification result** (spam or not) as well as a **confidence score**.
>

```python
# extract input and output data
data_input, data_output = load_data()

# split data
X_train, ytrain = split_data(data_input, data_output)

# transform and fit training set
vectorizer = CountVectorizer(stop_words='english', binary=True, min_df=10)
Xtrain = vectorizer.fit_transform(X_train.tolist())
Xtrain = Xtrain.toarray()

# use the model and index for prediction
model_logistic_regression, index = spam_classifier_model(Xtrain, ytrain)
```

#### Write the app.py file

Initialize an instance of **FastAPI**.

```python
app = FastAPI()
```

Define the data format.

```python
class request_body(BaseModel):
    message : str
```

Process the message sent by the user.

```python
def process_message(message):

    desc = vectorizer.transform(message)
    dense_desc = desc.toarray()
    dense_select = dense_desc[:, index[0]]

    return dense_select
```

Define the `GET` method.

```python
@app.get('/')
def root():
    return {'message': 'Welcome to the SPAM classifier API'}
```

Create the `POST` method.

> [!primary]
>
> The `classify_message` function allows the user to send a message.
>
> It will then call the model and return the result of the classification.
>

```python
@app.post('/spam_detection_path')
def classify_message(data : request_body):

    message = [
        data.message
    ]

    if (not (message)):
        raise HTTPException(status_code=400, detail="Please Provide a valid text message")

    dense_select = process_message(message)
    label = model_logistic_regression.predict(dense_select)
    proba = model_logistic_regression.predict_proba(dense_select)

    if label[0]=='ham':
        label_proba = proba[0][0]
    else:
        label_proba = proba[0][1]

    return {'label': label[0], 'label_probability': label_proba}
```

> [!primary]
>
> All the functions defined above are in the `app.py` Python file.
>
> You can find the code on the [GitHub repository](https://github.com/ovh/ai-training-examples/blob/main/apps/fastapi/spam-classifier-api/app.py).
>

### Write the requirements.txt file for the API

The `requirements.txt` file will allow us to write all the modules needed to make our application work. This file will be useful when writing the `Dockerfile`.

```console
fastapi==0.87.0
pydantic==1.10.2
uvicorn==0.20.0
pandas==1.5.1
scikit-learn==1.1.3
```

### Write the Dockerfile for the application

Your Dockerfile should start with the `FROM` instruction indicating the parent image to use. In our case we choose to start from the `python:3.8` image:

```console
python:3.8
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

Set the listening port of the container:

```console
EXPOSE 8000
```

Define the entrypoint and the default launching command to start the application:

```console
ENTRYPOINT ["uvicorn"]
CMD ["app:app", "--host", "0.0.0.0"]
```

Give correct access rights to an **ovhcloud user** (`42420:42420`):

```console
RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace
```

### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

```console
docker build . -t fastapi-spam-classification:latest
```

> [!primary]
>
> The dot `.` argument indicates that your build context (place of the **Dockerfile** and other needed files) is the current directory.
>
> The `-t` argument allows you to choose the identifier to give to your image. Usually image identifiers are composed of a **name** and a **version tag** `<name>:<version>`. For this example we chose **fastapi-spam-classification:latest**.
>

### Test it locally (optional)

Launch the following **Docker command** to launch your application locally on your computer:

```console
docker run --rm -it -p 8000:8000 --user=42420:42420 fastapi-spam-classification:latest
```

> [!primary]
>
> The `-p 8000:8000` argument indicates that you want to execute a port redirection from the port **8000** of your local machine into the port **8000** of the Docker container. The port **8000** is the default port used by **FastAPI** applications.
>

> [!warning]
>
> Don't forget the `--user=42420:42420` argument if you want to simulate the exact same behaviour that will occur on **AI Deploy apps**. It executes the Docker container as the specific OVHcloud user (user **42420:42420**).
>

Once started, your application should be available on `http://localhost:8000`.

### Push the image into the shared registry

> [!warning]
>
> The shared registry of AI Deploy should only be used for testing purposes. Please consider attaching your own Docker registry. More information about this can be found [here](https://docs.ovh.com/us/en/publiccloud/ai/training/add-private-registry/).
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
docker tag fastapi-spam-classification:latest <shared-registry-address>/fastapi-spam-classification:latest
docker push <shared-registry-address>/fastapi-spam-classification:latest
```

### Launch the AI Deploy app

The following command starts a new app running your FastAPI application:

```console
ovhai app run \
      --default-http-port 8000 \
      --cpu 4 \
      <shared-registry-address>/fastapi-spam-classification:latest
```

> [!primary]
>
> `--default-http-port 8000` indicates that the port to reach on the app URL is the `8000`.
>
> `--cpu 4` indicates that we request 4 CPUs for that app.
>

> [!primary]
>
> Consider adding the `--unsecure-http` attribute if you want your application to be reachable without any authentication.
>

### Interact with the deployed API through the dashboard

By clicking on the link of your AI Deploy app, you will arrive on the following page.

![Overview](images/get-method-fastapi.png){.thumbnail}

How to interact with your API?

You can add `/docs` at the end of the url of your app.

> [!primary]
>
> In our example, the url is as follows: `https://ba2ef330-3e95-444a-a81b-7ca83dff5836.app.gra.training.ai.cloud.ovh.net/docs`
>

It provides a complete dashboard for interacting with the API!

![Overview](images/docs-fastapi.png){.thumbnail}

To be able to send a message for classification, select `/spam_detection_path` in the green box. Click on `Try it out` and type the message of your choice in the dedicated zone.

![Overview](images/post-method-fastapi.png){.thumbnail}

To get the result of the prediction, click on the `Execute` button.

![Overview](images/prediction-message-fastapi.png){.thumbnail}

Congratulations! You have obtained the result of the prediction with the **label** and the **confidence score**.

## Go further

- You can imagine deploying an AI model with an other tool: **Gradio**. Read this [tutorial](https://docs.ovh.com/us/en/publiccloud/ai/deploy/tuto-gradio-sketch-recognition/).
- Another way to create an AI Deploy app is to use **Streamlit**! [Follow this tutorial](https://docs.ovh.com/us/en/publiccloud/ai/deploy/tuto-streamlit-eda-iris/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
