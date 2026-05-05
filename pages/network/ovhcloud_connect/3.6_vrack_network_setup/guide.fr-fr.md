---
title: 'OVHcloud Connect - Configurer le réseau vRack'
excerpt: 'Créez une configuration AZ pour OVHcloud Connect L3 et comprenez l''adressage IP ainsi que VRRP'
updated: 2026-04-15
---

## Objectif

Avant de configurer le routage L3 d'OVHcloud Connect (BGP ou statique), vous devez préparer la **configuration AZ** qui crée un routeur virtuel à l'intérieur du vRack, reliant votre lien OVHcloud Connect aux Availability Zones (AZ) OVHcloud où s'exécutent vos services.

**Ce guide explique comment :**

- Créer une **configuration AZ** (routeur virtuel) à l'intérieur de votre vRack
- Comprendre les **règles d'adressage IP** du sous-réseau AZ (adresses réservées, VRRP)
- Comprendre les **limitations** de ce routeur (pas de VLAN, pas de trunk)

> [!primary]
> Ce guide couvre la **configuration vRack basique pour la compatibilité avec OVHcloud Connect**. Pour une configuration vRack avancée, consultez :
>
> - [Configurer OVHcloud Connect L3 avec BGP](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_bgp)
> - [Configurer OVHcloud Connect L3 avec du routage statique](/pages/network/ovhcloud_connect_revamp/3.8_occ_l3_static)
>
> Pour une vue générale du réseau vRack, consultez la [présentation du service vRack](/pages/network/vrack/global).
>

<!-- vRack networking doit explique au client comment il peut monter un L3 sur son vRack, un L3 avec des subnets dans une ou plusieurs régions, des routeurs qu'ils manage et configure on top d'un dedicated server, d'une instance PCI, d'une gateway PCI ou voir comment ça se passe côté PCC. Une fois que le client a créé son L3, il peut faire le lien avec OCC soit via des routes statiques, soit avec une annonce BGP vers les routeurs déployés par AZ -->

## Prérequis

Vous devez avoir réalisé les étapes 1 à 3 de l'un des guides suivants :

- [Démarrage rapide : connexion directe à OVHcloud](/pages/network/ovhcloud_connect_revamp/2.1_quick_start_direct)
- [Démarrage rapide : connexion à OVHcloud via un opérateur](/pages/network/ovhcloud_connect_revamp/2.2_quick_start_provider)

## En pratique

### Vue d'ensemble

Lorsque vous utilisez OVHcloud Connect en mode L3, le trafic transite par trois étages :

```
Votre réseau ──── [ PoP BGP/Statique ] ──── [ Routeur vRack ] ──── AZ OVHcloud
                    (spécifique OCC)          (ce guide)
```

La **configuration AZ** crée une instance de routage L3 à l'intérieur du vRack. Cette instance est composée de deux équipements physiques OVHcloud (étiquetés « A » et « B ») pour assurer la redondance. Vous devez créer une configuration AZ par AZ que vous souhaitez atteindre.

### Sous-réseau AZ — règles d'adressage IP

Lorsque vous créez une configuration AZ, vous lui attribuez un **sous-réseau privé**. À l'intérieur de ce sous-réseau, plusieurs adresses IP sont réservées par OVHcloud :

| Adresse IP | Rôle |
|---|---|
| Première adresse (par exemple `.0`) | Adresse réseau |
| Deuxième adresse (par exemple `.1`) | Routeur virtuel OVHcloud (passerelle VRRP) |
| Troisième adresse (par exemple `.2`) | Routeur OVHcloud A |
| Quatrième adresse (par exemple `.3`) | Routeur OVHcloud B |
| Adresses restantes | Disponibles pour vos services |

**Recommandations de planification du sous-réseau :**

| Recommandation | Pourquoi |
|---|---|
| **Minimum /28 par AZ** | L'API impose ce minimum. |
| **Éviter les recouvrements d'IP** | Les sous-réseaux ne doivent pas se chevaucher avec votre réseau on-premises, votre WAN ou d'autres fournisseurs cloud. |
| **Utiliser des adresses privées (RFC 1918)** | Utilisez les plages `10.0.0.0/8`, `172.16.0.0/12` ou `192.168.0.0/16`. |
| **Utiliser des sous-réseaux différents par AZ** | Un même sous-réseau ne peut pas être étendu sur deux AZ. |

### VRRP — redondance de la passerelle

L'instance de routage AZ d'OVHcloud utilise **VRRP (Virtual Router Redundancy Protocol)** pour assurer la redondance de la passerelle entre les équipements A et B.

| Propriété | Détail |
|---|---|
| **IP virtuelle** | La deuxième adresse du sous-réseau AZ (par exemple `172.16.1.1`) |
| **VRID** | Attribué par OVHcloud (non configurable) |
| **Équipement maître** | Équipement A par défaut |
| **Instances par AZ** | Une instance VRRP par configuration AZ |
| **Interaction avec BGP** | Activer BGP sur l'extrémité AZ **désactive** VRRP |

