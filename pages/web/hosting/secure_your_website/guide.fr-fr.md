---
title: Comment sécuriser votre site Web ?
excerpt: Apprenez à renforcer la sécurité de votre site Web
slug: securiser-votre-site
section: Optimiser son site
order: 1
---

**Dernière mise à jour le 24/11/2021**

## Objectif

Ce guide vous permettra d’acquérir des connaissances fondamentales visant à assurer la disponibilité de vos services, à protéger l'intégrité de vos données et à sécuriser l'accès à vos solutions.

> [!warning]
>
> Ce guide concerne uniquement les sites Web hébergés sur les [solutions mutualisées OVHcloud](). Il est composé de trois parties ([Niveau débutant](#débutant), [Confirmé](#confirmé) et [Expert](#expert)).
> 
> Si vous rencontrez des difficultés à réaliser certaines des opérations décrites, n'hésitez pas à contacter la [communauté OVHcloud](https://community.ovh.com/) ou nos [partenaires](https://partner.ovhcloud.com/fr/).

**Découvrez comment sécuriser votre site Web.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Niveau Débutant <a name="débutant"></a>

#### Vérifiez la sécurité de vos appareils

Vérifiez tout d'abord la sécurité de votre poste Windows, Mac ou Linux :

- Vérifiez les mises à jour de votre machine,
- Lancez un scan complet de votre poste, après avoir mis à jour votre logiciel Antivirus / Antimalware,
- Changez régulièrement le mots de passe administrateur de votre poste (Pour plus d'informations sur le choix des mots de passe, suivez les instructions de ce [guide](../../customer/tout-savoir-sur-identifiant-client/)).

> [!warning]
>
> Si vous rencontrez des difficultés à effectuer ces manipulations, n'hésitez pas à contacter la [communauté OVHcloud](https://community.ovh.com/) ou nos partenaires. Nous ne serons malheureusement pas en mesure de vous apporter une assistance pour les réaliser.
>

#### Sécurisez votre espace client OVHcloud

Pour sécuriser votre compte client, suivez les instructions de ce [guide](../../customer/tout-savoir-sur-identifiant-client/).

Pensez notamment à mettre à jour les [informations de votre compte client](../tout-savoir-sur-identifiant-client/#modifier-mes-informations-personnelles)et à y ajouter un **e-mail de secours**. En cas de pertes de vos identifiants et de l'adresse e-mail principale de votre compte client OVHcloud, un e-mail de secours ou des informations personnelles à jour nous seront indispensables d'un point de vue légal pour vous aider à retrouver l'accès à vos solutions.

#### Effectuez régulièrement des sauvegardes de votre site <a name="backup"></a>

> [!primary]
>
> Sauvegarder régulièrement vos données, quelle que soit la solution informatique concernée est le plus important geste à avoir en termes de sécurité informatique. Il sera toujours possible de réinstaller un logiciel ou de commander un nouvel appareil, mais il est très difficile de récupérer des données une fois qu'elles ont été perdues.
>
> OVHcloud effectue régulièrement des sauvegardes de vos données sur son infrastructure. Pour autant une erreur de manipulation comme une opération de suppression lancée sur une base de données en production ou un non renouvellement de vos services peuvent entraîner la perte définitive de vos données.
>

Pour cette première étape de ce parcours de sécurisation de votre site, commencez par sauvegarder les données qui le composent (fichiers FTP **ET** base de données) en suivant les instructions de ce [guide](../exporter-son-site-web/). Importez-les sur votre poste ou sur un support externe, type serveur NAS ou clé USB.

Les logiciels de gestion de site Web (CMS) offrent aussi la possibilité d'installer des plugins de sauvegarde automatique. Consultez les forums officiels de votre CMS préféré ou contactez la [communauté OVHcloud](https://community.ovh.com/) à ce sujet.

#### Apprennez à reconnaître les e-mails frauduleux

Les e-mails de phishing constituent également une menace à la sécurité de votre site, car ils peuvent être porteurs de logiciels malveillants. Pour apprendre à les reconnaître et à vous en prémunir, consultez ce [guide](../customer/arnaques-fraude-phishing/).

#### Mettre en place le renouvellement automatique

En cas de non-renouvellement de vos services, OVHcloud a l'obligation légale, à l'échéance de votre abonnement, de supprimer intégralement les données liées à votre offre d'hébergement, ainsi que la totalité de leurs sauvegardes. Nous envoyons des messages de rappels à nos clients afin de leur rappeler leurs échéances de renouvellement. Pour autant, ces e-mails de relance peuvent arriver dans vos spams ou l'adresse e-mail associée à votre compte OVHcloud est peut-être erronée ou n'est plus disponible.

Surtout si vous n'avez pas la possibilité d'effectuer de sauvegardes régulières et que votre site a une place prépondérante dans votre activité professionnelle, [activez le renouvellement automatique](../../billing/renouvellement-automatique-ovh/#acceder-au-parametrage-de-vos-services) sur l'ensemble de vos services OVHcloud. Nous vous recommandons aussi de vérifier régulièrement la validité des moyens de paiement que vous avez enregistré.


### Niveau Confirmé <a name="confirmé"></a>

#### Vérifiez que votre site est à jour

Vérifiez régulièrement les mises à jour de votre site en suivant les instructions de ce [guide](../site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet).

Pensez également à utiliser une version récente du [language PHP](../configurer-le-php-sur-son-hebergement-web-mutu-2014/) sur votre hébergement.

#### Activez le https

Mettez en place la connexion cryptée à votre site via le protocole **HTTPS** en suivant ce [guide](../passer-site-internet-https-ssl/).

#### Protégez vos formulaires

Les formulaires des sites Internet sont des cibles privilégiés des hackers/spammers. Protégez vos formulaires de toute attaque en mettant en place des plugins de type **« CAPTCHA »**.

#### Mettez en place un plugin de sécurité sur votre site

Ajoutez à votre site un plugin de sécurité recommandé sur les sites officiels du CMS que vous avez utilisé pour le mettre en place :

- [Wordpress](https://wordpress.com/fr/){.external}
- [Joomla](https://www.joomla.fr/){.external}
- [Drupal](https://www.drupal.fr/){.external}
- [Prestashop](https://www.prestashop.com/fr){.external}


### Niveau Expert <a name="expert"></a>

#### Vérifiez la présence de fichiers malveillants sur votre hébergement



#### Testez les sauvegardes de votre site

Les [sauvegardes des données](#backup) de votre site (fichiers FTP et base de données) doivent être effectuées régulièrement.

Pour autant, elles ne constituent pas une sécurité absolue et vous devrez aussi tester les sauvegardes de votre bases de données notamment, afin de vérifier qu'elles ne sont pas corrompues.

Vous pourrez effectuer ces tests localement, en important vos données par exemple sur un logiciel de type [WAMP](){.external} (Veillez à paramétrer votre solution locale afin que sa configuration corresponde en tout point à celle de nos [serveurs d'hébergement mutualisé]()).

Une autre solution de test peut être de créer une **version de test** de votre site (ex : test.mondomaine.tld) dans un autre dossier de votre hébergement (il vous sera tout à fait possible d'utiliser un template de base).

## Aller plus loin <a name="aller-plus-loin"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.