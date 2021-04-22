---
title: ETCD Quotas error, troubleshooting
excerpt: ''
slug: etcd-quota-error
section: FAQ
---

**Last updated March 15<sup>th</sup>, 2021.**

Some customers might encounter troubles with the quota on ETCD storage usage.

## Issue

When managing your Kubernetes cluster, you may encounter the following error:

```log
"Error from server: rpc error: code = Unknown desc = ETCD storage quota exceeded"
```

Each Kubernetes cluster have a dedicated quota on ETCD storage.

The formula to calculate ETCD quota allowed is: *Total = 10MB + (25MB per node)*

For example, a cluster with 3 `b2-7` servers has a quota of 85MB.

The quota can thus be increased by adding nodes, but will never be decreased (even if all nodes are removed) to prevent data loss.

## Troubleshoot

### Cert-Manager

The first mostfull usecase is come from with a bad configuration on [cert-manager](https://cert-manager.io/docs/)

Most users install the cert-manager from Helm, and take a quick road to prod it.

If cert-manager have a bad configuration, he try to create unlimited number of certificare requets.

The operator cert-manager going to satured all empty allow storage in ETCD.

To detect that, you can find the number of certificate-requets:

```bash
kubectl get certificaterequests -A | wc -l
```

If you have a huge number of certificate request (+1000 for example), you have find the root cause !

To solve that,we propose this way:

* Stop the operator cert-manager

```bash
kubectl scale deployment --replicas 0 cert-manager
```

* flush all useless certificate request

```bash
kubectl delete certificaterequests --all
```

* Update cert-manager

There is no generic way to do this, but if you use Helm we recommend you to use it for the update.
[Cert Manager official documentation](https://cert-manager.io/docs/installation/kubernetes/)

* Fix the issue

We recommend you to take the following steps to troubleshoot your cert-manager, and to ensure that everything is correctly configured:
[Acme troubleshoot](https://cert-manager.io/docs/faq/acme/)

* Start cert-manager

### Other usecase

If cert-manager is not the root causes, you should turn to the other running operators.

We have found that the following resources can sometimes be generated continuously by existing operators:
> backups.velero.io
ingress.networking.k8s.io
ingress.extensions

If that still  does not cover your case, you can use a tool like [ketall](https://github.com/corneliusweig/ketall) to easily list and count resources in your cluster.

---
