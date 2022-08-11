---
title: Configurer le logiciel de sauvegarde tina 
slug: tina-backup
excerpt: "Installation du logiciel de sauvegarde tina sur un cluster Nutanix"
section: Sauvegardes
order: 03
kb: Hosted Private Cloud
category_l1: Hosted Private Cloud powered by Nutanix
category_l2: Backups
---

**Dernière mise à jour le 05/08/2022**

## Objectif


**Apprenez à installer, configurer et utiliser Time Navigator sur un cluster Nutanix avec une réplication du stockage distant**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> La licence Time Navigator n'est pas fournie par OVHcloud. Pour plus d'informations, contactez le service commercial Atempo ou d'OVHcloud.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur le cluster via Prism Central.
- Avoir souscrit une offre Tina auprès de la société ATEMPO. 
- Disposer, sur votre cluster Nutanix, de 600 Go de Stockage, de 16 Go de Mémoire et de 8 Cœurs.
- De disposer d'un autre cluster Nutanix de avec 560 Go de stockage, de 8 Go de Mémoire et de 4 Cœurs.
- De disposer de deux machines virtuelles sous Linux avec l'interface graphique ou de deux machines virtuelles sous Windows sur le premier cluster.
- De disposer d'une machine virtuelle sous Linux avec l'interface graphique ou d'une machine virtuelle sous Windows sur le le deuxième cluster.
- d'avoir un serveur DNS interne (Par exemple un active diretory). 

## Présentation

Le logiciel **Time Navigator** est un logiciel modulaire composé de divers éléments que l'on peut installer sur diverses machines virtuelles ou physiques, pour fonctionner correctement sur Nutanix il faut installer un agent qui fera la liaison avec le cluster.

## En pratique

Nous allons installer deux machines virtuelles sous AlmaLinux en version 8.6 une distribution Linux proche de RedHat (Dans le cas d'une exploitation en production il est judicieux d'utiliser une Redhat Enterprise Linux Server avec l'achat d'un support logiciel). 

Les trois machines virtuelles seront réparties comme ceci:

Deux sur un cluster Nutanix en France pour :
- Le serveur de sauvegarde avec sa console d'administration
- Servir de serveur de déduplication avec un paramètrage HSS (Hyper Stream Server) qui est pour l'instant le seul compatible avec Nutanix.
Un sur le serveur Nutanix au Canada pour :
- Le serveur de déduplication HSS relié au travers d'un VPN pour recevoir une réplication d'une machine virtuelle.

### Installation

#### Installation de trois machines virtuelles sous Linux

IL faut installer trois machines virtuelles avec le système d'exploitation ALMALINUX (Distribution proche de Redhat Enterprise Server) en version 8.6.

