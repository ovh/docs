---
title: Obter as informações do estado da sua instalação Nutanix (EN)
slug: nutanix-cluster-information
routes:
    canonical: 'https://docs.ovh.com/gb/en/nutanix/nutanix-cluster-information/'
excerpt: Find out how to retrieve essential information on the status of your Nutanix cluster
section: Troubleshooting
order: 01
---

**Last updated 17th February 2022**

## Objective

In order to optimise the handling of support tickets for Hosted Private Cloud powered by Nutanix, it is essential to provide OVHcloud teams with a set of information on the status of your Nutanix installation.

**This guide explains how to retrieve essential information on the status of your Nutanix cluster.**

## Requirements

- A Nutanix cluster in your OVHcloud account
- Login credentials and URL for Prism Central, received via email after the installation

## Instructions

We recommend that you retrieve **all of the information** detailed in this guide before contacting the OVHcloud support.

### Information on the AOS <a name="aos"></a>

Log in to Prism Central, open the main menu in the top left-hand corner and click on `Hardware`{.action}, then `Clusters`{.action}.

![AOS - Hypervisor](images/hardware-clusters.png){.thumbnail}

Click the `List`{.action} tab and note down the **AOS version** for the cluster concerned.

![AOS - Hypervisor](images/aos.png){.thumbnail}

### Hypervisor information <a name="hypervisor"></a>

Now open the main menu again and click on `Hardware`{.action} then `Hosts`{.action}.<br>
Select a host from the list of hosts in your cluster.

![AOS - Hypervisor](images/hypervisor01.png){.thumbnail}

Note the type of **Hypervisor** and the **Hypervisor Version**.<br>
In the example below, the hypervisor type is AHV and the hypervisor version is 20201105.1161.

![AOS - Hypervisor](images/hypervisor02.png){.thumbnail}

### Node Serial Number <a name="node-sn"></a>

From the same host summary tab, note the **Node Serial** number.

![Node Serial Number](images/serial02.png){.thumbnail}

### Nutanix Cluster Check (NCC) Health Report

The Nutanix Cluster Check (NCC) health report is a comprehensive report on the current state of the cluster, including many hardware and software control points.

This NCC report can help OVHcloud and Nutanix support carry out investigations on any faults found on your cluster.

To get this report, log into Prism Central, open the menu in the top left-hand corner and click `Hardware`{.action}, then `Clusters`{.action}.

![AOS - Hypervisor](images/hardware-clusters.png){.thumbnail}

Select the cluster concerned to access its details.
<br>From the `Summary`{.action} tab, click `Launch Prism Element`{.action}.

![Nutanix Cluster Check](images/ncc01.png){.thumbnail}

The management interface for your cluster, Prism Element, will then open.

#### Generating NCC checks

From the Prism Element interface, open the drop-down menu in the top left-hand corner, then click `Health`{.action}.

![Nutanix Cluster Check](images/ncc02.png){.thumbnail}

To the right of the window, click on `Actions`{.action}, then `Run NCC checks`{.action}.

![Nutanix Cluster Check](images/ncc03.png){.thumbnail}

In the window that appears, tick the boxes “All Checks” and “Send the cluster check report in the email” (only if you would like to [receive the report by email](#email)), then click `Run`{.action}.

![Nutanix Cluster Check](images/ncc04.png){.thumbnail}

You can track the execution of the NCC verification tasks by clicking `Tasks`{.action} from the Prism Element interface drop-down menu, or by clicking the blue icon for the current tasks and then clicking `View all tasks`{.action}.

![Nutanix Cluster Check](images/ncc05.png){.thumbnail}

Once the verification is complete, click `Succeeded`{.action} in the "Status" column. 

![Nutanix Cluster Check](images/ncc06.png){.thumbnail}

You can then download the NCC report in .txt format by clicking `Download output`{.action}.

![Nutanix Cluster Check](images/ncc07.png){.thumbnail}

Once the report has been downloaded, you can then send it to our teams along with any elements already retrieved:

- [AOS version](#aos)
- [Hypervisor type and version](#hypervisor)
- [Node serial number](#node-sn)

> [!primary]
> Use the [Plik tool](https://plik.ovhcloud.com/#/) to upload your report and send it to us as a download link. You can find more information on using the Plik tool in [this guide](https://docs.ovh.com/pt/customer/plik/).
>

#### Receiving NCC report by email <a name="email"></a>

In order to receive the NCC report by email, it is necessary to have pre-populated an SMTP server and at least one email address for notification of alerts and activity reports.

##### **Adding an SMTP server**

In the Prism Element interface, open the drop-down menu in the top left-hand corner and click `Settings`{.action}.

Scroll to the "Alerts and Notifications" submenu on the left and click `SMTP Server`{.action}.

![Nutanix Cluster Check - SMTP](images/SMTP.png){.thumbnail}

Enter the configuration details for your SMTP server, then click `Save`{.action}.

##### **Adding an email address**

In the Prism Element interface, open the drop-down menu in the top left-hand corner and click `Settings`{.action}.

Scroll to the "Alerts and Notifications" submenu on the left and click `Alert Email Configuration`{.action}.

![Nutanix Cluster Check - email](images/email.png){.thumbnail}

Check at least the "Every Single Alert" box to receive the NCC report. Enter a valid email address in the field, then click `Save`{.action}.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
