---
title: Enterprise File Storage - Primeiros passos com Trident CSI
excerpt: "Implemente o NetApp Trident CSI no OVHcloud Enterprise File Storage para gerir volumes e snapshots no Kubernetes"
updated: 2026-02-18
---

## Objetivo

Este guia tem como objetivo fornecer uma referência clara e passo a passo para implementar e configurar o NetApp Trident CSI no OVHcloud Managed Kubernetes (MKS), permitindo um acesso fluido ao Enterprise File Storage através do vRack. Este guia reúne as melhores práticas, os pré-requisitos, a configuração IAM, a configuração do backend, bem como funcionalidades avançadas, tais como a gestão de snapshots e volumes.

## Requisitos

- Um serviço [Enterprise File Storage](/links/storage/enterprise-file-storage) na sua conta OVHcloud
- Um cluster [OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes)
- Um [vRack](/links/network/vrack) com [vRack Services](/pages/network/vrack_services/global) configurado
- Conhecimento das [API OVHcloud](/pages/manage_and_operate/api/first-steps) e/ou da [CLI OVHcloud](/pages/manage_and_operate/cli/cli-getting-started)

Antes de começar, certifique-se de que o seu ambiente cumpre os seguintes critérios:

**vRack**

- **Projeto Public Cloud e vRack Services** pertencem ao mesmo vRack

**Região**

- **vRack Services e EFS** encontram-se na mesma região

**Rede**

- **O mesmo ID de VLAN** é utilizado para a sub-rede de vRack Services e a rede privada MKS
- **O mesmo CIDR** é utilizado para a sub-rede de vRack Services e a sub-rede da rede privada MKS
- Os IP do **pool de alocação da rede privada MKS** não se sobrepõem ao intervalo de serviço do vRack Services

**Conectividade**

- **Um gateway** é necessário para que os nós MKS possam comunicar com a API OVHcloud

![Esquema dos pré-requisitos Trident](images/trident_efs_requirements.excalidraw.png){.thumbnail}

> [!primary]
>
> **Nota:** As regiões EFS e MKS podem ser diferentes; tenha em atenção que a latência entre diferentes regiões pode afetar o desempenho das suas cargas de trabalho de armazenamento.
>
> **Recomenda-se vivamente manter os recursos de armazenamento e de computação o mais próximo possível.**
>

## Instruções

### Configuração IAM (Identity and Access Management)

O Trident necessita de uma conta de serviço dedicada para interagir com a API OVHcloud e gerir os volumes Enterprise File Storage. Siga os passos abaixo para configurar corretamente a IAM.

#### 1. Criação da conta de serviço (OAuth2)

Crie um cliente OAuth2 com a API ou a CLI OVHcloud utilizando o fluxo `CLIENT_CREDENTIALS`.

