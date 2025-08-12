---
title: Deploying a Hello World application
excerpt: 'Find out how to deploy a Hello World application with the OVHcloud Control Panel and the OVHcloud API'
updated: 2025-05-06
---

## Objective

Follow this quickstart guide to deploy a containerised *Hello World* application on your OVHcloud Managed Kubernetes Service cluster, using the OVHcloud Control Panel and the OVHcloud API.

In this guide, we’ll walk you through deploying a Hello World application on your OVHcloud Managed Kubernetes Service. You can manage your cluster either via the [OVHcloud Control Panel](/links/manager) or the [OVHcloud API](/links/api).

## Requirements

- You should have already created a cluster on the OVHcloud Managed Kubernetes service.
- You will also need the [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) command-line tool. You can find the [detailed installation instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/) for this tool on the Kubernetes official site.

> [!warning]
>
> For API users, this guide assumes you are familiar with the [OVHcloud API](/links/api). If you have never used it, you can find the basics here: [First steps with the OVHcloud API](/pages/manage_and_operate/api/first-steps).
>

## Instructions

### Getting your cluster information

> [!tabs]
> Via the OVHcloud Control Panel
>> Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.
>>
>> Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu.
>>
>> ![Select your cluster](images/select-cluster.png){.thumbnail}
>>
>> Click on your cluster to access its information.
>>
>> ![OVHcloud Managed Kubernetes cluster view](images/cluster-infos.png){.thumbnail}
>>
>> In this administration UI, you have several tabs included:
>>
>> - **Service:** A global view of your cluster, with important information like the status, API URL, and `kubectl` configuration file.
>>
>> - **Node pools:** The node pools of your cluster, with options for adding, configuring or removing them.
>>
>> - **APIServer access:** The possibility to configure the access to the API-server.
>> 
>> - **Audit Logs:** Logs of your Kubernetes cluster’s control plane.
>>
> Via the OVHcloud API
>> #### List your OVHcloud Managed Kubernetes clusters
>>
>> The `GET /cloud/project/{serviceName}/kube` API endpoint lists all the available Kubernetes clusters:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/kube
>> >
>>
>> **Result:**
>>
>> ```json
>> [
>>   "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>   "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>   "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
>> ]
>> ```
>>
>> By calling it, you can view a list of values. Note down the ID of the cluster you want to use. In this example, we will refer to it as `kubeId`.
>>
>> #### Getting informations
>>
>> The `GET /cloud/project/{serviceName}/kube/{kubeId}` API endpoint provides important information about your Managed Kubernetes cluster, including its region, status and URL.
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/kube/{kubeId}
>> >
>>
>> **Result:**
>>
>> ```json
>> {
>>   "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>   "region": "GRA5",
>>   "name": "my-tiny-cluster",
>>   "url": "xxxxxx.c2.gra.k8s.ovh.net",
>>   "nodesUrl": "xxxxxx.nodes.c2.gra.k8s.ovh.net",
>>   "version": "1.24.8-1",
>>   "nextUpgradeVersions": [
>>     "1.25"
>>   ],
>>   "customization": {
>>     "apiServer": {
>>       "admissionPlugins": {
>>         "enabled": [
>>           "AlwaysPullImages",
>>           "NodeRestriction"
>>         ],
>>         "disabled": []
>>       }
>>     }
>>   },
>>   "status": "READY",
>>   "updatePolicy": "ALWAYS_UPDATE",
>>   "isUpToDate": true,
>>   "controlPlaneIsUpToDate": true,
>>   "privateNetworkId": null,
>>   "createdAt": "2022-09-22T06:57:58Z",
>>   "updatedAt": "2022-12-15T15:14:44Z"
>> }
>> ```
>>

### Configuring the default settings for the kubectl CLI

Please refer to the [Configuring kubectl on an OVHcloud Managed Kubernetes cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster) documentation for this part of the process.

### Add a node pool

