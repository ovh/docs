---
title: "Déployer un serveur DayZ sur le Game Panel"
excerpt: "Déployez un serveur DayZ sur le Game Panel, configurez vos identifiants Steam et vos ports réseau, puis connectez-vous en quelques minutes."
updated: 2026-05-05
---

## Objectif

Le Game Panel vous permet de déployer un serveur DayZ en quelques étapes. Le Game Panel gère l'installation, l'authentification Steam et la configuration des ports réseau.

**Ce guide vous explique comment déployer un serveur DayZ sur le Game Panel et vous y connecter.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) sur votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Un accès au Game Panel. Consultez le guide [Se connecter au Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).
- Un compte Steam pour authentifier l'installation du serveur DayZ.

## En pratique

### Étape 1 — Accéder au Game Panel

Connectez-vous à votre Game Panel.

Dans le menu de gauche, rendez-vous dans la section `Game Servers`{.action} et cliquez sur `Add Game Server`{.action}.

![Section Game Servers avec le bouton Add Game Server](images/add-game-server.png){.thumbnail}

Sélectionnez **DayZ** dans la liste des jeux. Une fenêtre de configuration s'ouvre.

### Étape 2 — Configurer votre serveur

Dans la fenêtre de configuration :

- Saisissez un **Server Name**.
- Saisissez vos **Steam Username** et **Steam Password**.

> [!warning]
>
> Il est fortement recommandé d'utiliser un compte Steam dédié à cet usage, et non votre compte personnel. Utilisez un mot de passe complexe et désactivez l'authentification à deux facteurs par e-mail (Steam Guard) sur ce compte avant de continuer.

![Formulaire d'installation de DayZ affichant le nom du serveur et les champs d'identifiants Steam](images/install-dayz-form.png){.thumbnail}

### Étape 3 — Configurer les ports réseau

Les ports UDP suivants sont préconfigurés dans le formulaire d'installation :

| Port | Usage |
|------|-------|
| 2302 | Game |
| 2304 | Steam |
| 2306 | BattlEye |
| 27016 | Query Steam |

> [!primary]
>
> S'il s'agit de votre premier serveur DayZ sur le Game Panel et que les ports par défaut sont disponibles, aucune modification manuelle n'est nécessaire.

![Section des ports réseau avec les ports UDP DayZ préconfigurés](images/network-ports.png){.thumbnail}

### Étape 4 — Lancer l'installation

Cliquez sur `Install`{.action}. Le déploiement démarre automatiquement. Le Game Panel va :

1. Télécharger l'image du serveur DayZ.
2. Installer les fichiers du serveur.

Une fois l'installation terminée, cliquez sur `Launch`{.action} pour démarrer votre serveur.

### Étape 5 — Vérifier que le serveur fonctionne

Vérifiez que le statut du serveur passe à **Running**. Une activité CPU et RAM doit être visible dans le Game Panel.

Les commandes suivantes sont disponibles :

- `Console`{.action} — suivez le démarrage et l'activité du serveur en temps réel.
- `Logs`{.action} — consultez les logs en cas de problème.
- `Settings`{.action} — accédez aux options de configuration du jeu.

![Serveur DayZ avec le statut Running et les contrôles de gestion](images/server-running.png){.thumbnail}

### Étape 6 — Configurer les paramètres du jeu (facultatif)

Cliquez sur `Settings`{.action} sur votre serveur, puis ouvrez `Game Config`{.action} pour ajuster les options accessibles depuis le Game Panel, telles que les mises à jour automatiques.

Pour une configuration avancée, utilisez le **File Manager** afin de modifier directement le fichier de configuration du serveur DayZ.

![Panneau Server Settings avec les options Game Config et File Manager](images/game-config.png){.thumbnail}

### Étape 7 — Se connecter à votre serveur

Dans la colonne **Connection** de la liste Game Servers, copiez l'adresse IP et le port de votre serveur.

Pour rejoindre depuis le client DayZ :

1. Lancez **DayZ**.
2. Allez dans **Servers** et cliquez sur **Direct Connect** en bas.
3. Saisissez votre adresse IP et le port (par exemple `192.168.1.1:2302`).
4. Cliquez sur **Connect**.

![Liste Game Servers avec l'adresse IP de connexion et le port mis en évidence](images/connection-details.png){.thumbnail}

## Aller plus loin

- [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Gérer les utilisateurs sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users)
- [Créer une sauvegarde sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup)

Échangez avec notre [communauté d'utilisateurs](/links/community).