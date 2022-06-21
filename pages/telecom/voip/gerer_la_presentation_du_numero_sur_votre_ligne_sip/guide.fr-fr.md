---
title: 'Configurer la présentation de son numéro'
slug: gerer-la-presentation-du-numero-sur-votre-ligne-sip
excerpt: 'Découvrez comment configurer la présentation du numéro de votre ligne OVHcloud'
section: 'Lignes téléphoniques'
---

**Dernière mise à jour le 21/06/2022**

## Objectif

Votre ligne téléphonique OVHcloud vous permet de recevoir et d'émettre des appels. Selon vos besoins, vous avez la possibilité de modifier l'affichage présenté (ligne ou numéro alias) à vos correspondants ou de rester anonyme lor d'un appel sortant.

**Découvrez comment configurer la présentation du numéro de votre ligne OVHcloud.**

## Prérequis

- Disposer de (au choix) :
    - deux [lignes VoIP OVHcloud](https://www.ovhtelecom.fr/telephonie/voip/){.external};
    - une [ligne VoIP OVHcloud](https://www.ovhtelecom.fr/telephonie/voip/) et un [numéro alias OVHcloud](https://www.ovhtelecom.fr/telephonie/numeros/);
    - une [ligne Trunk](https://www.ovhtelecom.fr/telephonie/sip-trunk/);
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie `Télécom` :

![espace client Telecom VoIP](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-02-fr-voip.png){.thumbnail}

## En pratique

Même si le principe de la présentation du numéro reste le même, la manipulation sera différente selon le service (ligne SIP ou ligne Trunk) que vous souhaitez configurer. Poursuivez la lecture de cette documentation en fonction du service que vous souhaitez gérer.

- [Configurer la présentation du numéro d'une ligne SIP](#sip)
- [Configurer la présentation du numéro d'une ligne Trunk](#trunk)

### Configurer la présentation du numéro d'une ligne SIP <a name="sip"></a>

Pour démarrer la manipulation, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Télécom`. Cliquez sur `Téléphonie`{.action} puis sélectionnez la ligne concernée.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero](images/display-incoming-call-step1.png){.thumbnail}

La page qui s'affiche vous indique l'état actuel de la présentation du numéro. Par défaut, le numéro de votre ligne est présenté. Vous avez cependant la possibilité de choisir deux autres configurations :

|Configuration|Description|
|---|---|  
|Rester anonyme|Permet de masquer votre numéro lorsque vous émettez un appel. Pour valider ce choix, cochez la case `Rester anonyme`{.action}. Vous pouvez également activer cette configuration grâce à un code à taper sur votre combiné (voir la documentation [Activer ou désactiver des services depuis le téléphone](../activer-desactiver-services-depuis-telephone/)).|
|Présenter un autre numéro|Permet de présenter un numéro différent de celui de la ligne sélectionnée lorsque vous émettez un appel (par exemple, pour masquer le numéro direct d'un de vos collaborateurs en affichant celui de votre standard téléphonique). Pour cela, cliquez sur `Choisir un autre numéro`{.action}, puis sélectionnez celui souhaité dans la liste. Seuls les numéros rattachés à vos groupes de facturation apparaissent dans la liste.|

Une fois votre choix fait, cliquez sur le bouton `Appliquer les modifications`{.action}. Vous pouvez aussi cliquer sur `Appliquer à plusieurs lignes`{.action} pour dupliquer les paramètres sur d’autres lignes OVHcloud.

![configurer-presentation-numero](images/display-incoming-call-step2.png){.thumbnail}

### Configurer la présentation du numéro d'une ligne Trunk <a name="trunk"></a>

Dans le cas d'une offre Trunk, voici les configurations possibles.

|Configuration|Description|Mise en place|
|---|---|---|
|Rester anonyme|Permet de masquer votre numéro lorsque vous émettez un appel.|Depuis l'espace client OVHcloud|
|Présenter de manière unique un numéro OVHcloud|Permet de présenter un numéro OVHcloud défini.|Depuis l'espace client OVHcloud|
|Présenter « à la volée » un numéro OVHcloud|Permet de présenter « à la volée » les alias en redirection avec présentation vers votre ligne Trunk.|Depuis votre propre équipement IPBX|
|Présenter « à la volée » un numéro externe|Permet de présenter « à la volée » les numéros externes validés.|Depuis votre propre équipement IPBX|

Dès que vous êtes prêt, poursuivez la lecture de cette documentation en fonction de la configuration que vous souhaitez mettre en place.

- [Rester anonyme](#rester-anonyme) (depuis l'espace client OVHcloud).
- [Présenter de manière unique un numéro OVHcloud](#presenter-numero-unique) (depuis l'espace client OVHcloud).
- [Présenter « à la volée » un numéro OVHcloud](#presenter-numero-volee) (depuis votre propre équipement IPBX).
- [Présenter « à la volée » un numéro externe](#presenter-numero-volee-externe) (depuis votre propre équipement IPBX).

#### Rester anonyme <a name="rester-anonyme"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie Télécom. Cliquez sur `Téléphonie`{.action} puis sélectionnez le groupe de téléphonie concerné et enfin la ligne Trunk.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step1.png){.thumbnail}

La page qui s'affiche vous indique la configuration actuelle de la présentation du numéro. Par défaut, le numéro de votre ligne est présenté. Pour le masquer, cochez la case `Rester anonyme`{.action}, puis cliquez sur le bouton `Appliquer les modifications`{.action}. Vous avez aussi la possibilité de cliquer sur `Appliquer à plusieurs lignes`{.action} pour dupliquer ce paramètre sur d’autres lignes OVHcloud.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-anonymous-step1.png){.thumbnail}

#### Présenter de manière unique un numéro OVHcloud <a name="presenter-numero-unique"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie Télécom. Cliquez sur `Téléphonie`{.action} puis sélectionnez le groupe de téléphonie concerné et enfin la ligne Trunk.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step1.png){.thumbnail}

La page qui s'affiche vous indique la configuration actuelle de la présentation du numéro. Par défaut, le numéro de votre ligne est présenté. Pour en présenter un autre, cliquez sur `Choisir un autre numéro`{.action}, puis sélectionnez celui souhaité dans la liste. Seuls les numéros rattachés à vos groupes de facturation apparaissent ici.

Une fois votre choix fait, cliquez sur le bouton `Appliquer les modifications`{.action}. Vous avez aussi la possibilité de cliquer sur `Appliquer à plusieurs lignes`{.action} pour dupliquer les paramètres sur d’autres lignes OVHcloud.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step2.png){.thumbnail}


#### Présenter « à la volée » un numéro OVHcloud <a name="presenter-numero-volee"></a>

> [!warning]
>
> Avant de poursuivre, assurez-vous que  :
>
> - le numéro que vous souhaitez présenter n'est pas associé à une ligne OVHcloud (SIP ou Trunk, par exemple). Seuls les numéros alias pourront être présentés ; 
> 
> - le numéro pour lequel vous souhaitez modifier la présentation dispose bien d'une redirection avec présentation. Si besoin, reportez-vous aux instructions décrites dans notre documentation [Créer une redirection avec présentation](../creer-redirection-avec-presentation/).
>

**Le mode anonyme doit être désactivé sur la ligne Trunk depuis l'espace client OVHcloud, sinon il sera prioritaire sur la présentation de votre IPBX.**

Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie `Télécom`. Cliquez sur `Téléphonie`{.action} puis sélectionnez le groupe de téléphonie concerné et enfin la ligne Trunk..

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step1.png){.thumbnail}

Décochez la case `Rester anonyme`{.action}, puis cliquez sur le bouton `Appliquer les modifications`{.action}

![désactiver-anonyme](images/display-incoming-call-trunk-anonymous-step7.png){.thumbnail}

Vous pouvez à présent configurer la présentation du numéro sur votre équipement IPBX.

> [!primary]
> 
> - Des connaissances avancées sur l'équipement que vous utilisez sont nécessaires pour pouvoir le configurer. Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) ou de vous rapprocher du constructeur de l'équipement si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos.
> 
> - Il ne sera pas possible de présenter à la volée le même numéro depuis deux lignes Trunk différentes.
>

#### Présenter « à la volée » un numéro externe <a name="presenter-numero-volee-externe"></a>

La présentation d'un numéro externe depuis votre IPBX nécessite la validation du numéro souhaité.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie Télécom. Cliquez sur `Téléphonie`{.action} puis sélectionnez le groupe de téléphonie concerné et enfin la ligne Trunk.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation d'un numéro externe`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step3.png){.thumbnail}

La page qui s'affiche liste les numéros externes déjà ajoutés dans un tableau et vous donne la possibilité d'en ajouter d'autres (tant que le nombre maximal autorisé n'est pas atteint).

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step4.png){.thumbnail}

Pour ajouter un nouveau numéro externe, renseignez ce dernier au format international (par exemple, 0033123456789 pour un numéro français) dans la zone de texte à côté de `Numéro externe`, puis cliquez sur `Ajouter`{.action}. Un code de validation apparaît alors.

Sous quelques minutes, le numéro renseigné recevra un appel. Décrochez et indiquez alors le code de validation par le biais du clavier de votre téléphone. Si tout est correct, le numéro affichera un statut « Validé » dans le tableau.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step5.png){.thumbnail}

**Le mode anonyme doit être désactivé sur la ligne Trunk depuis l'espace client OVHcloud. Dans le cas contraire, il sera prioritaire sur la présentation de votre IPBX.**

Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie `Télécom`. Cliquez sur `Téléphonie`{.action} puis sélectionnez le groupe de téléphonie concerné et enfin la ligne Trunk.

Positionnez-vous sur l'onglet `Gestion des appels`{.action} et cliquez sur `Présentation du numéro`{.action}.

![configurer-presentation-numero-trunk](images/display-incoming-call-trunk-step1.png){.thumbnail}

Décochez la case `Rester anonyme`{.action} puis cliquez sur le bouton `Appliquer les modifications`{.action}

![désactiver-anonyme](images/display-incoming-call-trunk-anonymous-step7.png){.thumbnail}

Vous pouvez à présent configurer la présentation du numéro sur votre équipement IPBX.

> [!primary]
> 
> - Des connaissances avancées sur l'équipement que vous utilisez sont nécessaires pour pouvoir le configurer. Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) ou de vous rapprocher du constructeur de l'équipement si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos.
> 
> - Il ne sera pas possible de présenter à la volée le même numéro depuis deux lignes Trunk différentes.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
