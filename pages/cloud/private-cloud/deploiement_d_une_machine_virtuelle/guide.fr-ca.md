---
title: Déploiement d’une machine virtuelle
slug: deploiement-d-une-machine-virtuelle
excerpt: Découvrez comment déployer une machine virtuelle depuis l'interface vSphere
section: Gestion des machines virtuelles
order: 0
---

**Dernière mise à jour le 29/06/2020**

## Objectif

Depuis votre interface vSphere, vous pouvez déployer des machines virtuelles de plusieurs manières. 

**Découvrez comment déployer une machine virtuelle depuis un fichier ISO.**

## Prérequis

- Posséder un produit [Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/){.external}.
- Être connecté à votre [interface vSphere](../connexion-interface-vsphere/).

## En pratique

### Déployer la machine virtuelle

Le déploiement de la nouvelle machine virtuelle s'effectue depuis le client vSphere, dans la vue `Hôtes et clusters`.

Faites un clic-droit sur le cluster de votre choix et cliquez sur `Nouvelle machine virtuelle`{.action}.

![deploy a vm](images/vm01.png){.thumbnail}

Vous avez plusieurs possibilité lors de la création d’une machine virtuelle :

- La création depuis un ISO, qui sera dans votre datastore et que vous aurez pu importer en suivant [le guide de connexion en SFTP](../connexion-en-sftp/)
- Vous pouvez également déployer une machine virtuelle depuis un template que vous pouvez avoir ou un [template OVH](../deploiement-template-ovh/)
- Vous pouvez cloner une machine virtuelle déjà existante (attention toutefois au risque de conflit d’adresses IP).
- Vous pouvez cloner une machine virtuelle en template, en vue d’un déploiement plus rapide de vos prochaines machines virtuelles.
- Vous pouvez cloner un template en un autre template pour, par exemple, avoir le template sur différents datastores et ne pas subir de baisse de performances lors d’un déploiement massif.
- Vous pouvez convertir un template en machine virtuelle, ce qui occasionnera la perte du template mais peut être utile si vous souhaitez modifier celui-ci.

![choix de créations](images/vm02.png){.thumbnail}

Ici, nous allons voir comment déployer une machine virtuelle depuis un ISO.

L'étape suivante vous permet de définir le nom de votre machine et de choisir son emplacement. Si vous ne choisissez pas de dossier, elle sera créée à la racine du datacentre.

![emplacement de la  machine virtuelle](images/vm03.png){.thumbnail}

Vous pouvez ensuite choisir le cluster, l’hôte, [le pool de ressources](https://docs.vmware.com/fr/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external-link}, ou [la vApp](https://docs.vmware.com/fr/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-E6E9D2A9-D358-4996-9BC7-F8D9D9645290.html){.external-link} où vous souhaitez la placer.

Dans ce cas, la machine virtuelle sera déployée selon les règles DRS configurées, et sera placée à la racine du cluster.

![choix des ressources](images/vm04.png){.thumbnail}

Vous devrez ensuite choisir la banque de données dans laquelle stocker les fichiers de configuration et de disque.

Nous vous déconseillons de placer votre machine virtuelle dans un « storageLocal », qui correspond au stockage local de votre hôte. En cas de défaillance de votre hôte, votre machine virtuelle ne pourra pas redémarrer et ne sera plus accessible.

![choix du stockage](images/vm05.png){.thumbnail}

Choisissez ensuite la compatibilité entre votre machine virtuelle et l’hôte. Sauf cas particulier, il est recommandé de prendre le plus récent.

![choix compatibilité](images/vm06.png){.thumbnail}

Choisissez alors un système d'exploitation invité. Le « Guest OS » n’installe pas le système d’exploitation, cependant vSphere configure la machine virtuelle de manière automatique (nombre de CPU/RAM, type de carte réseau, prise en charge de l’installation des VMware tools).

![choix guest OS](images/vm07.png){.thumbnail}

### Configurer la machine virtuelle

Les étapes suivantes vous permettent de configurer les ressources de votre machine virtuelle.

La ligne `Nouveau Réseau` permet d’ajouter une carte réseau :

- Le « VM Network » servira pour le réseau public et l’accès direct à internet.
- Les VLAN permettront d’utiliser le réseau privé entre vos machines virtuelles (et avec d’autres services OVHcloud à travers le vRack).

![Choix du réseau](images/vm08.png){.thumbnail}

À la ligne `Nouveau lecteur CD/DVD`, vous pourrez choisir « Fichier ISO banque de données ».

Une fenêtre s’ouvrira alors pour que vous choisissiez votre fichier ISO. Celui-ci pourra également être ajouté après la création de la machine virtuelle.

![Choix du fichier ISO](images/vm09.png){.thumbnail}

Une fois le fichier sélectionné, Il s’affichera comme ci-dessous. N’oubliez pas de le connecter en cochant la case `Connecter lors de la mise sous tension`{.action}.

![Connecter ISO](images/vm10.png){.thumbnail}

Un récapitulatif de la création de la machine virtuelle vous est alors présenté. Si vous souhaitez modifier votre configuration, cliquez directement sur l'une étapes de gauche.

Cliquez sur `FINISH`{.action} pour terminer son déploiement.

![Récapitulatif VM](images/vm11.png){.thumbnail}

Une fois la machine présente dans votre inventaire, vous pourrez la démarrer en faisant un clic-droit sur celle-ci et en cliquant successivement sur `Alimentation`{.action} puis `Mettre sous tension`{.action}. 

Enfin, cliquez sur `Ouvrir Remote Console`{.action} pour avoir accès à « l’écran » de la VM et commencer l’installation du système d’exploitation.

![Démarrage VM](images/vm12.png){.thumbnail}

La console s'ouvrira dans un nouvel onglet et, après avoir suivi l'installation, vous pourrez utiliser votre machine virtuelle.

![console VM](images/vm13.png){.thumbnail}

> [!primary]
> Une fois votre machine virtuelle installée, il est recommandé de déconnecter l'ISO dans les paramètres. Dans le cas contraire, vous ne pourrez pas déplacer la machine virtuelle.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
