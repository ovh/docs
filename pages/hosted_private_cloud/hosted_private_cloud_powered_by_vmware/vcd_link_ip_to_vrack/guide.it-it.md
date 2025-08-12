---
title: "Public VCF as-a-Service - Linking a public IP block with vRack"
excerpt: "Find out how to link the block of public IP addresses delivered with your Public VCF as-a-Service organization and its vRack"
updated: 2025-08-11
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objective

When you order a new Public VCF as-a-Service organization, a vRack and a block of public IP addresses are delivered to you.

This IP block is not directly linked to your vRack. You will need to link it manually.

**Find out how to link the block of public IP addresses delivered with your Public VCF as-a-Service organization and its vRack.**

## Requirements

- A [Public VCF as-a-Service](/links/hosted-private-cloud/vmware-vcd) on OVHcloud solution.
- Being the technical administrator of the managed [VMware vSphere on OVHcloud](/links/hosted-private-cloud/vmware) infrastructure.
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. Click `Hosted Private Cloud`{.action}, then click the `Public VCF as-a-Service`{.action} menu, and select your organization.

    ![Managed Public VCF as-a-Service organization](images/vcd-link-ip-vrack-01.png){.thumbnail .w-640}

3. From the `General information`{.action} tab, the vRack attached to your organization will appear with an ID in the form `pn-xxxxxxx`.

    ![Public VCF as-a-Service vRack attached](images/vcd-link-ip-vrack-02.png){.thumbnail .w-640}

4. Expand the `Network`{.action} menu in the left-hand column and select your vRack `pn-xxxxxxx`.

    ![Network vRack](images/vcd-link-ip-vrack-03.png){.thumbnail .w-640}

5. Select the IP block to link to your vRack/organization and click `Add`{.action}.

    ![add IP to vRack](images/vcd-link-ip-vrack-04.png){.thumbnail .w-640}

## Go further

If you need training or technical assistance to implement our solutions, please contact your Technical Account Manager or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).