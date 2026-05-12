---
title: "Comment associer un nom de domaine à un site web existant ?"
excerpt: "Découvrez comment associer un nom de domaine ou un sous-domaine à un site web déjà existant sur votre hébergement web"
updated: 2026-05-04
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

Vous pouvez héberger plusieurs sites web sur une même offre d'hébergement web, même si les noms de domaine ne sont pas enregistrés chez OVHcloud. De plus, vous pouvez associer un ou plusieurs noms de domaine ou sous-domaines à un même site web.

> [!primary]
> Si vous n'avez pas encore créé le site web concerné sur votre hébergement web, consultez **directement** [ce guide](/pages/web_cloud/web_hosting/multisites_configure_multisite).

**Découvrez comment associer un nom de domaine ou un sous-domaine à un site web déjà existant sur votre hébergement web.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting-multisite) compatible.
- Disposer d'un ou de plusieurs [noms de domaine](/links/web/domains).
- Pouvoir modifier la configuration de vos noms de domaine depuis leurs [zones DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

### Ajouter un nom de domaine ou un sous-domaine à un site web existant

**Cliquez sur l'un des titres ci-dessous pour afficher les explications.**

<a name="add-domain-ovhcloud"></a>

/// details | Ajouter un nom de domaine géré depuis votre espace client OVHcloud

Cette partie s'applique uniquement si votre nom de domaine et/ou sa zone DNS active se trouvent **dans votre espace client OVHcloud**.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **6** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Ajouter un domaine`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Étape 4**
>>
>> Cochez l'option `Associer un domaine OVHcloud existant`{.action} et cliquez sur `Continuer`{.action}.
>>
>> Sélectionnez ensuite le nom de domaine à associer dans le menu déroulant **Nom de domaine - obligatoire** qui apparaît en dessous.
>>
>> > [!primary]
>> > Pour ajouter un sous-domaine, sélectionnez d'abord le nom de domaine dans la liste (par exemple : domain.tld). Cochez ensuite la case intitulée `Créer un sous-domaine`{.action}. Un champ de saisie apparaît pour vous permettre de renseigner le sous-domaine (par exemple : **sub**.domain.tld).
>> >
>> > **Cas particulier** : Les sous-domaines en `www` (par exemple : **www**.domain.tld) sont automatiquement ajoutés en complément du nom de domaine. Par conséquent, il est inutile de préciser ce sous-domaine spécifique dans le champ de saisie.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}
>>
>> Si vous souhaitez utiliser l'une des **options avancées** disponibles, activez le bouton `Configuration avancée`{.action} et passez directement à **l'étape 7**. Sinon, poursuivez à **l'étape 6**.
>>
> **Étape 5**
>>
>> Vérifiez que toutes les informations saisies précédemment sont correctes, puis cliquez sur `Continuer`{.action} pour finaliser l'ajout de votre nom de domaine ou de votre sous-domaine à votre site web.
>>
>> Cet ajout peut prendre jusqu'à une heure.
>>
>> La configuration DNS se réalisera automatiquement si la zone DNS active de votre nom de domaine est gérée dans votre espace client OVHcloud.
>>
>> Dans le cas contraire, consultez les guides suivants pour configurer manuellement votre zone DNS :
>>
>> - [Hébergement web - Liste des adresses IP par cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > La modification de la configuration DNS de votre nom de domaine nécessite un délai de propagation pouvant atteindre 24 heures avant d'être pleinement effective.
>>
> **Étape 6**
>>
>> > [!primary]
>> >
>> > Cette étape est **facultative**. Elle s'adresse uniquement aux clients souhaitant activer certaines fonctionnalités disponibles via le bouton `Configuration avancée`{.action}.
>> >
>> > **Toutes ces fonctionnalités peuvent être activées ultérieurement, une fois le nom de domaine ajouté à votre site web.** Dans ce cas précis, consultez directement [ce guide](/pages/web_cloud/web_hosting/multisites_modify_domain).
>> >
>> > Retrouvez ci-dessous un descriptif de ces options.
>> >
>> > Selon votre offre d'[hébergement web](/links/web/hosting), certains éléments parmi les choix proposés ne pourront pas être sélectionnés.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Option|Description|
>> |---|---|
>> |IP du pays|Permet de bénéficier d'une adresse IP géolocalisée (parmi une liste de pays) pour le nom de domaine sélectionné.<br> Apprenez-en plus grâce à [cette page](/links/web/hosting-options).|
>> |Firewall|Permet d'activer un pare-feu (filtrage et analyse des requêtes) sur le nom de domaine sélectionné.<br> Apprenez-en plus grâce à [cette page](/links/web/hosting-options).|
>> |CDN|Permet d'activer le CDN (mise en cache des éléments statiques de votre site web, comme les images) sur le nom de domaine sélectionné.<br> Apprenez-en plus grâce à [notre page CDN](/links/web/hosting-options-cdn).<br> En activant le SSL et le CDN, vous pourrez également bénéficier du protocole **HTTP/2** (ce protocole est activé par défaut dans notre datacentre de Gravelines).|
>>
>> Une fois le bouton `Configuration avancée`{.action} activé, vous pouvez également choisir le mode de configuration DNS de votre nom de domaine :
>>
>> - **Pour une configuration DNS automatique**, laissez la case `Configuration automatique (recommandée)`{.action} cochée.
>> - **Pour une configuration DNS manuelle**, cochez la case `Configuration manuelle`{.action}. Pour réaliser ensuite le paramétrage, référez-vous aux guides suivants :
>>     - [Hébergement web - Liste des adresses IP par cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> Une fois vos choix réalisés, cliquez sur le bouton `Continuer`{.action} pour finaliser l'ajout de votre nom de domaine ou de votre sous-domaine à votre site web. Cet ajout peut prendre jusqu'à une heure.
>>
>> Cependant, la modification de la configuration DNS de votre nom de domaine nécessite un délai de propagation pouvant atteindre 24 heures avant d'être pleinement effective.

///

/// details | Ajouter un nom de domaine externe

Cette partie s’applique uniquement si votre nom de domaine n’est pas présent dans votre compte OVHcloud.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **6** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Ajouter un domaine`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Étape 4**
>>
>> Cochez l'option `Associer un domaine externe`{.action} et cliquez sur `Continuer`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Étape 5**
>>
>> Saisissez le nom de domaine (par exemple : domain.tld) ou le sous-domaine (par exemple : **sub**.domain.tld) à associer dans le champ **Nom de domaine - obligatoire** qui apparaît en dessous.
>>
>> > [!success]
>> >
>> > **Cas particulier** : Les sous-domaines en `www` (par exemple : **www**.domain.tld) sont automatiquement ajoutés en complément du nom de domaine. Par conséquent, il est inutile de préciser ce sous-domaine spécifique dans le champ de saisie.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}
>>
>> Une fois les informations complétées, cliquez sur le bouton `Continuer`{.action}.
>>
>> > [!primary]
>> >
>> > Contrairement aux noms de domaine directement gérés depuis votre espace client OVHcloud, les **options avancées** ne sont pas directement disponibles lors de l'ajout d'un nom de domaine ou d'un sous-domaine externe à votre site web.
>> >
>> > Cependant, **toutes ces fonctionnalités peuvent être activées ultérieurement une fois le nom de domaine ou le sous-domaine externe ajouté à votre site web.** Pour cela, consultez directement [ce guide](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
> **Étape 6**
>>
>> Tout ajout d'un nom de domaine externe à OVHcloud nécessite une validation supplémentaire obligatoire. Cela nous permet de nous assurer que l'ajout du nom de domaine externe est légitime. Un message vous invitera donc à modifier la configuration DNS du nom de domaine.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Notez les éléments qui s’affichent, puis cliquez sur le bouton `Continuer`{.action}. Dès lors, le nom de domaine est ajouté de manière temporaire, le temps que vous puissiez modifier sa configuration DNS.
>>
>> > [!warning]
>> >
>> > Vous devez effectuer ces modifications **rapidement** pour que votre nom de domaine soit correctement ajouté. Sans cette action, l'ajout de votre nom de domaine sera annulé.
>> >
>> > Les entrées DNS de type **A** et **TXT** doivent obligatoirement être placées dans la zone DNS active de votre nom de domaine pour qu'il soit ajouté à votre site web. Seules les entrées DNS de type **AAAA** sont optionnelles.
>> >
>> > Notez que si vous souhaitez ajouter `sub.domain.tld`, vous devrez créer l'entrée TXT `ovhcontrol.domain.tld` et non l'entrée `ovhcontrol.sub.domain.tld`.
>> >
>> > Pour retrouver la zone DNS active de votre nom de domaine, retrouvez les [serveurs DNS](/pages/web_cloud/domains/dns_server_edit) auxquels celui-ci est lié. Vous devrez valider uniquement le nom de domaine à l'aide du champ **TXT**, pas tous ses sous-domaines.|

///

/// details | Ajouter un nouveau nom de domaine qui n'a pas encore été enregistré

Cette partie s’applique uniquement si votre nom de domaine n’a pas encore été enregistré, que ce soit chez OVHcloud ou auprès d’un autre bureau d’enregistrement. En d’autres termes, elle concerne les noms de domaine qui n’ont pas encore été souscrits.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Ajouter un domaine`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Étape 4**
>>
>> Cochez l'option `Commander un nouveau domaine`{.action} et cliquez sur `Continuer`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Étape 5**
>>
>> Vous êtes alors redirigé vers notre page commerciale de souscription d'un nom de domaine. Choisissez votre nouveau nom de domaine en fonction des disponibilités du marché. Suivez ensuite les instructions du tunnel de commande jusqu'à la validation du bon de commande.
>>
>> Une fois votre commande payée et validée, patientez quelques instants, le temps qu'elle soit traitée.
>>
>> > [!primary]
>> >
>> > Si, au bout de quelques heures, vous constatez que votre nouveau nom de domaine ne s'est pas associé correctement à votre site web, suivez la partie « [Ajouter un nom de domaine géré depuis votre espace client OVHcloud](#add-domain-ovhcloud) » de ce guide.

///

### Offre e-mail incluse avec votre hébergement web

La plupart des offres d'[hébergement web OVHcloud](/links/web/hosting) disposent d'une option incluse de création d'adresses e-mail personnalisées avec votre nom de domaine.

Cette option e-mail peut être activée pour **un seul** nom de domaine. Cela signifie que si vous hébergez plusieurs sites web avec plusieurs noms de domaine différents sur votre hébergement web, vous ne pourrez activer cette option que pour un seul de vos noms de domaine.

N'hésitez pas à consulter [notre guide dédié](/pages/web_cloud/web_hosting/activate-email-hosting) pour plus de détails sur l'activation de cette option.

## Aller plus loin

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Mettre en ligne un site web sur son hébergement web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
