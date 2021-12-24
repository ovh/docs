---
title: Deploying a GPU application on OVHcloud Managed Kubernetes
slug: deploying-gpu-application
excerpt: 'Find out how to deploy a GPU application on OVHcloud Managed Kubernetes'
section: Tutorials
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

**Last updated December 24, 2021.**

## Objective

In this tutorial we will show you how to deploy a GPU application on an OVHcloud Managed Kubernetes cluster.

GPUs provide compute power to drive AI/ML & Deep Learning tasks with intensive calculations such as image recognition, natural language processing (NLP), as well as other compute-intensive tasks such as video transcoding and image processing.
Using GPUs with Kubernetes allows you to extend the scalability of Kubernetes to AI/ML applications.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/) installed on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

## Prerequisites

To get the best and most cost-effective benefit from GPUs on OVHcloud Managed Kubernetes, and to take advantage of cluster autoscaling, we recommend that you create separate GPU node pools in your Kubernetes clusters.

The GPU operator, that you will install, should run on Kubernetes nodes that are equipped with GPUs.

So you need to create a node pool with `t1` flavor type.

If you already have an OVHcloud Kubernetes cluster with a node pool with `t1` flavor type, you can skip the following `Autoscaling GPU Node Pool creation` step.

### Autoscaling GPU Node Pool creation

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu.

![Select your cluster](images/create-a-nodepool-1.png){.thumbnail}

Click on your cluster, then on `Node pools`{.action} tab.

We will create our special GPU Node Pool.
Click on `Add a node pool`{.action} button.

Then enter a name for your GPU node pool, `gpu-node-pool` for example.

![Name your GPU node pool](images/create-a-nodepool-2.png){.thumbnail}

Select a flavor for your new node pool, click on `GPU`{.action} tab. you can choose "T1-45" for example.

![Select a flavor for your GPU node pool](images/create-a-nodepool-3.png){.thumbnail}

In the next step, define the size of our GPU node pool.
You can enable the `Autoscaling`{.action} feature.
Define the minimum and maximum pool size in that case, 3 in minimum and 10 in maximum, for example.

![Define a size and autoscaling for your GPU node pool](images/create-a-nodepool-4.png){.thumbnail}

And then, choose `Hourly` billing mode for this GPU node pool.

![Billing mode](images/create-a-nodepool-5.png){.thumbnail}

The node pool creation is now in progress. It should be available within a few minutes in your OVHcloud Control Panel.

When the Node Pool is in `OK` state, if you display Node pool labels you can verify that the new `gpu-node-pool`'s Nodes are correctly labelled.

```bash
kubectl get node --show-labels | grep "node.k8s.ovh/type=gpu"
```

![GPU nodes](images/create-a-nodepool-6.png){.thumbnail}

## Instructions

### NVIDIA GPU Operator

