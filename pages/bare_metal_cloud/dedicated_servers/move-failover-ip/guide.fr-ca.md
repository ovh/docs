---
title: "Déplacer une Additional IP sur un serveur dédié"
excerpt: "Déplacez une adresse Additional IP entre serveurs dédiés via l'espace client OVHcloud ou l'API"
updated: 2026-01-21
---

> [!primary]
> Cet article concerne le déplacement d'adresses Additional IPv4, qui est limité selon des [restrictions régionales](#limitations).
> 
> La configuration d'Additional IP dans un vRack (réseau privé) contourne ces restrictions régionales en perdant la dépendance à une seule région, tout en facilitant l'interconnexion sur une large gamme de services OVHcloud.
>
> Apprenez à configurer des Additional IP dans un vRack avec nos guides pour [IPv4](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack) et [IPv6](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Objectif

Les Additional IP peuvent être déplacées entre les services que vous utilisez. L'intérêt est de ne pas perdre votre réputation, votre référencement et d'améliorer la continuité de service de vos applications et systèmes.

Cette technologie vous permet d’échanger les adresses IP d'une solution à l'autre en moins d'une minute, pratiquement sans aucune interruption pour vos utilisateurs. Elle peut être utilisée lors des migrations de services (déplacement des projets de l'environnement de développement à celui de production, par exemple) ou lors du basculement vers un serveur de secours en cas de défaillance.

> [!primary]
> Vous pouvez attribuer vos blocs d’adresses IP à n’importe quel service compatible au sein d’une région. Les blocs d’adresses IP d’une région peuvent être déplacés d’un centre de données à un autre, mais uniquement au sein de cette même région.
>
> Sauf pour les 3 régions eu-west-gra, eu-west-rbx et eu-west-sbg, où les blocs d'adresses IP peuvent être déplacés entre ces trois régions.
>
> Une région est une zone géographique composée d'un ou de plusieurs datacenters.
>
> La migration ne fonctionne que pour des blocs entiers, il n'est pas possible de migrer des IP individuelles au sein d'un bloc.
>

**Découvrez comment déplacer une Additional IP depuis votre espace client OVHcloud ou via les API OVHcloud, y compris d'un compte So you Start vers un compte OVHcloud.**

## Prérequis

- Disposer d'un [serveur dédié](/links/bare-metal/bare-metal) dans votre espace client OVHcloud.
- Disposer d'une [adresse Additional IP](/links/network/additional-ip).

<!-- CP-NAV-START:network-public-ip -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [IP publiques](/links/control-panel/network-public-ip)
- **Pour accéder à vos services :** `Network`{.action} > `Adresses IP Publiques`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about).
>
> Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d’informations.
>

> [!warning]
> Si l'adresse Additional IP, ou une des adresses IP du bloc, a une MAC virtuelle affectée, le serveur cible doit supporter la fonctionnalité des MAC virtuelles.
> Consultez [ce guide](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac) afin de le déterminer.
>
> Dans le cas contraire, les MAC virtuelles doivent être supprimées des Additional IP avant le déplacement.

## En pratique

> [!primary]
> Lorsqu’un bloc IP contenant des adresses MAC virtuelles uniques est déplacé entre deux serveurs, ces adresses sont temporairement suspendues. Elles apparaîtront sur le nouveau serveur une fois le déplacement effectué.
>
> D’autre part, les blocs contenant des adresses MAC virtuelles en double ne peuvent pas être déplacés. Vous devez d'abord supprimer l'adresse MAC virtuelle en double sur le bloc à déplacer.
>
> Si un bloc IP est déplacé/ajouté dans le vRack, il n’est plus lié à un serveur physique. Dans ce cas, toute adresse MAC virtuelle sera perdue pendant le transfert.
>

### Blocs IP géolocalisés

La géolocalisation d'une adresse IP est indépendante de sa région de rattachement.

Si vous commandez un bloc Additional IP sur un serveur mais que vous choisissez une localisation différente (géolocalisation) pour le bloc IP, ce bloc IP ne peut pas être déplacé vers un autre serveur situé dans le même pays que ce bloc. Par exemple, un bloc Additional IP géolocalisé en Pologne (eu-central-war) et commandé sur un serveur situé dans un datacenter en France (eu-west-gra) ne peut pas être déplacé vers un serveur situé dans un datacenter en Pologne (eu-central-war). Le bloc IP ne peut être déplacé que vers un serveur éligible situé dans un datacenter en France.

