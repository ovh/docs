---
title: 'Ajouter une ressource à l’heure'
slug: ajouter-une-ressource-a-l-heure
excerpt: 'Découvrez comment ajouter des ressources en facturation horaire'
legacy_guide_number: '7766721'
section: 'Fonctionnalités OVHcloud'
---

**Dernière mise à jour le 15/12/2020**

## Objectif

L'offre [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external} vous permet d'ajouter des ressources facturées à l'heure.

**Ce guide décrit comment ajouter une ressource horaire depuis l'interface vSphere du Hosted Private Cloud.**

## Prérequis

* Posséder une offre [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
* [Donner le droit "Ajout de ressources"](../changer-les-droits-d-un-utilisateur/) pour le datacenter concerné à l'utilisateur depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
* Être connecté au client vSphere.


## En pratique

### Sélectionner la ressource

Afin d'accéder à l'interface permettant d'ajouter des ressources horaires, vous devez sélectionner le datacenter puis cliquer sur l'onglet `Configure`{.action} et enfin sur `Add host`{.action}.

![Ajout d'un host](images/addhost_01.png){.thumbnail}

Dans notre exemple, nous allons ajouter un serveur hôte facturé à l'heure. Une fois le choix du modèle effectué, cliquez sur le bouton `Next`{.action}. À noter que pour ajouter un datastore, il suffit de sélectionner l'onglet `Add storage`{.action}.

![Ajout d'un host](images/addhost_03.png){.thumbnail}


### Valider la commande

Afin de valider et finaliser votre commande, il est nécessaire de cliquer de nouveau sur le bouton `Next`{.action}.

![Confirmation de commande](images/addhost_04.png){.thumbnail}

### Suivre l’installation

Dès que votre commande est validée, vous pouvez suivre l'avancement de l'ajout de la ressource.

![suivi d'installation](images/addhost_06.png){.thumbnail}

De plus, une tâche apparaîtra dans les tâches récentes de votre vSphere. Celle-ci vous permettra également de suivre l'avancée de l'ajout de la ressource.


## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
