---
title: Installing Helm on OVHcloud Managed Kubernetes
slug: installing-helm
excerpt: 'Find out how to install Helm on OVHcloud Managed Kubernetes'
section: Tutorials
order: 4
---

**Last updated April 14<sup>th</sup>, 2020.**

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

This tutorial assumes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

We are assuming that you have the `KUBECONFIG` environment variable pointing to your KubeCtl configuration file, as described in the Quickstarter. If that's not the case, you can use the `--kubeconfig [LOCATION_OF_CONFIG_FILE]` option in both `kubectl` and `helm` calls. 

## Helm concepts

Helm is built around three big concepts: charts, repositories and releases.

A *chart* is a Helm package. Inside the chart you have all the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster. It's the Helm equivalent of a Debian pkg for linux, a Maven file for Java or a `package.json` for Node JS.

Charts are stored in *repositories*, where they can be shared. Repositories are the Helm equivalent of the NPM registry for Node JS or Maven Central for Java.

When a chart is installed in a Kubernetes cluster, the running instance is called a *release*. Multiple releases of a single chart can be installed at the same time in a cluster (think for example several instance of the Wordpress chart for several different blogs instances running in the cluster). 


## Installing Helm

> [!warn]
> This guide supposes you're using Helm 3, the latest major version of Helm.
> The precedent version, Helm 2, is in *maintenance mode*, and considered deprecated.
> If you want to use Helm 2, please refer to the [official documentation](https://v2.helm.sh/)

Every release of Helm provides binary releases for a variety of OSes. These binary versions can be manually downloaded and installed. 

The simplest way to install Helm is grabbing the binary release for your platform on the [official release page](https://github.com/helm/helm/releases/latest){.external}. You then just need to unpack the client `helm` binary and add it to your PATH.

> [!primary]
> To use alternative installation procedures, like package managers (Homebrew, Snap etc.), please refer to the [official installation doc](https://docs.helm.sh/using_helm/#installing-helm){.external}.




## Initialize a Helm Chart Repository

> [!warn]
> As with Helm 2, the official Helm `stable` repository is currently deprecated. 
> The Helm community is currently transitioning to a hub model, with a [Helm Hub](https://hub.helm.sh/), where charts can be searched using `helm search hub <keyword>`
> As the Helm *stable* repository is still popular, we are using it in the tutorial.

Once you have Helm ready, you can add a chart repository. The easiest way to begin with Helm is to add the official Helm `stable` repository:

```bash
helm repo add stable https://kubernetes-charts.storage.googleapis.com/
```

Once the repository added, run `helm repo update`to make sure we get the latest list of charts 

<pre class="console"><code>$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/
"stable" has been added to your repositories
$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "stable" chart repository
Update Complete. ⎈ Happy Helming!⎈
</code></pre>


## Installing an example chart

Let's validate your Helm installation by installing an example chart, the official Redis one, with no persistence:

```bash
helm install test-redis stable/redis --set master.persistence.enabled=false
```

> [!warning]
> As the Helm *stable* repository is deprecated, you're going to get a  
> *This chart is deprecated* warning. 
> The current location of the official Redis chart is `bitnami/redis`, 
> if you want to install a production-ready Redis, please use it:
>
> `helm install test-redis stable/redis --set master.persistence.enabled=false`

This will install the required elements and initialise the services. And at the end, it will give you the connection parameters for your new Redis database:


<pre class="console"><code>$ helm install test-redis stable/redis --set master.persistence.enabled=false
WARNING: This chart is deprecated
NAME: test-redis
LAST DEPLOYED: Tue Apr 14 14:23:46 2020
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
This Helm chart is deprecated

Given the `stable` deprecation timeline (https://github.com/helm/charts#deprecation-timeline), the Bitnami maintained Redis Helm chart is no
w located at bitnami/charts (https://github.com/bitnami/charts/).

The Bitnami repository is already included in the Hubs and we will continue providing the same cadence of updates, support, etc that we've b
een keeping here these years. Installation instructions are very similar, just adding the _bitnami_ repo and using it during the installatio
n (`bitnami/<chart>` instead of `stable/<chart>`)

```bash
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release bitnami/<chart>           # Helm 3
$ helm install --name my-release bitnami/<chart>    # Helm 2
```

To update an exisiting _stable_ deployment with a chart hosted in the bitnami repository you can execute
 ```bash

                                                                                    $ helm
 repo add bitnami https://charts.bitnami.com/bitnami
  $ helm upgrade my-release bitnami/<chart>
  ```

  Issues and PRs related to the chart itself will be redirected to `bitnami/charts` GitHub repository. In the same way, we'll be happy to an
swer questions related to this migration process in this issue (https://github.com/helm/charts/issues/20969) created as a common place for d
iscussion.

** Please be patient while the chart is being deployed **
Redis can be accessed via port 6379 on the following DNS names from within your cluster:

test-redis-master.default.svc.cluster.local for read/write operations
test-redis-slave.default.svc.cluster.local for read-only operations


To get your password run:

    export REDIS_PASSWORD=$(kubectl get secret --namespace default test-redis -o jsonpath="{.data.redis-password}" | base64 --decode)

To connect to your Redis server:

1. Run a Redis pod that you can use as a client:

   kubectl run --namespace default test-redis-client --rm --tty -i --restart='Never' \
    --env REDIS_PASSWORD=$REDIS_PASSWORD \
   --image docker.io/bitnami/redis:5.0.7-debian-10-r32 -- bash

2. Connect using the Redis CLI:
   redis-cli -h test-redis-master -a $REDIS_PASSWORD
   redis-cli -h test-redis-slave -a $REDIS_PASSWORD

To connect to your database from outside the cluster execute the following commands:

    kubectl port-forward --namespace default svc/test-redis-master 6379:6379 &
    redis-cli -h 127.0.0.1 -p 6379 -a $REDIS_PASSWORD
</code></pre>

## Verifying your Redis

After installing the chart, follow the instructions on your console to test your Redis deployment.


<pre class="console"><code>s
$ export REDIS_PASSWORD=$(kubectl get secret --namespace default test-redis \ >     -o jsonpath="{.data.redis-password}" | base64 --decode)
$ kubectl run --namespace default test-redis-client --rm --tty -i --restart='Never' \
>     --env REDIS_PASSWORD=$REDIS_PASSWORD \
>     --image docker.io/bitnami/redis:5.0.7-debian-10-r32 -- bash
If you don't see a command prompt, try pressing enter.
I have no name!@test-redis-client:/$  redis-cli -h test-redis-master -a $REDIS_PASSWORD
Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.
test-redis-master:6379> cluster info
ERR This instance has cluster support disabled
test-redis-master:6379> ping
PONG
test-redis-master:6379> exit
I have no name!@test-redis-client:/$ exit
exit
pod "test-redis-client" deleted
</code></pre>

## Cleaning up

To clean up your cluster, simply delete your Redis installation. You can use `helm list` to get the Redis release, and then `helm delete [REDIS_RELEASE]`.

<pre class="console"><code>$ helm list
NAME            NAMESPACE       REVISION   UPDATED              STATUS     CHART          APP VERSION
test-redis      default         1          2020-04-14 14:23:46  deployed   redis-10.5.7   5.0.7
$ helm delete test-redis
release "test-redis" uninstalled
</code></pre>
