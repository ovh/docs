---
title: How to use IAM policies with vSphere
excerpt: "Find out how to connect your vSphere with OVHcloud IAM"
updated: 2023-10-25
---

## Objective

This guide will show you how to connect your vSphere with OVHcloud IAM.

This will allow you to:

- Log in to your vSphere using an OVHcloud account.
- Manage your users' rights levels through IAM policies.

## Requirements

- You have an [OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- You know [how to manage account users](/pages/account_and_service_management/account_information/ovhcloud-users-management).
- You know [how to configure policies for IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

## Instructions

Enabling OVHcloud IAM does not deactivate your existing Hosted Private Cloud users. You can still use them to connect directly to the different elements of your Hosted Private Cloud, without going through IAM.

OVHcloud IAM is not available on environments with advanced security and certification options (PCI-DSS, HDS, HIPAA, SNC).

### Enable IAM on your server

#### Via the Control Panel

In the user management menu of your Hosted Private Cloud environment, click on `Enable OVHcloud IAM`{.action}.

![IAM Enable](images/enable_iam.png){.thumbnail}

This operation may take up to 30 minutes.

#### Via the API

You can enable the IAM option on your Hosted Private Cloud from the OVHcloud API. Execute the following call:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/iam/enable
>

This operation may take up to 30 minutes.

### Create IAM roles

Once the option is activated, IAM roles are created by default and can be used in OVHcloud IAM access policies.

vSphere permissions for each IAM role are managed the same way as for any other Hosted Private Cloud user, via the API or in the [OVHcloud Control Panel](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights).

#### Via the Control Panel

On the user management menu, click `Create IAM role`{.action}.

![IAM users](images/create_iam_user.png){.thumbnail}

IAM roles are prefixed with "iam-".

#### Via the API

You can create new roles by executing the following call:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/iam/addRole
>


### Using IAM policies

You can create IAM policies from the [OVHcloud IAM menu](/pages/account_and_service_management/account_information/iam-policy-ui). 

Each IAM role in your Hosted Private Cloud corresponds to an IAM action in the form "pccVMware:vSphere:assumeRole?**role name**".

For example, for the **iam-admin** role, the action is "pccVMware:vSphere:assumeRole?**iam-admin**".

This action must be specified in the "Actions added manually" section of the policy creation.

![IAM Policies](images/action_on_policy.png){.thumbnail}

### Disable IAM on your server

You can disable OVHcloud IAM on your Hosted Private Cloud.

#### Via the Control Panel

In the user management menu of your Hosted Private Cloud environment, click on `Disable OVHcloud IAM`{.action}.

![IAM Disable](images/disable_iam.png){.thumbnail}

#### Via the API

Execute the following call to disable the connection with the OVHcloud IAM:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/iam/disable
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.