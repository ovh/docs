---
title: 'Résilier OVHcloud Connect Direct'
excerpt: 'Découvrez comment résilier un service OVHcloud Connect Direct et démanteler la connexion physique'
updated: 2026-02-18
---

## Objectif

Ce guide explique comment résilier un service OVHcloud Connect Direct et démanteler la connexion physique.

## Avant de commencer

Tenez compte des points suivants avant de poursuivre :

- **Interruption de trafic** — La résiliation du service interrompt définitivement l'ensemble du trafic transitant par cette connexion. Assurez-vous d'avoir migré vos charges de travail ou mis en place une connectivité alternative.
- **Durée d'engagement minimale** — Vérifiez si votre contrat comporte une durée d'engagement minimale. Une résiliation anticipée peut entraîner des frais.
- **Démantèlement du cross-connect** — Le cross-connect physique en datacenter doit être démantelé séparément.
- **Facturation** — Comprenez le cycle de facturation. La résiliation prend généralement effet à la fin de la période de facturation en cours.

<!-- CP-NAV-START:network-ovhcloud-connect -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [OVHcloud Connect](/links/control-panel/network-ovhcloud-connect)
- **Pour accéder à vos services :** `Network`{.action} > `OVHcloud Connect`{.action}

---
<!-- CP-NAV-END:network-ovhcloud-connect -->

## Étapes de résiliation

### 1. Supprimer les configurations dépendantes

Avant de résilier le service OVHcloud Connect :

1. **Supprimez l'association vRack** — Dissociez le service OVHcloud Connect de votre vRack dans l'espace client OVHcloud.
2. **Supprimez la configuration PoP/BGP** — Supprimez la configuration PoP et les sessions BGP associées au service.
3. **Mettez à jour votre routage** — Assurez-vous que votre réseau ne dépend plus des routes apprises via cette connexion.

### 2. Demander la résiliation depuis l'espace client OVHcloud

1. Sélectionnez la **connexion directe** que vous souhaitez résilier.
2. Cliquez sur **Annuler** (ou **Résilier le service**).
3. Confirmez la résiliation. Un motif peut vous être demandé.
4. Vous recevrez un **e-mail de confirmation** indiquant la date effective de résiliation.

### 3. Démanteler le cross-connect

Une fois la résiliation confirmée par OVHcloud :

1. Contactez l'**opérateur de votre datacenter** et demandez la dépose du cross-connect.
2. Fournissez la documentation requise (certains sites exigent une LOA pour la dépose — consultez [LOA Cross-connect](../3.11_cross_connect_loa/guide.fr-fr.md)).
3. Confirmez auprès du datacenter que le câble physique a bien été retiré.

> **Conseil :** conservez une copie de toutes les confirmations de résiliation et des LOA pour vos archives.

### 4. Vérifier le nettoyage

- Confirmez que le service n'apparaît plus comme actif dans l'espace client OVHcloud.
- Vérifiez que la facturation s'est arrêtée (consultez votre prochaine facture).
- Assurez-vous que votre routage réseau a été mis à jour pour supprimer les références à la connexion résiliée.

## Résiliation via l'API

Vous pouvez également gérer la résiliation de manière programmatique :

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

service_name = "your-occ-service-uuid"

# Résilier le service
client.post(f"/ovhCloudConnect/{service_name}/terminate")
```

> Reportez-vous à la [console API OVHcloud](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1) pour connaître les endpoints de résiliation disponibles.

## Et ensuite ?

- [Résilier OVHcloud Connect Provider](../3.4_cancel_provider/guide.fr-fr.md) (si vous disposez également d'une connexion via un opérateur)
- [Commander une nouvelle connexion](../3.1_order_direct/guide.fr-fr.md) si vous avez besoin de remplacer le service

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
