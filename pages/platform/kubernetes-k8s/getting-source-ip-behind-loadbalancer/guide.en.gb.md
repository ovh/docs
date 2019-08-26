---
title: 'Getting the source IP behind the LoadBalancer'
slug: getting-source-ip-behind-loadbalancer
excerpt: 'Find out how to get the source IP behind the LoadBalancer on OVH Managed Kubernetes'
section: Tutorials
---

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

**Last updated 20<sup>th</sup> August, 2019.**


## Before you begin

This tutorial presupposes that you already have a working OVH Managed Kubernetes cluster, and you have deployed there an application using the OVH Managed Kubernetes LoadBalancer. If you want to know more on those topics, please look at the [using the OVH Managed Kubernetes LoadBalancer](../using-lb/) documentation.


## The problem

When you deploy your HTTP services in `NodePort` mode, you directly recover the request's `Remote Address` from the server (for example using `$_SERVER['REMOTE_ADDR']` on PHP or `$ENV{'REMOTE_ADDR'}` in Perl). This address (usually in `IP:port` format) corresponds to the original requestor **or** the last proxy between them and your cluster.

When deploying the services in `LoadBalancer` mode, things are a bit different, our Load Balancer acts like a proxy, and the `Remote Address` will give you the IP address of the Load Balancer. How can you get the source IP of the request in this case?

This tutorial describe how to deploy a `LoadBalancer` service on OVH Managed Kubernetes and preserve the source IP.


## Getting the request's source IP behind the LoadBalancer

The easiest way to deploy services behind the Load Balancer while keeping the source IP is to place your services under an `Ingress`, itself behind the `LoadBalancer`. 

The `Ingress` is exposed to the outside of the cluster either via  `LoadBalancer`, and it routes incoming traffic to your services according to configured rules. And additional advantage of this setting is the cost: you can have lots of services behind a single `LoadBalancer`.

