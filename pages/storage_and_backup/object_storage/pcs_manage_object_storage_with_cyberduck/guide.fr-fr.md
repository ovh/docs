---
title: "Object Storage Swift - Utiliser l'Object Storage avec CyberDuck"
excerpt: 'Découvrez comment utiliser votre Object Storage avec Cyberduck'
updated: 2021-06-18
---

## Objectif

L'Object Storage de OVHcloud est une solution de stockage gérée principalement par le biais de l'API OpenStack.

Si vous n'êtes pas familiarisé avec la gestion du stockage en ligne de commande, certaines solutions graphiques utilisent l'API OpenStack. CyberDuck est l'une de ces solutions et est facilement configurable.

**Découvrez comment utiliser Cyberduck pour gérer votre Object Storage à l'aide d'une interface graphique basée sur les API Openstack.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) et/ou de contacter l'éditeur du logiciel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Télécharger et installer [Cyberduck](https://cyberduck.io/).
- Disposer de vos identifiants utilisateur (*OS_USERNAME*) et de projet (*OS_PROJECT_NAME* ou *OS_TENANT_NAME*), que vous pouvez obtenir en téléchargeant le fichier « OpenRC » dans le menu [Users and Roles](/pages/public_cloud/compute/loading_openstack_environment_variables#etape-1-recuperer-les-variables) de votre [espace client Public Cloud OVHcloud](/links/manager).
- Disposer de votre mot de passe d'utilisateur OpenStack.

Si vous ne connaissez plus votre mot de passe d'utilisateur OpenStack, vous pouvez le modifier en suivant [ce guide](/pages/public_cloud/compute/change_openstack_user_password_in_horizon).

## En pratique

**Ce guide a été mis à jour sur la base de la version 7.9.2 de Cyberduck pour MacOS.**

> [!primary]
>
> Suivant la source de téléchargement de votre fichier OpenRC (depuis Horizon ou depuis votre espace client OVHcloud), votre identifiant de projet peut être nommé *OS_PROJECT_NAME* ou *OS_TENANT_NAME*.
>

Dans Cyberduck, ouvrez une connexion « OpenStack Swift (Keystone 3) ».

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
> <br><br>Faites un clic-droit <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>ici et cliquez sur « Enregistrer la cible du lien sous »</a> pour télécharger le profil.
>

## Aller plus loin

[Documentation de Cyberduck](https://trac.cyberduck.io/wiki/help/en){.external}

[Débuter avec l'API Swift](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services. 

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
