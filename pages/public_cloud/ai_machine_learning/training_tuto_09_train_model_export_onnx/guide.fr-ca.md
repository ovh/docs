---
title: "AI Training - Tutoriel - Entraîner un modèle PyTorch et l'exporter au format ONNX (EN)"
excerpt: "Comment entraîner et exporter un modèle de classification d'images au format ONNX avec AI Training"
updated: 2023-11-27
---

## Objective

The aim of this tutorial is to show you how to train a custom PyTorch model and export it into **ONNX** ([Open Neural Network Exchange](https://onnx.ai/)) format.

The goal is to train your own image classification model on the famous [MNIST](http://yann.lecun.com/exdb/mnist/) dataset. At the end of the model training, it will be is saved in PyTorch format (`.pt`) and then transformed into ONNX.

Exporting your model in ONNX format allows you to **optimize the inference** of a Machine Learning model.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- A Public Cloud project created.
- The ovhai CLI interface installed on your system (more information [here](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli)).
- [Docker](https://www.docker.com/get-started) installed and configured to build images.
- An OCI / Docker image registry. You can use a public registry (such as [Docker Hub](https://hub.docker.com/) for example) or a private registry. Refer to the [Creating a private registry](/pages/public_cloud/containers_orchestration/managed_private_registry/creating-a-private-registry) documentation to create a private registry based on Harbor.
- Knowledge about building images with [Dockerfile](https://docs.docker.com/engine/reference/builder/).

## Instructions

### Create Object Storage bucket for you ONNX model

To be able to retrieve and use the ONNX model at the end of training, you need to create an empty bucket to store it.

#### Create your bucket via UI (Control Panel)

If you do not feel comfortable with commands, this method may be more intuitive.

First, go to the `Public Cloud` section of the [OVHcloud Control Panel](/links/manager).

Then, select the `Object Storage` section (in the Storage category) and create a new object container by clicking `Storage` > `Object Storage` > `Create an object container`.

You can create the bucket that will store your ONNX model at the end of the training. Select the container *type* and the *region* that match your needs.

#### Create your bucket via ovhai CLI

To follow this part, make sure you have installed the [ovhai CLI](https://cli.bhs.ai.cloud.ovh.net/) on your computer or on an instance.

As in the Control Panel, you will have to specify the `region`and the `name` (**cnn-model-onnx**) of your bucket. Create your Object Storage bucket as follows:

```bash
ovhai bucket create <region> cnn-model-onnx
```

### Write the model training Python code

To train the model, we will use AI Training. This powerful tool will allow you to train your AI models from your own Docker images.

You need to create a Python script that is in charge of doing the training: `train_image_classification.py`.

First, import the Python dependencies.

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
from torch.autograd import Variable
from torchvision import datasets, transforms
```

Then, define the Neural Network architecture.

```python
class Network(nn.Module):

    def __init__(self):
        super(Network, self).__init__()
        self.conv1 = nn.Conv2d(1, 20, 5, 1)
        self.conv2 = nn.Conv2d(20, 50, 5, 1)
        self.fc1 = nn.Linear(4*4*50, 500)
        self.fc2 = nn.Linear(500, 10)

    def forward(self, x):
        x = F.relu(self.conv1(x))
        x = F.max_pool2d(x, 2, 2)
        x = F.relu(self.conv2(x))
        x = F.max_pool2d(x, 2, 2)
        x = x.view(-1, 4*4*50)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)

        return F.log_softmax(x, dim=1)
```

Now, define the `load_data` function.

```python
def load_data():

    train_loader = torch.utils.data.DataLoader(
    datasets.MNIST('/workspace/data', train=True, download=True,
                   transform=transforms.Compose([
                       transforms.ToTensor(),
                       transforms.Normalize((0.1307,), (0.3081,))
                   ])),
        batch_size=64, shuffle=True)

    test_loader = torch.utils.data.DataLoader(
    datasets.MNIST('/workspace/data', train=False, transform=transforms.Compose([
                       transforms.ToTensor(),
                       transforms.Normalize((0.1307,), (0.3081,))
                   ])),
    batch_size=64, shuffle=True)

    return train_loader, test_loader
```

Check the **GPU availability**.

```python
def check_gpu():

    if torch.cuda.is_available():
        device = torch.device('cuda:0')
        print('Running on GPU...')
    else:
        device = torch.device('cpu')
        print('Running on CPU...')

    return device
```

Next, define the function that will **train** your model.

```python
def train_model(model, device, train_loader, optimizer, epoch):

    model.train()

    running_loss=0
    correct=0
    total=0

    for data in train_loader:

        inputs, labels = data[0].to(device), data[1].to(device)

        optimizer.zero_grad()
        outputs = model(inputs)
        loss = F.nll_loss(outputs, labels)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

        _, predicted = outputs.max(1)
        total += labels.size(0)
        correct += predicted.eq(labels).sum().item()

    train_loss = running_loss/len(train_loader)
    accu = 100.*correct/total

    train_losses.append(train_loss)
    train_accu.append(accu)

    print('Training - Loss: %.3f | Accuracy: %.3f'%(train_loss, accu))

    return
```

You can also define the function that will **test** your model.

```python
def test_model(model, device, test_loader):

    model.eval()

    running_loss=0
    correct=0
    total=0

    with torch.no_grad():

        for data in test_loader:

            images,labels=data[0].to(device), data[1].to(device)

            outputs = model(images)
            loss = F.nll_loss(outputs, labels)
            running_loss+=loss.item()

            _, predicted = outputs.max(1)
            total += labels.size(0)
            correct += predicted.eq(labels).sum().item()

    test_loss = running_loss/len(test_loader)
    accu = 100.*correct/total

    test_losses.append(test_loss)
    test_accu.append(accu)

    print('Validation - Loss: %.3f | Accuracy: %.3f'%(test_loss,accu))

    return
```

Finally, export the model to **ONNX format** thanks to the following function.

```python
def export_onnx(model):

    model.load_state_dict(torch.load('/workspace/models/model_mnist_classification.pt'))

    dummy_input = torch.randn(1, 1, 28, 28, device="cuda")
    torch.onnx.export(model, dummy_input, "/workspace/models/model_mnist_classification.onnx")

    return
```

It's now time to call these functions into the `main`!

```python
if __name__ == '__main__':

    train_loader, test_loader = load_data()   

    device =  check_gpu()
    model = Network().to(device)
    optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.5)

    train_losses, train_accu, test_losses, test_accu = ([] for i in range(4))

    for epoch in range(0, 10):
        print('\nEpoch %d/%d:'%(epoch, 10))
        train_model(model, device, train_loader, optimizer, epoch)
        test_model(model, device, test_loader)

    torch.save(model.state_dict(),"/workspace/models/model_mnist_classification.pt")
    export_onnx(model)
```

> [!primary]
>
> Find the **full Python code** on our [GitHub repository](https://github.com/ovh/ai-training-examples/blob/main/jobs/onnx/train_image_classification.py).
>


### Create the requirements.txt file

Then, create a [requirements.txt](https://github.com/ovh/ai-training-examples/blob/main/jobs/onnx/requirements.txt) file to declare the Python dependencies and their versions.

```bash
torch==2.0.1
torchvision==0.15.2
onnx==1.14.1
```

### Build your own Docker image

#### Create a Dockerfile compliant with AI Training

The [Dockerfile](https://github.com/ovh/ai-training-examples/blob/main/jobs/onnx/Dockerfile) should start with the `FROM` instruction indicating the parent image to use. In our case we choose to start from a `python:3.10` image.

Then, precise the workspace path, install the Python dependencies and launch the model training using the `CMD`.

```docker
FROM python:3.10

WORKDIR /workspace
ADD . /workspace

RUN pip install -r requirements.txt

CMD [ "python3"  , "/workspace/train_image_classification.py"]

RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace
```

#### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

```console
docker build . -t train-cnn-model-export-onnx:latest
```

> [!primary]
>
> - The dot `.` argument indicates that your build context (place of the **Dockerfile** and other needed files) is the current directory.
>
> - The `-t` argument allows you to choose the identifier to give to your image. Usually image identifiers are composed of a **name** and a **version tag** `<name>:<version>`. For this example we chose **train-cnn-model-export-onnx:latest**.
>

> [!warning]
>
> Please make sure that the docker image you will push in order to run containers using AI products respects the **linux/AMD64** target architecture. You could, for instance, build your image using **buildx** as follows:
>
> `docker buildx build --platform linux/amd64 ...`
>

#### Push the image into the shared registry

> [!warning]
>
> The shared registry of AI Deploy should only be used for testing purposes. Please consider attaching your own docker registry. More information about this can be found [here](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry). The images pushed to this registry are for AI Tools workloads only, and will not be accessible for external uses.
>

Find the address of your shared registry by launching this command:

```console
ovhai registry list
```

Log in on the shared registry with your usual AI Platform user credentials:

```console
docker login -u <user> -p <password> <shared-registry-address>
```

Push the compiled image into the shared registry:

```console
docker tag train-cnn-model-export-onnx:latest <shared-registry-address>/train-cnn-model-export-onnx:latest
docker push <shared-registry-address>/train-cnn-model-export-onnx:latest
```

Once your Docker image is created and pushed into the registry, you can directly use the `ovhai` command to create your model training.
You can launch the training specifying more or less GPU depending on the speed you want for your training.

> [!primary]
>
> If your images are stored in a private registry, please follow the documentation [Registries - Use & manage your registries](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry) to add your registry.
>

### Launch the AI Training job

You can launch the training job using the UI or the CLI.

#### Create your training job via UI (Control Panel)

If you do not feel comfortable with commands, this method may be more intuitive.

First, go to the `Public Cloud` section of the [OVHcloud Control Panel](/links/manager).

Then, select the `AI Training` section (in the AI & Machine Learning category) and create a new job by clicking `AI Training` > `Launch a new job`.

You can create the job that will train your model and export it to ONNX model. Select the *region* and add your *custom docker image* (`<shared-registry-address>/train-cnn-model-export-onnx:latest`).

Then attach your *Object Storage container* `cnn-model-onnx` and define the mount directory: `/workspace/models`.

Finally, *configure your job* and choose at least `1 GPU`.

#### Create your training job via ovhai CLI

The following command starts the training:

```bash
ovhai job run \
	--name <job_name> \
	--gpu 1 \
	--volume cnn-model-onnx@<region>/:/workspace/models:RW \
	<shared-registry-address>/train-cnn-model-export-onnx:latest
```

Then you can check the training evolution through the job logs:

```bash
ovhai job logs <job_id>
```

## Go further

 Check our other tutorials to learn how to:

- [Use Transfer Learning with ResNet50 for image classification](/pages/public_cloud/ai_machine_learning/notebook_tuto_07_transfer_learning_resnet50_image_classification)

- [Fine-Tune and export AI model to ONNX through an AI Notebook](/pages/public_cloud/ai_machine_learning/notebook_tuto_15_finetune_export_onnx_model)

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)
