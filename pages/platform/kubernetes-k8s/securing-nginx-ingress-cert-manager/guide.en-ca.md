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

In this tutorial you are going to:

- deploy an application (a `Deployment` and a ClusterIP `Service`) on your OVHcloud Managed Kubernetes cluster
- install the Nginx Ingress Controller
- deploy an Ingress to configure the Nginx Ingress Controller to use SSL/TLS through cert-manager

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You need to have [Helm](https://docs.helm.sh/){.external} installer on your workstation and your cluster. Please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

You also need to installed [cert-manager] (../installing-cert-manager/) on OVHcloud Managed Kubernetes.

## Instructions

### Deploying the application

In this guide you will deploy an application, that runs a HTTP server and displays a web page.

First, create a `deployment.yml` file with the following content:

```yaml
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

This YAML deployment manifest file defines that our application, based on `ovhplatform/hello:latest` image will be deployed with 1 replicas (1 pod).

Then, create a `svc.yml` file with the following content to define our service (a service exposes a deployment):

```yaml
apiVersion: v1
kind: Service
metadata:
  name: hello-world
  labels:
    app: hello-world
spec:
  ports:
  - port: 80
    name: http
  selector:
    app: hello-world
```

Apply the deployment and service manifest files to your cluster with the following commands:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f svc.yaml
```

Output should be like this:

<pre class="console"><code>$ kubectl apply -f deployment.yaml
deployment.apps/hello-world-deployment created

$ kubectl apply -f svc.yaml
service/hello-world created
</code></pre>

You can verify if your application is running and service is created by running the following commands:

```bash
kubectl get pod -l app=hello-world
kubectl get svc -l app=hello-world
```

Output should be like this:

<pre class="console"><code>$ kubectl get pod -l app=hello-world
NAME                                      READY   STATUS    RESTARTS   AGE
hello-world-deployment-559d658ffb-qtxnl   1/1     Running   0          61s

$ kubectl get svc -l app=hello-world
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
hello-world   ClusterIP   10.3.213.111   <none>        80/TCP    68s
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
LAST DEPLOYED: Mon Jun 27 09:53:25 2022
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
apiVersion: networking.k8s.io/v1
            - pathType: Prefix
              backend:
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

### Configuring the Nginx Ingress Controller to use SSL/TLS

After installing [cert-manager](https://docs.ovh.com/ca/en/kubernetes/installing-cert-manager/) on your OVHcloud Manager Kubernetes cluster, if you followed the guide, you should have two running ClusterIssuer, one for production and one for staging/dev usages:

<pre class="console"><code>$ kubectl get clusterissuer
NAME                  READY   AGE
letsencrypt-prod      True    7s
letsencrypt-staging   True    7s
</code></pre>

If it's not the case, create a `issuer.yaml` file with the following content:

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    # The ACME server URL
    server: https://acme-v02.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: [YOUR_EMAIL]
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt-prod
    # Enable the HTTP-01 challenge provider
    solvers:
    - http01:
        ingress:
          class: nginx
---
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    # The ACME server URL
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: [YOUR_EMAIL]
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt-staging
    # Enable the HTTP-01 challenge provider
    solvers:
    - http01:
        ingress:
          class: nginx
```

> [!primary]
> 
> `nginx` is the name of the Ingress resource you are going to create.

And deploy it:

```
kubectl apply -f issuer.yaml
```

At this step, you need to deploy an Ingress resource and configure it to use the SSL/TLS terminaison.

Create an `ingress-tls.yaml` file with the following content:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: "letsencrypt-staging"
  name: ingress
  namespace: default
spec:
  tls:
    - hosts:
        - [YOUR_DN]
      secretName: hello-world-tls
  rules:
  - http:
      paths:
      - backend:
          service:
            name: hello-world
            port:
              number: 80
        path: /
        pathType: Prefix
```


> [!primary]
>
> Don't forget to replace `[YOUR_DN]` to your domain name.

In this manifest file you can see that we define a Nginx Ingress resource with several annotations.
For more information about the annotations, please refer to the [Securing Ingress Resources in cert-manager documentation](https://cert-manager.io/docs/usage/ingress/#supported-annotations).

Apply the ingress manifest files to your cluster with the following commands:

```bash
kubectl apply -f ingress-tls.yaml
```

Output should be like this:

<pre class="console"><code>$ kubectl apply -f ingress-tls.yaml
ingress.networking.k8s.io/ingress configured
</code></pre>

At this step, a `Certificate` resource have been created:

<pre class="console"><code>$ kubectl get certificate
NAME              READY   SECRET            AGE
hello-world-tls   False   hello-world-tls   111s
</code></pre>

You can display the events of the certificate to check if the certificate have been correctly created and if it create the necessary `CertificateRequest`:

<pre class="console"><code>$ kubectl describe certificate
Name:         hello-world-tls
Namespace:    default
Labels:       <none>
Annotations:  <none>
API Version:  cert-manager.io/v1
Kind:         Certificate
Metadata:
  Creation Timestamp:  2022-06-27T11:14:40Z
  Generation:          1
  ...
Events:
  Type    Reason     Age    From                                       Message
  ----    ------     ----   ----                                       -------
  Normal  Issuing    8m57s  cert-manager-certificates-trigger          Issuing certificate as Secret does not exist
  Normal  Generated  8m57s  cert-manager-certificates-key-manager      Stored new private key in temporary Secret resource "hello-world-tls-krzvj"
  Normal  Requested  8m57s  cert-manager-certificates-request-manager  Created new CertificateRequest resource "hello-world-tls-4fzl2"
</code></pre>

And you can check that a `CertificateRequest`, an `Order` and a `Challenge` resource have been created:

<pre class="console"><code>$ kubectl describe certificaterequest
Name:         hello-world-tls-4fzl2
Namespace:    default
Labels:       <none>
Annotations:  cert-manager.io/certificate-name: hello-world-tls
              cert-manager.io/certificate-revision: 1
              cert-manager.io/private-key-secret-name: hello-world-tls-krzvj
API Version:  cert-manager.io/v1
Kind:         CertificateRequest
Metadata:
  Creation Timestamp:  2022-06-27T11:14:40Z
  Generate Name:       hello-world-tls-
  Generation:          1
  ...
Events:
  Type    Reason           Age   From                                          Message
  ----    ------           ----  ----                                          -------
  Normal  cert-manager.io  18m   cert-manager-certificaterequests-approver     Certificate request has been approved by cert-manager.io
  Normal  OrderCreated     18m   cert-manager-certificaterequests-issuer-acme  Created Order resource default/hello-world-tls-4fzl2-2471308949
  Normal  OrderPending     18m   cert-manager-certificaterequests-issuer-acme  Waiting on certificate issuance from order default/hello-world-tls-4fzl2-2471308949: ""

$ kubectl describe order
Name:         hello-world-tls-4fzl2-2471308949
Namespace:    default
Labels:       <none>
Annotations:  cert-manager.io/certificate-name: hello-world-tls
              cert-manager.io/certificate-revision: 1
              cert-manager.io/private-key-secret-name: hello-world-tls-krzvj
API Version:  acme.cert-manager.io/v1
Kind:         Order
Metadata:
  Creation Timestamp:  2022-06-27T11:14:40Z
  Generation:          1
  ...
Events:
  Type    Reason   Age   From                 Message
  ----    ------   ----  ----                 -------
  Normal  Created  16m   cert-manager-orders  Created Challenge resource "hello-world-tls-4fzl2-2471308949-3172376200" for domain "example.com"

$ kubectl describe challenge
Name:         hello-world-tls-4fzl2-2471308949-3172376200
Namespace:    default
Labels:       <none>
Annotations:  <none>
API Version:  acme.cert-manager.io/v1
Kind:         Challenge
Metadata:
  Creation Timestamp:  2022-06-27T11:14:41Z
  Finalizers:
    finalizer.acme.cert-manager.io
  Generation:  1
  ...
Events:
  Type    Reason     Age   From                     Message
  ----    ------     ----  ----                     -------
  Normal  Started    16m   cert-manager-challenges  Challenge scheduled for processing
  Normal  Presented  16m   cert-manager-challenges  Presented challenge using HTTP-01 challenge mechanism
</code></pre>

You now need to map the Domain Name (DN) and the Load Balancer so in order to do this, create an `A-record` for `[YOUR_DN]` (your domain name ;-) mapped to the value of `$INGRESS_URL`.

Wait until the challenge is resolved:

```
dig +short [YOUR_DN]
```

Describe the certificate again and wait until you see Certificate issued successfully when you describe the certificate.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
