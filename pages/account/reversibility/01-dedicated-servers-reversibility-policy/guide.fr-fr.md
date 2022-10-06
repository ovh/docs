---
title: Politique de réversibilité des Serveurs Dédiés
slug: politique-reversibilite-serveurs-dedies
section: Politiques de réversibilité
order: 2
---

**Dernière mise à jour le 5 mai 2021**

## Objectif

Ce document est la politique de réversibilité pour la gamme de produits [Serveurs dédiés](https://www.ovhcloud.com/fr/bare-metal/).

Cette politique vise à mettre en oeuvre les principes généraux de réversibilité et notre conformité au [code de conduite IaaS SWIPO pour les fournisseurs Cloud](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Détails des fonctionnalités

Les fonctionnalités des serveurs dédiés sont divisées en trois catégories :

- Les [fonctionnalités principales](#fonctionnalites-principales) pour lesquelles nous garantissons la capacité de migrer.
- L'[implémentation OVHcloud](#ovhcloud-implementation), dont la migration nécessitera des adaptations à un nouvel environnement.
- Les [fonctionnalités spécifiques](#fonctionnalites-specifiques), dont la migration en tant que telle est impossible à garantir car elle est liée à l'environnement OVHcloud ou à des développements spécifiques.

### Fonctionnalités principales <a name="fonctionnalites-principales"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|-----|---|-----|-----|
Fourniture de serveurs dédiés|Fourniture de différentes gammes de serveurs dédiés hautes performances|N/A|**Migration entrante**: Commandez un serveur dédié dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sauvegardez et migrez les données, réinstallez le logiciel (ou utilisez l'installation automatisée).<br><br>**Migration sortante**: Commandez des serveurs dédiés, sauvegardez et migrez les données, réinstallez le logiciel|[Premiers pas avec serveur dédié](https://docs.ovh.com/fr/dedicated/premiers-pas-serveur-dedie/)|
|Stockage de sauvegarde (Backup Storage)|Stockage de sauvegarde fourni par défaut avec chaque serveur dédié|NFS/CIFS/FTP|**Migration entrante**: Migrez les données sur vos serveurs dédiés et activez le Backup Storage sur ces serveurs via l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>**Migration sortante**: activez l'accès depuis l'extérieur de votre compte via l'API OVHcloud, puis migrez les données à l'aide de protocoles de transfert de fichiers standard, tels que FTP.|[Utiliser Backup Storage sur un serveur dédié](https://docs.ovh.com/fr/dedicated/services-backup-storage/)|
|Systèmes d'exploitation et logiciels installés sur un serveur dédié|Installez automatiquement les systèmes d'exploitation, les bases de données, les interfaces d'administration et les logiciels de virtualisation sur un nouveau serveur dédié.<br>Consultez [ici](https://www.ovhcloud.com/fr/bare-metal/os/) la liste complète.|Pour obtenir des images personnalisées utilisées avec la fonction « Bring Your Own Image »: <br>- Type de Boot : **uefi** ou **legacy**<br>- Type de partition: **MBR** ou **GPT**<br>- Format de l'image: **qcow2** ou **raw***|**Migration entrante**: Commandez des serveurs dédiés et choisissez les systèmes d'exploitation/logiciels à installer sur l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Vous pouvez également utiliser la fonction « Bring Your Own Image » pour installer des images personnalisées.<br><br>**Migration sortante**: Exportez votre image et installez-la sur un autre serveur dédié.|[Installation ou réinstallation de votre serveur dédié](https://docs.ovh.com/fr/dedicated/premiers-pas-serveur-dedie/#installation-ou-reinstallation-de-votre-serveur-dedie)<br><br>[Utiliser la fonctionnalité Bring Your Own Image](https://docs.ovh.com/fr/dedicated/bringyourownimage/)|

### Implémentation OVHcloud <a name="ovhcloud-implementation"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|-----|---|-----|-----|
|IP flottante|IP supplémentaire pouvant être commutée d'un service à un autre dans le même datacenter.|IPv4, IPv6|**Migration entrante**: Planifiez l'architecture réseau, configurez les adresses IP flottantes dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou via l'API OVHcloud.<br><br>**Migration sortante**: Prenez note de l'installation configurée dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et configurez une installation similaire chez un autre fournisseur.|[Déplacer une Additional IP](https://docs.ovh.com/fr/dedicated/ip-fo-move/)<br><br>[Assigner une adresse MAC virtuelle à une Additional IP](https://docs.ovh.com/fr/dedicated/network-virtual-mac/)|
|vRack|Le vRack, ou rack virtuel, est une technologie VLAN privée qui permet la connexion entre les services OVHcloud.|N/A|**Migration entrante**: Planifiez l'architecture réseau, ajoutez vos serveurs au vRack, configurez les interfaces réseau.<br><br>**Migration sortante**: Prenez note de l'architecture réseau et reproduisez-la avec le VLAN.|[Configurer plusieurs serveurs dédiés dans le vRack](https://docs.ovh.com/fr/dedicated/configurer-plusieurs-serveurs-dedies-dans-le-vrack/)|

### Fonctionnalités spécifiques <a name="fonctionnalites-specifiques"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|-----|---|-----|-----|
|Load Balancing|Les Load Balancers sont des périphériques réseau qui distribuent les demandes entre les services et les datacenters pour s'assurer qu'il n'y a pas de surcharge.|N/A|**Migration entrante**: Commande et activation via l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>**Migration sortante**: Commandez et configurez un équilibrage de charge avec le nouveau fournisseur.|**Migration entrante**: [Load Balancer OVHcloud](https://www.ovh.com/fr/solutions/load-balancer/)<br><br>**Migration sortante**: N/A|
|Anti-DDoS|L'anti-DDoS est un ensemble d'équipements et de moyens mis en place pour absorber les attaques par déni de service. Il comprend une analyse du trafic, « l’aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud.|N/A|**Migration entrante**: Le système anti-DDoS est un composant de notre infrastructure, activé par défaut. Aucune action n'est requise.<br><br>**Migration sortante**: Commandez et configurez un anti-DDoS avec le nouveau fournisseur.|**Migration entrante**: [Protection anti-DDoS OVHcloud](https://www.ovh.com/fr/anti-ddos/) et [Technologie anti-DDoS](https://www.ovh.com/fr/anti-ddos/technologie-anti-ddos.xml)<br><br>**Migration sortante**: N/A|

### Liste des architectures

Tous les composants du produit Serveurs Dédiés OVHcloud sont accessibles via l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cela permet de visualiser et de gérer les serveurs dédiés, les images installées, la configuration réseau... ainsi que les fonctions associées à ces composants.

### Services Partenaires

Les partenaires OVHcloud sont répertoriés avec le mot clé « Cloud Migration » dans le [répertoire dédié](https://partner.ovhcloud.com/fr/directory/).

### Coût et frais

Aucune facturation supplémentaire n'est prévue de la part de OVHcloud pour les fonctionnalités de migration répertoriées ici.

### Conservation des données après la résiliation du contrat

Si un client met explicitement fin à son utilisation d'un hôte donné, les données sont effacées 24 heures plus tard. En cas de résiliation du contrat sans libération explicite des hôtes, les données sont conservées 7 jours, puis supprimées définitivement.
