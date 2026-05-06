---
title: "Public VCF as-a-Service - FAQ (EN)"
excerpt: "Find the most frequently asked questions about Public VCF as-a-Service"
updated: 2025-09-30
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>

## FAQ

**Find below the most frequently asked questions about Public VCF as-a-Service**

<a name="VCDonOVH"></a>

/// details | What is Public VCF as-a-Service ?

This is a new product available in the VMware on OVHcloud solution, which provides you with a virtual datacentre powered by VMware technology, in addition to a shared infrastructure hosted and operated by OVHcloud.

Public VCF as-a-Service will be available in 3 tiers:
- Public VCF as-a-Service Standard, providing the standard VMware stack virtualization capabilities.
- Public VCF as-a-Service Advanced, including advanced networking & security capabilities on top of the Standard tier.
- Public VCF as-a-Service Premium, adding high-performance vSAN storage to the Advanced tier.

For more information, see the page [Public VCF as-a-Service - The fundamentals of Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts#key-features).

///

<a name="migrationVCD"></a>

/// details | How will the migration be carried out by OVHcloud ?

If you choose to migrate to Public VCF as-a-Service, OVHcloud will perform the migration for you, you can follow the following guide [Public VCF as-a-Service - Audit tricky use cases of migration](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_migration_use-cases) for further information on the full process.
By exception, we will not charge the new current server/host prices during the migration process. We will absorb the costs of raising the price of licenses during the migration. Whether you choose to continue using the current solution or not, you will immediately benefit from the new Public VCF as-a-Service rates from May 1st, 2024.
However, our goal is to migrate to Public VCF as-a-Service as soon as we are ready. We will notify you 1 to 2 weeks before the start of your migration, which will be carried out with no downtime. If, for technical reasons, a live migration cannot be carried out, we will discuss with you the best way to proceed.

///

<a name="migrationdata"></a>

/// details | How are you migrating my data to Public VCF as-a-Service ?

Your data remains on the Leclerc v3 *filers*. We will expose the storage to Public VCF as-a-Service just as we expose the storage to vSphere. Live migration between two hosts with the same CPU (Intel) is done via vMotion.

///

<a name="accessAPI"></a>

/// details | Can I still access vSphere ESXi and the vCenter API with Public VCF as-a-Service ?

With Public VCF as-a-Service, you cannot access the vSphere ESXi and vCenter APIs. You will have access to the Cloud Director API and can use tools like [Terraform](https://registry.terraform.io/providers/vmware/vcd/latest/docs).

///

<a name="backupTools"></a>

/// details | Can I still use products like Veeam, Naviko, Rubik to back up my VMs ?

No. With Public VCF as-a-Service, you cannot use a tool requesting access to vSphere ESXi or vCenter. However, we have set up a managed Veeam solution for setting up your backups.

///

/// details | How are backups configured with Public VCF as-a-Service ?

For backups, we will offer you **Veeam Managed Backup** with an integrated plugin for VM backups, you can follow the following guide for more information: [Public VCF as-a-Service - Backup with Veeam Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup).
For backup configuration, we offer 3 types of jobs by default with Veeam, but you can add different policies if required. You may incur fees when you enable the Veeam Data Platform plugin.
Consumption will be based on VMs and by month, and storage consumption by month.

///

<a name="rulesvSphere"></a>

/// details | Can I use rules like affinity and anti-affinity as before with vSphere ?

With Public VCF as-a-Service, you can define group affinity for virtual machines and rules like anti-affinity to isolate different virtual machines.

///

<a name="certifications"></a>

/// details | Which certifications apply to the new Public VCF as-a-Service service ?

When the service is launched, OVHcloud will not apply any specific certification to the Public VCF as-a-Service service.
However, support for HDS, ISO27001, SOC2 or PCI-DSS certifications is one of the objectives of our roadmap.

///

/// details | Can I choose the Thin or Thick disk type with Public VCF as-a-Service when I create a new virtual machine or disk ?

No. With Public VCF as-a-Service, each disk consumes storage in a Virtual Datacentre (vDC) organization. There is no associated Thin or Thick setting for a tenant.

///

<a name="windowsLicenses"></a>

/// details | Can I use my existing Windows Server licenses in Public VCF as-a-Service?

It depends on the type of license you own:

- **Software Subscription licenses**: Yes, you can use these in OVHcloud Public VCF as-a-Service.
- **Perpetual software licenses**: No, these cannot be used in OVHcloud Public VCF as-a-Service.

If your organization holds both types of licenses, only the subscription ones are eligible for use within the solution.

///

## Go further

If you require training or technical support to implement our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).