---
title: "OPCP - Comment visualiser l'inventaire des nœuds"
excerpt: "Découvrez comment consulter l'inventaire des nœuds OPCP"
updated: 2026-01-09
---

## Objectif

Ce guide explique comment consulter l’inventaire matériel, les ressources consommées et les ressources disponibles sur une plateforme **OVHcloud On-Prem Cloud Platform (OPCP)**, à l’aide de :

- **Grafana** : monitoring en temps réel de l’infrastructure
- **NetBox** : inventaire physique et logique
- **OpenStack Horizon** : inventaire Ironic via Horizon
- **OpenStack CLI** : inventaire Ironic via CLI

> [!primary]
>
> Dans OpenStack, un nœud correspond à un serveur physique du rack OPCP.
>
> Dans ce guide, le terme **nœud** est donc utilisé pour désigner un serveur physique.

## Prérequis

- Être administrateur de l'infrastructure [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) et avoir accès à l'interface d'administration `admin.dashboard`.
- Un accès **[OpenStack CLI configuré](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials)** avec les droits nécessaires (`clouds.yaml` ou variables d’environnement).

## En pratique

### 1. Inventaire et monitoring via Grafana

Grafana fournit une vue de monitoring en temps réel et permet de suivre facilement l'évolution de votre parc OPCP.

#### 1.1 Accéder au dashboard Home

1. Connectez-vous à l’URL d'administration `admin.dashboard`.
2. Cliquez sur **Grafana**.
3. Cliquez sur **Dashboards** et recherchez le dashboard **OpenStack overview**.

Vous devriez voir un dashboard similaire à l'image suivante :

![grafana-dashboard-openstack-overview](images/01-grafana-dashboard-openstack-overview.png){.thumbnail}

#### 1.2 Comprendre le dashboard OpenStack overview

Le dashboard permet de visualiser :

- L'état des services OpenStack : **Service status**
- L'utilisation des ressources : **Resource usage**
- Une vue détaillée du service Keystone : **Keystone**
- Une vue détaillée du service Ironic : **Ironic**
- Une vue détaillée du service Nova : **Nova**
- Une vue détaillée du service Neutron : **Neutron**
- Une vue détaillée du service Cinder : **Cinder**
- Une vue détaillée du service Glance : **Glance**

#### 1.3 Comprendre et utiliser la section Ironic

Nous allons nous focaliser sur la partie « Ironic », c'est ici que nous allons pouvoir voir l'état des différents nœuds.

![grafana-dashboard-openstack-overview-ironic](images/01-grafana-dashboard-openstack-overview-ironic.png){.thumbnail}

Cette section permet de visualiser :

- Le nombre total de nœuds : **Total enrolled Ironic nodes**
- Le nombre de nœuds disponibles et pas en maintenance : **Available Ironic nodes**
- Le nombre de nœuds en erreur : **Error Ironic nodes**
- La liste des nœuds en erreur ou en maintenance : **List of failed and maintenance nodes**
- Le nombre de nœuds utilisés : **Allocated Ironic nodes**
- Le nombre de nœuds en attente : **Waiting Ironic nodes**
- Le nombre de nœuds en maintenance : **Maintenance Ironic nodes**

### 2. Inventaire matériel et logique avec NetBox

NetBox est la référence pour gérer l’inventaire physique, réseau et logique de votre infrastructure.

L'inventaire de NetBox est automatiquement renseigné, aucune action manuelle n’est requise pour l’ajout ou la modification des nœuds.

#### 2.1 Accéder à NetBox

1. Connectez-vous à l’URL d'administration `admin.dashboard`.
2. Cliquez sur **NetBox**.

#### 2.2 Consulter l’inventaire des nœuds

Dans **Appareils**, vous pouvez voir la liste complète des équipements de votre rack OPCP (nœuds, équipements réseau, etc.).

Vous pouvez :

