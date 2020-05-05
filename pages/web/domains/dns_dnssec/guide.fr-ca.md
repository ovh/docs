---
title: 'Sécuriser votre nom de domaine avec DNSSEC'
slug: securiser-votre-domaine-avec-dnssec
excerpt: 'Protégez votre nom de domaine du Cache Poisoning en activant le DNSSEC'
section: 'Protection et sécurité'
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Les serveurs DNS hébergent la configuration DNS d'un nom de domaine. Dans une utilisation classique, cette configuration permet de faire le lien entre votre nom de domaine et le ou les serveurs qui hébergent votre site internet et vos adresses e-mail. Ces dernières années, des personnes malveillantes ont mis au point des méthodes d'empoisonnement des serveur DNS, leur permettant de détourner le trafic vers d'autres serveurs. Il existe un moyen de protéger votre nom de domaine de ces actions : le DNSSEC.

**Apprenez à activer le DNSSEC sur votre nom de domaine afin de le protéger contre le Cache Poisoning.**  
Pour comprendre comment cette protection fonctionne, nous vous conseillons de consulter cette page : « [Comprendre le DNSSEC](https://www.ovh.com/ca/fr/domaines/service_dnssec.xml){.external} ».

## Prérequis

- Disposer d’un nom de domaine enregistré chez OVHcloud.
- Le nom de domaine concerné doit posséder une extension compatible avec le DNSSEC.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Web`{.action}.

## En pratique

L'activation du DNSSEC est possible selon deux cas :

- **votre nom de domaine utilise les serveurs DNS d'OVHcloud** : l'activation s'effectue en un clic depuis votre espace client ;

- **votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud** : vous devrez vous rapprocher du prestataire gérant la configuration DNS de celui-ci. Si vous gérez vous-même cette dernière, vous devrez installer manuellement le DNSSEC. Si tel est le cas, aidez-vous des documentations disponibles en ligne.

> [!primary]
>
> Pour vérifier si votre nom de domaine utilise la configuration DNS OVHcloud : depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur l'onglet `Serveurs DNS`{.action}, une fois positionné sur le domaine concerné.
>

### Étape 1 : accéder à la gestion du nom de domaine

Pour débuter la manipulation, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, et assurez-vous d'être positionné dans la partie « Web ». Cliquez alors sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de domaine concerné dans la liste.

La page qui apparaît affiche les informations générales de celui-ci. 

![dnssec](images/activate-dnssec-step1.png){.thumbnail}

### Étape 2 : gérer le DNSSEC de son nom de domaine

Toujours positionné sur l'onglet `Informations générales`{.action}, vous avez la possibilité de vérifier l'état d'activation du DNSSEC sur votre nom de domaine.

Pour cela, dans le cadre « Sécurité », vérifiez l'état à côté de la mention « Délégation Sécurisée - DNSSEC ».

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

En bougeant le bouton d'activation, vous pourrez ainsi activer ou désactiver le DNSSEC sur votre nom de domaine. Une nouvelle fenêtre apparaîtra alors, sur laquelle vous devrez valider la modification.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

### Étape 3 : patienter durant l'activation ou la désactivation

Une fois que vous avez décidé d'activer ou de désactiver le DNSSEC sur votre nom de domaine, la prise en compte de cette modification nécessite un délai 24 heures au maximum, durant lequel vous devez patienter. 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
