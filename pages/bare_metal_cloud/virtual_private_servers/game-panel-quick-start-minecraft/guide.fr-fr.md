---
title: "Déployer un serveur Minecraft sur le Game Panel"
excerpt: "Déployez un serveur Minecraft sur le Game Panel OVHcloud, suivez la progression de l'installation et connectez-vous depuis le client Minecraft."
updated: 2026-05-05
---

## Objectif

Le Game Panel OVHcloud vous permet de déployer un serveur Minecraft avec une installation et une configuration des ports automatisées.

**Ce guide vous explique comment déployer un serveur Minecraft sur le Game Panel OVHcloud et vous y connecter.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) sur votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Un accès au Game Panel. Consultez le guide [Se connecter au Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## En pratique

### Étape 1 — Accéder au Game Panel

Connectez-vous à votre Game Panel OVHcloud.

### Étape 2 — Créer une nouvelle instance de serveur

Cliquez sur `Add Game Server`{.action} et sélectionnez **Minecraft**.

![Sélection de Minecraft dans la liste des jeux](images/select-minecraft.png){.thumbnail}

> [!primary]
>
> S'il s'agit de votre premier serveur Minecraft sur le Game Panel et que le Game Port par défaut est disponible, tous les ports requis sont configurés automatiquement. Aucune configuration manuelle n'est nécessaire.

### Étape 3 — Suivre la progression de l'installation

Une fois l'installation lancée, un écran de confirmation s'affiche. Cliquez sur `Open Logs`{.action} pour suivre la progression de l'installation en temps réel.

Pendant l'installation du serveur, le statut affiche **Installing**. Suivez la progression détaillée dans le panneau de logs.

![Suivi de l'installation du serveur Minecraft](images/installation-logs.png){.thumbnail}

### Étape 4 — Confirmer la fin de l'installation

Une fois l'installation terminée, le statut du serveur passe automatiquement à **Running**.

![Serveur Minecraft avec le statut Running](images/server-running.png){.thumbnail}

### Étape 5 — Récupérer les informations de connexion

Une fois que votre serveur est au statut **Running**, copiez les informations de connexion depuis le Game Panel.

### Étape 6 — Rejoindre votre serveur dans Minecraft

1. Ouvrez **Minecraft**.
2. Allez dans **Multiplayer**.
3. Cliquez sur **Direct Connect** et collez `servX.gamepanel.ovh:PORT`.

## Aller plus loin

- [Importer un monde personnalisé sur votre serveur Minecraft](/pages/bare_metal_cloud/virtual_private_servers/game-panel-upload-minecraft-world)
- [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)

Échangez avec notre [communauté d'utilisateurs](/links/community).