> [!primary]
> Lorsque vous utilisez le **routage statique** au niveau de l'AZ (type de configuration extra `static`), VRRP est actif et assure le basculement automatique entre les équipements A et B. Vos services doivent pointer leur passerelle par défaut vers l'IP virtuelle VRRP.
>
> Lorsque vous utilisez **BGP** au niveau de l'AZ (type de configuration extra `bgp`), VRRP est désactivé. C'est BGP qui prend en charge le basculement. Vous devez établir une session BGP avec **les deux** équipements A et B (jusqu'à 4 pairs BGP par AZ).

### Limitations du routeur vRack

> [!warning]
> Le routeur virtuel créé par la configuration AZ présente les limitations suivantes :
>
> - **Pas de support VLAN** — Le routeur ne gère pas le tagging VLAN 802.1Q. Tout le trafic est non taggé.
> - **Pas de support trunk** — Le routeur ne peut pas transporter plusieurs VLAN sur une même interface trunk.
>
> Planifiez l'architecture de vos sous-réseaux en conséquence. Utilisez des configurations AZ distinctes si vous devez isoler différents types de trafic entre les AZ.

### Étape 1 — Identifier les AZ disponibles

Avant de créer une configuration AZ, vérifiez les AZ disponibles pour votre service OVHcloud Connect.

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/datacenter
>

**Exemple de réponse :**

```json
{
  "id": 1234,
  "name": "GRA-DC1",
  "region": "eu-west-gra",
  "regionType": "3-AZ",
  "available": true
}
```

Seules les AZ pour lesquelles `available` vaut `true` peuvent recevoir une nouvelle configuration.

### Étape 2 — Créer la configuration AZ

La configuration AZ crée un routeur virtuel dans le vRack pour l'AZ indiquée. Vous avez besoin de l'identifiant `popId` issu de votre configuration PoP existante.

Listez vos configurations PoP existantes pour récupérer le `popId` :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop
>

Créez la configuration AZ :

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

**Paramètres de la requête :**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `datacenterId` | long | Oui | Identifiant de l'AZ (issu de l'étape 1) |
| `ovhBgpArea` | long | Non | Numéro AS privé OVHcloud pour la session BGP de l'AZ (attribué automatiquement si omis) |
| `subnet` | ipv4Block | Non | Sous-réseau privé pour l'AZ (/28 minimum). Exemple : `172.16.1.0/28` |


**Exemple de réponse :**

```json
{
  "id": 9012,
  "function": "addDatacenterConfiguration",
  "resourceId": 3456,
  "status": "todo"
}
```

Le `resourceId` correspond à l'identifiant de la nouvelle configuration AZ. La tâche progresse selon les états `todo` → `doing` → `done`.

### Étape 3 — Vérifier la configuration

Une fois la tâche terminée, vérifiez la configuration AZ :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

**Exemple de réponse :**

```json
{
  "id": 3456,
  "datacenterId": 1234,
  "subnet": "172.16.1.0/28",
  "ovhBgpArea": 65501,
  "status": "active"
}
```

Suivez l'avancement de la tâche avec :

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/task/{taskId}
>

### Étape 4 — Répéter pour les AZ supplémentaires (facultatif)

Pour une **architecture résiliente multi-AZ**, créez une configuration AZ pour chaque AZ :

```python
# AZ 1
client.post(
    f"/ovhCloudConnect/{service_name}/config/pop/{pop_id}/datacenter",
    datacenterId=1234,
    subnet="172.16.1.0/28"
)

# AZ 2
client.post(
    f"/ovhCloudConnect/{service_name}/config/pop/{pop_id}/datacenter",
    datacenterId=1235,
    subnet="172.16.2.0/28"
)
```

> [!primary]
> Un même sous-réseau ne peut pas être étendu sur deux AZ. Chaque configuration AZ doit utiliser un sous-réseau distinct.

Pour plus d'informations, reportez-vous à notre guide sur le [Multi-AZ](/pages/network/ovhcloud_connect_revamp/1.5_multi_az).

### Supprimer une configuration AZ

> [!api]
>
> @api {v1} DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

> [!warning]
> La suppression d'une configuration AZ stoppe immédiatement le trafic privé à destination et en provenance de cette AZ. Supprimez d'abord toute configuration extra dépendante (BGP ou statique).

## Aller plus loin

Maintenant que votre configuration AZ est prête, configurez le routage L3 d'OVHcloud Connect :

- [Configurer OVHcloud Connect L3 avec BGP](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_bgp)
- [Configurer OVHcloud Connect L3 avec du routage statique](/pages/network/ovhcloud_connect_revamp/3.8_occ_l3_static)
- [Superviser votre connexion](/pages/network/ovhcloud_connect_revamp/3.9_monitor)

Échangez avec notre [communauté d'utilisateurs](/links/community).
