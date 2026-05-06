---
title: Enterprise File Storage - Pierwsze kroki z Trident CSI
excerpt: "Wdróż NetApp Trident CSI na OVHcloud Enterprise File Storage, aby zarządzać woluminami i migawkami w Kubernetes"
updated: 2026-02-18
---

## Wprowadzenie

Przewodnik ten dostarcza jasny, krok po kroku opis wdrażania i konfigurowania NetApp Trident CSI na OVHcloud Managed Kubernetes (MKS), umożliwiając bezproblemowy dostęp do Enterprise File Storage za pośrednictwem vRack. Przewodnik ten konsoliduje najlepsze praktyki, wymagania wstępne, konfigurację IAM, konfigurację backendu oraz zaawansowane funkcje, takie jak migawki i zarządzanie woluminami.

## Wymagania początkowe

- Usługa [Enterprise File Storage](/links/storage/enterprise-file-storage) na koncie OVHcloud
- Klaster [OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes)
- [vRack](/links/network/vrack) ze skonfigurowanym [vRack Services](/pages/network/vrack_services/global)
- Znajomość [API OVHcloud](/pages/manage_and_operate/api/first-steps) i/lub [CLI OVHcloud](/pages/manage_and_operate/cli/cli-getting-started)

Przed rozpoczęciem upewnij się, że Twoje środowisko spełnia następujące kryteria:

**vRack**

- **Projekt Public Cloud i vRack Services** należą do tego samego vRack

**Region**

- **vRack Services i EFS** znajdują się w tym samym regionie

**Sieć**

- **Ten sam identyfikator VLAN** jest używany dla podsieci vRack Services i prywatnej sieci MKS
- **Ten sam CIDR** jest używany dla podsieci vRack Services i podsieci prywatnej sieci MKS
- Adresy IP **puli alokacji prywatnej sieci MKS** nie pokrywają się z zakresem usług vRack Services

**Łączność**

- **Brama (gateway)** jest wymagana, aby węzły MKS mogły komunikować się z API OVHcloud

![Schemat wymagań Trident](images/trident_efs_requirements.excalidraw.png){.thumbnail}

> [!primary]
>
> **Uwaga:** Regiony EFS i MKS mogą się różnić; pamiętaj, że opóźnienia między różnymi regionami mogą wpływać na wydajność obciążeń związanych z przechowywaniem danych.
>
> **Zdecydowanie zaleca się, aby zasoby obliczeniowe i przechowywania danych znajdowały się jak najbliżej siebie.**
>

## W praktyce

### Konfiguracja IAM (Identity and Access Management)

Trident wymaga dedykowanego konta usługi do komunikacji z API OVHcloud i zarządzania woluminami Enterprise File Storage. Postępuj zgodnie z poniższymi krokami, aby prawidłowo skonfigurować IAM.

#### 1. Tworzenie konta usługi (OAuth2)

Utwórz klienta OAuth2 za pomocą API lub CLI OVHcloud z użyciem przepływu `CLIENT_CREDENTIALS`.

> [!tabs]
> Przez API
>> Użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/api/oauth2/client
>>
>> Z następującą treścią żądania:
>>
>> ```json
>> {
>>   "description": "Service Account for Trident CSI",
>>   "flow": "CLIENT_CREDENTIALS",
>>   "name": "TRIDENT-CSI"
>> }
>> ```
>>
>> API odpowie:
>>
>> ```json
>> {
>>   "clientId": "EU.xxxxxxxxxxxxxxxx",
>>   "clientSecret": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
>> }
>> ```
>>
> Przez CLI
>> Konto usługi można utworzyć za pomocą [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) i następującego polecenia (uzupełnij swoimi wartościami):
>>
>> ```bash
>> ovhcloud account api oauth2 client create --name "TRIDENT-CSI" --description "Service Account for Trident CSI" --flow "CLIENT_CREDENTIALS"
>> ```
>>
>> CLI odpowie wartościami `client ID` i `client secret`:
>>
>> ```bash
>> ✅ OAuth2 client created successfully (client ID: EU.xxxxxxxxxxxxxxxx, client secret: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
>> ```
>>

> [!primary]
>
> **Uwaga:** Zapisz `clientId` i `clientSecret` w bezpieczny sposób, są one wymagane do konfiguracji backendu.
>

#### 2. Tworzenie polityki IAM

Skonfiguruj politykę IAM, która musi zawierać następujące elementy: konto usługi do autoryzacji, usługę lub usługi `Enterprise File Storage` do uwzględnienia oraz uprawnienia do przyznania, które są podsumowane w poniższej tabeli:

