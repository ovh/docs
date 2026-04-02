---
title: Personnaliser l'allocation IP sur un cluster OVHcloud Managed Kubernetes
excerpt: "Découvrez comment configurer la politique d'allocation IP pour vos pods et services sur un cluster OVHcloud Managed Kubernetes avec le plan Standard"
updated: 2026-03-17
---

## Objectif

**Ce guide détaille comment personnaliser les plages IP utilisées pour les pods et les services dans votre cluster OVHcloud Managed Kubernetes avec le plan Standard.**

## Prérequis

- Un cluster [OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes)

## Limites

La personnalisation de la politique d'allocation IP des pods et services n'est pas possible sur les clusters avec le plan Free.

Vous ne pouvez pas modifier la politique d'allocation IP d'un cluster en cours d'exécution. Elle doit être définie lors de la création du cluster ou lors de la réinitialisation du cluster, ce qui efface toutes les données.

## Détails de la configuration

Deux paramètres permettent de contrôler la politique d'allocation IP dans votre cluster OVHcloud Managed Kubernetes.

| Paramètre          | Valeur par défaut | Fonction                                                                    |
| ------------------ | ----------------- | --------------------------------------------------------------------------- |
| `podsIpv4Cidr`     | `10.240.0.0/13`   | Sous-réseau pour l'adressage des pods du cluster     |
| `servicesIpv4Cidr` | `10.3.0.0/16`     | Sous-réseau pour l'adressage des services du cluster |

> [!primary]
>
> Plus d'informations sur la notation CIDR : [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
>

Voici les règles à respecter pour ces paramètres :

- `podsIpv4Cidr` et `servicesIpv4Cidr` **ne doivent pas** entrer en conflit l'un avec l'autre, ni avec les sous-réseaux OpenStack du même VLAN dans votre projet.
- Les sous-réseaux **doivent** être choisis dans les [blocs de réseau privé](https://en.wikipedia.org/wiki/List_of_reserved_IP_addresses).
- La taille minimale autorisée pour les sous-réseaux `podsIpv4Cidr` et `servicesIpv4Cidr` est `/16`.

Chaque nœud du cluster se voit attribuer un sous-réseau `/24` dans le `podsIpv4Cidr` ; choisir un `/16` limite le cluster à 256 nœuds.

> [!warning]
>
> L'ajout de nœuds au-delà de la limite des sous-réseaux `/24` possibles dans le `podsIpv4Cidr` pourrait rendre votre cluster instable.
>

## Instructions via l'API OVHcloud

> [!primary]
>
> Plus d'informations sur l'utilisation de l'API OVHcloud : [Premiers pas avec l'API OVHcloud](/pages/manage_and_operate/api/first-steps).
>

### Créer un nouveau cluster avec une politique d'allocation IP personnalisée

Utilisez l'appel suivant pour créer un nouveau cluster :

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube POST /cloud/project/{serviceName}/kube
>

Pour définir une politique d'allocation IP personnalisée sur les pods et/ou services, utilisez l'exemple suivant :

```json
{
  "name": "my-cluster-with-custom-ip",
  "nodepool": {
    "desiredNodes": 3,
    "flavorName": "b3-8",
    "name": "my-nodepool"
  },
  "region": "GRA11",
  "ipAllocationPolicy": {
    "podsIpv4Cidr": "172.16.0.0/12",
    "servicesIpv4Cidr": "10.100.0.0/16"
  }
}
```

Une fois le cluster créé, utilisez cet appel pour vérifier la politique d'allocation IP :

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube GET /cloud/project/{serviceName}/kube
>

### Réinitialiser un cluster pour modifier ses allocations IP

> [!warning]
>
> La réinitialisation d'un cluster supprimera toutes les données et charges de travail en cours d'exécution sur le cluster.
>

Utilisez l'appel suivant pour réinitialiser un cluster et spécifier une politique d'allocation IP personnalisée :

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube/{kubeId}/reset POST /cloud/project/{serviceName}/kube/{kubeId}/reset
>

Pour définir une politique d'allocation IP personnalisée sur les pods et/ou services, utilisez l'exemple suivant :

```json
{
  "ipAllocationPolicy": {
    "podsIpv4Cidr": "172.16.0.0/12",
    "servicesIpv4Cidr": "10.100.0.0/16"
  }
}
```

Une fois le cluster réinitialisé, utilisez cet appel pour vérifier la politique d'allocation IP :

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube GET /cloud/project/{serviceName}/kube
>

## Aller plus loin

[Limites connues d'OVHcloud Managed Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/known-limits)

[Premiers pas avec l'API OVHcloud](/pages/manage_and_operate/api/first-steps)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).