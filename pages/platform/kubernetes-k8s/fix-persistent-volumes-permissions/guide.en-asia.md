---
title: Permission errors when enabling persistence, troubleshooting
excerpt: ''
slug: persistentvolumes-permission-errors
section: Diagnostics
---

**Last updated December, 16th 2021.**

## Objective

Be able to autonomously fix an OVHcloud Managed Kubernetes Service when `Permission Errors` are encountered during Helm Chart deployment or deployment creation.  

## Issue explanation

Several Helm charts are updated with some security hardening best practices.  
Using a `non-root` container for example is a new rule to follow for security reason.  
But a main drawback to use non-root containers is related to mounting persistent volumes in these containers.  
Indeed, processes running inside these containers do not have the necessary privileges to modify the ownership of the existing filesystem in a volume.  

A solution is to use the `SecurityContext` provided by Kubernetes to automatically modify the ownership of the attached volumes and to provide a `StorageClass` which supports modifying the volume's filesystem.  
However, the `StorageClass` used by default for the "OVHcloud Managed Kubernetes Service" didn't support the possibility to modify the volume's filesystem.

In the following documentation, we are providing some patches while waiting for an update of our service.

## Observed behaviors

Some pods can be marked in `CrashLoopBackOff` state few seconds/minutes a few seconds/minutes after being scheduled, due to insufficient write access to persistent volumes.

Example of error logs:

```log
mariadb 18:13:27.78 WARN  ==> The mariadb configuration file '/opt/bitnami/mariadb/conf/my.cnf' is not writable. Configurations based on environment variables will not be applied for this file.
```

## Provided solutions

1) We (the OVHcloud Managed Kubernetes Service team) are working on a patch to be released early 2022. So, if you are not impacted by the issue, please do not update your Helm Chart deployment (as only recent helm charts seem to make use of security context, which causes this issue) and wait until a new version of your managed service will be available through the OVHcloud Console.

2) You are using the Bitnami Helm Charts and you want to be able to quickly fix this behavior without waiting our patch.  
You could follow the instructions described in this documentation: https://docs.bitnami.com/kubernetes/faq/troubleshooting/troubleshooting-helm-chart-issues/

3) /!\ This solution is not recommended if you don't know what you are doing and only works with clusters above `1.20` version /!\
You are impacted by this issue but your Helm Chart provider didn't offer a proper solution and you can't wait our official patch.  

If you are in this case, please follow these instructions at your own risk:

- Verify what is the `StorageClass` that you are using by default (generally the `csi-cinder-high-speed`):

```bash
➱ kubectl get storageclasses.storage.k8s.io 
NAME                              PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
csi-cinder-classic                cinder.csi.openstack.org   Delete          Immediate           true                   83d
csi-cinder-high-speed (default)   cinder.csi.openstack.org   Delete          Immediate           true                   83d
```

- Delete the concerned `StorageClass` that you are using by default 

```bash
➱ kubectl delete storageclasses.storage.k8s.io csi-cinder-high-speed 
storageclass.storage.k8s.io "csi-cinder-high-speed" deleted
```

- Create a new `StorageClass` with the required fix

```bash
➱ kubectl apply -f https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/kubernetes-k8s/files/fixed-cinder-high-speed-storage-class.yaml 
storageclass.storage.k8s.io/csi-cinder-high-speed created
```

- Delete the concerned Helm Chart

For example with the Helm Chart `bitnami/wordpress` which is concerned by this behavior:

```bash
➱ helm uninstall my-first-k8s-wordpress
```

And don't forget to verify if concerned `PersistentVolumeClaim` and `PersistentVolume` have been deleted before to reinstall the Helm Chart:

```bash
➱ kubectl get persistentvolumeclaims -A
➱ kubectl get persistentvolumes 
```

- Reinstall the concerned Helm Chart or deployment

For example with the Helm Chart `bitnami/wordpress` which is concerned by this behavior:

```bash
➱ helm install my-first-k8s-wordpress bitnami/wordpress
```

You can see, that the pods are now up and running, which means that the permission errors related to the `persistantVolumes` is now fixed.

```bash
➱ kubectl get pods
NAME                                        READY   STATUS             RESTARTS        AGE
my-first-k8s-wordpress-2-8554886b4b-l8tnq   1/1     Running            0               21m
my-first-k8s-wordpress-2-mariadb-0          1/1     Running            0               21m
```

## Go further

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes doc site](../).

Join our [community of users](https://community.ovh.com/en/).
