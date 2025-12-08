---
title: "Mise en route de votre OPCP"
excerpt: "Découvrez comment prendre en main et configurer votre On-Prem Cloud Platform"
updated: 2025-12-02
---

## Objectif

Ce guide a été conçu pour vous présenter comment vous connecter aux interfaces graphiques de votre **OPCP** en tant que qu'administrateur de ce service.

## Prérequis

Afin de suivre ce guide, vous aurez besoin des informations suivantes :

- L'adresse **url** de l'interface de gestion définie pour la livraison du service.
- Les identifiants (login et mot de passe) fournies lors de la livraison du service.

## En pratique

### Composition de l'interface utilisateur

L'adresse **url** fournie vous permet d'accéder à l'interface utilisateur de **OPCP**.

![Page de connexion Keycloak](images/keycloak_login.png){.thumbnail}

Une fois vos identifiants utilisés pour vous enregistrer, vous aurez accès au tableau de bord du produit.

![Dashboard visible une fois identifié](images/dashboard.png){.thumbnail}

Votre interface vous permet d'accéder à :

- la configuration des utilisateurs au sein de *Keycloak* via le lien IAM sous votre identifiant.
- l'interface de gestion de OpenStack, *Horizon*. C’est une interface web graphique pour gérer l'ensemble de l'infrastructure OpenStack. Elle permet à l’utilisateur d’exploiter les ressources machines mises à disposition par les administrateurs. Ceci passe par la création, le lancement et l’arrêt des instances, la configuration des réseaux, la gestion de l’accessibilité des instances.

L’interface d’administration de **OPCP** regroupe également les accès aux différentes APIs telles que : Keystone (authentification et gestion des identités), Glance (gestion des images), Nova (service de calcul), Neutron (gestion du réseau), Ironic (gestion du matériel "Bare Metal") qui peuvent être utilisées au sein de vos automatisations.

### Présentation de l'Interface OpenStack Horizon

L'interface graphique d'OpenStack Horizon offre la possibilité de réaliser différentes actions en fonction de leurs autorisations et du projet auquel ells appartiennent. Parmi les principales fonctionnalités disponibles pour un utilisateur final, on peut citer : la gestion des instances, la gestion des réseaux, le suivi des ressources.

#### Accès à l'interface d'administration OpenStack Horizon

Depuis l'espace utilisateur de **OPCP**, l’interface OpenStack Horizon est accessible via le lien dans le tableau de bord. 

![Emplacement du raccourci vers Horizon](images/dashboard_login_horizon.png){.thumbnail}

Après s’être connecté, l'interface Horizon OpenStack se présente ainsi :

![Interface Horizon OpenStack](images/horizon_dashboard.png){.thumbnail}

Le menu latéral situé à gauche de l'interface offre un accès aux différents éléments de l'interface. Il y a deux entrées parentes dans ce menu :

![Menu de l’interface OpenStack Horizon](images/horizon_menu.png){.thumbnail}

- **Projet** qui comprend quatre éléments : Aperçu (Overview), Accès à l'API (API Access), Compute et Réseau (Network). Ces éléments rassemblent l'ensemble des fonctionnalités de gestion des serveurs dédiés, de leurs réseaux, dans les limites de quotas définis.
- **Identité (Identity)** qui inclut les éléments Projets, Utilisateurs et identifiants d'application qui contiennent les fonctionnalités de gestion des utilisateurs.

#### Vue projet

L'élément principal *Projet* est composé de différents sous-éléments qui permettent d'accéder à toutes les fonctionnalités de gestion des ressources.  Le premier sous-élément, appelé *Aperçu* (Overview), offre une vision globale des quotas de ressources attribuées au projet, ainsi qu’un suivi visuel de la consommation globale des ressources.

##### Section Overview

![Capture d'écran de la section Overview (vue d'ensemble)](images/horizon_project_overview.png){.thumbnail}

La section *Overview* (Aperçu) est composée de deux parties principales :

