---
title: Politique de réversibilité de Hosted Private Cloud
slug: politique-reversibilite-hosted-private-cloud
section: Politiques de réversibilité
order: 3
updated: 2021-05-05
---

**Dernière mise à jour le 05/05/2021**

## Objectif

Ce document est la politique de réversibilité du produit [Hosted Private Cloud Powered by VMware](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/).

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

The following migration models and available documentation apply to all the features described in the table above.

|Modèle de migration|Documentation disponible|
|---|---|
|**Migration entrante**:<br>- Souscrivez un projet Hosted Private Cloud<br>-Commandez le nombre approprié d'hôtes et de datastores sur le projet pour obtenir une capacité comparable à celle de l'infrastructure d'origine.<br>-Migrez à l'aide d'un outil spécialisé (Veeam, Zerto, HCX...)<br><br>**Migration sortante**: <br> -Configurez un hyperviseur vSphere dans l'environnement cible<br>- Planifiez les capacités de l'environnement cible comparativement à l'environnement d'origine<br>- Migrez via un outil spécialisé (par exemple Veeam, Zerto, HCX ...)|La [Documentation vSphere standard](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-CEFF6D89-8C19-4143-8C26-4B6D6734D2CB.html) s'applique.<br><br>[Déployer un template OVF Linux, Windows Server et Windows SQL Server](https://docs.ovh.com/fr/private-cloud/deploiement-template-ovh/)<br><br>[Déploiement d'une machine virtuelle avec vSphere](https://docs.ovh.com/fr/private-cloud/deploiement-d-une-machine-virtuelle/)<br><br>[Création de cluster et activation EVC](https://docs.ovh.com/fr/private-cloud/create-cluster-enable-evc/)|

### Implémentation OVHcloud <a name="ovhcloud-implementation"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|vRack|Le vRack, ou rack virtuel, est une technologie VLAN privée qui permet la connexion entre les services OVHcloud|N/A|**Migration entrante**: Les services Hosted private Cloud sont inclus par défaut dans vRack.<br><br>**Migration sortante**: Prenez note de l'architecture réseau et reproduisez-la avec des VLAN.|[Utiliser le Hosted Private Cloud au sein d’un vRack](https://docs.ovh.com/fr/private-cloud/utiliser-le-private-cloud-au-sein-d-un-vrack/)<br><br>[Création de V(x)LAN](https://docs.ovh.com/fr/private-cloud/creation-vlan-vxlan/)|
|vROps|Solution standard de Monitoring VMware.|N/A|**Migration entrante**: vROps est inclus par défaut avec chaque Hosted Private Cloud.<br><br>**Migration sortante**: Installer et configurer vROps dans un environnement vSphere.|[First connection on vROps](https://docs.ovh.com/fr/private-cloud/first-connection-on-vrops/)|
|Managed Veeam backup|Solution de sauvegarde en tant que service pour vos VMs|VBK, VIB, VBM|**Migration entrante**: Activez une option de sauvegarde Veeam dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>**Migration sortante**: Importez des sauvegardes manuellement, puis restaurez-les.|[Activer et utiliser Veeam Managed Backup](https://docs.ovh.com/fr/private-cloud/veeam-backup-as-a-service/)<br><br>[Importer des sauvegardes](https://helpcenter.veeam.com/docs/backup/hyperv/importing_backups.html?ver=110)(EN)|
|Zerto|Plateforme de continuité et de reprise d'activité après sinistre.|N/A|**Migration entrante**: Activez le service Zerto dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou directement dans l'interface de réplication Zerto fournie.<br><br>**Migration sortante**:  Exportez les paramètres VPG de Zerto et importez-les dans le nouvel environnement.|[Mise en oeuvre de Zerto Virtual Replication pour votre PRA](https://docs.ovh.com/fr/private-cloud/zerto-virtual-replication-vmware-vsphere-drp/)<br><br>[Exporter les paramètres VPG Zerto](https://www.zerto.com/myzerto/knowledge-base/exporting-and-importing-vpg-settings-with-zerto-diagnostic-tool/)(EN)|

### Fonctionnalités spécifiques <a name="fonctionnalites-specifiques"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|Monitoring vScope|Outil de monitoring de l'état et de l'utilisation des ressources conçu par OVHcloud pour Hosted Private Cloud.|N/A|N/A ; vScope est une interface statique.|[Comment utiliser vScope](https://docs.ovh.com/fr/private-cloud/vscope/)|
|Anti-DDoS|L'anti-DDoS est un ensemble d'équipements et de moyens mis en place pour absorber les attaques par déni de service. Il comprend une analyse du trafic, « l’aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud.|N/A|**Migration entrante**: Le système anti-DDoS est un composant de notre infrastructure, activé par défaut. Aucune action n'est requise.<br><br>**Migration sortante**: Commandez et configurez un anti-DDoS avec le nouveau fournisseur.|[Protection anti-DDoS OVHcloud](https://www.ovh.com/fr/anti-ddos/)<br><br>[Technologie anti-DDoS](https://www.ovh.com/fr/anti-ddos/technologie-anti-ddos.xml)|
|Sécurité avancée pour SDDC|Ensemble de fonctionnalités améliorant la sécurité, telles que l'implémentation de Sécurité Zero Trust, MFA, IDS pour l'accès vSphere...|N/A|**Migration entrante**: Commandez l'activation de la sécurité avancée depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>**Migration sortante**: Commandez et configurez les fonctionnalités de sécurité appropriées avec le nouveau fournisseur.|[SDDC Advanced Security Pack](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/sddc/)|

### Liste des architectures

Les informations relatives à l'architecture (serveurs, stockage, etc.) sont centralisées et visibles dans la console vSphere.

### Outils de migration disponibles

[Importer/exporter des machnes virtuelles](https://docs.ovh.com/fr/private-cloud/ovf-tool/).

[Convertir une machine physique/virtuelle en une infrastructure Cloud](https://docs.ovh.com/fr/private-cloud/vmware-vcenter-converter/).

### Services Partenaires

Les partenaires OVHcloud sont répertoriés avec le mot clé « Cloud Migration » dans le [répertoire dédié](https://partner.ovhcloud.com/fr/directory/).

### Coût et frais

Aucune facturation supplémentaire n'est prévue de la part de OVHcloud pour les fonctionnalités de migration répertoriées ici.

### Conservation des données après la résiliation du contrat

Les données sont conservées jusqu'à la fin du mois suivant la résiliation du service, puis supprimées définitivement.

## Aller plus loin

[Migrer une infrastructure vers Hosted Private Cloud](https://docs.ovh.com/fr/private-cloud/sddc-migration/).
