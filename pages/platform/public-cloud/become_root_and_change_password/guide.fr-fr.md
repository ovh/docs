---
title: 'Passer root et définir un mot de passe'
slug: passer-root-et-definir-un-mot-de-passe
excerpt: 'Apprenez à vous servir de l''utilisateur root et à créer un mot de passe pour celui-ci'
section: Premiers pas
order: 7
---

**Dernière mise à jour le 19/02/2019**

## Objectif

Pour exécuter certaines fonctions administratives sur votre serveur (l’installation de paquets, par exemple), vous devez disposer d'un niveau d'accès utilisateur élevé. Pour les serveurs Linux, ce niveau est appelé « root ».

**Apprenez à vous servir de l'utilisateur root et à créer un mot de passe pour celui-ci.**

## Prérequis

* Disposer d'un projet Public Cloud activé.
* Pouvoir se connecter en SSH au serveur.

> [!primary]
>
> Ce guide suppose que l'utilisateur par défaut s'appelle « admin ».
>

## En pratique

### Changer le mot de passe root

En premier, ouvrez une connexion SSH à votre serveur.

Utilisez la commande ci-dessous, puis entrez un mot de passe pour l'utilisateur admin (pour des raisons de sécurité, celui-ci ne sera pas affiché lors de la saisie) :

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
successfully
```

### Mettre à jour des dépôts (Debian et Ubuntu)

Pour mettre à jour les _packages_ logiciels installés dans votre serveur, entrez la commande suivante :

```
~$ sudo apt-get update
```

### Mettre à jour le système (CentOS et Fedora)

Pour mettre à jour le système d'exploitation de votre serveur, entrez la commande suivante :

```
~$ sudo yum update
```

### Modifier le fichier de configuration

Pour mettre à jour le fichier de configuration de votre serveur, entrez la commande suivante :

```
~$ sudo vi /etc/hosts.allow
```

### Passer root

Pour devenir l'utilisateur root, entrez la commande suivante :

```
~$ sudo su -
~#
```

Puis tapez le mot de passe root.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
