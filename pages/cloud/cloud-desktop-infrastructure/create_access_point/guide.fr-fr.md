---
title: Création d’un nouveau point d’acces
slug: create-access-point
excerpt: Il existe une methode simple et efficace afin de créer un point d’acces.
section: Tutoriels
---


## Introduction
Un point d'accès correspond à un élément permettant l'accès des utilisateurs aux bureaux virtuels d'un VLAN.

Chaque point d'accès est :

- Livré avec une URL publique distincte
- Associé à un réseau privé distinct, déployé sur un VLAN spécifique

Il est possible de déployer plusieurs pools sur un même point d'accès mais l'adressage et le VLAN de ces pools seront partagés.


## Création
L'espace client OVH permet de déployer un nouveau point d'accès dans le cas où vous souhaitez séparer l'adressage ou le VLAN de vos pools de bureaux virtuels :


![Créer un snapshot](images/1200.png){.thumbnail}

Le déploiement d'un nouveau point d'accès implique la création d'une VM d'administration sur les ressources du dedicatedCloud associé à l'infrastructure VMware Horizon.