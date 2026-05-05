---
title: 'OVHcloud Connect - Configurer le L3 avec BGP'
excerpt: 'Configurez OVHcloud Connect L3 avec BGP pour l’échange dynamique de routes entre votre réseau et OVHcloud'
updated: 2026-04-14
---

## Objectif

**Ce guide explique comment** configurer OVHcloud Connect en mode L3 avec BGP. Cela implique deux niveaux de configuration :

1. **Configuration PoP** — La session eBGP entre votre routeur et OVHcloud au niveau du Point de présence.
2. **Configuration supplémentaire AZ (BGP)** — Le peering BGP au sein de l’Availability Zone OVHcloud pour la distribution des routes.

> [!primary]
> Si vous préférez le routage statique au lieu de BGP, consultez [Configurer OVHcloud Connect L3 avec routage statique](/pages/network/ovhcloud_connect_revamp/3.8_occ_l3_static).

## Prérequis

- Un [compte OVHcloud](/links/manager) actif
- Un service OVHcloud Connect actif (statut `active`)
- OVHcloud Connect associé à un vRack — voir [Associer OVHcloud Connect à votre vRack](/pages/network/ovhcloud_connect_revamp/3.5_associate_vrack)
- Une configuration AZ créée — voir [Configurer le réseau vRack](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup)
- Votre ASN (un ASN public ou un ASN privé compris dans la plage 64512–65534)
- Un sous-réseau de peering /30 (par exemple `192.0.2.0/30`)
- Des identifiants de l’API OVHcloud (Application Key, Application Secret, Consumer Key). Consultez le guide [Premiers pas avec l’API OVHcloud](/pages/manage-and-operate/api/first-steps).

## En pratique

### Vue d’ensemble

```
Votre routeur ── [ eBGP au PoP ] ── Routeur PoP OVHcloud ── [ iBGP au DC ] ── Routeur vRack ── Services
   ASN 65001        peering /30         ASN 35540              AZ           (172.16.x.x)
                                                          config supp.
```

- **Niveau PoP** : une session eBGP entre votre routeur (votre ASN) et OVHcloud (ASN 35540) sur un sous-réseau de peering /30.
- **Niveau AZ** : un voisin BGP configuré au sein de l’AZ pour distribuer les routes vers vos services OVHcloud.

### Étape 1 — Identifier l’ID de votre interface

Récupérez l’ID de l’interface pour votre service OVHcloud Connect :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/interface
>


### Étape 2 — Créer la configuration PoP (L3)

La configuration PoP établit la session BGP L3 au niveau du Point de présence.

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop
>

**Paramètres de la requête :**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `interfaceId` | long | Oui | ID de l’interface OVHcloud Connect |
| `type` | string | Oui | `l3` pour le mode Layer 3 |
| `customerBgpArea` | long | Non | Votre numéro d’AS privé (par exemple `65001`) |
| `ovhBgpArea` | long | Non | AS privé OVHcloud (généralement laissé vide — attribué automatiquement) |
| `subnet` | ipv4Block | Non | Sous-réseau de peering /30 (par exemple `192.0.2.0/30`). La première IP est OVHcloud, la seconde est la vôtre. |

**Exemple de requête :**


Le `resourceId` dans la réponse correspond à votre nouveau `popId`.

### Étape 3 — Vérifier la configuration PoP

Une fois la tâche terminée :

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

À partir de cette réponse, notez :

| Paramètre | Valeur | Signification |
|---|---|---|
| **IP du pair OVHcloud** | `192.0.2.1` | Première IP du /30 — côté OVHcloud |
| **Votre IP de pair** | `192.0.2.2` | Deuxième IP du /30 — votre routeur |
| **ASN OVHcloud** | `35540` | La valeur `ovhBgpArea` |
| **Votre ASN** | `65001` | La valeur `customerBgpArea` |

Vérifiez l’état de la session BGP :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/status
>


### Étape 4 — Créer la configuration supplémentaire AZ (BGP)

Après la configuration PoP et la [configuration AZ](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup), créez une **configuration supplémentaire BGP** pour activer la distribution des routes BGP au sein de l’AZ.

> [!warning]
> L’activation de BGP au niveau de l’AZ **désactive VRRP** sur cette configuration AZ. BGP gère la bascule à la place. Vous devez établir une session BGP avec **les deux** équipements OVHcloud A et B (jusqu’à 4 pairs BGP par AZ). Par défaut, BFD (Bidirectional Forwarding Detection) est activé sur toutes les sessions BGP de l’AZ — il est fortement recommandé d’activer également BFD de votre côté pour une convergence plus rapide.

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

**Paramètres de la requête :**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `type` | string | Oui | `bgp` pour le routage BGP |
| `bgpNeighborArea` | long | Non | Numéro d’AS BGP du voisin de l’AZ |
| `bgpNeighborIp` | ipv4 | Non | IP du routeur pour la session BGP au sein de l’AZ |

**Exemple de requête :**


Vérifiez la configuration supplémentaire :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}
>

**Exemple de réponse :**

```json
{
  "id": 4567,
  "type": "bgp",
  "bgpNeighborArea": 65501,
  "bgpNeighborIp": "172.16.1.1",
  "nextHop": null,
  "subnet": null,
  "status": "active"
}
```