- **Limit Summary** : Les limites de quotas attribuées au projet pour chaque type de ressource. Ceci permet également de visualiser le niveau de consommation des ressources par rapport aux capacités disponibles.

    Les quotas sont regroupés en deux catégories, telles que représentées dans l'image ci-dessous :

    ![Capture d'écran de la section Limit Summary](images/horizon_quota_categories.png){.thumbnail}

    - **Compute** qui comprend les limites des instances, les vCPUs et la RAM.
    - **Network** qui surveille les quotas des ressources réseau : les adresses Floating IP, les groupes de sécurité, les règles de sécurité des groupes, les réseaux et les ports.

- **Usage Summary** (Résumé de l'utilisation) : historique d’utilisation des ressources sur une période qui permet d'observer l'évolution de l'usage des ressources dans le temps.

    ![Capture d'écran de la section Usage Summary](images/horizon_quota_historical.png){.thumbnail}

##### Section API Access

L'onglet **API-Access** regroupe les 10 services disponibles via API tels que Bare-Metal, Compute, identité, image et réseau, ainsi que leurs URL de point d'accès.

![Capture d'écran de la section API-Access](images/horizon_project_apiaccess.png){.thumbnail}

Grâce à ces *Endpoints*, il est possible de communiquer directement avec les composants OpenStack en utilisant des requêtes API. Ces informations vous sont nécessaires si vous êtes amené à implémenter vous-même des requêtes HTTP avec les API de OpenStack.

Si vous utilisez des intégrations OpenStack existantes, ces dernières récupéreront ces informations lors de la première connexion au composant OpenStack Keystone. Ce dernier se charge de fournir de manière programmatique ces informations.

#### Vue Compute

La vue **Compute** regroupe les fonctionnalités permettant de configurer les serveurs dédiés de votre produit. Cette vue est divisée en différentes sections : 

##### Section Instances

Interface permettant de lister et de gérer les serveurs dédiés déjà configurés. Une *Instance* correspond à un serveur dédié.

![Capture d'écran de la section Instances](images/horizon_instance_list.png){.thumbnail}

##### Section Images

Vous avez la possibilité de gérer les images des OS disponibles pour créer des instances. Il est aussi possible de télécharger de nouvelles images ou de sélectionner parmi les images déjà disponibles afin de mettre en place des instances. Vous pouvez ainsi générer vos propres images pour gérer des systèmes d'exploitation supplémentaires.

> [!warning]
>
> Les images doivent prendre en compte les drivers du hardware délivré dans votre produit. De nombreuses images disponible pour Glance ne sont disponibles que pour des environnements virtuels basés sur les drivers de qemu ou de kvm.
>

![Capture d'écran de la section Images](images/horizon_image_list.png){.thumbnail}

##### Section Key Pairs

Afin de vous authentifier en SSH sur vos machines après l'installation, il faut utiliser des clés de chiffrement asymétriques. Cette interface permet d'importer les clés publiques ou de créer une paire de clés qui seront déployées durant l'installation des serveurs dédiés afin de vous assurer une connexion SSH.

![Capture d'écran de la section Key Pairs](images/horizon_sshkey_list.png){.thumbnail}

#### Vue Network

La Vue Network (réseau) vous permet de visualiser et gérer les réseaux de votre service **OPCP**. Cette interface permet de créer des réseaux mutualisés ou distincts entre vos serveurs dédiés.

> [!primary]
>
> L'ensemble de votre configuration réseau est pilotée par cette interface graphique ou via les API de **OpenStack** avec le composant réseau nommé **Neutron**. Les switchs de votre infrastructure seront automatiquement configurés à partir des informations de OpenStack.
>

##### Section Network Topology

Cette section vous représente l'ensemble des réseaux créés sur ce OPCP via une ligne verticale de couleur. Les carrés correspondent à des services ou des serveurs dédiés connectés à un ou plusieurs de ces réseaux.

![Capture d'écran de la section Network Topology](images/horizon_network_topology.png){.thumbnail}

##### Section Networks

Cette section contient la liste des réseaux disponibles pour les serveurs dédiés sur votre **OPCP**.

![Capture d'écran de la section Networks](images/horizon_network_list.png){.thumbnail}

Pour en savoir plus sur le fonctionnement des réseaux avec OpenStack, nous vous conseillons de consulter la documentation [OpenStack Networking](https://docs.openstack.org/neutron/2024.1/admin/intro-os-networking.html).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
