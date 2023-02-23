---
title: "Guide - Rediriger vos noms de domaines alternatifs"
slug: how_to_redirect_your_alternative_domain_name
excerpt: "Comment rediriger vos noms de domaines alternatifs vers votre nom de domaine principal"
section: Tutoriel
order: 
---

**Dernière mise à jour le 23/02/2023**

Ce guide a pour objectif de vous permettre de configurer la redirection de noms de domaines alternatifs vers votre nom de domaine principal.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

## Prérequis

Vous devez disposer de plusieurs [noms de domaine](https://www.ovhcloud.com/fr/domains/) et d'un [hébergement wejpbathomb](https://www.ovhcloud.com/fr/web-hosting/) sur lequel les faire pointer.

Vous devez également avoir les accès à votre [manager OVH](https://www.ovh.com/manager/).

## En pratique

### Protéger son nom de domaine 

Vous disposez d'un nom de domaine pour votre site lié à votre activité avec une extension. Il est recommandé d'acheter plusieurs déclinaisons de votre nom de domaines (extensions comprises) pour les raisons suivantes :

- les internautes venant sur votre site sont susceptibles de faire une erreur de saisie. Acheter des noms de domaine comportant des orthographes différentes mais proches permettra à vos visiteurs ne saisissant pas correctement votre nom de domaine de venir sur votre site ;
- un concurrent peut acheter un nom de domaine semblable au votre ou avec une extension différente du votre ;
- si votre entreprise change de nom ou a utilisé un autre nom, il est recommandé de conserver les noms de domaines précédents ;
- le nom de votre entreprise ne correspond pas nécessairement à votre marque ou à vos produits ;
- les noms de domaines de premier niveau (`.com`, `.net`) évoluent et de nouveaux sont disponibles (`.click`, `.website`, `.agency`, `.beer`).

Enregistrer plusieurs noms de domaine peut aussi vous éviter le [cybersquatting](https://fr.wikipedia.org/wiki/Cybersquattage) de certains noms de domaine. Cette pratique peut vous contraindre à racheter votre nom de domaine à prix plus élevé ou vous exposer à une perte de trafic.

### Rediriger vos noms de domaine

Rendez vous sur votre Manager :

![Manager OVH](images/how_to_redirect_your_alternative_domain_name_1.png){.thumbnail}

Cliquez sur `Web Cloud`{.action} puis `Noms de domaine`{.action} pour afficher la liste des noms de domaines gérés par votre compte OVH :

![Domain names](images/how_to_redirect_your_alternative_domain_name_2.png){.thumbnail}

Sélectionnez le nom de domaine que vous souhaitez rediriger vers un autre :

![Domain names](images/how_to_redirect_your_alternative_domain_name_3.png){.thumbnail}

Puis cliquez sur l'onglet `Zone DNS` :

![DNS Zone](images/how_to_redirect_your_alternative_domain_name_4.png){.thumbnail}

Vous avez alors la liste des entrées liées à votre nom de domaine :

![DNS entries](images/how_to_redirect_your_alternative_domain_name_5.png){.thumbnail}

La méthode la plus simple consiste à ajouter une entrée `CNAME` pour faire pointer votre nom de domaine vers un autre (`.ovh` vers `.com` dans notre exemple).

Cliquez sur `Ajouter une entrée`{.action} :

![Add an entrie](images/how_to_redirect_your_alternative_domain_name_6.png){.thumbnail}

Dans la fenêtre modale qui s'ouvre, sélectionnez `CNAME` pour ajouter une nouvelle entrée dans votre zone DNS :

![Select CNAME](images/how_to_redirect_your_alternative_domain_name_7.png){.thumbnail}

Dans la fenêtre suivante, vous avez plusieurs champs à renseigner :

- sous-domaine, dans lequel vous saisirez le caractère `*` (pour tous les sous-domaines)
- TTL, **Time To Live** (à laisser par défaut)
- Cible, qui est le domaine sur lequel vous voulez pointer.

![Fill the form](images/how_to_redirect_your_alternative_domain_name_8.png){.thumbnail}

La fenêtre finale récapitule la demande. Cliquez sur `Confirmer`{.action} pour valider :

![Confirmer](images/how_to_redirect_your_alternative_domain_name_9.png){.thumbnail}

## Aller plus loin<a name="go-further"></a>

- acheter un ou plusieurs [noms de domaine](https://www.ovhcloud.com/en-gb/domains/) chez OVH
- nos guides sur la gestion des [domaines et DNS](https://docs.ovh.com/gb/en/domains/)
- nos offres d'[hébergement web](https://www.ovhcloud.com/en-gb/web-hosting/).