---
title: 'Activer le mode rescue sur un VPS'
slug: mode-rescue-vps
excerpt: 'Découvrez comment redémarrer votre VPS en mode rescue'
section: 'Diagnostic et mode Rescue'
---
**Dernière mise à jour le 24 novembre 2020**

## Objectif

Le mode rescue est un outil de votre VPS. Celui-ci vous permet de démarrer votre serveur sur un système d'exploitation temporaire. Vous aurez ainsi la possibilité de diagnostiquer et résoudre les problèmes sur votre système d'exploitation principal. 

Via le mode rescue, vous pouvez :

  - changer votre mot de passe root ;
  - diagnostiquer des problèmes réseau ;
  - réparer un système d'exploitation défectueux ;
  - corriger une mauvaise configuration du pare-feu logiciel ;
  - tester les performances du disque.

Effectuer des vérifications en mode rescue vous aide également à déterminer si un problème est lié au logiciel ou au matériel. Nous vous recommandons de le faire avant de contacter nos équipes de support.

> [!warning]
>
> Si vous avez des services en production sur votre VPS, le mode rescue les interrompt tant que la machine n’a pas été redémarrée en mode normal.
> 

**Ce guide explique comment redémarrer votre VPS en mode rescue.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.
- Avoir votre [VPS OVHcloud](https://www.ovhcloud.com/fr/vps/){.external} déjà configuré.

> [!warning]
>
> OVHcloud met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section “Aller plus loin” de ce guide.
> 

## En pratique

### Activation du mode rescue

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), accédez à la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur dans la liste de navigation de gauche sous `VPS`{.action}.

#### Avec une offre VPS actuelle

Sous l'onglet `Accueil`{.action}, cliquez sur `...`{.action} à côté de « Boot » dans la zone **Votre VPS**.

![configuration du mode rescue](images/rescue_new.png){.thumbnail}

Sélectionnez `Redémarrer en mode rescue`{.action} dans le menu.

#### Avec une ancienne offre VPS

Sous l'onglet `Accueil`{.action}, cliquez sur le lien de raccourci intitulé `Redémarrer en mode rescue`{.action}.

![configuration du mode rescue](images/rescue_legacy.png){.thumbnail}

Une fenêtre s'affiche, cliquez sur `Confirmer`{.action} pour lancer le redémarrage en mode rescue.

### Utilisation du mode rescue

Une fois que vous avez lancé le redémarrage, une barre de progression indique l'avancement de la tâche. Notez que cela peut prendre plusieurs minutes.

> [!primary]
>
> Vous recevrez un email automatisé avec les informations d'identification SSH pour accéder au mode rescue. Veuillez attendre la réception de l'e-mail avant de prendre toute autre mesure. Cet e-mail est également disponible dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Pour le retrouver, cliquez sur le nom associé à votre identifiant OVHcloud dans la barre de menus située dans le coin supérieur droit, puis sélectionnez `E-mails de service`{.action}.
>

Vous pouvez maintenant vous connecter via SSH à votre VPS en utilisant les informations d'identification du mode rescue. Une fois vos actions terminées en mode rescue, redémarrez le VPS en mode « normal » à partir de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

## Aller plus loin

[Changer le mot de passe root sur un VPS](../root-password/)

[Introduction au SSH](../../dedicated/ssh-introduction/)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.

