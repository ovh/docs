---
title: "Utiliser l'API REST de WordPress pour créer, modifier et récupérer des contenus"
excerpt: "Comment utiliser l'API REST de WordPress"
slug: how_to_use_wordpress_api
section: CMS
order: 10
---

**Dernière mise à jour le 18/11/2022**

## Objectif

Ce guide a pour objectif de vous permettre d'utiliser l'API REST nativement présente dans WordPress pour lire, créer ou modifier du contenu sans passer par l'interface du CMS.

## Prérequis

Vous devez disposer d'un [Hébergement Web](https://www.ovhcloud.com/fr/web-hosting/) (Hébergement Perso au minimum) sur lequel vous aurez installé [WordPress](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).

## En pratique

### API REST

Une API REST peut se définir comme une interface de programmation d'application (Application Programming Interface) respectant les contraintes de l'architecture REST (Representational State Transfert).

Les API permettent aux applications de communiquer entre elles : récupérer des contenus, effectuer une inscription, s'authentifier sur un service, _etc._
La possibilité d'utiliser l'API REST de WordPress permet d'utiliser l'interface d'administration pour les usages habituels (gestion des comptes des utilisateurs, rédaction de contenu, organisation, _etc._) et de proposer une interface pour l'utilisateur final développée avec une autre technologie. WordPress peut donc s'utiliser comme un CMS Headless.

### Préparer WordPress

Depuis la version 4.7, WordPress propose nativement une API REST qui remplace l'API XML-RPC qui, elle, était activée depuis la version 3.5.

Pour pouvoir adresser l'API, vous devez modifier le réglage des permaliens.Rendez-vous sur l'interface d'administration de votre site WordPress. Rendez-vous dans « Réglages », puis « Permaliens » :

![Permaliens WordPress](images/how_to_use_wordpress_api%5B1%5D.png)

Par défaut, la structure des permaliens est définie sur « Simple ». Pour rendre l'API accessible, il suffit de choisir un des autres paramètres et de valider en cliquant sur « Enregistrer les modifications » en bas de la page :

// Insérer screeshot

## Aller plus loin
