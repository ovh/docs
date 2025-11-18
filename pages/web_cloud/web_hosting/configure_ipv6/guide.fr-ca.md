---
title: "Configurez une adresse IPv6 pour votre site web"
excerpt: "Découvrez comment rendre votre site web compatible avec une adresse IPv6"
updated: 2025-01-28
---

## Objectif

Le réseau Internet fonctionne depuis le début des années 1990 en suivant la norme IPv4. Cette norme permet de fournir une adresse IP X.X.X.X (ou les « X » sont des nombres compris entre 0 et 255) à chacune des machines reliées au réseau Internet (serveurs, ordinateurs, smartphones, tablettes, etc.). Cependant, cette norme limite à environ 4 milliards le nombre d'appareils connectés au réseau Internet, ce qui représentait en 2022 moins d'un appareil connecté pour deux personnes sur Terre.

Suite à cela, le protocole **IPv6** a été introduit pour permettre de connecter au réseau Internet jusqu'à 340 sextillions d'appareils. Son déploiement prend du temps du fait que l'ensemble du réseau Internet doit intégrer cette nouvelle norme. 

Les adresses IPv4 étant désormais moins disponibles, il est plus difficile d'ajouter de nouvelles machines sur le réseau Internet avec la norme IPv4. Toutefois, les connexions avec une adresse IPv6 sont utiles uniquement si, par exemple, votre site web est aussi disponible avec ce même protocole. Ainsi, plus il y aura de sites web accessibles en IPv6, plus les différents acteurs présents sur le réseau Internet basculreont leurs appareils/machines sur ce nouveau protocole.

Pour en savoir plus, consultez l'article de [Wikipédia](https://fr.wikipedia.org/wiki/IPv6) sur le protocole IPv6.

Nos hébergements web sont compatibles IPv6 depuis 2011. Mais l'activation de ce protocole est restée jusqu'à récemment une option facultative à la configuration. 

**Découvrez comment vérifier si votre site web est compatible avec le protocole IPv6 et comment le configurer avec une adresse IPv6.**

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains) dans votre espace client OVHcloud.
- Posséder une [offre d'hébergement web](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Si vous éprouvez des difficultés, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
> 

Si votre site n'est pas configuré pour fonctionner avec une adresse IPv6, vous pouvez ajouter [l'adresse IPv6 de votre hébergement mutualisé OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) dans la zone DNS active de votre nom de domaine. L'objectif est de permettre aux navigateurs web de trouver une adresse IPv6 associée à votre site web via votre nom de domaine.

### 1 - Vérifier la compatibilité IPv6 de votre site web

Pour vérifier si votre site web utilise déjà une adresse IPv6, utilisez le site [ipv6-test.com](https://ipv6-test.com/validate.php). Il vous indiquera si votre site web répond sur ce nouveau protocole IP. Si ce n'est pas le cas, poursuivez la lecture de notre guide.

### 2 - Récupérer l'adresse IPv6 de votre hébergement web

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etape 3**
>>
>> Dans le cadre **Informations générales**, vous trouverez la mention **IPv6**.
>>
>> ![IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv6.png){.thumbnail}
>>
>> Copiez l'adresse IP, puis poursuivez la lecture du guide.

### 3 - Configurer la zone DNS active de votre nom de domaine

> [!warning]
>
> Nos options CDN sont actuellement incompatibles avec les adresses IPv6. Si vous configurez une adresse IPv6 pour votre site web, vos visiteurs ne bénéficieront pas du CDN.
>
> De plus, l'ajout, la modification ou la suppression d'une entrée DNS dans la zone DNS active d'un nom de domaine entraîne un délai de propagation de **4 à 24 heures** pour être pleinement effectif.
>

Afin que votre navigateur internet trouve l'adresse IPv6 avec votre nom de domaine, vous devrez modifier la zone DNS active de votre domaine. 

Si la zone DNS active de votre nom de domaine est présente che OVHcloud, utilisez nos guides « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) », puis « [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records) » pour créer une entrée DNS de type **AAAA**.

Sinon, contactez votre fournisseur DNS en lui précisant l'adresse IPv6 précédemment récupérée.

## Aller plus loin <a name="go-further"></a>

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).