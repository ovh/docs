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

Par **exemple**, c'est lui qui récupère les requêtes générées par les navigateurs Internet des visiteurs de votre site et qui retourne le contenu demandé à ces mêmes navigateurs Internet. Ils affichent ensuite le contenu de votre site web à votre visiteur.

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

> [!primary]
>
> Le fichier « .htaccess » peut être placé dans plusieurs dossiers différents. Vous devez uniquement respectez la règle d'un **seul** fichier « .htaccess » par dossier ou sous-dossier.
>
> Les paramètres définis dans un fichier « .htaccess » s'appliquent au répertoire où il est présent ainsi qu'à tous ses sous-répertoires.
>
> Pour éditer (ou créer) des répertoires, connectez-vous à l'espace FTP de votre hébergement. Au besoin, aidez-vous du guide « [Accéder à mon espace de stockage](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) ».
>

### Redirection simple
- Editez le fichier .htaccess :

```bash
RewriteEngine On
RewriteRule .* testing.php
```


Cette formule redirige chaque requête sur le script  **testing.php** .

- ou :

```bash
RewriteEngine On
RewriteRule letstest /test_wslash/testing.php
```


Cette formule redirige chaque requête  **/letstest**  sur le script  **/test_wslash/testing.php** .


### Rediriger exemple.com vers www.exemple.com
- Cela force l'adresse de votre site à être de type www.exemple.com, utile pour le référencement :

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^exemple.com$
RewriteRule ^(.*) http://www.exemple.com/$1 [QSA,L,R=301]
```



### Rediriger vers un dossier en particulier sans afficher le dossier concerne
- Si votre site est n'est pas présent dans le dossier cible, cela force l'adresse de votre site à être de type www.exemple.com, alors qu'en réalité la page appelée est : www.exemple.com/MonSite

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^exemple.com
RewriteCond %{REQUEST_URI} !^/MonSite
RewriteRule ^(.*)$ /MonSite/
```



### Reecriture des URL
Le module mod_rewrite permet la réécriture des URL.

- .htaccess :

```bash
RewriteEngine On
RewriteCond %{REQUEST_URI} !testing.php
RewriteRule (.*) testing.php?var=$1
```


Ces règles lancent le script  **testing.php**  avec la variable GET contenant l'URL mis par l'utilisateur.

- php :

```php
1. <?
2. print("testing server <br/>\n");
3. print("var: {$_GET['var']}\n");
4. ?>
```



### Rediriger automatiquement le visiteur en HTTPS quand il visite le site en HTTP
Le module mod_rewrite permet la réécriture des URL.


```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.votredomaine.fr/$1 [R,L]
```

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.