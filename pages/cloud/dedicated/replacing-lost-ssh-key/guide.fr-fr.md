---
title: "Remplacement de votre paire de clés SSH perdue"
slug: dedicated-replacing-lost-ssh-key-pair
excerpt: "Découvrez comment récupérer l’accès SSH à votre serveur dédié"
section: Diagnostic et mode Rescue
order: 2
---

**Dernière mise à jour le 30 janvier 2023**

## Objectif

Si vous [utilisez des clés SSH](https://docs.ovh.com/fr/dedicated/changer-mot-passe-root-linux-sur-serveur-dedie/) pour vous connecter à votre serveur dédié, la perte de votre clé SSH privée pourrait signifier la perte totale d'accès à votre serveur.

Vous pouvez cependant vous connecter à votre serveur via le [mode rescue d'OVHcloud](https://docs.ovh.com/fr/dedicated/ovh-rescue/), qui vous permet de vous connecter avec un mot de passe provisoire et de modifier vos fichiers.

**Ce guide vous explique comment procéder au remplacement de vos clés SSH en cas de perte d'accès à votre serveur.**

> [!warning]
>OVHcloud vous offre un certain nombre de services dont la configuration et la gestion relèvent de votre responsabilité. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
>Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur les tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) ou de vous rapprocher de [notre communauté](https://community.ovh.com/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place de services sur un serveur.
>

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Étape 1 : Désactiver la clé SSH actuelle

Afin d'accéder à votre serveur en mode rescue, la clé SSH actuellement active doit d'abord être désactivée.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et naviguez jusqu'à la section `Clés SSH`{.action}. Aidez-vous de notre [guide des clés SSH](https://docs.ovh.com/fr/dedicated/changer-mot-passe-root-linux-sur-serveur-dedie/#cpsshkey) si nécessaire.

La clé publique stockée dans l'espace client étant inutile sans la clé privée correspondante, il vous suffit de la supprimer. Cliquez sur le <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> bouton dans la ligne de la clé et sélectionnez `Supprimer la clé`{.action}.

![Supprimer la clé](images/replace-lost-key-01.png){.thumbnail}

Dans la fenêtre qui apparaît, cliquez sur `Confirmer`{.action}.

### Étape 2 : Créer une nouvelle paire de clés

Créez une nouvelle paire de clés SSH sur votre appareil, comme décrit dans la première partie du [guide des clés SSH](https://docs.ovh.com/fr/dedicated/changer-mot-passe-root-linux-sur-serveur-dedie/).

### Étape 3 : Accédez à votre serveur en mode rescue et remplacez la clé

Suivez les étapes du [guide du mode rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/) pour vous connecter à votre serveur et monter vos partitions.

Lorsque vous avez accès à vos fichiers, ouvrez le fichier "authorized_keys" concerné dans un éditeur de texte. Ce fichier stocke les clés SSH et se trouve dans le dossier `home` de l'utilisateur avec lequel vous vous connectez à votre serveur. (Remplacez "USER_NAME" par votre nom d'utilisateur réel.)

```
rescue-customer:~# sudo nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copiez et collez votre nouvelle clé publique (créée à l'étape 2) dans le fichier. Il devrait ressembler à l'exemple suivant :

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Vous pouvez supprimer la chaîne de clé "old" désormais obsolète du fichier. Enregistrez et quittez l'éditeur.

Revenez au mode de démarrage "normal" et redémarrez le serveur dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Consultez le [guide du mode rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/) si nécessaire.

Vous avez maintenant accès au serveur avec votre nouvelle paire de clés SSH.

## Aller plus loin

[Changer le mot de passe root sur un serveur dédié](https://docs.ovh.com/fr/dedicated/changer-mot-passe-root-linux-sur-serveur-dedie/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.