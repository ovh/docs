---
title: Distributed tracing with Jaeger on an OVHcloud Managed Kubernetes Service
slug: tracing-jaeger
excerpt: 'Find out how to set-up distributed tracing on OVHcloud Managed Kubernetes Service with Jaeger.'
section: Monitoring & Observability
order: 01
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

**Last updated March 21, 2022.**

## Objective

[Jaeger](https://www.jaegertracing.io/) is an open-source distributed tracing platform.

![Jaeger](images/jaeger-logo.png)

It can be used for monitoring microservices-based distributed systems:

- Distributed context propagation
- Distributed transaction monitoring
- Root cause analysis
- Service dependency analysis
- Performance / latency optimization

TODO: faire le schema d'architecture a la mano ?
![Jaeger](images/jaeger-architecture.png)

Read more about [Jaeger architecture and components](https://www.jaegertracing.io/docs/1.32/architecture/).

TODO: remplacer DB par le Db ou in-memory DB

In this guide you will:

- Install Jaeger Operator
- Deploy Jaeger components
- Access to the UI
- Deploy your instrumented application
- Visualize traces

You can use the *Reset cluster* function on the Public Cloud section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=ie){.external} to reinitialize your cluster before following this tutorial.

## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/){.external} installed on your workstation and your cluster. Please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

## Instructions

In this guide we will show you first how to deploy Jaeger as distributed tracing platform backend and thenn how to create and deploy your application that will send their traces to Jaeger.

TODO: xxx

go app (with OpenTelemetry) -> jaeger/simplest-collector <- jaeger-UI/query

TODO: pour la visualisation de l'app en go dessiner un conteneur avec dedans l'icone go et opentelemetry
puis vers un conteneur collector puis vers un conteneur query/UI

### Installing Jaeger

For this tutorial we are using the [Jaeger Helm chart](https://github.com/jaegertracing/helm-charts).

Add the Jaeger Helm repository:

```bash
helm repo add jaegertracing https://jaegertracing.github.io/helm-charts
helm repo update
```

These commands will add the Jaeger Helm repository to your local Helm chart repository and update the installed chart repositories:

<pre class="console"><code>$ helm repo add jaegertracing https://jaegertracing.github.io/helm-charts
helm repo update
"jaegertracing" has been added to your repositories
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "sealed-secrets" chart repository
...
...Successfully got an update from the "prometheus-community" chart repository
Update Complete. ⎈Happy Helming!⎈
</code></pre>

The Jaeger repository provides two charts: `jaeger` and `jaeger-operator`. For the guide, you will deploy the jaeger-operator chart, which makes it easy to configure a minimal installation. 

To learn more about the Jaeger Operator for Kubernetes, consult the [official documentation](https://www.jaegertracing.io/docs/latest/operator/).

Install the latest version of Jaeger with `helm install` command:

```bash
helm install jaeger-operator jaegertracing/jaeger-operator --namespace observability --create-namespace --set rbac.clusterRole=true
```

This command will install the latest version of Jaeger operator and `observability` namespace:

<pre class="console"><code>$ helm install jaeger-operator jaegertracing/jaeger-operator --namespace observability --create-namespace --set rbac.clusterRole=true
manifest_sorter.go:192: info: skipping unknown hook: "crd-install"
NAME: jaeger-operator
LAST DEPLOYED: Thu Mar 17 12:06:49 2022
NAMESPACE: observability
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
jaeger-operator is installed.


Check the jaeger-operator logs
  export POD=$(kubectl get pods -l app.kubernetes.io/instance=jaeger-operator -lapp.kubernetes.io/name=jaeger-operator --namespace observability --output name)
  kubectl logs $POD --namespace=observability
</code></pre>

Thanks to the variable overriding `rbac.clusterRole=true`, you ask the operator to watch all namespaces.

Check the Jaeger Operator is running:

```bash
kubectl get pod -n observability
```

<pre class="console"><code>$ kubectl get pod -n observability
NAME                               READY   STATUS    RESTARTS   AGE
jaeger-operator-67f8dd68c9-5qj26   1/1     Running   0          3m5s
</code></pre>

The simplest possible way to create a Jaeger instance is by creating a YAML file that will install the default AllInOne image. This “all-in-one” image includes: agent, collector, query, ingester and Jaeger UI in a single pod, using in-memory storage by default.

For this guide you will deploy Jaeger components through this simple way, which can be uses for development, testing and demo purposes but for [production strategy](https://www.jaegertracing.io/docs/1.32/operator/#deployment-strategies) you can read the official documentation.

Once the `jaeger-operator` pod in the namespace `observability` is ready, create a `simplest.yaml` file with the following content:

```yaml
apiVersion: jaegertracing.io/v1
kind: Jaeger
metadata:
  name: simplest
spec:
  query:
    serviceType: LoadBalancer
```

In this YAML manifest file we specify that you want to access the Jaeger UI (`jaeger-query`) through a Load Balancer.

And apply it:

```bash
kubectl apply -f simplest.yaml
```

Theses commands will create a Jaeger instance named `simplest` in the namespace `observability`:

<pre class="console"><code>$ kubectl apply -f simplest.yaml
jaeger.jaegertracing.io/simplest created
</code></pre>

You can now check if the Jaeger instance is running with the following commands:

```bash
kubectl get jaeger
kubectl get pods -l app.kubernetes.io/instance=simplest
```

Theses commands will check if the instances that were created, list the jaeger objects and list the pods that are running:

<pre class="console"><code>$ kubectl get jaeger
NAME       STATUS    VERSION   STRATEGY   STORAGE   AGE
simplest   Running   1.30.0    allinone   memory    4s

$ kubectl get pods -l app.kubernetes.io/instance=simplest
NAME                        READY   STATUS    RESTARTS   AGE
simplest-59ccc99bcc-zpscb   1/1     Running   0          80s
</code></pre>

You can also check that all Jaeger services have been correctly deployed:

<pre class="console"><code>$ kubectl get svc -l app=jaeger
NAME                          TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                                  AGE
simplest-agent                ClusterIP      None           <none>           5775/UDP,5778/TCP,6831/UDP,6832/UDP      3d21h
simplest-collector            ClusterIP      10.3.197.39    <none>           9411/TCP,14250/TCP,14267/TCP,14268/TCP   3d21h
simplest-collector-headless   ClusterIP      None           <none>           9411/TCP,14250/TCP,14267/TCP,14268/TCP   3d21h
simplest-query                LoadBalancer   10.3.114.168   51.210.210.101   16686:30598/TCP,16685:30835/TCP          3d21h
</code></pre>

### Access to Jaeger UI

Now you can retrieve Jaeger UI URL with the following command:

```bash
export JAEGER_URL=$(kubectl get svc simplest-query -o jsonpath='{.status.loadBalancer.ingress[].ip}')
echo Jaeger URL: http://$JAEGER_URL:16686
```

You should obtain the following result:

<pre class="console"><code>$ export JAEGER_URL=$(kubectl get svc simplest-query -o jsonpath='{.status.loadBalancer.ingress[].ip}')

$ echo Jaeger URL: http://$JAEGER_URL:16686
Jaeger URL: http://51.210.210.101:16686
</code></pre>

Open your browser and go to the Jaeger interface.

![Jaeger Query](images/jaeger-query.png)

### Deploy your instrumented application

In order to link your application to the Jaeger backend you need to use a tool like OpenTelemetry.

![OpenTelemetry](images/opentelemetry-logo)

[OpenTelemetry](https://opentelemetry.io/) is a collection of tools, APIs, and SDKs. Useful to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyze your software’s performance and behavior.

OpenTelemetry integrates with popular libraries and frameworks such as Spring, Express, Quarkus, and with a lot of languages. Go to the documentation to see [how to integrate your application](https://opentelemetry.io/docs/instrumentation/).

For this guide you will deploy a Golang application, instrumented with OpenTelemetry, that will send traces to a provider: your Jaeger collector.

We already packaged a Golang application into a Docker image and pushed it in [our ovhplatform Docker Hub repository](https://hub.docker.com/r/ovhplatform/what-is-my-pod-with-tracing) so you can use it directly.

In order to deploy  the application on your OVHcloud managed Kubernetes Service, create a `deployment.yml` file with the following content:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: what-is-my-pod-with-tracing-deployment
  labels:
    app: what-is-my-pod-with-tracing
spec:
  replicas: 3
  selector:
    matchLabels:
      app: what-is-my-pod-with-tracing
  template:
    metadata:
      labels:
        app: what-is-my-pod-with-tracing
    spec:
      containers:
      - name: what-is-my-pod-with-tracing
        image: ovhplatform/what-is-my-pod-with-tracing:1.0.2
        ports:
        - containerPort: 8080
        env:
          - name: MY_POD_NAME
            valueFrom:
              fieldRef:
                fieldPath: metadata.name
```

TODO: pusher l'image dans docker hub ovhplatform/what-is-my-pod-with-tracing:1.0.2 !!!!

This YAML deployment manifest file defines that our application, based on `ovhplatform/what-is-my-pod-with-tracing:1.0.2` image will be deployed with 3 replicas (3 pods). We pass the pod name on environment variable in order to display it in our what-is-my-pod-with-tracing application.

Then, create a `svc.yml` file with the following content to define our service (a service exposes a deployment):

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: what-is-my-pod-with-tracing
  name: what-is-my-pod-with-tracing
spec:
  ports:
  - port: 8080
  selector:
    app: what-is-my-pod-with-tracing
  type: LoadBalancer
```

Apply the deployment and service manifest files to your cluster with the following commands:

```bash
kubectl apply -f deployment.yml
kubectl apply -f svc.yml
```

Output should be like this:

<pre class="console"><code>$ kubectl apply -f deployment.yml
deployment.apps/what-is-my-pod-with-tracing-deployment created

$ kubectl apply -f svc.yml
service/what-is-my-pod-with-tracing created
</code></pre>

You can verify if your application is running and service is created by running the following commands:

```bash
kubectl get pod -l app=what-is-my-pod-with-tracing
kubectl get svc -l app=what-is-my-pod-with-tracing
```

Output should be like this:

<pre class="console"><code>$ kubectl get pod -l app=what-is-my-pod-with-tracing
NAME                                                      READY   STATUS    RESTARTS   AGE
what-is-my-pod-with-tracing-deployment-84b56684d8-6kw6z   1/1     Running   0          3m
what-is-my-pod-with-tracing-deployment-84b56684d8-bcsxh   1/1     Running   0          3m
what-is-my-pod-with-tracing-deployment-84b56684d8-wbjmz   1/1     Running   0          3m

$ kubectl get svc -l app=what-is-my-pod-with-tracing
NAME                          TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)          AGE
what-is-my-pod-with-tracing   LoadBalancer   10.3.118.87   135.125.84.198   8080:32365/TCP   3m
</code></pre>

In order to generate traffic you need to get the external IP of your service:

```bash
export APP_URL=$(kubectl get svc what-is-my-pod-with-tracing -o jsonpath='{.status.loadBalancer.ingress[].ip}')
echo Application URL: http://$APP_URL:8080/
```

And then generate traffic with curl command:

```bash
curl http://$APP_URL:8080/
```

You should obtain the following result:

<pre class="console"><code>$ export APP_URL=$(kubectl get svc what-is-my-pod-with-tracing -o jsonpath='{.status.loadBalancer.ingress[].ip}')

$ echo $APP_URL
135.125.84.198

$ curl http://$APP_URL:8080/
Hello "what-is-my-pod-with-tracing-deployment-84b56684d8-6kw6z"!%

$ curl http://$APP_URL:8080/
Hello "what-is-my-pod-with-tracing-deployment-84b56684d8-6kw6z"!%

$ curl http://$APP_URL:8080/
Hello "what-is-my-pod-with-tracing-deployment-84b56684d8-wbjmz"!%
</code></pre>

TODO: xx

TODO: montrer le main.go avec les parties intéressantes pentelemetry et envoi a jaeger-collector

TODO: you can find all the source code of this application ...
https://github.com/ovhcloud-devrel/go-what-is-my-pod-with-tracing


TODO: xxx we initiate ... we define a service named ... and at each time an user call hello route "/", e create a span and we send it to the jaeger collector

TODO: xxx


TODO: montrer le code avec les traces qui vont etre envoyé" au jarger-colectohealess (simplestcollector-headless) ...


code source de l'app : link github


### Deploy your application

TODO: We deployed this app in the Docker hub ...

TODO: xxx


$ kubectl apply -f k8s/deployment.yml
kubectl get po
deployment.apps/what-is-my-pod-with-tracing-deployment created

# create a service in order to access the application through a load balancer
$ kubectl expose deployment what-is-my-pod-with-tracing-deployment --name=what-is-my-pod-with-tracing --type=LoadBalancer


### Visualize traces


TODO: xxx

Connect to ... jaeger UI link

click on .. search ...

### Create and deploy policies

Kyverno is running on your OVHcloud Managed Kubernetes cluster, so now you can simply create and deploy policies with the rules you want to put in place in your cluster.

In this guide we will show you how to create several policies that will:

- Deny deploying resources in the `default` namespace
- Create automatically a ConfigMap in all namespaces except `kube-system`, `kube-public` and `kyverno`
- Add automatically a label to Pods, Services, ConfigMaps, and Secrets in a given namespace

#### Policy 1: Disallow deployments in the `default` namespace

For our first example we want to deny deploying resources in the `default` namespace.

Why? Because it's a good practice to isolate workloads/applications with Namespaces. One namespace per project/team/...  
So imagine if several teams deploy different applications in the `default` namespace, they will not be isolated.

The policy will validate whether new resources can be deployed, so we will create a `validate` policy.

Create a new policy in a `policy-disallow-default-namespace.yaml` file:

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-default-namespace
spec:
  validationFailureAction: enforce
  rules:
  - name: validate-namespace
    match:
      resources:
    validate:
        - StatefulSet
    validate:
      message: "A namespace is required for pod controllers."
      pattern:
        metadata:
          namespace: "?*"
```

> [!primary]
> The **validationFailureAction** policy attribute that controls admission is set to **enforce** to block **resource creation or updates** when the resource is non-compliant.  
> Using the default value **audit** will report violations (in a **PolicyReport** or **ClusterPolicyReport**) but will not block requests.

To deploy the Kyverno policy in the cluster, execute the following command to apply the YAML file:

```yaml
kubectl apply -f policy-disallow-default-namespace.yaml
```

After applying the policy, check if the policy is correctly applied on the cluster:

<pre class="console"><code>$ kubectl apply -f policy-disallow-default-namespace.yaml
clusterpolicy.kyverno.io/disallow-default-namespace created

$ kubectl get clusterpolicy
NAME                         BACKGROUND   ACTION     READY
disallow-default-namespace   true         enforce    true
</code></pre>

> [!primary]
> With Kyverno installation, [new CRDs](https://kyverno.io/docs/crds/) have been added. The one that interests us is the new resource type `ClusterPolicy`. So in order to list, display, edit and remove Kyverno policies, you can execute `kubectl` command with `ClusterPolicy` resource object type.  
> Ex: `kubectl get clusterpolicy` or `kubectl get cpol` with the short name.

Now you will try to deploy a simple application in the `default` namespace.  
For that, create a file named `my-pod.yaml` with the following content:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: hello-world
    image: ovhplatform/hello
    ports:
    - containerPort: 80
```

Apply it without defining any namespace (namespace is `default` by default):

```bash
kubectl apply -f my-pod.yaml
```

<pre class="console"><code>$ kubectl apply -f my-pod.yaml
Error from server: error when creating "my-pod.yaml": admission webhook "validate.kyverno.svc-fail" denied the request:

resource Pod/default/my-pod was blocked due to the following policies

disallow-default-namespace:
  validate-namespace: 'validation error: Using "default" namespace is not allowed.
    Rule validate-namespace failed at path /metadata/namespace/'
</code></pre>

Perfect, you no longer have the ability to deploy a Pod/Deployment/ReplicaSet/Job/StatefulSet in the `default` namespace.

TODO: xx

### What's next?

TODO: xxx

## Cleanup

Delete Jaeger components (created by the operator):

```bash
kubectl delete jaeger simplest
```

Wait until the components are deleted and then you can uninstall the operator.

To uninstall Jaeger Operator, as you installed it through Helm, you can use `helm uninstall` command in order to delete the Kyverno Helm installed chart:

```bash
helm uninstall jaeger-operator --namespace observability
```

Delete the `observability` namespace:

```bash
kubectl delete namespace observability
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
