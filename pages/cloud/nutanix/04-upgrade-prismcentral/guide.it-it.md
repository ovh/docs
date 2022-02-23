---
title: Upgrade del cluster Nutanix (EN)
slug: nutanix-upgrade-prismcentral
routes:
    canonical: 'https://docs.ovh.com/gb/en/nutanix/nutanix-upgrade-prismcentral/'
excerpt: Find out how to upgrade your Nutanix Cluster
section: Iniziare a utilizzare
order: 04
---

**Last updated 11th January 2022**

## Objective

Once an upgrade of one Nutanix software component is needed, let's review all the main steps to apply it.

**This guide explain the steps to upgrade your Nutanix Cluster.**

## Requirements

- A Nutanix Cluster in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Instructions

### Official documentation for upgrades

You can either look for this document: "The Nutanix upgrades: Life Cycle Manager" or visit the official Nutanix website for archived documents: [Software Documentation: Upgrade Guide](https://portal.nutanix.com/page/documents/details?targetId=Acropolis-Upgrade-Guide-v5_19:Acropolis-Upgrade-Guide-v5_19){.external}.

### Backup

As for any action on the configuration of the cluster system, it is strongly recommended to create a new backup or check the latest one.

### LCM inventory

As documented in the official upgrade process, you should first launch a LCM Inventory to get a view of the software status of the Nutanix Cluster.

![First LCM Inventory](images/lcm_first_time.png){.thumbnail}

Proceed to run the first or a new Inventory update:

![Proceed LCM Inventory](images/lcm_inventory_proceed.png){.thumbnail}

After a pre-check phase, you will receive the results as soon as the inventory is done. The available upgrades will be displayed:

![LCM Result Upgrades available](images/lcm_upgrade_available.png){.thumbnail}

Select the upgrades you want or update all components. You can also decide to manage those upgrades directly as explained in the next two sections.

### Prism Central upgrade

Once you are certain that you can launch the upgrade, open the `Prism Central Settings`{.action}:

![Prism Central Settings](images/menu_prism_setting.png){.thumbnail}

If there are available upgrades, you can select the ones you need to apply, then choose to only do the pre-check or upgrade immediately:

![Prism Available upgrade](images/required_upgrade.png){.thumbnail}

The pre-check will be executed in any case:

![Prechecks upgrade](images/preupgrade_checks.png){.thumbnail}

If you have selected the upgrade process, the process itself will be initiated:

![Upgrade start](images/upgrade_started.png){.thumbnail}

During the execution, you might lose the connection to Prism Central:

![Prism disconnection](images/loosing_connection_prism_central.png){.thumbnail}

After a few minutes, you can connect back to the Prism Central interface, and you can then check or wait for the end of the upgrade process:

![End of upgrade](images/upgrade_finished.png){.thumbnail}

### NCC upgrade

If there is one or more NCC upgrades available, you can download the ones you need and then launch the upgrade:

![Select the NCC release](images/ncc_available_upgrade.png){.thumbnail}

### Validation

#### LCM Inventory update

Update the LCM inventory. If no upgrades are available anymore, then only the list of installed software components releases will be presented:

![Up-to-date Nutanix cluster](images/lcm_result_after_upgrades.png){.thumbnail}

#### Prism Central upgrade validation

You can also check that the Nutanix Cluster Prism Central is up-to-date if there is no upgrade available for your cluster: Click on the `Prism Central Settings`{.action} and open `Upgrade Prism Central`{.action}. There should be no available versions:

![No Prism Central upgrade](images/no_upgrade.png){.thumbnail}

#### NCC upgrade validation

You can also check that the Nutanix Cluster NCC is up-to-date if there is no upgrade available for your cluster: Click on the `Prism Central Settings`{.action} and open `Upgrade Prism Central`{.action}. There should be no available versions in the NCC tab:

![No NCC upgrade](images/ncc_upgrade_done.png){.thumbnail}

## Go further

[OVHcloud documentation](https://docs.ovh.comit/nutanix/)

[Nutanix official documentation](https://www.nutanix.com/){.external}

Join our community of users on <https://community.ovh.com/en/>.
