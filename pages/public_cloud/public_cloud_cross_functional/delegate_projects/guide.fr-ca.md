---
title: "Déléguer des projets"
excerpt: "Découvrez comment déléguer des droits d'accès à un projet Public Cloud à d'autres comptes OVHcloud"
updated: 2025-04-28
---

## Objectif

En fonction de votre cas d'utilisation, vous pouvez être amené à devoir donner accès à votre projet à d'autres utilisateurs, sans pour autant leur donner un accès total à vos services.<br>
Dans cet objectif, vous pouvez déléguer à d'autres comptes client OVHcloud des droits en lecture seule ou en lecture / écriture sur vos projets.

**Ce guide vous détaille comment déléguer des droits d'accès à un projet Public Cloud depuis votre espace client.**

## Prérequis

- Avoir une instance [Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique 

Connectez-vous à l’[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Cliquez sur `Contacts & droits`{.action} dans le menu de gauche sous **Paramètres**.

Cette page vous permet de voir les contacts associés à votre projet.

![public-cloud-delegate-projects](images/delegatingproject_ca01.png){.thumbnail}

Vous pouvez cliquer sur les boutons `Modifier`{.action} pour changer les contacts actuels. Suivez les instructions décrites dans notre guide « [Changer les contacts d’un projet](/pages/public_cloud/compute/change_project_contacts) » afin de finaliser cette manipulation.

### Ajouter des contacts et des droits

Cliquez sur le bouton `Ajouter`{.action} pour ajouter un utilisateur et lui attribuer des droits. Dans la fenêtre qui apparaît, renseignez l'identifiant de l'utilisateur  (email@example.com) puis sélectionnez `Lecture seule` ou `Lecture/Écriture` dans le menu déroulant.

![public-cloud-delegate-projects](images/delegatingproject_ca02.png){.thumbnail}

> [!primary]
>
> Notez que les droits de `lecture/écriture` autorisent des modifications sur le projet qui pourraient avoir une incidence sur la facturation future.
>
 
Cliquez sur `Ajouter`{.action} pour valider la délégation d'accès. Un e-mail de confirmation vous sera alors envoyé ainsi qu'au nouvel utilisateur qui pourra maintenant ouvrir le projet dans la section Public Cloud de son espace client.

Une fois la page rechargée, les comptes clients OVHcloud ajoutés ainsi que leurs droits respectifs sont listés dans le tableau.

![public-cloud-delegate-projects](images/delegatingproject_ca03.png){.thumbnail}

Pour révoquer un accès, cliquez sur le bouton `...`{.action} puis sélectionnez `Supprimer`{.action}.

## Aller plus loin

[Démarrer avec une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Informations concernant le mode de facturation Public Cloud](/pages/public_cloud/public_cloud_cross_functional/analyze_billing)

[Paramètres d’accès et de sécurité dans Horizon](/pages/public_cloud/public_cloud_cross_functional/access_and_security_in_horizon)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
