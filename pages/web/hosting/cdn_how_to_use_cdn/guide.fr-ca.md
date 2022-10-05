---
title: 'Accélérer mon site web en utilisant le CDN'
slug: accelerer-mon-site-web-en-utilisant-le-cdn
excerpt: 'Améliorez votre site en accélérant son chargement sur votre hébergement Web grâce au CDN'
section: 'Optimiser son site'
order: 03
---

**Dernière mise à jour le 23/12/2021**

## Objectif

Si vous souhaitez améliorer l'expérience de vos utilisateurs en accélérant votre site web, la technique la plus efficace est d'activer un CDN (Content Delivery Network). Ce dernier permet de mettre en cache les fichiers statiques tels que les images, les css et les javascript, dans des serveurs plus proches de vos clients.

**Découvrez comment gérer l'option CDN de votre hébergement web.**

## Définition

**Comment fonctionne un CDN ?**

Le CDN (Content Delivery Network) est littéralement un réseau dédié à la livraison de contenu. Il utilise plusieurs serveurs déployés autour du monde pour afficher votre site web. Plus ces serveurs sont proches de vos utilisateurs, plus votre site web est rapide pour eux.

Pour fonctionner, chaque serveur garde en mémoire cache une partie de votre site web. Généralement, il est conseillé d'y inclure les fichiers dits statiques : les images, les fichiers javascript et css qui permettent le bon fonctionnement de votre site mais qui ne sont que très rarement modifiés.

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Posséder une [offre d'hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/).

## En pratique

###  Mettre en place l'option CDN

> [!primary]
> 
> L'option CDN est déjà incluse dans les offres d'hébergement web Performance.

####  Si l'option CDN n'est pas commandée ou activée sur votre hébergement Web

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) puis sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et choisissez l'offre concernée. Cliquez sur `...`{.action} à droite de « Option CDN » puis sur `Commander un CDN`{.action} ou `Activer l'option`{.action} si l'option CDN est déjà incluse dans votre hébergement.

> [!primary]
> 
> Si vous possédez une option CDN antérieure au 19/11/2020, vous pouvez commander la nouvelle offre Shared CDN en cliquant sur `Mettre à jour le CDN vers la version supérieure`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

Vous serez redirigé vers la génération du bon de commande. Une fois la commande payée, votre service sera disponible en quelques minutes.

#### Si l'option CDN est déjà activée sur votre hébergement Web

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) puis sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et choisissez l'offre concernée. Dans l'onglet `Multisite`{.action}, cliquez sur la roue crantée à droite de l'entrée multisite puis cliquez sur `Modifier`{.action}.

Cochez la mention « Activer le CDN », cliquez sur `Suivant`{.action} puis sur `Valider`{.action}.

![CDN](images/manage_CDN_01_02.png){.thumbnail}

> [!warning]
> 
> Dans le cas d'un nom de domaine externe à OVHcloud ajouté en multisite sur l'hébergement web, vous devez mentionner l'adresse IP du CDN de votre hébergement dans la zone DNS du nom de domaine.<br>
> Consultez la [liste des adresses IP des clusters et hébergement web](https://docs.ovh.com/ca/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/) pour retrouver l'adresse IP spécifique du CDN de votre cluster.

 
**Pourquoi ne puis-je pas bénéficier de l'IP géolocalisée avec l'option CDN ?** <br>
<br>
Le CDN utilise le principe des IP anycast. Vous n'interrogerez pas le même serveur en fonction de votre géolocalisation, ce qui est très efficace pour réduire le temps de chargement de vos fichiers statiques. La géolocalisation d'adresse IP est donc inutile. <br>
Concernant le SEO (référencement sur les moteurs de recherche), la vitesse d'affichage de votre site web a plus d'importance que la géolocalisation de l'adresse IP de votre hébergement.

### Gérer votre Shared CDN 

> [!primary]
> 
> L'option shared CDN est déjà incluse dans les offres d'hébergement web Performance ou disponible à la commande depuis le 19/11/20. Pour les versions plus anciennes, référez-vous au paragraphe [Gérer votre CDN Business](#cdnbusiness).

#### Vider le cache du Shared CDN

Il est parfois utile de vider le cache du CDN, notamment lorsque vous modifiez vos fichiers statiques. Par exemple lors de la mise en production d'une nouvelle version de votre site. Il vous est possible de vider le cache pour chacune de vos entrées multisite.

Dirigez-vous sur l'onglet `Multisite`{.action} de votre hébergement, cliquez sur `...`{.action} à droite de l'entrée multisite puis `Purger le CDN`{.action}.

![CDN](images/manage_sharedCDN_01.png){.thumbnail}

#### Configurer les options du Shared CDN

Dirigez-vous sur l'onglet `Multisite`{.action} de votre hébergement, cliquez sur `...`{.action} à droite de l'entrée multisite puis sur `Modifier le CDN`{.action}. 

> [!warning]
> 
> Certaines options sont verrouillées sur l'offre Basic et nécessitent la souscription au [CDN security](https://www.ovhcloud.com/fr-ca/web-hosting/options/cdn/) ou au [CDN Advanced](https://www.ovhcloud.com/fr-ca/web-hosting/options/cdn/)

![CDN](images/manage_sharedCDN_02.png){.thumbnail}

- **Toujours en ligne** : Permet le maintien des données du CDN en ligne en cas de panne serveur.

- **HTTP/2** : Protocole permettant de meilleures performances de votre site web en termes de sécurité et de latence.

- **Dev-mode** : vous permet une désactivation du cache pendant le développement de votre site.

- **Brotli** :  type de compression permettant une optimisation de la taille de vos fichiers en cache.

- **Règle de cache** : Créez jusqu'à 5 règles. Elles définissent la fréquence de rafraîchissement de mise en cache pour certaines ressources précises sur votre site. ([suivre la prochaine étape](#cacherules)). 

Une fois vos options choisies, cliquez sur `Appliquer la configuration`{.action}, puis sur `Valider la configuration`{.action} dans la fenêtre suivante.

![CDN](images/manage_sharedCDN_03.png){.thumbnail}

##### **Créer une règle de mise en cache** <a name="cacherules"></a>

Pour ajouter une règle de cache sur l'un des éléments de votre site, dirigez-vous sur l'onglet `Multisite`{.action} de votre hébergement, cliquez sur `...`{.action} à droite de l'entrée multisite, puis sur `Configurer le CDN`{.action}.

Sous la mention **Règles de cache**, cliquez sur le bouton `Ajouter une règle`{.action}.

![CDN](images/manage_sharedCDN_04.png){.thumbnail}

- **Nom de règle** : Attribuez un nom à votre règle.

- **URI** : Indiquez le sous-ensemble de ressources de votre site web, via son chemin dans l'URL. Pour les offres CDN-Basic et CDN-Security, il n'est possible de saisir qu'une extension de fichier. 

- **Durée** : indiquez la durée de mise en cache de la ressource choisie.

- **Classement** :  Classez par ordre d'exécution vos règles (de la plus faible à la plus élevée).

Une fois vos choix réalisés, cliquez sur le bouton `Créer la règle`{.action}.

Les règles apparaissent dans une liste. Vous pouvez modifier une règle en cliquant sur `...`{.action} à droite de celle-ci, puis sur `Modifier la règle`{.action}; ou la supprimer en cliquant sur `Supprimer la règle`{.action}.

![CDN](images/manage_sharedCDN_05.png){.thumbnail}

Une fois vos règles configurées et vos options choisies, cliquez sur `Appliquer la configuration`{.action}, puis sur `Valider la configuration`{.action} dans la fenêtre suivante.

> [!warning]
>
> Pour bénéficier d'un quota de règles plus élevé et d'avantage de paramètres sur la création de règle de mise en cache, vous pouvez opter pour l'option [CDN Advanced](https://www.ovhcloud.com/fr-ca/web-hosting/options/cdn/)

#### Configurer les options du CDN Security

Dirigez-vous sur l'onglet `Multisite`{.action} de votre hébergement, cliquez sur `...`{.action} à droite de l'entrée multisite puis sur `Modifier le CDN`{.action}. 

> [!primary]
>  les options présentées ci-dessous nécessitent la souscription au [CDN security](https://www.ovhcloud.com/fr-ca/web-hosting/options/cdn/) ou au [CDN Advanced](https://www.ovhcloud.com/fr-ca/web-hosting/options/cdn/)

Dirigez-vous sur l'onglet `Multisite`{.action} de votre hébergement, cliquez sur `...`{.action} à droite de l'entrée multisite puis `Modifier le CDN`{.action}. 

- **Cross-Origin Resource Sharing (CORS)** : Indiquez, dans la liste, les noms de domaine extérieurs qui seront autorisés à accéder aux ressources de votre site web dans le but de les partager. 

	Une fois la fonction activée, cliquez sur `Editer la liste des ressources externes`{.action} pour ajouter les noms de domaine autorisés à partager vos ressources.

	![CDN](images/manage_CDNsecurity_01.png){.thumbnail}

	Une fois votre liste complétée, cliquez sur `Confirmer`{.action}.

> [!primary]
>
> Lorsque vous activez l'option CORS sans préciser de noms de domaine dans la liste, cela signifie que tous les noms de domaine sont autorisés à utiliser les ressources de votre site web.

- **HTTPS-redirect** : Protégez la globalité du trafic de votre site web en le redirigeant vers le protocole HTTPS de façon temporaire ou permanente.

	Une fois la fonction activée, cliquez sur le menu déroulant pour choisir entre `Redirection permanente (301)` ou `Redirection temporaire (302)`.

	![CDN](images/manage_CDNsecurity_02.png){.thumbnail}

- **HTTP Strict Transport Security (HSTS)** : Imposez l’accès à votre site web en HTTPS uniquement. Votre solution web est ainsi sécurisée contre les attaques par rétrogradation (ou attaques par repli).

	Une fois la fonction activée, déterminez la durée de vie pendant laquelle le navigateur appliquera la fonction HSTS sur votre site web. 

	![CDN](images/manage_CDNsecurity_03.png){.thumbnail}

> [!primary]
> 
> Lorsque que vous activez la fonction HSTS sur votre site, elle forcera le protocole HTTPS sur votre navigateur, jusqu'à la fin de la période dite "âge maximum", même après désactivation de la fonction dans votre espace client. Néanmoins, lorsque le cache est vidé sur le navigateur qui a déjà effectué une visite sur votre site, ce dernier appliquera le nouvel état de la fonction HSTS.

- **Mixed content** : Forcez le chargement de l’intégralité du contenu de vos pages web de manière sécurisée, participant ainsi à une expérience utilisateur optimale. Toutes les ressources de votre site, internes comme externes, doivent être disponibles en HTTPS pour éviter une erreur de sécurité du navigateur.

- **Pare-feu applicatif** : Le **W**eb **A**pplication **F**irewall (WAF) protège votre site des attaques frauduleuses telles que l’injection de code, les requêtes illégitimes ou le vol de données. Il vous couvre des principales failles connues du web en filtrant les requêtes et paquets transmis (la liste des failles est administrée par OVHcloud et régulièrement mise à jour pour étendre votre protection).  

> [!warning]
>
> Pour l'installation d'un [module en 1 clic OVHcloud](https://docs.ovh.com/ca/fr/hosting/modules-en-1-clic/), le WAF doit être désactivé afin d’éviter que l'installation du module ne soit bloquée.

> [!primary]
>
> Le WAF est entièrement administré par OVHcloud, la liste des failles est régulièrement mise à jour.

#### Configurer les options du CDN Advanced

Dirigez-vous sur l'onglet `Multisite`{.action} de votre hébergement, cliquez sur `...`{.action} à droite de l'entrée multisite puis sur `Modifier le CDN`{.action}. 

> [!primary]
>
>  Les options présentées ci-dessous nécessitent la souscription au [CDN Advanced](https://www.ovhcloud.com/fr-ca/web-hosting/options/cdn/)

- **Header HTTP de géolocalisation** : Déterminez le pays du visiteur pour personnaliser l'expérience proposée. Le code pays est ajouté automatiquement dans le header de chaque requête pour être manipulé par votre serveur d'origine. Les éléments d'identification dans le header se présentent sous les appellations  `Geo-Country-Code`, `Geo-Country-Name`, `Geo-Region`, `Geo-City`.

- **Prefetch** : Anticipez le chargement de la ressource suivante. Préchargez-la automatiquement dans le cache CDN grâce au *header link* de votre site web. Ce mécanisme est principalement utilisé pour charger les CSS, JavaScript, images, favicons ou encore des polices web qui sont requis par le thème du site web. 

	Dans l'exemple, ci-dessous, lorsque vous êtes sur la page courante affichant « Hello », une sous-requète déclenche le pré-chargement de la ressource `/cache/style.css` .  

	```	
	<?php
	header("Link: </cache/style.css>; rel=prefetch");
	print 'Hello'
	?> 
	```

- **Mobile redirect** :  Redirigez automatiquement les visiteurs « Mobile » vers un site web optimisé. Au choix : rediriger systématiquement vers la racine d'un autre site web, ou conserver l'URL en ne remplaçant que le domaine (ou le sous-domaine).

- **Purge avancée** : Personnalisez votre purge en choisissant les éléments du cache à vider : tout le site, un dossier, une URI, une extension de fichiers ou à l'aide d'une expression régulière personnalisée. 

	Depuis l'onglet `Multisite`{.action}, cliquez sur le bouton `...`{.action} à droite de l'entrée multisite puis sur `Purger le CDN`{.action}. 

	![CDN](images/manage_CDNadvanced_01.png){.thumbnail}

- **Query String** : Gestion de la mise en cache de contenu, basée sur les paramètres (aussi appelés *Query String*) de la requête URL. En fonction de votre configuration, choisissez le comportement du cache CDN:
	- *Désactivé* : La ressource est mise en cache avec ses paramètres non triés. Ce qui va créer, par exemple, 2 itérations dans le cache du CDN pour 2 URL ayant les mêmes paramètres dans un ordre différent.
	- *Activé - Trier les paramètres* : La ressource est mise en cache en triant ses paramètres. Un tri se fera avant de stocker l'URL dans le cache du CDN. Par exemple, seule une itération sera gardée pour 2 URL ayant les mêmes paramètres dans un ordre différent.
	- *Activé - Ignorer les paramètres* : La ressource est mise en cache sans aucun paramètre. Le cache CDN ne tiendra pas compte des paramètres saisis dans l'URL, il stockera donc l'URL sans les paramètres dans le cache.

- **Prewarm** : Forcez la mise en cache permanente de vos ressources primordiales. Le CDN anticipe et rafraîchit automatiquement le cache, sans attendre de requête de l'utilisateur. Cette fonction s'applique uniquement sur du contenu statique, ayant un TTL supérieur à 0, et la ressource ne doit pas excéder 1GB. Une jauge vous indique le niveau de consommation des ressources en *Prewarm*, en fonction de la liste de vos URLs. Le total des ressources appelées par ces URLs ne doit pas dépasser les 1GB.

	Pour définir la liste des URLs qui doivent être en *Prewarm*, cliquez sur `Editer la liste des URLs`{.action}.

	À l'aide des champs `Protocole`, `Nom de domaine` et `Chemin de la ressource`, tapez un des liens vers une ressource que vous souhaitez ajoutez à la fonction **Prewarm**, puis cliquez sur `Ajouter`{.action}.

	Une liste se forme dans le cadre inférieur, avec l'ensemble des liens que vous avez listés, vous pouvez supprimer celui de votre choix en le sélectionnant, puis en cliquant sur `Retirer`{.action}.

	![CDN](images/manage_CDNadvanced_02.png){.thumbnail}

- **Cache rule** : Créez jusqu'à 100 règles. Elles définissent la fréquence de rafraîchissement de mise en cache pour certaines ressources précises sur votre site. Poursuivez la lecture du guide à [la prochaine étape](#cacherulesadv) pour plus d'informations.

Une fois vos options choisies, cliquez sur `Appliquer la configuration`{.action}, puis sur `Valider la configuration`{.action} dans la fenêtre suivante.

##### **Créer une règle de mise en cache avancée** <a name="cacherulesadv"></a>

Pour ajouter une règle de cache sur l'un des éléments de votre site, dirigez-vous sur l'onglet `Multisite`{.action} de votre hébergement, cliquez sur `...`{.action} à droite de l'entrée multisite, puis sur `Configurer le CDN`{.action}.

Sous la mention **Règles de cache**, cliquez sur le bouton `Ajouter une règle`{.action}.

![CDN](images/manage_CDNadvanced_03.png){.thumbnail}


* **Nom de règle** : Attribuez un nom à votre règle.
* **Type de ressource** : Choisissez parmi les choix ci-dessous:
    * **Extension** : Veuillez saisir une extension de fichier valide sans mettre de point, par exemple : css
    * **Dossier** :  Veuillez saisir un chemin valide pour l'un des dossiers présents dans le répertoire racine de votre site web.
    * **Expression régulière personnalisée** : Elle s'applique sur toutes les URI de votre site web.
    * **URI** : Indiquez le sous-ensemble de ressources de votre site web, via son chemin dans l'URL.
* **Ressource** : définissez les attributs en fonction du type de ressource choisie.
* **Durée** : Indiquez la durée de mise en cache de la ressource choisie.
* **Classement** :  Classez par ordre d'exécution vos règles (de la plus faible à la plus élevée).

Une fois vos choix réalisés, cliquez sur le bouton `Créer la règle`{.action}.

Les règles apparaissent dans une liste. Vous pouvez modifier une règle en cliquant sur `...`{.action} à droite de celle-ci, puis sur `Modifier la règle`{.action}. Vous pouvez la supprimer en cliquant sur `Supprimer la règle`{.action}.

![CDN](images/manage_CDNadvanced_04.png){.thumbnail}

Une fois vos règles configurées et vos options choisies, cliquez sur `Appliquer la configuration`{.action}, puis sur `Valider la configuration`{.action} dans la fenêtre suivante.

### Visualiser les statistiques du CDN

Dans l'onglet `Multisite`{.action} de votre hébergement, sous le tableau, vous pouvez visualiser les statistiques de votre CDN, indiquant le nombre de requêtes par minutes mesurées sur celui-ci.

![CDN](images/manage_CDNstat_01.png){.thumbnail}

### Gérer votre CDN Business <a name="cdnbusiness"></a>

> [!primary]
> 
> L'option CDN est déjà incluse dans les offres d'hébergement web Performance ou les offres commandées avant le 19/11/2020.

#### Vider le cache du CDN

Il est parfois utile de vider le cache du CDN, notamment lorsque vous modifiez vos fichiers statiques. Par exemple lors de la mise en production d'une nouvelle version de votre site. Dans ce cas, vous pouvez vider totalement le cache du CDN.

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) puis sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et choisissez l'offre concernée. Cliquez sur `...`{.action} à droite de « Option CDN » puis sur `Vider le cache`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Comment mettre en cache mes fichiers dans le CDN ?

**En utilisant un CMS**

Les principaux CMS proposent de nombreux plugins permettant de configurer la mise en cache des fichiers statiques afin qu'ils soient pris en compte automatiquement par le CDN. D'autres permettent la configuration automatique des fichiers statiques en activant la mise en cache intégrée au CMS. Pour plus d'informations, référez-vous à la documentation officielle du CMS que vous utilisez ou de l'éditeur du plugin.

**Sans utiliser de CMS**

Si vous n'utilisez pas de CMS, vous pouvez aussi bénéficier du cache du CDN. Pour cela, vous devez ajouter des headers sur les requêtes HTTP. Il existe plusieurs techniques permettant d'ajouter ces headers. L'une des plus simples est de définir des règles au sein d'un fichier .htaccess, en fonction des extensions de fichiers.

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
> La mise en cache via les headers HTTP permet la mise en cache au sein du CDN mais aussi au sein du navigateur de vos utilisateurs. Ainsi, pour éviter que vos visiteurs ne visualisent une version en cache trop ancienne, il est recommandé de modifier les noms des fichiers à chaque nouvelle version.
>

### Désactiver l'option CDN pour un site web

Cette action permet de désactiver le CDN pour une ou plusieurs de vos entrées multisite, sans supprimer l'option CDN de votre hébergement Web.

Rendez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) puis sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et choisissez l'offre concernée. Dans l'onglet `Multisite`{.action}, cliquez sur `...`{.action} à droite de l'entrée multisite puis sur `Modifier`{.action}.

Décochez la mention « Activer le CDN », cliquez sur `Suivant`{.action} puis sur `Valider`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Supprimer l'option CDN sur votre hébergement

Cette action a pour but de supprimer l'option CDN pour l'ensemble de votre hébergement Web.

Rendez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) puis sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et choisissez l'offre concernée. Cliquez sur `...`{.action} à droite de « Option CDN » puis sur `Résilier le CDN`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Cliquez sur `Valider`{.action} pour confirmer la résiliation.

> [!warning]
>
> Un e-mail contenant la procédure de fermeture de votre CDN vous sera envoyé. Il est nécessaire de suivre les instructions de celui-ci afin de confirmer ou annuler la demande. 
> 

### Vérifier que votre CDN est en service

Pour vous assurer que le CDN est bien actif sur votre nom de domaine, il est possible d'effectuer une vérification via un terminal avec la commande suivante :

```
curl -i http://yourpersonnaldomain.ovh/
```

Si votre nom de domaine est bien pris en charge par le CDN, vous obtiendrez un résultat comme ci-dessous :

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Vary: Accept-Encoding
X-Request-ID: 123456789
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 00.111.22.333/44
X-Cacheable: Cacheable
Accept-Ranges: bytes
Transfer-Encoding: chunked
X-IPLB-Instance: 12345
```

Les mentions « *X-CDN* » permettent de confirmer que vous passez bien par le CDN.

Dans le cas où le nom de domaine ne passe pas par le CDN, vous obtenez un résultat comme ci-dessous :

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Server: Apache
X-Powered-By: PHP/7.1
Vary: Accept-Encoding
X-IPLB-Instance: 12345
```

L'absence de la mention « *X-CDN* » indique que vous ne passez pas à travers le CDN.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/).
