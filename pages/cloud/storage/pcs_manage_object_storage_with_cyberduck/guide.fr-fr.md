---
title: "Utiliser l'Object Storage avec CyberDuck"
excerpt: 'Découvrez comment utiliser votre Object Storage avec Cyberduck'
slug: utiliser_object_storage_avec_cyberduck
section: 'Object Storage'
---

**Dernière mise à jour le 18/06/2021**

## Objectif

L'Object Storage de OVHcloud est une solution de stockage gérée principalement par le biais de l'API OpenStack.

Si vous n'êtes pas familiarisé avec la gestion du stockage en ligne de commande, certaines solutions graphiques utilisent l'API OpenStack. CyberDuck est l'une de ces solutions et est facile à prendre en main.

**Découvrez comment utiliser Cyberduck pour gérer votre Object Storage à l'aide d'une interface graphique basée sur les API Openstack.**

## Prérequis

- Télécharger et installer [Cyberduck](https://cyberduck.io/).
- Disposer de vos identifiants utilisateur (*OS_USERNAME*) et de projet (*OS_PROJECT_NAME* ou *OS_TENANT_NAME*), que vous pouvez obtenir en téléchargeant le fichier « OpenRC » dans le menu [Users and Roles](../../public-cloud/charger-les-variables-denvironnement-openstack/#etape-1-recuperer-les-variables) de votre [espace client Public Cloud OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer de votre mot de passe d'utilisateur OpenStack.

Si vous ne connaissez plus votre mot de passe d'utilisateur OpenStack, vous pouvez le modifier en suivant [ce guide](../../public-cloud/modification-du-mot-de-passe-dun-utilisateur-openstack/).

## En pratique

**Ce guide a été mis à jour sur la base de la version 7.9.2 de Cyberduck pour MacOS.**

> [!primary]
>
> Suivant la source de téléchargement de votre fichier OpenRC (depuis Horizon ou depuis votre espace client OVHcloud), votre identifiant de projet peut être nommé *OS_PROJECT_NAME* ou *OS_TENANT_NAME*.
>

Dans Cyberduck, ouvrez une connexion « OpenStack Swift (Keystone 3) »

![objectstorage-cyberduck](images/login.png){.thumbnail}

Renseignez les informations suivantes :

- Serveur : auth.cloud.ovh.net
- Project:Domain:Username : OS_PROJECT_NAME:default:OS_USERNAME
- Mot de passe : le mot de passe de votre utilisateur OpenStack

Cliquez alors sur `Connecter`{.action}. Une fois connecté, vous aurez accès à l'arborescence de vos dossiers et fichiers.

![objectstorage-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> En cas de difficulté de connexion, vous pouvez télécharger le profil de connexion Cyberduck pour OpenStack Swift (Keystone 3) et l'ouvrir avec Cyberduck.
> <br><br>Faites un clic-droit <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>ici et cliquez sur « Enregistrer le lien sous »</a>
> <br><br>Il sera nécessaire de renseigner vos identifiants (voir ci-dessus).
>

## Aller plus loin

[Documentation de Cyberduck](https://trac.cyberduck.io/wiki/help/en){.external}

[Débuter avec l'API Swift](../../public-cloud/debuter-avec-lapi-swift/)

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
