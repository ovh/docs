---
title: "Résoudre l'erreur « Site non installé »"
excerpt: "Découvrez comment identifier et résoudre la page d'erreur « Site non installé »"
updated: 2025-08-25
---

> [!success]
> Participez à notre enquête et aidez-nous à améliorer ce guide !<br>
> N'hésitez pas à partager votre avis et vos idées avec nous.<br>
> [Accédez à l'enquête.](https://s.elq.fr/ovhext/jpwm0GK)

## Objectif

Il est possible de voir apparaître sur votre navigateur Internet la page d'erreur « **Site non installé** », notamment lors de la première installation de votre site web.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Découvrez comment identifier et résoudre la page d'erreur « Site non installé »**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Retrouvez plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.

## Prérequis

- Disposer d'une [offre d'hébergement mutualisé](/links/web/hosting) OVHcloud.
- Disposer également de la gestion de la [Zone DNS](/pages/web_cloud/domains/dns_zone_edit) à laquelle est rattachée votre nom de domaine.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

La page « **Site non installé** » s’affiche pour deux raisons :

- 1: [Votre nom de domaine ou votre sous-domaine n’est pas déclaré correctement sur votre hébergement web](#check-multisites).
- 2: [Votre nom de domaine ne pointe pas vers l'adresse IP de votre offre d'hébergement web](#check-dns-domain).

Les 2 parties suivantes vous permettront de corriger l’erreur `Site non installé` dans ces deux cas.

### 1 - Vérifier la déclaration de votre nom de domaine ou de votre sous-domaine sur votre hébergement web <a name="check-multisites"></a>

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Multisite`{.action}. 
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Étape 4**
>>
>> Sur la nouvelle page qui s'affiche, un tableau apparaît.
>>
>> ![Multisite interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}
>>
>> |Scénarios|Actions à entreprendre|
>> |---|---|
>> |Le nom de domaine ou le sous-domaine lié à votre site web **apparaît** dans le tableau « multisite ».|Si vous venez d’ajouter votre nom de domaine ou votre sous-domaine dans la partie `Multisite`{.action} de votre hébergement web, patientez environ **vingt minutes** puis rafraîchissez le cache de votre navigateur Internet. Si le message « Site non installé » apparaît toujours, passez à la [partie 2](#check-dns-domain).|
>> |Le nom de domaine ou le sous-domaine lié à votre site web **n'apparaît pas** dans le tableau « multisite ».|Ajoutez votre nom de domaine ou votre sous-domaine dans la partie `Multisite`{.action} en suivant la rubrique dédiée du guide « [Partager son hébergement entre plusieurs sites - ajouter un domaine ou un sous-domaine](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».|
>> |Le nom de domaine ou le sous-domaine **a été supprimé** du tableau « multisite » sans action de votre part.|Votre domaine ou sa zone DNS sont peut-être gérés depuis un autre compte. Ajoutez votre nom de domaine ou votre sous-domaine dans la partie `Multisite`{.action} en suivant la rubrique dédiée du guide « [Partager son hébergement entre plusieurs sites - ajouter un nom de domaine externe](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».|

### 2 - Vérifier le pointage IP dans la zone DNS active de votre nom de domaine <a name="check-dns-domain"></a>

Cette étape consiste à vérifier que votre nom de domaine ou sous-domaine pointe bien vers l'adresse IP de votre hébergement web, depuis sa zone DNS active.

> [!primary]
>
> Pour en savoir plus sur la notion de DNS, consultez les pages suivantes :
> 
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit);
> - [Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create);
> - [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit).

#### 2\.1 Identifier l’adresse IP de votre hébergement web OVHcloud

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le cadre **Informations générales**, vous trouverez la mention **IPv4**.
>>
>> ![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copiez l'adresse IPv4, puis poursuivez la lecture du guide.

Vous pouvez également retrouver l'adresse IP associée à votre hébergement web dans notre guide « [Liste des adresses IP associées aux hébergements web OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».

#### 2\.2 Vérifier l'adresse IP notée dans la zone DNS active de votre nom de domaine

Vous devez maintenant vérifier que l'adresse IP de votre hébergement web apparaît dans la zone DNS active de votre nom de domaine.

> [!primary]
>
> Avant de poursuivre, dès lors où une modification survient dans la **zone DNS** active d'un nom de domaine, un délai de propagation de **4 à 24 heures** peut être nécessaire pour mettre les informations à jour sur le réseau DNS.
>
> Si vous modifiez directement les **serveurs DNS** associés à votre nom de domaine, ce délai peut aller jusqu'à **48 heures** maximum.

Pour cela, cliquez sur les onglets ci-dessous afin d'afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Si votre nom de domaine n'apparaît pas dans la liste qui s'affiche, cela signifie que sa zone DNS n'est pas gérée depuis votre espace client OVHcloud.<br>
>> > Déterminez son « bureau d'enregistrement » ainsi que les serveurs DNS auxquels il est associé via notre outil [WHOIS](/links/web/domains-whois).<br>
>> > Retrouvez et modifiez la zone DNS concernée en conséquence en suivant la rubrique dédiée du guide « [Partager son hébergement entre plusieurs sites - ajouter un nom de domaine externe](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».
>>
> **Étape 3**
>>
>> Le tableau qui apparaît affiche pour chaque ligne un enregistrement DNS lié à votre nom de domaine chez OVHcloud. Vous avez la possibilité de filtrer le contenu du tableau par type d'enregistrement ou par nom de domaine.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Si l'onglet `Zone DNS`{.action} de votre nom de domaine s'affiche de la façon suivante :<br><br> ![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}<br>
>> >
>> > Cela signifie que votre nom de domaine n'est pas géré depuis votre espace client OVHcloud.<br> Déterminez son « bureau d'enregistrement » ainsi que les serveurs DNS auxquels il est associé via notre outil [WHOIS](/links/web/domains-whois).<br> Retrouvez et modifiez la zone DNS concernée en conséquence en suivant la rubrique dédiée du guide « [Partager son hébergement entre plusieurs sites - ajouter un nom de domaine externe](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».
>>
>> Passez à l'étape 4 pour visualiser les différents scénarios possibles et les actions à entreprendre.
>>
> **Étape 4**
>>
>> |Scénarios possibles|Action à entreprendre|
>> |---|---|
>> |Dans la zone DNS active, votre nom de domaine ou sous-domaine pointe vers l'adresse IP de votre hébergement web avec un enregistrement de type A (pour une adresse IPv4) ou AAAA (pour une adresse IPv6).<br><br>![zoneDNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Ceci indique que la configuration de votre nom de domaine est correcte.<br>Patientez le temps de la propagation DNS si la modification est récente.<br><br>Redémarrez vos appareils (PC, smartphone, box, etc.) et videz le cache de votre navigateur Internet. En effet, il est possible que l’ancienne configuration de votre nom de domaine soit encore conservée en cache, ce qui peut retarder l’affichage de votre mise à jour.|
>> |La zone DNS active ne comporte pas d'enregistrements de type A ou AAAA reliant votre nom de domaine ou sous-domaine à l'adresse IP de votre hébergement web.|Ajoutez le nouvel enregistrement DNS de type A ou AAAA ou corrigez l'enregistrement existant en suivant [ce guide](/pages/web_cloud/domains/dns_zone_edit).|
>> |L'enregistrement DNS de type A ou AAAA existant dans la zone DNS pour votre nom de domaine ou sous-domaine pointe vers une autre adresse IP que celle de votre hébergement web.|Ajoutez le nouvel enregistrement DNS de type A ou AAAA ou corrigez l'enregistrement existant en suivant [ce guide](/pages/web_cloud/domains/dns_zone_edit).|
>> |Cet avertissement s'affiche dans l'onglet `Zone DNS`{.action} :<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Modifiez les serveurs DNS de votre nom de domaine en conséquence en suivant notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit). »|

## Aller plus loin <a name="go-further"></a>

[Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).