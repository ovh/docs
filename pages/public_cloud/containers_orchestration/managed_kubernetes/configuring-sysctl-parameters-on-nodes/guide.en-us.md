---
title: Adapt your Inotify parameters for your Managed Kubernetes Service deployments
excerpt: 'Adapt your Inotify parameters for your deployments which need specific Inotify parameters'
updated: 2025-02-12
---

## Objective

The OVHcloud Managed Kubernetes service gives you access to Kubernetes clusters, without the hassle of installing or operating them.
But for some specific usecases, you may have to customize nodes parameters.

**This guide will cover the customization of the sysctl parameters which define user limits on the number of inotify resources and inotify file watches.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)
- An OVHcloud Managed Kubernetes cluster
- Access to your OVHcloud Managed Kubernetes cluster through the Kubeconfig file
- You must have the [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) command-line tool installed
- Your Kubeconfig is exported into your terminal following this guide : [Configuring Kubectl](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster)

## Instructions

### Step 1: Create a privileged DaemonSet and define the value to modify

Create a YAML named `sysctl-tuner-daemonset.yaml` with the content below:

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: sysctl-tuner
  namespace: kube-system
spec:
  selector:
    matchLabels:
      app: sysctl-tuner
  updateStrategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: sysctl-tuner
    spec:
      hostPID: true
      priorityClassName: system-node-critical
      hostNetwork: true
      tolerations:
        - operator: Exists
      initContainers:
        - image: busybox
          name: sysctl-tuner
          command:
            - sh
            - -c
            - "sysctl -w fs.inotify.max_user_watches=<value> && sysctl -w fs.inotify.max_user_instances=<value>"
          securityContext:
            privileged: true
            runAsUser: 0
      containers:
        - image: registry.k8s.io/pause:3.10
          name: pause
```

Define the value of the sysctl key `fs.inotify.max_user_watches` and `fs.inotify.max_user_instances` based on your applications' needs.

The DaemonSet will set the sysctl parameter `fs.inotify.max_user_watches` with the value you provided in the DaemonSet configuration on all nodes deployed into your Kubernetes Cluster.

> [!primary]
>
> Multiple sysctl parameters can be modified and adapted for your use cases. You can list them by running this command : 
> 
> ```bash
> $ kubectl run busybox --image=busybox:latest --rm=true -it --privileged=true -- sysctl -a
> ```
> 
> This command will create a privileged busybox pod that prints all available sysctl values and deletes the pod.

## Step 2: Test if the changes were applied correctly

In order to check if the inotify value has been changed properly, you can execute a shell into a pod:

```bash 
$ kubectl exec -it <pod> -- cat /proc/sys/fs/inotify/max_user_watches
```

The output should be the same as the value you defined in the DaemonSet YAML defined above.

Congratulations! You've successfully modified the maximum inotify "max_user_watches" value on your Managed Kubernetes Service.

## Go further

To deploy your first application on your Kubernetes cluster, we suggest you refer to our guide to [Deploying an application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-an-application).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
