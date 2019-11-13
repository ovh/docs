---
title: Gérer le paiement et la facturation de vos services OVH
excerpt: Entrer, automatiser et gérer le paiement ainsi que la facturation Entreprise
slug: ovh-enterprise-payment
section: OVH APIv6
---

**Dernière mise à jour le 06/11/2019**

## Objectif

Nous allons décrire une partie du cycle de gestion de votre paiement et de votre facturation Entreprise chez OVHcloud

## Prérequis

* Être connecté aux [API OVH](https://api.ovh.com/console){.external}.
* Avoir [créé ses identifiants pour l'API OVH](https://api.ovh.com/g934.first_step_with_api){.external}.
* Avoir [créé des sous-comptes pour l'API OVH si nécéssaire](https://docs.ovh.com/fr/api/ovh-api-sub-account/){.external}.
* Avoir à minima le niveau de support de type Business ou Enterprise

## En pratique


### Ressources

* /me/bill

### Déroulement des opérations


####  Ajout du moyen de paiement de type virement SEPA 

Contacter votre commercial en précisant le délai de paiement souhaité (exemple: 30 ou 45 ou 60 jours en France)

Des attributs supplémentaires seront rajoutés à votre compte pour autoriser le moyen de paiement de type virement SEPA, pour indiquer le délai de paiement et pour activer l'autorenew permanent

Dans l'APIv6, dans vos moyens de paiement apparaitra un nouveau de paiement appelé avec un nom du type : **PaymentEnterprisewithxxdaysdelays**

####  Récupérer les factures des sous-comptes

Utiliser l'id de votre sous-compte obtenu et la consumerkey afin de vous connecter sur l'APIv6. 

Récupérer la liste des factures associées à ce sous-compte

> [!api]
>
> @api {GET} /me/bill
>

Récupérer la facture détaillée grâce l'identifiant de votre facture billID

> [!api]
>
> @api {GET}  /me/bill/{billId}/details
>

#### 

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
