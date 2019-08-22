---
title: Accéder à l'interface Horizon
slug: creer-un-acces-a-horizon
legacy_guide_number: 1773
excerpt: Découvrez comment accéder à l'interface Horizon
section: Base de connaissances
order: 1
---

**Dernière mise à jour le 20/02/2018**

## Objectif

Horizon est l’interface graphique d’administration d'OpenStack. Certaines fonctions de gestion sont disponibles uniquement depuis cette interface.

**Ce guide vous présente la manière d'y accéder.**


## Prérequis

- Avoir créé un projet Public Cloud.


## En pratique

### Créer un utilisateur OpenStack

Pour accéder à Horizon il faut avant tout créer un utilisateur OpenStack. Pour cela, dans votre espace client, rendez-vous dans la partie `Cloud`{.action} puis `Serveurs`{.action} et sélectionnez le projet concerné. Choisissez ensuite l'onglet `OpenStack`{.action} dans la colonne de gauche :

![Ajout d’utilisateur](images/1_H_add_user.png){.thumbnail}

Cliquez sur le bouton `Ajouter un utilisateur`{.action} et choisissez ensuite une description d'utilisateur. L'identifiant et le mot de passe sont automatiquement générés par la suite. Une fois l’opération terminée, le message de confirmation de création du compte s’affichera.

Le mot de passe est visible dans l'espace client jusqu’à l'actualisation de la page. Vous pouvez le conserver pour pouvoir l'utiliser de nouveau lors d’une connexion ultérieure. Il est également possible de générer un nouveau mot de passe en cliquant sur le pictogramme d'actualisation figurant à côté de votre mot de passe actuel :

![Menu projet](images/2_H_user_manage.png){.thumbnail}

### Se connecter à OpenStack Horizon

Pour afficher le menu, cliquez sur le pictogramme représentant trois points à l'extrémité de la ligne `...`{.action}. Cliquez ensuite sur le lien `Ouvrir Openstack Horizon`{.action}. La page de connexion d'[Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} apparaît alors. Pour vous connecter, entrez votre identifiant (`User Name`) et votre mot de passe.

![Menu projet](images/3_H_open_menu.png){.thumbnail}

![Ecran de connexion](images/4_H_login_window.png){.thumbnail}

Une fois connecté, l’interface OpenStack Horizon s’affichera :

![Interface Horizon](images/5_H_view.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.