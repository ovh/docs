---
title: "Enterprise File Storage - Configuration Réseau privé - Beta"
excerpt: Découvrez configurer un réseau privé pour votre service Enterprise File Storage depuis votre espace client OVHcloud
updated: 2024-04-11
---

## Objectif

Les services Enterprise File Storage peuvent être gérés [via les API OVHcloud](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_quick_start) ou depuis votre espace client OVHcloud.

Découvrez dans ce guide comment rattacher votre service Enterprise File Storage à un [réseau privé vRack](https://www.ovhcloud.com/fr/network/vrack/) , via la technologie vRack Services et vRAck Service Endpoint.

> [!primary]
>
> Pour plus d’informations concernant les vRack Services, veuillez consulter cette page (lien vers la doc vRack Services)
>

## Prérequis

- Avoir un service Enterprise File Storage dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## Overview



Enterprise File Storage est un service exposé via une adresse IP sur le vRack. L’attribution de l’IP de votre service se fait donc selon trois étapes :
1. Sélection ou création d’un vRack
2. Création et activation du vRack Services
3. Création d’un sous-réseau


## En pratique <a name="instructions"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionez `Bare Metal Cloud`{.action} dans la barre de navigation supérieure. Ouvrez `Storage et Backup`{.action} puis `Enterprise File Storage`{.action} dans le menu de gauche et sélectionnez votre service dans la liste.

![Sans configuration réseau](images/01-EFS.png){.thumbnail}


Par défaut, le service n’est pas rattaché à un réseau privé, il est dans un statut `Prêt à configurer`{.action}. Cette étape est nécessaire avant même de pouvoir créer vos volumes et/ou paramétrer vos ACLs. Cliquer sur le lien `Configurer les paramètres réseaux`{.action} pour configurer votre vRack Service Endpoint, et ainsi permettre à vos volumes d’être consommés depuis votre réseau privé.

## Aller plus loin <a name="gofurther"></a>

[Enterprise File Storage - API Quickstart](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_quick_start)

[Enterprise File Storage - Gestion des volumes](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volumes)

[Enterprise File Storage - Gestion des ACL de volume](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_acl)

[Enterprise File Storage - Gestion des snapshots de volumes](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_snapshots)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
