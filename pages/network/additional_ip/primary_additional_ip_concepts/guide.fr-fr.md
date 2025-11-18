---
title: Concepts - Primary IP et Additional IP
excerpt: "Comprendre les différences entre les adresses IP Primary et Additional, et découvrir leurs cas d'utilisation."
updated: 2025-09-22
---

## Objectif

Ce document vise à clarifier les distinctions entre les adresses Primary IP et Additional IP au sein de l'écosystème OVHcloud. Vous y découvrirez leurs caractéristiques et leurs cas d'utilisation, afin de prendre des décisions éclairées pour une architecture réseau flexible et à haute disponibilité.

Dans l'univers Bare Metal, vous pouvez utiliser les adresses Primary IP de vos services ou configurer des adresses Additional IP, qui offrent un moyen flexible de gérer l'accès public à vos services. Elles peuvent rester agnostiques de l'infrastructure et être mises à l'échelle ou migrées si nécessaire.

## Les adresses IP chez OVHcloud : Primary, Additional

OVHcloud propose différents types d'adresses IP, chacune conçue pour des cas d'utilisation spécifiques et offrant différents niveaux de flexibilité et de fonctionnalité. Comprendre les distinctions entre Primary IP et Additional IP est crucial pour une gestion de réseau et un déploiement de services efficaces.

Dans l’univers Public Cloud, nous proposons également des adresses IP flottantes (**Floating IP**) cloud natives, avec un modèle de facturation à l’usage.

Vous trouverez plus d’informations sur les différences entre les Floating IP et les Additional IP dans [ce guide](/pages/public_cloud/public_cloud_network_services/concepts-02-additional-ip-vs-floating-ip).

### Les adresses Primary IP

Les adresses Primary IP sont fondamentales pour les services OVHcloud, fournissant une connectivité immédiate et une accessibilité dès le déploiement du service.

#### Caractéristiques

- **Pré-configurées** : Les adresses Primary IP sont pré-attachées à vos services OVHcloud et servent d'adresse IP par défaut, ce qui simplifie la configuration initiale.
- **Objectif** : Leur objectif principal est de permettre une communication facile et d'assurer l'accessibilité pour le service associé.
- **Disponibilité** : Les adresses Primary IPv4 et IPv6 sont disponibles avec de nombreux produits OVHcloud. Reportez-vous aux pages produits spécifiques pour la disponibilité détaillée.
- **Configuration** : Les détails de configuration des adresses IPv4 et IPv6, tels que l'adresse, la taille du préfixe ou la passerelle par défaut, se trouvent dans [l'espace client OVHcloud](/links/manager), généralement dans l'onglet `Réseau`{.action} du produit concerné.

#### Cas d'utilisation

- Interface réseau par défaut pour un serveur ou un service.
- Connectivité de base et accès à la gestion.

> [!success]
> **Guide associé** :
> - [Configurer une adresse IPv6 principale sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/network_ipv6)

### Les adresses Additional IP

Les adresses Additional IP offrent une flexibilité accrue et sont agnostiques de l'infrastructure, ce qui signifie qu'elles ne sont pas liées à un matériel ou une solution sous-jacente spécifique. Cela permet une réaffectation dynamique entre différents services au sein de la même région (à l’exception des régions eu-west-gra, eu-west-sbg et eu-west-rbx).

Pour obtenir plus d'information à propos du déplacement d'Additional IP, veuillez consulter [ce guide](/pages/bare_metal_cloud/dedicated_servers/move-failover-ip).

#### Caractéristiques

- **Flexibilité** : Offrent une plus grande flexibilité par rapport aux Primary IP.
- **Agnostique de l'infrastructure** : Non liées à un matériel spécifique, ce qui permet une réaffectation dynamique.
- **Réaffectation dynamique** : Peuvent être réaffectées dynamiquement entre différents services au sein de la même région.
- **Disponibilité** :
    - **IPv4** : Peuvent être utilisées avec de nombreux produits.
    - **IPv6** : Prise en charge des Additional IPv6 lorsqu'elles sont utilisées avec un vRack.

#### Méthodes d'attachement

Les adresses Additional IP peuvent être attachées aux services OVHcloud de deux manières principales (la disponibilité peut varier) :

1.  **Via l'interface publique** :

    - Disponible pour les Additional IPv4 uniquement.
    - Une adresse Additional IPv4 (ou un bloc d'adresses) peut être utilisée de manière similaire à l'adresse Primary IP d'un serveur.
    - Reportez-vous aux spécifications de votre produit pour obtenir les détails de configuration du réseau/de la passerelle.

2.  **Via le réseau privé vRack** :

    - Prise en charge des Additional IPv4 et Additional IPv6.
    - Disponible pour les produits compatibles avec le vRack.
    - **Avantages d'une utilisation avec un vRack** :
        - **Franchissement des frontières régionales** : Alors que les adresses Additional IP ne peuvent être déplacées qu'entre des produits de la région dans laquelle elles ont été émises, leur utilisation sur un vRack permet aux clients de définir la région de la passerelle (où le trafic public entre et sort du réseau vRack), tandis que les services de backend peuvent être utilisés dans n'importe quel emplacement prenant en charge le réseau vRack.
        - **Routage de sous-réseau IPv6** : Cette fonctionnalité n'est disponible que pour les Additional IPv6 lorsqu'elles sont utilisées sur un réseau vRack, ce qui permet un contrôle plus granulaire du trafic IPv6 au sein de votre réseau privé.
        - **Failover automatisé avec VRRP/CARP** : Les protocoles VRRP (*Virtual Router Redundancy Protocol*) et CARP (*Common Address Redundancy Protocol*) sur un réseau vRack permettent un basculement automatique. L'Additional IP est attachée à un serveur maître, avec des serveurs de secours qui prennent le relais instantanément en cas de défaillance du serveur maître. Cela crée une infrastructure résiliente, s'auto-réparant, à haute disponibilité et qui ne nécessite aucune intervention manuelle.

#### Cas d'utilisation

- **Failover manuel et automatisé** : Réaffectez rapidement des adresses IP aux services de sauvegarde en cas de défaillance des services principaux, manuellement ou automatiquement via les protocoles VRRP ou CARP ;
- **Load Balancing** : Attachez une Additional IP à votre Load Balancer OVHcloud, et redirigez le trafic de manière transparente vers un Load Balancer de secours lors d'opérations de maintenance ou de failover ;
- **IP aliasing** : Attribuez plusieurs adresses IP à la même interface réseau et hébergez plusieurs sites web ou services sur un seul serveur ;
- **Migration de service** : Migrez des services entre serveurs sans changer l'adresse IP publique ;
- **Géolocalisation IP** : Présentez une adresse IP locale aux clients de différentes régions, afin d'améliorer la latence et l'expérience utilisateur.

> [!success]
> **Guides associés** :
> - [Configurer un bloc Additional IPv6 dans un vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)
> - [Configurer un bloc Additional IP dans le vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)
> - [Déplacer une Additional IP](/pages/bare_metal_cloud/dedicated_servers/move-failover-ip)
> - [Configurer des Additional IP en mode bridge sur vos machines virtuelles](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

## Pour aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).