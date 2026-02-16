---
title: Enterprise File Storage - Wprowadzenie do Trident CSI
excerpt: "Wdróż NetApp Trident CSI na OVHcloud Enterprise File Storage, aby zarządzać woluminami i migawkami w Kubernetes"
updated: 2026-02-10
---

## Wprowadzenie

Przewodnik ten dostarczy jasny, krok po kroku opis wdrażania i konfigurowania NetApp Trident CSI na OVHcloud Managed Kubernetes (MKS), umożliwiając bezproblemowy dostęp do Enterprise File Storage za pośrednictwem vRack. Przewodnik ten konsoliduje najlepsze praktyki, wymagania wstępne, konfigurację IAM, konfigurację backendu oraz zaawansowane funkcje, takie jak migawki i zarządzanie woluminami.

## Wymagania początkowe

- Dostęp do [Panel klienta OVHcloud](/links/manager)

Przed rozpoczęciem upewnij się, że Twoje środowisko spełnia następujące kryteria:

- Kubernetes Cluster: Pełnie wdrożony i działający klaster.
- Sieć (vRack):
    - Projekt Public Cloud i usługa vRack muszą znajdować się na tej samej vRack.
    - Podsieć i VLAN muszą być zgodne między usługą vRack a prywatną siecią MKS.
    - **Ważne:** Adres IP punktu końcowego usługi musi być unikalny i niezajęty w podsieci.

## W praktyce

### Konfiguracja IAM (Zarządzanie tożsamościami i dostępem)

Trident wymaga dedykowanego konta usługi do komunikacji z API OVHcloud i zarządzania woluminami Enterprise File Storage. Postępuj zgodnie z poniższymi krokami, aby prawidłowo skonfigurować IAM.

#### 1. Tworzenie konta usługi (OAuth2)

Utwórz klienta OAuth2 za pomocą API OVHcloud z użyciem przepływu `CLIENT_CREDENTIALS`.

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

Przykładowe dane:

```json
{
  "description": "csi test",
  "flow": "CLIENT_CREDENTIALS",
  "name": "CSI-TEST"
}
```

> [!primary]
>
> **Uwaga:** Zapisz `clientId` i `clientSecret` w bezpieczny sposób, są one wymagane do konfiguracji backendu.
>

#### 2. Tworzenie zasad IAM

Zaloguj się do swojego [Panel klienta OVHcloud](/links/manager) i przejdź do `Tożsamość, bezpieczeństwo i operacje`{.action}. Otwórz `Polityki`{.action} i kliknij `Tworzenie polityki`{.action}.

Skonfiguruj swoje zasady, a następnie wybierz `Enterprise File Storage` w sekcji `Rodzaje usług` i ID odpowiedniego File Storage w sekcji `Zasoby`.

#### 3. Kojarzenie konta z zasadami

Kojarz konto usługi (utworzone w 2.1) z zasadami IAM, dodając URN konta do pola `identities`:

> [!api]
>
> @api {v1} /iam PUT /iam/policy/{policyId}
>

URN konta można pobrać za pomocą tego wywołania z zapisanym ID klienta:

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

#### 4. Przypisanie wymaganych uprawnień

Upewnij się, że zasady nadają wszystkie działania wymagane przez Trident:

| Akcja                                       | Opis                                  |
| ------------------------------------------- | ------------------------------------- |
| storageNetApp:apiovh:get                    | Lista usług                           |
| storageNetApp:apiovh:serviceInfos/get       | Pobierz informacje o usłudze          |
| storageNetApp:apiovh:share/accessPath/get   | Pobierz punkt montażu NFS dla udziału |
| storageNetApp:apiovh:share/acl/create       | Utwórz listę ACL                      |
| storageNetApp:apiovh:share/acl/delete       | Usuń listę ACL                        |
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

### Instalacja Trident CSI

Instalacja korzysta z narzędzia Helm i niestandardowych obrazów hostowanych na Docker Hub.
Te obrazy zawierają dodatkowy sterownik magazynu, który umożliwia korzystanie z trwałości magazynu z OVHcloud Enterprise File Storage.

Utwórz plik `trident-values.yaml`, aby odnieść się do obrazów hostowanych przez OVHcloud:

```bash
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
```

Uruchom instalację:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --namespace trident \
  -f trident-values.yaml
```

Po zakończeniu instalacji upewnij się, że wszystkie pody Trident działają poprawnie w przestrzeni nazw trident, zanim przejdziesz do kolejnych kroków.

Zainstaluj Tridentctl:

```bash
mkdir 25.02.1 && cd 25.02.1
wget https://github.com/NetApp/trident/releases/download/v25.02.1/trident-installer-25.02.1.tar.gz
tar -xf trident-installer-25.02.1.tar.gz
ln -sf /root/25.02.1/trident-installer/tridentctl /usr/local/bin/tridentctl
```

### Konfiguracja backendu (Provisioner)

Backend łączy NetApp Trident z usługą OVHcloud Enterprise File Storage przy użyciu wcześniej utworzonych poświadczeń IAM.

#### 1. Plik konfiguracji backendu

Utwórz plik o nazwie `backend-netapp.yaml`. Musi być używany sterownik `ovh-efs`.

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


#### 2. Tworzenie backendu

Utwórz backend za pomocą `tridentctl`:

```bash
./tridentctl create backend -f backend-netapp.yaml -n trident
```

Sprawdź, czy status backendu to Online, zanim przejdziesz do kolejnych kroków.

### StorageClass i użycie

Ta sekcja opisuje, jak udostępnić Enterprise File Storage dla zadań Kubernetes przy użyciu Trident.

#### 1. StorageClass

Zdefiniuj `StorageClass`, aby włączyć dynamiczne przydzielanie za pośrednictwem sterownika CSI Trident:

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

Ta klasa StorageClass umożliwia przydzielanie woluminów na żądanie i dynamiczne rozszerzanie.

#### 2. Tworzenie woluminu (PVC)

Zażądaj woluminu, tworząc `PersistentVolumeClaim` z modelem dostępu `ReadWriteMany` (RWX):

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

Po zaplanowaniu Podu z użyciem tego PVC, wolumin jest automatycznie przydzielany i montowany za pośrednictwem NFS.

### Zaawansowane funkcje

#### Zarządzanie migawkami

NetApp Trident obsługuje migawki woluminów na żądanie dla Enterprise File Storage.

- Zdefiniuj `VolumeSnapshotClass`, aby zarządzać cyklem życia migawek:

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:   
  name: csi-snapclass
driver: csi.trident.netapp.io
deletionPolicy: Delete
```

- Utwórz `VolumeSnapshot` w tej samej przestrzeni nazw co źródłowy `PersistentVolumeClaim`:

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

Migawka jest tworzona na usłudze Enterprise File Storage i może być używana w procesach kopii zapasowych lub przywracania.

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).