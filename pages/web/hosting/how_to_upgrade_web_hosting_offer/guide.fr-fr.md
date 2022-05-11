---
title: Changer son offre d'hébergement web
excerpt: Découvrez comment changer la formule d'abonnement de votre offre d'hébergement OVHcloud
slug: how_to_change_web_hosting_offer
section: Optimiser son site
order: 2
---

**Dernière mise à jour le 11/05/2022**

## Objectif

Votre [espace client OVHcloud]() vous permet d'augmenter les capacités de vos [offres d'hébergement Web](https://www.ovh.com/fr/hebergement-web/), afin d'obtenir  disposer d'un serveur plus puissant, de plus d'espace de stockage ou de bases de données, d'adresses e-mails ou de fonctionnalités supplémentaires comme les [mailing-lists](https://docs.ovh.com/fr/emails/guide-dutilisation-mailing-list/) ([Formule Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/)) ou le [serveur SQL privé](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/) ([Formule Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/)).

**Découvrez comment modifier votre offre d'hébergement OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### La facturation en cas de changement d'offre

Lorsque vous modifiez votre formule d'hébergement en cours d'abonnement, un *pro rata temporis* s'applique sur la durée restante sur votre ancienne offre.

Vous passez, par exemple, d'une offre [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) à une offre [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/), alors que l'abonnement en cours n'est pas terminé : la durée restante sera ainsi automatiquement ajoutée au pro rata à votre abonnement **Pro**. Celui-ci durera du coup un peu plus d'un an jusqu'à son prochain renouvellement.

### Modifier votre offre d'hébergement

> [!primary]
>
> La modification de votre abonnement pour une offre possédant moins de ressources n'est possible que s'il s'agit de l'offre **immédiatement inférieure**. (Vous ne pourrez pas, par exemple, passer d'une formule *Pro* à une formule *Performance 2* en une seule opération. Vous devrez passer votre hébergement sur l'offre *Performance 1* **puis** sur l'offre *Performance 2*).
>
> Les éléments suivants concernent les offres payantes. Pour faire évoluer votre [hébergement gratuit Start10M](https://docs.ovh.com/fr/hosting/activer-start10m/), suivez ces [instructions](#start10m)
>

> [!warning]
>
> **Avant** tout changement de votre abonnement pour une offre inférieure, vérifiez que l'utilisation de votre offre actuelle est compatible avec les caractéristiques de votre prochaine [formule d'hébergement](https://www.ovhcloud.com/fr/web-hosting/).
>
> Pour ce faire, suivez ces [instructions](#checks), effectuez le changement d'offre puis répétez ces opérations autant de fois que nécessaire.
>

Pour modifier votre abonnement, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dans la partie `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et sélectionnez l'hébergement concerné.

Dans la partie `Abonnement`, `Offre`, cliquez ensuite sur le bouton `...`{.action} et sur `Changer d'offre`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

Sélectionnez ensuite votre nouvel abonnement, ainsi que sa durée. Validez les contrats correspondants puis cliquez sur `Valider`[action].

### Faire évoluer votre hébergement Start 10M vers une offre supérieure <a name="start10m"</a>

Vous ne pourrez pas passer directement d'un [hébergement gratuit Start10M](https://docs.ovh.com/fr/hosting/activer-start10m/) à une offre payante. Vous devrez effectuer les opérations suivantes :

- [Récupérer les fichiers de l'espace de stockage FTP](https://docs.ovh.com/fr/hosting/exporter-son-site-web/#etape-1-recuperation-des-fichiers-de-votre-espace-de-stockage-ftp)
- [Commander une nouvelle offre d'hébergement](https://www.ovhcloud.com/fr/web-hosting/)
- [Importer votre site sur l'espace FTP](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/#etape-2-mise-en-ligne-des-fichiers-du-site-sur-lespace-de-stockage)
- [Ajouter le nom de domaine de votre site au multisite de votre nouvel hébergement](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-2-ajouter-un-domaine-ou-un-sous-domaine)

Si vous disposez d'une adresse e-mail associée à votre hébergement *Start 10M*, vous devrez également suivre les étapes suivantes :

- [Exporter vos e-mails](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/#en-pratique)
- Supprimer votre boîte e-mail actuelle via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) (Dans la partie `Emails`{.action} concernée, cliquez sur l'onglet du même nom, sur le bouton `...`{.action} à droite de l'adresse à supprimer puis sur `Supprimer le compte`{.action})
- [Créer un ticket d'assistance](https://help.ovhcloud.com/fr/faq/support/cant-reach-support-phone/) via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), afin de demander la suppression accélérée de votre boîte e-mail Start 10M (afin d'éviter toute perte de données suite à une erreur de manipulation, une adresse e-mail Start 10M est conservée 14 jours sur nos serveurs avant sa suppression définitive)
- [Recréez votre adresse e-mail](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/)
- [Importez vos messages dans la nouvelle boîte](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/#en-pratique)

### Vérifier que votre hébergement est compatible avec une offre inférieure <a name="checks"></a>

#### Nombre de sites

L'offre [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml) ne permet pas d'avoir plus d'un nom de domaine sur le [multisite](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) de votre hébergement.

Avant de passer de l'offre [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) à l'offre [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml), vérifiez donc que votre hébergement ne comporte qu'un seul site.

#### Bases de données

Avant de passer votre hébergement sur une offre inférieure, assurez-vous que la nouvelle offre comporte assez de [bases de données](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/). Vérifiez aussi qu'elles sont de taille suffisante.

Dans le cas contraire, supprimez les bases de données inutilisées et/ou réduisez la quantité de données qu'elles contiennent (Pour toute demande d'assistance sur les manipulations à effectuer, contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/)).

Suite aux suppressions de données sur vos bases, pensez à recalculer le quota utilisé depuis l'onglet `Bases de données`{.action} dans la partie `Hébergements`{.action} de votre espace client. Cliquez sur le bouton `...`{.action} à droite de la base concernée puis sur `Recalculer le quota`{.action}.

![quota](images/quota.png){.thumbnail}

#### CloudDB

Si vous utilisez le [Serveur CloudDB](https://docs.ovh.com/fr/hosting/debuter-avec-clouddb/?url=fr/hosting/guides/g2023.tout_sur_le_sql_prive#activation-de-votre-serveur-clouddb-inclus-avec-votre-offre-dhebergement-web) inclus avec votre hébergement [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) et que vous souhaitez passer votre hébergement sur une formule [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/), rendez-vous dans la partie `Hébergements`{.action} de votre espace client. Cliquez sur le bouton `...`{.action} dans la partie `Bases de données privée`{.action} puis sur `Délier`{.action}.

![clouddb](images/clouddb.png){.thumbnail}

#### Espace FTP

Avant de passer votre hébergement sur une offre inférieure, de la même manière, assurez-vous que la nouvelle formule suffisamment d'espace de stockage FTP pour que l'import des fichiers de votre hébergement actuel soit possible.

Le quota utilisée sur votre hébergement FTP est visible depuis la partie `Hébergements`{.action} de votre espace client dans la rubrique `Espace Disque` (onglet `Informations générales`).

![ftp](images/ftp.png){.thumbnail}

#### Adresses e-mails

Vérifiez également que votre nouvelle offre comporte suffisamment d'adresses e-mails disponibles. Dans le cas contraire, supprimez les adresses non nécessaires après les avoir [sauvegardées](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/) si nécessaire.

Si vous souhaitez conserver le même nombre de boîtes e-mails, avant de passer votre hébergement sur l'offre inférieure, vous pouvez également commander une nouvelle offre de messagerie **MX Plan** (Dans la partie `Emails`{.action} de votre espace client, sur l'offre concernée, cliquez sur `...`{.action} dans la rubriques `Offre`{.action} puis sur `Changer d'offre`{.action}).

![mxplan](images/mxplan.png){.thumbnail}

#### Mailing lists

La fonctionnalité [Mailing lists](https://docs.ovh.com/fr/emails/guide-dutilisation-mailing-list/) est en option sur les hébergements [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) et [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml).

Pour passer votre hébergement sur une offre [Perso], vous devrez donc dans un premier temps en supprimer les mailing lists ou commander une offre de messagerie comprenant cette fonctionnalité (**MX Plan 100** ou **MX Plan Full**) depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) (Dans la partie `Emails`{.action} de votre espace client, sur l'offre concernée, cliquez sur `...`{.action} dans la rubriques `Offre`{.action} puis sur `Changer d'offre`{.action}).

## Aller plus loin <a name="gofurther"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.