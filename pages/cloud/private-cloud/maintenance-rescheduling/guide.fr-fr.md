---
title: "Décaler une maintenance programmée sur votre Hosted Private Cloud"
excerpt: "Découvrez comment décaler une maintenance programmée sur votre service Hosted Private Cloud powered by VMware"
slug: maintenance-rescheduling
section: Fonctionnalités OVHcloud
---

**Dernière mise à jour le 30/11/2022**

## Objectif

Lorsqu'une maintenance est programmée sur votre Hosted Private Cloud, un e-mail de notification vous est envoyé pour vous prévenir de la date de cette maintenance. Si cette date ne vous convient pas, par exemple pour des impératifs de production, vous pouvez reporter cette maintenance à une date de votre choix, via l'espace client OVHcloud ou l'API OVHcloud.

> [!primary]
> Nous essayons de nous adapter au maximum à votre utilisation de l'infrastructure et à vos contraintes. Cependant, nous devons parfois planifier des maintenances pour lesquelles il ne sera pas possible de modifier la date et/ou l'heure (maintenances d'infrastructure impliquant plusieurs clients, interventions urgentes pour éviter un incident, etc).
>
> Pour information, lorsqu'une date de maintenance peut être modifiée par vos soins, les nouvelles dates proposées sont comprises dans un intervalle de temps réduit.

**Découvrez comment reporter la date d'une maintenance programmée sur votre Hosted Private Cloud powered by VMware, depuis votre espace client OVHcloud ou l'API OVHcloud.**

## Prérequis

- Avoir reçu un e-mail de notification de maintenance indiquant spécifiquement que vous pouvez « **modifier la date d'exécution de la maintenance** ». Dans le cas contraire, la date de la maintenance ne peut pas être modifiée.
- Être contact administrateur ou technique de l'infrastructure [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/).
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)) ou à l'[interface d'administration de vos services par API](https://eu.api.ovh.com/).

## En pratique

> [!success]
> Les e-mails envoyés par OVHcloud sont également accessibles depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br>
> Cliquez sur votre nom en haut à droite de votre écran puis sur `E-mails de service`{.action} dans le menu de droite.

### Depuis l'espace client OVHcloud

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) avec un compte administrateur.

Dans le menu `Hosted Private Cloud`{.action}, cliquez sur l'onglet `Operations`{.action}. Sélectionnez `À faire`{.action} dans le menu déroulant permettant de filtrer les opérations.

Cliquez ensuite sur le bouton `...`{.action} puis sur `Modifier la date de traitement`{.action}.

![modification horaire](images/maintenance-date-edition01.png){.thumbnail}

> [!primary]
> Si le bouton `Modifier la date de traitement`{.action} est grisé, cela signifie que cette maintenance ne peut pas être reportée.

Sélectionnez une date dans le calendrier qui vous est présenté. Seules les dates non-grisées sont sélectionnables.<br>
Renseignez ensuite manuellement une nouvelle heure pour cette maintenance ou laissez inchangé l'horaire initialement prévu. Si vous dépassez la dernière heure autorisée, la dernière heure de programmation possible sera automatiquement proposée.<br>
**Attention !** Pour qu'il soit pris en compte, le nouvel horaire ne doit plus être surligné en bleu. Une fois que vous avez renseigné le nouvel horaire, cliquez à côté de celui-ci dans la fenêtre, afin que l'horaire ne soit plus surligné en bleu.

Enfin, cliquez sur le bouton `Modifier`{.action} pour valider vos modifications.

![modification horaire](images/maintenance-date-edition02.png){.thumbnail}

### Depuis l'API OVHcloud

Connectez-vous à l'[interface d'administration de vos services par API](https://eu.api.ovh.com/). Vous pouvez vous aider de notre guide « [Premiers pas avec les API OVHcloud](https://docs.ovh.com/fr/api/first-steps-with-ovh-api/) ».

Exécutez l'appel API suivant :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate
>

Renseignez les variables :

- serviceName : la référence de votre PCC sous la forme `pcc-XX-XX-XX-XX` ;
- taskId : il s'agit de la « référence de l'opération » de maintenance renseignée dans l'e-mail de notification qui vous a été envoyé ;
- executionDate: renseignez la nouvelle date de maintenance au format `YYYY-MM-DDTHH:MM+01:SS` (par exemple, 2023-01-02T08:00:00+01:00 pour une maintenance programmée le 02/01/2023 à 08h00 (UTC+1)).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.