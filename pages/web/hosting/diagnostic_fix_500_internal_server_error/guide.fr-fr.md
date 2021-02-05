---
title: Que faire en cas d’erreur 500 Internal Server Error ?
legacy_guide_number: 1987
slug: erreur-500-internal-server-error
excerpt: Comment résoudre les cas les plus courants d'erreurs 500
section: Diagnostic
---

**Dernière mise à jour le 05/02/2021**

## Objectif

![error500](images/error-500.png)

Les erreurs 500 « Internal Server Error » peuvent concerner tout ou partie de votre site, être aléatoires ou permanentes. Elles peuvent aussi apparaître sous la forme d'une page blanche.

Elles proviennent parfois d'une mise à jour effectuée automatiquement par un composant de votre site et donc survenir sans action de votre part.

**Les manipulations proposées dans ce guide vous permettront de résoudre les cas les plus courants d'erreur 500.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-de-thunderbird/#aller-plus-loin_1) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement mutualisé](https://www.ovh.com/fr/hebergement-web/).
- Votre site est hébergé sur cette offre.
- Vous avez testé votre site sur plusieurs appareils et navigateurs et avez constaté la même anomalie.

## En pratique

### Restaurez votre site à son état antérieur

Pour restaurer votre site à son état antérieur :

> • [Cliquer ici](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/) pour restaurer le code source de votre site
> • [Cliquer ici](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/#restaurer-une-sauvegarde-depuis-lespace-client) pour restaurer la base de données de votre site à une date antérieure.
> • Si l'erreur 500 est apparue suite à une mise à jour de la version PHP de votre hébergement : [Cliquer ici](https://docs.ovh.com/fr/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/) pour revenir à la configuration précédente.

Consultez ensuite l'onglet `Tâches en cours`{.action} dans la partie `Hébergements`{.action} de votre espace client OVHcloud, rafraîchissez votre page jusqu'à ce que plus aucune opération n'apparaisse. Effectuez ensuite un nouveau test de votre site, après avoir redémarré votre appareil.

### Tester le fichier .htaccess

Une erreur 500 peut aussi être liée à une erreur dans un fichier nommé « .htaccess ». 

Pour le vérifier, connectez-vous en FTP à votre hébergement : <https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/>.

Puis renommez ce fichier en «.htaccess.old » et retestez votre site. 

Si ce dernier est de nouveau accessible alors le «.htaccess » est en cause. Nous vous invitons donc à le modifier ou à contacter un [webmaster] (https://marketplace.ovhcloud.com/){.external}, afin qu'il effectue les opérations nécessaires.

### Vérifiez les permissions sur les dossiers et les fichiers

Une erreur 500 peut également être liée à une erreur au niveau des droits accordés à certains dossiers ou fichiers de votre site.

Pour accéder à ces fichiers, connectez-vous en FTP à votre hébergement : <https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/>.

Puis vérifiez les éléments suivants : 

-	La **racine** de votre hébergement (Il s’agit du répertoire noté « / » ou « . » dans votre logiciel FTP) doit être obligatoirement en droits 705 (Ce sont les permissions par défaut). Nous vous conseillons de ne pas modifier ce niveau de droits.
-	Les répertoires de votre hébergement doivent être en droits 705.
-	Les fichiers doivent tous être en droits 604.

Pour savoir comment modifier les droits d’un fichier ou répertoire : [Cliquer ici](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/#droits-des-fichiers-dossiers){.external}

### Accédez aux détails des erreurs sur vos scripts

Pour des raisons de sécurité, votre site masque les détails éventuels sur l'origine de l'erreur 500 à toute personne s'y connectant par un navigateur web.

Si vous ou votre développeur souhaitez avoir accès à ces détails, il vous est possible, à partir de la formule d’hébergement [pro2014] (https://www.ovh.com/fr/hebergement-web/hebergement-pro.xml){.external}, de vous connecter à votre site via une connexion ssh.

Pour plus d'informations sur les connexions en ssh : [Cliquez ici] (https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/){.external}.

## Aller plus loin

[Tout sur le fichier .htaccess] (https://docs.ovh.com/fr/hosting/mutualise-tout-sur-le-fichier-htaccess/){.external}

[Comment diagnostiquer une page blanche ?] (https://docs.ovh.com/fr/hosting/comment-diagnostiquer-page-blanche/){.external}

[Les codes de reponse d’un serveur HTTP] (https://docs.ovh.com/fr/hosting/mutualise-les-codes-de-reponse-dun-serveur-http/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
