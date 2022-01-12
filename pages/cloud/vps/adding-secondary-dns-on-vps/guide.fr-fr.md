---
title: "Configurer le DNS secondaire OVHcloud sur un VPS"
slug: dns-secondaire-vps
excerpt: Découvrez comment ajouter un serveur DNS secondaire pour votre domaine
section: Utilisation avancée
---

**Dernière mise à jour le 12/01/2022**

## Objectif

Si vous configurez votre VPS comme un serveur DNS, vous pouvez utiliser le service DNS Secondaire d'OVHcloud pour héberger une zone secondaire. Ainsi, les DNS de votre domaine resteront disponibles même si le serveur DNS primaire ne répond plus.

**Ce guide vous explique comment ajouter votre nom de domaine dans votre espace client afin d'utiliser un serveur DNS Secondaire OVH.**

## Prérequis

- Un nom de domaine auquel vous avez accès en tant qu’administrateur
- Un serveur [privé virtuel](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Être connecté à votre espace client [OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

> [!warning]
>OVHcloud vous offre un certain nombre de services dont la configuration et la gestion relèvent de votre responsabilité. Il vous incombe par conséquent de veiller à ce que ces services fonctionnent correctement.
>
>Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur les tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Instructions

### Étape 1 : Récupération du code de validation <a name="retrievecode"></a>

Connectez-vous à votre espace client [OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action}, puis sélectionnez votre serveur dans Serveurs **privés** virtuels dans le menu de gauche.

Basculez sur l'onglet `DNS Secondaire`{.action} et cliquez sur le bouton `Ajouter un domaine`{.action}.

![DNS Secondaire](images/sec-01.png){.thumbnail}

Renseignez le nom de domaine que vous souhaitez ajouter, puis cliquez sur `Valider`{.action}.

![DNS Secondaire](images/sec-02.png){.thumbnail}

Un message concernant le processus de vérification s'affichera dans votre espace client.

![DNS Secondaire](images/sec-03.png){.thumbnail}

Il est nécessaire de valider votre autorisation de gestion du nom de domaine avant de pouvoir l'ajouter aux DNS Secondaires d'OVH. Ceci se fait via une recherche DNS automatisée sur le sous-domaine *ownercheck.votrenomdedomaine*. Une chaîne de caractères individuelle est générée à cet effet et affichée dans la zone de notification rouge. Copiez ce code de validation pour l'utiliser à l'étape suivante.

### Étape 2 : Vérification de l’autorisation du nom de domaine <a name="verifyingdomain"></a>

L'action à effectuer est différente selon l'endroit où les DNS de votre nom de domaine sont gérés.

- Si le nom de domaine est géré par un bureau d'enregistrement externe **ou s'il utilise à ce stade des** serveurs DNS externes, connectez-vous à l'espace client de votre prestataire DNS et ajoutez une entrée de zone DNS de type TXT avec le sous-domaine "ownercheck" ainsi que la valeur fournie en exécutant l'[étape 1](#retrievecode).

- Si le domaine est géré par OVHcloud en tant que registrar **et qu'il utilise les** serveurs DNS d'OVHcloud, ajoutez l'enregistrement TXT dans la section `Web Cloud`{.action} de votre espace client [OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Suivez alors les instructions décrites dans notre guide[ "La zone ](../../domains/editer-ma-zone-dns/)" si ce processus ne vous est pas familier.

![DNS Secondaire](images/sec-04.png){.thumbnail}

### Étape 3 : Ajout du nom de domaine

Dès que l'enregistrement TXT est présent dans la zone DNS du nom de domaine, répétez les [étapes décrites dans la première partie de ce guide](#retrievecode) pour ajouter le nom de domaine au serveur DNS secondaire d'OVHcloud.

Cliquez sur `Confirmer`{.action} pour lancer la vérification automatique du propriétaire en interrogeant le champs TXT. Un message dans votre espace client vous confirmera la bonne validation DNS. Vous pouvez maintenant supprimer l'entrée TXT.

Les noms de domaine ajoutés apparaissent dans cet onglet avec le **nom correspondant au serveur** DNS secondaire. (Rafraîchissez la page dans votre navigateur après avoir ajouté un nom de domaine.)

![DNS Secondaire](images/sec-05.png){.thumbnail}

Il est possible de supprimer un nom de domaine en cliquant sur le bouton `...`{.action} dans le tableau.


> [!primary]
>
> Parmi les autres actions nécessaires à la configuration de votre propre DNS pour votre ou vos noms de domaine figurent généralement :
>
> - configuration d'un service DNS (tel que *BIND*)
> - configuration des enregistrements GLUE
> - autorisation des transferts de zone
>
> Reportez-vous aux documentations externes appropriées si vous avez besoin d'informations supplémentaires pour compléter ces tâches administratives.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.