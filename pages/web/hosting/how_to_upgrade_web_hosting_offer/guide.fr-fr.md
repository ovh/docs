---
title: "Faire évoluer son offre d'hébergement web"
excerpt: "Découvrez comment modifier la formule d'abonnement de votre offre d'hébergement OVHcloud"
slug: how_to_change_web_hosting_offer
section: Optimiser son site
order: 2
---

**Dernière mise à jour le 22/06/2022**

## Objectif

Votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) vous permet d'augmenter les capacités de vos [offres d'hébergement Web](https://www.ovhcloud.com/fr/web-hosting/), afin de disposer d'un hébergement plus puissant, de plus d'espace de stockage, de bases de données, d'adresses e-mails ou de fonctionnalités supplémentaires comme les [mailing-lists](https://docs.ovh.com/fr/emails/guide-dutilisation-mailing-list/) (à partir de [l'offre Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/)) ou le [service SQL privé](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/) (compris avec les offres de la [gamme Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/)).

**Découvrez comment faire évoluer votre offre d'hébergement OVHcloud sans interruption.**

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

> [!success]
> 
> **Besoin de booster temporairement votre hébergement ?**
>
> Avec l'[OPTION BOOST](https://www.ovhcloud.com/fr/web-hosting/options/boost/), disponible sur nos offres *Performance*, vous pouvez faire évoluer temporairement les ressources de votre hébergement pour absorber une augmentation ponctuelle du trafic. Si cette augmentation se prolonge dans le temps, vous pouvez également migrer vers une solution supérieure afin de disposer de davantage de ressources de manière permanente.
>

### Important - La facturation en cas de changement d'offre

Lorsque vous modifiez votre formule en cours d'abonnement, un *report de temps* s'applique sur votre nouvelle offre. Ce report correspond à la durée restante d'abonnement sur votre offre actuelle.

**Exemple :**<br>
Vous passez d'une offre [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) à une offre [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/), alors que l'abonnement en cours n'est pas terminé.<br>
Par conséquent, la durée restante sera automatiquement **ajoutée** au pro rata temporis à votre nouvel abonnement **Pro**.<br>
Celui-ci durera de ce fait **un peu plus d'un an**, jusqu'à son prochain renouvellement.

### Modifier votre offre d'hébergement <a name="modify"></a>

> [!primary]
>
> La modification de votre abonnement pour une offre délivrant moins de ressources n'est possible que s'il s'agit de l'offre **immédiatement inférieure**. 
> Par exemple, vous ne pourrez pas passer d'une formule *Performance 2* à une formule *Pro* en une seule opération.
> Vous devrez **d'abord** faire évoluer votre hébergement depuis la formule *Performance 2* vers l'offre *Performance 1* **puis** vers l'offre *Pro*.
>

> [!warning]
>
> **Avant** tout changement de votre abonnement pour une offre inférieure, vérifiez que l'utilisation de votre offre actuelle est compatible avec les caractéristiques de votre prochaine [offre d'hébergement](https://www.ovhcloud.com/fr/web-hosting/).
>
> Pour ce faire, suivez [ces instructions](#checks), effectuez le changement d'offre puis répétez ces opérations autant de fois que nécessaire.
>

Pour modifier votre abonnement, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dans la partie `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et sélectionnez l'hébergement concerné.

Dans le cadre `Abonnement`, cliquez sur le bouton `...`{.action} à droite de `Offre` puis sur `Changer d'offre`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

Sélectionnez ensuite votre nouvel abonnement, ainsi que sa durée. Validez les contrats correspondants puis cliquez sur `Valider`{.action}.

> [!primary]
>
> **Cas particulier**
> 
> Dans le cadre d'un changement de l'offre [Start10M](https://docs.ovh.com/fr/hosting/activer-start10m/), seule [l'offre Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) vous sera proposée. Néanmoins, après un changement vers l'offre Perso, il vous sera possible de faire évoluer cette dernière vers l'ensemble de nos [offres d'hébergement Web](https://www.ovhcloud.com/fr/web-hosting/).

### Vérifier que votre hébergement est compatible avec une offre inférieure <a name="checks"></a>

#### Nombre de sites

L'offre [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml) ne permet pas d'avoir plus d'un nom de domaine sur le [multisite](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) de votre hébergement.

Avant de passer de l'offre [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) à l'offre [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml), vérifiez donc que votre hébergement ne comporte qu'un seul site.

#### Bases de données Start SQL

Avant de passer votre hébergement sur une offre inférieure, assurez-vous que la nouvelle offre comporte assez de [bases de données](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/). Vérifiez aussi qu'elles sont de tailles suffisantes.

Dans le cas contraire, supprimez les bases de données inutilisées et réduisez, si nécessaire, la quantité de données qu'elles contiennent. Cette quantité ne devra pas dépasser la taille maximale des bases de données de la nouvelle offre (pour toute demande d'assistance sur les manipulations à effectuer, contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/)).

Suite à la suppression de données sur vos bases, pensez à recalculer le quota utilisé depuis l'onglet `Bases de données`{.action} dans la partie `Hébergements`{.action} de votre espace client. Cliquez sur le bouton `...`{.action} à droite de la base concernée puis sur `Recalculer le quota`{.action}.

![quota](images/quota.png){.thumbnail}

#### CloudDB

Si vous utilisez l'offre [CloudDB](https://docs.ovh.com/fr/hosting/debuter-avec-clouddb/#activation-de-votre-serveur-clouddb-inclus-avec-votre-offre-dhebergement-web) incluse avec votre hébergement [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) et que vous souhaitez passer votre hébergement sur une offre [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/), rendez-vous dans la partie `Hébergements`{.action} de votre espace client.<br>
Cliquez sur le bouton `...`{.action} dans la partie `Bases de données privée`{.action} puis sur `Délier`{.action}.

![clouddb](images/clouddb.png){.thumbnail}

Cette action vous permettra de commander une offre CloudDB indépendante de votre abonnement *Performance*. Les données de votre serveur seront conservées.

Si vous ne souhaitez pas conserver ces données, vous pouvez aussi supprimer votre SQL privé avant de passer sur l'offre *Pro* : 

1. Sauvegardez vos données en suivant les instructions de ce [guide](https://docs.ovh.com/fr/hosting/sauvegarder-exporter-une-base-de-donnees/#en-pratique).<br>
2. Supprimez votre serveur CloudDB via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Pour cela, cliquez en haut à droite sur votre nom puis sur `Gestion des services`{.action}. Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne concernée puis sur `Supprimer mon hébergement SQL privé`{.action}.

#### Espace FTP

Avant de passer votre hébergement sur une offre inférieure, assurez-vous que la nouvelle offre propose suffisamment [d'espace de stockage FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) pour que l'import des fichiers de votre hébergement actuel soit possible.

Le quota utilisé sur votre hébergement FTP est visible dans la partie `Hébergements`{.action} de votre espace client. Cliquez sur l'onglet `Informations générales`{.action}, vous retrouverez le quota sous `Espace Disque`.

![ftp](images/ftp.png){.thumbnail}

#### Adresses e-mail

Vérifiez également que votre nouvelle offre propose un nombre suffisant d'adresses e-mail disponibles. Dans le cas contraire, supprimez les adresses superflues, après les avoir [sauvegardées](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/) si nécessaire.

Si vous souhaitez conserver le même nombre de boîtes e-mail, avant de passer votre hébergement sur une offre inférieure, vous pouvez également commander une nouvelle offre de messagerie **MX Plan**. Dans la partie `Emails`{.action} de votre espace client, cliquez sur l'offre concernée puis sur le bouton  `...`{.action} à droite de `Offre`. Cliquez enfin sur `Changer d'offre`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### Mailing lists

La fonctionnalité [Mailing lists](https://docs.ovh.com/fr/emails/guide-dutilisation-mailing-list/) est en option sur les hébergements [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) et [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml).

Pour passer votre hébergement sur une offre [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/), vous devrez donc dans un premier temps en supprimer les mailing lists ou commander une offre de messagerie comprenant cette fonctionnalité (**MX Plan 100** ou **MX Plan Full**) depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Dans la partie `Emails`{.action} de votre espace client, sélectionnez l'offre concernée puis cliquez sur `...`{.action} à droite de `Offre`{.action}. Cliquez enfin sur `Changer d'offre`{.action}.

## Aller plus loin <a name="gofurther"></a>

[Consulter les statistiques et les logs de mon site hébergé sur une offre mutualisée](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/)

[Optimisation des performances de votre site](https://docs.ovh.com/fr/hosting/optimisation-performances-site/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
