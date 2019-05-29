---
title: 'Installing Istio on OVH Managed Kubernetes'
slug: installing-istio
excerpt: 'Find out how to install Istio on OVH Managed Kubernetes'
section: Tutorials
---

**Last updated on 25 February, 2019**

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
 }
 .small {
     font-size: 0.75em;
 }
</style>

[Istio](https://istio.io) is a open source service mesh and platform to reduce the complexity of deploying, securing, controlling and observing distributed services. As the Istio site explains, Istio helps you to:

- Control the flow of traffic between services
- Secure the services and manage the authentication, authorization and encryption of inter-service communications
- Apply and enforce policies on distributes services
- Monitor the services gathering metrics, logs and traces

In this tutorial we are going to install Istio on a freshly created OVH Managed Kubernetes Service cluster. You can use the *Reset cluster* function on your [OVH Cloud Manager](https://www.ovh.com/manager/cloud/) to reinitialize your cluster before following this tutorial.


## Before you begin

This tutorial presupposes that you already have a working OVH Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.


## Downloading Istio

Istio is installed in its own `istio-system` namespace and can manage services from all other namespaces.

1. Go to the [Istio release page](https://github.com/istio/istio/releases) to download the installation file corresponding to your OS, and extract it in a local repertory. 

1. Move to the Istio package directory. For example, if the package is istio-1.0.5:  

    ```
    cd istio-1.0.5
    ```

    The installation directory contains:

    - Installation `.yaml` files for Kubernetes in `install/`
    - Sample applications in `samples/`
    - The `istioctl` client binary in the bin/ directory. `istioctl` is used when manually injecting Envoy as a sidecar proxy and for creating routing rules and policies.
    - The `istio.VERSION` configuration file
  
1. Add the `istioctl` client to your PATH environment variable, on a macOS or Linux system:

    ```
    export PATH=$PWD/bin:$PATH
    ```

For the rest of the tutorial, please remain on this directory.



## Installing Istio

In this tutorial you're going to install Istio with the default [mutual TLS authentication](https://istio.io/docs/concepts/security/#mutual-tls-authentication) by using the using the `istio-demo-auth` manifest:

It's a nice by default setting, because you are getting a good overview of Istio functionalities, including the TLS tunneling of inter-services communication, where Istio tunnels service-to-service communication through the client side and server side [Envoy proxies](https://envoyproxy.github.io/envoy/). 

> [!warning]
> The drawback of choosing the default mutual TLS authentication install is that it only works in new, freshly created clusters. 
>
> For clusters with existing applications, or if you're deploying applications where services with an Istio sidecar need to be able to communicate with other non-Istio Kubernetes services, you could use the  `istio-demo` manifest instead.


Use `kubectl` to apply the manifest to your cluster:

```
kubectl apply -f install/kubernetes/helm/istio/templates/crds.yaml
kubectl apply -f install/kubernetes/istio-demo-auth.yaml
```


It begins by creating a new namespace, `istio-system`, where all the Isitio components are created, and then it install all the config maps, service accounts, jobs, *et al.*:

<pre class="console"><code>$ kubectl apply -f install/kubernetes/istio-demo-auth.yaml 
namespace/istio-system created
configmap/istio-galley-configuration created
configmap/istio-grafana-custom-resources created
configmap/istio-grafana-configuration-dashboards created
configmap/istio-grafana created
configmap/istio-statsd-prom-bridge created
configmap/prometheus created
configmap/istio-security-custom-resources created
configmap/istio created
configmap/istio-sidecar-injector created
serviceaccount/istio-galley-service-account created
serviceaccount/istio-egressgateway-service-account created
serviceaccount/istio-ingressgateway-service-account created
serviceaccount/istio-grafana-post-install-account created
clusterrole.rbac.authorization.k8s.io/istio-grafana-post-install-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-grafana-post-install-role-binding-istio-system created
job.batch/istio-grafana-post-install created
serviceaccount/istio-mixer-service-account created
serviceaccount/istio-pilot-service-account created
serviceaccount/prometheus created
serviceaccount/istio-cleanup-secrets-service-account created
clusterrole.rbac.authorization.k8s.io/istio-cleanup-secrets-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-cleanup-secrets-istio-system created
job.batch/istio-cleanup-secrets created
serviceaccount/istio-security-post-install-account created
clusterrole.rbac.authorization.k8s.io/istio-security-post-install-istio-system created
clusterrolebinding.rbac.authorization.k8s.io/istio-security-post-install-role-binding-istio-system created
job.batch/istio-security-post-install created
serviceaccount/istio-citadel-service-account created
serviceaccount/istio-sidecar-injector-service-account created
...
</code></pre>



## Verifying the installation

1. List the services in `istio-system` namespace using `kubectl get services -n istio-system` and ensure that the following services are deployed: `istio-pilot`, `istio-ingressgateway`, `istio-policy`, `istio-telemetry`, `prometheus` and `istio-galley`

    In my example cluster I get:

    <pre class="console"><code>$ kubectl get services -n istio-system
    NAME                     TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)                                         AGE
    grafana                  ClusterIP      10.3.52.164    &lt;none>        3000/TCP                                        15m
    istio-citadel            ClusterIP      10.3.19.71     &lt;none>        8060/TCP,9093/TCP                               15m
    istio-egressgateway      ClusterIP      10.3.92.137    &lt;none>        80/TCP,443/TCP                                  15m
    istio-galley             ClusterIP      10.3.183.209   &lt;none>        443/TCP,9093/TCP                                15m
    istio-ingressgateway     LoadBalancer   10.3.121.52    &lt;pending>     80:31380/TCP,443:31390/TCP,31400:31400/TCP...   15m
    istio-pilot              ClusterIP      10.3.25.40     &lt;none>        15010/TCP,15011/TCP,8080/TCP,9093/TCP           15m
    istio-policy             ClusterIP      10.3.248.135   &lt;none>        9091/TCP,15004/TCP,9093/TCP                     15m
    istio-sidecar-injector   ClusterIP      10.3.26.177    &lt;none>        443/TCP                                         15m
    istio-telemetry          ClusterIP      10.3.230.51    &lt;none>        9091/TCP,15004/TCP,9093/TCP,42422/TCP           15m
    jaeger-agent             ClusterIP      None           &lt;none>        5775/UDP,6831/UDP,6832/UDP                      15m
    jaeger-collector         ClusterIP      10.3.85.184    &lt;none>        14267/TCP,14268/TCP                             15m
    jaeger-query             ClusterIP      10.3.196.100   &lt;none>        16686/TCP                                       15m
    prometheus               ClusterIP      10.3.103.193   &lt;none>        9090/TCP                                        15m
    servicegraph             ClusterIP      10.3.216.22    &lt;none>        8088/TCP                                        15m
    tracing                  ClusterIP      10.3.188.189   &lt;none>        80/TCP                                          15m
    zipkin                   ClusterIP      10.3.229.37    &lt;none>        9411/TCP                                        15m
    </code></pre>

    As the OVH Managed Kubernetes beta doesn't support yet an external load balancer, the `istio-ingressgateway` `EXTERNAL-IP` will say `<pending>`. You will need to access it using the service NodePort, or use port-forwarding instead.

1. List the pods in `istio-system` namespace using `kubectl get pods -n istio-system` and ensure that the following pods are deployed and all containers are up and running: `istio-pilot-*`, `istio-ingressgateway-*`, `istio-egressgateway-*`, `istio-policy-*`, `istio-telemetry-*`, `istio-citadel-*`, `prometheus-*`, `istio-galley-*`, and, optionally, `istio-sidecar-injector-*`.

    In my example cluster I get:

    <pre class="console"><code>$ kubectl get pods -n istio-system
    NAME                                     READY   STATUS      RESTARTS   AGE
    grafana-7f6cd4bf56-g57ft                 1/1     Running     0          17m
    istio-citadel-7dd558dcf-m8znf            1/1     Running     0          16m
    istio-cleanup-secrets-lptfk              0/1     Completed   0          17m
    istio-egressgateway-8666f9bdcc-6sl2j     1/1     Running     0          17m
    istio-galley-787758f7b8-nk6pt            1/1     Running     0          17m
    istio-grafana-post-install-k2vn7         0/1     Completed   2          17m
    istio-ingressgateway-645bbdc9db-4tzhv    1/1     Running     0          17m
    istio-pilot-86b6679ddf-pvvvj             2/2     Running     0          17m
    istio-policy-6b59f7bdfd-69mdl            2/2     Running     0          17m
    istio-security-post-install-8xmfm        0/1     Completed   2          17m
    istio-sidecar-injector-d7f98d9cb-p892b   1/1     Running     0          16m
    istio-telemetry-f94b484cd-knkx6          2/2     Running     0          17m
    istio-tracing-7596597bd7-2hjnb           1/1     Running     0          16m
    prometheus-76db5fddd5-rtqnl              1/1     Running     0          16m
    servicegraph-56dddff777-chsj8            1/1     Running     1          16m
    </code></pre>


## Deploying an application

To verify that Istio is truly working in the cluster, you are going to deploy a test application. We have choosen the [Bookinfo](https://istio.io/docs/examples/bookinfo/) application, as it's a multi-technology multi-instance microservices-based application that let's you verify if Istio works as intended.


![Bookinfo](images/installing-istio-bookinfo.png){.thumbnail}



### Installing Bookinfo

The [Istio-Sidecar-injector](https://istio.io/docs/setup/kubernetes/sidecar-injection/#automatic-sidecar-injection), that you installed with Istio, will automatically inject Envoy containers into your application pods. The injector assumes the application pods are running in namespaces labeled with `istio-injection=enabled`. Let's create and label a `istio-apps` namespace:

```
kubectl create namespace istio-apps
kubectl label namespace istio-apps istio-injection=enabled
```

And now, deploy the `bookinfo` manifest into the namespace:

```
kubectl create -n istio-apps -f ./samples/bookinfo/platform/kube/bookinfo.yaml
```

The above command installs and launches all four microservices as illustrated in the above diagram: `details`, `productpage`, `ratings` and  the three versions of `reviews`:

<pre class="console"><code>$ kubectl create -n istio-apps -f ./samples/bookinfo/platform/kube/bookinfo.yaml
service/details created
deployment.extensions/details-v1 created
service/ratings created
deployment.extensions/ratings-v1 created
service/reviews created
deployment.extensions/reviews-v1 created
deployment.extensions/reviews-v2 created
deployment.extensions/reviews-v3 created
service/productpage created
deployment.extensions/productpage-v1 created
</code></pre>
    

Now you can verify that all services and pods are correctly defined and running:

1. Use `kubectl -n istio-apps get services ` to verify that the `details`, `productpage`, `ratings` and `reviews` services are up un running:



    <pre class="console"><code>$ kubectl -n istio-apps get services
    NAME          TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
    details       ClusterIP   10.3.203.54    &lt;none>        9080/TCP   2m
    productpage   ClusterIP   10.3.238.61    &lt;none>        9080/TCP   2m
    ratings       ClusterIP   10.3.184.226   &lt;none>        9080/TCP   2m
    reviews       ClusterIP   10.3.230.177   &lt;none>        9080/TCP   2m
    </code></pre>

1. Use `kubectl -n istio-apps get pods` to verify that the `details-v1-*`, `productpage-v1-*`, `ratings-v1-*`, `reviews-v1-*`, `reviews-v2-*` and `reviews-v3-*` are up and running:
 
    In the case of my example cluster:

    <pre class="console"><code>$ kubectl -n istio-apps get pods
    NAME                             READY   STATUS    RESTARTS   AGE
    details-v1-6764bbc7f7-tcgph      2/2     Running   0          4m
    productpage-v1-54b8b9f55-jvdzm   2/2     Running   0          4m
    ratings-v1-7bc85949-tmb8q        2/2     Running   0          4m
    reviews-v1-fdbf674bb-gkzdq       2/2     Running   0          4m
    reviews-v2-5bdc5877d6-k6x6q      2/2     Running   0          4m
    reviews-v3-dd846cc78-lcwrm       2/2     Running   0          4m
    </code></pre>


### Determining the ingress IP and port

Now that the Bookinfo services are up and running, you need to make the application accessible from outside of your Kubernetes cluster, e.g., from a browser. An [Istio Gateway](https://istio.io/docs/concepts/traffic-management/#gateways) is used for this purpose.

1. Define the ingress gateway for the application:


        kubectl -n istio-apps apply -f samples/bookinfo/networking/bookinfo-gateway.yaml


1. Confirm the gateway has been created:

    
        kubectl -n istio-apps get gateway
    

1. Set the `INGRESS_HOST` and `INGRESS_PORT` variables for accessing the gateway. As the OVH Managed Kubernetes beta doesn't support yet an external load balancer, you need to access the gateway using the service’s node port.

    Set the ingress ports:

    
        export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
        export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}')
    

    For the `INGRESS_HOST` use the nodes URL found in the OVH Cloud Manager (see [deploying a Hello World application](https://docs.ovh.com/gb/en/kubernetes/deploying-hello-world/)).

    
        export INGRESS_HOST=<NODES_URL>
    

1. Set `GATEWAY_URL`:

    
        export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
    


In the case of my example cluster:

<pre class="console"><code>$ kubectl -n istio-apps apply -f samples/bookinfo/networking/bookinfo-gateway.yaml
gateway.networking.istio.io/bookinfo-gateway created
virtualservice.networking.istio.io/bookinfo created
$ kubectl -n istio-apps get gateway
NAME               AGE
bookinfo-gateway   28s
$ export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
$ export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}')
$ kubectl cluster-info
Kubernetes master is running at https://clusterId.c1.gra.k8s.ovh.net
KubeDNS is running at https://clusterId.c1.gra.k8s.ovh.net/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
$ export INGRESS_HOST=clusterId.c1.gra.k8s.ovh.net
$ export INGRESS_HOST=clusterId.nodes.c1.gra.k8s.ovh.net
$ export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
$ echo $GATEWAY_URL
clusterId.nodes.c1.gra.k8s.ovh.net:31380
</code></pre>


### Confirm the app is running

To confirm that the Bookinfo application is running, run the following `curl` command:

```
curl -o /dev/null -s -w "%{http_code}\n" http://${GATEWAY_URL}/productpage
```

You sholuld get an [HTTP status code 200](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success) indicating that your `productpage` is OK.

<pre class="console"><code>$ curl -o /dev/null -s -w "%{http_code}\n" http://${GATEWAY_URL}/productpage
200
</code></pre>

You can also point your browser to `http://<YOUR_GATEWAY_URL>/productpage` (in my example to http://clusterId.nodes.c1.gra.k8s.ovh.net:31380/productpage) to view the Bookinfo web page. If you refresh the page several times, you should see different versions of reviews shown in productpage, presented in a round robin style (red stars, black stars, no stars), since we haven’t yet used Istio to control the version routing.


![Bookinfo](images/installing-istio-02.jpg){.thumbnail}


## What's next?

Now you have a working Bookinfo app deployed on Istio, you can follow the suggestions of the [Bookinfo sample app page](https://istio.io/docs/examples/bookinfo/) and use this sample to experiment with Istio’s features for traffic routing, fault injection, rate limiting, etc. To proceed, refer to one or more of the [Istio Examples](https://istio.io/docs/examples), depending on your interest. [Intelligent Routing](https://istio.io/docs/examples/intelligent-routing/) is a good place to start for beginners.


## Cleanup

To uninstall the Bookinfo app, the easiest way is to use the provided `cleanup.sh` script:

<pre class="console"><code>$ ./samples/bookinfo/platform/kube/cleanup.sh
namespace ? istio-apps
using NAMESPACE=istio-apps
Application cleanup may take up to one minute
service "details" deleted
deployment.extensions "details-v1" deleted
service "ratings" deleted
deployment.extensions "ratings-v1" deleted
service "reviews" deleted
deployment.extensions "reviews-v1" deleted
deployment.extensions "reviews-v2" deleted
deployment.extensions "reviews-v3" deleted
service "productpage" deleted
deployment.extensions "productpage-v1" deleted
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

<pre class="console"><code>$kubectl -n istio-apps get virtualservices   #-- there should be no virtual services
No resources found.
$ kubectl -n istio-apps get destinationrules  #-- there should be no destination rules
No resources found.
$ kubectl -n istio-apps get gateway           #-- there should be no gateway
No resources found.
$ kubectl -n istio-apps get pods              #-- there should be no pod
No resources found.
</code></pre>


Now you can uninstall Istio using again the `istio-demo-auth` manifest:

```
kubectl delete -f install/kubernetes/istio-demo.yaml
```


Example on my cluster:

<pre class="console"><code>
$ kubectl delete -f install/kubernetes/istio-demo.yaml
configmap "istio-galley-configuration" deleted
configmap "istio-statsd-prom-bridge" deleted
configmap "prometheus" deleted
configmap "istio-security-custom-resources" deleted
configmap "istio" deleted
configmap "istio-sidecar-injector" deleted
serviceaccount "istio-galley-service-account" deleted
serviceaccount "istio-egressgateway-service-account" deleted
serviceaccount "istio-ingressgateway-service-account" deleted
serviceaccount "istio-mixer-service-account" deleted
serviceaccount "istio-pilot-service-account" deleted
serviceaccount "prometheus" deleted
serviceaccount "istio-cleanup-secrets-service-account" deleted
clusterrole.rbac.authorization.k8s.io "istio-cleanup-secrets-istio-system" deleted
...
</code></pre>
