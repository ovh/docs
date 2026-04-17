---
title: "Configurer l'agrégation de liens OLA dans votre espace client"
excerpt: "Découvrez comment activer l'agrégation de liens OVHcloud dans votre espace client."
updated: 2026-04-17
---

## Objectif

La technologie OVHcloud Link Aggregation (OLA) est conçue par nos équipes pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. En quelques clics, vous pouvez agréger vos cartes réseau et rendre vos liaisons réseau redondantes. Cela signifie que si une liaison tombe en panne, le trafic est automatiquement redirigé vers une autre liaison disponible.<br>
L'agrégation se base sur la technologie IEEE 802.3ad, ou Link Aggregation Control Protocol (LACP).

**Découvrez comment configurer OLA dans votre espace client OVHcloud.**

## Prérequis

- Disposer d'un [serveur dédié OVHcloud](/links/bare-metal/bare-metal) de gamme Advance, Scale ou High Grade
- Être connecté à votre [espace client OVHcloud](/links/manager)
- Un système d'exploitation / hyperviseur supportant le protocole d'agrégation 802.3ad (LACP)

## En pratique

> [!warning]
>
> La configuration OLA se fait sur la totalité des interfaces réseaux. Elles formeront une « agrégation privée ».
>
> Suite à la mise en œuvre d'OLA, l'IP publique ne sera donc plus accessible.
>

### Configurer OLA dans votre espace client OVHcloud

Pour commencer à configurer OLA, connectez-vous à [votre espace client OVHcloud](/links/manager) et sélectionnez l'onglet `Bare Metal Cloud`{.action}. Cliquez sur `Serveurs dédiés`{.action} et sélectionnez votre serveur dans la liste.

Dans l'onglet `Interfaces réseau`{.action}, cliquez sur le bouton `Agrégation réseaux`{.action} en haut de la section **Contrôleurs d'interface réseau**.

Deux tableaux vous seront présentés :
- À gauche, la configuration actuelle de vos interfaces réseau ;
- À droite, la configuration simulée de vos interfaces réseau agrégées.

Dans le champ situé sous les tableaux, saisissez un nom pour votre agrégation de liens.

Une fois que vous avez vérifié que la configuration de l'agrégation correspond à vos besoins réseau, cliquez sur `Activer l'agrégation`{.action} pour procéder.

L'opération peut prendre quelques minutes. Une fois celle-ci terminée, l'étape suivante consiste à configurer les interfaces dans votre système d'exploitation via une liaison NIC ou une équipe NIC. Pour connaître la méthode à appliquer, consultez les guides suivants qui la détaillent pour les systèmes d'exploitation les plus populaires :

- [Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Debian 9 via ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [Comment configurer votre NIC pour l'agrégation de liens OVHcloud dans SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [Comment configurer votre NIC pour l'agrégation de liens OVHcloud dans Debian 12 ou Ubuntu 24.04 via Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

### Vérification du statut OLA

Le statut de la configuration OLA peut être vérifié en bas de la section **Bande passante**, sous la ligne **OVHcloud Link Aggregation**, dans l'onglet `Interfaces réseau`{.action}.

Vous pouvez vérifier le statut de votre agrégation de liens (OLA) dans l'onglet `Interfaces réseau`{.action}. En bas de la section **Bande passante**, repérez la ligne **OVHcloud Link Aggregation**.

Il existe quatre statuts possibles :
- **Unavailable** : OLA n'est pas pris en charge sur ce modèle de serveur dédié.
- **Available** : OLA est pris en charge mais n'est pas configuré.
- **Active - Fully Private** : OLA est activé ; toutes les interfaces physiques sont agrégées dans un seul lien privé pour une utilisation vRack.
- **Active - Double LAG** : OLA est pré-activé ; les interfaces physiques sont réparties en deux agrégats distincts (un public, un privé).

> [!primary]
> **Note :** Le statut **Active - Double LAG** est une configuration spécifique généralement réservée aux gammes de serveurs Scale et High-Grade, qui disposent de quatre interfaces réseau physiques.
>

### Restauration des valeurs par défaut d'OLA

Pour restaurer OLA aux valeurs par défaut, cliquez sur le bouton `Désagréger les réseaux`{.action} en haut de la section **Contrôleurs d'interface réseau**. Cliquez sur `Confirmer`{.action} dans le menu contextuel.

L'opération peut prendre quelques minutes.

## Aller plus loin

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Debian 9 via ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud dans SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud dans Debian 12 ou Ubuntu 24.04 via Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

Échangez avec notre [communauté d'utilisateurs](/links/community).
