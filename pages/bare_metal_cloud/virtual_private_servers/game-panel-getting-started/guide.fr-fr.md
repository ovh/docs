---
title: "Premiers pas avec le Game Panel"
excerpt: "Déployez et administrez vos serveurs de jeu sur votre VPS OVHcloud avec le Game Panel. Plus de 40 titres pris en charge, dont Minecraft, ARK, CS2 et Rust."
updated: 2026-05-05
---

## Objectif

Le Game Panel OVHcloud vous permet de déployer et d'administrer des serveurs de jeu pour un large éventail de titres populaires. Grâce à son interface simplifiée et à ses outils automatisés, vous pouvez lancer des instances, personnaliser les configurations et surveiller les performances.

Pourquoi choisir le Game Panel OVHcloud :

- **Facilité d'utilisation** : conçu aussi bien pour les débutants que pour les utilisateurs expérimentés.
- **Déploiement automatisé** : configurez et maintenez vos serveurs rapidement.
- **Prise en charge multi-jeux** : exécutez plusieurs serveurs de jeu sur un seul VPS.
- **Visibilité sur les ressources** : gardez un contrôle complet sur les performances système.

Avec l'infrastructure OVHcloud, l'hébergement de serveurs de jeu devient simple et fiable. Que vous lanciez des sessions sur Rust, ARK, Minecraft, Counter-Strike ou d'autres titres, ce guide vous donne les bases pour démarrer et administrer vos serveurs efficacement.

**Ce guide vous accompagne dans les premiers pas d'utilisation du Game Panel OVHcloud.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.

<!-- CP-NAV-START:baremetal-vps -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Gestion du VPS](/links/control-panel/baremetal-vps)
- **Chemin de navigation :** `Bare Metal Cloud`{.action} > `Serveurs Privés Virtuels`{.action} > Sélectionnez votre VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## En pratique

### Étape 1 — Accéder au Game Panel

Depuis votre [page de gestion du VPS](/links/control-panel/baremetal-vps), repérez la fonctionnalité de gestion de jeu liée à votre serveur et cliquez sur `Open Panel`{.action} pour accéder à l'interface du Game Panel.

![Le tableau de bord principal du Game Panel](images/game-panel-dashboard.png){.thumbnail}

### Étape 2 — Déployer votre premier serveur de jeu

Depuis le tableau de bord Game Servers, sélectionnez l'option permettant d'ajouter une nouvelle instance.

![Sélection d'un jeu dans la liste disponible](images/game-selection-list.png){.thumbnail}

Choisissez le jeu à héberger dans la liste (plus de 40 jeux) et cliquez sur `Install`{.action}. La configuration peut varier en fonction du jeu.

- Attribuez un nom à votre serveur.
- Configurez les ports si nécessaire.
- Lancez le processus de déploiement.

Le panel télécharge et configure automatiquement les fichiers requis. Suivez la progression depuis l'onglet des logs.

![Progression de l'installation dans l'onglet des logs](images/deployment-progress.png){.thumbnail}

### Étape 3 — Administrer votre serveur

Une fois déployé, le panel offre les contrôles suivants pour votre serveur de jeu :

- **Démarrer/Arrêter/Redémarrer** le serveur.
- **Modifier** le nom du serveur.
- **Copier l'adresse IP**.
- **Visualiser la consommation de ressources** (CPU, RAM).
- **Accéder aux logs et à la console**.
- **Supprimer** le serveur.

![Interface de gestion du serveur avec les contrôles d'état](images/server-management.png){.thumbnail}

### Étape 4 — Configurer les paramètres du jeu

Selon le jeu, vous pouvez configurer les options en cliquant sur le bouton `Settings`{.action}. Les fonctionnalités suivantes sont disponibles :

- **Configurer le jeu** : ajustez les paramètres spécifiques au jeu qui influent sur le gameplay.
- **Gestionnaire de fichiers** : parcourez et modifiez les fichiers du serveur.
- **Sauvegardes** : configurez des sauvegardes automatisées de votre serveur de jeu.
- **SFTP** : configurez l'accès SFTP pour les transferts de fichiers.
- **Terminal SSH** : accédez à un shell complet à l'intérieur du conteneur du serveur.

> [!warning]
>
> Le terminal SSH donne un accès shell complet à l'intérieur du conteneur du serveur. Une mauvaise utilisation peut endommager le serveur de jeu, supprimer des fichiers ou exposer des données sensibles. À utiliser avec précaution.

![Panneau de configuration spécifique au jeu](images/game-settings.png){.thumbnail}

### Étape 5 — Surveiller les performances

La section de monitoring affiche l'état de santé de votre serveur de jeu :

- Surveillez l'utilisation **CPU et RAM**.
- Vérifiez **l'état de santé global du serveur**.

![Tableau de bord de monitoring des performances](images/monitoring-dashboard.png){.thumbnail}

### Étape 6 — Gérer les utilisateurs

La fonctionnalité de gestion des utilisateurs contrôle et personnalise l'accès à vos serveurs de jeu. Pour plus de détails, consultez le guide [Gérer les utilisateurs sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users).

Via cette interface, vous pouvez créer et gérer des comptes utilisateurs, activer ou désactiver les accès et attribuer des identifiants. Chaque utilisateur peut ensuite recevoir des autorisations spécifiques, à la fois au niveau global et par serveur.

**Autorisations au niveau global :**

- Gérer les autres utilisateurs.
- Installer des serveurs.

**Autorisations au niveau du serveur :**

Rôles prédéfinis (visualisation, opérateur ou accès complet) ou autorisations personnalisées, parmi lesquelles :

- Accéder à la console du serveur.
- Démarrer, arrêter ou redémarrer le serveur.
- Gérer les mises à jour du jeu.
- Lire et modifier des fichiers.
- Gérer les sauvegardes (créer, télécharger, supprimer).
- Accéder aux logs.
- Utiliser le SFTP ou le SSH.

Cela garantit que chaque administrateur n'accède qu'aux fonctionnalités dont il a besoin, ce qui améliore la sécurité et l'efficacité opérationnelle. C'est particulièrement utile pour les équipes qui administrent plusieurs serveurs ou collaborent sur des projets d'hébergement de jeux.

![Panneau de gestion des utilisateurs avec paramètres d'autorisation](images/user-management.png){.thumbnail}

## Aller plus loin

- [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)
- [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Échangez avec notre [communauté d'utilisateurs](/links/community).
