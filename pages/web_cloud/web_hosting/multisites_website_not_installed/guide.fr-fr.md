---
title: "Résoudre l'erreur « Site non installé »"
excerpt: "Découvrez comment identifier et résoudre la page d'erreur « Site non installé »"
updated: 2023-11-14
---

## Objectif

Il est possible de voir apparaître sur votre navigateur Internet la page d'erreur **Site non installé**, notamment lors de la première installation de votre site web.

![website not installed](images/site-not-installed2021.png){.thumbnail}

**Découvrez comment identifier et résoudre la page d'erreur « Site non installé »**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.

## Prérequis

- Disposer d'une [offre d'hébergement mutualisé](https://www.ovhcloud.com/fr/web-hosting/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Disposer également de la gestion de la [Zone DNS](/pages/web_cloud/domains/dns_zone_edit) à laquelle est rattachée votre nom de domaine.

## En pratique

La page **Site non installé** s’affiche dans deux situations :

- 1: [Votre nom de domaine ou votre sous-domaine n’est pas déclaré correctement sur votre hébergement web](#check-multisites).

- 2: [Votre nom de domaine ne pointe pas vers l'adresse IP de votre offre d'hébergement web.](#check-dns-domain)

Les étapes suivantes vous permettront de corriger l’erreur `Site non installé` dans ces deux cas.

### Étape 1 - Vérifier la déclaration de votre nom de domaine ou de votre sous-domaine sur votre hébergement web <a name="check-multisites"></a>

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la partie `Web Cloud`{.action} situé en haut de la page, puis cliquez sur l'onglet `Hébergements`{.action} dans la colonne de gauche.

Sélectionnez l'hébergement web concerné dans la liste, puis cliquez sur l’onglet `Multisite`{.action}.

|Scénario|Action à entreprendre|
|---|---|
|Le nom de domaine ou le sous-domaine lié à votre site web apparaît dans le tableau « multisite ».|Si vous venez d’ajouter le nom de domaine/sous-domaine dans la partie `Multisite`{.action} de votre hébergement web, patientez une **vingtaine de minutes** puis rafraîchissez le cache de votre navigateur internet. Si le message « Site non installé » apparaît toujours, passez à [l'étape 2](#check-dns-domain).|
|Le nom de domaine ou le sous-domaine lié à votre site web n'apparaît pas dans le tableau « multisite ».|Ajoutez votre nom de domaine/sous-domaine dans la partie `Multisite`{.action} en suivant la rubrique dédiée du guide « [Partager son hébergement entre plusieurs sites - ajouter un domaine ou un sous-domaine](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».|
|Le nom de domaine ou le sous-domaine a été supprimé du tableau « multisite » sans action de votre part.|Votre domaine ou sa zone DNS sont peut-être gérés depuis un autre compte. Ajoutez votre nom de domaine/sous-domaine dans la partie `Multisite`{.action} en suivant la rubrique dédiée du guide « [Partager son hébergement entre plusieurs sites - ajouter un nom de domaine externe](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».|

### Étape 2 - Vérifier le pointage IP dans la zone DNS active de votre nom de domaine <a name="check-dns-domain"></a>

> [!primary]
>
> Cette étape consiste à vérifier que, dans la zone DNS active de votre nom de domaine ou votre sous-domaine, celui-ci pointe bien vers l'adresse IP de l’hébergement où se trouve votre site web.
>
> Pour en savoir plus sur la notion de DNS, consultez les guides suivants : 
> 
> -[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit);
> -[Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create);
> -[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_general_information).
>

#### 2\.1 Identifier l’adresse IP de votre hébergement web OVHcloud

Pour retrouver l'adresse IP, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), puis rendez-vous dans la partie `Web Cloud`{.action} situé en haut de la page. Cliquez sur l'onglet `Hébergements`{.action} dans la colonne de gauche, puis sélectionnez l'hébergement web concerné dans la liste.

Vous y retrouverez l'adresse `IPv4` dans l'encadré `Informations générales`{.action}.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

Vous pouvez également retrouver l'adresse IP associée à votre hébergement web dans notre guide « [Liste des adresses IP associées aux hébergements web OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».

#### 2\.2 Vérifier l'adresse IP notée dans la zone DNS active de votre nom de domaine

Vous devez maintenant vérifier que l'adresse IP de votre hébergement apparaît dans la zone DNS active de votre domaine.

Pour cela, rendez vous dans la partie `Domaines`{.action}, sélectionnez votre domaine puis allez dans l'onglet `Zone DNS`{.action}.

|Scénarios possibles|Action à entreprendre|
|---|---|
|Dans la zone DNS, votre domaine est relié à l'adresse IP de votre hébergement par une entrée de type A (pour IPv4) ou AAAA (pour IPv6).<br><br>![zoneDNS_IP2](images/zonedns_ip2.png){.thumbnail}|Ceci indique que la configuration de votre nom de domaine est correcte.<br><br>Suite aux dernières modifications dans vos DNS, votre site s'affichera sous 48 heures au maximum.<br><br>Pensez également à redémarrer vos appareils (PC, smartphone, box, etc.) et à vider le cache de votre navigateur.|
|Votre zone DNS ne comporte pas d'entrée de type A ou AAAA reliant votre domaine à l'adresse IP de votre hébergement. Ou l'entrée existante pointe sur une autre adresse IP.|Ajoutez une nouvelle entrée de type A ou AAAA ou corrigez l'entrée existante en suivant [ce guide](/pages/web_cloud/domains/dns_zone_edit).|
|Votre domaine n'apparaît pas dans la partie `Domaines`{.action} de votre espace client.<br><br>Ou l'onglet `Zone DNS`{.action} de votre domaine s'affiche de la façon suivante :<br><br>![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Cela signifie que votre domaine n'est pas géré depuis votre espace client OVHcloud.<br><br>Déterminez son registrar via notre outil [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl) et les serveurs DNS auxquels il est lié. <br><br>Retrouvez et modifiez la zone DNS concernée en conséquence en suivant [ce guide](/pages/web_cloud/web_hosting/multisites_configure_multisite#etape-22-ajouter-un-nom-de-domaine-externe).|
|Cet avertissement s'affiche dans l'onglet `Zone DNS`{.action} :<br><br>![avertissement_zonedns_pas_sur_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Vous devrez donc modifier les serveurs DNS de votre domaine en conséquence en suivant [ce guide](/pages/web_cloud/domains/dns_server_general_information).|

## Aller plus loin <a name="go-further"></a>

[Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.