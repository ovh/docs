---
title: Deploying a GPU application on OVHcloud Managed Kubernetes Service
slug: deploying-gpu-application
excerpt: 'Find out how to deploy a GPU application on OVHcloud Managed Kubernetes'
section: GPU
order: 0
updated: 2023-04-26
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

**Last updated April 26th, 2023.**

## Objective

In this tutorial we will show you how to deploy a GPU application on an OVHcloud Managed Kubernetes cluster.

GPUs provide compute power to drive AI/ML & Deep Learning tasks with intensive calculations such as image recognition, natural language processing (NLP), as well as other compute-intensive tasks such as video transcoding and image processing.
Using GPUs with Kubernetes allows you to extend the scalability of Kubernetes to AI/ML applications.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/) installed on your workstation and your cluster. Please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

## Prerequisites

To get the best and most cost-effective benefit from GPUs on OVHcloud Managed Kubernetes, and to take advantage of cluster autoscaling, we recommend that you create separate GPU node pools in your Kubernetes clusters.

![GPU Node Pool](images/gpu-node-pool.png){.thumbnail}

The GPU operator that you will install should run on Kubernetes nodes that are equipped with GPUs.

So you need to create a node pool with `t1` flavor type.

If you already have an OVHcloud Kubernetes cluster with a node pool with `t1` flavor type, you can skip the following `Autoscaling GPU Node Pool creation` step.

