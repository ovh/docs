---
title: "Public VCF as-a-Service - User roles (EN)"
excerpt: "Explore the different user roles available and learn how to use them within your Public VCF as-a-Service organisation."
updated: 2026-04-23
---

## Objective

**This guide explains the different user roles available in your Public VCF as-a-Service organisation.**

## Requirements

- A [Public VCF as-a-Service](/links/hosted-private-cloud/vmware-vcd) solution.
- Technical Administrator access to your [VMware vSphere on OVHcloud](/links/hosted-private-cloud/vmware) solution.

<!-- CP-NAV-START:privatecloud-vmware-vcf -->
---

### OVHcloud Control Panel Access

- **Direct link:** [VMware Cloud Foundation](/links/control-panel/privatecloud-vmware-vcf)
- **To access your services:** `Hosted Private Cloud`{.action} > `Public VCF as-a-Service`{.action} > Select your VCF service

---
<!-- CP-NAV-END:privatecloud-vmware-vcf -->

## Instructions

For more granular control and greater flexibility in managing your resources, the following roles are available:

### Organization Administrator

- User and group management: Can add, edit and delete users and groups within the organisation.
- Resource management: Can manage resources allocated to the organisation, such as vApps, VMs, networks and catalogues.
- Role assignment: Can assign roles and permissions to users and groups.
- Parameter configuration: Can configure organisation settings, such as backup policies, quotas and security settings.
- Full access: Has full access to all features and resources in the organisation, except those reserved for System Administrators.

### Catalog Author

- Publish catalogues: Can create and publish catalogues.
- Manage media: Can add and manage ISO media.
- Create vApps: Can create vApps from templates.
- No VM management: Cannot directly manage existing VMs.
- Use case: Ideal for users who need to manage catalogues and templates without accessing VMs.

### vApp Author

- Create and manage vApps: Can create, edit and delete vApps.
- Add VMs: Can add VMs to vApps.
- Configure VMs: Can configure VM settings (CPU, memory, etc.).
- No catalogue management: Cannot manage catalogues or media.
- Use case: Perfect for users who need to create and manage vApps and VMs without accessing catalogues.

### vApp User

- Use vApps and VMs: Can start, stop, suspend and resume VMs.
- Console access: Can access VM consoles.
- No vApp management: Cannot create or edit vApps.
- No VM management: Cannot configure VM settings.
- Use case: Suited for users who need to use vApps and VMs without modifying them.

### Console Access Only

- Console access: Can only access the consoles of authorised VMs and vApps.
- No vApp or VM management: Cannot start, stop or configure VMs.
- No catalogue management: Cannot manage catalogues or media.
- Use case: Useful for users who only need to access VM consoles for specific tasks.

### Procedure for assigning a role

1. Log in to the VCF as-a-Service portal as an Organization Admin.
2. Go to the "Administration" section.
3. Select "Users" and choose the user to edit.
4. Assign the desired role from the list of available roles.

## Go further

If you need training or technical assistance to implement our solutions, contact your Technical Account Manager or request a custom analysis of your project from our [Professional Services](/links/professional-services) team experts.

Ask questions and interact with the Hosted Private Cloud team on [OVHcloud Discord](https://discord.gg/ovhcloud).

Join our [community of users](/links/community).
