---
title: 'Commander OVHcloud Connect Direct'
excerpt: 'Découvrez comment commander une connexion physique directe vers OVHcloud depuis l''espace client ou via l''API'
updated: 2026-02-18
---

## Objectif

Ce guide explique comment commander une **connexion physique directe** vers OVHcloud depuis l'espace client OVHcloud ou via l'API.

## Prérequis

Avant de passer commande, préparez les informations suivantes :

| Information | Description |
|---|---|
| **Localisation du PoP** | Le datacenter dans lequel vous souhaitez vous connecter (consultez [Localisations des PoP](../1.4_pop_locations_regions/guide.fr-fr.md)) |
| **Bande passante** | Le débit de la connexion (par exemple 1 Gbps ou 10 Gbps) |
| **Votre ASN** | Votre numéro de système autonome (public ou privé) pour le peering BGP |
| **Plan d'adressage IP** | Les préfixes que vous comptez annoncer ainsi que le sous-réseau de peering |
| **Coordonnées** | Contacts techniques et de facturation pour la commande |
| **Instructions de cross-connect** | Références de cage/baie si vous disposez de votre propre espace dans le datacenter |

<!-- CP-NAV-START:network-ovhcloud-connect -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [OVHcloud Connect](/links/control-panel/network-ovhcloud-connect)
- **Pour accéder à vos services :** `Network`{.action} > `OVHcloud Connect`{.action}

---
<!-- CP-NAV-END:network-ovhcloud-connect -->

## Commander depuis l'espace client OVHcloud

1. Cliquez sur **Commander une nouvelle connexion**.
2. Sélectionnez **Connexion directe**.
3. Choisissez la **localisation du PoP** dans la liste des sites disponibles.
4. Sélectionnez la **bande passante** souhaitée (1 Gbps ou 10 Gbps).
5. Renseignez les **détails techniques** :
   - Votre ASN
   - VLAN ID préféré (le cas échéant)
   - Coordonnées pour la livraison de la LOA
   - Toute instruction particulière pour le cross-connect en datacenter
6. Vérifiez les **conditions tarifaires et contractuelles** (durée d'engagement minimale, redevance mensuelle).
7. **Confirmez** la commande.

Vous recevrez un e-mail de confirmation contenant la référence de votre commande ainsi que le délai de livraison estimé.

## Commander via l'API

Vous pouvez également passer commande de manière programmatique en utilisant l'[API OVHcloud](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1).

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

# Exemple : lister vos services OVHcloud Connect existants
# Consultez la console API pour connaître l'endpoint et les paramètres exacts
result = client.get('/ovhCloudConnect')
print(result)
```

> Reportez-vous au [guide d'automatisation](../1.6_automation/guide.fr-fr.md) pour les instructions de configuration de l'API.

## Et ensuite ?

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 120" font-family="Arial, sans-serif" font-size="11">
  <rect width="750" height="120" fill="#f8f9fa" rx="8"/>

  <rect x="15" y="35" width="140" height="50" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="85" y="55" text-anchor="middle" fill="#1565c0" font-weight="bold">Commande confirmée</text>
  <text x="85" y="72" text-anchor="middle" fill="#555" font-size="10">E-mail reçu</text>

  <rect x="195" y="35" width="140" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="265" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">LOA envoyée</text>
  <text x="265" y="72" text-anchor="middle" fill="#555" font-size="10">En quelques minutes</text>

  <rect x="375" y="35" width="140" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="445" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">Cross-connect</text>
  <text x="445" y="72" text-anchor="middle" fill="#555" font-size="10">Installé par l'opérateur DC</text>

  <rect x="555" y="35" width="140" height="50" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="625" y="55" text-anchor="middle" fill="#2e7d32" font-weight="bold">Port actif</text>
  <text x="625" y="72" text-anchor="middle" fill="#555" font-size="10">Prêt à configurer</text>

  <line x1="155" y1="60" x2="195" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a4)"/>
  <line x1="335" y1="60" x2="375" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a4)"/>
  <line x1="515" y1="60" x2="555" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a4)"/>

  <defs>
    <marker id="a4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

1. **Commande confirmée** — Vous recevez un e-mail contenant la référence de votre commande.
2. **LOA livrée** — OVHcloud émet la Lettre d'autorisation (LOA) **en quelques minutes** après la commande. La LOA contient les informations relatives au datacenter nécessaires à l'installation du cross-connect.
3. **Cross-connect installé** — Transmettez la LOA à l'opérateur de votre datacenter. Il procède à l'installation du jarretière en fibre. Le délai dépend du site (de quelques jours à 2 semaines).
4. **Activation du port** — Une fois le cross-connect en place et la lumière détectée par OVHcloud, le port devient actif et le service est livré. Vous pouvez alors configurer BGP et associer le service à votre vRack.

> [!warning]
>
> Après la commande, vous disposez de **60 jours** pour finaliser l'interconnexion (commander le cross-connect et raccorder votre équipement). Au-delà de 60 jours, même sans détection de lumière, le service est considéré comme opérationnel et **la facturation démarre**.
>

## Tarification et facturation

- OVHcloud Connect Direct est facturé **mensuellement**.
- Le tarif dépend de la localisation du PoP et du palier de bande passante.
- Une **durée d'engagement minimale** peut s'appliquer (à vérifier lors de la commande).
- Les frais de cross-connect facturés par l'opérateur du datacenter sont distincts et facturés par cet opérateur.

## Et ensuite ?

- [Recevoir et utiliser votre LOA](../3.11_cross_connect_loa/guide.fr-fr.md)
- [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md)
- [Associer le service à votre vRack](../3.5_associate_vrack/guide.fr-fr.md)

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
