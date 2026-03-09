---
title: Enterprise File Storage - Premiers pas avec Trident CSI
excerpt: "Déployez NetApp Trident CSI sur OVHcloud Enterprise File Storage pour gérer les volumes et les snapshots dans Kubernetes"
updated: 2026-02-18
---

## Objectif

Ce guide a pour objectif de fournir une référence claire et pas-à-pas pour déployer et configurer NetApp Trident CSI sur OVHcloud Managed Kubernetes (MKS), permettant un accès fluide à Enterprise File Storage via le vRack. Ce guide regroupe les meilleures pratiques, les prérequis, la configuration IAM, la mise en place du backend, ainsi que les fonctionnalités avancées telles que la gestion des snapshots et des volumes.

## Prérequis

- Un service [Enterprise File Storage](/links/storage/enterprise-file-storage) dans votre compte OVHcloud
- Un cluster [OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes)
- Un [vRack](/links/network/vrack) avec [vRack Services](/pages/network/vrack_services/global) configuré
- Connaître les [API OVHcloud](/pages/manage_and_operate/api/first-steps) et/ou la [CLI OVHcloud](/pages/manage_and_operate/cli/cli-getting-started)

Avant de commencer, assurez-vous que votre environnement répond aux critères suivants :

**vRack**

- **Projet Public Cloud et vRack Services** appartiennent au même vRack

**Région**

- **vRack Services et EFS** sont dans la même région

**Réseau**

- **Même ID de VLAN** pour le subnet de vRack Services et le réseau privé MKS
- **Même CIDR** pour le subnet de vRack Services et le subnet du réseau privé MKS
- Les IP du **pool d'allocation du réseau privé MKS** ne se chevauchent pas avec la plage de service des services vRack

**Connectivité**

- **Une passerelle (gateway)** est requise pour que les nœuds MKS puissent joindre l'API OVHcloud

![Schéma des prérequis Trident](images/trident_efs_requirements.excalidraw.png){.thumbnail}

> [!primary]
>
> **Note :** Les régions EFS et MKS peuvent être différentes ; sachez que la latence entre les différentes régions peut impacter les performances de vos charges de travail de stockage.
>
> **Il est fortement recommandé de garder les ressources de stockage et les ressources de calcul aussi proches que possible.**
>

## En pratique

### Configuration IAM (Identity and Access Management)

Trident nécessite un compte de service dédié pour interagir avec l'API OVHcloud et gérer les volumes Enterprise File Storage. Suivez les étapes ci-dessous pour configurer correctement l'IAM.

#### 1. Création du compte de service (OAuth2)

Créez un client OAuth2 avec l'API ou la CLI OVHcloud en utilisant le flux `CLIENT_CREDENTIALS`.

> [!tabs]
> Via l'API
>> Utilisez l'appel API suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/api/oauth2/client
>>
>> Avec le contenu de la requête suivant :
>>
>> ```json
>> {
>>   "description": "Service Account for Trident CSI",
>>   "flow": "CLIENT_CREDENTIALS",
>>   "name": "TRIDENT-CSI"
>> }
>> ```
>>
>> L'API répondra avec :
>>
>> ```json
>> {
>>   "clientId": "EU.xxxxxxxxxxxxxxxx",
>>   "clientSecret": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
>> }
>> ```
>>
> Via la CLI
>> Le Service account peut être créé avec l'[OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) et la commande suivante (complétez-la avec vos valeurs) :
>>
>> ```bash
>> ovhcloud account api oauth2 client create --name "TRIDENT-CSI" --description "Service Account for Trident CSI" --flow "CLIENT_CREDENTIALS"
>> ```
>>
>> La CLI répondra avec les valeurs `client ID` et `client secret` :
>>
>> ```bash
>> ✅ OAuth2 client created successfully (client ID: EU.xxxxxxxxxxxxxxxx, client secret: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
>> ```
>>

> [!primary]
>
> **Note :** Conservez précieusement le `clientId` et le `clientSecret`. Ils seront requis lors de la configuration du backend Trident.
>

#### 2. Création de la politique IAM

Configurez une politique IAM qui devra contenir les éléments suivants : le service account à autoriser, le ou les services `Enterprise File Storage` à inclure ainsi que les actions à accorder qui sont résumées dans le tableau ci-dessous :

