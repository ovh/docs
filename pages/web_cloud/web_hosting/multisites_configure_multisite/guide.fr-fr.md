---
title: 'Partager son hébergement entre plusieurs sites'
excerpt: "Découvrez comment héberger différents sites web sur votre offre d'hébergement web"
updated: 2025-12-02
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

Vous pouvez héberger plusieurs sites web sur une même offre d'hébergement web, même si les noms de domaine ne sont pas enregistrés chez OVHcloud.

Vous souhaitez ajouter un nouveau site web sur votre hébergement web ?

**Découvrez comment héberger différents sites web sur votre offre d'hébergement web.**

> [!primary]
> Si vous avez déjà créé le site web concerné sur votre hébergement web et que vous souhaitez y associer un nouveau nom de domaine ou sous-domaine, consultez **directement** [ce guide](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

## Prérequis

- Disposer d'une offre [d'hébergement web OVHcloud](/links/web/hosting-multisite) compatible.
- Disposer d'un ou plusieurs [noms de domaine](/links/web/domains).
- Pouvoir modifier la configuration de vos noms de domaine (la [zone DNS](/pages/web_cloud/domains/dns_zone_edit)).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### 1 - Déclarer l'ajout d'un site web sur votre hébergement web présent dans votre espace client OVHcloud

**Cliquez sur l'un des titres ci-dessous pour afficher les explications.**

<a name="add-domain-ovhcloud"></a>

/// details | Ajouter un site web avec nom de domaine géré depuis votre espace client OVHcloud

Cette partie s'applique uniquement si le nom de domaine (et/ou sa zone DNS active) avec lequel vous souhaitez créer votre site web se trouvent **dans votre espace client OVHcloud**.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **7** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 4**
>>
>> Au dessus et à gauche du tableau qui apparaît, cliquez sur le bouton `Ajouter un site`{.action}
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Étape 5**
>>
>> Cochez l'option `Associer un domaine OVHcloud existant`{.action} et cliquez sur `Continuer`{.action}.
>>
>> Dans le champ intitulé **Nom du site**, renseignez le nom que vous souhaitez utiliser pour votre site web. Ce nom sera uniquement visible depuis l'onglet `Mes sites`{.action} de votre hébergement web.
>>
>> Sélectionnez ensuite le nom de domaine à associer dans le menu déroulant **Nom de domaine - obligatoire** qui apparaît en dessous.
>>
>> > [!primary]
>> > Pour ajouter un sous-domaine, sélectionnez d'abord le nom de domaine dans la liste (par exemple : domain.tld). Cochez ensuite la case intitulée `Créer un sous-domaine`{.action}. Un champ de saisie apparaît pour vous permettre de renseigner le sous-domaine (par exemple : **sub**.domain.tld).
>> >
>> > **Cas particulier** : Les sous-domaines en `www` (par exemple : **www**.domain.tld) sont automatiquement ajoutés en complément du nom de domaine. Par conséquent, il est inutile de préciser ce sous-domaine spécifique dans le champ de saisie.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Par défaut, le **dossier racine** de votre site web est généré automatiquement une fois le site web ajouté à votre hébergement web. Ce même **dossier racine** est alors créé en parallèle dans l'espace de stockage de votre hébergement web (accessible via le protocole FTP, SFTP ou SSH en fonction de votre offre d'hébergement web). Si vous souhaitez définir vous-même le nom du **dossier racine**, notamment si vous avez déjà placé le contenu de votre site web dans un dossier spécifique présent dans l'espace de stockage de votre hébergement web, vous devrez le définir en activant le bouton `Configuration avancée`{.action}.
>> >
>> > **Le nom du dossier racine est uniquement personnalisable lors de l'ajout du site web à votre hébergement web.** Cela signifie qu'un fois votre site web créé et ajouté sur votre hébergement web, vous ne pourrez, à date, **plus le modifier** par la suite.
>>
>> Si vous souhaitez utiliser l'une des **options avancées** disponibles ou personnaliser le nom du dossier racine, activez le bouton `Configuration avancée`{.action} et passez à **l'étape 6**. Sinon, poursuivez directement à **l'étape 7**.
>>
> **Étape 6**
>>
>> > [!primary]
>> >
>> > Cette étape est **facultative**. Elle s'adresse uniquement aux clients souhaitant personnaliser le dossier racine et / ou activer certaines fonctionnalités disponibles via le bouton `Configuration avancée`{.action}.
>> >
>> > **A l'exception de la personnalisation du dossier racine, toutes ces fonctionnalités peuvent être activées ultérieurement, une fois le nom de domaine ajouté à votre site web.** Dans ce cas précis, consultez directement [ce guide](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Pour personnaliser le nom du dossier racine qui sera associé à votre site web et contiendra les fichiers de votre site web, saisissez le nom désiré dans le champ intitulé **dossier racine**.
>> 
>> Selon votre offre d'[hébergement web](/links/web/hosting), certains éléments parmi les choix proposés ci-dessous ne pourront pas être sélectionnés.
>> Retrouvez ci-dessous un descriptif des autres options.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-advanced-configurations.png){.thumbnail}
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
> **Étape 7**
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

