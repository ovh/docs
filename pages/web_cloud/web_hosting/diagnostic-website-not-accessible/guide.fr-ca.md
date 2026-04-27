---
title: "Que faire si mon site est inaccessible ?"
excerpt: "Diagnostiquez les causes de l'inaccessibilité de votre site"
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

## Objectif

Plusieurs retours d'erreur peuvent apparaître sur votre navigateur en cas d'inaccessibilité de votre site. Les exemples ci-dessous indiquent une configuration erronée de vos [serveurs DNS](/pages/web_cloud/domains/dns_server_edit), votre [zone DNS](/pages/web_cloud/domains/dns_zone_edit) ou un domaine suspendu (si votre site n'affiche pas l'un des messages d'erreur décrits ici, consultez la section [Aller plus loin](#go-further)) :

|Navigateur|Message d'erreur|
|-|---|
|Chrome :<br>« Ce site est inaccessible »|![cantbereached_chrome](/pages/assets/screens/other/browsers/errors/cant-be-reached-chrome.png){.thumbnail}|
|Firefox :<br>« Hum, nous ne parvenons pas à trouver ce site. »|![cantbereached_firefox](/pages/assets/screens/other/browsers/errors/cant-be-reached-firefox.png){.thumbnail}|
|Edge :<br>« Désolé, impossible d'accéder à cette page »|![cantbereached_edge](/pages/assets/screens/other/browsers/errors/cant-be-reached-edge.png){.thumbnail}|
|Safari :<br>« Safari ne parvient pas à trouver le serveur »|![cantbereached_safari](/pages/assets/screens/other/browsers/errors/cant-be-reached-safari.png){.thumbnail}|

**Découvrez comment résoudre les erreurs du type "Ce site est inaccessible"**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Avoir la gestion des serveurs et de la [zone DNS](/pages/web_cloud/domains/dns_zone_edit) de votre domaine
- Être à jour dans les [paiements](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) et [renouvellements](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) des services liés (nom de domaine et hébergement web)

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

### 1 - Vérifier la validité de votre nom de domaine

> [!warning]
>
> Le renouvellement de vos offres est sous votre entière responsabilité.<br>
> OVHcloud, en tant qu'hébergeur, a l'obligation de supprimer définitivement les services (domaines, hébergements, e-mails, etc.) qui n'ont pas été renouvelés à temps, ainsi que l'ensemble des données qu'ils contiennent.
>
> De ce fait, nous vous recommandons fortement d'activer le [renouvellement automatique](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#en-pratique) sur l'ensemble de vos abonnements OVHcloud.
>

<!-- CP-STEPS-START:check-domain-renewal -->
Pour vérifier la validité de l'abonnement relatif à votre nom de domaine, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Mes offres et services](/links/control-panel/billing-services).
>>
> **Étape 2**
>>
>> Renouvelez votre domaine si nécessaire via le bouton `...`{.action} à droite de l'écran, puis `Renouveler le service`{.action}.
>>
>> ![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}
>>
> **Étape 3**
>>
>> Suite à ce renouvellement, votre site sera accessible sous 48 heures maximum.
<!-- CP-STEPS-END:check-domain-renewal -->

### 2 - Vérifier les serveurs DNS

Pour vérifier la validité de vos [serveurs DNS](/pages/web_cloud/domains/dns_server_edit), accédez à la page [Noms de domaine](/links/control-panel/web-domains), puis choisissez le nom de domaine concerné.

**Cliquez sur le scénario correspondant à votre situation pour afficher le contenu.**

<!-- CP-STEPS-START:check-dns-servers-scenario1 -->
/// details | Scénario 1 - Aucune anomalie sur les serveurs DNS

Pour vérifier les serveurs DNS déclarés, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Noms de domaine](/links/control-panel/web-domains), puis choisissez le nom de domaine concerné.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Étape 2**
>>
>> Vérifiez les serveurs indiqués dans l'onglet `Serveurs DNS`{.action} :
>>
>> ![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}
>>
> **Étape 3**
>>
>> S'ils sont identiques aux cibles des entrées de type `NS` dans la **Zone DNS**, passez à la [partie 3](#etape3) :
>>
>> ![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

///
<!-- CP-STEPS-END:check-dns-servers-scenario1 -->

/// details | Scénario 2 - Un avertissement apparaît au-dessus de la zone DNS

Un avertissement dans l'onglet **Zone DNS** indique que les serveurs DNS utilisés par votre domaine ne sont pas ceux indiqués dans votre zone. Deux scénarios sont ici possibles :

- Sous la phrase « Vous utilisez actuellement les serveurs DNS suivants : », les serveurs indiqués sont du type « ns **?** .ovh.net » et « dns **?** .ovh.net » (remplacez le « **?** » par n'importe quel numéro) :

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modifiez les serveurs DNS en suivant les instructions de [ce guide](/pages/web_cloud/domains/dns_server_edit), afin qu'ils soient identiques aux cibles des entrées de type `NS` dans la **Zone DNS**.

Votre site sera de nouveau accessible sous 48 heures maximum.

- Sous la phrase « Vous utilisez actuellement les serveurs DNS suivants : », les serveurs indiqués ne sont pas du type « ns **?** .ovh.net » et « dns **?** .ovh.net ».

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> Dans cette situation, contactez l'hébergeur de votre Zone DNS, votre webmaster ou les [partenaires OVHcloud](/links/partner) avant toute manipulation.
>
> Il est en effet possible que les serveurs DNS utilisés par votre nom de domaine soient fonctionnels et que le problème d'accès à votre site soit lié à une entrée manquante ou erronée dans la [zone DNS](/pages/web_cloud/domains/dns_zone_general_information). Toute modification des serveurs DNS dans cette situation peut rendre vos adresses e-mails ou d'autres applications en ligne indisponibles.

///

<!-- CP-STEPS-START:fix-missing-ns-records -->
/// details | Scénario 3 - Aucune entrée de type NS n'apparaît dans la zone DNS

La **Zone DNS** de votre domaine ne contient pas d'entrée de type `NS` :

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Effectuez une sauvegarde de la zone actuelle en cliquant sur le bouton `Modifier en mode textuel`{.action} à droite de votre écran :
>>
>> ![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}
>>
>> Copiez/collez le contenu de votre **Zone DNS** dans un document texte. Enregistrez localement ce document.
>>
> **Étape 3**
>>
>> Cliquez sur `Réinitialiser ma zone DNS`{.action}, puis sélectionnez `Non, mais je veux réinitialiser ma zone DNS.`{.action}.
>>
>> Indiquez vos serveurs e-mail et d'hébergement, puis cliquez sur `Valider`{.action}.
>>
>> ![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
> **Étape 4**
>>
>> Votre site sera de nouveau accessible sous 24 heures maximum.

///
<!-- CP-STEPS-END:fix-missing-ns-records -->

### 3 - Vérifier la zone DNS <a name="etape3"></a>

Dans cette étape, vous allez retrouver l'adresse IP de votre hébergement, puis l'ajouter à votre **Zone DNS**.

Si votre site web est hébergé en dehors de l'infrastructure OVHcloud ou géré par une tierce personne, contactez l'hébergeur ou le prestataire concerné.

<!-- CP-STEPS-START:check-hosting-ip-for-dns -->
Si votre site web est hébergé sur l'une de nos [offres d'hébergement web](/links/web/hosting), cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans le cadre **Informations générales**, vous trouverez les mentions **IPv4** et **IPv6**.
>>
>> ![IPv4-IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copiez l'adresse IPv4 et/ou IPv6 de votre nom de domaine.
<!-- CP-STEPS-END:check-hosting-ip-for-dns -->

Puis reportez-la dans la [zone DNS](/pages/web_cloud/domains/dns_zone_edit) de votre nom de domaine, en modifiant ou créant une ou plusieurs entrées de type `A`.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

Votre site sera de nouveau accessible sous 24 heures maximum.

## Aller plus loin <a name="go-further"></a>

[Résoudre l'erreur « Site non installé »](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Que faire en cas d'erreur 500 Internal Server Error ?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