Vous pouvez télécharger les sources sur ce lien [Sources ALMALINUX](https://mirrors.almalinux.org/isos.html) et vous aider de cette documentation pour ajouter les sources sur vos clusters Nutanix [Importer des images ISO](https://docs.ovh.com/fr/nutanix/image-import/)

Nous allons utiliser une serveur DNS interne avec comme adresse **192.168.0.200** et un nom de domaine ad-testing.lan

L'adresse IP interne de Prism Element est **192.168.0.111**

Le nom des machines virtuelles nécessaires à l'installation de Tina sont les suivantes :

- **atempo-srv.ad-testing.lan** : Serveur Tina avec l'adresse IP `192.168.0.203`
- **atempo-ade.ad-testing.lan** : Serveur de déduplication en mode HSS avec l'adresse IP `192.168.0.204`
- **atempo-adecan.ad-testion.lan** : Serveur de déduplication en mode HSS avec l'adresse IP 192.168.10.204` pour récevoir une réplication de la sauvegarde.

Nous allons créer la machine virtuelle atempo-srv qui est le serveur de sauvegarde tina

Aidez-vous de ce guide pour créer une machine virtuelle sous Nutanix [Gestion des machines virtuelles](https://docs.ovh.com/fr/nutanix/virtual-machine-management/)

Choisissez ces paramètres:

- Nom de la machine virtuelle `atempo-srv`.
- Un disque de `60Go`.
- 4 `vCPU`
- 8Go de `mémoire vive`
- Un lecteur CDROM connecté au sources `d'ALMALINUX`.
- Une carte réseau sur le réseau de `base` qui est le réseau d'administration du cluster Nutanix.

![01 Create Tina Srv VM 01](images/02-create-tinasrvade01.png){.thumbnail}

Ensuite nous allons créer deux machines virtuelles du même type une en France et l'autre au Canada en tant que dépot ADE au format HSS avec ces paramètres :

- Nom de la machine virtuelle `atempo-adefr`. et `atempo-adecan`
- Un disque de `60Go`.
- Un deuxième disque de `500Go`
- 4 `vCPU`
- 8Go de `mémoire vive`
- Un lecteur CDROM connecté au sources `d'ALMALINUX`.
- Une carte réseau sur le réseau de `base` qui est le réseau d'administration du cluster Nutanix.

Nous allons ensuite installer les trois machines virtuelles en suivant cette procédure 

Démarrez la machine virtuelles et choisissez ces paramètres :

Choisissez comme langue `English` et clavier `English (United States` et cliquez sur `Continue`{.action}

![03 Installing ALMAOS 01](images/03-install-almaos01.png){.thumbnail}

Cliquez sur `Network & Host Name`{.action}

![03 Installing ALMAOS 02](images/03-install-almaos02.png){.thumbnail}

Cliquez sur `Configure`{.action}

![03 Installing ALMAOS 03](images/03-install-almaos03.png){.thumbnail}

Positionnez-vous en haut sur l'onglet `IPv4 Settings`{.action}, choisissez la `Manual` cliquez sur `Add`{.action} , saisissez l'`adresse IP`{.action} , l'`adresse IP du DNS`{.action} ansi que le nom de domaine dans `Search domains`{.action}

> [!warning]
> Pour information les adresses IP sont 
> 
> tina-srv : 192.168.0.203
> tina-adefr : 192.168.0.204
> tina-adecan : 192.168.10.254
>
>

Ensuite cliquez sur `Save`{.action}

![03 Installing ALMAOS 04](images/03-install-almaos04.png){.thumbnail}

Saisissez le nom d'hôte dans `Host Name`{.action} ensuite cliquez sur `Apply`{.action} et cliquez sur `Done`{.action}

-> [!warning]
> Pour information les nom d'hôtes sont : 
> 
> tina-srv.ad-testing.lan pour le serveur tina
> tina-adefr.ad-testing.lan pour le serveur de déduplication HSS en France
> tina-adecan.ad-testing.lan pour le serveur dé déduplication HSS au Canada
>
>

![03 Installing ALMAOS 05](images/03-install-almaos05.png){.thumbnail}

Cliquez sur `Installation Destination`{.action}.

![03 Installing ALMAOS 06](images/03-install-almaos06.png){.thumbnail}

Sélectionnez le disque de `60 Go` et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 07](images/03-install-almaos07.png){.thumbnail}

Cliquez sur `Installation Source`{.action}.

![03 Installing ALMAOS 08](images/03-install-almaos08.png){.thumbnail}

Sélectionnez `On the network` et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 09](images/03-install-almaos09.png){.thumbnail}

Cliquez sur `Software Selection`{.action}.

![03 Installing ALMAOS 10](images/03-install-almaos10.png){.thumbnail}

Sélectionnez `Server with GUI` et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 11](images/03-install-almaos11.png){.thumbnail}

Cliquez sur `Root Password`{.action}.

![03 Installing ALMAOS 12](images/03-install-almaos12.png){.thumbnail}

Saisissez et confirmer le `mot de passe` et cliquez sur `Done`{.action} deux fois.

![03 Installing ALMAOS 13](images/03-install-almaos13.png){.thumbnail}

Cliquez sur `User Creation`{.action}.

![03 Installing ALMAOS 14](images/03-install-almaos14.png){.thumbnail}

Choisissez ces options :

- **Full Name** : `admatempo`
- **User Name** : `admatempo`
- **Make this user administrator** : `cochez la case`
- **Require a passwor to use this account** : `cochez la case`
- **Password** : `Mot de passe de l'utilisateur`
- **Confirm password** : `Mot de passe de l'utilisateur confirmé`

Ensuite cliquez sur `Done`{.action} deux fois.

![03 Installing ALMAOS 15](images/03-install-almaos15.png){.thumbnail}

Cliquez sur `Begin Installation`{.action}.

![03 Installing ALMAOS 16](images/03-install-almaos16.png){.thumbnail}

L'installation démarre

![03 Installing ALMAOS 17](images/03-install-almaos17.png){.thumbnail}

Cliquez sur `Reboot System`{.action}.

![03 Installing ALMAOS 18](images/03-install-almaos18.png){.thumbnail}

Cliquez sur `License Information`{.action}.

![03 Installing ALMAOS 19](images/03-install-almaos19.png){.thumbnail}

Cliquez sur `I accept the license agreement`{.action} et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 20](images/03-install-almaos20.png){.thumbnail}

Cliquez sur `FINISH CONFIGURATION`{.action}

![03 Installing ALMAOS 21](images/03-install-almaos21.png){.thumbnail}

L'installation est terminée

![03 Installing ALMAOS 22](images/03-install-almaos22.png){.thumbnail}








### Configuration d'une sauvegarde

### Restauration d'une sauvegarde

## Aller plus loin <a name="gofurther"></a>


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

[Tina Compatibily GUIDE 2022](https://www.atempo.com/wp-content/uploads/2022/01/COMPATIBILITY-GUIDE_en_Tina_469_24-01-2022.pdf)

