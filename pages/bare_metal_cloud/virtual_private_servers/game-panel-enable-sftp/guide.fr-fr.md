---
title: "Activer le SFTP sur le Game Panel"
excerpt: "Activez l'accès SFTP sur votre serveur de jeu pour transférer des fichiers avec un client comme FileZilla, avec mot de passe sécurisé."
updated: 2026-05-05
---

## Objectif

Le SFTP vous permet de vous connecter à votre serveur de jeu pour accéder à ses fichiers. Plus puissant que le gestionnaire de fichiers du Game Panel, il facilite le transfert de fichiers volumineux et l'administration du serveur.

**Ce guide vous explique comment activer le SFTP sur un serveur de jeu dans le Game Panel OVHcloud.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Une instance de serveur de jeu déployée sur le Game Panel.
- Un client SFTP tel que [FileZilla](https://filezilla-project.org/).

> [!primary]
>
> Veillez à télécharger la version **client** de FileZilla, et non la version serveur.

## En pratique

### Étape 1 — Se connecter au Game Panel

Connectez-vous à votre Game Panel. Si vous avez besoin d'aide, consultez le guide [Se connecter au Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

### Étape 2 — Accéder aux paramètres SFTP

Une fois connecté :

1. Sélectionnez votre serveur de jeu.
2. Cliquez sur `Settings`{.action}.
3. Rendez-vous dans l'onglet `SFTP`{.action}.

![L'onglet des paramètres SFTP](images/sftp-settings.png){.thumbnail}

### Étape 3 — Activer le SFTP

Activez le SFTP et définissez un mot de passe sécurisé.

Exigences pour le mot de passe :

- 10 caractères minimum
- Au moins une lettre majuscule
- Au moins un chiffre
- Au moins un caractère spécial

![Activation du SFTP avec configuration du mot de passe](images/enable-sftp.png){.thumbnail}

### Étape 4 — Se connecter avec un client SFTP

Une fois le SFTP activé, connectez-vous à votre serveur en utilisant votre client SFTP. Les informations de connexion (hôte, port, nom d'utilisateur) sont disponibles dans la section `Connection Details`{.action} de votre Game Panel.

Pour utiliser FileZilla, consultez le guide [Comment utiliser le SFTP pour transférer des fichiers](/pages/bare_metal_cloud/dedicated_servers/comment-deposer-ou-recuperer-des-donnees-sur-un-serveur-dedie-via-sftp).

## Aller plus loin

- [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)

Échangez avec notre [communauté d'utilisateurs](/links/community).
