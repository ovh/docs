---
title: 'Configurer un DNS secondaire OVHcloud sur un VPS'
slug: dns-secondaire-vps
excerpt: Découvrez comment ajouter un serveur DNS secondaire pour votre domaine
section: Utilisation avancée
---

**Dernière mise à jour le 12/01/2022**

## Objectif

Si vous configurez votre VPS comme serveur DNS, vous pouvez utiliser le service DNS Secondaire d'OVHcloud pour héberger une zone DNS secondaire. Ainsi, les serveurs DNS de votre nom de domaine resteront disponibles même si le serveur DNS primaire ne répond plus.

**Découvrez comment ajouter un nom de domaine dans votre espace client pour utiliser un serveur DNS Secondaire OVHcloud.**

## Prérequis

- Un nom de domaine auquel vous avez accès en tant qu’administrateur
- Un serveur [VPS](https://www.ovhcloud.com/fr-ca/vps/) dans votre espace client OVHcloud
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)

> [!warning]
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d’en assurer le bon fonctionnement.
>
> Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur les tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## En pratique

### Étape 1 : récupération du code de validation <a name="retrievecode"></a>

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur privés virtuels`{.action}.

Basculez sur l'onglet `DNS Secondaire`{.action} et cliquez sur le bouton `Ajouter un domaine`{.action}.

![DNS Secondaire](images/sec-01.png){.thumbnail}

Renseignez le nom de domaine que vous souhaitez ajouter, puis cliquez sur `Valider`{.action}.

![DNS Secondaire](images/sec-02.png){.thumbnail}

Un message concernant le processus de vérification s'affichera dans votre espace client.

![DNS Secondaire](images/sec-03.png){.thumbnail}

Il est nécessaire de valider votre autorisation de gestion du nom de domaine avant de pouvoir l'ajouter aux DNS Secondaires d'OVHcloud. Cela se fait via une recherche DNS automatisée sur le sous-domaine *ownercheck.votrenomdedomaine*. Une chaîne de caractères individuelle est générée à cet effet et affichée dans la zone de notification rouge. Copiez ce code de validation pour l'utiliser à l'étape suivante.

### Étape 2 : vérification de l’autorisation du nom de domaine <a name="verifyingdomain"></a>

L'action à effectuer est différente selon l'endroit où les DNS de votre nom de domaine sont gérés.

- Si le nom de domaine est géré par un bureau d'enregistrement externe **ou** s'il utilise à ce stade des serveurs DNS externes, connectez-vous à l'espace client de votre prestataire DNS et ajoutez, dans la zone DNS, une entrée de type TXT avec le sous-domaine « ownercheck » ainsi que la valeur fournie en exécutant l'[étape 1](#retrievecode).

- Si le nom de domaine est géré par OVHcloud en tant que registrar **et** qu'il utilise les serveurs DNS d'OVHcloud, ajoutez l'enregistrement TXT dans la section `Web Cloud`{.action} de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Suivez alors les instructions décrites dans notre guide « [Editer sa zone DNS](../../domains/editer-ma-zone-dns/) » si ce processus ne vous est pas familier.

![DNS Secondaire](images/sec-04.png){.thumbnail}

### Étape 3 : ajout du nom de domaine

Dès que l'enregistrement TXT est présent dans la zone DNS du nom de domaine, répétez les [étapes décrites dans la première partie de ce guide](#retrievecode) pour ajouter le nom de domaine au serveur DNS secondaire d'OVHcloud.

Cliquez sur `Confirmer`{.action} pour lancer la vérification automatique du propriétaire en interrogeant le champ TXT. Un message dans votre espace client vous confirmera la bonne validation DNS. Vous pouvez maintenant supprimer l'entrée TXT.

Les noms de domaine ajoutés apparaissent dans cet onglet avec le **nom correspondant au serveur DNS secondaire**. Rafraîchissez la page dans votre navigateur après avoir ajouté un nom de domaine.

![DNS Secondaire](images/sec-05.png){.thumbnail}

Il est possible de supprimer un nom de domaine en cliquant sur le bouton `...`{.action} dans le tableau.

> [!primary]
>
> D'autres actions nécessaires à la configuration de votre serveur DNS sur vos noms de domaine peuvent être requises :
>
> - la configuration d'un service DNS (tel que *BIND*)
> - la configuration des enregistrements GLUE
> - l'autorisation des transferts de zone DNS
>
> Reportez-vous aux documentations externes si vous avez besoin d'informations supplémentaires pour ces tâches administratives.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
