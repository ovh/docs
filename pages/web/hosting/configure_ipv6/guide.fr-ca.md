---
title: 'Configurez IPv6 pour votre site web'
slug: configurer-ipv6-pour-votre-site
excerpt: "Découvrez comment rendre votre site web compatible avec IPv6"
section: "Configuration de l'hébergement"
order: 06
---

**Dernière mise à jour le 25 novembre 2020**


## Généralités

Le réseau Internet fonctionne depuis le début des années 1990 en suivant la norme IPv4. Cette norme permet de fournir une adresse IP à chaque machine reliée au réseau Internet : serveurs mais aussi ordinateurs, smartphones, tablettes et tout autre appareil relié à Internet. Cette norme comporte une limite importante : elle permet d'identifier un peu plus de 4 milliards d'appareils différents. Soit un appareil pour deux personnes sur Terre.

Un nouveau protocole a rapidement été proposé : **IPv6**. Il permet d'identifier plus de 340 sextillions d'adresses différentes. Son déploiement prend du temps en raison de changements important sur l'ensemble du réseau Internet. 

Le nombre d'IPv4 étant rare, il devient de plus en plus difficile d'ajouter de nouvelles ressources au réseau Internet. Les connexions en IPv6 ne sont utiles que si le contenu est aussi disponible sur ce protocole. Ainsi, plus il y aura de sites web en IPv6 et plus il deviendra important pour chaque acteur du réseau de migrer sur ce protocole.

Pour en savoir plus, n'hésitez pas à consulter l'article de [Wikipédia](https://fr.wikipedia.org/wiki/IPv6){.external} sur le protocole IPv6.

## Objectif

Nos hébergements web sont compatibles IPv6 depuis 2011. Mais l'activation de ce protocole est restée jusqu'à récemment une option facultative à la configuration. 

**Ce guide vous indique comment vérifier si votre site est compatible en IPv6 et comment le configurer pour qu'il le soit.**

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr-ca/domains/){.external} dans votre espace client OVHcloud.
- Posséder une [offre d'hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

Si votre site n'est pas configuré pour IPv6, vous pouvez le faire en ajoutant l'information dans la zone DNS de votre nom de domaine. Il s'agit de permettre aux navigateurs web de trouver une adresse IPv6 lorsqu'ils demandent l'emplacement de votre site web via le nom de domaine.

### Vérifier la compatible IPv6 de votre site

Pour tester si votre site web est compatible avec IPv6, vous pouvez utiliser le site [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Ce dernier vous indiquera si votre site répond sur ce nouveau protocole IP. Si ça n'est pas le cas, poursuivez ce guide pour le rendre compatible.

### Étape 1 : Récupérer l'adresse IPv6 de votre hébergement web

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement.

Dans la rubrique `Informations générales`, dans le cadre **IPv6**, copiez l'entrée et passez à l'étape suivante.

![IPv6](images/ipv6_01.png){.thumbnail}

### Étape 2 : Configurer la zone DNS

> [!warning]
> Notre option CDN n'est actuellement pas compatible IPv6. Si vous configurez une adresse IPv6 sur votre site web, vos visiteurs ne bénéficieront pas du CDN.

Afin que votre navigateur trouve l'adresse IPv6 avec votre nom de domaine, vous devez modifier la zone DNS qui y est associée. Vous pouvez vous appuyer de notre guide [Éditer une zone DNS OVHcloud](../../domains/editer-ma-zone-dns/#etape-2-editer-la-zone-dns-ovh-de-votre-domaine) pour créer une entrée de type **AAAA**.

Depuis `Noms de domaine`{.action}, positionnez-vous sur l'onglet `Zone DNS`{.action} de votre nom de domaine. Cliquez sur le bouton `Ajouter une entrée`{.action} à droite du tableau. Vous devez y insérer l'adresse IPv6 en utilisant le type d'enregistrement **AAAA** et l'IPv6 récupérée précédemment au sein de votre espace client.

![IPv6](images/ipv6_02.png){.thumbnail}

## Allez plus loin

[Éditer une zone DNS OVHcloud](../../domains/editer-ma-zone-dns/#etape-2-editer-la-zone-dns-ovh-de-votre-domaine)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
