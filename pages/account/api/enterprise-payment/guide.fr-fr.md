---
title: 'Gérer le paiement et la facturation de vos services OVHcloud'
slug: ovh-enterprise-payment
excerpt: 'Découvrez comment ajouter un moyen de paiement, automatiser sa prise en compte et gérer votre facturation Entreprise'
section: 'OVH APIv6'
---

**Dernière mise à jour le 06/11/2019**

## Objectif

Nous allons décrire une partie du cycle de gestion de votre paiement et de votre facturation Entreprise chez OVHcloud.

## Prérequis

* Être connecté aux [API OVHcloud](https://api.ovh.com/console){.external}.
* Avoir [créé ses identifiants pour l'API OVHcloud](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.
* Avoir [créé des sous-comptes pour l'API OVHcloud si nécéssaire](https://docs.ovh.com/fr/api/ovh-api-sub-account/){.external}.
* Avoir a minima le niveau de support de type Business ou Enterprise.

## En pratique


### Ressources

* /me/bill

### Déroulement des opérations


#### Ajouter un moyen de paiement de type virement SEPA 

Contactez votre commercial en précisant le délai de paiement souhaité (exemple: 30 ou 45 ou 60 jours en France)

Des attributs supplémentaires seront rajoutés à votre compte pour autoriser le moyen de paiement de type virement SEPA, pour indiquer le délai de paiement et pour activer le renouvellement automatique permanent.

Dans l'APIv6, dans vos moyens de paiement apparaitra un nouvel élément intitulé : **PaymentEnterprisewithxxdaysdelays**

#### Récupérer les factures des sous-comptes

Utilisez l'id de votre sous-compte obtenu et la consumerkey afin de vous connecter sur l'APIv6. 

Récupérez la liste des factures associées à ce sous-compte :

> [!api]
>
> @api {GET} /me/bill
>

Récupérez la facture détaillée grâce à l'identifiant de votre facture billID :

> [!api]
>
> @api {GET}  /me/bill/{billId}/details
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
