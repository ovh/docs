---
title: 'Migration uses cases in VMware Cloud Director'
excerpt: 'Find out how to check if your Hosted Private Cloud VMware on OVHcloud workflows can be migrated to VCD as well as these specific and complex cases, to guarantee security for your data'
updated: 2024-07-17
---
<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
>
> VCD on OVHcloud is currently in alpha phase. This guide may be incomplete. Our team remains available on our dedicated [Discord](https://discord.gg/ovhcloud){.external} channel.
>

## Objective

**Find out how to carry out the verification steps to migrate a managed vSphere service (HPC or PCC) within VMware Cloud Director on OVHcloud. As well as the specific difficult use cases that can't.**

## Requirements

- You must have completed the verification steps in the following guide before launching a migration to VCD.

## In practice

Welcome to the complete guide on migrating to VMware Cloud Director within the VMware on OVHcloud ecosystem.

This guide aims to address the most challenging and nuanced use cases that IT professionals may encounter during the migration process.

Whether you are moving workloads from hosted private cloud on OVHcloud environments, other cloud providers, or upgrading existing systems.

This guide provides step-by-step solutions and best practices to ensure a smooth and successful transition.

Our goal is to tackle the difficult scenarios that often complicate migration, by providing insights and strategies from real-world experiences.

With this guide, you will be equipped to navigate the complexities of VMware Cloud Director on OVHcloud migrations with confidence and efficiency.

//

### Step 1 - VCD migration requirements (mandatory)

/// details | What are the verification steps before you can migrate to VCD?

Before you can migrate to VCD, you will need to follow some steps and prerequisites. Indeed, many notions and use cases PCC are not available with VCD and must be taken into account.

As the owner of the VCD migration, we would like to configure vCenter and ESXi on the OVHcloud managed vSphere and the router on the VCD so that we can then perform a cross vCenter migration.

| Steps   | Done     | Warning | Use cases                                               | Requirements                                                                                                         | Comments                                                                                                                                                                                                                                                                                        | Référence to external documentation                                                                                                           |
|---------|----------|--------|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Step 1  | Yes/No ? | ✅      | **Multi vDC**                                           | No multi-vDC                                                                                                         | - Can only be migrated if it has only one datacentre in a PCC. <br/> - If not make shur to migrate your data in the datacenter that will be migrated.                                                                                                                                           | [Migrer une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc).    |                                                                                                                                                                                                                                                                                                                                                  
| Step 2  | -        |        | **FT (fault tolerance)**                                | No fault tolerance                                                                                                   | - Have my PCC fault tolerance ?                                                                                                                                                                                                                                                                 |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                            
| Step 3  | -        |        | **DRS Affinity/Anti affinity**                          | No DRS Affinity/Anti affinity rules                                                                                  | - Between VMs can be migrated, but between VM and host cannot be migrated (warning, be carefull with migration). <br/> - Make shur to adapt or remove them for this use case for VCD.                                                                                                           |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                               
| Step 4  | -        |        | **Special devices (CD, DVD etc..)**                     | No special devices plugged into to migrated pcc                                                                      | - All special devices (CD, DVD etc..) must be deleted or removed before migration, otherwise they will be deleted (lost) after migration.                                                                                                                                                       |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 5  | -        |        | **Datastore  clusters**                                 | Make shur all clustering rules are deleted                                                                           | - Clustering rules will be lost after migration because this notion do not exist on VCD side.                                                                                                                                                                                                   |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 6  | -        |        | **Memory over-commitment**                              | Scale up VCD                                                                                                         | - Foresee more resources on the VCD side or resize/optimize the VMs before migration on the vSphere side. <br/> Because this notion is not usable with VCD, it consume more ressources.                                                                                                         |                                                                                                                                               |                                                                                                                                            |    
| Step 7  | -        |        | **Ressource pools** (sharing)                           | Do not need ressource pools                                                                                          | - Ressource pools will be lost after migration because this notion no longer exists on the VCD side.                                                                                                                                                                                            |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 8  | -        |        | **Security options (certifications PCI-DSS, HDS, SNC)** | Do not need security options in VCD                                                                                  | - Cannot be migrated with certified PCIDSS, HDS, SNC PCC. <br/>- If migrated certifications will be lost on VCD side instances.                                                                                                                                                                 |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                    
| Step 9  | -        | ✅      | **KMS (Encrypted data)**                                | Decipher VM on PCC                                                                                                   | - Not possible to migrate with vSphere encrypted KMS related data. <br/>- It depend what kind of KMS you are using (vNKP, OKMS, external KMS). <br/> Each cases can be problematic. So for now we recommend you decipher data before migration in order to make shur it can be migrated to VCD. |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 10 | -        | ✅      | **Zerto**                                               | No Zerto                                                                                                             | - Errors with Zerto use cases, if you use Zerto, you cannot be migrated to VCD for now.                                                                                                                                                                                                         |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 11 | -        |        | **Hosts / Zpool**                                       | Release ressources (hosts + zpool) freespare and hourly before migration. <br/> Or convert it in monthly ressources. |                                                                                                                                                                                                                                                                                                 |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 12 | -        | ✅      | **HCX**                                                 | No HCX usage on pcc                                                                                                  | - If so it can not be migrated to VCD.                                                                                                                                                                                                                                                          |                                                                                                                                               |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                

///

### Frequently asked questions

#### In what order should I perform my checks to migrate to VCD?

Looking at the table above, you will notice that a number of checks need to be performed. We recommend launching these pre-checks for your Dedicated Cloud from top to bottom, as suggested in the step column. You can print this guide and tick the done box for each step.

We invite you to ask yourself questions, such as:

1. Does my VMware on OVHcloud infrastructure use Multi-VDC?

Yes, I need to migrate all my data to one datacentre in order to migrate to VCD.
No, I'll move on to the next step.

2. Does my VMware on OVHcloud infrastructure use fault-tolerance (FT)?

Yes, so I have to disable it before migrating, otherwise I won't be able to migrate to VCD.
No, I'll move on to the next step.

3. And so on...

#### Is VCD compatible with PCI-DSS, SNC, HDS certifications?

No VCD on OVHcloud is not yet compatible with PCI-DSS, SNC, HDS security options.

#### What type of migration will it be used for?

The type of migration used is hot in vCenter cross.

#### Will the Dedicated Cloud be retained after the migration?

No, all configurations and Dedicated Cloud data will be deleted after the migration.

#### Do I have access to the VCD console after the migration?

Yes, the action is performed by OVHcloud and allows you to access the data after the migration from the VCD on OVHcloud console.

#### Who does the VCD migration?

The migration is carried out by OVHcloud in full, but the necessary steps before the migration must be carried out by you. These steps will evolve as the VCD product advances, and will help to alleviate the necessary requirements

## Go further

If you require training or technical support to implement your migration with VCD, please contact your Technical Account Manager or [go here](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](<https://discord.gg/ovhcloud>).

Join and chat with our [OVHcloud user community](/links/community).
