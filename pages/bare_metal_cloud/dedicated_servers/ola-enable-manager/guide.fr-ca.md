---
title: "OVHcloud Link Aggregation via l’espace client (Dédié)"
excerpt: "Activez OVHcloud Link Aggregation (OLA) sur votre serveur dédié directement depuis l’espace client OVHcloud"
updated: 2026-04-20
---

## Objectif

La technologie OVHcloud Link Aggregation (OLA) est conçue par nos équipes pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. En quelques clics, vous pouvez agréger vos cartes réseau et rendre vos liaisons réseau redondantes. Cela signifie que si une liaison tombe en panne, le trafic est automatiquement redirigé vers une autre liaison disponible.<br>
L'agrégation se base sur la technologie IEEE 802.3ad, ou Link Aggregation Control Protocol (LACP).

**Découvrez comment configurer OLA dans votre espace client OVHcloud.**

## Prérequis

- Disposer d'un [serveur dédié OVHcloud](/links/bare-metal/bare-metal) de gamme Advance, Scale ou High Grade
- Un système d'exploitation / hyperviseur supportant le protocole d'aggrégation 802.3ad (LACP)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## En pratique

> [!warning]
>
> La configuration OLA se fait sur la totalité des interfaces réseaux. Elles formeront une « agrégation privée ».
>
> Suite à la mise en œuvre d'OLA, l'IP publique ne sera donc plus accessible.
>

### Configurer OLA dans votre espace client OVHcloud

Pour commencer à configurer OLA, ouvrez l'onglet `Interfaces réseau`{.action} sur la page de gestion de votre serveur.

Dans l'onglet `Interfaces réseau`{.action}, cliquez sur le bouton `Agrégation réseaux`{.action} dans la section **Contrôleurs d'interfaces réseau (NICs)**.

Deux tableaux vous seront présentés :
- À gauche, la configuration actuelle de vos interfaces réseau ;
- À droite, la configuration simulée de vos interfaces réseau agrégées.

Dans le champ situé sous les tableaux, saisissez un nom pour votre agrégation de liens.

Une fois que vous avez vérifié que la configuration de l'agrégation correspond à vos besoins réseau, cliquez sur `Activer l'agrégation`{.action} pour procéder.

L'opération peut prendre quelques minutes. Une fois celle-ci terminée, l'étape suivante consiste à configurer les interfaces dans votre système d'exploitation via une liaison NIC ou une équipe NIC. Pour connaître la méthode à appliquer, consultez les guides suivants qui la détaillent pour les systèmes d'exploitation les plus populaires :

- [Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Debian 9 via ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [Comment configurer votre NIC pour l'agrégation de liens OVHcloud dans SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [Comment configurer votre NIC pour l'agrégation de liens OVHcloud dans Debian 12 ou Ubuntu 24.04 via Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

### Vérification du statut OLA

Vous pouvez vérifier le statut de votre agrégation de liens (OLA) dans l'onglet `Interfaces réseau`{.action}. En bas de la section **Bande passante**, repérez la ligne **OVHcloud Link Aggregation**.

Il existe quatre statuts possibles :
- **Unavailable** : OLA n'est pas pris en charge sur ce modèle de serveur dédié.
- **Available** : OLA est pris en charge mais n'est pas configuré.
- **Active - Fully Private** : OLA est activé ; toutes les interfaces physiques sont agrégées dans un seul lien privé pour une utilisation vRack.
- **Active - Double LAG** : OLA est pré-activé ; les interfaces physiques sont réparties en deux agrégats distincts (un public, un privé).

> [!primary]
> Le statut **Active - Double LAG** est une configuration spécifique généralement réservée aux gammes de serveurs Scale et High-Grade, qui disposent de quatre interfaces réseau physiques.
>

### Restauration des valeurs par défaut d'OLA

Pour restaurer OLA aux valeurs par défaut, cliquez sur le bouton `Désagréger les réseaux`{.action} dans la section **Contrôleurs d'interfaces réseau (NICs)**. Cliquez sur `Confirmer`{.action} dans le menu contextuel.

L'opération peut prendre quelques minutes.

## Aller plus loin

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Debian 9 via ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud dans SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud dans Debian 12 ou Ubuntu 24.04 via Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

Échangez avec notre [communauté d'utilisateurs](/links/community).
