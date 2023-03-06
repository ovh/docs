---
title: 'Utiliser les alias et redirections e-mail'
slug: email-redirection-guide
excerpt: 'Découvrez comment gérer vos alias et redirections e-mail'
section: 'Fonctionnalités des comptes Exchange'
order: 01
routes:
  canonical: "https://docs.ovh.com/ca/fr/emails/guide-des-redirections-emails/"
updated: 2020-05-20
---

**Dernière mise à jour le 01/02/2023**

## Objectif

Vous trouverez dans ce guide différentes informations et aides concernant la configuration de vos redirections et alias e-mail, par exemple pour renvoyer des e-mails reçus sur une adresse A vers une adresse B.

**Découvrez comment gérer vos alias et redirections e-mail**

### Qu'est-ce qu'une redirection e-mail ?

Une redirection permet de modifier le trajet initial d'un e-mail vers une ou plusieurs autres adresses e-mail.

Par exemple, vous souhaitez qu'à l'envoi d'un e-mail sur **contact@mydomain.ovh**, celui-ci soit également renvoyé vers **john.smith@otherdomain.ovh**. Cela permet de transmettre automatiquement un e-mail destiné à **contact@mydomain.ovh** vers **john.smith@otherdomain.ovh**.

### Qu'est-ce qu'un alias e-mail ?

Contrairement à la redirection, l'adresse e-mail associée à l'alias n'est pas une adresse que l'on consulte, il s'agit d'un « masque ».

Créer un alias pour votre adresse e-mail vous permet de communiquer une adresse « masque » à vos contacts, sans avoir à communiquer votre adresse e-mail personnelle à l'expéditeur. Une adresse e-mail peut avoir plusieurs alias.

Par exemple, votre adresse e-mail est **john.smith@mydomain.ovh** et votre alias **information@mydomain.ovh**. Vous pouvez alors communiquer à vos contacts l'adresse **information@mydomain.ovh** et recevoir vos e-mails sur **john.smith@mydomain.ovh**, sans que l'expéditeur ait connaissance de **john.smith@mydomain.ovh**.

### Redirection et alias en image <a name="diagram"></a>

- **La redirection simple (schéma n°1 ci-dessous)** : l'e-mail est directement renvoyé vers l'adresse de redirection, le destinataire initial ne reçoit pas l'e-mail.

- **La redirection avec copie locale (schéma n°2 ci-dessous)** : l'e-mail est transmis au destinataire initial ainsi qu'à l'adresse de redirection.

- **L'alias e-mail (schéma n°3 ci-dessous)** : l'e-mail est adressé à l'alias qui le renvoie vers le destinataire sur lequel l'alias a été configuré.

![emails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Sachez qu'il est possible de configurer une redirection vers plusieurs adresses e-mail.

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer d'une solution e-mail OVHcloud préalablement configurée (**MX Plan**, proposée parmi nos [offres d’hébergement web](https://www.ovhcloud.com/fr/web-hosting/) ou commandée séparément comme solution autonome, telle que [Hosted Exchange](https://www.ovhcloud.com/fr/emails/hosted-exchange/)).

## En pratique

Suivez notre guide [Utiliser les alias et redirections e-mail](https://docs.ovh.com/ca/fr/emails/guide-des-redirections-emails/) dans la rubrique « E-mails mutualisés - MX Plan ».