---
title: Déployer un template OVF Linux, Windows Server et Windows SQL Server
slug: deploiement-template-ovh
excerpt: Découvrez comment déployer un template Linux, Windows Server ou Windows SQL Server
section: Gestion des machines virtuelles
order: 02
---

**Dernière mise à jour le 29/01/2019**

## Objectif

OVH propose des templates Linux, Windows Server et Windows SQL server (au format OVF) que vous pouvez déployer directement depuis votre client lourd vSphere (version 5.5 et 6.0) et depuis le client Web (flash et HTML 5 sur version 6.5).

**Ce guide vous explique où trouver les sources et comment procéder au déploiement.**

> [!primary]
> 
> Retrouvez sur cette [page](https://www.ovh.com/fr/private-cloud/options/images-licences.xml){.external} les tarifs des images proposées par OVH.
>

## Prérequis

- Avoir accès au client Web ou au client lourd selon la version utilisée.
- [Avoir activé les licences Windows](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/#licence-windows){.external} depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (onglet `Licence Widows`{.action} du datacenter) 


## En pratique

### Récupérer l'URL du template OVF

Depuis un navigateur internet, rendez-vous sur la page d'accueil de votre Private Cloud puis cliquez sur `OVH Template`{.action}.

![Nom de photo](images/gatewayssl.png){.thumbnail}

Dans l'écran `OVH Templates` qui s'affiche, vous accédez au détail des templates Linux, Windows et SQL proposés. 

Sélectionnez le template souhaité, une fenêtre s'ouvrira et vous proposera les liens qui vous serviront pour le déploiement en fonction de votre version de vSphere.

![Nom de photo](images/copylink.png){.thumbnail}


### Déployer le template OVF

Une fois connecté au client web vSphere, rendez-vous sur la page `Hôtes et clusters`{.action} puis faites un clic droit sur votre datacenter et cliquez sur `Déployer le modèle OVF...`{.action} :

![Nom de photo](images/selectdeploy.png){.thumbnail}

Le menu contextuel s'ouvre, la configuration du déploiement va pouvoir commencer. Dans la première étape, il faut ajouter le lien que vous avez récupéré précédemment :

![Nom de photo](images/puturl.png){.thumbnail}

L'étape suivante vous permet de choisir le datacenter :

![Nom de photo](images/selectdatacenter.png){.thumbnail}

Choisissez ensuite le cluster dans lequel la machine virtuelle va être déployée :

![Nom de photo](images/selectcluster.png){.thumbnail}

Vous retrouvez tous les détails du template et, notamment, le mot de passe par défaut. Pour des raisons de sécurité, il est important de le changer dès votre première connexion :

![Nom de photo](images/detailstemplate.png){.thumbnail}

Choisissez le datastore dans lequel la machine virtuelle va être stockée ainsi que le format du disque :

![Nom de photo](images/selectdatastore.png){.thumbnail}

Vous devez maintenant choisir le réseau qui sera utilisé.

![Nom de photo](images/selectnetwork.png){.thumbnail}

La configuration est quasiment terminée, vous avez accès à un résumé de la configuration souhaitée :

![Nom de photo](images/resume.png){.thumbnail}

Après avoir cliqué sur `Terminer`{.action}, une tâche est créée et vous permet de suivre le déploiement :

![Nom de photo](images/startdeploy.png){.thumbnail}

Une fois le déploiement terminé, vous pouvez fermer cette fenêtre.

Vous retrouvez alors la machine virtuelle déployée dans votre inventaire.

![Nom de photo](images/inventory.png){.thumbnail}

### Finalisation de l'installation pour SQL Server

Démarrer votre machine virtuelle fraichement déployée et ouvrez la console.

Ouvrez la session Windows et renseignez le nom de votre instance SQL, le mot de passe et le jeux de caractère souhaité dans la fenêtre prévue à cet effet.

![Nom de photo](images/sqlinformations.png){.thumbnail}


> [!primary]
> 
> Il est recommandé de mettre en place un mot de passe respectant ces critères :
> 
> * Comporter au minimum huit caractères.
> * Comporter au minimum trois types de caractères (Majuscules, minuscules, chiffres, caractères spéciaux).
> * Ne pas être tiré du dictionnaire.
> * Ne pas comporter d’informations personnelles (votre prénom, nom ou date de naissance).
>

Une fois ces informations renseignées, cliquez sur `Ok`{.action}.

Une fenêtre montrant le déploiement s'ouvrira. A la fin de celui ci, une dernière fenêtre vous informant de la réussite du déploiement s'ouvrira.

Cliquez à nouveau sur `OK`{.action} pour que l'installation se termine et que votre machine virtuelle redémarre.

Suite à ce redémarrage vous pourrez commencer à utiliser votre machine virtuelle.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.