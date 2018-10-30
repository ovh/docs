---
title: 'Passer root et définir un mot de passe'
slug: become_the_root_user_and_select_a_password
excerpt: 'Ce guide vous montrera comment devenir l''utilisateur root et créer un mot de passe pour le compte root'
legacy_guide_number: g1786
section: 'Premiers pas'
---

**Dernière mise à jour le 15 octobre 2018**

## Objectif

Pour exécuter certaines fonctions administratives sur votre serveur (l’installation de packages, par exemple), vous devez disposer d'un niveau élevé d'accès utilisateur. Sur les serveurs Linux, cet accès est appelé "root".

**Ce guide vous montrera comment devenir l'utilisateur root et créer un mot de passe pour le compte root.**

## Prérequis

* un projet Public Cloud activé
* Avoir accès à l’[espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external}

## Instructions

> \[!primary]
>
Ce guide suppose que l'utilisateur par défaut s'appelle 'admin'.
>

### Changer le mot de passe root

En premier, ouvrez une connexion SSH à votre serveur.

Sur la ligne de commande, entrez un mot de passe pour l'utilisateur admin (pour des raisons de sécurité, le mot de passe ne sera pas affiché lors de la saisie) :

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
successfully
```

### Mise à jour des dépôts (Debian/Ubuntu)

Pour mettre à jour les packages logiciels installés sur votre serveur, tapez la commande suivante sur la ligne de commande :

```
~$ sudo apt-get update
```

### Mettre à jour le système (CentOS / Fedora)

Pour mettre à jour le système d'exploitation de votre serveur, tapez la commande suivante sur la ligne de commande :

```
~$ sudo yum update
```

### Modifier le fichier de configuration

```
~$ sudo vi /etc/hosts.allow
```

### Passer root

Pour devenir l'utilisateur root, tapez la commande suivante sur la ligne de commande :

```
~$ sudo su -
~#
```

Ensuite, tapez le mot de passe root.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.