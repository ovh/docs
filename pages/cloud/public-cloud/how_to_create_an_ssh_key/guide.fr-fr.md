---
title: Création des clés SSH
slug: creation-des-cles-ssh
excerpt: Tutoriel de creation de cle SSH sous Linux ou Windows
section: Tutoriels
---


## Préambule
Lorsque vous créez une instance, aucun mail contenant vos identifiants ne vous sera envoyé. Pour se connecter de manière sécurisée, il faudra donc configurer une clé SSH. Cela permet notamment de se connecter :

- sans avoir à retenir de mot de passe
- avec une sécurité supérieure que celle proposée par les mots de passe

Ce guide vous explique les étapes à suivre afin de configurer votre clé.


## Sous Linux &amp; Mac

### Creation de la cle
<a name="CLESSHLINUX"></a>
- Démarrer un terminal
- Saisir la commande suivante qui permettra de générer une clé SSH d'une longueur de 4096 bytes :

```bash
ssh-keygen -b 4096
```

- On obtient le résultat suivant, la commande vous propose de modifier l'emplacement de la clé privée:

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```



> [!success]
>
> La partie privée de la clé doit être conservée précieusement, et son accès
> doit être limité aux personnes habilitées à l'utiliser
> 

- L'étape suivante consiste à configurer une passphrase pour votre clé SSH :


> [!alert]
>
> Il est recommandé de définir une passphrase afin de protéger la clé,
> n'hésitez pas à mettre un mot de passe fort (Majuscules / minuscules /
> chiffre / caractère spécial sur une longueur minimum de 8 digits).
> 


```bash
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
0a:3a:a4:ac:d1:40:6d:63:6d:fd:d9:fa:d6:b2:e0:36 user@host
The keys randomart image is:
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

- Lire et afficher la clé publique grâce a la commande suivante :

```bash
cat .ssh/id_rsa.pub
```

- Dans notre exemple:

```bash
cat /home/user/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxU3U2q66yt/wPmw1yRsQagtNKHAzFUCSOB1nFz0RkqvqgARrHTY0bd
aS0weA//aK9f6z+Y4THPbcCj4xPH4iGikFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@host
```



## Sous Windows

### Avec Putty

[Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.external} est le client SSH le plus répandu pour Windows

- Télécharger le logiciel [puttygen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external} permettant de générer la clé
- Exécuter le logiciel de génération de clé
- Au niveau de Number of bits in a generated key , indiquer la valeur 4096

![public-cloud](images/3777.png){.thumbnail}

- Cliquer sur `Generate`{.action} (déplacer la souris dans le cadre gris pendant l'opération)
- Indiquer une passphrase pour protéger la clé par un mot de passe
- Enregistrer la clé privée en cliquant sur `Save private key`{.action}, donner un nom à ce fichier (key.rsa par exemple)
- Copier la clé publique affichée dans le cadre

![public-cloud](images/3778.png){.thumbnail}

- Démarrer Putty
- Dans la liste sur la gauche, cliquer sur `Connection`{.action} puis `SSH`{.action}, puis `Auth`{.action}
- A la ligne Private key file for authentification , cliquer sur `Browse`{.action}, sélectionner la clé privée, valider.

![public-cloud](images/3779.png){.thumbnail}

- Cliquer sur `Open`{.action} dans Putty.


### Avec CygWin
Cygwin propose une autre approche, et permet d'installer, sous Windows, de nombreuses librairies GNU

- Télécharger le logiciel en [32bits](https://www.cygwin.com/setup-x86.exe){.external} ou en [64
bits](https://www.cygwin.com/setup-x86_64.exe){.external}
- Procéder à l'installation


> [!success]
>
> Il est recommandé de choisir un miroir le plus proche de chez vous
> (domaine .fr ou FAI européen)
> 

- A l'étape Select Packages , dans le champs Search , indiquer SSH
- Dans l'arborescence Net , cliquer sur la ligne: openssh: The OpenSSH server and client programs
- Cliquer sur `Next`{.action}
- Démarrer le logiciel CygWin
- La suite de la procédure est identique à celle nécessaire sous [Linux/Mac OS](#CLESSHLINUX){.external}.