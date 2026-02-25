---
title: Enterprise File Storage - Primeros pasos con Trident CSI
excerpt: "Implemente NetApp Trident CSI en OVHcloud Enterprise File Storage para gestionar volúmenes y snapshots en Kubernetes"
updated: 2026-02-18
---

## Objetivo

Esta guía tiene como objetivo proporcionar una referencia clara y paso a paso para implementar y configurar NetApp Trident CSI en OVHcloud Managed Kubernetes (MKS), permitiendo un acceso fluido a Enterprise File Storage a través del vRack. Esta guía reúne las mejores prácticas, los requisitos previos, la configuración IAM, la configuración del backend, así como las funcionalidades avanzadas, tales como la gestión de snapshots y volúmenes.

## Requisitos

- Un servicio [Enterprise File Storage](/links/storage/enterprise-file-storage) en su cuenta OVHcloud
- Un clúster [OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes)
- Un [vRack](/links/network/vrack) con [vRack Services](/pages/network/vrack_services/global) configurado
- Conocimientos de las [API de OVHcloud](/pages/manage_and_operate/api/first-steps) y/o la [CLI de OVHcloud](/pages/manage_and_operate/cli/cli-getting-started)

Antes de comenzar, asegúrese de que su entorno cumple con los siguientes criterios:

**vRack**

- **Proyecto Public Cloud y vRack Services** pertenecen al mismo vRack

**Región**

- **vRack Services y EFS** se encuentran en la misma región

**Red**

- **El mismo ID de VLAN** se utiliza para la subred de vRack Services y la red privada MKS
- **El mismo CIDR** se utiliza para la subred de vRack Services y la subred de la red privada MKS
- Las IP del **pool de asignación de la red privada MKS** no se solapan con el rango de servicio de vRack Services

**Conectividad**

- **Una pasarela (gateway)** es necesaria para que los nodos MKS puedan comunicarse con la API de OVHcloud

![Esquema de requisitos de Trident](images/trident_efs_requirements.excalidraw.png){.thumbnail}

> [!primary]
>
> **Nota:** Las regiones EFS y MKS pueden ser diferentes; tenga en cuenta que la latencia entre las diferentes regiones puede afectar al rendimiento de sus cargas de trabajo de almacenamiento.
>
> **Se recomienda encarecidamente mantener los recursos de almacenamiento y de cálculo lo más cerca posible.**
>

## Procedimiento

### Configuración IAM (Identity and Access Management)

Trident requiere una cuenta de servicio dedicada para interactuar con la API de OVHcloud y gestionar los volúmenes Enterprise File Storage. Siga los pasos siguientes para configurar correctamente el IAM.

#### 1. Creación de la cuenta de servicio (OAuth2)

Cree un cliente OAuth2 con la API o la CLI de OVHcloud utilizando el flujo `CLIENT_CREDENTIALS`.

