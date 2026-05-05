---
title: 'OVHcloud Connect - Configurer le L3 avec routage statique'
excerpt: 'Configurez OVHcloud Connect L3 avec des routes IP statiques pour un routage prévisible entre votre réseau et OVHcloud'
updated: 2026-04-14
---

## Objectif

**Ce guide explique comment** configurer OVHcloud Connect en mode L3 avec routage statique. Cela implique deux niveaux de configuration :

1. **Configuration PoP** — La session L3 entre votre routeur et OVHcloud au niveau du Point de présence.
2. **Configuration supplémentaire AZ (network)** — Des routes statiques au sein de l’Availability Zone OVHcloud pour la distribution des routes.

> [!primary]
> Si vous préférez le routage dynamique avec BGP, consultez [Configurer OVHcloud Connect L3 avec BGP](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_bgp).

### Quand utiliser le routage statique plutôt que BGP

| Critère | Routage statique | BGP |
|---|---|---|
| **Nombre de préfixes** | Faible (1 à 5 routes) | Élevé ou en croissance |
| **Topologie réseau** | Simple, chemin unique | Complexe, multi-chemins, multi-AZ |
| **Bascule** | Manuelle — vous devez mettre à jour les routes vous-même | Automatique — BGP reconverge |
| **Maintenance** | Les routes doivent être mises à jour manuellement lorsque les sous-réseaux changent | Les routes sont mises à jour dynamiquement |
| **Complexité** | Faible — aucun protocole de routage à gérer | Plus élevée — nécessite la configuration de BGP |

Utilisez le routage statique lorsque vous disposez d’une configuration simple avec un faible nombre de préfixes stables et que vous n’avez pas besoin d’une bascule automatique.

## Prérequis

- Un [compte OVHcloud](/links/manager) actif
- Un service OVHcloud Connect actif (statut `active`)
- OVHcloud Connect associé à un vRack — voir [Associer OVHcloud Connect à votre vRack](/pages/network/ovhcloud_connect_revamp/3.5_associate_vrack)
- Une configuration AZ créée — voir [Configurer le réseau vRack](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup)
- Un sous-réseau de peering /30 (par exemple `192.0.2.0/30`)
- Des identifiants de l’API OVHcloud (Application Key, Application Secret, Consumer Key). Consultez le guide [Premiers pas avec l’API OVHcloud](/pages/manage-and-operate/api/first-steps).

## En pratique

### Vue d’ensemble

```
Votre routeur ── [ L3 au PoP ] ── Routeur PoP OVHcloud ── [ Routes statiques au DC ] ── Routeur vRack ── Services
                  peering /30                                next-hop + sous-réseau         (172.16.x.x)
```

- **Niveau PoP** : une session L3 avec un sous-réseau de peering /30 entre votre routeur et OVHcloud.
- **Niveau AZ** : des routes statiques définies par une IP next-hop et un sous-réseau de destination.

### Étape 1 — Identifier l’ID de votre interface

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/interface
>


### Étape 2 — Créer la configuration PoP (L3)

La configuration PoP établit la session L3 au niveau du Point de présence. Cette étape est identique que vous utilisiez BGP ou le routage statique au niveau de l’AZ.

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop
>

**Paramètres de la requête :**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `interfaceId` | long | Oui | ID de l’interface OVHcloud Connect |
| `type` | string | Oui | `l3` pour le mode Layer 3 |
| `customerBgpArea` | long | Non | Votre numéro d’AS (toujours requis pour le L3 — utilisé pour le peering au niveau du PoP) |
| `subnet` | ipv4Block | Non | Sous-réseau de peering /30. La première IP est OVHcloud, la seconde est la vôtre. |

**Exemple de requête :**


### Étape 3 — Vérifier la configuration PoP

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}
>


**Exemple de réponse :**

```json
{
  "id": 5678,
  "interfaceId": 101,
  "type": "l3",
  "customerBgpArea": 65001,
  "ovhBgpArea": 35540,
  "subnet": "192.0.2.0/30",
  "status": "active"
}
```

À partir de cette réponse :

| Paramètre | Valeur | Signification |
|---|---|---|
| **IP du pair OVHcloud** | `192.0.2.1` | Première IP du /30 |
| **Votre IP de pair** | `192.0.2.2` | Deuxième IP du /30 |

### Étape 4 — Créer la configuration supplémentaire AZ (statique)

Après la configuration PoP et une [configuration AZ](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup), créez une **configuration supplémentaire network** pour définir des routes statiques au sein de l’AZ.

> [!primary]
> Avec le routage statique, **VRRP reste actif** sur le point de terminaison de l’AZ. Les équipements OVHcloud A et B partagent une IP virtuelle (la deuxième adresse du sous-réseau de l’AZ, par exemple `172.16.1.1`). Pointez la passerelle par défaut de vos services vers cette IP virtuelle VRRP pour une bascule automatique entre les équipements.

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

