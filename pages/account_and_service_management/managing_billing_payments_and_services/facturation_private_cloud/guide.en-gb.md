---
title: Hosted Private Cloud Billing
excerpt: Explanation of the different types of billing (hourly and monthly) on the Hosted Private Cloud solution
updated: 2020-11-24
---

## Objective

The Hosted Private Cloud offer has two types of billing (hourly and monthly) for renewing and ordering additional resources.

**This guide explains how Hosted Private Cloud billing works**

## Infrastructure billing

The Hosted Private Cloud solution is billed automatically on the first day of each month.

When you renew your service, you will be charged to your OVHcloud account, and your solution will be renewed for one month. From this point onwards, there are three possible cases:

- Your OVHcloud account is not credited, but you have a payment method saved in your OVHcloud account. A debt will be created on the first day of the month, and it will be repaid automatically a few days later using your payment method.

- Your OVHcloud account has already been credited. It will be debited on the first day of the month, and no debt will be created.

- Your OVHcloud account is not credited and you do not have a payment method entered. If this is the case, you will need to make a payment before the 9th of the month, otherwise your infrastructure will have its network cut off.

If your account is credited but not credited enough, a debt will be created for the remaining amount. If a payment method is registered, the first case will apply, otherwise the last case will apply.

## Infrastructure order

When you place a new order, you pay for a full month's rental of the infrastructure. After one month's rental, a pro rata invoice will be drawn up to align the renewal date with the 1st of the month.

### Example:

You order your infrastructure on 20th May, your offer will be created on 20th May and will expire on 20th June. On June 20th, you will have a pro rata bill that covers the period from June 21st to June 30th, and your offer will expire on July 1st. It will then be renewed every first month, as explained above.

## Hourly resources

In your vSphere client, you can order resources (hosts and datastores) by the hour, via the `Add OVH Host` and `Add OVH Storage` tabs.

### Hourly billing

These hourly resources are billed on the bill for the following month.

#### Example:

If you order a host on the 25th of the month and you delete it on the 29th, you will see on the bill for the month following the hourly consumption of this host.

If you keep this host the following month, you will also see the usage from the 25th and the hourly billing will start again at zero on the first day of the month.

If you keep a 2016/2018 SDDC or Dedicated Cloud host billed on an hourly basis for an entire month, the hourly cost will be charged at the monthly price. 

If you keep a Premier range host billed on an hourly basis for an entire month, the hourly price for the resource, as shown on [this page](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/hosts/), will be applied. The hourly cost is no longer included in the monthly price.

### Host command

On your vSphere client, go to the `Add OVH Host` tab, and you will see the different types of hosts compatible with your infrastructure.

You will find a summary of their CPU/RAM resources, their availability in real time and the price per hour.

Further down, you will find a second table with the history of your hosts.

![host history](images/images-order_host_start.png){.thumbnail}

By clicking "next", you will land on the summary and confirmation request for your order.

![command summary](images/images-order_host_recap.png){.thumbnail}

Once you have clicked "next" again, the command will be carried out. You can then click on the `finish`{.action} button to return to the first page of this tab.

![command validated](images/images-order_host_finish.png){.thumbnail}

### Datastore order

The datastore command is similar to that of the hosts. Go to your vSphere client, then click on the `Add OVH Storage` tab. You will find a list of datastores compatible with your infrastructure, their size, their real-time availability, and their hourly price.

![datastore command](images/images-order_datastore_start.png){.thumbnail}

The `Global Storage` box allows you to make the datastore accessible from all the datacentres of your Hosted Private Cloud.

If you have several datacentres in your infrastructure, the datastore will be accessible from each one. However, it cannot be used on multiple, separate Hosted Private Cloud infrastructure.

## Monthly resources

You can order monthly resources via the OVHcloud Control Panel, in the `datacentre`{.action} tab of your Hosted Private Cloud.

## Monthly billing

Since switching to Agora, billing follows the principle of pro rata temporis, which applies as soon as the resource is ordered.

### Example:

If you order a resource on June 5, then you would be billed for the period from June 5 to June 30. 

