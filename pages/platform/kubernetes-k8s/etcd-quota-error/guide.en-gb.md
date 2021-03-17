---
title: ETCD Quotas error, troubleshooting
excerpt: ''
slug: etcd-quota-error
section: FAQ
---

**Last updated March 15<sup>th</sup>, 2021.**

Some customers might encounter troubles with the quota on ETCD storage usage.

## Issue

When you want to manage an objects into your Kubernetes cluster, you can reached an error like this:

```log
"Error from server: rpc error: code = Unknown desc = ETCD storage quota exceeded"
```

Each Kubernetes cluster have a dedicated quota on ETCD storage.

The formula to calculate ETCD quota allowed is: *Total = 10MB + (25MB per node)*

For a cluster with 3 servers "b2-7" the quota are : 85MB

Don't worry about the decrease, you keep the max quotas allowed forever, to prevent shrink of datas.

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
kubectl get 

// TODO a fixer

kubectl get certificates --all-namespaces -o json \
    | jq -r '.items[] | select(.status.phase == "Pending").metadata.namespace' \
    | parallel kubectl -n '{}' delete po -l 'component=kube-controller-manager'
```

* Update cert-manager

There is no generic way to do this, but if you use Helm we recommend you to use it for the update.
[Cert Manager official documentation](https://cert-manager.io/docs/installation/kubernetes/)

* Fix the issue

We recommend you to take the following steps to troubleshoot your cert-manager, and to ensure that everything is correctly configured:
[Acme troubleshoot](https://cert-manager.io/docs/faq/acme/)

* Start cert-manager

### Other usecase

If cert-manager is not the root causes, you should turn to the other installed operator.

The way is to find the objects creates by the operator, it is possible the operator create a lots of objects like cert-manager.
