---
title: 'Créer des clés SSH'
slug: creation-des-cles-ssh
excerpt: 'Générez une clé SSH afin de vous connecter à votre instance'
section: Sécurité
---

**Dernière mise à jour le 17 octobre 2018**

## Objectif

Lorsque vous créez une [instance Public Cloud](https://ovh.com/fr/public-cloud/instances/){.external}, aucun e-mail contenant des identifiants ne vous sera envoyé. En effet, l'authentification repose ici sur des clés SSH sécurisées.

**Découvrez comment générer une clé SSH, afin de vous connecter à votre instance.**

> [!primary]
>
Veuillez noter que les clés SSH ne sont pas utilisées pour l'authentification sur les instances exécutant le système d'exploitation Windows. Pour ces dernières, vous devez toujours utiliser un nom d'utilisateur et un mot de passe.
>

## Prérequis

* Créer un projet [Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external} dans votre compte OVH.
* Avoir accès à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instructions

### Créer une clé SSH sous Linux et Mac

Ouvrez l'application Terminal (ligne de commande), puis exécutez la commande suivante pour générer une clé SSH de 4096 bits :

```sh
# ssh-keygen -b 4096
```

La commande affiche le résultat suivant et vous invite à enregistrer la clé nouvellement créée :

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

> [!warning]
>
> La partie privée de la clé doit être gardée en sécurité et son accès doit être limité aux seules personnes autorisées.
> 

Une fois que vous avez enregistré la clé, la ligne de commande affiche les éléments suivants :

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
0a:3a:a4:ac:d1:40:6d:63:6d:fd:d9:fa:d6:b2:e0:36 user@host
The key's randomart image is:
+---[RSA 4096]----+
|      .          |
|                 |
| .               |
|. . . .          |
|. .=.o .S.       |
| =o.o. ..   .    |
|o +   .  . o ..  |
|.. .      oEoo . |
|o.        .o+oo  |
+-----------------+
```

Vous pouvez lire et afficher la clé avec la commande suivante :

```ssh
# cat .ssh/id_rsa.pub
```

L'exécution de cette commande affiche les éléments suivants :

```ssh
cat /home/user/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxU3U2q66yt/wPmw1yRsQagtNKHAzFUCSOB1nFz0RkqvqgARrHTY0bd
aS0weA//aK9f6z+Y4THPbcCj4xPH4iGikFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@host
```

### Créer une clé SSH sous Windows

#### Avec PuTTY

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.external} est un client SSH répandu pour Windows. Vous pouvez l'utiliser pour vous connecter à distance à un serveur Linux. Son logiciel compagnon, [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external}, peut être utilisé pour créer des clés SSH.

Commencez par télécharger le logiciel [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external}, que nous utiliserons pour générer la clé.

Lancez le logiciel et sélectionnez RSA comme type de clé. Entrez alors 4096 pour le nombre de bits à générer, puis cliquez sur le bouton `Générer`{.action}.

![Générer la clé](images/puttygen-01.png){.thumbnail}

Ensuite, bougez votre souris de manière aléatoire dans la zone située sous la barre de progression, comme indiqué ci-dessous.

![Générer la clé](images/puttygen-02.gif){.thumbnail}

Lorsque vous déplacez votre souris, la barre de progression commence à se remplir. Quand elle sera complètement pleine, la clé sera prête.

![Générer la clé](images/puttygen-03.png){.thumbnail}

### Importer votre clé SSH dans l’espace client OVH

Sélectionnez et copiez le texte de votre clé publique, puis connectez-vous à votre [espace client](https://www.ovh.com/auth/?action=gotomanager){.external}.

Maintenant, cliquez sur le menu `Cloud`{.action}.

![menu cloud](images/cloud-menu.png){.thumbnail}

Sélectionnez votre projet Public Cloud dans le menu de gauche, puis cliquez sur `Infrastructure`{.action}.

![sélectionner le projet](images/select-project.png){.thumbnail}

Choisissez l'onglet `Clés SSH`{.action}.

![enregistrer la clé SSH](images/save-ssh-key-01.png){.thumbnail}

Collez alors la clé de 4096 octets dans l’espace prévu à cet effet. Attribuez-lui un nom, puis cliquez sur le bouton `Ajouter cette clé`{.action}.

![enregistrer la clé SSH](images/save-ssh-key-02.png){.thumbnail}

Votre clé va maintenant être enregistrée dans l’espace client OVH pour l'authentification.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.