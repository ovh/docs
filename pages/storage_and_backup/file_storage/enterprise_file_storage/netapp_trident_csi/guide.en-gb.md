---
title: Enterprise File Storage - Getting started with Trident CSI
excerpt: Deploy NetApp Trident CSI on OVHcloud Enterprise File Storage to manage volumes and snapshots in Kubernetes
updated: 2026-02-11
---

## Objective

The guide will provide a clear, step-by-step reference for deploying and configuring NetApp Trident CSI on OVHcloud Managed Kubernetes (MKS), enabling seamless access to Enterprise File Storage through the vRack. This guide consolidates best practices, prerequisites, IAM setup, backend configuration, and advanced features such as snapshots and volume management.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)

Before beginning, ensure your environment meets the following criteria:

- Kubernetes Cluster: A fully deployed and operational cluster.
- Network (vRack):
  - The Public Cloud project and vRack services must reside on the same vRack.
  - Subnet and VLAN must match between the vRack services and the MKS private network.
  - **Important:** The Service Endpoint IP must be unique and unused within the subnet.

## Instructions

### IAM Configuration (Identity and Access Management)

Trident requires a dedicated service account to interact with the OVHcloud API and manage Enterprise File Storage volumes. Follow these steps to configure IAM properly.

#### 1. Service Account Creation (OAuth2)

Create an OAuth2 client with the OVHcloud API or CLI using the `CLIENT_CREDENTIALS` flow.

> [!tabs]
> Via the API
>> Use the following API call:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/api/oauth2/client
>>
>> With the following request body:
>>
>> ```json
>> {
>>   "description": "Service Account for Trident CSI",
>>   "flow": "CLIENT_CREDENTIALS",
>>   "name": "TRIDENT-CSI"
>> }
>> ```
>>
>> The API will respond with:
>>
>> ```json
>> {
>>   "clientId": "EU.xxxxxxxxxxxxxxxx",
>>   "clientSecret": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
>> }
>> ```
>>
> Via the CLI
>> The Service account can be created with the [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) and the following command (complete it with your values):
>>
>> ```bash
>> ovhcloud account api oauth2 client create --name "TRIDENT-CSI" --description "Service Account for Trident CSI" --flow "CLIENT_CREDENTIALS"
>> ```
>>
>> The CLI will respond with the `client ID` and `client secret` values:
>>
>> ```bash
>> ✅ OAuth2 client created successfully (client ID: EU.xxxxxxxxxxxxxxxx, client secret: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
>> ```
>>

> [!primary]
>
> **Note:** Save the `clientId` and `clientSecret` securely, they are required for backend configuration.
>

#### 2. IAM Policy Creation

Configure an IAM policy that must contain the following elements: the service account to authorize, the `Enterprise File Storage` service(s) to include, and the actions to grant, which are summarized in the table below:

| Action                                      | Description                     |
| ------------------------------------------- | ------------------------------- |
| storageNetApp:apiovh:get                    | List services                   |
| storageNetApp:apiovh:serviceInfos/get       | Get service information         |
| storageNetApp:apiovh:share/accessPath/get   | Get NFS mount point for a share |
| storageNetApp:apiovh:share/acl/create       | Create ACL                      |
| storageNetApp:apiovh:share/acl/delete       | Delete ACL                      |
| storageNetApp:apiovh:share/acl/get          | List ACL for a share            |
| storageNetApp:apiovh:share/create           | Create a share                  |
| storageNetApp:apiovh:share/delete           | Delete a share                  |
| storageNetApp:apiovh:share/edit             | Update a share                  |
| storageNetApp:apiovh:share/extend           | Extend a share                  |
| storageNetApp:apiovh:share/get              | List shares                     |
| storageNetApp:apiovh:share/revertToSnapshot | Restore a snapshot              |
| storageNetApp:apiovh:share/snapshot/create  | Create a snapshot               |
| storageNetApp:apiovh:share/snapshot/delete  | Delete a snapshot               |
| storageNetApp:apiovh:share/snapshot/edit    | Update a snapshot               |
| storageNetApp:apiovh:share/snapshot/get     | List snapshots                  |

> [!tabs]
> Via the API
>> Use the following API call to create the IAM policy:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /iam/policy
>>
>> With the following request body:
>>
>> ```json
>>{
>>  "description": "Trident CSI",
>>  "identities": [
>>    "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-EU.xxxxxxxxxxxxxxxx"
>>  ],
>>  "name": "trident-policy",
>>  "permissions": {
>>    "allow": [
>>      {
>>        "action": "storageNetApp:apiovh:get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:serviceInfos/get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/accessPath/get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/acl/create"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/acl/delete"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/acl/get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/create"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/delete"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/edit"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/extend"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/revertToSnapshot"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/snapshot/create"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/snapshot/delete"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/snapshot/edit"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/snapshot/get"
>>      }
>>    ]
>>  },
>>  "resources": [
>>    {
>>      "urn": "urn:v1:eu:resource:storageNetApp:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
>>    }
>>  ]
>>}
>> ```
>>
> Via the CLI
>> The IAM policy can be created with the [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) and the following command (complete it with your values):
>>
>> ```bash
>>cat <<EOF | ovhcloud iam policy create --from-file -
>>{
>>  "description": "Trident CSI",
>>  "identities": [
>>    "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-EU.xxxxxxxxxxxxxxxx"
>>  ],
>>  "name": "trident-policy",
>>  "permissions": {
>>    "allow": [
>>      {
>>        "action": "storageNetApp:apiovh:get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:serviceInfos/get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/accessPath/get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/acl/create"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/acl/delete"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/acl/get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/create"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/delete"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/edit"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/extend"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/get"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/revertToSnapshot"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/snapshot/create"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/snapshot/delete"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/snapshot/edit"
>>      },
>>      {
>>        "action": "storageNetApp:apiovh:share/snapshot/get"
>>      }
>>    ]
>>  },
>>  "resources": [
>>    {
>>      "urn": "urn:v1:eu:resource:storageNetApp:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
>>    }
>>  ]
>>}
>>EOF
>> ```
>>
>> The CLI will respond with the following output:
>>
>> ```bash
>> ✅ IAM policy xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx created successfully
>> ```

