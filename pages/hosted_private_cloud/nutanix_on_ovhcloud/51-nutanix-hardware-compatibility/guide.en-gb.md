---
title: 'Nutanix hardware compatibility - OVHcloud configurations'
excerpt: 'Detailed overview of qualified hardware components for OVHcloud Nutanix platforms'
updated: 2025-07-17
flag: hidden
---

## Objective

**This guide lists the hardware components validated for OVHcloud Nutanix infrastructure, including the OVHcloud-Scale-G2-EMR-01 and OVHcloud-HGR-G2-EMR-01 references.**

Each configuration includes chassis, motherboard, CPU, storage, and network elements, grouped by platform reference.

## Requirements

- Access to OVHcloud Nutanix technical specifications
- Basic understanding of hardware compatibility layers
- Familiarity with OVHcloud hardware used in OVHcloud data centers

The following software versions are currently validated by OVHcloud for Nutanix environments:

| Product/Feature | Version | Comment |
|-----------------|---------|---------|
| AOS             | 7.3.X     | **LTS (Long-Term Support)** — Once validated by OVHcloud |
| AOS             | 7.X       | **LTS (Long-Term Support)** — Once validated by OVHcloud |
| AOS             | 6.10.X    | **LTS (Long-Term Support)** — Once validated by OVHcloud |

For more information, refer to the following links:

