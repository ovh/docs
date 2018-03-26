---
title: Activer le mode Rescue sur un VPS
slug: mode-rescue-vps
excerpt: Découvrez dans ce guide comment redémarrer votre VPS en mode Rescue.
section: Diagnostic et mode Rescue
---

**Dernière mise à jour le 20/11/2017**

## Objectif

Le mode Rescue est un mode qui permet de démarrer votre serveur sur une configuration OVH indépendante. Votre disque pourra alors être monté comme une partition autonome.

L’avantage est que vous pouvez réaliser vos tests et manipulations lorsque cela vous convient le mieux et que cela gêne le moins les opérations de votre serveur. Cela vous permet également de corriger une erreur de manipulation que vous auriez pu commettre et qui vous a coupé l’accès au disque du serveur.

> [!warning]
>
> Si vous avez une production en cours, le mode Rescue interrompt celle-ci tant que la machine n'a pas été redémarrée en mode normal.
> 

Découvrez dans ce guide comment redémarrer votre VPS en mode Rescue.

## Prérequis

- Être connecté à votre [espace client](https://www.ovh.com/auth/?action=gotomanager).


## En pratique

Une fois connecté à votre espace client, il faut aller dans la partie `Dédié`{.action} et choisir votre VPS dans la colonne de gauche :

![Partie VPS dans l'espace client](images/vps_rescue1.png){.thumbnail}

Sur l'écran principal de votre VPS, cliquez à droite sur le bouton `Rescue Mode`{.action} et validez la confirmation de redémarrage :

![Validation du mode Rescue](images/vps_rescue2.png){.thumbnail}

Une barre de progression vous informera de l'avancée de la tâche de redémarrage (cela peut prendre plusieurs minutes) :

![Progression du mode Rescue](images/rescue_task.png){.thumbnail}

> [!primary]
>
> À l'issue de cette étape vous recevez automatiquement un e-mail avec les identifiants SSH du mode Rescue. Cet e-mail est également disponible dans votre espace client, partie `Mon compte`{.action} puis `E-mails reçus`{.action}.
> 

Vous pouvez désormais vous connecter au mode Rescue de votre VPS en SSH. Une fois vos manipulations réalisées avec le mode Rescue, vous pouvez redémarrer le VPS sur son disque dur principal via le bouton `Redémarrer mon VPS`{.action}.


## Aller plus loin

[Introduction au SSH](https://docs.ovh.com/fr/dedicated/ssh-introduction/)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.