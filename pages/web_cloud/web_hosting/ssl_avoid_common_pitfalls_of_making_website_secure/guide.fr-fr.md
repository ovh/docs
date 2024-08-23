---
title: "Erreurs courantes liées à la sécurisation de votre site web avec le SSL"
excerpt: "Découvrez comment éviter les erreurs courantes de sécurisation de son site web avec le SSL"
updated: 2024-01-11
---

## Objectif

Retrouvez, dans ce tutoriel, quelques exemples de situations concernant la sécurisation de votre site web avec le SSL.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

**Découvrez comment éviter les erreurs courantes de sécurisation de son site web avec le SSL**

## Prérequis

- Posséder un [hébergement web OVHcloud](/links/web/hosting){.external}.
- Avoir enregistré au moins un [nom de domaine](/links/web/domains){.external}.
- Avoir accès à votre [espace client OVHcloud](/links/manager){.external}, partie « Web cloud ».

## En pratique

### Contenu mixte (mixed content)

Votre site web ne charge pas d'éléments externes, comme les boutons *Facebook* et *X/Twitter* ? Les interactions sur vos pages web ne fonctionnent pas comme lorsque vous accédez à votre site web en « HTTP » ? Cela provient probablement du fait que votre site web contient du contenu mixte. 

Depuis quelques années, les navigateurs comme *Google Chrome*, *Mozilla Firefox* et *Microsoft Edge/Internet Explorer* empêchent les sites web en « HTTPS » de charger des éléments de page s'ils sont accessible via une URL en « HTTP ». Ceci afin que la confidentialité fournie par le protocole « HTTPS » ne soit pas compromise par un élément chargé en « HTTP ». 

Dans la plupart des cas, il s'agit de scripts externes, provenant d'autres sites web comme les réseaux sociaux. Dans ce cas, il suffit de remplacer dans vos scripts les URLs en « HTTP » par des URLs en « HTTPS » pour pouvoir charger ces scripts.

> [!primary]
>
> Certains sites web utilisent des [Content Delivery Netnwork (CDN)](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) pour héberger, par exemple, des librairies *Javascript* (comme *JQuery*). 
> Si les CDN livrent la librairie avec une URL en « HTTP », votre site web peut être concerné par le **mixed content**. 
>

Comment savoir si mon site est concerné ?

Les outils de débogage fournis par *Mozilla Firefox* et *Google Chrome* peuvent vous indiquer si votre site web contient ou non des éléments bloqués en raison d'un contenu mixte. La documentation disponible sur le [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external} explique l'utilisation de ces outils pour repérer les contenus mixtes.

### Contenu dupliqué (duplicate content)

« Dupliquer du contenu » signifie avoir le même contenu sur plusieurs URLs différentes. Les moteurs de recherche voient cela comme une tentative d'améliorer le référencement (SEO). Ils pénalisent donc les sites web dont le contenu est dupliqué.

Afin d'éviter ce type de situation, nous vous suggérons, lorsque votre site fonctionne correctement en « HTTPS », de rediriger le contenu « HTTP » vers « HTTPS ». Cela permettra à vos visiteurs d'être automatiquement redirigés vers l'adresse de votre contenu web en « HTTPS » et qu'une seule adresse soit disponible pour ce même contenu. 

Voici un exemple de redirection que vous pouvez ajouter dans un fichier « [.htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite) », à la racine de votre site web (en remplacant l'URL *https://www.yourdomain.tld* par la vôtre):

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.tld/$1 [R,L]
```

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).