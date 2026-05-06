---
title: 'Architectures Multi-AZ pour OVHcloud Connect'
excerpt: 'Comprenez comment les architectures Multi-AZ renforcent la résilience d''OVHcloud Connect'
updated: 2026-02-18
---

## Objectif

Le **Multi-AZ (Multiple Availability Zones)** est une stratégie d'architecture où vos ressources et connexions réseau sont réparties sur deux datacenters physiquement séparés ou plus (Availability Zones) au sein d'une région. Cela protège contre la défaillance d'un site unique.

## Pourquoi le Multi-AZ est important pour OVHcloud Connect

Un lien OVHcloud Connect unique passant par un seul PoP constitue un **point unique de défaillance**. Si ce PoP, le cross-connect ou le lien physique subit une panne, votre connectivité privée est perdue.

Les architectures Multi-AZ répondent à cela en établissant des **connexions redondantes via différents PoPs ou Availability Zones**, afin que le trafic puisse être automatiquement réacheminé en cas de défaillance d'un chemin.

## Vue d'ensemble de l'architecture

![Architecture Multi-AZ](image.png)

## Comment fonctionne le Multi-AZ avec OVHcloud Connect

1. **Commandez deux services OVHcloud Connect** dans deux **PoPs différents**.
2. **Configurez BGP sur les deux liens** avec les priorités de routes appropriées (en utilisant des attributs BGP comme la Local Preference, le MED ou l'AS-path prepending) afin que le trafic privilégie un chemin tout en pouvant basculer sur l'autre.
3. **Répartissez vos ressources OVHcloud** sur plusieurs Availability Zones au sein de la même région.
4. **Testez le basculement** en simulant une coupure de lien et en vérifiant que le trafic bascule sur le chemin de secours.

## Multi-AZ et configuration BGP

Pour un basculement automatique, votre configuration BGP doit distinguer le chemin principal du chemin de secours. Approches courantes :

- **Local Preference** — Définissez une Local Preference plus élevée sur les routes apprises depuis le lien principal.
- **AS-path prepending** — Allongez l'AS-path du chemin de secours pour qu'il soit moins privilégié.
- **MED (Multi-Exit Discriminator)** — Utilisez les valeurs MED pour influencer le routage entrant depuis OVHcloud.

Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md) pour des instructions de configuration détaillées.

## Quand utiliser le Multi-AZ

| Scénario | Recommandation |
|---|---|
| Workloads de test / développement | Une connexion unique est généralement suffisante |
| Production non critique | Connexion unique avec supervision |
| Production critique pour l'activité | **Multi-AZ recommandé** |
| Workloads réglementés / soumis à conformité | **Multi-AZ requis** |

## Et ensuite ?

- Découvrez les [SLAs](../1.7_slas/guide.fr-fr.md) et l'impact du Multi-AZ sur vos garanties de disponibilité
- Consultez le [guide de configuration des AZ](../3.6_vrack_network_setup/guide.fr-fr.md) pour mettre en place des sous-réseaux entre zones
- Explorez les [tutoriels d'architectures résilientes](../4.2_resilient/4.1.2_onprem_resilient/guide.fr-fr.md) pour des exemples pas à pas

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
