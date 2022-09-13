---
title: Getting the source IP behind the LoadBalancer
slug: getting-source-ip-behind-loadbalancer
excerpt: 'Find out how to get the source IP behind the LoadBalancer on OVHcloud Managed Kubernetes'
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

**Last updated 13th September 2022.**

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and you have deployed there an application using the OVHcloud Managed Kubernetes LoadBalancer. If you want to know more on those topics, please look at the [using the OVHcloud Managed Kubernetes LoadBalancer](../using-lb/) documentation.

> [!warning]
> When a __LoadBalancer__ Service resource is created inside a Managed Kubernetes cluster, an associated Public Cloud Load Balancer is automatically created, allowing public access to your K8S application.
> The Public Cloud Load Balancer service is hourly charged and will appear in your Public Cloud project. For more information, please refer to the following documentation: [Network Load Balancer price](https://www.ovhcloud.com/en/public-cloud/prices/#network)

## The problem

When you deploy your HTTP services in `NodePort` mode, you directly recover the request's `Remote Address` from the server (for example using `$_SERVER['REMOTE_ADDR']` on PHP or `$ENV{'REMOTE_ADDR'}` in Perl). This address (usually in `IP:port` format) corresponds to the original requestor **or** the last proxy between them and your cluster.

When deploying the services in `LoadBalancer` mode, things are a bit different, our Load Balancer acts like a proxy, and the `Remote Address` will give you the IP address of the Load Balancer. How can you get the source IP of the request in this case?

This tutorial describes how to deploy a `LoadBalancer` service on OVHcloud Managed Kubernetes and preserve the source IP.

## Getting the request's source IP behind the LoadBalancer

The easiest way to deploy services behind the Load Balancer while keeping the source IP is to place your services under an `Ingress`, itself behind the `LoadBalancer`.

The `Ingress` is exposed to the outside of the cluster either via  `LoadBalancer`, and it routes incoming traffic to your services according to configured rules. And additional advantage of this setting is the cost: you can have lots of services behind a single `LoadBalancer`.

In this tutorial we are using the most basic Ingress Controller: [NGINX Ingress Controller](https://github.com/kubernetes/ingress-nginx){.external}, where an NGINX server take the role of reverse proxy.

### 1. Installing the NGINX Ingress Controller

We can deploy the official **NGINX Ingress Controller** with the manifest file or with the Helm chart.  
Please choose one way or the other and follow the corresponding paragraph.

#### 1. Installing with the manifest file

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml
```

It creates the `namespace`, `serviceaccount`, `role` and all the other Kubernetes objects needed for the Ingress Controller, and then it deploys the controller:

<pre class="console"><code>$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml
namespace/ingress-nginx created
serviceaccount/ingress-nginx created
configmap/ingress-nginx-controller created
clusterrole.rbac.authorization.k8s.io/ingress-nginx created
clusterrolebinding.rbac.authorization.k8s.io/ingress-nginx created
role.rbac.authorization.k8s.io/ingress-nginx created
rolebinding.rbac.authorization.k8s.io/ingress-nginx created
service/ingress-nginx-controller-admission created
service/ingress-nginx-controller created
deployment.apps/ingress-nginx-controller created
validatingwebhookconfiguration.admissionregistration.k8s.io/ingress-nginx-admission created
clusterrole.rbac.authorization.k8s.io/ingress-nginx-admission created
clusterrolebinding.rbac.authorization.k8s.io/ingress-nginx-admission created
job.batch/ingress-nginx-admission-create created
job.batch/ingress-nginx-admission-patch created
role.rbac.authorization.k8s.io/ingress-nginx-admission created
rolebinding.rbac.authorization.k8s.io/ingress-nginx-admission created
serviceaccount/ingress-nginx-admission created
</code></pre>

#### 2. Installing with the Helm chart

```bash
helm install ingress-nginx ingress-nginx/ingress-nginx -n ingress-nginx --create-namespace
```

It creates the `namespace`, `serviceaccount`, `role` and all the other Kubernetes objects needed for the Ingress Controller, and then it deploys the controller:

<pre class="console"><code>$ helm install ingress-nginx ingress-nginx/ingress-nginx -n ingress-nginx --create-namespace
NAME: ingress-nginx
LAST DEPLOYED: Fri Jun 11 14:13:09 2021
NAMESPACE: ingress-nginx
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
The ingress-nginx controller has been installed.
It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running 'kubectl --namespace ingress-nginx get services -o wide -w ingress-nginx-controller'

An example Ingress that makes use of the controller:

  apiVersion: networking.k8s.io/v1beta1
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
                serviceName: exampleService
                servicePort: 80
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

#### 3. Check your deployment

You can use `kubectl` to get the state of the service and recover the Load Balancer's IP:

```bash
kubectl get service ingress-nginx-controller -n ingress-nginx
```

You should see your newly created Ingress service:

<pre class="console"><code>$ kubectl get service ingress-nginx-controller -n ingress-nginx
NAME                       TYPE           CLUSTER-IP    EXTERNAL-IP       PORT(S)                      AGE
ingress-nginx-controller   LoadBalancer   10.3.81.157   xxx.xxx.xxx.xxx   80:xxxxx/TCP,443:xxxxx/TCP   4m32s</code></pre>

> [!warning]
> As the `LoadBalancer` creation is asynchronous, and the provisioning of the Load Balancer can take several minutes,  you can get a `<pending>` at `EXTERNAL-IP` while the Load Balancer is setting up. In this case, please wait some minutes and try again.

### 2. Patching the Ingress Controller

Now you need to patch the Ingress controller to support the proxy protocol.

> [!warning]
> Depends on your Kubernetes cluster is working with private network or not, the proxy protocol configuration differs. Follow the tutorial parts according to your setup.

#### 1a. [PUBLIC NETWORK ONLY] Get the list of the egress load balancer IPs 

```bash
kubectl get svc ingress-nginx-controller -n ingress-nginx -o jsonpath="{.metadata.annotations.lb\.k8s\.ovh\.net/egress-ips}"
```

You should see something like this:

<pre class="console"><code>$ kubectl get svc ingress-nginx-controller -n ingress-nginx -o jsonpath="{.metadata.annotations.lb\.k8s\.ovh\.net/egress-ips}"
aaa.aaa.aaa.aaa/32,bbb.bbb.bbb.bbb/32,ccc.ccc.ccc.ccc/32,ddd.ddd.ddd.ddd/32
</code></pre>

#### 1b. [PRIVATE NETWORK ONLY] Get the list of the egress load balancer IPs

When your Managed Kubernetes cluster is attached to a vrack, load balancers will take two random IP addresses each. **Your egress IP list is your subnet range**.

For the rest of this documentation, we consider our subnet use the [10.0.0.0/20] range. Don't forget to replace it with your own !

### Patching methods

We can update the NGINX Ingress Controller configuration with manifest files or with Helm. Please choose one way or the other and follow the corresponding paragraph.

#### 2. Patching with manifest files

Copy the next YAML snippet in a `patch-ingress-controller-service.yml` file:

```yaml
metadata:
  annotations:
    service.beta.kubernetes.io/ovh-loadbalancer-proxy-protocol: "v2"
spec:
  externalTrafficPolicy: Local
```

And apply it in  your cluster:

```bash
kubectl -n ingress-nginx patch service ingress-nginx-controller -p "$(cat patch-ingress-controller-service.yml)"
```

Copy the next YAML snippet in a `patch-ingress-controller-configmap.yml` file and modify the `proxy-real-ip-cidr` parameter according to your cluster configuration:

#### a. [PUBLIC NETWORK ONLY]

```yaml
data:
  use-proxy-protocol: "true"
  real-ip-header: "proxy_protocol"
  proxy-real-ip-cidr: "aaa.aaa.aaa.aaa/32,bbb.bbb.bbb.bbb/32,ccc.ccc.ccc.ccc/32,ddd.ddd.ddd.ddd/32"
```

#### b. [PRIVATE NETWORK ONLY]

```yaml
data:
  use-proxy-protocol: "true"
  real-ip-header: "proxy_protocol"
  proxy-real-ip-cidr: "10.0.0.0/20"
```

> [!primary]
>
> Note: [10.0.0.0/20] must be replaced with your own subnet range.


And apply it in  your cluster:

```bash
kubectl -n ingress-nginx patch configmap ingress-nginx-controller -p "$(cat patch-ingress-controller-configmap.yml)"
```

You should see the configuration being patched and the controller pod deleted (and recreated):

<pre class="console"><code>$ kubectl -n ingress-nginx patch service  ingress-nginx-controller -p "$(cat patch-ingress-controller-configmap.yml)"
configmap/ ingress-nginx-controller patched
$ kubectl -n ingress-nginx patch configmap  ingress-nginx-controller -p "$(cat patch-ingress-controller-configmap.yml)"
configmap/ ingress-nginx-controller patched</code></pre>

#### 3. Patching with Helm

Copy the next YAML snippet in a `values.yaml` file and modify the `proxy-real-ip-cidr` parameter according to your cluster configuration:

#### a. [PUBLIC NETWORK ONLY]

```yaml
controller:
  service:
    externalTrafficPolicy: "Local"
    annotations:
      service.beta.kubernetes.io/ovh-loadbalancer-proxy-protocol: "v2"
  config:
    use-proxy-protocol: "true"
    real-ip-header: "proxy_protocol"
    proxy-real-ip-cidr: "aaa.aaa.aaa.aaa/32,bbb.bbb.bbb.bbb/32,ccc.ccc.ccc.ccc/32,ddd.ddd.ddd.ddd/32"
```

#### a. [PRIVATE NETWORK ONLY]

```yaml
controller:
  service:
    externalTrafficPolicy: "Local"
    annotations:
      service.beta.kubernetes.io/ovh-loadbalancer-proxy-protocol: "v2"
  config:
    use-proxy-protocol: "true"
    real-ip-header: "proxy_protocol"
    proxy-real-ip-cidr: "10.0.0.0/20"
```

> [!primary]
>
> Note: [10.0.0.0/20] must be replaced with your own subnet range.

And upgrade your Helm release:

```bash
helm upgrade ingress-nginx ingress-nginx/ingress-nginx -n ingress-nginx -f values.yaml
```

You should see your Helm release being upgraded:
<pre class="console"><code>$ helm upgrade ingress-nginx ingress-nginx/ingress-nginx -n ingress-nginx -f values.yaml
Release "ingress-nginx" has been upgraded. Happy Helming!
NAME: ingress-nginx
LAST DEPLOYED: Fri Jun 11 17:08:00 2021
NAMESPACE: ingress-nginx
STATUS: deployed
REVISION: 3
TEST SUITE: None
NOTES:
The ingress-nginx controller has been installed.
It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running 'kubectl --namespace ingress-nginx get services -o wide -w ingress-nginx-controller'
An example Ingress that makes use of the controller:
  apiVersion: networking.k8s.io/v1beta1
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
                serviceName: exampleService
                servicePort: 80
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
  type: kubernetes.io/tls</code></pre>

### 4. Testing

> [!warning]
> Due to DNS propagation the actual resolving of your Load Balancer FQDN can take an additional 2-5 minutes to be fully usable. In the meantime, you can use the included IP to access the load balancer.
>

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

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: echo-ingress
  namespace: echo
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  rules:
  - http:
      paths:
        - path: "/"
          pathType: Prefix
          backend:
            service:
              name: echo-service
              port:
                number: 80
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
curl  xxx.xxx.xxx.xxx
```

And you should get the HTTP parameters of your request, including the right source IP in the `x-real-ip` header:

```json
{
  "path": "/",
  "headers": {
    "host": "xxx.xxx.xxx.xxx",
    "x-request-id": "2126b343bc837ecbd07eca904c33daa3",
    "x-real-ip": "XXX.XXX.XXX.XXX",
    "x-forwarded-for": "XXX.XXX.XXX.XXX",
    "x-forwarded-host": "xxx.xxx.xxx.xxx",
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
  "hostname": "xxx.xxx.xxx.xxx",
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
```

## What if I want to use another Ingress Controller

The precedent method should work in a similar way for any Ingress Controller. We will soon update this tutorial with more detailed information on other Ingress Controllers, specifically Traefik.
