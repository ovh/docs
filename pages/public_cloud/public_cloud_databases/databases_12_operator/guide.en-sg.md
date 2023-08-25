---
title: Getting started with Kubernetes database operator
excerpt: Find out how to install and use the Kubernetes database operator
updated: 2023-06-29
---

## Objective

The kubernetes database operator allows you to automaticaly authorize your Kubernetes cluster IP on your OVHcloud Public Cloud Databases service.

**This guide explains how to install and use the database operator in order to authorize the Kubernetes IP on your service**

## Requirements

- Access to the [OVHcloud API](https://ca.api.ovh.com/). Create your credentials using our [First Steps with the OVHcloud API](/pages/manage_and_operate/api/first-steps) guide.
- A [Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project) in your OVHcloud account

### Getting your OVHcloud API tokens information

In order to generate your OVHcloud API, please follow our [First steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps) tutorial.

Specifically, you have to generate these credentials via the [OVHcloud token generation page](https://ca.api.ovh.com/createToken?GET=/cloud/project/*/database/*&POST=/cloud/project/*/database/*&PUT=/cloud/project/*/database/*&DELETE=/cloud/project/*/database/*) with the following rights:

- GET /cloud/project/*/database/*
- POST /cloud/project/*/database/*
- PUT /cloud/project/*/database/*
- DELETE /cloud/project/*/database/*

## Instructions

The Kubernetes database operator is stored as an Helm chart in [Docker Hub](https://hub.docker.com/r/ovhcom/public-cloud-databases-operator/tags), an OCI registry.

### Helm Values

The first step is to create a `values.yaml`. 

Please replace the `XXXX` with the credentials you previously retrieved.

Note that the region value is either `ovh-eu`, `ovh-ca` or `ovh-us`.

```yaml
ovhCredentials:
  applicationKey: XXXX
  applicationSecret: XXXX
  consumerKey: XXXX
  region: ovh-ca # ovh-eu, ovh-ca or ovh-us

namespace: ovhcloud # Your Kubernetes namespace
```

### Installation

Use the kubernetes package manager [helm](https://helm.sh) and the values file you created to install the operator.

```bash
helm install -f values.yaml public-cloud-databases-operator oci://registry-1.docker.io/ovhcom/public-cloud-databases-operator --version 0.1.1
```

This command will create the operator, CRDs and secrets objects.

You can find the latest version of the helm chart on [DockerHub](https://hub.docker.com/r/ovhcom/public-cloud-databases-operator/tags).

You can verify the operator is correctly installed by checking the Pods in the new Kubernetes namespace:

```bash
kubectl get deploy -n ovhcloud
NAME                              READY   UP-TO-DATE   AVAILABLE   AGE
public-cloud-databases-operator   1/1     1            1           60m
```

And that the secret with you OVHcloud credentials is properly created:

```bash
kubectl get secret ovh-credentials -n ovhcloud
NAME              TYPE     DATA   AGE
ovh-credentials   Opaque   4      60m
```

### Creating custom resources

Create a custom resource object:

```yaml
apiVersion: cloud.ovh.net/v1alpha1
kind: Database
metadata:
  name: mydatabase
  namespace: ovhcloud
spec:
  projectId: XXXX
  serviceId: XXX
```

Or with a label selector to cherry pick you nodes based on label:

```yaml
apiVersion: cloud.ovh.net/v1alpha1
kind: Database
metadata:
  name: mydatabase
  namespace: ovhcloud
spec:
  projectId: XXXX
  serviceId: XXX
  labelSelector:
    matchLabels:
      LABELNAME: LABELVALUE
```

The `serviceId` field is optional. If not set, the operator will be run against all the services of your project.


Apply it to the cluster:

```bash
kubectl apply -f cr.yaml
```

You can check it has been properly created using this command:
```bash
kubectl kubectl -n ovhcloud get database
NAME                              AGE
public-cloud-databases-operator   59m
```

### Nodes Labels

You can use Kubernetes labeling in order to select specific Nodes that you want the operator to be run against.

The created CR and the Node must have the same label and value.

```bash
kubectl label nodes NODENAME1 NODENAME2 ... LABELNAME=LABELVALUE
```

## Go further

- [GitHub repository](https://github.com/ovh/public-cloud-databases-operator)
- [Docker Hub](https://hub.docker.com/repository/docker/ovhcom/public-cloud-databases-operator/general)

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
