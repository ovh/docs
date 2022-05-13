---
title: "Faire évoluer son offre d'hébergement web"
excerpt: "Découvrez comment modifier la formule d'abonnement de votre offre d'hébergement OVHcloud"
slug: how_to_change_web_hosting_offer
section: Optimiser son site
order: 2
---

**Dernière mise à jour le 11/05/2022**

## Objectif

Votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) vous permet d'augmenter les capacités de vos [offres d'hébergement Web](https://www.ovh.com/fr/hebergement-web/), afin de disposer d'un serveur plus puissant, de plus d'espace de stockage, de bases de données, d'adresses e-mails ou de fonctionnalités supplémentaires comme les [mailing-lists](https://docs.ovh.com/fr/emails/guide-dutilisation-mailing-list/) (à partir de l'[offre Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/)) ou le [serveur SQL privé](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/) (compris avec les offres de la [gamme Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/)).

**Découvrez comment faire évoluer votre offre d'hébergement OVHcloud.**

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Important - La facturation en cas de changement d'offre

Lorsque vous modifiez votre formule d'hébergement en cours d'abonnement, un *pro rata temporis* s'applique sur la durée restante sur votre ancienne offre.

**Exemple :**
Vous passez d'une offre [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) à une offre [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/), alors que l'abonnement en cours n'est pas terminé.<br>
Par conséquent, la durée restante sera automatiquement ajoutée au pro rata temporis à votre nouvel abonnement **Pro**.<br>
Celui-ci durera du coup un peu plus d'un an, jusqu'à son prochain renouvellement.

### Modifier votre offre d'hébergement <a name="modify"></a>

> [!primary]
>
> La modification de votre abonnement pour une offre délivrant moins de ressources n'est possible que s'il s'agit de l'offre **immédiatement inférieure**. 
> Par exemple, vous ne pourrez pas passer d'une formule *Performance 2* à une formule *Pro* en une seule opération.
> Vous devrez **d'abord** faire évoluer votre hébergement depuis la formule *Performance 2* vers l'offre *Performance 1* **puis** sur l'offre *Pro*.
>
> Les éléments suivants concernent les offres payantes. Pour faire évoluer votre [hébergement gratuit Start10M](https://docs.ovh.com/fr/hosting/activer-start10m/), suivez ces [instructions](#start10m)
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

### Faire évoluer votre hébergement Start 10M vers une offre supérieure <a name="start10m"></a>

> [!primary]
>
> La procédure suivante ne s'applique *que si vous avez activé l'offre de messagerie associée au Start 10M*.
>
> Dans le cas contraire, suivez les instructions du [paragraphe précédent](#modify).
>

Vous ne pourrez pas passer **directement** d'un [hébergement gratuit Start10M](https://docs.ovh.com/fr/hosting/activer-start10m/) à une offre payante. Vous devrez effectuer les opérations suivantes :

1. [Récupérer les fichiers de l'espace de stockage FTP](https://docs.ovh.com/fr/hosting/exporter-son-site-web/#etape-1-recuperation-des-fichiers-de-votre-espace-de-stockage-ftp).
2. [Commander une nouvelle offre d'hébergement](https://www.ovhcloud.com/fr/web-hosting/).
3. [Importer votre site sur l'espace FTP](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/#etape-2-mise-en-ligne-des-fichiers-du-site-sur-lespace-de-stockage).
4. [Ajouter le nom de domaine de votre site au multisite de votre nouvel hébergement](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-2-ajouter-un-domaine-ou-un-sous-domaine).

Si vous disposez d'une adresse e-mail associée à votre hébergement *Start 10M*, vous devrez également suivre les étapes suivantes :

1. [Exporter vos e-mails](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/#en-pratique).
2. Supprimer votre boîte e-mail actuelle via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Dans la partie `Emails`{.action} concernée, cliquez sur l'onglet du même nom puis sur le bouton `...`{.action} à droite de l'adresse à supprimer et enfin sur `Supprimer le compte`{.action}.
3. [Créer un ticket d'assistance](https://help.ovhcloud.com/fr/faq/support/cant-reach-support-phone/) via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) afin de demander la suppression accélérée de votre boîte e-mail Start 10M. Cela permettra d'éviter toute perte de données suite à une erreur de manipulation. Une adresse e-mail Start 10M est conservée 14 jours sur nos serveurs avant sa suppression définitive.
4. [Recréer votre adresse e-mail](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/)
5. [Importer vos messages dans la nouvelle boîte](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/#en-pratique)

### Vérifier que votre hébergement est compatible avec une offre inférieure <a name="checks"></a>

#### Nombre de sites

L'offre [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml) ne permet pas d'avoir plus d'un nom de domaine sur le [multisite](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) de votre hébergement.

Avant de passer de l'offre [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) à l'offre [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml), vérifiez donc que votre hébergement ne comporte qu'un seul site.

#### Bases de données

Avant de passer votre hébergement sur une offre inférieure, assurez-vous que la nouvelle offre comporte assez de [bases de données](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/). Vérifiez aussi qu'elles sont de tailles suffisantes.

Dans le cas contraire, supprimez les bases de données inutilisées et réduisez, si nécessaire, la quantité de données qu'elles contiennent. Celle-ci ne devra pas dépasser la taille maximale des bases de données de la nouvelle offre (pour toute demande d'assistance sur les manipulations à effectuer, contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/)).

Suite à la suppression de données sur vos bases, pensez à recalculer le quota utilisé depuis l'onglet `Bases de données`{.action} dans la partie `Hébergements`{.action} de votre espace client. Cliquez sur le bouton `...`{.action} à droite de la base concernée puis sur `Recalculer le quota`{.action}.

![quota](images/quota.png){.thumbnail}

#### CloudDB

Si vous utilisez le [Serveur CloudDB](https://docs.ovh.com/fr/hosting/debuter-avec-clouddb/?url=fr/hosting/guides/g2023.tout_sur_le_sql_prive#activation-de-votre-serveur-clouddb-inclus-avec-votre-offre-dhebergement-web) inclus avec votre hébergement [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) et que vous souhaitez passer votre hébergement sur une offre [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/), rendez-vous dans la partie `Hébergements`{.action} de votre espace client.<br>
Cliquez sur le bouton `...`{.action} dans la partie `Bases de données privée`{.action} puis sur `Délier`{.action}.

![clouddb](images/clouddb.png){.thumbnail}

Cette action vous permettra de commander un serveur CloudDB indépendant de votre offre *Performance*. Les données de votre serveur seront conservées.

Si vous ne souhaitez pas conserver votre serveur CloudDB, vous pourrez également le supprimer avant de passer sur l'offre *Pro* : 

- Sauvegarder vos données en suivant les instructions de ce [guide](https://docs.ovh.com/fr/hosting/sauvegarder-exporter-une-base-de-donnees/#en-pratique);
- Supprimer votre serveur CloudDB via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) : cliquez en haut à droite sur votre nom puis sur `Gestion des services`{.action}, sur le bouton `...`{.action} à droite de la ligne concernée puis sur `Supprimer mon hébergement SQL privé`{.action}.

#### Espace FTP

Avant de passer votre hébergement sur une offre inférieure, assurez-vous que la nouvelle offre propose suffisamment [d'espace de stockage FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) pour que l'import des fichiers de votre hébergement actuel soit possible.

Le quota utilisé sur votre hébergement FTP est visible dans la partie `Hébergements`{.action} de votre espace client. Cliquez sur l'onglet `Informations générales`{.action}, vous retrouverez le quota sous `Espace Disque`.

![ftp](images/ftp.png){.thumbnail}

#### Adresses e-mail

Vérifiez également que votre nouvelle offre propose un nombre suffisant d'adresses e-mail disponibles. Dans le cas contraire, supprimez les adresses non-nécessaires, après les avoir [sauvegardées](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/) si nécessaire.

Si vous souhaitez conserver le même nombre de boîtes e-mail, avant de passer votre hébergement sur une offre inférieure, vous pouvez également commander une nouvelle offre de messagerie **MX Plan**. Dans la partie `Emails`{.action} de votre espace client, cliquez sur l'offre concernée puis sur le bouton  `...`{.action} à droite de `Offre`. Cliquez enfin sur `Changer d'offre`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### Mailing lists

La fonctionnalité [Mailing lists](https://docs.ovh.com/fr/emails/guide-dutilisation-mailing-list/) est en option sur les hébergements [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) et [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml).

Pour passer votre hébergement sur une offre [Perso], vous devrez donc dans un premier temps en supprimer les mailing lists ou commander une offre de messagerie comprenant cette fonctionnalité (**MX Plan 100** ou **MX Plan Full**) depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br>
Dans la partie `Emails`{.action} de votre espace client, sélectionnez l'offre concernée puis cliquez sur `...`{.action} à droite de `Offre`{.action}. Cliquez enfin sur `Changer d'offre`{.action}).

## Aller plus loin <a name="gofurther"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
