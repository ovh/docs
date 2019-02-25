---
title: Installing Helm on OVH Managed Kubernetes
slug: installing-helm
excerpt: 'Find out how to install Helm on OVH Managed Kubernetes'
section: Tutorials
---

**Last updated 25th February, 2019.**

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

[Helm](https://docs.helm.sh/){.external} is a package manager for Kubernetes. It works with packages of pre-configured Kubernetes resources, called Helm charts. 

With Helm you can:

- find, deploy and manage software in Kubernetes [using a growing catalog of Helm charts](https://github.com/helm/charts){.external}
- create and share your own Helm charts

## Before you begin

This tutorial assumes that you already have a working OVH Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVH Managed Kubernetes Service Quickstart](../deploying-hello-world/).

We are assuming that you have the `KUBECONFIG` environment variable pointing to your KubeCtl configuration file, as described in the Quickstarter. If that's not the case, you can use the `--kubeconfig [LOCATION_OF_CONFIG_FILE]` option in both `kubectl` and `helm` calls. 

## Installing Helm

Helm has two parts: the client part, `helm`, and the server part, `tiller`. To use Helm on your OVH Managed Kubernetes cluster, you need to deploy `tiller` in the cluster and to install `helm` on your workstation.  

The simplest way to install Helm is grabbing the binary release for your platform on the [official release page](https://github.com/helm/helm/releases/latest){.external}. You then just need to unpack the client `helm` binary and add it to your PATH.

> [!primary]
> To use alternative installation procedures, like package managers (Homebrew, Snap etc.), please refer to the [official installation doc](https://docs.helm.sh/using_helm/#installing-helm){.external}.
>

Once you have `helm` ready, you can use it to install `tiller` on your cluster. `helm` will install `tilller` in the current `kubectl` cluster. We assume that your cluster is already configured. If not, please refer to the relevant OVH documentation, and verify you're pointing to the right target by executing:

```bash
kubectl cluster-info
```

You can then install `tiller` on your Kubernetes cluster in one step:

```bash
helm init
```

Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster.

Please note: by default, Tiller is deployed with an insecure 'allow unauthenticated users' policy. To prevent this, run `helm init` with the --tiller-tls-verify flag. For more information on securing your installation, see the [official helm doc](https://docs.helm.sh/using_helm/#securing-your-helm-installation){.external}.

Happy Helming!

<pre class="console"><code>$ helm init
Creating /Users/user/.helm
Creating /Users/user/.helm/repository
Creating /Users/user/.helm/repository/cache
Creating /Users/user/.helm/repository/local
Creating /Users/user/.helm/plugins
Creating /Users/user/.helm/starters
Creating /Users/user/.helm/cache/archive
Creating /Users/user/.helm/repository/repositories.yaml
Adding stable repo with URL: https://kubernetes-charts.storage.googleapis.com
Adding local repo with URL: http://127.0.0.1:8879/charts
$HELM_HOME has been configured at /Users/user/.helm.
</code></pre>


### Securing your Helm installation

The default Helm installation doesn't apply any security configuration. If you're using Helm in a production context, or in a shared environment, please read this guide to [Securing your Helm Installation page](https://docs.helm.sh/using_helm/#securing-your-helm-installation){.external}. 


## Updating the Helm repository

Before installing any package with `helm`, you need you update its repository, to ensure it is equipped with the most recent versions.

```bash
helm repo update 
```

Helm will download the repository:

<pre class="console"><code>$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...Skip local chart repository
...Successfully got an update from the "stable" chart repository
Update Complete. ⎈ Happy Helming!⎈
</code></pre>


## Installing an example chart

Let's validate your Helm installation by installing an example chart, the official Redis one, with no persistence:

```bash
helm install --set master.persistence.enabled=false stable/redis
```

> [!primary]
> ### Troubleshooting
>
>If you get an `Error: no available release name found` when installing the `stable/redis` chart, please try the following steps:
>
> 
>     kubectl create serviceaccount --namespace kube-system tiller
>     kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
>     kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'
> 

This will install the required elements and initialise the services. And at the end, it will give you the connection parameters for your new Redis database:


<pre class="console"><code>$ helm install --set master.persistence.enabled=false stable/redis
NAME:   aged-garfish
LAST DEPLOYED: Mon Oct 15 15:03:35 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME                AGE
aged-garfish-redis  1s

==> v1/ConfigMap
aged-garfish-redis-health  1s

==> v1/Service
aged-garfish-redis-master  1s
aged-garfish-redis-slave   1s

==> v1beta1/Deployment
aged-garfish-redis-slave  1s

==> v1beta2/StatefulSet
aged-garfish-redis-master  0s

==> v1/Pod(related)

NAME                                       READY  STATUS             RESTARTS  AGE
aged-garfish-redis-slave-6596cb6d6c-56vs6  0/1    ContainerCreating  0         0s
aged-garfish-redis-master-0                0/1    ContainerCreating  0         0s


** Note: Please be patient while the chart is being deployed **

Redis can be accessed via port 6379 on the following DNS names from within your cluster:

aged-garfish-redis-master.default.svc.cluster.local for read/write operations
aged-garfish-redis-slave.default.svc.cluster.local for read-only operations


To get your password, run:

    export REDIS_PASSWORD=$(kubectl get secret --namespace default aged-garfish-redis -o jsonpath="{.data.redis-password}" | base64 --decode)

To connect to your Redis server:

1. Run a Redis pod that you can use as a client:

   kubectl run --namespace default aged-garfish-redis-client --rm --tty -i \
    --env REDIS_PASSWORD=$REDIS_PASSWORD \
   --image docker.io/bitnami/redis:4.0.11-debian-9 -- bash

2. Connect using the Redis CLI:
3. 
   redis-cli -h aged-garfish-redis-master -a $REDIS_PASSWORD
   redis-cli -h aged-garfish-redis-slave -a $REDIS_PASSWORD

To connect to your database from outside the cluster, execute the following commands:

    kubectl port-forward --namespace default svc/aged-garfish-redis 6379:6379 &
    redis-cli -h 127.0.0.1 -p 6379 -a $REDIS_PASSWORD
</code></pre>

## Verifying your Redis

After installing the chart, follow the instructions on your console to test your Redis deployment.

## Cleaning up

To clean up your cluster, simply delete your Redis installation. You can use `helm list` to get the Redis release, and then `helm delete [REDIS_RELEASE]`.

<pre class="console"><code>$$ helm delete aged-garfish
release "aged-garfish" deleted
</code></pre>