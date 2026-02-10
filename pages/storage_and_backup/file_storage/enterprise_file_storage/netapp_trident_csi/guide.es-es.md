---
title: Enterprise File Storage - Primeros pasos con Trident CSI
excerpt: "Implemente NetApp Trident CSI en OVHcloud Enterprise File Storage para gestionar volúmenes y snapshots en Kubernetes"
updated: 2026-02-10
---

## Objetivo

Este guía tiene como objetivo proporcionar una referencia clara y paso a paso para implementar y configurar NetApp Trident CSI en OVHcloud Managed Kubernetes (MKS), permitiendo un acceso fluido a Enterprise File Storage a través del vRack. Este guía reúne las mejores prácticas, los requisitos previos, la configuración IAM, la configuración del backend, así como las funcionalidades avanzadas, tales como la gestión de snapshots y volúmenes.

## Requisitos

- Estar conectado al [área de cliente de OVHcloud](/links/manager)

Antes de comenzar, asegúrese de que su entorno cumple con los siguientes criterios:

- Cluster Kubernetes: Un cluster completamente desplegado y operativo.
- Red (vRack) :
    - El proyecto Public Cloud y los servicios vRack deben estar conectados al mismo vRack.
    - El subnet y el VLAN deben coincidir entre los servicios vRack y la red privada MKS.
    - **Importante :** La IP del Service Endpoint debe ser única y no utilizada en el subnet.

## Procedimiento

### Configuración IAM (Identity and Access Management)

Trident requiere una cuenta de servicio dedicada para interactuar con la API OVHcloud y gestionar los volúmenes Enterprise File Storage. Siga los pasos siguientes para configurar correctamente el IAM.

#### 1. Creación de la cuenta de servicio (OAuth2)

Cree un cliente OAuth2 a través de la API OVHcloud utilizando el flujo `CLIENT_CREDENTIALS`.

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

Ejemplo de payload :

```json
{
  "description": "csi test",
  "flow": "CLIENT_CREDENTIALS",
  "name": "CSI-TEST"
}
```

> [!primary]
>
> **Nota :** Mantenga con cuidado el `clientId` y el `clientSecret`. Serán necesarios durante la configuración del backend Trident.
>

#### 2. Creación de la política IAM

Conéctese al [área de cliente de OVHcloud](/links/manager) y haga clic en `Identidad, Seguridad & Operaciones`{.action}. Abra el menú `Políticas`{.action} y haga clic en `Crear una política`{.action}.

Configure la política seleccionando `Enterprise File Storage` en la sección `Tipos de productos` y luego el ID del servicio de almacenamiento de archivos correspondiente en la sección `Recursos`.

#### 3. Asociación de la cuenta a la política

Asocie la cuenta de servicio (creada en el paso 1) a la política IAM añadiendo el URN de la cuenta en el campo `identities` :

> [!api]
>
> @api {v1} /iam PUT /iam/policy/{policyId}
>

El URN de la cuenta puede recuperarse mediante esta llamada con el ID de cliente registrado :

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

#### 4. Asignación de los permisos necesarios

Asegúrese de que la política conceda el conjunto completo de acciones necesarias para el correcto funcionamiento de Trident :

| Action                                      | Description                             |
| ------------------------------------------- | --------------------------------------- |
| storageNetApp:apiovh:get                    | Listar los servicios                    |
| storageNetApp:apiovh:serviceInfos/get       | Recuperar información de un servicio    |
| storageNetApp:apiovh:share/accessPath/get   | Obtener el punto de montaje de un share |
| storageNetApp:apiovh:share/acl/create       | Crear una ACL                           |
| storageNetApp:apiovh:share/acl/delete       | Eliminar una ACL                        |
| storageNetApp:apiovh:share/acl/get          | Listar las ACLs                         |
| storageNetApp:apiovh:share/create           | Crear un share                          |
| storageNetApp:apiovh:share/delete           | Eliminar un share                       |
| storageNetApp:apiovh:share/edit             | Modificar un share                      |
| storageNetApp:apiovh:share/extend           | Ampliar un share                        |
| storageNetApp:apiovh:share/get              | Listar los shares                       |
| storageNetApp:apiovh:share/revertToSnapshot | Restaurar un snapshot                   |
| storageNetApp:apiovh:share/snapshot/create  | Crear un snapshot                       |
| storageNetApp:apiovh:share/snapshot/delete  | Eliminar un snapshot                    |
| storageNetApp:apiovh:share/snapshot/edit    | Editar un snapshot                      |
| storageNetApp:apiovh:share/snapshot/get     | Listar los snapshots                    |

### Instalación de Trident CSI

La instalación utiliza Helm con imágenes personalizadas alojadas en Docker Hub.
Estas imágenes incluyen un controlador adicional añadido por OVHcloud que permite el consumo de almacenamiento persistente desde la oferta OVHcloud Enterprise File Storage.

Cree un archivo `trident-values.yaml` para referenciar las imágenes alojadas por OVHcloud :

```bash
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
```

Inicie la instalación :

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --namespace trident \
  -f trident-values.yaml
```

Una vez finalizada la instalación, verifique que todos los pods Trident estén en estado `Running` en el espacio de nombres trident antes de continuar.

Instale Tridentctl :

```bash
mkdir 25.02.1 && cd 25.02.1
wget https://github.com/NetApp/trident/releases/download/v25.02.1/trident-installer-25.02.1.tar.gz
tar -xf trident-installer-25.02.1.tar.gz
ln -sf /root/25.02.1/trident-installer/tridentctl /usr/local/bin/tridentctl
```

### Configuración del backend (Provisioner)

El backend permite conectar NetApp Trident al servicio OVHcloud Enterprise File Storage utilizando las credenciales IAM creadas anteriormente.

#### 1. Archivo de configuración del backend

Cree un archivo llamado `backend-netapp.yaml`. El driver de almacenamiento `ovh-efs` debe utilizarse obligatoriamente.

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

#### 2. Creación del backend

Cree el backend utilizando la herramienta `tridentctl` :

```bash
./tridentctl create backend -f backend-netapp.yaml -n trident
```

Antes de continuar, verifique que el estado del backend sea `Online`.

### StorageClass y uso de volúmenes

Esta sección explica cómo exponer Enterprise File Storage a las cargas de trabajo Kubernetes utilizando Trident.

#### 1. StorageClass

Defina una `StorageClass` para activar el aprovisionamiento dinámico a través del controlador Trident CSI :

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

Esta StorageClass permite aprovisionar volúmenes a demanda y expandirlos dinámicamente.

#### 2. Creación de un volumen (PVC)

Cree un `PersistentVolumeClaim` con acceso `ReadWriteMany` (RWX) para solicitar un volumen :

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

Una vez que un Pod utiliza este PVC, el volumen se aprovisiona y monta automáticamente a través de NFS.

### Funcionalidades avanzadas

#### Gestión de snapshots

NetApp Trident permite crear snapshots de volúmenes a demanda en Enterprise File Storage.

- Definir una `VolumeSnapshotClass` para gestionar el ciclo de vida de los snapshots :

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:   
  name: csi-snapclass
driver: csi.trident.netapp.io
deletionPolicy: Delete
```

- Crear un `VolumeSnapshot` en el mismo namespace que el `PersistentVolumeClaim` fuente :

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

El snapshot se crea en el servicio Enterprise File Storage y puede utilizarse para flujos de trabajo de copia de seguridad o restauración.

## Más información

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).