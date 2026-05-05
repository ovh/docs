---
title: 'Quick Start : connexion Direct vers OVHcloud'
excerpt: 'Suivez les étapes essentielles pour établir une connexion privée et directe vers OVHcloud'
updated: 2026-02-18
---

## Objectif

Ce guide vous accompagne dans les étapes essentielles pour établir une **connexion privée et directe** entre votre infrastructure et OVHcloud — sans passer par un provider tiers.

## Avant de commencer

Assurez-vous de disposer de :

- Un **compte OVHcloud** avec une facturation configurée
- D'un équipement (ou d'un circuit) dans un **datacenter où OVHcloud dispose d'un PoP** (consultez [Emplacements des PoPs](../1.4_pop_locations_regions/guide.fr-fr.md))
- D'un **routeur** prenant en charge BGP et les interfaces fibre optique monomode
- D'un **plan d'adressage IP** prévu (IPs de peering et préfixes à annoncer)
- D'un **ASN** (Autonomous System Number) privé ou public

## Vue d'ensemble des étapes

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="400" fill="#f8f9fa" rx="8"/>

  <!-- Step 1 -->
  <circle cx="60" cy="45" r="20" fill="#1565c0"/>
  <text x="60" y="50" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">1</text>
  <text x="95" y="50" fill="#333" font-weight="bold">Commander OVHcloud Connect Direct</text>

  <!-- Step 2 -->
  <circle cx="60" cy="105" r="20" fill="#1565c0"/>
  <text x="60" y="110" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">2</text>
  <text x="95" y="110" fill="#333" font-weight="bold">Recevoir la LOA (Lettre d'autorisation)</text>

  <!-- Step 3 -->
  <circle cx="60" cy="165" r="20" fill="#1565c0"/>
  <text x="60" y="170" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">3</text>
  <text x="95" y="170" fill="#333" font-weight="bold">Installer le cross-connect physique</text>

  <!-- Step 4 -->
  <circle cx="60" cy="225" r="20" fill="#1565c0"/>
  <text x="60" y="230" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">4</text>
  <text x="95" y="230" fill="#333" font-weight="bold">Configurer votre PoP (session BGP)</text>

  <!-- Step 5 -->
  <circle cx="60" cy="285" r="20" fill="#1565c0"/>
  <text x="60" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">5</text>
  <text x="95" y="290" fill="#333" font-weight="bold">Associer à votre vRack</text>

  <!-- Step 6 -->
  <circle cx="60" cy="345" r="20" fill="#2e7d32"/>
  <text x="60" y="350" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">6</text>
  <text x="95" y="350" fill="#333" font-weight="bold">Tester et vérifier la connectivité</text>

  <!-- Vertical line -->
  <line x1="60" y1="65" x2="60" y2="85" stroke="#ccc" stroke-width="2"/>
  <line x1="60" y1="125" x2="60" y2="145" stroke="#ccc" stroke-width="2"/>
  <line x1="60" y1="185" x2="60" y2="205" stroke="#ccc" stroke-width="2"/>
  <line x1="60" y1="245" x2="60" y2="265" stroke="#ccc" stroke-width="2"/>
  <line x1="60" y1="305" x2="60" y2="325" stroke="#ccc" stroke-width="2"/>
</svg>
```

### Étape 1 — Commander OVHcloud Connect Direct

1. Connectez-vous à l'**espace client OVHcloud**.
2. Rendez-vous dans **Network** puis **OVHcloud Connect**.
3. Sélectionnez **Connexion Direct**.
4. Choisissez votre **emplacement de PoP** et la **bande passante** (par exemple 1 Gbps ou 10 Gbps).
5. Renseignez les détails techniques : votre ASN, vos coordonnées et toute instruction particulière pour le datacenter.
6. Vérifiez la tarification et confirmez la commande.

Pour les étapes de commande détaillées, consultez [Commander OVHcloud Connect Direct](../3.1_order_direct/guide.fr-fr.md).

### Étape 2 — Recevoir la LOA

Une fois votre commande validée, OVHcloud vous envoie une **Lettre d'autorisation (LOA)** par e-mail. Ce document contient :

- La référence du datacenter et du rack/cage de l'équipement OVHcloud
- La désignation du port côté OVHcloud
- Les instructions pour l'opérateur du datacenter

### Étape 3 — Installer le cross-connect physique

Remettez la LOA à votre **opérateur de datacenter** (ou prenez-la en charge vous-même si vous gérez votre propre cage). Il installera un câble de brassage en fibre optique entre le port de votre routeur et le port désigné d'OVHcloud.

Cette étape peut prendre quelques jours selon les processus du datacenter.

### Étape 4 — Associer à votre vRack

Reliez votre service OVHcloud Connect à votre **vRack** afin que vos ressources OVHcloud (serveurs, VMs, etc.) puissent communiquer via la connexion privée.

Consultez [Associer un OVHcloud Connect à votre vRack](../3.5_associate_vrack/guide.fr-fr.md).

### Étape 5 — Configurer BGP

Une fois le lien physique opérationnel :

1. Dans l'espace client OVHcloud, accédez à votre service OVHcloud Connect et **créez une configuration de PoP** avec les paramètres de session BGP.
2. Sur **votre routeur**, configurez un voisin BGP en utilisant l'IP de peering et l'ASN d'OVHcloud fournis dans les détails de configuration.
3. Annoncez les préfixes IP que vous souhaitez atteindre depuis OVHcloud.

Pour la configuration BGP détaillée, consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md).

### Étape 6 — Tester et vérifier

Effectuez ces vérifications pour confirmer que tout fonctionne :

| Vérification | Comment |
|---|---|
| **Lien physique** | Vérifiez que le port apparaît comme « up » dans l'espace client OVHcloud et sur votre routeur (`show interfaces`). |
| **Session BGP** | Vérifiez que la session est **Established** : `show ip bgp summary` (Cisco) ou `show bgp summary` (Juniper). |
| **Échange de routes** | Vérifiez que les routes d'OVHcloud apparaissent dans votre table de routage et inversement. |
| **Connectivité** | Effectuez un ping vers une ressource OVHcloud connue (par exemple une VM dans votre vRack) depuis votre réseau on-premises. |
| **Traceroute** | Exécutez un `traceroute` pour vérifier que le trafic emprunte bien le chemin privé (et non internet). |

## Dépannage

| Problème | Que vérifier |
|---|---|
| Le port apparaît « down » | Câble physique, compatibilité SFP/transceiver, statut du cross-connect côté datacenter |
| Session BGP bloquée en « Active » ou « Idle » | IPs de peering, configuration ASN, règles de pare-feu (port TCP 179) |
| Aucune route échangée | Filtres de préfixes BGP, configuration des route-maps, limites maximum-prefix |
| Impossible de pinguer les ressources OVHcloud | Association au vRack, ID VLAN, configuration des sous-réseaux dans l'AZ |

Si vous ne parvenez pas à résoudre le problème, [ouvrez un ticket de support](../3.10_incident_followup/guide.fr-fr.md) en joignant la sortie BGP, le statut des interfaces et les résultats du traceroute.

## Et ensuite ?

- Pour une connexion managée, consultez [Quick Start : connexion via Provider](../2.2_quick_start_provider/guide.fr-fr.md)
- Pour des montages résilients, consultez le [tutoriel On-Prem résilient](../4.2_resilient/4.1.2_onprem_resilient/guide.fr-fr.md)
- Mettez en place la [supervision](../3.9_monitor/guide.fr-fr.md) de votre connexion

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