> [!warning]
>GPU Virtual machines are extremely powerful and significantly more expensive than general purpose nodes. If you are usually using OVHcloud Public Cloud at small scale and/or are a new user, you may need to [raise your Public Cloud quota](https://docs.ovh.com/sg/en/public-cloud/increase-public-cloud-quota/) to enable access to those type of machines for your project. Also note that these machines are only available in some of our Public Cloud regions.
>
>Also note that while worker nodes (be them added manually or through cluster autoscaler) are created within a few minutes, our GPU worker nodes ready status can take up to a bit more than one hour.
>

## Instructions

### Autoscaling GPU Node Pool creation

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu.

![Select your cluster](images/create-a-nodepool-1.png){.thumbnail}

Click on your cluster, then on the `Node pools`{.action} tab.

We will create our special GPU Node Pool.
Click on `Add a node pool`{.action}.

Then enter a name for your GPU node pool, `gpu-node-pool` for example.

![Name your GPU node pool](images/create-a-nodepool-2.png){.thumbnail}

Select a flavor for your new node pool, then click on the `GPU`{.action} tab. You can choose "T1-45" for example.

![Select a flavor for your GPU node pool](images/create-a-nodepool-3.png){.thumbnail}

In the next step, define the size of your GPU node pool.
You can enable the `Autoscaling`{.action} feature.
Define the minimum and maximum pool size in that case, 3 in minimum and 10 in maximum, for example.

![Define a size and autoscaling for your GPU node pool](images/create-a-nodepool-4.png){.thumbnail}

Then, choose `Hourly` billing mode for this GPU node pool.

![Billing mode](images/create-a-nodepool-5.png){.thumbnail}

The node pool creation is now in progress. It should be available within a few minutes in your OVHcloud Control Panel.

When the Node Pool is in `OK` state, if you display Node pool labels you can verify that the new `gpu-node-pool`'s Nodes are correctly labelled.

```bash
kubectl get node --show-labels | grep "node.k8s.ovh/type=gpu"
```

![GPU nodes](images/create-a-nodepool-6.png){.thumbnail}

### NVIDIA GPU Operator

The [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator) uses the [Operator Framework](https://github.com/operator-framework/getting-started) within Kubernetes to automate the management of all NVIDIA software components needed to provision GPU. These components include the NVIDIA drivers (to enable CUDA), Kubernetes device plugin for GPUs, the NVIDIA Container Runtime, automatic node labelling, DCGM based monitoring and others.

![NVIDIA GPU Kubernetes Operator](images/nvidia-gpu-operator.jpeg)

If you are interested about the operator, feel free to read the [NVIDIA GPU operator official documentation](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/overview.html).

### Installing the NVIDIA GPU Operator Helm chart

For this tutorial we are using the [NVIDIA GPU Operator Helm chart](https://github.com/NVIDIA/gpu-operator/tree/master/deployments/gpu-operator){.external} found on [NVIDIA repository](https://github.com/nvidia/). The chart is [fully configurable](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/getting-started.html), but here we are using the default configuration, with only the minimal set of customization to make it work well on OVHcloud Managed Kubernetes Service.

Add the NVIDIA Helm repository:

> [!primary]
>
> The Nvidia Helm chart has moved. If you already added a repo with the name `nvidia`, you can remove it: `helm repo remove nvidia`.

```bash
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia
helm repo update
```

This will add the NVIDIA repository and update all of your repositories: 

<pre class="console"><code>$ helm repo add nvidia https://helm.ngc.nvidia.com/nvidia
helm repo update
"nvidia" has been added to your repositories
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "nvidia" chart repository
[...]
Update Complete. ⎈Happy Helming!⎈
</code></pre>

Install the GPU Operator in the `gpu-operator` namespace:

```bash
helm install gpu-operator nvidia/gpu-operator -n gpu-operator --create-namespace --wait
```

You should have a GPU operator installed and running:

<pre class="console"><code>$ helm install gpu-operator nvidia/gpu-operator -n gpu-operator --create-namespace --wait

NAME: gpu-operator
LAST DEPLOYED: Tue Apr 25 09:59:59 2023
NAMESPACE: gpu-operator
STATUS: deployed
REVISION: 1
TEST SUITE: None

$ kubectl get pod -n gpu-operator
NAME                                                          READY   STATUS      RESTARTS   AGE
gpu-feature-discovery-8xzzw                                   1/1     Running     0          22m
gpu-feature-discovery-kxtlh                                   1/1     Running     0          22m
gpu-feature-discovery-wdvr7                                   1/1     Running     0          22m
gpu-operator-689dbf694b-clz7f                                 1/1     Running     0          23m
gpu-operator-node-feature-discovery-master-7db9bfdd5b-9w2hj   1/1     Running     0          23m
gpu-operator-node-feature-discovery-worker-2wpmm              1/1     Running     0          23m
gpu-operator-node-feature-discovery-worker-4bsn7              1/1     Running     0          23m
gpu-operator-node-feature-discovery-worker-9klx5              1/1     Running     0          23m
gpu-operator-node-feature-discovery-worker-gn62n              1/1     Running     0          23m
gpu-operator-node-feature-discovery-worker-hdzpx              1/1     Running     0          23m
nvidia-container-toolkit-daemonset-hvx6x                      1/1     Running     0          22m
nvidia-container-toolkit-daemonset-lhmxn                      1/1     Running     0          22m
nvidia-container-toolkit-daemonset-tjrb2                      1/1     Running     0          22m
nvidia-cuda-validator-fcfwn                                   0/1     Completed   0          18m
nvidia-cuda-validator-mdbml                                   0/1     Completed   0          18m
nvidia-cuda-validator-sv979                                   0/1     Completed   0          17m
nvidia-dcgm-exporter-fvn8h                                    1/1     Running     0          22m
nvidia-dcgm-exporter-mt5qh                                    1/1     Running     0          22m
nvidia-dcgm-exporter-n65kl                                    1/1     Running     0          22m
nvidia-device-plugin-daemonset-hwc95                          1/1     Running     0          22m
nvidia-device-plugin-daemonset-wr5td                          1/1     Running     0          22m
nvidia-device-plugin-daemonset-zzzkm                          1/1     Running     0          22m
nvidia-device-plugin-validator-4k5wd                          0/1     Completed   0          17m
nvidia-device-plugin-validator-rjkzd                          0/1     Completed   0          17m
nvidia-device-plugin-validator-swdrr                          0/1     Completed   0          17m
nvidia-driver-daemonset-2jsmv                                 1/1     Running     0          22m
nvidia-driver-daemonset-5zq44                                 1/1     Running     0          22m
nvidia-driver-daemonset-v6qgx                                 1/1     Running     0          22m
nvidia-operator-validator-kk6nd                               1/1     Running     0          22m
nvidia-operator-validator-m9p9k                               1/1     Running     0          22m
nvidia-operator-validator-s6czx                               1/1     Running     0          22m
</code></pre>

### Verify GPU Operator Install

When the GPU operator is UP and running, it will add `nvidia.com/gpu` labels on GPU Nodes.

You can check new labels with the command:

```bash
kubectl get nodes --show-labels | grep "nvidia.com/gpu"
```

New labels should appear only on your GPU Nodes:

![GPU Nodes NVIDIA labels](images/gpu-nodes-labels.png)

### Running Sample GPU Applications

You can now proceed to running a GPU application/workload on your cluster.

To configure Pods to consume GPUs, you need to use a resource limit in your YAML manifest file. You have to specify a resource limit in a Pod specification using the following key-value pair:

```bash
Key: nvidia.com/gpu
Value: Number of GPUs to consume
```

Create a `vector.yaml` YAML manifest file with the following content:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: cuda-vectoradd
spec:
  restartPolicy: OnFailure
  containers:
  - name: cuda-vectoradd
    image: "nvcr.io/nvidia/k8s/cuda-sample:vectoradd-cuda11.7.1"
    resources:
      limits:
         nvidia.com/gpu: 1
```

Apply it:

```bash
kubectl apply -f vector.yaml -n default
```

And watch the Pod startup:

```bash
kubectl get pod -n default -w
```

You should have results like this:

<pre class="console"><code>$ kubectl apply -f vector.yaml -n default
pod/cuda-vectoradd created

$ kubectl get pod -n default -w
NAME             READY   STATUS              RESTARTS   AGE
cuda-vectoradd   0/1     ContainerCreating   0          4s
cuda-vectoradd   0/1     Completed   0          35s
</code></pre>

When the `cuda-vectoradd` has started, run and completed its task, watch the logs with the following command:

```bash
kubectl logs cuda-vectoradd -n default
```

<pre class="console"><code>$ kubectl logs cuda-vectoradd -n default
[Vector addition of 50000 elements]
Copy input data from the host memory to the CUDA device
CUDA kernel launch with 196 blocks of 256 threads
Copy output data from the CUDA device to the host memory
Test PASSED
Done
</code></pre>

Our first GPU workload is just started up and has done its task in our OVHcloud Managed Kubernetes cluster.

## Go further

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes documentation](../).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](https://community.ovh.com/en/).
