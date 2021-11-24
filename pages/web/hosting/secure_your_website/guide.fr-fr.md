---
title: Comment sécuriser votre site Web ?
excerpt: Apprenez à renforcer la sécurité de votre site Web
slug: securiser-votre-site
section: Optimiser son site
order: 1
---

**Dernière mise à jour le 18/11/2021**

## Objectif

Ce guide vous permettra d'améliorer la sécurité de vos sites Web. Il vous permettra d’acquérir des connaissances fondamentales visant à assurer la disponibilité de vos services, à protéger l'intégrité de vos données et à sécuriser l'accès à vos solutions.

warning

Ce guide concernera uniquement les sites WEB hébrgés sur les [solutions mutualisées OVHcloud]().

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

### Niveau débutant 

#### Effectuez des sauvegardes régulièrement <a name="backup"></a>

Sauvegarder régulièrement vos données, quelle que soit la solution informatique concernée est le plus important geste à avoir en termes de sécurité informatique. Il sera toujours possible de réinstaller un logiciel ou de commander un nouvel appareil, mais il est très difficile de récupérer des données une fois qu'elles ont été perdues.

OVHcloud effectue régulièrement des sauvegardes de vos données sur son infrastruture. Pour autant une erreur de manipulation comme une opération de suppression lancée sur une base de donnes en production ou un non renovuelleemnt de vos servies peuvent entrapiner la perte définitive de vos données.

Pour cette première étape de ce parcours de sécurisation de votre site, commencez par sauvegarder les données qui le composent (fichiers FTP **ET** base de données) en suivant les instructions de ce [guide](../exporter-son-site-web/). Importez-les sur votre poste ou sur un support externe, type serveur NAS ou clé USB.

Les logiciels de gestion de site Web (CMS) offrent aussi la possibilité d'installer des plugins de sauvegarde automatique. Consultez les forums officiels de votre CMS préféré ou contactez la [communauté OVHcloud](https://community.ovh.com/) à ce sujet.

#### Mettre en place le renouvellement automatique

En cas de non-renouvellement de vos services, OVHcloud a l'obligation légale de supprimer intégralement les données de votre site, ainsi que ses sauvegardes, à l'échéance de votre abonnement. Nous envoyons des messages de rappels à nos clients afin de leur rappeler leurs échéances de renouvellement. Pour autant, ces e-mails de relance peuvent arriver dans vos spams ou l'adresse e-mail associée à votre compte OVHcloud est peut-être erronée ou n'est plus disponible.

Surtout si vous n'avez pas la possibilité d'effectuer de sauvegardes régulières et que votre site a une place prépondérante dans votre activité professionnelle, [activez le renouvellement automatique](../../billing/renouvellement-automatique-ovh/#acceder-au-parametrage-de-vos-services) sur l'ensemble de vos services OVHcloud. Nous vous recommandons aussi de vérifier régulièrement la validité des moyens de paiement que vous avez enregistré.

#### Adopter les bonnes pratiques en matière de mots de passe
##### Apprenez à générer des mots de passe complexes
https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#generer-un-bon-mot-de-passe
##### Utilisez un gestionnaire de mots de passe
https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#utiliser-un-gestionnaire-de-mots-de-passe
##### Autres bonnes pratiques liées aux mots de passe
https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#bonnes-pratiques-pour-la-gestion-de-votre-mot-de-passe
Ne pas enregistrer ses mots de passe dans son navigateur
cf anssi - cybermalveillance.gouv.fr
https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#aller-plus-loin_2

### Sécuriser son environnement local et l'accès à son espace client OVHcloud
#### Vérifiez vos appareils
https://docs.ovh.com/fr/hosting/piratage-de-votre-site-wordpress-conseils-et-cas-dusages/#scannez-votre-poste
Le premier endroit où vous devez commencer est votre environnement local. Dans de nombreux cas, la source de l’attaque/infection commence localement (par exemple, ordinateur portable, ordinateur de bureau, etc …).
Assurez-vous que vous exécutez un antivirus/malware sur votre machine locale. Certains virus peuvent ne pas être supprimés par certains logiciels anti-virus. Il peut être intéressant d’en utiliser plusieurs (local et en ligne). Ce conseil se prolonge à la fois pour Windows, Mac et Linux.
#### Apprennez à reconnaître les e-mails frauduleux
https://docs.ovh.com/fr/customer/arnaques-fraude-phishing/
#### Activez la double authentification
https://docs.ovh.com/fr/customer/securiser-son-compte-avec-une-2FA/
https://docs.ovh.com/fr/customer/securiser-son-compte-avec-une-2FA/#etape-2-sauvegarder-les-codes-de-secours
#### Vérifiez vos informations personnelles
https://docs.ovh.com/fr/customer/tout-savoir-sur-identifiant-client/#ajouter-une-adresse-e-mail-de-secours
https://docs.ovh.com/fr/customer/tout-savoir-sur-identifiant-client/#comment-gerer-mes-informations-personnelles_1



### Niveau confirmé

### Garder son site à jour
#### Vérifiez que votre site est à jour
https://docs.ovh.com/fr/hosting/site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet
https://docs.ovh.com/fr/hosting/site-ferme-pour-hack/#etape-4-veiller-a-la-securite-de-votre-site_1
#### Utilisez une version de PHP récente
https://docs.ovh.com/fr/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/

#### Activez le https
https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/
https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/

#### Protégez vos formulaires

#### Mettez en place un parefeu applicatif sur votre site
https://docs.ovh.com/fr/hosting/activation-pare-feu-applicatif/
" Je déconseillerai l'utilisation simultanée d'un waf lié au cms et de modsecurity. L'avantage du parefeu lié à un cms réside dans la proactivité de la protection, les règles de sécurité sont régulièrement mises à jour. idem ici, proposer les plugins mis en avant par la communauté wordpress. Reconnaitre les fichiers hackés des autres relève du travail du webmaster, voir d'un spécialiste de sécu (audit du code php, javascript, etc...)"



### Niveau expert

#### Vérifiez la présence de fichiers malveillants sur votre hébergement

#### Testez les sauvegardes de votre site

Les sauvegardes des données de votre site (fichiers FTP et base de données) doivent être effectuées [régulièrement](#backup).

Pour autant, elles ne constituent pas une sécurité absolue et vous devrez aussi tester les sauvegardes de votre bases de données, afin de vérifier qu'elles ne sont pas corrompues.

Vous pourrez effectuer ces tests localement, en important vos données par exemple sur un logiciel de type [WAMP]() (Veillez à paramétrer votre solution locale afin que sa configuration corresponde en tout point à celle de nos [serveurs d'hébergement mutualisé]()).

Une autre solution de test peut être de créer une **version de test** de votre site (ex : test.mondomaine.tld) dans un autre dossier de votre hébergement (il vous sera tout à fait possible d'utiliser un template de base).









### Sécuriser activement son hébergement




### Sécurisez les échanges de données vers vos utilisateurs










## Aller plus loin <a name="aller-plus-loin"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.