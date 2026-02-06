---
title: Enterprise File Storage - Trident CSI Getting Started
excerpt: Deploy NetApp Trident CSI on OVHcloud Enterprise File Storage to manage volumes and snapshots in Kubernetes.
updated: 2026-02-05
---

## Objective
  
Provide a clear, step-by-step reference for deploying and configuring NetApp Trident CSI on OVHcloud Managed Kubernetes (MKS), enabling seamless access to Enterprise File Storage through the vRack. This guide consolidates best practices, prerequisites, IAM setup, backend configuration, and advanced features such as snapshots and volume management.
  
## Requirements

Before beginning, ensure your environment meets the following criteria:

- Access to the [OVHcloud Control Panel](/links/manager)
- Kubernetes Cluster: A fully deployed and operational cluster.
- Network (vRack):
    - The Public Cloud project and vRack services must reside on the same vRack.
    - Subnet and VLAN must match between the vRack services and the MKS private network.
    - **Important:** The Service Endpoint IP must be unique and unused within the subnet.

## Instructions

### IAM Configuration (Identity and Access Management)

Trident requires a dedicated service account to interact with the OVHcloud API and manage Enterprise File Storage volumes. Follow these steps to configure IAM properly.

1. **Service Account Creation (OAuth2)**

Create an OAuth2 client using the OVHcloud API with the `CLIENT_CREDENTIALS` flow.

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

Example payload:

```json
{
  "description": "csi test",
  "flow": "CLIENT_CREDENTIALS",
  "name": "CSI-TEST"
}
```

> [!primary]
>
> **Note:** Save the `clientId` and `clientSecret` securely, they are required for backend configuration.
>

2. **IAM Policy Creation**

Log in to your [OVHcloud Control Panel](/links/manager) and switch to `Identity, Security & Operations`{.action} in the top navigation bar. Open `Policies`{.action} and click `Create a policy`{.action}.

Configure your policy, then select `Enterprise File Storage` in the `product types` section and the ID of the relevant file storage in the `Resources` section.

3. **Account–Policy Association**

Associate the service account (created in 2.1) with the IAM policy by adding the account’s URN to the `identities` field:

> [!api]
>
> @api {v1} /iam PUT /iam/policy/{policyId}
>

Account URN can be retrieved using this call with the saved client ID:

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

4. **Assign Required Permissions**

Ensure the policy grants all actions needed by Trident:

| Action                                     | Description         |
| ------------------------------------------ | ------------------- |
| storageNetApp:apiovh:share/create          | Create shares       |
| storageNetApp:apiovh:share/delete          | Delete shares       |
| storageNetApp:apiovh:share/edit            | Modify shares       |
| storageNetApp:apiovh:share/acl/*           | Access management   |
| storageNetApp:apiovh:share/snapshot/*      | Snapshot management |
| storageNetApp:apiovh:share/extend & shrink | Resizing            |

### Trident CSI Installation

The installation uses Helm with specific images hosted on the OVHcloud private registry to support the driver.

Create a `trident-values.yaml` file to reference the OVHcloud-hosted images:

```bash
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
```

Run the installation:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --namespace trident \
  -f trident-values.yaml
```

Once the installation is complete, verify that all Trident pods are operational in the trident namespace before proceeding.

Install Tridentctl:

```bash
mkdir 25.02.1 && cd 25.02.1
wget https://github.com/NetApp/trident/releases/download/v25.02.1/trident-installer-25.02.1.tar.gz
tar -xf trident-installer-25.02.1.tar.gz
ln -sf /root/25.02.1/trident-installer/tridentctl /usr/local/bin/tridentctl
```

### Backend Configuration (Provisioner)

The backend connects NetApp Trident to the OVHcloud Enterprise File Storage service using the IAM credentials created earlier.

1. **Backend Configuration File**

Create a file named `backend-netapp.yaml`. The `ovh-efs` storage driver must be used.

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

2. **Backend Creation**

Create the backend using `tridentctl`:

```bash
./tridentctl create backend -f backend-netapp.yaml -n trident
```

Verify that the backend status is Online before continuing.

### StorageClass and Usage

This section describes how to expose Enterprise File Storage to Kubernetes workloads using Trident.

1. **StorageClass**

Define a `StorageClass` to enable dynamic provisioning via the Trident CSI driver:

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

This StorageClass allows volumes to be provisioned on demand and expanded dynamically.

2. **Volume Creation (PVC)**

Request a volume by creating a `PersistentVolumeClaim` with `ReadWriteMany` (RWX) access mode:

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

Once a Pod is scheduled using this PVC, the volume is automatically provisioned and mounted via NFS.

### Advanced Features

1. **Snapshot Management**

NetApp Trident supports on-demand volume snapshots for Enterprise File Storage.

- Define a `VolumeSnapshotClass` to manage snapshot lifecycle:

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:   
  name: csi-snapclass
driver: csi.trident.netapp.io
deletionPolicy: Delete
```

- Create a `VolumeSnapshot` in the same namespace as the source `PersistentVolumeClaim`:

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

The snapshot is created on the Enterprise File Storage service and can be used for backup or restore workflows.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
