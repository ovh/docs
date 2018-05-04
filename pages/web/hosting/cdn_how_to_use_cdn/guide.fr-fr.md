---
title: 'Accelerer mon site web en utilisant le CDN'
slug: accelerer-mon-site-web-en-utilisant-le-cdn
legacy_guide_number: 1290
excerpt: 'Ameliorez votre site en accelerant son chargement sur votre hebergement Web grace au CDN'
section: 'Optimiser son site'
---

Si vous souhaitez améliorer l'expérience de vos utilisateur en accélérant votre site web, la technique la plus efficace est d'activer un CDN (Content Delivery Network). Ce dernier permet de mettre en cache les fichiers statiques tel que les images, les css et les javascripts, dans des serveurs plus proches de vos clients.

L'activation d'un CDN est automatique dans les offres d'hébergements web si vous activez l'option CDN. Celle-ci est offerte dans les offres performances.


## Comment fonctionne un CDN ?
Le CDN (Content Delivery Network) est littéralement un réseau dédiée à la livraison de contenu. C'est à dire qu'il s'agit de nombreux serveurs déployés tout autour du monde qui ont en charge de délivrer votre site web. En effet, plus ces serveurs sont proches de vos utilisateurs, plus votre site web est rapide pour eux.

Pour fonctionner, chaque serveur garde en mémoire cache une partie de votre site web. Généralement, il est conseillé d'y inclure les fichiers dits statiques : les images, les fichiers javascripts et css qui permettent le bon fonctionnement de votre site mais qui ne sont que trés rarement modifiés.

Cependant, les pages qui sont modifiés à chaque visites, tels que les sections d'administration de blogs, ou bien encore les mécanismes de panier dans les sites web ne doivent pas être mis en cache, au risque que l'ensemble de vos clients ne voient la même chose. Dans ces cas, le serveur CDN ne bénéficiant pas du cache, récupère la page directement auprés de votre hébergement web avant de la retourner, tel quel, à votre utilisateur.


## Comment activer l'option CDN ?
L'option CDN s'active au sein de la section "Hébergement web" de votre espace client. Le "CDN" disponible dans le menu concerne les clients ayant commandé un CDN Infrastructure qui est recommandée pour les utilisateurs de serveurs dédiés.

Au sein de votre espace "Hébergement web", la ligne "Option CDN" vous indique si votre CDN est activé. Si ce n'est pas le cas, vous pouvez "commander un CDN".

- Sélectionnez le CDN que vous souhaitez activer. La différence se joue habituellement sur le nombre de Pop, c'est à dire le nombre de serveurs cache disponibles dans le monde. Plus d'informations ici [https://www.ovh.com/fr/hebergement-web/geocache.xml](https://www.ovh.com/fr/hebergement-web/geocache.xml){.external}
- Sélectionnez la durée d'engagement (12 mois par défaut)
- Validez les contrats
- Vous serez redirigé vers le bon de commande. Une fois la commande payée, votre service sera disponible quelques minutes après et vous recevrez une facture.


## Comment vider le cache du CDN ?
Il est parfois utile de vider le cache du CDN. C'est particulierement le cas lorsque vous modifiez vos fichier statiques, par exemple lors de la mise en production d'une nouvelle version de votre site. Dans ces cas, vous pouvez demander de vider totalement le cache du CDN.

Pour cela, rendez vous au sein de la section "hébergement web" de votre espace client puis sélectionnez l'hébergement concerné. Vous trouverez dans les informations générales, près de 'Option CDN', un bouton "Vider le cache".



> [!warning]
>
> Vider le cache du CDN prend quelques instants.
> 


## Comment desactiver l'option CDN ?
Pour résilier cette option, rendez vous dans la section "hébergement web" de votre espace client et sélectionnez votre l'hébergement concerné. Vous trouverez dans les informations générales, près de 'Option CDN', un bouton "Résilier le CDN".



> [!warning]
>
> La résiliation du CDN prend quelques minutes.
> 


## Comment mettre en cache mes fichiers dans le CDN ?
**En utilisant un CMS**

Les principaux CMS tel que Wordpress distribuent de nombreux plugins permettant de les configurer afin que les fichiers statiques soient pris en compte automatique par le CDN. Le plus connu est probablement W3 Total Cache [https://wordpress.org/plugins/w3-total-cache/](https://wordpress.org/plugins/w3-total-cache/){.external} pour wordpress. D'autres CMS tel que prestashop permettent la configuration automatique des fichiers statiques en activant le cache (Voir le guide [http://doc.prestashop.com/pages/viewpage.action?pageId=20840893](http://doc.prestashop.com/pages/viewpage.action?pageId=20840893){.external}, section 'Concaténation, Compression et mise en Cache (CCC)'). Les autres CMS permettent d'activer le cache sur les fichiers statiques. Référez vous à leur documentation.

**Sans utiliser de CMS**

Si vous n'utilisez pas de CMS, vous pouvez aussi bénéficier du cache du CDN. Pour cela, vous devez ajouter des headers sur les requêtes HTTP. Il existe plusieurs techniques permettant d'ajouter ces headers. L'une des plus simple est de définir des régles au sein d'un fichier .htaccess en fonction des extensions de fichiers.


```htaccess
1. # Cache des images durant 1 semaine
2. <FilesMatch "\.(jpg|jpeg|png|gif)$">
3. Header set Cache-Control "max-age=604800, public"
4. </FilesMatch>
5. 
6. # Cache des javascript et CSS durant 1 mois
7. <FilesMatch "\.(js|css)$">
8. Header set Cache-Control "max-age=2592000"
9. </FilesMatch>
```



> [!warning]
>
> La mise en cache via les headers HTTP permet la mise en cache au sein du CDN mais aussi au sein du navigateurs de vos utilisateurs. Ainsi, pour éviter que vos client ne bénéficient d'une version en cache trop longtemps, il est recommandé de modifier les noms de fichiers à chaque nouvelle version.
> 


## Est ce que je peux beneficier de l'IP geolocalisee avec un CDN ?
Le CDN utilise le principe des IP anycast : avec la même adresse IP, vous n'arriverez pas sur le même serveur en fonction de votre localisation dans le monde, ce qui est trés efficace pour réduire le temps de chargement de vos fichiers statiques.

Ainsi, l'utilisation de la géolocalisation d'adresse IP n'a pas de sens avec les IP anycast. Mais ne vous inquiétez pas pour votre SEO (référencement sur les moteurs de recherche), la vitesse des sites web est prise en compte et a plus d'impact que la localisation des adresses IP de nos jours.