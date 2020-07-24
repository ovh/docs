---
title: VMware DRS (Distributed Ressource Scheduler)
slug: vmware-drs-distributed-ressource-scheduler-new
excerpt: Maitriser la répartition de charge avec la fonction DRS
section: Fonctionnalités VMware vSphere
order: 03
---

**Dernière mise à jour le 29/06/2020**

## Objectif

La Fonction **DRS** (Distributed Ressource Scheduler) est disponible dans un cluster **VMware**, cette fonction permet d'équilibrer la charge des hôtes grâce au déplacement des machines virtuelles de manière automatique (vMotion). Elle va répartir les VMs sur les différents hôtes du cluster en fonction de leur utilisation et de leurs ressources.

**Ce guide explique le paramétrage de cette fonction**

## Prérequis

- Posséder un produit [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/){.external}.
- Être connecté à votre [interface vSphere](../connexion-interface-vsphere/).

## En pratique

La fonctionnalité du **DRS** étant de mieux répartir les ressources, il va procéder, ou vous conseiller, le déplacement des VMs sur un Host ou un Pool (mieux approprié) de votre cluster.

![Principe du DRS](images/drs0.png){.thumbnail}

### Activation

La fonction DRS est activée par défaut dans le cluster de base fourni par OVHcloud lors de la livraison de votre Cloud Privé.

En cas de création d'un nouveau cluster, vous pouvez activer la fonctionnalité DRS pendant ou après cette création.

Si la fonctionnalité DRS n'est pas activée sur votre cluster, sélectionnez celui-ci puis rendez vous dans l'onglet `Configurer`{.action}.

Cliquez sur le menu `Services`{.action} puis sur le sous-menu `vSphere DRS`{.action}.

Cliquez sur `Modifier`{.action} et activez le curseur `vSphere DRS` pour activer la fonctionnalité DRS.

![Activation du DRS](images/drs01.png){.thumbnail}

### Paramètres 

Dans la même fenêtre d'édition des paramètres, vous retrouverez 4 catégories d'options.

#### L'automatisation

Trois niveaux différents d'automatisation sont disponibles :

- En mode « Manuelle », DRS ne déplacera pas les VM, vous devrez gérer le déplacement et la répartition de vos VM de manière autonome.

- En mode « Partiellement automatisé », DRS vous conseillera sur des migrations de vos VM, mais ne les fera que si vous validez le déplacement.

- En mode « Entièrement automatisé », DRS déplacera les VM automatiquement sans validation de votre part, en fonction de la charge présente sur les hôtes.

Il est également possible de définir un seuil de migration plus ou moins agressif sur les modes automatisés.

L'option « Predictive DRS », disponible à partir de la version 6.5 de VMware, permet d'effectuer des migrations en fonction des mesures prévisionnelles renvoyées par vRops.
Cette dernière est de ce fait indispensable pour le fonctionnement de cette option DRS.

Enfin l'option « Automatisation de machine virtuelle » permet de configurer des règlages DRS particuliers pour certaines VM dans le sous-menu `Remplacements de VM` de l'onglet `Configurer` (Certaines VM pourront avoir un mode de migration en partiellement automatique alors que le cluster sera en mode entièrement automatisé).

![automatisation DRS](images/drs02.png){.thumbnail}


#### Options supplémentaires

Vous pouvez configurez 3 options supplémentaires dans le paramètrage DRS :

- Distribution des VM : Pour la disponibilité, distribuez un nombre encore plus homogène de machines virtuelles sur les hôtes. 

- Mesures de mémoire pour l'équilibrage de charge : Équilibrage de charge basé sur la mémoire consommée des machines virtuelles plutôt que sur la mémoire active.
Ce paramètre est recommandé uniquement pour les clusters dans lesquels la mémoire hôte n'est pas surchargée. 

- Surcharge du CPU : Limitez la surcharge du CPU pour tous les hôtes du cluster. Ce paramètre créera un CPU virtuel sur une limite de ratio principale de CPU physique (vCPU:pCPU) mis en œuvre sur chaque hôte ESXi. 

![options supplémentaires DRS](images/drs03.png){.thumbnail}

#### Gestion de l'alimentation

**Cette option doit toujours être désactivée.**

Son utilité première est d'éteindre des hôtes de votre infrastructure si DRS juge que vous n'en avez pas besoin dans votre fonctionnement, tout en satisfaisant le niveau de basculement demandé par HA.
Chez OVHcloud, notre monitoring détectera cette extinction comme étant anormale et créera une intervention en datacentre.

#### Options avancées

Plusieurs paramètres de configuration avancée peuvent être utilisés dans votre cluster DRS.

Voici quelques exemples :

|Nom de l'option avancée|Description|Valeur par défaut|Valeur la plus agressive|
|:---|:---|:---|:---|
|UseDownTime|S'il faut tenir compte, dans l'analyse des coûts, de l'impact sur la charge de travail des éventuels décrochages de mémoire au cours de la migration|1|0 (pas de prise en compte des impacts)|
|IgnoreDownTimeLessThan|Seuil (en secondes) pour ignorer dans l'analyse des coûts les temps de décrochage cumulatifs de migration (peut être augmenté si la charge de travail des machines virtuelles n'est pas sensible aux décrochages de mémoire pendant la migration).|1|Un grand nombre (pas de prise en compte des temps d'arrêt)|
|MinImbalance|Utilisé pour calculer le déséquilibre cible|50|0|
|MinGoodness|Amélioration minimale du déséquilibre de la grappe requise pour chaque déplacement|Adaptive|0 (Tous les déplacements sont considérés)|
|MaxMovesPerHost|Nombre maximum de mouvements par hôte recommandé par invocation|Adaptive|0 (Pas de limites)|

![options avancées drs](images/drs05.png){.thumbnail}

### Les règles DRS

Dans l'onglet `Configurer` vous trouverez la gestion des règles de VM/hôte.

![règles drs](images/drs06.png){.thumbnail}

- Garder les machines virtuelles ensemble : Les machines virtuelles se situent sur le même hôte.
- Séparer les machines virtuelles : Séparation des VMs sur des hôtes distincts au sein d'un même cluster.
- Machines virtuelles aux hôtes : Les machines virtuelles membres du groupe de VM du cluster renseigné doivent s'exécuter sur le groupe d'hôtes renseigné. Il est necessaire de créer des groupes de VM et d'hôtes dans l'onglet `Groupes de VM/Hôte`.

La quatrième règle, 'Machines virtuelles à machines virtuelles' est expliqué dans notre guide sur la [fonction HA](../vmware-ha-high-availability/).

![création règles drs](images/drs07.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
