---
title: "Se connecter au Game Panel OVHcloud"
excerpt: "Accédez à la page de connexion du Game Panel OVHcloud et récupérez un mot de passe perdu pour les comptes standards ou super administrateur."
updated: 2026-05-05
---

## Objectif

Le Game Panel OVHcloud fournit une interface dédiée pour gérer vos serveurs de jeu. Pour l'utiliser, vous devez vous connecter avec vos identifiants.

**Ce guide vous explique comment vous connecter au Game Panel OVHcloud et comment récupérer un mot de passe perdu.**

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud avec la fonctionnalité Game Panel activée.
- Le lien d'accès au Game Panel fourni lors de l'installation.

## En pratique

### Étape 1 — Accéder au Game Panel

Rendez-vous sur votre Game Panel. Le lien d'accès dépend du domaine sélectionné lors de l'installation.

![Page de connexion du Game Panel](images/game-panel-login.png){.thumbnail}

### Étape 2 — Se connecter

Saisissez votre nom d'utilisateur et le mot de passe associé pour vous connecter au Game Panel.

![Saisie des identifiants sur la page de connexion](images/game-panel-login-form.png){.thumbnail}

### Récupérer un mot de passe perdu

#### Comptes non administrateurs

En cas de mot de passe perdu, demandez à un administrateur de le réinitialiser. Consultez le guide [Gérer les utilisateurs sur le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users) pour plus de détails.

#### Compte super administrateur

Si le mot de passe du super administrateur a été perdu, réinitialisez-le : connectez-vous en SSH à la machine hôte, accédez au dossier de déploiement de l'installation, puis exécutez la commande suivante :

```bash
sudo bash tools/reset-admin-password.sh
```

Sortie attendue :

```console
New admin password: XXXXXXXXXX
Confirm new admin password: XXXXXXXXXX
[INFO] Updating the root user password in the database...
[INFO] Rotating JWT secret...
[INFO] Recreating the backend to invalidate existing sessions...
[INFO] Admin password reset complete for user: admin
```

Reconnectez-vous à l'application avec le nouveau mot de passe administrateur.

> [!warning]
>
> Cette opération déconnecte tous les utilisateurs actuellement connectés.

## Aller plus loin

Pour démarrer avec le Game Panel, consultez le guide [Premiers pas avec le Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started).

Échangez avec notre [communauté d'utilisateurs](/links/community).
