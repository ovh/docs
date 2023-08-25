---
title: "Configurez une adresse IPv6 pour votre site web"
excerpt: "Découvrez comment rendre votre site web compatible avec une adresse IPv6"
updated: 2023-02-10
---


## Objectif

Le réseau Internet fonctionne depuis le début des années 1990 en suivant la norme IPv4. Cette norme permet de fournir une adresse IP X.X.X.X (ou les « X » sont des nombres compris entre 0 et 255) à chacune des machines reliées au réseau Internet (serveurs, ordinateurs, smartphones, tablettes, etc.). Cependant, cette norme limite à environ 4 milliards le nombre d'appareils connectés au réseau Internet, ce qui représentait en 2022 moins d'un appareil connecté pour deux personnes sur Terre.

Suite à cela, le protocole **IPv6** a été introduit pour permettre de connecter au réseau Internet jusqu'à 340 sextillions d'appareils. Son déploiement prend du temps du fait que l'ensemble du réseau Internet doit intégrer cette nouvelle norme. 

Les adresses IPv4 étant désormais moins disponibles, il est plus difficile d'ajouter de nouvelles machines sur le réseau Internet avec la norme IPv4. Toutefois, les connexions avec une adresse IPv6 sont utiles uniquement si, par exemple, votre site web est aussi disponible avec ce même protocole. Ainsi, plus il y aura de sites web accessibles en IPv6, plus les différents acteurs présents sur le réseau Internet basculreont leurs appareils/machines sur ce nouveau protocole.

Pour en savoir plus, consultez l'article de [Wikipédia](https://fr.wikipedia.org/wiki/IPv6){.external} sur le protocole IPv6.

Nos hébergements web sont compatibles IPv6 depuis 2011. Mais l'activation de ce protocole est restée jusqu'à récemment une option facultative à la configuration. 

**Découvrez comment vérifier si votre site web est compatible avec le protocole IPv6 et comment le configurer avec une adresse IPv6.**

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr-ca/domains/){.external} dans votre espace client OVHcloud.
- Posséder une [offre d'hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
> 

Si votre site n'est pas configuré pour fonctionner avec une adresse IPv6, vous pouvez ajouter [l'adresse IPv6 de votre hébergement mutualisé OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) dans la zone DNS active de votre nom de domaine. L'objectif est de permettre aux navigateurs web de trouver une adresse IPv6 associée à votre site web via votre nom de domaine.

### Vérifier la compatibilité IPv6 de votre site web

Pour vérifier si votre site web utilise déjà une adresse IPv6, utilisez le site [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Il vous indiquera si votre site web répond sur ce nouveau protocole IP. Si ce n'est pas le cas, poursuivez la lecture de notre guide.

### Étape 1 : récupérer l'adresse IPv6 de votre hébergement web

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action}, choisissez le nom de l'hébergement concerné puis positionnez-vous sur l'onglet `Informations générales`{.action}.

Dans le cadre **IPv6**, copiez l'entrée et passez à l'étape suivante.

![IPv6](images/ipv6_01.png){.thumbnail}

### Étape 2 : configurer la zone DNS active de votre nom de domaine

> [!warning]
>
> Nos options CDN sont actuellement incompatibles avec les adresses IPv6. Si vous configurez une adresse IPv6 pour votre site web, vos visiteurs ne bénéficieront pas du CDN.
>
> De plus, l'ajout, la modification ou la suppression d'une entrée DNS dans la zone DNS active d'un nom de domaine entraîne un délai de propagation de **4 à 24 heures** pour être pleinement effectif.
>

Afin que votre navigateur trouve l'adresse IPv6 avec votre nom de domaine, modifiez la zone DNS active de votre domaine. Utilisez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit#editer-la-zone-dns-ovhcloud-de-votre-nom-de-domaine) » pour créer une entrée DNS de type **AAAA**.

Dans la partie `Web Cloud`{.action}, cliquez sur `Noms de domaine`{.action}. Choisissez votre nom de domaine puis positionnez-vous sur l'onglet `Zone DNS`{.action}. Cliquez sur le bouton `Ajouter une entrée`{.action} à droite du tableau. 

Insérez l'adresse IPv6 préalablement copiée en utilisant le type d'enregistrement **AAAA**.

![IPv6](images/ipv6_02.png){.thumbnail}

## Aller plus loin <a name="go-further"></a>

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit#editer-la-zone-dns-ovhcloud-de-votre-nom-de-domaine)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.