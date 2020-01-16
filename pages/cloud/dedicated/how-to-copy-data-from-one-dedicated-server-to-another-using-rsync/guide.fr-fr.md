---
title: 'Comment copier des données d’un serveur dédié vers un autre en utilisant rsync'
slug: copier-donnees-serveur-rsync
excerpt: 'Copiez facilement les données de votre serveur dédié vers un autre grâce à rsync'
section: Tutoriel
---

## Introduction

Dans le cadre d’une migration ou d’une sauvegarde, vous pouvez être amené à devoir copier ou transférer les données d’un serveur dédié vers un autre. 

Distribué sous licence GNU GPL, rsync (pour  «remote synchronization» ), est un logiciel libre de synchronisation de fichiers capable d’effectuer une synchronisation unidirectionnelle, c'est-à-dire de copier les fichiers du serveur source vers le serveur de destination. 

**Ce tutoriel va donc illustrer comment copier des données d’un serveur dédié OVH vers un autre en utilisant rsync.**

> [!warning]
>
Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVH avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation ! Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVH ne sera pas en mesure de vous fournir une assistance.
>

## Prérequis


### Ce que vous devez savoir

*     Avoir des notions d'administration Linux.
*     Savoir installer de nouveaux paquets 
*     Savoir se connecter en SSH


### Ce que vous devez avoir

*     Posséder au moins deux serveurs dédiés OVH fonctionnant sous une distribution GNU/Linux.
*     Disposer d'un accès *root* sur la machine source
*     Disposer d'un accès *SSH* sur la machine de destination

## En pratique


### Étape 1 : installez rsync

Le serveur source utilisé dans le cadre de ce tutoriel fonctionne sous Debian 9.4. Cette distribution disposant nativement de rsync dans ses dépôts, il n'est pas nécessaire de compléter ces derniers, et rsync peut être installé directement.

Pour ce faire, connectez vous via SSH en tant que super-utilisateur (ou root) sur votre machine source, puis installez rsync via la commande suivante :

```sh
apt-get update && apt-get install rsync
```

### Étape 2 : lancez le transfert


#### Vous ne souhaitez exclure aucun dossier de votre copie

Rsync permet de copier l'ensemble des dossiers, sous-dossiers et fichiers inclus dans le chemin renseigné vers une autre machine.

Pour ce faire, la structure générale de la commande utilisée dans ce tutorial sera de type : `rsync -av source/ destination/`  

Rsync utilisant le protocole SSH afin de se connecter à la machine de destination, il est cependant nécessaire d'y ajouter les identifiants nécessaires. La structure de la commande se complète donc ainsi : `rsync -av *YourLocalFolder*/ login@server:/*DestinationFolder*/`

Par ailleurs, si vous avez changé le port SSH pour un autre port que le port 22, il sera nécessaire de préciser le numéro de port à utiliser pour établir la connexion SSH en ajoutant ` -e 'ssh -p X' ` à votre commande, où «X» sera le port SSH à utiliser.

La commande à employer pour copier vos données d'un serveur à un autre via rsync sera donc :

```sh
rsync -av -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
```

> [!primary]
>
> Par défaut, aucun indicateur ne permettra de contrôler finement la progression de la copie.
> Afin de pouvoir suivre facilement (statistiques détaillées, expression en Mo, Go etc ...) et en temps réel l'avancée du transfert, il est conseillé d'ajouter l'argument `-P --stats --human-readable` à la commande, qui deviendra alors :
>
> ```sh
> rsync -av -P --stats --human-readable -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
> ```


#### Vous souhaitez exclure un ou plusieurs dossiers de votre copie

Si rsync permet de transférer l'ensemble des dossiers d'une machine, vous pouvez souhaiter exclure certains dossiers ou sous-dossiers de la copie que vous vous apprétez à effectuer. Dans ce cas, listez ces derniers ainsi que leur nom sur votre serveur.

Par ailleurs, et de manière générale, il est conseillé d'exclure du transfert les caches et fichiers systèmes temporaire du serveur source afin d'éviter tout conflit sur le serveur de destination. 

Voici une liste non-exhaustive de quelques un des dossiers pouvant contenir ce type de fichiers dans un serveur exécutant une distribution GNU/Linux : 

* /dev/*
* /proc/* 
* /sys/*
* /tmp/*
* /run/*
* /media/*
* /lost+found
 
Une fois la liste des dossiers ou sous-dossiers à exclure déterminée, l'argument  `--exclude` permet d'indiquer à rsync qu'il convient d'ignorer ces derniers lors de la copie. 
 
Cet argument devra être répété autant de fois qu'il y a de dossiers ou de sous-dossiers à exclure, et placé en fin de commande. La structure générale d'une telle commande sera donc `rsync --exclude="Folder_Name" --exclude="Other_Folder_name" source/ destination/`

> [!primary]
>
Veuillez noter que l'emplacement du dossier doit être exprimé dans son emplacement relatif, Rsync ne prenant pas en compte les chemins absolus. Ainsi si l'un des dossiers à exclure est situé dans «/home/user/test» et que vous vous trouvez actuellement au sein de «/test», il conviendra de préciser «--exclude="test"» (chemin relatif) et non «--exclude="/home/user/test"» (chemin absolu).
>


En tenant compte des éléments déjà exposés, la commande de transfert sera donc la suivante :
 	
```sh
rsync -av -P --stats --human-readable -e 'ssh -p X' --exclude="Folder_Name" --exclude="Other_Folder_name" YourLocalFolder/ login@server:/DestinationFolder/
```

## Conclusion

Vous savez maintenant comment copier les données de votre serveur dédié vers un autre grâce à rsync.

Pour aller plus loin, n'hésitez pas à échanger avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.