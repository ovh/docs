---
title: 'Changer la version de PHP de son hébergement web'
slug: configurer-le-php-sur-son-hebergement-web-mutu-2014
excerpt: 'Découvrez comment changer la version de PHP de votre hébergement web OVHcloud'
section: PHP
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Sur le web, il existe une multitude de sites internet. Votre [hébergement web OVHcloud](https://www.ovh.com/fr/hebergement-web/){.external} vous permet d’y héberger le site internet que vous souhaitez, tant que celui-ci est compatible avec la [configuration de nos infrastructures](https://cluster028.hosting.ovh.net/infos/){.external}. En ce sens, vous pouvez être amené à vouloir modifier la version de PHP utilisée par votre hébergement web.

**Découvrez comment changer la version de PHP de votre hébergement web OVHcloud.**

## Prérequis

- Disposer d’une offre d’[hébergement web OVHcloud](https://www.ovh.com/fr/hebergement-web/){.external} (sauf Cloud Web).
- Selon la méthode utilisée, disposer d’un accès à la gestion de l’offre d’hébergement web depuis l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) ou des informations permettant de se connecter à votre espace de stockage. 

## En pratique

Il existe aujourd'hui plusieurs versions du langage de programmation PHP. Comme à l'accoutumée, les évolutions de versions apportent des correctifs divers, ainsi que l'ajout ou l'arrêt de fonctionnalités. OVHcloud propose les dernières versions majeures de PHP dont vous pouvez retrouver la liste depuis le lien : <https://www.ovh.com/fr/hebergement-web/php.xml>. 

Du fait que certaines fonctionnalités peuvent ne pas être maintenues au fil des nouvelles versions, **assurez-vous avant d'entamer tout changement que la nouvelle version de PHP souhaitée est compatible avec votre site internet.**

### Étape 1 : s'assurer que votre site est compatible

Même si OVHcloud gère l'installation des dernières versions de PHP sur ses serveurs, il vous revient, en tant que webmaster, de vous assurer que votre site internet est toujours à jour et donc compatible avec les dernières versions de PHP. Afin de vous en assurer, deux possibilités existent selon le site internet que vous utilisez.

**J'utilise un site clés en main, comme un système de gestion de contenu (Content Management System ou CMS)**, tel que WordPress ou Joomla! : 

- rapprochez-vous de la documentation officielle créée par l'éditeur du CMS que vous utilisez ; 
- récupérez les informations concernant les prérequis techniques indispensables au fonctionnement de votre CMS, ainsi que la manipulation permettant de le mettre à jour ;
- si cela est nécessaire, mettez à jour votre CMS en vous assurant que la nouvelle version est compatible avec l'hébergement OVHcloud.

**J'utilise un site basé sur une solution personnalisée** : 

- rapprochez-vous du webmaster ayant créé le site internet ;
- aidez-vous de la documentation officielle PHP donnant plus d'informations sur les migrations de version accessibles depuis le lien : <http://php.net/manual/en/appendices.php> ;
- si cela est nécessaire, mettez à jour le code de votre site en vous assurant que celui-ci reste compatible avec l'hébergement OVHcloud.

Si cela est utile à votre démarche, vous avez la possibilité de connaître la version de PHP actuellement utilisée par votre hébergement par le biais de deux moyens. 

|Moyens|Description|
|---|---|
|Via l'espace client|Connectez-vous à votre [espace client](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Positionné sur l'onglet `Informations générales`{.action}, repérez la version en dessous de « **Version PHP globale** ». Si un symbole rond de couleur bleue est présent à la place, patientez quelques minutes le temps que la version s'actualise.|
|Via un script|Créez un script **.php** contenant uniquement le code `<?php phpinfo(); ?>`. Vous devrez le mettre en ligne sur votre espace de stockage, puis l'appeler en accédant à son adresse URL complète.|

![phpversion](images/change-php-version-step1.png){.thumbnail}

Si vous n'arrivez pas à vous assurer de la compatibilité de votre site internet avec la nouvelle version de PHP, **même si nous déconseillons vivement cette méthode**, vous pouvez essayer de changer la version actuelle et de revenir en arrière si cela s'avère nécessaire. Cependant, vous prenez le risque de générer un quelconque dysfonctionnement sur votre site internet. D'ailleurs, même si celui-ci s'affiche toujours après le changement, il se peut que l'une de ses fonctionnalités spécifiques en soit affectée et ne fonctionne plus. 

Dès que vous êtes prêt à réaliser le changement, poursuivez vers l'étape suivante.

### Étape 2 : modifier la version de PHP de votre hébergement web

Il existe deux manières de modifier la version de PHP de votre hébergement web :

- **via un assistant de configuration depuis votre espace client** : cette solution est moins technique et nécessite d'être connecté à votre espace client où vous pourrez choisir la nouvelle version de PHP souhaitée parmi d'autres paramètres. Reportez-vous aux instructions décrites dans notre documentation [« Modifier la configuration de son hébergement web »](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/){.external} pour réaliser la manipulation par ce biais ;

- **en modifiant manuellement un fichier sur votre espace de stockage** : cette solution est plus technique et nécessite d'être connecté à votre espace de stockage où vous devrez modifier le fichier « .ovhconfig ». Reportez-vous aux instructions décrites dans notre documentation [« Configurer le fichier .ovhconfig de mon hébergement web »](../configurer-fichier-ovhconfig/){.external} pour réaliser la manipulation par ce biais.

Pour les plus technophiles, la modification de la version de PHP via un fichier .htaccess n'est plus possible sur les dernières offres d'[hébergement web OVHcloud](https://www.ovh.com/fr/hebergement-web/){.external}. La directive permettant de changer la version de PHP dans le fichier .htaccess ne permet pas d'utiliser les récentes versions de PHP sur nos infrastructures. Pour cela, vous devrez impérativement utiliser le fichier « .ovhconfig » en vous aidant de notre documenation [« Configurer le fichier .ovhconfig de mon hébergement web »](../configurer-fichier-ovhconfig/){.external} si cela est nécessaire.

## Aller plus loin

[Modifier la configuration de son hébergement web](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/){.external}

[Configurer le fichier .ovhconfig de mon hébergement web](../configurer-fichier-ovhconfig/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
