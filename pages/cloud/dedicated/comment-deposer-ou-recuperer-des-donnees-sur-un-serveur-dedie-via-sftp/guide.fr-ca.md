---
title: 'Comment déposer ou récupérer des données sur un serveur dédié via SFTP'
slug: deposer-et-recuperer-donnees-via-sftp
excerpt: 'Transférez simplement les informations de votre serveur dédié vers votre ordinateur personnel et inversement'
section: Tutoriel
---

## Introduction

Dans le cadre d'une migration, vous pouvez être amené à devoir récupérer les données d'un serveur dédié pour les déposer ensuite sur une autre machine. S'il existe différentes manières de procéder, le protocole SFTP (Secure File Transfert Protocol) permet de transférer simplement et rapidement des fichiers par une connexion sécurisée SSH.

**Ce tutoriel va donc illustrer comment déposer ou récupérer des données sur un serveur dédié via SFTP.**

> [!warning]
>
Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVH avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation ! Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVH ne sera pas en mesure de vous fournir une assistance.
>


## Prérequis


### Ce que vous devez savoir

*     Avoir des notions d'administration Linux.
*     Savoir se connecter en SSH.
*     Pouvoir installer une distribution (ce tutoriel emploiera une distribution Debian 9.4).


### Ce que vous devez avoir

*     Posséder au moins un serveur dédié OVH.
*     Disposer d'un logiciel supportant le SFTP (ce tutoriel emploiera le logiciel [FileZilla](https://filezilla-project.org/))


## En pratique


### Étape 1 : récupérez vos données

Par défaut, un serveur installé sur un système Linux disposera d'un accès SSH, via le port 22.

Le protocole SFTP (Secure File Transfert Protocol) permet de transférer des fichiers à travers une connexion sécurisée SSH. Nous allons donc voir comment utiliser ce protocole dans deux situations : lorsque vous disposez d'un accès à votre serveur et lorsque votre serveur est en mode « rescue ».


#### Lorsque vous disposez d'un accès à votre serveur

Dans FileZilla, saisissez votre IP dans le champ « Hôte ». Puis utilisez votre identifiant « root » ainsi que votre mot de passe. Concernant le port, renseignez le « 22 » ou celui de votre service SSH si vous l'avez modifié.

La connexion est maintenant établie et votre arborescence s'affiche dans la rubrique « site distant ».

 
![site distant sftp](images/sftp_ds_01.png)
 

Vous pouvez faire un glisser-déposer des données à récupérer depuis la fenêtre de droite (`serveur distant`) vers la fenêtre de gauche (`site local`), afin de les sauvegarder sur votre ordinateur personnel. Dans notre situation, les informations sont présentes dans le dossier « /home/data », visible depuis la fenêtre de droite (`serveur distant`).

L'avancement du transfert est ensuite détaillé en bas de votre fenêtre FileZilla :

 
![progression transfert sftp](images/sftp_ds_02.png)


#### Lorsque votre serveur est en mode rescue 

En mode rescue, il est d'abord nécessaire de monter votre partition. Pour ce faire, nous vous invitons à effectuer les manipulations décrites dans [ce guide](https://docs.ovh.com/fr/dedicated/ovh-rescue/).

Une fois votre partition montée, connectez-vous de nouveau avec votre logiciel (ici FileZilla) sur le port 22.


> [!primary]
>
> Les identifiants à utiliser sont ceux envoyés par e-mail lors de la mise en rescue.
>


Si vous avez correctement effectué le point de montage, les données seront présentes au sein du répertoire « /mnt » (soit « /mnt/data/ » dans notre exemple).

 ![site distant sftp mode rescue](images/sftp_ds_03.png)

 
### Étape 2 : déposez vos données sur le serveur

Le principe de connexion est ici identique : vous devez utiliser une connexion sur le port 22 en SFTP avec votre identifiant root, en suivant les instructions détaillées ci-dessus.

Une fois connecté au serveur sur lequel vous souhaitez déposer des données, vous pourrez de nouveau effectuer un glisser-déposer. Mais, cette fois, depuis la fenêtre de gauche (`site local`) vers la fenêtre de droite (`site distant`), afin de transférer les informations de votre ordinateur personnel sur votre serveur.

## Conclusion

Vous savez maintenant comment déposer ou récupérer des données sur un serveur dédié via SFTP.

Pour aller plus loin, n'hésitez pas à échanger avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.