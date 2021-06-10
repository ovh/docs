---
title: "Utiliser l'Object Storage avec CyberDuck"
excerpt: 'Découvrez comment utiliser votre Object Storage avec Cyberduck'
slug: utiliser_object_storage_avec_cyberduck
section: 'Object Storage'
---

**Dernière mise à jour le 10/06/2021**

## Objectif

L'Object Storage de OVHcloud est une solution de stockage gérée principalement par le biais de l'API OpenStack.

Si vous n'êtes pas familiarisé avec la gestion du stockage en ligne de commande, certaines solutions graphiques utilisent l'API OpenStack. CyberDuck est l'une de ces solutions et est facile à prendre en main.

**Découvrez comment utiliser Cyberduck pour gérer votre Object Storage à l'aide d'une interface graphique basée sur les API Openstack.**

## Prérequis

- Avoir [accès à l'interface Horizon](../../public-cloud/creer-un-acces-a-horizon/)
- Disposer de vos identifiants utilisateur (*OS_USERNAME*) et de projet (*OS_PROJECT_NAME*), que vous pouvez obtenir en téléchargeant le fichier OpenRC dans le menu [Users and Roles](../../public-cloud/charger-les-variables-denvironnement-openstack/#etape-1-recuperer-les-variables) de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer de votre mot de passe d'utilisateur OpenStack.

> [!primary]
> Si vous ne connaissez plus votre mot de passe d'utilisateur OpenStack, vous pouvez le modifier en suivant [ce guide](../../public-cloud/modification-du-mot-de-passe-dun-utilisateur-openstack/).
>

## En pratique

- Téléchargez [Cyberduck](https://cyberduck.io/)
- Ouvrez une connexion « OpenStack Swift (Keystone 3) »

![objectstorage-cyberduck](images/login.png){.thumbnail}

Renseignez les informations suivantes :

- Serveur : auth.cloud.ovh.net
- Project:Domain:Username : OS_PROJECT_NAME:default:OS_USERNAME
- Mot de passe : le mot de passe de votre utilisateur OpenStack

Cliquez alors sur `Connecter`{.action}

![objectstorage-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> Pour plus de détails sur le fonctionnement de Cyberduck, nous vous invitons à consulter la [documentation de Cyberduck](https://trac.cyberduck.io/wiki/help/en).
>

## Aller plus loin

[Débuter avec l'API Swift](../../public-cloud/debuter-avec-lapi-swift/)

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
