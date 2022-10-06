---
title: "Que faire en cas d'erreur « Votre connexion n'est pas privée » ?"
slug: erreur-site-non-securise
excerpt: "Réagir en cas de message d'erreur lié à la sécurité de votre site"
section: Diagnostic
order: 03
---

**Dernière mise à jour le 08/07/2021**
 
## Objectif <a name="objectif"></a>

Plusieurs messages d'erreur peuvent apparaître en cas d'inaccessibilité de votre site. Les exemples ci-dessous indiquent que votre hébergement Web ne contient pas de [certificat SSL](../les-certificats-ssl-sur-les-hebergements-web/) (si votre site n'affiche pas l'une des anomalies décrites dans ce guide, consultez la section « [Aller plus loin](#aller-plus-loin) ») :

|Navigateur|Message d'erreur concerné|
|-|---|
|Sur Chrome :<br>« Votre connexion n'est pas privée »|![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}|
|Sur Firefox :<br>« Attention : risque probable de sécurité »|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}|
|Sur Edge :<br>« Votre connexion n’est pas privée »|![notsecured_edge](images/notsecured_edge.png){.thumbnail}|
|Sur Safari :<br>« Cette connexion n'est pas privée »|![notsecured_safari](images/notsecured_safari.png){.thumbnail}|

**Découvrez comment résoudre les erreurs du type « Votre connexion n'est pas privée ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#aller-plus-loin) » de ce guide.
>

## Prérequis

- Avoir la gestion des serveurs et de la [zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) de votre nom de domaine
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

Afin de résoudre cette anomalie, vous devrez :

1. déterminer l'hébergement auquel est relié votre nom de domaine, afin d'intervenir sur le bon serveur ;
2. créer, activer ou renouveler un [certificat SSL](../les-certificats-ssl-sur-les-hebergements-web/) pour votre nom de domaine sur l'hébergement concerné.

### Étape 1 : vérifier l'hébergement attaché à votre nom de domaine

#### Vérifier l'adresse IP de l'hébergement

Les messages d'erreur mentionnés [plus haut](#objectif) ne signifient pas forcément que votre site est hébergé sur l'une de nos [offres Web Cloud](https://www.ovhcloud.com/fr/web-hosting/). Vous devez donc vérifier l'adresse IP du serveur auquel est relié votre [nom de domaine](https://www.ovhcloud.com/fr/domains/).

Pour retrouver l'adresse IP de votre [hébergement OVHcloud](https://www.ovhcloud.com/fr/web-hosting/), cliquez en haut de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) sur `Web Cloud`{.action} puis, sur `Hébergements`{.action} et choisissez l'hébergement concerné.

Dans l'onglet `Informations générales`{.action}, notez l'adresse IPV4 et/ou IPV6 de votre hébergement.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### Vérifier l'adresse IP dans la zone DNS

Il vous faut maintenant vérifier que l'adresse IP indiquée dans la [Zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) correspond bien à celle de votre [hébergement Web Cloud](https://www.ovhcloud.com/fr/web-hosting/).

Cliquez sur `Noms de domaine`{.action} dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez le nom de domaine de votre site.

Sélectionnez l'onglet `Zone DNS`{.action} et notez la cible de l'entrée de type `A` pour votre domaine :

![zone-dns-ip](images/zone-dns-ip.png){.thumbnail}

#### Effectuer les actions nécessaires

|Scénario|Action à entreprendre|
|---|---|
|L'adresse IP indiquée dans la [Zone DNS](../../domains/editer-ma-zone-dns/) correspond à celle de votre hébergement mutualisé.|Passez à [l'étape 2](#etape2).|
|L'adresse IP indiquée dans la zone ne concerne aucun hébergement de votre [compte OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), mais elle apparaît dans la [liste des serveurs Web Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Vérifiez que vous ne possédez pas un hébergement possédant cette adresse IP dans l'un de vos autres [comptes OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) si vous en avez créé plusieurs. Si besoin, contactez votre webmaster ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/) à ce sujet.|
|L'adresse IP indiquée dans la zone n'est pas celle de votre hébergement et elle n'apparaît pas non plus dans la [liste des serveurs Web Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Contactez votre webmaster ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/) à ce sujet.|
|Dans l'onglet `Zone DNS`{.action}, un message indique que votre domaine utilise d'autres serveurs [DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) et ceux-ci apparaissent sous la forme « ns **?** .ovh.net » ou « dns **?** .ovh.net » (remplacez le « **?** » par le numéro de serveur DNS concerné) :<br><br>![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}|Modifiez les serveurs DNS de votre domaine, afin qu'ils correspondent à ceux inscrits dans les entrées de type `NS` de la zone. Pour effectuer cette opération, suivez les instructions de [ce guide](../../domains/generalites-serveurs-dns/#acceder-a-la-gestion-des-serveurs-dns-ovhcloud).|
|Dans l'onglet `Zone DNS`{.action}, un message indique que votre domaine utilise d'autres serveurs [DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) et ceux-ci n'apparaissent pas sous la forme « ns **?** .ovh.net » ou « dns **?** .ovh.net » :<br><br>![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}|Contactez votre webmaster ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/) à ce sujet.|
|Votre nom de domaine n'apparaît pas dans la partie `Noms de domaines`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>Ou l'onglet `Zone DNS`{.action} de votre domaine s'affiche de la façon suivante :<br><br>![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Cela signifie que votre domaine n'est pas géré depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>Vérifiez qu'il n'est pas géré depuis l'un de vos autres [comptes OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), si vous en avez créé plusieurs.<br><br> Vous pouvez également déterminer son bureau d'enregistrement et les serveurs DNS auxquels il est lié via notre outil [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl).<br><br>Si besoin, contactez votre webmaster ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/) à ce sujet.|

