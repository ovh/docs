---
title: Résoudre l'erreur « Site non installé »
slug: erreur-site-non-installe
excerpt: Découvrez comment identifier et résoudre la page d'erreur « Site non installé »
section: "Configuration de l'hébergement"
order: 2
---

**Dernière mise à jour le 05/05/2021**


## Objectif

Il est possible de voir apparaître sur votre navigateur internet la page d'erreur **Site non installé**, notamment lors de la première installation de votre site web.

![site-not-installed](images/site-not-installed.png)

**Découvrez comment identifier et résoudre la page d'erreur « Site non installé »**

> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](../erreur-site-non-installe/#aller-plus-loin_1) de ce guide.

## Prérequis

- Vous disposez d'une [offre d'hébergement mutualisé](https://www.ovh.com/fr/hebergement-web/)
- Vous êtes connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Vous disposez également de la gestion de la [zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) à laquelle est rattachée votre nom de domaine.

## En pratique

La page **Site non installé** s’affiche dans deux situations :

1. Votre domaine n’est pas présent pas dans la partie [multisite](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-1-acceder-a-la-gestion-multisite) de votre hébergement.

2. Il n'est pas relié, via sa `zone DNS`{.action}, à votre hébergement. 

Les étapes suivantes vous permettront de corriger l’erreur `Site non installé` dans ces deux situations.

### Étape 1 : Vérifier le multisite de votre hébergement

Dans votre espace client OVHcloud, allez dans `Web cloud`{.action}, puis sur `Hébergements`{.action}.

Sélectionnez l'hébergement concerné dans la liste, puis cliquez sur l’onglet `Multisite`{.action}.

|Scénarios|Action à entreprendre|
|---|---|
|Le nom de votre site apparaît dans le tableau.|Si vous venez d’ajouter le nom de votre site dans la partie multisite de votre hébergement, patientez une vingtaine de minutes puis rafraîchissez le cache de votre navigateur. Si le message « Site non installé » apparaît toujours, passez à [l'étape 2](../#checkdomainlink)|
|Le domaine ou le sous-domaine lié à votre site n'apparaît pas dans le tableau.|Ajoutez votre domaine au `multisite`{.action} selon ce [guide](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-2-ajouter-un-domaine-ou-un-sous-domaine).|
|Le nom de domaine a été supprimé du multisite sans action de votre part.|Votre domaine ou sa zone DNS sont peut-être gérés depuis un autre compte. Ajoutez votre domaine au multisite selon ce [document](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|

### Étape 2 : Vérifier la zone DNS <a name="checkdomainlink"></a> de votre domaine

Vérifiez que votre domaine, via sa `zone DNS`{.action}, est relié à l’hébergement de votre site.

Pour en savoir plus sur la notion de DNS, consultez notre guide [Éditer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/).

#### Étape 2.1 : Identifier l’adresse IP de votre hébergement OVHcloud

Pour retrouver l'adresse IP cliquez sur `Hébergements` dans la colonne de gauche de votre espace client et sélectionnez l'hébergement concerné.

![hosting-general-informations](images/hosting-general-informations.png)

#### Étape 2.2 : Vérifiez l'adresse IP notée dans la zone DNS de votre domaine

Vous devez maintenant vérifier que l'adresse IP de votre hébergement apparaît dans la zone DNS active de votre domaine.

Pour cela, rendez vous dans la partie `Domaines`{.action}, sélectionnez votre domaine puis allez dans l'onglet `Zone DNS`{.action}.

|Scénarios possibles|Action à entreprendre|
|---|---|
|Dans la zone DNS, votre domaine est relié à l'adresse IP de votre hébergement par une entrée de type A (pour IPv4) ou AAAA ( pour IPv6) ![zoneDNS_IP2](images/zoneDNS_IP2.png)|Ceci indique que la configuration de votre nom de domaine est correcte. Suite aux dernières modifications dans vos DNS, votre site s'affichera sous 48 heures au maximum. Pensez également à redémarrer vos appareils (PC, smartphone, box, etc.) et à vider le cache de votre navigateur.|
|Votre zone DNS ne comporte pas d'entrée de type A ou AAAA reliant votre domaine à l'adresse IP de votre hébergement. Ou l'entrée existante pointe sur une autre adresse IP.|Ajoutez un nouvelle entrée de type A ou corrigez l'entrée existante selon ce [document](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/)|
|Votre domaine n'apparaît pas dans la partie `Domaines`{.action} de votre espace client. Ou l'onglet `Zone DNS`{.action} de votre domaine s'affiche de la façon suivante ![zoneDNS_NDD_pas_sur_lEC2](images/zoneDNS_NDD_pas_sur_lEC2.png)|Cela signifie que votre domaine n'est pas géré depuis votre espace client OVHcloud. Déterminez son registrar via notre outil [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl) et les serveurs DNS auxquels il est lié. Retrouvez et modifiez la zone DNS concernée en conséquence selon ce [guide](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe)|
|Cet avertissement s'affiche dans l'onglet `Zone DNS`{.action} ![avertissement_zoneDNS_pas_sur_srv_DNS](images/avertissement_zoneDNS_pas_sur_srv_DNS.PNG)|Vous devrez donc modifier les serveurs DNS de votre domaine en conséquence selon ce [document](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/). 


## Aller plus loin

[Partager son hébergement entre plusieurs sites](../multisites-configurer-un-multisite-sur-mon-hebergement-web/)

[Liste des adresses IP des clusters et hebergements web](../liste-des-adresses-ip-des-clusters-et-hebergements-web/)

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/)

[Éditer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
