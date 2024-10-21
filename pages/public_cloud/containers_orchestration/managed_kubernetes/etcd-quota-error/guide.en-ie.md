---
title: ETCD Quotas, usage, troubleshooting and error
excerpt: 'Find out how to view ETCD quotas, usage and fix errors'
updated: 2024-04-12
---

## Objective

ETCD is one of the major components of a Kubernetes cluster. It's a distributed key-value database that allows to store and replicate cluster state.

![Kubernetes components](images/kube-components-schema.png){.thumbnail}

At some point during the life of your Managed Kubernetes cluster, you may encounter one of the following errors which prevent you from altering resources:

```log
rpc error: code = Unknown desc = ETCD storage quota exceeded
rpc error: code = Unknown desc = quota computation: etcdserver: not capable
rpc error: code = Unknown desc = The OVHcloud storage quota has been reached
```

**This guide will show you how to view your usage and quota, troubleshoot and resolve this situation.**

## Requirements

- An OVHcloud Managed Kubernetes cluster
- The [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/){.external} command-line tool installed

## Instructions

### Background

Each Kubernetes cluster has a dedicated quota on ETCD storage usage, calculated through the following formula:

```
Quota = 10MB + (25MB per node)* (capped to 200MB)
```

For example, a cluster with 3 `b2-7` servers has a quota of __85 MB__.

In order to check your current ETCD quota and usage, you can query the OVHcloud API.

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/kube/{kubeID}/metrics/etcdUsage
>

**Result:**

```json
{
  "quota": 89128960,
  "usage": 2604349
}
```

> [!primary]
>
> ETCD quota and usage result are in bytes.

Using this API endpoint, you can view the ETCD usage and quota and anticipate a possible issue.

The quota can thus be increased by adding nodes, but will never be decreased (even if all nodes are removed) to prevent data loss.  
The error mentioned above states that the cluster's ETCD storage usage has exceeded the quota.

**To resolve the situation, you need to delete resources created in excess.**

### Most common case: misconfigured cert-manager

Most users install cert-manager through Helm, and then move on a bit hastily.

The most common cases of ETCD quota issues come from a bad configuration of [cert-manager](https://cert-manager.io/docs/), making it continuously create `certificaterequest` resources.

This behaviour will fill the ETCD with resources until the quota is reached.

To verify if you are in this situation, you can get the number of `certificaterequest` and `order.acme` resources:

```bash
kubectl get certificaterequest.cert-manager.io -A | wc -l
kubectl get order.acme.cert-manager.io -A | wc -l
```

If you have a huge number (hundreds or more) of those resources requests, you have found the root cause.

To resolve the situation, we propose the following method:

- Stopping cert-manager

```bash
kubectl -n <your_cert_manager_namespace> scale deployment --replicas 0 cert-manager
```

- Flushing all `certificaterequest` and `order.acme` resources

```bash
kubectl delete certificaterequest.cert-manager.io -A --all
kubectl delete order.acme.cert-manager.io -A --all
```

- Updating cert-manager

There is no generic way to do this, but if you use Helm we recommend you to use it for the update: [Cert Manager official documentation](https://cert-manager.io/docs/installation/kubernetes/)

- Fixing the issue

We recommend you to take the following steps to troubleshoot your cert-manager, and to ensure that everything is correctly configured: [Acme troubleshoot](https://cert-manager.io/docs/faq/acme/)

- Starting cert-manager

### Other cases

If cert-manager is not the root cause, you should turn to the other running operators which create Kubernetes resources.  
We have found that the following resources can sometimes be generated continuously by existing operators:

- `backups.velero.io`

```bash
kubectl get backups.velero.io -A | wc -l
```

- `podvolumebackups.velero.io`

```bash
kubectl get podvolumebackups.velero.io -A | wc -l
```

- `ingress.networking.k8s.io`

```bash
kubectl get ingress.networking.k8s.io -A | wc -l
```

- `ingress.extensions`

```bash
kubectl get ingress.extensions -A | wc -l
```

- `authrequests.dex.coreos.com`

```bash
kubectl get authrequests.dex.coreos.com -A | wc -l
```

- `reportchangerequest.kyverno.io`

```bash
kubectl get reportchangerequest.kyverno.io -A | wc -l
```

- `vulnerabilityreports.aquasecurity.github.io`

```bash
kubectl get vulnerabilityreports.aquasecurity.github.io -A | wc -l
```

- `configauditreport.aquasecurity.github.io`

```bash
kubectl get configauditreport.aquasecurity.github.io -A | wc -l
```

- `clusterrbacassessmentreport.aquasecurity.github.io`

```bash
kubectl get clusterrbacassessmentreport.aquasecurity.github.io -A | wc -l
```

If that still does not cover your case, you can use a tool like [ketall](https://github.com/corneliusweig/ketall) to easily list and count resources in your cluster.  
Then you should delete the resources in excess and fix the process responsible for their creation.

## Counting all resources

If you still need to check all resources as you do not know what consumes etcd quotas, you can run this snippet.
You will need the `count` plugin for `kubectl`. See [installation](https://github.com/chenjiandongx/kubectl-count#-installation) instructions.

```bash
kubectl count -A $(kubectl api-resources --verbs=list -o name | tr '\n' ',')
+-----------+---------------------------------------+--------------------------------+-------+
| Namespace |             GroupVersion              |              Kind              | Count |
+-----------+---------------------------------------+--------------------------------+-------+
|           | v1                                    | ComponentStatus                |     3 |
+-----------+                                       +--------------------------------+-------+
|           |                                       | ConfigMap                      |    78 |
+-----------+                                       +--------------------------------+-------+
|           |                                       | Endpoints                      |    44 |
+-----------+                                       +                                +       +
|           |                                       |                                |       |
+-----------+                                       +--------------------------------+-------+
|           |                                       | Event                          |    40 |
+-----------+---------------------------------------+                                +       +
|           | events.k8s.io/v1                      |                                |       |
+-----------+---------------------------------------+--------------------------------+-------+
...
```

Running the command may take several seconds, depending on your Kubernetes cluster usage.

## Go further

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes doc site](/products/public-cloud-containers-orchestration-managed-kubernetes-k8s).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ie/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](https://community.ovh.com/en/).