The [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator) uses the [Operator Framework](https://github.com/operator-framework/getting-started) within Kubernetes to automate the management of all NVIDIA software components needed to provision GPU. These components include the NVIDIA drivers (to enable CUDA), Kubernetes device plugin for GPUs, the NVIDIA Container Runtime, automatic node labelling, DCGM based monitoring and others.

![NVIDIA GPU Kubernetes Operator](images/nvidia-gpu-operator.jpeg)

If you are interested about the operator, feel free to read the [NVIDIA GPU operator official documentation](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/overview.html).


### Installing the NVIDIA GPU Operator Helm chart

For this tutorial we are using the [NVIDIA GPU Operator Helm chart](https://github.com/NVIDIA/gpu-operator/tree/master/deployments/gpu-operator){.external} found on [NVIDIA repository](https://github.com/nvidia/). The chart is [fully configurable](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/getting-started.html), but here we are using the default configuration, with only the minimal set of customization to make it work well on OVHcloud Managed Kubernetes Service.

Add the NVIDIA Helm repository:

```bash
helm repo add nvidia https://nvidia.github.io/gpu-operator
helm repo update
```

This will add you the nvidia repository and update all of your repositories: 

<pre class="console"><code>$ helm repo add nvidia https://nvidia.github.io/gpu-operator
helm repo update
"nvidia" has been added to your repositories
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "nvidia" chart repository
[...]
Update Complete. ⎈Happy Helming!⎈
</code></pre>

Install the GPU Operator in the gpu-operator namespace:

```bash
$ helm install gpu-operator nvidia/gpu-operator -n gpu-operator --create-namespace --wait
```

You should have a GPU operator installed and running:

<pre clas="console"><code>$ helm install gpu-operator nvidia/gpu-operator -n gpu-operator --create-namespace --wait
NAME: gpu-operator
LAST DEPLOYED: Thu Dec 23 15:27:25 2021
NAMESPACE: gpu-operator
STATUS: deployed
REVISION: 1
TEST SUITE: None

$ kubectl get pod -n gpu-operator
NAME                                                          READY   STATUS      RESTARTS   AGE
gpu-feature-discovery-n7tv8                                   1/1     Running     0          3m35s
gpu-feature-discovery-xddz2                                   1/1     Running     0          3m35s
gpu-operator-bb886b456-llmlg                                  1/1     Running     0          5m31s
gpu-operator-node-feature-discovery-master-58d884d5cc-lxkb8   1/1     Running     0          5m31s
gpu-operator-node-feature-discovery-worker-9pqqq              1/1     Running     0          4m27s
gpu-operator-node-feature-discovery-worker-s5zj9              1/1     Running     0          4m20s
nvidia-container-toolkit-daemonset-424mm                      1/1     Running     0          3m36s
nvidia-container-toolkit-daemonset-dqlw9                      1/1     Running     0          3m36s
nvidia-cuda-validator-5dzf7                                   0/1     Completed   0          76s
nvidia-cuda-validator-zp9vd                                   0/1     Completed   0          95s
nvidia-dcgm-4bstw                                             1/1     Running     0          3m36s
nvidia-dcgm-4t7zd                                             1/1     Running     0          3m36s
nvidia-dcgm-exporter-rhtbj                                    1/1     Running     1          3m35s
nvidia-dcgm-exporter-ttq2t                                    1/1     Running     0          3m35s
nvidia-device-plugin-daemonset-f8vht                          1/1     Running     0          3m36s
nvidia-device-plugin-daemonset-lt9xr                          1/1     Running     0          3m36s
nvidia-device-plugin-validator-gj86p                          0/1     Completed   0          28s
nvidia-device-plugin-validator-w2vz4                          0/1     Completed   0          37s
nvidia-driver-daemonset-2mcft                                 1/1     Running     0          3m36s
nvidia-driver-daemonset-v9pv9                                 1/1     Running     0          3m36s
nvidia-operator-validator-g6fbm                               1/1     Running     0          3m36s
nvidia-operator-validator-xctsp                               1/1     Running     0          3m36s
</code></pre>

### Verify GPU Operator Install

When the GPU operator is UP and running, it will add `nvidia.com/gpu` labels on GPU Nodes.

You can check new labels with the command:

```bash
kubectl get nodes --show-labels | grep "nvidia.com/gpu"
```

New labels should appear only on your GPU Nodes:

<pre class="console"><code>$ kubectl get nodes --show-labels | grep "nvidia.com/gpu"
nodepool-t1-45-node-6ab531   Ready    <none>   13d   v1.21.5   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/instance-type=1b5dec62-4e43-4b06-ba27-5080f8dcba8e,beta.kubernetes.io/os=linux,failure-domain.beta.kubernetes.io/region=GRA5,failure-domain.beta.kubernetes.io/zone=nova,feature.node.kubernetes.io/cpu-cpuid.ADX=true,feature.node.kubernetes.io/cpu-cpuid.AESNI=true,feature.node.kubernetes.io/cpu-cpuid.AVX2=true,feature.node.kubernetes.io/cpu-cpuid.AVX512BW=true,feature.node.kubernetes.io/cpu-cpuid.AVX512CD=true,feature.node.kubernetes.io/cpu-cpuid.AVX512DQ=true,feature.node.kubernetes.io/cpu-cpuid.AVX512F=true,feature.node.kubernetes.io/cpu-cpuid.AVX512VL=true,feature.node.kubernetes.io/cpu-cpuid.AVX512VNNI=true,feature.node.kubernetes.io/cpu-cpuid.AVX=true,feature.node.kubernetes.io/cpu-cpuid.FMA3=true,feature.node.kubernetes.io/cpu-cpuid.HLE=true,feature.node.kubernetes.io/cpu-cpuid.HYPERVISOR=true,feature.node.kubernetes.io/cpu-cpuid.IBPB=true,feature.node.kubernetes.io/cpu-cpuid.MPX=true,feature.node.kubernetes.io/cpu-cpuid.RTM=true,feature.node.kubernetes.io/cpu-cpuid.SSE42=true,feature.node.kubernetes.io/cpu-cpuid.SSE4=true,feature.node.kubernetes.io/cpu-cpuid.STIBP=true,feature.node.kubernetes.io/cpu-cpuid.VMX=true,feature.node.kubernetes.io/kernel-config.NO_HZ=true,feature.node.kubernetes.io/kernel-config.NO_HZ_IDLE=true,feature.node.kubernetes.io/kernel-version.full=4.15.0-159-generic,feature.node.kubernetes.io/kernel-version.major=4,feature.node.kubernetes.io/kernel-version.minor=15,feature.node.kubernetes.io/kernel-version.revision=0,feature.node.kubernetes.io/pci-1013.present=true,feature.node.kubernetes.io/pci-10de.present=true,feature.node.kubernetes.io/system-os_release.ID=ubuntu,feature.node.kubernetes.io/system-os_release.VERSION_ID.major=18,feature.node.kubernetes.io/system-os_release.VERSION_ID.minor=04,feature.node.kubernetes.io/system-os_release.VERSION_ID=18.04,kubernetes.io/arch=amd64,kubernetes.io/hostname=nodepool-t1-45-node-6ab531,kubernetes.io/os=linux,node.k8s.ovh/type=gpu,node.kubernetes.io/instance-type=1b5dec62-4e43-4b06-ba27-5080f8dcba8e,nvidia.com/cuda.driver.major=470,nvidia.com/cuda.driver.minor=82,nvidia.com/cuda.driver.rev=01,nvidia.com/cuda.runtime.major=11,nvidia.com/cuda.runtime.minor=4,nvidia.com/gfd.timestamp=1640269901,nvidia.com/gpu.compute.major=7,nvidia.com/gpu.compute.minor=0,nvidia.com/gpu.count=1,nvidia.com/gpu.deploy.container-toolkit=true,nvidia.com/gpu.deploy.dcgm-exporter=true,nvidia.com/gpu.deploy.dcgm=true,nvidia.com/gpu.deploy.device-plugin=true,nvidia.com/gpu.deploy.driver=true,nvidia.com/gpu.deploy.gpu-feature-discovery=true,nvidia.com/gpu.deploy.node-status-exporter=true,nvidia.com/gpu.deploy.operator-validator=true,nvidia.com/gpu.family=volta,nvidia.com/gpu.machine=OpenStack-Nova,nvidia.com/gpu.memory=16160,nvidia.com/gpu.present=true,nvidia.com/gpu.product=Tesla-V100-PCIE-16GB,nvidia.com/mig.strategy=single,topology.cinder.csi.openstack.org/zone=nova,topology.kubernetes.io/region=GRA5,topology.kubernetes.io/zone=nova
nodepool-t1-90-node-755458   Ready    <none>   14d   v1.21.5   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/instance-type=b0cbf7bc-fb23-4149-b9f4-817e448c33e2,beta.kubernetes.io/os=linux,failure-domain.beta.kubernetes.io/region=GRA5,failure-domain.beta.kubernetes.io/zone=nova,feature.node.kubernetes.io/cpu-cpuid.ADX=true,feature.node.kubernetes.io/cpu-cpuid.AESNI=true,feature.node.kubernetes.io/cpu-cpuid.AVX2=true,feature.node.kubernetes.io/cpu-cpuid.AVX512BW=true,feature.node.kubernetes.io/cpu-cpuid.AVX512CD=true,feature.node.kubernetes.io/cpu-cpuid.AVX512DQ=true,feature.node.kubernetes.io/cpu-cpuid.AVX512F=true,feature.node.kubernetes.io/cpu-cpuid.AVX512VL=true,feature.node.kubernetes.io/cpu-cpuid.AVX=true,feature.node.kubernetes.io/cpu-cpuid.FMA3=true,feature.node.kubernetes.io/cpu-cpuid.HLE=true,feature.node.kubernetes.io/cpu-cpuid.HYPERVISOR=true,feature.node.kubernetes.io/cpu-cpuid.IBPB=true,feature.node.kubernetes.io/cpu-cpuid.MPX=true,feature.node.kubernetes.io/cpu-cpuid.RTM=true,feature.node.kubernetes.io/cpu-cpuid.SSE42=true,feature.node.kubernetes.io/cpu-cpuid.SSE4=true,feature.node.kubernetes.io/cpu-cpuid.STIBP=true,feature.node.kubernetes.io/cpu-cpuid.VMX=true,feature.node.kubernetes.io/kernel-config.NO_HZ=true,feature.node.kubernetes.io/kernel-config.NO_HZ_IDLE=true,feature.node.kubernetes.io/kernel-version.full=4.15.0-159-generic,feature.node.kubernetes.io/kernel-version.major=4,feature.node.kubernetes.io/kernel-version.minor=15,feature.node.kubernetes.io/kernel-version.revision=0,feature.node.kubernetes.io/pci-1013.present=true,feature.node.kubernetes.io/pci-10de.present=true,feature.node.kubernetes.io/system-os_release.ID=ubuntu,feature.node.kubernetes.io/system-os_release.VERSION_ID.major=18,feature.node.kubernetes.io/system-os_release.VERSION_ID.minor=04,feature.node.kubernetes.io/system-os_release.VERSION_ID=18.04,kubernetes.io/arch=amd64,kubernetes.io/hostname=nodepool-t1-90-node-755458,kubernetes.io/os=linux,node.k8s.ovh/type=gpu,node.kubernetes.io/instance-type=b0cbf7bc-fb23-4149-b9f4-817e448c33e2,nodepool=nodepool-t1-90,nvidia.com/cuda.driver.major=470,nvidia.com/cuda.driver.minor=82,nvidia.com/cuda.driver.rev=01,nvidia.com/cuda.runtime.major=11,nvidia.com/cuda.runtime.minor=4,nvidia.com/gfd.timestamp=1640269932,nvidia.com/gpu.compute.major=7,nvidia.com/gpu.compute.minor=0,nvidia.com/gpu.count=2,nvidia.com/gpu.deploy.container-toolkit=true,nvidia.com/gpu.deploy.dcgm-exporter=true,nvidia.com/gpu.deploy.dcgm=true,nvidia.com/gpu.deploy.device-plugin=true,nvidia.com/gpu.deploy.driver=true,nvidia.com/gpu.deploy.gpu-feature-discovery=true,nvidia.com/gpu.deploy.node-status-exporter=true,nvidia.com/gpu.deploy.operator-validator=true,nvidia.com/gpu.family=volta,nvidia.com/gpu.machine=OpenStack-Nova,nvidia.com/gpu.memory=16160,nvidia.com/gpu.present=true,nvidia.com/gpu.product=Tesla-V100-PCIE-16GB,nvidia.com/mig.strategy=single,topology.cinder.csi.openstack.org/zone=nova,topology.kubernetes.io/region=GRA5,topology.kubernetes.io/zone=nova
</code></pre>

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
    image: "nvidia/samples:vectoradd-cuda11.2.1"
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

When the `cuda-vectoradd` have started, runned and completed its task, watch the logs with the following command:

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

Our first GPU workload are just started up and done its task in our OVHcloud Managed Kubernetes cluster. Easy!

## Go further

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes doc site](../).

Join our [community of users](https://community.ovh.com/en/).
