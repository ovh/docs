---
title: "Modifier les serveurs DNS d'un nom de domaine OVHcloud"
excerpt: "Découvrez comment modifier les serveurs DNS de votre nom de domaine enregistré chez OVHcloud"
updated: 2024-09-11
---

## Objectif

Le sigle **DNS** (**D**omain **N**ame **S**ystem), est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

Consultez nos guides « [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information) » et « [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information) » pour plus d'informations.

**Découvrez comment modifier les serveurs DNS pour votre nom de domaine OVHcloud en 3 étapes.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Posséder un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Disposer des autorisations [appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine depuis votre [espace client OVHcloud](/links/manager).
- Être connecté à votre [espace client OVHcloud](/links/manager).

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

- Lors d'un changement de serveur DNS (par exemple, un DNS externe par un DNS OVHCloud), le contenu de l'ancienne configuration / zone DNS n'est pas automatiquement répliqué dans la nouvelle. Assurez-vous que votre nouvelle zone DNS contient tous les enregistrements DNS requis pour que les services associés à votre nom de domaine fonctionnent correctement (par exemple, votre site web et vos adresses de messagerie).
- Si vous ne souhaitez pas modifier les serveurs DNS mais un ou plusieurs enregistrements de votre configuration / zone DNS actuelle, consultez notre guide : « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».
- Certaines organisations, les registres, qui gèrent les extensions de noms de domaine, ont des exigences particulières concernant les serveurs DNS (quantité de serveurs de noms, valeur des enregistrements, etc.). En cas de doute, vérifiez auprès du registre responsable du domaine.

### Étape 1 - Accéder à la gestion des serveurs DNS OVHcloud <a name="access-dns-servers"></a>

Pour cela, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Noms de domaine`{.action}.
4. Sélectionnez le nom de domaine concerné.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Serveurs DNS`{.action}.

Le tableau qui s'affiche contient les serveurs DNS actuellement définis par OVHcloud pour votre nom de domaine. Plusieurs serveurs DNS peuvent être répertoriés, chacun possédant sa propre ligne dans le tableau.

> [!primary]
>
> Lorsque vous utilisez les serveurs DNS OVHcloud, les numéros présents dans les noms des serveurs n'ont aucun lien avec le ou les services que vous utilisez. Seule l'option [DNS anycast](/links/web/domains-options) utilise des serveurs DNS spécifiques (`ns200.anycast.me` et `dns200.anycast.me`). Lorsqu'ils sont souscrits, ils vous sont automatiquement attribués.

![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Étape 2 - Modifier les serveurs DNS <a name="modify-dns-servers"></a>

> [!primary]
>
> Toutes les fonctionnalités décrites ci-dessous s'effectuent depuis l'onglet `Serveurs DNS`{.action} mentionné dans l'[étape 1](#access-dns-servers) de ce guide.
>

Pour modifier les serveurs DNS, cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite du tableau « serveurs DNS ». En fonction de la résolution de votre écran, le bouton peut se trouver en dessous du tableau.

Une nouvelle page apparaît et trois options de modification s'offrent à vous.

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers.png){.thumbnail}

#### Option 1 - Utiliser les DNS par défaut d'OVHcloud

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}

Cette option permet d'appliquer automatiquement la configuration de la zone DNS OVHcloud existante pour votre nom de domaine. Au préalable, assurez-vous qu'une zone DNS existe bien chez OVHcloud pour votre nom de domaine.

