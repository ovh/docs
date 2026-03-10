---
title: Enterprise File Storage - Einführung in Trident CSI
excerpt: "Bereitstellen von NetApp Trident CSI auf OVHcloud Enterprise File Storage, um Volumes und Snapshots in Kubernetes zu verwalten"
updated: 2026-02-18
---

## Ziel

Diese Anleitung bietet eine klare, schrittweise Anleitung zur Bereitstellung und Konfiguration von NetApp Trident CSI auf OVHcloud Managed Kubernetes (MKS), wodurch ein nahtloser Zugriff auf Enterprise File Storage über das vRack ermöglicht wird. Diese Anleitung fasst bewährte Methoden, Voraussetzungen, IAM-Einrichtung, Backend-Konfiguration und erweiterte Funktionen wie Snapshots und Volumeverwaltung zusammen.

## Voraussetzungen

- Sie haben einen [Enterprise File Storage](/links/storage/enterprise-file-storage)-Dienst in Ihrem OVHcloud Kunden-Account.
- Sie haben ein [OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes)-Cluster.
- Sie haben ein [vRack](/links/network/vrack) mit konfiguriertem [vRack Services](/pages/network/vrack_services/global).
- Sie sind vertraut mit der Verwendung der [OVHcloud API](/pages/manage_and_operate/api/first-steps) oder der [OVHcloud CLI](/pages/manage_and_operate/cli/cli-getting-started).

Bevor Sie beginnen, stellen Sie sicher, dass Ihre Umgebung folgende Kriterien erfüllt:

**vRack**

- **Public Cloud Projekt und vRack Services** gehören zum selben vRack.

**Region**

- **vRack Services und EFS** befinden sich in derselben Region.

**Netzwerk**

- **Dieselbe VLAN-ID** wird für das vRack Services Subnetz und das private MKS-Netzwerk verwendet.
- **Dasselbe CIDR** wird für das vRack Services Subnetz und das Subnetz des privaten MKS-Netzwerks verwendet.
- Die IPs des **MKS Private Network Allocation Pools** überschneiden sich nicht mit dem vRack Services Service Range.

**Konnektivität**

- **Ein Gateway** ist erforderlich, damit MKS-Knoten die OVHcloud API erreichen können.

![Trident Voraussetzungen Schema](images/trident_efs_requirements.excalidraw.png){.thumbnail}

> [!primary]
>
> **Hinweis:** EFS- und MKS-Regionen können sich unterscheiden; beachten Sie, dass die Latenz zwischen verschiedenen Regionen die Leistung Ihrer Speicher-Workloads beeinträchtigen kann.
>
> **Es wird dringend empfohlen, Ihre Speicher- und Rechenressourcen so nah wie möglich beieinander zu halten.**
>

## In der praktischen Anwendung

### IAM-Konfiguration (Identity and Access Management)

Trident benötigt einen dedizierten Dienst-Account, um mit der OVHcloud API zu interagieren und Enterprise File Storage Volumes zu verwalten. Folgen Sie diesen Schritten, um IAM ordnungsgemäß zu konfigurieren.

#### 1. Dienst-Account-Erstellung (OAuth2)

Erstellen Sie einen OAuth2-Client mit der OVHcloud API oder CLI unter Verwendung des `CLIENT_CREDENTIALS`-Flusses.

> [!tabs]
> Über die API
>> Verwenden Sie den folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/api/oauth2/client
>>
>> Mit folgendem Anfragekörper:
>>
>> ```json
>> {
>>   "description": "Service Account for Trident CSI",
>>   "flow": "CLIENT_CREDENTIALS",
>>   "name": "TRIDENT-CSI"
>> }
>> ```
>>
>> Die API antwortet mit:
>>
>> ```json
>> {
>>   "clientId": "EU.xxxxxxxxxxxxxxxx",
>>   "clientSecret": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
>> }
>> ```
>>
> Über die CLI
>> Der Dienst-Account kann mit der [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) und dem folgenden Befehl erstellt werden (ergänzen Sie Ihre Werte):
>>
>> ```bash
>> ovhcloud account api oauth2 client create --name "TRIDENT-CSI" --description "Service Account for Trident CSI" --flow "CLIENT_CREDENTIALS"
>> ```
>>
>> Die CLI antwortet mit den Werten `client ID` und `client secret`:
>>
>> ```bash
>> ✅ OAuth2 client created successfully (client ID: EU.xxxxxxxxxxxxxxxx, client secret: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
>> ```
>>

> [!primary]
>
> **Hinweis:** Speichern Sie `clientId` und `clientSecret` sicher, sie werden für die Backend-Konfiguration benötigt.
>

