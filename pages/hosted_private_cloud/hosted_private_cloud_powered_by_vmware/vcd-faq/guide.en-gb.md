---
title: "VMware Cloud Director - FAQ"
excerpt: "Find the most frequently asked questions about VCD"
updated: 2024-10-22
---

## FAQ

**Find below the most frequently asked questions about VMWare Cloud Director on OVHcloud**

> [!faq]
> **What is VMware Cloud Director on OVHcloud**? <a name="VCDonOVH"></a>
> > This is a new product available in the VMware on OVHcloud solution, which provides you with a virtual datacentre powered by VMware technology, in addition to a shared infrastructure hosted and operated by OVHcloud.
> >
> > VMware Cloud Director on OVHcloud will be available in 3 tiers:
> > - VCD Standard, providing the standard VMware stack virtualization capabilities.
> > - VCD Advanced, including advanced networking & security capabilities on top of the Standard tier.
> > - VCD Premium, adding high-performance vSAN storage to the Advanced tier.
> >
> > For more information, see the page [VMware Cloud Director - The fundamentals of VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts#key-features).
> >
> **How will the migration be carried out by OVHcloud**? <a name="migrationVCD"></a>
> > If you choose to migrate to VCD, OVHcloud will perform the migration for you, you can follow the following guide [VMware Cloud Director - Audit tricky use cases of migration](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_migration_use-cases) for further information on the full process.
> > By exception, we will not charge the new current server/host prices during the migration process. We will absorb the costs of raising the price of licenses during the migration. Whether you choose to continue using the current solution or not, you will immediately benefit from the new VCD rates from 01 May 2024.
> > However, our goal is to migrate to VCD as soon as we are ready. We will notify you 1 to 2 weeks before the start of your migration, which will be carried out with no downtime. If, for technical reasons, a live migration cannot be carried out, we will discuss with you the best way to proceed.
> >
> **How are you migrating my data to VCD**? <a name="migrationdata"></a>
> > Your data remains on the Leclerc v3 *filers*. We will expose the storage to VCD just as we expose the storage to vSphere. Live migration between two hosts with the same CPU (Intel) is done via vMotion.
> >
> **Can I still access vSphere ESXi and the vCenter API with VMware Cloud Director**? <a name="accessAPI"></a>
> > With VMware Cloud Director, you cannot access the vSphere ESXi and vCenter APIs. You will have access to the Cloud Director API and can use tools like [Terraform](https://registry.terraform.io/providers/vmware/vcd/latest/docs).
> >
> **Can I still use products like Veeam, Naviko, Rubik to back up my VMs**? <a name="backupTools"></a>
> > No. With VMware Cloud Director, you cannot use a tool requesting access to vSphere ESXi or vCenter. However, we have set up a managed Veeam solution for setting up your backups.
> >
> **How are backups configured with VCD**?
> > For backups, we will offer you **Veeam Managed Backup** with an integrated plugin for VM backups, you can follow the following guide for more information: [VMware Cloud Director - Backup with Veeam Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup).
> > For backup configuration, we offer 3 types of jobs by default with Veeam, but you can add different policies if required. You may incur fees when you enable the Veeam Data Platform plugin.
> > Consumption will be based on VMs and by month, and storage consumption by month.
> >
> **Can I use rules like affinity and anti-affinity as before with vSphere**? <a name="rulesvSphere"></a>
> > With VMware Cloud Director, you can define group affinity for virtual machines and rules like anti-affinity to isolate different virtual machines.
> >
> **Which certifications apply to the new VCD service**? <a name="certifications"></a>
> > When the service is launched, OVHcloud will not apply any specific certification to the VMware Cloud Director service.
> > However, support for HDS, ISO27001, SOC2 or PCI-DSS certifications is one of the objectives of our roadmap.
> >
> **Can I choose the Thin or Thick disk type with VMware Cloud Director when I create a new virtual machine or disk**?
> > No. With VMware Cloud Director, each disk consumes storage in a Virtual Datacentre (vDC) organization. There is no associated Thin or Thick setting for a tenant.
> >

## Go further

If you require training or technical support to implement our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Join our [community of users](https://community.ovh.com).