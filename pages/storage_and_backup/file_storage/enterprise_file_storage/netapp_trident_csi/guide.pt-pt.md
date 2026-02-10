---
title: Enterprise File Storage - Primeiros passos com Trident CSI
excerpt: "Implemente o NetApp Trident CSI no OVHcloud Enterprise File Storage para gerir volumes e snapshots no Kubernetes"
updated: 2026-02-10
---

## Objetivo

Este guia tem como objetivo fornecer uma referência clara e passo a passo para implementar e configurar o NetApp Trident CSI no OVHcloud Managed Kubernetes (MKS), permitindo um acesso fluido ao Enterprise File Storage através do vRack. Este guia reúne as melhores práticas, os pré-requisitos, a configuração IAM, a configuração do backend, bem como funcionalidades avançadas, tais como a gestão de snapshots e volumes.

## Pré-requisitos

- Estar ligado à [área de cliente OVHcloud](/links/manager)

Antes de começar, certifique-se de que o seu ambiente cumpre os seguintes critérios:

- Cluster Kubernetes: Um cluster totalmente implementado e operacional.
- Rede (vRack):
    - O projeto Public Cloud e os serviços vRack devem estar ligados ao mesmo vRack.
    - O subnet e o VLAN devem corresponder entre os serviços vRack e a rede privada MKS.
    - **Importante:** O IP do Service Endpoint deve ser único e não utilizado no subnet.

## Instruções

### Configuração IAM (Identity and Access Management)

O Trident necessita de uma conta de serviço dedicada para interagir com a API OVHcloud e gerir os volumes Enterprise File Storage. Siga os passos abaixo para configurar corretamente a IAM.

#### 1. Criação da conta de serviço (OAuth2)

Crie um cliente OAuth2 através da API OVHcloud utilizando o fluxo `CLIENT_CREDENTIALS`.

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

Exemplo de payload:

```json
{
  "description": "csi test",
  "flow": "CLIENT_CREDENTIALS",
  "name": "CSI-TEST"
}
```

> [!primary]
>
> **Nota:** Guarde com cuidado o `clientId` e o `clientSecret`. Serão necessários durante a configuração do backend Trident.
>

#### 2. Criação da política IAM

Ligue-se à [área de cliente OVHcloud](/links/manager) e clique em `Identidade, Segurança & Operações`{.action}. Abra o menu `Políticas`{.action} e clique em `Criar uma política`{.action}.

Configure a política selecionando `Enterprise File Storage` na secção `Tipos de produtos` e, em seguida, o ID do serviço de armazenamento de ficheiros relevante na secção `Recursos`.

#### 3. Associação da conta à política

Associe a conta de serviço (criada no passo 1) à política IAM adicionando a URN da conta no campo `identities`:

> [!api]
>
> @api {v1} /iam PUT /iam/policy/{policyId}
>

A URN da conta pode ser obtida através deste chamada com o ID do cliente registado:

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

#### 4. Atribuição das permissões necessárias

Certifique-se de que a política concede todas as ações necessárias para o bom funcionamento do Trident:

| Action                                      | Description                             |
| ------------------------------------------- | --------------------------------------- |
| storageNetApp:apiovh:get                    | Listar os serviços                      |
| storageNetApp:apiovh:serviceInfos/get       | Obter as informações de um serviço      |
| storageNetApp:apiovh:share/accessPath/get   | Obter o ponto de montagem de um share   |
| storageNetApp:apiovh:share/acl/create       | Criar uma ACL                           |
| storageNetApp:apiovh:share/acl/delete       | Eliminar uma ACL                        |
| storageNetApp:apiovh:share/acl/get          | Listar as ACLs                          |
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

### Instalação do Trident CSI

A instalação utiliza o Helm com imagens personalizadas alojadas no Docker Hub.
Estas imagens incluem um driver adicional adicionado pela OVHcloud que permite a utilização de armazenamento persistente a partir da oferta OVHcloud Enterprise File Storage.

Crie um ficheiro `trident-values.yaml` para referenciar as imagens hospedadas pela OVHcloud:

```bash
tridentSilenceAutosupport: true
operatorImage: "ovhcom/trident-operator:25.02.1-linux-amd64"
tridentImage: "ovhcom/trident:25.02.1-linux-amd64"
```

Inicie a instalação:

```bash
helm repo add netapp-trident https://netapp.github.io/trident-helm-chart
helm install trident-operator netapp-trident/trident-operator \
  --version 100.2502.1 \
  --namespace trident \
  -f trident-values.yaml
```

Depois da instalação, verifique que todos os pods do Trident estão no estado `Running` no namespace trident antes de continuar.

Instale o Tridentctl:

```bash
mkdir 25.02.1 && cd 25.02.1
wget https://github.com/NetApp/trident/releases/download/v25.02.1/trident-installer-25.02.1.tar.gz
tar -xf trident-installer-25.02.1.tar.gz
ln -sf /root/25.02.1/trident-installer/tridentctl /usr/local/bin/tridentctl
```

### Configuração do backend (Provisioner)

O backend permite ligar o NetApp Trident ao serviço OVHcloud Enterprise File Storage utilizando as credenciais IAM criadas anteriormente.

#### 1. Ficheiro de configuração do backend

Crie um ficheiro com o nome `backend-netapp.yaml`. O driver de armazenamento `ovh-efs` deve ser obrigatoriamente utilizado.

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

#### 2. Criação do backend

Crie o backend utilizando a ferramenta `tridentctl`:

```bash
./tridentctl create backend -f backend-netapp.yaml -n trident
```

Antes de continuar, verifique que o estado do backend é `Online`.

### StorageClass e utilização dos volumes

Esta secção explica como expor o Enterprise File Storage às workloads Kubernetes através do Trident.

#### 1. StorageClass

Defina uma `StorageClass` para ativar o provisionamento dinâmico através do driver Trident CSI:

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

Esta StorageClass permite provisionar volumes sob demanda e expandi-los dinamicamente.

#### 2. Criação de um volume (PVC)

Crie um `PersistentVolumeClaim` com um acesso `ReadWriteMany` (RWX) para solicitar um volume:

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

Assim que um Pod utilizar este PVC, o volume será automaticamente provisionado e montado através de NFS.

### Funcionalidades avançadas

#### Gestão de snapshots

O NetApp Trident permite criar snapshots de volumes sob demanda no Enterprise File Storage.

- Definir uma `VolumeSnapshotClass` para gerir o ciclo de vida dos snapshots:

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:   
  name: csi-snapclass
driver: csi.trident.netapp.io
deletionPolicy: Delete
```

- Criar um `VolumeSnapshot` no mesmo namespace que o `PersistentVolumeClaim` fonte:

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

O snapshot é criado no serviço Enterprise File Storage e pode ser utilizado para fluxos de trabalho de backup ou restauração.

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).