---
title: 'Logs du cluster'
slug: log-cluster
excerpt: 'Accédez aux logs de votre cluster'
section: 'Démarrer avec votre cluster PostgreSQL'
---


**Dernière mise à jour le 20/12/2019**

## Objectif

Chaque cluster Enterprise Cloud Databases collecte et stocke les journaux d'évènements (logs) de manière centralisée et automatisée, durant 3 mois glissants.
Ce guide va vous présenter les étapes nécessaire pour y accèder.


## Pré-requis
- Disposer d'un cluster Enterprise Cloud Databases.


## En pratique

### Étape 1 : activation d'un compte OVHcloud Logs

Les journaux d'évènements sont collectés et stockés dans le produit tiers OVHcloud LogsData Platform. Leur stockage est inclus dans notre offre.
Pour accéder à vos logs, vous devez disposez d'un compte gratuit OVHcloud Logs que vous pouvez créer [sur la page officielle](https://www.ovh.com/fr/data-platforms/logs/){.external}.

Une fois créé, votre service OVHcloud Logs apparaît dans votre espace client. Récupérez votre nom d'utilisateur se trouvant dans `Accueil > Configuration`{.action} :

![Main interface](images/manager_start.png){.thumbnail}



### Étape 2 : accorder l'accès à OVHcloud Logs

Une fois votre compte créé, dirigez vous dans votre espace client Enterprise Cloud Databases dans `Logs`{.action} puis `Accorder l'accès au compte OVH Logs`{.action}.
Une fenêtre vous demande votre nom d'utilisateur OVHcloud Logs. Renseignez-le et acceptez.


### Étape 3 : utilisation de Graylog

Nous vous proposons le logiciel Graylog pour visualiser vos logs de manière simple et interactive. Graylog vous permet de créer des dashboards de toutes sortes et de naviguer dans vos journaux d'évènements.
[La documentation officielle de OVHcloud Logs](../../platform/logs-data-platform/){.external} détaille toutes les étapes de configuration qui vous permettront de créer les dashboards nécessaires à votre usage, et plus encore.

Exemple de dashboard :

![Main interface](images/graylog-stream.png){.thumbnail}



## Aller plus loin

Apprenez à gérer votre cluster PostgreSQL en consultant la [documentation technique d'OVHcloud](../enterprise-cloud-databases/){.external} pour davantage d'informations sur le fonctionnement technique de votre offre managée.
