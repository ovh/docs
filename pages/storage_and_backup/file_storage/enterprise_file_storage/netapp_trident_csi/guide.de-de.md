---
title: Enterprise File Storage - Einführung in Trident CSI
excerpt: "Bereitstellen von NetApp Trident CSI auf OVHcloud Enterprise File Storage, um Volumes und Snapshots in Kubernetes zu verwalten"
updated: 2026-02-10
---

## Ziel

Dieses Handbuch bietet eine klare, schrittweise Anleitung zur Bereitstellung und Konfiguration von NetApp Trident CSI auf OVHcloud Managed Kubernetes (MKS), wodurch ein nahtloser Zugriff auf Enterprise File Storage über den vRack ermöglicht wird. Dieses Handbuch fasst bewährte Methoden, Voraussetzungen, IAM-Einrichtung, Backend-Konfiguration und erweiterte Funktionen wie Snapshots und Volumeverwaltung zusammen.

## Voraussetzungen

- Zugriff auf das [OVHcloud Kundencenter](/links/manager)

Bevor Sie beginnen, stellen Sie sicher, dass Ihre Umgebung folgende Kriterien erfüllt:

- Kubernetes-Cluster: Ein vollständig bereitgestellter und betriebsbereiter Cluster.
- Netzwerk (vRack):
    - Der Public Cloud Projekt und vRack Dienst müssen sich im gleichen vRack befinden.
    - Die Subnetz- und VLAN-Einstellungen müssen zwischen den vRack Diensten und dem privaten Netzwerk des MKS übereinstimmen.
    - **Wichtig:** Die Service Endpoint IP muss eindeutig und innerhalb des Subnetzes nicht verwendet werden.

## In der praktischen Anwendung

### IAM-Konfiguration (Identity and Access Management)

Trident benötigt ein dediziertes Dienstkonto, um mit der OVHcloud API zu interagieren und Enterprise File Storage Volumes zu verwalten. Folgen Sie diesen Schritten, um IAM ordnungsgemäß zu konfigurieren.

#### 1. Dienstkontoerstellung (OAuth2)

Erstellen Sie einen OAuth2-Client mithilfe der OVHcloud API mit dem `CLIENT_CREDENTIALS`-Fluss.

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

Beispiel-Payload:

```json
{
  "description": "csi test",
  "flow": "CLIENT_CREDENTIALS",
  "name": "CSI-TEST"
}
```

> [!primary]
>
> **Hinweis:** Speichern Sie `clientId` und `clientSecret` sicher, sie werden für die Backend-Konfiguration benötigt.
>

#### 2. IAM-Richtlinienerstellung

Melden Sie sich bei Ihrem [OVHcloud Kundencenter](/links/manager) an und navigieren Sie zu `Identität, Sicherheit und Operationen`{.action}. Öffnen Sie `Richtlinien`{.action} und klicken Sie auf `Richtlinie Erstellen`{.action}.

Konfigurieren Sie Ihre Richtlinie, wählen Sie anschließend `Enterprise File Storage` im Abschnitt `Produkttypen` und die ID des relevanten File Storages im Abschnitt `Resourcen`.

#### 3. Konto-Richtlinienzuordnung

Ordnen Sie das Dienstkonto (erstellt in 2.1) der IAM-Richtlinie zu, indem Sie die URN des Kontos in das Feld `identities` eintragen:

> [!api]
>
> @api {v1} /iam PUT /iam/policy/{policyId}
>

Die Kontourdn kann mit diesem Aufruf mithilfe der gespeicherten Client-ID abgerufen werden:

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

#### 4. Zuweisen der erforderlichen Berechtigungen

Stellen Sie sicher, dass die Richtlinie alle von Trident benötigten Aktionen gewährt:

