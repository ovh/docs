---
title: "Première configuration d'un nom de domaine"
excerpt: "Découvrez les bonnes pratiques de paramétrage d'un domaine sur votre CDN OVH"
updated: 2018-02-21
---


## Objectif

Lors de la première configuration du Content Delivery Network (CDN), il est nécessaire de déclarer vos domaines depuis l'espace client OVH et d'effectuer des configurations vous permettant de l'utiliser de manière optimale.

**Ce guide vous explique les manipulations à effectuer dans votre espace client ainsi que les bonnes pratiques d'utilisation du CDN d'OVH.**


## Prérequis

- Bénéficier du [Content Delivery Network (CDN) d'OVH](https://www.ovh.com/fr/cdn/){.external}.
- Avoir accès à la gestion de la zone DNS de votre nom de domaine.
- Avoir accès à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

### Ajouter le nom de domaine sur le CDN

La première étape de cette configuration est l'ajout du sous-domaine de votre choix au CDN pour que celui-ci accepte les requêtes HTTP(S) pour ce domaine.

Pour cela, rendez-vous dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans l'onglet `Dédié`{.action}, puis `NAS et CDN`{.action}.

Cliquez ensuite sur `Ajouter un domaine au CDN`{.action} :

![Espace client CDN](images/cdn_customer_panel.png){.thumbnail}

Dans l'étape 1, il vous sera possible de choisir le sous-domaine à ajouter au CDN :

![Ajouter un sous-domaine sur le CDN](images/add_cdn_domain_step_1.png){.thumbnail}

En *backend*, vous pouvez sélectionner un *backend* déjà existant s'il ne s'agit pas de votre premier ajout ou ajouter l'adresse IP de votre choix :

![Ajouter un backend](images/add_cdn_domain_step_2.png){.thumbnail}

Après quelques instants, votre nom de domaine sera disponible dans l'espace client et vous pourrez effectuer sa configuration.

Pour que vos requêtes passent bien par notre infrastructure CDN, vous devez modifier votre zone DNS pour ce sous-domaine et faire pointer un enregistrement CNAME vers le **cdn.*votredomaine.ovh*.web.cdn.anycast.me**.


> [!warning]
>
> L'utilisation de l'enregistrement CNAME est importante. Elle permet à la fonction `Bypass` de fonctionner correctement. Si vous utilisez un enregistrement de type A, le CDN sera fonctionnel, mais vous perdrez l'usage du *bypass*.
>

Si vous configurez la zone DNS de votre domaine depuis votre espace client, vous pouvez ajouter l'entrée suivante (en adaptant le sous-domaine à la configuration de votre choix) :

![Nom de photo](images/cname_field.png){.thumbnail}

 

### Vérifier qu'un fichier est bien mis en cache
Vous pouvez vérifier qu'un fichier se trouve bien en cache en effectuant une requête à son propos :

```sh
curl -I http://sous.domaine/
```

Vous obtiendrez alors un résultat semblable à celui-ci :

```bash
HTTP/1.1 200 OK
Date: Tue, 09 Jan 2018 10:30:57 GMT
Content-Type: text/plain
Last-Modified: Fri, 29 Dec 2017 13:30:42 GMT
ETag: W/"(5a464382-4ddf"
Expires: Wed, 09 Jan 2019 10:30:58 GMT
X-IPLB-Instance: 5905
Vary: Accept-Encoding
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 51.254.41.128/26
X-Cacheable: Matched cache
Accept-Ranges: bytes
Connection: keep-alive
```

Si votre fichier est bien appelé à partir du cache, vous obtiendrez alors la mention `Matched cache`.

Vous pouvez également retrouver le point de présence (PoP) d'où votre fichier a été appelé (*rbx1* dans notre exemple).

Ce type d'information est également accessible dans votre navigateur web, via l'onglet `Réseau` dans les outils de développement (la touche de raccourci F12). En cliquant sur le fichier que vous souhaitez vérifier, vous retrouvez la réponse HTTP et ses en-têtes.


### Préférer l'utilisation d'un sous-domaine spécifique au CDN à celle du domaine principal

Il est impossible d'effectuer un enregistrement CNAME sur un domaine principal. Il s'agit d'une limitation liée aux normes RFC et celle-ci ne peut pas être contournée au niveau de la zone DNS.

L'attribution d'un nom de domaine spécifique aux fichiers que vous souhaitez avoir en cache vous permet d'avoir une meilleure gestion :

- de vos fichiers : seuls les fichiers appelés sur ce sous-domaine seront mis en cache. Vous pouvez ainsi conserver l'appel de vos fichiers dynamiques ou de ceux que vous ne souhaitez pas mettre en cache sur votre nom de domaine principal. Cela vous permet également de déterminer plus rapidement l'origine d'un défaut d'affichage sur votre site ;

- de votre facturation : l'ensemble du trafic (mis en cache ou non) passant par le CDN étant facturé, cela vous permet de limiter le nombre de requêtes non utiles effectuées vers le CDN pour optimiser l'utilisation de votre quota.


### Les implications liées à un nouveau sous-domaine

Si vous souhaitez configurer un nouveau sous-domaine pour utiliser notre CDN, vous devrez probablement modifier certaines configurations au niveau de votre site et de votre service web.

Assurez-vous d'abord que votre service web répond correctement à ce sous-domaine. Pour cela, vous devez configurer un *vhost* pour ce domaine, soit avec son propre dossier-cible, soit en alias d'un autre nom de domaine.

Si le domaine répond correctement au niveau de votre service web, vous n'avez plus qu'à modifier votre code HTML afin de changer les sources des fichiers qui doivent passer par le CDN et vous assurer que ceux-ci sont bien appelés sur votre sous-domaine.

 
## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>