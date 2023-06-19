---
title: 'Créer un répondeur pour son adresse e-mail'
excerpt: 'Découvrez comment mettre en place un répondeur e-mail'
updated: 2021-04-20
---

**Dernière mise à jour le 28/08/2020**

## Objectif

En cas d'absence à votre bureau, vous pouvez mettre en place un répondeur e-mail qui laissera un message aux interlocuteurs souhaitant vous contacter par e-mail.

**Découvrez comment mettre en place un répondeur e-mail.**

## Prérequis

- Disposer d'une offre MX Plan. Celle-ci est disponible via : une offre d’[hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external}, l'[hébergement gratuit Start 10M](https://www.ovhcloud.com/fr/domains/free-web-hosting/){.external} compris avec un nom de domaine (activé au préalable) ou l'offre MX Plan commandée séparément.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

> [!primary]
>
> Si votre adresse e-mail est sur une offre [**Exchange**](https://www.ovhcloud.com/fr/emails/hosted-exchange/), [**Email Pro**](https://www.ovhcloud.com/fr/emails/email-pro/) ou qu'il n'y a pas de section `Gestion des répondeurs`{.action} dans votre MXplan, vous devrez alors créer le répondeur depuis votre webmail en vous aidant de la documentation [« Mettre en place un répondeur automatique depuis l’interface OWA »](/pages/web/microsoft-collaborative-solutions/owa_automatic_replies).

### Création du répondeur

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. 

Sélectionnez le nom de domaine concerné dans la section `Emails`{.action}.

Cliquez sur l'onglet `Emails`{.action} en haut, puis sur `Gestion des répondeurs`{.action}.

Vous serez redirigé vers la fenêtre `Gestion des répondeurs` affichant l'ensemble des répondeurs e-mail en place sur votre offre e-mail.

Cliquez sur `Ajouter un répondeur`{.action}

![hosting](images/email_responder01.png){.thumbnail}

La fenêtre d'ajout s'affiche. Vous pouvez la compléter selon les informations ci-dessous.

- `Type de répondeur`:

« Associé à une boite e-mail » : à utiliser si cela concerne une adresse e-mail existante sur votre offre e-mail.
« Libre » : à utiliser dans le cas d'un alias. Il n'est donc pas lié à une adresse existante.

- `Boîte email` ou `Nom du répondeur`: l'adresse e-mail ou l'alias concerné par le répondeur.

- `Durée du répondeur `:

« Temporaire » : définissez une date de début et de fin à prendre en compte pour le fonctionnement de votre répondeur (utile si vous partez en congés par exemple).
« Permanent » : le répondeur fonctionnera tant que vous ne l'aurez pas désactivé.

- `Envoyer une copie ` ou `Garder les messages sur le serveur `: permet de renvoyer les messages reçus pendant votre absence vers l'adresse de votre choix ou de les conserver sur l'adresse e-mail.

> [!warning]
> Si vous décochez cette case, les messages reçus pendant votre absence seront automatiquement supprimés.

- `Adresse en copie ` (Seulement en mode libre) : dans le cas d'un alias, sélectionnez l'adresse e-mail qui recevra les e-mails envoyés vers l'alias.

- `Message `: Il s'agit du message que vos correspondants recevront lorsqu'ils vous enverront un e-mail.

Vous pouvez ensuite cliquer sur `Valider`{.action} pour que le répondeur soit mis en place.

### Modification ou supression du répondeur

Lorsque votre répondeur e-mail a été créé, il apparaît dans la liste visible dans la section `Gestion des répondeurs`{.action} de votre offre e-mail. Vous pouvez le supprimer ou le modifier en cliquant sur `...`{.action} à droite de celui-ci.

![hosting](images/email_responder02.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur https://community.ovh.com
