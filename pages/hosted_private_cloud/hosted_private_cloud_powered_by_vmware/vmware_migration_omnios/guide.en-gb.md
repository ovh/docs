---
title: Migrating OmniOS datastores
excerpt: Identify your OmniOS datastores and migrate your virtual machines to supported storage using VMware Storage vMotion.
updated: 2025-09-18
---

## Objective

This guide explains how to identify OmniOS datastores in your Hosted Private Cloud and migrate the virtual machines they contain to supported datastores using **VMware Storage vMotion**.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- Administrator access to your vSphere environment (via vScope)
- Basic knowledge of VMware vSphere and Storage vMotion
- Available supported datastores as migration targets

> [!primary]
> OVHcloud will provide the necessary freespare storage space as part of the migration process led by our teams.

## Instructions

### Step 1 - Identify OmniOS datastores

1. Log in to the [OVHcloud Control Panel](/links/manager).

2. Click on `Hosted Private Cloud`{.action} and select your PCC service.

    ![Access Hosted Private Cloud](images/omnios-01.png){.thumbnail}

3. Go to the `Datacenters`{.action} tab.

    ![Datacenters page](images/omnios-02.png){.thumbnail}

4. On the datacenter page, open the `Datastores`{.action} tab.

    ![Datacenters page](images/omnios-03.png){.thumbnail}

    - Datastores with the prefix **tete-xxxx** are **OmniOS** datastores.
    - Datastores with the prefix **cluster-xxxx** are **FreeBSD** datastores.

    ![Datastore list with prefixes](images/omnios-04.png){.thumbnail}

    > [!primary]
    > OmniOS datastores must be migrated to supported storage to ensure service continuity.

5. Before starting a vMotion, make sure that you have a supported datastore available in your infrastructure.

    - If you need to add a datastore, refer to the [Add a datastore](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_add_storage) guide.
    - If you need to remove an unused datastore, refer to the [Delete a datastore](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_datastore) guide.

    In some cases, OVHcloud may already have provided you with a supported datastore. Check your configuration before moving on to the next step.

### Step 2 - Access vSphere through vScope

1. From the PCC `General information`{.action} tab, scroll down to **Management interfaces**.

2. Click on `vScope`{.action}.

    ![General information tab with vScope](images/omnios-05.png){.thumbnail}

    You are now connected to the vSphere interface and can perform a Storage vMotion.

### Step 3 - Migrate a virtual machine with Storage vMotion

> [!warning]
> 
> Performing a Storage vMotion may cause temporary performance disruptions.
> 
> For best results:
>
> - Reduce I/O activity during migration (stop intensive workloads if possible).
> - Plan the migration during off-peak or non-working hours.
> - Always ensure you have at least two supported datastores in your infrastructure for resiliency.

1. In vSphere, right-click the virtual machine to migrate and select `Migrate...`{.action}.

    ![Start migration](images/omnios-06.png){.thumbnail}

2. Choose **Change storage only**.

    ![Select storage only](images/omnios-07.png){.thumbnail}

3. Select a supported datastore as the destination.

    ![Select datastore](images/omnios-08.png){.thumbnail}

    You can also use the `Advanced`{.action} option to migrate only one disk if the VM has multiple disks.

    ![Advanced datastore selection](images/omnios-09.png){.thumbnail}

4. Click `Finish`{.action} to start the migration.

    ![Finalize migration](images/omnios-10.png){.thumbnail}

5. Monitor the migration progress in the **Recent Tasks** panel. Duration depends on VM size, IO activity, and available bandwidth.

    ![Migration progress](images/omnios-11.png){.thumbnail}

> [!primary]
> After migration, consolidate your workloads on supported datastores. Always keep at least two active datastores in your infrastructure to ensure service availability and redundancy.

### Step 4 - Migrate VM templates

1. In vSphere, go to `VM template in folders`{.action} to display the templates stored on your datastore.

    ![VM template in folders](images/template-01.png){.thumbnail}

2. Right-click each template and select `Remove from Inventory`{.action}.

    ![Remove from Inventory](images/template-02.png){.thumbnail}

    > [!warning]
    > The template is removed from the inventory but remains stored in the datastore.
    > You can retrieve it and move it to another datastore, or delete it if no longer needed.

3. Go to the `Files`{.action} tab, select the template folder, and click `Move to`{.action}.

    ![Move template files](images/template-03.png){.thumbnail}

4. Choose the destination datastore and confirm with `OK`{.action}.

    ![Confirm datastore](images/template-04.png){.thumbnail}

5. Once the files are moved, go to the new datastore, select the template file, and click `Register VM`{.action}.

    ![Register VM](images/template-05.png){.thumbnail}

6. Follow the wizard: click `Next`{.action} → `Next`{.action} → `Finish`{.action}.

    ![Wizard step - Next](images/template-06.png){.thumbnail}

    ![Wizard step - Next](images/template-07.png){.thumbnail}

    ![Wizard step - Finish](images/template-08.png){.thumbnail}

7. The template will appear in the `VM & templates`{.action} view.

    ![VM & templates view](images/template-09.png){.thumbnail}

## Migration timeline

The migration schedule is as follows:

- **September 2025**: Official communication sent to all customers.
- **October to November 2025**: Period during which the customer can perform the migration autonomously.
- **November to December 2025**: 40-day window for OVHcloud-led migration. A notification email is sent 3 to 4 days before the maintenance operation.
- **January 2026**: Start of billing for the new datastore.
- **February 2026**: Closure of the migration process.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).