---
title: Politique de réversibilité Public Cloud
updated: 2021-05-05
---

**Dernière mise à jour le 05/05/2021**

## Objectif

Ce document est la politique de réversibilité pour les activités Public Cloud [Compute](https://www.ovhcloud.com/fr/public-cloud/compute/), [Object Storage](https://www.ovhcloud.com/fr/public-cloud/object-storage/) et [Block Storage](https://www.ovhcloud.com/fr/public-cloud/block-storage/).

Cette politique vise à mettre en oeuvre les principes généraux de réversibilité et notre conformité au [code de conduite IaaS SWIPO pour les fournisseurs Cloud](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Liste des fonctionnalités

Les fonctionnalités Hosted Private Cloud sont divisées en trois catégories :

- Les [fonctionnalités principales](#fonctionnalites-principales) pour lesquelles nous garantissons la capacité de migrer.
- L'[implémentation OVHcloud](#ovhcloud-implementation), dont la migration nécessitera des adaptations à un nouvel environnement.
- Les [fonctionnalités spécifiques](#fonctions-specifiques), dont la migration en tant que telle est impossible à garantir car elle est liée à l'environnement OVHcloud ou à des développements spécifiques.

### Fonctionnalités principales <a name="fonctionnalites-principales"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|Compute|Démarre et exécute les instances en fonction de plusieurs images système et flavors disponibles.|qcow2|Effectuez des snapshots des instances, convertissez-les en images puis exportez les images.|[Créer et utiliser des snapshots OpenStack](https://www.ovh.com/blog/create-and-use-openstack-snapshots/) (EN)<br><br>[Transférer la sauvegarde d’une instance d’un datacenter à un autre](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another)<br><br>[Gestion des snapshots d'une instance dans Horizon](/pages/public_cloud/compute/managing_snapshots_in_horizon)|
|Swift - Stockage Public Cloud|Stocke les fichiers accessibles via les API OpenStack Swift ou S3. Active l'utilisation des métadonnées pour les objets.|**Tout format** - les clients peuvent téléverser n'importe quel fichier sur l'object storage|Utilisez n'importe quel outil de synchronisation compatible avec l'API S3 ou l'API Swift (Par exemple, nous recommandons rclone).|[Premiers pas avec l'API Swift S3](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_s3_api)<br><br>[Débuter avec l’API Swift](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)|
|Swift - Archive publique dans le nuage|Stockage de fichiers à long terme|**Tous les formats** - Les clients peuvent télécharger n'importe quel fichier sur le stockage d'objets|Utilisez n'importe quel outil de synchronisation compatible avec S3 ou l'API rapide. Par exemple, nous recommandons rclone.|[Premiers pas avec l'API Swift S3](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_s3_api)<br><br>[Débuter avec l’API Swift](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)|
|Ceph - Block Storage|Attacher des volumes pour ajouter du stockage additionnel sur des instances Public Cloud|**Tout format** - Les clients peuvent téléverser n'importe quel fichier sur le block storage.|Convertissez le volume en image, exportez l'image|[Transférer la sauvegarde d’un volume d’un datacenter à l’autre](/pages/public_cloud/compute/transfer_volume_backup_from_one_datacentre_to_another)|
|Horizon - Interface Web|Panneau de configuration Web et interface de gestion|N/A|Aucune migration en soi, il s'agit juste d'une interface au-dessus des ressources|N/A|
|Mistral - Gestion des flux de travail|Décrit et exécute les processus en tant qu'ensemble de tâches et de transitions.|Yaml|Exportez les fichiers de flux de travail et exécutez-les dans le nouvel environnement|N/A|

### Implémentation OVHcloud <a name="ovhcloud-implementation"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|Catalogue d'images publiques|Catalogue d'images système classiques, optimisé par OVHcloud|qcow2|Configurez de nouvelles instances à l'aide d'une offre similaire chez un autre fournisseur|N/A|

### Fonctionnalités spécifiques <a name="fonctionnalites-specifiques"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|Keystone - Service d'identité|Authentification du client, découverte et autorisation du service|N/A|Reconstruisez un nouveau service|N/A|

### Liste des architectures

Tous les composants des produits Public Cloud sont accessibles via l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cela permet de visualiser et de gérer les instances, les volumes, les conteneurs d'objets ... ainsi que les fonctions associées à ces composants.

L'interface web Horizon permet également d'afficher les composants de l'architecture.

### Services Partenaires

Les partenaires OVHcloud sont répertoriés avec le mot clé « Cloud Migration » dans le [répertoire dédié](https://partner.ovhcloud.com/fr/directory/).

### Coût et frais

Aucune facturation supplémentaire n'est prévue de la part de OVHcloud pour les fonctionnalités de migration répertoriées ici.

### Conservation des données après la résiliation du contrat

Sur Object Storage, les données sont conservées 7 jours après la fin du service, puis supprimées définitivement.