In this tutorial we are using the most basic Ingress Controller: [NGINX Ingress Controller](https://github.com/kubernetes/ingress-nginx){.external}, where an NGINX server take the role of reverse proxy.


### 1. Installing the NGINX Ingress Controller

The official way to install the **NGINX Ingress Controller** is using a mandatory manifest file:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml
```

It creates the `namespace`, `serviceaccount`, `role` and all the other Kuberbetes objects needed for the Ingress Controller, and then it deploys the controller:


<pre class="console"><code>$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml
namespace/ingress-nginx created
configmap/nginx-configuration created
configmap/tcp-services created
configmap/udp-services created
serviceaccount/nginx-ingress-serviceaccount created
clusterrole.rbac.authorization.k8s.io/nginx-ingress-clusterrole created
role.rbac.authorization.k8s.io/nginx-ingress-role created
rolebinding.rbac.authorization.k8s.io/nginx-ingress-role-nisa-binding created
clusterrolebinding.rbac.authorization.k8s.io/nginx-ingress-clusterrole-nisa-binding created
deployment.apps/nginx-ingress-controller created</code></pre>


### 2. Deploying an Ingress behind the LoadBalancer

Now we are deploying the Ingress that will be the entry point for your services, and placing it behind the `LoadBalancer`.
Our Ingress definition uses the [`externalTrafficPolicy`](https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip) property with `Local` value, that preserves the client source IP.


Here you have the manifest for this Ingress: 

```yaml
kind: Service
apiVersion: v1
metadata:
  name: ingress-lb
  namespace: ingress-nginx
  annotations:
    service.beta.kubernetes.io/ovh-loadbalancer-proxy-protocol: "v1"
spec:
  selector:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
  externalTrafficPolicy: Local
  ports:
  - name: http
    protocol: TCP
    port: 80
    targetPort: 80
  - name: https
    protocol: TCP
    port: 443
    targetPort: 443
  type: LoadBalancer
```

Copy it in a `ingress-lb.yaml` file, and deploy it:

```bash
kubectl apply -f ingress-lb.yaml
```

You have now an Ingress behind the `LoadBalancer`:

<pre class="console"><code>$ kubectl apply -f ingress-lb.yaml
service/ingress-lb created</code></pre>

You can use `kubectl` to get the state of the service and recover the Load Balancer's IP:

```bash
kubectl get service -n ingress-nginx ingress-lb
```

You should see your newly created Ingress service:

<pre class="console"><code>$ kubectl get service -n ingress-nginx ingress-lb
NAME         TYPE           CLUSTER-IP    EXTERNAL-IP                          PORT(S)                      AGE
ingress-lb   LoadBalancer   10.3.242.23   xxxxxxxxxx.lb.c1.gra.k8s.ovh.net     80:30113/TCP,443:30051/TCP   3m8s</code></pre>

> [!warning]
> As the `LoadBalancer` creation is asynchronous, and the provisioning of the Load Balancer can take several minutes,  you can get a `&lt;pending>` at `EXTERNAL-IP` while the Load Balancer is setting up. In this case, please wait some minutes and try again.


### 3. Patching the Ingress Controller

Now you need to patch the Ingress controller to support the proxy protocol. 

Copy the next YAML snippet in a `patch-ingress-configmap.yml` file:

```yaml
data:
  use-proxy-protocol: "true"
  proxy-real-ip-cidr: "0.0.0.0/32"
  use-forwarded-headers: "false"
  http-snippet: |
    geo $realip_remote_addr $is_lb {
      default       0;
      10.108.0.0/14 1;
    }
  server-snippet: |
    if ($is_lb != 1) {
      return 403;
    }
```

And apply it in  your cluster:

```bash
kubectl -n ingress-nginx patch configmap nginx-configuration -p "$(cat patch-ingress-configmap.yml)"
```

After applying the patch, you need to restart the Ingress Controller:

```bash
kubectl -n ingress-nginx get pod | grep 'ingress' | cut -d " " -f1 - | xargs -n1 kubectl -n ingress-nginx delete pod
```

You should see the configuration being patched and the controller pod deleted (and recreated):

<pre class="console"><code>$ kubectl -n ingress-nginx patch configmap nginx-configuration -p "$(cat patch-ingress-configmap.yml)"
configmap/nginx-configuration patched
$ kubectl -n ingress-nginx get pod | grep 'ingress' | cut -d " " -f1 - | xargs -n1 kubectl -n ingress-nginx delete pod
pod "nginx-ingress-controller-86449c74bb-cfwnv" deleted</code></pre>


### 4. Testing

We can now deploy a simple echo service to verify that everything is working. The service will use the [`mendhak/http-https-echo` image](https://code.mendhak.com/docker-http-https-echo/), a very useful HTTPS echo Docker container for web debugging.

First, copy the next manifest to a `echo.yaml` file:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: echo

---

apiVersion: apps/v1
kind: Deployment
metadata:
  name: echo-deployment
  namespace: echo
  labels:
    app: echo
spec:
  replicas: 1
  selector:
    matchLabels:
      app: echo
  template:
    metadata:
      labels:
        app: echo
    spec:
      containers:
      - name: echo
        image: mendhak/http-https-echo
        ports:
        - containerPort: 80
        - containerPort: 443

---

apiVersion: v1
kind: Service
metadata:  
  name: echo-service
  namespace: echo
spec:
  selector:    
    app: echo
  ports:  
  - name: http
    port: 80
    targetPort: 80
    protocol: TCP

---

apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: echo-ingress
  namespace: echo
spec:
  backend:
    serviceName: echo-service
    servicePort: 80
```        

And deploy it on your cluster:

```bash
kubectl apply -f echo.yaml
```

<pre class="console"><code>$ kubectl apply -f echo.yaml
namespace/echo created                           
deployment.apps/echo-deployment created          
service/echo-service created
ingress.extensions/echo-ingress created</code></pre>  

Now you can test it using the LoadBalancer URL:

```bash
curl  xxxxxxxxxx.lb.c1.gra.k8s.ovh.net
```

And you should get the HTTP parameters of your request, including the right source IP in the `x-real-ip` header:


{
  "path": "/",
  "headers": {
    "host": "6d6rslnrn8.lb.c1.gra.k8s.ovh.net",
    "x-request-id": "2126b343bc837ecbd07eca904c33daa3",
    "x-real-ip": "XXX.XXX.XXX.XXX",
    "x-forwarded-for": "XXX.XXX.XXX.XXX",
    "x-forwarded-host": "xxxxxxxxxx.lb.c1.gra.k8s.ovh.net",
    "x-forwarded-port": "80",
    "x-forwarded-proto": "http",
    "x-original-uri": "/",
    "x-scheme": "http",
    "user-agent": "curl/7.58.0",
    "accept": "*/*"
  },
  "method": "GET",
  "body": "",
  "fresh": false,
  "hostname": "6d6rslnrn8.lb.c1.gra.k8s.ovh.net",
  "ip": "::ffff:10.2.1.2",
  "ips": [],
  "protocol": "http",
  "query": {},
  "subdomains": [
    "k8s",
    "gra",
    "c1",
    "lb",
    "6d6rslnrn8"
  ],
  "xhr": false,
  "os": {
    "hostname": "echo-deployment-6b6fdc96cf-hwqw6"
  }
}


## What if I want to use another Ingress Controller

The precedent method should work in a similar way for any Ingress Controller. We will soon update this tutorial with more detailed information on other Ingress Controllers, specifically Traefik 