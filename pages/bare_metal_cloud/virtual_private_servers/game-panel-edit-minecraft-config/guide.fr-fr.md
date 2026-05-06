---
title: "Modifier la configuration d'un serveur Minecraft sur le Game Panel"
excerpt: "Modifiez les paramètres de votre serveur Minecraft sur le Game Panel : mode de jeu, difficulté et options avancées du fichier server.properties."
updated: 2026-05-05
---

## Objectif

Le Game Panel expose la configuration du serveur Minecraft directement dans son interface. Les options de base, comme le mode de jeu et la difficulté, sont accessibles via un formulaire graphique, tandis que les paramètres avancés vous permettent d'éditer directement le fichier `server.properties` pour un contrôle complet.

**Ce guide vous explique comment modifier la configuration d'un serveur Minecraft sur le Game Panel.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Un serveur Minecraft déployé sur le Game Panel. Consultez le guide [Déployer un serveur Minecraft sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft).

## En pratique

### Étape 1 — Ouvrir les paramètres du serveur

Depuis la page principale du Game Panel, repérez le serveur Minecraft à configurer. Dans la colonne `Management`{.action}, cliquez sur `Settings`{.action}.

![Serveur Minecraft avec le bouton Settings mis en évidence](images/minecraft-server-settings.png){.thumbnail}

### Étape 2 — Ouvrir l'onglet Game Config

Dans le Game Panel **Server Settings**, sélectionnez `Game Config`{.action} dans la barre latérale gauche.

![Onglet Game Config dans le Game Panel Server Settings](images/minecraft-game-config.png){.thumbnail}

### Étape 3 — Configurer votre jeu

La section **Game Configuration** vous permet :

- D'activer ou désactiver les **mises à jour automatiques**.
- D'ajuster le **mode de jeu**, la **difficulté** et d'autres options de gameplay.

### Étape 4 — Modifier les paramètres avancés

La section **Advanced Configuration** vous donne un accès direct au fichier `server.properties`, offrant plus de contrôle que les options graphiques de base.

![Section Advanced Configuration affichant l'éditeur server.properties](images/minecraft-advanced-config.png){.thumbnail}

> [!primary]
>
> Pour la liste complète des clés de `server.properties` avec leurs descriptions, valeurs par défaut et plages acceptées, consultez la [page officielle du Wiki Minecraft sur server.properties](https://minecraft.wiki/w/Server.properties).

Quelques clés courantes que vous pouvez vouloir ajuster :

| Clé | Description | Valeur par défaut |
|-----|-------------|---------|
| `gamemode` | Mode de jeu par défaut (`survival`, `creative`, `adventure`, `spectator`) | `survival` |
| `difficulty` | Difficulté du serveur (`peaceful`, `easy`, `normal`, `hard`) | `easy` |
| `max-players` | Nombre maximum de joueurs simultanés | `20` |
| `motd` | Message affiché dans la liste des serveurs | `A Minecraft Server` |
| `online-mode` | Restreint la connexion aux comptes Minecraft authentifiés | `true` |
| `view-distance` | Distance de rendu côté serveur, en chunks (3-32) | `10` |
| `simulation-distance` | Distance de mise à jour des entités, en chunks (3-32) | `10` |
| `white-list` | Restreint les connexions aux joueurs présents dans la liste blanche | `false` |
| `hardcore` | Active le mode hardcore | `false` |
| `pvp` | Active les dégâts entre joueurs | `true` |

> [!warning]
>
> Certaines clés (telles que `level-seed`, `level-type`, `generator-settings`) ne s'appliquent qu'à la génération du monde. Les modifier sur un monde existant n'a aucun effet.

### Étape 5 — Enregistrer et redémarrer

Enregistrez vos modifications, puis redémarrez le serveur Minecraft depuis le Game Panel pour appliquer la nouvelle configuration.

## Aller plus loin

- [Déployer un serveur Minecraft sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft)
- [Installer Fabric ou NeoForge sur un serveur Minecraft](/pages/bare_metal_cloud/virtual_private_servers/game-panel-install-fabric-neoforge)
- [Importer un monde personnalisé sur votre serveur Minecraft](/pages/bare_metal_cloud/virtual_private_servers/game-panel-upload-minecraft-world)

Échangez avec notre [communauté d'utilisateurs](/links/community).
