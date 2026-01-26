---
title: "Backup Agent - Restrictions connues"
excerpt: "Découvrez les restrictions et limitations du produit Backup Agent"
updated: 2026-01-23
---

## Objectif

Ce guide détaille les restrictions et limitations connues du produit Backup Agent que vous devez connaître avant d'utiliser le service.

## Restrictions connues

### Politique de sauvegardes

- La politique de sauvegarde est restreinte, vous ne pouvez pas les modifier.
- Vous ne pouvez pas configurer une sauvegarde que sur une liste de fichiers ou dossiers.
- Vous ne pouvez pas modifier la date et heure de déclenchement des sauvegardes (cela est pris en compte comme amélioration dans le futur).

### Accès VSPC

- L'utilisateur que vous recevez est en lecture seule, vous ne pouvez pas faire de modification directement sur la VSPC.

### Vault

- Vous ne pouvez créer de vaults supplémentaires, ils seront créés automatiquement pour s'assurer que vos données ne soient pas hébergées sur le même datacentre où votre serveur Bare Metal est présent.
- Vous ne pouvez pas changer de vault sur un agent.

### Limitations des OS

- Vous pouvez retrouver la liste des OS compatibles pour le Veeam Agent ici <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=1>

### Compatibilité avec d'autres produits OVHcloud

- À l'heure actuelle le produit Backup Agent n'est compatible qu'avec les Serveurs Dédiés, vous ne pouvez pas utiliser votre agent sur d'autres produits.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

