---
title: "Installer PaperMC et ses plugins sur le Game Panel"
excerpt: "Installez un serveur Minecraft PaperMC sur le Game Panel et ajoutez des plugins via SFTP pour étendre les fonctionnalités de jeu."
updated: 2026-05-05
---

## Objectif

PaperMC est une implémentation haute performance du serveur Minecraft, compatible avec des plugins qui étendent les fonctionnalités de jeu. Le Game Panel permet de déployer un serveur PaperMC en quelques clics, puis de le personnaliser en téléversant des plugins.

**Ce guide vous explique comment installer un serveur PaperMC sur le Game Panel et ajouter des plugins.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Un accès au Game Panel. Consultez le guide [Se connecter au Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).
- SFTP activé sur votre serveur. Consultez le guide [Activer le SFTP sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp).
- Un client SFTP tel que [FileZilla](https://filezilla-project.org/).

## En pratique

### Étape 1 — Installer un serveur PaperMC

Depuis la page principale du Game Panel, cliquez sur `Add Game Server`{.action}, localisez **PaperMC** et cliquez sur `Install`{.action}.

Pour plus de détails sur l'installation d'un serveur, consultez le guide [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started).

### Étape 2 — Télécharger des plugins

Téléchargez des plugins depuis une source de confiance telle que le dépôt [PaperMC Hangar](https://hangar.papermc.io/).

### Étape 3 — Téléverser les plugins via SFTP

Connectez-vous à votre serveur PaperMC en SFTP. Une fois connecté, accédez au dossier `serverfiles`, ouvrez le répertoire `plugins` et téléversez vos fichiers de plugins.

### Étape 4 — Redémarrer le serveur

Depuis la page principale du Game Panel, redémarrez votre serveur à l'aide du bouton dédié.

> [!primary]
>
> Surveillez les logs du serveur pour confirmer que celui-ci démarre correctement et que les plugins sont chargés.

## Aller plus loin

- [Déployer un serveur Minecraft sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft)
- [Installer Fabric ou NeoForge sur un serveur Minecraft](/pages/bare_metal_cloud/virtual_private_servers/game-panel-install-fabric-neoforge)

Échangez avec notre [communauté d'utilisateurs](/links/community).
