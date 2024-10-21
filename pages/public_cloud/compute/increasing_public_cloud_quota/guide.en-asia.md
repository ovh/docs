---
title: 'How to increase Public Cloud quotas'
excerpt: 'Find out how to apply for a Public Cloud quota extension'
updated: 2024-05-21
---

## Objective

By default, the Public Cloud projects as well as the resources total (RAM, CPU, disk space, number of instances, etc.) you can use are limited for security reasons.

To be able to use additional resources and projects, the quotas need to be increased.

**This guide explains how to request and increase a Public Cloud quota in the OVHcloud Control Panel.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- A [valid payment method](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) registered in your OVHcloud account

## Instructions

### Increasing your resources quota

In compliance with internal criteria (seniority, existence of paid invoices, etc.), you are now free to request quota increases for your Public Cloud projects resources directly from your OVHcloud Control Panel.

You can increase your resources quota manually or automatically.

> [!primary]
> If you need to increase your quota and the `Increase your quota!`{.action} button is not available in your Control Panel, you can contact our support teams.
>

#### Increasing your resources quota manually

This procedure allows you to manually request a quota increase and validate it with an upfront payment (Public Cloud credit).

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) and open your `Public Cloud`{.action} project.

In the left-hand sidebar, click on `Quota and Regions`{.action}.

![access quota](images/raisepciquota1-2023.png){.thumbnail}

This page provides an overview of regions and their available resources. A warning will be displayed next to a resource as soon as 80% of its current quota is reached.

Click on the `Increase your quota!`{.action} button.

![raise-pci-quota](images/raisepciquota2023.png){.thumbnail}

Next, click on the drop down arrow next to "Select the volume" to view the list of quotas currently available to upgrade your resources to. This section also shows the amount to pay in order to benefit from these resources.

![select quota](images/selectquotas.png){.thumbnail}

The table below shows the resources you get for each quota:

|Quota|Instances|CPU/Cores|RAM (MB)|Volume Size (GB)|Volumes|Snapshots|Backup Size (GB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|10 VMs|10|34|430080|20000|100|600|60000|15|5|2|
|20 VMs|20|40|430080|20000|200|1200|120000|30|10|4|
|50 VMs|50|64|507904|20000|500|3000|300000|75|25|10|
|100 VMs|100|128|1015808|40000|1000|6000|600000|300|10|10|
|200 VMs|200|512|4063232|80000|2000|12000|1200000|600|50|50|

Once you have selected your volume, click on `Confirm`{.action}. Your payment will be processed as soon as possible.

> [!warning]
> Please note that the billing process is immediate.
>
> Once you click on the `Confirm`{.action} button, the order is automatically created and charged to your account.
>

#### Increasing your resources quota automatically with the "Auto-scaling quota" feature

This option allows you to request an automatic and gradual increase of your resources quota. Your quota will be increased depending on your usage, and based on a certain number of internal criteria.

This is not an instant process and the resources quota are increased over the course of time.

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) and open your `Public Cloud`{.action} project.

In the left-hand sidebar, click on `Quota and Regions`{.action}.

Click on the `?`{.action} button for more information on this feature, then click on the `toggle icon`{.action} to switch the status to "**Enabled**".

![auto scaling](images/autoscaling2023.png){.thumbnail}

Once done, auto-scaling will be enabled for your project and your resources quota will be increased over the course of time.

### Increasing the quota of your Public Cloud projects

If you have reached the maximum number of Public Cloud projects authorised in your Control Panel, and you would like to create additional projects, please submit a request to our support teams.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
