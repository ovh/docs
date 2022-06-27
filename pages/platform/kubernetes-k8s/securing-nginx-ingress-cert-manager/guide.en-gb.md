---
title: Secure a Nginx Ingress with cert-manager on OVHcloud Managed Kubernetes
slug: securing-nginx-ingress-cert-manager
excerpt: 'Find out how to secure a Nginx Ingress with cert-manager on OVHcloud Managed Kubernetes'
section: Traffic management
order: 02
---

**Last updated 27 June 2022.**

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
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

## Objective

TODO: xxx

Sticky sessions or session affinity, is a feature that allows you to keep a session alive for a certain period of time. In a Kubernetes cluster, all the traffic from a client to an application, even if you scale from 1 to 3 or more replicas, will be redirected to the same pod.

In this tutorial we are going to:

- deploy an application on your OVHcloud Managed Kubernetes cluster
- setup an [Nginx Ingress](https://github.com/kubernetes/ingress-nginx){.external}
- deploy an `Ingress` to configure the Nginx Ingress Controller in SSL/TLS to use cert-manager


## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You need to have [Helm](https://docs.helm.sh/){.external} installer on your workstation and your cluster. Please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

You also need to installed [cert-manager] (../installing-cert-manager/) on OVHcloud Managed Kubernetes.

## Instructions

### Deploying the application

In this guide you will deploy an application, in Golang, that runs a HTTP server and displays the Pod name.

This kind of application will allow you to validate that Nginx Ingress correctly maintains the session.

First, create a `deployment.yml` file with the following content:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: what-is-my-pod-deployment
  labels:
    app: what-is-my-pod
spec:
  replicas: 3
  selector:
    matchLabels:
      app: what-is-my-pod
  template:
    metadata:
      labels:
        app: what-is-my-pod
    spec:
      containers:
      - name: what-is-my-pod
        image: ovhplatform/what-is-my-pod:1.0.1
        ports:
        - containerPort: 8080
        env:
          - name: MY_POD_NAME
            valueFrom:
              fieldRef:
                fieldPath: metadata.name
```

This YAML deployment manifest file defines that our application, based on `ovhplatform/what-is-my-pod:1.0.1` image will be deployed with 3 replicas (3 pods). We pass the pod name on environment variable in order to display it in our `what-is-my-pod` application.

Then, create a `svc.yml` file with the following content to define our service (a service exposes a deployment):

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: what-is-my-pod
  name: what-is-my-pod
spec:
  ports:
  - port: 8080
  selector:
    app: what-is-my-pod
```

Apply the deployment and service manifest files to your cluster with the following commands:

```bash
kubectl apply -f deployment.yml
kubectl apply -f svc.yml
```

Output should be like this:

<pre class="console"><code>$ kubectl apply -f deployment.yml
deployment.apps/what-is-my-pod-deployment created

$ kubectl apply -f svc.yml
service/what-is-my-pod created
</code></pre>

You can verify if your application is running and service is created by running the following commands:

```bash
kubectl get pod -l app=what-is-my-pod
kubectl get svc -l app=what-is-my-pod
```

Output should be like this:

<pre class="console"><code>$ kubectl get pod -l app=what-is-my-pod
NAME                                         READY   STATUS    RESTARTS   AGE
what-is-my-pod-deployment-78f7cd684f-5gtf9   1/1     Running   0          3m
what-is-my-pod-deployment-78f7cd684f-k2zpp   1/1     Running   0          3m
what-is-my-pod-deployment-78f7cd684f-xvwvh   1/1     Running   0          3m

$ kubectl get svc -l app=what-is-my-pod
NAME             TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE
what-is-my-pod   ClusterIP   10.3.57.203   <none>        8080/TCP   3m35s
</code></pre>

### Installing the Nginx Ingress Controller Helm chart

For this tutorial, we are using the [Nginx Ingress Controller Helm chart](https://github.com/kubernetes/ingress-nginx/tree/master/charts/ingress-nginx){.external} found on its own Helm repository.

The chart is fully configurable, but here we are using the default configuration.

Add the Ingress Nginx Helm repository:

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
```

These commands will add the Ingress Nginx Helm repository to your local Helm chart repository and update the installed chart repositories:

<pre class="console"><code>$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

helm repo update
"ingress-nginx" has been added to your repositories
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "nvidia" chart repository
...
...Successfully got an update from the "ingress-nginx" chart repository
...
Update Complete. ⎈Happy Helming!⎈
</code></pre>

Install the latest version of Ingress Nginx with `helm install` command:

```bash
helm -n ingress-nginx install ingress-nginx ingress-nginx/ingress-nginx --create-namespace
```

The install process will begin and a new `ingress-nginx` namespace will be created.

<pre class="console"><code>$ helm -n ingress-nginx install ingress-nginx ingress-nginx/ingress-nginx --create-namespace
NAME: ingress-nginx
LAST DEPLOYED: Mon Feb 28 16:04:05 2022
NAMESPACE: ingress-nginx
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
The ingress-nginx controller has been installed.
It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running 'kubectl --namespace ingress-nginx get services -o wide -w ingress-nginx-controller'

An example Ingress that makes use of the controller:
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: example
    namespace: foo
  spec:
    ingressClassName: nginx
    rules:
      - host: www.example.com
        http:
          paths:
            - backend:
                service:
                  name: exampleService
                  port:
                    number: 80
              path: /
    # This section is only required if TLS is to be enabled for the Ingress
    tls:
      - hosts:
        - www.example.com
        secretName: example-tls

If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

  apiVersion: v1
  kind: Secret
  metadata:
    name: example-tls
    namespace: foo
  data:
    tls.crt: <base64 encoded cert>
    tls.key: <base64 encoded key>
  type: kubernetes.io/tls
</code></pre>

As the `LoadBalancer` creation is asynchronous, and the provisioning of the load balancer can take several minutes, you will surely get a `<pending>` `EXTERNAL-IP`. 

If you try again in a few minutes you should get an `EXTERNAL-IP`:

<pre class="console"><code>$ kubectl get svc -n ingress-nginx ingress-nginx-controller
NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP       PORT(S)                      AGE
ingress-nginx-controller   LoadBalancer   10.3.232.157   152.228.168.132   80:30903/TCP,443:31546/TCP   19h
</code></pre>

You can then access your `nginx-ingress` at `http://[YOUR_LOAD_BALANCER_IP]` via HTTP or `https://[YOUR_LOAD_BALANCER_IP]` via HTTPS.

### Configuring the Nginx Ingress Controller to use sticky sessions/session affinity

At this step, you need to deploy an Ingress resource and configure it to use the sticky sessions.

Create an `ingress-session-affinity.yml` file with the following content:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/affinity: "cookie"
    nginx.ingress.kubernetes.io/session-cookie-name: "stickounet"
    nginx.ingress.kubernetes.io/session-cookie-expires: "172800"
    nginx.ingress.kubernetes.io/session-cookie-max-age: "172800"
  name: ingress
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          service:
            name: what-is-my-pod
            port:
              number: 8080
        path: /
        pathType: Prefix
```

In this manifest file you can see that we define a Nginx Ingress resource with several annotations.
For more information about the annotations, please refer to the [Nginx Ingress Controller documentation](https://kubernetes.github.io/ingress-nginx/examples/affinity/cookie/).

Apply the ingress manifest files to your cluster with the following commands:

```bash
kubectl apply -f ingress-session-affinity.yml
```

Output should be like this:

<pre class="console"><code>$ kubectl apply -f ingress-session-affinity.yml
ingress.networking.k8s.io/ingress created
</code></pre>

You have set-up and configured a Kubernetes Ingress resource that will maintain sessions for users, as in the illustration below:

![Sticky session on Kubernetes schema](images/sticky-session-schema.png)

### Test the session affinity

The final step of this guide is to access our application and test the session affinity.

Execute the following command to retrieve the Load-Balancer IP created by the Nginx Ingress Controller:

```bash
kubectl get svc -n ingress-nginx ingress-nginx-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

You should have a Load-Balancer IP like this:

<pre class="console"><code>$ kubectl get svc -n ingress-nginx ingress-nginx-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
152.228.168.143
</code></pre>

Now you can access this IP through your favorite browser and reload the page several times:

![session affinity](images/sticky-session-affinity-01.png)

Everytime you reload the page, you should get the same cookie value, so the Ingress redirects you to the same Pod.

You can also test the behavior with `curl` command like this:

```bash
curl --cookie cookie.txt --cookie-jar cookie.txt http://152.228.168.143
```

You can execute the same command several times in a loop to validate that the session is correctly maintained:

<pre class="console"><code>$ for i in {0..5}
do
  curl --cookie cookie.txt --cookie-jar cookie.txt http://152.228.168.143
  echo ""
done

Hello "what-is-my-pod-deployment-78f7cd684f-xvwvh"!
Hello "what-is-my-pod-deployment-78f7cd684f-xvwvh"!
Hello "what-is-my-pod-deployment-78f7cd684f-xvwvh"!
Hello "what-is-my-pod-deployment-78f7cd684f-xvwvh"!
Hello "what-is-my-pod-deployment-78f7cd684f-xvwvh"!
Hello "what-is-my-pod-deployment-78f7cd684f-xvwvh"!
</code></pre>

> [!primary]
>
> The tips with using `curl` with cookies is to store the received cookie in a file and read back the cookies from that file later.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
