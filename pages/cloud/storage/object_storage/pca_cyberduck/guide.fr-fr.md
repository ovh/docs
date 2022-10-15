---
title: Object Storage Swift - Gerer ses archives depuis un client Swift (Cyberduck)
slug: pca/cyberduck
excerpt: Découvrez comment configurer Cyberduck afin de pouvoir gérer votre Public Cloud Archive
section: Spécificités de la classe de stockage d'archive OpenStack Swift
order: 080
---

**Dernière mise à jour le 18/06/2021**

## Objectif

Public Cloud Archive est une solution de stockage qui peut s'utiliser à l'aide des APIs OpenStack. Cependant, il est possible que vous ne soyez pas familier avec cette façon de gérer un espace de stockage.

Il existe donc des solutions graphiques, qui utilisent de manière invisible des APIs OpenStack pour vous. CyberDuck fait partie de ces solutions et est facilement configurable.

D'autres interfaces sont elles aussi disponibles, leur configuration est similaire à celle que nous allons vous présenter.

**Découvrez comment configurer Cyberduck afin de pouvoir gérer votre Public Cloud Archive a l'aide d'une interface graphique se basant sur les APIs Openstack.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du logiciel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Télécharger et installer [Cyberduck](https://cyberduck.io/).
- Disposer de vos identifiants utilisateur (*OS_USERNAME*) et de projet (*OS_PROJECT_NAME* ou *OS_TENANT_NAME*), que vous pouvez obtenir en téléchargeant le fichier « OpenRC » dans le menu [Users and Roles](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/#etape-1-recuperer-les-variables) de votre [espace client Public Cloud OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer de votre mot de passe d'utilisateur OpenStack.

Si vous ne connaissez plus votre mot de passe d'utilisateur OpenStack, vous pouvez le modifier en suivant [ce guide](https://docs.ovh.com/fr/public-cloud/modification-du-mot-de-passe-dun-utilisateur-openstack/).

## En pratique

**Ce guide a été mis à jour sur la base de la version 7.9.2 de Cyberduck pour MacOS.**

> [!primary]
>
> Suivant la source de téléchargement de votre fichier OpenRC (depuis Horizon ou depuis votre espace client OVHcloud), votre identifiant de projet peut être nommé *OS_PROJECT_NAME* ou *OS_TENANT_NAME*.
>

Dans Cyberduck, ouvrez une connexion « OpenStack Swift (Keystone 3) ».

![pca-cyberduck](images/login.png){.thumbnail}

Renseignez les informations suivantes :

- Serveur : auth.cloud.ovh.net
- Project:Domain:Username : OS_PROJECT_NAME:default:OS_USERNAME
- Mot de passe : le mot de passe de votre utilisateur OpenStack

Cliquez alors sur `Connecter`{.action}. Une fois connecté, vous aurez accès à l'arborescence de vos dossiers et fichiers.

![pca-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> En cas de difficulté de connexion, vous pouvez télécharger le profil de connexion Cyberduck pour OpenStack Swift (Keystone 3) et l'ouvrir avec Cyberduck.
> <br><br>Faites un clic-droit <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>ici et cliquez sur « Enregistrer la cible du lien sous »</a> pour télécharger le profil.
>

## Aller plus loin

[Documentation de Cyberduck](https://trac.cyberduck.io/wiki/help/en){.external}

[Débuter avec l'API Swift](https://docs.ovh.com/fr/public-cloud/debuter-avec-lapi-swift/)

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
