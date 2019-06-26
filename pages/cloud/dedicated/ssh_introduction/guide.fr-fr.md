---
title: 'Introduction au SSH'
slug: ssh-introduction
excerpt: 'Découvrez ici comment utiliser le service SSH pour accéder à votre serveur'
section: 'SSH et clé SSH'
order: 1
---

**Dernière mise à jour le 17/06/2019**

## Objectif

Le protocole de communication SSH (Secure Shell) est installé nativement sur tous les serveurs OVH (VPS, serveurs dédiés, instances Public Cloud).

**Découvrez comment utiliser le service SSH pour accéder à votre serveur.**

## Prérequis

- Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
- Avoir accès à votre serveur via SSH en tant qu'administrateur (root).

## En pratique

### Logiciels compatibles

De nombreux logiciels vous permettent de vous connecter à votre serveur en SSH. En voici quelques exemples pour vous aider :

#### Sur Windows

Pour vous connecter à votre serveur à partir de Windows, vous pouvez utiliser l'une des applications suivantes :

- [ PuTT](http://www.putty.org/){.external} (gratuit)
- [ MobaXterm](https://mobaxterm.mobatek.net/) (version gratuite et version payante)
- [ SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (payant)

Depuis les versions Windows 10 et Windows Server les plus récentes, le mode développeur vous donne accès à une console bash. Voici un lien vers la documentation Microsoft : <https://docs.microsoft.com/fr-fr/windows/wsl/install-win10>.

#### Sur Mac

L'outil `Terminal`{.action} est fourni avec Mac OS X et permet d'établir une connexion SSH à votre serveur.

#### Sur Linux

À partir d'un ordinateur Linux, vous pouvez utiliser les outils `Console`{.action} ou `Terminal`{.action} installés nativement pour vous connecter à votre serveur.

Pour de la gestion multi-onglets, le paquet `Terminator`, un émulateur de terminal pouvant être utilisé pour gérer plusieurs connexions SSH peut être installé. Vous pouvez lire un manuel Ubuntu pour cet outil ici : <http://manpages.ubuntu.com/manpages/zesty/man1/terminator.1.html>.

Outre ces applications, vous pouvez également utiliser [OpenSSH](http://www.openssh.com){.external} gratuitement.

### Étapes de connexion via SSH

#### Étape 1 : première connexion

Pour vous connecter à votre machine en SSH, vous aurez besoin de l'adresse IPv4 ou du nom de la machine, ainsi que du mot de passe root du serveur, que vous avez reçu par e-mail à l’installation.

Entrez la commande suivante :

```sh
ssh root@server_IP
```

Vous pouvez également utiliser la commande suivante :

```sh
ssh root@server_name
```

Le message suivant s'affiche :

```sh
The authenticity of host servername (server_IP) can’t be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)?` YES
Warning: Permanently added servername, server_IP (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

Lors de la première connexion, votre client SSH reçoit une empreinte de clé RSA, qui est une empreinte du serveur auquel vous vous connectez. Celle-ci est vérifiée pour chaque nouvelle connexion. Si elle est modifiée, vous en serez informé, ce qui signifie que l'une des situations suivantes s'est produite :

- l'ordinateur a été réinstallé ;
- le serveur SSH a été réinstallé ;
- vous vous connectez à une autre machine.

Lors de la première connexion, vous devez accepter l'empreinte qui sera enregistrée par votre client SSH sur votre poste de travail.

#### Étape 2 : accès au manuel SSH

Sur les distributions Linux, vous aurez accès à un manuel reprenant toutes les commandes disponibles et leurs arguments.

```sh
man bash
```

#### Étape 3 : mise à jour

Votre client SSH doit être tenu à jour au même titre que votre distribution pour fonctionner correctement. Consultez la documentation du client SSH que vous utilisez pour savoir comment le mettre à jour.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.