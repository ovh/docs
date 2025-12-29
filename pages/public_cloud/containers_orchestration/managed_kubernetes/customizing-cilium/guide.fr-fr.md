---
title: "Personnaliser Cilium sur un cluster Managed Kubernetes OVHcloud"
excerpt: "Découvrez comment personnaliser Cilium sur un cluster Managed Kubernetes OVHcloud"
updated: 2025-12-12
---

## Objectif

Managed Kubernetes Service d'OVHcloud vous fournit des clusters Kubernetes sans les contraintes d'installation ou de gestion.

Le plan Standard des clusters Managed Kubernetes OVHcloud utilise [Cilium](https://cilium.io/) comme CNI par défaut.

Le processus de l'agent Cilium (également connu sous le nom « DaemonSet ») permet une configuration par nœud.

Cela permet de remplacer le ConfigMap `cilium-config` pour un nœud ou un ensemble de nœuds en utilisant des objets `CiliumNodeConfig`.

> [!warning]
> Sans utiliser un objet `CiliumNodeConfig`, il ne sera pas possible de modifier le ConfigMap `cilium-config`.

## Prérequis

- Disposer d'un cluster Managed Kubernetes OVHcloud avec le plan Standard.

## En pratique

### Qu'est-ce que CiliumNodeConfig

Comme indiqué dans la [documentation Cilium](https://docs.cilium.io/en/stable/configuration/per-node-config/#ciliumnodeconfig-objects) :

Un objet `CiliumNodeConfig` permet de remplacer les arguments du ConfigMap / Agent.

Il se compose d'un ensemble de champs et d'un sélecteur d'étiquettes. Le sélecteur d'étiquettes définit à quels nœuds la configuration s'applique.

Comme c'est la norme dans Kubernetes, un sélecteur d'étiquettes vide (par exemple : `{}`) sélectionne tous les nœuds.

### Valeurs possibles de CiliumNodeConfig

Vous trouverez la liste complète des clés et valeurs possibles dans le fichier [cilium-configmap sur GitHub](https://github.com/cilium/cilium/blob/main/install/kubernetes/cilium/templates/cilium-configmap.yaml).

> [!warning]
> Notez que certaines clés disponibles sur notre plateforme peuvent nécessiter l’activation de certaines fonctionnalités dans l’opérateur Cilium.

### Exemple de personnalisation

#### Activer le routage conscient de la topologie pour une région 3AZ

> [!success]
> Pour découvrir cette fonctionnalité, référez-vous à la page suivante : [Découvrez les fonctionnalités de Kubernetes 1.33 – Routage conscient de la topologie dans des clusters Kubernetes multi-zones](https://blog.ovhcloud.com/discover-kubernetes-1-33-features-topology-aware-routing-in-multi-zones-kubernetes-clusters/), par [Aurélie Vache](https://blog.ovhcloud.com/author/aurelie-vache/).

Pour activer le routage conscient de la topologie pour une région 3AZ côté Cilium, appliquez cette configuration de `CiliumNodeConfig` :

```yaml
apiVersion: cilium.io/v2
kind: CiliumNodeConfig
metadata:
  namespace: kube-system
  name: enable-service-topology
spec:
  nodeSelector: {}
  defaults:
    enable-service-topology: "true"
```

Redémarrez ensuite l'agent Cilium :

```bash
kubectl -n kube-system rollout restart daemonset cilium
```

Vérifiez que la configuration a été appliquée :

```bash
kubectl -n kube-system logs $(kubectl -n kube-system get pod -l k8s-app=cilium -o name) | head -n 500 | grep enable-service-topology

time=2025-12-09T15:57:06.161145191Z level=info msg="  --config-sources='[{\"kind\":\"config-map\",\"namespace\":\"kube-system\",\"name\":\"cilium-config\"},{\"kind\":\"cilium-node-config\",\"namespace\":\"kube-system\",\"name\":\"enable-service-topology\"}]'"
time=2025-12-09T15:57:06.165626171Z level=info msg="  --enable-service-topology='true'"
```

## Aller plus loin

Pour avoir une vue d'ensemble de Managed Kubernetes Service d'OVHcloud, consultez [cette page](/links/public-cloud/kubernetes).

Pour en savoir plus sur l'utilisation pratique de votre cluster Kubernetes, nous vous invitons à consulter [nos tutoriels](/products/public-cloud-containers-orchestration-managed-kubernetes-k8s).

Si vous avez besoin de formation ou d'une assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander l'assistance des experts de notre équipe Professional Services pour votre cas d'utilisation et projet spécifiques.

Rejoignez notre [communauté d'utilisateurs](/links/community).