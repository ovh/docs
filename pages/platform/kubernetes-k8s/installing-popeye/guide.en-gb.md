---
title: Sanitize your OVHcloud Managed Kubernetes with Popeye
slug: installing-popeye
excerpt: Find out how to sanitize your OVHcloud Managed Kubernetes with Popeye
section: Security
order: 1
---

**Last updated 15th February 2022.**

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

[Popeye](https://github.com/derailed/popeye) is a tool that scans Kubernetes clusters and reports potential issues with deployed resources and configurations. 

![Popeye](images/popeye.png)

It sanitizes your cluster based on what is deployed. By scanning your cluster, it detects misconfigurations and helps you to ensure that best practices are in place, thus preventing future headaches. It aims at reducing the cognitive overload one faces when operating a Kubernetes cluster in the wild.

Popeye also reports potential resources over/under allocations and attempts to warn you about your cluster running out of capacity.

Popeye scans your cluster for best practices and potential issues. Currently, Popeye looks at `nodes`, `namespaces`, `pods` and `services`.

For your information, Popeye is a read-only tool, it only retrieves informations in order to help you to securize and sanitize your cluster, it does not modify or delete resources on a Kubernetes cluster.

Read more about [Popeye](https://github.com/derailed/popeye).

At OVHcloud, we like to provide you with the best products and services. For us, security is important, that's why we want to help you discover Popeye which will help you secure your OVHcloud Managed Kubernetes with helpful reports.

In this guide you will:

- Install Popeye (locally)
- Generate and export reports
- Fix common issues

You can use the *Reset cluster* function on the Public Cloud section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} to reinitialize your cluster before following this tutorial.

## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it.

Moreover, follow the [deploying a Hello World application](../deploying-an-application/) documentation in order to have an example application running on your cluster.

At this time you should have a running Kubernetes cluster with hello-world deployment and pod like below:

<pre class="console"><code>$ kubectl get po,deploy
NAME                                          READY   STATUS    RESTARTS   AGE
pod/hello-world-deployment-66d599d4c6-bh5w8   1/1     Running   0          4d2h

NAME                                     READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/hello-world-deployment   1/1     1            1           4d22h
</code></pre>

## Instructions

### Installing Popeye CLI

You can [install Popeye](https://github.com/derailed/popeye#installation) on your computer from the binaries, the source, HomeBrew and even use it directly from a Docker image.

For this tutorial you will install it via HomeBrew:

```bash
brew install derailed/popeye/popeye
```

The output should be like this:

<pre class="console"><code>$ brew install derailed/popeye/popeye
Running `brew update --preinstall`...
...
==> Tapping derailed/popeye
Cloning into '/Users/avache/homebrew/Library/Taps/derailed/homebrew-popeye'...
remote: Enumerating objects: 233, done.
remote: Counting objects: 100% (104/104), done.
remote: Compressing objects: 100% (52/52), done.
remote: Total 233 (delta 25), reused 0 (delta 0), pack-reused 129
Receiving objects: 100% (233/233), 25.13 KiB | 12.57 MiB/s, done.
Resolving deltas: 100% (57/57), done.
Tapped 1 formula (12 files, 37KB).
==> Downloading https://github.com/derailed/popeye/releases/download/v0.9.8/popeye_Darwin_arm64.tar.gz
==> Downloading from https://objects.githubusercontent.com/github-production-release-asset-2e65be/176379662/c65e86e0-4e3e-4591-9bb7-62b7bddd46e4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJY
######################################################################## 100.0%
==> Installing popeye from derailed/popeye
...
==> Running `brew cleanup popeye`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
</code></pre>

After the installation, check that the `popeye` CLI is working correctly:

```bash
popeye version
```

You should have a behavior like this:

<pre class="console"><code>$ popeye version
 ___     ___ _____   _____                       K          .-'-.
| _ \___| _ \ __\ \ / / __|                       8     __|      `\
|  _/ _ \  _/ _| \ V /| _|                         s   `-,-`--._   `\
|_| \___/_| |___| |_| |___|                       []  .->'  a     `|-'
  Biffs`em and Buffs`em!                            `=/ (__/_       /
                                                      \_,    `    _)
                                                         `----;  |
Version:   0.9.8
Commit:    6db27f04407b337f6743faf4f382a61991aa5f31
Date:      2021-11-02T21:26:28Z
Logs:      /var/folders/lq/xp6s4vbn13s5vj_kq3cch50w0000gn/T/popeye.log
</code></pre>

Popeye is correctly installed on your computer, you can now use it to see if your cluster matches with Kubernetes security best practices.

### Generate Popeye reports

The `popeye` CLI works like `kubectl` command. So when you execute the CLI, it searches your cluster configuration.

To generate a report, simply execute the CLI:

```bash
popeye
```

This command run tests on all nodes and namespaces by default:

![Popeye Report](images/popeye-report.png)

As you can see, by default, our OVHcloud Managed Kubernetes cluster (and with an hello world application deployed) has a 83 score.

Though it's a good score, let's take a look on what you should be improved or fixed.

The report can be very big. So, in order to take  a look at what you should improve or fix, a good practice is to run `popeye` command only on a specified namespace.

This way, you can better improve and fix your cluster resources step by step.

As we deployed an hello world app in the `default` namespace, you can run `popeye` on the default namespace and generate a report only for `deployments`:

```bash
popeye -n default -s deploy
```

<pre class="console"><code>$ popeye -n default -s deploy
...
GENERAL [MY-TEST-CLUSTER2]
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
  · Connectivity...................................................................................✅
  · MetricServer...................................................................................✅


DEPLOYMENTS (1 SCANNED)                                                        💥 1 😱 0 🔊 0 ✅ 0 0٪
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
  · default/hello-world-deployment.................................................................💥
    🐳 hello-world
      💥 [POP-100] Untagged docker image in use.
      😱 [POP-106] No resources requests/limits defined.
      🔊 [POP-108] Unnamed port 80.


SUMMARY
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
Your cluster score: 0 -- F
</code></pre>

In this report, you can see that the best practices to follow are:

- use a tagged Docker image
- set resources requests and limits
- define containers port name

There are 3 simple best practices to follow.
Let's fix them.

Copy the original `hello.yml` file (that you can find in the [deploying a Hello World application](../deploying-an-application/) guide) into a new one:

```bash
cp hello.yml hello-fixed.yml
```

Then edit the new file `hello-fixed.yml` with the following content:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: hello-world
  labels:
    app: hello-world
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: hello-world
---
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
        image: ovhplatform/hello:1.0
        resources:
          requests:
            memory: "2Mi"
            cpu: "0"
          limits:
            memory: "32Mi"
            cpu: "4"
        ports:
        - name: http
          containerPort: 80
```

In the deployment section of this YAML file, you will:

- set the image tag to 1.0 (the specified version of the image you want to run on a container in the cluster)
- set resources requests and limits
- set the port name to "http"

Apply the new Kubernetes manifest:

```
kubectl apply -f hello-fixed.yml -n default
```

You should have the following results on your machine:

<pre class="console"><code>$ kubectl apply -f hello-fixed.yml -n default

service/hello-world unchanged
deployment.apps/hello-world-deployment configured
</code></pre>

You can generate a new report and check if the warning messages disapear and if the score increases with the `popeye` command:

```bash
popeye -n default -s deploy
```

The report should be better now:

<pre class="console"><code>$ popeye -n default -s deploy
...
GENERAL [MY-TEST-CLUSTER2]
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
  · Connectivity...................................................................................✅
  · MetricServer...................................................................................✅


DEPLOYMENTS (1 SCANNED)                                                      💥 0 😱 0 🔊 0 ✅ 1 100٪
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
  · default/hello-world-deployment.................................................................✅


SUMMARY
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
Your cluster score: 100 -- A
...
</code></pre>

### Export reports locally

You can generate and save a report with the `--save` command

```bash
popeye --save
```

This will save the report in your working directory:

<pre class="console"><code>
$ popeye --save
/var/folders/lq/xp6s4vbn13s5vj_kq3cch50w0000gn/T/popeye/sanitizer_my-test-cluster2_1644586682462302000.txt
</code></pre>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