> [!tabs]
> Através da API
>> Utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/api/oauth2/client
>>
>> Com o seguinte corpo do pedido:
>>
>> ```json
>> {
>>   "description": "Service Account for Trident CSI",
>>   "flow": "CLIENT_CREDENTIALS",
>>   "name": "TRIDENT-CSI"
>> }
>> ```
>>
>> A API responderá com:
>>
>> ```json
>> {
>>   "clientId": "EU.xxxxxxxxxxxxxxxx",
>>   "clientSecret": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
>> }
>> ```
>>
> Através da CLI
>> A conta de serviço pode ser criada com a [CLI OVHcloud](https://github.com/ovh/ovhcloud-cli) e o seguinte comando (complete-o com os seus valores):
>>
>> ```bash
>> ovhcloud account api oauth2 client create --name "TRIDENT-CSI" --description "Service Account for Trident CSI" --flow "CLIENT_CREDENTIALS"
>> ```
>>
>> A CLI responderá com os valores `client ID` e `client secret`:
>>
>> ```bash
>> ✅ OAuth2 client created successfully (client ID: EU.xxxxxxxxxxxxxxxx, client secret: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
>> ```
>>

> [!primary]
>
> **Nota:** Guarde com cuidado o `clientId` e o `clientSecret`. Serão necessários durante a configuração do backend Trident.
>

#### 2. Criação da política IAM

Configure uma política IAM que deve conter os seguintes elementos: a conta de serviço a autorizar, o(s) serviço(s) `Enterprise File Storage` a incluir, bem como as ações a conceder, resumidas na tabela seguinte:

| Ação                                        | Descrição                               |
| ------------------------------------------- | --------------------------------------- |
| storageNetApp:apiovh:get                    | Listar os serviços                      |
| storageNetApp:apiovh:serviceInfos/get       | Obter as informações de um serviço      |
| storageNetApp:apiovh:share/accessPath/get   | Obter o ponto de montagem de um share   |
| storageNetApp:apiovh:share/acl/create       | Criar uma ACL                           |
| storageNetApp:apiovh:share/acl/delete       | Eliminar uma ACL                        |
| storageNetApp:apiovh:share/acl/get          | Listar as ACL                           |
| storageNetApp:apiovh:share/create           | Criar um share                          |
| storageNetApp:apiovh:share/delete           | Eliminar um share                       |
| storageNetApp:apiovh:share/edit             | Modificar um share                      |
| storageNetApp:apiovh:share/extend           | Estender um share                       |
| storageNetApp:apiovh:share/get              | Listar os shares                        |
| storageNetApp:apiovh:share/revertToSnapshot | Restaurar um snapshot                   |
| storageNetApp:apiovh:share/snapshot/create  | Criar um snapshot                       |
| storageNetApp:apiovh:share/snapshot/delete  | Eliminar um snapshot                    |
| storageNetApp:apiovh:share/snapshot/edit    | Editar um snapshot                      |
| storageNetApp:apiovh:share/snapshot/get     | Listar os snapshots                     |

> [!tabs]
> Através da API
>> Utilize a seguinte chamada API para criar a política IAM:
>>
>> > [!api]
>> >
>> > @api {v2} /iam POST /iam/policy
>>
>> Com o seguinte corpo do pedido:
>>
>> > [!primary]
>> >
>> > No campo `identities`, substitua `xx11111-ovh` pelo seu identificador de conta OVHcloud (NIC handle) e `EU.xxxxxxxxxxxxxxxx` pelo `clientId` obtido no passo 1.
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
>> A API responderá com os detalhes da política criada:
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
> Através da CLI
>> A política IAM pode ser criada com a [CLI OVHcloud](https://github.com/ovh/ovhcloud-cli) e o seguinte comando (complete-o com os seus valores):
>>
>> > [!primary]
>> >
>> > No campo `identities`, substitua `xx11111-ovh` pelo seu identificador de conta OVHcloud (NIC handle) e `EU.xxxxxxxxxxxxxxxx` pelo `clientId` obtido no passo 1.
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
>> A CLI responderá com a seguinte mensagem:
>>
>> ```bash
>> ✅ IAM policy xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx created successfully
>> ```

### Instalação do Trident CSI

A instalação utiliza o Helm com imagens personalizadas alojadas no Docker Hub.
Estas imagens incluem um driver adicional adicionado pela OVHcloud que permite a utilização de armazenamento persistente a partir da oferta OVHcloud Enterprise File Storage.

Crie um ficheiro `trident-values.yaml` para referenciar as imagens alojadas pela OVHcloud:

```bash
cat <<EOF > trident-values.yaml
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
EOF
```

Inicie a instalação:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --create-namespace \
  --namespace trident \
  -f trident-values.yaml
```

A saída deverá mostrar que o chart Helm foi implantado:

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

Após a instalação, verifique que todos os pods do Trident estão no estado `Running` no namespace trident antes de prosseguir:

```bash
kubectl get pods -n trident
```

A saída deverá mostrar todos os pods no estado `Running`:

```bash
NAME                                  READY   STATUS    RESTARTS        AGE
trident-controller-75869d7499-ffmkt   6/6     Running   0               4m25s
trident-node-linux-4gv6w              2/2     Running   1 (4m24s ago)   4m25s
trident-node-linux-g942s              2/2     Running   1 (4m24s ago)   4m24s
trident-node-linux-tfjc2              2/2     Running   0               4m25s
trident-operator-787b98cb7c-sgtdh     1/1     Running   0               4m26s
```

### Criação do backend Trident

O backend Trident permite ligar o NetApp Trident ao serviço OVHcloud Enterprise File Storage utilizando as credenciais IAM criadas anteriormente.

#### 1. Criação de um secret

Crie um secret contendo as informações de ligação que permitem ao Trident aceder à API OVHcloud.

> [!warning]
>
> Substitua os valores `clientID` e `clientSecret` pelas credenciais obtidas no passo 1.
>

```bash
cat <<EOF | kubectl create -n trident -f -
apiVersion: v1
kind: Secret
metadata:
  name: tbc-ovh-efs-secret
type: Opaque
stringData:
  clientID: "EU.xxxxxxxxxxxxxxxx"         # Substitua pelo seu clientId
  clientSecret: "aaaaaaaaaaaaaaaaaaaaaa"  # Substitua pelo seu clientSecret
EOF
```

A saída confirmará a criação do secret:

```bash
secret/tbc-ovh-efs-secret created
```

#### 2. Criação do backend Trident

Crie o seu backend com o seguinte comando:

> [!primary]
>
> O driver de armazenamento `ovh-efs` deve ser obrigatoriamente utilizado. Substitua `exportRule`, `location` e os outros parâmetros pelos valores correspondentes ao seu ambiente.
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
    exportRule: 10.0.32.0/24    # CIDR da sua rede para as ACL NFS
  storageDriverName: ovh-efs
  clientLocation: ovh-eu
  location: eu-west-gra         # Localização do seu serviço EFS
  serviceLevel: premium
  nfsMountOptions: rw,hard,rsize=65536,wsize=65536,nfsvers=3,tcp
  credentials:
    name: tbc-ovh-efs-secret
EOF
```

A saída confirmará a criação do backend:

```bash
tridentbackendconfig.trident.netapp.io/tbc-ovh-efs-gra created
```

Verifique que o backend foi criado corretamente com o seguinte comando:

```bash
kubectl get tridentbackendconfig -n trident
```

A saída deverá mostrar o backend no estado `Bound`:

```bash
NAME                  BACKEND NAME      BACKEND UUID                           PHASE   STATUS
tbc-ovh-efs-gra       backend-ovh-efs   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   Bound   Success
```

### StorageClass e utilização dos volumes

Esta secção explica como expor o Enterprise File Storage às cargas de trabalho Kubernetes através do Trident.

#### 1. StorageClass

Defina uma `StorageClass` para ativar o provisionamento dinâmico através do driver Trident CSI:

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

A saída confirmará a criação da `StorageClass`:

```bash
storageclass.storage.k8s.io/ovh-efs-gra-premium created
```

Esta StorageClass permite provisionar volumes sob demanda e expandi-los dinamicamente.

#### 2. Criação de um volume (PVC)

Crie um `PersistentVolumeClaim` com acesso `ReadWriteMany` (RWX):

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

A saída confirmará a criação do `PVC`:

```bash
persistentvolumeclaim/premium-pvc created
```

Verifique que o PVC foi criado com o seguinte comando:

```bash
kubectl get pvc
```

A saída deverá mostrar o PVC no estado `Bound`:

```bash
NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS          VOLUMEATTRIBUTESCLASS   AGE
premium-pvc  Bound    pvc-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   100Gi      RWX            ovh-efs-gra-premium   <unset>                 5m34s
```

Assim que um Pod utilizar este PVC, o volume será automaticamente montado através do protocolo NFS.

### Funcionalidades avançadas

#### Gestão de snapshots

O NetApp Trident permite criar snapshots de volumes sob demanda no Enterprise File Storage.

- Defina uma `VolumeSnapshotClass` para gerir o ciclo de vida dos snapshots:

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

A saída confirmará a criação da `VolumeSnapshotClass`:

```bash
volumesnapshotclass.snapshot.storage.k8s.io/csi-snapclass created
```

- Crie um `VolumeSnapshot` no mesmo namespace que o `PersistentVolumeClaim` de origem:

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

A saída confirmará a criação do `VolumeSnapshot`:

```bash
volumesnapshot.snapshot.storage.k8s.io/my-snapshot created
```

Verifique que o `VolumeSnapshot` foi criado com o seguinte comando:

```bash
kubectl get volumesnapshot
```

A saída deverá mostrar o VolumeSnapshot no estado `READYTOUSE=true`:

```bash
NAME          READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS   SNAPSHOTCONTENT                                    CREATIONTIME   AGE
my-snapshot   true         premium-pvc                           100Gi         csi-snapclass   snapcontent-0274f0ec-e8ab-48f4-8d89-4422c3875d92   27s            30s
```

O snapshot é criado no serviço Enterprise File Storage e pode ser utilizado para fluxos de trabalho de backup ou restauração.

## Resolução de problemas

- **Backend não associado**: Verifique que as credenciais IAM (clientId/clientSecret) estão corretas e que a política IAM concede todas as permissões necessárias.
- **PVC bloqueado em estado Pending**: Verifique que todos os pods Trident estão no estado `Running`, que o backend está no estado `Bound` e que a `StorageClass` faz referência ao tipo de backend correto. Consulte os erros nos logs dos pods Trident com `kubectl logs -n trident <nome-do-pod>`.
- **Problemas de conectividade de rede**: Verifique que o cluster MKS consegue comunicar com o serviço Enterprise File Storage através do vRack.

## Quer saber mais?

[Enterprise File Storage - Configuração da rede privada](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_network_config)

[Enterprise File Storage - Ligar uma instância Public Cloud a um volume EFS através da rede privada vRack](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_pci_connection_via_vrack)

[Gestão de contas de serviço OVHcloud através da API](/pages/manage_and_operate/api/manage-service-account)

[Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projeto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).
