---
title: Configuring kubectl on an OVHcloud Managed Kubernetes cluster
slug: configuring-kubectl
excerpt: Find out how to retrieve the `kubectl` configuration file to interact with an OVHcloud Managed Kubernetes cluster.
section: User guides
order: 0
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/configuring-kubectl/'
---

**Last updated 27<sup>th</sup> April, 2022.**

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

The OVHcloud Managed Kubernetes service gives you access to Kubernetes clusters, without the hassle of installing or operating them. 

This guide will cover how to retrieve the `kubectl` configuration file to interact with an OVHcloud Managed Kubernetes cluster.


## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/pl/public-cloud/) in your OVHcloud account.
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- You must have an OVHcloud Managed Kubernetes cluster.
- You must have the [`kubectl`](https://kubernetes.io/docs/reference/kubectl/overview/){.external} command-line tool installed.

You can find the detailed installation instructions for `kubectl` in Kubernetes' [official documentation](https://kubernetes.io/docs/home/){.external}.


## Instructions


### Step 1 - Configure the default settings for kubectl

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu.

Then, click on one of your Kubernetes cluster in the tab.

![Configuring default settings for kubectl](images/kubernetes-quickstart-01.png){.thumbnail}

Then, click on `kubeconfig`{.action} to download the `kubectl` configuration file:

![Configuring default settings for kubectl](images/kubernetes-quickstart-02.png){.thumbnail}

How kubeconfig files are loaded?

- 1. from the `--kubeconfig`{.action} flag, is specified
- 2. from the `KUBECONFIG` environment variable, if set
- 3. from the `$HOME/.kube/config` file, by default

So, after downloading it, if you want to use this configuration file by default in `kubectl`, you can save it with the filename `config` in the `$HOME/.kube/` directory. Alternatively, you can place it in your working directory, with either the `KUBECONFIG` environment variable or the `--kubeconfig` flag. 

In this example, we are using the `KUBECONFIG` environment variable method.

#### For MacOS or Linux:

Type the following command into your terminal:

```
export KUBECONFIG=/Users/myuser/.kube/my-test-cluster.yml
```

#### For Windows 7, 10 and 11 : 

1. From the Windows menu or Cortana search bar, search for "Modify system environment variables".
2. In the System Properties window, click on the *Advanced* tab, then click the *Environment Variables* button near the bottom.
3. In the window that opens (pictured below), add a new variable, `KUBECONFIG`, with the path to the `kube-config` file as its value.

![Add environment variables](images/configuring_default_settings_for_kubectl-02.png){.thumbnail}

You can also add the variable for the current shell process with this command :

```
set KUBECONFIG=my-test-cluster.yml
```


### Step 2 - Verify that *kubectl* can connect to the cluster


You can verify that `kubectl` is able to interact with the cluster by using it to send a `cluster-info` command:

```
kubectl cluster-info
```

The cluster should return a response with some key information about itself:

<pre class="console"><code>$ kubectl cluster-info
Kubernetes control plane is running at https://xxxxxx.c2.gra.k8s.ovh.net
CoreDNS is running at https://xxxxxx.c2.gra.k8s.ovh.net/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
Metrics-server is running at https://xxxxxx.c2.gra.k8s.ovh.net/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
</code></pre>

### Define the access for several Kubernetes clusters

You can also specify several kubeconfig files in your `KUBECONFIG` environment variable, separated by a colon (`:`).

```
export KUBECONFIG=/Users/myuser/.kube/my-test-cluster.yml:/Users/myuser/.kube/my-test-cluster2.yml
```

### Switch to a different cluster

You can switch between different clusters by using the `kubectl config`{.action} command.

<pre class="console"><code>$ kubectl config use-context kubernetes-admin@my-test-cluster
Switched to context "kubernetes-admin@my-test-cluster".

$ kubectl config use-context kubernetes-admin@my-test-cluster2
Switched to context "kubernetes-admin@my-test-cluster2".
</code></pre>

Or you can install and use [kubectx](https://github.com/ahmetb/kubectx).

## Go further

To deploy your first application on your Kubernetes cluster, we suggest you refer to our guide to [Deploying an application](../deploying-an-application/).

Join our [community of users](https://community.ovh.com/en/).
