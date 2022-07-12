---
title: Comment sécuriser votre site Web ?
excerpt: Apprenez à renforcer la sécurité de votre site Web
slug: secure-website
section: Optimiser son site
order: 1
---

**Dernière mise à jour le 10/12/2021**

## Objectif

Ce guide vous permet d’acquérir des connaissances fondamentales visant à assurer la disponibilité de vos services, à protéger l'intégrité de vos données et à sécuriser l'accès à vos solutions. Il concerne uniquement les sites Web hébergés sur les [solutions mutualisées OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).

Ce guide est organisé par étapes dans un ordre croissant de difficulté technique. La sécurité de votre site se mesurera à l'élément le concernant qui est le moins protégé. Nous vous préconisons donc de réaliser l'ensemble des actions décrites ici.<br/>
Toutefois, si vous rencontrez des difficultés à réaliser certaines d'entre elles, n'hésitez pas à contacter la [communauté OVHcloud](https://community.ovh.com/) ou nos [partenaires](https://partner.ovhcloud.com/fr/).

**Découvrez comment sécuriser votre site Web.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/) OVHcloud.
- Disposer des identifiants de connexion à [l'interface administrateur de votre site](https://codex.wordpress.org/fr:Premiers_pas_avec_WordPress){.external}, ainsi qu'à [l'espace de stockage de votre hébergement](../connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Étape 1. Vérifiez la sécurité de vos appareils <a name="local"></a>

Cette première étape est primordiale. En effet, l'infection de votre poste informatique par un logiciel malveillant peut potentiellement donner accès, à une personne mal intentionnée, à l'ensemble de vos saisies effectuées sur votre clavier. Par conséquent, les identifiants que vous utilisez pour vous connecter à votre espace client OVHcloud ou à l'interface d'administration de votre site peuvent être compromis.

Par ailleurs, le phénomène croissant des [rançongiciels](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/rancongiciels-ransomwares){.external} (environ 400 cas en France en 2020) peut non seulement amener au chiffrement de l'ensemble de vos données personnelles, mais aussi mettre en péril votre activité en rendant inaccessible l'ensemble de vos données, appareils et logiciels. 

Vérifiez donc tout d'abord la sécurité de votre poste Windows, Mac ou Linux :

- vérifiez les mises à jour de votre machine;
- lancez un scan complet de votre poste, après avoir mis à jour votre logiciel antivirus / anti-malware;
- changez régulièrement le mot de passe administrateur de votre poste (pour plus d'informations sur le choix des mots de passe, suivez les instructions de ce [guide](../../customer/tout-savoir-sur-identifiant-client/#creer-un-mot-de-passe-solide-et-unique)).

### Étape 2. Sécurisez votre espace client OVHcloud

Pour sécuriser votre compte client, [activez la double authentification](../../customer/securiser-son-compte-avec-une-2FA/) et suivez les instructions de ce [guide](../../customer/tout-savoir-sur-identifiant-client/).

Pensez notamment à mettre à jour les [informations de votre compte client](../../customer/tout-savoir-sur-identifiant-client/#modifier-mes-informations-personnelles) et à y ajouter un **e-mail de secours**.<br>
En cas de perte de vos identifiants et/ou d'indisponibilité de l'adresse e-mail principale de votre compte client OVHcloud, un e-mail de secours ou des informations personnelles à jour nous seront indispensables pour vous aider à retrouver l'accès à vos solutions.

### Étape 3. Effectuez régulièrement des sauvegardes de votre site <a name="backup"></a>

> [!primary]
>
> Sauvegarder régulièrement vos données, quelle que soit l'offre concernée, est le geste le plus important à adopter en termes de sécurité informatique. Il sera toujours possible de réinstaller un logiciel ou de commander un nouvel appareil, mais il vous sera très difficile, voire même impossible, de récupérer des données après, par exemple, qu'elles aient été effacées par erreur ou suite à la défaillance d'un matériel.
>
> OVHcloud effectue régulièrement des sauvegardes de vos données sur son infrastructure. Pour autant, une erreur de manipulation comme une opération de suppression lancée manuellement sur une base de données en production, ou un non renouvellement de vos services, entraîneront la perte définitive de vos données, ainsi que toutes leurs sauvegardes.
>

Commencez par sauvegarder les données qui composent votre site (fichiers FTP **ET** base de données) en suivant les instructions de ce [guide](../exporter-son-site-web/). Importez-les sur votre poste ou sur un support externe, de type serveur NAS ou clé USB.

Les logiciels de gestion de site Web (CMS) offrent aussi la possibilité d'installer des plugins de sauvegarde automatique.<br>
Consultez les forums officiels de votre CMS préféré ou contactez la [communauté OVHcloud](https://community.ovh.com/) à ce sujet.

### Étape 4. Apprenez à reconnaître les e-mails frauduleux

Les e-mails de phishing constituent également une menace à la sécurité de votre site, car ils peuvent contenir ou amener à l'installation de logiciels malveillants. Pour apprendre à les reconnaître et à vous en prémunir, consultez ce [guide](../../customer/arnaques-fraude-phishing/).

### Étape 5. Mettre en place le renouvellement automatique

En cas de non-renouvellement de vos services, OVHcloud a l'obligation légale, à l'échéance de votre abonnement, de supprimer intégralement les données liées à votre offre d'hébergement, ainsi que la totalité de leurs sauvegardes. Nous envoyons des messages de rappels à nos clients afin de leur rappeler leurs échéances de renouvellement.<br>
Pour autant, ces e-mails de relance peuvent arriver dans vos spams, ou l'adresse e-mail associée à votre compte OVHcloud peut être erronée ou ne plus être disponible.

Si votre site a une place prépondérante dans votre activité professionnelle, [activez le renouvellement automatique](../../billing/renouvellement-automatique-ovh/#acceder-au-parametrage-de-vos-services) sur l'ensemble de vos services OVHcloud.<br>
Nous vous recommandons aussi de vérifier régulièrement la **validité des moyens de paiement** que vous avez enregistrés.

### Étape 6. Vérifiez que votre site est à jour

Vérifiez régulièrement les mises à jour de votre site en suivant les instructions de ce [guide](../site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet).

Pensez également à utiliser une version récente du [langage informatique PHP](../configurer-le-php-sur-son-hebergement-web-mutu-2014/) sur votre hébergement.

### Étape 7. Activez le https

Mettez en place la connexion cryptée à votre site via le protocole **HTTPS** en suivant ce [guide](../passer-site-internet-https-ssl/). L'activation de ce protocole va permettre de chiffrer l'ensemble des informations qui transitent par votre site web (notamment les saisies effectuées par vos utilisateurs sur ses formulaires).

### Étape 8. Protégez vos formulaires

Les formulaires des sites Internet sont des cibles privilégiées des hackers/spammers. Protégez vos formulaires de toute attaque en mettant en place des plugins de type **« CAPTCHA »**.

### Étape 9. Mettez en place un plugin de sécurité sur votre site

Ajoutez à votre site un plugin de sécurité recommandé par l'éditeur du CMS :

- [WordPress](https://fr.wordpress.org/){.external}
- [Joomla](https://www.joomla.fr/){.external}
- [Drupal](https://www.drupal.fr/){.external}
- [PrestaShop](https://www.prestashop.com/fr){.external}

### Étape 10. Vérifiez que votre hébergement ne contient pas de fichiers malveillants

Cette étape nécessite de vous connecter à votre [espace FTP](../connexion-espace-stockage-ftp-hebergement-web/). Elle implique des compétences techniques pour reconnaître d'éventuels fichiers malveillants sur votre hébergement. Si vous rencontrez des difficultés à effectuer cette vérification, n'hésitez pas à contacter nos [partenaires](https://partner.ovhcloud.com/fr/).

En cas de doutes sur ce sujet, pensez également à effectuer les vérifications décrites à [l'étape 1 de ce guide](#local) et à [changer le mot de passe](../modifier-mot-de-passe-utilisateur-ftp/) de votre espace FTP.

### Étape 11. Testez les sauvegardes de votre site

Les [sauvegardes des données](#backup) de votre site (fichiers FTP et base de données) doivent être effectuées régulièrement.

Pour autant, elles ne constituent pas une sécurité absolue. Vous devez notamment aussi tester les sauvegardes de votre base de données, afin de vérifier qu'elles ne sont pas corrompues.

Vous pourrez effectuer ces tests localement, par exemple en important vos données sur un logiciel de type [WAMP](https://www.wampserver.com/){.external}. Veillez alors à paramétrer votre solution locale afin que sa configuration corresponde en tout point à celle de nos [serveurs d'hébergement mutualisé](https://webhosting-infos.hosting.ovh.net/).

Vous pouvez également créer une **version de test** de votre site (ex : test.mondomaine.tld) dans un autre dossier de votre hébergement (il vous sera tout à fait possible d'utiliser un template de base).

## Aller plus loin <a name="aller-plus-loin"></a>

[Conseils suite au piratage de votre site WordPress](../piratage-de-votre-site-wordpress-conseils-et-cas-dusages/)

[Réagir en cas de désactivation pour sécurité d’un hébergement](../site-ferme-pour-hack/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