| Action                                      | Description                             |
| ------------------------------------------- | --------------------------------------- |
| storageNetApp:apiovh:get                    | Lister les services                     |
| storageNetApp:apiovh:serviceInfos/get       | Récupérer les informations d'un service |
| storageNetApp:apiovh:share/accessPath/get   | Obtenir le point de montage d'un share  |
| storageNetApp:apiovh:share/acl/create       | Création d'une ACL                      |
| storageNetApp:apiovh:share/acl/delete       | Supprimer une ACL                       |
| storageNetApp:apiovh:share/acl/get          | Lister les ACLs                         |
| storageNetApp:apiovh:share/create           | Création d'un share                     |
| storageNetApp:apiovh:share/delete           | Suppression d'un share                  |
| storageNetApp:apiovh:share/edit             | Modification d'un share                 |
| storageNetApp:apiovh:share/extend           | Étendre un share                        |
| storageNetApp:apiovh:share/get              | Lister les shares                       |
| storageNetApp:apiovh:share/revertToSnapshot | Restaurer un snapshot                   |
| storageNetApp:apiovh:share/snapshot/create  | Création d'un snapshot                  |
| storageNetApp:apiovh:share/snapshot/delete  | Suppression d'un snapshot               |
| storageNetApp:apiovh:share/snapshot/edit    | Éditer un snapshot                      |
| storageNetApp:apiovh:share/snapshot/get     | Lister les snapshots                    |

> [!tabs]
> Via l'API
>> Utilisez l'appel API suivant pour créer la politique IAM :
>>
>> > [!api]
>> >
>> > @api {v2} /iam POST /iam/policy
>>
>> Avec le contenu de la requête suivant :
>>
>> > [!primary]
>> >
>> > Dans le champ `identities`, remplacez `xx11111-ovh` par votre identifiant de compte OVHcloud (NIC handle) et `EU.xxxxxxxxxxxxxxxx` par le `clientId` obtenu à l'étape 1.
>> >
>>
>> ```json
>> {
>>   "description": "Trident CSI",
>>   "identities": [
>>     "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-EU.xxxxxxxxxxxxxxxx"
>>   ],
>>   "name": "trident-policy",
>>   "permissions": {
>>     "allow": [
>>       {
>>         "action": "storageNetApp:apiovh:get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:serviceInfos/get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/accessPath/get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/acl/create"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/acl/delete"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/acl/get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/create"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/delete"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/edit"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/extend"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/revertToSnapshot"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/snapshot/create"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/snapshot/delete"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/snapshot/edit"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/snapshot/get"
>>       }
>>     ]
>>   },
>>   "resources": [
>>     {
>>       "urn": "urn:v1:eu:resource:storageNetApp:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
>>     }
>>   ]
>> }
>> ```
>>
>> L'API répondra avec les détails de la politique créée :
>>
>> ```json
>> {
>>   "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
>>   "name": "trident-policy",
>>   "description": "Trident CSI",
>>   ...
>> }
>> ```
>>
> Via la CLI
>> La politique IAM peut être créée avec l'[OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) et la commande suivante (complétez-la avec vos valeurs) :
>>
>> > [!primary]
>> >
>> > Dans le champ `identities`, remplacez `xx11111-ovh` par votre identifiant de compte OVHcloud (NIC handle) et `EU.xxxxxxxxxxxxxxxx` par le `clientId` obtenu à l'étape 1.
>> >
>>
>> ```bash
>> cat <<EOF | ovhcloud iam policy create --from-file -
>> {
>>   "description": "Trident CSI",
>>   "identities": [
>>     "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-EU.xxxxxxxxxxxxxxxx"
>>   ],
>>   "name": "trident-policy",
>>   "permissions": {
>>     "allow": [
>>       {
>>         "action": "storageNetApp:apiovh:get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:serviceInfos/get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/accessPath/get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/acl/create"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/acl/delete"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/acl/get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/create"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/delete"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/edit"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/extend"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/get"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/revertToSnapshot"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/snapshot/create"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/snapshot/delete"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/snapshot/edit"
>>       },
>>       {
>>         "action": "storageNetApp:apiovh:share/snapshot/get"
>>       }
>>     ]
>>   },
>>   "resources": [
>>     {
>>       "urn": "urn:v1:eu:resource:storageNetApp:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
>>     }
>>   ]
>> }
>> EOF
>> ```
>>
>> La CLI répondra avec le retour ci-dessous :
>>
>> ```bash
>> ✅ IAM policy xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx created successfully
>> ```

### Installation de Trident CSI

