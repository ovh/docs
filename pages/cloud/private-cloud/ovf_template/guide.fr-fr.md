---
title: 'Déployer un template OVF'
slug: deploiement-template-ovh
excerpt: 'Découvrez comment déployer un template via le client lourd vSphere'
section: 'Services et options OVH'
---

**Dernière mise à jour le 23/03/2018**

## Objectif

OVH propose des templates Windows (au format OVF) que vous pouvez déployer directement depuis votre client lourd vSphere.

**Ce guide vous explique où trouver les sources et comment procéder au déploiement.**

## Prérequis

- Avoir accès au client Web
- Avoir activé les licences Windows depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (onglet `Licence Widows`{.action} du datacenter) 


## En pratique

### Récupérer l'URL du template OVF

Depuis un navigateur internet, rendez-vous sur la page d'accueil de votre Private Cloud puis cliquez sur `OVH Template`{.action}.

![Nom de photo](images/gatewayssl.png){.thumbnail}

Dans l'écran `Templates Library` qui s'affiche, sélectionnez `Windows`{.action}. Vous accédez alors au détail des templates Windows proposés.

Il vous suffit maintenant de faire un clic droit sur le template de votre choix et de copier l'adresse du lien :

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


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.