---
title: 'Tutoriel - Conseils suite au piratage de votre site Web'
slug: piratage-de-votre-site-wordpress-conseils-et-cas-dusages
excerpt: 'Découvrez nos conseils pour réparer votre site Web piraté'
section: "Cas d'usage"
order: 01
---

**Dernière mise à jour le 07/11/2022**

## Objectif

Ce tutoriel a pour objectif de vous aider lorsque vous constatez que votre site Web a été piraté. Vous trouverez ci-après **les 4 étapes à réaliser dans l'ordre** pour corriger cette situation.

Un piratage peut se manifester de plusieurs manières (liste non exhaustive) :

- votre site Web n'apparaît plus correctement ou plus du tout, sans aucune modifications (FTP, SQL ou DNS) de votre part ;
- votre site Web est redirigé vers un autre site ;
- votre site Web génère des « annonces » intempestives (Pop-ups, fenêtres d'erreurs, etc) ;
- la base de données de votre site Web est subitement remplie ;
- vous recevez depuis votre hébergement des SPAMs générés par des scripts infectés.

**Découvrez nos conseils pour réparer votre site Web piraté.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement Web Cloud](https://www.ovh.com/fr/hebergement-web/) avec votre site Web hébergé dessus.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

Le piratage d'un site Web est systématiquement lié à **au moins** l'un des points suivants :

- un manque de mises à jour du site web ;
- un logiciel espion présent sur l'un des appareils que vous utilisez pour administrer votre site web ;
- l'utilisation d'un plugin ou d'un thème « non officiel », notamment si vous utilisez un Content Managment System (CMS) comme WordPress, Joomla!, PrestaShop ou Drupal ;
- des mots de passe (FTP, SQL, « back-office » pour les CMS, etc) trop courts ou trop faciles à trouver, d'autant plus lorsqu'ils ne sont jamais changés ;
- un script de votre site qui ouvre délibérément des ports au niveau de votre hébergement Web **sans** vérifier ce qui reçu par ces ports ;
- des droits d'accès FTP « CHMOD » un peu trop permissifs.

**Le piratage d'un site Web ne vient pas d'un défaut de sécurité de l'hébergement web.** Seuls les scripts/fichiers qu'il héberge sont en capacité de donner des ordres à l'hébergement. Ils peuvent lui demander ou non d'ouvrir certains ports d'accès fermés par défaut ou d'exécuter ou non certaines actions.<br>
Les scripts ordonnent, l'hébergement exécute.

### Etape 1 - scanner l'ensemble de vos appareils

Réalisez une analyse anti-virus et anti-spywares de tous les appareils (PC, Mac, smartphone/Iphone, tablette, ...) depuis lesquels vous gérez l'administration ou la gestion de votre site web.

> [!warning]
>
> Si vous utilisez des appareils qui fonctionnent sous *Linux*, *Mac OS* ou d'autres systèmes d'exploitations pour lesquels il est communément stipulé qu'il n'y pas de risque d'avoir un virus ou un logiciel « espion », **effectuez tout de même cette analyse**.
>
> **Aucun système d'exploitation n'est immunisé contre les logiciels/virus malveillants.**
>

> [!success]
> Nous vous recommandons d'utiliser plusieurs anti-virus/anti-spywares (gratuits ou payants) pour chacun de vos appareils.
> Effectivement, certains virus ou spywares peuvent persister en fonction du logiciel anti-virus utilisé.
> Il existe des versions d'anti-virus/anti-spywares que vous pouvez installer « en local » sur votre appareil ou utiliser directement « en ligne » sur internet.
>

Si un virus ou un logiciel espion est trouvé, supprimez-le à l'aide de votre logiciel anti-virus/anti-spywares **avant** de passer à l'étape suivante.

### Etape 2 - modifier ses mots de passe <a name="step2"></a>

Lorsqu'un site web a été piraté et par précaution, modifiez l'ensemble des mots de passe en rapport avec celui-ci.

Concernant OVHcloud, utilisez notre documentation pour :

- [Changer le mot de passe d'accès à votre identifiant client OVHcloud](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
- [Sécuriser l'accès à votre espace client OVHcloud avec une double authentification](https://docs.ovh.com/fr/customer/securiser-son-compte-avec-une-2FA/).
- [Modifier le mot de passe d'accès à l'espace de stockage FTP de votre hébergement Web](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/).
- [Changer le mot de passe d'accès à votre base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).

Nous vous recommandons également d'utiliser un [gestionnaire de mots de passe](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#utiliser-un-gestionnaire-de-mots-de-passe).

> [!warning]
> 
> En changeant le mot de passe de votre base de données, n'oubliez pas de mettre également à jour le mot de passe dans le fichier de configuration de votre site Web. Dans le cas contraire, la liaison entre la base de données et les fichiers présents dans l'espace de stockage FTP de votre hébergement Web sera interrompue et votre site affichera une « erreur lors de la connexion à votre base de données ».
>

> [!primary]
>
> Si vous utilisez un CMS tel que WordPress, Joomla!, PrestaShop ou Drupal, consultez la documentation officielle de votre CMS pour changer le mot de passe d'accès à l'espace d'administration de votre CMS (« Back-office »).
>

### Etape 3 - rechercher les fichiers malveillants et les failles de sécurité

> [!warning]
>
> Si vous éprouvez des difficultés pour effectuer les actions décrites ci-dessous, faites appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) en cyber sécurité .
>

Utilisez notre guide sur [les statistiques et logs de votre hébergement Web](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/) pour rechercher les éléments malveillants injectés dans votre site web. Vous trouverez les informations dans les logs « web ». 

Commencez à chercher à partir de la date à laquelle vous avez constaté le piratage puis remontez dans l'historique de vos logs.

Identifiez les requêtes « POST » qui sortent de l'ordinaire. Généralement, les fichiers malveillants ont des noms alphanumériques sans aucune signification particulière (**exemples** : az78e4jFn.txt, oij8bh4.html, udh73hd45.php, mlkjc23d.js, ...).

Repérez l'adresse IP qui a effectué la requête malveillante. Effectuez ensuite une recherche de cette adresse dans vos logs pour voir l'ensemble des actions demandées sur votre site par cette IP.

> [!primary]
>
> Généralement, plusieurs adresses IP malveillantes appellent, pendant la même période, les scripts malveillants présents suite au piratage.
> Prenez le temps d'analyser tous les logs de votre hébergement.
>

Remontez ainsi jusqu'aux failles de sécurité présentes dans votre site tout en listant les fichiers malveillants que vous rencontrez.

> [!success]
>
> Plusieurs sites (non gérés par OVHcloud) peuvent vous permettre d'obtenir des informations sur les IPs malveillantes. Vous pouvez utiliser l'un d'entres eux pour récupérer des informations telles que le fournisseur de l'IP, sa géolocalisation, le gestionnaire, etc...
>
> Si vous êtes absolument sûr qu'il s'agit d'une IP malveillante, vous pouvez lui bloquer l'accès à votre hébergement en suivant notre documentation sur les [restrictions d'accès via le fichier « .htaccess »](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/).
> 

### Etape 4 - supprimer les éléments malveillants et corriger les failles de sécurité

Pour cette étape, trois cas de figure sont possibles : 

> [!alert]
>
> **Important** : Dans tous les cas de figure, si vous supprimez les codes malveillants sans pour autant corriger les failles de sécurité, le pirate informatique pourrait de nouveau les exploiter afin de redéposer du code malveillant sur votre hébergement. Il aurait même la possibilité d'y créer une nouvelle porte dérobée.
>
> La restauration à une date antérieure au piratage nécessitera une mise à jour **immédiate** et la réalisation indispensable d'un **audit de sécurité**, afin d'identifier toutes les failles de sécurité.
>

#### Cas n°1 - OVHcloud dispose d'une sauvegarde de votre site internet (espace de stockage FTP et base de données)

En fonction de la date de piratage de votre site (moins de 14 jours), OVHcloud peut vous fournir une sauvegarde (non contractuelle).

Pour cela, consultez nos 3 guides sur le sujet :

- [Restaurer l'espace de stockage FTP de votre hébergement Web](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/)
- [Récupérer la sauvegarde SQL de votre base de données](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/)
- [Importer la sauvegarde SQL dans votre base de données](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/)

Faites coïncider au maximum les dates de restauration de votre espace de stockage FTP et de votre base de données SQL.

>[!warning]
>
> OVHcloud dispose de robots de sécurité qui peuvent détecter des actions malveillantes réalisées depuis votre hébergement. Ces derniers désactivent votre hébergement et vous notifient par e-mail que votre hébergement a été désactivé.
> En complément de cet e-mail, une page « 403 Forbidden » apparaît généralement lorsque vous tentez d'accéder à votre site.
>
> Si votre hébergement est en état « désactivé », les robots de restauration automatique disponibles depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) seront désactivés également.
> Vous devrez obligatoirement effectuer une restauration « manuelle » de votre site, supprimer les éléments malveillants résiduels puis corriger toutes les failles de sécurité présentes dans cette sauvegarde. Ceci **avant** de réactiver votre hébergement.
>
> Pour réactiver l'hébergement Web, suivez les instructions de l'étape 4 de ce [guide](https://docs.ovh.com/fr/hosting/diagnostic-403-forbidden/#reactivate-web-hosting).
>

Votre site devrait réaparaître si ces actions ont été correctement effectuées.

#### Cas n°2 - vous disposez de votre propre sauvegarde antérieure au piratage

Pour cela, consultez nos 2 guides sur le sujet :

- [Restaurer l'espace de stockage FTP de votre hébergement Web](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/)
- [Importer la sauvegarde SQL dans votre base de données](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/)

>[!warning]
>
> OVHcloud dispose de robots de sécurité qui peuvent détecter des actions malveillantes réalisées depuis votre hébergement. Ces derniers désactivent votre hébergement et vous notifient par e-mail que votre hébergement a été désactivé.
> En complément de cet e-mail, une page « 403 Forbidden » apparaît généralement lorsque vous tentez d'accéder à votre site.
>
> Si votre hébergement est en état « désactivé », effectuez une restauration « manuelle » de votre site, supprimez les éléments malveillants résiduels puis corrigez toutes les failles de sécurité présentes dans cette sauvegarde. Ceci **avant** de réactiver votre hébergement.
>
> Pour réactiver l'hébergement Web, suivez les instructions de l'étape 4 de ce [guide](https://docs.ovh.com/fr/hosting/diagnostic-403-forbidden/#reactivate-web-hosting).
>

Votre site devrait réaparaître si ces actions ont été correctement effectuées.

#### Cas n°3 - aucune sauvegarde n'est disponible pour votre site Web

Vous devrez supprimer manuellement les fichiers et les codes malveillants préalablement détectés lors de [l'étape 2](#step2) de ce guide puis corriger les failles de sécurité de votre site.

Pour vous connecter à l'espace de stockage de votre hébergement, consultez [notre guide](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) sur le sujet.

> [!warning]
>
> OVHcloud dispose de robots de sécurité qui peuvent détecter des actions malveillantes réalisées depuis votre hébergement. Ces derniers désactivent votre hébergement et vous notifient par e-mail que votre hébergement a été désactivé.
> En complément de cet e-mail, une page « 403 Forbidden » apparaît généralement lorsque vous tentez d'accéder à votre site.
>
> Si votre hébergement est en état « désactivé », supprimez les éléments malveillants résiduels puis corrigez toutes les failles de sécurité présentes dans cette sauvegarde **avant** de réactiver votre hébergement.
>
> Pour réactiver l'hébergement Web, suivez les instructions de l'étape 4 de ce [guide](https://docs.ovh.com/fr/hosting/diagnostic-403-forbidden/#reactivate-web-hosting).
>

Votre site devrait réaparaître si ces actions ont été correctement effectuées.

### Etape 5 - Mettre à jour votre site

Mettez à jour votre site web au niveau de son code source, des paramètres de sécurité dont il dispose, des versions de langage qu'il utilise (notamment le PHP).

Vérifiez les droits d'accès FTP « CHMOD » pour chacun de vos dossiers et fichiers hébergés dans votre espace de stockage.
Par défaut, nous recommandons d'utiliser au maximum les droits « CHMOD » **705** pour les dossiers et **604** pour les fichiers.
Retrouvez plus de détails sur les droits « CHMOD » dans la section « Informations utiles » de notre [tutoriel sur l'utilisation du client FTP Filezilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/#useful-information).

Si vous utilisez un CMS (Wordpress, Joomla!, PrestaShop, Drupal, ...), mettez à jour vos plugins, votre thème et le CMS en lui-même.
Privilégiez l'utilisation de plugins/thèmes « officiels » et maintenez à jour votre site web le plus régulièrement possible et de manière exhaustive.

Sécurisez vos formulaires de contact à minima à l'aide d'un système de type « Captcha », afin d'éviter que des robots malveillants n'émettent du SPAM par ce biais. Si la fonction « mail() » de PHP a également été bloquée sur votre hébergement, consultez [notre guide](https://docs.ovh.com/fr/hosting/suivi-emails-automatises/) sur ce sujet pour résoudre ce blocage.

Consultez également notre guide sur [comment sécuriser votre site Web](https://docs.ovh.com/fr/hosting/secure-website/), afin de diminuer au maximum le risque qu'un nouveau piratage se produise.

## Aller plus loin <a name="go-further"></a>

[Se connecter à l'espace de stockage de son hébergement Web](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/)

[Modifier la configuration de son hébergement Web](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/)

[Activer le pare-feu applicatif](https://docs.ovh.com/fr/hosting/activation-pare-feu-applicatif/)

[Optimiser les performances de son site](https://docs.ovh.com/fr/hosting/optimisation-performances-site/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
