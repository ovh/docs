---
title: Enterprise File Storage - Premiers pas avec Trident CSI
excerpt: "Déployez NetApp Trident CSI sur OVHcloud Enterprise File Storage pour gérer les volumes et les snapshots dans Kubernetes"
updated: 2026-02-09
---

## Objectif

Ce guide a pour objectif de fournir une référence claire et pas-à-pas pour déployer et configurer NetApp Trident CSI sur OVHcloud Managed Kubernetes (MKS), permettant un accès fluide à Enterprise File Storage via le vRack. Ce guide regroupe les meilleures pratiques, les prérequis, la configuration IAM, la mise en place du backend, ainsi que les fonctionnalités avancées telles que la gestion des snapshots et des volumes.

## Prérequis

- Être connecté à l'[espace client OVHcloud](/links/manager)

Avant de commencer, assurez-vous que votre environnement répond aux critères suivants :

- Cluster Kubernetes : Un cluster entièrement déployé et opérationnel.
- Réseau (vRack) :
    - Le projet Public Cloud et les services vRack doivent être connectés au même vRack.
    - Le subnet et le VLAN doivent correspondre entre les services vRack et le réseau privé MKS.
    - **Important :** L’IP du Service Endpoint doit être unique et non utilisée dans le subnet.

## En pratique

### Configuration IAM (Identity and Access Management)

Trident nécessite un compte de service dédié pour interagir avec l’API OVHcloud et gérer les volumes Enterprise File Storage. Suivez les étapes ci-dessous pour configurer correctement l’IAM.

#### 1. Création du compte de service (OAuth2)

Créez un client OAuth2 via l’API OVHcloud en utilisant le flux `CLIENT_CREDENTIALS`.

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

Exemple de payload :

```json
{
  "description": "csi test",
  "flow": "CLIENT_CREDENTIALS",
  "name": "CSI-TEST"
}
```

> [!primary]
>
> **Note :** Conservez précieusement le `clientId` et le `clientSecret`. Ils seront requis lors de la configuration du backend Trident.
>

#### 2. Création de la politique IAM

Connectez-vous à l'[espace client OVHcloud](/links/manager) et cliquez sur `Identité, Sécurité & Opérations`{.action}. Ouvrez le menu `Politiques`{.action} et cliquez sur `Créer une politique`{.action}.

Configurez la politique en sélectionnant `Enterprise File Storage` dans la section `Types de produits` puis l’ID du service de stockage de fichiers concerné dans la section `Ressources`.

#### 3. Association du compte à la politique

Associez le compte de service (créé à l’étape 1) à la politique IAM en ajoutant l’URN du compte dans le champ `identities` :

> [!api]
>
> @api {v1} /iam PUT /iam/policy/{policyId}
>

L'URN du compte peut être récupéré à l'aide de cet appel avec l'ID client enregistré :

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

#### 4. Attribution des permissions requises

Assurez-vous que la policy accorde l’ensemble des actions nécessaires au bon fonctionnement de Trident :

| Action                                      | Description                             |
| ------------------------------------------- | --------------------------------------- |
| storageNetApp:apiovh:get                    | Lister les services                     |
| storageNetApp:apiovh:serviceInfos/get       | Récuperer les informations d'un service |
| storageNetApp:apiovh:share/accessPath/get   | Obtenir le point de montage d'un share  |
| storageNetApp:apiovh:share/acl/create       | Création d'une ACL                      |
| storageNetApp:apiovh:share/acl/delete       | Supprimer une ACL                       |
| storageNetApp:apiovh:share/acl/get          | Lister les ACLs                         |
| storageNetApp:apiovh:share/create           | Création d'un share                     |
| storageNetApp:apiovh:share/delete           | Suppresion d'un share                   |
| storageNetApp:apiovh:share/edit             | Modification d'un share                 |
| storageNetApp:apiovh:share/extend           | Etendre un share                        |
| storageNetApp:apiovh:share/get              | Lister les shares                       |
| storageNetApp:apiovh:share/revertToSnapshot | Restaurer un snapshot                   |
| storageNetApp:apiovh:share/snapshot/create  | Création d'un snapshot                  |
| storageNetApp:apiovh:share/snapshot/delete  | Suppresion d'un snapshot                |
| storageNetApp:apiovh:share/snapshot/edit    | Editer un snapshot                      |
| storageNetApp:apiovh:share/snapshot/get     | Lister les snapshots                    |

