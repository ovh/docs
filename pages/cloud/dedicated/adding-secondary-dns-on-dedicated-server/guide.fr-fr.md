---
title: 'Créer un DNS secondaire sur un serveur dédié'
slug: creer-dns-secondaire-serveur-dedie
excerpt: 'Découvrez comment créer un DNS secondaire pour votre serveur dédié OVHcloud'
section: 'Utilisation avancée'
---

**Dernière mise à jour le 12/01/2021**

## Objectif

Si vous configurez votre serveur dédié en tant que serveur DNS, vous pouvez utiliser le DNS OVHcloud secondaire pour héberger une zone secondaire. Ainsi, le DNS de votre domaine restera disponible même si le serveur DNS principal ne répond plus.

**Ce guide explique comment ajouter votre domaine dans l'espace client OVHcloud afin d'utiliser un serveur DNS secondaire.**


## Prérequis

* Disposer d'un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
* Disposer d'un [nom de domaine](https://www.ovh.com/fr/domaines/){.external} dont vous avez la gestion administrative ou technique.
* Être connecté à l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en oeuvre des services sur un serveur.
> 


## En pratique

### Ajout d'un domaine <a name="ajoutdomaine"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), accédez à la section `Bare Metal Cloud`{.action}, puis sélectionnez votre serveur sous `Serveurs Dédiés`{.action}.

Cliquez ensuite sur  l'onglet `DNS secondaire`{.action} puis sur le bouton `Ajouter un domaine`{.action}.

![DNS secondaire](images/cp-01.png){.thumbnail}

Entrez votre adresse IP et le domaine à ajouter, puis cliquez sur `Suivant`{.action}.

![DNS secondaire](images/cp-02.png){.thumbnail}

Une fois que vous aurez cliqué sur `Suivant`{.action} à cette étape, la vérification du domaine sera déclenchée. Si vous n'avez pas déjà ajouté un enregistrement TXT à votre zone DNS, suivez d'abord les instructions [décrites ci-dessous](#verificationdomaine). Sinon, continuez en cliquant sur `Suivant`{.action}.

![DNS secondaire](images/cp-03.png){.thumbnail}

Après avoir cliqué sur `Ajouter`{.action} dans la dernière fenêtre, le domaine sera ajouté au serveur DNS secondaire OVHcloud.

Les domaines ajoutés seront répertoriés dans cet onglet et peuvent être supprimés en cliquant sur le bouton `...`{.action}. Le nom du serveur DNS secondaire s'affiche à côté du domaine.

![DNS secondaire](images/cp-05.png){.thumbnail}

> [!primary]
>
> Les autres actions requises pour configurer votre propre DNS pour votre domaine sont généralement les suivantes:
>
> - configuration d'un service DNS (tel que *BIND*)
> - configuration des enregistrements GLUE
> - autorisation des transferts de zone
>
> Reportez-vous aux documentations externes appropriées si vous avez besoin d'informations supplémentaires pour compléter ces tâches administratives.

### Vérification de l'autorisation pour le domaine <a name="verificationdomaine"></a>

Il est nécessaire de confirmer votre autorisation à gérer le domaine concerné avant de pouvoir l'ajouter au DNS secondaire OVHcloud. Cela s'effectue via une recherche DNS automatisée sur le sous-domaine *ownercheck.votrenomdedomaine*. Une chaîne unique de caractères est générée à cette fin et affichée dans l'espace client OVHcloud.

- Si le domaine est géré par un bureau d'enregistrement externe ou utilise des serveurs DNS externes à ce stade, connectez-vous à l'espace client de votre fournisseur DNS et ajoutez un enregistrement TXT avec le sous-domaine « ownercheck » et la valeur fournie à l'étape 2 de l'[Ajout de domaine"](#ajoutdomaine).

- Si le domaine est géré par OVHcloud en tant que serveur d'enregistrement et qu'il utilise des serveurs DNS OVHcloud, fermez la fenêtre en cliquant préalablement sur `Annuler`{.action}. Vous pouvez ensuite suivre les instructions de [ce guide](../../domains/editer-ma-zone-dns/) pour ajouter l'enregistrement TXT dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

![DNS secondaire](images/cp-04.png){.thumbnail}

Après avoir correctement ajouté l'enregistrement TXT à la zone DNS du domaine, répétez les [étapes ci-dessus](#ajoutdomaine) et terminez la procédure.

## Aller plus loin

[Éditer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