> [!tabs]
> Via the OVHcloud Control Panel
>> In the `Node pools`{.action} tab of the administration UI, click the `Add a node pool`{.action} button.
>>
>> Enter a node pool name:
>>
>> ![Add a node pool - Set a name](images/add-node-pool1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Only alphanumerical characters and "-" are allowed for the node pool name. You can’t use characters like “_”, “.” or "/" as a separator in a node pool name.
>>
>> Choose a flavor (machine type) for your node pool, B2-7 for example:
>>
>> ![Add a node pool - Choose a flavor](images/add-node-pool2.png){.thumbnail}
>>
>> Configure the number of nodes you want to add to your node pool, 3 for example with Autoscaling disabled.
>>
>> ![Add a node pool - Set the number of nodes](images/add-node-pool3.png){.thumbnail}
>>
>> Define the billing method: monthly or hourly.
>>
>> ![Add a node pool - Choose a flavor](images/add-node-pool4.png){.thumbnail}
>>
> Via the OVHcloud API
>> The first element needed to deploy the *Hello World* application is a `node pool`, a pool of machines, in your cluster. To create this node pool, you can use the `POST /cloud/project/{serviceName}/kube/{kubeId}/nodepool` endpoint, which will deploy a node pool for your cluster on the Public Cloud.
>>
>> You will need to give it several information but only the `flavorName` parameter (the flavor of the instance you want to create) is a required parameter. If you don't fill a value for `desiredNodes` parameter, the default value will be 1, so you will create a new node pool with one node.
>> For this tutorial, we choose a general purpose node, such as the `b2-7` flavor.
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/kube/{kubeId}/nodepool
>> >
>>
>> **Result:**
>>
>> ```json
>> {
>>   "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>   "projectId": "",
>>   "name": "nodepool-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>   "flavor": "b2-7",
>>   "status": "INSTALLING",
>>   "sizeStatus": "CAPACITY_OK",
>>   "autoscale": false,
>>   "monthlyBilled": false,
>>   "antiAffinity": false,
>>   "desiredNodes": 0,
>>   "minNodes": 0,
>>   "maxNodes": 100,
>>   "currentNodes": 0,
>>   "availableNodes": 0,
>>   "upToDateNodes": 0,
>>   "createdAt": "2023-01-13T08:52:27Z",
>>   "updatedAt": "2023-01-13T08:52:27Z",
>>   "autoscaling": {
>>     "scaleDownUtilizationThreshold": 0.5,
>>     "scaleDownUnneededTimeSeconds": 600,
>>     "scaleDownUnreadyTimeSeconds": 1200
>>   },
>>   "template": {
>>     "metadata": {
>>       "labels": {},
>>       "annotations": {},
>>       "finalizers": []
>>     },
>>     "spec": {
>>       "unschedulable": false,
>>       "taints": []
>>     }
>>   }
>> }
>> ```
>>
>> The API will return you the new node pool information.
>>

### Verify that your node pool is ready

> [!tabs]
> Via the OVHcloud Control Panel
>> In the *Computer Nodes* tab, you can inspect the state of your Node pools. The node pool you have just created should now be in an *Installing* state. The node pool installation can take a minute, so feel free to take a short break, then try again until it's ready.
>>
>> ![Verify your node is ready](images/node-pool-status.png){.thumbnail}
>>
>> After its creation, click on the node pool in order to list its nodes details.
>>
>> ![Node pool details](images/node-pool.png){.thumbnail}
>>
> Via the OVHcloud API
>> You can use the `GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool` entrypoint to list all your node pools. Look for the node pool you've just created, and verify the status is `READY`. 
>>
>> > [!primary]
>> > The node pool installation can take a few minutes.
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool
>> >
>>
>> **Result:**
>>
>> ```json
>> [
>>   {
>>     "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>     "projectId": "a123b4c56d789e0ab12c345d678efa12",
>>     "name": "nodepool-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>     "flavor": "b2-7",
>>     "status": "READY",
>>     "sizeStatus": "CAPACITY_OK",
>>     "autoscale": false,
>>     "monthlyBilled": false,
>>     "antiAffinity": false,
>>     "desiredNodes": 1,
>>     "minNodes": 0,
>>     "maxNodes": 100,
>>     "currentNodes": 1,
>>     "availableNodes": 1,
>>     "upToDateNodes": 1,
>>     "createdAt": "2022-09-22T06:58:09Z",
>>     "updatedAt": "2022-12-15T15:14:33Z",
>>     "autoscaling": {
>>       "scaleDownUtilizationThreshold": 0.5,
>>       "scaleDownUnneededTimeSeconds": 600,
>>       "scaleDownUnreadyTimeSeconds": 1200
>>     },
>>     "template": {
>>       "metadata": {
>>         "labels": {},
>>         "annotations": {},
>>         "finalizers": []
>>       },
>>       "spec": {
>>         "unschedulable": false,
>>         "taints": []
>>       }
>>     }
>>   },
>>   {
>>     "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>     "projectId": "a123b4c56d789e0ab12c345d678efa12",
>>     "name": "nodepool-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>     "flavor": "b2-7",
>>     "status": "READY",
>>     "sizeStatus": "CAPACITY_OK",
>>     "autoscale": false,
>>     "monthlyBilled": false,
>>     "antiAffinity": false,
>>     "desiredNodes": 0,
>>     "minNodes": 0,
>>     "maxNodes": 100,
>>     "currentNodes": 0,
>>     "availableNodes": 0,
>>     "upToDateNodes": 0,
>>     "createdAt": "2023-01-13T08:52:27Z",
>>     "updatedAt": "2023-01-13T08:52:39Z",
>>     "autoscaling": {
>>       "scaleDownUtilizationThreshold": 0.5,
>>       "scaleDownUnneededTimeSeconds": 600,
>>       "scaleDownUnreadyTimeSeconds": 1200
>>     },
>>     "template": {
>>       "metadata": {
>>         "labels": {},
>>         "annotations": {},
>>         "finalizers": []
>>       },
>>       "spec": {
>>         "unschedulable": false,
>>         "taints": []
>>       }
>>     }
>>   }
>> ]
>> ```
>>

### Deploy your first application

You're now ready to deploy your first application in your OVHcloud Managed Kubernetes cluster.

For more details about this process, you can refer to the [deploying an application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-an-application) documentation.

## Go further

As you can see in the Kubernetes section of the [API Explorer](/links/console), a lot of useful API endpoints exist to manage your Kubernetes clusters. Feel free to use the API endpoints depending on your use cases.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
