---
title: "Installer Fabric ou NeoForge sur un serveur Minecraft"
excerpt: "Installez Fabric ou NeoForge sur votre serveur Minecraft via le Game Panel pour exécuter des contenus moddés avec des chargeurs de mods personnalisés."
updated: 2026-05-05
---

## Objectif

Fabric et NeoForge sont des chargeurs de mods pour serveurs Minecraft. Installer l'un d'eux sur un serveur Minecraft hébergé sur le Game Panel vous permet de profiter d'une expérience moddée avec des fonctionnalités étendues.

**Ce guide vous explique comment installer Fabric ou NeoForge sur un serveur Minecraft sur le Game Panel et y ajouter des mods.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Un serveur Minecraft déployé sur le Game Panel. Consultez le guide [Déployer un serveur Minecraft sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft).
- Le SFTP activé sur votre serveur. Consultez le guide [Activer le SFTP sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp).
- Un client SFTP tel que [FileZilla](https://filezilla-project.org/).

## En pratique

### Étape 1 — Désactiver les mises à jour automatiques

Pour éviter les conflits avec les chargeurs de mods, désactivez les mises à jour automatiques avant toute modification :

1. Rendez-vous dans les `Settings`{.action} de votre serveur.
2. Ouvrez l'onglet `Game Config`{.action}.
3. Désactivez les mises à jour automatiques.

### Étape 2 — Arrêter le serveur

Depuis le Game Panel, arrêtez votre serveur Minecraft avant toute modification supplémentaire.

### Étape 3 — Télécharger et importer l'installateur

Téléchargez l'installateur correspondant au chargeur de mods choisi :

- **Fabric** : [https://fabricmc.net/use/server/](https://fabricmc.net/use/server/)
- **NeoForge** : [https://neoforged.net/](https://neoforged.net/)

Une fois téléchargé, connectez-vous à votre serveur via SFTP et importez le fichier `.jar` dans le répertoire `serverfiles`.

### Étape 4 — Exécuter l'installateur

Ouvrez le terminal SSH depuis le Game Panel et exécutez la commande appropriée à votre chargeur de mods.

Pour **Fabric** :

```bash
java -jar fabric-installer-X.X.X.jar server --downloadMinecraft
```

Cette commande télécharge les fichiers du serveur Minecraft, installe le chargeur Fabric et génère le fichier de lancement du serveur Fabric.

Pour **NeoForge** :

```bash
java -jar neoforge-X.X.X-installer.jar --installServer
```

Cette commande installe NeoForge, télécharge les fichiers du serveur Minecraft et génère les fichiers de lancement du serveur.

### Étape 5 — Configurer LinuxGSM

Indiquez à LinuxGSM quel exécutable utiliser, en fonction de votre chargeur de mods.

Pour **Fabric** :

```bash
printf '\nexecutable="./fabric-server-launch.jar"\n' >> /data/config-lgsm/mcserver/common.cfg
```

Pour **NeoForge** :

```bash
printf '\npreexecutable=""\nexecutable="./run.sh"\nstartparameters="nogui"\n' >> /data/config-lgsm/mcserver/common.cfg
```

> [!warning]
>
> Lorsque vous utilisez NeoForge avec `run.sh`, le paramètre **Max RAM** du Game Config n'est plus appliqué. Modifiez plutôt le fichier `/data/serverfiles/user_jvm_args.txt`. Exemple :
>
> ```
> -Xms2G
> -Xmx4G
> ```

### Étape 6 — Démarrer le serveur

Définissez les permissions correctes avant de démarrer le serveur :

```bash
sudo chown -R linuxgsm:linuxgsm /data/serverfiles
```

Démarrez ensuite le serveur depuis le Game Panel et consultez les logs du serveur pour confirmer le bon lancement.

### Étape 7 — Ajouter des mods

Pour installer des mods sur votre serveur moddé :

1. Téléchargez des mods compatibles Fabric ou NeoForge.
2. Connectez-vous à votre serveur via SFTP.
3. Importez les fichiers `.jar` des mods dans `serverfiles/mods`.
4. Réinitialisez les permissions :

    ```bash
    sudo chown -R linuxgsm:linuxgsm /data/serverfiles
    ```

5. Redémarrez le serveur. Consultez les logs pour confirmer que les mods sont chargés.

## Aller plus loin

- [Déployer un serveur Minecraft sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft)
- [Installer un serveur PaperMC et ajouter des plugins sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-install-papermc)

Échangez avec notre [communauté d'utilisateurs](/links/community).
