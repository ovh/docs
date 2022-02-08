---
title: Création de cluster et activation EVC
slug: create-cluster-enable-evc
excerpt: Création d'un cluster et activation du mode EVC
section: Fonctionnalités VMware vSphere
order: 01
---

**Dernière mise à jour le 08/02/2022**

## Objectif

Il est possible de créer plusieurs clusters dans votre infrastructure afin de segmenter vos activités.<br>
Découvrez comment créer et configurer les fonctionaltités de clusters (DRS, HA & EVC).

**Ce guide est un cas d'étude avec les étapes d'installation et de configuration.**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))


## En pratique

### Création du cluster

Dans l'interface vSphere, allez dans le tableau de bord `Hôtes et clusters`{.action}.

![MENU](images/en01dash.png){.thumbnail}

Faites un clic droit sur votre Datacenter.<br>
Selectionnez `Nouveau cluster`{.action}.

![New Cluster](images/en02newcluster.png){.thumbnail}

Dans la fenêtre qui apparait, nommez le cluster et selectionnez les options nécessaires.<br>
Cliquez sur `OK`{.action}.

![Cluster](images/en03cluster.png){.thumbnail}


> [!warning]
>
> L'option vSAN nécessite des hôtes compatibles. Rendez-vous [ici](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/) pour apprendre comment en commander si besoin.
> 


### DRS

DRS répartit la charge de calcul sur vos différents hôtes.<br>
Si vous avez activé l'option, elle est en mode "Entièrement automatisé" par défaut.

Selectionnez le cluster. Dans l'onglet `Configurer`{.action}, selectionnez `vSphere DRS`{.action} et cliquez sur `Modifier`{.action}.

![DRS](images/en04drsedit.png){.thumbnail}

Trois options sont disponibles:

- Manuelle. DRS génère des recommandations de placement pour la mise sous tension et des recommandations de migration pour les machines virtuelles. Les recommandations doivent être appliquées manuellement ou seront ignorées.
- Partiellement automatisé. DRS place automatiquement les machines virtuelles sur les hôtes lors de la mise sous tension de ces dernières. Les recommandations de migration doivent être appliquées manuellement ou seront ignorées.
- Entièrement automatisé. DRS place automatiquement les machines virtuelles sur les hôtes lors de la mise sous tension de ces dernières. Elles sont automatiquement migrées d'un hôte à l'autre pour optimiser l'utilisation des ressources.

Les modes automatisés vous permettent de régler la sensibilité du service, de modéré à élevé.<br>
Cliquez sur `OK`{.action}.

![DRS](images/en05drs.png){.thumbnail}


### HA

La disponibilité offre de la redondance pour qu'une panne d'un hôte n'impacte pas les services qui tournent sur vos VMs.<br>

Pour modifier les paramètres par défaut, selectionnez le cluster. Dans l'onglet `Configurer`{.action}, selectionnez `Disponibilité vSphere`{.action} et cliquez sur `Modifier`{.action}.

![HA](images/en06haedit.png){.thumbnail}

Vous pouvez alors personaliser les différentes réponses aux possibles pannes d'hôte.<br>
Cliquez sur `OK`{.action}.

![HA](images/en07ha.png){.thumbnail}


### EVC

EVC (Enhanced vMotion Compatibility) permet la migration à chaud de vos VMs entre différents hôtes.

Avant d'avtiver la fonctionnalité, vérifier la page de résumé de vos hôtes pour déterminer leurs types de CPU.

![EVC](images/en10host.png){.thumbnail}

Selectionnez le cluster. Dans l'onglet `Configurer`{.action}, selectionnez `VMware EVC`{.action} et cliquez sur `Modifier`{.action}.

![EVC](images/en08EVCedit.png){.thumbnail}

Activez EVC pour le type de CPU de vos hôtes.<br>
La compatibilité descendante est assurée. Pour vous aider à vérifier que les paramètres sont corrects, vous verrez une validation de la compatibilité au bas de la fenêtre.<br>
Cliquez sur `OK`{.action}.

![EVC](images/en09EVC.png){.thumbnail}


> [!warning]
>
> L'activation de l'EVC ne peut se faire que si le cluster n'a pas de VM active. Assurez-vous d'avoir éteintes ou évacuées toutes vos VMs avant de procéder. 
>


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
