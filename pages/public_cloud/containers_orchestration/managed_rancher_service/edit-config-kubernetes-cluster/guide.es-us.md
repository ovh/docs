---
title: Editing the configuration of a Kubernetes cluster in Managed Rancher Service
excerpt: 'Find out how to edit the configuration of a Kubernetes cluster on a Managed Rancher Service'
updated: 2024-09-11
---

## Objective

Managed Rancher Service by OVHcloud provides a powerful platform for orchestrating Kubernetes clusters seamlessly. In this guide we will explore how to edit the configuration of a Kubernetes cluster including the name, labels and annotations, the OVHcloud API credentials and even the update policy.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- An OVHcloud Managed Rancher Service (see the [creating a Managed Rancher Service](/pages/public_cloud/containers_orchestration/managed_rancher_service/create-update-rancher) guide for more information)
- An access to the Rancher UI to operate it (see the [connecting to the Rancher UI](/pages/public_cloud/containers_orchestration/managed_rancher_service/create-update-rancher) guide for more information)
- An existing Kubernetes cluster you created or imported in Managed Rancher Service (MRS)

## Instructions

Through the Rancher UI you can edit several information about a Kubernetes cluster you created or imported.

Log in your Managed Rancher Service UI.
In the menu, click on the `Cluster Management`{.action} button: 

![OVHcloud Managed Rancher Service UI](images/rancher-cluster-management.png){.thumbnail}

For the chosen Kubernetes cluster, click on the `...`{.action} button and then on `Edit Config`{.action}.

![OVHcloud Managed Rancher Service UI](images/rancher-edit-config.png){.thumbnail}

You can now edit the name of the cluster. In this example we changed `my-mks-cluster` to `my-mks-rancher-cluster`:

![OVHcloud Managed Rancher Service UI](images/rancher-cluster-name.png){.thumbnail}

You can also change **Member Roles**, to control who has access to your cluster and with what permissions, by adding or removing members.

![OVHcloud Managed Rancher Service UI](images/rancher-members.png){.thumbnail}

You can view the **Labels and Annotations** automatically added by Rancher, and add new ones if you wish.

![OVHcloud Managed Rancher Service UI](images/rancher-labels-annotations.png){.thumbnail}

**OVH API credentials** can also be modified in this page. Edit them if you defined credentials that have expired.

![OVHcloud Managed Rancher Service UI](images/rancher-api-creds.png){.thumbnail}

You can change the Kubernetes version and the Update Policy:

![OVHcloud Managed Rancher Service UI](images/rancher-update-policy.png){.thumbnail}

You can also add new Node Pool or edit existing ones:

![OVHcloud Managed Rancher Service UI](images/rancher-np.png){.thumbnail}

Finally, click on the `Save`{.action} button to save the changes to your cluster.

The cluster will be in `Updating` state during the changing period and `Active` again after the changes.

## Go further

- To have an overview of OVHcloud Managed Rancher Service, you can go to the [OVHcloud Managed Rancher Service page](https://www.ovhcloud.com/es/public-cloud/managed-rancher-service/).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Our team remains available on our dedicated Discord Channel, do not hesitate to join and reach us : <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Container and Orchestration services.

- Join our [community of users](/links/community).