///

/// details | Ajouter un site web avec nom de domaine non géré depuis votre espace client OVHcloud

Cette partie s’applique uniquement si vous souhaitez ajouter un site web avec un nom de domaine qui n’est pas présent dans votre compte OVHcloud. Cela peut être un nom de domaine présent dans un autre compte OVHcloud ou chez un autre fournisseur.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **7** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 4**
>>
>> Au dessus et à gauche du tableau qui apparaît, cliquez sur le bouton `Ajouter un site`{.action}
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Étape 5**
>>
>> Cochez l'option `Associer un domaine externe`{.action} et cliquez sur `Continuer`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Étape 6**
>>
>> Dans le champ intitulé **Nom du site**, renseignez le nom que vous souhaitez utiliser pour votre site web. Ce nom sera uniquement visible depuis l'onglet `Mes sites`{.action} de votre hébergement web.
>>
>> Saisissez ensuite le nom de domaine (par exemple : domain.tld) ou le sous-domaine (par exemple : **sub**.domain.tld) à associer dans le champ **Nom de domaine - obligatoire** qui apparaît en dessous.
>>
>> > [!success]
>> >
>> > **Cas particulier** : Les sous-domaines en `www` (par exemple : **www**.domain.tld) sont automatiquement ajoutés en complément du nom de domaine. Par conséquent, il est inutile de préciser ce sous-domaine spécifique dans le champ de saisie.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-site-external-step-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Par défaut, le **dossier racine** de votre site web est généré automatiquement une fois le site web ajouté à votre hébergement web. Ce même **dossier racine** est alors créé en parallèle dans l'espace de stockage de votre hébergement web (accessible via le protocole FTP, SFTP ou SSH en fonction de votre offre d'hébergement web).
>> >
>> > **Le nom du dossier racine est uniquement personnalisable lors de l'ajout du site web à votre hébergement web.** Cela signifie qu'un fois votre site web créé et ajouté sur votre hébergement web, vous ne pourrez, à date, **plus le modifier** par la suite.
>>
>> Pour personnaliser le nom du dossier racine qui sera associé à votre site web et contiendra les fichiers de votre site web, saisissez le nom désiré dans le champ intitulé **dossier racine**. Si vous ne souhaitez pas le personnaliser, laissez le champ vide.
>>
>> Une fois les informations complétées, cliquez sur le bouton `Continuer`{.action}.
>>
> **Étape 7**
>>
>> > [!primary]
>> >
>> > Contrairement aux noms de domaine directement gérés depuis votre espace client OVHcloud, les **options avancées** ne sont pas directement disponibles lors de l'ajout d'un site web avec un nom de domaine ou un sous-domaine non géré depuis votre compte OVHcloud.
>> >
>> > Cependant et à l'exception du dossier racine, **toutes ces fonctionnalités peuvent être activées ou modifiées ultérieurement une fois le nom de domaine ou le sous-domaine externe ajouté à votre site web.** Pour cela, consultez directement [ce guide](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Tout ajout d'un site web avec un nom de domaine externe à OVHcloud nécessite une validation supplémentaire obligatoire. Cela nous permet de nous assurer que l'ajout du nom de domaine externe est légitime. Un message vous invitera donc à modifier la configuration DNS du nom de domaine.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Notez les éléments qui s’affichent, puis cliquez sur le bouton `Continuer`{.action}. Dès lors, le nom de domaine est ajouté de manière temporaire, le temps que vous puissiez modifier sa configuration DNS.
>>
>> > [!warning]
>> >
>> > Vous devez effectuer ces modifications **rapidement** pour que votre nom de domaine soit correctement associé à votre site web. Sans cette action, l'ajout de votre nom de domaine sera annulé et votre site web récemment créé ne sera pas accessible.
>> >
>> > Les entrées DNS de type **A** et **TXT** doivent obligatoirement être placées dans la zone DNS active de votre nom de domaine pour qu'il soit associé à votre site web. Seules les entrées DNS de type **AAAA** sont optionnelles.
>> >
>> > Notez que si vous souhaitez associer `sub.domain.tld`, vous devrez créer l'entrée TXT `ovhcontrol.domain.tld` et non l'entrée `ovhcontrol.sub.domain.tld`.
>> >
>> > Pour retrouver la zone DNS active de votre nom de domaine, retrouvez les [serveurs DNS](/pages/web_cloud/domains/dns_server_edit) auxquels celui-ci est lié. Vous devrez valider uniquement le nom de domaine à l'aide du champ **TXT**, pas tous ses sous-domaines.|

