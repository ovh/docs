---
title: Securing Nginx Ingress on OVHcloud Managed Kubernetes with cert-manager
slug: installing-nginx-ingress
excerpt: 'Find out how to secure Nginx Ingress on OVHcloud Managed Kubernetes with cert-manager'
section: Traffic management
order: 1
---

**Last updated 27th June 2022**

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


In this tutorial we are going to guide you with in order to how to secure a [Nginx Ingress](https://github.com/kubernetes/ingress-nginx){.external} with cert-manager on your OVHcloud Managed Kubernetes Service.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/){.external} installer on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

You also need to follow the [Installing cert-manager on OVHcloud Managed Kubernetes](../installing-cert-manager/) guide.

And also the [Installing Nginx Ingress on OVHcloud Managed Kubernetes](../installing-nginx-ingress/) guide.

Now, you have a running cert-manager and a Nginx server so you are ready to secure it.

# Deploying a Nginx Ingress and secure it though TLS using cert-manager

If you followed the previous guides (installing cert-manager and installing Nginx Ingress) you should have a Load-Balancer:

<pre class="console"><code>$ kubectl get svc -n ingress-nginx ingress-nginx-controller
NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)                      AGE
ingress-nginx-controller   LoadBalancer   10.3.153.243   162.19.23.64   80:32697/TCP,443:30773/TCP   2d17h
</code></pre>

We have an EXTERNAL-IP so we can export it in a variable in order to use it later easily:

```
export INGRESS_URL=$(kubectl get svc ingress-nginx-controller -n ingress-nginx -o jsonpath='{.status.loadBalancer.ingress[].ip}')
```

You should have a content like this:

<pre class="console"><code>$ export INGRESS_URL=$(kubectl get svc ingress-nginx-controller -n ingress-nginx -o jsonpath='{.status.loadBalancer.ingress[].ip}')

$ echo Ingress URL: http://$INGRESS_URL/
Ingress URL: http://162.19.23.64/
</code></pre>


TODO: xxx

In order to deploy a secured `nginx-ingress` on your cluster, create a YAML file named `ingress-tls.yaml` for the Ingress that uses the controller:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/issuer: "letsencrypt-prod"
  name: ingress
  namespace: default
spec:
  tls:
  - hosts:
    - example.com
    secretName: nginx-example-tls
  rules:
  - http:
      paths:
      - backend:
          service:
            name: [YOUR_WORDPRESS_SERVICE_NAME]
            port:
              number: 80
        path: /
        pathType: Prefix
```

> [!primary]
> Don't forget to replace `[YOUR_WORDPRESS_SERVICE_NAME]`.

Apply the file:

```
kubectl apply -f ingress-tls.yml
```

And the Ingress is created. 

<pre class="console"><code>$ kubectl apply -f ingress.yml 
ingress.extensions/ingress created
</code></pre>

TODO: check if the secret with the certficate exists
$ kubectl describe certificate nginx-example-tls

TODO: Finally, the 'Certificate' resource will be updated to reflect the state of the issuance process. If all is well, you should be able to 'describe' the Certificate and see something like the below:


$ kubectl describe certificate quickstart-example-tls

So now if you point your browser to `https://$INGRESS_URL/`, you will see your Wordpress:

![Wordpress using Ingress](images/installing-ingress-01.png){.thumbnail}
