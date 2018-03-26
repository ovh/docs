---
title: Eviter les pieges du SSL avec mon site web
slug: eviter-les-pieges-du-ssl-avec-mon-site-web
legacy_guide_number: 2220
excerpt: Comment utiliser le SSL sur votre hebergement en evitant les pieges habituels de celui-ci
section: SSL
---

Votre offre d'hébergement web ajoute sur l'ensemble des sites un certificat SSL. Cela permet de chiffrer les communications entre les visiteurs et votre site. Il vous suffit d'utiliser [https://](https://){.external} à la place de [http://](http://){.external} et le flux entre votre ordinateur et votre site sera chiffré.

Cependant, le fonctionnement de votre site peut être altéré si vous utilisez votre certificat SSL. Avant de communiquer dessus, vérifier que votre site ne tombe pas dans les erreurs courantes liées au déploiement du SSL :


## Les erreurs recurrentes

### Le mixed content
Votre site ne charge pas les éléments externes, comme les boutons Facebook ou Twitter ? Les interactions de votre page ne fonctionnent pas comme en HTTP ? Vous avez probablement un soucis de mixed content.

Depuis quelques années, les navigateurs web comme Google Chrome, Mozilla Firefox ou Internet Explorer, empêchent les sites en HTTPS de charger des éléments de la page s'ils sont sur une url en HTTP. Ceci afin d'éviter que la confidentialité apportée par HTTPS ne soit impacté par un élément chargé en HTTP.

Dans la plupart des cas, il s'agit de scripts externes, provenant d'autres sites web comme les réseaux sociaux, et il suffit de remplacer http par https pour appeler ces scripts.

Attention cependant, certains sites utilisent des CDN afin d'héberger des librairies Javascript (comme JQuery par exemple). Si ces CDN fournissent la librairie avec une url en http, le fonctionnement du site peut en être affectée.

Comment savoir si mon site est concerné ?

Les outils de débogage fournie par Mozilla Firefox et Google Chrome indiquent lorsque le site contient des éléments bloqués pour mixed content. La documentation disponible sur [le Mozilla Developer Network](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9/MixedContent){.external} permet d'en savoir plus sur ces outils dans le cas du mixed content.


### Le duplicate content
Le "duplicate content", c'est le fait d'avoir le même contenu via plusieurs url distinctes. Les moteurs de recherche n'apprécient pas ce phénomène qui s'apparente, selon eux, à des tentatives d'améliorer son positionnement. Ainsi, ils pénalisent les sites qui en font usage.

Afin d'éviter ce type de problème, il est recommandé, lorsque votre site fonctionne correctement en HTTPS, d'ajouter une redirection du contenu HTTP en HTTPS. Ainsi, vos visiteurs seront automatiquement renvoyés vers l'adresse en HTTPS et une seule adresse sera disponible pour un même contenu.

Voici un exemple de redirection à mettre place au sein du fichier .htaccess à la racine de votre site.


```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.votredomaine.fr/$1 [R,L]
```


### Repasser de HTTPS a HTTP
Dans le cas où vous souhaiteriez restreindre votre site au HTTP et ne pas utiliser le protocole HTTPS, il vous suffit de le forcer via le fichier .htaccess.

Ainsi, vos visiteurs seront automatiquement renvoyés vers l'adresse en HTTP et une seule adresse sera disponible pour un même contenu, même s'il y accèdent en HTTPS.

Voici un exemple de redirection à mettre place au sein du fichier .htaccess à la racine de votre site, pour rediriger de HTTPS vers HTTP :


```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.votredomaine.fr/$1 [R,L]
```