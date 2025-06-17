---
title: Politique de réversibilité du Produit File Storage
updated: 2025-06-13
---

## Objectif

Ce document présente la politique de réversibilité du produit File Storage couvrant les offres OVHcloud suivantes : Enterprise File Storage et NAS-HA.

Cette politique vise à mettre en œuvre les principes de réversibilité mondiaux et les exigences du code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Carte des fonctionnalités

Les fonctionnalités du nom du produit sont réparties en trois catégories :

- Les **fonctionnalités principales** pour lesquelles nous garantissons la possibilité de migrer6.
- L'**implémentation OVHcloud**, dont la migration nécessitera des adaptations à un nouvel environnement.
- Les **fonctionnalités spécifiques**, dont la migration en tant que telle est impossible à garantir car elles sont liées à l'environnement OVHcloud ou à des développements spécifiques.

### Fonctionnalités principales

|Fonctionnalité|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
| **Protocole NFSv3** | Accès universel via NFSv3, compatible avec tous les systèmes supportant ce protocole. | NetApp : NFSv3<br>NAS-HA : NFSv3+v4 | **Entrant** : montage direct sur serveurs OVHcloud ou externes via NFSv3, copie de fichiers à l’aide d’outils standard (rsync, cp, etc.).<br>**Sortant** : démontage du volume, copie des fichiers via NFSv3 vers n’importe quel stockage compatible. | [Documentation File Storage](/products/storage-file-storage) |
| **Snapshots Manuels/Automatiques** | Création/restauration de snapshots pour la sauvegarde ou la restauration instantanée. | NFSv3 | **Entrant** : copiez les données du snapshot à l’aide d’outils tels que rsync.<br>**Sortant** : Export les données restaurées à l’aide de rsync ou d’outils similaires. | [Documentation File Storage](/products/storage-file-storage) |
| **Accès multi-serveurs** | Montage simultané sur plusieurs serveurs (Linux/Unix/VMs). | NFSv3 | **Entrant** : montage sur tous les serveurs OVHcloud concernés.<br>**Sortant** : démontez, puis remontez sur la cible si compatible NFSv3. | [File Storage](/products/storage-file-storage) |

### Implémentation OVHcloud

|Fonctionnalité|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
| **vRack** | Le vRack (baie virtuelle) est une technologie de VLAN privé qui permet l’interconnexion entre les services OVHcloud. | N/A | **Entrant** : les services Hosted Private Cloud sont inclus par défaut dans le vRack. <br> **Sortant** : Documenter l’architecture réseau et répliquez-la à l’aide de VLAN sur l’environnement cible. | [V(x)LAN creation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creation_vlan)<br>[File Storage vRack](https://labs.ovhcloud.com/en/enterprise-file-storage-vrack/) |
| **ACL and Permission Management**| Les autorisations POSIX/ACL sont gérées au niveau du système de fichiers. | IP ACL | **Entrant** : adaptation manuelle des permissions lors du transfert de fichiers, IP de whitelist pour l'accès, puis le client gère les droits POSIX. <br> **Sortant** : exportez les fichiers, puis reconfigurez les autorisations sur la cible en fonction de sa compatibilité POSIX. |[Documentation File Storage](/products/storage-file-storage) |

### Fonctionnalités spécifiques

|Fonctionnalité|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|**Anti-DDoS**|L’anti-DDoS est un ensemble d’équipements et de moyens mis en place pour absorber les attaques par déni de service distribuées. Il comprend une analyse du trafic, l’« aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud.|NA|**Entrant** : l’Anti-DDoS est une composante de notre infrastructure, activée par défaut. Aucune action n’est requise.<br><br>**sortant** : commandez et configurez un anti-DDoS chez le nouveau fournisseur.| [Infrastructure anti-DDoS OVHcloud](/links/security/antiddos) |
| **Gestion via l'espace client OVHcloud** | Service managé par OVHcloud avec une interface graphique propriétaire et des API pour la gestion des volumes et des snapshots. | N/A | **Entrant** : non applicable. <br> **Sortant** : les scripts/API doivent être réécrits pour la cible ; une gestion manuelle peut être nécessaire. | [Documentation File Storage](/products/storage-file-storage) |

## Liste des architectures

Les solutions File Storage d'OVHcloud s'appuient sur NetApp® ONTAP® (Enterprise File Storage) ou OpenZFS (NAS-HA) en fonction de l'offre. L’architecture est active-active, avec une redondance sur deux nœuds et une réplication locale des données pour assurer une haute disponibilité. Les volumes sont accessibles via NFSv3 ou NFSv4, selon l’offre commerciale, et peuvent être montés sur plusieurs serveurs, avec la possibilité de snapshots automatiques/manuels et d’intégration au réseau privé via le vRack.

## Services partenaires

Les partenaires OVHcloud sont répertoriés sous le mot-clé **« Migration vers le cloud »** sur notre [page dédiée](/links/partner).

OVHcloud propose également un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coût et frais

Par défaut, il n'y a pas de surfacturation liée à la migration des données. La facturation s’arrête dès la résiliation du service. 
Le paiement se fait en début de mois, le remboursement en cas de résiliation en cours du mois n’est pas possible. Idem pour les engagements sur 12, 24 ou 36 mois.

## Rétention des données après résiliation du contrat

Les données sont supprimées à la résiliation du service et ne peuvent pas être récupérées. Pour éviter la perte de données, une exportation doit être effectuée avant la résiliation.