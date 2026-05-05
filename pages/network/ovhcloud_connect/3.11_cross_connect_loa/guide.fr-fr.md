---
title: 'Commander/résilier un cross-connect avec une LOA'
excerpt: 'Découvrez comment commander ou résilier un cross-connect physique à l''aide d''une lettre d''autorisation'
updated: 2026-02-18
---

## Objectif

Un **cross-connect** est un câble fibre optique physique qui relie votre équipement (ou celui de votre fournisseur) à l'équipement OVHcloud à l'intérieur d'un datacenter. Une **lettre d'autorisation (LOA)** est le document qui autorise l'opérateur du datacenter à installer ou retirer ce câble.

## Qu'est-ce qu'une LOA ?

Une LOA est un document formel qui contient :

- **Nom et adresse du datacenter** — Le site où le cross-connect sera installé ou retiré.
- **Référence de la baie/cage OVHcloud** — L'emplacement exact de l'équipement OVHcloud.
- **Désignation du port** — Le port spécifique sur le panneau de brassage ou le routeur OVHcloud.
- **Partie autorisée** — Qui est autorisé à effectuer l'intervention (vous, votre fournisseur ou l'opérateur du site).
- **Spécifications du câble** — Type de fibre (monomode), type de connecteur (LC/SC) et longueur.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 180" font-family="Arial, sans-serif" font-size="12">
  <rect width="650" height="180" fill="#f8f9fa" rx="8"/>

  <!-- Your Equipment -->
  <rect x="20" y="50" width="150" height="80" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="95" y="80" text-anchor="middle" font-weight="bold" fill="#1565c0">Votre équipement</text>
  <text x="95" y="100" text-anchor="middle" fill="#555" font-size="10">Cage / Baie A</text>

  <!-- Cross-connect -->
  <line x1="170" y1="90" x2="320" y2="90" stroke="#e65100" stroke-width="3"/>
  <text x="245" y="80" text-anchor="middle" fill="#e65100" font-weight="bold">Cross-Connect</text>
  <text x="245" y="110" text-anchor="middle" fill="#555" font-size="10">(jarretière fibre)</text>

  <!-- OVHcloud Equipment -->
  <rect x="320" y="50" width="150" height="80" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="395" y="80" text-anchor="middle" font-weight="bold" fill="#2e7d32">Équipement OVHcloud</text>
  <text x="395" y="100" text-anchor="middle" fill="#555" font-size="10">Cage / Baie B</text>

  <!-- LOA document -->
  <rect x="510" y="35" width="120" height="110" rx="6" fill="#fff" stroke="#888" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="570" y="60" text-anchor="middle" font-weight="bold" fill="#333" font-size="11">LOA</text>
  <text x="570" y="80" text-anchor="middle" fill="#555" font-size="9">DC : Equinix PA3</text>
  <text x="570" y="95" text-anchor="middle" fill="#555" font-size="9">Baie : OVH-FR-01</text>
  <text x="570" y="110" text-anchor="middle" fill="#555" font-size="9">Port : Gi0/0/1</text>
  <text x="570" y="125" text-anchor="middle" fill="#555" font-size="9">Type : SM LC</text>
</svg>
```

## Commander un cross-connect

### Étape 1 — Obtenir la LOA auprès d'OVHcloud

Après avoir commandé **OVHcloud Connect Direct**, OVHcloud vous fournit la LOA :

- **Automatiquement par e-mail** après la confirmation de votre commande.
- **Via l'espace client OVHcloud** — dans les détails de votre service OVHcloud Connect, recherchez l'option « Télécharger la LOA ».
- **Via le support** — Si vous ne l'avez pas reçue, contactez le support OVHcloud avec la référence de votre service.

### Étape 2 — Soumettre la LOA à l'opérateur du datacenter

1. Contactez l'**opérateur du datacenter** (par exemple Equinix, Interxion/Digital Realty, Telehouse) et soumettez une commande de cross-connect.
2. Joignez la **LOA fournie par OVHcloud**.
3. Précisez :
   - La **référence de votre cage/baie** (côté A)
   - La **référence de la cage/baie OVHcloud** (côté Z, indiquée dans la LOA)
   - Le **type de câble** — Typiquement de la fibre monomode avec connecteurs LC
   - La **date de réalisation souhaitée**
4. L'opérateur du datacenter peut facturer des **frais d'installation du cross-connect** ainsi qu'une **redevance mensuelle**.

### Étape 3 — Confirmer l'installation

1. L'opérateur du datacenter installe le câble physique (généralement sous quelques jours ouvrés).
2. Vérifiez dans l'**espace client OVHcloud** que le statut du port passe à « Up ».
3. Procédez à la [configuration BGP](../3.7_occ_l3_bgp/guide.fr-fr.md).

## Résilier un cross-connect

### Étape 1 — Résilier d'abord le service OVHcloud Connect

Avant de retirer le câble physique, résiliez le service OVHcloud Connect (voir [Résilier Direct](../3.3_cancel_direct/guide.fr-fr.md) ou [Résilier Provider](../3.4_cancel_provider/guide.fr-fr.md)).

### Étape 2 — Demander le retrait du cross-connect

1. Contactez l'**opérateur du datacenter**.
2. Soumettez une **commande de désinstallation** du cross-connect.
3. Certains datacenters exigent une **LOA pour le retrait** — vérifiez auprès de l'opérateur. Si nécessaire, demandez-en une au support OVHcloud.
4. Confirmez que le câble physique a bien été retiré.

### Étape 3 — Vérifier la facturation

- Confirmez auprès de l'opérateur du datacenter que la **redevance mensuelle de cross-connect** a bien été stoppée.
- Vérifiez côté OVHcloud que le service n'est plus facturé.

## Conseils importants

| Conseil | Détails |
|---|---|
| **Conservez les copies de toutes les LOA** | Stockez-les dans votre documentation pour référence et audits ultérieurs. |
| **Suivez les délais** | Les délais d'installation d'un cross-connect varient selon le datacenter (de 1 à 10 jours ouvrés en général). |
| **Coordonnez avec votre fournisseur** | Si vous utilisez OVHcloud Connect Provider, le fournisseur prend généralement en charge le cross-connect pour vous. |
| **Faites correspondre les types de câbles** | Veillez à utiliser de votre côté le même type de fibre (monomode) et le même connecteur (LC) que ceux indiqués dans la LOA. |
| **Testez après installation** | Une fois le câble brassé, vérifiez les niveaux optiques et le statut du port avant de configurer BGP. |

## Et ensuite ?

- [Configurez OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md) une fois le cross-connect installé
- [Commandez OVHcloud Connect Direct](../3.1_order_direct/guide.fr-fr.md) si vous n'avez pas encore débuté la procédure

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
