---
title: "Mise en route de votre projet SNC Cloud Platform"
excerpt: "Découvrez comment prendre en main et configurer votre environnement SNC Cloud Platform"
updated: 2025-12-29
---

## Objectif

Ce guide a été conçu pour vous présenter la manière de vous connecter aux interfaces graphiques de la **SNC Cloud Platform** en tant qu’administrateur du service.

## Prérequis

Afin de suivre ce guide, vous aurez besoin des informations suivantes :

- Adresse **URL** de l'interface de gestion fournie lors de la livraison du service.
- Identifiants (ID d'organisation, login et mot de passe) fournis lors de la livraison du service.

## En pratique

### Composition de l'interface utilisateur

L'adresse **URL** fournie vous permet d'accéder à l'interface du Regional Manager de la **SNC Cloud Platform**.

![Page de connexion du Regional Manager](images/regional_manager_login.png){.thumbnail}

Une fois connecté à l’aide de vos identifiants, vous aurez accès au tableau de bord du produit.

![Dashboard visible une fois identifié](images/regional_manager_dashboard.png){.thumbnail}

Votre interface vous permet d'accéder :

- à l'interface de gestion d'OpenStack, *Horizon*. Il s'agit d'une interface web graphique pour gérer l'ensemble de l'infrastructure OpenStack. Elle permet à l’utilisateur d’exploiter les ressources machines mises à disposition par les administrateurs, ainsi que de créer, lancer et arrêter des instances, configurer des réseaux et gérer leur accessibilité.
- à l'interface de gestion Object Storage.

### Présentation de l'Interface OpenStack Horizon

L'interface graphique d'OpenStack Horizon offre la possibilité de réaliser différentes actions en fonction de leurs autorisations et du projet auquel ils appartiennent. Parmi les principales fonctionnalités disponibles pour un utilisateur final, on peut citer : la gestion des instances, la gestion des réseaux, le suivi des ressources.

#### Accès à l'interface d'administration OpenStack Horizon

Depuis l'interface du Regional Manager de la **SNC Cloud Platform**, l’interface OpenStack Horizon est accessible via le lien dans le tableau de bord.

![Emplacement du raccourci vers Horizon](images/dashboard_login_horizon.png){.thumbnail}

Après s’être connecté, l'interface Horizon OpenStack se présente de la manière suivante :

![Interface Horizon OpenStack](images/horizon_dashboard.png){.thumbnail}

Le menu latéral situé à gauche de l'interface offre un accès aux divers éléments de l'interface. Il y a deux entrées parentes dans ce menu :

- **Projet (Project)**, qui comprend quatre éléments : *Aperçu* (Overview), *Compute*, *Volumes* et *Réseau* (Network). Ces éléments rassemblent l'ensemble des fonctionnalités de gestion des instances, de leurs réseaux, dans les limites de quotas définis.
- **Identité (Identity)**, qui inclut les éléments Projets, Utilisateurs et identifiants d'application qui contiennent les fonctionnalités de gestion des utilisateurs.

![Menu de l’interface OpenStack Horizon](images/horizon_menu.png){.thumbnail}

#### Vue projet

L'élément principal *Projet* est composé de divers sous-éléments qui permettent d'accéder à toutes les fonctionnalités de gestion des ressources.  Le premier sous-élément, appelé *Aperçu* (Overview), offre une vision globale des quotas de ressources, attribuées du projet, ainsi qu’un suivi visuel de la consommation globale des ressources. 

##### Section Overview

![Capture d'écran de la section Overview (vue d'ensemble)](images/horizon_project_overview.png){.thumbnail}

La section *Overview* (Aperçu) est composée de deux parties principales :

