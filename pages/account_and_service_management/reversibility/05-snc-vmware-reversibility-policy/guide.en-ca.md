---
title: Reversibility policy for the service VMware on OVHcloud under SecNumCloud qualification 
updated: 2023-09-28
---

## Objective

This document is the reversibility policy of the Product [VMware on OVHcloud under SecNumCloud qualification ](https://www.ovhcloud.com/en-ca/enterprise/products/secnumcloud/).

This policy aims at implementing the general reversibility principles and our compliance with the [SWIPO IaaS Code of Conduct for Cloud providers](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Features list

The features of SecNumCloud Hosted Private Cloud are divided into three categories: :

- The [main features](#fonctionnalites-principales) for which we guarantee the ability to migrate.
- The [OVHcloud implementation](#ovhcloud-implementation) which migration will require adaptations to a new environment.
- The [specific features](#fonctionnalites-specifiques) which migration as such is impossible to guarantee as they are linked to the OVHcloud environment or specific developments.

### Main features <a name="Main-features"></a>

|Feature|Description|Available format|
|---|---|---|
|Compute (Software-defined Compute)|A set of virtual machines managed by VMware vSphere|Each file format supported by vSphere, such as .vmsd, .vmx, ...|
|Storage (Software-defined Storage)|A set of datastores attached to virtual machines.|N/A|
|Network (Software-defined Network)|Network virtualization service based on NSX|N/A|

The following migration templates and available documentation apply to all features described in the table above.

|Migration model|Documentation available|
|---|---|
|**Inbound migration**:<br>- Subscribe to a Hosted Private Cloud SecNumCloud
 project.<br>- Order the appropriate number of hosts and datastores on the project to get a capacity comparable to that of the original infrastructure.<br>-Migrate using a specialized tool (Veeam, API, ...) or migrate manually.<br>-Use the SecNumCloud zone's VPN Gateway or a custom VPN solution (e.g. NSX or virtual machine third party solution) to ensure data encryption when migrating from an external network.<br>-Then enable VM encryption and vSAN Cluster datastores using the vNKP software brick or your own KMS (compatible with the KMIP protocol). <br> -Use the SPN (Secure Private Network) to connect SecNumCloud services inside a hosting site. <br>-Use the inter DC SPN solution to connect your qualified infrastructure hosted in other hosting sites covered by the SecNumCloud qualification at OVHcloud <br><br>**Outbound migration**: <br> - -Plan the target environment capabilities compared to the original environment. <br>**- Encrypted data migration scenario with vNKP :** Set up an encrypted link between the OVHcloud hosting site and destination site. Export the vNKP key of the OVHcloud hosting environment. Import the vNKP key into the remote site’s vSphere environment. Cold-migrate your data via a manual copy between the two sites, or hot-migrate your data (via a failover mechanism) using a compatible third-party tool supported by the two providers. <br>**-Customer-specific KMS encrypted data scenario:** Set up an encrypted link between the OVHcloud hosting site and destination site. Configure your KMS on the remote site’s vSphere environment. Cold-migrate your data via a manual copy between the two sites, or hot-migrate your data (via a failover mechanism) using a compatible third-party tool supported by the two providers. <br>- Migrate via a specialized tool (e.g. Veeam, ...)  |The documentation [vSphere SecNumCloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc_getting_started) applies as soon as the service is delivered, to secure the connection and an end-to-end data encryption. Following this, the [documentation vSphere standard](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-CEFF6D89-8C19-4143-8C26-4B6D6734D2CB.html) applies.<br><br>[Deploy an OVF Linux, Windows Server et Windows SQL Server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_template)<br><br>[Deploy a virtual machine with vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/deploiement_d_une_machine_virtuelle)<br><br>[Create a cluster and activate EVC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc)<br><br>[Virtual machine encryption interoperability](https://docs.vmware.com/fr/VMware-vSphere/8.0/vsphere-security/GUID-C0AF1F3A-67B4-41A6-A933-7E52A3603D9D.html)<br><br>[Back up a vSphere Native Key Provider](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-E0EB371A-F6E4-463B-A1E9-9D4DDCAA039D.html)|

### OVHcloud implementation <a name="ovhcloud-implementation"></a>

|Feature|Description|Available format|Migration model|Documentation available|
|---|---|---|---|---|
|VPN Gateway|An IPsec VPN gateway that connects external networks to the SecNumCloud infrastructure through an encrypted funnel |N/A|**Inbound migration**: Subscribe to and use the VPN Gateway service included in the qualified scope. <br><br>**Outbound migration**: Use the vRack service included with other OVHcloud services, or take note of the network architecture and replicate it with VLANs and another encrypted funnel.|[Introduction to SecNumCloud Connectivity](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-overview)<br><br>[VPN-SPN concept overview](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-vpn-spn)<br><br>[Personalized VPN via NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_configurer_un_vpn_via_une_gateway_edge)|
|SPN|A private network that connects the resources and services available in the SecNumCloud infrastructure to one or more sites in the SecNumCloud zone. You can also use it to connect other OVHcloud services, or services hosted with a third party via the VPN Gateway.|N/A|**Inbound migration**: Subscribe to and use the SPN service included in the qualified scope.<br><br>**Outbound migration**: Take note of the network architecture and replicate it with the concepts of subnets and routing.|[SPN introduction and concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)<br><br>[SPN connector](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn-connector)|
|SPN Inter-DC|An encrypted link between two sites hosting the SecNumcloud infrastructure, enabling SPNs to be connected.|N/A|**Incoming migration**: Subscribe to and use the Inter-DC SPN service included in the qualified scope.<br><br>**Outbound migration**: Configure your IP routing between two sites hosting the SecNumcloud infrastructure outside of OVHcloud.|[SPN InterDC option](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)|
|vROps|A standard VMware monitoring solution.|N/A|**Inbound migration**: vROps is included by default with each Hosted Private Cloud SecNumCloud <br><br>**Outbound migration**: Install and configure vROps in a vSphere environment.|[First connection on vROps](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrops_introduction)|
|Managed Veeam backup|Backup as a service solution for your VMs|VBK, VIB, VBM|**Inbound migration**: Enable a Veeam backup option in the [OVHcloud Control Panel](/links/manager). Please note that it will not be possible to import the data. <br><br>**Outgoing migration**: This feature is not currently supported. Customers can export their primary data (excluding backed-up data) and configure a backup solution of their choice at the destination site.|[Enable and use Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service)|

### Specific features  <a name="specific-features"></a>

|Feature|Description|Available Formats|Migration model|Documentation available|
|---|---|---|---|---|
|vScope monitoring|Resource usage and status monitoring tool designed by OVHcloud for Hosted Private Cloud SecNumCloud.|N/A|N/A - vScope is a static interface.|[How to use vScope](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_vscope)|
|Anti-DDoS|Anti-DDoS is a set of equipment and means put in place to absorb denial-of-service attacks. It includes traffic analysis, “vacuuming” to a specialized network, and mitigation, powered by VAC technology developed by OVHcloud.|N/A|**Inbound migration**: The anti-DDoS system is a component of our infrastructure, enabled by default. No action is required. It is only enabled on public IPs and does not cover links to the OVHcloud Connect service.<br><br>**Outgoing migration**: Order and configure an anti-DDoS protection with the new hosting provider. |[OVHcloud anti-DDoS Protection](https://www.ovhcloud.com/en-ca/security/anti-ddos/)|
|OVHcloud Connect|A connectivity service, via points of presence (POPs), that connects a company network hosted outside (Tier site) to an infrastructure service provided by OVHcloud, through a private network and without passing through internet access. |N/A|**Incoming migration**: Once the service has been delivered, and after you have received the service key, configure it via the interface available in the OVHcloud Control Panel.<br><br>**Outbound migration**: Use the network connection ports provided and OVHcloud POP or POP Provider to reproduce a new network architecture |[OVHcloud Connect direct commissioning ](/pages/network/ovhcloud_connect/occ-direct-control-panel)<br><br>[OVHcloud Connect Provider implementation ](/pages/network/ovhcloud_connect/occ-provider-control-panel)|
|Advanced security for SDDC|Set of features enhancing security, such as the implementation of Zero Trust Security, MFA, IDS for vSphere access...|N/A|**Incoming migration**: These features are available by default on SecNumCloud-qualified infrastructure.<br><br>**Outbound Migration**: Order and configure the appropriate security features with the new provider.|[SDDC Advanced Security Pack](https://www.ovhcloud.com/en-ca/enterprise/products/hosted-private-cloud/safety-compliance/sddc/)|

### List of architectures

Information on the architecture (servers, storage, etc.) is centralized and visible in the vSphere console.

### Available Migration Tools 

[Convert a physical/virtual machine into a cloud infrastructure](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vcenter_converter).

### Partner Services

OVHcloud partners are listed with the keyword “Cloud Migration” in the [dedicated directory](https://partner.ovhcloud.com/en-ca/directory/). For SecNumCloud migrations, it is recommended to use a trusted operator with an ANSSI security visa (PAMS or PACS).

### Cost and fees

No additional billing is planned from OVHcloud for the migration features listed here.

### Data retention after contract termination

The data is stored until the end of the month following the termination of the service, then permanently deleted in accordance with the commitments of the SecNumCloud Terms of Service.

## Go further

[Migrate an infrastructure to Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration)
