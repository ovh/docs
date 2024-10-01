---
title: Politique de réversibilité pour la solution VMware on OVHcloud sous la qualification SecNumCloud
updated: 2023-09-28
---

## Objectif

Ce document est la politique de réversibilité du produit [VMware on OVHcloud sous la qualification SecNumCloud](https://www.ovhcloud.com/fr-ca/enterprise/products/secnumcloud/).

Cette politique vise à mettre en oeuvre les principes généraux de réversibilité et notre conformité au [code de conduite IaaS SWIPO pour les fournisseurs Cloud](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Liste des fonctionnalités

Les fonctionnalités Hosted Private Cloud sont divisées en trois catégories :

- Les [fonctionnalités principales](#fonctionnalites-principales) pour lesquelles nous garantissons la capacité de migrer.
- L'[implémentation OVHcloud](#ovhcloud-implementation), dont la migration nécessitera des adaptations à un nouvel environnement.
- Les [fonctionnalités spécifiques](#fonctionnalites-specifiques), dont la migration en tant que telle est impossible à garantir car elle est liée à l'environnement OVHcloud ou à des développements spécifiques.

### Fonctionnalités principales <a name="fonctionnalites-principales"></a>

|Fonction|Description|Formats disponibles|
|---|---|---|
|Compute (Software-defined Compute)|Ensemble de machines virtuelles gérées par VMware vSphere|Chaque format de fichier pris en charge par vSphere, tel que .vmsd, .vmx, ...|
|Stockage (Software-defined Storage)|Ensemble de datastores rattachés aux machines virtuelles.|N/A|
|Réseau (Software-defined Network)|Service de virtualisation réseau basé sur NSX|N/A|

Les modèles de migration suivants et la documentation disponible s'appliquent à toutes les fonctionnalités décrites dans le tableau ci-dessus.

|Modèle de migration|Documentation disponible|
|---|---|
|**Migration entrante**:<br>- Souscrivez un projet Hosted Private Cloud SecNumCloud <br>- Commandez le nombre approprié d'hôtes et de datastores sur le projet pour obtenir une capacité comparable à celle de l'infrastructure d'origine.<br>- Migrez à l'aide d'un outil spécialisé (Veeam, API, ...) ou manuellement<br>- Utilisez le service VPN Gateway de la zone SecNumCloud ou une solution VPN personnalisée (Ex : NSX ou solution tierce en machine virtuelle) afin de garantir le chiffrement des données lors de la migration depuis un réseau extérieur.<br>- Activez ensuite le chiffrement des VMs et les datastores du Cluster vSAN à l’aide de la brique logicielle vNKP ou votre propre KMS (compatible avec le protocole KMIP). <br>- Utilisez le SPN (Secure Private Network) afin de connecter les services SecNumCloud à l’intérieur d’un site d’hébergement.<br>- Utilisez la solution SPN inter DC pour connecter vos infrastructures qualifiées hébergées dans d’autres sites d’hébergement couverts par la qualification SecNumCloud chez OVHcloud.<br><br>**Migration sortante**: <br> - Planifiez les capacités de l'environnement cible comparativement à l'environnement d'origine. <br>**- Scénario de migration des données chiffrées avec vNKP:** Mettez en place une liaison chiffrée entre le site d’hébergement d’OVHcloud et le site de destination. Exportez la clé vNKP de l’environnement d’hébergement OVHcloud. Importez la clé vNKP sur l’environnement vSphere du site distant. Migrez vos données à froid via une copie manuelle entre les deux sites, ou bien migrez vos données à chaud (via un mécanisme de bascule) à l’aide d’un outil tier compatible et supporté par les 2 fournisseurs.<br>**- Scénario des données chiffrées à l’aide d’un KMS propre au client:** Mettez en place une liaison chiffrée entre le site d’hébergement d’OVHcloud et le site de destination. Configurez votre KMS sur l’environnement vSphere du site distant.Migrez vos données à froid via une copie manuelle entre les deux sites, ou bien migrez vos données à chaud (via un mécanisme de bascule) à l’aide d’un outil tier compatible et supporté par les 2 fournisseurs.<br>- Migrez via un outil spécialisé (par exemple Veeam, ...) |La documentation [vSphere SecNumCloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc_getting_started) s'applique dès la livraison du service pour sécuriser la connexion et le chiffrement des données de bout en bout. Suite à cela, la [documentation vSphere standard](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-CEFF6D89-8C19-4143-8C26-4B6D6734D2CB.html) s'applique.<br><br>[Déployer un template OVF Linux, Windows Server et Windows SQL Server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_template)<br><br>[Déploiement d'une machine virtuelle avec vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/deploiement_d_une_machine_virtuelle)<br><br>[Création de cluster et activation EVC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc)<br><br>[Interopérabilité du chiffrement des machines virtuelles](https://docs.vmware.com/fr/VMware-vSphere/8.0/vsphere-security/GUID-C0AF1F3A-67B4-41A6-A933-7E52A3603D9D.html)<br><br>[Back up a vSphere Native Key Provider](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-E0EB371A-F6E4-463B-A1E9-9D4DDCAA039D.html)|

### Implémentation OVHcloud <a name="ovhcloud-implementation"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|VPN Gateway|Une passerelle VPN IPsec qui permet de connecter, à travers un tunnel chiffré, les réseaux externes à l’infrastructure SecNumCloud |N/A|**Migration entrante**: Souscrivez et utilisez le service VPN Gateway inclus dans le périmètre qualifié.  <br><br>**Migration sortante**: Utilisez le service vRack inclus dans d’autres services OVHcloud ou prenez note de l’architecture réseau et reproduisez-là avec des VLAN et un autre tunnel chiffré.|[Présentation de SecNumCloud Connectivity](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-overview)<br><br>[Le VPN-SPN Présentation et concept](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-vpn-spn)<br><br>[VPN personnalisé via la solution NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_configurer_un_vpn_via_une_gateway_edge)|
|SPN|Un réseau privé qui permet de connecter les ressources et services disponibles dans l’infrastructure SecNumCloud sur un ou plusieurs sites en zone  SecNumCloud . Il permet aussi de connecter d’autres services OVHcloud ou hébergés chez un tiers en passant par la VPN Gateway.|N/A|**Migration entrante**: Souscrivez et utilisez le service SPN inclus dans le périmètre qualifié.<br><br>**Migration sortante**: Prenez note de l’architecture réseau et reproduisez-là avec les concepts de sous-réseaux et routage|[SPN présentation et concepts ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)<br><br>[SPN connector](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn-connector)|
|SPN Inter-DC|Liaison chiffrée entre deux sites hébergeant des infrastructures SecNumcloud et permettant de connecter les SPN.|N/A|**Migration entrante**: Souscrivez et utilisez le service SPN Inter-DC inclus dans le périmètre qualifié.<br><br>**Migration sortante**: Configurez votre routage IP entre deux sites  hébergeant des infrastructures SecNumcloud hors OVHcloud.|[Option SPN InterDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)|
|vROps|Solution standard de Monitoring VMware.|N/A|**Migration entrante**: vROps est inclus par défaut avec chaque Hosted Private Cloud.<br><br>**Migration sortante**: Installer et configurer vROps dans un environnement vSphere.|[First connection on vROps](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrops_introduction)|
|Managed Veeam backup|Solution de sauvegarde en tant que service pour vos VMs|VBK, VIB, VBM|**Migration entrante**: Activez une option de sauvegarde Veeam dans l'[espace client OVHcloud](/links/manager) mais notez que l'import des données ne sera pas possible <br><br>**Migration sortante**: Cette fonctionnalité n’est pas prise en charge actuellement.Le client a la possibilité d’exporter ses données primaires (hors données sauvegardées) et de configurer une solution de sauvegarde de son choix sur le site de destination.|[Activer et utiliser Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service)|

### Fonctionnalités spécifiques <a name="fonctionnalites-specifiques"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|Monitoring vScope|Outil de monitoring de l'état et de l'utilisation des ressources conçu par OVHcloud pour Hosted Private Cloud.|N/A|N/A ; vScope est une interface statique.|[Comment utiliser vScope](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_vscope)|
|Anti-DDoS|L'anti-DDoS est un ensemble d'équipements et de moyens mis en place pour absorber les attaques par déni de service. Il comprend une analyse du trafic, « l’aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud.|N/A|**Migration entrante**: Le système anti-DDoS est un composant de notre infrastructure, activé par défaut. Aucune action n'est requise. Il est activé uniquement sur les IP publiques et ne couvre pas les liaisons du service OVHcloud Connect.<br><br>**Migration sortante**: Commandez et configurez un anti-DDoS avec le nouvel hébergeur.|[Protection anti-DDoS OVHcloud](https://www.ovhcloud.com/fr-ca/security/anti-ddos/)|
|OVHcloud Connect|Service de connectivité, via des points de présence (POP), qui permet de connecter un réseau d’entreprise hébergé à l’extérieur (site Tier) à un service d’infrastructure fourni par OVHcloud, à travers un réseau privé et sans passer par un accès Internet |N/A|**Migration entrante**: Une fois le service livré et après réception de la clé de service (key service), configurez-le à travers d’interface disponible sur votre espace client OVHcloud<br><br>**Migration sortante**:Utilisez les ports de connexion réseau mis à votre disposition et POP OVHcloud  ou POP Provider pour reproduire une nouvelle architecture réseau.|[Mise en service de OVHcloud Connect direct ](/pages/network/ovhcloud_connect/occ-direct-control-panel)<br><br>[Mise en service de OVHcloud Connect Provider ](/pages/network/ovhcloud_connect/occ-provider-control-panel)|
|Sécurité avancée pour SDDC|Ensemble de fonctionnalités améliorant la sécurité, telle que l'implémentation de Sécurité Zero Trust, MFA, IDS pour l'accès vSphere...|N/A|**Migration entrante**: Ces fonctionnalités sont disponibles par défaut sur les infrastructures qualifiées SecNumCloud<br><br>**Migration sortante**: Commandez et configurez les fonctionnalités de sécurité appropriées avec le nouveau fournisseur.|[SDDC Advanced Security Pack](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/safety-compliance/sddc/)|

### Liste des architectures

Les informations relatives à l'architecture (serveurs, stockage, etc.) sont centralisées et visibles dans la console vSphere.

### Outils de migration disponibles

[Convertir une machine physique/virtuelle en une infrastructure Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vcenter_converter).

### Services Partenaires

Les partenaires OVHcloud sont répertoriés avec le mot clé « Cloud Migration » dans le [répertoire dédié](https://partner.ovhcloud.com/fr-ca/directory/). Dans le cadre de migrations SecNumCloud, il est recommandé d’utiliser un opérateur de confiance ayant un visa de sécurité de l’ANSSI (PAMS ou PACS).

### Coût et frais

Aucune facturation supplémentaire n'est prévue de la part de OVHcloud pour les fonctionnalités de migration répertoriées ici.

### Conservation des données après la résiliation du contrat

Les données sont conservées jusqu'à la fin du mois suivant la résiliation du service, puis supprimées définitivement conformément aux engagements des conditions de service SecNumCloud.

## Aller plus loin

[Migrer une infrastructure vers Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration)
