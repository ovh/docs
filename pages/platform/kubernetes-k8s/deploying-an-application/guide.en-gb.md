---
title: Deploying an application
slug: deploying-an-application
excerpt: 'Find out how to deploy a "Hello World" application'
section: Getting started
---

<style>
 pre {
     font-size: 14px;
 }
 .small {
     font-size: 0.75em;
 }
 div.container {
   max-width: 800px;
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
   font-family: monospace !important;
 }
 }
</style>


**Last updated 25 February, 2019.**

## Objective

OVH Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. This guide will explain how to deploy a simple *Hello World* application on a OVH Managed Kubernetes cluster.


## Requirements

- an OVH Managed Kubernetes cluster
- at least one node on the cluster (see the [ordering a node](../adding-nodes/) guide for details) 
- a well configured  `kubectl` (see the [configuring kubectl](../configuring-kubectl/) guide for details) 


## Instructions


### Step 1 - Deploy your first application

The following command will deploy a simple application (nginx image) using a [Kubernetes Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and a [Kubernetes Service](https://kubernetes.io/docs/concepts/services-networking/service/).

Create a `hello.yaml` file for our `ovhplatform/hello` Docker image:

```
apiVersion: v1
kind: Service
metadata:
  name: hello-world
  labels:
    app: hello-world
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: hello-world
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-world-deployment
  labels:
    app: hello-world
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-world
  template:
    metadata:
      labels:
        app: hello-world
    spec:
      containers:
      - name: hello-world
        image: ovhplatform/hello
        ports:
        - containerPort: 80
```

And apply the file:

```
kubectl apply -f hello.yml
```

After applying the YAML file, a new `hello-world` service and the corresponding `hello-world-deployment` deployment are created:

<pre class="console"><code>$ kubectl apply -f  hello.yml
service/hello-world created
deployment.apps/hello-world-deployment created
</code></pre>

> [!primary]
> The application you have just deployed is a simple nginx server with a single static *Hello World* page. 
> Basically it just deploys the Docker image [`ovhplatform/hello`](https://hub.docker.com/r/ovhplatform/hello/)


### Step 2 - List the pods

You have just deployed a `hello-world` service in a pod in your worker node. Let's verify that everything is correct by listing the pods.

```
kubectl -n=default get pods
```

You should see your newly created pod:

<pre class="console"><code>$ kubectl -n=default get pods
NAME                                           READY     STATUS    RESTARTS   AGE
hello-world-deployment-d98c6464b-7jqvg         1/1       Running   0          47s
</code></pre>


### Step 3 - List the deployments

You can also verify the deployment is active:

```
kubectl -n=default get deploy
```

And you will see the `hello-service-deployment`:

<pre class="console"><code>$ kubectl -n=default get deploy
NAME                          DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
hello-world-deployment        1         1         1            1           1m
</code></pre>

### Step 4 - List the services

And now you're going to use `kubectl` to see your service:

```
kubectl -n=default get services
```

You should see your newly created service:

<pre class="console"><code>$ kubectl get service hello-world 
NAME          TYPE           CLUSTER-IP    EXTERNAL-IP                        PORT(S)        AGE
hello-world   LoadBalancer   10.3.81.234   6d6regsa9pc.lb.c1.gra.k8s.ovh.net   80:31699/TCP   4m
</code></pre>

> [!primary]
> If under `EXTERNAL-IP` you get `&lt;pending>`, don't worry, the provisioning of the LoadBalancer 
can take a minute or two, please try again in a few moments.

For each service you deploy with LoadBalancer type, you will get a new sub-domain `XXXXXX.lb.c1.gra.k8s.ovh.net` to access the service. In my example that URL to access the service would be `http://6d6regsa9pc.lb.c1.gra.k8s.ovh.net`

### Step 5 - Test your service

If you point your web browser to the service URL, the `hello-world` service will answer you:

![Testing your service](images/deploying_an_application-01.png){.thumbnail}

### Step 6 - Clean up

AAt the end you can proceed to clean up by deleting the service and the deployment.

Let's begin by deleting the service:

```
kubectl delete service hello-world
```

If you list the services you will see that `hello-world` doesn't exist anymore:

<pre class="console"><code>$ kubectl delete service hello-world
service "hello-world" deleted
$ kubectl get services
No resources found.
</code></pre>

Then, you can delete the deployment:

```
kubectl delete deploy hello-world-deployment
```

And now if you list you deployment you will find no resources:

<pre class="console"><code>$ kubectl delete deploy hello-world-deployment
deployment.extensions "hello-world-deployment" deleted
$ kubectl get deployments
No resources found.
</code></pre>


If now you list the pods:

```
kubectl get pods
```

you will see that the pod created for `hello-world` has been deleted too:

<pre class="console"><code>$ kubectl -n=default get pods
No resources found
</code></pre>



## Go further

To have an overview of OVH Managed Kubernetes service, you can go to the [OVH Managed Kubernetes site](https://labs.ovh.com/kubernetes-k8s).

Otherwise to skip it and learn more about using your Kubernetes cluster the practical way, we invite you to look at our  [tutorials]() .

Join our community of users on https://community.ovh.com/en/.