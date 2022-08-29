---
title: VMware Update Manager
excerpt: Updating your hosts with VMware Update Manager 
slug: use_vmware_update_manager
section: Maintenance and monitoring
order: 11
---

**Last Updated 9th December 2021**

## Objective

VMware Update Manager allows you to keep your hosts up to date by installing Bug Fixes and Security Patches without intervention from our team.     

> [!primary]
> vCenter updates or major updates will still require our involvement.

**This guide will present the Update Manager functionalities**

## Requirements

- being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/asia/enterprise/products/hosted-private-cloud/) to receive login credentials.
- a user account with access to vSphere (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia))

## Instructions

### Maintenance Mode

Before working on a host, you'll need to put it in maintenance mode.

Indeed, patching often requires a restart of the host and would impact your live VMs.<br>    
With that in mind, in the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.

![Maintenance](images/en01menu.png){.thumbnail}

On the left side, find your host and right-click on it.  
In the `Maintenance Mode`{.action} section, select `Enter Maintenance Mode`{.action}.

![Maintenance](images/en02maintenance.png){.thumbnail}

Make sure the box in the following window is checked and click `OK`{.action}.

![Maintenance](images/en03enter.png){.thumbnail}

Assuming DRS is implemented, any live VM will be moved.

> [!primary]
> If you customized your environment, you may have to manually move live VMs from your host before putting it in Maintenance Mode.
>

You may see the following warning:     

![Maintenance](images/en04warning.png){.thumbnail}

Your host is now showing in maintenance mode.

![Maintenance](images/en05maintenanced.png){.thumbnail}

### Update Manager

Select your host and go to the `Update`{.action} tab.

You can see a summary of what is set and its compliance.     
Before trusting what is shown, let's set the baseline against which compliance will be checked.

![Update](images/en06summary.png){.thumbnail}

In the `Attached Baselines` section, click on `Attach`{.action} then `Attach Baseline or Baseline Group`{.action}.

![Update](images/en07attach.png){.thumbnail}

There are predefined Baselines which are the recommended patching level for your hosts depending on criticality of the updates.

> [!primary]
> We'll be using the Critical Patches in this example but you can either use or create your own baselines. You can also apply several baselines to cover different scopes for a same host.

Select the required baseline and click `Attach`{.action}.

![Update](images/en08define.png){.thumbnail}

Now, the compliance summary may look very different than it used to.     

![Update](images/en09noncompliant.png){.thumbnail}

Back in the `Attached Baselines` section, check the box to select all assigned baselines and click on `Stage`{.action}.

![Update](images/en10bisstage.png){.thumbnail}

Select the host and click on `Stage`{.action} again.

![Update](images/en10terstagea.png){.thumbnail}

The staging process starts and will last for a while.

![Update](images/en10terstage.png){.thumbnail}

In the `Attached Baselines` section still, check the box to select all assigned baselines and click on `Remediate`{.action}.

![Update](images/en10remediate.png){.thumbnail}

Select the host and click on `Remediate`{.action} again.

![Update](images/en11remediate.png){.thumbnail}

The updating process starts and will last for a while. Your host will restart if needed.

![Update](images/en12remediating.png){.thumbnail}

Once the process has gone through, the compliance check will happen again (you can force it by clicking on the check compliance link) and you will see a green checkmark on the Compliance level.

![Update](images/en13compliant.png){.thumbnail}

Your host is now fully up-to-date.

Don't forget to get it out of Maintenance Mode and it will be back in production.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
