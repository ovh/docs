---
title: 'Résilier OVHcloud Connect Provider'
excerpt: 'Découvrez comment résilier un service OVHcloud Connect Provider et coordonner la résiliation avec votre opérateur'
updated: 2026-02-18
---

## Objectif

Ce guide explique comment résilier un service OVHcloud Connect Provider. Une connexion via un opérateur impliquant à la fois OVHcloud et un opérateur réseau tiers, vous devez coordonner la résiliation avec les deux parties.

## Avant de commencer

- **Interruption de trafic** — Tout le trafic transitant par cette connexion sera définitivement interrompu.
- **Contrat avec l'opérateur** — Vérifiez les conditions de votre opérateur concernant la durée d'engagement minimale, les délais de préavis et les frais de résiliation anticipée.
- **Contrat OVHcloud** — Vérifiez votre durée d'engagement OVHcloud et votre cycle de facturation.
- **Connectivité alternative** — Assurez-vous que vos charges de travail sont migrées ou qu'un chemin alternatif est disponible.

## Étapes de résiliation

### 1. Supprimer les configurations dépendantes côté OVHcloud

1. **Supprimez l'association vRack** — Dissociez le service OVHcloud Connect de votre vRack dans l'espace client.
2. **Supprimez la configuration PoP/BGP** — Supprimez les sessions BGP et la configuration PoP de ce service.
3. **Mettez à jour le routage** — Assurez-vous que votre réseau ne dépend plus des routes issues de cette connexion.

### 2. Résilier côté OVHcloud

1. Connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/manager/).
2. Rendez-vous dans **Network** → **OVHcloud Connect**.
3. Sélectionnez la **connexion via un opérateur** que vous souhaitez résilier.
4. Cliquez sur **Annuler** (ou **Résilier le service**).
5. Confirmez et notez la date effective de résiliation.

### 3. Résilier côté opérateur

**Cette étape est essentielle.** Si vous résiliez uniquement chez OVHcloud sans le faire chez votre opérateur, ce dernier peut continuer à vous facturer.

| Opérateur | Comment résilier |
|---|---|
| **Megaport** | Supprimez le VXC dans le [portail Megaport](https://portal.megaport.com/). |
| **Equinix Fabric** | Supprimez la connexion dans [Equinix Fabric](https://fabric.equinix.com/). |
| **Console Connect** | Annulez la connexion dans [Console Connect](https://app.consoleconnect.com/). |

> Contactez le support de votre opérateur si vous avez des questions sur la procédure ou les délais de résiliation.

### 4. Vérifier le nettoyage

- Confirmez que le service OVHcloud Connect apparaît bien comme résilié dans l'espace client OVHcloud.
- Confirmez que le VXC/la connexion est supprimée dans le portail de votre opérateur.
- Vérifiez que la facturation s'est arrêtée à la fois côté OVHcloud et côté opérateur.
- Mettez à jour la configuration de votre réseau pour supprimer toute route obsolète ou pair BGP résiduel.

## Rappels importants

- **Résiliez des deux côtés** — OVHcloud et l'opérateur sont des services distincts avec des facturations distinctes. Résilier l'un ne résilie pas automatiquement l'autre.
- **Conservez les preuves** — Sauvegardez les e-mails de confirmation de résiliation envoyés par OVHcloud et par votre opérateur.
- **Démantèlement du cross-connect** — Si l'opérateur a installé un cross-connect physique pour votre compte, coordonnez-vous avec lui pour vous assurer qu'il est bien retiré du datacenter.

## Et ensuite ?

- [Résilier OVHcloud Connect Direct](../3.3_cancel_direct/guide.fr-fr.md) (si vous disposez également d'une connexion directe)
- [Commander une nouvelle connexion](../3.2_order_provider/guide.fr-fr.md) si vous souhaitez la remplacer

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