> [!primary]
>
> Si besoin, consultez les guides « [Modifier une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » et/ou « [Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create) » pour vérifier si une zone DNS OVHcloud existe pour votre nom de domaine.

Pour utiliser les serveurs DNS par défaut d'OVHcloud, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}

Elle résume le nom des 2 serveurs DNS qui vont être appliqués à votre nom de domaine. Ils doivent avoir l'une des 3 formes suivantes :

- `nsXX.ovh.net` et `dnsXX.ovh.net` ou, `nsXXX.ovh.net` et `dnsXXX.ovh.net` (où chaque `X` représente un chiffre compris entre **0** et **9**)
- `nsXX.ovh.ca` et `dnsXX.ovh.ca` ou, `nsXXX.ovh.ca` et `dnsXXX.ovh.ca` (où chaque `X` représente un chiffre compris entre **0** et **9**)
- `ns200.anycast.me` et `dns200.anycast.me` (si vous avez souscrit à l'option [DNS anycast](/links/web/domains-options))

S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.

Ainsi, les 2 serveurs DNS déclarés (dans les enregistrements de type NS de la zone DNS OVHcloud) seront utilisés pour votre nom de domaine. 

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront désactivés pour votre nom de domaine. La zone DNS OVHcloud deviendra la zone DNS active pour votre nom de domaine.

#### Option 2 - Utiliser mes propres DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}

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
>

Pour renseigner l'un de vos propres serveurs DNS, remplissez les 2 formulaires de l'encadré comme indiqué ci-dessous :

- `Serveur DNS` : nom du serveur DNS à appliquer à votre nom de domaine.
- `IP associée (facultatif)` : adresse IP (IPv4 ou IPv6) du serveur DNS renseigné. Vous ne pouvez renseigner qu'**une seule adresse IP** dans ce formulaire.

> [!warning]
>
> Chaque encadré de saisie (visible dans la capture d'écran précédente) ne peut contenir qu'**un seul** serveur DNS à la fois. Un serveur DNS correspond donc à un encadré.
>
> De plus, une note d'information sur fond bleu, située au dessus du premier encadré, indique l'intervalle de serveurs DNS que vous pouvez déclarer pour votre nom de domaine. Ces valeurs varient selon l'extension du nom de domaine.

Une fois les informations renseignées, cliquez sur le bouton `+`{.action} situé à droite des 2 formulaires. Il permet d'ajouter le serveur DNS et fait apparaître un nouvel encadré de saisie en dessous du précédent.

Réitérez l'opération autant de fois que vous avez de serveurs DNS à ajouter. Ceci en respectant les limites indiquées dans la note d'information. 
Cliquez sur le bouton `+`{.action} pour chaque serveur DNS afin d'en valider la saisie et l'ajout.

Dès que tous vos propres serveurs DNS sont ajoutés, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}

Elle résume les noms des serveurs DNS qui vont être appliqués à votre nom de domaine.
S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront désactivés pour votre nom de domaine. La zone DNS déclarée sur vos propres serveurs DNS deviendra la zone DNS active pour votre nom de domaine.

#### Option 3 - Utiliser les DNS OVHcloud et mes propres DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}

Cette option permet de combiner l'utilisation de vos propres serveurs DNS tout en conservant les serveurs DNS OVHcloud actifs pour votre nom de domaine. En réalisant cette combinaison, cela permet, par exemple, d'assurer d'avantage l'accès aux différents services associés à votre nom de domaine (hébergement web, serveurs e-mail, etc.). En effet et toujours par exemple, si un groupe de serveurs DNS devient indisponible pendant quelques minutes, les autres serveurs DNS déclarés peuvent prendre le relais.

Cependant, vérifiez bien que les configurations des zones DNS présentes sur les différents serveurs DNS concernés sont correctement paramétrées pour fonctionner toutes ensemble. Effectivement, la plupart du temps, tous les serveurs DNS seront opérationnels. Ils seront tous en capacité de répondre aux demandes qui leurs seront faites et ce, aléatoirement sur le réseau DNS.

> [!warning]
>
> 1. Soyez vigilant si vous décidez d'utiliser cette dernière option. En effet, elle nécessite des connaissances avancées sur le fonctionnement du réseau DNS, des serveurs DNS et des zones DNS.
>
> 2. L'option [DNSSEC](/pages/web_cloud/domains/dns_dnssec) doit être désactivée pour combiner l'utilisation de vos propres serveurs DNS avec les DNS d'OVHcloud.
>
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
>

Pour renseigner l'un de vos propres serveurs DNS, remplissez les 2 formulaires de l'encadré comme ci-dessous :

- `Serveur DNS` : nom du serveur DNS à appliquer à votre nom de domaine.
- `IP associée (facultatif)` : adresse IP (IPv4 ou IPv6) du serveur DNS renseigné. Vous ne pouvez renseigner qu'**une seule adresse IP** dans ce formulaire.

> [!warning]
>
> Chaque encadré de saisie (visible dans la capture d'écran précédente) ne peut contenir qu'**un seul** serveur DNS à la fois. Un serveur DNS correspond donc à un encadré.
>
> De plus, une note d'information sur fond bleu, située au dessus du premier encadré, indique l'intervalle de serveurs DNS que vous pouvez déclarer pour votre nom de domaine. Ces valeurs varient selon l'extension du nom de domaine.

Une fois les informations renseignées, cliquez sur le bouton `+`{.action} situé à droite des 2 formulaires. Il permet d'ajouter le serveur DNS et fait apparaître un nouvel encadré de saisie en dessous du précédent.

Réitérez l'opération autant de fois que vous avez de serveurs DNS à ajouter, en respectant les limites indiquées dans la note d'information. 
Cliquez sur le bouton `+`{.action} pour chaque serveur DNS afin d'en valider la saisie et l'ajout.

Dès que tous vos propres serveurs DNS sont ajoutés, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}

Elle résume les noms des serveurs DNS qui vont être appliqués à votre nom de domaine.
S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront désactivés pour votre nom de domaine. Les zones DNS présentes sur vos propres serveurs DNS et sur les serveurs DNS OVHcloud deviendront celles actives pour votre nom de domaine.

### Étape 3 - Prise en compte de la modification des serveurs DNS

Une fois vos modifications effectuées, deux périodes successives doivent être prises en compte :

- Le *registre* qui gère votre extension de nom de domaine (par exemple, le regitre des extensions en *.fr*) doit être informé de la modification DNS apportée côté OVHcloud. Suivez la progression de cette opération dans votre [espace client OVHcloud](/links/manager). Pour cela, rendez-vous dans la partie `Web Cloud`{.action}, accédez à la section `Noms de domaine`{.action} dans la colonne de gauche, puis cliquez sur `Opérations en cours`{.action}.
- Une fois les informations du *registre* à jour, patientez un maximum de **48 heures** pour que les modifications apportées soient entièrement propagées et effectives.

## Aller plus loin

[Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Modification d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).