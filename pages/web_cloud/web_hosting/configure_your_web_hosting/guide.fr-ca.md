---
title: "Hébergement web : environnement, version PHP, « .ovhconfig »"
excerpt: "Découvrez comment modifier l'environnement d'exécution, la version PHP, le pare-feu applicatif, le moteur, le mode et le « .ovhconfig » d'un hébergement web"
updated: 2024-07-16
---

## Objectif

Les offres d'[hébergement web OVHcloud](/links/web/hosting){.external} permettent d’héberger le site web que vous souhaitez, tant que celui-ci est compatible avec la [configuration de nos infrastructures mutualisées](https://webhosting-infos.hosting.ovh.net){.external}.

La modification du fichier **php.ini** est indisponible sur les offres d'hébergements web. Ceci du fait que la configuration PHP est globale à l'ensemble de l'infrastructure mutualisée.
Toutefois, sur nos infrastructures mutualisées, vous pouvez modifier les paramètres suivants pour votre hébergement web :

- [l'environnement d'exécution](#runtime-environment)
- [la version de PHP](#php-versions)
- [le moteur d'exécution PHP](#php-runtime)
- [le pare-feu applicatif](#firewall)
- [le mode d'exécution](#runtime-mod)

Ces paramètres de configuration sont modifiables de deux manières :

- depuis votre [espace client OVHcloud](/links/manager) ;
- depuis l'espace de stockage FTP de votre hébergement web OVHcloud à l'aide d'un fichier nommé « .ovhconfig ».

> [!primary]
>
> Les fichiers « .ovhconfig » sont des fichiers de configuration serveur et sont automatiquement reconnus comme tels par l'infrastructure d'hébergement mutualisée.
> Ils sont présents nativement et par défaut à la « racine FTP » de l'espace de stockage FTP de votre hébergement web.
> Ils contiennent les valeurs des éléments évoqués au dessus.
>

En résumé, modifier la configuration de votre hébergement web depuis l'[espace client OVHcloud](/links/manager) ou modifier les valeurs présentes dans le fichier « .ovhconfig » revient à réaliser la même opération.

### Sommaire

- [1 - Description des paramètres de configuration disponibles sur les hébergements web OVHcloud](#all-parameters)
- [2 - Méthode 1 : Modifier la configuration de l'hébergement web depuis l'espace client OVHcloud](#setting-ovh-manager)
- [3 - Méthode 2 : Modifier la configuration de l'hébergement web depuis le fichier « .ovhconfig »](#setting-ovhconfig)
- [4 - Utilisation avancée des fichiers « .ovhconfig »](#ovhconfig-more)

**Découvrez comment modifier l'environnement d'exécution, la version PHP, le pare-feu applicatif, le moteur, le mode et le fichier « .ovhconfig » d'un hébergement web.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/X31MNMLw064" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Prérequis

- Disposer d’une offre d’[hébergement web OVHcloud](/links/web/hosting){.external}, à l'exception d'une [offre d'hébergement Cloud Web](/links/web/hosting-cloud-web-offer).
- Avoir accès à votre offre d’hébergement web depuis l’[espace client OVHcloud](/links/manager) ou connaître les informations permettant de se connecter à l'[espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection).

## En pratique

### 1 - Description des paramètres de configuration disponibles sur les hébergements web OVHcloud <a name="all-parameters"></a>

Avant de commencer, retrouvez ci-après la description technique de chacun des paramètres modifiables sur les hébergements web OVHcloud.

> [!warning]
>
> Modifier au moins l'un de ces éléments peut avoir des conséquences sur l'affichage ou le bon fonctionnement de votre site web. **Assurez-vous au préalable que votre site web est compatible avec les changements que vous souhaitez effectuer dans la configuration de votre hébergement web**. Contactez un [prestataire spécialisé](/links/partner) en cas de doutes ou si vous rencontrez des difficultés.
>

####  1.1 - Les environnements d'exécution <a name="runtime-environment"></a>

Les environnements d'exécution contiennent un ensemble de langages de programmation. En fonction de l'environnement d'exécution choisi, les langages sont disponibles dans des versions plus ou moins avancées. L'objectif de ces environnements est de vous permettre d'exécuter correctement les fichiers qui composent votre site web, en adéquation avec vos besoins techniques.

Sur les hébergements web OVHcloud, nous proposons **3** environnements d'exécution : *Legacy*, *Stable* et *Stable64*.
Retrouvez ci-dessous les éléments contenus dans nos différents environnements d'exécution :

|Environnement|Legacy|Stable|Stable64|
|---|---|---|---|
|Architecture|32 bits|32 bits|64 bits|
|Version PHP minimum|5.4|5.4|7.4|
|OpenSSL|1.0.1t|1.0.1t|1.1.1n|
|Python|2.7 et 3.4|2.7 et 3.7|2.7 et 3.7|
|Ruby|2.1|2.1|2.5|
|Rails|4.1|4.1|5.2|
|Perl|5.20|5.20|5.28|
|git|2.1|2.1|2.20|

> [!primary]
>
> L'environnement *Legacy* peut être utile pour d'anciens sites utilisant encore de vieilles versions de PHP. Cependant, nous vous recommandons vivement d'utiliser l'environnement *Stable64* qui bénéficie des dernières mises à jour. **Assurez-vous cependant que votre site web est bien compatible avant d'entamer tout changement.**
> 

####  1.2 - Les versions de PHP <a name="php-versions"></a>

PHP est un langage de programmation dynamique utilisé pour réaliser des sites web. Pour votre site web et en fonction de son ancienneté, des mises à jour effectuées ou de certaines variables nécessaires à son bon fonctionnement, vous pouvez être amené à changer la version de PHP qu'il utilise.

Plusieurs versions du langage de programmation PHP existent. Les évolutions de versions apportent des correctifs divers ainsi que l'ajout ou l'arrêt de fonctionnalités. OVHcloud propose les dernières versions majeures de PHP dont vous pouvez retrouver la liste [ici](/links/web/hosting-programming-language).

Certaines versions de PHP ne fonctionnent qu'avec certains environnements d'exécution. Vous trouverez ci-dessous les versions de PHP disponibles sur les hébergements mutualisés OVHcloud et [les environnements d'exécution](#runtime-environment) compatibles :

|Versions PHP|Environnements d'exécution compatibles|
|---|---|
|5.4, 5.5, 5.6 et 7.0|Legacy, Stable|
|7.1, 7.2 et 7.3|Stable|
|7.4, 8.0, 8.1 et 8.2|stable64|

> [!primary]
>
> Du fait que certaines fonctionnalités peuvent ne pas être maintenues au fil des nouvelles versions, **assurez-vous, avant d'entamer tout changement, que la nouvelle version de PHP souhaitée est compatible avec votre site internet.**
>

Même si OVHcloud gère l'installation des dernières versions de PHP sur ses serveurs, il vous revient de vous assurer que votre site web est **toujours à jour** et compatible avec les dernières versions de PHP. Pour vous en assurer, deux possibilités existent selon le site web que vous utilisez :

**Cas n°1 - vous utilisez un Content Management System (CMS)** tel que *WordPress*, *Joomla!*, *PrestaShop* ou *Drupal* : 

- Consultez la documentation officielle créée par l'éditeur du CMS que vous utilisez.
- Prenez note des informations concernant les prérequis techniques nécessaires au fonctionnement de votre CMS ainsi que la manipulation permettant de le mettre à jour.
- Si nécessaire, mettez à jour votre CMS en vous assurant que la nouvelle version est compatible avec l'hébergement web OVHcloud.

**Cas n°2 - vous utilisez un site basé sur une solution personnalisée** : 

- Rapprochez-vous du webmaster ayant créé le site web.
- Aidez-vous de la [documentation officielle PHP](http://php.net/manual/en/appendices.php){.external} donnant plus d'informations sur les migrations de version.
- Si nécessaire, mettez à jour le code de votre site web en vous assurant que celui-ci reste compatible avec l'hébergement web OVHcloud.

Si besoin, vous pouvez connaître la version de PHP actuellement utilisée par votre hébergement web de deux façons :

- **Via l'espace client OVHcloud**. Connectez-vous à [l'espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis choisissez l'hébergement web concerné. Dans l'onglet `Informations générales`{.action}, repérez la version en dessous de *Version PHP globale*. 

![phpversion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/change-php-version-step1.png){.thumbnail}

> [!primary]
> Si un symbole rond de couleur bleue est présent, patientez quelques minutes le temps que la version s'actualise.
>

- **Via un script**. Créez un script **.php** contenant uniquement le code suivant :

```php
<?php phpinfo(); ?>
```

Mettez-le ensuite en ligne sur votre [espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection), puis appelez-le en accédant à son adresse/URL complète.

> [!warning]
>
> La modification de la version de PHP via un fichier « .htaccess » n'est plus possible sur les dernières offres d'[hébergement web OVHcloud](/links/web/hosting).<br>
> La commande permettant de changer la version de PHP dans le fichier « .htaccess » ne permet pas non plus d'utiliser les versions récentes de PHP sur nos infrastructures.
> Vous devez obligatoirement utiliser le fichier « .ovhconfig ».
>

####  1.3 - Les moteurs d'exécutions PHP <a name="php-runtime"></a>

Les moteurs d'exécutions PHP sont des programmes permettant d'exécuter des actions sur le serveur web selon une méthode donnée. Généralement, ce paramètre est modifié pour agir sur la vitesse d'exécution des requêtes générées par les visiteurs de votre site web.

Sur les hébergements web OVHcloud, nous proposons **2** moteurs d'exécutions PHP : *php* (« PHP-FPM ») et *phpcgi*.

Le choix du moteur *php* permet d'activer ou de désactiver l'accélérateur PHP (« PHP-FPM »). Ce dernier a été adapté à notre infrastructure dans le but d'accélérer la vitesse d'exécution des scripts PHP. 

En effet, le moteur *phpcgi* exécute les requêtes « en série » contrairement au moteur *php* (« PHP-FPM ») qui les exécute « en parallèle ».

En comparaison, l'accélérateur PHP (« PHP-FPM ») offre un gain de performance jusqu'à sept fois plus rapide par rapport à l'utilisation du moteur *phpcgi*. 

####  1.4 - Le pare-feu applicatif <a name="firewall"></a>

Un pare-feu est une sécurité qui filtre les requêtes entrantes de votre hébergement web. Sur nos hébergements web, ce paramètre de configuration fonctionne sous la forme d'une option **activable** ou **désactivable**.
En effet, vous ne pourrez pas modifier les paramètres de filtrage du pare-feu en lui-même.

Consultez notre guide « [Activation du pare-feu applicatif](/pages/web_cloud/web_hosting/multisites_activating_application_firewall) » pour plus de détails sur le sujet.

> [!warning]
>
> Si vous utilisez des modules de paiements, l'activation du pare-feu applicatif peut parfois engendrer des perturbations dans la communication entre le module de paiement et les banques. Dans ce cas, désactivez l'option.
>

####  1.5 - Les modes d'exécution <a name="runtime-mod"></a>

Les modes d'exécution permettent de gérer le comportement du cache des fichiers statiques de votre site web (des images par exemple) ainsi que le traitement des erreurs PHP (généralement utiles quand votre site affiche une page blanche par exemple). 

Il existe **2** modes que vous pouvez activer : *Production* et *Development*.

|Mode|Cache des fichiers statiques|Traitement des erreurs PHP|
|---|---|---|
|*Production*|Maximise la mise en cache des fichiers statiques sur les navigateurs internet.|Les erreurs PHP n'apparaissent pas sur votre site.|
|*Development*|Aucun cache n'est appliqué.|Les erreurs PHP apparaissent sur votre site.|

> [!primary]
>
> Pour les versions 7.1 et supérieures de PHP, les erreurs apparaitront sur le site, quel que soit le mode utilisé. 
> 

Maintenant que vous connaissez les différents paramètres modifiables pour votre hébergement web OVHcloud, découvrez les deux méthodes pour modifier ces paramètres.

### 2 - Méthode 1 : modifier la configuration de l'hébergement web depuis l'espace client OVHcloud <a name="setting-ovh-manager"></a>

> [!warning]
>
> Pour rappel, modifier au moins l'un de ces éléments peut avoir des conséquences sur l'affichage ou le bon fonctionnement de votre site web. **Assurez-vous au préalable que votre site web est compatible avec les changements que vous souhaitez effectuer dans la configuration de votre hébergement web.** Contactez un [prestataire spécialisé](/links/partner) en cas de doute ou si vous rencontrez des difficultés.
>

#### 2.1 - Accéder à la gestion de la configuration de l'hébergement web

Connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis choisissez l'hébergement web concerné. Assurez-vous d'être bien positionné sur l'onglet
`Informations générales`{.action}. Sur la droite de la mention `Version PHP Globale`{.action} située quasiment au centre de la page, cliquez sur le bouton `...`{.action} puis sur `Modifier la configuration`{.action}.

![hostingconfiguration](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}

> [!primary]
>
> Si le bouton `Modifier la configuration`{.action} est grisé, il se peut qu'une vérification de la **version PHP globale** soit en cours. Si tel est le cas, un symbole rond de couleur bleue s'affichera à côté de la version, indiquant qu'une vérification est cours. Patientez alors quelques minutes pour que le bouton `Modifier la configuration`{.action} redevienne accessible.
>
> Si l'option `Version PHP Globale`{.action} n'apparaît pas dans votre [espace client OVHcloud](/links/manager), vérifiez que fichier *.ovhconfig* existe bien à la racine FTP de votre hébergement mutualisé OVHcloud.
>
> Retrouvez toutes les informations concernant le fichier *.ovhconfig* dans la  troisième partie « [Méthode 2 : modifier la configuration de l'hébergement web depuis le fichier « .ovhconfig »](#setting-ovhconfig) » du présent guide.
>

#### 2.2 - Modifier la configuration de l'hébergement web

Sur la fenêtre qui apparaît, deux choix sont possibles. Sélectionnez celui qui correspond à l'action que vous souhaitez réaliser puis cliquez sur `Suivant`{.action}.

|Choix|Détail|
|---|---|
|`Revenir à une configuration précédente`|Après avoir sélectionné cette option, choisissez la configuration à restaurer à côté de `Choix historique`. Cette possibilité peut ne pas être disponible si vous n'avez pas effectué de changement dans le passé.|
|`Modifier la configuration courante`|Après avoir sélectionné cette option, choisissez les modifications à apporter à la configuration parmi les champs proposés. Si nécessaire, retournez à la première partie « [Description des paramètres de configuration disponibles sur les hébergements web OVHcloud](#all-parameters) » du présent guide.|

> [!primary]
>
> Changer l'environnement d'exécution de votre hébergement web réinitialise automatiquement les sessions PHP.
> 

Dès que vous êtes prêt, cliquez sur `Valider`{.action} pour appliquer la modification. Patientez quelques instants le temps qu'elle se réalise.

![hostingconfiguration](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration-step-1-and-2.png){.thumbnail}

### 3 - Méthode 2 : modifier la configuration de l'hébergement web depuis le fichier « .ovhconfig » <a name="setting-ovhconfig"></a>

#### 3.1 - Se connecter à l'espace de stockage FTP de votre hébergement web

Munissez-vous de votre identifiant FTP principal, de son mot de passe, ainsi que de l'adresse du serveur FTP.
Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement concerné. Positionnez-vous enfin sur l'onglet `FTP - SSH`{.action}. Vous y retrouverez les informations vous permettant de vous connecter. 

Concernant le mot de passe de l'utilisateur FTP, reportez-vous aux instructions décrites dans notre documentation [« Modifier le mot de passe d’un utilisateur FTP »](/pages/web_cloud/web_hosting/ftp_change_password) si nécessaire.

![ovhconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}

#### 3.2 - Récupérer ou créer le fichier « .ovhconfig »

Une fois connecté à votre [espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection), vous visualisez l'ensemble des fichiers actuellement hébergés sur ce dernier. Restez positionné sur la racine de votre hébergement (que l'on peut symboliser par un « / »). Vous devriez y trouver le fichier « .ovhconfig ».

![ovhconfig](/pages/assets/screens/other/web-tools/net2ftp/ovhconfig-file.png){.thumbnail}

Dès lors, deux possibilités :

- **le fichier « .ovhconfig » est présent** : téléchargez-le sur votre propre machine / appareil. Faites-en une copie avant de le modifier. Cette dernière vous permettra de restaurer le fichier d'origine si nécessaire.
- **le fichier « .ovhconfig » est inexistant** : créez-le sur votre propre machine / appareil et nommez-le « .ovhconfig ».

#### 3.3 - Modifier le contenu du fichier « .ovhconfig » <a name="update-ovhconfig"></a>

Une fois en possession du fichier « .ovhconfig », éditez-le. Pour cela, utilisez un logiciel comme un éditeur de texte. Votre fichier « .ovhconfig » doit contenir un code semblable à celui-ci :

```php
app.engine=php
app.engine.version=8.0

http.firewall=none
environment=production

container.image=stable64
```

> [!success]
>
> Si vous venez de créer le fichier « .ovhconfig », copiez le code ci-dessus dans votre fichier puis poursuivez la lecture de ce guide.
>

Personnalisez les valeurs des variables selon la configuration que vous souhaitez utiliser avec votre hébergement web.

|Variables|Détail|
|---|---|
|app.engine|Permet de modifier [le moteur PHP](#php-runtime) utilisé par l'hébergement. Renseignez **php** pour activer l'accélérateur PHP-FPM et **phpcgi** pour le désactiver.|
|app.engine.version|Permet de définir [la version de PHP](#php-versions) utilisée par l'hébergement parmi [celles qu'OVHcloud propose](/links/web/hosting-programming-language){.external}. Renseignez la version de votre choix (en adéquation avec l'environnement d'exécution que vous avez choisi d'utiliser).|
|http.firewall|Permet d'activer ou de désactiver le [firewall fourni avec les hébergements web OVHcloud](/links/web/hosting-options){.external}. Renseignez **security** pour l'activer ou **none** pour le désactiver.|
|environment|Permet de gérer le comportement du cache des fichiers statiques de votre site web ainsi que le traitement des erreurs PHP. Cela correspond au [mode d'exécution](#runtime-mod). Renseignez **production** pour maximiser la mise en cache et masquer les erreurs PHP ou **development** pour qu'aucun cache ne soit appliqué et que les erreurs PHP s'affichent.|
|container.image|Permet de modifier [l'environnement d'exécution](#runtime-environment) utilisé par l'hébergement. Renseignez l'environnement d'exécution (**legacy**,**stable** ou **stable64**) de votre choix. Si vous choisissez l'environnement d'éxecution **stable64**, vérifiez que votre site est compatible avec l'architecture 64 bits.|

Si besoin, retournez à la première partie « [Description des paramètres de configuration disponibles sur les hébergements web OVHcloud](#all-parameters) » de ce guide.

Si nécessaire, retrouvez ci-dessous la description technique détaillée du fichier « .ovhconfig » :

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
;   default: 8.0
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=8.0

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
; values: legacy | stable | stable64
;
container.image=stable64
```

#### 3.4 - Télécharger le fichier « .ovhconfig » sur l'espace de stockage

Une fois le fichier « .ovhconfig » modifié, téléchargez-le sur votre [espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection). Pour cela, reconnectez-vous à votre [espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection) et positionnez-vous à la racine votre [espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection) (que l'on peut symboliser par un « / »). Chargez le fichier « .ovhconfig » que vous venez de modifier dans votre [espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection). Si le fichier existe déjà, remplacez-le.

### 4 - Utilisation avancée des fichiers « .ovhconfig » <a name="ovhconfig-more"></a>

Si vous utilisez votre hébergement web pour y héberger plusieurs sites web (en *multisites*), diverses raisons peuvent vous amener à vouloir bénéficier d'une version de PHP différente pour certains de vos *multisites*.

Créez un fichier « .ovhconfig » contenant la version de PHP souhaitée pour le ou les *multisites* concernés. Aidez-vous des manipulations décrites dans la partie « [3.3 - Modifier le contenu du fichier « .ovhconfig »](#update-ovhconfig) » de ce guide si nécessaire. Lorsque vous téléchargerez le fichier « .ovhconfig » sur votre [espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection), faites-le dans le dossier racine où se trouvent les fichiers qui composent le site web "*multisites*" concerné. Retrouvez le dossier racine de vos *multisites* depuis votre [espace client OVHcloud](/links/manager) dans l'onglet `Multisite`{.action} de l'hébergement concerné.

Consultez notre guide « [Configurer un multisite sur votre hébergement web](/pages/web_cloud/web_hosting/multisites_configure_multisite) » si besoin.

> [!warning]
>
> **Il n'est pas possible de spécifier un second [environnement d'exécution](#runtime-environment), un second [mode d'exécution](#runtime-mod) et/ou un second [moteur d'exécution PHP](#php-runtime)** sur un même hébergement web. Seuls ceux renseignés dans le fichier « .ovhconfig » se trouvant à la racine de votre [espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection) seront pris en compte.
>

![ovhconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

## Aller plus loin

[Se connecter à l’espace de stockage de son hébergement Web](/pages/web_cloud/web_hosting/ftp_connection)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community)