### Étape 2 : vérifier le certificat SSL de votre hébergement <a name="etape2"></a>

Dans l'onglet `Informations générales`{.action} de votre hébergement OVHcloud, vérifiez la partie `Certificat SSL` :

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Scénario 1 : votre hébergement ne contient pas de certificat SSL

Activez un [certificat SSL](https://www.ovhcloud.com/fr/web-hosting/options/ssl/) sur votre hébergement en suivant les instructions de ce [guide](../les-certificats-ssl-sur-les-hebergements-web/).

#### Scénario 2 : le certificat SSL de votre hébergement ne fonctionne pas

Si vous avez généré un **certificat SSL « Let's Encrypt »**, activez l'option SSL dans le `Multisite`{.action} de votre hébergement en suivant les instructions de ce [guide](../les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-un-multisite).

Si vous disposez d'un **certificat SSL importé** et que celui-ci ne fonctionne pas, contactez son fournisseur.

Si vous avez commandé l'un des **certificats SSL payants** de notre partenaire [SECTIGO](https://sectigo.com/){.external}, vérifiez si vous avez reçu un e-mail vous proposant de le renouveler.
<br>Si besoin, contactez le [support de SECTIGO](https://sectigo.com/support){.external} à ce sujet.

> [!primary]
>
> Pour retrouver l'ensemble des e-mails envoyés par nos services, cliquez en haut à droite de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), puis sur `E-mails de service`{.action}) :
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Aller plus loin <a name="aller-plus-loin"></a>

[Gérer un certificat SSL sur son hébergement web](../les-certificats-ssl-sur-les-hebergements-web/)

[Passer son site internet en HTTPS grâce au SSL](../passer-site-internet-https-ssl/)

[Résoudre l’erreur « Site non installé »](../erreur-site-non-installe/)

[Comment diagnostiquer une page blanche ?](../comment-diagnostiquer-page-blanche/)

[Que faire en cas d’erreur 500 Internal Server Error ?](../erreur-500-internal-server-error/)

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](../erreurs-frequentes-modules-en-1-clic/)
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.