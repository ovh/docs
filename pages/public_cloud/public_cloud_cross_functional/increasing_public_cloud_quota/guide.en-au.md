---
title: 'How to increase Public Cloud quotas'
excerpt: 'Find out how to request a quota increase for your Public Cloud resources (RAM, CPU, disk space, instances) directly from the OVHcloud Control Panel.'
updated: 2026-05-05
---

## Objective

By default, the Public Cloud projects as well as the resources total (RAM, CPU, disk space, number of instances, etc.) you can use are limited for security reasons.

To use additional resources and projects, the quotas need to be increased.

**This guide explains how to request and increase a Public Cloud quota in the OVHcloud Control Panel.**

## Requirements

- A [valid payment method](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) registered in your OVHcloud account

## Instructions

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

In the left-hand sidebar, click on `Quota & Regions`{.action} under **Settings**.

![Quota & Regions page showing current project quotas by region](images/raisepciquota1.png){.thumbnail}

This page shows a summary of your project's current quotas by region. A warning appears as soon as a resource reaches 80% of its quota.

### Increasing your resources quota

In compliance with internal criteria (seniority, existence of paid invoices, etc.), you can request quota increases for your Public Cloud project resources directly from your OVHcloud Control Panel.

> [!primary]
>
> First-time Public Cloud users get [A$300 of free credit](/links/public-cloud/free-trial) automatically activated upon project creation, valid for one month. Because quota increase eligibility depends on criteria such as account seniority and paid invoices, free trial users may have limited quota increase options until their first invoice has been settled.
>

You can increase your resources quota manually or automatically.

#### Increasing your resources quota automatically with the "Auto-scaling quota" feature

This option allows you to request an automatic and gradual increase in your resource quota. The quota will be adjusted based on your actual usage **if you exceed 60% of your current quota for 30 consecutive days**, as well as a set of internal and financial criteria.

> [!primary]
>
> This process is not suitable for rapid quota increases.
>

At the top right of the page, the **Auto-scaling quota** option is available:

- To learn more about this feature, click on the `?`{.action} next to this option.
- Enable the option by clicking on the button to the right of this option. The status will change from *Disabled* to *Enabled*.

![Auto-scaling quota toggle button set to Enabled](images/autoscaling.png){.thumbnail}

Once activated, auto-scaling will gradually increase your project's quota based on your actual needs.

#### Increasing your resources quota manually

> [!primary]
>
> If you need to increase your quota and the `Increase your quota!`{.action} button is not available in your Control Panel, click on the `Contact support`{.action} button.
>

![Contact Support button visible in the Control Panel quota page](images/contact_support_quota.png){.thumbnail}

This procedure allows for a rapid and significant increase in your quotas (e.g., rapid scaling, GPU instances, etc.). This method is based on the immediate purchase of credit, from which all cloud consumption will be automatically deducted.

You can purchase different amounts of credit.

Click on the `Increase your quota!`{.action} button.

![Increase your quota button in the Public Cloud quota section](images/raisepciquota2.png){.thumbnail}

Next, click on the drop-down arrow next to `Select the volume`{.action} to view the list of quotas currently available to upgrade your resources to. This section also shows the amount to pay for these resources.

![Dropdown list showing available quota tiers with associated costs](images/selectquotas.png){.thumbnail}

The table below shows the resources obtained for each quota:

|Quota|Instances|CPU/Cores|RAM (GB)|Volume Size (TB)|Volumes (maximum number)|Backups|Backup Size (TB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|20 VMs|20|40|430|20|200|1200|120|30|10|4|
|50 VMs|50|64|507|20|500|3000|300|75|25|10|
|100 VMs|100|128|1015|40|1000|6000|600|300|50|10|
|200 VMs|200|512|4063|80|2000|12000|1200|600|50|50|

Once you have selected your volume, click on `Confirm`{.action}. Your payment will be processed as soon as possible.

> [!warning]
>
> **Any manual quota increase will be billed immediately.**
>
> After clicking on the `Confirm`{.action} button, the order is automatically created and the amount will be debited from your default payment method.
>

For a more detailed view of your resources, go to the [Horizon interface](https://horizon.cloud.ovh.net/auth/login/). Once logged in, click on `Project`{.action}, then on `Overview`{.action}.

### Increasing the quota of your Public Cloud projects

There are two main situations where you may need a quota adjustment:

1. **Maximum number of projects reached**: If you have reached the maximum number of Public Cloud projects allowed in your customer account and want to create new ones, you must submit a request to our support team.

2. **Other types of quota requests**: For any other limits (CPU, RAM, storage, etc.) or specific needs related to your Public Cloud projects, you can also contact support to request an increase.

> [!primary]
>
> Quota requests are processed manually by our team. Processing times may vary depending on the complexity of the request. We recommend that you submit your request as soon as possible to avoid any delays in your projects.

To speed up processing, please specify the following in your request:

- The type of quota to be increased (number of projects, resources, etc.);
- The intended use and justification for the increase;
- The desired period or duration of the increase.

### Specific quotas and special resources

For certain resources or services, specific quotas may apply. For more information:

**S3 quota**<sup>1</sup>: See the official documentation "[Object Storage - Technical Limitations](/pages/storage_and_backup/object_storage/s3_limitations)".

**Managed Kubernetes Service (MKS) quota**: See the official documentation "[ETCD Quotas, usage, troubleshooting and error](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error)".

## Go further

Join our [community of users](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