#### 2. IAM-Richtlinienerstellung

Konfigurieren Sie eine IAM-Richtlinie, die folgende Elemente enthalten muss: den zu autorisierenden Dienst-Account, die einzuschließenden `Enterprise File Storage`-Dienste und die zu gewährenden Aktionen, die in der folgenden Tabelle zusammengefasst sind:

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

> [!tabs]
> Über die API
>> Verwenden Sie den folgenden API-Aufruf, um die IAM-Richtlinie zu erstellen:
>>
>> > [!api]
>> >
>> > @api {v2} /iam POST /iam/policy
>>
>> Mit folgendem Anfragekörper:
>>
>> > [!primary]
>> >
>> > Ersetzen Sie im Feld `identities` den Wert `xx11111-ovh` durch Ihre OVHcloud Kundenkennung und `EU.xxxxxxxxxxxxxxxx` durch die in Schritt 1 erhaltene `clientId`.
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
>> Die API antwortet mit den Details der erstellten Richtlinie:
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
> Über die CLI
>> Die IAM-Richtlinie kann mit der [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) und dem folgenden Befehl erstellt werden (ergänzen Sie Ihre Werte):
>>
>> > [!primary]
>> >
>> > Ersetzen Sie im Feld `identities` den Wert `xx11111-ovh` durch Ihre OVHcloud Kundenkennung und `EU.xxxxxxxxxxxxxxxx` durch die in Schritt 1 erhaltene `clientId`.
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
>> Die CLI antwortet mit folgender Ausgabe:
>>
>> ```bash
>> ✅ IAM policy xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx created successfully
>> ```

### Trident CSI Installation

Die Installation verwendet Helm mit benutzerdefinierten Images, die auf Docker Hub gehostet werden.
Diese Images enthalten einen zusätzlichen Speichertreiber, der den Zugriff auf persistenten Speicher über OVHcloud Enterprise File Storage ermöglicht.

Erstellen Sie eine Datei `trident-values.yaml`, um die von OVHcloud gehosteten Images zu referenzieren:

```bash
cat <<EOF > trident-values.yaml
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
EOF
```

Führen Sie die Installation aus:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --create-namespace \
  --namespace trident \
  -f trident-values.yaml
```

Die Ausgabe sollte zeigen, dass das Helm-Chart bereitgestellt wurde:

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

Sobald die Installation abgeschlossen ist, überprüfen Sie, dass alle Trident-Pods im Status `Running` im Namespace trident sind, bevor Sie fortfahren:

```bash
kubectl get pods -n trident
```

Die Ausgabe sollte alle Pods im Status `Running` anzeigen:

```bash
NAME                                  READY   STATUS    RESTARTS        AGE
trident-controller-75869d7499-ffmkt   6/6     Running   0               4m25s
trident-node-linux-4gv6w              2/2     Running   1 (4m24s ago)   4m25s
trident-node-linux-g942s              2/2     Running   1 (4m24s ago)   4m24s
trident-node-linux-tfjc2              2/2     Running   0               4m25s
trident-operator-787b98cb7c-sgtdh     1/1     Running   0               4m26s
```

### Trident-Backend-Erstellung

Das Trident-Backend verbindet NetApp Trident mit dem OVHcloud Enterprise File Storage-Dienst mithilfe der zuvor erstellten IAM-Anmeldeinformationen.

#### 1. Secret-Erstellung

Erstellen Sie ein Secret mit den Zugangsdaten, die Trident den Zugriff auf die OVHcloud API ermöglichen.

> [!warning]
>
> Ersetzen Sie die Werte `clientID` und `clientSecret` durch die in Schritt 1 erhaltenen Zugangsdaten.
>

```bash
cat <<EOF | kubectl create -n trident -f -
apiVersion: v1
kind: Secret
metadata:
  name: tbc-ovh-efs-secret
type: Opaque
stringData:
  clientID: "EU.xxxxxxxxxxxxxxxx"         # Replace with your clientId
  clientSecret: "aaaaaaaaaaaaaaaaaaaaaa"  # Replace with your clientSecret
