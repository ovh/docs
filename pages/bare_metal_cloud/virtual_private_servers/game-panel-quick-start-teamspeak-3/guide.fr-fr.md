---
title: "Déployer un serveur TeamSpeak 3 sur le Game Panel"
excerpt: "Déployez et configurez un serveur vocal TeamSpeak 3 en quelques minutes sur le Game Panel, sans ligne de commande ni connaissance système."
updated: 2026-05-05
---

## Objectif

Le Game Panel vous permet de déployer et de configurer un serveur vocal TeamSpeak 3 en quelques minutes, sans ligne de commande ni connaissance système.

**Ce guide vous explique comment déployer un serveur TeamSpeak 3 sur le Game Panel et vous y connecter.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- L'accès au Game Panel. Consultez le guide [Se connecter au Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).
- Un client TeamSpeak 3 installé sur votre machine pour tester la connexion.

## En pratique

### Étape 1 — Accéder au Game Panel et sélectionner TeamSpeak 3

Depuis le tableau de bord de votre Game Panel, cliquez sur `Add Game Server`{.action}. Dans la liste des jeux disponibles, recherchez et sélectionnez **TeamSpeak 3**.

![Tableau de bord du Game Panel avec le bouton Add Game Server](images/teamspeak-add-server.png){.thumbnail}

![Sélection de TeamSpeak 3 dans la liste des jeux](images/select-teamspeak-3.png){.thumbnail}

### Étape 2 — Configurer votre serveur

Une page de configuration s'ouvre. Les valeurs par défaut sont prêtes à l'emploi pour un lancement immédiat, mais vous pouvez les personnaliser selon vos besoins.

Parmi les paramètres disponibles, vous pouvez modifier :

- `Server Name`{.action} : donnez un nom d'instance à votre serveur (par exemple, `My TS3 server`).
- `Network Ports`{.action} : préconfigurés automatiquement :
    - `9987` (UDP) — voix
    - `10011` (TCP) — ServerQuery
    - `30033` (TCP) — transfert de fichiers

![Configuration des Network Ports pour TeamSpeak 3](images/teamspeak-network-ports.png){.thumbnail}

> [!primary]
>
> Vous pouvez modifier ces paramètres, mais ce n'est pas obligatoire pour lancer le serveur.

### Étape 3 — Lancer l'installation

Une fois la configuration vérifiée, cliquez sur `Install`{.action} pour démarrer le déploiement.

![Formulaire de configuration de l'installation TeamSpeak 3 avec le bouton Install](images/teamspeak-install-form.png){.thumbnail}

### Étape 4 — Suivre la progression de l'installation

Le déploiement démarre automatiquement. Laissez l'installation se poursuivre sans fermer la page.

Suivez le processus en temps réel en cliquant sur `Open Logs`{.action} pour afficher les messages d'installation.

![Panneau des logs d'installation de TeamSpeak 3](images/teamspeak-installation-logs.png){.thumbnail}

### Étape 5 — Vérifier que le serveur est en cours d'exécution

Une fois l'installation terminée, vérifiez que votre serveur affiche le statut **Running**.

![Serveur TeamSpeak 3 avec le statut Running](images/teamspeak-running.png){.thumbnail}

Votre serveur est en ligne. Récupérez l'adresse IP et le port dans la section `Connection`{.action} pour vous connecter depuis le client TeamSpeak 3.

### Étape 6 — Se connecter à votre serveur

Dans le client TeamSpeak 3 :

1. Cliquez sur `Connections`{.action} > `Connect`{.action}.
2. Saisissez l'adresse affichée dans la section `Connection`{.action} (par exemple, `release.gamepanel.ovh:9987`).

## Aller plus loin

- [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Gérer les utilisateurs sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users)

Échangez avec notre [communauté d'utilisateurs](/links/community).