| Akcja                                       | Opis                                  |
| ------------------------------------------- | ------------------------------------- |
| storageNetApp:apiovh:get                    | Lista usług                           |
| storageNetApp:apiovh:serviceInfos/get       | Pobierz informacje o usłudze          |
| storageNetApp:apiovh:share/accessPath/get   | Pobierz punkt montażu NFS dla udziału |
| storageNetApp:apiovh:share/acl/create       | Utwórz ACL                            |
| storageNetApp:apiovh:share/acl/delete       | Usuń ACL                              |
| storageNetApp:apiovh:share/acl/get          | Lista ACL dla udziału                 |
| storageNetApp:apiovh:share/create           | Utwórz udział                         |
| storageNetApp:apiovh:share/delete           | Usuń udział                           |
| storageNetApp:apiovh:share/edit             | Zaktualizuj udział                    |
| storageNetApp:apiovh:share/extend           | Rozszerz udział                       |
| storageNetApp:apiovh:share/get              | Lista udziałów                        |
| storageNetApp:apiovh:share/revertToSnapshot | Przywróć z migawki                    |
| storageNetApp:apiovh:share/snapshot/create  | Utwórz migawkę                        |
| storageNetApp:apiovh:share/snapshot/delete  | Usuń migawkę                          |
| storageNetApp:apiovh:share/snapshot/edit    | Zaktualizuj migawkę                   |
| storageNetApp:apiovh:share/snapshot/get     | Lista migawek                         |

> [!tabs]
> Przez API
>> Użyj następującego wywołania API, aby utworzyć politykę IAM:
>>
>> > [!api]
>> >
>> > @api {v2} /iam POST /iam/policy
>>
>> Z następującą treścią żądania:
>>
>> > [!primary]
>> >
>> > W polu `identities` zamień `xx11111-ovh` na identyfikator konta OVHcloud (NIC handle) i `EU.xxxxxxxxxxxxxxxx` na `clientId` uzyskany w kroku 1.
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
>> API odpowie szczegółami utworzonej polityki:
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
> Przez CLI
>> Politykę IAM można utworzyć za pomocą [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) i następującego polecenia (uzupełnij swoimi wartościami):
>>
>> > [!primary]
>> >
>> > W polu `identities` zamień `xx11111-ovh` na identyfikator konta OVHcloud (NIC handle) i `EU.xxxxxxxxxxxxxxxx` na `clientId` uzyskany w kroku 1.
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
>> CLI odpowie następującym komunikatem:
>>
>> ```bash
>> ✅ IAM policy xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx created successfully
>> ```

### Instalacja Trident CSI

Instalacja korzysta z narzędzia Helm i niestandardowych obrazów hostowanych na Docker Hub.
Te obrazy zawierają dodatkowy sterownik magazynu, który umożliwia korzystanie z trwałego magazynu z OVHcloud Enterprise File Storage.

Utwórz plik `trident-values.yaml`, aby odnieść się do obrazów hostowanych przez OVHcloud:

```bash
cat <<EOF > trident-values.yaml
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
EOF
```

Uruchom instalację:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --create-namespace \
  --namespace trident \
  -f trident-values.yaml