> [!tabs]
> Mediante la API
>> Utilice la siguiente llamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/api/oauth2/client
>>
>> Con el siguiente cuerpo de solicitud:
>>
>> ```json
>> {
>>   "description": "Service Account for Trident CSI",
>>   "flow": "CLIENT_CREDENTIALS",
>>   "name": "TRIDENT-CSI"
>> }
>> ```
>>
>> La API responderá con:
>>
>> ```json
>> {
>>   "clientId": "EU.xxxxxxxxxxxxxxxx",
>>   "clientSecret": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
>> }
>> ```
>>
> Mediante la CLI
>> La cuenta de servicio se puede crear con la [CLI de OVHcloud](https://github.com/ovh/ovhcloud-cli) y el siguiente comando (complételo con sus valores):
>>
>> ```bash
>> ovhcloud account api oauth2 client create --name "TRIDENT-CSI" --description "Service Account for Trident CSI" --flow "CLIENT_CREDENTIALS"
>> ```
>>
>> La CLI responderá con los valores `client ID` y `client secret`:
>>
>> ```bash
>> ✅ OAuth2 client created successfully (client ID: EU.xxxxxxxxxxxxxxxx, client secret: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
>> ```
>>

> [!primary]
>
> **Nota:** Conserve con cuidado el `clientId` y el `clientSecret`. Serán necesarios durante la configuración del backend Trident.
>

#### 2. Creación de la política IAM

Configure una política IAM que deberá contener los siguientes elementos: la cuenta de servicio a autorizar, el o los servicios `Enterprise File Storage` a incluir, así como las acciones a conceder que se resumen en la tabla siguiente:

| Acción                                      | Descripción                             |
| ------------------------------------------- | --------------------------------------- |
| storageNetApp:apiovh:get                    | Listar los servicios                    |
| storageNetApp:apiovh:serviceInfos/get       | Recuperar información de un servicio    |
| storageNetApp:apiovh:share/accessPath/get   | Obtener el punto de montaje de un share |
| storageNetApp:apiovh:share/acl/create       | Crear una ACL                           |
| storageNetApp:apiovh:share/acl/delete       | Eliminar una ACL                        |
| storageNetApp:apiovh:share/acl/get          | Listar las ACL                          |
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

> [!tabs]
> Mediante la API
>> Utilice la siguiente llamada API para crear la política IAM:
>>
>> > [!api]
>> >
>> > @api {v2} /iam POST /iam/policy
>>
>> Con el siguiente cuerpo de solicitud:
>>
>> > [!primary]
>> >
>> > En el campo `identities`, sustituya `xx11111-ovh` por su identificador de cuenta OVHcloud (NIC handle) y `EU.xxxxxxxxxxxxxxxx` por el `clientId` obtenido en el paso 1.
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
>> La API responderá con los detalles de la política creada:
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
> Mediante la CLI
>> La política IAM se puede crear con la [CLI de OVHcloud](https://github.com/ovh/ovhcloud-cli) y el siguiente comando (complételo con sus valores):
>>
>> > [!primary]
>> >
>> > En el campo `identities`, sustituya `xx11111-ovh` por su identificador de cuenta OVHcloud (NIC handle) y `EU.xxxxxxxxxxxxxxxx` por el `clientId` obtenido en el paso 1.
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
>> La CLI responderá con el siguiente mensaje:
>>
>> ```bash
>> ✅ IAM policy xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx created successfully
>> ```

### Instalación de Trident CSI

La instalación utiliza Helm con imágenes personalizadas alojadas en Docker Hub.
Estas imágenes incluyen un controlador adicional añadido por OVHcloud que permite el consumo de almacenamiento persistente desde la oferta OVHcloud Enterprise File Storage.

Cree un archivo `trident-values.yaml` para referenciar las imágenes alojadas por OVHcloud:

```bash
cat <<EOF > trident-values.yaml
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
EOF
```

Inicie la instalación:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --create-namespace \
  --namespace trident \
  -f trident-values.yaml
```

La salida debería mostrar que el chart Helm se ha desplegado:

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

Una vez finalizada la instalación, verifique que todos los pods Trident estén en estado `Running` en el espacio de nombres trident antes de continuar:

```bash
kubectl get pods -n trident
```

La salida debería mostrar todos los pods en estado `Running`:

```bash
NAME                                  READY   STATUS    RESTARTS        AGE
trident-controller-75869d7499-ffmkt   6/6     Running   0               4m25s
trident-node-linux-4gv6w              2/2     Running   1 (4m24s ago)   4m25s
trident-node-linux-g942s              2/2     Running   1 (4m24s ago)   4m24s
trident-node-linux-tfjc2              2/2     Running   0               4m25s
trident-operator-787b98cb7c-sgtdh     1/1     Running   0               4m26s
```

### Creación del backend Trident

El backend Trident permite conectar NetApp Trident al servicio OVHcloud Enterprise File Storage utilizando las credenciales IAM creadas anteriormente.

#### 1. Creación de un secreto

Cree un secreto que contenga la información de conexión que permita a Trident acceder a la API de OVHcloud.

> [!warning]
>
> Sustituya los valores `clientID` y `clientSecret` por las credenciales obtenidas en el paso 1.
>

```bash
cat <<EOF | kubectl create -n trident -f -
apiVersion: v1
kind: Secret
metadata:
  name: tbc-ovh-efs-secret
type: Opaque
stringData:
  clientID: "EU.xxxxxxxxxxxxxxxx"         # Sustituya por su clientId
  clientSecret: "aaaaaaaaaaaaaaaaaaaaaa"  # Sustituya por su clientSecret
EOF
```

La salida confirmará la creación del secreto:

```bash
secret/tbc-ovh-efs-secret created
```

#### 2. Creación del backend Trident

Cree su backend con el siguiente comando:

> [!primary]
>
> El driver de almacenamiento `ovh-efs` debe utilizarse obligatoriamente. Sustituya `exportRule`, `location` y los demás parámetros por los valores correspondientes a su entorno.
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
    exportRule: 10.0.32.0/24    # CIDR de su red para las ACL NFS
  storageDriverName: ovh-efs
  clientLocation: ovh-eu
  location: eu-west-gra         # Localización de su servicio EFS
  serviceLevel: premium
  nfsMountOptions: rw,hard,rsize=65536,wsize=65536,nfsvers=3,tcp
  credentials:
    name: tbc-ovh-efs-secret
EOF
```

La salida confirmará la creación del backend:

```bash
tridentbackendconfig.trident.netapp.io/tbc-ovh-efs-gra created
```

Verifique que el backend se ha creado correctamente con el siguiente comando:

```bash
kubectl get tridentbackendconfig -n trident
```

La salida debería mostrar el backend en estado `Bound`:

```bash
NAME                  BACKEND NAME      BACKEND UUID                           PHASE   STATUS
tbc-ovh-efs-gra       backend-ovh-efs   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   Bound   Success
```

### StorageClass y uso de volúmenes

Esta sección explica cómo exponer Enterprise File Storage a las cargas de trabajo Kubernetes utilizando Trident.

#### 1. StorageClass

Defina una `StorageClass` para activar el aprovisionamiento dinámico a través del driver Trident CSI:

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

La salida confirmará la creación de la `StorageClass`:

```bash
storageclass.storage.k8s.io/ovh-efs-gra-premium created
```

Esta StorageClass permite aprovisionar volúmenes a demanda y expandirlos dinámicamente.

#### 2. Creación de un volumen (PVC)

Cree un `PersistentVolumeClaim` con acceso `ReadWriteMany` (RWX):

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

La salida confirmará la creación del `PVC`:

```bash
persistentvolumeclaim/premium-pvc created
```

Verifique que el PVC se ha creado con el siguiente comando:

```bash
kubectl get pvc
```

La salida debería mostrar el PVC en estado `Bound`:

```bash
NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS          VOLUMEATTRIBUTESCLASS   AGE
premium-pvc  Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   100Gi      RWX            ovh-efs-gra-premium   <unset>                 5m34s
```

Una vez que un Pod utilice este PVC, el volumen se montará automáticamente a través del protocolo NFS.

### Funcionalidades avanzadas

#### Gestión de snapshots

NetApp Trident permite crear snapshots de volúmenes a demanda en Enterprise File Storage.

- Defina una `VolumeSnapshotClass` para gestionar el ciclo de vida de los snapshots:

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

La salida confirmará la creación de la `VolumeSnapshotClass`:

```bash
volumesnapshotclass.snapshot.storage.k8s.io/csi-snapclass created
```

- Cree un `VolumeSnapshot` en el mismo namespace que el `PersistentVolumeClaim` fuente:

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

La salida confirmará la creación del `VolumeSnapshot`:

```bash
volumesnapshot.snapshot.storage.k8s.io/my-snapshot created
```

Verifique que el `VolumeSnapshot` se ha creado con el siguiente comando:

```bash
kubectl get volumesnapshot
```

La salida debería mostrar el VolumeSnapshot en estado `READYTOUSE=true`:

```bash
NAME          READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS   SNAPSHOTCONTENT                                    CREATIONTIME   AGE
my-snapshot   true         premium-pvc                           100Gi         csi-snapclass   snapcontent-0274f0ec-e8ab-48f4-8d89-4422c3875d92   27s            30s
```

El snapshot se crea en el servicio Enterprise File Storage y puede utilizarse para flujos de trabajo de copia de seguridad o restauración.

## Solución de problemas

- **Backend no vinculado**: Verifique que las credenciales IAM (clientId/clientSecret) son correctas y que la política IAM concede todos los permisos necesarios.
- **PVC bloqueado en Pending**: Verifique que todos los pods Trident estén en estado `Running`, que el backend esté en estado `Bound` y que la `StorageClass` haga referencia al tipo de backend correcto. Consulte los errores en los logs de los pods Trident con `kubectl logs -n trident <nombre-del-pod>`.
- **Problemas de conectividad de red**: Verifique que el clúster MKS pueda comunicarse con el servicio Enterprise File Storage a través del vRack.

## Más información

[Enterprise File Storage - Configuración de la red privada](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_network_config)

[Enterprise File Storage - Conectar una instancia Public Cloud a un volumen EFS a través de la red privada vRack](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_pci_connection_via_vrack)

[Gestión de cuentas de servicio OVHcloud a través de la API](/pages/manage_and_operate/api/manage-service-account)

[Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).
