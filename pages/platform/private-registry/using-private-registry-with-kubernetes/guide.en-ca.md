---
title: 'Using OVHcloud Managed Private Registry with OVHcloud Managed Kubernetes'
excerpt: ''
slug: using-private-registry-with-kubernetes
section: 'Tutorials'
---

**Last updated 17<sup>th</sup> January, 2020.**

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   color: #ccc;
   font-family: monospace !important;
   font-size: 0.75em;
 }
 .small {
     font-size: 0.75em;
 }
</style>

# Using OVHcloud Managed Private Registry with OVHcloud Managed Kubernetes

In this tutorial we are going to guide you in using images from OVHcloud Managed Private Registry service on OVHcloud Managed Kubernetes clusters.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../kubernetes/deploying-hello-ovh/) documentation.

You also need to have a working OVHcloud Managed Private Registry and have followed the guides on [creating a private registry](../creating-a-private-registry/), [connecting to the UI](../connecting-to-the-ui/), [managing users and projects](../managing-users-and-projects/) and [creating and using private images](../creating-and-using-a-private-image/).

We will specifically suppose you have followed the last one and you have a `hello-ovh` image on your private registry.

## Deploying using Docker login

### Login into your OVHcloud Managed Private Registry

In order to pull a private image from you private registry, you must authenticate with it using `docker login`.


```bash
docker login [YOUR_PRIVATE_REGISTRY_URL]
```

In my private registry example:

<pre class="console"><code>
  $ docker login 8093ff7x.gra5.container-registry.ovh.net
  Authenticating with existing credentials...

  Login Succeeded
</code></pre>

The login process creates or updates a `config.json` file that holds an authorization token.

View the `config.json` file:

```bash
cat ~/.docker/config.json
```



### To deploy an image we need a manifest

The first step to deploy a Docker image in a Kubernetes cluster is to write a YAML manifest. Let's call it `hello-ovh.yaml`:


```yml
apiVersion: v1
kind: Service
metadata:
  name: hello-ovh
  labels:
    app: hello-ovh
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: hello-ovh
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-ovh-deployment
  labels:
    app: hello-ovh
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-ovh
  template:
    metadata:
      labels:
        app: hello-ovh
    spec:
      containers:
      - name: hello-ovh
        image: [YOUR_PRIVATE_REGISTRY_URL]/private/hello-ovh:1.0.0
        ports:
        - containerPort: 80
      imagePullSecrets:
      - name: harbor
```


And then we can apply the file:

```bash
kubectl apply -f hello-ovh.yml
```

After applying the YAML file, a new `hello-world` service and the corresponding `hello-world-deployment` deployment are created:

<pre class="console"><code>
  $ kubectl apply -f hello-ovh.yml
  service/hello-ovh created
  deployment.apps/hello-ovh-deployment created
</code></pre>


## Deploying using a Secret based on existing Docker credentials

### Cleaning up

Let's begin by deleting the precedent service and deployment of `hello-ovh`:

```bash
kubectl delete -f ./hello-ovh.yml
```


### Creating the Secret

Needing to do a `docker login` can get annoying quickly, so let's do it in another way: by storing the registry credentials on the Kubernetes cluster in Secret of `docker-registry` type. You will use this Secret to authenticate with your private registry to pull a private image.

If you already ran `docker login`, you can copy that credential into Kubernetes:

```
kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
    --type=kubernetes.io/dockerconfigjson
```

In my private registry example:

<pre class="console"><code>
  $ kubectl create secret generic regcred \
  >   --from-file=.dockerconfigjson=/home/horacio/.docker/config.json \
  >   --type=kubernetes.io/dockerconfigjson
  secret/regcred created
</code></pre>

 
### Create a deployment that uses your Secret

You only need to change the `imagePullSecrets` parameter of your `hello-ovh.yml` file  in order to set `regcred` as source of credentials:

```yml
apiVersion: v1
kind: Service
metadata:
  name: hello-ovh
  labels:
    app: hello-ovh
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: hello-ovh
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-ovh-deployment
  labels:
    app: hello-ovh
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-ovh
  template:
    metadata:
      labels:
        app: hello-ovh
    spec:
      containers:
      - name: hello-ovh
        image: [YOUR_PRIVATE_REGISTRY_URL]/private/hello-ovh:1.0.0
        ports:
        - containerPort: 80
      imagePullSecrets:
      - name: regcred
```

And you can apply the file as usual:

```bash
kubectl apply -f hello-ovh.yml
```



## Go further

To have an overview of OVHcloud Managed Private Registry service, you can go to the [OVHcloud Managed Private Registry site](../).

Join our community of users on https://community.ovh.com/en/.