---
title: Increasing Kubernetes Network Security, Observability and Security with Cilium
slug: installing-cilium
excerpt: Find out how to increase Kubernetes Network Security, Observability and Security with Cilium
section: Security
order: 3
---

**Last updated 27th May 2022.**

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

[Cilium](https://cilium.io/) is an open source project to provide networking, security, and observability for cloud native environments such as Kubernetes clusters and other container orchestration platforms.

![Cilium](images/cilium-logo.png)

Cilium is based on the revolutionary Linux Kernel technology: eBPF.
eBPF enables the dynamic insertion of powerful security, visibility, and networking control logic into the Linux kernel. eBPF is used to provide high-performance networking, multi-cluster and multi-cloud capabilities, advanced load balancing, transparent encryption, extensive network security capabilities, transparent observability, and much more.

From inception, Cilium was designed for large-scale, highly-dynamic containerized environments.

Cilium:
* natively understands container identities,
* parses API protocols like HTTP, gRPC, and Kafka,
* and provides visibility and security that is both simpler and more powerful than traditional approaches.

![Cilium](images/cilium-architecture.png){.thumbnail}

TODO: xxx

Concreteemnt, grace a l'utilisation de eBPF, Cilium contrairemnt ax autres CNI ils ne vont pas se baser sur l'ip pour le routage donc pas d"iptables
mais basé sur le concept d' endpoints et d'identité
cilium va faire des identités a partir des pods qui tournent dans kubernetes, ces identités sont bass sur les etiquettes (les labels) des pods pour pouvoir avoir une gestion sur la durée, de toutes les regles de network polciies ... un des interest d'ebpf, on va chrcher dnas le kernel Linux les identités des pods dans les sysgroup, il y aura une gestion du traffic plus "logqiue"

donc cilium est plus qu'une CNI, permet egalement de faire de l'observabilité, et de la securité

Cilium uses the labels assigned to pods to define security policy.

Read more about [Cilium](https://cilium.io/get-started).

TODO: xx
As at OVHcloud, we like to provide you with the best products and services and for us network, observability and security are important, that's why we wanted to help you discover Cilium which will help you secure your OVHcloud Managed Kubernetes with policy management.

In this guide you will:

- Install Knative
- Write and deploy several policies
- Test the behavior

You can use the *Reset cluster* function in the Public Cloud section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} to reinitialize your cluster before following this tutorial.

## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

## Instructions

### Installing Cilium CLI

You can install the CLI in a [Linux distribution](https://docs.cilium.io/en/v1.11/gettingstarted/k8s-install-default/#install-the-cilium-cli), a macOS or for [other](https://github.com/cilium/cilium-cli/releases/latest).

For this tutorial you will install the CLI for macOS:

```bash
curl -L --remote-name-all https://github.com/cilium/cilium-cli/releases/latest/download/cilium-darwin-amd64.tar.gz{,.sha256sum}
shasum -a 256 -c cilium-darwin-amd64.tar.gz.sha256sum
sudo tar xzvfC cilium-darwin-amd64.tar.gz /usr/local/bin
rm cilium-darwin-amd64.tar.gz{,.sha256sum}
```

You should have results like this:

<pre class="console"><code>$ curl -L --remote-name-all https://github.com/cilium/cilium-cli/releases/latest/download/cilium-darwin-amd64.tar.gz\{,.sha256sum\}
shasum -a 256 -c cilium-darwin-amd64.tar.gz.sha256sum
sudo tar xzvfC cilium-darwin-amd64.tar.gz /usr/local/bin
rm cilium-darwin-amd64.tar.gz{,.sha256sum}


[1/2]: https://github.com/cilium/cilium-cli/releases/latest/download/cilium-darwin-amd64.tar.gz --> cilium-darwin-amd64.tar.gz
--_curl_--https://github.com/cilium/cilium-cli/releases/latest/download/cilium-darwin-amd64.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100 15.6M  100 15.6M    0     0  9177k      0  0:00:01  0:00:01 --:--:-- 14.2M

[2/2]: https://github.com/cilium/cilium-cli/releases/latest/download/cilium-darwin-amd64.tar.gz.sha256sum --> cilium-darwin-amd64.tar.gz.sha256sum
--_curl_--https://github.com/cilium/cilium-cli/releases/latest/download/cilium-darwin-amd64.tar.gz.sha256sum
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100    93  100    93    0     0    134      0 --:--:-- --:--:-- --:--:--   134
cilium-darwin-amd64.tar.gz: OK

x cilium
</code></pre>

After the installation, check that the `cilium` CLI is working:

```bash
cilium version
```

You should have a behavior like this:

<pre class="console"><code>$ cilium version
cilium-cli: v0.10.6 compiled with go1.18.1 on darwin/amd64
cilium image (default): v1.10.11
cilium image (stable): v1.11.5
cilium image (running): unknown. Unable to obtain cilium version, no cilium pods found in namespace "kube-system"
</code></pre>

The Cilium CLI is designed to install Cilium, inspect the state of a Cilium installation, and enable/disable various features (e.g. clustermesh, Hubble).

### Installing Cilium

For this tutorial we are using the [Cilium Helm chart](https://github.com/cilium/charts).

Add the Cilium Helm repository:

```bash
helm repo add cilium https://helm.cilium.io/
helm repo update
```

These commands will add the Kyverno Helm repository to your local Helm chart repository and update the installed chart repositories:

<pre class="console"><code>$ helm repo add cilium https://helm.cilium.io/
"cilium" has been added to your repositories

$ helm repo update

Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "cilium" chart repository
Update Complete. ⎈Happy Helming!⎈
</code></pre>

Install the latest version of Cilium with `helm install` command:

```bash
helm install cilium cilium/cilium --namespace kube-system
```

This command will install the latest version of Cilium:

<pre class="console"><code>$ helm install cilium cilium/cilium \
  --namespace kube-system
W0527 15:30:21.946420   58621 warnings.go:70] spec.template.spec.affinity.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution.nodeSelectorTerms[1].matchExpressions[0].key: beta.kubernetes.io/os is deprecated since v1.14; use "kubernetes.io/os" instead
W0527 15:30:21.946464   58621 warnings.go:70] spec.template.metadata.annotations[scheduler.alpha.kubernetes.io/critical-pod]: non-functional in v1.16+; use the "priorityClassName" field instead
NAME: cilium
LAST DEPLOYED: Fri May 27 15:30:20 2022
NAMESPACE: kube-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
You have successfully installed Cilium with Hubble.

Your release version is 1.11.5.

For any further help, visit https://docs.cilium.io/en/v1.11/gettinghelp
</code></pre>

You can check if Cilium have been correctly installed with the following command:

```bash
cilium status --wait
```

This command will validate that Cilium has been properly installed:

<pre class="console"><code>$ cilium status --wait
    /¯¯\
 /¯¯\__/¯¯\    Cilium:         OK
 \__/¯¯\__/    Operator:       OK
 /¯¯\__/¯¯\    Hubble:         disabled
 \__/¯¯\__/    ClusterMesh:    disabled
    \__/

Deployment        cilium-operator    Desired: 2, Ready: 2/2, Available: 2/2
DaemonSet         cilium             Desired: 3, Ready: 3/3, Available: 3/3
Containers:       cilium             Running: 3
                  cilium-operator    Running: 2
Cluster Pods:     2/11 managed by Cilium
Image versions    cilium             quay.io/cilium/cilium:v1.11.5@sha256:79e66c3c2677e9ecc3fd5b2ed8e4ea7e49cf99ed6ee181f2ef43400c4db5eef0: 3
                  cilium-operator    quay.io/cilium/operator-generic:v1.11.5@sha256:8ace281328b27d4216218c604d720b9a63a8aec2bd1996057c79ab0168f9d6d8: 2
</code></pre>

And you can check that the pods are running:

<pre class="console"><code>$ kubectl get po -n kube-system -l k8s-app=cilium
NAME           READY   STATUS    RESTARTS   AGE
cilium-29ccq   1/1     Running   0          49m
cilium-d68d8   1/1     Running   0          49m
cilium-nv2nf   1/1     Running   0          49m 
</code></pre>

A `cilium` Pod runs on each node in your cluster and enforces network policy on the traffic to/from Pods on that node using Linux BPF.

Validate that your cluster has proper network connectivity with the following command:

```bash
cilium connectivity test
```

TODO: xxx

You should obtain a result like this:

<pre class="console"><code>$ cilium connectivity test

ℹ️  Monitor aggregation detected, will skip some flow validation steps
✨ [my-cilium-cluster] Creating namespace for connectivity check...
✨ [my-cilium-cluster] Deploying echo-same-node service...
✨ [my-cilium-cluster] Deploying same-node deployment...
✨ [my-cilium-cluster] Deploying client deployment...
✨ [my-cilium-cluster] Deploying client2 deployment...
✨ [my-cilium-cluster] Deploying echo-other-node service...
✨ [my-cilium-cluster] Deploying other-node deployment...
⌛ [my-cilium-cluster] Waiting for deployments [client client2 echo-same-node] to become ready...
⌛ [my-cilium-cluster] Waiting for deployments [echo-other-node] to become ready...
⌛ [my-cilium-cluster] Waiting for CiliumEndpoint for pod cilium-test/client-6488dcf5d4-gfw65 to appear...
⌛ [my-cilium-cluster] Waiting for CiliumEndpoint for pod cilium-test/client2-5998d566b4-7jbwg to appear...
⌛ [my-cilium-cluster] Waiting for pod cilium-test/client-6488dcf5d4-gfw65 to reach default/kubernetes service...
connectivity test failed: timeout reached waiting lookup for kubernetes.default from pod cilium-test/client-6488dcf5d4-gfw65 to succeed
</code></pre>

TODO: errorrr!!!!!!!

Congratulations! You have a fully functional Kubernetes cluster with Cilium. 🎉

### Deploying an application

In order to create our first network policy, we need, first of all, to create micorservices in our Kubernetes cluster.

TODO: xxx

Create an nginx deployment and expose it via a service

To see how Kubernetes network policy works, start off by creating an nginx Deployment.

create file `nginx-example.yml`

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: nginx-example
  labels:
    app: nginx
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: nginx
  name: nginx
  namespace: nginx-example
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - image: nginx
        name: nginx
        ---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: nginx
  name: nginx
  namespace: nginx-example
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
```

in this yaml manifest file we create de Nginx deployment, and we expose the Deployment through a Service called nginx in the namespace nginx-example.


$ kubectl apply -f nginx.yaml
namespace/nginx-example created
deployment.apps/nginx created
service/nginx created



The above commands create a Deployment with an nginx Pod and expose the Deployment through a Service named nginx. The nginx Pod and Deployment are found in the default namespace.

kubectl get svc,pod

$ kubectl get svc,pod -l app=nginx -n nginx-example
NAME                    TYPE           CLUSTER-IP     EXTERNAL-IP       PORT(S)        AGE
service/nginx           ClusterIP      10.3.120.16    <none>            80/TCP         71s
service/nginx-service   LoadBalancer   10.3.128.254   152.228.168.120   80:31622/TCP   64d

NAME                                    READY   STATUS    RESTARTS   AGE
pod/nginx-6799fc88d8-jfslx              1/1     Running   0          71s
pod/nginx-deployment-766444c4d9-bqnz7   1/1     Running   0          64d


TODO: xxx a tester ici en local sur le cluster ....
Test the service by accessing it from another Pod

You should be able to access the new nginx service from other Pods. To access the nginx Service from another Pod in the default namespace, start a busybox container:

$ kubectl run busybox -n nginx-example --rm -ti --image=busybox:1.28 -- /bin/sh

In your shell, run the following command:

```
If you don't see a command prompt, try pressing enter.
/ # wget --spider --timeout=1 nginx

Connecting to nginx (10.3.120.16:80)
```




--> adapter avec les cilium network policies



### Create and deploy policies

TODO: xxx



TODO: plusieurs kind of netork policies possible a créer
Layer 3
Layer 4
Layer 7

https://docs.cilium.io/en/stable/policy/




Now, limit access to the nginx service

To limit the access to the nginx service so that only Pods with the label access: true can query it, create a NetworkPolicy object as follows:
service/networking/nginx-policy.yaml [Copy service/networking/nginx-policy.yaml to clipboard]

apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: access-nginx
spec:
  podSelector:
    matchLabels:
      app: nginx
  ingress:
  - from:
    - podSelector:
        matchLabels:
          access: "true"

The name of a NetworkPolicy object must be a valid DNS subdomain name.
Note: NetworkPolicy includes a podSelector which selects the grouping of Pods to which the policy applies. You can see this policy selects Pods with the label app=nginx. The label was automatically added to the Pod in the nginx Deployment. An empty podSelector selects all pods in the namespace.
Assign the policy to the service

Use kubectl to create a NetworkPolicy from the above nginx-policy.yaml file:

kubectl apply -f https://k8s.io/examples/service/networking/nginx-policy.yaml

networkpolicy.networking.k8s.io/access-nginx created

Test access to the service when access label is not defined

When you attempt to access the nginx Service from a Pod without the correct labels, the request times out:

kubectl run busybox --rm -ti --image=busybox:1.28 -- /bin/sh

In your shell, run the command:

wget --spider --timeout=1 nginx

Connecting to nginx (10.100.0.16:80)
wget: download timed out

Define access label and test again

You can create a Pod with the correct labels to see that the request is allowed:

kubectl run busybox --rm -ti --labels="access=true" --image=busybox:1.28 -- /bin/sh

In your shell, run the command:

wget --spider --timeout=1 nginx

Connecting to nginx (10.100.0.16:80)
remote file exists




network pollicy editor !

TOOD: xxx

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
        kinds:
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


### Debugging/validating

TODO: xxx

Previously in this guide we show you how to install the `kyverno` CLI. With this CLI you can [apply](https://kyverno.io/docs/kyverno-cli/#apply), [test](https://kyverno.io/docs/kyverno-cli/#test) and [validate](https://kyverno.io/docs/kyverno-cli/#validate) policies.

In this tutorial we want to show you that the CLI is perfect for a usage on your local machine (for dev/test usages) and in your CI/CD pipelines in order to test and validate the policies you want to deploy in production are correct.

You can for example check if policies we created are validated with the `kyverno validate` command:

```bash
kyverno validate *.yaml
```

You should obtain results like these:

<pre class="console"><code>$ kyverno validate *.yaml
----------------------------------------------------------------------
Policy disallow-default-namespace is valid.

----------------------------------------------------------------------
Policy add-label is valid.

----------------------------------------------------------------------
Policy zk-kafka-address is valid.
</code></pre>

### Troubleshooting

TODO: xx


https://docs.cilium.io/en/stable/policy/troubleshooting/



If you have any problem with Kyverno, for example you deployed a policy and don't know why it's not working, you can go to the [Kyverno troubleshooting page](https://kyverno.io/docs/troubleshooting/).

### What's next?

TODO: xxx

You now have a policy management on your Kubernetes cluster, and you deployed a few policies to test the behavior of Kyverno.  
In order to see more examples of policies, you can go to [Kyverno policies repository](https://github.com/kyverno/policies/). This repository contains Kyverno policies for a wide array of usage on various Kubernetes and ecosystem resources and subjects.

If you have any questions or troubles about Kyverno, you can also go to [Kyverno Slack community](https://slack.k8s.io/#kyverno).

Having a policy management is a good practice to follow. It will help you to keep your cluster clean and secure.  
Next time we will see another tutorial that will help you to secure your OVHcloud Managed Kubernetes clusters.

## Cleanup

First, remove the `ClusterPolicies` you deployed in this guide:

```bash
kubectl delete cpol --all
```

To uninstall Kyverno, as you installed it through Helm, you can use `helm uninstall` command in order to delete the Kyverno Helm installed chart:

```bash
helm uninstall kyverno kyverno/kyverno --namespace kyverno
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
