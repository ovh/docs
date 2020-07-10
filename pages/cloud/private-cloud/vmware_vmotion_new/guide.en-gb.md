---
title: VMware vMotion
slug: vmotion-new
excerpt: Find out how to move your virtual machine to a different host (hot migration)
legacy_guide_number: '7767025'
section: VMware vSphere features
order: 4
---

**Last updated 10th July 2020**

## Objective

**vMotion** est une migration à **chaud** d'une machine virtuelle (en exécution) depuis un hôte vers un autre hôte, un ressource pools ou une Vapp, au sein du même **Cluster**.

**Ce guide montre comment réaliser cette opération**

## Instructions

### Moving a VM

Quand un token est reçu par SMS, celui-ci doit être renseigné dans l'interface sécurisée afin que la tâche en attente puisse s’exécuter.
sur une autre ressource

Pour déplacer une machine virtuelle sur une autre ressource, il vous suffit de faire un clic droit sur la machine virtuelle allumée puis de sélectionner le menu `Migrer...`{.action}.

![déplacer machine virtuelle](images/Vmotion1.png){.thumbnail}

### Choosing a migration type

Le menu propose plusieurs options de Vmotion, dans notre exemple nous désirons uniquement migrer la machine virtuelle sur un autre hôte il faut donc sélectionner « Modifier uniquement la ressource de calcul ».

L'option « Modifier uniquement le stockage » permet de migrer la machine virtuelle sur une autre banque de données. Cette opération appelé **Storage vMotion** est décrit dans [ce guide](../vmware-storage-vmotion-new/).

![choix du type de vMotion](images/Vmotion2.png){.thumbnail}

### Choosing a resource

Choisir vers quel ressource migrer la machine virtuelle. Il est possible de migrer la machine virtuelle sur un hôte, un cluster, un ressourcePool ou une Vapp.

Dans notre exemple, nous allons la migrer sur l'hôte .50.

![choix de la ressource](images/Vmotion3.png){.thumbnail}

### Choosing the network

Lors de cette étape, il vous est possible de choisir le réseau affecté à la machine virtuelle. Dans notre exemple, nous laissons la machine virtuelle sur son VLAN d'origine.

![choix du réseau](images/Vmotion4.png){.thumbnail}

### Choosing the priority

Nous vous recommandons d'effectuer la migration en priorité haute. Pour ce faire, sélectionnez « Planifier vMotion avec une priorité élevée ».

![choix de la priorité](images/Vmotion5.png){.thumbnail}

### Finalising the operation

Cliquez sur `Terminer`{.action} pour lancer la procédure de migration.

![finaliser vMotion](images/Vmotion6.png){.thumbnail}

### Tracking the vMotion task

In "Recent Tasks", you can track the migration status. It takes more or less time depending on the assigned RAM, work load and bandwidth used.

![suivi du vMotion](images/Vmotion7.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
