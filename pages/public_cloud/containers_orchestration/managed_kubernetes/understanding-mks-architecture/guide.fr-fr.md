---
title: "Comprendre l'architecture d'OVHcloud Managed Kubernetes"
excerpt: "Découvrez le fonctionnement d'OVHcloud Managed Kubernetes Service : control plane, worker nodes, réseau et stockage"
updated: 2026-06-15
---

## Objectif

**Ce guide explique l'architecture d'OVHcloud Managed Kubernetes Service (MKS) pour vous aider à comprendre comment vos clusters sont déployés, gérés et connectés. Comprendre cette architecture vous aidera à prendre des décisions éclairées concernant la configuration, le dépannage et le dimensionnement de votre cluster.**

## Vue d'ensemble

OVHcloud Managed Kubernetes Service est une offre Kubernetes certifiée CNCF qui abstrait la complexité de la gestion du control plane tout en vous donnant un contrôle total sur vos worker nodes et vos workloads.

```text
+------------------------------------------------------------------+
|                    OVHcloud Managed Kubernetes                    |
+------------------------------------------------------------------+
|                                                                  |
|  +------------------------+      +----------------------------+  |
|  |     CONTROL PLANE      |      |       WORKER NODES         |  |
|  |  (Géré par OVHcloud)   |      |  (Votre responsabilité)    |  |
|  +------------------------+      +----------------------------+  |
|  |                        |      |                            |  |
|  |  +------------------+  |      |  +---------+  +---------+  |  |
|  |  |   API Server     |  |      |  | Node 1  |  | Node 2  |  |  |
|  |  +------------------+  |      |  |+--+ +--+|  |+--+ +--+|  |  |
|  |  +------------------+  |      |  ||P1| |P2||  ||P3| |P4||  |  |
|  |  |   Controller     |  |<---->|  |+--+ +--+|  |+--+ +--+|  |  |
|  |  |   Manager        |  |      |  +---------+  +---------+  |  |
|  |  +------------------+  |      |                            |  |
|  |  +------------------+  |      |  +---------+               |  |
|  |  |   Scheduler      |  |      |  | Node 3  |               |  |
|  |  +------------------+  |      |  |+--+ +--+|               |  |
|  |  +------------------+  |      |  ||P5| |P6||               |  |
|  |  |   etcd           |  |      |  |+--+ +--+|               |  |
|  |  +------------------+  |      |  +---------+               |  |
|  |                        |      |                            |  |
|  +------------------------+      +----------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
      P1, P2, ... = Vos Pods s'exécutant sur chaque node
```

## Architecture du Control Plane

Le control plane est le cerveau de votre cluster Kubernetes. OVHcloud gère entièrement ce composant, qui inclut :

- **API Server** : L'interface principale du control plane Kubernetes, gérant toutes les requêtes API
- **etcd** : Le magasin de données clé-valeur distribué qui contient l'état et la configuration du cluster
- **Controller Manager** : Exécute les processus de contrôle (node controller, replication controller, etc.)
- **Scheduler** : Assigne les pods aux nodes en fonction des besoins en ressources et des contraintes

### Ce qu'OVHcloud gère pour vous

OVHcloud gère tous les aspects opérationnels du control plane :

| Composant | Responsabilité OVHcloud |
|-----------|------------------------|
| API Server | Déploiement, mise à l'échelle, haute disponibilité, correctifs de sécurité |
| etcd | Sauvegardes, chiffrement au repos, santé du cluster |
| Controller Manager | Mises à jour, configuration, supervision |
| Scheduler | Mises à jour, configuration |
| Versions Kubernetes | Disponibilité des nouvelles versions mineures, correctifs de sécurité |

> [!primary]
>
> **À propos des mises à jour Kubernetes** : OVHcloud met à disposition les nouvelles versions mineures de Kubernetes. Vous décidez quand déclencher la mise à jour. La seule exception concerne les clusters exécutant une version End-of-Life - dans ce cas, OVHcloud forcera une mise à jour vers la version suivante après notification préalable.
>

### Plans Free vs Standard : différences du Control Plane

L'architecture du control plane diffère significativement entre les plans :

```text
PLAN FREE                                PLAN STANDARD
+--------------------+                   +------------------------------------------------+
|   Zone unique      |                   |              Déploiement Multi-AZ              |
|                    |                   |                                                |
|  +-------------+   |                   |   Zone A        Zone B        Zone C           |
|  |Control Plane|   |                   |  +------+      +------+      +------+          |
|  |  (partagé)  |   |                   |  | CP   |      | CP   |      | CP   |          |
|  +-------------+   |                   |  |Replica|     |Replica|     |Replica|         |
|  +-------------+   |                   |  +------+      +------+      +------+          |
|  |    etcd     |   |                   |  | etcd |      | etcd |      | etcd |          |
|  |  (partagé)  |   |                   |  |replica|     |replica|     |replica|         |
|  | max 400MB   |   |                   |  +------+      +------+      +------+          |
|  +-------------+   |                   |       \           |           /                |
|                    |                   |        \          |          /                 |
|  SLO: 99.5%        |                   |         +---------+---------+                  |
|                    |                   |         | etcd dédié 8GB    |                  |
|                    |                   |         +--------------------+                 |
|                    |                   |                                                |
|                    |                   |  SLA: 99.99%                                   |
+--------------------+                   +------------------------------------------------+
```

