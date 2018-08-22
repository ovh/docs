---
title: 'Configurer la présentation de son numéro'
slug: gerer-la-presentation-du-numero-sur-votre-ligne-sip
excerpt: 'Découvrez comment configurer la présentation du numéro de votre ligne OVH'
section: 'Lignes téléphoniques'
---

**Dernière mise à jour le 22/08/2018**

## Objectif

Votre ligne téléphonique OVH vous permet de recevoir et d'émettre des appels. Selon vos besoins, vous avez la possibilité de modifier le numéro présenté à vos correspondants ou de rester anonyme lorsque vous lancez une communication.

**Découvrez comment configurer la présentation du numéro de votre ligne OVH.**

## Prérequis

- Disposer de l'une des combinaisons de services ci-contre : « au moins deux [lignes VoIP OVH](https://www.ovhtelecom.fr/telephonie/voip/){.external} » ou « au moins une [ligne VoIP OVH](https://www.ovhtelecom.fr/telephonie/voip/){.external} et un [numéro alias OVH](https://www.ovhtelecom.fr/telephonie/numeros/){.external} » ou « une ligne Trunk ».
- Posséder un [forfait compatible](https://www.ovhtelecom.fr/telephonie/services_inclus/){.external} avec le service « Fonctionnalités du téléphone ».
- Être connecté à l'[espace client OVH](https://www.ovhtelecom.fr/manager/auth/?action=gotomanager){.external}, partie `Télécom`{.action}.

## En pratique

Même si le principe de la présentation du numéro reste le même, la manipulation sera différente selon la ligne que vous souhaitez configurer. Poursuivez la lecture de cette documentation en fonction de celle que vous souhaitez gérer.

- [Configurer la présentation du numéro d'une ligne SIP](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#configurer-la-presentation-du-numero-dune-ligne-sip){.external}.
- [Configurer la présentation du numéro d'une ligne Trunk](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#configurer-la-presentation-du-numero-dune-ligne-trunk){.external}.

### Configurer la présentation du numéro d'une ligne SIP

Pour démarrer la manipulation, connectez-vous à votre [espace client OVH](https://www.ovhtelecom.fr/manager/auth/?action=gotomanager){.external}, partie Télécom. Cliquez sur `Téléphonie`{.action} dans la barre de services à gauche, puis sélectionnez la ligne concernée.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero](images/display-incoming-call-step1.png){.thumbnail}

La page qui s'affiche vous indique l'état actuel de la présentation du numéro. Par défaut, votre numéro est présenté. Vous avez cependant la possibilité de choisir deux autres configurations :

|Configuration|Description|
|---|---|  
|Rester anonyme|Permet de ne plus présenter votre numéro lorsque vous émettez un appel. Pour valider ce choix, cochez la case `Rester anonyme`{.action}. Vous pouvez également activer cette configuration grâce à un code à taper sur votre combiné (voir la documentation « [Activer ou désactiver des services depuis le téléphone](https://docs.ovh.com/fr/voip/activer-desactiver-services-depuis-telephone/){.external} »).|
|Présenter un autre numéro|Permet de présenter un numéro différent de celui de la ligne sélectionnée lorsque vous émettez un appel (par exemple, pour masquer le numéro direct d'un de vos collaborateurs en affichant celui de votre standard téléphonique). Pour cela, cliquez sur `Choisir un autre numéro`{.action}, puis sélectionnez celui souhaité dans la liste. Seuls les numéros rattachés à vos groupes de facturation apparaissent dans la liste.|

Une fois votre choix fait, cliquez sur le bouton `Appliquer les modifications`{.action}. Vous pouvez aussi cliquer sur `Appliquer à plusieurs lignes`{.action} pour dupliquer les paramètres sur d’autres lignes OVH.

![configurer-presentation-numero](images/display-incoming-call-step2.png){.thumbnail}

### Configurer la présentation du numéro d'une ligne Trunk

Vous pouvez opter pour quatre autres configurations de présentation du numéro. La manipulation à réaliser sera différente selon celle que vous choisirez.

|Configuration|Description|Mise en place|
|---|---|---|
|Ne plus présenter de manière unique son numéro|Tant que la configuration est en place, permet de ne plus présenter votre numéro lorsque vous émettez un appel.|Depuis l'espace client OVH|
|Présenter de manière unique un numéro OVH|Tant que la configuration est en place, permet de présenter un numéro OVH défini.|Depuis l'espace client OVH|
|Présenter de manière unique un numéro externe|Tant que la configuration est en place, permet de présenter un numéro externe défini (sous réserve de validation de ce dernier).|Depuis l'espace client OVH|
|Présenter ou masquer de manière unique ou « à la volée » un numéro OVH ou externe|Permet de présenter ou masquer de manière statique, ponctuelle ou « à la volée » les lignes que vous gérez sur votre équipement IPBX.|Depuis votre propre équipement IPBX|

Dès que vous êtes prêt, poursuivez la lecture de cette documentation en fonction de la configuration que vous souhaitez mettre en place.

- [Ne plus présenter de manière unique son numéro](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#ne-plus-presenter-de-maniere-unique-son-numero){.external} (depuis l'espace client).
- [Présenter de manière unique un numéro OVH](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#presenter-de-maniere-unique-un-numero-ovh){.external} (depuis l'espace client).
- [Présenter de manière unique un numéro externe](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#presenter-de-maniere-unique-un-numero-externe){.external} (depuis l'espace client).
- [Présenter de manière unique ou « à la volée » un numéro OVH ou externe](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#presenter-de-maniere-unique-ou-a-la-volee-un-numero-ovh-ou-externe){.external} (depuis votre propre équipement IPBX).

#### Ne plus présenter de manière unique son numéro

Connectez-vous à votre [espace client OVH](https://www.ovhtelecom.fr/manager/auth/?action=gotomanager){.external}, partie Télécom. Cliquez sur `Téléphonie`{.action} dans la barre de services à gauche, puis sélectionnez la ligne Trunk concernée.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step1.png){.thumbnail}

La page qui s'affiche vous indique la configuration actuelle de la présentation du numéro. Par défaut, votre numéro est présenté. Pour le masquer, cochez la case `Rester anonyme`{.action}, puis cliquez sur le bouton `Appliquer les modifications`{.action}. Vous avez aussi la possibilité de cliquer sur `Appliquer à plusieurs lignes`{.action} pour dupliquer ce paramètre sur d’autres lignes OVH.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-anonymous-step1.png){.thumbnail}

#### Présenter de manière unique un numéro OVH

> [!primary]
> 
> En choisissant de présenter un numéro (le vôtre ou un autre), vous ne pourrez plus administrer la présentation de numéro depuis votre propre équipement IPBX. Si vous souhaitez la gérer depuis ce dernier, reportez-vous à la section « [Présenter de manière unique ou « à la volée » un numéro OVH ou externe](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#presenter-de-maniere-unique-ou-a-la-volee-un-numero-ovh-ou-externe){.external} » de cette documentation.
> 

Connectez-vous à votre [espace client OVH](https://www.ovhtelecom.fr/manager/auth/?action=gotomanager){.external}, partie Télécom. Cliquez sur `Téléphonie`{.action} dans la barre de services à gauche, puis sélectionnez la ligne Trunk concernée.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step1.png){.thumbnail}

La page qui s'affiche vous indique la configuration actuelle de la présentation du numéro. Par défaut, votre numéro est présenté. Pour en présenter un autre, cliquez sur `Choisir un autre numéro`{.action}, puis sélectionnez celui souhaité dans la liste. Seuls les numéros rattachés à vos groupes de facturation apparaissent ici. Si vous ne le trouvez pas, reportez-vous à la section « [Présenter de manière unique un numéro externe](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#presenter-de-maniere-unique-un-numero-externe){.external} » de cette documentation.

Une fois votre choix fait, cliquez sur le bouton `Appliquer les modifications`{.action}. Vous avez aussi la possibilité de cliquer sur `Appliquer à plusieurs lignes`{.action} pour dupliquer les paramètres sur d’autres lignes OVH.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step2.png){.thumbnail}

#### Présenter de manière unique un numéro externe

> [!primary]
> 
> En choisissant de présenter un numéro externe, vous ne pourrez plus administrer la présentation de numéro depuis votre propre équipement IPBX. Si vous souhaitez la gérer depuis ce dernier, reportez-vous à la section « [Présenter de manière unique ou « à la volée » un numéro OVH ou externe](https://docs.ovh.com/fr/voip/gerer-la-presentation-du-numero-sur-votre-ligne-sip/#presenter-de-maniere-unique-ou-a-la-volee-un-numero-ovh-ou-externe){.external} » de cette documentation.
> 

Connectez-vous à votre [espace client OVH](https://www.ovhtelecom.fr/manager/auth/?action=gotomanager){.external}, partie Télécom. Cliquez sur `Téléphonie`{.action} dans la barre de services à gauche, puis sélectionnez la ligne Trunk concernée.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation d'un numéro externe`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step3.png){.thumbnail}

La page qui s'affiche liste les numéros externes déjà ajoutés dans un tableau et vous donne la possibilité d'en ajouter d'autres (tant que le nombre maximal autorisé n'est pas atteint).

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step4.png){.thumbnail}

Pour ajouter un nouveau numéro externe, renseignez ce dernier au format international (par exemple, 0033100000000 pour un numéro français) dans la zone de texte à côté de `Numéro externe`, puis cliquez sur `Ajouter`{.action}. Un code de validation apparaît alors.

Sous quelques minutes, le numéro renseigné recevra un appel. Décrochez et indiquez alors le code de validation par le biais du clavier de votre téléphone. Si tout est correct, le numéro affichera un statut « Validé » dans le tableau.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step5.png){.thumbnail}

Repositionnez-vous ensuite sur l'onglet `Gestion des appels`{.action}, puis cliquez sur `Présentation du numéro`{.action}. La page qui s'affiche vous indique la configuration actuelle de la présentation du numéro. Par défaut, votre numéro est présenté. Pour en présenter un autre, cliquez sur `Choisir un autre numéro`{.action} et sélectionnez en dessous de « externes » celui souhaité dans la liste. Si celui-ci n'apparaît pas, assurez-vous qu'il dispose bien du statut « Validé ».

Une fois votre choix fait, cliquez sur le bouton `Appliquer les modifications`{.action}. Vous avez aussi la possibilité de cliquer sur `Appliquer à plusieurs lignes`{.action} pour dupliquer les paramètres sur d’autres lignes OVH.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step6.png){.thumbnail}

#### Présenter de manière unique ou « à la volée » un numéro OVH ou externe

> [!warning]
>
> Avant de poursuivre, assurez-vous que  :
>
> - le numéro que vous souhaitez présenter n'est pas associé à une ligne OVH (SIP ou Trunk, par exemple). Seuls les numéros alias pourront être présentés ; 
> 
> - le numéro pour lequel vous souhaitez modifier la présentation dispose bien d'une redirection avec présentation. Si besoin, reportez-vous aux instructions décrites dans notre documentation « [Créer une redirection avec présentation](https://docs.ovh.com/fr/voip/creer-redirection-avec-presentation/){.external} ».
>

Vous devez dans un premier temps désactiver la présentation du numéro depuis votre [espace client OVH](https://www.ovhtelecom.fr/manager/auth/?action=gotomanager){.external}. Pour cela, connectez-vous à ce dernier, partie Télécom. Cliquez sur `Téléphonie`{.action} dans la barre de services à gauche, puis sélectionnez la ligne Trunk concernée.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step1.png){.thumbnail}

La page qui s'affiche vous indique la configuration actuelle de la présentation du numéro. Cochez la case `Rester anonyme`{.action}, puis cliquez sur le bouton `Appliquer les modifications`{.action}. Vous avez aussi la possibilité de cliquer sur `Appliquer à plusieurs lignes`{.action} pour dupliquer ce paramètre sur d’autres lignes OVH.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-anonymous-step1.png){.thumbnail}

Vous pouvez à présent configurer la présentation du numéro sur votre équipement IPBX. 

> [!warning]
> 
> Des connaissances avancées sur l'équipement que vous utilisez sont nécessaires pour pouvoir le configurer. Nous vous recommandons de faire appel à un prestataire spécialisé ou de vous rapprocher du constructeur de l'équipement si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos. 
>  

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.