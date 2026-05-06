---
title: "Backup Agent - Se connecter à la VSPC"
excerpt: "Découvrez comment vous connecter à la Veeam Service Provider Console pour visualiser vos sauvegardes et vos agents"
updated: 2026-01-28
---

## Objectif

Ce guide vous explique comment vous connecter à la Veeam Service Provider Console (VSPC) pour visualiser vos sauvegardes, vos agents et consulter les rapports de vos jobs de sauvegarde.

## Prérequis

- Avoir reçu les identifiants de connexion à la VSPC par e-mail après la commande de votre service Backup Agent.
- Avoir un navigateur web compatible.

## En pratique

### Accéder à la VSPC

Accédez à l'URL de la VSPC : `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Navigate VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

### Se connecter

Connectez-vous en utilisant les identifiants qui vous ont été fournis par e-mail. Le format du login est généralement `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Si vous n'avez plus vos identifiants, vous pouvez les regénérer en [contactant le support](/links/support-contact).

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Ce compte est en lecture-seule et vous donne accès à des visualisations de vos sauvegardes et de vos agents.

### Consulter les Backup Jobs

Une fois connecté, cliquez sur `Backup Jobs`{.action} dans le menu de gauche.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Afficher les jobs réussis

Cliquez sur `Successful Jobs`{.action} pour votre tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Afficher les points de restauration

Vous pouvez consulter les points de restauration disponibles pour vos sauvegardes.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Accéder aux agents gérés

Pour voir la liste de vos agents installés, allez dans `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Consulter les rapports

Accédez à la section `Reports`{.action} pour visualiser les rapports de vos sauvegardes.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Ouvrir le dernier rapport

Ouvrez le dernier rapport disponible pour consulter les détails de vos dernières sauvegardes.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Voir les dernières alarmes

Vous pouvez voir les dernières alarmes sur vos agents et sauvegardes dans la partie `Alarm Management`{.action}.

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