L'installation utilise Helm avec des images personnalisées hébergées sur Docker Hub.
Ces images incluent un driver supplémentaire ajouté par OVHcloud qui permet la consommation de stockage persistant depuis l'offre OVHcloud Enterprise File Storage.

Créez un fichier `trident-values.yaml` afin de référencer les images hébergées par OVHcloud :

```bash
cat <<EOF > trident-values.yaml
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
EOF
```

Lancez l'installation :

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --create-namespace \
  --namespace trident \
  -f trident-values.yaml
```

Le retour de la CLI devrait montrer que le chart Helm a été déployé :

```bash
NAME: trident-operator
LAST DEPLOYED: Tue Feb 17 13:51:15 2026
NAMESPACE: trident
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
Thank you for installing trident-operator, which will deploy and manage NetApp's Trident CSI
storage provisioner for Kubernetes.

Your release is named 'trident-operator' and is installed into the 'trident' namespace.
Please note that there must be only one instance of Trident (and trident-operator) in a Kubernetes cluster.

To configure Trident to manage storage resources, you will need a copy of tridentctl, which is
available in pre-packaged Trident releases.  You may find all Trident releases and source code
online at https://github.com/NetApp/trident.

To learn more about the release, try:

  $ helm status trident-operator
  $ helm get all trident-operator
```

Une fois l'installation terminée, vérifiez que tous les pods Trident sont en état `Running` dans le namespace trident avant de poursuivre :

```bash
kubectl get pods -n trident
```

Le retour devrait montrer tous les pods en état `Running` :

```bash
NAME                                  READY   STATUS    RESTARTS        AGE
trident-controller-75869d7499-ffmkt   6/6     Running   0               4m25s
trident-node-linux-4gv6w              2/2     Running   1 (4m24s ago)   4m25s
trident-node-linux-g942s              2/2     Running   1 (4m24s ago)   4m24s
trident-node-linux-tfjc2              2/2     Running   0               4m25s
trident-operator-787b98cb7c-sgtdh     1/1     Running   0               4m26s
```

### Création du backend Trident

Le backend Trident permet de connecter NetApp Trident au service OVHcloud Enterprise File Storage à l'aide des identifiants IAM créés précédemment.

#### 1. Création d'un secret

Créez un secret contenant les informations de connexion permettant à Trident d'accéder à l'API OVHcloud.

> [!warning]
>
> Remplacez les valeurs `clientID` et `clientSecret` par les identifiants obtenus à l'étape 1.
>

```bash
cat <<EOF | kubectl create -n trident -f -
apiVersion: v1
kind: Secret
metadata:
  name: tbc-ovh-efs-secret
type: Opaque
stringData:
  clientID: "EU.xxxxxxxxxxxxxxxx"         # Remplacez par votre clientId
  clientSecret: "aaaaaaaaaaaaaaaaaaaaaa"  # Remplacez par votre clientSecret
EOF
```

Le retour de la CLI confirmera la création du secret :

```bash
secret/tbc-ovh-efs-secret created
```

#### 2. Création du backend Trident

Créez votre backend avec la commande ci-dessous :

> [!primary]
>
> Le driver de stockage `ovh-efs` doit impérativement être utilisé. Remplacez `exportRule`, `location` et les autres paramètres par les valeurs correspondant à votre environnement.
>

```bash
cat <<EOF | kubectl create -n trident -f -
apiVersion: trident.netapp.io/v1
kind: TridentBackendConfig
metadata:
  name: tbc-ovh-efs-gra
spec:
  version: 1
  backendName: backend-ovh-efs
  defaults:
    exportRule: 10.0.32.0/24    # CIDR de votre réseau pour les ACLs NFS
  storageDriverName: ovh-efs
  clientLocation: ovh-eu
  location: eu-west-gra         # Localisation de votre service EFS
  serviceLevel: premium
  nfsMountOptions: rw,hard,rsize=65536,wsize=65536,nfsvers=3,tcp
  credentials:
    name: tbc-ovh-efs-secret
