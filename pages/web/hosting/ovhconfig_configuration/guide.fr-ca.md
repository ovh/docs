---
title: 'Configurer le fichier .ovhconfig de son hébergement web'
slug: configurer-fichier-ovhconfig
excerpt: 'Découvrez le fichier .ovhconfig et apprenez à le modifier'
section: 'Configuration de l''hébergement'
order: 4
---

**Dernière mise à jour le 03/01/2019**

## Objectif

Diverses raisons peuvent vous amener à vouloir modifier la configuration de votre [hébergement web](https://www.ovh.com/fr/hebergement-web/){.external}. Pour cela, OVH a mis en place un fichier permettant de changer certains paramètres : le **.ovhconfig**.

**Découvrez le fichier .ovhconfig et apprenez à le configurer.**

## Prérequis

- Disposer d’une offre d’[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external} (sauf Cloud Web).
- Disposer du mot de passe de l’utilisateur FTP vous permettant d’accéder à votre espace de stockage. 

## En pratique

Lorsque vous modifiez le fichier .ovhconfig de votre hébergement web, vous changez la configuration de ce dernier et, par dépendance, celle utilisée par votre site internet. Effectuer une modification inopportune pourrait alors rendre l'accès à votre site impossible. Veillez donc à ce que la configuration renseignée dans le fichier .ovhconfig soit techniquement compatible avec votre site internet.

La modification du fichier .ovhconfig peut se réaliser de deux manières :

- **en modifiant manuellement le fichier .ovhconfig** : cette solution est technique et nécessite d'être connecté à votre espace de stockage. Dans cette documentation, nous aborderons exclusivement cette méthode ;

- **via un assistant de configuration depuis votre espace client OVH** : cette solution est moins technique et nécessite d'être connecté à votre espace client, où vous pourrez choisir les changements à réaliser. Reportez-vous aux instructions décrites dans notre documentation [« Modifier la configuration de son hébergement web »](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/){.external}.

Poursuivez la lecture de cette documentation si vous souhaitez modifier manuellement le fichier .ovhconfig. 

### Modifier le fichier .ovhconfig

#### Étape 1 : se connecter à l'espace de stockage

Munissez-vous de votre identifiant FTP principal, de son mot de passe, ainsi que de l'adresse du serveur FTP. Une fois tous ces éléments en votre possession, connectez-vous à votre espace de stockage. Aidez-vous de la documentation intitulée « [Se connecter à l’espace de stockage](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/#2-se-connecter-a-lespace-de-stockage){.external} » si cela est nécessaire.

**Si vous n'êtes plus en possession de ces informations**, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, puis cliquez sur `Hébergements`{.action} dans la barre de services à gauche. Choisissez le nom de l'hébergement concerné et positionnez-vous enfin sur l'onglet `FTP - SSH`{.action}. Vous y retrouverez les informations vous permettant de vous connecter. Concernant le mot de passe de l'utilisateur FTP, reportez-vous aux instructions décrites dans notre documentation [« Modifier le mot de passe d’un utilisateur FTP »](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/){.external} si cela est nécessaire.

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### Étape 2 : récupérer ou créer le fichier .ovhconfig

Une fois connecté à votre espace de stockage, vous pouvez visualiser l'ensemble des fichiers actuellement hébergés sur ce dernier. Restez positionné sur la racine de votre hébergement (que l'on peut symboliser par un « / »). Vous devrez y trouver le fichier .ovhconfig.

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

Dès lors, deux possibilités :

- **le fichier .ovhconfig est présent** : récupérez-le sur votre propre machine. Nous vous recommandons d'en faire une copie avant de le modifier. Cette dernière vous permettra de remettre le fichier d'origine en cas de nécessité.
- **le fichier .ovhconfig n'est pas présent** : le fichier n'existant pas, créez ce dernier sur votre propre machine et nommez-le « .ovhconfig ».

#### Étape 3 : modifier le fichier .ovhconfig

Une fois en possession du fichier .ovhconfig, vous pouvez l'éditer. Pour cela, utilisez un logiciel comme un éditeur de texte. Votre fichier .ovhconfig doit contenir un code ressemblant à :

```php
app.engine=php
app.engine.version=7.3

http.firewall=none
environment=production

container.image=stable
```

Personnalisez les valeurs des variables selon la configuration que vous souhaitez utiliser avec votre hébergement web. 

|Variables|Détail|
|---|---|
|app.engine|Permet de modifier le moteur PHP utilisé par l'hébergement. Renseignez « php » pour activer l'accélérateur PHP-FPM et « phpcgi » pour le désactiver.|
|app.engine.version|Permet de définir la version de PHP utilisée par l'hébergement parmi [celles qu'OVH propose](https://www.ovh.com/fr/hebergement-web/php.xml){.external}. Renseignez la version de votre choix.|
|http.firewall|Permet d'activer ou de désactiver le [firewall fourni avec les hébergements web OVH](https://www.ovh.com/fr/hebergement-web/mod_security.xml){.external}. Renseignez « security » pour l'activer ou « none » pour le désactiver.|
|environment|Permet de gérer le comportement du cache des fichiers statiques de votre site internet ainsi que le traitement des erreurs PHP. Renseignez « production » pour maximiser la mise en cache et masquer les erreurs PHP ou « development » pour qu'aucun cache ne soit appliqué et que les erreurs PHP s'affichent.|
|container.image|Permet de modifier l'environnement d'exécution utilisé par l'hébergement. Renseignez le moteur de votre choix. Vous pouvez les retrouver depuis notre documentation : [« Découvrir les configurations disponibles »](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/#decouvrir-les-configurations-disponibles){.external}.|

Vous trouverez ci-dessous le détail d'application complet du fichier .ovhconfig :

```php
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
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 7.3
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=7.3

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
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | jessie.i386 | testing
;
container.image=stable
```

#### Étape 4 : télécharger le fichier .ovhconfig sur l'espace de stockage

Une fois le fichier .ovhconfig modifié, il ne vous reste plus qu'à le télécharger sur votre espace de stockage. Pour cela, toujours connecté et positionné à la racine votre espace de stockage (que l'on peut symboliser par un « / »), téléchargez le fichier .ovhconfig que vous venez de modifier. Si un fichier existe déjà, remplacez-le.

### Utiliser de manière avancée les fichiers ovhconfig

Si vous utilisez votre hébergement web pour y héberger plusieurs sites internet, vous avez sûrement configuré des Multisites. Diverses raisons peuvent vous amener à vouloir bénéficier d'une version de PHP différente pour certains de vos Multisites.

Pour cela, vous devez créer un fichier .ovhconfig pour le ou les Multisites concernés contenant la version de PHP souhaitée. Aidez-vous des manipulations décrites dans la section [« Modifier le fichier .ovhconfig »](https://docs.ovh.com/fr/hosting/configurer-fichier-ovhconfig/#modifier-le-fichier-ovhconfig){.external} de cette documentation si nécessaire. Lorsque vous devrez télécharger le fichier .ovhconfig sur votre espace de stockage, prenez soin de le faire dans le dossier racine du Multisite. Vous pouvez retrouver le dossier racine de vos Multisites depuis votre espace client dans l'onglet `Multisite`{.action} de l'hébergement concerné.

> [!warning]
>
> Il n'est pas possible de spécifier un second environnement d'exécution. Seul celui renseigné dans le fichier .ovhconfig se trouvant à la racine de votre espace de stockage est pris en compte.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.