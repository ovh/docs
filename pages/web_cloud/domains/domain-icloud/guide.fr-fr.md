---
title: 'Comment utiliser un domaine OVHcloud avec iCloud Mail'
excerpt: 'Découvrez comment configurer votre nom de domaine OVHcloud avec iCloud pour créer des adresses e-mail personnalisées'
updated: 2025-08-27
---

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

## Objectif

Ce guide vous explique comment utiliser un nom de domaine enregistré chez OVHcloud avec le service iCloud Mail d’Apple. Vous pourrez ainsi créer des adresses e-mail personnalisées (`prenom@mondomaine.fr`), entièrement gérées et hébergées par Apple.

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).
- Disposer d'un accès à la gestion de la zone DNS du nom de domaine concerné depuis l'[espace client OVHcloud](/links/manager).
- Un identifiant Apple avec un abonnement **iCloud+**.

## En pratique

### Étape 1 : Activer le nom de domaine dans iCloud <a name="step1"></a>

Pour activer votre nom de domaine dans iCloud, suivez les instructions de la page « Add a domain you own to iCloud Mail on iCloud.com » de la [documentation officielle Apple](https://support.apple.com/guide/icloud/add-a-domain-you-own-mma473945269/icloud). Concentrez-vous sur la section « Step 3: Update the records with your domain registrar » (Mettre à jour les enregistrements auprès de votre registraire de domaine), pour relever les enregistrements DNS à ajouter dans votre zone DNS OVHcloud.

À l’issue de cette étape, une liste d’enregistrements DNS (MX, CNAME, TXT) à configurer dans votre zone DNS OVHcloud vous sera communiquée par Apple. Conservez-les pour l’étape suivante.

### Étape 2 :  Configurer les enregistrements DNS dans votre espace client OVHcloud

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Rendez-vous dans la partie `Web Cloud`{.action}.
3. Cliquez sur `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
4. Ajoutez ou modifiez les enregistrements ci-dessous.

Pour savoir comment ajouter, modifier ou supprimer chaque type d'enregistrement DNS (MX, CNAME, TXT, etc.), consultez notre guide [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records).

À l’aide des enregistrements DNS relevés précédemment ([Étape 1](#step1)), créez ou mettez à jour les champs correspondants dans votre zone DNS OVHcloud :

- **MX** : pour la réception des e-mails.
- **CNAME** : pour les clefs DKIM (`sig1._domainkey...`, `sig2._domainkey...`).
- **TXT** : pour le SPF (fusionnez si un enregistrement SPF existe déjà).
- **TXT DMARC** : facultatif mais recommandé ([Étape 3](#step3)).

> [!warning]
>
> Utilisez uniquement des guillemets droits `"` tels qu’ils apparaissent dans la documentation technique d’Apple (généralement en version anglaise). Les guillemets typographiques « » ou “ ” affichés dans certaines traductions ne doivent pas être utilisés dans la configuration DNS.

### Étape 3 : Ajouter un enregistrement DMARC (facultatif) <a name="step3"></a>

Pour améliorer la délivrabilité de vos e-mails et éviter que vos messages arrivent en SPAM, ajoutez un enregistrement **DMARC**.

Pour savoir comment créer un enregistrement DMARC dans votre espace client OVHcloud, consultez notre guide [Améliorer la sécurité des e-mails via un enregistrement DMARC](/pages/web_cloud/domains/dns_zone_dmarc).

### Étape 4 : Vérifier et activer le domaine dans iCloud

Une fois les enregistrements DNS (MX, CNAME, TXT, DMARC) correctement ajoutés dans votre zone DNS OVHcloud, retournez sur [iCloud.com](https://www.icloud.com).

Suivez les instructions de la page « Add a domain you own to iCloud Mail on iCloud.com » de la [documentation officielle Apple](https://support.apple.com/guide/icloud/add-a-domain-you-own-mma473945269/icloud). Concentrez-vous sur la section « Step 4: Finish setting up the domain ».

Une fois cette étape terminée, votre domaine personnalisé est pleinement activé et vous pouvez créer jusqu’à 3 adresses par personne, dans le cadre familial.

> [!warning]
>
> La validation peut échouer si vos enregistrements DNS n’ont pas encore été propagés. Cette propagation peut prendre plusieurs heures.

### Dépannages courants

#### Vérifier où est gérée la zone DNS

Si votre nom de domaine est associé à des serveurs DNS externes à OVHcloud (Wix, Squarespace, Cloudflare, etc. ), la configuration doit être effectuée dans l'interface de gestion de ces serveurs DNS, hors de l’espace client OVHcloud.

#### CNAME déjà existant

- Un enregistrement **CNAME** ne peut pas cohabiter avec un enregistrement **A, AAAA ou TXT** configuré sur le même domaine ou sous-domaine.
- Supprimez l’ancien enregistrement avant de créer le CNAME demandé par Apple.

#### SPF en doublon

- Il ne peut exister qu’**un seul enregistrement SPF** par nom de domaine. Si un enregistrement SPF OVHcloud existe déjà (ex : `v=spf1 include:mx.ovh.com ~all`), fusionnez-le avec celui fourni par Apple (ex : `v=spf1 include:mx.ovh.com include:icloud.com ~all`).

#### DKIM incomplet

- Apple vous invite à enregistrer plusieurs clefs DKIM (`sig1`, `sig2`, etc.) dans votre zone DNS. 

#### Délai de propagation

- Les modifications DNS peuvent prendre plusieurs heures (jusqu’à 24h) avant d’être reconnues par Apple.

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).