| Aktion                                      | Beschreibung                           |
| ------------------------------------------- | -------------------------------------- |
| storageNetApp:apiovh:get                    | Dienste auflisten                      |
| storageNetApp:apiovh:serviceInfos/get       | Dienstinformationen abrufen            |
| storageNetApp:apiovh:share/accessPath/get   | NFS-Mountpoint für einen Share abrufen |
| storageNetApp:apiovh:share/acl/create       | ACL erstellen                          |
| storageNetApp:apiovh:share/acl/delete       | ACL löschen                            |
| storageNetApp:apiovh:share/acl/get          | ACL für einen Share auflisten          |
| storageNetApp:apiovh:share/create           | Share erstellen                        |
| storageNetApp:apiovh:share/delete           | Share löschen                          |
| storageNetApp:apiovh:share/edit             | Share aktualisieren                    |
| storageNetApp:apiovh:share/extend           | Share erweitern                        |
| storageNetApp:apiovh:share/get              | Shares auflisten                       |
| storageNetApp:apiovh:share/revertToSnapshot | Snapshot wiederherstellen              |
| storageNetApp:apiovh:share/snapshot/create  | Snapshot erstellen                     |
| storageNetApp:apiovh:share/snapshot/delete  | Snapshot löschen                       |
| storageNetApp:apiovh:share/snapshot/edit    | Snapshot aktualisieren                 |
| storageNetApp:apiovh:share/snapshot/get     | Snapshots auflisten                    |

### Trident CSI Installation

Die Installation verwendet Helm mit benutzerdefinierten Images, die auf Docker Hub gehostet werden.
Diese Images enthalten einen zusätzlichen Speicher-Treiber, der den Zugriff auf persistenten Speicher über OVHcloud Enterprise File Storage ermöglicht.

Erstellen Sie eine Datei namens `trident-values.yaml`, um die OVHcloud-gehosteten Images zu referenzieren:

```bash
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
```

Führen Sie die Installation aus:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --namespace trident \
  -f trident-values.yaml
```

Sobald die Installation abgeschlossen ist, überprüfen Sie, dass alle Trident-Pods im trident-Namespace ordnungsgemäß laufen, bevor Sie fortfahren.

Installieren Sie Tridentctl:

```bash
mkdir 25.02.1 && cd 25.02.1
wget https://github.com/NetApp/trident/releases/download/v25.02.1/trident-installer-25.02.1.tar.gz
tar -xf trident-installer-25.02.1.tar.gz
ln -sf /root/25.02.1/trident-installer/tridentctl /usr/local/bin/tridentctl
```

### Backend-Konfiguration (Provisioner)

Das Backend verbindet NetApp Trident mit dem OVHcloud Enterprise File Storage-Dienst mithilfe der zuvor erstellten IAM-Anmeldeinformationen.

#### 1. Backend-Konfigurationsdatei

Erstellen Sie eine Datei namens `backend-netapp.yaml`. Der `ovh-efs`-Speicher-Treiber muss verwendet werden.

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

#### 2. Backend-Erstellung

Erstellen Sie das Backend mit `tridentctl`:

```bash
./tridentctl create backend -f backend-netapp.yaml -n trident
```

Überprüfen Sie, dass der Backend-Status Online ist, bevor Sie fortfahren.

### StorageClass und Nutzung

Dieser Abschnitt beschreibt, wie Enterprise File Storage mithilfe von Trident für Kubernetes-Workloads bereitgestellt wird.

#### 1. StorageClass

Definieren Sie eine `StorageClass`, um dynamische Bereitstellung über den Trident CSI-Treiber zu ermöglichen:

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

Diese StorageClass ermöglicht die auf Abruf bereitgestellten Volumes und dynamische Größenanpassung.

#### 2. Volumenerstellung (PVC)

Fordern Sie ein Volume an, indem Sie eine `PersistentVolumeClaim` mit dem Zugriffsmodus `ReadWriteMany` (RWX) erstellen:

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

Wenn ein Pod mit dieser PVC geplant wird, wird das Volume automatisch über NFS bereitgestellt und eingehängt.

### Erweiterte Funktionen

#### Snapshot-Verwaltung

NetApp Trident unterstützt on-demand-Volumensnapshots für Enterprise File Storage.

- Definieren Sie eine `VolumeSnapshotClass`, um den Lebenszyklus der Snapshots zu verwalten:

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:   
  name: csi-snapclass
driver: csi.trident.netapp.io
deletionPolicy: Delete
```

- Erstellen Sie einen `VolumeSnapshot` im gleichen Namespace wie die Quelle `PersistentVolumeClaim`:

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

Der Snapshot wird im Enterprise File Storage-Dienst erstellt und kann für Backups oder Wiederherstellungsvorgänge verwendet werden.

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.