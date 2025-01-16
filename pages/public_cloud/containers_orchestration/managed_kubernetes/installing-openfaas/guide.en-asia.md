---
title: How to install OpenFaaS CE on OVHcloud Managed Kubernetes
excerpt: Find out how to install OpenFaaS CE on OVHcloud Managed Kubernetes
updated: 2025-01-07
---

The following guide details an OpenFaas installation on an OVHcloud Managed Kubernetes Service (MKS) cluster. [OpenFaaS](https://www.openfaas.com/) is a framework to build serverless functions on top of Kubernetes. Before installing OpenFaaS Community Edition (CE), make sure you read the [end-user license agreement (EULA)](https://github.com/openfaas/faas/blob/master/EULA.md), to understand the limits of this version of OpenFaaS vs the Standard and Enterprise edition.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world) documentation.

You also need to have [Helm](https://docs.helm.sh/){.external} installed on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](/pages/public_cloud/containers_orchestration/managed_kubernetes/installing-helm) tutorial.

## OpenFaaS, a Kubernetes-native FaaS platform

![OpenFaas logo](images/openfaas-logo.png){.thumbnail}

[OpenFaaS](https://github.com/openfaas/faas){.external} is an open source framework for building Serverless functions with Docker and Kubernetes.

More details about the OpenFaaS architecture can be found in the [official documentation](https://docs.openfaas.com/architecture/stack).

## Deploying OpenFaaS on OVHcloud Managed Kubernetes

The official Helm chart for OpenFaas is [published on the faas-netes repository](https://github.com/openfaas/faas-netes/blob/master/chart/openfaas){.external}. The following section describes how to install it on your OVHcloud Managed Kubernetes cluster.

### 1. Load the OpenFaaS helm chart repository

The OpenFaaS Helm chart isn't available in Helm's standard `stable` repository. You need to add their repository to your Helm install:

```console
helm repo add openfaas https://openfaas.github.io/faas-netes/
helm repo update
```

### 2. Create the required namespaces

OpenFaaS guidelines advise to create two [namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/), one for OpenFaaS core services and one for the functions:

```
kubectl apply -f https://raw.githubusercontent.com/openfaas/faas-netes/master/namespaces.yml
```

### 3. Generate credentials

To secure the access to OpenFaaS UI Portal and REST API, you can generate a password using the following commands:

```
# generate a random password
PASSWORD=$(head -c 12 /dev/urandom | shasum| cut -d' ' -f1)

kubectl -n openfaas create secret generic basic-auth \
--from-literal=basic-auth-user=admin \
--from-literal=basic-auth-password="$PASSWORD"
```

>[!primary]
> You will need this password later on the tutorial, for example to access the UI portal. You can see it at any moment in the terminal session by doing `echo $PASSWORD`.

### Deploying the Helm chart

The Helm chart can be deployed in three modes: `LoadBalancer`, `NodePort` and `Ingress`. For us the simplest way is simply using our external Load Balancer, so we will deploy it in `LoadBalancer` by setting the `--set serviceType=LoadBalancer` option.

> [!primary]
> If you want to better understand the difference between these three modes, you can read our [dedicated guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-lb/#some-concepts-clusterip-nodeport-ingress-and-loadbalancer).

Deploy the Helm chart:

```console
helm upgrade openfaas --install openfaas/openfaas \
  --namespace openfaas  \
  --set basic_auth=true \
  --set functionNamespace=openfaas-fn \
  --set serviceType=LoadBalancer
```

As suggested in the installation message, you can verify that OpenFaaS has started by running:

```console
kubectl --namespace=openfaas get deployments -l "release=openfaas, app=openfaas"
```

If it's working you should see the list of OpenFaaS `deployment` objects, marked as available:

```console
$ kubectl --namespace=openfaas get deployments -l "release=openfaas, app=openfaas"
NAME           DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
alertmanager   1         1         1            1           33s
faas-idler     1         1         1            1           33s
gateway        1         1         1            1           33s
nats           1         1         1            1           33s
prometheus     1         1         1            1           33s
queue-worker   1         1         1            1           33s
```

### 4. Connect to the Gateway

Get the public IP of your gateway service using:

```console
kubectl get svc -n openfaas gateway-external -o wide
```

> [!warning]
> At this moment, your `EXTERNAL-IP` could be still `PENDING`.
>
>```console
>$ kubectl get svc -n openfaas gateway-external -o wide
> NAME               TYPE           CLUSTER-IP    EXTERNAL-IP                        PORT(S)          AGE
> gateway-external   LoadBalancer   x.x.x.x       PENDING                           8080:30012/TCP   10s
>
>```
>
> The provisioning of the load balancer can take several minutes.
> Check again until the `EXTERNAL-IP` is filled with a public IP address.

Once the public IP address is available, you may access the OpenFaaS UI at `http://PUBLIC_IP:8080`.

![UI Portal](images/ui-portal-01.jpg){.thumbnail}

### 5. Connect using the CLI

Another way to interact with your new OpenFaaS platform is installing `faas-cli`, the command line client for OpenFaaS (on a Linux or Mac, or in a WSL linux terminal in Windows). Download the latest version of the CLI client from the [official release page](https://github.com/openfaas/faas-cli/releases).

You can now use the CLI to log into the gateway. The CLI needs the public IP address of the OpenFaaS `LoadBalancer`, you can get it using the commands from the [previous section](#4-connect-to-the-gateway):

```console
PASSWORD=$(kubectl -n openfaas get secret basic-auth -o jsonpath="{.data.basic-auth-password}" | base64 --decode)
echo -n $PASSWORD | ./faas-cli login -g http://EXTERNAL_IP:8080 -u admin --password-stdin
```

Sample output:

```console
Calling the OpenFaaS server to validate the credentials...
WARNING! Communication is not secure, please consider using HTTPS. Letsencrypt.org offers free SSL/TLS certificates.
credentials saved for admin http://EXTERNAL_IP:8080
```

Now you're connected to the gateway, and you can send commands to the OpenFaaS platform.

By default, there is no function installed on your OpenFaaS platform, as you can verify with the `faas-cli list` command.

```
./faas-cli list -g http://EXTERNAL_IP:8080
```

This section focused on how to install OpenFaaS. The next section will introduce how to import and invoke functions.

## Deploying and invoking functions

You can easily deploy functions on your OpenFaaS platform using the web UI, or the CLI:

[Some sample functions](https://github.com/openfaas/store-functions) are available in the official OpenFaaS project. For example, to import `figlet`, a function that generates ASCII art banners from plain text:

```console
./faas-cli deploy -g http://EXTERNAL_IP:8080 --name figlet --image ghcr.io/openfaas/figlet:latest
```

`faas-cli list` command now will show the deployed functions:

```console
$ ./faas-cli list
Function                        Invocations     Replicas
figlet                          1               1
```

Let's invoke the newly imported functions:

```console
echo 'Hello from OVH MKS' | ./faas-cli invoke -g http://EXTERNAL_IP:8080 figlet
```

This section detailed how to import and use existing functions. The next section will introduce how to create custom functions.

## Writing our first function

### Prerequisites

In order to publish and deploy a function to your MKS cluster, you will need:

* A public container registry accessible from your MKS cluster and your workstation, such as [dockerhub](https://hub.docker.com/) or github registry.

> [!warning]
> At the moment, OpenFaaS Community Edition only supports public images. Check the related documentation for private registries with [OpenFaaS Pro](https://docs.openfaas.com/reference/private-registries/)
>

### Code the function

All available templates are available in the [official template repository](https://github.com/openfaas/templates), or can be listed using:

```
./faas-cli template store list
```

This example will use [NodeJS](https://nodejs.org/){.external} to create a *hello world* function. Let's begin by creating and scaffolding the function folder:

```console
mkdir hello-js-project
cd hello-js-project
../faas-cli new hello-js --lang node20 -g http://EXTERNAL_IP:8080
```

The CLI will download a JS function template from OpenFaaS repository, generate a function description file (`hello-js.yml` in our case) and a folder for the function source code (`hello-js`). For NodeJS, you will find a `package.json` (for example to declare dependencies to your function) and a `handler.js` (the function main code) in this folder.

In `hello-js.yml`, set the following parameters according to your configuration:

- `provider.gateway`: the URL to your OpenFaaS gateway.
- `functions.image`: the URL to your docker registry. In this example, a dockerhub repository will be used.

`hello-js.yml`
```yaml
version: 1.0
provider:
  name: openfaas
  gateway: http://xxxxx657xx.lb.c1.gra.k8s.ovh.net:8080
functions:
  hello-js:
    lang: node
    handler: ./hello-js
    image: docker.io/openfaas/hello-js:latest # The URL to a public repository.
```

The function described in `hello-js/handler.js` is really simple. It exports a function with two parameters, a `context` where you will receive the request data, and a `callback` that you will call at the end of your function and where you will pass the response data.

Now you can build the Docker image and push it to the public Docker registry:

```sh
# Build the image
../faas-cli build -f hello-js.yml
# Login at Docker Registry, needed to push the image
docker login
# Push the image to the registry
../faas-cli push -f hello-js.yml
```

With the image in the registry, let's deploy and invoke the function with the OpenFaaS CLI:

```sh
# Deploy the function
../faas-cli deploy -f hello-js.yml
# Invoke the function
../faas-cli -g http://EXTERNAL_IP:8080 invoke hello-js
# Enter your input, and press Ctrl+D
Hello
# Response:
{"body":"\"Hello\\n\"","content-type":"text/plain"}
```

Congratulations, you have written and deployed your first OpenFaaS function using Node. See the [official documentation](https://docs.openfaas.com/languages/node/) to go further.

## Where do we go from here?

To learn more about OpenFaaS, please refer to the [official OpenFaaS documentation](https://docs.openfaas.com/){.external}. You can also follow the [OpenFaaS workshops](https://github.com/openfaas/workshop){.external} to learn in a more practical way.

## Go further

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](/links/community).
