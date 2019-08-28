---
title: 'Premiers pas avec OVH Prescience'
slug: premiers-pas-avec-ovh-prescience
excerpt: 'Découvrez comment prendre en main la plateforme OVH Prescience'
section: 'Premiers pas'
---

**Dernière mise à jour le 08/10/2018**

## Objectif

La plateforme Prescience est un outil d'apprentissage automatique. Ce guide vous aidera à comprendre les concepts de base derrière cet outil.


**Découvrez comment créer un entraînement de modèle automatisé afin d'effectuer une classification.**

## À qui s'adresse ce guide ?

Ce guide s'adresse en priorité à des utilisateurs déjà familiers avec les concepts de base du machine learning. Si vous ne possédez aucune connaissance dans ce domaine, nous vous recommandons de commencer par lire d'autres guides en rapport avec ces notions.

## Introduction

OVH Prescience est un outil permettant d'entraîner des algorithmes d'apprentissage supervisés, comme des classifications ou des régressions. L'intérêt principal de Prescience réside dans le fait de pouvoir enchaîner toutes les étapes classiques de la datascience, de manière automatique.

1. Premières analyses d'un jeu de données fourni par l'utilisateur (phase d'analyse syntaxique).
2. Transformation de ce jeu de données afin de le rendre interprétable par un algorithme mathématique (phase de *preprocessing*).
3. Entraînement de différents modèles d'apprentissage automatique.
4. Évaluation des performances de ces modèles.
5. Itération sur les étapes 3 et 4 afin d'optimiser les résultats de l'évaluation (phase d'optimisation).
6. Sélection du meilleur modèle entraîné.
7. Déploiement du modèle en production afin de pouvoir l'interroger et exécuter des prédictions de services web via une API.


# Premiers pas

## Obtenir un token de projet

Toutes les actions réalisées sur l'outil Prescience sont rattachées à un projet. Les différents projets créés sur une même instance de Prescience sont totalement cloisonnés entre eux.

Chaque projet possède un token qui lui est propre et permet à l'utilisateur de s'authentifier sur le portail.

Pour vous connecter à l'outil, vous devez donc obtenir un token.

## Se connecter sur le portail

Via votre navigateur, rendez-vous sur le portail de l'outil disponible à cette adresse :

[https://prescience.ai.ovh.net](https://prescience.ai.ovh.net)

Vous serez alors automatiquement réorienté vers la page d'authentification d'où vous pourrez renseigner le token propre à votre projet.

![login_page](images/login_page.png)

Cliquez sur `Login`{.action} afin d'accéder à l'application.

## Page d'accueil

L'application est composée de deux onglets généraux.

* Prescience.
* Production.

Après la connexion, vous arriverez directement sur l'onglet « Prescience », au niveau de la section « Dashboard ».

![landing_page](images/landing_page.png)

Au fil de votre utilisation, cet affichage sera composé de la liste d'exécution de toutes les tâches que vous aurez démarrées ou qui se seront déclenchées automatiquement. Il est vide pour le moment. C'est normal, car le projet est vierge.

## Liste des sources

Tout algorithme d'apprentissage automatique repose sur un jeu de données initial. Dans le cas de Prescience, ce jeu de données s'appelle « la source » et il correspond aux données brutes, non modifiées, que l'utilisateur dépose sur l'application et qui seront utilisées comme base des traitements.

Afin de lister toutes les sources déposées sur l'application, cliquez sur l'onglet `Sources`{.action}.

![source_page](images/source_page.png)

Pour le moment, aucune source de données n'a encore été déposée sur votre projet, nous allons remédier à cela.

## Upload d'un jeu de données

Dans le cadre de notre guide, nous utiliserons un jeu de données disponible librement en téléchargement sur le site « [Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Adult) » disponible [ici](https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data).
Ce jeu de données tabulaire est enregistré sous un format .csv. Il regroupe des données concernant les tranches salariales d'environ 30 000 individus américains en fonction de critères tels que leur âge, leur catégorie sociale, leur sexe etc. Le but est de pouvoir ensuite prédire le salaire d'un individu inconnu grâce à ces mêmes critères.

Vous trouverez une version contenant les headers sur cette url [Link](https://storage.waw1.cloud.ovh.net/v1/AUTH_437c7857c8a64793a42462ba49ef463f/_public/getting-started-source.csv)

Pour déposer une nouvelle source, il vous suffit de cliquer sur le bouton `Upload Source`{.action}, puis de renseigner les champs demandés.

* Le bouton « Upload files » vous permettra de sélectionner le ou les fichiers à déposer.
* Le bouton « Upload folder » vous permettra de sélectionner un dossier complet à déposer.
* Le champ « Source » vous permettra de nommer votre source grâce à un identifiant unique.
* Le champ « Type » vous permettra de sélectionner le format des fichiers que vous téléchargez (.csv ou parquet)
* Si vous choisissez le type .csv, un autre champ vous demandera d'indiquer ou non la présence d'en-têtes sur le fichier.

Renseignez le formulaire comme suit, puis cliquez sur `Upload`{.action} afin de démarrer le dépôt du fichier.

![upload_source](images/upload_source.png)

## Construction d'une source associée à notre jeu de données

Le dépôt d'un fichier initial de données déclenche automatiquement l'initialisation d'une tâche de type *Parse*. Le rôle de cette tâche est de venir construire notre objet source en effectuant une pré-analyse sur les données reçues.

Une barre de progression matérialise l'avancement de la tâche, elle est bleue tant que la tâche est en cours d'exécution.

![source_beeing_parsed](images/source_beeing_parsed.png)

La construction de l'objet source sera terminée quand la barre de chargement arrivera à son terme. Le statut « Parsed » indique alors que la construction de l'objet source s'est bien déroulée.

![source_parsed](images/source_parsed.png)

## Construction d'un *dataset* associé à notre source

Dans le cas de Prescience, un *dataset* est une source dont les données ont été transformées afin d'être interprétables par n'importe quel algorithme d'apprentissage automatique.

Les tâches Prescience responsables de la construction des *datasets* sont les tâches de type *preprocessing*.

Il est possible de créer une multitude de *datasets* à partir d'une source unique. La singularité des *datasets* créés dépendra des méthodes de transformation choisies.

Pour le moment, nous allons créer uniquement un *dataset* basique. Les règles de transformation utilisées lors de la tâche de *preprocessing* seront déduites automatiquement.

Pour lancer la construction d'un *dataset*, il suffit de dérouler le menu « Actions » lié à la source choisie, puis de sélectionner « Preprocess ».

![source_actions](images/source_actions.png)

Un formulaire vous demandera de renseigner les éléments suivants :

* « Dataset name » : l'identifiant unique que vous souhaitez donner au *dataset* ;
* « Label » : la colonne de votre jeu de données à sélectionner en tant que label pour l'apprentissage. Dans notre cas, le label à prédire concerne la tranche de revenus de l'individu qui se trouve dans la dernière colonne (14) de notre tableau de données ;
* « Specify Columns » : Si oui, permet de filter sur quelles colonnes le preprocessing sera effectuées
* « Problem Type » : le type d'apprentissage à réaliser (classification ou régression).
* « K Fold » : Nombre de calculs de validation

Renseignez le formulaire comme suit, puis continuez en cliquant sur `Start`{.action}.

![preprocess_form](images/preprocess_form.png)

La liste des *datasets* créés ou en cours de construction est accessible à tout moment via l'onglet « Dataset ».

Une barre de progression indique l'avancement de la tâche de la même manière que pour la construction des sources.

![dataset_preprocessed](images/dataset_preprocessed.png)

## Démarrage d'une optimisation

Une fois le *dataset* construit, Prescience est prêt à démarrer une optimisation.

La phase d'optimisation consiste à trouver l'algorithme, ainsi que les hyperparamètres associés qui permettront de générer le meilleur modèle de prédiction sur notre jeu de données.

Pour ce faire, le système démarre plusieurs entraînements avec différents algorithmes et hyperparamètres sur plusieurs sous-ensembles de notre jeu de données (aussi appelés « k-fold »). Les résultats de ces entraînements sont ensuite agrégés par le système afin de sélectionner les hyperparamètres les plus pertinents à tester pour les prochaines itérations.

Cette phase d'optimisation possède un nombre d'itération initial renseigné par l'utilisateur. Elle ne s'arrête pas tant que le nombre d'itération n'est pas atteint.


**1 entraînement = 1 unité de budget**

Afin de lancer une optimisation sur notre *dataset*, il suffit dans un premier temps de demander à en afficher les détails. Pour cela, cliquez sur le menu déroulant « Actions », puis « See details ».

![dataset_view](images/dataset_view.png)

Le lancement d'une optimisation se fait ensuite via le bouton `Optimize`{.action}. Cette action vous demandera de renseigner les éléments suivants :

* « Iteration » : Nombre d'entrainements pour cette tâche.
* « Scoring Metric » : la valeur d'optimisation qui sera utilisée par l'algorithme afin d'évaluer la performance de ses résultats. Les valeurs possibles sont des indicateurs connus tels que l'Accuracy, le F1 Score ou le ROC AUC ;

Choisissez le nombre d'itérations que vous voulez et laissez tous les autres paramètres par défaut. Démarrez ensuite l'optimisation.

![optimisation_form](images/optimisation_form.png)

Vous pourrez alors suivre la progression de celle-ci dans l'onglet « Optimizations Runs ».

![optimisation_run](images/optimisation_run.png)

Dans le même temps, vous pourrez observer la courbe des résultats se mettre à jour en temps réel via l'onglet « Results ». Chaque point de la courbe correspond au résultat d'un entraînement spécifique.

![optimization_result](images/optimization_result.png)

Vous pouvez, à souhait, ajuster les indicateurs à afficher sur la courbe via le menu déroulant « Select a scoring metric ».

L'affichage est également disponible sous la forme de tableau, via le bouton `Table`{.action}.

![optimisation_result_table](images/optimisation_result_table.png)

## Entraînement et déploiement d'un modèle

L'encart vert affiché au-dessus de la courbe des résultats vous indique en permanence quel est le meilleur résultat obtenu.

En cliquant sur un point de la courbe, un encart bleu s'affiche et vous permet d'obtenir plus d'informations sur les résultats de l'entraînement associé.

![run_comparison](images/run_comparison.png)

Sur chacun des encarts, un bouton « Actions » apparaît. Celui-ci permet de:
    - lancer un entraînement sur la configuration associée, puis de déployer le modèle entraîné en production. Contrairement à l'optimisation, cet entraînement sera cette fois-ci réalisé sur le jeu complet de données du *dataset* et non sur l'un de ses sous-ensembles.
    - Voir les details de l'entraînement associé

La seule information à fournir à Prescience lors d'une demande de « Train » est l'identifiant, qui permettra de nommer le modèle généré.

Renseignez le formulaire avec les informations suivantes, puis cliquez sur `Start`{.action}.

![train_form](images/train_form.png)

Vous serez automatiquement réorienté vers l'onglet « Production > Models » où sont listés tous les modèles déployés.

Une fois la tâche de déploiement du modèle terminée, vous pouvez l'interroger afin d'obtenir des prédictions, soit directement via l'onglet « Query » soit en utilisant l'API web de Prescience. Pour obtenir des exemples de requêtes de l'API web, il vous suffit de vous rendre dans l'onglet « Production ».

![production_query](images/production_query.png)

## Indicateurs associés au modèle

Si vous observez attentivement l'onglet « Dashboard » listant les tâches exécutées par Prescience, vous remarquerez que chaque tâche de type « Train » est automatiquement enchaînée avec une tâche de type « Model-Metrics ».

![model-metric-task](images/model-metric-task.png)

Cette tâche « Model-Metrics » correspond à l'étape de calcul des indicateurs associés au nouveau modèle déployé en production.

Une fois calculés, ces indicateurs sont visibles dans la vue de votre modèle sur l'onglet « Overview ».

![model_kpi](images/model_kpi.png)


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
