---
title: "Déployer un serveur 7 Days to Die sur le Game Panel"
excerpt: "Déployez un serveur 7 Days to Die sur le Game Panel : installation automatisée, configuration des ports et connexion via la console."
updated: 2026-05-05
---

## Objectif

Le Game Panel vous permet de déployer un serveur 7 Days to Die avec une installation automatisée et la configuration des ports.

**Ce guide vous explique comment déployer un serveur 7 Days to Die sur le Game Panel et vous y connecter.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Un accès au Game Panel. Consultez le guide [Se connecter au Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## En pratique

### Étape 1 — Accéder au Game Panel

Connectez-vous à votre Game Panel. Rendez-vous dans la section **Game Servers** du menu de gauche.

![Section Game Servers avec le bouton Add Game Server](images/game-servers-list.png){.thumbnail}

### Étape 2 — Créer un serveur 7 Days to Die

Cliquez sur `Add Game Server`{.action} et sélectionnez **7 Days to Die** dans la liste.

![Sélection de 7 Days to Die dans la liste des jeux](images/select-7-days-to-die.png){.thumbnail}

Configurez l'installation :

- `Server Name` : donnez un nom à votre serveur (par exemple, `7 Days to Die Server`).
- `Network Ports` : laissez les ports par défaut ou ajoutez-en d'autres si nécessaire dans la section avancée.

![Formulaire d'installation de 7 Days to Die](images/7-days-to-die-install-form.png){.thumbnail}

### Étape 3 — Lancer l'installation

Cliquez sur `Install`{.action}. Le déploiement démarre. Patientez le temps du téléchargement et de l'installation du serveur.

Cliquez sur `Launch`{.action} pour démarrer le serveur.

### Étape 4 — Vérifier que le serveur fonctionne

Vérifiez que le statut du serveur affiche **Running** et que l'activité CPU/RAM est visible.

![Serveur 7 Days to Die avec le statut Running](images/7-days-to-die-running.png){.thumbnail}

Actions disponibles :

- `Console`{.action} : ouvrez la console pour suivre le démarrage.
- `Logs`{.action} : consultez les logs en cas de problème.
- `Settings`{.action} > `Game Config`{.action} : accédez aux paramètres du jeu.

![Paramètres Game Config de 7 Days to Die](images/7-days-to-die-game-config.png){.thumbnail}

### Étape 5 — Se connecter au serveur

Dans la colonne `Connection`{.action}, vous trouverez l'adresse IP et le port (par exemple, `xxx.xxx.xxx.xxx:26900`).

Dans 7 Days to Die :

1. Ouvrez la console (`~`).
2. Saisissez :

    ```console
    connect IP:PORT
    ```

### Bonnes pratiques

- Configurez les permissions via `User Administration`{.action}.
- Effectuez des sauvegardes régulières.
- Personnalisez les paramètres du jeu.

> [!primary]
>
> Pour aller plus loin, ajoutez des mods ou des configurations compétitives, ajustez le tickrate et les paramètres de performance, ou restreignez l'accès avec un mot de passe ou une liste blanche.

## Aller plus loin

- [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Gérer les utilisateurs sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users)

Échangez avec notre [communauté d'utilisateurs](/links/community).
