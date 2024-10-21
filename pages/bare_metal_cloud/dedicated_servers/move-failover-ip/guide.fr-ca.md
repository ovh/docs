---
title:  Déplacer une Additional IP
excerpt: "Découvrez comment déplacer une Additional IP depuis l'espace client ou via les API OVHcloud"
updated: 2022-12-20
---

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr-ca/network/additional-ip/). Cela n'a pas d'impact sur ses fonctionnalités.
>

## Objectif

Les Additional IP peuvent être déplacées entres les services que vous utilisez. L'intérêt est de ne pas perdre votre réputation, votre référencement et d'améliorer la continuité de service de vos applications et systèmes.

Cette technologie vous permet d’échanger les adresses IP d'une solution à l'autre en moins d'une minute, pratiquement sans aucune interruption pour vos utilisateurs. Elle peut être utilisée lors des migrations de services (déplacement des projets de l'environnement de développement à celui de production, par exemple) ou lors du basculement vers un serveur de secours en cas de défaillance.

> [!primary]
> Une Additional IP ne peut pas être déplacée d'une zone à l'autre. Par exemple, une IP située dans le datacenter SBG pourra être déplacée vers GRA ou RBX mais ne pourra pas être déplacée vers BHS.
>
> La migration ne fonctionne que pour des blocs entiers, il n'est pas possible de migrer des IP individuelles au sein d'un bloc.

**Découvrez comment déplacer une Additional IP depuis votre espace client OVHcloud ou via les API OVHcloud.**

## Prérequis

- Disposer d'un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/){.external} dans votre espace client OVHcloud.
- Disposer d'une [adresse Additional IP](https://www.ovhcloud.com/fr-ca/bare-metal/ip/).
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr-ca/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr-ca/compare/) pour plus d’informations.
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

### Déplacer une IP depuis l'espace client OVHcloud

> [!warning]
> Seul un bloc de taille unique (/32) pourra être déplacé depuis un serveur dédié vers un VPS.
>

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), cliquez sur le menu `Bare Metal Cloud`{.action} puis ouvrez la section `Network`{.action}. Ensuite, cliquez sur `IP`{.action}.

Cliquez sur l'onglet `Additional IP`{.action}.

![gerer IP](images/manageIPs2022.png){.thumbnail}

Cliquez sur le bouton `...`{.action} à droite de l'adresse IP à déplacer puis sur `Déplacer Additional IP`{.action}.

![espace client](images/moveadditionalIP.png){.thumbnail}

Dans le menu contextuel qui apparaît, sélectionnez le service vers lequel déplacer l'adresse IP.

Cliquez sur `Suivant`{.action} puis sur `Valider`{.action}.

![espace client](images/moveadditionalIP2.png){.thumbnail}

### Déplacer une IP via les API

Connectez-vous sur la page web des [API OVHcloud](https://ca.api.ovh.com/).

Dans un premier temps, il est préférable de vérifier si l'adresse IP peut bien être déplacée.
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

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.