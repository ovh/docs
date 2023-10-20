---
title: Comment résilier votre offre Managed Bare Metal 
excerpt: Découvrez comment demander la résiliation d'une infrastructure Managed Bare Metal
updated: 2020-11-18
---

## Objectif

Si votre offre Managed Bare Metal ne vous convient plus, ou que vous avez commandé une nouvelle infrastructure pour remplacer l'ancienne, vous pouvez demander la résiliation de cette infrastructure, une fois toutes vos données récupérées.

**Découvrez comment demander la résiliation d'une offre Managed Bare Metal** 

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} dans la partie `Bare Metal Cloud`{.action} puis `Managed Bare Metal`{.action}.
- Posséder un produit [Managed Bare Metal](https://www.ovhcloud.com/fr-ca/managed-bare-metal/){.external}.

## En pratique

>[!warning]
>
> Avant de résilier votre offre, veuillez prendre garde à récupérer toutes les données que vous souhaitez conserver. En effet, la résiliation entrainera la suppression intégrale de votre Managed Bare Metal et toutes les données qu'il contient.
>

### Étape 1 : demander la résiliation depuis l'espace client OVHcloud

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, accédez à la section `Bare Metal Cloud`{.action} (1), cliquez sur `Managed Bare Metal`{.action} (2) et sélectionnez votre offre dans la liste (3).

Dans le tableau « Gestion du service » de l'onglet « Informations Générales », cliquez sur le bouton `...`{.action} (4) à droite de la date de renouvellement. Cliquez enfin sur `Supprimer le service`{.action} (5).

![resiliation depuis l'espace client](images/resiliation1.png){.thumbnail}

Prenez alors connaissance du fait que cette action supprimera toute donnée présente sur l'infrastructure dès la confirmation de la résiliation. Aucun remboursement au prorata ne sera effectué si l'infrastructure est résiliée avant la fin du mois.

Cliquez sur `Valider`{.action} pour demander la résiliation.

![validation resiliation](images/resiliation2.png){.thumbnail}

Une notification de confirmation de votre demande vous sera alors présentée. La procédure de confirmation de la résiliation vous est envoyée par e-mail, à l'adresse liée au compte OVHcloud.

![validation resiliation](images/resiliation3.png){.thumbnail}

### Étape 2 : confirmer la résiliation

Suite à votre demande, un e-mail de confirmation de résiliation vous est envoyé à l'adresse liée au compte OVHcloud. 

Vous pouvez également retrouver cet e-mail dans votre espace client OVHcloud. Cliquez sur votre nom en haut à droite puis sur `E-mails de service`{.action}.

![validation resiliation](images/resiliation4.png){.thumbnail}

L'objet de l'e-mail est :

> **Suppression de votre Managed Bare Metal pcc-xxx-xxx-xxx-xxx**".

L'e-mail contient un lien cliquable qui vous permettra de confirmer la résiliation de votre offre.

> [!primary]
>
> Attention, ce lien est valable pendant **72 heures**. Nous vous conseillons donc de formuler votre demande de résiliation à partir du 25 du mois.
>

Vous pouvez également valider la demande de résiliation via l'API OVHcloud suivante :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/confirmTermination
>

Vous devrez alors renseigner le token de validation disponible dans l'e-mail de confirmation de résiliation.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
