---
title: 'Comment créer un serveur compatible avec Palworld'
excerpt: 'Découvrez comment installer votre propre serveur compatible avec Palworld sur un VPS ou un Serveur Dédié OVHcloud'
updated: 2024-02-23
---

## Objectif

Développé par Pocket Pair, Palworld est un jeu vidéo qui mélange des éléments de survie, de fabrication d'objets et d'aventure, le tout dans un monde ouvert, peuplé par des créatures appelées « Pals ». Posséder son propre serveur pour jouer à un jeu comme Palworld offre plusieurs avantages, comme le contrôle total sur l'environnement de jeu et sur la communauté, l'amélioration des performances et de l'expérience de jeu, ou encore la possibilité d'organiser des évènements spéciaux.

**Ce tutoriel décrit comment créer un serveur compatible avec Palworld sur un VPS ou un Serveur Dédié OVHcloud à l'aide de LinuxGSM. Le temps d'installation est estimé à moins de 10 minutes.**

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr-ca/vps/) ou d'un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) dans votre compte OVHcloud
- Avoir installé une distribution GNU/Linux sur le serveur
- Disposer d'un accès administrateur (sudo) via SSH à votre serveur
- Avoir une compréhension basique de l'administration GNU/Linux

> [!warning]
>
> Si vous n'êtes pas familier avec l'utilisation d'un VPS, consultez notre guide « [Débuter avec un VPS](starting_with_a_vps1.) ».
>
> Pour une installation sur un serveur dédié, assurez-vous d'avoir suivi les [premiers pas avec un serveur dédié](getting-started-with-dedicated-server1.).

## En pratique

Une fois le système d'exploitation installé, connectez-vous à votre VPS en SSH, tel que décrit dans le guide « [Débuter avec un VPS](starting_with_a_vps1.) ».<br>
Si vous utilisez un serveur dédié, suivez les instructions du guide « [Premiers pas avec un serveur dédié](getting-started-with-dedicated-server1.) ».

### Vérifier la compatibilité de votre système d'exploitation

Avant de commencer, vérifiez que votre système d'exploitation est compatible. Pour plus de détails, consultez la partie « Compatibility » (Compatibilité) sur [LinuxGSM](https://linuxgsm.com/servers/pwserver/).

### Installer les dépendances

Sur [LinuxGSM](https://linuxgsm.com/servers/pwserver/), rendez-vous dans la partie « Dependencies » (Dépendances) pour installer toutes les dépendances nécessaires selon votre système d'exploitation.

> [!warning]
>
> Si vous rencontrez une erreur de type : `E: Package 'netcat' has no installation candidate`, installez `netcat-traditional` avec la commande suivante : `sudo apt install netcat-traditional`.
>

### Installer le serveur

Avant de continuer, assurez-vous que toutes les dépendances ont bien été installées.

#### Créer un nouvel utilisateur

Pour éviter de créer des vulnérabilités dans votre système, créez un utilisateur nommé « pwserver » qui exécutera les actions du serveur :

```sh
~$ sudo adduser pwserver
```

Pour des raisons de sécurité, entrez un mot de passe fort.

Plusieurs informations vous sont demandées. Appuyez sur la touche `Entrée`{.action} pour valider.

Une fois le nouvel utilisateur créé, basculez vers celui-ci :

```sh
~$ sudo su - pwserver
```

#### Télécharger linuxgsm.sh

Pour télécharger linuxgsm.sh, exécutez la ligne de commande suivante : 

```sh
~$ curl -Lo linuxgsm.sh https://linuxgsm.sh && chmod +x linuxgsm.sh && bash linuxgsm.sh pwserver
```

#### Lancer l'installation

Pour finaliser l'installation du serveur, éxécutez la commande suivante :

```sh
~$ ./pwserver install
```

Suivez les instructions à l'écran et appuyez sur la touche `Entrée`{.action} pour valider.

> [!warning]
>
> Il est possible qu'une erreur de type `missing dependencies : distro-info libsdl2-2.0-0:i386 netcat-openbsd` s'affiche. Dans cet exemple, il est indiqué que les dépendances `distro-info libsdl2-2.0-0:i386 netcat-openbsd` sont manquantes et qu'il faut les installer manuellement. 
>
> Basculez vers votre utilisateur ayant les droits sudo avec la commande `su - <user>`. Installez les dépendances manquantes avec la commande : `sudo apt install distro-info libsdl2-2.0-0:i386 netcat-openbsd`. Basculez à nouveau vers votre utilisateur `pwserver` et relancez l'installation : `./pwserver install`
>

Votre serveur compatible avec Palworld est maintenant installé sur votre VPS OVHcloud. Maintenant, à vous de jouer !

Pour connaître la liste des commandes disponibles, consultez la partie « Basic Usage » de [LinuxGSM](https://linuxgsm.com/servers/pwserver/).

## Aller plus loin

[Déployer un serveur de jeu Palworld](https://linuxgsm.com/servers/pwserver)

[FAQ VPS OVHcloud](vps-faq1.)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.