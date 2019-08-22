---
title: 'Activer le mode rescue sur un VPS'
slug: mode-rescue-vps
excerpt: 'Découvrez comment redémarrer votre VPS en mode rescue'
section: 'Diagnostic et mode Rescue'
---

**Dernière mise à jour le 17/10/2018**

## Objectif

Le mode rescue est un outil de votre VPS. Celui-ci vous permet de démarrer votre serveur sur un système d'exploitation temporaire. Vous aurez ainsi la possibilité de diagnostiquer et résoudre les problèmes sur votre système d'exploitation principal. 

Via le mode rescue, vous pouvez :

  - changer votre mot de passe root ;
  - diagnostiquer des problèmes réseau ;
  - réparer un système d'exploitation défectueux ;
  - corriger une mauvaise configuration du pare-feu logiciel ;
  - tester les performances du disque.

Effectuer des vérifications en mode rescue vous aide également à déterminer si un problème est lié au logiciel ou au matériel.

> [!warning]
>
> Si vous avez des services en production sur votre VPS, le mode rescue les interrompt tant que la machine n’a pas été redémarrée en mode normal.
> 

**Ce guide vous explique comment redémarrer votre VPS en mode rescue.**

## Prérequis

- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## En pratique

Dans votre espace client OVH, rendez-vous dans la partie `Cloud` et choisissez votre VPS dans la colonne de gauche : :

![Zone VPS dans le Panneau de configuration](images/vps_rescue1.png){.thumbnail}

Sur l'écran principal de votre VPS, cliquez sur le bouton `Redémarrer en mode rescue` et confirmez ce choix :

![Confirmer le mode secours](images/vps_rescue2.png){.thumbnail}

Une barre de progression affiche l'état d'avancement du redémarrage (cela peut prendre plusieurs minutes) :

![Progression en mode Rescue](images/rescue_task.png){.thumbnail}

> [!primary]
>
> À l’issue de cette étape, vous recevez automatiquement un e-mail avec les identifiants SSH du mode rescue. Ce message est également disponible dans votre espace client, partie `Mon compte` puis `E-mails reçus`.
> 

Vous pouvez désormais vous connecter au mode rescue de votre VPS en SSH. Une fois vos manipulations effectuées, redémarrez le serveur sur son disque dur principal via le bouton `Redémarrer mon VPS`.


## Aller plus loin

[« Introduction au SSH. »](https://docs.ovh.com/fr/dedicated/ssh-introduction/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.