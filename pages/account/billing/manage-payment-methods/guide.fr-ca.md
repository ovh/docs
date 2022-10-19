---
title: Gérer mes moyens de paiement
slug: manage-payment-methods
excerpt: Apprenez à ajouter et gérer vos moyens de paiement au sein de l’espace client OVHcloud
section: Facturation
order : 02
---

**Dernière mise à jour le 09/05/2022**

## Objectif

L'espace client OVHcloud vous permet d'enregistrer et gérer différents moyens de paiement.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/696215450?h=0b07baf719&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Disposer d'un moyen de paiement valide.

## En pratique <a name="payment_methods"></a>

Dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), cliquez sur votre nom en haut à droite puis sélectionnez `Moyen de paiement`{.action}.

![hubpayment](images/hubpayment.png){.thumbnail}

La page qui s’affiche contient un tableau répertoriant les moyens de paiement enregistrés sur votre compte client. Vous pourrez y :

- Ajouter un moyen de paiement
- Modifier votre moyen de paiement par défaut
- Modifier la description de votre moyen de paiement
- Supprimer un moyen de paiement

### Ajouter un moyen de paiement

Lors de votre première commande, il vous est demandé d'enregistrer un moyen de paiement, afin d'assurer le renouvellement de votre service par prélèvement automatique.

Ce moyen de paiement est alors utilisé par défaut pour tous vos renouvellements et vous est proposé pour régler de nouvelles commandes.

Vous avez la possibilité d'enregistrer d'autres moyens de paiement, afin qu'ils vous soient proposés lors de vos nouvelles commandes ou utilisés par défaut pour vos futurs prélèvements.

Il est possible d'enregistrer 2 types de moyens de paiement :

- Carte bancaire
- Compte bancaire

Pour cela, cliquez simplement sur le bouton `Ajouter un moyen de paiement`{.action}.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Choisissez la méthode de paiement que vous souhaitez utiliser : 

![choose-payment-method-no-sepa](images/choose-payment-method-no-sepa.png){.thumbnail}

Suivez les étapes successives d'enregistrement du moyen de paiement. A la première étape, il vous est proposé de cocher la case `Je veux sélectionner ce moyen de paiement par défaut dès sa validation`{.action}, afin qu'il soit utilisé pour vos futurs achats ou prélèvements automatiques.

#### Carte bancaire

![credit-card-no-sepa](images/credit-card-no-sepa.png){.thumbnail}

Pour enregistrer une nouvelle carte bancaire, vous serez redirigé vers l'interface sécurisée de notre prestataire de paiement. Une empreinte financière est faite auprès de votre organisme bancaire afin de valider la saisie et la validité de votre carte.<br>
Aucun montant ne sera prélevé et votre carte bancaire sera activée au bout de quelques minutes.

#### Compte paypal

![paypal_no_sepa](images/paypal_no_sepa.png){.thumbnail}

Cliquez sur le bouton `Paypal`{.action}. Une fenêtre contextuelle s'ouvrira alors pour vous connecter à votre compte Paypal&#174; et enregistrer celui-ci comme moyen de paiement autorisé auprès de OVHcloud.

Votre compte Paypal&#174; sera activé sous quelques minutes.

### Modifier votre moyen de paiement par défaut

Les factures de renouvellement de vos services sont toujours prélevées sur votre moyen de paiement par défaut. Si vous souhaitez modifier celui-ci, il vous faut d'abord ajouter un nouveau moyen de paiement dans votre espace client.

Cliquez alors sur le bouton `...`{.action} à droite du nouveau moyen de paiement, puis sur `Définir ce moyen de paiement par défaut`{.action}.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

> **Je souhaite remplacer mon moyen de paiement par défaut par un autre, comment faire ?**
>
> - Étape 1 : ajoutez le nouveau moyen de paiement
> - Étape 2 : définissez le nouveau moyen de paiement comme moyen de paiement par défaut
> - Étape 3 : supprimez l'ancien moyen de paiement
>

### Supprimer un moyen de paiement

