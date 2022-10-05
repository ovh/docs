---
title: "Résoudre l'erreur « Site non installé »"
slug: erreur-site-non-installe
excerpt: Découvrez comment identifier et résoudre la page d'erreur « Site non installé »
section: Diagnostic
order: 05
---

**Dernière mise à jour le 18/05/2021**

## Objectif

Il est possible de voir apparaître sur votre navigateur Internet la page d'erreur **Site non installé**, notamment lors de la première installation de votre site web.

![site-not-installed](images/site-not-installed2021.png){.thumbnail}

**Découvrez comment identifier et résoudre la page d'erreur « Site non installé »**

> [!warning]
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#allerplusloin) de ce guide.

## Prérequis

- Disposer d'une [offre d'hébergement mutualisé](https://www.ovhcloud.com/fr-ca/web-hosting/)
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Disposer également de la gestion de la [Zone DNS](../../domains/editer-ma-zone-dns/) à laquelle est rattachée votre nom de domaine.

## En pratique

La page **Site non installé** s’affiche dans deux situations :

1. Votre domaine n’est pas présent dans la partie [Multisite](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-1-acceder-a-la-gestion-multisite) de votre hébergement.

2. Votre domaine n'est pas relié, via sa `Zone DNS`{.action}, à votre hébergement.

Les étapes suivantes vous permettront de corriger l’erreur `Site non installé` dans ces deux situations.

### Étape 1 : vérifier la partie multisite de votre hébergement

Dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), cliquez sur `Web cloud`{.action}, puis `Hébergements`{.action}.

Sélectionnez l'hébergement concerné dans la liste, puis cliquez sur l’onglet `Multisite`{.action}.

|Scénario|Action à entreprendre|
|---|---|
|Le nom de votre site apparaît dans le tableau.|Si vous venez d’ajouter le nom de votre site dans la partie `Multisite` de votre hébergement, patientez une vingtaine de minutes puis rafraîchissez le cache de votre navigateur. Si le message « Site non installé » apparaît toujours, passez à [l'étape 2](#checkdomainlink).|
|Le domaine ou le sous-domaine lié à votre site n'apparaît pas dans le tableau.|Ajoutez votre domaine au `Multisite`{.action} en suivant la rubrique dédiée du guide [Partager son hébergement entre plusieurs sites - ajouter un domaine ou un sous-domaine](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-2-ajouter-un-domaine-ou-un-sous-domaine).|
|Le nom de domaine a été supprimé du multisite sans action de votre part.|Votre domaine ou sa zone DNS sont peut-être gérés depuis un autre compte. Ajoutez votre domaine au `Multisite` en suivant la rubrique dédiée du guide [Partager son hébergement entre plusieurs sites - ajouter un nom de domaine externe](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|

### Étape 2 : vérifier la zone DNS  de votre domaine <a name="checkdomainlink"></a>

> [!primary]
>
> Cette étape vise à vérifier que votre domaine, via sa `Zone DNS`{.action}, est relié à l’hébergement de votre site.
> Pour en savoir plus sur la notion de DNS, consultez notre guide [Éditer une zone DNS OVHcloud](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns).

#### 2\.1 Identifier l’adresse IP de votre hébergement OVHcloud

Pour retrouver l'adresse IP, cliquez sur `Hébergements` dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et sélectionnez l'hébergement concerné.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### 2\.2 Vérifier l'adresse IP notée dans la zone DNS de votre domaine

Vous devez maintenant vérifier que l'adresse IP de votre hébergement apparaît dans la zone DNS active de votre domaine.

Pour cela, rendez vous dans la partie `Domaines`{.action}, sélectionnez votre domaine puis allez dans l'onglet `Zone DNS`{.action}.

|Scénarios possibles|Action à entreprendre|
|---|---|
|Dans la zone DNS, votre domaine est relié à l'adresse IP de votre hébergement par une entrée de type A (pour IPv4) ou AAAA (pour IPv6) :<br><br>![zoneDNS_IP2](images/zonedns_ip2.png){.thumbnail}|Ceci indique que la configuration de votre nom de domaine est correcte.<br><br>Suite aux dernières modifications dans vos DNS, votre site s'affichera sous 48 heures au maximum.<br><br>Pensez également à redémarrer vos appareils (PC, smartphone, box, etc.) et à vider le cache de votre navigateur.|
|Votre zone DNS ne comporte pas d'entrée de type A ou AAAA reliant votre domaine à l'adresse IP de votre hébergement. Ou l'entrée existante pointe sur une autre adresse IP.|Ajoutez une nouvelle entrée de type A ou AAAA ou corrigez l'entrée existante en suivant [ce guide](../../domains/editer-ma-zone-dns/).|
|Votre domaine n'apparaît pas dans la partie `Domaines`{.action} de votre espace client.<br>Ou l'onglet `Zone DNS`{.action} de votre domaine s'affiche de la façon suivante : ![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Cela signifie que votre domaine n'est pas géré depuis votre espace client OVHcloud.<br><br>Déterminez son registrar via notre outil [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl) et les serveurs DNS auxquels il est lié. <br><br>Retrouvez et modifiez la zone DNS concernée en conséquence en suivant [ce guide](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|
|Cet avertissement s'affiche dans l'onglet `Zone DNS`{.action} :<br><br>![avertissement_zonedns_pas_sur_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Vous devrez donc modifier les serveurs DNS de votre domaine en conséquence en suivant [ce guide](../../domains/generalites-serveurs-dns/).|

## Aller plus loin <a name="allerplusloin"></a>

[Liste des adresses IP des clusters et hebergements web](../liste-des-adresses-ip-des-clusters-et-hebergements-web/)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.