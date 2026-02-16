---
title: "Personnaliser Cilium sur un cluster Managed Kubernetes OVHcloud"
excerpt: "Découvrez comment personnaliser Cilium sur un cluster Managed Kubernetes OVHcloud"
updated: 2026-01-09
---

## Objectif

Managed Kubernetes Service d'OVHcloud vous fournit des clusters Kubernetes sans les contraintes d'installation ou de gestion.

Le plan Standard des clusters Managed Kubernetes OVHcloud utilise [Cilium](https://cilium.io/) comme CNI par défaut.

Le processus de l'agent Cilium (également connu sous le nom « DaemonSet ») permet une configuration par nœud.

Cela permet de remplacer le ConfigMap `cilium-config` pour un nœud ou un ensemble de nœuds en utilisant des objets `CiliumNodeConfig`.

> [!warning]
> L'**unique** méthode de configuration de Cilium supportée par OVHcloud Managed Kubernetes Service est l'utilisation de l'objet [CiliumNodeConfig](https://docs.cilium.io/en/stable/configuration/per-node-config/#ciliumnodeconfig-objects). Les méthodes alternaties utilisant les commandes `helm` ou `cilium` ne sont pas supportées.

## Prérequis

- Disposer d'un cluster Managed Kubernetes OVHcloud avec le plan Standard.

## En pratique

### Qu'est-ce que CiliumNodeConfig

Comme indiqué dans la [documentation de Cilium](https://docs.cilium.io/en/stable/configuration/per-node-config/#ciliumnodeconfig-objects) :

Un objet `CiliumNodeConfig` permet de remplacer les arguments du ConfigMap / Agent.

Il se compose d'un ensemble de champs et d'un sélecteur d'étiquettes. Le sélecteur d'étiquettes définit à quels nœuds la configuration s'applique.

Comme c'est la norme dans Kubernetes, un sélecteur d'étiquettes vide (par exemple : `{}`) sélectionne tous les nœuds.

### Valeurs possibles de CiliumNodeConfig

Le projet Cilium ne fournit pas de liste exhaustive des clés et valeurs possibles à positionner dans la ConfigMap (et par conséquent dans le champ `specs` d'un objet `CiliumNodeConfig`).

Cependant ces clés peuvent être trouvées dans le template Helm du fichier [cilium-configmap](https://github.com/cilium/cilium/blob/main/install/kubernetes/cilium/templates/cilium-configmap.yaml).

> [!warning]
> Assurez-vous de lire les limites décrites plus bas lorsque vous définissez les valeurs dans un object `CiliumNodeConfig`.

### Limite d'utilisation de CiliumNodeConfig

En raison de la façon dont les clusters Managed Kubernetes sont déployés, certaines configurations ne sont pas supportés bien que les object `CiliumNodeConfig` permettent de les utiliser.

#### Remplacement de kube-proxy

À la création du cluster, le composant kube-proxy est remplacé par Cilium et bien qu'un object `CiliumNodeConfig` puisse définir le paramètre `kube-proxy-replacement: "false"`, cela ne fonctionnera pas correctement et aura des conséquence imprévues.

### Exemple de personnalisation

Lors de la personnalisation de la configuration de Cilium à l'aide d'un object `CiliumNodeConfig`, il est nécessaire de redémarrer le DaemonSet `cilium` :

```bash
kubectl -n kube-system rollout restart daemonset cilium
```

Vous pouvez valider que la configuration a bien été appliquée en regardant les valeurs définies dans les logs de `cilium` :

```bash
kubectl -n kube-system logs -l k8s-app=cilium
```

> [!warning]
> Les exemples suivants peuvent avoir divers effets en fonction de votre environnement et peuvent interrompore le fonctionnement de votre cluster.
> Aucune garantie n'est fournie avec ces exemples et vous devez toujours consulter la documentation de Cilium pour en comprendre les effets.

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

Après création, redémarrez `cilium` et vérifiez les logs pour vous assurer que les paramètres sont pris en compte.

### Activer le chiffrement transparent avec wireguard

Pour activer le [chiffrement transparent avec Wireguard](https://docs.cilium.io/en/stable/security/network/encryption-wireguard/), appliquez la configuration `CiliumNodeConfig` suivante :

```yaml
apiVersion: cilium.io/v2
kind: CiliumNodeConfig
metadata:
  namespace: kube-system
  name: enable-wireguard
spec:
  nodeSelector: {}
  defaults:
    enable-wireguard: "true"
```

Vous pouvez également régler le keepalive de Wireguard (désactivé par défaut) en utilisant la clé `wireguard-persistent-keepalive`:

```yaml
apiVersion: cilium.io/v2
kind: CiliumNodeConfig
metadata:
  namespace: kube-system
  name: enable-wireguard-with-persistent-keepalive
spec:
  nodeSelector: {}
  defaults:
    enable-wireguard: "true"
    wireguard-persistent-keepalive: "20s"
```

Après création, redémarrez `cilium` et vérifiez les logs pour vous assurer que les paramètres sont pris en compte.

### Tuning Cilium's performance

[Le guide de réglage de Cilium](https://docs.cilium.io/en/stable/operations/performance/tuning/) fournit des astuces pour optimiser les performances selon vos besoins.

Voici un exemple d'une telle configuration en utilisant un objet `CiliumNodeConfig` :

```yaml
apiVersion: cilium.io/v2
kind: CiliumNodeConfig
metadata:
  namespace: kube-system
  name: performance-tuning-example
spec:
  nodeSelector: {}
  defaults:
    routing-mode: "native"
    datapath-mode: "netkit" # Beta feature
    enable-bpf-masquerade: "true"
    bpf-distributed-lru: "true"
    bpf-map-dynamic-size-ratio: "0.08"
    enable-ipv4: "true"
    enable-ipv4-big-tcp: "true"
    enable-bpf-clock-probe: "true"
```

Après création, redémarrez `cilium` et vérifiez les logs pour vous assurer que les paramètres sont pris en compte.

## Aller plus loin

Pour avoir une vue d'ensemble de Managed Kubernetes Service d'OVHcloud, consultez [cette page](/links/public-cloud/kubernetes).

Pour en savoir plus sur l'utilisation pratique de votre cluster Kubernetes, nous vous invitons à consulter [nos tutoriels](/products/public-cloud-containers-orchestration-managed-kubernetes-k8s).

Si vous avez besoin de formation ou d'une assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander l'assistance des experts de notre équipe Professional Services pour votre cas d'utilisation et projet spécifiques.

Rejoignez notre [communauté d'utilisateurs](/links/community).
