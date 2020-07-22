---
title: 'Changer sa clé SSH en cas de perte'
slug: changer-sa-cle-ssh-en-cas-de-perte
legacy_guide_number: 2069
section: 'Gestion depuis l''espace client'
order: 6
---

**Dernière mise à jour le 27 septembre 2018**

## Objectif

En cas de perte de clé SSH, que cela soit suite à une réinstallation de poste ou autre, il est possible que vous ne soyez plus en mesure de vous connecter sur votre instance si vous n'avez configuré aucun moyen alternatif de vous connecter sur votre instance.

Pour récupérer l'accès, nous avons mis à votre disposition un [mode rescue](../passer-une-instance-en-mode-rescue/) qui vous permet de vous connecter à l'aide d'un mot de passe puis de modifier vos fichiers.

**Ce guide vous explique comment configurer le fichier  *authorized_keys*  de l'utilisateur  *admin*  afin de pouvoir ajouter une nouvelle clé SSH pour récupérer l'accès à votre instance.**

## Prérequis

- Créer une clé SSH
- Passer une instance en mode rescue

## En pratique

> [!primary]
>
Si vous souhaitez enregistrer une clé SSH dans l'espace client OVHcloud, nous vous recommandons d'utiliser le chiffrement RSA ou ECDSA. ED25519 n'est actuellement pas pris en charge.
>

Après avoir monté le disque de votre instance en [mode rescue](../passer-une-instance-en-mode-rescue/), vous serez en mesure d'accéder à l'ensemble de vos fichiers.

Le fichier contenant vos clés SSH est le fichier :

```sh
/home/NOM_UTILISATEUR/.ssh/authorized_keys
```

Si vous souhaitez ajouter votre nouvelle clé SSH, il suffit donc d'éditer ce fichier et d'y ajouter votre nouvelle clé :

```sh
sudo vim /mnt/home/NOM_UTILISATEUR/.ssh/authorized_keys
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEEEEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```
### Changer la clé SSH utilisateur par défaut

Pour modifier la clé SSH de votre utilisateur par défaut, il faudra simplement vous rendre dans le dossier personnel de celui ci. Par exemple, pour l'utilisateur  admin , le fichier à trouver se trouvera dans le dossier suivant :

```sh
/home/admin/.ssh/authorized_keys
```

Pour une instance sous Ubuntu 15.10, l'utilisateur par défaut sera  ubuntu , le fichier sera donc dans le dossier suivant :

```sh
/home/ubuntu/.ssh/authorized_keys
```
### Changer le mot de passe utilisateur par défaut

Vous pouvez aussi modifier le mot de passe de votre utilisateur par défaut en utilisant le mode rescue et les commandes suivantes (dans le cas où l'utilisateur est  admin ) :

On change le répertoire racine pour se placer directement sur le disque de l'instance :

> [!primary]
>
Dans l'exemple ci-dessous, nous avons utilisé vdb1 comme nom du disque du serveur et mnt comme point de montage.
>

```sh
/home/admin# mount /dev/vdb1 /mnt/
/home/admin# chroot /mnt/
```

On change le mot de passe admin :

```sh
passwd admin
```

Une fois cette modification effectuée et sauvegardée, il vous suffit de redémarrer votre instance sur son disque afin d'être en mesure de vous connecter sur votre instance avec votre nouvelle clé SSH.

## Aller plus loin

[Passer une instance en mode rescue](../passer-une-instance-en-mode-rescue/)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