### Trident CSI Installation

The installation uses Helm with custom images hosted on Docker Hub.
These images include an additional storage driver that enables consumption of persistent storage from OVHcloud Enterprise File Storage.

Create a `trident-values.yaml` file to reference the OVHcloud-hosted images:

```bash
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
```

Run the installation:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --create-namespace \
  --namespace trident \
  -f trident-values.yaml
```

Once the installation is complete, verify that all Trident pods are in `Running` state in the trident namespace before proceeding.

```bash
kubectl get pods -n trident
NAME                                  READY   STATUS    RESTARTS        AGE
trident-controller-75869d7499-ffmkt   6/6     Running   0               4m25s
trident-node-linux-4gv6w              2/2     Running   1 (4m24s ago)   4m25s
trident-node-linux-g942s              2/2     Running   1 (4m24s ago)   4m24s
trident-node-linux-tfjc2              2/2     Running   0               4m25s
trident-operator-787b98cb7c-sgtdh     1/1     Running   0               4m26s
```

### Trident Backend Creation

The Trident backend connects NetApp Trident to the OVHcloud Enterprise File Storage service using the IAM credentials previously created.

#### 1. Secret Creation

Create a secret containing the connection information that allows Trident to access the OVHcloud API.

```bash
cat <<EOF | kubectl create -n trident -f -
apiVersion: v1
kind: Secret
metadata:
  name: tbc-ovh-efs-secret
type: Opaque
stringData:
  clientID: "EU.xxxxxxxxxxxxxxxx"                 
  clientSecret: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
EOF
```

The CLI will respond with the following output:

```bash
secret/tbc-ovh-efs-gra-secret created
```

#### 2. Trident Backend Creation

Create your backend with the command below.

**Note:** The `ovh-efs` storage driver must be used.

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
    exportRule: 10.0.32.0/24    # CIDR of your network for NFS ACLs
  storageDriverName: ovh-efs
  clientLocation: ovh-eu
  location: eu-west-gra         # Location of your EFS service
  serviceLevel: premium
  nfsMountOptions: rw,hard,rsize=65536,wsize=65536,nfsvers=3,tcp
  credentials:
    name: tbc-ovh-efs-secret
EOF
```

The CLI will respond with the following output:

```bash
tridentbackendconfig.trident.netapp.io/tbc-ovh-efs-gra created
```

Verify that the backend has been created correctly with the command below; it should be in `bound` state:

```bash
kubectl get tridentbackendconfig -n trident
NAME                  BACKEND NAME      BACKEND UUID                           PHASE   STATUS
tbc-ovh-efs-gra       backend-ovh-efs   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   Bound   Success
```

### StorageClass and Usage

This section describes how to expose Enterprise File Storage to Kubernetes workloads using Trident.

#### 1. StorageClass

Define a `StorageClass` to enable dynamic provisioning via the Trident CSI driver:

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

The CLI will respond with the following output:

```bash
storageclass.storage.k8s.io/ovh-efs-gra-premium created
```

This StorageClass allows volumes to be provisioned on demand and expanded dynamically.

#### 2. Volume Creation (PVC)

Create a `PersistentVolumeClaim` with `ReadWriteMany` (RWX) access mode:

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

The CLI will respond with the following output:

```bash
persistentvolumeclaim/premium-pvc created
```

Verify that the PVC has been created with the command below; it should appear in `bound` state:

```bash
kubectl get pvc
NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS          VOLUMEATTRIBUTESCLASS   AGE
premium-pvc  Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   100Gi      RWX            ovh-efs-gra-premium   <unset>                 5m34s
```

Once a Pod uses this PVC, the volume will be automatically mounted via the NFS protocol.

### Advanced Features

#### Snapshot Management

NetApp Trident supports on-demand volume snapshots for Enterprise File Storage.

- Define a `VolumeSnapshotClass` to manage snapshot lifecycle:

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

- Create a `VolumeSnapshot` in the same namespace as the source `PersistentVolumeClaim`:

```bash
cat <<EOF | kubectl create -f -
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: my-snapshot
  namespace: my-namespace
spec:
  volumeSnapshotClassName: csi-snapclass
  source:
    persistentVolumeClaimName: pvclaim-test
EOF
```

The snapshot is created on the Enterprise File Storage service and can be used for backup or restore workflows.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
