---
title: Tutoriel - Comment réécrire l'URL d'accès à mon site grâce au mod_rewrite via le fichier .htaccess ?
slug: htaccess-reecriture-url-mod-rewrite
excerpt: Découvrez comment réécrire l'URL d'accès à votre site grâce au mod_rewrite via le fichier .htaccess
section: Réécriture et authentification
order: 03
---

**Dernière mise à jour le 16/12/2022**

## Objectif

Le « **mod_rewrite** » est l'un des modules disponibles via le serveur Web HTTP **Apache**. **Apache** est installé sur l'ensemble de notre infrastructure d'hébergements mutualisés. Ce serveur web permet de gérer l'ensemble des requêtes HTTP émises vers votre hébergement web.

Par **exemple**, c'est lui qui récupère les requêtes HTTP générées par les navigateurs Internet des visiteurs de votre site et qui leur retourne le contenu demandé par ces mêmes requêtes. Les navigateurs Internet affichent ensuite le contenu de votre site web à votre visiteur.

Le « **mod_rewrite** » permet par exemple de réécrire et rediriger :

- Un visiteur qui saisit votre URL en « HTTP » directement vers l'URL de votre site web en « HTTPS ».
- L'ensemble des URLs utilisées pour votre site web vers un dossier ou un fichier spécifique.
- Un visiteur qui saisit votre URL sans « www » directement vers l'URL de votre site web avec les « www ».

Le « **mod_rewrite** » offre une infinité de possibilités. Nous allons vous présenter ci-après quelques exemples d'utilisation parmi les plus courants.

