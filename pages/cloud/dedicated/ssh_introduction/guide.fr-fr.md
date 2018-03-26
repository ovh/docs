---
title: Introduction au SSH
slug: ssh-introduction
excerpt: Découvrez ici comment utiliser le service SSH pour accéder à votre serveur
section: SSH et clé SSH
order: 1
---

** Dernière mise à jour le 21/11/2017 **

## Objectif

Le protocole de communication SSH (Secure Shell) est installé nativement sur tous les serveurs OVH (VPS, serveurs sédiés, instances Public Cloud).

**Découvrez ici comment utiliser le service SSH pour accéder à votre serveur.**

## Prérequis

- Le SSH est installé sur toutes les machines. Il permet de s'y connecter de manière sécurisée et d'avoir un contrôle total sur celle-ci.


## En pratique

### Logiciels compatibles

Il existe de très nombreux logiciels permettant la connexion en SSH. En voici quelques exemples pour vous aider.

#### Sur Windows

- [Putty](http://www.putty.org/){.external} (Gratuit)
- [MobaXterm](https://mobaxterm.mobatek.net/) (une version gratuite et une version payante)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (Payant)

Depuis les dernières versions de Windows 10 et Windows Server, le mode développeur permet d'avoir accès à une console bash. Voici un lien vers la documentation Microsoft : <https://msdn.microsoft.com/fr-fr/commandline/wsl/install-win10>.

#### Sur Mac

- L'outil `Terminal`{.action} est livré avec Mac OS X et est systématiquement installé sur la machine.


#### Sur Linux

- L'outil `Console`{.action} ou `Terminal`{.action} est installé nativement et peut être utilisé pour se connecter.
- Pour de la gestion multi-onglets, le paquet `Terminator`peut être installé. Vous pouvez en trouver une présentation sur la documentation d'Ubuntu : <https://doc.ubuntu-fr.org/terminator>.
- [OpenSSH](http://www.openssh.com){.external} (Gratuit).


### Étapes de connexion en SSH

#### Étape 1 : première connexion

Pour se connecter sur la machine en SSH, il faut avoir deux informations :

- l'IPv4 ou le nom de la machine ;
- le mot de passe root de la machine (reçu par mail à l'installation).


La connexion se fait avec la commande suivante :

```sh
ssh root@IP_du_serveur
```

Ou alors :

```sh
ssh root@nom_du_serveur
```

Vous obtiendrez alors le message qui suit :

```sh
The authenticity of host servername (IP_du_serveur) cant be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername,IP_du_serveur (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

Lors de la première connexion, votre client SSH reçoit une empreinte de clé RSA qui est une empreinte du serveur sur lequel vous vous connectez. Celle-ci est vérifiée à chaque nouvelle connexion. Si elle change, vous en serez informé et cela signifie que quelque chose a changé :

- la machine a été réinstallée ;
- le serveur SSH a été réinstallé ;
- vous vous connectez sur une autre machine.

Lors de la première connexion vous devez accepter l’empreinte qui sera enregistrée par votre client SSH sur votre poste de travail.


#### Étape 2 : le manuel

Dans les distributions Linux, vous aurez accès à un manuel reprenant toutes les commandes disponibles ainsi que leurs arguments.

```sh
man bash
```

#### Étape 3 : mise à jour

Votre client SSH doit toujours être à jour au même titre que votre distribution. Vous pouvez le vérifier avec la commande suivante :

```sh
ssh -V
```

En cas de doute n'hésitez pas à vous référer à la documentation du client SSH que vous utilisez.


## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.