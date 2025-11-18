---
title: Politique de réversibilité du produit Serveurs Dédiés 3-AZ
updated: 2025-06-27
---

## Objectif

Ce document est la politique de réversibilité de la gamme de produits Serveurs Dédiés 3-AZ.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le code de conduite SWIPO IaaS pour les fournisseurs de Cloud.

## Liste des fonctionnalités

Les fonctionnalités de la gamme de produits Serveurs Dédiés 3-AZ sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
1. Les **implémentations OVHcloud** dont la migration nécessitera des adaptations à un nouvel environnement.
1. Les **fonctionnalités spécifiques** dont la migration en tant que telle est impossible à garantir car elles sont liées à l'environnement OVHcloud ou à des développements spécifiques.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
|---|-----|---|-----|-----|
| Fourniture de serveurs dédiés|Fourniture de différentes gammes de serveurs dédiés hautes performances. | N/A | **Migration entrante** : Commandez un serveur dédié dans l'[espace client OVHcloud](/links/manager), sauvegardez et migrez les données, réinstallez le logiciel (ou utilisez l'installation automatisée).<br><br>**Migration sortante** : Commandez des serveurs dédiés, sauvegardez et migrez les données, réinstallez le logiciel. | [Premiers pas avec serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) |
| Stockage de sauvegarde (Backup Storage) | Stockage de sauvegarde fourni par défaut avec chaque serveur dédié. | NFS/CIFS/FTP | **Migration entrante** : Migrez les données sur vos serveurs dédiés et activez le Backup Storage sur ces serveurs via l'[espace client OVHcloud](/links/manager).<br><br>**Migration sortante** : Activez l'accès depuis l'extérieur de votre compte via l'[API OVHcloud](/links/api), puis migrez les données à l'aide de protocoles de transfert de fichiers standard, tels que FTP. | [Utiliser Backup Storage sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) |
| Systèmes d'exploitation et logiciels installés sur un serveur dédié | Installez automatiquement les systèmes d'exploitation, les bases de données, les interfaces d'administration et les logiciels de virtualisation sur un nouveau serveur dédié.<br>Consultez [ici](/links/bare-metal/os) la liste complète. | Pour obtenir des images personnalisées utilisées avec la fonction « Bring Your Own Image » : <br>- Type de Boot : **UEFI** ou **Legacy**.<br>- Type de partition : **MBR** ou **GPT**.<br>- Format de l'image : **qcow2** ou **raw**. | **Migration entrante** : Commandez des serveurs dédiés et choisissez les systèmes d'exploitation/logiciels à installer sur l'[espace client OVHcloud](/links/manager). Vous pouvez également utiliser la fonction « Bring Your Own Image » pour installer des images personnalisées.<br><br>**Migration sortante** : Exportez votre image et installez-la sur un autre serveur dédié. | [Installation ou réinstallation de votre serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#installation-ou-reinstallation-de-votre-serveur-dedie)<br><br>[Utiliser la fonctionnalité Bring Your Own Image](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image) |
| Bring your Own IP | Permet au client d'importer ses propres plages d'adresses IPv4 publiques (de /24 à /19) dans l'infrastructure OVHcloud. | Plages IPv4 publiques (/24 à /19) enregistrées auprès des RIRs pris en charge. | **Migration entrante** : Import via le panneau de contrôle OVHcloud après vérification de la propriété et de la réputation des IPs.<br><br>**Migration sortante** : Les IPs restent la propriété du client et peuvent être retirées à tout moment, garantissant une réversibilité complète. | [Utiliser la fonctionnalité Bring Your Own IP](/pages/network/bring_your_own_ip/bring-your-own-IP) |

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
|---|-----|---|-----|-----|
| IP flottante | IP supplémentaire pouvant être commutée d'un service à un autre dans le même datacenter. | IPv4, IPv6 | **Migration entrante** : Planifiez l'architecture réseau, configurez les adresses IP flottantes dans l'[espace client OVHcloud](/links/manager) ou via l'[API OVHcloud](/links/api).<br><br>**Migration sortante** : Prenez note de l'installation configurée dans l'[espace client OVHcloud](/links/manager) et configurez une installation similaire chez un autre fournisseur. | [Déplacer une Additional IP](/pages/bare_metal_cloud/dedicated_servers/move-failover-ip)<br><br>[Assigner une adresse MAC virtuelle à une Additional IP](/pages/bare_metal_cloud/dedicated_servers/network_virtual_mac) |
| vRack | Le vRack, ou rack virtuel, est une technologie VLAN privée qui permet la connexion entre les services OVHcloud. | N/A | **Migration entrante** : Planifiez l'architecture réseau, ajoutez vos serveurs au vRack, configurez les interfaces réseau.<br><br>**Migration sortante** : Prenez note de l'architecture réseau et reproduisez-la avec des VLANs. |[Configurer plusieurs serveurs dédiés dans le vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server) |
| ACL, firewall et sécurité avancée | Gestion des règles de sécurité, ACL, firewall réseau OVHcloud | Règles firewall, scripts | **Migration entrante** : Reconfiguration manuelle ou avec des scripts de règles.<br><br>**Migration sortante** : Export des configurations, adaptation aux outils de sécurité de l'environnement cible. | [Rubrique Réseau et IP](/products/bare-metal-cloud-dedicated-servers) |

### 3 - Fonctionnalités spécifiques

| Fonction | Description | Formats disponibles | Modèle de migration | Documentation disponible |
|---|-----|---|-----|-----|
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Migration entrante** : Le système anti-DDoS est un composant de notre infrastructure, activé par défaut. Aucune action n'est requise.<br><br> **Migration sortante** : Commandez et configurez un anti-DDoS avec le nouveau fournisseur. | [Protection anti-DDoS OVHcloud](/links/security/antiddos) |

### Liste des architectures

Les serveurs dédiés sont déployés dans 3 datacenters répartis sur 3 zones de disponibilité physiquement indépendantes et distantes de plusieurs kilomètres, avec un réseau privé à faible latence et une alimentation, un refroidissement, un réseau et une sécurité redondés pour chaque datacenter.

### Services Partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous le filtre « **Data center expansion and migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

### Coût et frais

Aucun frais de résiliation spécifique n’est appliqué. La suppression du service arrête la facturation immédiatement.

### Conservation des données après la résiliation du contrat

OVHcloud ne conserve aucune donnée. Les sauvegardes (automatiques ou manuelles) sont irréversiblement supprimées à la résiliation du contrat. Une exportation manuelle préalable est obligatoire pour préserver les données.
