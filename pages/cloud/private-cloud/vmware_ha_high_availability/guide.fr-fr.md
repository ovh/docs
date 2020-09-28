---
title: VMware HA (High Availability)
slug: vmware-ha-high-availability
excerpt: Maitriser la politique de redémarrage avec la fonction HA
legacy_guide_number: '2163279'
space_key: VS
space_name: vSphere as a Service
section: Fonctionnalités VMware vSphere
order: 02
---

**Dernière mise à jour le 21/02/2018**

## Objectif

La fonction principale de **VMware HA** (High Availability) en cas de défaillance matérielle est de redémarrer les machines virtuelles sur un autre hôte du cluster. **HA** permet aussi de surveiller les VMs ainsi que les applications.

![schéma HA](images/HA3.png){.thumbnail}

**Ce guide explique le paramètrage de cette fonction**

## Prérequis

- Être connecté à votre [interface vSphere](../connexion-interface-vsphere/).
- Posséder un produit [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.

## En pratique

### Activation

HA est activé par défaut dans le cluster de base que OVHcloud vous fournit lors de la livraison de votre Hosted Private Cloud.

En cas de création d'un nouveau cluster, vous pouvez activer HA lors de la création du cluster ou après celle-ci.

Si HA n'est pas activé dans votre cluster, rendez vous dans l'onglet `Configure` de votre cluster puis sur l'onglet `Disponibilité vSphere` disponible dans la rubrique `Services`.

Cliquez sur `Modifier`{.action} et cochez la case pour arctiver la fonctionnalité HA.

Il est également important d'activer la surveillance de l'hôte. Ce paramètre permet l'envoi de signaux de pulsation entre les hôtes ESXi afin de détécter une éventuelle panne.
La désactivation est nécessaire pour réaliser des opérations de mise à jour avec [l'update manager](../vmware-update-manager/) par exemple. Dans ce cas précis, l'hôte est isolé.

![activation HA](images/HA.png){.thumbnail}


### Paramètres

#### Pannes et réponses

Cette première catégorie permet de définir votre politique de redémarrage des VM en fonction des différentes pannes possibles.

##### Réponse en cas de panne de l'hôte

Cette catégorie va définir votre politique de redémarrage des VM en cas de perte d'un hôte.

Ainsi, vous pouvez choisir de redémarrer vos machines virtuelles automatiquement ou non.
Une gestion de redémarrage par défaut sur le cluster est également possible. Vous pouvez affiner cela par machine virtuelle dans l'onglet `Remplacements VM`.

Vous pouvez également séléctionner une condition, autre que celle par défaut (Ressources allouées), que vSphere HA va vérifier avant de procéder au redémarrage.

![panne de l'hôte](images/HAparam1.PNG){.thumbnail}

##### Réponse à l'isolation d'hôte.

Cette catégorie vous permet de définir les actions à entreprendre en cas de perte de connectivité réseau sur un hôte.

Vous pouvez au choix : 

- Ne rien faire.
- Mettre hors tension les machines virtuelles et tenter un redémarrage de celles ci sur un autre hôte disponible.
- Eteindre l'hôte concerné et tenter un redémarrage des machines virtuelles sur un autre hôte disponible.

![isolation d'hôte](images/HAparam2.PNG){.thumbnail}

##### Banque de données avec PDL

En cas de défaillance d'une banque de données avec un état PDL (permanent device loss) vous pouvez définir les actions à entreprendre :

- Ne rien faire.
- Ne rien faire, mais générer des logs dans les évenements.
- Mettre hors tension les machines virtuelles et tenter un redémarrage de celles ci sur les hôtes qui ont toujours de la connectivité avec la banque de données.

![banque de données avec PDL](images/HAparam3.PNG){.thumbnail}

##### Banque de données avec APD

En cas de défaillance d'une banque de données avec un état APD (all path down) vous pouvez définir les actions à entreprendre :

- Ne rien faire.
- Ne rien faire, mais générer des logs dans les évenements.
- Mettre hors tension les machines virtuelles et tenter un redémarrage de celles ci.

![banque de données avec APD](images/HAparam4.PNG){.thumbnail}

##### Surveillance de VM

La surveillance des machines virtuelles est disponible suite à l'installation des [VMware tools](../installation-des-vmware-tools/). 
En cas de non réponse via les **tools** (signaux de pulsation), la machine virtuelle sera automatiquement redémarrée. Une configuration avancée est possible par rapport à cette fonctionnalité (intervalles de redémarrage par exemple).

![Surveillande de VM](images/HAparam5.PNG){.thumbnail}

#### Contrôle d'admission

vSphere HA utilise le contrôle d'admission pour s'assurer que des ressources suffisantes sont réservées à la récupération des machine virtuelles en cas de défaillance d'un hôte.

Le contrôle d'admission impose des contraintes sur l'utilisation des ressources. Les actions qui risquent d'enfreindre ces contraintes ne sont pas autorisées. Les actions qui peuvent ne pas être autorisées incluent les exemples suivants :

- Mise sous tension d'une machine virtuelle
- Migration d'une machine virtuelle
- Augmentation de la réserve de CPU ou de mémoire d'une machine virtuelle

La base du contrôle d'admission vSphere HA est le nombre de défaillances d'hôte que le cluster est autorisé à tolérer et qui continue à garantir le basculement. La capacité de basculement des hôtes peut être définie de trois manières différentes :

- [Pourcentage de ressources du cluster](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-FAFEFEFF-56F7-4CDF-A682-FC3C62A29A95.html){.external-link}

- [Stratégie d'emplacement](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-85D9737E-769C-40B6-AB73-F58DA1A451F0.html){.external-link}

- [Hôtes de basculement dédiés](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-C4F5F9EE-4235-4151-BEBE-FCB2A752407B.html){.external-link}

#### Banques de données de signal de pulsation

Lorsque l'hôte principal d'un cluster HA ne peut pas communiquer avec un hôte subordonné sur le réseau de gestion, l'hôte principal utilise le signal de pulsation de banque de données pour déterminer si l'hôte subordonné est défaillant, s'il se trouve dans une partition de réseau ou est isolé du réseau.

#### Options avancées

Plusieurs paramètres de configuration avancée peuvent être utilisés dans votre cluster.

Vous pouvez retrouver des paramètres sur [cette page](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-E0161CB5-BD3F-425F-A7E0-BF83B005FECA.html){.external-link}.

### Règle HA

Dans la section `configuration` puis dans l'onglet `Règles VM/Hôte`, vous pouvez créer une règle de type « Machines virtuelles à machines virtuelles ».

Celle-ci va ajouter une condition de redémarrage afin de s'assurer que des machines virtuelles d'un premier groupe soient toutes démarrées avant de démarrer celles d'un second groupe.

Cette règle peut très bien s'ajouter en complément des priorités de redémarrage paramètrables dans l'onglet `Remplacements VM`.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