- [Nutanix - Upgrade paths](https://portal.nutanix.com/page/documents/upgrade-paths)
- [Nutanix / OVHcloud compatibility list](https://portal.nutanix.com/page/documents/list?type=compatibilityList)

## Harware compatibility

> [!success]
> Dual sourcing has been secured for all components of hardware platforms. This ensures continuity of supply, reduces risk of shortages, and strengthens infrastructure resilience.

### OVHcloud-HGR-G1-CL-01

This 1U configuration supports Cascade Lake CPUs and SAS SSD-only storage, designed for HGR G1 nodes.

<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr><th>Component Name</th><th>Component</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="1">Chassis</td><td>Inspur NF5280M5</td></tr>
    <tr><td rowspan="2">Motherboard</td><td>YZMB-00882-104</td></tr>
    <tr><td>YZMB-00882-10E</td></tr>
    <tr><td rowspan="3">Processor</td><td>CPU Intel Cascade Lake 6226R</td></tr>
    <tr><td>CPU Intel Cascade Lake 6242R</td></tr>
    <tr><td>CPU Intel Cascade Lake 6248R</td></tr>
    <tr><td rowspan="1">Memory</td><td>There is no memory limitation due to Nutanix Certification. Any equivalent memory compliant with motherboard can be used.</td></tr>
    <tr><td rowspan="1">OS Drive</td><td>Intel D3-S4510 Sata SSD 480gb - ref. SSDSCKKB480G801</td></tr>
    <tr><td rowspan="3">Storage Drive (Only SAS SSD)</td><td>Samsung SAS SSD PM1643a 3.84TB ref MZILT3T8HBLS/007</td></tr>
    <tr><td>Samsung SAS SSD PM1643 3.84TB ref MZILT3T8HALS-00007</td></tr>
    <tr><td>WDS SS530 3.84TB ref WUSTR1538ASS201</td></tr>
    <tr><td rowspan="1">Storage Controller</td><td> Jbod LSI 12gbps Pcie 8x 6xSFF-8643 9305-24I</td></tr>
    <tr><td rowspan="1">NIC</td><td>ConnectX-5 NIC card for OCP2.0 25GbE dual-port SFP28, PCIe3.0 x8</td></tr>
  </tbody>
</table>

### OVHcloud-Scale-G2-EMR-01

This 1U configuration supports Emerald Rapids CPUs and NVMe-only storage, designed for SCALE-iX nodes.

<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr><th>Component Name</th><th>Component</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="1">Chassis</td><td>1U 21" OVHcloud</td></tr>
    <tr><td rowspan="1">Motherboard</td><td>Asrock SPC741D8QM3-NL-E</td></tr>
    <tr><td rowspan="3">Processor</td><td>CPU INTEL Emerald Rapids XEON6526Y</td></tr>
    <tr><td>CPU INTEL Emerald Rapids XEON6542Y</td></tr>
    <tr><td>CPU INTEL Emerald Rapids XEON6554S</td></tr>
    <tr><td rowspan="1">Memory</td><td>There is no memory limitation due to Nutanix Certification. Any equivalent from NF5280M5 BOM is usable.</td></tr>
    <tr><td rowspan="1">OS Drive</td><td>2.5in SSD NVMe 960GB 64gbps PM9A3 512n Samsung ref MZQL2960HCJR-00A07</td></tr>
    <tr><td rowspan="1">OS Drive (alt.)</td><td>2.5in SSD NVMe 960GB 64gbps 7450PRO 512n Micron ref MTFDKCC960TFR-1BC15ABYY</td></tr>
    <tr><td rowspan="3">Storage Drive (Only NVME)</td><td>2.5in SSD NVMe 1.92TB 64gbps PM9A3 512n Samsung ref MZQL21T9HCJR-00A07</td></tr>
    <tr><td> 2.5in SSD NVMe 3.84TB 64gbps PM9A3 512n Samsung ref MZQL23T8HCLS-00A07</td></tr>
    <tr><td> 2.5in SSD NVMe 7.68TB 64gbps PM9A3 512n Samsung ref MZQL27T6HBLA-00A07</td></tr>
<tr><td rowspan="2">NIC</td><td>NVIDIA 2xSFP28 25GbE OCP 3.0 ref CX-6 LX CRYPTO - SECURE BOOT 900-9X625-0083-SB0</td></tr>
<tr><td>BROADCOM 2xSFP28 25GbE PCIe 4.0 x8 ref P225P BCM957414A4142CC</td></tr>
    <tr><td rowspan="1">Power Supply</td><td> AC 1U T4 850W FSP YH5851-1EBR2A0D</td></tr>
    <tr><td rowspan="1">TPM</td><td>TPM ASROCK SPI 2.0</td></tr>
  </tbody>
</table>

### OVHcloud-HGR-G2-EMR-01

This 1U configuration supports Emerald Rapids CPUs and NVMe-only storage, designed for HGR G2 nodes.

<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr><th>Component Name</th><th>Component</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="1">Chassis</td><td>COMPAL SR220-2</td></tr>
    <tr><td rowspan="1">Motherboard</td><td>LGA4677-X COMPAL IER70 FERA1-E</td></tr>
    <tr><td rowspan="3">Processor</td><td>Intel Emerald Rapids 5515+</td></tr>
    <tr><td>Intel Emerald Rapids 6526Y</td></tr>
    <tr><td>Intel Emerald Rapids 6542Y</td></tr>
    <tr><td rowspan="1">Memory</td><td>There is no memory limitation due to Nutanix Certification. Any equivalent from NF5280M5 BOM is usable.</td></tr>
    <tr><td rowspan="1">OS Drive</td><td>2.5in SSD NVMe 960GB 64gbps PM9A3 512n Samsung ref MZQL2960HCJR-00A07</td></tr>
    <tr><td rowspan="3">Storage Drive (Only NVME)</td><td>2.5in SSD NVMe 1.92TB 64gbps PM9A3 512n Samsung ref MZQL21T9HCJR-00A07</td></tr>
    <tr><td> 2.5in SSD NVMe 3.84TB 64gbps PM9A3 512n Samsung ref MZQL23T8HCLS-00A07</td></tr>
    <tr><td> 2.5in SSD NVMe 7.68TB 64gbps PM9A3 512n Samsung ref MZQL27T6HBLA-00A07</td></tr>
    <tr><td rowspan="1">NIC</td><td> NVIDIA 2xSFP28 25GbE OCP 3.0 ref CX-6 LX CRYPTO - SECURE BOOT 900-9X625-0083-SB0</td></tr>
  </tbody>
</table>

## Go further

If you need training or technical assistance to implement our solutions, please contact your Technical Account Manager or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).