**Paramètres de la requête :**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `type` | string | Oui | `network` pour le routage statique |
| `nextHop` | ipv4 | Non | Adresse IP next-hop pour la route statique |
| `subnet` | ipv4Block | Non | Sous-réseau de destination pour la route statique |

**Exemple de requête — router votre sous-réseau on-premises via le lien OVHcloud Connect :**


#### Ajouter plusieurs routes statiques

Créez une configuration supplémentaire par sous-réseau de destination :


#### Vérifier la configuration supplémentaire

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}
>

**Exemple de réponse :**

```json
{
  "id": 4568,
  "type": "network",
  "bgpNeighborArea": null,
  "bgpNeighborIp": null,
  "nextHop": "172.16.1.1",
  "subnet": "10.0.0.0/16",
  "status": "active"
}
```

#### Lister toutes les configurations supplémentaires d’une AZ

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>


### Étape 5 — Configurer les routes statiques sur votre routeur

Configurez votre routeur physique avec des routes statiques pointant les sous-réseaux d’AZ OVHcloud vers l’IP de peering OVHcloud Connect.

#### Cisco IOS / IOS-XE

```
! Interface facing OVHcloud
interface GigabitEthernet0/0
 description OVHcloud Connect
 ip address 192.0.2.2 255.255.255.252
 no shutdown

! Static routes to OVHcloud AZ subnets
ip route 172.16.1.0 255.255.255.0 192.0.2.1 name OVH-DC1-Production
ip route 172.16.2.0 255.255.255.0 192.0.2.1 name OVH-DC2-Production
ip route 172.16.10.0 255.255.255.0 192.0.2.1 name OVH-DC1-Management
```

#### Juniper JunOS

```
interfaces {
    ge-0/0/0 {
        description "OVHcloud Connect";
        unit 0 {
            family inet {
                address 192.0.2.2/30;
            }
        }
    }
}

routing-options {
    static {
        route 172.16.1.0/24 next-hop 192.0.2.1;
        route 172.16.2.0/24 next-hop 192.0.2.1;
        route 172.16.10.0/24 next-hop 192.0.2.1;
    }
}
```

### Étape 6 — Vérifier la connectivité

#### Depuis votre routeur

**Cisco :**

```
show ip route static
ping 172.16.1.1 source 192.0.2.2
traceroute 172.16.1.1 source 192.0.2.2
```

**Juniper :**

```
show route protocol static
ping 172.16.1.1 source 192.0.2.2
traceroute 172.16.1.1 source 192.0.2.2
```

**Résultats attendus :**

| Vérification | Sortie attendue |
|---|---|
| **Routes statiques présentes** | Routes vers 172.16.x.x via 192.0.2.1 dans la table de routage |
| **Le ping aboutit** | Réponse depuis la passerelle du sous-réseau d’AZ OVHcloud |
| **Traceroute** | Le trafic passe par 192.0.2.1 (PoP OVHcloud) |

#### Depuis l’API OVHcloud

Vérifiez l’état de l’interface :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/interface/{id}/status
>

Vérifiez le statut de la configuration PoP :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/status
>

#### Lancer un diagnostic

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/diagnostic
>


Noms de diagnostics disponibles : `diagPeering`, `diagPeeringExtra`, `diagRoutes`, `diagMacs`.

### Limites du routage statique

> [!warning]
> Le routage statique présente des limites importantes par rapport à BGP :
>
> - **Pas de bascule automatique.** Si un lien tombe, le trafic est blackholé jusqu’à ce que vous mettiez manuellement à jour les routes. Pour une bascule automatique, utilisez [BGP](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_bgp).
> - **Mises à jour manuelles requises.** Lorsque vous ajoutez ou modifiez des sous-réseaux, vous devez mettre à jour à la fois la configuration supplémentaire OVHcloud et la configuration de votre routeur.
> - **Pas de répartition de charge.** Les routes statiques ne prennent pas en charge ECMP ni le traffic engineering. Le trafic suit un chemin unique.
> - **Non recommandé pour le multi-AZ.** Pour les configurations multi-AZ résilientes, BGP est fortement recommandé — voir [Multi-AZ](/pages/network/ovhcloud_connect_revamp/1.5_multi_az).

### Supprimer les configurations

Supprimez dans l’ordre inverse :

> [!api]
>
> @api {v1} DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}
>

> [!api]
>
> @api {v1} DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}
>


## Aller plus loin

- [Configurer le réseau vRack](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup) — Si vous n’avez pas encore configuré les sous-réseaux d’AZ
- [Associer OVHcloud Connect à votre vRack](/pages/network/ovhcloud_connect_revamp/3.5_associate_vrack)
- [Surveiller votre connexion](/pages/network/ovhcloud_connect_revamp/3.9_monitor)

Échangez avec notre [communauté d'utilisateurs](/links/community).