| Fonctionnalité | Plan Free | Plan Standard |
|----------------|-----------|---------------|
| Control Plane | Géré, zone unique | Géré, résilient cross-AZ |
| Disponibilité | 99.5% SLO | 99.99% SLA (en GA) |
| Stockage etcd | Partagé, jusqu'à 400MB | Dédié, jusqu'à 8GB, distribué sur 3 AZs |
| Taille max cluster | 100 nodes | 500 nodes |
| Disponibilité régionale | Zone unique | 3 Zones de disponibilité |
| CNI | Canal (Flannel + Calico) | Cilium |

> [!primary]
>
> Selon les engagements SLA/SLO, un cluster Free peut connaître jusqu'à ~43 minutes d'indisponibilité par mois (pire cas), tandis qu'un cluster Standard limite cela à environ 4 minutes maximum.
>

## Architecture des Worker Nodes

Les worker nodes sont les machines où vos applications conteneurisées s'exécutent. Contrairement au control plane, vous avez un contrôle direct sur la configuration des nodes.

### Comment les nodes sont provisionnés

Les worker nodes sont basés sur des instances OVHcloud Public Cloud. Quand vous créez un node pool :

1. OVHcloud provisionne des instances Public Cloud avec la flavor choisie
2. Les instances sont automatiquement configurées avec les composants Kubernetes requis
3. Les nodes s'enregistrent auprès du control plane via Konnectivity

Le CNI diffère selon votre plan :

```text
PLAN FREE - Worker Node                     PLAN STANDARD - Worker Node
+------------------------------+            +------------------------------+
|                              |            |                              |
| +----------+ +-------------+ |            | +----------+ +-------------+ |
| | kubelet  | | kube-proxy  | |            | | kubelet  | | kube-proxy  | |
| +----------+ +-------------+ |            | +----------+ +-------------+ |
|                              |            |                              |
| +----------+ +-------------+ |            | +----------+ +-------------+ |
| |containerd| | CNI: Canal  | |            | |containerd| | CNI: Cilium | |
| |          | | (Flannel +  | |            | |          | | (basé eBPF) | |
| |          | |  Calico)    | |            | |          | |             | |
| +----------+ +-------------+ |            | +----------+ +-------------+ |
|                              |            |                              |
| +-------+ +-------+ +------+ |            | +-------+ +-------+ +------+ |
| | Pod A | | Pod B | | ...  | |            | | Pod A | | Pod B | | ...  | |
| +-------+ +-------+ +------+ |            | +-------+ +-------+ +------+ |
|                              |            |                              |
| OS: Ubuntu 22.04 LTS         |            | OS: Ubuntu 22.04 LTS         |
+------------------------------+            +------------------------------+
```

### Concept des Node Pools

Les nodes sont organisés en node pools - des groupes de nodes partageant la même configuration :

- **Flavor** : Type d'instance (b3-8, b3-16, t1-45 pour GPU, etc.)
- **Paramètres d'autoscaling** : Min/max nodes, seuils de scale-down
- **Anti-affinité** : Distribuer les nodes sur différents hyperviseurs
- **Facturation** : Horaire ou mensuelle (pour les flavors gen2), Saving Plans pour gen3 et au-delà
- **Labels et taints** : Pour le scheduling des workloads

```text
+------------------------------------------------------------------+
|                         CLUSTER KUBERNETES                        |
+------------------------------------------------------------------+
|                                                                  |
|  NODE POOL: "general"          NODE POOL: "gpu"                  |
|  Flavor: b3-16                 Flavor: t1-45                     |
|  Autoscale: true               Autoscale: false                  |
|  Min: 2, Max: 10               Nodes: 2                          |
|  +---------+ +---------+       +---------+ +---------+           |
|  | Node 1  | | Node 2  |  ...  | GPU-1   | | GPU-2   |           |
|  |+--+ +--+| |+--+ +--+|       |+--+ +--+| |+--+ +--+|           |
|  ||P1| |P2|| ||P3| |P4||       ||P5| |P6|| ||P7| |P8||           |
|  |+--+ +--+| |+--+ +--+|       |+--+ +--+| |+--+ +--+|           |
|  +---------+ +---------+       +---------+ +---------+           |
|                                                                  |
|  NODE POOL: "high-memory"                                        |
|  Flavor: r3-128                                                  |
|  Anti-affinité: true (max 5 nodes)                               |
|  +---------+ +---------+ +---------+                             |
|  | Node 1  | | Node 2  | | Node 3  |                             |
|  |+--+ +--+| |+--+ +--+| |+--+ +--+|                             |
|  ||P9||P10|| ||P ||P  || ||P ||P  ||                             |
|  |+--+ +--+| |+--+ +--+| |+--+ +--+|                             |
|  +---------+ +---------+ +---------+                             |
|                                                                  |
+------------------------------------------------------------------+
```

