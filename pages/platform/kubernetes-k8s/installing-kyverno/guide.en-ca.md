---
title: Enforcing policy management on OVHcloud Managed Kubernetes with Kyverno
slug: installing-kyverno
excerpt: Find out how to secure your OVHcloud Managed Kubernetes and deploy Kyverno for policy management
section: Security
order: 0
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

[Kyverno](https://kyverno.io) (Greek for “govern”) is a policy engine designed specifically for Kubernetes. 

![Kyverno](images/kyverno-logo.png)

With Kyverno, policies are managed as Kubernetes resources and no new language is required to write policies (compared to [OPA Gatekeeper](https://github.com/open-policy-agent/gatekeeper) which uses Rego programming language). This allows using familiar tools such as `kubectl`, `git`, and `kustomize` to manage policies. 

Kyverno policies can **validate**, **mutate** and **generate** Kubernetes resources.

Kyverno runs as a [dynamic admission controller](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) in a Kubernetes cluster. 
Kyverno receives validating and mutating admission webhook HTTP callbacks from the Kubernetes API-Server and applies matching policies to return results that enforce admission policies or reject requests.

Kyverno policies can match resources using the resource kind, name, and label selectors. Wildcards are supported in names.

Mutating and Validating policies can be written as overlays (similar to Kustomize). 

Policy enforcement is captured using Kubernetes events. Kyverno also reports policy violations for existing resources.

![Kyverno](images/kyverno-architecture.png)

Concretely, when you apply a resource on the Kubernetes cluster, the manifest you sent to Kubernetes API must pass many stages before they get created as a resource you desire. Two stages in which we are interesting are **Mutating Admission** and **Validating admission**.

![Kyverno, the cop in a Kubernetes cluster](images/kyverno-cop.png)

Kyverno many features include:

- Validate and mutate using overlays (like Kustomize!)
- Synchronize configurations across namespaces
- Scan existing workloads and generate audit reports
- Block non-conformant resources using admission controls, or report policy violations
- Test policies and validate resources using the `kyverno` CLI, in your CI/CD pipeline, before applying to your cluster

Read more about [Kyverno](https://kyverno.io/docs/introduction/).

Secure a Kubernetes cluster is important so thanks to Kyverno you can check several security best practices, for example:

- Configure Readiness & Liveness probes
- Configure resource quotas
- Do not use mutable (latest) image tags
- Restrict image registries
- Configure pod security
- Fine-grained RBAC

As at OVHcloud, we like to provide you with the best products and services and for us security is important, that's why we wanted to help you discover Kyverno which will help you secure your OVHcloud Managed Kubernetes with policy management.

In this guide you will:

- Install Kyverno
- Write and deploy several policies
- Test the behavior

You can use the *Reset cluster* function in the Public Cloud section of the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external} to reinitialize your cluster before following this tutorial.

## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

## Instructions

### Installing Kyverno CLI

You can install the CLI [using Krew](https://kyverno.io/docs/kyverno-cli/#install-via-krew) or [building the CLI from source](https://kyverno.io/docs/kyverno-cli/#building-the-cli-from-source) by example.

For this tutorial you will install the CLI from source:

```bash
git clone https://github.com/kyverno/kyverno
cd kyverno
make cli
cp ./cmd/cli/kubectl-kyverno/kyverno /usr/local/bin/kyverno
```

You should have results like this:

<pre class="console"><code>$ git clone https://github.com/kyverno/kyverno
Cloning into 'kyverno'...
remote: Enumerating objects: 64593, done.
remote: Counting objects: 100% (984/984), done.
remote: Compressing objects: 100% (496/496), done.
Receiving objects:   6% (3876/64593), 876.01 KiB | 1.60 MiB/s
Receiving objects:   6% (4222/64593), 876.01 KiB | 1.60 MiB/s
remote: Total 64593 (delta 531), reused 832 (delta 483), pack-reused 63609
Receiving objects: 100% (64593/64593), 55.81 MiB | 3.43 MiB/s, done.
Resolving deltas: 100% (35868/35868), done.

$ cd kyverno

$ make cli
GOOS=darwin go build -o /Users/avache/git/github.com/kyverno/kyverno/cmd/cli/kubectl-kyverno/kyverno -ldflags="-s -w -X github.com/kyverno/kyverno/pkg/version.BuildVersion=v1.5.0-rc1-223-gf0359f82 -X github.com/kyverno/kyverno/pkg/version.BuildHash=main/f0359f8272a181923db0704696803d44a43f69f8 -X github.com/kyverno/kyverno/pkg/version.BuildTime=2022-01-19_12:10:05" /Users/avache/git/github.com/kyverno/kyverno/cmd/cli/kubectl-kyverno/main.go
go: downloading k8s.io/klog v1.0.0
go: downloading github.com/spf13/cobra v1.2.1
go: downloading sigs.k8s.io/controller-runtime v0.10.3
go: downloading k8s.io/apiextensions-apiserver v0.22.4
go: downloading k8s.io/apimachinery v0.22.4
go: downloading k8s.io/klog/v2 v2.10.0
go: downloading sigs.k8s.io/yaml v1.3.0
go: downloading github.com/fatih/color v1.12.0
go: downloading github.com/go-git/go-billy/v5 v5.0.0
go: downloading github.com/go-git/go-git/v5 v5.2.0
go: downloading github.com/go-logr/logr v0.4.0
go: downloading github.com/kataras/tablewriter v0.0.0-20180708051242-e063d29b7c23
go: downloading github.com/lensesio/tableprinter v0.0.0-20201125135848-89e81fc956e7
go: downloading k8s.io/api v0.22.4
go: downloading k8s.io/cli-runtime v0.22.4
go: downloading github.com/evanphx/json-patch v4.11.0+incompatible
go: downloading k8s.io/client-go v0.22.4
go: downloading github.com/googleapis/gnostic v0.5.5
go: downloading github.com/kyverno/json-patch/v5 v5.5.1-0.20210915204938-7578f4ee9c77
go: downloading github.com/orcaman/concurrent-map v0.0.0-20190826125027-8c72a8bb44f6
go: downloading gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b
go: downloading k8s.io/kube-openapi v0.0.0-20211115234752-e816edb12b65
go: downloading github.com/distribution/distribution v2.7.1+incompatible
...
go: downloading github.com/dimchansky/utfbom v1.1.1

$ cp ./cmd/cli/kubectl-kyverno/kyverno /usr/local/bin/kyverno
</code></pre>

> [!warning]
> The `kyverno` CLI installation using Krew is not working for the moment [for MacBook Air M1 devices](https://github.com/kyverno/kyverno/issues/3020).  
> The fix is planned for Kyverno v1.6 release.

After the installation, check that the `kyverno` CLI is working:

```bash
kyverno version
```

You should have a behavior like this:

<pre class="console"><code>$ kyverno version
Version: v1.5.0-rc1-223-gf0359f82
Time: 2022-01-19_12:10:05
Git commit ID: main/f0359f8272a181923db0704696803d44a43f69f8
</code></pre>

The Kyverno Command Line Interface (CLI) is designed to **validate** and **test** policies behavior prior to adding them to a cluster.  
So the best practice is to use the `kyverno` CLI in your CI/CD pipelines to assist with the resource authoring process to ensure they conform to standards prior to them being deployed.

### Installing Kyverno

For this tutorial we are using the [Kyverno Helm chart](https://github.com/kyverno/kyverno/tree/main/charts/kyverno).

Add the Kyverno Helm repository:

```bash
helm repo add kyverno https://kyverno.github.io/kyverno/
helm repo update
```

These commands will add the Kyverno Helm repository to your local Helm chart repository and update the installed chart repositories:

<pre class="console"><code>$ helm repo add kyverno https://kyverno.github.io/kyverno/
helm repo update
"kyverno" has been added to your repositories
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "nvidia" chart repository
...
...Successfully got an update from the "kyverno" chart repository
...
Update Complete. ⎈Happy Helming!⎈
</code></pre>

Install the latest version of Kyverno with `helm install` command:

```bash
helm install kyverno kyverno/kyverno --namespace kyverno --create-namespace
```

This command will install the latest version of Kyverno and create a new `kyverno` namespace:

<pre class="console"><code>$ helm install kyverno kyverno/kyverno --namespace kyverno --create-namespace
NAME: kyverno
LAST DEPLOYED: Wed Jan 19 11:41:15 2022
NAMESPACE: kyverno
STATUS: deployed
REVISION: 1
NOTES:
Thank you for installing kyverno v2.1.6 😀

Your release is named kyverno, app version v1.5.4
</code></pre>

> [!primary]
> You can also [install Kyverno in HA (High Availability) mode](https://kyverno.io/docs/high-availability/) with the following command:  
> `helm install kyverno kyverno/kyverno -n kyverno --create-namespace --set=replicaCount=3`

You can check if the Kyverno pod is correctly running:

<pre class="console"><code>$ kubectl get pods -n kyverno
NAME                       READY   STATUS    RESTARTS   AGE
kyverno-554ffb4c96-f2lvs   1/1     Running   0          50s
</code></pre>

And you can check that Kyverno installed several webhooks on your cluster:

<pre class="console"><code>$ kubectl get validatingwebhookconfigurations,mutatingwebhookconfigurations
NAME                                                                                                  WEBHOOKS   AGE
validatingwebhookconfiguration.admissionregistration.k8s.io/kyverno-policy-validating-webhook-cfg     1          52s
validatingwebhookconfiguration.admissionregistration.k8s.io/kyverno-resource-validating-webhook-cfg   2          52s

NAME                                                                                              WEBHOOKS   AGE
mutatingwebhookconfiguration.admissionregistration.k8s.io/kyverno-policy-mutating-webhook-cfg     1          52s
mutatingwebhookconfiguration.admissionregistration.k8s.io/kyverno-resource-mutating-webhook-cfg   2          52s
mutatingwebhookconfiguration.admissionregistration.k8s.io/kyverno-verify-mutating-webhook-cfg     1          52s
</code></pre>

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
        kinds:
        - Pod
    validate:
      message: "Using \"default\" namespace is not allowed."
      pattern:
        metadata:
          namespace: "!default"
  - name: require-namespace
    match:
      resources:
        kinds:
        - Pod
    validate:
      message: "A namespace is required."
      pattern:
        metadata:
          namespace: "?*"
  - name: validate-podcontroller-namespace
    match:
      resources:
        kinds:
        - DaemonSet
        - Deployment
        - Job
        - StatefulSet
    validate:
      message: "Using \"default\" namespace is not allowed for pod controllers."
      pattern:
        metadata:
          namespace: "!default"
  - name: require-podcontroller-namespace
    match:
      resources:
        kinds:
        - DaemonSet
        - Deployment
        - Job
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

#### Policy 2: Create a ConfigMap in all namespaces excepted `kube-system`, `kube-public` and `kyverno` 

For our second example we want to create a `generate` policy that will create a new ConfigMap called `zk-kafka-address` in all new namespaces except `kube-system`, `kube-public` and `kyverno`.

Create a new policy in a `policy-generate-cm.yaml` file:

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: zk-kafka-address
spec:
  rules:
  - name: k-kafka-address
    match:
      resources:
        kinds:
        - Namespace
    exclude:
      resources:
        namespaces:
        - kube-system
        - kube-public
        - kyverno
    generate:
      synchronize: true
      kind: ConfigMap
      name: zk-kafka-address
      # generate the resource in the new namespace
      namespace: "{{request.object.metadata.name}}"
      data:
        kind: ConfigMap
        metadata:
          labels:
            somekey: somevalue
        data:
          ZK_ADDRESS: "192.168.10.10:2181,192.168.10.11:2181,192.168.10.12:2181"
          KAFKA_ADDRESS: "192.168.10.13:9092,192.168.10.14:9092,192.168.10.15:9092"
```

> [!primary]
> When the `synchronize` attribute is set to `true`, modifications will be synchronized to the generated resources.  
> So in our case, if you change the values of `ZK_ADDRESS` and `KAFKA_ADDRESS` for example, all the created ConfigMap will be updated.

To deploy the Kyverno policy in the cluster, execute the following command to apply the YAML file:

```bash
kubectl apply -f policy-generate-cm.yaml
```

After applying the policy, check if the policy is correctly applied on the cluster:

<pre class="console"><code>$ kubectl apply -f policy-generate-cm.yaml
clusterpolicy.kyverno.io/zk-kafka-address created

$ kubectl get cpol -A
NAME                         BACKGROUND   ACTION    READY
disallow-default-namespace   true         enforce   true
zk-kafka-address             true         audit     true
</code></pre>

The `generate` rule is triggered during the `API CREATE` operation, so for this policy when a new namespace is created.

In order to test the behavior of this policy, you will create a new namespace `test2`:

```bash
kubectl create ns test2
```

And then check if the new ConfigMap appears in the new `test2` namespace:

```bash
kubectl get cm -A
```

You should have results like these:

<pre class="console"><code>$ kubectl create ns test2
namespace/test2 created

$ kubectl get cm -A
NAMESPACE         NAME                                 DATA   AGE
default           kube-root-ca.crt                     1      7d20h
kube-node-lease   kube-root-ca.crt                     1      7d20h
kube-public       kube-root-ca.crt                     1      7d20h
kube-system       canal-config                         5      7d20h
kube-system       coredns                              1      7d20h
kube-system       extension-apiserver-authentication   6      7d20h
kube-system       kube-dns-autoscaler                  1      7d20h
kube-system       kube-proxy                           1      7d20h
kube-system       kube-root-ca.crt                     1      7d20h
kyverno           kube-root-ca.crt                     1      7d19h
kyverno           kyverno                              2      7d19h
kyverno           kyverno-metrics                      1      7d19h
test              kube-root-ca.crt                     1      7d16h
test2             kube-root-ca.crt                     1      2m28s
test2             zk-kafka-address                     2      2m27s
</code></pre>

As you can see the ConfigMap `zk-kafka-address` have been created in the new `test2` namespace.

#### Policy 3: Add a label `app: my-awesome-app` to Pods, Services, ConfigMaps, and Secrets in a given namespace

The aim of this policy is to automatically add a label `app=my-awesome-app` to Pods, Services, ConfigMaps, and Secrets in the namespaces `team-a`.

In order to do that, we will show you how to deploy a `mutate` policy.

> [!primary]
> Resource `mutation` occurs before `validation`, so the validation rules should not contradict the changes performed by the mutation section.

Create a new policy in a `policy-add-label.yaml` file:

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: add-label    
spec:
  rules:
  - name: add-label
    match:
      resources:
        kinds:
        - Pod
        - Service
        - ConfigMap
        - Secret
        namespaces:
        - team-a
    mutate:
      patchStrategicMerge:
        metadata:
          labels:
            app: my-awesome-app
``` 

To deploy the Kyverno policy in the cluster, execute the following command to apply the YAML file:

```yaml
kubectl apply -f policy-add-label.yaml
```

After applying the policy, check if the policy is correctly applied on the cluster:

<pre class="console"><code>$ kubectl apply -f policy-add-label.yaml
clusterpolicy.kyverno.io/add-label created

$ kubectl get cpol -A
NAME                         BACKGROUND   ACTION    READY
add-label                    true         audit
disallow-default-namespace   true         enforce   true
zk-kafka-address             true         audit     true
</code></pre>

Now you can create a new namespace `team-a`, deploy a new Pod into it and check if the new label have been correctly added automatically:

```bash
kubectl create ns team-a
kubectl apply -f my-pod.yaml -n team-a
kubectl get pod my-pod -n team-a --show-labels
```

> [!primary]
> Previously in this guide we showed you the creation of a Pod in a file named `my-pod.yaml`, so in this step you can reuse it.

You should obtain the following results:

<pre class="console"><code>$ kubectl create ns team-a
namespace/team-a created

$ kubectl apply -f my-pod.yaml -n team-a
pod/my-pod created

$ kubectl get pod my-pod -n team-a --show-labels
NAME     READY   STATUS    RESTARTS   AGE   LABELS
my-pod   1/1     Running   0          29s   app=my-awesome-app
</code></pre>

### Debugging/validating

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

If you have any problem with Kyverno, for example you deployed a policy and don't know why it's not working, you can go to the [Kyverno troubleshooting page](https://kyverno.io/docs/troubleshooting/).

### What's next?

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
