---
title: 'Using Private Registry with OVHcloud Managed Kubernetes'
excerpt: 'Find out how to use images from OVHcloud Managed Private Registry service on OVHcloud Managed Kubernetes clusters'
slug: using-private-registry-with-kubernetes
section: 'Tutorials'
order: 02
---

**Last updated 13th April, 2022.**

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


In this tutorial we are going to guide you in using images from OVHcloud Managed Private Registry service on OVHcloud Managed Kubernetes clusters.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../../kubernetes/deploying-hello-world/) documentation.

You also need to have a working OVHcloud Managed Private Registry and have followed the guides on [creating a private registry](../creating-a-private-registry/), [connecting to the UI](../connecting-to-the-ui/), [managing users and projects](../managing-users-and-projects/) and [creating and using private images](../creating-and-using-a-private-image/).

We will specifically suppose you have followed the last one and you have a `hello-ovh` image on your private registry.

## Deploying a Secret based on existing Docker credentials

### Log in to your OVHcloud Managed Private Registry

In order to pull a private image from your private registry, you must authenticate with it using `docker login`.

```bash
docker login [YOUR_PRIVATE_REGISTRY_URL]
```

In my private registry:

<pre class="console"><code>
  $ docker login 8093ff7x.gra5.container-registry.ovh.net
  Username: private-user
  Password: 
  Login Succeeded
</code></pre>

The login process creates or updates a `config.json` file that holds an authorization token.

View the `config.json` file:

```bash
cat ~/.docker/config.json
```

### Creating the Secret

Kubernetes needs to have access to the private registry to pull images from it, so you need to store the private registry credentials in a Kubernetes Secret.
Let's create a Secret of `docker-registry` type.

You will use this Secret to authenticate with your private registry to pull a private image.

If you already ran `docker login`, you can copy that credential into Kubernetes:

```
kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
    --type=kubernetes.io/dockerconfigjson
```

In my private registry:

<pre class="console"><code>$ kubectl create secret generic regcred \
  --from-file=.dockerconfigjson=/Users/avache/.docker/config.json \
  --type=kubernetes.io/dockerconfigjson

  secret/regcred created
</code></pre>

You can also check the secret has been correctly deployed in your Kubernetes cluster:

<pre class="console"><code>$ kubectl get secret regcred -o jsonpath="{.data.\.dockerconfigjson}"

ewogICAgICAgICJhdXRocyI6IHsKCQkiaHR0cHM6Ly9pbmRleC5kb2NrZXIuaW8vdjEvIjogewogICAgICAgICAgICAgICAgICAgICAgICAiYXV0aCI6ICJjMk55WVd4NU9qaDBhM00wWm01aiIKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAiY3g2ZHMzMGQuZ3JhNy5jb250YWluZXItcmVnaXN0cnkub3ZoLm5ldCI6IHsKICAgICAgICAgICAgICAgICAgICAgICAgImF1dGgiOiAiY0hKcGRtRjBaUzExYzJWeU9sQnlhWFpoZEdWVmMyVnlNUT09IgogICAgICAgICAgICAgICAgfQogICAgICAgIH0KfQo=%
</code></pre>

>[!primary]
>
> Secrets are encoded in base64 and automatically decoded when they are attached to a Pod.

### Deploying an image

The first step to deploy a Docker image in a Kubernetes cluster is to write a YAML manifest. Let's call it `hello-ovh.yaml`:

```yaml
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
        image: [YOUR_PRIVATE_REGISTRY_URL]/[YOUR_PROJECT]/hello-ovh:1.0.0
        ports:
        - containerPort: 80
      imagePullSecrets:
      - name: regcred
```

>[!primary]
>
> Replace `[YOUR_PRIVATE_REGISTRY_URL]` and `[YOUR_PROJECT]` with your private registry URL and your project name, for example for my private registry it will be: `cx6ds30d.gra7.container-registry.ovh.net/private/hello-ovh:1.0.0`

And then we can apply the file:

```bash
kubectl apply -f hello-ovh.yaml
```

After applying the YAML file, a new `hello-world` service and the corresponding `hello-world-deployment` deployment are created:

<pre class="console"><code>$ kubectl apply -f hello-ovh.yaml

service/hello-ovh created
deployment.apps/hello-ovh-deployment created

$ kubectl get po -l app=hello-ovh
NAME                                    READY   STATUS    RESTARTS   AGE
hello-ovh-deployment-6df76cb7b8-vbk2b   1/1     Running   0          66s
</code></pre>

Our Pod is correctly running, so Kubernetes has pulled the image from your private registry with success.

## Go further

To have an overview of OVHcloud Managed Private Registry service, you can go to the [OVHcloud Managed Private Registry site](../).

Join our community of users on <https://community.ovh.com/en/>.
