---
title: Ajout de bloc IP
excerpt: Commander un bloc IP sur votre Private Cloud
updated: 2022-04-06
---

## Objectif

Un bloc IP peut vous servir à rendre vos services accessibles sur Internet. 

**Ce guide explique comment commander, ajouter et migrer un bloc IP associé à votre Hosted Private Cloud.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc))

## En pratique

### Commander un bloc IP

Pour commander un bloc IP supplémentaire pour votre **Private Cloud** , dirigez-vous sur votre espace client OVHcloud. Dans la section `Serveur`, cliquez sur la rubrique `IP` dans la colonne de gauche puis cliquez sur `Commander des IP additionnelles`{.action}. Sélectionnez ensuite votre **Private Cloud** dans le menu déroulant avant de passer à l'étape suivante.

Plusieurs champs seront à remplir pour la création de votre bloc IP

- Taille du Bloc IP (de /28 à /24)

> [!primary]
>
> Pour rappel, voici un tableau récapitulant le nombres d'IPs présentes dans un bloc, et le nombres d'IP utilisables.
> 

|Taille du bloc|IP dans le bloc|IP utilisables chez OVHcloud|
|:---:|:---:|:---:|
|28|16|11|
|27|32|27|
|26|64|59|
|25|128|123|
|24|256|251|

> [!primary]
>
> N'hésitez pas à consulter notre guide sur le [plugin OVHcloud Network](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/plugin_ovh_network){.external-link} afin de savoir quelles sont les IPs réservées de votre bloc ainsi que leur utilisation.
>

- Pays du bloc IP, important dans certains cas pour le référencement de vos services (un site à affluence française aura un meilleur référencement en France si l'IP est française également)
- Nom du réseau (Information visible dans le whois du bloc ip).
- Nombre de clients estimés (Combient de clients finaux seront hébérgés sur ces IPs).
- Description du réseau (Information visible dans le whois du bloc ip).
- Usage (Information sur l'utilisation (Web, SSL, Cloud...)).

> [!success]
>
> Vous devrez vous acquitter des frais d'activation de votre bloc IP avant livraison.
>

Après avoir confirmé la dernière étape, vous obtenez le bon de commande de votre bloc IP. Si celui-ci est conforme à votre souhait, il vous suffit de le payer avec les moyens de paiement proposés en bas de page afin que celui-ci soit livré.

### Migrer un bloc IP entre deux Hosted Private Cloud

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

La migration d'un bloc d'IP nécessite de déplacer manuellement les blocs via l'APIv6 OVHcloud.

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

Les champs doivent être complétés ainsi :

- ip : bloc IP avec le /mask
- nexthop « newPrimaryIp » (sensible a la casse)
- to : Hosted Private Cloud de destination sous la forme pcc-XXX-XXX-XXX-XXX

![champ nexthop](images/move-api.png){.thumbnail}

Le résultat sera sous cette forme :

![champ nexthop](images/api-result.png){.thumbnail}

Si, par la suite, vous devez détacher le bloc IP, vous pouvez utiliser cet appel API pour déplacer l'IP dans le parking des IPS :

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> Cet appel coupe le réseau sur les VMs qui utilisent les IPs en question.
>

Vous pourrez suivre le déplacement du bloc IP depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} dans la partie `Hosted Private Cloud`{.action} puis `Private Cloud`{.action}. Cliquez sur votre service Hosted Private Cloud puis sur l'onglet `Operations`{.action}.

La référence de l'opération est « removeIpRipeBlock ».

![operations manager](images/operations.png){.thumbnail}

L'IP apparaîtra ensuite dans le `Parking des IPs`{.action}.

![IP parking](images/ip-parking.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
