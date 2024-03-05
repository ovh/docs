---
title: "Remplacer une paire de clés SSH"
excerpt: "Découvrez comment restaurer l'accès au serveur en cas de perte de votre clé privée, en générant une nouvelle paire de clés SSH"
updated: 2024-02-19
---

## Objectif

Si vous [utilisez des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) pour vous connecter à votre serveur, la perte de votre clé SSH privée pourrait signifier la perte totale d'accès à votre serveur.

Vous pouvez cependant vous connecter à votre serveur via le [mode rescue OVHcloud](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), grâce à un mot de passe provisoire qui vous permettra de modifier vos fichiers.

**Découvrez comment remplacer vos clés SSH en cas de perte d'accès à votre serveur.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) ou d'un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)

## En pratique

### Étape 1 - Désactiver la clé SSH actuelle

Afin d'accéder à votre serveur en mode rescue, la clé SSH active doit d'abord être désactivée.

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et naviguez jusqu'à la section `Clés SSH`{.action}. Aidez-vous de notre guide [« Créer une clé SSH »](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#cpsshkey) si nécessaire.

La clé publique stockée dans l'espace client est inutile sans la clé privée correspondante, vous pouvez donc la supprimer. Cliquez sur le bouton `...`{.action} à droite de la clé et sélectionnez `Supprimer la clé`{.action}.

![Supprimer la clé](images/replace-lost-key-01.png){.thumbnail}

Dans la fenêtre qui apparaît, cliquez sur `Confirmer`{.action}.

### Étape 2 - Créer une nouvelle paire de clés

Créez une nouvelle paire de clés SSH sur votre poste de travail, tel que décrit dans la première partie du guide [« Créer une clé SSH »](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

<a name="step3"></a>

### Étape 3 - Accéder à votre serveur en mode rescue et remplacer la clé

Suivez les étapes de nos guides sur le mode rescue pour vous connecter à votre serveur et monter vos partitions :

- [Utiliser le mode rescue sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Utiliser le mode rescue sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Lorsque vous avez accès à vos fichiers, ouvrez le fichier « authorized_keys » concerné dans un éditeur de texte. Ce fichier stocke les clés SSH et se trouve dans le dossier `home` de l'utilisateur connecté à votre serveur. (Remplacez « USER_NAME » par votre nom d'utilisateur.)

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copiez-collez votre nouvelle clé publique (créée à l'étape 2) dans le fichier. Le contenu du fichier devrait ressembler à l'exemple suivant :

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Pour des raisons de sécurité, supprimez la chaîne de clé « old » (désormais obsolète) du fichier. Enregistrez et quittez l'éditeur.

Revenez au mode de démarrage « normal » et redémarrez le serveur dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Consultez le guide [« Activer et utiliser le mode rescue »](#step3) si nécessaire.

Vous avez maintenant accès au serveur avec votre nouvelle paire de clés SSH.

## Aller plus loin

[Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Utiliser le mode rescue sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Utiliser le mode rescue sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
