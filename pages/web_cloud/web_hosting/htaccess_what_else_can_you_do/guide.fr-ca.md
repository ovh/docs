---
title: "Tutoriel - Opérations réalisables avec un fichier « .htaccess »"
excerpt: "Découvrez quelques exemples d'opérations réalisables avec un fichier « .htaccess »"
updated: 2023-05-23
---

**Dernière mise à jour le 23/05/2023**

## Objectif

Ce tutoriel a pour objectif de vous présenter les principales fonctionnalités du fichier « .htaccess » pour votre hébergement Web.

Le fichier « .htaccess » est un fichier de configuration (HTTP) Apache exécuté par le serveur Web de votre hébergement Web. Il permet de définir des règles spécifiques pour un répertoire et l'ensemble de ses sous-répertoires. Plusieurs fichiers « .htaccess » peuvent être créés dans [l'espace FTP](/pages/web_cloud/web_hosting/ftp_connection/) de votre hébergement Web. 

S'il n'existe pas déjà dans votre espace FTP, vous pouvez l'ajouter en créant un fichier que vous nommerez « **.htaccess** » dans le répertoire pour lequel vous souhaitez appliquer une ou plusieurs des règles décrites dans ce tutoriel.

Pour utiliser correctement le fichier « .htaccess », vous devez connaître et respecter les règles suivantes : 

- **un seul** fichier « .htaccess » par répertoire ou sous-répertoire pour éviter les conflits entre différents fichiers « .htaccess » ;
- le fichier « .htaccess » est invisible pour les internautes qui visitent votre site Web ;
- les règles déclarées dans un fichier « .htaccess » s'appliquent à l'ensemble du répertoire où le fichier « .htaccess » est installé, ainsi qu'à tous les sous-répertoires de ce même répertoire.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>
> Les exemples qui vont suivre sont à mettre en place dans un fichier « .htaccess ». Attention, les règles que vous définissez dans ce fichier ont des conséquences directes sur votre site web. Vérifiez systématiquement les règles que vous ajoutez avant de les appliquer à votre site web. 
> 

**Découvrez les principales opérations réalisables à l'aide d'un fichier « .htaccess ».**

## Prérequis

- Disposer d'un [hébergement mutualisé OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/)

## En pratique

### Autoriser ou restreindre l'accès à un répertoire ou un site Web pour une ou plusieurs adresses IP

Cette fonctionnalité est très utile et renforce la sécurité pour vos sites web. Elle peut contribuer à diminuer les risques de piratage de votre site Web.

