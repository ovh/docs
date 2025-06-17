---
title: "Bare Metal 3-AZ Region - Présentation de l'offre"
excerpt: 'Découvrez le service Bare Metal 3-AZ, qui offre une haute disponibilité et une redondance inégalées entre trois datacenters'
updated: 2025-06-04
---

## Objectif

OVHcloud propose son service Bare Metal dans la [région 3-AZ](/links/bare-metal/regions), une évolution significative dans la stratégie de régionalisation de l'entreprise. Ce service, disponible dans l’agglomération de Paris, constitue un nouveau standard du secteur en matière de fiabilité et de performance des serveurs Bare Metal.

Le Bare Metal de la région 3-AZ répond aux besoins des clients qui ont besoin d’une haute disponibilité et d’une redondance dans leurs plans de continuité d’activité. Ce service fournit des serveurs Bare Metal dans trois datacenters proches de Paris, connectés par un réseau à faible latence. Il garantit une sécurité renforcée, des performances améliorées et des fonctionnalités ininterrompues, même en cas d'incidents localisés.

> [!primary]
>
> **Information importante - Évolution de l’offre Bare Metal 3-AZ**
>
> À partir de mai 2025, le modèle de livraison des serveurs Bare Metal en région Paris 3-AZ évolue significativement. Le précédent modèle de livraison obligatoire en clusters de 3 serveurs (un dans chaque zone de disponibilité) sera abandonné.
>
> **Changements clés :**
>
> - Les clients pourront désormais choisir librement le nombre exact de serveurs dont ils ont besoin.
> - La répartition des serveurs entre les différentes zones de disponibilité (AZ) sera entièrement personnalisable.
> - Aucune obligation de déploiement dans les trois zones simultanément.
>
> **Important :** les informations présentées dans ce guide, notamment en ce qui concerne le déploiement obligatoire du cluster et potentiellement l’expérience utilisateur reflétant ce modèle, s’appliquent principalement aux clients dont les serveurs ont été livrés *avant mai 2025* sous le modèle de cluster précédent. Les nouveaux déploiements à partir de mai 2025 bénéficieront de la flexibilité du nouveau modèle, et potentiellement d'une interface adaptée. Pour toute question concernant cette évolution ou pour adapter votre infrastructure existante, veuillez contacter votre gestionnaire de compte ou le support OVHcloud.
>

## Vue d'ensemble

### But du Service

La valeur de la région 3-AZ réside dans l’offre de plusieurs serveurs identiques répartis sur trois zones de disponibilité au sein d’une même région. Cette configuration garantit une haute disponibilité et une redondance des données, tout en maintenant la continuité opérationnelle et en réduisant le risque de perte de données. La distribution stratégique des serveurs minimise la latence et améliore les performances des applications.

### La régionalisation chez OVHcloud

OVHcloud est présent dans le monde entier, notamment en Europe, aux États-Unis, au Canada et en Asie-Pacifique. L'introduction du concept de Région et le support des Zones de Disponibilité est une initiative stratégique visant à fournir aux clients une performance et une résilience optimales. La région parisienne est la première à adopter le modèle 3-AZ.

### Conseils de sélection de région

Pour des performances optimales, une région doit être sélectionnée au plus près de ses utilisateurs. Pour une disponibilité mondiale, les services doivent être répartis sur plusieurs régions. La région 3-AZ est idéale pour les clients à la recherche de la plus haute résilience et doit être utilisée pour créer des conceptions d'applications multi-AZ.

Pour visualiser vos clusters depuis l'[espace client OVHcloud](/links/manager), cliquez sur `Bare Metal Cloud`{.action} dans le menu situé à gauche de l'écran, puis sur `Serveurs dédiés`{.action}. Enfin, cliquez sur l'onglet `Clusters 3-AZ`{.action}.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters1.png){.thumbnail}

Cliquez sur le nom du cluster dans le tableau pour en afficher les détails.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters2.png){.thumbnail}

Cliquez sur l'onglet `Noeuds`{.action} pour ouvrir la liste des serveurs du cluster.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters3.png){.thumbnail}

Cliquer sur un nom de serveur/nœud dans cette liste ouvre l'onglet `Informations générales`{.action} du serveur. Retrouvez les détails sur cette section de l'espace client dans notre guide « [Comment démarrer avec un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) ».

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).