---
title: "Modifier les serveurs DNS d'un nom de domaine OVHcloud"
excerpt: 'Apprenez à modifier les serveurs DNS de votre nom de domaine enregistré chez OVHcloud'
updated: 2024-07-26
---

## Objectif

Le sigle **DNS** (**D**omain **N**ame **S**ystem), est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

Consultez nos guides « [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information) » et « [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information) » pour plus d'informations.

**Découvrez comment modifier les serveurs DNS pour votre nom de domaine OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Posséder un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Disposer des autorisations [appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine depuis votre [espace client OVHcloud](/links/manager).
- Être connecté à votre [espace client OVHcloud](/links/manager).

> [!primary]
>
> Un **bureau d'enregistrements** est une organisation autorisée à vendre des noms de domaines. OVHcloud fait partie de ces **bureaux d'enregistrements**.
>
> Si votre nom de domaine n'est pas enregistré auprès d'OVHcloud, vous devrez modifier les serveurs DNS auprès du **bureau d'enregistrements** où est actuellement enregistré votre nom de domaine.
>

## En pratique

> [!alert]
>
> **Faites attention lorsque vous modifiez les serveurs DNS d’un nom de domaine.**
>
> Une erreur de manipulation peut rendre votre site web inaccessible ou empêcher vos adresses de messagerie de recevoir de nouveaux e-mails. Comprendre les conséquences d’une telle modification vous permettra de mieux appréhender les changements que vous allez opérer.
>

Lorsque vous modifiez les serveurs DNS de votre nom de domaine, vous changez sa configuration DNS. La nouvelle configuration DNS remplace l'ancienne et est stockée sur les serveurs DNS nouvellement définis. Techniquement, le nom de domaine utilise ensuite une nouvelle zone DNS.

Toutefois, il est essentiel de prendre en compte les points suivants :

- Lors d'un changement de serveur DNS (par exemple, un DNS externe par un DNS OVHCloud), le contenu de l'ancienne configuration / zone DNS n'est pas automatiquement répliqué dans la nouvelle. Assurez-vous que votre nouvelle zone DNS contient tous les enregistrements DNS requis pour que les services associés à votre nom de domaine fonctionnent correctement (par exemple, votre site web et vos adresses de messagerie).
- Si vous ne souhaitez pas modifier les serveurs DNS mais un ou plusieurs enregistrements de votre configuration / zone DNS actuelle, consultez notre guide : « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».
- Certaines organisations, les registres, qui gèrent les extensions de noms de domaine, ont des exigences particulières concernant les serveurs DNS (quantité de serveurs de noms, valeur des enregistrements, etc.). En cas de doute, vérifiez auprès du registre responsable du domaine.

### Accéder à la gestion des serveurs DNS OVHcloud <a name="access-dns-servers"></a>

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

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Modifier les serveurs DNS <a name="modify-dns-servers"></a>

> [!primary]
>
> A partir d'ici, toutes les fonctionnalités décrites ci-après s'effectuent depuis l'onglet `Serveurs DNS`{.action} mentionné dans la [partie précédente](#access-dns-servers) de ce guide.
>

Pour modifier les serveurs DNS, cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite (ou en dessous du tableau si vous utilisez un petit écran).

Une nouvelle page apparaît et trois options de modification s'offrent à vous.

//////// Placer Screen EN ici

#### Option 1 - Utiliser les DNS par défaut d'OVHcloud

//////// Placer screen EN ici 

Cette option permet d'appliquer automatiquement la configuration de la zone DNS OVHcloud existante pour votre nom de domaine. Au préalable, assurez-vous qu'une zone DNS existe bien chez OVHcloud pour votre nom de domaine.

> [!primary]
>
> Si besoin, consultez les guides « [Modifier une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » et/ou « [Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create) » pour vérifier si une zone DNS OVHcloud existe ou non pour votre nom de domaine.
>

Pour utiliser les serveurs DNS par défaut d'OVHcloud, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :

//////// Placer screen EN ici 

Elle vous indique le nom des 2 serveurs DNS qui vont être appliqués à votre nom de domaine. Ils doivent avoir l'une des 2 formes suivantes :

- `nsXX.ovh.net` et `dnsXX.ovh.net` (où chaque `X` représente un chiffre compris entre **0** et **9**)
- `ns200.anycast.me` et `dns200.anycast.me` (si vous avez souscrit à l'option [DNS anycast](/links/web/domains-options))

S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.

Ainsi, les serveurs DNS déclarés dans les enregistrements de type NS de la zone DNS OVHcloud seront utilisés pour votre nom de domaine. 

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront inactifs pour votre nom de domaine. La zone DNS OVHcloud deviendra la zone DNS active pour votre nom de domaine.

#### Option 2 - Utiliser mes propres DNS

//////// Placer screen EN ici 

Cette option permet de déclarer les serveurs DNS d'une zone DNS non gérée depuis l'espace client OVHcloud.

Cela peut être les serveurs DNS externes fournis par l'un de nos concurrents voire vos propres serveurs DNS si vous hébergez votre zone DNS sur l'un de vos serveurs. Ces serveurs DNS peuvent aussi être hébergés sur une infrastructure OVHcloud (serveur dédié, VPS, etc.).

> [!warning]
>
> Chaque encadré de saisie (visible dans la capture écran précédente) ne peut contenir qu'un seul serveur DNS à la fois. Un serveurs DNS correspond donc à un encadré.
>
> De plus, une note d'information sur fond bleu, située juste au dessus du premier encadré de saisie, vous indique le nombre minimum et le nombre maximum de serveurs DNS que vous pouvez utiliser pour votre nom de domaine. Ces valeurs varient selon l'extension de votre nom de domaine.
>

Pour renseigner votre propre serveur DNS, remplissez les 2 formulaires de l'encadré comme suit :

- `Serveur DNS` : nom du serveur DNS à appliquer à votre nom de domaine.
- `IP associée (facultatif)` : adresse IP du serveur DNS renseigné.

Cliquez sur le bouton `+`{.action} situé à droite des 2 formulaires. Il permet d'ajouter le serveur DNS et de faire apparaître un nouvel encadré de saisie juste en dessous du précédent.

Réitérez l'opération autant de fois que vous avez de serveurs DNS à ajouter. Ceci en respectant les limites indiquées dans la note d'information. 
N'oubliez pas de cliquer sur le bouton `+`{.action} pour chaque serveur DNS afin de valider la saisie du serveur DNS à ajouter.

Une fois tous vos propres serveurs DNS ajoutés, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :

//////// Placer screen EN ici 

Elle vous indique le nom des serveurs DNS qui vont être appliqués à votre nom de domaine.
S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront inactifs pour votre nom de domaine. La zone DNS présente sur vos propres serveurs DNS deviendra la zone DNS active pour votre nom de domaine.

#### Option 3 - Utiliser les DNS OVHcloud et mes propres DNS

//////// Placer screen EN ici 

> [!warning]
>
> 1 : Soyez vigilant si vous décidez d'utiliser cette dernière option. En effet, elle nécessite des connaissances avancées sur le fonctionnement du réseau DNS, des serveurs DNS et des zones DNS.
>
> 2 : L'option [DNSSEC](/pages/web_cloud/domains/dns_dnssec) doit être désactivée pour combiner l'utilisation de vos propres serveurs DNS avec les DNS d'OVHcloud.
>
> 3 : Veillez à ne pas mélanger un groupe de serveurs DNS avec un autre.
>
> Par exemple, *dns19.ovh.net* et *ns19.ovh.net* correspondent à un groupe de serveurs DNS OVHcloud, ils vont de pair et sont synchronisés. Si vous y ajoutez des serveurs DNS externes à OVHcloud (ou d'un groupe de serveurs DNS OVHcloud différent), la résolution DNS se fera de manière aléatoire entre les serveurs DNS OVHcloud et les serveurs DNS externes renseignés.
>
> Chez OVHCloud, les groupes de serveurs DNS sont identifiables à l'aide du numéro présent dans les noms des serveurs. Deux serveurs DNS OVHcloud font partie d'un même groupe de serveurs DNS dès lors qu'ils partagent le même numéro. Par exemple, *dns19.ovh.net* et *ns19.ovh.net*.
>

Cette option permet de combiner l'utilisation de vos propres serveurs DNS tout en conservant les serveurs DNS OVHcloud actifs pour votre nom de domaine. En réalisant cette combinaison, cela permet, par exemple, d'assurer d'avantage l'accès à aux différents services associés à votre nom de domaine (hébergement web, serveurs e-mail, etc.). En effet et toujours par exemple, si un groupe de serveurs DNS devient indisponible pendant quelques minutes, les autres serveurs DNS déclarés peuvent prendre le relais.

Cependant, vérifiez bien que les configurations des zones DNS présentes sur les différents serveurs DNS concernés sont correctement paramétrées pour fonctionner toutes ensemble. Effectivement, la plupart du temps, tous les serveurs DNS seront opérationnels. Ils seront tous en capacité de répondre aux demandes qui leurs seront faites et ce, aléatoirement sur le réseau DNS.

> [!warning]
>
> Chaque encadré de saisie (visible dans la capture écran précédente) ne peut contenir qu'un seul serveur DNS à la fois. Un serveurs DNS correspond donc à un encadré.
>
> De plus, une note d'information sur fond bleu, située juste au dessus du premier encadré de saisie, vous indique le nombre minimum et le nombre maximum de serveurs DNS que vous pouvez utiliser pour votre nom de domaine. Ces valeurs varient selon l'extension de votre nom de domaine.
>

Pour renseigner votre propre serveur DNS, remplissez les 2 formulaires de l'encadré comme suit :

- `Serveur DNS` : nom du serveur DNS à appliquer à votre nom de domaine.
- `IP associée (facultatif)` : adresse IP du serveur DNS renseigné.

Cliquez sur le bouton `+`{.action} situé à droite des 2 formulaires. Il permet d'ajouter le serveur DNS et de faire apparaître un nouvel encadré de saisie juste en dessous du précédent.

Réitérez l'opération autant de fois que vous avez de serveurs DNS à ajouter. Ceci en respectant les limites indiquées dans la note d'information. 
N'oubliez pas de cliquer sur le bouton `+`{.action} pour chaque serveur DNS afin de valider la saisie du serveur DNS à ajouter.

Une fois tous vos propres serveurs DNS ajoutés, cliquez sur `Appliquer la configuration`{.action}. La fenêtre suivante apparaît :

//////// Placer screen EN ici 

Elle vous indique le nom des serveurs DNS qui vont être appliqués à votre nom de domaine.
S'ils correspondent à ceux que vous souhaitez appliquer, cliquez sur `Appliquer`{.action}.

Les anciens serveurs DNS déclarés et la configuration DNS qu'ils appliquaient seront inactifs pour votre nom de domaine. Les zones DNS présentes sur vos propres serveurs DNS mais ausi celle présente sur les serveurs DNS OVHcloud deviendront les zones DNS actives pour votre nom de domaine.

### Prise en compte des modifications DNS

Une fois les modifications requises effectuées, vous devez attendre qu'elles soient pleinement effectives. Deux périodes successives doivent être prises en compte :

- La modification apportée côté OVHcloud doit être prise en compte par le *registre* qui gère votre extension de nom de domaine (par exemple, le regitre des extensions en *.fr*). Vous pouvez suivre la progression de cette opération dans votre [espace client OVHcloud](/links/manager). Pour cela, rendez-vous dans la partie `Web Cloud`{.action}, accédez à la section `Noms de domaine`{.action} dans la colonne de gauche puis cliquez sur `Opérations en cours`{.action}.
- Une fois que la modification a été prise en compte par l'organisation qui gère votre extension de nom de domaine, vous devez attendre un maximum de **48 heures** pour que les modifications que vous avez apportées soient entièrement propagées.

## Aller plus loin

[Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Modification d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).