---
title: Créer une base de données sur son hébergement web
slug: creer-base-de-donnees
excerpt: Apprenez à créer une base de données sur votre hébergement web OVHcloud
section: Bases de données
order: 01
---


**Dernière mise à jour le 03/02/2022**

## Objectif

Une base de données (BDD) est utilisée pour stocker ce que l'on appelle des éléments dynamiques, comme des commentaires ou des articles. Ces bases de données sont utilisées dans pratiquement tous les systèmes de gestion de contenu (CMS) modernes, comme WordPress ou Joomla!.

**Apprenez à créer une base de données sur votre hébergement web OVHcloud**

## En pratique

- un [hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/)
- une base de données disponible parmi celles incluses dans votre offre d'hébergement web
- l’accès à [l’espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) avec les autorisations nécessaires pour gérer votre hébergement web

## Instructions

### Étape 1 : Accéder à la section de gestion de la base de données de l'hébergement web

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez `Web Cloud`{.action} dans la barre de navigation en haut de l’écran. Cliquez sur `Plans d’hébergement`{.action}, puis choisissez l’hébergement web concerné. Ensuite, dirigez-vous dans l’onglet `Bases de données`{.action}.

Le tableau de cette section contient toutes les bases de données créées dans le cadre de votre hébergement web.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Étape 2 : Créer la base de données

Il existe deux façons de créer une nouvelle base de données :

- **Si vous n’avez pas encore créé de base de données** : cliquez sur le bouton `Créer une base de données`{.action}.

- **Si vous avez déjà créé une base de données** : cliquez sur le bouton `Actions`{.action} puis sur `Créer une base de données`{.action}.

Dans la fenêtre qui s’ouvre, saisissez les informations puis cliquez sur `Suivant`{.action}.

|Information|Description|  
|---|---|  
|Moteur de la base de données|Sélectionnez le moteur que la base de données doit utiliser. Les bases de données inclues dans votre [offre d’hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) sont uniquement disponibles avec le moteur MySQL.|  
|Version de la base de données|Sélectionnez la version utilisée par le moteur de la base de données. Assurez-vous que votre site web soit compatible avec la version que vous avez choisie. |  
|Type de base de données|Sélectionnez la taille de la base de données. Cette taille fait référence à l'espace dont dispose votre base de données pour le stockage des données.|   

Ensuite, complétez les informations requises et cliquez sur `Suivant`{.action}.

|Information|Description|   
|---|---|   
|Utilisateur|Entrez un nom d'utilisateur personnalisé qui sera associé à votre base de données.|   
|Mot de passe|Entrez un mot de passe pour cet utilisateur puis confirmez.|   

Vérifiez que toutes les informations affichées dans le résumé sont correctes. Si tel est le cas, cliquez sur `Confirmer`{.action} pour lancer la création de votre base de données. Vous pouvez répéter ce processus autant de fois que vous le souhaitez afin de créer plusieurs bases de données (en fonction du nombre maximum de bases de données incluses).

> [!primary]
>
> Pour des raisons de sécurité, veuillez suivre les conditions requises lors de la création de votre mot de passe. Nous vous recommandons également de :
>
> - définir un mot de passe différent à chaque fois
>
> - créer un mot de passe ne contenant pas d’informations personnelles (par exemple, votre nom, prénom, date de naissance, etc.)
>
> - renouveler votre mot de passe régulièrement
>
> - ne pas conserver de trace écrite de votre mot de passe, et de ne pas envoyer votre mot de passe à d'autres personnes par le biais de votre adresse e-mail
>
> - ne pas sauvegarder votre mot de passe sur votre navigateur, même si votre navigateur vous le propose.
>

> [!warning]
>N'oubliez pas que si vous changez le mot de passe d'une base de données, toutes les applications qui accèdent à cette base doivent être mises à jour en conséquence.
>


![databasecreation](images/database-creation-step2.png){.thumbnail}

### Étape 3 : Gérer votre base de données

> [!warning]
>Ce guide ne remplace pas l’assistance d'un professionnel, par exemple, un webmaster. Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du logiciel de votre solution si vous rencontrez des difficultés. Nous ne serons personnellement pas en mesure de vous fournir une assistance à ce propos. Vous trouverez plus d’informations dans la section « Aller plus loin » de ce guide.
>

