---
title: 'Installer et configurer Cecil'
slug: installer-cecil
excerpt: 'Installer et configurer Cecil, générateur de pages statiques'
section: 'Premiers pas'
order: 
---

**Dernière mise à jour le 13/10/2022**

## Objectif

Ce guide a pour objectif de vous permettre d'installer et de configurer [Cecil](https://cecil.app/), application écrite en PHP permettant de générer et administrer des pages web statiques.

## Prérequis

Pour avoir des temps de réponse optimaux, nous préconisons notre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/). Cette solution inclut, entre autres, un accès SSH qui va vous permettre d'installer une ou plusieurs solutions alternatives à celles proposées dans l'offre.

Pour mettre en place votre solution Sylius, vous devrez intégrer les éléments suivants :
- être familier de la ligne de commande et de l'utilisation d'un terminal
- avoir paramétré votre zone DNS pour faire pointer votre nom de domaine (ou votre sous-domaine) sur votre serveur.

Vous devez également avoir installé [Composer](https://getcomposer.org/) et avoir votre fichier `composer.phar` à la racine de votre serveur où dans n'importe quel répertoire accessible.

## En pratique

### Préparations

#### Créer le répertoire dans lequel seront vos fichiers

Votre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) vous permet de gérer plusieurs sites sur votre serveur.

Une fois connecté en SSH à votre serveur, créez un répertoire à la racine avec la commande :
```sh
mkdir monsitestatique
```

Puis allez dans votre ce répertoire :
```sh
cd monsitestatique
```
