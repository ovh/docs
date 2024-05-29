---
title: "IAM for VMware on OVHcloud - How to create an IAM vSphere role"
excerpt: "Find out how to create an IAM vSphere role for Hosted Private Cloud - VMware on OVHcloud"
updated: 2024-05-23
---

> [!warning]
> IAM for VMware on OVHcloud is currently in beta phase.
> This guide may be incomplete. Our team remains available on our dedicated Discord channel. Please feel free to join us and contact us: <https://discord.gg/ovhcloud>. Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services.

## Objective

**In this guide, we will explain how to create an IAM role in Hosted Private Cloud - VMware on OVHcloud**.

## Requirements

- An [OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- One or more Hosted Private Cloud - VMware on OVHcloud products linked to this account (Hosted Private Cloud powered by VMware, VMware Service Pack).
- IAM enabled for your Hosted Private Cloud service - VMware on OVHcloud. Follow the steps in the guide [IAM for VMware on OVHcloud - How to enable IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation).

## Instructions

By default, you have 2 vSphere IAM roles. The creation of an additional role is therefore optional.

We will explain how to create an additional role.

### Creating an IAM role via the OVHcloud Control Panel

Log in to your [OVHcloud Control Panel](/links/manager) and click the `Hosted Private Cloud`{.action} tab.

Click the `VMware`{.action} section, select your infrastructure, then go to the `Users`{.action} tab.

Click `Create IAM Role`{.action}.

![IAM role add](images/iam_role_8.png){.thumbnail}

In the window that pops up, enter the name of your role, then click `Confirm`{.action}.

> [!primary]
> IAM roles are automatically prefixed with `iam-`.
>

![IAM role add](images/iam_role_9.png){.thumbnail}

You can then edit the group rights in the same way as with a vSphere local user.

#### Creating an IAM role via the OVHcloud API

> [!success]
> Read the guide [Getting started with OVHcloud APIs](/pages/manage_and_operate/api/first-steps) to get familiar with using OVHcloud APIv6.


Execute the following API call:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/iam/addRole
>

> [!warning]
> Make sure to replace the `serviceName` with the reference of your Hosted Private Cloud service, in the form `pcc-XXX-XXX-XXX-XXX`.

API return:

```shell
{
  "userId": null,
  "maintenanceDateTo": null,
  "parentTaskId": null,
  "datacenterId": null,
  "network": null,
  "createdBy": null,
  "state": "todo",
  "hostId": null,
  "endDate": null,
  "networkAccessId": null,
  "maintenanceDateFrom": null,
  "name": "addUser",
  "vlanId": null,
  "description": null,
  "filerId": null,
  "executionDate": "2024-05-15T14:21:17+02:00",
  "createdFrom": null,
  "taskId": 56446627,
  "orderId": null,
  "type": "generic",
  "progress": 0,
  "lastModificationDate": "2024-05-15T14:21:17+02:00"
}
```

> [!primary]
> IAM roles are automatically prefixed with `iam-`.
>

## Go further

You can now follow the steps in the guide [IAM for VMware on OVHcloud - How to associate a role with a global IAM policy](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy).

**IAM for VMware on OVHcloud - Guide index:**

- Guide 1: [IAM for VMware on OVHcloud - Overview and FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2: [IAM for VMware on OVHcloud - How to enable IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3: IAM for VMware on OVHcloud - How to create an IAM vSphere role
- Guide 4: [IAM for VMware on OVHcloud - How to associate a vSphere role with an IAM policy](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5: [IAM for VMware on OVHcloud - How to associate a user with a global IAM policy](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_user_policy)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
