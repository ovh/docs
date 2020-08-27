---
title: 'Créer un répondeur pour son adresse e-mail'
legacy_guide_number: 2052
slug: mise-en-place-repondeur-mail
excerpt: 'Découvrez comment mettre en place un répondeur e-mail'
section: 'Fonctionnalités des adresses e-mail'
order: 3
---

## Objectif

Vous devez vous absenter de votre travail et vous souhaitez laisser un message aux interlocuteurs qui souhaitent vous contacter par e-mail. Il est possible de mettre un répondeur e-mail.

**Découvrez comment mettre en place un répondeur e-mail,**

## Prérequis

- Disposer d'une offre MX Plan. Celle-ci est disponible via : une offre d’[hébergement web]({ovh_www}/hebergement-web/){.external}, l'[hébergement gratuit Start 10M]({ovh_www}/domaines/offre_hebergement_start10m.xml){.external} compris avec un nom de domaine (activé au préalable) ou l'offre MX Plan commandée séparément.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

> [!primary]
>
> Si votre adresse e-mail est sur une offre [**Exchange**](https://www.ovh.com/fr/emails/hosted-exchange/), [**Email Pro**](https://www.ovh.com/fr/emails/email-pro/) ou qu'il n'y a pas de section `Gestion des répondeurs`{.action} à votre MXplan, il vous sera nécessaire de créer le répondeur depuis votre webmail en vous aidant de la documentation [« Mettre en place un répondeur automatique depuis l’interface OWA »](../../microsoft-collaborative-solutions/exchange_2016_guide_mise_en_place_dun_repondeur_sous_owa/)

### Création du répondeur

Connectez-vous à votre [espace client](https://www.ovh.com/auth/?action=gotomanager){.external}. 

Sélectionnez le nom de domaine concerné dans la section `Emails`{.action}, depuis la colonne à gauche.

Cliquez sur l'onglet `Emails`{.action} en haut, puis sur `Gestion des répondeurs`{.action}.

Vous serrez dirigez vers la fenêtre `Gestion des répondeurs` affichant l'ensemble des répondeurs e-mail en place sur votre offre e-mail.

Cliquez sur `Ajouter un répondeur`{.action}

![hosting](images/email_responder01.gif){.thumbnail}

La fenêtre d'ajout s'affiche. Vous pouvez la compléter selon les informations ci-dessous.

- `Type de répondeur`:

« Associé à une boite e-mail » : à utiliser si cela concerne une adresse e-mail existante et non pas un alias.
« Libre » : à utiliser dans le cas d'un alias.

- `Boîte email` ou `Nom du répondeur`: l'adresse e-mail ou l'alias concerné par le répondeur.

- `Durée du répondeur `:

« Temporaire » : vous permet de définir une date de début et de fin à prendre en compte pour le fonctionnement de votre répondeur (utile si vous partez en congés par exemple).
« Permanent » : le répondeur fonctionnera tant que vous ne l'aurez pas désactivé. Vous permet de conserver une copie du message reçu si l'option est cochée. Dans le cas où vous avez choisi un répondeur " libre ", vous pourrez alors choisir l'adresse e-mail cible de la copie du message reçu.

- `Envoyer une copie ` ou `Garder les messages sur le serveur `: permet de renvoyer les messages reçus pendant votre absence vers l'adresse de votre choix ou de les concerver sur l'adresse e-mail. Si vous décochez cette case, les messages reçus pendant votre absence seront automatiquement supprimés.

- `Adresse en copie ` (Seulement en mode libre) : dans le cas d'un alias, sélectionner l'adresse e-mail qui recevra les e-mails envoyés vers l'alias.

- `Message `: Il s'agit du message que vos correspondants recevront lorsqu'ils vous enverront un e-mail.

Vous pouvez ensuite cliquer sur `Valider`{.action} pour que le répondeur soit mis en place.

### Modification ou supression du répondeur

Lorsque votre répondeur mail a été créé, il apparaît dans la liste visible dans la section `Gestion des répondeurs`{.action} de votre offre e-mail. Vous pouvez le supprimer ou le modifier en cliquant sur `...`{.action} à droite de celui-ci.

![hosting](images/email_responder02.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur https://community.ovh.com

