---
title: Comment sécuriser votre site Web ?
excerpt: Apprenez à renforcer la sécurité de votre site Web
slug: securiser-votre-site-web
section: Optimiser son site
order: 1
---

**Dernière mise à jour le 18/11/2021**

## Objectif

Ce guide vous permettra d'améliorer la sécurité de vos solutions OVHcloud. Il vous permettra d’acquérir des connaissances fondamentales visant à assurer la disponibilité de vos services Web, à protéger l'intégrité de vos données et à sécuriser l'accès à vos solutions.

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

### Sauvegarder ses données
#### Testez régulièrement votre site
Tester régulièrement en local ou sur autre serveur les sauvegardes générées (proactivité sur la corruption de bases)
audit de sécurité ?
"Le test en local concerne la base de données, il est tout à fait possible d'utiliser un thème de base avec les plugins indispensables pour vérifier si la base de données est fonctionnelle. Il se pose la question des versions sql et ou Apache. Pour palier à cette problématique, client peut également mettre en place une version de test de son cms (ex: test.mondomaine.tld) directement sur son mutu en utilisant une nouvelle bdd (nécessitant donc un export/import)"

#### Effectuer des sauvegardes régulièrement
Guide sauvegarde ftp/base de données / Evoquer les plugins/modules de sauvegarde en ligne pour les cms
https://docs.ovh.com/fr/hosting/exportation-bases-donnees/
https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/
https://docs.ovh.com/fr/hosting/exporter-son-site-web/
https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/

"Juste évoquer le fait qu'il existe des plugin/modules qui permettent de faire des actions de sauvegarde (ne pas donner de nom). Indiquer juste l'utilisation de plugins régulièrement mis à jour et mis en avant par la communauté wordpress."

#### Mettre en place le renouvellement automatique
https://docs.ovh.com/fr/billing/renouvellement-automatique-ovh/
https://docs.ovh.com/fr/billing/faq-renouvellement-automatique-ovh/


### Garder son site à jour
#### Vérifiez que votre site est à jour
https://docs.ovh.com/fr/hosting/site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet
https://docs.ovh.com/fr/hosting/site-ferme-pour-hack/#etape-4-veiller-a-la-securite-de-votre-site_1
#### Utilisez une version de PHP récente
https://docs.ovh.com/fr/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/


### Sécuriser activement son hébergement
#### Mettez en place un parefeu applicatif sur votre site
https://docs.ovh.com/fr/hosting/activation-pare-feu-applicatif/
" Je déconseillerai l'utilisation simultanée d'un waf lié au cms et de modsecurity. L'avantage du parefeu lié à un cms réside dans la proactivité de la protection, les règles de sécurité sont régulièrement mises à jour. idem ici, proposer les plugins mis en avant par la communauté wordpress. Reconnaitre les fichiers hackés des autres relève du travail du webmaster, voir d'un spécialiste de sécu (audit du code php, javascript, etc...)"
#### Vérfiez la présence de fichiers malveillants sur votre hébergment


### Sécurisez les échanges de données vers vos utilisateurs
#### Activez le https
https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/
https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/
#### Protégez vos formulaires


### Adopter les bonnes pratiques en matière de mots de passe
#### Apprenez à générer des mots de passe complexes
https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#generer-un-bon-mot-de-passe
#### Utilisez un gestionnaire de mots de passe
https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#utiliser-un-gestionnaire-de-mots-de-passe
#### Autres bonnes pratiques liées aux mots de passe
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


## Aller plus loin <a name="aller-plus-loin"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.