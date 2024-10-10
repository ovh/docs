---
title: "Hébergement web - Comment faire évoluer son offre"
excerpt: "Découvrez comment modifier la formule d'abonnement de votre offre d'hébergement web OVHcloud"
updated: 2024-10-03
---

## Objectif

Votre [espace client OVHcloud](/links/manager) permet d'augmenter les capacités de vos [offres d'hébergement Web](/links/web/hosting). Vous pouvez ainsi disposer :

- d'un hébergement plus puissant ;
- de plus d'espace de stockage FTP ;
- de bases de données supplémentaires ; 
- d'adresses e-mails additionnelles ;
- de fonctionnalités supplémentaires comme les [mailing-lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) (à partir de [l'offre Pro](/links/web/hosting-professional-offer)) ou le [service Web Cloud Databases](/links/web/databases){.external} (compris dans [les offres Performance](/links/web/hosting-performance-offer)).

**Découvrez comment faire évoluer votre offre d'hébergement OVHcloud, sans interruption de service.**

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting)
- Être connecté à votre [espace client OVHcloud](/links/manager)
- Être, a minima, contact « [Administrateur](/pages/account_and_service_management/account_information/managing_contacts) » des services pour lesquels vous souhaitez modifier l'abonnement.

## En pratique

> [!warning]
>
> **Avant** tout changement sur votre abonnement actuel, vérifiez si vous êtes concerné par l'une de ces questions :
>
> - [Comment faire évoluer mon hébergement gratuit 100M vers une offre d'hébergement web ?](#100m)
> - [Comment bénéficier d'un gain de performance temporaire sur mon offre d'hébergement performance ?](#boost)
> - [Vais-je perdre le temps restant sur mon offre d'hébergement actuelle lors de mon changement d'offre ?](#billing)
> - [Est-il possible de changer mon offre actuelle vers une offre inférieure ?](#checks)
>

### Modifier votre offre d'hébergement web <a name="modify"></a>

Pour modifier votre abonnement, rendez-vous dans votre [espace client OVHcloud](/links/manager) dans la partie `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et sélectionnez l'hébergement concerné.

Dans le cadre `Abonnement`, cliquez sur le bouton `...`{.action} à droite de `Offre` puis sur `Changer d'offre`{.action}.

![change_plan](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/pro-change-plan.png){.thumbnail}

Sélectionnez ensuite votre nouvel abonnement, ainsi que sa durée. Validez les contrats correspondants puis cliquez sur `Envoyer`{.action}.

### Vérifier que votre hébergement web est compatible avec une offre de la gamme inférieure <a name="checks"></a>

> [!warning]
>
> La modification de votre abonnement pour une offre de la gamme inférieure est possible uniquement que s'il s'agit de l'offre **immédiatement inférieure**.
> Par exemple, vous ne pourrez pas passer d'une formule *Performance 2* à une formule *Pro* en une seule opération.
> Vous devrez **d'abord** faire évoluer votre hébergement web depuis la formule *Performance 2* vers l'offre *Performance 1* **puis** vers l'offre *Pro*.

**Avant de réaliser votre changement vers une gamme inférieure**, vérifiez les 6 points suivants:

#### 1 - Bases de données Start SQL

Assurez-vous que la nouvelle offre comporte assez de [bases de données](/links/web/hosting-options-startsql). Vérifiez aussi que leurs tailles sont suffisantes.

Dans le cas contraire, supprimez les bases de données inutilisées et réduisez, si nécessaire, la quantité de données qu'elles contiennent. Cette quantité ne devra pas dépasser la taille maximale des bases de données de la nouvelle offre. Pour toute demande d'assistance sur les manipulations à effectuer, contactez les [partenaires OVHcloud](/links/partner).

Suite à la suppression de données sur vos bases, recalculez le quota utilisé. Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergement web`{.action} puis sélectionnez l'hébergement web concerné. Sur la page qui s'affiche, rendez-vous sur l'onglet `Bases de données`{.action} puis cliquez sur le bouton `...`{.action} à droite de la base de données concernée puis sur `Recalculer le quota`{.action}.

![quota](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/recalculate-quota.png){.thumbnail}

> [!primary]
>
> Recalculer le quota de votre base de données peut nécessiter jusqu'à **15 minutes**. N'hésitez pas à recharger la page depuis votre navigateur Internet si le quota recalculé ne s'affiche pas spontanément.
>

#### 2 - Web Cloud Databases

Si vous utilisez l'offre [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) incluse avec votre hébergement web [Performance](/links/web/hosting-performance-offer) et que vous souhaitez passer votre hébergement web sur une offre [Pro](/links/web/hosting-professional-offer), vous devrez d'abord dissocier l'offre Web Cloud Databases de votre hébergement web.<br>
Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergement web`{.action} puis sélectionnez l'hébergement web concerné. Sur la page qui s'affiche, restez sur l'onglet `Informations générales`{.action}. Dans la colonne centrale `Configuration`, cliquez sur le bouton `...`{.action} situé à droite de la mention `Web Cloud Databases`{.action} puis sur `Délier`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/wcdb-detach.png){.thumbnail}

Cette action vous permettra de commander une offre Web Cloud Databases indépendante de votre abonnement *Performance*. Les données de votre serveur seront conservées.

Si vous ne souhaitez pas conserver ces données, vous pouvez aussi supprimer votre offre Web Cloud Databases avant de passer sur l'offre *Pro* : 

1. Sauvegardez vos données en suivant les instructions de ce [guide](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).<br>
2. Supprimez votre serveur Web Cloud Databases via votre [espace client OVHcloud](/links/manager). Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager), cliquez en haut à droite sur votre nom puis sur l'icône `Produits et services`{.action}. Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne de l'offre Web Cloud Databases/SQL Privé concernée puis sur `Supprimer mon hébergement SQL privé`{.action}.

#### 3 - Espace de stockage FTP

Assurez-vous que la nouvelle offre propose suffisamment [d'espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_connection) pour que l'import des fichiers de votre hébergement actuel soit possible.

Pour vérifier le quota d'espace de stockage FTP utilisé sur votre hébergement web, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement web concerné. Sur la page `Informations générales`{.action} qui s'affiche, retrouvez le quota sous la mention `Espace Disque`.

![ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}

#### 4 - Adresses e-mail

Vérifiez que votre nouvelle offre propose un nombre suffisant d'adresses e-mail disponibles. Dans le cas contraire, supprimez les adresses e-mail inutilisées après avoir [sauvegardé](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) leur contenu si nécessaire.

Si vous souhaitez conserver le même nombre de boîtes e-mail et **avant de passer votre hébergement web sur une offre inférieure**, il est également possible de commander une nouvelle offre de messagerie **MX Plan**. Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `E-mails`{.action} puis sélectionnez l'offre e-mail concernée. Sur la page qui s'affiche, dans l'encadré `Abonnement`{.action} et à droite de la mention `Offre`{.action}, cliquez sur le bouton  `...`{.action} puis sur `Changer d'offre`{.action}.

![mxplan](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/change-solution.png){.thumbnail}

>[!primary]
>
> Si le bouton `...`{.action} est indisponible sur votre offre e-mail, vous pouvez délier l'offre e-mail de votre hébergement web. Pour cela, restez connecté à votre [espace client OVHcloud](/links/manager) dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement web concerné. Sur la page `Informations générales`{.action} qui s'affiche et dans l'encadré `Configuration`{.action}, cliquez sur le bouton `...`{.action} à droite de la mention `Adresses e-mails`{.action} puis sur `Délier mon option e-mail`{.action}.
>

#### 5 - Mailing lists

La fonctionnalité [Mailing lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) est en option sur les hébergements [Perso](/links/web/hosting-personal-offer).

Pour passer votre hébergement web sur une offre [Perso](/links/web/hosting-personal-offer), vous devrez dans un premier temps supprimer les mailing lists ou commander une offre de messagerie comprenant cette fonctionnalité (**MX Plan 100** ou **MX Plan Full**) depuis votre [espace client OVHcloud](/links/manager).

Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `E-mails`{.action} puis sélectionnez l'offre e-mail concernée. Sur la page qui s'affiche, dans l'encadré `Abonnement`{.action} et à droite de la mention `Offre`{.action}, cliquez sur le bouton  `...`{.action} puis sur `Changer d'offre`{.action}.

>[!primary]
>
> Si le bouton `...`{.action} est indisponible sur votre offre e-mail, vous pouvez délier l'offre e-mail de votre hébergement web. Pour cela, restez connecté à votre [espace client OVHcloud](/links/manager) dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement web concerné. Sur la page `Informations générales`{.action} qui s'affiche et dans l'encadré `Configuration`{.action}, cliquez sur le bouton `...`{.action} à droite de la mention `Adresses e-mails`{.action} puis sur `Délier mon option e-mail`{.action}.
>

#### 6 - Utilisateurs FTP

Assurez-vous que la nouvelle offre propose suffisamment d'utilisateurs FTP.

Le nombre d'utilisateurs FTP est visible dans votre espace client OVHcloud. Une fois connecté, rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement web concerné. Sur la page qui s'affiche, cliquez sur l'onglet `FTP-SSH`{.action}.

Dans la partie inférieure de la page qui apparaît, un tableau liste tous les utilisateurs FTP créés pour votre hébergement web.

Pour supprimer des utilisateurs FTP, cliquez sur le bouton `...`{.action} à droite de l'utilisateur FTP que vous souhaitez supprimer puis sur `Supprimer`{.action}.

![user FTP deletion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-ftp-user-2.png){.thumbnail} 

#### Finalisation

Une fois ces 6 points vérifiés, vous pouvez réaliser votre [changement d'offre](#modify).

### Cas particuliers

#### Vous possédez une offre d'hébergement gratuit 100M <a name="100m"></a>

Dans le cadre d'un changement depuis une offre d'[hébergement gratuit 100M](/pages/web_cloud/web_hosting/activate_start10m), seule [l'offre Perso](/links/web/hosting-personal-offer) vous sera proposée. Néanmoins, après un changement vers l'offre Perso, vous pourrez faire évoluer cette dernière vers l'ensemble de nos [offres d'hébergement Web](/links/web/hosting).

Suivez [ces instructions](#modify) pour réaliser votre changement d'offre.

#### Booster temporairement votre hébergement Performance <a name="boost"></a>

Avec l'[option Boost](/links/web/hosting-options-boost), disponible sur nos offres *Performance*, vous pouvez augmenter temporairement les ressources CPU et RAM de votre hébergement web pour absorber une augmentation ponctuelle du trafic. Si cette augmentation se prolonge dans le temps, vous pouvez également [basculer vers l'offre Performance de niveau supérieur](#modify) afin de disposer de ces ressources de manière permanente.

> [!warning]
>
> Lorsque vous décidez d'activer l'option Boost, celle-ci reste active et facturée **tant que vous ne l'avez pas désactivée**.

Si l'option **Boost** convient à votre besoin, vous trouverez ci-dessous les instructions pour **activer** ou **désactiver** cette option sur votre hébergement.

> [!tabs]
> **Activer l'option Boost**
>>
>> Pour activer l'option Boost, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement web concerné. Dans l'encadré `Informations générales` de la page qui s'affiche, cliquez sur le bouton `...`{.action} à droite de `Boost` puis sur `Booster mon offre`{.action}.<br><br>
>> ![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/boost-my-hosting-plan.png){.thumbnail}<br>
>>
> **Désactiver l'option Boost**
>>
>> Pour désactiver l'option Boost, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement web concerné. Sur la page qui s'affiche, rendez-vous dans l'onglet `Plus` puis cliquez sur `Booster mon offre`{.action}.<br>
>> Le tableau d'utilisation de l'option Boost s'affiche, cliquez sur `Désactiver l'offre boost`{.action}.<br><br>
>> ![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/boost-my-hosting-plan/deactivate-the-boost-plan.png){.thumbnail}<br>

#### La facturation en cas de changement d'offre <a name="billing"></a>

**Cas 1** : Lorsque vous modifiez votre offre initiale vers une offre supérieure, un calcul au *prorata temporis* est appliqué jusqu'à la prochaine date de renouvellement de cet abonnement initial.
Ce calcul correspond à la différence de tarif entre votre offre initiale et votre nouvelle offre.

> **Exemple :**<br>
>
> Vous avez souscrit à un abonnement [Perso](/links/web/hosting-personal-offer) au 1er janvier 2024.
>
> Le 31 octobre 2024, vous passez de cette offre **Perso** à un abonnement sur l'offre [Pro](/links/web/hosting-professional-offer).<br>
>
> Par conséquent, le montant correspondant à la durée restante sur l'abonnement **Perso** (2 mois, du 1er novembre 2024 au 1er janvier 2025) est automatiquement soustrait du coût du nouvel abonnement **Pro**, jusqu'au 1er janvier 2025. Vous ne paierez que la différence.
> À partir du 1er janvier 2025, l'abonnement **Pro** vous est ensuite facturé à son tarif en vigueur.

Suivez [ces instructions](#modify) pour réaliser votre changement d'offre.

**Cas 2** : Lorsque vous modifiez votre offre initiale vers une offre inférieure, le temps d'abonnement restant pour l'offre initiale est définitivement perdu. Aucun remboursement de ce temps restant ne sera effectué, même s'il vous restait plusieurs mois d'abonnement. Vous devrez donc directement payer l'intégralité de l'abonnement de l'offre inférieure.

> **Exemple :**<br>
>
> Vous avez souscrit à un abonnement [Pro](/links/web/hosting-professional-offer) au 1er janvier 2024.
>
> Le 31 octobre 2024, vous passez de cette offre **Pro** à un abonnement sur l'offre [Perso](/links/web/hosting-personal-offer).<br>
>
> Par conséquent, le montant correspondant à la durée restante sur l'abonnement **Pro** (2 mois, du 1er novembre 2024 au 1er janvier 2025) est perdu.
> À partir du 1er novembre 2024, l'abonnement **Perso** vous est directement facturé à son tarif en vigueur (même si vous aviez payé les 2 mois restants de l'offre **Pro**).

Suivez [ces instructions](#modify) pour réaliser votre changement d'offre.

## Aller plus loin <a name="go-further"></a>

[Consulter les statistiques et les logs d'un site hébergé sur une offre mutualisée](/pages/web_cloud/web_hosting/logs_and_statistics)

[Optimisation des performances de votre site](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).