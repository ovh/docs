---
title: Créer un champ CNAME à l'ajout d'un domaine associé
excerpt: Apprenez pourquoi l'ajout d'un champ CNAME peut être requis et comment en ajouter un chez OVHcloud
updated: 2019-03-26
---

## Objectif

Lors de l'ajout d'un nom de domaine à votre service Exchange, une configuration du champ CNAME (DNS) peut vous être demandée. Celle-ci a pour but de s'assurer que l'ajout du nom de domaine en question est légitime.

**Apprenez pourquoi l'ajout d'un champ CNAME peut être requis et comment en ajouter un chez OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Être en mesure d’administrer le service Exchange depuis votre [espace client OVHcloud](/links/manager).
- Avoir effectué l'ajout d'un nom de domaine sur votre service Exchange demandant l'ajout d'un champ CNAME.
- Être en mesure de [configurer la zone DNS](/pages/web_cloud/domains/dns_zone_edit) du nom de domaine concerné, depuis l'espace client OVHcloud ou depuis l'interface de gestion où il est enregistré.

## En pratique

### Étape 1 : comprendre le diagnostic CNAME d'OVHcloud

La pastille de diagnostic **CNAME** (Canonical Name) apparaît dans certains cas spécifiques lors de la déclaration d'un nom de domaine sur votre service Exchange.

Son but est de prouver que vous êtes bien l'administrateur du nom de domaine que vous souhaitez déclarer.

![Exchange](images/cname_exchange_diagnostic.png){.thumbnail}

### Étape 2 : récupérer la configuration CNAME d'OVHcloud

Positionnez-vous sur l'onglet `Domaine associés`{.action} et cliquez sur la pastille de couleur rouge `CNAME`{.action} pour récupérer les informations nécessaires.

Le champ CNAME apparaît dans la fenêtre. 

![Exchange](images/cname_exchange_informations.png){.thumbnail}

Vous devez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre domaine. Une fois ajouté, un temps de propagation de 4 à 24 heures maximum est nécessaire afin que la manipulation soit pleinement effective.

Pour vérifier que la configuration du champ CNAME est correcte, repositionnez-vous sur le tableau `Domaine associés`{.action} de votre service Exchange. Si la pastille est à présent verte, le nom de domaine est correctement ajouté. Dans le cas contraire, il se peut que la propagation ne soit pas encore terminée.

![Exchange](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.