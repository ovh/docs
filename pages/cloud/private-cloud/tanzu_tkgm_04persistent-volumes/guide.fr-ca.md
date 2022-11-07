---
title: Gestion des volumes persistants dans Tanzu Kubernetes Grid
slug: tanzu-tkgm-persistant-volumes
excerpt: Comment déployer une application dans Tanzu Kubernetes Grid avec des volumes persistants
section: Tanzu
order: 05
---

**Dernière mise à jour le 10/11/2022**

## Objectif

**Ce guide vous permet de gérer les volumes persistants sur un cluster Tanzu Kubernetes Grid.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur de [l'infrastructure Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant actif dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Avoir un identifiant actif dans vSphere.
- Avoir déployé le cluster de **Workload** **TKG** à l'aide du guide « [administrer Tanzu Management Cluster Grid](https://docs.ovh.com/ca/fr/private-cloud/tanzu-tkgm-management) ».

## Présentation

Les volumes persistants sont utilisés pour conserver des données de manière permanente sur un cluster **Kubernetes**. Ce mécanisme s'appuie sur des **Storage Classes**. Il existe diverses Storage Classes. Consultez le guide « [Kubernetes Storage Classes](https://kubernetes.io/docs/concepts/storage/storage-classes/) » pour plus d'informations.

Lors du déploiement d'un cluster de *WorkLoad*, une Storage Class **CSI provisioner** est créée et pointe dans le dossier du **Datastore** qui contient les machines virtuelles du cluster de *WorkLoad*.

A partir de votre cluster VMware, rendez-vous dans l'inventaire. Sélectionnez à gauche l'icône concernant le stockage, positionnez-vous sur le datastore où a été déployé votre cluster de *WorkLoad*. Allez dans l'onglet `Fichiers`{.action} et cliquez sur le dossier `fcd`{.action}.

Le dossier est vide car le cluster de *WorkLoad* n'utilise pas encore de volumes persistants. 

![01 Affichage dossier FCD](images/01-display-fcd-folder01.png){.thumbnail}

Il est possible de créer d'autres Storage Classes pour chaque cluster de *WorkLoad*.

## En pratique

Nous allons nous connecter sur un cluster de *WorkLoad* à partir de la console de la machine virtuelle **Bootstrap**. Vous pouvez vous aider du guide « [Administrer Tanzu Management Cluster Grid](https://docs.ovh.com/ca/fr/private-cloud/tanzu-tkgm-management) » pour créer un cluster de workload et l'administrer.

A partir de la console de la machine virtuelle de **Bootstrap**, utilisez cette commande pour voir les contextes que l'on peut utiliser sur ce cluster :

```bash
# Affichage de tous les contextes de votre cluster TANZU KUBERNETES GRID
kubectl config get-contexts
```

Saisissez cette commande pour utiliser le cluster de *WorkLoad* :

```bash
# Connexion au cluster de WorkLoad
kubectl config use-context tkgm-workload-cluster-admin@tkgm-workload-cluster
```

### Affichage des Storage Classes existantes

Pour obtenir des informations sur les Storage Classes d'un cluster de *WorkLoad*, saisissez ces commandes :

```bash
# Affichage des Storage Classes
kubectl get storageclass
# Description d'une Storage Class
kubectl describe storageclass nomclasse
```

### Création d'une storage class sur un autre Datastore

Sur notre cluster VMware, nous avons deux Datastores connectés sur des serveur NFS. Un des datastores contient les machines virtuelles du cluster de *WorkLoad* ainsi que le dossier **fcd** utilisé par la Storage Class du cluster de *Workload*. 

Nous allons créer une nouvelle Storage Class sur le deuxième Datastore.

Revenez sur votre cluster VMware dans la gestion du stockage, sélectionnez le second datastore et cliquez sur `Résumé`{.action} dans l'onglet à gauche.

Copiez l'`URL`{.action} en dessous de « Type: NFS 3 ».

![02 Select URL01](images/02-display-datastore-url01.png)

Allez dans la console de la machine virtuelle **Bootstrap**, éditez un nouveau fichier nommé `secondstorageclass.yaml` avec ce contenu :

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: secondstorageclass
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
provisioner: csi.vsphere.vmware.com
parameters:
  datastoreurl: "ds:///vmfs/volumes/xxxxxxxxxxxxxxxxx/"
```

Modifiez le fichier en remplaçant `ds:///vmfs/volumes/xxxxxxxxxxxxxxxxx/` par l'URL que vous venez de copier.

Exécutez ensuite cette commande :

```bash
# Création du storageclass à partir du fichier yaml
kubectl apply -f secondstorageclass.yaml
# Affichage des storageclass
kubectl get storageclass
```

Nous voyons donc apparaitre deux Storage Classes :

```bash
NAME                           PROVISIONER              RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
default (default)              csi.vsphere.vmware.com   Delete          Immediate           true                   3d18h
secondstorageclass (default)   csi.vsphere.vmware.com   Delete          Immediate           false                  12s
tanzu@bootstrap:~$
```

### Création d'un volume persistant dans la Storage class par défaut

Créez un fichier nommé `default-pvc-storage.yaml` avec ce contenu :

```yaml
kind: persistantVolumeClaim
apiVersion: v1
metadata:
  name: default-pvc-storage
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: "default"
  resources:
    requests:
      storage: 2Gi
```

Le nom du stockage persistant se trouve à coté de `name`, `storageClassName` contient le nom de la Storage Class qui est utilisée pour ce volume.

Exécutez cette commande pour créer le volume persistant :

```bash
# Creation d'un espace de nom qui sera utilisé pour mon volume persistant.
kubectl create namespace myspace
# Application du fichier de configuration dans l'espace de nom créé.
kubectl apply -f default-pvc-storage.yaml -n myspace
# Affichage des volumes persistants de l'espace de nom créé
kubectl get pv,pvc -n myspace
```

Revenez sur l'inventaire dans votre interface **vCenter**, cliquez à gauche sur l'icône `DataCenter`{.action} puis allez dans l'onglet `Surveiller`{.action} à droite et cliquez sur `Volume de conteneur`{.action} pour voir les volumes persistants.

Le volume persistant qui a été créé est affiché et l'on voit à sa droite le nom du Datastore sur lequel il est stocké.

![03 Display PV in vCenter 01](images/03-display-pv-vmware01.png){.thumbnail}

Cliquez sur l'icône en forme de bloc-notes à gauche du volume pour afficher les détails.

![03 Display PV in vCenter 02](images/03-display-pv-vmware02.png){.thumbnail}

Les informations concernant ce stockage persistant sont affichées et correspondent à ce qui a été créé à partir des commandes Kubernetes.

![03 Display PV in vCenter 03](images/03-display-pv-vmware03.png){.thumbnail}

Rendez-vous sur le Datastore qui est utilisé par défaut, cliquez à droite sur l'onglet `Fichiers`{.action} et faites défiler les dossiers du Datastore jusqu'au dossier `fcd`.

Vous constatez que le dossier contient deux fichiers, un fichier vmdk qui contient les données du volumes persistant et un fichier temporaire associé.

![03 Display PV in vCenter 04](images/03-display-pv-vmware04.png){.thumbnail}

### Création d'un volume persistant sur le deuxième Storage Class

Revenez sur la machine virtuelle **Bootstrap** et utilisez la ligne de commande.

Créez un fichier nommé `second-storage-pvc.yaml` :

```yaml
kind: persistantVolumeClaim
apiVersion: v1
metadata:
  name: second-storage-pvc
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: "secondstorageclass"
  resources:
    requests:
      storage: 2Gi
```

Le fichier utilise la même syntaxe que pour le premier stockage persistant mais avec un nom et une **Storage Class** différents.

Exécutez cette commande pour créer le volume persistant dans l'espace de nom **myspace** :

```bash
# Application du fichier de configuration dans l'espace de nom créé.
kubectl apply -f second-storage-pvc.yaml -n myspace
# Affichage des volumes persistants de l'espace de nom créé
kubectl get pv,pvc -n myspace
```

Le volume persistant est créé sur le deuxième **Datastore**.

Revenez dans l'interface **vCenter**. Vous constaterez que vous n'avez pas de nouveaux fichiers dans le dossier `fcd`.

![04 Display PV2 in vCenter 01](images/04-display-pv2-vmware01.png){.thumbnail}

Cliquez à droite sur le second Datastore, allez dans le dossier `fcd`{.action} de ce datastore. Vous constaterez que vous avez deux nouveaux fichiers comme sur le premier Datastore.

![04 Display PV2 in vCenter 02](images/04-display-pv2-vmware02.png){.thumbnail}

Revenez dans le `Datacenter`{.action} à la racine des datacenters, cliquez sur l'onglet `Surveiller`{.action} et choisissez `Volumes de conteneur`{.action} pour voir apparaitre les deux volumes persistants avec leurs emplacements dans les Datastores. 

![04 Display PV2 in vCenter 03](images/04-display-pv2-vmware03.png){.thumbnail}

## Aller plus loin <a name="gofurther"></a>

[Présentation de Tanzu Kubernetes Grid au sein d'OVHcloud](https://docs.ovh.com/ca/fr/private-cloud/tanzu-tkgm-installation)

[Installer Tanzu Kubernetes Grid](https://docs.ovh.com/ca/fr/private-cloud/tanzu-tkgm-installation)

[Administrer Tanzu Management Cluster Grid](https://docs.ovh.com/ca/fr/private-cloud/tanzu-tkgm-management)

[Présentation de VMware Tanzu Kubernetes Grid](https://tanzu.vmware.com/kubernetes-grid)

[Documentation de VMware Tanzu Kubenetes Grid](https://https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/index.html)

[Installation manuelle de l'outil CLI pour le déploiement de Tanzu Kubernetes GRID](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/1.5/vmware-tanzu-kubernetes-grid-15/GUID-install-cli.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