Pour plus d'informations, consultez notre tutoriel : [« Comment bloquer l'accès à mon site pour certaines adresses IP via un fichier .htaccess ? »](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Définir un mot de passe d'accès chiffré pour accéder à un répertoire ou un site web

Via le fichier « .htaccess », vous pouvez mettre en place un accès protégé (par un mot de passe chiffré) à vos données présentes sur votre hébergement.

Pour plus d'informations, consultez notre tutoriel [« Protéger l'interface d'administration de votre site par un fichier .htaccess »](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password/).

### Spécifier un fichier d'index différent

Par défaut, le fichier **index** d'un répertoire est *index.html*, *index.htm* ou *index.php*. Si vous préférez que cela soit un autre fichier, vous pouvez ajouter une ligne de ce type dans votre « .htaccess » :

```bash
DirectoryIndex File_Name
```

Par exemple, si vous voulez utiliser la page **accueil.html** comme page d'index, ajoutez la ligne suivante :

```bash
DirectoryIndex accueil.html
```

### Empêcher le listage du contenu d'un repertoire

Pour empêcher les internautes de lister l'ensemble des fichiers contenus dans un répertoire en l'absence de fichier **index** (.cgi, .html, .php, etc.), créez un fichier « **.htaccess** » contenant la ligne ci-dessous :

```bash
Options -Indexes
```

### Faire de la réécriture d'URL

Grâce au module **mod_rewrite** du serveur Web HTTP Apache pré-installé sur votre hébergement Web, cette fonctionnalité permet de rediriger :

- toutes les requêtes HTTP vers un seul fichier de votre site web ;
- une partie des requêtes HTTP vers un seul fichier de votre site web ;
- votre nom de domaine vers son sous-domaine en « www » ;
- les requêtes vers un dossier en particulier, sans afficher le dossier concerné ;
- automatiquement un visiteur vers votre site web en HTTPS lorsqu'il le consulte avec une URL en HTTP.

Retrouvez plus d'informations dans notre tutoriel : [« Réécrire l'URL d'accès à mon site grâce au mod_rewrite via le fichier .htaccess »](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite/).

#### Rediriger les messages d'erreur

Pour personnaliser et/ou rediriger vos messages d'erreurs sur une page web, créez un fichier « **.htaccess** » contenant la ligne de code suivante :

```bash
ErrorDocument Error_Code_Number Message_Or_Destination
```

Remplacez uniquement "**Error_Code_Number**" par le numéro du code erreur HTTP Apache correspondant. 

Retrouvez plus d'informations sur cette fonctionnalité dans la [documentation officielle Apache](https://httpd.apache.org/docs/trunk/fr/custom-error.html){.external}.

Les codes erreur HTTP les plus courants sont :

- 401 : Authorization required : cette erreur est générée lorsqu'un visiteur saisit un mauvais login/mot de passe lors de l'accès à un fichier ou répertoire protégé.
- 403 : Access denied : cette erreur s'affiche lors de l'accès à un répertoire dans lequel le fichier *index.html* (ou *index.cgi*, etc.) est absent et si la configuration du serveur interdit l'affichage des fichiers du répertoire.
- 404 : Not Found : le fichier que le visiteur essaie de voir n'existe pas.
- 500 : Internal Server Error : cette erreur s'affiche lorsqu'un script ne s'est pas exécuté correctement ou que le script ou les droits du script sont incorrects.

Remplacez **"Message_Or_Destination"** par l'action à effectuer. Pour afficher un message directement, tapez le message correspondant entre guillemets. Pour rediriger sur une page précise, renseignez le chemin d'accès à cette page. 

Retrouvez ci-dessous deux exemples concrets :

- Vous souhaitez indiquer *"Désolé, vous n'avez pas le droit d'accéder à ce fichier"* si le visiteur rencontre une erreur **403**. Ajoutez la ligne ci-dessous dans votre fichier « .htaccess » :

```bash
ErrorDocument 403 "Désolé, vous n'avez pas le droit d'accéder à ce fichier"
```

- Vous souhaitez renvoyer les erreurs **404** vers votre page personnalisée *404.html* (pour votre domaine : domain.tld). Ajoutez la ligne ci-dessous dans votre fichier « .htaccess » :

```bash
ErrorDocument 404 http://domain.tld/404.html
```

Vous pouvez aussi rediriger une erreur vers un script **C**ommon **G**ateway **I**nterface (**CGI**). Vous pouvez coder un script en **CGI** pour, par exemple, effectuer les actions suivantes :
 
- afficher un message ;
- rediriger le visiteur vers un autre fichier selon l'URL demandée initialement (disponible dans la variable d'environnement **REQUEST_URI**) ;
- envoyer un e-mail.

Par exemple, pour rediriger une erreur vers un script **CGI**, rajoutez la ligne suivante dans votre fichier « .htaccess » :

```bash
ErrorDocument 404 /cgi-bin/erreur.cgi?type=404
```

La ligne ci-dessus redirigera le visiteur qui rencontre une erreur **404** vers votre script *erreur.cgi*. Celui-ci exécutera les directives qu'il contient, spécifiquement par rapport à l'erreur **404**.

## Aller plus loin <a name="go-further"></a>

[Se connecter à l'espace FTP de son hébergement Web](/pages/web_cloud/web_hosting/ftp_connection/)

[Bloquer l'accès à mon site pour certaines adresses IP via un fichier .htaccess ?](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Protéger l'interface d'administration de votre site par un fichier .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password/)

[Réécrire l'URL d'accès à mon site grâce au mod_rewrite via le fichier .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
