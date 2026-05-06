---
title: 'Quick Start : connexion à OVHcloud avec un Provider'
excerpt: 'Suivez les étapes pour vous connecter à OVHcloud via un opérateur réseau tiers'
updated: 2026-02-18
---

## Objectif

Ce guide vous accompagne dans la connexion à OVHcloud via un **opérateur réseau tiers** (par exemple Megaport, Equinix Fabric ou Console Connect). Un provider prend en charge la connectivité physique pour votre compte, ce qui vous évite d'avoir à être présent dans le même datacenter qu'OVHcloud.

## Avant de commencer

Assurez-vous de disposer de :

- Un **compte OVHcloud** avec une facturation configurée
- D'un contrat ou d'un compte chez un **provider pris en charge** (consultez [Providers](../1.3_providers))
- D'un **routeur** prenant en charge le peering BGP (OVHcloud Connect Provider est toujours un service Layer 3)
- D'un **plan d'adressage IP** prévu et d'un **ASN**

<!-- CP-NAV-START:network-ovhcloud-connect -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [OVHcloud Connect](/links/control-panel/network-ovhcloud-connect)
- **Pour accéder à vos services :** `Network`{.action} > `OVHcloud Connect`{.action}

---
<!-- CP-NAV-END:network-ovhcloud-connect -->

## Vue d'ensemble des étapes

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 370" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="370" fill="#f8f9fa" rx="8"/>

  <!-- Step 1 -->
  <circle cx="60" cy="45" r="20" fill="#e65100"/>
  <text x="60" y="50" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">1</text>
  <text x="95" y="50" fill="#333" font-weight="bold">Commander OVHcloud Connect Provider</text>

  <!-- Step 2 -->
  <circle cx="60" cy="105" r="20" fill="#e65100"/>
  <text x="60" y="110" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">2</text>
  <text x="95" y="110" fill="#333" font-weight="bold">Partager la clé d'appairage avec votre provider</text>

  <!-- Step 3 -->
  <circle cx="60" cy="165" r="20" fill="#e65100"/>
  <text x="60" y="170" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">3</text>
  <text x="95" y="170" fill="#333" font-weight="bold">Le provider provisionne la connexion</text>

  <!-- Step 4 -->
  <circle cx="60" cy="225" r="20" fill="#e65100"/>
  <text x="60" y="230" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">4</text>
  <text x="95" y="230" fill="#333" font-weight="bold">Vérifier la session BGP et le routage</text>

  <!-- Step 5 -->
  <circle cx="60" cy="285" r="20" fill="#e65100"/>
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

### Étape 1 — Commander OVHcloud Connect Provider

1. Sélectionnez **Connexion via Provider**.
2. Choisissez votre **provider**, votre **emplacement de PoP** et la **bande passante**.
3. Vérifiez la tarification et soumettez la commande.
4. OVHcloud génère une **clé d'appairage** (également appelée clé de service) destinée à votre provider.

Pour les étapes détaillées, consultez [Commander OVHcloud Connect Provider](../3.2_order_provider).

### Étape 2 — Partager la clé d'appairage

Communiquez la **clé d'appairage** à votre provider. Cette clé permet au provider d'identifier et d'activer la connexion vers OVHcloud pour votre compte.

- Sur **Megaport** : créez un VXC (Virtual Cross Connect) vers OVHcloud et saisissez la clé d'appairage.
- Sur **Equinix Fabric** : créez une connexion vers OVHcloud et fournissez la clé de service.
- Sur **Console Connect** : initiez une connexion vers OVHcloud et utilisez la clé d'appairage.

### Étape 3 — Le provider provisionne la connexion

Le provider met en place le lien physique et logique entre son infrastructure et le PoP OVHcloud. Cela est généralement rapide (de quelques minutes à quelques heures pour les providers à la demande comme Megaport), mais les délais peuvent varier.

Vous pouvez suivre le statut de la connexion à la fois dans l'**espace client OVHcloud** et dans le **portail de votre provider**.

### Étape 4 — Associer à votre vRack

Reliez le service OVHcloud Connect à votre **vRack** :

1. Dans l'espace client OVHcloud, rendez-vous sur **vRack**.
2. Ajoutez votre service OVHcloud Connect.
3. Configurez les VLANs et sous-réseaux requis.

Consultez [Associer un OVHcloud Connect à votre vRack](../3.5_associate_vrack).

### Étape 5 — Vérifier la session BGP et le routage

OVHcloud Connect Provider est toujours un service Layer 3 — un peering BGP est établi entre votre routeur (ou celui de votre provider, selon l'offre du provider) et le PoP OVHcloud. Vérifiez dans l'espace client OVHcloud et dans le portail de votre provider que la session est établie et que les routes sont bien échangées.

Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp) pour des instructions détaillées.

### Étape 6 — Tester et vérifier

| Vérification | Comment |
|---|---|
| **Statut de la connexion** | Affiche « Active » dans l'espace client OVHcloud et dans le portail du provider |
| **Session BGP** | Établie — vérifiez sur votre routeur et dans l'espace client OVHcloud |
| **Routes** | Vos préfixes sont visibles côté OVHcloud ; les routes OVHcloud sont visibles de votre côté |
| **Ping** | Effectuez un ping vers une ressource OVHcloud depuis votre réseau |
| **Traceroute** | Vérifiez que le trafic emprunte le lien privé et non internet |

## Dépannage

| Problème | Que vérifier |
|---|---|
| Connexion bloquée en « Pending » | Vérifiez que la clé d'appairage a été correctement saisie côté provider |
| Le provider affiche « Active » mais OVHcloud affiche « Down » | Contactez le support OVHcloud — il peut s'agir d'un délai de provisionnement |
| La session BGP ne s'établit pas | Vérifiez les IPs de peering, l'ASN et l'ID VLAN à la fois sur votre routeur et dans la configuration de PoP OVHcloud |
| Latence élevée ou perte de paquets | Consultez la page de statut réseau du provider ; exécutez un traceroute pour identifier où se produisent les délais |

## Et ensuite ?

- Pour une connexion auto-gérée, consultez [Quick Start : connexion Direct](../2.1_quick_start_direct)
- Mettez en place la [supervision](../3.9_monitor)
- Explorez les [architectures résilientes](../4.2_resilient/4.1.2_onprem_resilient)

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
