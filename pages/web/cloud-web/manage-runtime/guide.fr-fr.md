---
title: 'Gérer les moteurs d''exécution de son hébergement Cloud Web'
slug: gerer-moteurs-execution-runtime-cloud-web
excerpt: 'Apprenez à gérer les moteurs d''exécution de votre hébergement Cloud Web'
section: 'Configuration de l''hébergement'
---

**Dernière mise à jour le 20/06/2018**

## Objectif

Cloud Web met à disposition de multiples langages de développements pour construire votre projet. Pour le mener à son terme, vous pouvez être amené à devoir utiliser un moteur d'exécution plutôt qu'un autre. 

**Apprenez à gérer les moteurs d'exécution de votre hébergement Cloud Web.**

## Prérequis

- Disposer d'une offre d'hébergement [Cloud Web](https://www.ovh.com/fr/hebergement-web/cloud-web.xml).
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager).

## En pratique

Afin de coller au mieux à votre projet, l'hébergement Cloud Web offre la possibilité de gérer des moteurs d'exécution. L'utilisation d'un moteur en particulier plutôt qu'un autre dépend de ce que vous souhaitez mettre en place dans le cadre de votre projet. 

Ainsi, si ce n'est pas encore fait, **assurez-vous de la compatibilité technique de votre projet avec votre hébergement Cloud Web**. Les langages compatibles sont disponibles depuis le lien : <https://www.ovh.com/fr/hebergement-web/cloud-web.xml>. 

Après avoir délimité avec précision le ou les moteurs d'exécution à utiliser, vous pouvez débuter les manipulations décrites ci-dessous.

### Étape 1 : accéder à la gestion des moteurs d'exécution

Pour accéder aux moteurs d'exécutions de votre hébergement Cloud Web, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement Cloud Web concerné. Positionnez-vous enfin sur l'onglet `Moteurs d'exécution`{.action}.

Le tableau qui apparaît affiche les moteurs d'exécution actuellement ajoutés à votre hébergement Cloud Web. Un moteur a été automatiquement créé lors de l'installation de votre hébergement. Dès lors, vous avez la possibilité de :

- modifier un moteur d'exécution déjà existant ;
- ajouter un nouveau moteur d'exécution (le nombre de moteurs d’exécution est dépendant de l’offre Cloud Web commandée) ;
- définir un moteur en tant que `Choix par défaut` ;
- supprimer un moteur d'exécution.

![cloudweb](images/cloud-web-runtime-step1.png){.thumbnail}

Avant de réaliser une quelconque manipulation sur un moteur d'exécution, nous vous recommandons de vous assurer que cela ne rendra pas indisponible un site ou une application utilisant ce dernier. 

Pour vous aider dans cette démarche, toujours positionné dans l'onglet `Moteurs d'exécution`{.action}, relevez pour le moteur concerné le `Nombre de multisites liés` dans cette colonne du tableau. Puis, dans l'onglet `Multisite`{.action}, vous pourrez relever le moteur d'exécution utilisé pour chaque domaine grâce à la colonne `Moteur d'exécution` du tableau.

Dès que vous êtes prêt à réaliser la manipulation souhaitée, poursuivez vers l'étape suivante.

![cloudweb](images/cloud-web-runtime-step2.png){.thumbnail}

### Étape 2 : gérer les moteurs d'exécution

#### 1. Modifier un moteur d'exécution

Pour modifier un moteur d'exécution, positionnez-vous sur l'onglet `Moteurs d'exécution`{.action} de l'hébergement Cloud Web concerné. Dans le tableau, cliquez sur les trois points à droite du moteur que vous souhaitez modifier puis cliquez sur `Modifier`{.action}. 

![cloudweb](images/cloud-web-runtime-step3.png){.thumbnail}

Dans la fenêtre qui s'affiche, complétez les informations demandées. Selon le moteur sélectionné, des éléments additionnels que ceux ci-dessous peuvent être requis.

|Information|Description| 
|---|---| 
|Nom personnalisé|Renseignez un nom vous permettant de reconnaître ce moteur parmi d'autres affichés dans votre espace client OVH.|  
|Moteur d'exécution|Choisissez le nouveau moteur d'exécution souhaité.|  

Une fois complétées, cliquez sur `Valider`{.action}.

![cloudweb](images/cloud-web-runtime-step4.png){.thumbnail}

### Étape 3 : associer le moteur à un multisite

Une fois que vous disposez du ou des moteurs d'exécution nécessaires à votre projet, assurez-vous que ceux-ci sont bien liés à vos Multisites. Pour cela, positionnez-vous sur l'onglet `Multisite`{.action} de l'hébergement Cloud Web concerné. Dans le tableau, relevez pour les domaines concernés si le moteur affiché est correct dans la colonne `Moteur d'exécution`.

Si vous souhaitez modifier un moteur associé à un Multisite, cliquez sur le pictogramme en forme de roue dentée à droite du domaine concerné puis cliquez sur `Modifier`{.action}. Sélectionnez alors le bon moteur à côté de `Moteur d'exécution` dans la fenêtre qui s'affiche puis suivez les étapes jusqu'à la finalisation. Pour rappel, le site ou l'application accessible depuis le domaine concerné doit être compatible avec le moteur choisi. 

![cloudweb](images/cloud-web-runtime-step5.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.