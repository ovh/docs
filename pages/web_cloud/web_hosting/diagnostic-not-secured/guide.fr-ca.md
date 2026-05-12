---
title: "Que faire en cas d'erreur « Votre connexion n'est pas privée » ?"
excerpt: "Réagir en cas de message d'erreur lié à la sécurité de votre site"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif <a name="objectif"></a>

Plusieurs messages d'erreur peuvent apparaître en cas d'inaccessibilité de votre site. Les exemples ci-dessous indiquent que votre hébergement Web ne contient pas de [certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) (si votre site n'affiche pas l'une des anomalies décrites dans ce guide, consultez la section « [Aller plus loin](#go-further) ») :

|Navigateur|Message d'erreur concerné|
|-|---|
|Sur Chrome :<br>« Votre connexion n'est pas privée »|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Sur Firefox :<br>« Attention : risque probable de sécurité »|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Sur Edge :<br>« Votre connexion n'est pas privée »|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Sur Safari :<br>« Cette connexion n'est pas privée »|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Découvrez comment résoudre les erreurs du type « Votre connexion n'est pas privée ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.
>

## Prérequis

- Avoir la gestion des [serveurs DNS](/pages/web_cloud/domains/dns_server_general_information) et de la [zone DNS](/pages/web_cloud/domains/dns_zone_general_information) de votre nom de domaine

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

Afin de résoudre cette anomalie, vous devrez :

1. déterminer l'hébergement auquel est relié votre nom de domaine, afin d'intervenir sur le bon serveur ;
2. créer, activer ou renouveler un [certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) pour votre nom de domaine sur l'hébergement concerné.

### 1 - Vérifier l'hébergement attaché à votre nom de domaine

#### Vérifier l'adresse IP de l'hébergement

Les messages d'erreur mentionnés [plus haut](#objectif) ne signifient pas forcément que votre site est hébergé sur l'une de nos [offres Web Cloud](/links/web/hosting). Vous devez donc vérifier l'adresse IP du serveur auquel est relié votre [nom de domaine](/links/web/domains).

Pour retrouver l'adresse IP de votre [hébergement OVHcloud](/links/web/hosting), cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans le cadre **Informations générales**, vous trouverez les mentions **IPv4** et **IPv6**.
>>
>> ![IPv4-IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Notez l'adresse IPv4 et/ou IPv6, puis poursuivez la lecture du guide.

#### Vérifier l'adresse IP dans la zone DNS

Il vous faut maintenant vérifier que l'adresse IP indiquée dans la [Zone DNS](/pages/web_cloud/domains/dns_zone_edit) correspond bien à celle de votre [hébergement Web Cloud](/links/web/hosting).

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Notez la cible de l'entrée de type `A` pour votre nom de domaine :
>>
>> ![zone-dns-ip](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

#### Effectuer les actions nécessaires

**Cliquez sur le scénario correspondant à votre situation pour afficher le contenu.**

/// details | L'adresse IP correspond à celle de votre hébergement mutualisé

L'adresse IP indiquée dans la [Zone DNS](/pages/web_cloud/domains/dns_zone_edit) correspond à celle de votre hébergement mutualisé. Passez à la [partie 2](#etape2).

///

/// details | L'adresse IP ne concerne aucun hébergement de votre compte mais apparaît dans la liste des serveurs Web Cloud

L'adresse IP indiquée dans la zone ne concerne aucun hébergement de votre [compte OVHcloud](/links/manager), mais elle apparaît dans la [liste des serveurs Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Vérifiez que vous ne possédez pas un hébergement possédant cette adresse IP dans l'un de vos autres [comptes OVHcloud](/links/manager) si vous en avez créé plusieurs. Si besoin, contactez votre webmaster ou les [partenaires OVHcloud](/links/partner) à ce sujet.

///

/// details | L'adresse IP n'est pas celle de votre hébergement et n'apparaît pas dans la liste des serveurs Web Cloud

L'adresse IP indiquée dans la zone n'est pas celle de votre hébergement et elle n'apparaît pas non plus dans la [liste des serveurs Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Contactez votre webmaster ou les [partenaires OVHcloud](/links/partner) à ce sujet.

///

/// details | Votre domaine utilise d'autres serveurs DNS OVHcloud (ns?.ovh.net / dns?.ovh.net)

Au-dessus de la zone DNS présente dans votre espace client OVHcloud, un message indique que votre domaine utilise d'autres serveurs [DNS](/pages/web_cloud/domains/dns_zone_edit) et ceux-ci apparaissent sous la forme « ns **?** .ovh.net » ou « dns **?** .ovh.net » (remplacez le « **?** » par le numéro de serveur DNS concerné) :

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modifiez les serveurs DNS de votre domaine, afin qu'ils correspondent à ceux inscrits dans les entrées de type `NS` de la zone. Pour effectuer cette opération, suivez les instructions de [ce guide](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Votre domaine utilise des serveurs DNS externes (non OVHcloud)

Au-dessus de la zone DNS présente dans votre espace client OVHcloud, un message indique que votre domaine utilise d'autres serveurs [DNS](/pages/web_cloud/domains/dns_zone_edit) et ceux-ci n'apparaissent pas sous la forme « ns **?** .ovh.net » ou « dns **?** .ovh.net » :

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

Contactez votre webmaster ou les [partenaires OVHcloud](/links/partner) à ce sujet.

///

/// details | Votre nom de domaine n'apparaît pas dans votre espace client OVHcloud

Votre nom de domaine n'apparaît pas sur la page [Noms de domaine](/links/control-panel/web-domains) de votre espace client OVHcloud.

Cela signifie que votre nom de domaine n'est pas géré depuis votre [espace client OVHcloud](/links/manager).

Vérifiez qu'il n'est pas géré depuis l'un de vos autres [comptes OVHcloud](/links/manager), si vous en avez créé plusieurs.

Vous pouvez également déterminer son bureau d'enregistrement et les serveurs DNS auxquels il est lié via notre outil [WHOIS](/links/web/domains-whois).

Si besoin, contactez votre webmaster ou les [partenaires OVHcloud](/links/partner) à ce sujet.

///

### 2 - Vérifier le certificat SSL de votre hébergement <a name="etape2"></a>

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans l'onglet `Informations générales`{.action}, vérifiez la partie `Certificat SSL` :
>>
>> ![ssl-certificate-in-general-tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}

#### Scénario 1 : votre hébergement ne contient pas de certificat SSL

Activez un [certificat SSL](/links/web/hosting-options-ssl) sur votre hébergement en suivant les instructions de [ce guide](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Scénario 2 : le certificat SSL de votre hébergement ne fonctionne pas

Si vous avez généré un **certificat SSL « Let's Encrypt »**, activez l'option SSL de votre hébergement en suivant les instructions de [ce guide](/pages/web_cloud/web_hosting/ssl_on_webhosting).

Si vous disposez d'un **certificat SSL importé** et que celui-ci ne fonctionne pas, contactez son fournisseur.

Si vous avez commandé l'un des **certificats SSL payants** de notre partenaire [SECTIGO](https://sectigo.com/), vérifiez si vous avez reçu un e-mail vous proposant de le renouveler.
<br>Si besoin, contactez le [support de SECTIGO](https://sectigo.com/support) à ce sujet.

> [!primary]
>
> Pour retrouver l'ensemble des e-mails envoyés par nos services, rendez-vous sur la page [Mes communications](/links/control-panel/account-messages).

## Aller plus loin <a name="go-further"></a>

[Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Passer son site internet en HTTPS grâce au SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Résoudre l'erreur « Site non installé »](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Que faire en cas d'erreur 500 Internal Server Error ?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).