- utiliser la recherche rapide pour trouver un élément par nom ;
- utiliser **Filtres** pour une recherche avancée.

Par exemple, vous pouvez lister tous les nœuds hors production en appliquant les filtres suivants :

- **Statut** : Démonté, Inventaire, Échoué, Planifié
- **Rôle** : server

![netbox-devices-filters](images/02-netbox-devices-filters.png){.thumbnail}

Vous pouvez enregistrer la recherche pour la réutiliser plus tard.

### 3. OpenStack Horizon – Ironic UI

#### 3.1 Accéder à l'interface Ironic

1. Connectez-vous à l’URL d'administration `admin.dashboard`
2. Cliquez sur **Horizon**
3. Cliquez sur **Admin**
4. Cliquez sur **System**, puis sur **Ironic Bare Metal Provisioning**

#### 3.2 Lister tous les nœuds

Dans **Ironic Bare Metal Provisioning**, vous pouvez voir tous les nœuds.

Vous pouvez filtrer les nœuds selon leur statut, par exemple : `Provisioning State = failed`.

![openstack-horizon-ironic](images/03-openstack-horizon-ironic.png){.thumbnail}

### 4. État des ressources via OpenStack CLI

Le CLI OpenStack permet d’obtenir l’état **en temps réel** des ressources allouées et disponibles.

#### 4.1 Lister tous les nœuds

```bash
openstack baremetal node list
```

**Exemple de sortie :**

```bash
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
| UUID                                 | Name           | Instance UUID                        | Power State | Provisioning State | Maintenance |
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
| 88830859-5b16-4935-8f41-d381b754cbe5 | SERVER-1       | None                                 | power off   | available          | False       |
| 726bb7e9-3b20-4a44-99d7-2af747983781 | SERVER-2       | None                                 | power off   | available          | False       |
| af711edf-a579-491e-b474-3c03639ed99b | SERVER-3       | 83b7083b-bbdd-4327-941c-ee91197818c5 | power on    | active             | False       |
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
```

#### 4.2 Filtrer les nœuds

Vous pouvez filtrer les résultats à l'aide de **--provision-state** pour voir les nœuds dans un statut spécifique, ou encore **--maintenance** pour voir les nœuds en maintenance.

Tous les filtres sont disponibles via `--help`.

**Exemple de sortie :**

```bash
$ openstack baremetal node list --provision-state "clean failed"
+--------------------------------------+----------------+---------------+-------------+--------------------+-------------+
| UUID                                 | Name           | Instance UUID | Power State | Provisioning State | Maintenance |
+--------------------------------------+----------------+---------------+-------------+--------------------+-------------+
| 37f96160-16cf-47e6-8bee-0ee42a59fafe | SERVER-1       | None          | power off   | clean failed       | False       |
| 5678b6ff-1909-466f-857a-c8818a5ecd61 | SERVER-2       | None          | power off   | clean failed       | False       |
| cf5ee1ce-913a-4bff-a343-c391d8b3b667 | SERVER-3       | None          | power off   | clean failed       | False       |
+--------------------------------------+----------------+---------------+-------------+--------------------+-------------+
```

```bash
$ openstack baremetal node list --maintenance
+--------------------------------------+--------------+--------------------------------------+-------------+--------------------+-------------+
| UUID                                 | Name         | Instance UUID                        | Power State | Provisioning State | Maintenance |
+--------------------------------------+--------------+--------------------------------------+-------------+--------------------+-------------+
| 4e1108e1-3049-46fc-adb5-b27ba607710d | SERVER-4     | 9b972076-2c58-496b-9690-0f1b40d54660 | None        | deploy failed      | True        |
+--------------------------------------+--------------+--------------------------------------+-------------+--------------------+-------------+
```

#### 4.3 Détails d'un nœud

Pour récupérer toutes les informations concernant un nœud, par exemple pour identifier la dernière erreur et comprendre pourquoi le déploiement a échoué :

```bash
openstack baremetal node show <node-id>
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).