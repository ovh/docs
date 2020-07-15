---
title: Installer la clé SSH OVHcloud
slug: ovh-ssh-key
excerpt: Ce guide vous décrit l'installation d'une clé SSH OVHcloud pour permettre l'intervention de nos administrateurs, puis sa désactivation
section: SSH et clé SSH
---

**Dernière mise à jour le 2018/01/23**

## Objectif

Dans certains cas, l'intervention d'un administrateur OVHcloud peut être nécessaire sur votre infrastructure dédiée. 

**Ce guide vous décrit l'installation d'une clé SSH OVHcloud pour permettre l'intervention de nos administrateurs, puis sa désactivation.**

## Prérequis

- Être [connecté en SSH](../ssh-introduction/){.external} (accès root).

## En pratique

### Étape 1 : installer la clé

Une fois connecté en SSH, voici la commande à effectuer :

- Si votre serveur est hébergé chez OVHcloud Europe :

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

- Si votre serveur est hébergé chez OVHcloud Canada :

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

Si l'opération s'est bien déroulée, le fichier `authorized_keys2` a été créé. Il contient des informations sous cette forme :

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Étape 2 : résolution des défauts

Même si la clé est correctement installée, il est possible que nos administrateurs ne puissent pas se connecter sur votre serveur. Veuillez alors vérifier les points suivants :

#### Vérifier que le fichier `/root/.ssh/authorized_keys2` existe

Pour vous assurer de la présence de ce fichier, vous devez entrer la commande suivante :

```sh
cat /root/.ssh/authorized_keys2
```

#### Vérifier que le serveur SSH est configuré de sorte à accepter les connexions provenant de la racine (root)

Pour cela, vous devez vérifier les paramètres suivants dans le fichier `/etc/ssh/sshd_config` :

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

Ensuite, redémarrez le service SSH :

```sh
/etc/init.d/sshd restart
```

#### Vérifier que le répertoire de base de l'utilisateur racine est bien /root

Vous pouvez utiliser `/etc/passwd` pour vérifier cela :

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Le 6e élément de la ligne (les éléments sont séparés par des **:**) doit être /root.

#### Vérifier que le pare-feu logiciel ne bloquera pas l'accès

En cas d'utilisation d'un pare-feu logiciel, il faudra ajouter une règle d'autorisation pour la source cache-ng.ovh.net (cache-ng.ovh.ca pour un serveur au Canada) avec comme port de destination votre port SSH (par défaut, le 22 ). Voici un exemple de règle iptables :

**Pour un serveur en France**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Pour un serveur au Canada**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Vérifier que le port SSH n'est pas personnalisé

Si vous avez personnalisé votre port SSH, nous vous invitons à nous le préciser afin que l'administrateur puisse se connecter.
 

### Étape 3 : désactiver la clé

Une fois l'intervention de l'administrateur terminée, vous pouvez désactiver la clé SSH. Pour cela, vous avez seulement besoin de modifier le fichier `authorized_keys2` et de le commenter (avec **#**) comme indiqué ci dessous :

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Aller plus loin

[Introduction au SSH](../ssh-introduction/){.external}.

Échangez avec notre communauté d'utilisateurs au <https://community.ovh.com/>.
