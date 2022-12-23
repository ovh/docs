---
title: "Tutoriel - Que faire lorsque ma base de données est pleine ?"
slug: overquota-database
excerpt: "Découvrez comment agir lorsque votre base de données est pleine"
section: 'Bases de données'
order: 06
---

**Dernière mise à jour le 09/01/2023**

## Objectif

Une base de données permet, par exemple, de stocker des informations relatives à votre site web et à son fontionnement. Ces informations sont structurées pour que votre site web y accède facilement : ce qui permet une consultation optimale et parfois même personnalisée pour les utilisateurs/visiteurs de votre site web. 

Au cours de son utilisation, une base de données peut acquérir, modifier ou suprimer des informations (données de connexion, données utilisateurs, données d'affichage, données nécessaires au bon fonctionnement de votre site web, ...). 

Dans certains cas, la base de données enregistre tellement d'informations que l'espace de stockage qui lui est alloué se rempli complètement. Lorsque la base de données est pleine à 100%, on parle d'**overquota**.

Ce tutoriel indique les actions possibles lorsque votre base de données mutualisée OVHcloud est presque pleine ou en **overquota**.

**Découvrez comment agir lorsque votre base de données est pleine**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer d'une [offre d'hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) avec une base de données mutualisée OVHcloud associée.
  
## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

Lorsque votre base de données mutualisée OVHcloud est presque pleine ou en **overquota**, nos robots vous avertissent par e-mail sur l'adresse e-mail du contact « Administrateur » de la base de données. 

Un premier e-mail est envoyé lorsque votre base de données est remplie à plus de **80%** et un deuxième e-mail est envoyé lorsque vous dépassez les **90%**.

Lorsque votre base de données est en **overquota**, un troisième e-mail est envoyé pour vous avertir de la situation. Votre base passe alors en `READ ONLY`. Vous ne pouvez plus ajouter ou modifier des éléments à l'intérieur mais votre base de données reste accessible en *lecture* et en *suppression*. 

### Etape 1 : identifier la ou les table(s) volumineuse(s)

Une base de données est constituée d'une ou plusieurs **tables**, elles-mêmes constituées d'une ou plusieurs **lignes**. 

La première étape consiste à identifier la ou les tables volumineuses présentes dans votre base de données.

>[!primary]
>
> [PHPMyAdmin](https://www.phpmyadmin.net/){.external} est disponible avec l'ensemble des bases de données mutualisées OVHcloud.
> Ce système de gestion de base de données facilite la réalisation des actions manuelles que vous pouvez effectuer avec votre base de données.
>
> Toutes les actions expliquées ci-après dans ce tutoriel seront décrites à partir de **PHPMyAdmin**.
>

#### 1.1 - Se connecter à la base de données via PHPMyAdmin

Récupérez le mot de passe d'accès à votre base de données directement dans le fichier de configuration de votre site web. Réalisez cette action à l'aide de l'**étape 1** de notre guide sur [le changement du mot de passe d'une base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez `Web Cloud`{.action} dans la barre de navigation en haut de l’écran. Cliquez sur `Hébergements`{.action} puis choisissez l’hébergement web avec lequel votre base de données mutualisée OVHcloud est associée. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

![PHPMyAdmin Access](images/pma_access.png){.thumbnail}

Toujours depuis l'onglet `Bases de données`{.action}, cliquez sur le bouton `...`{.action} à droite de la base de données qui est pleine, puis sur `Accéder à PHPMyAdmin`{.action}.

![PHPMyAdmin Login](images/pma_interface.png){.thumbnail}

Renseignez le mot de passe d'accès à votre base de données en complément des informations pré-remplies puis cliquez sur `Exécuter`{.action}.

#### 1.2 - Rechercher les tables les plus volumineuses

### Etape 2 : déterminer l'utilité du contenu présent dans la ou les table(s) volumineuse(s)

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.