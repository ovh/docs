---
title: 'MXplan - Créer une réponse automatique sur une adresse e-mail'
excerpt: 'Découvrez comment mettre en place une réponse automatique sur une adresse e-mail'
updated: 2024-05-24
---

## Objectif

Lorsque vous êtes absent et que vous n'êtes pas en mesure de consulterez votre adresse e-mail, vous pouvez mettre en place une réponse automatique (ou répondeur) qui transmettra un e-mail aux interlocuteurs qui vous envoie un e-mail.

**Découvrez comment mettre en place un réponse automatique sur une adresse e-mail.**

## Prérequis

- Disposer d'une offre MX Plan. Celle-ci est disponible via : une offre d’[hébergement web](/links/web/hosting), l'[hébergement gratuit 100M](/links/web/domains-free-hosting) compris avec un nom de domaine (activé au préalable) ou l'offre MX Plan commandée séparément.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

> [!primary]
>
> Si votre adresse e-mail est sur une offre [**Exchange**](/links/web/emails-hosted-exchange/), [**Email Pro**](/links/web/emails-email-pro/) ou qu'il n'y a pas de section `Gestion des répondeurs`{.action} dans votre MXplan, vous devrez alors créer une réponse automatique depuis votre webmail en vous aidant de la documentation [« Mettre en place une réponse automatique depuis l’interface OWA »](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Création d'une réponse automatique

Connectez-vous à votre [espace client OVHcloud](/links/manager). Sélectionnez le nom de domaine concerné dans la section `Emails`{.action}. Cliquez sur l'onglet `Emails`{.action} en haut, puis sur `Gestion des répondeurs`{.action}.

Vous serez redirigé vers la fenêtre `Gestion des répondeurs` affichant l'ensemble des réponse automatiques e-mail en place sur votre offre e-mail.

Cliquez sur `Ajouter un répondeur`{.action}

![hosting](images/email_responder01.png){.thumbnail}

La fenêtre d'ajout s'affiche. Vous pouvez la compléter selon les informations ci-dessous.

- `Type de répondeur`:

**Associé à une boite e-mail**: à utiliser si cela concerne une adresse e-mail existante sur votre offre e-mail.
**Libre**: à utiliser dans le cas d'un alias. Il n'est donc pas lié à une adresse existante.

- `Boîte email` ou `Nom du répondeur`: l'adresse e-mail ou l'alias concerné par la réponse automatique.
- `Durée du répondeur`:
    - **Temporaire** : définissez une date de début et de fin à prendre en compte pour le fonctionnement de votre réponse automatique (utile si vous partez en congés par exemple).
    - **Permanent** : la réponse automatique fonctionnera tant que vous ne l'aurez pas désactivé.
- `Envoyer une copie` ou `Garder les messages sur le serveur`: permet de renvoyer les messages reçus pendant votre absence vers l'adresse de votre choix ou de les conserver sur l'adresse e-mail.

> [!warning]
>
> Si vous décochez cette case, les messages reçus pendant votre absence seront automatiquement supprimés.

- `Adresse en copie` (Seulement en mode libre) : dans le cas d'un alias, sélectionnez l'adresse e-mail qui recevra les e-mails envoyés vers l'alias.
- `Message`: Il s'agit du message que vos correspondants recevront lorsqu'ils vous enverront un e-mail.

Cliquez ensuite sur `Valider`{.action} pour terminer la configurationde votre réponse automatique soit mise en place.

> [!success]
>
> Si vous souhaitez déléguer la gestion d'une réponse automatique pour une adresse e-mail. Consultez notre guide [« Déléguer la gestion de vos comptes e-mails à une autre personne »](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation)

### Modification ou supression d'une réponse automatique

Lorsque votre réponse automatique a été créée, il apparaît dans la liste visible dans la section `Gestion des répondeurs`{.action} de votre offre e-mail. Vous pouvez le supprimer ou le modifier en cliquant sur `...`{.action} à droite de celui-ci.

![hosting](images/email_responder02.png){.thumbnail}

## Aller plus loin

[FAQ e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Échangez avec notre communauté d'utilisateurs sur <ttps://community.ovh.com>