### Étape 5 — Configurer BGP sur votre routeur

Configurez votre routeur physique pour établir la session eBGP avec OVHcloud au niveau du PoP. **Remplacez les valeurs d’exemple** par vos paramètres réels issus de l’étape 3.

#### Cisco IOS / IOS-XE

```
! Interface facing OVHcloud
interface GigabitEthernet0/0
 description OVHcloud Connect
 ip address 192.0.2.2 255.255.255.252
 no shutdown

! BGP configuration
router bgp 65001
 bgp log-neighbor-changes
 neighbor 192.0.2.1 remote-as 35540
 neighbor 192.0.2.1 description OVHcloud-Peer
 !
 address-family ipv4 unicast
  neighbor 192.0.2.1 activate
  network 10.0.0.0 mask 255.255.0.0
  ! Only advertise your own prefixes
  neighbor 192.0.2.1 prefix-list MY-PREFIXES out
  neighbor 192.0.2.1 prefix-list OVH-PREFIXES in
  neighbor 192.0.2.1 maximum-prefix 100

ip prefix-list MY-PREFIXES seq 10 permit 10.0.0.0/16
ip prefix-list OVH-PREFIXES seq 10 permit 172.16.0.0/12 le 24
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

protocols {
    bgp {
        group OVHcloud {
            type external;
            peer-as 35540;
            local-address 192.0.2.2;
            neighbor 192.0.2.1 {
                description "OVHcloud Peer";
                import OVH-IMPORT;
                export MY-EXPORT;
            }
        }
    }
}

policy-options {
    policy-statement MY-EXPORT {
        term allow {
            from {
                route-filter 10.0.0.0/16 exact;
            }
            then accept;
        }
        term reject {
            then reject;
        }
    }
    policy-statement OVH-IMPORT {
        term accept-ovh {
            from {
                route-filter 172.16.0.0/12 orlonger;
            }
            then accept;
        }
        term reject {
            then reject;
        }
    }
}
```

### Étape 6 — Vérifier la session BGP

#### Depuis votre routeur

**Cisco :**

```
show ip bgp summary
show bgp ipv4 unicast neighbors 192.0.2.1
show ip route bgp
```

**Juniper :**

```
show bgp summary
show bgp neighbor 192.0.2.1
show route protocol bgp
```

**Résultats attendus :**

| Vérification | Sortie attendue |
|---|---|
| **État BGP** | `Established` |
| **Préfixes reçus** | Au moins 1 route depuis OVHcloud (vos sous-réseaux d’AZ) |
| **Préfixes envoyés** | Vos préfixes annoncés visibles |

#### Depuis l’API OVHcloud

Vérifiez les statistiques du PoP (préfixes acceptés) :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/statistics
>


#### Lancer un diagnostic

Si la session ne s’établit pas, lancez un diagnostic de peering :

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/diagnostic
>


Noms de diagnostics disponibles : `diagPeering`, `diagPeeringExtra`, `diagRoutes`, `diagMacs`.

### Bonnes pratiques

- **Annoncez uniquement les préfixes que vous possédez.** Ne laissez pas fuiter des routes tierces via OVHcloud Connect.
- **Appliquez des filtres de préfixes.** Utilisez des prefix-lists à l’import et à l’export pour éviter les fuites de routes accidentelles.
- **Définissez des limites maximum-prefix.** Protégez votre routeur de la réception d’un nombre inattendu de routes.
- **Utilisez l’authentification MD5.** Si nécessaire, configurez MD5 sur la session BGP pour renforcer la sécurité.
- **Surveillez la session.** Configurez des alertes pour les flaps BGP et les coupures de session — voir [Surveiller votre connexion](/pages/network/ovhcloud_connect_revamp/3.9_monitor).
- **Pour les configurations redondantes.** Utilisez la Local Preference ou l’AS-path prepending pour contrôler la sélection du chemin principal/secondaire — voir [Multi-AZ](/pages/network/ovhcloud_connect_revamp/1.5_multi_az).

### Dépannage

| Problème | Cause possible | Solution |
|---|---|---|
| BGP bloqué en `Active` | IP de pair ou ASN incorrect | Vérifiez les adresses IP et l’ASN des deux côtés. Utilisez `GET .../config/pop/{popId}` pour vérifier les valeurs côté OVHcloud. |
| BGP bloqué en `Idle` | Interface inactive ou pare-feu bloquant le TCP 179 | Vérifiez le lien physique et les règles de pare-feu. Utilisez `GET .../interface/{id}/status` pour vérifier l’état du lien. |
| Aucune route reçue | Instruction `network` manquante ou filtre de préfixes trop restrictif | Vérifiez la politique d’export et les commandes `network`. Lancez le diagnostic `diagRoutes`. |
| La session tombe fréquemment (flapping) | Lien physique instable ou MTU non cohérent | Vérifiez les erreurs d’interface et les paramètres MTU. Utilisez `GET .../interface/{id}/statistics` pour consulter les compteurs d’erreurs. |
| Configuration PoP bloquée en statut `init` | Tâche encore en cours ou échouée | Vérifiez `GET .../task` pour les tâches en attente. |

### Supprimer les configurations

Pour supprimer la configuration BGP, supprimez dans l’ordre inverse :

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
