---
title: "Comment remplacer une paire de clés SSH sur une instance Public Cloud"
excerpt: "Découvrez comment restaurer l'accès au serveur en remplaçant une paire de clés SSH par une nouvelle en cas de perte de votre clé privée"
updated: 2024-06-13
---

## Objectif

La perte de votre clé SSH privée entraîne la perte de l'accès à votre instance si vous n'avez pas configuré d'autre moyen d'accès.

Cependant, vous pouvez toujours vous connecter à votre instance via le mode rescue d’OVHcloud, qui vous permet de vous connecter avec un mot de passe provisoire et de modifier vos fichiers.

**Ce guide vous explique comment remplacer vos clés SSH en cas de perte d'accès à votre instance.**

> [!warning]
> OVHcloud fournit des services dont la configuration et la gestion relèvent de votre responsabilité. Il est donc de votre responsabilité de vous assurer de leur bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) ou de contacter [notre communauté d'utilisateurs](/links/community) si vous rencontrez des problèmes.
>

## Prérequis

- Une [instance Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Être connecté à l’[espace client OVHcloud](/links/manager)

## En pratique

### Étape 1 : créer une nouvelle paire de clés

Créez une nouvelle paire de clés SSH sur votre appareil local, en suivant les instructions de la première partie du [guide de création d'une clé SSH](/pages/public_cloud/compute/creating-ssh-keys-pci).

### Étape 2 : accéder à votre instance en mode rescue

Suivez les étapes du [guide du mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) pour redémarrer l'instance en mode rescue, vous y connecter et monter vos partitions.

Une fois que vous avez utilisé la commande `mount` (comme décrit dans le guide) et que votre partition système est accessible, vous pouvez utiliser la commande suivante :

```bash
chroot path/to/partition/mountpoint
```

Le chemin d'accès au fichier dépend du point de montage utilisé. Si vous avez monté votre partition à `/mnt`, vous devez entrer ce qui suit :

```bash
chroot /mnt/
```

Vous devriez maintenant avoir un accès complet en écriture à vos fichiers dans ce dossier.

### Étape 3 : remplacer la clé

Ouvrez le fichier « authorized_keys » concerné avec un éditeur de texte. Ce fichier stocke les clés SSH et se trouve dans le dossier « home » de l'utilisateur avec lequel vous vous connectez à votre instance.

Exemple :

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Remplacez `USER_NAME` par votre nom d'utilisateur réel.

Faites un copier-coller de votre nouvelle clé publique (créée à l'étape 1) dans le fichier. Elle devrait ressembler à l'exemple suivant :

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Pour des raisons de sécurité, supprimez la chaîne de clé obsolète « old » du fichier. Enregistrez vos modifications et quittez l'éditeur.

Redémarrez l'instance en mode « normal » depuis votre [espace client OVHcloud](/links/manager). Consultez les instructions du [guide sur le mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) si nécessaire.

Vous avez maintenant accès à l'instance avec votre nouvelle paire de clés SSH.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