```

Wynik powinien pokazać, że chart Helm został wdrożony:

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

Po zakończeniu instalacji upewnij się, że wszystkie pody Trident są w stanie `Running` w przestrzeni nazw trident, zanim przejdziesz dalej:

```bash
kubectl get pods -n trident
```

Wynik powinien pokazać wszystkie pody w stanie `Running`:

```bash
NAME                                  READY   STATUS    RESTARTS        AGE
trident-controller-75869d7499-ffmkt   6/6     Running   0               4m25s
trident-node-linux-4gv6w              2/2     Running   1 (4m24s ago)   4m25s
trident-node-linux-g942s              2/2     Running   1 (4m24s ago)   4m24s
trident-node-linux-tfjc2              2/2     Running   0               4m25s
trident-operator-787b98cb7c-sgtdh     1/1     Running   0               4m26s
```

### Tworzenie backendu Trident

Backend Trident łączy NetApp Trident z usługą OVHcloud Enterprise File Storage przy użyciu wcześniej utworzonych poświadczeń IAM.

#### 1. Tworzenie sekretu

Utwórz sekret zawierający informacje o połączeniu, które umożliwią Trident dostęp do API OVHcloud.

> [!warning]
>
> Zamień wartości `clientID` i `clientSecret` na poświadczenia uzyskane w kroku 1.
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

Wynik potwierdzi utworzenie sekretu:

```bash
secret/tbc-ovh-efs-secret created
```

#### 2. Tworzenie backendu Trident

Utwórz backend za pomocą poniższego polecenia:

> [!primary]
>
> Musi być używany sterownik magazynu `ovh-efs`. Zamień `exportRule`, `location` i inne parametry na wartości odpowiadające Twojemu środowisku.
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

Wynik potwierdzi utworzenie backendu:

```bash
tridentbackendconfig.trident.netapp.io/tbc-ovh-efs-gra created
```

Sprawdź, czy backend został poprawnie utworzony:

```bash
kubectl get tridentbackendconfig -n trident
```

Wynik powinien pokazać backend w stanie `Bound`:

```bash
NAME                  BACKEND NAME      BACKEND UUID                           PHASE   STATUS
tbc-ovh-efs-gra       backend-ovh-efs   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   Bound   Success
```

### StorageClass i użycie

Ta sekcja opisuje, jak udostępnić Enterprise File Storage dla obciążeń Kubernetes przy użyciu Trident.

#### 1. StorageClass

Zdefiniuj `StorageClass`, aby włączyć dynamiczne przydzielanie za pośrednictwem sterownika Trident CSI:

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

Wynik potwierdzi utworzenie `StorageClass`:

```bash
storageclass.storage.k8s.io/ovh-efs-gra-premium created
```

Ta klasa StorageClass umożliwia przydzielanie woluminów na żądanie i dynamiczne rozszerzanie.

#### 2. Tworzenie woluminu (PVC)

Utwórz `PersistentVolumeClaim` z trybem dostępu `ReadWriteMany` (RWX):

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

Wynik potwierdzi utworzenie `PVC`:

```bash
persistentvolumeclaim/premium-pvc created
```

Sprawdź, czy `PVC` został utworzony:

```bash
kubectl get pvc
```

Wynik powinien pokazać PVC w stanie `Bound`:

```bash
NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS          VOLUMEATTRIBUTESCLASS   AGE
premium-pvc  Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   100Gi      RWX            ovh-efs-gra-premium   <unset>                 5m34s
```

Gdy Pod użyje tego PVC, wolumin zostanie automatycznie zamontowany za pośrednictwem protokołu NFS.

### Zaawansowane funkcje

#### Zarządzanie migawkami

NetApp Trident obsługuje tworzenie migawek woluminów na żądanie dla Enterprise File Storage.

- Zdefiniuj `VolumeSnapshotClass`, aby zarządzać cyklem życia migawek:

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

Wynik potwierdzi utworzenie `VolumeSnapshotClass`:

```bash
volumesnapshotclass.snapshot.storage.k8s.io/csi-snapclass created
```

- Utwórz `VolumeSnapshot` w tej samej przestrzeni nazw co źródłowy `PersistentVolumeClaim`:

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

Wynik potwierdzi utworzenie `VolumeSnapshot`:

```bash
volumesnapshot.snapshot.storage.k8s.io/my-snapshot created
```

Sprawdź, czy `VolumeSnapshot` został utworzony:

```bash
kubectl get volumesnapshot
```

Wynik powinien pokazać VolumeSnapshot w stanie `READYTOUSE=true`:

```bash
NAME          READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS   SNAPSHOTCONTENT                                    CREATIONTIME   AGE
my-snapshot   true         premium-pvc                           100Gi         csi-snapclass   snapcontent-0274f0ec-e8ab-48f4-8d89-4422c3875d92   27s            30s
```

Migawka jest tworzona na usłudze Enterprise File Storage i może być używana w procesach tworzenia kopii zapasowych lub przywracania.

## Rozwiązywanie problemów

- **Backend niepowiązany**: Sprawdź, czy poświadczenia IAM (clientId/clientSecret) są poprawne i czy polityka IAM przyznaje wszystkie wymagane uprawnienia.
- **PVC zablokowany w stanie Pending**: Sprawdź, czy wszystkie pody Trident są w stanie `Running`, backend jest w stanie `Bound`, a `StorageClass` odwołuje się do prawidłowego typu backendu. Sprawdź błędy w logach podów Trident za pomocą `kubectl logs -n trident <nazwa-poda>`.
- **Problemy z łącznością sieciową**: Sprawdź, czy klaster MKS może komunikować się z usługą Enterprise File Storage za pośrednictwem vRack.

## Sprawdź również

[Enterprise File Storage - Konfiguracja sieci prywatnej](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_network_config)

[Enterprise File Storage - Podłączanie instancji Public Cloud do woluminu EFS przez prywatną sieć vRack](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_pci_connection_via_vrack)

[Zarządzanie kontami usługowymi OVHcloud za pomocą API](/pages/manage_and_operate/api/manage-service-account)

[Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).