/// details | Ajouter un site web avec un nouveau nom de domaine qui n'a pas encore été enregistré

Cette partie s’applique uniquement si vous souhaitez ajouter un site web avec un nom de domaine qui n’a pas encore été enregistré, que ce soit chez OVHcloud ou auprès d’un autre bureau d’enregistrement. En d’autres termes, elle concerne les noms de domaine qui n’ont pas encore été souscrits.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **6** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 4**
>>
>> Au dessus et à gauche du tableau qui apparaît, cliquez sur le bouton `Ajouter un site`{.action}
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Étape 5**
>>
>> Cochez l'option `Commander un nouveau domaine`{.action} et cliquez sur `Continuer`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-new-step-1.png){.thumbnail}
>>
> **Étape 6**
>>
>> Vous êtes alors redirigé vers notre page commerciale de souscription d'un nom de domaine. Choisissez votre nouveau nom de domaine en fonction des disponibilités du marché. Suivez ensuite les instructions du tunnel de commande jusqu'à la validation du bon de commande.
>>
>> Une fois votre commande payée et validée, patientez quelques instants, le temps qu'elle soit traitée.
>>
>> > [!primary]
>> >
>> > Une fois que votre nom de domaine apparaît dans votre espace client OVHcloud, suivez la partie « [Ajouter un nom de domaine géré depuis votre espace client OVHcloud](#add-domain-ovhcloud) » de ce guide pour ajouter votre site web à votre hébergement web.

///

### 2 - Mettre votre site web en ligne <a name="site-online"></a>

Une fois le site web déclaré avec votre nom de domaine sur votre hébergement web, il ne vous reste plus qu’à mettre en ligne le contenu de votre site web. Pour rappel, vous devez réaliser cette manipulation dans le **dossier racine** que vous avez défini lors de l’ajout du site web dans votre espace client OVHcloud.

Pour vous aider dans cette démarche, sachez qu'OVHcloud propose l'installation de modules (WordPress, Joomla!, PrestaShop et Drupal). Vous pouvez ainsi bénéficier d’une structure de site web prête à l’emploi. Le site web sera alors installé automatiquement dans le dossier racine configuré précédemment. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Installer son site avec les modules en 1 clic »](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

A contrario, si vous souhaitez installer manuellement votre site web, munissez-vous de ses fichiers puis mettez-les en ligne dans le bon dossier racine présent dans l'espace de stockage de votre hébergement web. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Mettre en ligne un site Internet sur son hébergement web »](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

> [!primary]
>
> Si vous souhaitez ajouter plusieurs sites web, vous devrez répéter les actions décrites dans ce guide.
>
> Nous vous invitons à être vigilant sur le nombre de sites web que vous partagez sur votre hébergement web. Plus celui-ci est élevé, plus les ressources qui lui sont allouées sont sollicitées. [La page de nos offres d'hébergement web](/links/web/hosting) indique le nombre de sites web recommandés que vous pouvez accueillir sur votre hébergement web.

## Aller plus loin

[Installer son site avec les modules en 1 clic.](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Éditer une zone DNS OVHcloud.](/pages/web_cloud/domains/dns_zone_edit)

[Mettre en ligne un site Internet sur son hébergement web.](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).