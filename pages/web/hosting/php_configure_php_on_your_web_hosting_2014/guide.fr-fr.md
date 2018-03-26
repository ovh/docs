---
title: Configurer le PHP sur son hébergement web (Mutu 2014)
slug: configurer-le-php-sur-son-hebergement-web-mutu-2014
legacy_guide_number: 1207
section: PHP
---

Ce guide vous aidera à configurer le PHP sur votre hébergement web chez OVH.



> [!warning]
>
> ATTENTION : Le fichier " .ovhconfig" est présent par défaut depuis les Hébergements Web 2014. Sur les offres antérieures, il faudra le créer et le placer à la racine de votre espace disque.
> Il n'est pas ajouté automatiquement sur les anciens Plans et lors d'un changement d'offre, car certains paramètres peuvent ne pas être compatibles selon la version PHP que vous utilisez.
> 

NB : Le fichier " **.ovhconfig**" ne peut être placé qu'à la racine ou dans un répertoire de premier niveau,  **il n'est pas conseillé**  d'utiliser plusieurs fichiers pour faire cohabiter des configurations PHP différentes sur un même hébergement.


## Comment ajuster vos preferences PHP ?

### Comment choisir sa version PHP ?


> [!success]
>
> Vous trouverez dans ce guide comment activer le PHP FPM et définir la version de PHP grâce au fichier .ovhconfig, vous pouvez si vous le souhaitez réaliser cela plus simplement depuis votre espace client en vous aidant de ce guide : [Configurer la version de PHP depuis votre espace client](https://docs.ovh.com/fr/hosting/mutualise-configurer-la-version-de-php-depuis-votre-espace-client/){.external}
> 

Pour configurer PHP grâce au fichier .ovhconfig manuellement, il vous suffit de déposer le fichier " **.ovhconfig**" à la racine de votre espace disque, via FTP.

Pour utiliser PHP 5.6 par exemple, ce fichier " **.ovhconfig**" devra contenir le code :


```bash
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


### Quelles versions de PHP sont disponibles ?
Vous pouvez utiliser les versions PHP suivantes :

- PHP 7.2
- PHP 7.1
- PHP 7.0
- PHP 5.6 (version par défaut)
- PHP 5.5 (bientôt obsolète non recommandée)
- PHP 5.4 (obsolète)
- PHP 5.3 (obsolète)

**Attention, une fois le "**  **.ovhconfig**" en place, la version PHP utilisée est celle définie par app.engine.version. Les directives de votre .htaccess comme SetEnv PHP_VER ... sont alors ignorées


### J'ai cree mon .ovhconfig et j'ai une erreur &quot;Not Implemented&quot;
Cela signifie que le moteur ou la version spécifiée dans votre " **.ovhconfig**" n'existe pas. N'hésitez pas à regarder l'error.log de votre site afin d'avoir plus d'information sur l'erreur.


### Que signifie la directive environment ?
Elle permet de spécifier le cache des fichier statiques ainsi que le comportement des erreurs PHP

En mode  **development**  :

- aucun cache n'est appliqué
- les logs PHP apparaissent sur votre site (display_errors=On)

En mode  **production**  : (option par défaut)

- les fichiers statiques tels que images, vidéo, audio ont une expiration plus grande ce qui maximise la mise en cache des fichiers sur les navigateurs
- les logs PHP n'apparaissent pas sur votre site (display_errors=Off)


### Que signifie la directive http.firewall ?
Cette directive vous permet d'activer un firewall applicatif de type mod_security, pour cela mettez :  security

http.firewall est par défaut à none


### Modifier l'environnement d'execution grace a la directive container.image
Les hébergements Web OVH permettent de modifier l'environnement d'exécution dans lequel tourne votre site web. Cela permet soit de bénéficier d'une configuration stable sur le long terme, soit de bénéficier des dernières mises à jour sur les logiciels fournis par OVH.

Vous pouvez pour cela ajouter la ligne suivante :


```bash
; __container.image__
;
; values:
;   stable: current recommended and up-to-date environment
;   legacy: former stable environment, only receiving security updates, being feature-freezed
;   testing: "experimental" environment dedicated to functionalities beta testing before being merged into stable
;
container.image=stable
```

Cette directive s'applique à l'intégralité de votre hébergement et ne peut être présente que dans le fichier .ovhconfig présent à la racine de votre hébergement.

Dans le cas où vous disposez de plusieurs .ovhconfig dans des répertoires différents sur le même hébergement, la directive "container.image" ne peut être définie qu'à la racine de votre hébergement [[1]](#id2){.note-ref #id1}.

Vous pouvez retrouver une description des différents environnements d'exécution sur ce guide : [Modifier l’environnement d’exécution de mon hébergement web](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/){.ref}

<cite>Vous pouvez dans ce cas ne définir que la directive "container.image" dans le fichier .ovhconfig présent à la racine, le reste des directives étant définies dans chacun de vos sous-dossiers.</cite>


### Details sur le fichier .ovhconfig
Voici le détail d'application du fichier de config :


```bash
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php options .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback or previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 5.6
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall  (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly or in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```


## Comment passer a une bonne version de PHP ?

### Comment savoir quelle(s) version(s) de PHP supporte mon site ?
Si votre site utilise un CMS (type WordPress, Joomla, PrestaShop, etc), vous pourrez trouver les informations utiles dans la documentation disponible sur leur site officiel ou dans l'espace d'administration du module. Si le CMS que vous employez est toujours maintenu par son éditeur, et que votre version est à jour, il ne devrait pas y avoir de souci pour supporter les dernières itérations de PHP. La majorité des CMS intègrent un outil de mise à jour simplifiée, qui vous permettra de l'effectuer facilement. Certains le gèrent tous seuls, comme WordPress depuis la version 3.7 de fin 2013.

Si votre site se base sur un développement en propre, ou une autre solution personnalisée, il vous faudra déterminer quelle(s) version(s) de PHP est/sont adaptée(s).

Pour information, voici la liste des changements incompatibles entre les versions de PHP :

- de PHP 4 à PHP 5 : [http://www.php.net/manual/fr/migration5.incompatible.php](http://www.php.net/manual/fr/migration5.incompatible.php){.external}
- de PHP 5.1 à PHP 5.2 : [http://www.php.net/manual/fr/migration52.incompatible.php](http://www.php.net/manual/fr/migration52.incompatible.php){.external}
- de PHP 5.2 à PHP 5.3 : [http://www.php.net/manual/fr/migration53.incompatible.php](http://www.php.net/manual/fr/migration53.incompatible.php){.external}
- de PHP 5.3 à PHP 5.4 : [http://www.php.net/manual/fr/migration54.incompatible.php](http://www.php.net/manual/fr/migration54.incompatible.php){.external}
- de PHP 5.4 à PHP 5.5 : [http://www.php.net/manual/fr/migration55.incompatible.php](http://www.php.net/manual/fr/migration55.incompatible.php){.external}
- de PHP 5.5 à PHP 5.6 : [http://www.php.net/manual/fr/migration56.incompatible.php](http://www.php.net/manual/fr/migration56.incompatible.php){.external}
- de PHP 5.6 à PHP 7.0 : [http://php.net/manual/fr/migration70.deprecated.php](http://php.net/manual/fr/migration70.deprecated.php){.external}
- de PHP 7.0 à PHP 7.1 : [http://php.net/manual/fr/migration71.deprecated.php](http://php.net/manual/fr/migration71.deprecated.php){.external}
- de PHP 7.1 à PHP 7.2 : [http://php.net/manual/fr/migration72.deprecated.php](http://php.net/manual/fr/migration72.deprecated.php){.external}


### Comment migrer vers une autre version de PHP ?
Une fois déterminée quelle version de PHP vous devez utiliser, vous pouvez vous aider du guide suivant pour la modifier : [https://docs.ovh.com/fr/hosting/mutualise-configurer-la-version-de-php-depuis-votre-espace-client/](https://docs.ovh.com/fr/hosting/mutualise-configurer-la-version-de-php-depuis-votre-espace-client/){.external}

<a name="MULTISITE"></a>

## FAQ

### Ou placer mon fichier .ovhconfig ?
Dans la plupart des cas, vous ne disposez que d'un seul site sur votre hébergement.

Nous vous rappelons qu'il est possible d'éditer et générer le fichier .ovhconfig directement dans votre espace client, vous pouvez pour cela aider de ce guide : [https://docs.ovh.com/fr/hosting/mutualise-configurer-la-version-de-php-depuis-votre-espace-client/](https://docs.ovh.com/fr/hosting/mutualise-configurer-la-version-de-php-depuis-votre-espace-client/){.external}

Si vous souhaitez tout de même le place manuellement, le fichier .ovhconfig doit donc être mis en place à la racine de votre hébergement, c'est à dire dans le premier dossier ("/") comme dans l'image ci-contre.


![hosting](images/3764.png){.thumbnail}

> [!primary]
>
> - Tous les domaines associés hériteront du fichier .ovhconfig présent à la racine de votre hébergement.
> - Les sous-dossiers utiliseront donc les paramètres de ce fichier.
>

Il est possible de définir une version PHP différente dans chacun des domaines associés, il faut pour cela mettre un fichier .ovhconfig sur chacun des répertoires cible définis sur vos domaines associés.

Si aucun fichier .ovhconfig n'est présent dans le répertoire cible de votre domaine associé, le fichier .ovhconfig présent à la racine de votre hébergement sera utilisé.

Il est par contre fortement déconseillé d'utiliser des environnements différents sur un même hébergement dans des fichiers .ovhconfig différents. Cela peut générer des risques d'incompatibilités entre versions PHP et environnements et ce à cause du cache. Nous vous suggérons de segmenter vos sites sur différents hébergements pour ne pas rencontrer ce type de soucis pour ce type d'utilisation.


### Est-il possible de modifier la configuration PHP de mon hebergement Web ?
Différentes configurations sont disponibles pour votre hébergement web, vous pouvez retrouver une description des différents environnements d'exécution sur ce guide : [Modifier l’environnement d’exécution de mon hébergement web](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/){.ref}