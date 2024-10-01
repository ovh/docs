---
title: Deploying a Hello World with the OVHcloud API
excerpt: 'Find out how to deploy a Hello World application with the OVHcloud API'
updated: 2023-01-16
---

## Objective

Follow this quickstart guide to deploy a containerised *Hello World* application on your OVHcloud Managed Kubernetes Service cluster, using the OVHcloud API.

In this guide, we are assuming you're using the [OVHcloud API](https://api.ovh.com/) to manage your Kubernetes cluster. If you are using a different method, like the [OVHcloud Control Panel](/links/manager), please take a look to the [Deploying a Hello World application with the OVHcloud Control Panel](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world) guide.

## Requirements

* You should have already created a Kubernetes cluster on the OVHcloud Managed Kubernetes service.
* You will also need the [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/){.external} command-line tool. You can find the [detailed installation instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/){.external} for this tool on Kubernetes' official site.

> [!warning]
> This guide assumes you are familiar with the [OVHcloud API](https://api.ovh.com/). If you have never used it, you can find the basics here: [First steps with the OVHcloud API](/pages/manage_and_operate/api/first-steps).
>

## Instructions

### The API Explorer

To simplify things, we are using the [API Explorer](https://api.ovh.com/), which allows to explore, learn and interact with the API in an interactive way.

Log in to the API Explorer using your OVH NIC.

![Log in to the API Explorer](images/kubernetes-quickstart-api-ovh-com-001.png){.thumbnail}

If you go to the [Kubernetes section](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube~GET) of the API Explorer, you will see the available endpoints:

![Kubernetes section of the API Explorer](images/kube-api-01.png){.thumbnail}
![Kubernetes section of the API Explorer](images/kube-api-02.png){.thumbnail}

### List your OVHcloud Managed Kubernetes clusters

The `GET /cloud/project/{serviceName}/kube` API endpoint lists all the available Kubernetes clusters:

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/kube
>

**Result:**

```json
[
  "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
]
```

By calling it, you can view a list of values. Note down the ID of the cluster you want to use. In this example, we will refer to it as `kubeId`.

### Get your OVHcloud Managed Kubernetes cluster information

The `GET /cloud/project/{serviceName}/kube/{kubeId}` API endpoint provides important information about your Managed Kubernetes cluster, including its region, status and URL.

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/kube/{kubeId}
>

**Result:**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "region": "GRA5",
  "name": "my-tiny-cluster",
  "url": "xxxxxx.c2.gra.k8s.ovh.net",
  "nodesUrl": "xxxxxx.nodes.c2.gra.k8s.ovh.net",
  "version": "1.24.8-1",
  "nextUpgradeVersions": [
    "1.25"
  ],
  "customization": {
    "apiServer": {
      "admissionPlugins": {
        "enabled": [
          "AlwaysPullImages",
          "NodeRestriction"
        ],
        "disabled": []
      }
    }
  },
  "status": "READY",
  "updatePolicy": "ALWAYS_UPDATE",
  "isUpToDate": true,
  "controlPlaneIsUpToDate": true,
  "privateNetworkId": null,
  "createdAt": "2022-09-22T06:57:58Z",
  "updatedAt": "2022-12-15T15:14:44Z"
}
```

### Add a node pool

The first element needed to deploy the *Hello World* application is a `node pool`, a pool of machines, in your cluster. To create this node pool, you can use the `POST /cloud/project/{serviceName}/kube/{kubeId}/nodepool` endpoint, which will deploy a node pool for your cluster on the Public Cloud.

You will need to give it several information but only the `flavorName` parameter (the flavor of the instance you want to create) is a required parameter. If you don't fill a value for `desiredNodes` parameter, the default value will be 1, so you will create a new node pool with one node.
For this tutorial, we choose a general purpose node, such as the `b2-7` flavor.

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/kube/{kubeId}/nodepool
>

**Result:**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "projectId": "",
  "name": "nodepool-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "flavor": "b2-7",
  "status": "INSTALLING",
  "sizeStatus": "CAPACITY_OK",
  "autoscale": false,
  "monthlyBilled": false,
  "antiAffinity": false,
  "desiredNodes": 0,
  "minNodes": 0,
  "maxNodes": 100,
  "currentNodes": 0,
  "availableNodes": 0,
  "upToDateNodes": 0,
  "createdAt": "2023-01-13T08:52:27Z",
  "updatedAt": "2023-01-13T08:52:27Z",
  "autoscaling": {
    "scaleDownUtilizationThreshold": 0.5,
    "scaleDownUnneededTimeSeconds": 600,
    "scaleDownUnreadyTimeSeconds": 1200
  },
  "template": {
    "metadata": {
      "labels": {},
      "annotations": {},
      "finalizers": []
    },
    "spec": {
      "unschedulable": false,
      "taints": []
    }
  }
}
```

The API will return you the new node pool information.

### Verify your node pool is ready

You can use the `GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool` entrypoint to list all your node pools. Look for the node pool you've just created, and verify the status is `READY`. 

> [!primary]
> The node pool installation can take a few minutes.

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool
>

**Result:**

```json
[
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "projectId": "a123b4c56d789e0ab12c345d678efa12",
    "name": "nodepool-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "flavor": "b2-7",
    "status": "READY",
    "sizeStatus": "CAPACITY_OK",
    "autoscale": false,
    "monthlyBilled": false,
    "antiAffinity": false,
    "desiredNodes": 1,
    "minNodes": 0,
    "maxNodes": 100,
    "currentNodes": 1,
    "availableNodes": 1,
    "upToDateNodes": 1,
    "createdAt": "2022-09-22T06:58:09Z",
    "updatedAt": "2022-12-15T15:14:33Z",
    "autoscaling": {
      "scaleDownUtilizationThreshold": 0.5,
      "scaleDownUnneededTimeSeconds": 600,
      "scaleDownUnreadyTimeSeconds": 1200
    },
    "template": {
      "metadata": {
        "labels": {},
        "annotations": {},
        "finalizers": []
      },
      "spec": {
        "unschedulable": false,
        "taints": []
      }
    }
  },
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "projectId": "a123b4c56d789e0ab12c345d678efa12",
    "name": "nodepool-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "flavor": "b2-7",
    "status": "READY",
    "sizeStatus": "CAPACITY_OK",
    "autoscale": false,
    "monthlyBilled": false,
    "antiAffinity": false,
    "desiredNodes": 0,
    "minNodes": 0,
    "maxNodes": 100,
    "currentNodes": 0,
    "availableNodes": 0,
    "upToDateNodes": 0,
    "createdAt": "2023-01-13T08:52:27Z",
    "updatedAt": "2023-01-13T08:52:39Z",
    "autoscaling": {
      "scaleDownUtilizationThreshold": 0.5,
      "scaleDownUnneededTimeSeconds": 600,
      "scaleDownUnreadyTimeSeconds": 1200
    },
    "template": {
      "metadata": {
        "labels": {},
        "annotations": {},
        "finalizers": []
      },
      "spec": {
        "unschedulable": false,
        "taints": []
      }
    }
  }
]
```

### Configure the default settings for the kubectl CLI

Please refer to the [Configuring kubectl on an OVHcloud Managed Kubernetes cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster) documentation for this part of the process.

### Deploy your first application

You're now ready to deploy your first application in your OVHcloud Managed Kubernetes cluster.

For more details about this process, you can refer to the [deploying an application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-an-application) documentation.

## Go further

As you can see in the [Kubernetes section](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube~GET) of the API Explorer, a lot of useful API endpoints exist to manage your Kubernetes clusters. Feel free to use the API endpoints depending on your use cases.
 
- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pt/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.