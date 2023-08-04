---
title: How to use IAM policies with vSphere (EN)
excerpt: "Find out how to connect your vSphere with OVHcloud IAM"
updated: 2023-07-28
---

> [!warning]
>
> This feature is currently in beta version. You can find more information on <https://labs.ovhcloud.com/en/>.
>

## Objective

This guide will show you how to connect your vSphere with OVHcloud IAM.

This will allow you to:

- Log in to your vSphere using an OVHcloud account.
- Manage your users' rights levels through IAM policies.

## Requirements

- You have an [OVHcloud account](/pages/account/customer/ovhcloud-account-creation).
- You know [how to manage account users](/pages/account/customer/ovhcloud-users-management).
- You know [how to configure policies for IAM](/pages/account/customer/iam-policy-ui).

## Instructions

Enabling OVHcloud IAM does not deactivate your existing Hosted Private Cloud users. You can still use them to connect directly to the different elements of your Hosted Private Cloud, without going through IAM.

OVHcloud IAM is not available on environments with advanced security and certification options (PCI-DSS, HDS, HIPAA, SNC).

### Enable IAM on your server

You can enable the IAM option on your Hosted Private Cloud from the OVHcloud API. Execute the following call:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/iam/enable
>

This operation may take up to 30 minutes.

### Create IAM roles

Once the option is activated, IAM roles are created by default and can be used in OVHcloud IAM access policies.

You can create new roles by executing the following call: 

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/iam/addRole
>

The management of vSphere permissions for each IAM role is carried out as for any other Hosted Private Cloud user, via the API or from the [OVHcloud Control Panel](/pages/cloud/private-cloud/change_users_rights).

### Using IAM policies

You can create IAM policies from the [OVHcloud IAM menu](/pages/account/customer/iam-policy-ui). 

Each IAM role in your Hosted Private Cloud corresponds to an IAM action in the form "pccVMware:vSphere:assumeRole?**role name**".

For example, for the **iam-admin** role, the action is "pccVMware:vSphere:assumeRole?**iam-admin**".

This action must be specified in the "Actions added manually" section of the policy creation.

![IAM Policies](images/action_on_policy.png){.thumbnail}

### Disable IAM on your server

Execute the following call to disable the connection with the OVHcloud IAM:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/iam/disable
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.