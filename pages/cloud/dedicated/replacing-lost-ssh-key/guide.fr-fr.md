---
title: "Remplacer une paire de clés SSH perdue"
slug: dedicated-servers-replacing-lost-ssh-key-pair
excerpt: "Découvrez comment récupérer l’accès SSH à votre serveur dédié"
section: Diagnostic et mode Rescue
order: 2
---

**Dernière mise à jour le 06/02/2023**

## Objectif

Si vous [utilisez des clés SSH](https://docs.ovh.com/fr/dedicated/creer-cle-ssh-serveur-dediees/) pour vous connecter à votre serveur dédié, la perte de votre clé SSH privée pourrait signifier la perte totale d'accès à votre serveur.

Vous pouvez cependant vous connecter à votre serveur via le [mode rescue OVHcloud](https://docs.ovh.com/fr/dedicated/ovh-rescue/), grâce à un mot de passe provisoire qui vous permettra de modifier vos fichiers.

**Découvrez comment remplacer vos clés SSH en cas de perte d'accès à votre serveur.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Étape 1 - Désactiver la clé SSH actuelle

Afin d'accéder à votre serveur en mode rescue, la clé SSH active doit d'abord être désactivée.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et naviguez jusqu'à la section `Clés SSH`{.action}. Aidez-vous de notre guide [« Créer une clé SSH »](https://docs.ovh.com/fr/dedicated/creer-cle-ssh-serveur-dediees/#cpsshkey) si nécessaire.

La clé publique stockée dans l'espace client est inutile sans la clé privée correspondante, vous pouvez donc la supprimer. Cliquez sur le bouton <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> à droite de la clé et sélectionnez `Supprimer la clé`{.action}.

![Supprimer la clé](images/replace-lost-key-01.png){.thumbnail}

Dans la fenêtre qui apparaît, cliquez sur `Confirmer`{.action}.

### Étape 2 - Créer une nouvelle paire de clés

Créez une nouvelle paire de clés SSH sur votre poste de travail, tel que décrit dans la première partie du guide [« Créer une clé SSH »](https://docs.ovh.com/fr/dedicated/creer-cle-ssh-serveur-dediees/)

### Étape 3 - Accéder à votre serveur en mode rescue et remplacer la clé

Suivez les étapes du guide sur le [mode rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/) pour vous connecter à votre serveur et monter vos partitions.

Lorsque vous avez accès à vos fichiers, ouvrez le fichier « authorized_keys » concerné dans un éditeur de texte. Ce fichier stocke les clés SSH et se trouve dans le dossier `home` de l'utilisateur connecté à votre serveur. (Remplacez « USER_NAME » par votre nom d'utilisateur.)

```bash
rescue-customer:~# sudo nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copiez-collez votre nouvelle clé publique (créée à l'étape 2) dans le fichier. Le contenu du fichier devrait ressembler à l'exemple suivant :

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Vous pouvez supprimer la chaîne de clé « old » (désormais obsolète) du fichier. Enregistrez et quittez l'éditeur.

Revenez au mode de démarrage « normal » et redémarrez le serveur dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Consultez le guide [« Activer et utiliser le mode rescue »](https://docs.ovh.com/fr/dedicated/ovh-rescue/) si nécessaire.

Vous avez maintenant accès au serveur avec votre nouvelle paire de clés SSH.

## Aller plus loin

[Changer le mot de passe root sur un serveur dédié](https://docs.ovh.com/fr/dedicated/changer-mot-passe-root-linux-sur-serveur-dedie/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.