---
title: "Choisir le bon plan OVHcloud Managed Kubernetes : Free ou Standard"
excerpt: "Découvrez les plans OVHcloud Managed Kubernetes : Free et Standard. Découvrez le plan qui convient à vos projets cloud et commencez rapidement."
updated: 2025-12-01
---

## Objectif

Ce guide présente un aperçu des plans du service OVHcloud Managed Kubernetes Service (MKS), en détaillant les options de plans disponibles **Free** et **Standard** ainsi que leurs principales caractéristiques. Il vise à aider les lecteurs à comprendre l'objectif de chaque plan et à naviguer entre les différences sans formuler de recommandations.

## Comparaison des plans Free et Standard

OVHcloud Managed Kubernetes Service (MKS) propose deux plans, **Plan Free** et **Plan Standard**, conçus pour répondre à différents types de charges de travail et d'utilisation. Cette section met en évidence leurs différences clés, en se concentrant sur l'architecture, la disponibilité et l'évolutivité.

### Plan de contrôle

Le plan de contrôle orchestre le cluster Kubernetes, en gérant le planification, l'échelle et les demandes d'API. Le plan Free propose un seul plan de contrôle géré à zone unique adapté au développement ou aux petits projets. En revanche, le plan Standard inclut une résilience entre les zones de disponibilité (*Availability Zones* ou AZ), garantissant que le cluster continue à fonctionner même si une zone AZ subit une panne.

Exemple : Un cluster au plan Standard peut rester entièrement fonctionnel en cas de panne AZ, alors qu'un cluster au plan Free dépend d'une seule zone.

### Disponibilité

La disponibilité mesure l'uptime attendu du service. Le plan Free offre un SLO de 99,5 %, adapté aux charges de travail non critiques. Le plan Standard propose un SLA de 99,99 % à l'étape de disponibilité générale, ce qui le rend adapté aux environnements de production nécessitant une haute fiabilité.

Exemple : Un cluster au plan Free peut connaître environ 43 minutes d'indisponibilité par mois, tandis qu'un cluster au plan Standard réduit cela à environ 4 minutes.

### Stockage etcd

etcd maintient l'état et la configuration du cluster. Le plan Free utilise un stockage partagé d'etcd avec une capacité maximale de 400 Mo, ce qui suffit pour de petits déploiements. Le plan Standard utilise un stockage dédié d'etcd jusqu'à 8 Go, supportant des clusters plus grands et des charges de travail plus lourdes.

### Taille maximale du cluster

La taille du cluster définit le nombre de nœuds de travail dans le cluster Kubernetes. Le plan Free supporte jusqu'à 100 nœuds, ce qui est adapté à l'apprentissage, aux tests ou aux projets à petite échelle. Le plan Standard évolue jusqu'à 500 nœuds, permettant des déploiements de production moyens à grands.

### Disponibilité régionale

La disponibilité régionale détermine le nombre de zones sur lesquelles le cluster est déployé. Le plan Free est limité à une seule zone, tandis que le plan Standard est déployé sur trois zones de de disponibilité, améliorant la résilience et minimisant l'impact des pannes au niveau des zones.

Exemple : Un cluster au plan Standard peut maintenir la continuité de l'application si une zone tombe en panne, tandis que les services d'un cluster au plan Free seraient interrompus.

### Résumé

Le tableau suivant résume les différences majeures entre le plan Free et le plan Standard du service OVHcloud Managed Kubernetes (MKS) :

| Plan                       | Free                        | Standard                                          |
| -------------------------- | --------------------------- | ------------------------------------------------- |
| ControlPlane               | Géré                        | Géré & résilient entre les zones AZ               |
| Disponibilité              | 99,5 % SLO                  | 99,99 % SLA (à l'étape de disponibilité générale) |
| etcd                       | Partagé, jusqu'à 400 Mo     | Dédiqué, jusqu'à 8 Go                             |
| Taille maximale du cluster | Jusqu'à 100 nœuds           | Jusqu'à 500 nœuds                                 |
| Disponibilité régionale    | Zone unique pour l'instant  | 3 zones AZ pour l'instant                         |

Ce résumé fournit un aperçu rapide des différences entre le plan Free et le plan Standard, en mettant en évidence l'architecture, la disponibilité, le stockage, la taille du cluster et le déploiement régional.

## Aller plus loin

Pour avoir un aperçu du service OVHcloud Managed Kubernetes, visitez la [page OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes).

Pour explorer les quotas détaillés, les limites de ressources et les restrictions régionales pour le plan Free et le plan Standard, consultez notre guide [Limites connues](/pages/public_cloud/containers_orchestration/managed_kubernetes/known-limits). Ce guide fournit des spécifications techniques approfondies pour vous aider à planifier et à échelonner vos clusters Kubernetes efficacement.

Pour déployer votre première application sur votre cluster Kubernetes, nous vous invitons à suivre nos guides pour [configurer les paramètres par défaut pour kubectl](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster) et pour [déployer une application Hello World](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world).

Si vous avez besoin d'une formation ou d'une assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander à nos experts Professional Services une analyse personnalisée de votre projet.

Échangez avec notre [communauté d'utilisateurs](/links/community).