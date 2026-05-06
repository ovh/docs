---
title: "Déployer un serveur Arma Reforger sur le Game Panel"
excerpt: "Déployez un serveur Arma Reforger sur le Game Panel avec configuration automatique des ports et logs d'installation en temps réel."
updated: 2026-05-05
---

## Objectif

Le Game Panel vous permet de déployer un serveur Arma Reforger en quelques étapes. Le Game Panel gère l'installation automatiquement, y compris la configuration des ports.

**Ce guide vous explique comment déployer un serveur Arma Reforger sur le Game Panel et vous y connecter.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) sur votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Un accès au Game Panel. Consultez le guide [Se connecter au Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## En pratique

### Étape 1 — Accéder au Game Panel

Connectez-vous à votre Game Panel.

### Étape 2 — Créer une nouvelle instance de serveur

Cliquez sur `Add Game Server`{.action} et sélectionnez **Arma Reforger**.

![Sélection d'Arma Reforger dans la liste des jeux](images/select-arma-reforger.png){.thumbnail}

> [!primary]
>
> S'il s'agit de votre premier serveur Arma Reforger sur le Game Panel et que le Game Port par défaut est disponible, tous les ports requis seront configurés automatiquement lors de l'installation. Aucune configuration manuelle n'est nécessaire dans ce cas.

### Étape 3 — Suivre la progression de l'installation

Une fois l'installation lancée, un écran de confirmation apparaît. Cliquez sur `Open Logs`{.action} pour suivre la progression de l'installation en temps réel.

![Écran de démarrage de l'installation d'Arma Reforger avec le bouton Open Logs](images/arma-installation-started.png){.thumbnail}

Pendant l'installation du serveur, le statut affiche **Installing**. Suivez la progression détaillée directement dans le panneau de logs.

![Serveur Arma Reforger avec le statut Running et les logs d'installation](images/arma-installation-logs.png){.thumbnail}

### Étape 4 — Confirmer la fin de l'installation

Une fois l'installation terminée, le statut du serveur passe à **Running**.

### Étape 5 — Récupérer les informations de connexion

Une fois que votre serveur est au statut **Running**, copiez les informations de connexion depuis le Game Panel.

![Détails de connexion du serveur Arma Reforger](images/arma-connection-details.png){.thumbnail}

### Étape 6 — Rejoindre votre serveur dans Arma Reforger

1. Ouvrez **Arma Reforger** et accédez au menu principal.
2. Cliquez sur `Multiplayer`{.action}.
3. Sélectionnez `Direct Join`{.action} ou appuyez sur `v`.
4. Saisissez l'adresse IP et le port, puis cliquez sur `Join`{.action}.

## Aller plus loin

- [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Gérer les utilisateurs sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users)
- [Créer une sauvegarde sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup)

Échangez avec notre [communauté d'utilisateurs](/links/community).