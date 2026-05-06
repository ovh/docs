---
title: "Installer une carte personnalisée Rust sur le Game Panel"
excerpt: "Installez une carte Rust personnalisée sur votre serveur de jeu en modifiant le fichier de configuration via SFTP et FileZilla."
updated: 2026-05-05
---

## Objectif

Le Game Panel vous permet de personnaliser votre serveur Rust en installant une carte personnalisée. Le fichier de la carte est hébergé en externe et référencé depuis la configuration de votre serveur.

**Ce guide vous explique comment installer une carte personnalisée sur un serveur Rust hébergé sur le Game Panel.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Un serveur Rust déployé sur le Game Panel.
- SFTP activé sur votre serveur. Consultez le guide [Activer le SFTP sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp).
- Un client SFTP tel que [FileZilla](https://filezilla-project.org/).
- Un fichier de carte personnalisée au format `.map`.

## En pratique

### Étape 1 — Préparer votre carte personnalisée

1. Arrêtez votre serveur Rust depuis le Game Panel.
2. Assurez-vous que votre carte personnalisée est au format `.map`.
3. Téléversez la carte sur un service de partage de fichiers.
4. Copiez le lien de téléchargement obtenu et conservez-le : vous en aurez besoin par la suite.

> [!warning]
>
> Dropbox n'est pas adapté à cet usage. Utilisez un autre service de partage de fichiers.

### Étape 2 — Se connecter à votre serveur via SFTP

Connectez-vous à votre serveur Rust en SFTP. Consultez le guide [Activer le SFTP sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp) pour les instructions de configuration.

Ce guide utilise [FileZilla](https://filezilla-project.org/) comme client SFTP.

> [!warning]
>
> Assurez-vous que votre serveur Rust est **arrêté** avant d'effectuer l'une des actions suivantes.

### Étape 3 — Modifier la configuration du serveur

1. Dans FileZilla, sur le côté droit (serveur distant), accédez à :

    ```
    /serverfiles/server/rustserver/cfg
    ```

2. Localisez le fichier `server.cfg`, faites un clic droit dessus et sélectionnez `Edit`{.action}.
3. Trouvez la ligne commençant par `levelURL=` et collez le lien de téléchargement enregistré précédemment après le signe `=`.
4. Assurez-vous que le lien se termine par `dl=1` (et non `dl=0`). Modifiez-le si nécessaire.
5. Trouvez la ligne commençant par `serverLevel=` et saisissez le même type de niveau que celui utilisé pour générer la carte personnalisée :

    - `Procedural Map`
    - `Barren`
    - `Craggy Island`
    - `Savas Island`

6. Enregistrez vos modifications.

### Étape 4 — Redémarrer le serveur

Fermez le client SFTP, puis redémarrez votre serveur Rust depuis le Game Panel.

## Aller plus loin

- [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Activer le SFTP sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp)

Échangez avec notre [communauté d'utilisateurs](/links/community).