### Installation de Trident CSI

L'installation utilise Helm avec des images personnalisées hébergées sur Docker Hub.
Ces images incluent un driver supplémentaire ajouté par OVHcloud qui permet la consommation de stockage persistant depuis l'offre OVHcloud Enterprise File Storage.

Créez un fichier `trident-values.yaml` afin de référencer les images hébergées par OVHcloud :

```bash
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
```

Lancez l'installation :

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --namespace trident \
  -f trident-values.yaml
```

Une fois l’installation terminée, vérifiez que tous les pods Trident sont en état `Running` dans le namespace trident avant de poursuivre.

Installez Tridentctl :

```bash
mkdir 25.02.1 && cd 25.02.1
wget https://github.com/NetApp/trident/releases/download/v25.02.1/trident-installer-25.02.1.tar.gz
tar -xf trident-installer-25.02.1.tar.gz
ln -sf /root/25.02.1/trident-installer/tridentctl /usr/local/bin/tridentctl
```

### Configuration du backend (Provisioner)

Le backend permet de connecter NetApp Trident au service OVHcloud Enterprise File Storage à l’aide des identifiants IAM créés précédemment.

#### 1. Fichier de configuration du backend

Créez un fichier nommé `backend-netapp.yaml`. Le driver de stockage `ovh-efs` doit impérativement être utilisé.

```yaml
version: 1
storageDriverName: ovh-efs
backendName: backend-ovh-efs-rbx
location: eu-west-rbx          # Your service Region
clientLocation: ovh-eu
clientID: "EU.XXX"             # Your IAM ClientID
clientSecret: "XXX"            # Your IAM ClientSecret
defaults:   exportRule: 10.235.0.0/24    # CIDR of your nodes for ACL
nfsMountOptions: rw,hard,rsize=65536,wsize=65536,nfsvers=3,tcp
```

#### 2. Création du backend

Créez le backend à l’aide de l’outil `tridentctl` :

```bash
./tridentctl create backend -f backend-netapp.yaml -n trident
```

Avant de poursuivre, vérifiez que l’état du backend est `Online`.

### StorageClass et utilisation des volumes

Cette section explique comment exposer Enterprise File Storage aux workloads Kubernetes à l’aide de Trident.

#### 1. StorageClass

Définissez une `StorageClass` pour activer le provisionnement dynamique via le driver Trident CSI :

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:  
  name: efs-rbx-test
provisioner: csi.trident.netapp.io
parameters:   
  backendType: "ovh-efs"
  fsType: "nfs"
allowVolumeExpansion: true   # Important for resizing
```

Cette StorageClass permet de provisionner les volumes à la demande et de les étendre dynamiquement.

#### 2. Création d’un volume (PVC)

Créez un `PersistentVolumeClaim` avec un accès `ReadWriteMany` (RWX) pour demander un volume :

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvclaim-test
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 100Gi
  storageClassName: efs-rbx-test
```

Une fois qu’un Pod utilise ce PVC, le volume est automatiquement provisionné et monté via NFS.

### Fonctionnalités avancées

#### Gestion des snapshots

NetApp Trident permet de créer des snapshots de volumes à la demande sur Enterprise File Storage.

- Définir une `VolumeSnapshotClass` pour gérer le cycle de vie des snapshots :

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:   
  name: csi-snapclass
driver: csi.trident.netapp.io
deletionPolicy: Delete
```

- Créer un `VolumeSnapshot` dans le même namespace que le `PersistentVolumeClaim` source :

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: my-snapshot
  namespace: my-namespace
spec:
  volumeSnapshotClassName: csi-snapclass
  source:
    persistentVolumeClaimName: pvclaim-test
```

Le snapshot est créé sur le service Enterprise File Storage et peut être utilisé pour des workflows de sauvegarde ou de restauration.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

