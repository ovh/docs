---
title: 'Switching from hourly to monthly billing'
excerpt: 'Find out how to change the billing rate for your Public Cloud instance'
slug: change-public-cloud-billing-rate
section: Project management
order: 4
---

**Last updated 23rd January 2023**

## Objective

When you create a Public Cloud instance, you can choose to be billed at either an hourly or monthly rate. Hourly-rate instances are billed on a pay-as-you-go basis, i.e. at the end of each month, users are billed for every commenced hour per actual resources used.<br>
Monthly-rate instances are up to 50% less expensive compared to an hourly rate for the same duration. Each month commenced will be billed at the end of the month.<br>
If you initially selected hourly billing, you can switch to monthly billing at any time.

**This guide explains how to switch from hourly to monthly billing.**

> [!warning]
>
> You cannot switch from monthly to hourly billing. If you would like to be billed at the hourly rate, you will need to delete your monthly-rate billing instance, create a new one, and select hourly billing. In this case we suggest that you do the following procedure:
>
>- Create a snapshot of your current instance.
>
>- Create a new instance based on this snapshot.
>
>- Delete the monthly instance.
>

## Requirements

- A [Public Cloud instance](https://www.ovhcloud.com/asia/public-cloud/){.external} in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)

## Instructions

### From the OVHcloud Control Panel

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}, choose the instance you would like to change the billing rate for, and open its options menu by clicking on the 3 dots on the right of the Instance. You will then be able to see the `Switch to monthly subscription`{.action} button:

![Change billing calculation](images/switch_to_monthly_updated.png){.thumbnail}

You will then need to confirm that you want to change the billing rate:

![Confirm billing calculation change](images/confirm_to_monthly_updated.png){.thumbnail}

Once you have confirmed your choice, you will immediately receive a monthly prorated bill. The next bill will include the hourly-rate part of the month (1st of the month until the change) and the new monthly fee.

### From the Openstack API

When creating an instance using the Openstack API, unless specified in the creation script, the instance is automatically created with an hourly subscription. To switch to a monthly subscription, execute the following command:

```bash
openstack server set --property ovh-monthly-instance=1 "InstanceID"
```

Replace "InstanceID" with the ID of the corresponding instance. This ID can be retrieved via the OVHcloud control panel or the OVHcloud API.

### From the OVHcloud API

Log in to the [OVHcloud API interface](https://ca.api.ovh.com/) according to the [relevant guide](../../api/first-steps-with-ovh-api/) and follow the steps below.

Use the following call:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
>

### From a Terraform script

This is possible thanks to the `metadata` [attribute](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2#metadata){.external} from the resource [openstack_compute_instance_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2){.external}:

```terraform
metadata = {
    "ovh-monthly-instance" = 1
}
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