### Host command

In the OVHcloud Control Panel, you can order a host by clicking the `Order host`{.action} button. A window will open, giving you the choice of hosts in your infrastructure, with CPU/RAM resources and the monthly price ex. VAT.

You can order several at once.

![host command](images/images-order_host_manager.png){.thumbnail}

By clicking next, you will have a summary of the order, and will be asked to accept the terms of use for the service.

![host command confirmation](images/images-order_host_manager_confirm.png){.thumbnail}

A purchase order will be issued, and once paid, delivery will begin.

### Datastore order

The datastore command is similar in every way to the hosts command.

In the OVHcloud Control Panel, the different types of datastores will be displayed in the window that opens, by clicking `Order a datastore`{.action}.

![datastore command](images/images-order_datastore_manager.png){.thumbnail}

Then confirmation.

![datastore order confirmation](images/images-order_datastore_manager_confirm.png){.thumbnail}

In the OVHcloud Control Panel, there is no indication of availability. If a resource is not available, the order will remain on hold, and as a result, the rental period will only start when the resource is delivered.

## Windows licenses

From your OVHcloud Control Panel, you can activate SPLA licenses, in order to [deploy Windows virtual machines with an OVHcloud license](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_template).

After clicking the `Activate SPLA`{.action} button, the following window will open:

![activate SPLA](images/images-activate_spla.png){.thumbnail}

Once you have confirmed the various conditions, you will be asked to validate a free purchase order so that the option can be activated.

This license will be billed at the beginning of the following month, based on the number of machines deployed and powered on in the previous month.

Billing is based on the pricing table available on [this page](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/images-licenses/). 

### Examples:

- You have an SDDC infrastructure, with two L hosts. On this infrastructure, you boot two Windows Standard virtual machines. In this case, you will be charged £50 ex. VAT (2 x £25).

- You have an SDDC infrastructure with two L hosts and two XL hosts. On this infrastructure, you boot two Windows Standard VMs on the L hosts. During the month, one of the virtual machines is moved onto an XL host. In this case, you will be charged €75 ex. VAT (€25 + €50).

- You have a Hosted Private Cloud infrastructure with two M hosts. On this infrastructure, you start 11 Windows Standard virtual machines, and you create a DRS rule so that the 11 virtual machines are always on the same host. In this case, you will be charged £130 excl. VAT corresponding to a "Datacenter" license

- You have a Hosted Private Cloud infrastructure with two L+ hosts. On this infrastructure, you start three Windows Standard virtual machines and one Windows Datacenter virtual machine.

There are two cases here:

1- The virtual machines remain on the same host. In this case, you will only be billed for the *Datacenter* license, i.e. £260 ex. VAT.

2- One of the virtual machines is moved to the other host, in this case you will be charged the *Datacenter* license and a *Standard* license, i.e. €300 ex. VAT (€260 + €40).

A virtual machine will be billed upon startup for an entire month, regardless of the duration of use.

## Veeam Backup

From your OVHcloud Control Panel, you can enable the Veeam option, which will allow you to back up your virtual machines.

Activation is done on the button available in the `Backup`{.action} tab. You will need to confirm the activation in the window that opens.

![activate Veeam](images/images-activate_veeam.png){.thumbnail}

Following this, a Windows virtual machine will be deployed on your infrastructure with a fixed cost of €20 ex. VAT, whatever your range and types of hosts.

Each virtual machine backed up will cost €10 ex. VAT per month.

Veeam billing is calculated at the end of the month, and is visible on the next month's bill.

### Example:

You add your first virtual machine to your backup on June 5th. At the end of June, your backup will be processed and you will be charged £30 ex. VAT on July 1st.

- Veeam is billed at €10 ex. VAT/VM from activation and the first day of the month. If you remove a virtual machine from backup later this month, it will be billed until the end of the month.

- Your virtual machine added on 5 June is removed by you on 16 July. At the end of July, your backup will be processed, and you will be billed on the 1st of August for this machine. However, you will no longer be billed on the 1st of September.

## Go further

Join our community of users on <https://community.ovh.com>.
