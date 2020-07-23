---
title: 'Information regarding cloud billing options'
slug: information-on-cloud-billing-options
excerpt: 'Find out more about the different billing options for Public Cloud products'
section: 'Project management'
order: 2
---

**Last updated 09th January 2020**

## Introduction
One of the main principles of cloud computing is based on **pay-as-you-go** billing, where customers pay for what they use.

The standard billing option for renting computing resources is generally based on a contract with a pre-determined length (usually 12 months) and a commitment between two parties during this period. However, cloud computing offers a more flexible billing system — **one where you pay at the end of the month for the time during which you have used the resources**.

This system is similar to the one used by certain telephone operators, where they bill at the end of the month for the number of minutes used. Here, OVHcloud bills the hours for which the server, storage space or another element of the service is used.

This guide details the billing design of OVHcloud Public Cloud solutions.


## General design
Our goal is to provide a billing system that matches the way our customers use this service as closely as possible. To achieve this, we needed to make the billing granular. This is why the unit system is usually the amount of time, counted in hours in this case.

For each resource to be billed, an hour counter starts when the resource is created, and stops when the resource is removed. This works in accordance with the principle of each hour of use being billed.

At the end of the month, each counter is multiplied by the hourly rate for the resource. To get the overall bill total, simply add up all of the counters charged for.

Each cloud project has its own bill, which totals up all of the resources billed during the month. This bill is generated on the first day of the following month.


## Example
This example might provide a clear explanation of how this works.

- a user launches a B2-15 instance on the 04th day of the month, at 09:40
- on the 08th day of the month at 10:00, they add 250GB additional volume (Classic Volume)
- they delete all of it on the 12th day of the same month at 16:30, once they have finished what they needed to do with these resources

For the instance, from the 04th day of the month at 09:40 until the 12th of the month at 16:30, there are 176 hours of resource usage. They are billed at 0.111 euros per hour.

For the storage, from the 08th day of the month at 10:00 until the 12th of the month at 16:30, there are 103 hours of resource usage. One GB of Classic Volume costs 0.04 euros/month (0.0000555556 euros/hour).

At the end of the month, the bill will total up to:

- 176 x 0.111
- 103 x 250 x 0.0000555556

ie. €20.97.



> [!primary]
>
> The prices listed here are not contractual, and are only used
> to provide an example.
> 


## View your bills.
To view the bills for a project, go to the `Public Cloud`{.action}(1) tab in the OVHcloud Control Panel. Next, select the public cloud project in the left-hand menu (2), then click `Billing Control`{.action} (3) and `Log`{.action}(4).


![public-cloud](images/pci-billing-information1.png){.thumbnail}

In this screen, you can:

- view details on the resources by expanding each section
- browse logs by going to the previous or next month


## View your current resource usage.
You can also view your current resource usage (for the ongoing month) by clicking `Current resource usage`{.action}.


![public-cloud](images/pci-billing-information2.png){.thumbnail}

The first part, **"Already billed"**, includes resources billed by the month (see instances billed at the lower monthly rate). These resources are the exception to the “pay-as-you-go” method. Commitments are billed on a monthly basis and payable in advance. This means that on the 01st of the month, the user pays to use their resources for the 30 days that follow. The commitment option offers the user a cost advantage. In this resource usage screen, you have already paid for the resources on the 1st day of the ongoing month.

The second part, **"Upcoming bills"**, includes pay-as-you-go resources. It lists your resource usage from the first of the month up to that day.

You can also have an `Estimation of your next bill`{.action} (for the 01st of the next month) based on a forecast of resource usage taking into account the current situation, and predicted usage for the remainder of the month.



> [!primary]
>
> This information is for information purposes only, as the situation may
> change at any time following your actions (adding or removing
> resources).
> 


![public-cloud](images/pci-billing-information3.png){.thumbnail}

If you would like to receive alerts when the forecast of your resource usage exceeds a set threshold, you can configure this via this screen. When your forecasted usage exceeds the set threshold, you will receive an email to alert you of this.


## Instances
The prices of cloud instances (or cloud servers) are listed in the OVHcloud Control Panel before you get started with an instance. You can also view prices on the [pricing page](https://www.ovh.com/world/public-cloud/prices/){.external}.



> [!primary]
>
> The bandwidth for instances is not billed.
> 

Each instance model has two different billing methods: hourly and monthly.


### Hourly price
This pricing follows the pay-as-you-go model explained earlier.

These instances are paid for on the first day of the following month, for the hours of resource usage over the course of the previous month.


### Monthly price
This pricing offers a price reduction of around 50% compared to hourly billing. This is typical cloud billing.

These instances are paid on the first day of each month, for rental until the first day of the following month. They are paid in advance for the entire month, even if the instance is deleted before the end of the month.

When you first order an instance with monthly pricing, a first bill is generated, corresponding to the monthly price calculated on a pro rata basis for the period between the order date, and the end of the month.



> [!alert]
>
> The billing for an instance stops when the instance is deleted
> permanently. If the instance has a status such as “stopped” or “paused”, the billing counter will continue
> to work because the instance has not been deleted.
> With both billing methods, the service is billed by the amount of time during which it is used.
> 


## Storage
Storage solutions are generally charged on the basis of a GB per month price. To see the price per GB per hour, simply divide the per-month price by 720, the average number of hours in a month. The result of this calculation will be the cost of an element stored per hour. 

The calculation is: ( Price per GB per month / 720 ) x number of hours x number of GB

The number of GB per hour corresponds to the maximum number of GB stored over the course of the hour. For example, if a user has 15GB at 16:20, 17GB at 16:40, and 14GB at 16:50, OVHcloud will charge 17GB for the 16:00 - 17:00 period.

The storage prices are available directly on the [OVHcloud website](https://www.ovh.com/world/public-cloud/storage/){.external}.


### Additional volumes 
The additional volumes are simply billed per GB provisioned, with a different price depending on the range.


### Backups of additional volumes
Backups of additional volumes are billed the same way as the volumes themselves.


### Snapshots of additional volumes
Snapshots of additional volumes are billed the same way as the volumes themselves.


### Instance snapshots and images
Both snapshots and images of instances (excluding the catalogue of images supplied by OVHcloud) are billed at a flat rate per GB per month, regardless of the original instance and image type. Go to the [pricing page](https://www.ovh.com/world/public-cloud/instances/prices/){.external} to view prices.


### Object storage
Two elements are billed for object storage:

- the storage of the objects themselves, i.e. the volume actually used in GB
- outgoing traffic, i.e. the volume of data sent from the service, contained in HTTP body



> [!primary]
>
> Outgoing traffic between the object storage service and the instances is
> billed the same way as outgoing traffic sent via the internet.
> 



> [!alert]
>
> Viewing objects via the OVHcloud Control Panel is also considered
> to be outgoing traffic.
> 


### Archives
Three elements are billed for archive storage:

- the storage of the archives themselves, i.e. the volume actually used in GB
- incoming traffic, i.e. the volume of data sent to the service, contained in HTTP body
- outgoing traffic, i.e. the volume of data sent from the service, contained in HTTP body



> [!primary]
>
> Outgoing traffic between the archive service and the instances is
> billed the same way as outgoing traffic sent via the internet.
> 

## Go further
Join our community of users on <https://community.ovh.com/en/>.
