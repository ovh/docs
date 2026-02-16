---
title: "Activer ou désactiver l'envoi d'e-mails depuis le SMTP OVHcloud"
excerpt: "Découvrez comment activer ou désactiver l'envoi d'e-mails depuis votre connexion OVHcloud via l'espace client"
updated: 2026-01-07
---

## Objectif

Afin de protéger votre réseau et vos adresses e-mail, nous désactivons l'envoi d'e-mails via le serveur d'e-mails sortants (SMTP) `smtp.dsl.ovh.net`, sur le port 25 et sans authentification.

**Découvrez comment activer ou désactiver l'envoi d'e-mails depuis votre connexion Internet OVHcloud via l'espace client.**

## Prérequis

- Disposer d'un [accès Internet xDSL ou FTTH OVHcloud](/links/telecom/offre-internet).
- Être connecté à l’[espace client OVHcloud](/links/manager), partie `Télécom`{.action} :

![espace client Telecom Accès Internet](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-01-fr-internet.png){.thumbnail}

## En pratique

### Activer ou désactiver l'envoi d'e-mails

> [!primary]
>
> Par défaut, l'envoi d'e-mails est désactivé sur tous les accès Internet livrés après le mois d'octobre 2024. Aucune manipulation n'est nécessaire si vous n'utilisez pas d'adresse e-mail configurée sur un logiciel de messagerie installé directement sur votre ordinateur.
>
> Exemples de logiciels de messagerie : Outlook, Thunderbird, Mail sur macOS, etc.
>
> Si vous utilisez votre adresse e-mail via un webmail ou que vous n'utilisez pas le serveur `smtp.dsl.ovh.net` sur le port 25 et sans authentification comme serveur d'envoi, nous vous recommandons de laisser ce paramètre sur `désactivé` ou de le désactiver dans le cas où il serait `activé`.
>

1. Connectez-vous à votre [espace client OVHcloud](/links/manager) et cliquez sur `Télécom`{.action}.
1. Cliquez sur `Offres Internet`{.action} puis sur le *Pack* contenant l'accès à Internet concerné.
1. Cliquez sur votre accès à Internet FTTH ou xDSL dans le cadre `Accès Internet` à droite.
1. Assurez-vous d'être positionné sur l'onglet `Mon accès`{.action}.

Dans le cadre « Informations générales », reportez-vous à la partie `Envoi d'email via notre serveur SMTP`. Vous retrouverez dans cette dernière le statut actuel du service d'envoi d'e-mails.

![Mail Sending status](images/MailSending-Status.png){.thumbnail}

> [!alert]
>
> En activant l'envoi d'e-mails, vous autorisez vos machines, avec une adresse e-mail configurée, à envoyer des e-mails via notre serveur d'envoi sans authentification. De ce fait, si l'une de vos adresses est compromise, celle-ci pourra être utilisée à des fins malveillantes, généralement pour envoyer des courriers indésirables, communément appelés « spam ». En cas de détection de spam, nous bloquerons automatiquement l'envoi d'e-mails depuis votre accès.
>
> De plus, dès lors qu'une adresse e-mail ou une adresse IP (celle de votre accès Internet) est détectée comme étant utilisée pour des envois de courrier indésirable, elle sera systématiquement bloquée par les adresses de vos correspondants même si votre e-mail est légitime. De plus, votre adresse IP risque d'être répertoriée comme étant « à risque » sur les différents sites Internet et solutions de protection contre le spam.
>

> [!warning]
>
> Le changement de statut entraînera une déconnexion/reconnexion de votre accès Internet dans un intervalle de 5 à 10 minutes après avoir validé l'action.
>

- Pour changer l'état, cliquez simplement sur l'action disponible. Par exemple ici pour la désactivation :

![Mail Sending status](images/MailSending-Disable.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