- **Limit Summary** : Les limites de quotas attribuées au projet pour chaque type de ressource. Ceci permet également de visualiser le niveau de consommation des ressources par rapport aux capacités disponibles. Les quotas sont regroupés en deux catégories, telles que représentées dans l'image ci-dessous :

    ![Capture d'écran de la section Limit Summary](images/horizon_quota_categories.png){.thumbnail}

    - **Compute** qui comprend les limites des instances, les vCPUs et la RAM.
    - **Network** qui surveille les quotas des ressources réseau : les IP flottantes, les groupes de sécurité, les règles de sécurité des groupes, les réseaux et les ports.

- **Usage Summary** (Résumé de l'utilisation) : historique d’utilisation des ressources sur une période qui permet d'observer l'évolution de l'usage des ressources dans le temps.

![Capture d'écran de la section Usage Summary](images/horizon_quota_historical.png){.thumbnail}

#### Vue Compute

La section **Compute** regroupe les fonctionnalités permettant de configurer les instances de votre projet. Cette section est divisée en différentes interfaces : 

##### Section Instances

Interface permettant de lister et de gérer les instances déjà configurées.

![Capture d'écran de la section Instances](images/horizon_instance_list.png){.thumbnail}

##### Section Images

Vous avez la possibilité de gérer les images des OS disponibles pour créer des instances. Il est aussi possible de télécharger de nouvelles images ou de sélectionner parmi les images déjà disponibles afin de mettre en place des instances. Vous pouvez ainsi générer vos propres images pour gérer des systèmes d'exploitation supplémentaires.

![Capture d'écran de la section Images](images/horizon_image_list.png){.thumbnail}

##### Section Key Pairs

Afin de vous authentifier en SSH sur vos machines après l'installation, il faut utiliser des clés de chiffrement asymétriques. Cette interface permet d'importer les clés publiques qui seront déployées durant l'installation des serveurs dédiés afin de vous assurer une connexion SSH.

![Capture d'écran de la section Key Pairs](images/horizon_sshkey_list.png){.thumbnail}

#### Vue Network

La Vue Network (réseau) vous permet de visualiser et de gérer les réseaux de votre projet. Cette interface permet de créer des réseaux mutualisés ou distincts entre vos instances.

> [!primary]
>
> L'ensemble de votre configuration réseau est piloté par cette interface graphique ou via les API d'**OpenStack** avec le composant réseau **Neutron**. Les switchs de votre infrastructure seront automatiquement configuré à partir des informations provenant d'OpenStack.
>

##### Section Network Topology 

Cette section vous représente l'ensemble des réseaux créés sur ce projet via une ligne verticale de couleur. Les carrés correspondent à des services ou des instances connectées à un ou plusieurs de ces réseaux

![Capture d'écran de la section Network Topology](images/horizon_network_topology.png){.thumbnail}

##### Section Networks

Cette section contient la liste des réseaux disponibles pour les instances sur votre projet.

![Capture d'écran de la section Networks](images/horizon_network_list.png){.thumbnail}

Pour en savoir plus sur le fonctionnement des réseaux avec OpenStack, nous vous conseillons de consulter la documentation [OpenStack Networking](https://docs.openstack.org/neutron/2024.1/admin/intro-os-networking.html).

### Présentation de l'interface Object Storage

Depuis l'interface du Regional Manager de la **SNC Cloud Platform**, l’interface Object Storage est accessible via le lien dans le tableau de bord.

![Emplacement du raccourci vers Object Storage](images/dashboard_objet_storage.png){.thumbnail}

#### Onglet Buckets

Dans cet onglet, vous trouverez la liste des buckets Object Storage créés sur votre projet.

![Liste des buckets Object Storage](images/buckets_objet_storage.png){.thumbnail}

Il est aussi possible d'en créer de nouveau via le bouton **Create bucket**

#### Onglet Access Keys

Dans cet onglet, vous trouverez la liste des Access Keys Object Storage créés sur votre projet. Cela permet l'usage d'outils externes pour envoyer ou récupérer des objets sur Object Storage.

![Liste des Access Keys Object Storage](images/access_keys_objet_storage.png){.thumbnail}

Il est aussi possible d'en créer de nouveau via le bouton **Request new Access Key**

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