> [!success]
>
> Si vous souhaitez approfondir vos connaissances sur l'utilisation du « **mod_rewrite** » d'Apache ou que l'exemple que vous recherchez n'est pas présent dans le tutoriel qui va suivre, consultez la [documentation officielle d'Apache](https://httpd.apache.org/docs/2.4/fr/mod/mod_rewrite.html).
>

**Découvrez comment réécrire l'URL d'accès à votre site grâce au mod_rewrite via le fichier .htaccess**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Ce tutoriel est mis à votre disposition afin de vous aider au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>
> Les exemples qui vont suivre sont à mettre en place dans un fichier « .htaccess ». Attention, les règles que vous définissez dans ce fichiers ont des conséquences directes sur votre site web. Vérifiez systématiquement les règles que vous ajoutez avant de les appliquer à votre site web.
>

## Prérequis

- Disposer d'un [hébergement mutualisé OVHcloud](https://www.ovhcloud.com/fr/web-hosting/)

## En pratique

Retrouvez ci-après quelques exemples parmi les plus courants d'utilisation du « **mod_rewrite** » d'Apache. Certains d'entre eux peuvent également favoriser le référencement SEO de votre site web.

> [!primary]
>
> Le fichier « .htaccess » peut être placé dans plusieurs dossiers différents. Vous devez uniquement respectez la règle d'un **seul** fichier « .htaccess » par dossier ou sous-dossier.
>
> Les paramètres définis dans un fichier « .htaccess » s'appliquent au répertoire où il est présent ainsi qu'à tous ses sous-répertoires.
>
> Pour éditer (ou créer) des répertoires, connectez-vous à l'espace FTP de votre hébergement. Au besoin, aidez-vous du guide « [Accéder à mon espace de stockage](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) ».
>

### Rediriger toutes les requêtes HTTP vers un seul fichier de votre site

Editez le fichier « .htaccess » présent à la racine du répertoire qui contient votre site web. Placez-y le code suivant à l'intérieur (en remplaçant dans notre exemple **test.php** par le nom de votre propre fichier):

```bash
RewriteEngine On
RewriteRule .* test.php
```

Dans notre exemple, toutes les requêtes effectuées vers votre site web sont redirigées vers le fichier  **test.php** .

### Rediriger une partie des requêtes HTTP vers un seul fichier de votre site web

Editez le fichier « .htaccess » présent à la racine du répertoire qui contient votre site web. Placez-y le code suivant à l'intérieur (en remplaçant dans notre exemple les valeurs **thetest** et **/test_wslash/test.php** par les nom de vos propres fichiers):

```bash
RewriteEngine On
RewriteRule thetest /test_wslash/test.php
```

Dans notre exemple, toutes les requêtes HTTP qui contiennent  **/thetest**  sont redirigées vers le fichier  **/test_wslash/test.php** .

### Rediriger votre nom de domaine vers son sous-domaine en « www »

Cette règle de réécriture force l'adresse/URL de votre site web à être réécrite avec son sous-domaine en « www ».

Editez le fichier « .htaccess » présent à la racine du répertoire qui contient votre site web. Placez-y le code suivant à l'intérieur (en remplaçant dans notre exemple **domain.tld** par votre propre nom de domaine):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld$
RewriteRule ^(.*) http://www.domain.tld/$1 [QSA,L,R=301]
```

Cette réécriture d'URL peut favoriser le référencement SEO de votre site web.

### Rediriger les requêtes vers un dossier en particulier sans afficher le dossier concerné

Lorsque vous utilisez un hébergement mutualisé OVHcloud, votre nom de domaine (par exemple **domain.tld**) est déclaré en `Multisites` pour afficher le contenu d'un dossier cible que l'on appelle aussi `dossier racine`. Vous pouvez définir le nom de ce `dossier racine` comme bon vous semble.

Consultez notre guide sur la [configuration d'un multisite sur un hébergement mutualisé](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) si vous souhaitez plus d'informations sur le sujet.

Certains utilisateurs ne placent pas leur site web directement à la base du `dossier racine`. Ils créent alors un sous-dossier (par exemple : **MyWebsite**) dans leur `dossier racine` pour y placer leur site web.

Dans ce cas, l'URL pour accéder au site aura la forme suivante : **http://domain.tld/MyWebsite**.

Si votre site web n'est pas présent directement dans le `dossier racine` déclaré en multisites pour votre nom de domaine et que vous ne souhaitez pas afficher le nom du dossier dans lequel il se trouve, éditez le fichier « .htaccess » présent à la racine du répertoire qui contient votre site web. 

Placez-y le code suivant à l'intérieur (en remplaçant dans notre exemple les valeurs **domain.tld** par votre nom de domaine et **MyWebsite** par le nom de votre propre dossier):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld
RewriteCond %{REQUEST_URI} !^/MyWebsite
RewriteRule ^(.*)$ /MyWebsite/
```

Dans notre exemple, cela force l'adresse de votre site à être de type **http://domain.tld**, alors qu'en réalité la page appelée est **http://domain.tld/MyWebsite**.

### Rediriger automatiquement un vitisteur vers votre site web en HTTPS lorsqu'il le consulte avec une URL en HTTP

Les certificats SSL permettent de chiffrer les échanges effectuées en HTTP avec votre site web. Cela empêche des personnes ou des robots malveillants de capter clairement des données sensibles comme des coordonnées bancaires par exemple.

Si vous ne disposez pas d'un certificat SSL, consultez notre guide sur la [gestion d'un certificat SSL sur un hébergement mutualisé OVHcloud](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/).

Certains de vos visiteurs peuvent oublier de saisir l'URL d'accès à votre site en **https://** : cela représente un risque non négligeable pour les données échangées entre votre site web et leurs navigateurs Internet.

Pour empêcher cela, éditez le fichier « .htaccess » présent à la racine du répertoire qui contient votre site web. Placez-y le code suivant à l'intérieur (en remplaçant dans notre exemple **domain.tld** par votre propre nom de domaine):

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.domain.tld/$1 [R,L]
```

Dans notre exemple, toutes les requêtes effectuées avec une URL en « **http://** » seront automatiquement réécrites en « **https://** ». Vos visiteurs seront aussi redirigés vers votre site en « **https://** ».

## Aller plus loin <a name="go-further"></a>

[Bloquer l'accès à mon site web pour certaines adresses IP via un fichier .htaccess](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/)

[Protéger l'interface d'administration de votre site par un fichier .htaccess](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.