### Déplacer une Additional IP depuis l'espace client OVHcloud

> [!warning]
> Seul un bloc de taille unique (/32) pourra être déplacé depuis un serveur dédié vers un VPS.
>

Vous pouvez utiliser le menu déroulant sous **Mes adresses IP publiques et services associés** et sélectionner `Toutes les Additional IP`{.action} pour filtrer vos services, ou taper directement l'adresse IP désirée dans la barre de recherche.

![espace client](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/manage_additional_ips_new.png){.thumbnail}

Cliquez sur le bouton `⁝`{.action} à droite de l'adresse IP à déplacer puis sur `Déplacer Additional IP`{.action}.

![Menu contextuel pour deplacer une Additional IP](images/move_ip_1_new.png){.thumbnail}

Dans le menu contextuel qui apparaît, sélectionnez le service vers lequel déplacer l'adresse IP.

Cliquez sur `Suivant`{.action} puis sur `Valider`{.action}.

![Selectionner le service de destination pour l'Additional IP](images/move_ip_2_new.png){.thumbnail}

> [!warning]
> Veuillez noter que pour certains produits, les adresses IP (ou blocs) doivent d'abord être déplacées vers un **Parking IP** (un emplacement de stockage temporaire), avant de pouvoir être déplacées vers le produit souhaité.
>
> Pour déplacer des blocs IP vers un réseau vRack spécifique, veuillez utiliser **l'interface de gestion vRack**, à laquelle vous pouvez accéder en cliquant sur `Network`{.action} dans le menu situé à gauche de l'écran, puis sur `Réseau privé vRack`{.action}.
>

### Déplacer une Additional IP via les API

Connectez-vous sur la page web des [API OVHcloud](/links/api).

Vérifiez d'abord si l'adresse IP peut être déplacée.
<br>Pour vérifier si l'IP peut être déplacée vers un de vos serveurs dédiés, utilisez l'appel suivant :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName` : la référence du serveur dédié de destination
- `ip` : l'adresse Additional IP à déplacer

Pour déplacer l'adresse IP, utilisez l'appel suivant :

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/ipMove
>

- `serviceName` : la référence du serveur dédié de destination
- `ip` : l'adresse Additional IP à déplacer

### Déplacer une Additional IP d'un compte So you Start vers un compte OVHcloud

Pour déplacer une Additional IP d'un compte SYS vers un compte OVHcloud, vous devez tenir compte de plusieurs éléments :

- Le déplacement d'une Additional IP entraîne des frais d'installation. L'adresse IP ne sera pas déplacée si la facture reste impayée.
- Il n'est pas possible de déplacer une Additional IP d'un compte OVHcloud vers un compte So you Start.
- Assurez-vous que le serveur vers lequel vous transférez l'adresse Additional IP se trouve dans la même région compatible que celle-ci. Consultez la section « Restrictions » ci-dessous.

Pour commencer, connectez-vous à votre compte So you Start et cliquez sur `IP`{.action} dans le tableau de bord principal.

![Section IP So you Start dans le tableau de bord](images/sys-ip-section.png){.thumbnail}

Cliquez sur le bouton de paramètres (en forme d'engrenage `⚙`{.action}) à côté de l'adresse IP correspondante et sélectionnez `Déplacer l'IP FO`{.action}.

![Option Deplacer l'IP failover dans le menu So you Start](images/move-ip-sys.png){.thumbnail}

Sélectionnez `Déplacer vers un service OVH`{.action}, entrez votre identifiant client OVHcloud et cliquez sur `Suivant`{.action}.

![Selectionner Deplacer vers un service OVH et saisir le NIC handle](images/move-to-ovh.png){.thumbnail}

Cela générera un code, sauvegardez-le.

![Code token généré pour le transfert d'IP](images/token-id.png){.thumbnail}

Ensuite, [connectez-vous à votre compte OVHcloud](/links/manager), cliquez sur `Network`{.action} dans le menu situé à gauche de l'écran, puis sur `Adresses IP Publiques`{.action}.

Cliquez sur le bouton de paramètres (en forme d'engrenage `⚙`{.action}) à droite et sélectionnez `Importer mes adresses IP de Sys vers OVHcloud`{.action}.

![Option Importer des adresses IP de SyS vers OVHcloud](images/import-ip-to-ovh.png){.thumbnail}

Dans la fenêtre contextuelle, entrez l'adresse Additional IP (ou le bloc) et le code récupéré depuis le compte So you Start, puis cliquez sur `Suivant`{.action}.

![Saisir l'Additional IP et le token pour l'import](images/Step-1.png){.thumbnail}

Sélectionnez le serveur de destination et cliquez sur `Suivant`{.action}. Si le serveur dédié est compatible avec l'adresse IP, un message vert s'affichera. Dans le cas contraire, vous recevrez un message d'erreur.

![Selectionner le serveur de destination avec vérification de compatibilite](images/Step-2.png){.thumbnail}<br>
![Message de confirmation de compatibilite du serveur](images/Step-2.1.png){.thumbnail}

Dans la fenêtre suivante, la durée est automatiquement sélectionnée et les frais sont affichés. Cliquez sur `Suivant`{.action} pour continuer.

![Resume de la duree et des frais pour le transfert d'IP](images/Step-3.png){.thumbnail}

Cochez la case `Accepter les contrats`{.action} pour accepter les conditions d'utilisation après les avoir lues. Cliquez ensuite sur `Suivant`{.action}.

![Case a cocher d'acceptation des contrats pour le transfert d'IP](images/Step-4.png){.thumbnail}

Prenez note du récapitulatif de la commande et cliquez sur `Confirmer`{.action} pour la valider.

![Resume et confirmation de la commande pour le transfert d'IP](images/Step-5.png){.thumbnail}

Vous serez redirigé vers une nouvelle page pour effectuer le paiement.

Une fois le paiement effectué, votre Additional IP sera transférée vers votre compte OVHcloud et associée au serveur sélectionné. Ce processus peut prendre du temps.

### Restrictions <a name="limitations"></a>

Veuillez noter qu'il existe certaines limitations lors du déplacement d'un bloc d'adresses IP. Le tableau ci-dessous montre la compatibilité entre les régions.

Pour plus d'informations, consultez notre liste de [régions disponibles](/links/network/additional-ip).

| Régions  | eu-west-par | eu-west-gra | eu-west-rbx | eu-west-sbg | eu-west-lim | eu-central-war | eu-west-eri | ca-east-bhs | ca-east-tor | ap-southeast-sgp | ap-southeast-syd |
|----------------|-------------|-------------|-------------|-------------|-------------|----------------|-------------|-------------|-------------|-------------|-------------|
| eu-west-par    |      ✅        |      ❌       |     ❌        |     ❌        |      ❌       |      ❌          |       ❌       |       ❌      |     ❌      | ❌      |     ❌      |
| eu-west-gra    |       ❌      |       ✅       |      ✅       |      ✅      |       ❌       |       ❌         |       ❌        |     ❌        |    ❌        | ❌      |     ❌      |
| eu-west-sbg    |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-rbx |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-lim    |        ❌       |      ❌       |      ❌       |     ❌        |     ✅       |      ❌         |      ❌        |     ❌        |     ❌       | ❌      |     ❌      |
| eu-central-war |      ❌       |      ❌       |     ❌       |      ❌       |      ❌        |       ✅         |       ❌       |       ❌       |       ❌        | ❌      |     ❌      |
| eu-west-eri    |         ❌      |       ❌      |        ❌     |       ❌     |      ❌       |       ❌         |     ✅        |      ❌         |      ❌       | ❌      |     ❌      |
| ca-east-bhs    |     ❌        |      ❌       |    ❌         |        ❌    |        ❌       |      ❌          |       ❌      |     ✅        |      ❌       | ❌      |     ❌      |
| ca-east-tor    |    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ✅     | ❌      |     ❌      |
| ap-southeast-sgp|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ✅       |     ❌      |
| ap-southeast-syd|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ❌      |     ✅       |


## Aller plus loin

[Configurer son adresse IP en alias](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing)

[Configurer des Additional IP en mode bridge sur vos machines virtuelles](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Échangez avec notre [communauté d'utilisateurs](/links/community).
