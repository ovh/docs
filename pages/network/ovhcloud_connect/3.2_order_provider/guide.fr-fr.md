---
title: 'Commander OVHcloud Connect Provider'
excerpt: 'Découvrez comment commander un service OVHcloud Connect via un opérateur réseau tiers'
updated: 2026-02-18
---

## Objectif

Ce guide explique comment commander un service OVHcloud Connect via un **opérateur réseau tiers** (par exemple Megaport, Equinix Fabric, Console Connect).

## Prérequis

| Information | Description |
|---|---|
| **Opérateur** | L'opérateur tiers que vous souhaitez utiliser (consultez [Opérateurs](../1.3_providers/guide.fr-fr.md)) |
| **Localisation du PoP** | Le PoP OVHcloud auquel l'opérateur va se raccorder |
| **Bande passante** | Le débit souhaité (par exemple 100 Mbps, 1 Gbps, 10 Gbps — les options varient selon l'opérateur) |
| **Votre ASN et plan IP** | OVHcloud Connect Provider est toujours un service Layer 3 ; vous avez besoin d'un ASN et d'IP de peering pour BGP |

## Commander depuis l'espace client OVHcloud

1. **Connectez-vous** à l'[espace client OVHcloud](https://www.ovh.com/manager/).
2. Rendez-vous dans **Network** → **OVHcloud Connect**.
3. Cliquez sur **Commander une nouvelle connexion**.
4. Sélectionnez **Connexion via un opérateur**.
5. Choisissez votre **opérateur** dans la liste.
6. Sélectionnez la **localisation du PoP** et la **bande passante**.
7. OVHcloud génère une **clé de pairing** (clé de service).
8. Vérifiez le tarif et **confirmez** la commande.

> **Important :** copiez la clé de pairing — vous en aurez besoin à l'étape suivante.

## Partager la clé de pairing avec votre opérateur

La clé de pairing identifie votre commande OVHcloud Connect et permet à l'opérateur de provisionner la connexion.

### Sur Megaport

1. Connectez-vous au [portail Megaport](https://portal.megaport.com/).
2. Créez un nouveau **VXC (Virtual Cross Connect)**.
3. Sélectionnez **OVHcloud** comme destination.
4. Saisissez la **clé de pairing** fournie par OVHcloud.
5. Choisissez la bande passante puis confirmez.

> Documentation Megaport : [docs.megaport.com](https://docs.megaport.com/)

### Sur Equinix Fabric

1. Connectez-vous à [Equinix Fabric](https://fabric.equinix.com/).
2. Créez une nouvelle **connexion**.
3. Sélectionnez **OVHcloud** dans le catalogue des fournisseurs de services.
4. Saisissez la **clé de service** (clé de pairing).
5. Choisissez le débit puis confirmez.

> Documentation Equinix Fabric : [docs.equinix.com/fabric](https://docs.equinix.com/fabric/)

### Sur Console Connect

1. Connectez-vous à [Console Connect](https://app.consoleconnect.com/).
2. Recherchez **OVHcloud** dans la marketplace.
3. Créez une nouvelle connexion et saisissez la **clé de pairing**.
4. Choisissez la bande passante puis confirmez.

> Documentation Console Connect : [consoleconnect.com/help](https://www.consoleconnect.com/help/)

## Et ensuite ?

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 120" font-family="Arial, sans-serif" font-size="11">
  <rect width="750" height="120" fill="#f8f9fa" rx="8"/>

  <rect x="15" y="35" width="140" height="50" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="85" y="55" text-anchor="middle" fill="#1565c0" font-weight="bold">Clé de pairing</text>
  <text x="85" y="72" text-anchor="middle" fill="#555" font-size="10">Générée par OVHcloud</text>

  <rect x="195" y="35" width="140" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="265" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">Mise en place opérateur</text>
  <text x="265" y="72" text-anchor="middle" fill="#555" font-size="10">Minutes à heures</text>

  <rect x="375" y="35" width="140" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="445" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">Lien actif</text>
  <text x="445" y="72" text-anchor="middle" fill="#555" font-size="10">OVHcloud confirme</text>

  <rect x="555" y="35" width="140" height="50" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="625" y="55" text-anchor="middle" fill="#2e7d32" font-weight="bold">Configurer et tester</text>
  <text x="625" y="72" text-anchor="middle" fill="#555" font-size="10">BGP + vRack</text>

  <line x1="155" y1="60" x2="195" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a5)"/>
  <line x1="335" y1="60" x2="375" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a5)"/>
  <line x1="515" y1="60" x2="555" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a5)"/>

  <defs>
    <marker id="a5" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

1. **Clé de pairing générée** — OVHcloud fournit la clé après la passation de votre commande.
2. **Provisionnement par l'opérateur** — L'opérateur utilise la clé pour mettre en place le lien virtuel ou physique. Les opérateurs à la demande (Megaport, Equinix) le réalisent généralement en quelques minutes.
3. **Activation du lien** — OVHcloud active la connexion et le statut passe à « Actif » dans l'espace client.
4. **Configurer et tester** — Vérifiez le peering BGP, associez le service à votre vRack et testez la connectivité.

## Tarification et facturation

- **OVHcloud** vous facture le service OVHcloud Connect Provider (mensuellement).
- **Votre opérateur** vous facture séparément son circuit/VXC (les tarifs varient selon l'opérateur, la bande passante et le contrat).
- Assurez-vous de bien comprendre les deux structures de facturation avant de passer commande.

## Et ensuite ?

- [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md)
- [Associer le service à votre vRack](../3.5_associate_vrack/guide.fr-fr.md)
- [Superviser votre connexion](../3.9_monitor/guide.fr-fr.md)

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
