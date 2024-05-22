---
title: 'Ask OVH Team guide, SEO'
excerpt: 'Ask OVH Team guide, SEO'
updated: 2023-05-22
---
 
## Objectif
 
**Ce guide est à l'attention des Technical Account Manager (TAM) et clients OVHcloud**

## Prérequis

- Avoir une offre OVHcloud XXX
- Avoir un TAM
- Etre client ++ OVHcloud

## En pratique

## Impacts sur les produits OVHcloud

En réponse aux maintenances

| Range of products | Products | Impact |
|---|---|---|
| Hosted Private Cloud | VMware on OVHcloud | Update in progress by OVHcloud |
| Hosted Private Cloud | SDDC / Essentials | Not impacted |
| Hosted Private Cloud | Nutanix on OVHcloud | Mitigated by OVHcloud |


## Plan d'action

| Nom des maintenances  | Utiliser Plan all robot planning | But                                                                                                                                                                                                                                                                                                                                                                                 | Raison                                              | Instructions préventive | Impact                                                                                                                                                                                                                                                                   | Durée approximative                         | Frequence  | Peut être reprogrammé |   Ref technique (doc) |
|---|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|---|-----------------------|---|
| windowsUpdateOnPcc | Non | Mise à jours Windows sur le controle plane VM                                                                                                                                                                                                                                                                                                                                       | Mise à jour de sécurité                             | None                    | Maintenance effectué seulement si Veeam et/ou les options Zerto sont souscrites / Control Plane unavailable during maintenance time-frame                                                                                                                                | 30 min for Veeam Managed / 30 min for Zerto | Mois | Oui                   
| upgradeSwitch  | Oui                              | Mise à jour de switchs à la dernière version validée par le département OVHcloud Network                                                                                                                                                                                                                                                                                            | Cycle de vie OVHcloud Arista / Patches de sécurités |                         |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
|  maintenanceGenericUpgradePackages | Non                              | Mise à jour de systèmes d'exploitation sur les VM de control plane gérées par OVHcloud                                                                                                                                                                                                                                                                                              |                                                     |                         |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
|  maintenanceRenewAndDeploySslCertificate | Non                              | Vérifie, commande et renouvelle les certificats SSL sur les controleurs (controle plane) VM managé par OVHcloud                                                                                                                                                                                                                                                                     |                                                     |                         |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
|  maintenanceUpgradeHosts | Oui                              | Mise à jour d'ESXi à la dernière version proposée par OVHcloud. Cet maintenance peut installer des versions mineures ou majeures.                                                                                                                                                                                                                                                   |                                                     |                         |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
|  maintenanceUpgradeVcenter | Oui                              | Mise à jour vCenter Server Appliance à la dernière version proposée par OVHcloud. Cet maintenance peut installer des versions mineures ou majeures. Les mises à niveau des options peuvent également être déclenchées (Veeam Managed, zerto) pour s'assurer que la matrice de compatibilité est cohérente. Une mise à jour majeure déclenchera également une mise à jour des hôtes. |                                                     |                         |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
| maintenanceUpgradeVrops  | Oui                              | Mise à jour des machines virtuelles Aria Operations (appelée vROps auparavant) vers la dernière version proposée par OVHcloud.                                                                                                                                                                                                                                                      |  Cycle de vie OVHcloud Arista / Patches de sécurités                                                   | None                    |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
| windowsUpdateOnPcc  | Non                              |                                                                                                                                                                                                                                                                                                                                                                                     |                                                     |                         |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
| maintenanceUpgradeNsxt  | Oui                              |                                                                                                                                                                                                                                                                                                                                                                                     |                                                     |                         |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
|  maintenanceUpgradeVeeamManaged | Oui                              |                                                                                                                                                                                                                                                                                                                                                                                     |                                                     |                         |                                                                                                                                                                                                                                                                          |                                             |   |                       |   |
| maintenanceUpgradeZvm | Oui                      | Mise à jour des machines virtuelles Zerto (Zerto Virtual Manager, VRA) vers la dernière version proposée par OVHcloud.                                                                                                                                                                                                                                                              | Cycle de vie Zerto de OVHcloud                      | None                    | La console Zerto n'est pas disponible pendant la maintenance, toutes les opérations zerto associées ne peuvent pas être effectuées (fail-over, gestion des VPG...) / VRA est redéployés de sorte que la réplication est interrompue et que le RPO augmente momentanément | 01H30                                       |  Selon le cycle de vie de l'éditeur                                           | Oui                   |   |   |

* Le plan de contrôle n'est pas disponible signifie que le VCSA ne peut pas être atteint. Par conséquent, tous les produits qui doivent atteindre VCSA ne fonctionneront pas. Cela représente les produits/options suivants dans Hosted Private Cloud :
- NSX-T interface
- vROps interface
- Veeam Managed (no backup/restore operations)
- Zerto interface (replication will still continue)
- Tanzu Kubernetes Grid

Tout autre produit de niveau que vous pouvez utiliser et qui nécessite VCSA sera également affecté.


### Plan de contrôle

Le control plane désigne la partie du système responsable de la gestion et du contrôle des ressources dans un environnement virtualisé. Plus précisément, le plan de contrôle est la couche logicielle qui gère les opérations et les décisions liées à la configuration, à la gestion des ressources, au suivi et à l'orchestration des machines virtuelles et de l'infrastructure associée.

Gestion des ressources : il prend en charge la configuration et la gestion des ressources physiques (serveurs, stockage, mise en réseau) et virtuelles (machines virtuelles).

Orchestration : il coordonne les opérations entre les différents composants de l'infrastructure, facilitant le déploiement, la migration et la gestion des machines virtuelles.

Monitoring : il collecte des données sur les performances, l’état de santé et l’utilisation des ressources à des fins de monitoring et de reporting en temps réel.

Sécurité : il gère les politiques de sécurité, y compris l'authentification, l'autorisation et le contrôle d'accès, assurant ainsi la sécurité des ressources virtualisées.

Automatisation : il prend en charge l'automatisation des tâches répétitives, permettant aux administrateurs de définir des workflows et des stratégies automatisées.

En résumé, le plan de contrôle est la couche logicielle qui assure la gestion, la coordination et le contrôle centralisés.

## Aller plus loin
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
