---
title: Politique de réversibilité du produit Managed Dedicated Cloud
updated: 2025-08-08
---

## Objectif

Ce document est la politique de réversibilité du produit Managed Dedicated Cloud correspondant à l'offre commerciale VMware on OVHcloud.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
2. Les **implémentation OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
3. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.


### 1. Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Virtualisation | Gestion des VM via vSphere, vCenter, vMotion, et support de formats standards VMware | OVA, OVF | **Entrante** : import de VM, disques, snapshots via l’interface vSphere ou les outils spécialisés (exemple Veeam, Zerto, etc …)  <br>**Sortante** : export des VM, disques via vSphere, et réutilisation sur tout environnement VMware ou compatible. Des outils spécialisés peuvent être utilisés (exemple Veeam, Zerto, PowerCLI, etc …) | [Se connecter à l’interface web vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion)<br><br>[Déploiement d’une machine virtuelle](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/deploiement_d_une_machine_virtuelle)<br><br>[Comment connecter une image ISO à une VM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_connect_an_iso_image_to_a_vm) <br><br>[Création de cluster et activation EVC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc) |
| Gestion des utilisateurs et des droits | Création, gestion et suppression des utilisateurs. Gestion des permissions et rôles via l’interface utilisateur  | JSON, CSV (exports)  | **Entrante** : import manuel ou automatisé des utilisateurs et des permissions <br>**Sortante** : export des listes d’utilisateurs, permissions et adaptation sur la cible.  | [IAM pour VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started) |
| Gestion des réseaux virtuels  | Configuration réseau via NSX, gestion des VLAN, routage, firewall, sécurité des réseaux via API ou UI | YAML, JSON, scripts | **Entrante** : définition des réseaux, VLAN, règles firewall <br>**Sortante** : export des configurations réseau à travers les API VMWare disponibles  | [Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps) |
| Stockage dédié (vSAN et/ou NFS) | Utilisation de datastores dediés vSAN et/ou NFS, gestion des snapshots et des clones. | NA | **Entrante** : ajout de datastores, restauration de VM et snapshots <br>**Sortante** : export des VM et snapshots vers stockage cible compatible.  | [Mettre en oeuvre l'hyperconvergence VMware avec vSAN](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan)|

### 2. Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
|---|---|---|---|---|
|vRack|Le vRack, ou rack virtuel, est une technologie VLAN privée qui permet la connexion entre les services OVHcloud|N/A|**Entrante** : les services Hosted private Cloud sont inclus par défaut dans vRack.<br><br>**Sortante** : prendre note de l'architecture réseau et reproduisez-la avec des VLAN.|[Utiliser le Hosted Private Cloud au sein d’un vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack)<br><br>[Création de V(x)LAN](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creation_vlan)|
|Monitoring et supervision|Solution standard de Monitoring VMware via vROps| plusieurs formats supportés par la plateforme (e.g JSON, Syslog, etc)|**Entrante** : vROps est inclus par défaut avec chaque Hosted Private. Adaptation des dashboards et agents de monitoring  Cloud.<br><br>**Sortante** : Installation et configuration vROps dans un environnement vSphere. Export des métriques/logs, reconfiguration sur la cible. |[First connection on vROps](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrops_introduction)|
|Sauvegarde et restauration|Solution de sauvegarde en tant que service pour les VMs|VBK, VIB, VBM|**Entrante** : activation de l'option de sauvegarde Veeam dans l'[espace client OVHcloud](/links/manager).<br><br>**Sortante** : import des sauvegardes manuellement, puis restauration|[Activer et utiliser Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service)<br><br>[Move2Cloud - Migrer des workloads VMware vers OVHcloud Hosted Private Cloud avec Veeam Replication](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_migration_veeam)|
|Zerto|Plateforme de continuité et de reprise d'activité après sinistre.|N/A|**Entrante** : activation de l'option Zerto dans l'[espace client OVHcloud](/links/manager) ou directement dans l'interface de réplication Zerto fournie.<br><br>**Sortante** : export des paramètres VPG de Zerto et import dans le nouvel environnement.|[Mise en oeuvre de Zerto Virtual Replication pour votre PRA](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)<br><br>[Move2Cloud - Migration de charges de travail VMware vers OVHcloud Hosted Private Cloud avec Zerto](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_migration_zerto)<br><br>[Exporter les paramètres VPG Zerto](https://www.zerto.com/myzerto/knowledge-base/exporting-and-importing-vpg-settings-with-zerto-diagnostic-tool/)(EN)|

### 3. Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
|---|---|---|---|---|
|Anti-DDoS|L'anti-DDoS est un ensemble d'équipements et de moyens mis en place pour absorber les attaques par déni de service. Il comprend une analyse du trafic, « l’aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud.|N/A|**Entrante** : le système anti-DDoS est un composant de notre infrastructure, activé par défaut. Aucune action n'est requise.<br><br>**Sortante** : commande et configuration d'un anti-DDoS avec le nouveau fournisseur.|[Protection anti-DDoS OVHcloud](/links/security/antiddos)|
|Sécurité avancée|Ensemble de fonctionnalités améliorant la sécurité, telles que l'implémentation de Sécurité Zero Trust, MFA, IDS pour l'accès vSphere...|N/A|**Entrante** : commande et activation de la sécurité avancée depuis l'[espace client OVHcloud](/links/manager).<br><br>**Sortante** : commande et configuration les fonctionnalités de sécurité appropriées avec le nouveau fournisseur.|[SDDC Advanced Security Pack](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/sddc/)<br><br>[Interface sécurisée](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/interface-secure)|

### Liste des architectures

Le produit repose sur une solution VMware dédiée, incluant des briques commme vSphere, vCenter, stockage NFS, vROps, des options avancées de sécurité (chiffrement, MFA) et options NSX (SDN) et/ou vSAN à activer. Les ressources (compute, stockage, réseau) sont isolées physiquement et logiquement, avec une gestion fine des droits (IAM), et l'intégration de services de réseaux privés. L’architecture est opérée dans des les datacentres OVHcloud.

### Services Partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

### Coût et frais

La facturation est mensuelle, avec ou sans engagement de durée. Aucun frais de résiliation spécifique n’est appliqué : la suppression du service arrête la facturation immédiatement. Les fonctionnalités de migration (export VM, disques, configuration) sont incluses sans surcoût. Les coûts sont liés à la consommation des ressources et options souscrites (hôtes, stockage, etc.). 

### Conservation des données après la résiliation du contrat

Après résiliation ou suppression du service, OVHcloud procède à un effacement sécurisé des données, VM, snapshots et configurations. Il est impératif d’exporter toutes les données nécessaires avant la suppression définitive, car aucune restauration ne sera possible après coup.
