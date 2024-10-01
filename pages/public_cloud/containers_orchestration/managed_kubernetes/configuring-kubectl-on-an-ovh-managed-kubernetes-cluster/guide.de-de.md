---
title: Configuring kubectl on an OVHcloud Managed Kubernetes cluster
excerpt: Find out how to retrieve the `kubectl` configuration file to interact with an OVHcloud Managed Kubernetes cluster.
updated: 2022-04-27
---

## Objective

The OVHcloud Managed Kubernetes service gives you access to Kubernetes clusters, without the hassle of installing or operating them. 

This guide will cover how to retrieve the `kubectl` configuration file to interact with an OVHcloud Managed Kubernetes cluster.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/de/public-cloud/) in your OVHcloud account.
- Access to the [OVHcloud Control Panel](/links/manager).
- You must have an OVHcloud Managed Kubernetes cluster.
- You must have the [`kubectl`](https://kubernetes.io/docs/reference/kubectl/overview/){.external} command-line tool installed.

You can find the detailed installation instructions for `kubectl` in Kubernetes' [official documentation](https://kubernetes.io/docs/home/){.external}.

## Instructions

### Step 1 - Configure the default settings for kubectl

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

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

```console
$ kubectl cluster-info
Kubernetes control plane is running at https://xxxxxx.c2.gra.k8s.ovh.net
CoreDNS is running at https://xxxxxx.c2.gra.k8s.ovh.net/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
Metrics-server is running at https://xxxxxx.c2.gra.k8s.ovh.net/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

### Define the access for several Kubernetes clusters

You can also specify several kubeconfig files in your `KUBECONFIG` environment variable, separated by a colon (`:`).

```
export KUBECONFIG=/Users/myuser/.kube/my-test-cluster.yml:/Users/myuser/.kube/my-test-cluster2.yml
```

### Switch to a different cluster

You can switch between different clusters by using the `kubectl config`{.action} command.

```console
$ kubectl config use-context kubernetes-admin@my-test-cluster
Switched to context "kubernetes-admin@my-test-cluster".

$ kubectl config use-context kubernetes-admin@my-test-cluster2
Switched to context "kubernetes-admin@my-test-cluster2".
```

Or you can install and use [kubectx](https://github.com/ahmetb/kubectx).

## Go further

To deploy your first application on your Kubernetes cluster, we suggest you refer to our guide to [Deploying an application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-an-application).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/de/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](https://community.ovh.com/en/).
