---
title: 'Gérer le paiement et la facturation de vos services OVHcloud'
excerpt: 'Découvrez comment ajouter un moyen de paiement, automatiser sa prise en compte et gérer votre facturation Entreprise'
updated: 2020-01-02
---

## Objectif

Nous allons décrire une partie du cycle de gestion de votre paiement et de votre facturation Entreprise chez OVHcloud.

## Prérequis

* Être connecté aux [API OVHcloud](https://api.ovh.com/){.external}.
* Avoir [créé ses identifiants pour l'API OVHcloud](/pages/manage_and_operate/api/first-steps){.external}.
* Avoir [créé des sous-comptes pour l'API OVHcloud si nécéssaire](/pages/manage_and_operate/api/account){.external}.
* Avoir a minima le niveau de support de type Business ou Enterprise.

## En pratique

### Ressources

* /me/bill

### Déroulement des opérations

#### Ajouter un moyen de paiement de type virement SEPA 

Contactez votre commercial en précisant que vous souhaitez avoir un moyen de paiement de type virement SEPA ainsi que le délai de paiement souhaité (exemple: 30, 45 ou 60 jours en France).

Des attributs supplémentaires seront rajoutés à votre compte pour autoriser le moyen de paiement de type virement SEPA, pour indiquer le délai de paiement et pour activer le renouvellement automatique permanent.

Dans l'APIv6 et dans votre manager, dans vos moyens de paiement apparaitra un nouvel élément intitulé : **PaymentEnterprisewithxxdaysdelays**.

> [!api]
>
> @api {v1} /me GET /me/payment/method
>

#### Comment renseigner un numéro de "Purchase Order" (PO)

Afin que OVHcloud puisse éditer les factures avec le numéro de **Purchase Order (PO)** souhaité, contactez votre commercial afin de lui donner ce numéro.

En cas de modification de ce numéro de **PO**, contactez votre commercial dans les plus brefs délais.

#### Récupérer les factures des sous-comptes

Utilisez l'id de votre sous-compte obtenu et la consumerkey afin de vous connecter sur l'APIv6. 

Récupérez la liste des factures associées à ce sous-compte :

> [!api]
>
> @api {v1} /me GET /me/bill
>

Récupérez la facture détaillée grâce à l'identifiant de votre facture billID :

> [!api]
>
> @api {v1} /me GET /me/bill/{billId}/details
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
