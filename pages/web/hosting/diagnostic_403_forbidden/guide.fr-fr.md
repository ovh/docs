---
title: Que faire en cas de page « 403 forbidden » ?
excerpt: Découvrez comment remettre votre site en ligne quand il affiche une page « 403 forbidden »
slug: diagnostic-403-forbidden
section: Diagnostic
order: 7
---

**Dernière mise à jour le 31/08/2021**

## Objectif

Suite à une détection d'anomalies, nos robots de sécurité peuvent être amenés à bloquer temporairement l'accès aux sites de votre hébergement. Ce type de blocage automatique vise à empêcher l'envoi de code malveillant vers d'autres entités et à vous protéger ainsi juridiquement.

Ces blocages se traduisent par une page "403 fordidden" indiquant que l'accès aux fichiers de votre hébergement est interdit. 

![403error](images/403error.png){.thumbnail}

**Découvrez comment débloquer l'accès à votre site en cas d’affichage « 403 forbidden ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/) OVHcloud.
- Disposer des [identifiants de connexion](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter) à l'espace de stockage de votre hébergement.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Étape 1 : estimer la situation

La page "403 forbidden" est-elle apparue suite à une modification de votre site (comme une modification des droits d'accès sur vos fichiers, du [.htaccess](../mutualise-tout-sur-le-fichier-htaccess/) ou de l'installation d'un plugin de sécurité) ?

Si tel est le cas, [restaurez l'espace de stockage de votre hébergement](../restauration-ftp-filezilla-espace-client/) à une date antérieure.

Dans le cas contraire, consultez votre adresse e-mail d'échange avec nos services. Si vous avez reçu un mail d'OVHcloud indiquant une fermeture de votre hébergement pour des raisons de sécurité, passez à [l'étape 2][#etape2] :

![mail_blocage](images/mail_blocage.png){.thumbnail}

Si la page "403 forbidden" est apparue sans action de votre part et que vous n'avez pas reçu de mails de nos services à ce sujet, contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/).

### Étape 2 : sécuriser vos solutions

Vérifiez tout d'abord la sécurité de votre poste :

• Effectuez les mises à jour de sécurité sur votre appareil.
• Vérifiez également la présence d'un antivirus, mettez-le à jour et lancez un scan complet. (Si vous n'en possédez aucun, consultez un prestataire spécialisé, avant toute installation).
• Modifiez l'ensemble de vos mots de passe, notamment ceux de vos adresses e-mails, en respectant ces [bonnes pratiques](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/mots-de-passe){.external}.

> [!alert]
>
> Avant de changer le mot de passe de la base de données de votre site depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), mettez à jour le fichier de configuration de votre site afin qu'il se connecte à la base de données avec le nouveau mot de passe.
>
> La modification du mot de passe de votre base de données entraînera sinon une coupure du site ou des services qui l'utilisent.
>
> En cas de doute sur les manipulations à réaliser, contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Modifiez ensuite l'ensemble des mots de passe de vos services OVHcloud en suivant les instructions de ce [guide](../gerer-et-acceder-a-ses-mots-de-passe/).

### Étape 3 : intervenir sur votre hébergement

Vérifiez tout d'abord la date d'envoi du mail de nos services indiquant la fermeture de votre hébergement :

#### Cas 1 : Votre hébergement a été désactivé il y a 14 au plus

Si l'accès à votre site est impossible depuis deux semaines maximum et que votre hébergement ne contient qu'un seul site, restaurez votre espace de stockage en suivant les instructions de ce [guide](../restauration-ftp-filezilla-espace-client/#restaurer-lespace-de-stockage-depuis-lespace-client).

Si l'accès à votre site est impossible depuis deux semaines maximum et que votre hébergement contient plusieurs sites, restaurez votre espace de stockage en suivant les instructions de ce [guide](../restauration-ftp-filezilla-espace-client/#restaurer-un-fichier-depuis-un-logiciel-ou-une-interface).

#### Cas 2 : Votre hébergement a été désactivé il y a plus de 14 jours

Si l'accès à votre site est impossible depuis plus de 14 jours,

### Étape 5 : réactiver votre hébergement web

> [!primary]
>
> Que faire si la restauration ne suffit pas ?
>
> 

## Aller plus loin <a name="aller-plus-loin"></a>

[Conseils suite au piratage de votre site WordPress](https://docs.ovh.com/fr/hosting/piratage-de-votre-site-wordpress-conseils-et-cas-dusages/)

[Activation du pare-feu applicatif](https://docs.ovh.com/fr/hosting/activation-pare-feu-applicatif/)

[Changer la version de PHP de son hébergement web](https://docs.ovh.com/fr/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.