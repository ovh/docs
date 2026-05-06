---
title: "Déployer un serveur Team Fortress 2 sur le Game Panel"
excerpt: "Déployez un serveur Team Fortress 2 sur le Game Panel avec une configuration des ports automatisée et des logs d'installation en temps réel."
updated: 2026-05-05
---

## Objectif

Le Game Panel vous permet de déployer un serveur Team Fortress 2 en quelques étapes. Le Game Panel gère l'installation et la configuration des ports automatiquement.

**Ce guide vous explique comment déployer un serveur Team Fortress 2 sur le Game Panel et vous y connecter.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- L'accès au Game Panel. Consultez le guide [Se connecter au Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## En pratique

### Étape 1 — Accéder au Game Panel

Connectez-vous à votre Game Panel.

### Étape 2 — Créer une nouvelle instance de serveur

Cliquez sur `Add Game Server`{.action} et sélectionnez **Team Fortress 2**.

![Sélection de Team Fortress 2 dans la liste des jeux](images/select-tf2.png){.thumbnail}

> [!primary]
>
> S'il s'agit de votre premier serveur Team Fortress 2 sur le Game Panel et que le Game Port par défaut est disponible, tous les ports requis sont configurés automatiquement. Aucune configuration manuelle n'est nécessaire.

### Étape 3 — Suivre la progression de l'installation

Une fois l'installation lancée, un écran de confirmation s'affiche. Cliquez sur `Open Logs`{.action} pour suivre la progression de l'installation en temps réel.

![Écran de démarrage de l'installation Team Fortress 2](images/tf2-installation-started.png){.thumbnail}

Pendant l'installation du serveur, le statut affiche **Installing**. Suivez la progression détaillée dans le panneau des logs.

![Panneau des logs d'installation Team Fortress 2](images/tf2-installation-logs.png){.thumbnail}

### Étape 4 — Confirmer la fin de l'installation

Une fois l'installation terminée, le statut du serveur passe à **Running**.

![Serveur Team Fortress 2 avec le statut Running](images/tf2-running.png){.thumbnail}

### Étape 5 — Récupérer les informations de connexion

Lorsque le statut de votre serveur est **Running**, copiez les informations de connexion depuis le Game Panel.

### Étape 6 — Rejoindre votre serveur dans Team Fortress 2

1. Ouvrez **Team Fortress 2**.
2. Allez dans `Community server`{.action} > `Favorites`{.action}.
3. Cliquez sur `Add a Server`{.action} et collez `servX.gamepanel.ovh:PORT`.

## Aller plus loin

- [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Gérer les utilisateurs sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users)

Échangez avec notre [communauté d'utilisateurs](/links/community).