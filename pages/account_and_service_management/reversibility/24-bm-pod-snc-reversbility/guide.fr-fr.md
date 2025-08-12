---
title: "Politique de réversibilité du produit Dedicated PoD-SecNumCloud"
updated: 2025-08-06
---

## Objectif

Ce document est la politique de réversibilité du produit Dedicated PoD - SecNumCloud couvrant l’offre commerciale d’OVHcloud Bare Metal PoD sous la qualification SecNumCloud.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
2. Les **implémentation OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
3. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1. Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Provisionnement Bare Metal | Déploiement direct de systèmes d’exploitation via Ironic (composant opensource d’openstack) sur des serveurs physiques | JSON, API Rest | **Entrante** : import des données de configuration via CLI / API <br>**Sortante** : export des données de configuration via CLI / API | [Premiers pas avec un serveur dédié ](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) |
| Matériel dédié et isolation réseau | Accès exclusif à l’infrastructure physique (serveurs, réseau, racks) sans mutualisation, compatible avec plusieurs gammes bare metal | Tout type de format de données | **Entrante** : installation d’OS, restauration de sauvegardes, migration de workloads via outils standards (PXE, rsync, etc.). <br>**Sortante** : export des données, images, VM, via outils standards, migration vers tout autre environnement dédié | [Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server) |
| Configuration réseau | Gestion réseau via Neutron (OpenStack)  | JSON, API Rest | **Entrante** : définition et import des configuration réseaux, subnets, security groups <br>**Sortante** : export des configurations réseau réutilisables sur tout autre cloud compatible avec la technologie OpenStack | [Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server) |

### 2. Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
|IAM et gestion des accès centralisée | Gestion des identités et des accès via  Keycloak, rôles, politiques fines, logs d’audit | JSON, YAML (policies) | **Entrante** : adaptation manuelle des rôles et politiques lors de l’import <br>**Sortante** : export des configurations, adaptation nécessaire selon le modèle IAM de la cible (OpenStack Keystone ou autre). Fourniture des logs sur demande| [Configuring Keycloak for production](https://www.keycloak.org/server/configuration-production).{external} |
|VPN Gateway|Une passerelle VPN IPsec qui permet de connecter, à travers un tunnel chiffré, les réseaux externes à l’infrastructure SecNumCloud |N/A|**Entrante** : souscrivez et utilisez le service VPN Gateway inclus  dans le périmètre qualifié.  <br><br>**Sortante** : utilisez le service vRack inclus dans d’autres services OVHcloud ou prenez note de l’architecture réseau et reproduisez-là avec des VLAN et un autre tunnel chiffré| [Présentation de SecNumCloud Connectivity](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-overview)<br><br>[Le VPN-SPN Présentation et concept](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-vpn-spn)<br><br>[VPN personnalisé via la solution NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_configurer_un_vpn_via_une_gateway_edge)|
|SPN|Un réseau privé qui permet de connecter les ressources et services disponibles dans l’infrastructure SecNumCloud sur un ou plusieurs sites en zone  SecNumCloud. Il permet aussi de connecter d’autres services OVHcloud ou hébergés chez un tiers en passant par la VPN Gateway.|N/A|**Entrante** : souscrivez et utilisez le service SPN inclus dans le périmètre qualifié.<br><br>**Sortante** : prenez note de l’architecture réseau et reproduisez-là  avec les concepts de sous-réseaux et routage|[SPN présentation et concepts ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)<br><br>[SPN Connector](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn-connector)|
|SPN Inter-DC|Liaison chiffrée entre deux sites hébergeant des infrastructures SecNumcloud et permettant de connecter les SPN.|N/A|**Entrante** : Souscrivez et utilisez le service SPN Inter-DC inclus dans le périmètre qualifié.<br><br>**Sortante** : Configurez votre routage IP entre deux sites  hébergeant des infrastructures SecNumcloud hors OVHcloud.|[Option SPN InterDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)|

### 3. Fonctionnalités spécifiques
 
| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Interface Web Openstack Horizon | Gestion d’une infrastructure OpenStack offrant des tableaux de bord visuels pour interagir avec les différents services OpenStack. | HTML | **Entrante** : NA. Interface utilisateur disponible par défaut. <br>**Sortante** : Pas de ressource à exporter, les dashboard sont statics  | [Présentation de Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) |

## Liste des architectures

L’offre de service repose sur une architecture de cloud privé souverain, déployé sur 1, 2 ou 3 datacentres physiquement distincts en France, avec isolation physique et logique. 
Chaque client dispose d’un rack, réseau et serveurs dédiés, gérés via une couche logicielle propriétaire et API OpenStack. L’architecture supporte la conformité au référentiel SecNumCloud de l’ANSSI.

Le produit nécessite une connectivité publique pour permettre la migration des données entrantes ou sortantes.
Aujourd’hui, la connectivité publique se fait via un produit supplémentaire Managed Dedicated Cloud - SecNumCloud qui est une solution temporaire le temps de mettre en place la une connectivité publique dédiée.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

Aucun frais de résiliation spécifique n’est appliqué : la suppression du service arrête la facturation immédiatement. Les crédits OVHcloud éventuellement associés ne sont pas transférables. Il incombe au client d’exporter ses données, images, configurations et logs avant suppression, car leur effacement est irréversible.

La période d’engagement par défaut sur le service est de 12 mois. L’export des données est possible avant la fin de cette période.

## Conservation des données après résiliation du contrat

Après suppression du service ou résiliation du contrat, OVHcloud supprime définitivement toutes les données, images, volumes, configurations et logs du service. Il est donc impératif d’exporter toutes les données nécessaires avant suppression, aucune restauration n’étant possible après coup.

A la fin du service, OVHcloud opère un effacement sécurisé. Cet effacement fera l’objet d’un préavis de 21 jours calendaires.
