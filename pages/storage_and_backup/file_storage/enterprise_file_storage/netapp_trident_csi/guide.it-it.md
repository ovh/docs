---
title: Enterprise File Storage - Primi passi con Trident CSI
excerpt: "Distribuisci NetApp Trident CSI su OVHcloud Enterprise File Storage per gestire volumi e snapshot in Kubernetes"
updated: 2026-02-10
---

## Obiettivo

Questo manuale ha l'obiettivo di fornire un riferimento chiaro e passo dopo passo per distribuire e configurare NetApp Trident CSI su OVHcloud Managed Kubernetes (MKS), permettendo un accesso fluido a Enterprise File Storage tramite il vRack. Questo manuale raccoglie le best practice, i prerequisiti, la configurazione IAM, l'implementazione del backend, nonché le funzionalità avanzate come la gestione degli snapshot e dei volumi.

## Prerequisiti

- Essere connessi al [Spazio Cliente OVHcloud](/links/manager)

Prima di iniziare, assicurati che il tuo ambiente rispetti i seguenti criteri:

- Cluster Kubernetes: Un cluster completamente distribuito e operativo.
- Rete (vRack) :
    - Il progetto Public Cloud e i servizi vRack devono essere connessi allo stesso vRack.
    - Il subnet e il VLAN devono corrispondere tra i servizi vRack e la rete privata MKS.
    - **Importante :** L'IP del Service Endpoint deve essere unico e non utilizzato nel subnet.

## Procedura

### Configurazione IAM (Identity and Access Management)

Trident necessita di un account di servizio dedicato per interagire con l'API OVHcloud e gestire i volumi Enterprise File Storage. Segui le seguenti fasi per configurare correttamente l'IAM.

#### 1. Creazione dell'account di servizio (OAuth2)

Crea un client OAuth2 tramite l'API OVHcloud utilizzando il flusso `CLIENT_CREDENTIALS`.

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

Esempio di payload :

```json
{
  "description": "csi test",
  "flow": "CLIENT_CREDENTIALS",
  "name": "CSI-TEST"
}
```

> [!primary]
>
> **Nota :** Conserva con cura il `clientId` e il `clientSecret`. Saranno necessari durante la configurazione del backend Trident.
>

#### 2. Creazione della policy IAM

Accedi al [Spazio Cliente OVHcloud](/links/manager) e clicca su `Identità, Sicurezza & Operazioni`{.action}. Apri il menu `Policy`{.action} e clicca su `Crea una policy`{.action}.

Configura la policy selezionando `Enterprise File Storage` nella sezione `Tipi di prodotto` e l'ID del servizio di storage dei file interessato nella sezione `Risorse`.

#### 3. Associazione dell'account alla policy

Associa l'account di servizio (creato al passo 1) alla policy IAM aggiungendo l'URN dell'account nel campo `identities` :

> [!api]
>
> @api {v1} /iam PUT /iam/policy/{policyId}
>

L'URN dell'account può essere recuperato utilizzando questa chiamata con l'ID client registrato :

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

#### 4. Assegnazione dei permessi richiesti

Assicurati che la policy conceda l'insieme completo delle azioni necessarie al corretto funzionamento di Trident :

| Action                                      | Description                               |
| ------------------------------------------- | ----------------------------------------- |
| storageNetApp:apiovh:get                    | Elenca i servizi                          |
| storageNetApp:apiovh:serviceInfos/get       | Recupera le informazioni su un servizio   |
| storageNetApp:apiovh:share/accessPath/get   | Ottieni il punto di montaggio di un share |
| storageNetApp:apiovh:share/acl/create       | Crea un ACL                               |
| storageNetApp:apiovh:share/acl/delete       | Elimina un ACL                            |
| storageNetApp:apiovh:share/acl/get          | Elenca gli ACL                            |
| storageNetApp:apiovh:share/create           | Crea un share                             |
| storageNetApp:apiovh:share/delete           | Elimina un share                          |
| storageNetApp:apiovh:share/edit             | Modifica un share                         |
| storageNetApp:apiovh:share/extend           | Estendi un share                          |
| storageNetApp:apiovh:share/get              | Elenca i shares                           |
| storageNetApp:apiovh:share/revertToSnapshot | Ripristina uno snapshot                   |
| storageNetApp:apiovh:share/snapshot/create  | Crea uno snapshot                         |
| storageNetApp:apiovh:share/snapshot/delete  | Elimina uno snapshot                      |
| storageNetApp:apiovh:share/snapshot/edit    | Modifica uno snapshot                     |
| storageNetApp:apiovh:share/snapshot/get     | Elenca gli snapshot                       |

### Installazione di Trident CSI

L'installazione utilizza Helm con immagini personalizzate ospitate su Docker Hub.
Queste immagini includono un driver aggiuntivo fornito da OVHcloud che permette l'utilizzo di storage persistente tramite l'offerta OVHcloud Enterprise File Storage.

Crea un file `trident-values.yaml` per fare riferimento alle immagini ospitate da OVHcloud :

```bash
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
```

Avvia l'installazione :

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --namespace trident \
  -f trident-values.yaml
```

Una volta completata l'installazione, verifica che tutti i pod Trident siano in stato `Running` nel namespace trident prima di procedere.

Installa Tridentctl :

```bash
mkdir 25.02.1 && cd 25.02.1
wget https://github.com/NetApp/trident/releases/download/v25.02.1/trident-installer-25.02.1.tar.gz
tar -xf trident-installer-25.02.1.tar.gz
ln -sf /root/25.02.1/trident-installer/tridentctl /usr/local/bin/tridentctl
```

### Configurazione del backend (Provisioner)

Il backend permette di collegare NetApp Trident al servizio OVHcloud Enterprise File Storage utilizzando le credenziali IAM create in precedenza.

#### 1. File di configurazione del backend

Crea un file denominato `backend-netapp.yaml`. Il driver di storage `ovh-efs` deve essere utilizzato in modo obbligatorio.

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

#### 2. Creazione del backend

Crea il backend utilizzando lo strumento `tridentctl` :

```bash
./tridentctl create backend -f backend-netapp.yaml -n trident
```

Prima di procedere, verifica che lo stato del backend sia `Online`.

### StorageClass e utilizzo dei volumi

Questa sezione spiega come rendere disponibile Enterprise File Storage alle workloads Kubernetes tramite Trident.

#### 1. StorageClass

Definisci una `StorageClass` per abilitare il provisioning dinamico tramite il driver Trident CSI :

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

Questa StorageClass permette di provisioningare i volumi su richiesta e di espanderli dinamicamente.

#### 2. Creazione di un volume (PVC)

Crea un `PersistentVolumeClaim` con un accesso `ReadWriteMany` (RWX) per richiedere un volume :

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

Una volta che un Pod utilizza questo PVC, il volume viene automaticamente provisioningato e montato tramite NFS.

### Funzionalità avanzate

#### Gestione degli snapshot

NetApp Trident permette di creare snapshot su richiesta dei volumi su Enterprise File Storage.

- Definire una `VolumeSnapshotClass` per gestire il ciclo di vita degli snapshot :

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:   
  name: csi-snapclass
driver: csi.trident.netapp.io
deletionPolicy: Delete
```

- Creare un `VolumeSnapshot` nello stesso namespace del `PersistentVolumeClaim` sorgente :

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

Lo snapshot viene creato sul servizio Enterprise File Storage e può essere utilizzato per workflow di backup o ripristino.

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).