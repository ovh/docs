---
title: Installing Nginx Ingress on OVHcloud Managed Kubernetes
slug: installing-nginx-ingress
excerpt: 'Find out how to install Nginx Ingress on OVHcloud Managed Kubernetes '
section: Tutorials
---

**Last updated 1<sup>st</sup> July, 2019.**

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


In this tutorial we are going to guide you with the setup of [Nginx Ingress](https://github.com/kubernetes/ingress-nginx){.external} on your OVHcloud Managed Kubernetes Service.


## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/){.external} installer on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.



## Installing the Nginx Ingress Controller Helm chart

For this tutorial we are using the [Nginx Ingress Controller  Helm chart](https://github.com/kubernetes/ingress-nginx/tree/master/charts/ingress-nginx){.external} found on its own Helm repository.

The chart is fully configurable, but here we are using the default configuration.


```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install ngingress ingress-nginx/ingress-nginx
```

The installing processus will begin:

<pre class="console"><code>$ helm install ngingress ingress-nginx/ingress-nginx
NAME: ngingress
LAST DEPLOYED: Thu Jan 28 11:45:21 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
</code></pre>

At the end of the install, as usual with most helm charts, you get the configuration information and some tips to
test your `nginx-ingress` but the YAML provided is based on old API version ()extensions/v1beta1), the newest version is :

<pre class="console"><code>NOTES:
The nginx-ingress controller has been installed.
It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running 'kubectl --namespace default get services -o wide -w ngingress-ingress-nginx-controller'

An example Ingress that makes use of the controller:

  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    annotations:
      kubernetes.io/ingress.class: nginx
    name: example
    namespace: foo
  spec:
    rules:
      - host: www.example.com
        http:
          paths:
            - backend:
                service:
                  name: exampleService
                  port: 80
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
    tls.crt: &lt;base64 encoded cert>
    tls.key: &lt;base64 encoded key>
  type: kubernetes.io/tls
</code></pre>


As the `LoadBalancer` creation is asynchronous, and the provisioning of the load balancer can take several minutes, you will surely get a `&lt;pending>` `EXTERNAL-IP`. 

If you try again in a few minutes you should get an `EXTERNAL-IP`:

<pre class="console"><code>$ kubectl  get services  winning-lizard-nginx-ingress-controller
NAME                                      TYPE           CLUSTER-IP    EXTERNAL-IP                        PORT(S)                      AGE
winning-lizard-nginx-ingress-controller   LoadBalancer   10.3.106.37   6d6xxxx8r8.lb.c1.gra.k8s.ovh.net   80:30782/TCP,443:30619/TCP   6m
</code></pre>

You can then access your `nginx-ingress` at `http://[YOUR_LOAD_BALANCER_URL]` via HTTP or `https://[YOUR_LOAD_BALANCER_URL]` via HTTPS.

In order to test your `nginx-ingress`, I suggest you to [install a Wordpress](../installing-wordpress) on your cluster, and then create a YAML file for the Ingress that uses the controller:


```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: nginx
  name: ingress
  namespace: default
spec:
  rules:
    - host: [YOUR_LOAD_BALANCER_URL]
      http:
        paths:
          - backend:
              service:
                name: [YOUR_WORDPRESS_SERVICE_NAME]
                port: 80
            path: /
```

> [!primary]
> Don't forget to replace `[YOUR_LOAD_BALANCER_URL]`, `[YOUR_WORDPRESS_SERVICE_NAME]` 

Apply the file:

```
kubectl apply -f ./ingress.yml
```

And the Ingress is created. 

<pre class="console"><code>$ kubectl apply -f ./ingress.yml 
ingress.extensions/ingress created
</code></pre>

So now if you point your browser to `http://[YOUR_LOAD_BALANCER_URL]`  you will see your Wordpress:

![Wordpress using Ingress](images/installing-ingress-01.png){.thumbnail}
