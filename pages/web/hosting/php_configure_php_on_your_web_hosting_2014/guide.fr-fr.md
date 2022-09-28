---
title: "Changer la version de PHP de son hébergement web"
slug: configurer-le-php-sur-son-hebergement-web-mutu-2014
excerpt: "Découvrez comment changer la version de PHP de votre hébergement web OVHcloud"
section: PHP
order: 01
---

**Dernière mise à jour le 19/09/2022**

## Objectif

Votre [hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external} permet d’héberger le site internet que vous souhaitez, tant que celui-ci est compatible avec la [configuration de nos infrastructures](https://webhosting-infos.hosting.ovh.net){.external}. En ce sens, vous pouvez être amené à vouloir modifier la version de PHP utilisée par votre hébergement web.

**Découvrez comment changer la version de PHP de votre hébergement web OVHcloud.**

## Prérequis

- Disposer d’une offre d’[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}, à l'exception d'une offre d'hébergement Cloud Web.
- Avoir accès à votre offre d’hébergement web depuis l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou connaître les informations permettant de se connecter à l'[espace de stockage FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/). 

## En pratique

Plusieurs versions du langage de programmation PHP existent. Les évolutions de versions apportent des correctifs divers, ainsi que l'ajout ou l'arrêt de fonctionnalités. OVHcloud propose les dernières versions majeures de PHP dont vous pouvez retrouver la liste [ici](https://www.ovhcloud.com/fr/web-hosting/uc-programming-language/). 

> [!primary]
>
> Du fait que certaines fonctionnalités peuvent ne pas être maintenues au fil des nouvelles versions, **assurez-vous, avant d'entamer tout changement, que la nouvelle version de PHP souhaitée est compatible avec votre site internet.**
>

### Étape 1 : s'assurer que votre site est compatible

Même si OVHcloud gère l'installation des dernières versions de PHP sur ses serveurs, il vous revient en tant que webmaster de vous assurer que votre site internet est **toujours à jour** et donc compatible avec les dernières versions de PHP. Afin de vous en assurer, deux possibilités existent selon le site internet que vous utilisez :

**Cas n°1 : vous utilisez un site « clés en main » comme un système de gestion de contenu (Content Management System ou CMS)** tel que WordPress, Joomla!, PrestaShop ou Drupal : 

- Consultez la documentation officielle créée par l'éditeur du CMS que vous utilisez.
- Prenez note des informations concernant les prérequis techniques indispensables au fonctionnement de votre CMS, ainsi que la manipulation permettant de le mettre à jour.
- Si nécessaire, mettez à jour votre CMS en vous assurant que la nouvelle version est compatible avec l'hébergement OVHcloud.

**Cas n°2 : vous utilisez un site basé sur une solution personnalisée** : 

- Rapprochez-vous du webmaster ayant créé le site internet.
- Aidez-vous de la [documentation officielle PHP](http://php.net/manual/en/appendices.php){.external} donnant plus d'informations sur les migrations de version.
- Si nécessaire, mettez à jour le code de votre site en vous assurant que celui-ci reste compatible avec l'hébergement OVHcloud.

Si besoin, vous pouvez connaître la version de PHP actuellement utilisée par votre hébergement de deux façons :

- **via l'espace client OVHcloud** : connectez-vous à [l'espace client](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez l'hébergement web concerné. Dans l'onglet `Informations générales`{.action}, repérez la version en dessous de *Version PHP globale*. 

![phpversion](images/change-php-version-step1.png){.thumbnail}

> [!primary]
> Si un symbole rond de couleur bleue est présent, patientez quelques minutes le temps que la version s'actualise.
>

- **via un script** : Créez un script **.php** contenant uniquement le code `<?php phpinfo(); ?>`. Mettez-le ensuite en ligne sur votre [espace de stockage FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/), puis appelez-le en accédant à son adresse/URL complète.|

Si vous n'arrivez pas à vous assurer de la compatibilité de votre site internet avec la nouvelle version de PHP et **même si nous déconseillons vivement cette méthode**, vous pouvez essayer de changer la version actuelle et de revenir en arrière. Cependant, vous prenez alors le risque de générer un potentiel dysfonctionnement sur votre site internet. D'ailleurs, même si celui-ci s'affiche toujours après le changement, il se peut que l'une de ses fonctionnalités spécifiques en soit affectée et devienne inopérante. 

Dès que vous êtes prêt à réaliser le changement, poursuivez vers l'étape 2.

### Étape 2 : modifier la version de PHP de votre hébergement web

Il existe deux manières de modifier la version de PHP de votre hébergement web :

- **via un assistant de configuration depuis votre espace client** : une fois connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), vous pourrez choisir la nouvelle version de PHP souhaitée parmi d'autres paramètres. Reportez-vous aux instructions décrites dans notre documentation [« Modifier la configuration de son hébergement web »](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/){.external} pour réaliser la manipulation par ce biais.

- **en modifiant manuellement un fichier sur votre espace de stockage** : cette solution est plus technique et nécessite d'être connecté à votre [espace de stockage FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) où vous devrez modifier le fichier `.ovhconfig`. Reportez-vous aux instructions décrites dans notre documentation [« Configurer le fichier .ovhconfig de mon hébergement web »](https://docs.ovh.com/fr/hosting/configurer-fichier-ovhconfig/){.external} pour réaliser la manipulation par ce biais.

> [!primary]
>
> La modification de la version de PHP via un fichier « .htaccess » n'est plus possible sur les dernières offres d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}.<br>
> La commande permettant de changer la version de PHP dans le fichier « .htaccess » ne permet pas d'utiliser les versions récentes de PHP sur nos infrastructures.<br>
> Pour cela, vous devrez obligatoirement utiliser le fichier `.ovhconfig` en vous aidant de notre documentation [« Configurer le fichier .ovhconfig de mon hébergement web »](https://docs.ovh.com/fr/hosting/configurer-fichier-ovhconfig/){.external}.
>

Certaines versions de PHP ne fonctionnent qu'avec certains environnements d'exécution. Vous trouverez ci-après les versions de PHP disponibles sur les hébergements mutualisés OVHcloud et [les environnements d'exécution](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/) compatibles :

|Versions PHP|Environnements d'exécution compatibles|
|---|---|
|5.4, 5.5, 5.6 et 7.0|Legacy, Stable|
|7.1, 7.2 et 7.3|Stable|
|7.4, 8.0 et 8.1 (bêta)|stable64|

## Aller plus loin

[Modifier la configuration de son hébergement web](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/){.external}

[Configurer le fichier .ovhconfig de son hébergement web](https://docs.ovh.com/fr/hosting/configurer-fichier-ovhconfig/){.external}

[Se connecter à l’espace de stockage de son hébergement Web](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/){.external}

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
