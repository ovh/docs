---
title: Clonar una MV (EN)
slug: clonar-una-mv
routes:
    canonical: 'https://docs.ovh.com/gb/en/private-cloud/clone-a-vm/'
excerpt: Learn two ways to clone an existing virtual machine in vSphere
section: Gestión de las máquinas virtuales
order: 07
---

**Last updated 12th January 2022**

## Objective

VMware offers the ability to clone a VM to create another one or a template.

**This guide explains how to execute those tasks.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es))

## Instructions

### Clone a VM

Cloning allows for quick and efficient deployment of similar VMs.<br>
You can clone a VM into another one or clone it into a template.<br>
Cloning to a VM is a quick way to copy a full VM and its settings.<br>
Cloning to a template is a preferred way to create a master copy that will be used to deploy many VMs.

#### Clone to VM

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.<br>
Navigate to your VM, right click on it and in the `Clone`{.action} menu, select `Clone to Virtual Machine`{.action}.

![CLONE](images/en08clonevm.png){.thumbnail}

Name the clone VM and select its datacenter location.<br>
Click `Next`{.action}.

![CLONE](images/en09clonename.png){.thumbnail}

Select the clone VM compute location.<br>
Click `Next`{.action}.

![CLONE](images/en10clonecomp.png){.thumbnail}

Select the clone VM storage location.<br>
Click `Next`{.action}.

![CLONE](images/en11clonestor.png){.thumbnail}

Select the options for your clone VM.

- Customize the operating system will trigger sysprep on first use of the VM
- Customize this virtual machine's hardware allows for modification of VM capabilities (HDD size, network elements...)
- Power on virtual machine after creation is not recommended as you may have to apply changes before startup to prevent issues (network conflicts most notably if you use fixed IPs)

Click `Next`{.action}.

![CLONE](images/en12clonecustom.png){.thumbnail}

Review and click `Finish`{.action}.

![CLONE](images/en13clonefinish.png){.thumbnail}

The cloning process will go through and the new VM is ready for you.

> [!primary]
>
> If you cloned without any customization, make sure it is safe to boot the new VM. If it is cloned from a fixed IP VM, you should disable the Network Card to avoid IP conflicts for example.

#### Clone to Template

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.<br>
Navigate to your VM, right click it and, in the `Clone`{.action} menu, select `Clone to Template`{.action}.

![TEMPLATE](images/en14clonetemp.png){.thumbnail}

Name the template VM and select its datacenter location.<br>
Click `Next`{.action}.

![TEMPLATE](images/en15clonename.png){.thumbnail}

Select the template VM compute location.<br>
Click `Next`{.action}.

![TEMPLATE](images/en16clonecomp.png){.thumbnail}

Select the template VM storage location.<br>
Click `Next`{.action}.

![TEMPLATE](images/en17clonestor.png){.thumbnail}

Review and click `Finish`{.action}.

![TEMPLATE](images/en18clonefinish.png){.thumbnail}

The cloning to template process will go through.<br>
No VM is directly visible but when deploying new VM, the clone will show in the "Deploy from Template" option.

![TEMPLATE](images/en19deploy.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
