---
title: "Que faire en cas de page « 403 forbidden » ?"
excerpt: "Découvrez comment remettre votre site en ligne quand il affiche une page « 403 forbidden »"
slug: diagnostic-403-forbidden
section: Diagnostic
order: 08
---

**Dernière mise à jour le 16/06/2022**

## Objectif

Des modifications sur les droits d'accès aux fichiers de votre site, sur le fichier **.htaccess** ou l'installation d'un plugin de sécurité peuvent parfois se traduire par une page **« 403 forbidden »**.

Il peut aussi arriver que, suite à une détection d'anomalies, nos robots de sécurité aient été amenés à bloquer temporairement l'accès aux fichiers de votre hébergement. Ce type de blocage automatique vise à empêcher l'envoi de code malveillant vers d'autres entités et à vous protéger juridiquement.

![403error](images/403error.png){.thumbnail}

**Découvrez comment débloquer l'accès à votre site en cas d’affichage « 403 forbidden ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/) OVHcloud.
- Disposer des [identifiants de connexion](../connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter) à l'espace de stockage de votre hébergement.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Étape 1 : analyser la situation

Si la page **« 403 forbidden »** est apparue suite à une modification erronée de votre site, [restaurez tout ou partie de l'espace de stockage de votre hébergement](../restauration-ftp-filezilla-espace-client/) à une date antérieure.

Si les sauvegardes disponibles ne vous permettent pas de rétablir l'accès à votre site, contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/).

Si la page **« 403 forbidden »** n'est pas apparue suite à une modification de votre site, consultez votre messagerie. Si vous avez reçu un e-mail de nos services indiquant une fermeture de votre hébergement pour des raisons de sécurité, passez à [l'étape 2](#etape2).

Si la page **« 403 forbidden »** est apparue sans action de votre part et que vous n'avez pas reçu de mails de nos services à ce sujet, contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/).

### Étape 2 : sécuriser vos solutions <a name="etape2"></a>

Vérifiez tout d'abord la sécurité de votre/vos poste(s) informatique(s) :

- Effectuez les mises à jour de sécurité ;
- Vérifiez également qu'un antivirus est installé, mettez-le à jour et lancez un scan complet. Si vous n'en possédez aucun, consultez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) avant toute installation ;
- Modifiez l'ensemble de vos mots de passe locaux, notamment ceux de vos adresses e-mail, en respectant ces [bonnes pratiques](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#generer-un-bon-mot-de-passe) ;
- Modifiez les mots de passe de l'ensemble de vos services OVHcloud, notamment de votre [base de données](../modifier-mot-de-passe-base-de-donnees/) et de l'accès à votre [espace de stockage FTP](../modifier-mot-de-passe-utilisateur-ftp/).

> [!warning]
>
> Avant de changer le mot de passe de la base de données de votre site depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), mettez à jour le fichier de configuration de votre site afin qu'il se connecte à la base de données avec le nouveau mot de passe.
>
> Dans le cas contraire, la modification du mot de passe de votre base de données entraînera une coupure du site ou des services qui l'utilisent.
>
> En cas de doute sur les manipulations à réaliser, contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).
>

### Étape 3 : intervenir sur votre hébergement

Notez tout d'abord la date d'envoi de l'e-mail d'OVHcloud indiquant la désactivation de votre hébergement, ainsi que le ou les dossiers qui contiennent les exemples de fichiers illégitimes.

#### Cas n°1 : votre hébergement a été désactivé il y a moins de deux semaines

Si votre hébergement a été fermé il y a moins de deux semaines et qu'il ne contient qu'un seul site, restaurez votre espace de stockage en suivant les instructions de ce [guide](../restauration-ftp-filezilla-espace-client/#restaurer-lespace-de-stockage-depuis-lespace-client).

Si votre hébergement a été fermé il y a moins de deux semaines et qu'il contient plusieurs sites, restaurez uniquement le ou les dossiers contenant les fichiers illégitimes en suivant les instructions de ce [guide](../restauration-ftp-filezilla-espace-client/#restaurer-un-fichier-depuis-un-logiciel-ou-une-interface).

> [!warning]
>
> La restauration seule de votre espace de stockage ne suffira pas à corriger de potentielles failles de sécurité préalablement présentes sur votre site.
> Pour identifier ces failles de sécurité, vous pouvez analyser les [« logs web »](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/#logs) de votre hébergement ou faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) afin de réaliser un audit de sécurité de vos solutions.
>

#### Cas n°2 : votre hébergement a été désactivé il y a plus de deux semaines

Si votre hébergement a été fermé il y a plus de deux semaines, contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) afin d'effectuer un audit de sécurité de vos solutions. 

### Étape 4 : réactiver votre hébergement web <a name="reactivate-web-hosting"></a>

> [!warning]
>
> Nous vous recommandons de réaliser un audit de sécurité **avant** la réouverture de votre hébergement. Tout envoi de code malveillant depuis votre hébergement peut engager votre responsabilité juridique.
>

#### Réactiver votre hébergement avec FileZilla

> [!primary]
>
> Si vous souhaitez installer le logiciel **FileZilla** afin de manipuler les fichiers de votre site, suivez les instructions de ce [guide](../mutualise-guide-utilisation-filezilla/).
>

Ouvrez le logiciel FileZilla puis connectez-vous à votre espace de stockage. Cliquez ensuite sur `Serveur`{.action} dans la barre de menu, puis sur `Entrer une commande FTP`{.action} (l'intitulé peut être légèrement différent suivant la version de FileZilla que vous utilisez) :

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez la commande ci-dessous puis validez-la :

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Une réponse **« 200 Permissions changed on / »** confirme que la manipulation s'est bien effectuée. Pour le vérifier, essayez à nouveau d'accéder à votre site.

#### Réactiver votre hébergement avec le FTP Explorer « net2ftp »

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la partie `Web Cloud`{.action} puis `Hébergements`{.action} et cliquez sur l'onglet `FTP-SSH`{.action} de l'hébergement concerné.

Cliquez ensuite sur le bouton `FTP Explorer`{.action} et connectez-vous à votre espace de stockage en suivant les instructions de ce [guide](../connexion-espace-stockage-ftp-hebergement-web/#1-connexion-via-le-ftp-explorer). Cliquez sur le bouton `Avancé`{.action} puis sur le bouton `Go`{.action} à côté de « Envoyer des commandes FTP arbitraires au serveur FTP ».

![net2ftp](images/net2ftp.png){.thumbnail}

Dans la partie supérieure de la page, renseignez la commande ci-dessous puis cliquez sur le bouton représentant un « V » vert.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Une réponse **« 200 Permissions changed on / »** confirme que la manipulation s'est bien effectuée. Pour le vérifier, essayez à nouveau d'accéder à votre site.

## Aller plus loin <a name="aller-plus-loin"></a>

[Conseils suite au piratage de votre site WordPress](../piratage-de-votre-site-wordpress-conseils-et-cas-dusages/)

[Activation du pare-feu applicatif](../activation-pare-feu-applicatif/)

[Changer la version de PHP de son hébergement web](../configurer-le-php-sur-son-hebergement-web-mutu-2014/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
