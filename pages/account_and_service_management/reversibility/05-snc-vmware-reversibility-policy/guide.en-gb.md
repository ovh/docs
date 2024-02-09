---
title: Reversibility policy for the service VMware on OVHcloud under SecNumCloud qualification 
updated: 2024-02-09
---

## Objective

This document is the reversibility policy of the Product [VMware on OVHcloud under SecNumCloud qualification ](https://www.ovhcloud.com/fr/enterprise/products/secnumcloud/).

This policy aims to implement the general reversibility principles and our compliance with the [SWIPO IaaS Code of Conduct for Cloud providers](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Feature List

The features of SecNumCloud Private Cloud are divided into three categories: :

- The [main features](#fonctionnalites-principales) of which we guarantee the ability to migrate.
- The [OVHcloud implémentation](#ovhcloud-implementation), whose migration will require adaptations to a new environment.
- The [specific features](#fonctionnalites-specifiques), whose migration as such is impossible to guarantee as they are linked to the OVHcloud environment or specific developments.
- 
### Main features <a name="Main-features"></a>

|Function|Description|Available format|
|---|---|---|
|Compute (Software-defined Compute)|A set of virtual machines managed by VMware vSphere|Each file format supported by vSphere, such as .vmsd, .vmx, ...|
|Storage (Software-defined Storage)|A set of datastores attached to virtual machines.|N/A|
|Network (Software-defined Network)|Network virtualization service based on NSX|N/A|

The following migration templates and available documentation apply to all features described in the table above.

|Migration model|Documentation available|
|---|---|
|**Inbound migration**:<br>- Subscribe to a Private Cloud SecNumCloud
 project.<br>- Order the appropriate number of hosts and datastores on the project to get a capacity comparable to that of the original infrastructure.<br>-Migrate using a specialized tool (Veeam, API, Zerto ...) or migrate manually.<br>-Use the SecNumCloud zone's VPN Gateway or a custom VPN solution (e.g. NSX or virtual machine third party solution) to ensure data encryption when migrating from an external network.<br>-Then enable VM encryption and vSAN Cluster datastores using the vNKP software brick or your own KMS (compatible with the KMIP protocol). <br> -Use the SPN (Secure Private Network) to connect SecNumCloud services inside a hosting site. <br>-Use the inter DC SPN solution to connect your qualified infrastructure hosted in other hosting sites covered by the SecNumCloud qualification at OVHcloud <br><br>**Outbound migration **: <br> - -Plan the target environment capabilities compared to original environment. <br>**- Encrypted data migration scenario with vNKP :** Set up an encrypted link between the OVHcloud hosting site and destination site. Export the vNKP key of the OVHcloud hosting environment. Import the vNKP key into the remote site’s vSphere environment. Migrate your data cold via a manual copy between the two sites, or hot-migrate your data (via a failover mechanism) using a compatible third-party tool supported by the two providers. <br>**-Customer-specific KMS encrypted data scenario: ** Set up an encrypted link between the OVHcloud hosting site and destination site. Configure your KMS on the remote site’s vSphere environment. Migrate your data cold via a manual copy between the two sites, or hot-migrate your data (via a failover mechanism) using a compatible third-party tool supported by the two providers. <br>- Migrate via a specialized tool (e.g. Veeam, Zerto ...)  |The documentation [vSphere SecNumCloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc_getting_started) applies as soon as the service is delivered, to secure the connection and an end-to-end data encryption. Following this, the [documentation vSphere standard](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-CEFF6D89-8C19-4143-8C26-4B6D6734D2CB.html) applies.<br><br>[Deploy an OVF Linux, Windows Server et Windows SQL Server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_template)<br><br>[Deploy a virtual machine with vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/deploiement_d_une_machine_virtuelle)<br><br>[Create a cluster and activate EVC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc)<br><br>[Virtual machine encryption interoperability](https://docs.vmware.com/fr/VMware-vSphere/8.0/vsphere-security/GUID-C0AF1F3A-67B4-41A6-A933-7E52A3603D9D.html)<br><br>[Back up a vSphere Native Key Provider](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-E0EB371A-F6E4-463B-A1E9-9D4DDCAA039D.html)|

### OVHcloud implementation <a name="ovhcloud-implementation"></a>

|Function|Description|Available format|Migration model|Documentation available|
|---|---|---|---|---|
|VPN Gateway|An IPsec VPN gateway that connects external networks to the SecNumCloud infrastructure through an encrypted tunnel |N/A|**Inbound migration**: Subscribe to and use the VPN Gateway service included in the qualified scope.  <br><br>**Outbound migration**: Use the vRack service included with other OVHcloud services, or take note of the network architecture and replicate it with VLANs and another encrypted tunnel.|[Introduction to SecNumCloud Connectivity](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-overview)<br><br>[Le VPN-SPN concept overview](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-vpn-spn)<br><br>[Personalized VPN via NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_configurer_un_vpn_via_une_gateway_edge)|
|SPN|A private network that connects the resources and services available in the SecNumCloud infrastructure to one or more sites in the SecNumCloud zone. You can also use it to connect other OVHcloud services, or services hosted with a third party via the VPN Gateway.|N/A|**Inbound migration**: Subscribe to and use the SPN service included in the qualified scope.<br><br>**Outbound migration**: Take note of the network architecture and replicate it with the concepts of subnets and routing.|[SPN introduction and concepts ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)<br><br>[SPN connector](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn-connector)|
|SPN Inter-DC|An encrypted link between two sites hosting SecNumcloud infrastructure, enabling SPNs to be connected.|N/A|**Incoming migration**: Subscribe to and use the Inter-DC SPN service included in the qualified scope.<br><br>**Outbound migration**: Configure your IP routing between two sites hosting SecNumcloud infrastructure outside of OVHcloud.|[SPN InterDC option](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)|
|vROps|Solution standard de Monitoring VMware.|N/A|**Migration entrante**: vROps est inclus par défaut avec chaque Hosted Private Cloud.<br><br>**Migration sortante**: Installer et configurer vROps dans un environnement vSphere.|[First connection on vROps](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrops_introduction)|
|Managed Veeam backup|Solution de sauvegarde en tant que service pour vos VMs|VBK, VIB, VBM|**Migration entrante**: Activez une option de sauvegarde Veeam dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) mais notez que l'import des données ne sera pas possible <br><br>**Migration sortante**: Cette fonctionnalité n’est pas prise en charge actuellement.Le client a la possibilité d’exporter ses données primaires (hors données sauvegardées) et de configurer une solution de sauvegarde de son choix sur le site de destination.|[Activer et utiliser Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service)|
|Zerto|Plateforme de continuité et de reprise d'activité après sinistre.|N/A|**Migration entrante**: Activez l'option Zerto  dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)  <br><br>**Migration sortante**: Exportez les paramètres VPG de Zerto et importez-les dans le nouvel environnement compatible.|[Mise en oeuvre de Zerto Virtual Replication pour votre PRA](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service) <br><br> [Exporter les paramètres VPG Zerto(EN)] (https://help.zerto.com/kb/000003672)|



### Fonctionnalités spécifiques <a name="fonctionnalites-specifiques"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|Monitoring vScope|Outil de monitoring de l'état et de l'utilisation des ressources conçu par OVHcloud pour Hosted Private Cloud.|N/A|N/A ; vScope est une interface statique.|[Comment utiliser vScope](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_vscope)|
|Anti-DDoS|L'anti-DDoS est un ensemble d'équipements et de moyens mis en place pour absorber les attaques par déni de service. Il comprend une analyse du trafic, « l’aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud.|N/A|**Migration entrante**: Le système anti-DDoS est un composant de notre infrastructure, activé par défaut. Aucune action n'est requise. Il est activé uniquement sur les IP publiques et ne couvre pas les liaisons du service OVHcloud Connect.<br><br>**Migration sortante**: Commandez et configurez un anti-DDoS avec le nouvel hébergeur.|[Protection anti-DDoS OVHcloud](https://www.ovh.com/fr/anti-ddos/)<br><br>[Technologie anti-DDoS](https://www.ovh.com/fr/anti-ddos/technologie-anti-ddos.xml)|
|OVHcloud Connect|Service de connectivité, via des points de présence (POP), qui permet de connecter un réseau d’entreprise hébergé à l’extérieur (site Tier) à un service d’infrastructure fourni par OVHcloud, à travers un réseau privé et sans passer par un accès Internet |N/A|**Migration entrante**: Une fois le service livré et après réception de la clé de service (key service), configurez-le à travers d’interface disponible sur votre espace client OVHcloud<br><br>**Migration sortante**:Utilisez les ports de connexion réseau mis à votre disposition et POP OVHcloud  ou POP Provider pour reproduire une nouvelle architecture réseau.|[Mise en service de OVHcloud Connect direct ](/pages/network/ovhcloud_connect/occ-direct-control-panel)<br><br>[Mise en service de OVHcloud Connect Provider ](/pages/network/ovhcloud_connect/occ-provider-control-panel)|
|Sécurité avancée pour SDDC|Ensemble de fonctionnalités améliorant la sécurité, telle que l'implémentation de Sécurité Zero Trust, MFA, IDS pour l'accès vSphere...|N/A|**Migration entrante**: Ces fonctionnalités sont disponibles par défaut sur les infrastructures qualifiées SecNumCloud<br><br>**Migration sortante**: Commandez et configurez les fonctionnalités de sécurité appropriées avec le nouveau fournisseur.|[SDDC Advanced Security Pack](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/sddc/)|

### Liste des architectures

Les informations relatives à l'architecture (serveurs, stockage, etc.) sont centralisées et visibles dans la console vSphere.

### Outils de migration disponibles

[Convertir une machine physique/virtuelle en une infrastructure Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vcenter_converter).

### Services Partenaires

Les partenaires OVHcloud sont répertoriés avec le mot clé « Cloud Migration » dans le [répertoire dédié](https://partner.ovhcloud.com/fr/directory/). Dans le cadre de migrations SecNumCloud, il est recommandé d’utiliser un opérateur de confiance ayant un visa de sécurité de l’ANSSI (PAMS ou PACS).

### Coût et frais

Aucune facturation supplémentaire n'est prévue de la part de OVHcloud pour les fonctionnalités de migration répertoriées ici.

### Conservation des données après la résiliation du contrat

Les données sont conservées jusqu'à la fin du mois suivant la résiliation du service, puis supprimées définitivement conformément aux engagements des conditions de service SecNumCloud..

## Aller plus loin

[Migrer une infrastructure vers Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration).
