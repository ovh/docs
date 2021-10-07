---
title: 'Passer root et définir un mot de passe'
slug: passer-root-et-definir-un-mot-de-passe
excerpt: "Apprenez à vous servir de l'utilisateur root et à créer un mot de passe pour celui-ci"
section: 'Premiers pas'
order: 5
---

**Dernière mise à jour le 06/10/2021**

## Objectif

Pour exécuter certaines fonctions administratives sur votre serveur (l’installation de paquets, par exemple), vous devez disposer d'un niveau élevé d'accès utilisateur, vous devez disposer d’un niveau d’accès utilisateur élevé. Pour les serveurs Linux, ce niveau est appelé « root ».

**Apprenez à vous servir de l'utilisateur root et à créer un mot de passe pour celui-ci.**

## Prérequis

* [Avoir créé une instance Public Cloud depuis votre compte](https://docs.ovh.com/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-3-creer-une-instance)
* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## En pratique

> [!primary]
>
> Ce guide suppose que l'utilisateur par défaut s'appelle "admin".
>

### Définir le mot de passe root <a name="définirlemotdepasseroot"></a>

Pour commencer, établissez une [connexion SSH](https://docs.ovh.com/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-4-connexion-a-votre-instance) à votre serveur avec votre utilisateur par défaut.

Utilisez la commande ci-dessous pour définir un mot de passe pour l’utilisateur root (pour des raisons de sécurité, celui-ci ne sera pas affiché lors de la saisie) :

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
successfully
```

### Passer à root

Pour devenir l'utilisateur root, tapez la commande suivante :

```
~$ sudo su -
~#
```

Ensuite, tapez le mot de passe root.

### Mettre à jour des dépôts (Debian et Ubuntu)

Pour mettre à jour les packages logiciels installés sur votre serveur, entrez la commande suivante :

```
~$ sudo apt-get update
```

### Mettre à jour le système (CentOS et Fedora)

Pour mettre à jour le système d'exploitation de votre serveur, entrez la commande suivante :

```
~$ sudo yum update
```

### Modifier le fichier de configuration

```
~$ sudo vi /etc/hosts.allow
```

### Autoriser l'authentification par root avec mot de passe

#### Pour les connexions via la console VNC intégrée dans votre espace client OVHcloud

Pour commencer, [définissez le mot de passe root](#définirlemotdepasseroot)

Ensuite, accédez à la console VNC :

Cliquez sur les `...`{.action} à droite de l’instance correspondante puis cliquez sur `Détail de l'instance`{.action}. 

![access instance](images/instancedetails.png){.thumbnail}

Rendez-vous dans l’onglet `console VNC`{.action}. A l'invite de commande, renseignez votre login comme **root**, puis entrez votre mot de passe.

![vnc](images/vnc.png){.thumbnail} 

#### Pour les connexions utilisant des terminaux Linux

Pour commencer, [définissez le mot de passe root](#définirlemotdepasseroot)

Ensuite, activez l'authentification root et le mot de passe dans votre fichier **sshd_config** :

```
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

Redémarrer le service SSH :

```
~$ service sshd restart
```

Une fois fait, vous devriez pouvoir accéder à votre serveur avec l'utilisateur root et le mot de passe défini.

#### Pour les connexions utilisant Putty

Pour commencer, [définissez le mot de passe root](#définirlemotdepasseroot)

Ensuite, activez l'authentification root et le mot de passe dans votre fichier **sshd_config** :

```
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

Redémarrer le service SSH :

```
~$ service sshd restart
```

Dans l'agent d'authentification Putty (pageant key list), retirez votre clé SSH privée.

![Supprimer la clé privée](images/pageantkeylist.png){.thumbnail}

Une fois fait, vous devriez pouvoir accéder à votre serveur avec l'utilisateur root et le mot de passe défini.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