### Cycle de vie des nodes

```text
                              CYCLE DE VIE NORMAL
  +------------+      +----------+      +-----------+      +------------+
  |            |      |          |      |           |      |            |
  | Installing |----->|  Ready   |----->|  Draining |----->| Terminated |
  |            |      |          |      |           |      |            |
  +------------+      +-----+----+      +-----------+      +------------+
                            |
                            | (Le node devient défaillant)
                            v
                      +----------+
                      | NotReady |
                      +-----+----+
                            |
                            | (Après 10 min)
                            v
              +-------------------------------+
              |         AUTO-HEALING          |
              +-------------------------------+
              |                               |
              |  PLAN FREE     PLAN STANDARD  |
              |                               |
              | +----------+   +------------+ |
              | | Le node  |   | Le node    | |
              | | est      |   | est        | |
              | | réinstall|   | supprimé & | |
              | | in-place |   | nouveau    | |
              | |          |   | créé       | |
              | +----+-----+   +-----+------+ |
              |      |               |        |
              |      v               v        |
              | +----------+   +------------+ |
              | |  Ready   |   | Installing | |
              | +----------+   +-----+------+ |
              |                      |        |
              |                      v        |
              |                +----------+   |
              |                |  Ready   |   |
              |                +----------+   |
              |                               |
              +-------------------------------+
```

- **Installing** : Le node est en cours de provisionnement et de configuration
- **Ready** : Le node est sain et peut recevoir des pods
- **NotReady** : Le node a des problèmes (réseau, ressources, etc.)
- **Draining** : Le node est en cours d'évacuation (graceful, respecte les PDBs pendant 10 min max)
- **Terminated** : Le node est supprimé

> [!warning]
>
> Les worker nodes GPU (flavors t1 et t2) peuvent prendre plus d'une heure pour atteindre l'état ready.
>

### Auto-healing

OVHcloud surveille la santé des nodes. Si un node reste en état `NotReady` pendant plus de 10 minutes, l'auto-healing est déclenché :

- **Plan Free** : Le node est réinstallé in-place
- **Plan Standard** : Le node est supprimé et un nouveau est créé

Cela garantit la stabilité du cluster mais signifie :

- Ne stockez pas de données importantes directement sur les nodes
- Utilisez toujours des Persistent Volumes pour les workloads stateful
- Concevez vos applications pour être résilientes aux pannes de nodes

### Mises à jour des nodes

Lors de la mise à jour des versions Kubernetes, MKS propose deux stratégies pour mettre à jour les worker nodes :

```text
+===============================================================================+
|                     STRATÉGIES DE MISE À JOUR DES NODES                       |
+===============================================================================+
|                                                                               |
|  MISE À JOUR IN-PLACE                     ROLLING UPGRADE                     |
|  (Free)                                   (Standard uniquement pour l'instant)|
|                                                                               |
|  Même instance, composants                Nouvelles instances remplacent      |
|  mis à jour                               les anciennes                       |
|                                                                               |
|  +-------+  +-------+  +-------+          +-------+  +-------+  +-------+     |
|  |Node 1 |  |Node 2 |  |Node 3 |          |Node 1 |  |Node 2 |  |Node 3 |     |
|  | v1.33 |  | v1.33 |  | v1.33 |          | v1.33 |  | v1.33 |  | v1.33 |     |
|  +---+---+  +-------+  +-------+          +-------+  +-------+  +---+---+     |
|      |                                                              |         |
|      | 1. Cordon & Drain                    1. Créer nouveau   +-------+      |
|      v                                         node            |Node 4 |      |
|  +-------+                                                     | v1.34 |      |
|  |Node 1 |  Pods déplacés                                      +---+---+      |
|  |UPGRADE|  vers autres nodes               2. Cordon & Drain      |          |
|  +---+---+                                     ancien node    <----+          |
|      |                                                                        |
|      | 2. Mise à jour                         +-------+                       |
|      v    composants                          |Node 3 |  3. Migrer pods       |
|  +-------+  +-------+  +-------+              |DRAIN  |     vers nouveau node |
|  |Node 1 |  |Node 2 |  |Node 3 |              +---+---+                       |
|  | v1.34 |  | v1.33 |  | v1.33 |                  |                           |
|  +-------+  +---+---+  +-------+                  | 4. Supprimer ancien node  |
|                 |                                 v                           |
|      3. Répéter pour                          +-------+  +-------+  +-----+   |
|         node suivant                          |Node 1 |  |Node 2 |  |Node |   |
|                 |                             | v1.33 |  | v1.33 |  |4    |   |
|                 v                             +-------+  +-------+  |v1.34|   |
|  +-------+  +-------+  +-------+                                    +-----+   |
|  |Node 1 |  |Node 2 |  |Node 3 |                                              |
|  | v1.34 |  | v1.34 |  | v1.34 |              5. Répéter jusqu'à la fin       |
|  +-------+  +-------+  +-------+                                              |
|                                                                               |
+===============================================================================+
```

