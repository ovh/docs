---
title: Getting started with Kubernetes database operator
excerpt: Find out how to install and use the Kubernetes database operator
slug: database-operator
section: General guides
order: 120
updated: 2023-05-02
---

**Last updated May 2<sup>nd</sup>, 2023**

## Objective

The kubernetes database operator allow you to automaticaly authorize your Kubernetes cluster IP on your OVHcloud cloud databases service.

**This guide explains how to install and use the database operator in order to authorize the Kubernetes IP on your service**

## Requirements

- Access to the [OVHcloud API](https://api.ovh.com/) (create your credentials by consulting [this guide](https://docs.ovh.com/de/api/first-steps-with-ovh-api/))
- A [Public Cloud project](https://docs.ovh.com/gb/en/public-cloud/create_a_public_cloud_project) in your OVHcloud account

## Getting your OVHcloud API tokens information
The Kubernetes operator needs to be configured with a set of credentials. Go to https://api.ovh.com/createToken/ to generate the following credentials:
* an `application_key`
* an `application_secret`
* a `consumer_key`

## Instructions
The Kubernetes database operator is stored as an Helm chart in [Docker Hub](https://hub.docker.com/r/ovhcom/public-cloud-databases-operator/tags), an OCI registry.

### Helm Values
The first step is to create create a `values.yaml`.
Please replace XXXX with the credentials you obtained earlier.
Note that the region value is either: ovh-eu, ovh-ca or ovh-us.
```yaml
ovhCredentials:
  applicationKey: XXXX
  applicationSecret: XXXX
  consumerKey: XXXX
  region: XXXX # ovh-eu, ovh-ca or ovh-us

namespace: XXXX # Your Kubernetes namespace
```

### Installation
Use the kubernetes package manager [helm](https://helm.sh) and the values file you created to install the operator.

```bash
helm install -f values.yaml public-cloud-databases-operator oci://registry-1.docker.io/ovhcom/public-cloud-databases-operator --version 1.0.0
```
This command will create the operator, CRDs and secrets objects.
You can verify the operator is correctly installed by checking the Pods in the new Kubernetes namespace:
 ```bash
kubectl get deploy -n databases-operator
NAME                                       READY   UP-TO-DATE   AVAILABLE   AGE
operator-public-cloud-databases-operator   0/1     1            0           11h

kubectl get crd services.clouddatabases.ovhcloud.net
NAME                                   CREATED AT
services.clouddatabases.ovhcloud.net   2023-03-07T19:32:37Z

kubectl get secret ovh-credentials -n databases-operator
NAME              TYPE                      DATA   AGE
ovh-credentials   kubernetes.io/storageos   4      9h
```

### Create Custom Resource

Now, create a custom resource object.
```yaml
 {
        "apiVersion": "clouddatabases.ovhcloud.net/v1alpha1",
        "kind": "services",
        "metadata": {
          "name": "XXXX",
          "namespace": "XXXX"
        },
        "spec": {
          "projectId": "XXXX",
          "serviceId": "XXXX",
          "labelSelector": # No label selector means apply on all nodes
            "matchLabels":
              "LABELNAME": "LABELVALUE"
        },
      }
```
The field `serviceId` is optional. If not set, the operator will be run against all the services of your project.


Apply it to the cluster:
```bash
kubectl apply -f cr.yaml
```

## Nodes Labels

You can use Kubernetes labeling in order to select specific Nodes that you want the operator to be run against.
The created CR and the Node must have the same label and value.

```bash
kubectl label nodes NODENAME1 NODENAME2 ... LABELNAME=LABELVALUE
```

# Related links
 
[GitHub repository](https://github.com/ovh/public-cloud-databases-operator)
[Docker Hub](https://hub.docker.com/repository/docker/ovhcom/public-cloud-databases-operator/general)
