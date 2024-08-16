---
title: "Comment récupérer l'accès au serveur en cas de perte du mot de passe de l'utilisateur"
excerpt: "Découvrez comment configurer un nouveau mot de passe pour un compte utilisateur sur un système d'exploitation GNU/Linux avec le mode rescue OVHcloud"
updated: 2024-02-19
---

## Objectif

Sans un autre mode d'authentification ou un autre compte utilisateur, la perte de votre mot de passe signifie que vous ne pouvez plus vous connecter à votre serveur de façon normale.

Dans ce cas, vous pouvez vous connecter à votre serveur via le mode rescue d’OVHcloud, qui vous permet de vous connecter avec un mot de passe provisoire et de modifier vos fichiers.

**Ce guide vous explique comment réinitialiser le mot de passe de votre compte utilisateur si vous n'avez plus accès à votre serveur.**

> [!primary]
>
> Pour récupérer l'accès à un serveur auquel vous vous connectez avec une clé SSH, référez-vous alors à notre guide « [Comment remplacer une paire de clés SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key) ».
>

## Prérequis

- Disposer d'un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) ou d'un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

> [!primary]
> Ce guide ne s'applique pas aux installations de **Windows** Server. Consultez nos guides « [Comment changer le mot de passe administrateur sur un serveur dédié Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows) » et « [Comment changer le mot de passe administrateur sur un VPS Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password) ».
>

## En pratique

N'oubliez pas de consulter également nos guides de premiers pas :

- Pour un [serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Pour un [serveur dédié de la gamme **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Pour un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) ou de contacter [notre communauté](https://community.ovh.com/) si vous rencontrez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en œuvre de services sur un serveur.
>

<a name="step1"></a>

### Étape 1 : redémarrer le serveur en mode rescue

Suivez les étapes de nos guides sur le mode rescue pour vous connecter à votre serveur et monter vos partitions :

- [Utiliser le mode rescue sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Utiliser le mode rescue sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Pour continuer, votre partition système doit être montée et vous devez avoir un accès en écriture à votre système de fichiers.

Cela signifie que vous avez entré une version de la commande suivante dans le shell du mode rescue :

```bash
chroot path/to/partition/mountpoint/
```

La commande exacte dépend du point de montage utilisé. Par exemple, si vous avez monté votre partition à `/mnt`, la commande serait la suivante :

```bash
chroot /mnt/
```

### Étape 2 : réinitialiser le mot de passe de l'utilisateur

Remarque : sur une distribution GNU/Linux, **une invite de mot de passe n'affiche pas vos entrées clavier**.

Changez le mot de passe de l'utilisateur avec la commande suivante (remplacez `username` par le nom réel du compte utilisateur) :

```bash
passwd username
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Pensez à utiliser le mode de démarrage **normal** de votre serveur lorsque vous le redémarrez depuis votre [espace client OVHcloud](/links/manager).

Consultez le [guide du mode rescue](#step1) si nécessaire.

Vous avez maintenant accès au serveur avec votre nouveau mot de passe.

## Aller plus loin

[Créer et utiliser des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Mode rescue pour un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Mode rescue pour un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[Configuration des comptes utilisateurs et de l'accès root sur un serveur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.