#### Mises à jour in-place

Avec les mises à jour in-place, chaque worker node est mis à jour directement sur son instance Public Cloud existante :

1. MKS met le node en **cordon** (le marque comme non-schedulable)
2. MKS **draine** le node (évacue tous les pods, en respectant les PodDisruptionBudgets)
3. Les composants Kubernetes sont **mis à jour** sur la même instance
4. Le node redevient **Ready**
5. Le processus se **répète** pour le node suivant (strictement un par un)

**Caractéristiques :**

- Pas d'instances supplémentaires requises
- Préserve l'identité de l'instance (mêmes IPs, même facturation)
- Processus plus lent (séquentiel, un node à la fois)
- Réduction temporaire de capacité pendant la mise à jour de chaque node

> [!warning]
>
> Les mises à jour in-place peuvent créer une pression sur les ressources si votre cluster n'a pas assez de capacité disponible pour accueillir les pods évacués du node en cours de mise à jour. Assurez-vous que vos nodes restants peuvent gérer la charge supplémentaire.
>

**Cas d'usage :**

- Instances facturées mensuellement (conserver la même instance)
- Besoin de préserver les adresses IP publiques
- Environnements sensibles aux coûts (pas de coûts d'instances supplémentaires)

#### Rolling upgrades

Avec les rolling upgrades (actuellement disponibles uniquement sur le plan Standard), de nouveaux worker nodes sont créés avec la version Kubernetes cible :

1. MKS **crée** un nouveau node avec la version cible
2. MKS met en **cordon et draine** un ancien node
3. Les workloads **migrent** vers le nouveau node
4. L'ancien node est **supprimé**
5. Le processus se **répète** jusqu'à ce que tous les nodes soient mis à jour

**Caractéristiques :**

- Nécessite une capacité supplémentaire temporaire (nouveaux nodes créés avant suppression des anciens)
- Mises à jour plus rapides avec une meilleure disponibilité
- État propre des nodes (instances fraîches)
- Meilleure gestion de la migration des workloads

> [!primary]
>
> Dans la roadmap future, les rolling upgrades supporteront les paramètres Kubernetes `maxSurge` et `maxUnavailable` pour contrôler combien de nodes peuvent être ajoutés ou mis hors ligne simultanément.
>

**Cas d'usage :**

- Environnements de production nécessitant une haute disponibilité
- Cycles de mise à jour plus rapides
- Quand un état propre des nodes est préféré

#### Comparaison

| Aspect | In-place | Rolling |
|--------|----------|---------|
| Disponibilité | Free & Standard | Standard uniquement (pour l'instant) |
| Instances supplémentaires | Non | Oui (temporaire) |
| Vitesse | Plus lent (séquentiel) | Plus rapide (parallèle possible) |
| Identité de l'instance | Préservée | Nouvelles instances |
| IPs publiques | Préservées | Changées |
| Pression sur les ressources | Plus élevée (capacité réduite) | Plus faible (capacité supplémentaire) |
| Idéal pour | Optimisation des coûts | Haute disponibilité |

### Ressources réservées

Chaque worker node réserve des ressources pour les composants système Kubernetes :

| Ressource | Formule |
|----------|---------|
| CPU | 15% de 1 CPU + 0.5% de tous les cœurs CPU |
| RAM | Fixe 1590 MB |
| Stockage | log10(stockage total en GB) * 10 + 10% du stockage total |

Exemple pour la flavor b3-16 : 170m CPU, 1.59GB RAM, 30GB stockage réservés.

## Architecture réseau

### Vue d'ensemble du réseau cluster

```text
+====================================================================================+
|                             ARCHITECTURE RÉSEAU                                     |
+====================================================================================+
|                                                                                    |
|   INTERNET                                                                         |
|   +------+                                                                         |
|   |      |                                                                         |
|   +--+---+                                                                         |
|      |                                                                             |
|      +------------------+------------------------+                                 |
|      |                  ^                        ^                                 |
|      | OPTION 1         | OPTION 2               | OPTION 3                        |
|      | Load Balancer    | Floating IPs nodes     | Gateway (SNAT)                  |
|      | (recommandé)     | (accès direct)         | (sortant uniq.)                 |
|      |                  |                        |                                 |
|      v                  |                        |                                 |
|   +----------+          |                 +------------+                           |
|   |Floating  |          |                 |  Gateway   |                           |
|   |   IP     |          |                 | (Octavia)  |                           |
|   +----+-----+          |                 +-----+------+                           |
|        |                |                       ^                                  |
|        v                |                       | SNAT                             |
|   +----------+          |                       | (sortant)                        |
|   |   Load   |          |                       |                                  |
|   | Balancer |          |                       |                                  |
|   | (Octavia)|          |                       |                                  |
|   +----+-----+          |                       |                                  |
|        |                |                       |                                  |
|   +----|----------------|----------------------------------------------------+     |
|   |    |    RÉSEAU PRIVÉ (ou vRack)             |                            |     |
|   |    v                v                       |                            |     |
|   | +--------------------------------------------------------------------+   |     |
|   | |                      CLUSTER KUBERNETES                            |   |     |
|   | |                                                                    |   |     |
|   | |  +------------+     +------------+     +------------+              |   |     |
|   | |  |   Node 1   |     |   Node 2   |     |   Node 3   |--------------+   |     |
|   | |  | +--------+ |     | +--------+ |     | +--------+ |              |   |     |
|   | |  | |Floating| |     | |Floating| |     | |Floating| |  (Option 2)  |   |     |
|   | |  | |IP (opt)| |     | |IP (opt)| |     | |IP (opt)| |              |   |     |
|   | |  | +--------+ |     | +--------+ |     | +--------+ |              |   |     |
|   | |  | +--+ +--+  |     | +--+ +--+  |     | +--+ +--+  |              |   |     |
|   | |  | |P1| |P2|  |<--->| |P3| |P4|  |<--->| |P5| |P6|  |              |   |     |
|   | |  | +--+ +--+  |     | +--+ +--+  |     | +--+ +--+  |              |   |     |
|   | |  +------------+     +------------+     +------------+              |   |     |
|   | |        ^                  ^                  ^                     |   |     |
|   | |        +------------------+------------------+                     |   |     |
|   | |                           |                                        |   |     |
|   | |              CNI: Canal (Free) / Cilium (Standard)                 |   |     |
|   | +--------------------------------------------------------------------+   |     |
|   +--------------------------------------------------------------------------+     |
|                                                                                    |
+====================================================================================+
```

### Options d'accès Internet

Les clusters MKS supportent trois schémas de connectivité Internet :

| Option | Direction | Cas d'usage |
|--------|-----------|-------------|
| **Load Balancer** | Entrant | Exposer des services (recommandé en production) |
| **Floating IPs sur les nodes** | Entrant & Sortant | Accès direct aux nodes, préserver l'IP source |
| **Gateway (SNAT)** | Sortant uniquement | Sortie par défaut, IP partagée pour tous les nodes |

**Option 1 - Load Balancer (Octavia) :**

- Recommandé pour exposer des services sur Internet
- Fournit health checking, distribution de charge
- Point d'entrée unique avec une Floating IP
- Supporte le load balancing L4 (TCP/UDP)

**Option 2 - Floating IPs sur les nodes :**

- Chaque node peut avoir sa propre Floating IP attachée
- Permet un accès entrant direct (ex: via services NodePort)
- Préserve les adresses IP source pour le trafic sortant (pas de SNAT)
- Utile quand les pods doivent atteindre des services externes qui filtrent par IP
- L'IP est préservée lors des mises à jour in-place, mais change avec les rolling upgrades

> [!warning]
>
> Pour attacher une Floating IP à un node, une Gateway (routeur OpenStack) doit être configurée sur le subnet du réseau privé. Sans Gateway, les Floating IPs ne peuvent pas être associées aux instances de ce subnet.
>

**Option 3 - Gateway (SNAT) :**

- Par défaut pour l'accès Internet sortant quand aucune Floating IP n'est attachée
- Tous les nodes partagent la même IP sortante (IP de la Gateway)
- N'EXPOSE PAS les services sur Internet
- L'IP source est traduite (SNAT)

### CNI : Container Network Interface

Le plugin CNI diffère selon les plans :

| Plan | CNI | Description |
|------|-----|-------------|
| **Free** | Canal (Flannel + Calico) | Flannel pour le réseau overlay, Calico pour les network policies |
| **Standard** | Cilium | Basé sur eBPF, haute performance, observabilité avancée |

Sous-réseaux réservés (ne pas utiliser dans votre réseau privé) :

**Plan Free :**

| Sous-réseau | Usage |
|--------|---------|
| 10.2.0.0/16 | Réseau des pods |
| 10.3.0.0/16 | Réseau des services |
| 172.17.0.0/16 | Docker daemon (legacy) |

**Plan Standard :**

| Sous-réseau | Usage |
|--------|---------|
| 10.240.0.0/13 | Réseau des pods |
| 10.3.0.0/16 | Réseau des services |

### Options d'exposition des services

Les Services Kubernetes peuvent être exposés de plusieurs façons :

```text
+------------------------------------------------------------------+
|                    OPTIONS D'EXPOSITION DES SERVICES              |
+------------------------------------------------------------------+
|                                                                  |
|  ClusterIP (Interne uniquement)                                  |
|  +------------------+                                            |
|  |  10.3.x.x        |  Accessible uniquement dans le cluster     |
|  +------------------+                                            |
|                                                                  |
|  NodePort (Accès direct aux nodes)                               |
|  +------------------+                                            |
|  |  <NodeIP>:30000- |  Accessible sur tous les nodes             |
|  |           32767  |  (Plage de ports 30000-32767)              |
|  +------------------+                                            |
|                                                                  |
|  LoadBalancer (Recommandé pour la production)                    |
|  +------------------+     +------------------+                   |
|  |  Floating IP     |---->|  Octavia LB      |---> Nodes         |
|  |  (Public)        |     |  (L4)            |                   |
|  +------------------+     +------------------+                   |
|                                                                  |
|  Ingress (Routage L7)                                            |
|  +------------------+     +------------------+                   |
|  |  LoadBalancer    |---->|  Ingress         |---> Services      |
|  |                  |     |  Controller      |                   |
|  |                  |     |  (nginx, etc.)   |                   |
|  +------------------+     +------------------+                   |
|                                                                  |
+------------------------------------------------------------------+
```

### Intégration Load Balancer

Créer un `Service` de type `LoadBalancer` provisionne automatiquement un OVHcloud Public Cloud Load Balancer (basé sur OpenStack Octavia) :

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
  annotations:
    # Requis pour Kubernetes < 1.31
    loadbalancer.ovhcloud.com/class: octavia
    # Optionnel : choisir la taille du LB (small, medium, large, xl)
    loadbalancer.ovhcloud.com/flavor: small
spec:
  type: LoadBalancer
  ports:
    - port: 80
      targetPort: 8080
  selector:
    app: my-app
```

> [!primary]
>
> Pour les versions Kubernetes >= 1.31, Octavia est le Load Balancer par défaut et aucune annotation n'est requise.
>

### Options de réseau privé

OVHcloud propose deux façons d'utiliser les réseaux privés avec MKS :

#### 1. Réseau privé Public Cloud (sans vRack)

Pour connecter les services OVHcloud Public Cloud dans la même région :

- Clusters MKS
- Instances Public Cloud
- Bases de données managées (DBaaS)
- Autres services Public Cloud

C'est l'option la plus simple quand vous avez uniquement besoin de connectivité privée entre ressources Public Cloud.

#### 2. Intégration vRack

Pour une interconnectivité plus large entre les univers produits OVHcloud et entre régions :

```text
+------------------------------------------------------------------+
|                      INTÉGRATION vRack                            |
+------------------------------------------------------------------+
|                                                                  |
|  +------------------------+    +------------------------+        |
|  |  Cluster MKS           |    |  Serveurs dédiés       |        |
|  |  (Région: GRA)         |    |  (Bare Metal)          |        |
|  +------------------------+    +------------------------+        |
|           |                              |                       |
|           v                              v                       |
|  +----------------------------------------------------------+    |
|  |                        vRack                              |   |
|  |   (Réseau privé Layer 2 à travers l'univers OVHcloud)     |   |
|  +----------------------------------------------------------+    |
|           |                              |                       |
|           v                              v                       |
|  +------------------------+    +------------------------+        |
|  |  Hosted Private Cloud  |    |  Cluster MKS           |        |
|  |  (VMware)              |    |  (Région: SBG)         |        |
|  +------------------------+    +------------------------+        |
|                                                                  |
+------------------------------------------------------------------+
```

Le vRack permet :

- Connectivité privée inter-régions
- Interconnexion avec les serveurs Bare Metal
- Interconnexion avec Hosted Private Cloud (VMware)
- Interconnexion avec d'autres produits dédiés OVHcloud

> [!warning]
>
> Avec un réseau privé (avec ou sans vRack), vous verrez toujours une IPv4 publique sur les worker nodes. Cette IP n'est pas joignable depuis Internet et est utilisée exclusivement pour l'administration des nodes et la communication avec le control plane.
>

## Architecture de stockage

### Volumes persistants avec Cinder CSI

MKS utilise le driver OpenStack Cinder CSI pour le stockage persistant :

```text
+------------------------------------------------------------------+
|                    ARCHITECTURE DE STOCKAGE                       |
+------------------------------------------------------------------+
|                                                                  |
|  KUBERNETES                           OVHcloud BLOCK STORAGE     |
|                                                                  |
|  +------------------+                                            |
|  |      Pod         |                                            |
|  |  +------------+  |                                            |
|  |  | Container  |  |                                            |
|  |  |  /data     |  |    Montage                                 |
|  |  +-----+------+  |       |                                    |
|  +--------+---------+       |                                    |
|           |                 |                                    |
|           v                 v                                    |
|  +------------------+     +------------------+                   |
|  |       PVC        |<--->|       PV         |                   |
|  | (Demande)        |     | (Provisionné)    |                   |
|  +------------------+     +--------+---------+                   |
|                                    |                             |
|                                    | Cinder CSI                  |
|                                    v                             |
|                           +------------------+                   |
|                           |  Volume Block    |                   |
|                           |  Storage         |                   |
|                           |  (Cinder)        |                   |
|                           +------------------+                   |
|                                                                  |
+------------------------------------------------------------------+
```

### Classes de stockage

| Classe de stockage | Description | IOPS | Recommandé pour |
|--------------|-------------|------|-----------------|
| `csi-cinder-high-speed` (défaut) | SSD performance fixe | Jusqu'à 3 000 | Volumes jusqu'à 100GB |
| `csi-cinder-high-speed-gen2` | NVMe performance progressive | 30 IOPS/GB (max 20k) | Volumes > 100GB |
| `csi-cinder-classic` | Disques rotatifs traditionnels | 200 garantis | Workloads sensibles au coût |
| Variantes `*-luks` | Versions chiffrées | Identique à la base | Données sensibles |

### Modes d'accès et limitations

| Mode d'accès | Support | Description |
|-------------|---------|-------------|
| ReadWriteOnce (RWO) | Supporté | Lecture-écriture sur un seul node |
| ReadOnlyMany (ROX) | Non supporté* | Lecture seule multi-nodes |
| ReadWriteMany (RWX) | Non supporté* | Lecture-écriture multi-nodes |

*Pour les volumes multi-attach (RWX), utilisez une de ces solutions de stockage OVHcloud :

| Solution | Protocole | Documentation |
|----------|----------|---------------|
| **File Storage** (Public Cloud) | NFS | [Documentation File Storage](/products/public-cloud-storage-file-storage) |
| **Enterprise File Storage** | NFS | [EFS avec MKS](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_trident_csi) |
| **NAS-HA** | NFS | [NAS-HA avec MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-multi-attach-persistent-volumes-with-ovh-nas-ha) |
| **Cloud Disk Array** | CephFS | [CDA avec MKS](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-multi-attach-persistent-volumes-with-ovh-cloud-disk-array) |

> [!warning]
>
> Un worker node peut avoir un maximum de 100 volumes persistants Cinder attachés.
>

## Modèle de sécurité

### Responsabilité partagée

```text
+------------------------------------------------------------------+
|                    MODÈLE DE RESPONSABILITÉ PARTAGÉE              |
+------------------------------------------------------------------+
|                                                                  |
|  RESPONSABILITÉ OVHcloud           VOTRE RESPONSABILITÉ          |
|  +---------------------------+    +---------------------------+  |
|  |                           |    |                           |  |
|  | - Sécurité control plane  |    | - Sécurité applications   |  |
|  | - Mises à jour control    |    | - Images conteneurs       |  |
|  |   plane                   |    | - Configuration RBAC      |  |
|  | - Correctifs OS nodes     |    | - Network policies        |  |
|  | - Chiffrement etcd        |    | - Gestion des secrets     |  |
|  | - Sécurité infrastructure |    | - Isolation des workloads |  |
|  | - Sécurité physique       |    | - Sauvegarde des données  |  |
|  | - Provisionnement nodes   |    | - Mises à jour applis     |  |
|  | - Auto-healing            |    | - Déclenchement upgrade   |  |
|  | - Dispo. versions K8s     |    |   K8s                     |  |
|  | - Force upgrade vers. EOL |    | - Gestion des accès       |  |
|  |                           |    |                           |  |
|  +---------------------------+    +---------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

> [!primary]
>
> **À propos des mises à jour de version Kubernetes** : OVHcloud fournit les nouvelles versions mineures. Vous décidez quand mettre à jour. Cependant, si votre cluster exécute une version End-of-Life, OVHcloud forcera une mise à jour vers la version suivante après notification préalable.
>

### Mécanismes de contrôle d'accès

1. **Authentification kubeconfig** : Téléchargé depuis l'espace client OVHcloud, donne un accès admin
2. **Intégration OIDC** : Connectez votre fournisseur d'identité pour le SSO
3. **Restrictions IP API server** : Limitez l'accès à des plages IP spécifiques
4. **RBAC** : Contrôle d'accès basé sur les rôles pour des permissions granulaires

### Fonctionnalités de sécurité

- **Plan Free** : Network policies via Calico
- **Plan Standard** : Network policies via Cilium (basé eBPF)
- Chiffrement des secrets en transit et au repos
- Isolation des nodes via les security groups
- Logs d'audit disponibles dans l'espace client

## Versions des composants

Versions logicielles actuelles (pour les dernières versions Kubernetes) :

| Composant | Plan Free | Plan Standard |
|-----------|-----------|---------------|
| OS | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |
| Kernel | 5.15-generic | 5.15-generic |
| Runtime conteneur | containerd 2.1.4 | containerd 2.1.4 |
| CNI | Canal (Calico v3.30.1 + Flannel v0.24.4) | Cilium |
| CSI | Cinder CSI v1.29.0 | Cinder CSI v1.29.0 |
| CoreDNS | v1.12.4 | v1.12.4 |
| Metrics Server | v0.8.0 | v0.8.0 |

Pour la matrice complète des versions, consultez [Plugins Kubernetes et versions logicielles](/pages/public_cloud/containers_orchestration/managed_kubernetes/software-versions-reserved-resources).

## Diagramme d'architecture : vue complète

```text
+=======================================================================================+
|                        OVHCLOUD MANAGED KUBERNETES SERVICE                             |
+=======================================================================================+
|                                                                                       |
|   INTERNET                                                                            |
|   +------+                                                                            |
|   |      |                                                                            |
|   +--+---+                                                                            |
|      |                                                                                |
|      +------------------+------------------------+                                    |
|      |                  |                        |                                    |
|      v                  |                        v                                    |
|   +----------+          |                 +------------+                              |
|   |Floating  |          |                 |  Gateway   | (SNAT pour                   |
|   |   IP     |          |                 | (Octavia)  |  sortant)                    |
|   +----+-----+          |                 +-----+------+                              |
|        |                |                       ^                                     |
|        v                |                       |                                     |
|   +----------+          |                       |                                     |
|   |   Load   |          |                       |                                     |
|   | Balancer |          |                       |                                     |
|   | (Octavia)|          |                       |                                     |
|   +----+-----+          |                       |                                     |
|        |                |                       |                                     |
|   +----|----------------|----------------------------------------------------+        |
|   |    |   RÉSEAU PRIVÉ (réseau Public Cloud ou vRack)                       |       |
|   |    v                |                       |                            |        |
|   | +--------------------------------------------------------------------+   |        |
|   | |                        CLUSTER MKS                                  |  |        |
|   | |                                                                    |   |        |
|   | |  CONTROL PLANE (Géré par OVHcloud)                                 |   |        |
|   | |  +--------------------------------------------------------------+  |   |        |
|   | |  |                                                              |  |   |        |
|   | |  |  FREE: Zone unique        STANDARD: Multi-AZ                 |  |   |        |
|   | |  |  +------------------+     +-------+ +-------+ +-------+      |  |   |        |
|   | |  |  | API | etcd | CM  |     |API|etcd| |API|etcd| |API|etcd|   |  |   |        |
|   | |  |  | Scheduler        |     | Zone A | | Zone B | | Zone C |   |  |   |        |
|   | |  |  +------------------+     +-------+ +-------+ +-------+      |  |   |        |
|   | |  |                                                              |  |   |        |
|   | |  +--------------------------------------------------------------+  |   |        |
|   | |                             ^                                      |   |        |
|   | |                             | Konnectivity                         |   |        |
|   | |                             v                                      |   |        |
|   | |  WORKER NODES                                                      |   |        |
|   | |  +------------------+ +------------------+ +------------------+    |   |        |
|   | |  |     Node 1       | |     Node 2       | |     Node 3       |----+   |        |
|   | |  | +-----+ +-----+  | | +-----+ +-----+  | | +-----+ +-----+  |    |   |        |
|   | |  | |Pod A| |Pod B|  | | |Pod C| |Pod D|  | | |Pod E| |Pod F|  |    |   |        |
|   | |  | +-----+ +-----+  | | +-----+ +-----+  | | +-----+ +-----+  |    |   |        |
|   | |  | kubelet|kube-prx | | kubelet|kube-prx | | kubelet|kube-prx |    |   |        |
|   | |  | containerd      | | containerd       | | containerd       |    |   |        |
|   | |  +--------+---------+ +--------+---------+ +--------+---------+    |   |        |
|   | |           |                    |                    |              |   |        |
|   | |           +--------------------+--------------------+              |   |        |
|   | |                                |                                   |   |        |
|   | |             FREE: Canal (Flannel + Calico)                         |   |        |
|   | |             STANDARD: Cilium (eBPF)                                |   |        |
|   | |                                                                    |   |        |
|   | +--------------------------------------------------------------------+   |        |
|   |                                                                          |        |
|   +--------------------------------------------------------------------------+        |
|                                                                                       |
|   STOCKAGE                                                                            |
|   +------------------+  +------------------+  +-------------------+                   |
|   |  Block Storage   |  |  Block Storage   |  |  File Storage     |                  |
|   |  (Cinder PV)     |  |  (Cinder PV)     |  |  (NFS - RWX)      |                   |
|   |  RWO uniquement  |  |  RWO uniquement  |  |  Multi-attach     |                  |
|   +------------------+  +------------------+  +-------------------+                   |
|                                                                                       |
+=======================================================================================+
```

## Aller plus loin

- [Limites connues](/pages/public_cloud/containers_orchestration/managed_kubernetes/known-limits)
- [Choisir le bon plan : Free vs Standard](/pages/public_cloud/containers_orchestration/managed_kubernetes/mks_plans)
- [Modèle de responsabilité](/pages/public_cloud/containers_orchestration/managed_kubernetes/responsibility-model)
- [Versions logicielles et ressources réservées](/pages/public_cloud/containers_orchestration/managed_kubernetes/software-versions-reserved-resources)
- [Utiliser le réseau privé vRack](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-vrack)
- [Volumes persistants](/pages/public_cloud/containers_orchestration/managed_kubernetes/setting-up-a-persistent-volume)
- [Exposer vos applications avec le Load Balancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Rejoignez notre [communauté d'utilisateurs](/links/community).
