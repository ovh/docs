---
title: Installing Knative on OVHcloud Managed Kubernetes
slug: installing-knative
excerpt: Find out how to install Knative on OVHcloud Managed Kubernetes
section: Tutorials
# order: 8 TODO:
---

**Last updated 23 September, 2021.**

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

Knative 
github.com/knative

[Knative](https://knative.dev) is a Kubernetes-based platform to deploy and manage modern serverless workloads.

Knatives provides a set of middleware components build on top of Kubernetes, abstracting away the complex details and enabling developers to focus on what matters. Built by codifying the best practices shared by successful real-world implementations, Knative solves the "boring but difficult" parts of deploying and managing cloud native services so you don't have to.

Knative have two components:

- serving
- eventing

It helps for:

- Scale to zero
- Scale from zero
- Traffic splitting, blue/green...
- Eventing system

In this tutorial we are going to install Knative on a freshly created OVHcloud Managed Kubernetes Service cluster. You can use the *Reset cluster* function on the Public Cloud section of the [OVHcloud Control Panel](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2Fpublic-cloud&ovhSubsidiary=gb){.external} to reinitialize your cluster before following this tutorial.


## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.


## Install Knative "kn" CLI

The Knative CLI (kn) provides a quick and easy interface for creating Knative resources, such as Knative Services and Event Sources, without the need to create or modify YAML files directly.

kn also simplifies completion of otherwise complex procedures such as autoscaling and traffic splitting.

In order to install the CLI, [follow the instructions](https://knative.dev/docs/getting-started/#install-the-knative-cli) depending on your OS.

Then test the CLI is correctly installed in your computer:
```
kn version
```

Here the result in my computer:

<pre class="console"><code>$ kn version
Version:      v0.25.0
Build Date:   2021-08-11 05:11:11
Git Revision: 035150ec
Supported APIs:
* Serving
  - serving.knative.dev/v1 (knative-serving v0.25.0)
* Eventing
  - sources.knative.dev/v1 (knative-eventing v0.25.0)
  - eventing.knative.dev/v1 (knative-eventing v0.25.0)
</code></pre>


## Installing Knative

### Installing the Knative Serving component¶

To install the Knative Serving component:

    Install the required custom resources by running the command:

kubectl apply -f https://github.com/knative/serving/releases/download/v0.25.0/serving-crds.yaml

Install the core components of Knative Serving by running the command:

kubectl apply -f https://github.com/knative/serving/releases/download/v0.25.0/serving-core.yaml

Info

For information about the YAML files in Knative Serving, see Knative Serving installation files.


kubectl apply -f https://github.com/knative/net-kourier/releases/download/v0.25.0/kourier.yaml


### Installing a networking layer

The following tabs expand to show instructions for installing a networking layer. Follow the procedure for the networking layer of your choice:
Kourier (Choose this if you are not sure)

The following commands install Kourier and enable its Knative integration.

    Install the Knative Kourier controller by running the command:

kubectl apply -f https://github.com/knative/net-kourier/releases/download/v0.25.0/kourier.yaml

Configure Knative Serving to use Kourier by default by running the command:

kubectl patch configmap/config-network \
  --namespace knative-serving \
  --type merge \
  --patch '{"data":{"ingress.class":"kourier.ingress.networking.knative.dev"}}'

Fetch the External IP address or CNAME by running the command:

kubectl --namespace kourier-system get service kourier

Tip

Save this to use in the following Configure DNS section.

### Configure DNS

You can configure DNS to prevent the need to run curl commands with a host header.

The following tabs expand to show instructions for configuring DNS. Follow the procedure for the DNS of your choice:
Magic DNS (sslip.io)

Knative provides a Kubernetes Job called default-domain that configures Knative Serving to use sslip.io as the default DNS suffix.

kubectl apply -f https://github.com/knative/serving/releases/download/v0.25.0/serving-default-domain.yaml

Warning

This will only work if the cluster LoadBalancer Service exposes an IPv4 address or hostname, so it will not work with IPv6 clusters or local setups like minikube unless minikube tunnel is running.

In these cases, see the "Real DNS" or "Temporary DNS" tabs.


A new `knative-serving` namespace appear on our cluster with knative serving components:

$ kubectl get po -n knative-serving
NAME                                     READY   STATUS    RESTARTS   AGE
activator-66ccff99f8-6fmtg               1/1     Running   0          44s
autoscaler-5dfd7d8bc6-fgvbx              1/1     Running   0          44s
controller-79f444b898-dvrvv              1/1     Running   0          44s
domain-mapping-586dfb4787-rtvzf          1/1     Running   0          44s
domainmapping-webhook-65dd85b5b8-7npx2   1/1     Running   0          44s
webhook-854f698d87-qflzw                 1/1     Running   0          43s

## Deploying an application

TODO:

kubectl create namespace knative-apps

## TODO:

xx


## Downloading Istio

Istio is installed in its own `istio-system` namespace and can manage services from all other namespaces.

1. Go to the [Istio release page](https://github.com/istio/istio/releases){.external} to download the installation file for your OS, or download and extract the latest release automatically (Linux or macOS):

    ```
    curl -L https://istio.io/downloadIstio | sh -
    ```

1. Move to the Istio package directory. For example, if the package is istio-1.11.2:  

    ```
    cd istio-1.11.2
    ```

    The installation directory contains:

    - Sample applications in `samples/`
    - The `istioctl` client binary in the `bin/` directory.

  
1. Add the `istioctl` client to your PATH environment variable, on a macOS or Linux system:

    ```
    export PATH=$PWD/bin:$PATH
    ```

For the rest of the tutorial, please remain on this directory.

## Installing Istio

For this installation, we use the `istioctl` command line tool that provides rich customization of the Istio control plane and of the sidecars for the Istio data plane. It has user input validation to help prevent installation errors and customization options to override any aspect of the configuration.

In this tutorial you're going to install Istio with the default profile, [other profiles](https://istio.io/latest/docs/setup/additional-setup/config-profiles/) exists.

```bash
istioctl install
```

<pre class="console"><code>$ istioctl install
This will install the Istio 1.11.2 default profile with ["Istio core" "Istiod" "Ingress gateways"] components into the cluster. Proceed? (y/N) y
✔ Istio core installed
✔ Istiod installed
✔ Ingress gateways installed
✔ Installation complete
Thank you for installing Istio 1.11.  Please take a few minutes to tell us about your install/upgrade experience!  https://forms.gle/kWULBRjUv7hHci7T6
</code></pre>


The `istio-system` namespace is created with all Istio components.


## Installing Addons

Istio integrates several different telemetry applications. These can help you gain an understanding of the structure of your service mesh, display the topology of the mesh, and analyze the health of your mesh.

Use the following instructions to deploy the `Kiali` dashboard, along with `Prometheus`, `Grafana`, and `Jaeger`.

Install Kiali and the other addons and wait for them to be deployed:

```
kubectl apply -f samples/addons
```

In my example cluster I get:

<pre class="console"><code>
$ kubectl apply -f samples/addons
serviceaccount/grafana created
configmap/grafana created
service/grafana created
deployment.apps/grafana created
configmap/istio-grafana-dashboards created
configmap/istio-services-grafana-dashboards created
deployment.apps/jaeger created
service/tracing created
service/zipkin created
service/jaeger-collector created
...
service/prometheus created
deployment.apps/prometheus created
</code></pre>

## Verifying the installation

1. List the services in `istio-system` namespace using `kubectl get services -n istio-system` and ensure that the following services are deployed: `istiod`, `istio-ingressgateway` and the addons: `grafana`, `jaeger`, `kiali`, `prometheus`, `tracing`and `zipkin`.

    In my example cluster I get:

    <pre class="console"><code>$  kubectl get services -n istio-system
    NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                                      AGE
    grafana                ClusterIP      10.3.75.230    <none>          3000/TCP                                     2m19s
    istio-ingressgateway   LoadBalancer   10.3.175.205   51.178.69.212   15021:31288/TCP,80:32588/TCP,443:30085/TCP   4m38s
    istiod                 ClusterIP      10.3.31.181    <none>          15010/TCP,15012/TCP,443/TCP,15014/TCP        4m49s
    jaeger-collector       ClusterIP      10.3.250.26    <none>          14268/TCP,14250/TCP,9411/TCP                 2m16s
    kiali                  ClusterIP      10.3.255.49    <none>          20001/TCP,9090/TCP                           2m15s
    prometheus             ClusterIP      10.3.9.246     <none>          9090/TCP                                     2m15s
    tracing                ClusterIP      10.3.220.9     <none>          80/TCP,16685/TCP                             2m16s
    zipkin                 ClusterIP      10.3.165.183   <none>          9411/TCP                                     2m16s
    </code></pre>

    As the `LoadBalancer` creation is asynchronous, and the provisioning of the load balancer can take several minutes, you will surely get a `pending` for `istio-ingressgateway` `EXTERNAL-IP` field. Please try again in a few minutes to get the external URL to call your Istio. 



1. List the pods in `istio-system` namespace using `kubectl get pods -n istio-system` and ensure that the following pods are deployed and all containers are up and running: `istiod-*`, `istio-ingressgateway-*` and the addons: `grafana-*`, `jaeger-*`, `kiali-*`and `prometheus-*`.

    In my example cluster I get:

    <pre class="console"><code>$ kubectl get pods -n istio-system
    NAME                                    READY   STATUS    RESTARTS   AGE
    grafana-556f8998cd-kmn6l                1/1     Running   0          4m23s
    istio-ingressgateway-65668fd4dd-t8t4q   1/1     Running   0          6m43s
    istiod-5f7bb95ddf-25f27                 1/1     Running   0          6m54s
    jaeger-5f65fdbf9b-ctjkn                 1/1     Running   0          4m20s
    kiali-787bc487b7-h9ck9                  1/1     Running   0          4m19s
    prometheus-9f4947649-7wszv              2/2     Running   0          4m19s
    </code></pre>


## Deploying an application

To verify that Istio is truly working in the cluster, you are going to deploy a test application. We have choosen the [Bookinfo](https://istio.io/docs/examples/bookinfo/){.external} application, as it's a multi-technology multi-instance microservices-based application that let's you verify if Istio works as intended.


![Bookinfo](images/installing-istio-bookinfo.png){.thumbnail}



### Installing Bookinfo

The [Istio-Sidecar-injector](https://istio.io/docs/setup/kubernetes/sidecar-injection/#automatic-sidecar-injection){.external}, that you installed with Istio, will automatically inject Envoy containers into your application pods. The injector assumes the application pods are running in namespaces labeled with `istio-injection=enabled`. 

Let's create and label a `istio-apps` namespace:

```
kubectl create namespace istio-apps
```

Then, add the `istio-injection=enabled` label:

```
kubectl label namespace istio-apps istio-injection=enabled
```

In my example cluster I get:

<pre class="console"><code>$ kubectl create namespace istio-apps
namespace/istio-apps created

$ kubectl label namespace istio-apps istio-injection=enabled
namespace/istio-apps labeled
</code></pre>


And now, deploy the `bookinfo` manifest into the namespace:

```
kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml -n istio-apps
```

The above command installs and launches, in `istio-apps` namespace, all four microservices as illustrated in the above diagram: `details`, `productpage`, `ratings` and  the three versions of `reviews`:

<pre class="console"><code>$ kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml -n istio-apps
service/details created
serviceaccount/bookinfo-details created
deployment.apps/details-v1 created
service/ratings created
serviceaccount/bookinfo-ratings created
deployment.apps/ratings-v1 created
service/reviews created
serviceaccount/bookinfo-reviews created
deployment.apps/reviews-v1 created
deployment.apps/reviews-v2 created
deployment.apps/reviews-v3 created
service/productpage created
serviceaccount/bookinfo-productpage created
deployment.apps/productpage-v1 created
</code></pre>
    

Now you can verify that all services and pods are correctly defined and running:

1. Use `kubectl -n istio-apps get services` to verify that the `details`, `productpage`, `ratings` and `reviews` services are up un running:

    <pre class="console"><code>$ kubectl -n istio-apps get services
NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
details       ClusterIP   10.3.131.63    <none>        9080/TCP   6s
productpage   ClusterIP   10.3.141.189   <none>        9080/TCP   4s
ratings       ClusterIP   10.3.133.82    <none>        9080/TCP   5s
reviews       ClusterIP   10.3.60.119    <none>        9080/TCP   5s
    </code></pre>

1. Use `kubectl -n istio-apps get pods` to verify that the `details-v1-*`, `productpage-v1-*`, `ratings-v1-*`, `reviews-v1-*`, `reviews-v2-*` and `reviews-v3-*` are up and running:
 
    In the case of my example cluster:

    <pre class="console"><code>$ kubectl -n istio-apps get pods
NAME                              READY   STATUS    RESTARTS   AGE
details-v1-79f774bdb9-wnklv       2/2     Running   0          88s
productpage-v1-6b746f74dc-4d77c   2/2     Running   0          87s
ratings-v1-b6994bb9-s6kwq         2/2     Running   0          88s
reviews-v1-545db77b95-rf58h       2/2     Running   0          88s
reviews-v2-7bf8c9648f-5dt4x       2/2     Running   0          88s
reviews-v3-84779c7bbc-f5jbw       2/2     Running   0          87s
    </code></pre>

As you can see, each pod has 2 containers, the app container and the Istio sidecar that is deployed with it.

Verify everything is working correctly up to this point. Run this command to see if the app is running inside the cluster and serving HTML pages by checking for the page title in the response:

<pre class="console"><code>$ kubectl exec "$(kubectl get pod -l app=ratings -o jsonpath='{.items[0].metadata.name}')" -c ratings -- curl -sS productpage:9080/productpage | grep -o "<title>.*</title>"
<title>Simple Bookstore App</title>
<pre class="console"><code>

### Open the application to outside traffic

Now that the Bookinfo services are up and running, you need to make the application accessible from outside of your Kubernetes cluster, e.g., from a browser.
An [Istio Gateway](https://istio.io/docs/concepts/traffic-management/#gateways){.external} is used for this purpose.

1. Associate this application with the Istio gateway:

    <pre class="console"><code>$ kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml -n istio-apps
    gateway.networking.istio.io/bookinfo-gateway created
    virtualservice.networking.istio.io/bookinfo created
    </code></pre>

1. Ensure that there are no issues with the configuration:

    <pre class="console"><code>$ istioctl analyze -n istio-apps
    ✔ No validation issues found when analyzing namespace: istio-apps.
    </code></pre>


1. Confirm the gateway has been created:
    
    <pre class="console"><code>$ kubectl -n istio-apps get gateway
    NAME               AGE
    bookinfo-gateway   53s
    </code></pre>


### Determining the ingress IP and port

Set `GATEWAY_URL`, the URL of the `istio-gateway` service.

You can get it with the following commands:

<pre class="console"><code>$ export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
$ export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].port}')
$ export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT

$ echo $GATEWAY_URL
135.125.84.93
</code></pre>


### Confirm the app is running

To confirm that the Bookinfo application is running, run the following `curl` command:

```
curl -o /dev/null -s -w "%{http_code}\n"  http://$GATEWAY_URL/productpage
```

You should get an [HTTP status code 200](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success) indicating that your `productpage` is OK.

<pre class="console"><code>$ curl -o /dev/null -s -w "%{http_code}\n"  http://$GATEWAY_URL/productpage
200
</code></pre>

You can also point your browser to `http://<YOUR_GATEWAY_URL>/productpage` (in my example to http://135.125.84.93:80/productpage) to view the Bookinfo web page. If you refresh the page several times, you should see different versions of reviews shown in productpage, presented in a round robin style (red stars, black stars, no stars), since we haven’t yet used Istio to control the version routing.


![Bookinfo](images/installing-istio-02.jpg){.thumbnail}


## Visualize the traffic

As we installed Istio addons, we can access the `Kiali` dashboard. The following command will create a tunnel between the Kiali service and your machine and then open the dashboard link in your favorite browser:

```
istioctl dashboard kiali
```

![Kiali](images/installing-istio-kiali.png){.thumbnail}

Now, we will take a look to the traffic. For that, in the left navigation menu, select `Graph` and in the `Namespace` drop down, select `istio-apps`.

> [!warning]
> To see trace data, you must send requests to your service. In order to send 100 requests to the productpage service, use the following command:
> ```
> for i in `seq 1 100`; do curl -s -o /dev/null "http://$GATEWAY_URL/productpage"; done
> ```


The Kiali dashboard shows an overview of your mesh with the relationships between the services in the Bookinfo sample application. It also provides filters to visualize the traffic flow.

![Kiali Graph](images/installing-istio-kiali-graph.png){.thumbnail}


## What's next?

Now you have a working Bookinfo app deployed on Istio, you can follow the suggestions of the [Bookinfo sample app page](https://istio.io/docs/examples/bookinfo/){.external} and use this sample to experiment with Istio’s features for traffic routing, fault injection, rate limiting, etc. To proceed, refer to one or more of the [Istio Examples](https://istio.io/docs/examples){.external}, depending on your interest. [Intelligent Routing](https://istio.io/docs/examples/intelligent-routing/){.external} is a good place to start for beginners.


## Cleanup

To uninstall the Bookinfo app, the easiest way is to use the provided `cleanup.sh` script:

<pre class="console"><code>$ ./samples/bookinfo/platform/kube/cleanup.sh
namespace ? [default] istio-apps
using NAMESPACE=istio-apps
virtualservice.networking.istio.io "bookinfo" deleted
gateway.networking.istio.io "bookinfo-gateway" deleted
Application cleanup may take up to one minute
service "details" deleted
serviceaccount "bookinfo-details" deleted
deployment.apps "details-v1" deleted
service "ratings" deleted
serviceaccount "bookinfo-ratings" deleted
deployment.apps "ratings-v1" deleted
service "reviews" deleted
serviceaccount "bookinfo-reviews" deleted
deployment.apps "reviews-v1" deleted
deployment.apps "reviews-v2" deleted
deployment.apps "reviews-v3" deleted
service "productpage" deleted
serviceaccount "bookinfo-productpage" deleted
deployment.apps "productpage-v1" deleted
Application cleanup successful
</code></pre>

To confirm the shutdown you can list the virtual services, destination rules, gateway and pods in the `istio-apps` namespace:

```
kubectl -n istio-apps get virtualservices   #-- there should be no virtual services
kubectl -n istio-apps get destinationrules  #-- there should be no destination rules
kubectl -n istio-apps get gateway           #-- there should be no gateway
kubectl -n istio-apps get pods              #-- there should be no pod
```

In my example cluster:

<pre class="console"><code>$ kubectl -n istio-apps get virtualservices   #-- there should be no virtual services
No resources found in istio-apps namespace.
kubectl -n istio-apps get destinationrules  #-- there should be no destination rules
No resources found in istio-apps namespace.
kubectl -n istio-apps get gateway           #-- there should be no gateway
No resources found in istio-apps namespace.
kubectl -n istio-apps get pods              #-- there should be no pod
No resources found in istio-apps namespace.
</code></pre>


Now you can uninstall Istio with `istioctl` command:

```
istioctl manifest generate | kubectl delete --ignore-not-found=true -f -
```

This command deletes the RBAC permissions and all resources hierarchically under the `istio-system` namespace. It is safe to ignore errors for non-existent resources because they may have been deleted hierarchically.

The istio-system namespace is not removed by default. If no longer needed, use the following command to remove it:

```
kubectl delete namespace istio-system
```

And remove `istio-apps` namespace:

```
kubectl delete namespace istio-apps
```


Example on my cluster:

<pre class="console"><code>
$ istioctl manifest generate | kubectl delete --ignore-not-found=true -f -
customresourcedefinition.apiextensions.k8s.io "authorizationpolicies.security.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "destinationrules.networking.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "envoyfilters.networking.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "gateways.networking.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "istiooperators.install.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "peerauthentications.security.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "requestauthentications.security.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "serviceentries.networking.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "sidecars.networking.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "telemetries.telemetry.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "virtualservices.networking.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "workloadentries.networking.istio.io" deleted
customresourcedefinition.apiextensions.k8s.io "workloadgroups.networking.istio.io" deleted
serviceaccount "istio-ingressgateway-service-account" deleted
serviceaccount "istio-reader-service-account" deleted
serviceaccount "istiod" deleted
serviceaccount "istiod-service-account" deleted
clusterrole.rbac.authorization.k8s.io "istio-reader-clusterrole-istio-system" deleted
clusterrole.rbac.authorization.k8s.io "istio-reader-istio-system" deleted
clusterrole.rbac.authorization.k8s.io "istiod-clusterrole-istio-system" deleted
...
service "istio-ingressgateway" deleted
service "istiod" deleted

$ kubectl delete namespace istio-system
namespace "istio-system" deleted

$ kubectl delete namespace istio-apps
namespace "istio-apps" deleted
</code></pre>
