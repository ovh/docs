---
title: Comment changer mon offre xDSL/Fibre
excerpt: "Découvrez comment modifier votre offre d'accès Internet depuis votre espace client OVHcloud"
updated: 2026-01-15
---

## Objectif

Vous pouvez faire évoluer votre offre xDSL/Fibre afin de pouvoir accéder à de nouvelles fonctionnalités et services.

> [!success]
> Retrouvez les offres et débits disponibles à votre adresse grâce à [notre outil d'éligibilité](https://order.isp.ovh.net/).
>
> Vous souhaitez migrer vers la Fibre ? Consultez notre guide « [Fin du cuivre - Comment migrer mon offre xDSL vers la Fibre ?](/pages/web_cloud/internet/internet_access/end_of_copper_migration_ftth) ».

## Prérequis

- Disposer d'un accès xDSL/Fibre actif.
- Disposer d'une offre éligible au changement d'offre.
- Être connecté à l’[espace client OVHcloud](/links/manager), partie `Télécom` :

![espace client Telecom Accès Internet](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-01-fr-internet.png){.thumbnail}

> [!primary]
> Le changement d'offre n'est pas disponible sur les offres SDSL.
>

## En pratique

### Conservation des options

Les options suivantes ne peuvent pas être conservées en tant qu'**options incluses** dans les nouvelles offres Fibre Pro et xDSL Pro :

- Nom de domaine
- EcoFax Pro
- Compte(s) Exchange

Lors d'un changement d'offre vers les nouvelles offres Fibre Pro et xDSL Pro, vous pourrez choisir de résilier ces options ou de les conserver aux tarifs en vigueur.

> [!primary]
>
> Lors d'un changement d'offre xDSL vers Fibre, l'adresse IP publique de l'accès xDSL ne peut pas être conservée.
>
> Si un [bloc IP /29](/pages/web_cloud/internet/internet_access/comment_commander_et_gerer_un_bloc_ip_29) est actif sur l'offre actuelle, il sera automatiquement conservé. Vous recevrez un e-mail indiquant la date de migration des adresses IP du bloc vers le nouvel accès, et vous aurez la possibilité d'avancer cette migration via API si besoin.
>

### Changer d’offre

Pour changer d'offre, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager) et cliquez sur `Télécom`{.action}.
1. Cliquez sur `Offres Internet`{.action} puis sur le *Pack* contenant l'accès à Internet concerné.
1. Cliquez ensuite sur `Changer d'offre`{.action} dans le cadre « Informations Générales ».

![changement d'offre](images/changement-offre.png){.thumbnail}

Sur la page suivante, retrouvez les informations nécessaires pour effectuer votre choix d'offre.

La première colonne du tableau récapitule votre offre actuelle (son nom, son prix et les services actifs). Les autres colonnes concernent les offres auxquelles vous pouvez souscrire, compte tenu de votre adresse actuelle.<br>
Sélectionnez les options souhaitées (lignes téléphoniques, comptes e-mail, Garantie de Temps de Rétablissement) puis cliquez sur le bouton `Choisir cette offre`{.action} sous la colonne correspondant à l'offre que vous souhaitez souscrire.

> [!primary]
> Si vous souhaitez conserver les lignes téléphoniques de votre offre actuelle, veillez à ajouter un nombre équivalent de lignes dans votre nouvelle offre.

![choix de l'offre](images/changement-offre-details.png){.thumbnail}

Selon l'offre choisie, sélectionnez les informations requises.

> [!success]
> La Fibre ne vous est pas proposée ? Il peut s'agir d'une divergence d'adresses dans les bases de données.<br>
> Vérifiez votre situation en consultant notre guide « [Fin du cuivre - Comment migrer mon offre xDSL vers la Fibre ?](/pages/web_cloud/internet/internet_access/end_of_copper_migration_ftth) ».

> [!tabs]
> xDSL Pro
>>
>> ![conservation des services](images/services2023.png){.thumbnail}
>>
>> Cochez les cases des services à conserver et cliquez sur `Confirmer la sélection des services`{.action}.
>>
> Fibre Pro
>> 
>> ![changement offre fibre](images/changement-offre-fibre.png){.thumbnail}
>>
>> Indiquez les informations relatives à votre habitation, répondez à la question concernant votre boîtier fibre PTO et cliquez sur `Confirmer la sélection`{.action}.
>>
>> ![conservation des services](images/services2023.png){.thumbnail}
>>
>> Cochez les cases des services à conserver et cliquez sur `Confirmer la sélection des services`{.action}.
>>
>> À l'étape suivante, sélectionnez les informations du rendez-vous et cliquez sur `Confirmer la sélection`{.action}.

Lors de la dernière étape, une demande de confirmation apparaît afin de valider le changement d'offre.<br>
Lisez les contrats, cochez la case afin de les accepter puis cliquez sur le bouton `Valider le changement d'offre`{.action}.

Comptez un délai d'une heure pour que le changement soit effectif, sauf pour les cas particuliers suivants :

- en cas de remplacement du modem. Un délai de livraison de 24 à 48 heures est alors à prendre en compte suite à l'expédition du modem.
- en cas de changement de collecte cuivre (un changement physique au niveau de la ligne qui implique une demande auprès de l'opérateur de collecte). Un délai moyen de 7 à 10 jours peut alors être constaté, ainsi qu'une coupure probable du service.
- en cas de passage d'une offre cuivre (ADSL/VDSL) vers une offre Fibre (FTTH). Un délai moyen de 10 à 30 jours est nécessaire à la réalisation de votre nouvel accès Internet Fibre. Dans ce cas précis nous créons, en parallèle de votre *packadsl*, un nouveau *packadsl* temporaire afin de pouvoir réaliser la commande Fibre tout en continuant de garder votre accès cuivre fonctionnel et inchangé. Ce *packadsl* temporaire sera supprimé dès lors que l'accès Fibre sera livré. L'accès Fibre viendra remplacer votre accès cuivre dans votre *packadsl* originel.

> [!warning]
>
> Aucune action de modification ou de suppression de votre part n'est nécessaire. Le passage vers votre nouvel accès Fibre ou cuivre se fera de manière entièrement automatisée.
> 

En fonction de votre offre actuelle, un remplacement du modem peut s'avérer nécessaire. Cela vous sera indiqué lors du choix de votre nouvelle offre.

Les nouveaux services liés à votre nouvelle offre Pro seront accessibles une fois le changement d'offre effectif. 

## Aller plus loin

[VoIP / Accès Internet - Déroulement d'un RMA](/pages/web_cloud/phone_and_fax/voip/deroulement_d_un_rma)

Échangez avec notre [communauté d'utilisateurs](/links/community).
