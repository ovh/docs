---
title: Créer et supprimer un groupe de sécurité dans Horizon
excerpt: Découvrez comment créer ou supprimer un groupe de sécurité via Horizon
slug: creer-supprimer-groupe-securite-dans-horizon
section: Gestion depuis Horizon
order: 17
---

**Dernière mise à jour le 27/02/2018**


## Objectif

Les groupes de sécurité sont des ensembles de règles de filtrage des adresses IP et des ports qui s'appliquent à toutes les instances d'un projet donné et définissent l'accès réseau à l'instance. Les règles du groupe sont spécifiques à un projet. Ses membres peuvent éditer les règles par défaut pour leur groupe et ajouter de nouveaux ensembles de règles.

Tous les projets disposent d’un groupe de sécurité par défaut, utilisé pour chaque instance, qui n’a pas d’autre groupe de sécurité défini. Chez OVHcloud, les paramètres par défaut du groupe de sécurité autorisent aussi bien le trafic sortant que le trafic entrant de l’instance.

**Ce guide vous explique comment créer et supprimer un groupe de sécurité via l'interface Horizon.**

## Prérequis

- Avoir accès à [votre interface Horizon](../creation_acces_a_interface_horizon/){.external}.


## En pratique

Avant tout, connectez-vous à l'interface [Horizon](https://horizon.cloud.ovh.net/){.external}, puis choisissez la région dans laquelle vous voulez créer un groupe de sécurité dans le menu en haut de l’écran :

![Choix de région](images/1_H_sec_groups_region_choosing.png){.thumbnail}

Le groupe de sécurité est créé dans la région sélectionnée. Si un groupe de sécurité doit être utilisé dans plusieurs régions, vous devez le définir pour chacune d’elles.


Cliquez sur le bouton `Network`{.action}, puis `Security Groups`{.action} :

![Groupes de sécurité](images/2_H_crete_sec_group.png){.thumbnail}

Pour créer un groupe de sécurité, cliquez sur le bouton `+ Create Security Group`{.action}. Nommez ensuite le groupe et attribuez-lui une description (optionnel) :

![Création de groupes de sécurité](images/3_H_new_sec_gr_name.png){.thumbnail}

Validez ensuite avec le bouton `Create Security Group`{.action}.

Pour supprimer un groupe de sécurité, cochez-le et cliquez sur `Delete Security Groups`{.action}.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
