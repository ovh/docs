---
title: AI Training - Tutorial - Get started with NVIDIA Triton Inference Server and AI Training
slug: training/tuto-triton-inference-server
excerpt: How to use optimally AI models with NVIDIA Triton Inference Server and AI Training
section: AI Training - Tutorials
order: 08
updated: 2023-05-04
---

**Last updated 4th May, 2023.**

## Objective

In order to proceed with Triton Inference Server and see if we can provide the feature to our customers, we need to do some research on it.

The aim of this task is to design how Triton Inference Server could be implemented in our AI Tools.

We need to check if it could work into AI Deploy as it is right now. If it doesnt work, we should think of features to add to Deploy so that Triton could run into it.

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB);
- [ovhai CLI](https://docs.ovh.com/gb/en/publiccloud/ai/cli/install-client/) installed
- An AI Training project created inside a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account;
- A [user for AI Training](https://docs.ovh.com/gb/en/publiccloud/ai/users/);
- [Docker](https://www.docker.com/get-started) installed on your local computer or on a Virtual Machine;
- Some knowledge about Docker images and [Dockerfile](https://docs.docker.com/engine/reference/builder/);
- Some basics on [NVIDIA Triton Inference Server](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/getting_started/quickstart.html)

## Create the model repository

The model repository is the directory in which you place the AI models you want **Triton** to serve.

### Custom models

**Triton Inference Sever** allows you to deploy several models from multiple Deep Learning and Machine Learning frameworks. For example, Triton can serve the following model formats: TensorRT, TensorFlow, PyTorch, ONNX, ...

Follow the NVIDIA Triton Inference Server [user guide](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/index.html) to know more about the capabilities.

To use custom AI models, the directories and files that compose a model repository must follow a **required layout**.

```console
├── <model-repository-path>/
    └── <model-name>/
        └── [config.pbtxt]
        └── [<output-labels-file> ...]
        └── <version>/
            └── <model-definition-file>
        └── <version>/
            └── <model-definition-file>
        ...
    └── <model-name>/
        └── [config.pbtxt]
        └── [<output-labels-file> ...]
        └── <version>/
            └── <model-definition-file>
        └── <version>/
            └── <model-definition-file>
        ...
    ...
```

Find more information on how to use custom models with Triton in this [documentation](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/model_repository.html).

An example model repository is included in the `docs/examples/model_repository`.

> [!primary]
>
> We will use these [models already trained](https://github.com/triton-inference-server/server/tree/main/docs/examples/model_repository) in this tutorial.
>

### Sample models

First of all, you have to clone locally the Triton Inference Server GitHub repository.

> [!primary]
>
> In this command, specify also the version of Triton you are interested in. For this example, we will use the `r23.03`.
>

Clone the GitHub repository:

```console
git clone -b r23.03 https://github.com/triton-inference-server/server.git
```

Before using the repository, you have to fetch any missing model definition files from their public model zoos via the provided script: `etch_models.sh`.

```console
cd server/docs/examples
./fetch_models.sh
```

### Upload the models to an Object Storage container

To upload the models to an OVHcloud Object Storage container, you can use the `ovhai` [CLI](https://docs.ovh.com/gb/en/publiccloud/ai/cli/access-object-storage-data/).

```console
ovhai bucket object upload my-models@GRA model_repository/ --remove-prefix model_repository/
```

Once your models have been uploaded, check that all your models are available:

```console
ovhai bucket object list my-models@GRA
```
You should obtain:

```console
DATE                       BYTES    NAME                                              DESCRIPTION ETAG
2023-05-04T12:45:41.643960 31.2 MiB densenet_onnx/1/model.onnx                        Object      c037b5c86fdfc940900b309299657f92
2023-05-04T12:45:41.663860 387 B    densenet_onnx/config.pbtxt                        Object      d0479dc66442434320897957068e5d51
2023-05-04T12:45:41.668330 10.1 KiB densenet_onnx/densenet_labels.txt                 Object      8ea0e7b022e01f34c5cccecbdf90b14f
2023-05-04T12:45:41.664780 91.3 MiB inception_graphdef/1/model.graphdef               Object      4b0459bcf60c61cf2ec759ff89ebbbb7
2023-05-04T12:45:41.672190 340 B    inception_graphdef/config.pbtxt                   Object      7c62d703609e2db1145cbb709ed0bf35
2023-05-04T12:45:41.659140 10.1 KiB inception_graphdef/inception_labels.txt           Object      aafe29c3854eda34886973b95036e66d
2023-05-04T12:45:41.668390 310 B    simple/1/model.graphdef                           Object      de0bafd39f604ea09ca677fc79c70bb5
2023-05-04T12:45:41.663640 370 B    simple/config.pbtxt                               Object      c805202e04542e47a8473181f9dcd0b9
2023-05-04T12:45:41.778020 879 B    simple_dyna_sequence/1/model.graphdef             Object      bce7d0674c80275ccb865a14eaa0c29a
2023-05-04T12:45:41.786770 2.6 KiB  simple_dyna_sequence/config.pbtxt                 Object      ffe0ca21fb2fd3352f976d139869a87e
2023-05-04T12:45:41.783670 531 B    simple_identity/1/model.savedmodel/saved_model.pb Object      eb2ce10be33de0013d98b26348cc8818
2023-05-04T12:45:41.789540 242 B    simple_identity/config.pbtxt                      Object      5994e38fdf5f2789a0dc942dfdeff422
2023-05-04T12:45:41.822000 281 B    simple_int8/1/model.graphdef                      Object      ff193cfa1d711e1e0d647e7f0d09965d
2023-05-04T12:45:41.888750 371 B    simple_int8/config.pbtxt                          Object      fa24596d26d5d03b6c78c02dacabe039
2023-05-04T12:45:41.949530 621 B    simple_sequence/1/model.graphdef                  Object      9c3c5501f283e1a1c955b299b027811c
2023-05-04T12:45:41.971580 2.1 KiB  simple_sequence/config.pbtxt                      Object      fd5b8ae1375aef54998845c4690b7af9
2023-05-04T12:45:42.042580 696 B    simple_string/1/model.graphdef                    Object      4b8239460b9c647e71e0d79e3f42d1c1
2023-05-04T12:45:42.056610 382 B    simple_string/config.pbtxt                        Object      840206b87fb3259eabdc3bb6478ab687
```

## Launch Triton with AI Training

Triton is optimized to provide the best inferencing performance by using **GPUs**. In this tutorial, it will be running with one GPU thanks to OVHcloud **AI Training** tool.

First of all, pull the **Triton sever** Docker image with the corresponding version of Triton:

```console
docker pull nvcr.io/nvidia/tritonserver:23.03-py3
```

### Customize the Triton server Docker image for OVHcloud AI Tools

To make the Triton server image compatible with AI Training, you have to rebuild the image by giving the OVHcloud user rights on the `/workspace` content.

#### Create the Dockerfile

Your **Dockerfile** should start with the `FROM` instruction indicating the parent image to use. In our case we choose to start from the `FROM nvcr.io/nvidia/tritonserver:23.03-py3` pulled image:

```console
FROM nvcr.io/nvidia/tritonserver:23.03-py3
```

Create the home directory and copy your files to it:

```console
WORKDIR /workspace
COPY . /workspace
```

Give correct access rights to the OVHcloud user (42420:42420):

> [!warning]
>
> Don't forget the `--user=42420:42420` argument if you want to simulate the exact same behaviour that will occur on **AI Training jobs**. It executes the Docker container as the specific OVHcloud user (user **42420:42420**).
>

```console
RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace
```

#### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

```console
docker build . -t triton-server:latest
```

> [!primary]
>
> The dot `.` argument indicates that your build context (place of the **Dockerfile** and other needed files) is the current directory.
>
> The `-t` argument allows you to choose the identifier to give to your image. Usually image identifiers are composed of a **name** and a **version tag** `<name>:<version>`. For this example we chose **triton-server:latest**.
>

> [!warning]
>
> Please make sure that the docker image you will push in order to run containers using AI products respects the **linux/AMD64** target architecture. You could, for instance, build your image using **buildx** as follows:
>
> `docker buildx build --platform linux/amd64 ...`
>

#### Push the server image into the shared registry

> [!warning]
>
> The shared registry of AI Training should only be used for testing purposes. Please consider attaching your own registry. More information about this can be found [here](https://docs.ovh.com/gb/en/publiccloud/ai/training/add-private-registry/).
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
docker tag triton-server:latest <shared-registry-address>/triton-server:latest
docker push <shared-registry-address>/triton-server:latest
```

### Launch Triton Server in a dedicated job

Triton Inference Server exposes both **HTTP/REST** and **GRPC** endpoints. Therefore, clients can communicate with Triton using either an HTTP/REST and GRPC protocols.

> [!primary]
>
> AI Training allows only one port to be exposed. To do this, choose the method that suits you and launch the corresponding job while benefiting from the power of GPUs.
>

#### HTTP/REST protocol

If you have chosen the HTTP protocol, specify the corresponding port: `8000`.

```console
ovhai job run --default-http-port 8000 \
              --gpu 1 \
              --unsecure-http \
              --volume my-models@GRA:/workspace/models:RO \
              <shared-registry-address>/triton-server:latest \
              -- bash -c 'tritonserver --model-repository=/workspace/models'
```

In order for the client to communicate with the Triton server via the HTTP protocol, you must retrieve the **server job url**.

```console
ovhai job get <job_id> -o json | jq '.status.url' -r
```
You can verify that Triton is running properly.

```console
curl -v <job_url>/v2/health/ready
```

You should obtain the following result:

```console
...
< HTTP/1.1 200 OK
< Content-Length: 0
< Content-Type: text/plain
```

#### gRPC protocol

If you have chosen the HTTP protocol, specify the corresponding port: `8001`.

```console
ovhai job run --default-http-port 8001 \
              --gpu 1 \
              --unsecure-http \
              --volume my-models@GRA:/workspace/models:RO \
              <shared-registry-address>/triton-server:latest \
              -- bash -c 'tritonserver --model-repository=/workspace/models'
```

In order for the client to communicate with the Triton server via the gRPC protocol, you must retrieve the **server job ip**.

```console
ovhai job get <job_id> -o json | jq '.status.ip' -r
```

## Send inference requests

First, you have to use a `docker pull` to get the client libraries and examples image from NGC.

```console
docker pull nvcr.io/nvidia/tritonserver:23.03-py3-sdk
```

### Test it locally (optional)

```console
docker run -it --rm --net=host nvcr.io/nvidia/tritonserver:23.03-py3-sdk
```

Then, test the **densenet_onnx** model on the example image.

> [!warning]
>
> Don't forget to specify the **job_url** to be able to send http requests.
>

```console
/workspace/install/bin/image_client -u <server_job_url> -m densenet_onnx -c 3 -s INCEPTION /workspace/images/mug.jpg
```

You should obtain the following result:

```console
Image '/workspace/images/mug.jpg':
15.346230 (504) = COFFEE MUG
13.224326 (968) = CUP
10.422965 (505) = COFFEEPOT
```

### Customize the Triton client Docker image for OVHcloud AI Tools

Here, the method is exactly the same as the one used previously for the **Triton server**. Refer to the part concerning Triton server Docker image for more details.

#### Create the Dockerfile

```console
FROM nvcr.io/nvidia/tritonserver:23.03-py3-sdk

WORKDIR /workspace
COPY . /workspace

RUN chown -R 42420:42420 /workspace
ENV HOME=/workspace
```

#### Build the Docker image from the Dockerfile

Launch the following command from the **Dockerfile** directory to build your application image:

```console
docker build . -t triton-client:latest
```

#### Push the client image into the shared registry

Push the compiled image into the shared registry:

```console
docker tag triton-client:latest <shared-registry-address>/triton-client:latest
docker push <shared-registry-address>/triton-client:latest
```

### Launch a Triton Client job for inference

Run the example image client inside an AI Training job to perform image classification using the example **densenet_onnx** model.

To be able to classify your own images, you can create an Object Container in the **OVHcloud Object Storage** and add your images there:

```console
ovhai bucket object upload my-images@GRA image_repository/ --remove-prefix image_repository/
```

To send a request for the **densenet_onnx** model use an image from the `/workspace/images` directory. In this case we ask for the top 3 classifications.

#### HTTP/REST protocol

You just have to use the `-u` flag to point at the gRPC endpoint on Triton. The inference server URL will be your **server job URL**.

> [!warning]
>
> You should have obtained this **server job URL** when launching the Triton server for HTTP in the step *Launch Triton Server in a dedicated job*.
>

Launch the inference job for HTTP protocol:

```console
ovhai job run \
     --cpu 1 \
     --volume my-images@GRA:/workspace/images:RO \
     <shared-registry-address>/triton-client:latest \
     -- bash -c '/workspace/install/bin/image_client -u <server_job_url> -m densenet_onnx -c 3 -s INCEPTION /workspace/images/'
```

Once your job is in `RUNNING`, check the logs to obtain the results of the classification.

```console
ovhai job logs <job_id> --from job
```

You should obtain something like that:

```console
2023-05-04T08:53:39Z Request 0, batch size 1
2023-05-04T08:53:39Z Image '/workspace/images/apple.jpg':
2023-05-04T08:53:39Z 0.935811 (949) = GRANNY SMITH
2023-05-04T08:53:39Z Request 1, batch size 1
2023-05-04T08:53:39Z Image '/workspace/images/car.jpg':
2023-05-04T08:53:39Z 0.225608 (628) = LIMOUSINE
2023-05-04T08:53:39Z Request 2, batch size 1
2023-05-04T08:53:39Z Image '/workspace/images/dog.jpg':
2023-05-04T08:53:39Z 0.634973 (264) = PEMBROKE
```

#### gRPC protocol

If you want to use the **gRPC protocol** by providing the `-i` flag.

You must also use the `-u` flag to point at the gRPC endpoint on Triton. The inference server URL will be your **server job IP**.

> [!warning]
>
> You should have obtained this **server job IP** when launching the Triton server for gRPC in the step *Launch Triton Server in a dedicated job*.
>

Launch the inference job for gRPC protocol:

```console
ovhai job run \
     --cpu 1 \
     --volume my-images@GRA:/workspace/images:RO \
     <shared-registry-address>/triton-client:latest \
     -- bash -c '/workspace/install/bin/image_client -i grpc -u <server_job_ip>:8001 -m densenet_onnx -c 3 -s INCEPTION /workspace/images/'
```

Once your job is in `RUNNING`, check the logs to obtain the results of the classification.

```console
ovhai job logs <job_id> --from job
```

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
