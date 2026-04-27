---
title: "Modifier les serveurs DNS d'un nom de domaine OVHcloud"
excerpt: "Découvrez comment modifier les serveurs DNS de votre nom de domaine enregistré chez OVHcloud"
updated: 2026-03-27
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

Le sigle **DNS** (**D**omain **N**ame **S**ystem), est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

Consultez nos guides « [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information) » et « [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information) » pour plus d'informations.

**Découvrez comment modifier les serveurs DNS pour votre nom de domaine OVHcloud en 3 étapes.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Être titulaire d'un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Disposer des autorisations [appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine.

<!-- CP-NAV-START:web-domains -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Noms de domaine](/links/control-panel/web-domains)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Noms de domaine`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Un **bureau d'enregistrements** est une organisation autorisée à vendre des noms de domaine. OVHcloud fait partie de ces **bureaux d'enregistrements**.
>
> Si votre nom de domaine n'est pas enregistré auprès d'OVHcloud, vous devrez modifier les serveurs DNS auprès du **bureau d'enregistrements** où est actuellement enregistré votre nom de domaine.
>

## En pratique

> [!alert]
>
> **Soyez vigilant lorsque vous modifiez les serveurs DNS d’un nom de domaine.**
>
> Une erreur de manipulation peut rendre votre site web inaccessible ou empêcher vos adresses de messagerie de recevoir de nouveaux e-mails. Comprendre les conséquences d’une telle modification vous permettra de mieux appréhender les changements que vous allez opérer.

Lorsque vous modifiez les serveurs DNS de votre nom de domaine, vous changez sa configuration DNS. La nouvelle configuration DNS remplace l'ancienne et est stockée sur les serveurs DNS nouvellement définis. Techniquement, le nom de domaine utilise ensuite une nouvelle zone DNS.

Toutefois, il est essentiel de prendre en compte les points suivants :

- Lors d'un changement de serveur DNS (par exemple, un DNS externe par un DNS OVHcloud), le contenu de l'ancienne configuration / zone DNS n'est pas automatiquement répliqué dans la nouvelle. Assurez-vous que votre nouvelle zone DNS contient tous les enregistrements DNS requis pour que les services associés à votre nom de domaine fonctionnent correctement (par exemple, votre site web et vos adresses de messagerie).
- Si vous ne souhaitez pas modifier les serveurs DNS mais un ou plusieurs enregistrements de votre configuration / zone DNS actuelle, consultez notre guide : « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».
- Certaines organisations, les registres, qui gèrent les extensions de noms de domaine, ont des exigences particulières concernant les serveurs DNS (quantité de serveurs de noms, valeur des enregistrements, etc.). En cas de doute, vérifiez auprès du registre responsable du nom de domaine.

### 1 - Modifier les serveurs DNS <a name="modify-dns-servers"></a>

Vous pouvez être amené à modifier les serveurs DNS de votre nom de domaine dans les situations suivantes :

- Vous souhaitez utiliser les serveurs DNS proposés par OVHcloud.
- Vous souhaitez utiliser vos propres serveurs DNS (ou ceux délivrés par un fournisseur DNS externe).
- Vous souhaitez combiner les serveurs DNS proposés par OVHcloud avec vos propres serveurs DNS.

> [!primary]
>
> Lorsque vous utilisez les serveurs DNS OVHcloud, les numéros présents dans les noms des serveurs n'ont aucun lien avec le ou les services que vous utilisez. Seule l'option [DNS anycast](/links/web/domains-options) utilise des serveurs DNS spécifiques (`ns200.anycast.me` et `dns200.anycast.me`). Lorsqu'ils sont souscrits, ils vous sont automatiquement attribués.

**Cliquez sur les options ci-dessous pour afficher le contenu.**

/// details | Option 1 - Utiliser les DNS par défaut d'OVHcloud

Cette option permet d'appliquer automatiquement la configuration de la zone DNS OVHcloud existante pour votre nom de domaine. Au préalable, assurez-vous qu'une zone DNS existe bien chez OVHcloud pour votre nom de domaine.

> [!primary]
>
> Si besoin, consultez les guides « [Modifier une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » et/ou « [Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create) » pour vérifier si une zone DNS OVHcloud existe pour votre nom de domaine.

<!-- CP-STEPS-START:option-1-ovhcloud-default-dns -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Noms de domaine](/links/control-panel/web-domains), puis choisissez le nom de domaine concerné.
>>
>> ![Noms de domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sélectionnez l'onglet `Serveurs DNS`{.action} une fois positionné sur le domaine concerné.
>>
> **Étape 3**
>>
>> Le tableau qui s'affiche contient les serveurs DNS actuellement définis par OVHcloud pour votre nom de domaine. Plusieurs serveurs DNS peuvent être répertoriés, chacun possédant sa propre ligne dans le tableau.
>>
>> ![Serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite du tableau « serveurs DNS ». En fonction de la résolution de votre écran, le bouton peut se trouver en dessous du tableau.
>>
> **Étape 4**
>>
>> ![Modification des serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}
>>
>> Pour utiliser les serveurs DNS par défaut d'OVHcloud, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :
>>
>> ![Modification des serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}
>>
>> Elle résume le nom des 2 serveurs DNS qui vont être appliqués à votre nom de domaine. Ils doivent avoir l'une des 3 formes suivantes :
>>
>> - `nsXX.ovh.net` et `dnsXX.ovh.net` ou, `nsXXX.ovh.net` et `dnsXXX.ovh.net` (où chaque `X` représente un chiffre compris entre **0** et **9**)
>> - `nsXX.ovh.ca` et `dnsXX.ovh.ca` ou, `nsXXX.ovh.ca` et `dnsXXX.ovh.ca` (où chaque `X` représente un chiffre compris entre **0** et **9**)
>> - `ns200.anycast.me` et `dns200.anycast.me` (si vous avez souscrit à l'option [DNS anycast](/links/web/domains-options))
>>
>> S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.
>>
>> Ainsi, les 2 serveurs DNS déclarés (dans les enregistrements de type NS de la zone DNS OVHcloud) seront utilisés pour votre nom de domaine.
<!-- CP-STEPS-END:option-1-ovhcloud-default-dns -->

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront désactivés pour votre nom de domaine. La zone DNS OVHcloud deviendra la zone DNS active pour votre nom de domaine.

///

/// details | Option 2 - Utiliser mes propres DNS

Cette option permet de déclarer les serveurs DNS d'une zone DNS non gérée depuis l'espace client OVHcloud.

Cela peut être, par exemple :

- les serveurs DNS externes fournis par l'un de nos concurrents ;
- vos propres serveurs DNS si vous hébergez votre zone DNS sur l'un de vos serveurs. Ces serveurs DNS peuvent aussi être hébergés sur une infrastructure OVHcloud (serveur dédié, VPS, etc.).

> [!success]
>
> Avant d'ajouter un serveur DNS, vérifiez que ce dernier **est joignable** et contient bien une zone DNS pour votre nom de domaine. Assurez-vous également que cette zone DNS contient tous les enregistrements de type « NS » vers tous les serveurs DNS que vous allez déclarer pour votre nom de domaine.
>
> Par exemple : vous souhaitez déclarer les serveurs DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* et *ns3.dns-server.tld* pour votre nom de domaine. Vous devrez alors vérifier que les trois enregistrements de type « NS » suivants sont bien présents dans les 3 zones DNS hébergées sur ces 3 serveurs DNS :
>
> - « Your own domain (or just an @) » IN NS ns1.dns-server.tld.
> - « Your own domain (or just an @) » IN NS ns2.dns-server.tld.
> - « Your own domain (or just an @) » IN NS ns3.dns-server.tld.

<!-- CP-STEPS-START:option-2-own-dns -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Noms de domaine](/links/control-panel/web-domains), puis choisissez le nom de domaine concerné.
>>
>> ![Noms de domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sélectionnez l'onglet `Serveurs DNS`{.action} une fois positionné sur le domaine concerné.
>>
> **Étape 3**
>>
>> Le tableau qui s'affiche contient les serveurs DNS actuellement définis par OVHcloud pour votre nom de domaine. Plusieurs serveurs DNS peuvent être répertoriés, chacun possédant sa propre ligne dans le tableau.
>>
>> ![Serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite du tableau « serveurs DNS ». En fonction de la résolution de votre écran, le bouton peut se trouver en dessous du tableau.
>>
> **Étape 4**
>>
>> ![Modification des serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}
>>
>> Pour renseigner l'un de vos propres serveurs DNS, remplissez les 2 formulaires de l'encadré comme indiqué ci-dessous :
>>
>> - `Serveur DNS` : nom du serveur DNS à appliquer à votre nom de domaine.
>> - `IP associée (facultatif)` : adresse IP (IPv4 ou IPv6) du serveur DNS renseigné. Vous ne pouvez renseigner qu'**une seule adresse IP** dans ce formulaire.
>>
>> > [!warning]
>> >
>> > Chaque encadré de saisie (visible dans la capture d'écran précédente) ne peut contenir qu'**un seul** serveur DNS à la fois. Un serveur DNS correspond donc à un encadré.
>> >
>> > De plus, une note d'information sur fond bleu, située au-dessus du premier encadré, indique l'intervalle de serveurs DNS que vous pouvez déclarer pour votre nom de domaine. Ces valeurs varient selon l'extension du nom de domaine.
>>
> **Étape 5**
>>
>> Une fois les informations renseignées, cliquez sur le bouton `+`{.action} situé à droite des 2 formulaires. Il permet d'ajouter le serveur DNS et fait apparaître un nouvel encadré de saisie en dessous du précédent.
>>
>> Réitérez l'opération autant de fois que vous avez de serveurs DNS à ajouter, en respectant les limites indiquées dans la note d'information.
>> Cliquez sur le bouton `+`{.action} pour chaque serveur DNS afin d'en valider la saisie et l'ajout.
>>
>> Dès que tous vos propres serveurs DNS sont ajoutés, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :
>>
>> ![Modification des serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}
>>
>> Elle résume les noms des serveurs DNS qui vont être appliqués à votre nom de domaine.
>> S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.
<!-- CP-STEPS-END:option-2-own-dns -->

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront désactivés pour votre nom de domaine. La zone DNS déclarée sur vos propres serveurs DNS deviendra la zone DNS active pour votre nom de domaine.

///

/// details | Option 3 - Utiliser les DNS OVHcloud et mes propres DNS

Cette option permet de combiner l'utilisation de vos propres serveurs DNS tout en conservant les serveurs DNS OVHcloud actifs pour votre nom de domaine. Cette combinaison permet, par exemple, d'assurer d'avantage l'accès aux différents services associés à votre nom de domaine (hébergement web, serveurs e-mail, etc.). En effet, si un groupe de serveurs DNS devient indisponible pendant quelques minutes, les autres serveurs DNS déclarés peuvent prendre le relais.

Cependant, vérifiez bien que les configurations des zones DNS présentes sur les différents serveurs DNS concernés sont correctement paramétrées pour fonctionner toutes ensemble. La plupart du temps, tous les serveurs DNS seront opérationnels. Ils seront tous en capacité de répondre aux demandes qui leurs seront faites aléatoirement sur le réseau DNS.

> [!warning]
>
> 1. Soyez vigilant si vous décidez d'utiliser cette dernière option. En effet, elle nécessite des connaissances avancées sur le fonctionnement du réseau DNS, des serveurs DNS et des zones DNS.
> 2. L'option [DNSSEC](/pages/web_cloud/domains/dns_dnssec) doit être désactivée pour combiner l'utilisation de vos propres serveurs DNS avec les DNS d'OVHcloud.
> 3. Veillez à ne pas mélanger un groupe de serveurs DNS OVHcloud avec un autre groupe de serveurs DNS OVHcloud. Par exemple, *dns19.ovh.net* et *ns19.ovh.net* correspondent à un groupe de serveurs DNS OVHcloud, ils vont de pair et sont synchronisés. Chez OVHcloud, les groupes de serveurs DNS sont identifiables à l'aide du numéro présent dans les noms des serveurs. Deux serveurs DNS OVHcloud font partie d'un même groupe de serveurs DNS dès lors qu'ils partagent le même numéro. Par exemple, *dns19.ovh.net* et *ns19.ovh.net*.

> [!success]
>
> Avant d'ajouter un serveur DNS, vérifiez que ce dernier **est joignable** et contient bien une zone DNS pour votre nom de domaine. Assurez-vous également que cette zone DNS contient tous les enregistrements de type « NS » vers tous les serveurs DNS que vous allez déclarer pour votre nom de domaine.
>
> Par exemple : vous souhaitez déclarer les serveurs DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* et *nsXX.ovh.net* pour votre nom de domaine. Vous devrez alors vérifier que les trois enregistrements de type « NS » suivants sont bien présents dans les 3 zones DNS hébergées sur ces 3 serveurs DNS :
>
> - « Your own domain (or just an @) » IN NS ns1.dns-server.tld.
> - « Your own domain (or just an @) » IN NS dnsXX.ovh.net.
> - « Your own domain (or just an @) » IN NS nsXX.ovh.net.

<!-- CP-STEPS-START:option-3-mixed-dns -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Noms de domaine](/links/control-panel/web-domains), puis choisissez le nom de domaine concerné.
>>
>> ![Noms de domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sélectionnez l'onglet `Serveurs DNS`{.action} une fois positionné sur le domaine concerné.
>>
> **Étape 3**
>>
>> Le tableau qui s'affiche contient les serveurs DNS actuellement définis par OVHcloud pour votre nom de domaine. Plusieurs serveurs DNS peuvent être répertoriés, chacun possédant sa propre ligne dans le tableau.
>>
>> ![Serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite du tableau « serveurs DNS ». En fonction de la résolution de votre écran, le bouton peut se trouver en dessous du tableau.
>>
>> ![Modification des serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}
>>
> **Étape 4**
>>
>> Pour renseigner l'un de vos propres serveurs DNS, remplissez les 2 formulaires de l'encadré comme ci-dessous :
>>
>> - `Serveur DNS` : nom du serveur DNS à appliquer à votre nom de domaine.
>> - `IP associée (facultatif)` : adresse IP (IPv4 ou IPv6) du serveur DNS renseigné. Vous ne pouvez renseigner qu'**une seule adresse IP** dans ce formulaire.
>>
>> > [!warning]
>> >
>> > Chaque encadré de saisie (visible dans la capture d'écran précédente) ne peut contenir qu'**un seul** serveur DNS à la fois. Un serveur DNS correspond donc à un encadré.
>> >
>> > De plus, une note d'information sur fond bleu, située au-dessus du premier encadré, indique l'intervalle de serveurs DNS que vous pouvez déclarer pour votre nom de domaine. Ces valeurs varient selon l'extension du nom de domaine.
>>
>> Une fois les informations renseignées, cliquez sur le bouton `+`{.action} situé à droite des 2 formulaires. Il permet d'ajouter le serveur DNS et fait apparaître un nouvel encadré de saisie en dessous du précédent.
>>
>> Réitérez l'opération autant de fois que vous avez de serveurs DNS à ajouter, en respectant les limites indiquées dans la note d'information.
>> Cliquez sur le bouton `+`{.action} pour chaque serveur DNS afin d'en valider la saisie et l'ajout.
>>
> **Étape 5**
>>
>> Dès que tous vos propres serveurs DNS sont ajoutés, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :
>>
>> ![Modification des serveurs DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}
>>
>> Elle résume les noms des serveurs DNS qui vont être appliqués à votre nom de domaine.
>> S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.
<!-- CP-STEPS-END:option-3-mixed-dns -->

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront désactivés pour votre nom de domaine. Les zones DNS présentes sur vos propres serveurs DNS et sur les serveurs DNS OVHcloud deviendront celles actives pour votre nom de domaine.

///

### 2 - Prise en compte de la modification des serveurs DNS

Une fois vos modifications effectuées, deux périodes successives doivent être prises en compte :

- Le *registre* qui gère votre extension de nom de domaine (par exemple, le registre des extensions en *.fr*) doit être informé de la modification DNS apportée côté OVHcloud. Suivez la progression de cette opération sur la page [Opérations en cours](/links/control-panel/web-ongoing-operations).
- Une fois les informations du *registre* à jour, patientez un maximum de **48 heures** pour que les modifications apportées soient entièrement propagées et effectives.

## Aller plus loin

[Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Modification d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
