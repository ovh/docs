---
title: Utilisation des Floating IPs sur Managed Kubernetes Service
excerpt: Découvrez comment activer et gérer les Floating IPs sur les nœuds workers pour les clusters Managed Kubernetes Service
updated: 2026-01-30
---

## Objectif

Ce guide explique comment utiliser les Floating IPs sur le service OVHcloud Managed Kubernetes (MKS) avec le plan Standard. Les Floating IPs vous permettent d'assigner automatiquement des adresses IP publiques aux nœuds workers d'un node pool, permettant un accès public direct aux nœuds et l'utilisation de la bande passante du nœud plutôt que celle de la Managed Gateway.

## Avant de commencer

Ce tutoriel suppose que vous disposez déjà d'un cluster OVHcloud Managed Kubernetes fonctionnel avec le **plan Standard** et des connaissances de base sur son utilisation.

> [!primary]
> **Prérequis : Plan Standard**
>
> Les Floating IPs par nœud sont une fonctionnalité exclusive du **plan Standard d'OVHcloud Managed Kubernetes**. Cette fonctionnalité n'est pas disponible sur le plan Free.
>
> Pour plus d'informations sur les plans MKS et leurs différences, consultez le [guide de comparaison des plans MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/mks_plans).

> [!primary]
> **Disponibilité régionale**
>
> Le plan Standard avec support des Floating IPs est disponible dans les régions suivantes :
> - **Régions 1-AZ** : EU-WEST-RBX (Roubaix), AP-SOUTH-MUM (Mumbai)
> - **Régions 3-AZ** : EU-WEST-PAR (Paris), EU-SOUTH-MIL (Milan)
>
> Pour une liste complète des régions disponibles par plan, consultez la section [Disponibilité régionale par plan MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/datacenters-nodes-storage-flavors#regional-availability-by-mks-plan).

## Qu'est-ce que les Floating IPs pour MKS ?

Les Floating IPs pour OVHcloud Managed Kubernetes vous permettent d'assigner automatiquement une adresse IP publique Floating à chaque nœud worker d'un node pool, y compris les nœuds gérés par l'autoscaler.

### Avantages clés

- **Accès public direct** : Chaque nœud obtient sa propre adresse IP publique, permettant une connectivité externe directe
- **Utilisation de la bande passante du nœud** : Exploite la bande passante publique du nœud (1 Gbps, 10 Gbps ou plus selon le flavor d'instance) au lieu de celle de la Managed Gateway
- **Assignment automatique** : Les Floating IPs sont automatiquement assignées aux nœuds lorsque la fonctionnalité est activée, y compris pour les nœuds créés par l'autoscaler
- **Architecture simplifiée** : Exposition directe des nœuds sans couches de load balancing supplémentaires pour des cas d'usage spécifiques

### Gestion du cycle de vie

Le cycle de vie d'une Floating IP est étroitement lié au nœud auquel elle est attachée :

- **Création du nœud** : Une Floating IP est automatiquement assignée lors de la création du nœud
- **Suppression du nœud** : La Floating IP est automatiquement supprimée lors de la suppression du nœud
- **Scale down de l'autoscaler** : Les Floating IPs sont supprimées lorsque les nœuds sont réduits
- **Désactivation de la fonctionnalité** : Toutes les Floating IPs du node pool sont supprimées lorsque la fonctionnalité est désactivée

> [!warning]
> **Mises à jour du cluster et persistance des Floating IPs**
>
> **Comportement actuel** : La stratégie de mise à jour et de patch du cluster est actuellement le **rolling upgrade**. Durant ce processus, les nœuds sont remplacés un par un, ainsi que leurs Floating IPs associées. Cela signifie que **les Floating IPs changeront** pendant les mises à jour du cluster.
>
> **Amélioration future** : Une future stratégie de mise à jour **In Place** préservera les Floating IPs durant les mises à jour du cluster, maintenant la continuité des adresses IP.

## Cas d'usage

Les Floating IPs sont particulièrement utiles pour les scénarios suivants :

- **Applications haute bande passante** : Applications nécessitant un accès direct à la bande passante du nœud (streaming vidéo, transferts de fichiers volumineux)
- **Services NodePort** : Exposition de services via NodePort avec accès direct au nœud
- **Contournement de la bande passante Gateway** : Éviter les limitations de bande passante de la Managed Gateway pour des charges de travail spécifiques
- **Accès direct aux nœuds** : Scénarios nécessitant un accès public direct aux nœuds (monitoring, debugging, protocoles personnalisés)

## Tarification

Les Floating IPs sont facturées à l'heure selon la tarification d'OVHcloud Public Cloud.

Pour des informations détaillées sur la tarification, veuillez consulter :
- [Tarifs OVHcloud Public Cloud](https://www.ovhcloud.com/fr/public-cloud/prices/#compute) (section Floating IP)

> [!primary]
> Les Floating IPs sont facturées par adresse IP par heure tant qu'elles sont assignées à un nœud. Elles sont automatiquement supprimées (et la facturation s'arrête) lors de la suppression des nœuds.

## Comment activer les Floating IPs

Vous pouvez activer les Floating IPs sur un node pool de trois manières :

1. Lors de la création d'un nouveau cluster avec un node pool
2. Lors de la création d'un nouveau node pool dans un cluster existant
3. En mettant à jour un node pool existant

### Méthode 1 : Activer les Floating IPs lors de la création d'un cluster

Lors de la création d'un nouveau cluster MKS Standard via l'API OVHcloud, vous pouvez activer les Floating IPs directement dans la configuration du node pool initial.

**Endpoint API :**

```
POST /cloud/project/{serviceName}/kube
```

**Exemple de payload JSON** (partiel, focus sur le node pool avec Floating IPs) :

```json
{
  "name": "mon-cluster-mks",
  "region": "EU-WEST-PAR",
  "version": "1.31",
  "plan": "STANDARD",
  "nodePools": [
    {
      "name": "mon-nodepool-a",
      "flavorName": "c3-16",
      "desiredNodes": 3,
      "minNodes": 1,
      "maxNodes": 5,
      "autoscale": true,
      "attachFloatingIps": {
        "enabled": true
      },
      "availabilityZones": ["eu-west-par-a"]
    }
  ]
}
```

**Paramètre clé :**

- `attachFloatingIps.enabled` : Définir à `true` pour activer les Floating IPs sur le node pool

Pour la documentation API complète, consultez :
- [Console API OVHcloud - Créer un cluster](https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#post-/cloud/project/-serviceName-/kube)

### Méthode 2 : Activer les Floating IPs lors de la création d'un nouveau node pool

Pour activer les Floating IPs sur un nouveau node pool dans un cluster existant, utilisez l'endpoint API suivant.

**Endpoint API :**

```
POST /cloud/project/{serviceName}/kube/{kubeId}/nodepool
```

**Exemple de payload JSON :**

```json
{
  "name": "mon-nodepool-avec-fips",
  "flavorName": "c3-16",
  "desiredNodes": 3,
  "minNodes": 1,
  "maxNodes": 5,
  "autoscale": true,
  "attachFloatingIps": {
    "enabled": true
  },
  "availabilityZones": ["eu-west-par-a"],
  "antiAffinity": true,
  "monthlyBilled": false
}
```

Pour la documentation API complète, consultez :
- [Console API OVHcloud - Créer un node pool](https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#post-/cloud/project/-serviceName-/kube/-kubeId-/nodepool)

### Méthode 3 : Activer/Désactiver les Floating IPs sur un node pool existant

Vous pouvez activer ou désactiver les Floating IPs sur un node pool existant en utilisant l'endpoint PUT.

**Endpoint API :**

```
PUT /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
```

**Exemple de payload JSON** (pour activer) :

```json
{
  "attachFloatingIps": {
    "enabled": true
  }
}
```

**Exemple de payload JSON** (pour désactiver) :

```json
{
  "attachFloatingIps": {
    "enabled": false
  }
}
```

> [!warning]
> **Désactivation des Floating IPs**
>
> Lorsque vous désactivez les Floating IPs sur un node pool, **toutes les Floating IPs attachées aux nœuds de ce pool seront immédiatement supprimées**. Cela interrompra toutes les connexions dépendant de ces adresses IP publiques.

Pour la documentation API complète, consultez :
- [Console API OVHcloud - Mettre à jour un node pool](https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#put-/cloud/project/-serviceName-/kube/-kubeId-/nodepool/-nodePoolId-)

### Utilisation du CLI OVHcloud

Vous pouvez également gérer les Floating IPs en utilisant le [CLI OVHcloud](https://github.com/ovh/ovhcloud-cli).

**Exemple : Créer un node pool avec les Floating IPs activées**

```bash
ovhcloud cloud kube nodepool create <cluster_id> \
  --flavor-name c3-16 \
  --desired-nodes 3 \
  --min-nodes 1 \
  --max-nodes 5 \
  --name mon-nodepool-avec-fips \
  --attach-floating-ips \
  --autoscale \
  --anti-affinity
```

**Exemple : Créer un node pool avec Floating IPs en utilisant un fichier de configuration**

D'abord, générez un exemple de fichier de configuration :

```bash
ovhcloud cloud kube nodepool create <cluster_id> --init-file ./nodepool-params.json
```

Éditez le fichier `nodepool-params.json` pour activer les Floating IPs :

```json
{
  "antiAffinity": true,
  "attachFloatingIps": {
    "enabled": true
  },
  "autoscale": true,
  "availabilityZones": ["eu-west-par-a"],
  "desiredNodes": 3,
  "flavorName": "c3-16",
  "maxNodes": 5,
  "minNodes": 1,
  "name": "mon-nodepool-avec-fips"
}
```

Puis créez le node pool :

```bash
ovhcloud cloud kube nodepool create <cluster_id> --from-file ./nodepool-params.json
```

Pour plus d'informations sur le CLI OVHcloud, consultez :
- [CLI OVHcloud - Créer un node pool](https://github.com/ovh/ovhcloud-cli/blob/main/doc/ovhcloud_cloud_kube_nodepool_create.md)

## Vérifier l'assignation des Floating IPs

### Avec Kubernetes kubectl

Vous pouvez vérifier que les nœuds ont des Floating IPs assignées en consultant l'IP externe du nœud :

```bash
kubectl get nodes -o wide
```

Exemple de sortie :

```console
NAME                                         STATUS   ROLES    AGE   VERSION   INTERNAL-IP   EXTERNAL-IP      OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME
nodepool-fip-node-1234                      Ready    <none>   5m    v1.31.0   10.0.1.10     203.0.113.45     Ubuntu 22.04.3 LTS   5.15.0-88-generic   containerd://1.7.2
nodepool-fip-node-5678                      Ready    <none>   5m    v1.31.0   10.0.1.11     203.0.113.46     Ubuntu 22.04.3 LTS   5.15.0-88-generic   containerd://1.7.2
nodepool-fip-node-9012                      Ready    <none>   5m    v1.31.0   10.0.1.12     203.0.113.47     Ubuntu 22.04.3 LTS   5.15.0-88-generic   containerd://1.7.2
```

La colonne `EXTERNAL-IP` affiche la Floating IP assignée à chaque nœud.

### Avec l'API OVHcloud

Vous pouvez également interroger la configuration du node pool via l'API OVHcloud pour vérifier que les Floating IPs sont activées :

```
GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
```

La réponse inclura :

```json
{
  "id": "abc123...",
  "name": "mon-nodepool-avec-fips",
  "attachFloatingIps": {
    "enabled": true
  },
  ...
}
```

### Avec OpenStack CLI (Avancé)

Pour les utilisateurs avancés, vous pouvez utiliser OpenStack CLI pour lister les Floating IPs et leurs associations :

```bash
openstack floating ip list
```

Pour plus d'informations sur la gestion des Floating IPs avec OpenStack, consultez :
- [KB OVHcloud : Additional IP vs Floating IP](https://help.ovhcloud.com/csm/fr-public-cloud-network-additional-ip-vs-floating-ip?id=kb_article_view&sysparm_article=KB0050159)

## Bonnes pratiques

### Considérations de sécurité

Lorsque vous utilisez des Floating IPs, chaque nœud est directement exposé à Internet. Suivez ces bonnes pratiques de sécurité :

- **Network Policies** : Implémentez des Network Policies Kubernetes pour restreindre le trafic pod-à-pod
- **Security Groups** : Configurez les security groups OVHcloud pour limiter le trafic entrant aux ports nécessaires uniquement
- **Durcissement des nœuds** : Assurez-vous que les nœuds sont correctement durcis et suivent les bonnes pratiques de sécurité
- **Monitoring** : Activez le monitoring et les alertes pour détecter les activités suspectes sur les IPs publiques

### Gestion de la bande passante

- **Sélection du flavor d'instance** : Choisissez des flavors d'instance avec une bande passante adéquate pour votre charge de travail (les flavors B3, C3, R3 offrent 10 Gbps de bande passante)
- **Distribution du trafic** : Distribuez les charges de travail gourmandes en trafic sur plusieurs nœuds pour éviter les goulots d'étranglement

### Optimisation des coûts

- **Configuration de l'autoscaler** : Configurez l'autoscaler de manière appropriée pour éviter l'allocation inutile de Floating IPs lors des scale-up
- **Ciblage de la fonctionnalité** : N'activez les Floating IPs que sur les node pools qui nécessitent réellement un accès public direct
- **Révision régulière** : Révisez périodiquement l'utilisation des Floating IPs et désactivez la fonctionnalité sur les node pools qui n'en ont plus besoin

## Limitations et problèmes connus

- **Rolling upgrades** : Durant les mises à jour et patches du cluster, les Floating IPs sont remplacées avec les nœuds. Une future stratégie de mise à jour In Place résoudra cette limitation.
- **Plan Standard uniquement** : Les Floating IPs sont exclusivement disponibles sur le plan Standard
- **Disponibilité régionale** : Actuellement disponible uniquement dans certaines régions (EU-WEST-RBX, AP-SOUTH-MUM, EU-WEST-PAR, EU-SOUTH-MIL)
- **Pas de gestion manuelle des IPs** : Vous ne pouvez pas assigner manuellement des adresses Floating IP spécifiques ; elles sont automatiquement allouées par la plateforme

## Aller plus loin

- [Comparaison des plans MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/mks_plans) : En savoir plus sur les différences entre les plans Free et Standard
- [Disponibilité régionale](/pages/public_cloud/containers_orchestration/managed_kubernetes/datacenters-nodes-storage-flavors#regional-availability-by-mks-plan) : Consulter les régions disponibles pour chaque plan
- [Console API OVHcloud](https://eu.api.ovh.com/console/) : Explorer l'API OVHcloud complète
- [Additional IP vs Floating IP (KB)](https://help.ovhcloud.com/csm/fr-public-cloud-network-additional-ip-vs-floating-ip?id=kb_article_view&sysparm_article=KB0050159) : Comprendre la différence entre Additional IP et Floating IP
- [Tarifs OVHcloud Public Cloud](https://www.ovhcloud.com/fr/public-cloud/prices/#compute) : Consulter les tarifs des Floating IPs

Rejoignez notre [communauté d'utilisateurs](/links/community).