EOF
```

Le retour de la CLI confirmera la création du backend :

```bash
tridentbackendconfig.trident.netapp.io/tbc-ovh-efs-gra created
```

Vérifiez que le backend a été correctement créé avec la commande ci-dessous :

```bash
kubectl get tridentbackendconfig -n trident
```

Le retour devrait montrer le backend en état `Bound` :

```bash
NAME                  BACKEND NAME      BACKEND UUID                           PHASE   STATUS
tbc-ovh-efs-gra       backend-ovh-efs   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   Bound   Success
```

### StorageClass et utilisation des volumes

Cette section explique comment exposer Enterprise File Storage aux workloads Kubernetes à l'aide de Trident.

#### 1. StorageClass

Définissez une `StorageClass` pour activer le provisionnement dynamique via le driver Trident CSI :

```bash
cat <<EOF | kubectl create -f -
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: ovh-efs-gra-premium
provisioner: csi.trident.netapp.io
parameters:
  backendType: "ovh-efs"
  fsType: "nfs"
allowVolumeExpansion: true
EOF
```

Le retour de la CLI confirmera la création de la `StorageClass` :

```bash
storageclass.storage.k8s.io/ovh-efs-gra-premium created
```

Cette StorageClass permet de provisionner les volumes à la demande et de les étendre dynamiquement.

#### 2. Création d'un volume (PVC)

Créez un `PersistentVolumeClaim` avec un accès `ReadWriteMany` (RWX) :

```bash
cat <<EOF | kubectl create -f -
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: premium-pvc
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 100Gi
  storageClassName: ovh-efs-gra-premium
EOF
```

Le retour de la CLI confirmera la création du `PVC` :

```bash
persistentvolumeclaim/premium-pvc created
```

Vérifiez que le PVC a été créé avec la commande ci-dessous :

```bash
kubectl get pvc
```

Le retour de la CLI devrait montrer le PVC en état `Bound` :

```bash
NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS          VOLUMEATTRIBUTESCLASS   AGE
premium-pvc  Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   100Gi      RWX            ovh-efs-gra-premium   <unset>                 5m34s
```

Une fois qu'un Pod utilisera ce PVC, le volume sera automatiquement monté via le protocole NFS.

### Fonctionnalités avancées

#### Gestion des snapshots

NetApp Trident permet de créer des snapshots de volumes à la demande sur Enterprise File Storage.

- Définir une `VolumeSnapshotClass` pour gérer le cycle de vie des snapshots :

```bash
cat <<EOF | kubectl create -f -
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:   
  name: csi-snapclass
driver: csi.trident.netapp.io
deletionPolicy: Delete
EOF
```

Le retour de la CLI confirmera la création de la `VolumeSnapshotClass` :

```bash
volumesnapshotclass.snapshot.storage.k8s.io/csi-snapclass created
```

- Créer un `VolumeSnapshot` dans le même namespace que le `PersistentVolumeClaim` source :

```bash
cat <<EOF | kubectl create -f -
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: my-snapshot
spec:
  volumeSnapshotClassName: csi-snapclass
  source:
    persistentVolumeClaimName: premium-pvc
EOF
```

Le retour de la CLI confirmera la création du `VolumeSnapshot` :

```bash
volumesnapshot.snapshot.storage.k8s.io/my-snapshot created
```

Vérifiez que le `VolumeSnapshot` a été créé avec la commande ci-dessous :

```bash
kubectl get volumesnapshot
```

Le retour devrait montrer le VolumeSnapshot en état `READYTOUSE=true` :

```bash
NAME          READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS   SNAPSHOTCONTENT                                    CREATIONTIME   AGE
my-snapshot   true         premium-pvc                           100Gi         csi-snapclass   snapcontent-0274f0ec-e8ab-48f4-8d89-4422c3875d92   27s            30s
```

Le snapshot est créé sur le service Enterprise File Storage et peut être utilisé pour des workflows de sauvegarde ou de restauration.

## Dépannage

- **Backend non lié** : Vérifiez que les identifiants IAM (clientId/clientSecret) sont corrects et que la politique IAM accorde toutes les permissions requises.
- **PVC bloqué en Pending** : Vérifiez que tous les pods Trident sont en état `Running`, que le backend est en état `Bound` et que la `StorageClass` référence le bon type de backend. Consultez les erreurs dans les logs des pods Trident avec `kubectl logs -n trident <nom-du-pod>`.
- **Problèmes de connectivité réseau** : Vérifiez que le cluster MKS peut joindre le service Enterprise File Storage via le vRack.

## Aller plus loin

[Enterprise File Storage - Configuration du réseau privé](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_network_config)

[Enterprise File Storage - Connecter une instance Public Cloud à un volume EFS via le réseau privé vRack](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_pci_connection_via_vrack)

[Gestion des comptes de service OVHcloud via l'API](/pages/manage_and_operate/api/manage-service-account)

[Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