EOF
```

Die Ausgabe bestätigt die Erstellung des Secrets:

```bash
secret/tbc-ovh-efs-secret created
```

#### 2. Trident-Backend-Erstellung

Erstellen Sie Ihr Backend mit dem folgenden Befehl:

> [!primary]
>
> Der Speichertreiber `ovh-efs` muss verwendet werden. Ersetzen Sie `exportRule`, `location` und die anderen Parameter durch die Werte Ihrer Umgebung.
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

Die Ausgabe bestätigt die Erstellung des Backends:

```bash
tridentbackendconfig.trident.netapp.io/tbc-ovh-efs-gra created
```

Überprüfen Sie, dass das Backend korrekt erstellt wurde:

```bash
kubectl get tridentbackendconfig -n trident
```

Die Ausgabe sollte das Backend im Status `Bound` anzeigen:

```bash
NAME                  BACKEND NAME      BACKEND UUID                           PHASE   STATUS
tbc-ovh-efs-gra       backend-ovh-efs   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   Bound   Success
```

### StorageClass und Nutzung

Dieser Abschnitt beschreibt, wie Enterprise File Storage mithilfe von Trident für Kubernetes-Workloads bereitgestellt wird.

#### 1. StorageClass

Definieren Sie eine `StorageClass`, um dynamische Bereitstellung über den Trident CSI-Treiber zu ermöglichen:

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

Die Ausgabe bestätigt die Erstellung der `StorageClass`:

```bash
storageclass.storage.k8s.io/ovh-efs-gra-premium created
```

Diese StorageClass ermöglicht die Bereitstellung von Volumes auf Abruf und deren dynamische Erweiterung.

#### 2. Volumeerstellung (PVC)

Erstellen Sie einen `PersistentVolumeClaim` mit dem Zugriffsmodus `ReadWriteMany` (RWX):

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

Die Ausgabe bestätigt die Erstellung des `PVC`:

```bash
persistentvolumeclaim/premium-pvc created
```

Überprüfen Sie, dass der `PVC` erstellt wurde:

```bash
kubectl get pvc
```

Die Ausgabe sollte den PVC im Status `Bound` anzeigen:

```bash
NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS          VOLUMEATTRIBUTESCLASS   AGE
premium-pvc  Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   100Gi      RWX            ovh-efs-gra-premium   <unset>                 5m34s
```

Sobald ein Pod diesen PVC nutzt, wird das Volume automatisch über das NFS-Protokoll eingehängt.

### Erweiterte Funktionen

#### Snapshot-Verwaltung

NetApp Trident unterstützt On-Demand-Volumesnapshots für Enterprise File Storage.

- Definieren Sie eine `VolumeSnapshotClass`, um den Lebenszyklus der Snapshots zu verwalten:

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

Die Ausgabe bestätigt die Erstellung der `VolumeSnapshotClass`:

```bash
volumesnapshotclass.snapshot.storage.k8s.io/csi-snapclass created
```

- Erstellen Sie einen `VolumeSnapshot` im selben Namespace wie der Quell-`PersistentVolumeClaim`:

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

Die Ausgabe bestätigt die Erstellung des `VolumeSnapshot`:

```bash
volumesnapshot.snapshot.storage.k8s.io/my-snapshot created
```

Überprüfen Sie, dass der `VolumeSnapshot` erstellt wurde:

```bash
kubectl get volumesnapshot
```

Die Ausgabe sollte den VolumeSnapshot im Status `READYTOUSE=true` anzeigen:

```bash
NAME          READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS   SNAPSHOTCONTENT                                    CREATIONTIME   AGE
my-snapshot   true         premium-pvc                           100Gi         csi-snapclass   snapcontent-0274f0ec-e8ab-48f4-8d89-4422c3875d92   27s            30s
```

Der Snapshot wird im Enterprise File Storage-Dienst erstellt und kann für Sicherungs- oder Wiederherstellungsvorgänge verwendet werden.

## Fehlerbehebung

- **Backend nicht gebunden**: Überprüfen Sie, dass die IAM-Zugangsdaten (clientId/clientSecret) korrekt sind und die IAM-Richtlinie alle erforderlichen Berechtigungen gewährt.
- **PVC bleibt im Status Pending**: Überprüfen Sie, dass alle Trident-Pods im Status `Running` sind, das Backend im Status `Bound` ist und die `StorageClass` den richtigen Backend-Typ referenziert. Prüfen Sie die Fehler in den Trident-Pod-Logs mit `kubectl logs -n trident <pod-name>`.
- **Netzwerkverbindungsprobleme**: Überprüfen Sie, dass der MKS-Cluster den Enterprise File Storage-Dienst über das vRack erreichen kann.

## Weiterführende Informationen

[Enterprise File Storage - Private Netzwerkkonfiguration](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_network_config)

[Enterprise File Storage - Eine Public Cloud Instanz über das private vRack-Netzwerk mit einem EFS-Volume verbinden](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_pci_connection_via_vrack)

[OVHcloud Dienstkonten über die API verwalten](/pages/manage_and_operate/api/manage-service-account)

[Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