À présent, vous pouvez utiliser votre base de données. Pour ce faire, vous aurez besoin de vos informations de connexion : le nom d'utilisateur et le mot de passe que vous venez de définir, le nom de la base de données que vous avez indiqué et l'adresse du serveur. Ces informations sont essentielles pour que votre site web puisse se connecter à la base de données.

Selon le logiciel utilisé, il peut arriver que cette connexion doit être configurée manuellement ou via une interface générée par le backend du site web. Étant donné que cette procédure implique la configuration de votre site web plutôt que les services fournis par OVHcloud, nous vous recommandons de consulter les ressources adaptées disponibles en ligne. 

#### Accéder à l’interface phpMyAdmin

OVHcloud fournit un outil en ligne pour la gestion des bases de données : phpMyAdmin. Pour trouver le lien d'accès à cette application, dans l'onglet `Bases de données`{.action}, cliquez sur `...`{.action} à droite de la base de données concernée, puis cliquez sur `Accéder à phpMyAdmin`{.action} dans le menu déroulant.

Les informations de connexion seront pré-remplies dans la nouvelle fenêtre ; il vous suffira alors d'entrer le mot de passe de la base de données. Il s’agit également d’un bon moyen de vérifier votre mot de passe actuel, par exemple si vous dépannez un CMS produisant un message d'erreur « Autorisation refusée ».

![databasecreation](images/database-creation-step3.png){.thumbnail}

#### Se servir des sauvegardes des bases de données

Pour chaque base de données d'hébergement web, des snapshots sont créés automatiquement chaque jour (jusqu'à 32 maximum). Vous pouvez donc restaurer simplement une version antérieure d'une base de données à partir de votre espace client OVHcloud. 

Pour vérifier les snapshots disponibles ainsi que leur date et heure de création, cliquez sur le symbole juste à côté du cercle vert dans votre tableau de base de données. Vous pouvez également télécharger chaque sauvegarde d'une base de données depuis le même endroit. Pour des informations détaillées sur ce sujet, vous pouvez consulter notre guide sur [Récupérer la sauvegarde de la base de données d’un hébergement web](../exportation-bases-donnees/).

#### Comprendre les problèmes fréquents

**Trop de connexions**

Les bases de données d'hébergement web sont limitées à 30 connexions simultanées (variable système *max_connections*). Les demandes SQL doivent donc être optimisées pour éviter ce genre d'erreur. Si les problèmes persistent malgré tout, des mesures alternatives devraient être envisagées, par exemple, le passage à une base de données [Web Cloud Databases](https://www.ovh.com/fr/cloud/cloud-databases/) ou une [mise à niveau d'une offre d'hébergement](https://www.ovhcloud.com/fr/web-hosting/uc-best-web-hosting/). 

**Erreurs de connexion / « introuvable »**

La meilleure pratique consiste à toujours utiliser le nom réel de la base de données pour les scripts et les fichiers de configuration au lieu des adresses IP ou du _localhost_.

**Quota dépassé pour les bases de données**

Si une base de données d'hébergement web dépasse l'espace de stockage recommandé, elle basculera automatiquement en « Lecture seule » / « Sélection seule ». L’administrateur recevra une notification par e-mail.

Une fois que la base de données a été optimisée (purgée), vous pouvez recalculer son quota dans votre espace client OVHcloud pour le débloquer à nouveau. La meilleure pratique consiste à télécharger la base de données, à gérer la révision localement et à la remplacer ensuite par importation. Vous pouvez consulter notre guide [Optimisation des performances de votre site](../optimisation-performances-site/#etape-7-optimisation-de-votre-base-de-donnees) pour de plus amples informations.


## Aller plus loin

[Modifier le mot de passe de la base de données d'un hébergement web](../modifier-mot-de-passe-base-de-donnees/)

[Récupérer la sauvegarde de la base de données d'un hébergement web](../exportation-bases-donnees/)

[Importer une sauvegarde dans la base de données d'un hébergement web](../mutualise-guide-importation-dune-base-de-donnees-mysql/)

[Optimiser les performances de votre site web](../optimisation-performances-site/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