Si vous ne souhaitez plus utiliser l'un de vos moyens de paiement, vous pouvez le supprimer en cliquant sur le bouton `...`{.action} à droite de celui-ci. Cliquez alors sur `Supprimer ce moyen de paiement`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

Si vous souhaitez supprimer l'intégralité de vos moyens de paiement, l'ensemble de vos services doit être en [renouvellement manuel](https://docs.ovh.com/ca/fr/billing/renouvellement-automatique-ovh/#le-renouvellement-manuel).

#### Supprimer un moyen de paiement via les API OVHcloud

La suppression d'un moyen de paiement peut être effectuée via les API en vous connectant sur [https://eu.api.ovh.com/](https://eu.api.ovh.com/).

Commencez par obtenir l'ID du moyen de paiement :

> [!api]
>
> @api {GET} /me/payment/method
>

Supprimez ensuite le moyen de paiement en utilisant l’ID que vous avez obtenu à l’étape précédente :

> [!api]
>
> @api {DELETE} /me/payment/method/{paymentMethodId}
>

> [!primary]
>
> Pour plus d'informations, consultez le guide [Premiers pas avec les API OVHcloud](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/).
>
> En cas de difficultés pour identifier vos moyens de paiement via les API OVHcloud, utilisez la fonction `Modifier la description`{.action} (bouton `...`{.action} à droite de votre écran) dans la partie [Moyens de paiement](#payment_methods) de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
>

### Le compte prépayé

#### Qu'est-ce que le compte prépayé ?

Le *compte prépayé* est présent sur votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) dès sa création. Il vous permet de créditer à l'avance votre compte client et d'utiliser ces fonds pour le règlement de vos commandes et de vos factures de renouvellement.

En créditant régulièrement votre compte, vous vous assurerez ainsi que le [renouvellement automatique](https://docs.ovh.com/ca/fr/billing/renouvellement-automatique-ovh/) de vos services ne sera jamais interrompu pour défaut de paiement.

Pour cela, il vous suffit de vous rendre dans la section `Moyens de paiement` de votre espace client :

- cliquez en haut à droite sur votre nom puis sur `Moyen de paiement`{.action} dans le menu de droite;
- sélectionnez l'onglet `Mon compte prépayé`{.action}.

![prepaid-account](images/prepaid-account.png){.thumbnail}

#### Comment fonctionne t-il ?

A chaque échéance, lorsque vous possédez des services paramétrés en *renouvellement automatique*, le montant de votre facture est prioritairement prélevé sur votre compte prépayé.

En l'absence de fonds suffisants, le solde de votre compte passera en négatif et restera en attente de paiement.

Si vous disposez d'un moyen de paiement valide enregistré sur votre compte client, ce montant sera automatiquement prélevé dans les 24 heures et votre solde remis à zéro. Ceci sans aucun impact sur l'état de vos services.

En revanche, si vous n'avez pas enregistré de moyen de paiement, vous devrez régler ce solde depuis votre espace client sous 7 jours pour éviter toute coupure de service.

Si vous n'avez pas de moyen de paiement enregistré, nous vous recommandons donc de paramétrer un **seuil d'alerte**, afin de vous assurer que vous disposerez des fonds suffisants pour vos prochaines factures :

![warning_prepaid_account](images/warning_prepaid_account.png){.thumbnail}

Si le crédit disponible sur votre compte prépayé descend sous la limite définie, un e-mail de notification vous sera immédiatement envoyé.

#### Comment créditer votre compte prépayé ?

Dans l'onglet `Mon compte prépayé`{.action}, cliquez sur le bouton `Créditer`{.action}.

![credit-prepaid-account](images/credit-prepaid-account.png){.thumbnail}

Dans la fenêtre qui s'affiche, indiquez le montant à créditer, cliquez sur `Suivant`{.action} puis sur `Commander`{.action}.

![order-prepaid-account](images/order-prepaid-account.png){.thumbnail}

Sur le bon de commande qui s'affiche, sélectionnez le moyen de paiement de votre choix et réglez votre commande.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
