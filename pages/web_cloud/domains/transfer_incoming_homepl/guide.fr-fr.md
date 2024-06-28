---
title: "Transférer un nom de domaine de home.pl vers OVHcloud"
excerpt: "Découvrez les démarches spécifiques pour transférer un nom de domaine depuis home.pl vers OVHcloud"
updated: 2024-04-11
flag: hidden
---

## Objectif

Le transfert d'un nom de domaine home.pl nécessite de respecter une démarche spécifique.

**Découvrez comment transférer, étape par étape, un nom de domaine home.pl vers OVHcloud**

> [!warning]
>
> Le [bureau d'enregistrement](/links/web/domains-what-is-registrar) d'un nom de domaine représente l'organisation/fournisseur agréé auprès duquel le nom de domaine est enregistré/souscrit par un particulier, une association ou une organisation. C'est auprès de ce même bureau d'enregistrement que vous renouvelez la souscription de votre nom de domaine (généralement une fois par an).
>
> Si OVHcloud est déjà le bureau d'enregistrement de votre nom de domaine **avant** de démarrer la procédure qui va suivre, le transfert entrant de domaine n'est pas la procédure appropriée. La procédure de transfert entrant de domaine s’applique **uniquement** aux noms de domaine enregistrés dans un autre bureau d'enregistrement qu'OVHcloud.
>
> Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, la méthode adéquate est un **changement de contacts**. La procédure est décrite dans [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
> Si vous devez également changer le **propriétaire** du nom de domaine, vous devez le faire **avant** de changer les contacts du nom de domaine. Pour cela, suivez les instructions décrites dans notre documentation sur le [changement de propriétaire des noms de domaine](/pages/web_cloud/domains/trade_domain).
>

## Prérequis

- Le nom de domaine est enregistré auprès du bureau d'enregistrement home.pl.
- Le nom de domaine existe depuis plus de 60 jours.
- Le nom de domaine n'a pas été transféré ou n'a pas changé de propriétaire au cours des 60 derniers jours.
- L'état du nom de domaine est « OK » ou « Transférable ».
- Le nom de domaine n'a pas expiré et a une date d'expiration permettant de terminer le processus de transfert dans les temps (recommandé : plus de 60 jours).

Vous devez aussi :

- Être en mesure de déverrouiller le nom de domaine.
- Posséder le code de transfert ou être en mesure de le récupérer.
- Être habilité à demander le transfert du nom de domaine.
- Avoir prévenu le propriétaire du nom de domaine et/ou ses administrateurs de la demande de transfert.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter votre bureau d'enregistrement actuel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## En pratique

> [!primary]
>
> La zone DNS active d'un nom de domaine contient la configuration DNS appliquée à votre nom de domaine. C'est elle qui lie votre nom de domaine à vos services tels que vos adresses e-mails ou votre site web.
>
> Si, en complément de votre nom de domaine, vous disposez aussi d'une zone DNS active pour celui-ci chez votre bureau d'enregistrement actuel, vérifiez auprès de ses services que la zone DNS appliquée à votre nom de domaine ne va pas être supprimée une fois le transfert effectué.
>
> En effet, certains bureaux d'enregistrements suppriment la zone DNS présente chez eux dès que le transfert de votre nom de domaine est terminé. Si tel est le cas, recréez à l'identique votre zone DNS chez OVHcloud avant de démarrer les actions liées au transfert de votre nom de domaine.
>
> Pour cela, consultez les guides suivants :
>
> - [Créer une zone DNS chez OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Vérifiez également que votre bureau d'enregistrement actuel ne va pas fermer d'autres services comme, par exemple, les adresses e-mails associées à votre nom de domaine.
>
> Si, en plus du transfert de votre nom de domaine, vous souhaitez migrer les services qui lui sont associés (site web, e-mail, etc.), consultez d'abord notre guide « [Migrer son site web et ses services associés vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh) » avant de poursuivre.
> Ce guide explique en détails comment migrer l'ensemble de vos services sans coupures.
>
> Si vous réalisez uniquement le transfert de votre nom de domaine sans déménager vos autres services, veillez à bien récupérer les serveur DNS actifs pour votre nom de domaine auprès de votre *bureau d'enregistrements* actuel pour les renseigner directement lors de l'étape 3 du guide « [Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain) »
> Cela vous évitera d'interrompre l'association entre votre nom de domaine et vos services externes associés.
>

### Déverrouiller le nom de domaine et récupérer le code de transfert

Pour déverrouiller le nom de domaine et récupérer le code de transfert, suivez les étapes décrites dans la [documentation dédiée de home.pl](https://pomoc.home.pl/baza-wiedzy/request-for-authinfo-code-form){.external}.

### Initier le transfert de domaine chez OVHcloud

Une fois le code d'autorisation obtenu, vous pouvez procéder au transfert de votre nom de domaine en suivant les étapes de notre guide « [Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain) ».

## Aller plus loin <a name="go-further"></a>

[Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migrer son site Web et ses e-mails vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).