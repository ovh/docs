---
title: Enterprise File Storage - Clonar um volume
excerpt: "Descubra como clonar um volume da sua solução Enterprise File Storage através da API OVHcloud"
updated: 2024-12-09
---

## Objetivo

Um volume clonado contém todos os dados do volume pai num determinado instante. Tem todas as funcionalidades de um volume e pode ser utilizado como um volume clássico.<br>

É criado um volume clonado a partir de uma snapshot (instantânea) de um volume ativo. Uma vez criado, as alterações ao volume pai não serão refletidas no clone.

> [!primary]
> Neste guia, um volume é também chamado « *share* » como na API OVHcloud.

**Descubra a funcionalidade de clonagem de volumes e aprenda a clonar um volume da sua solução Enterprise File Storage através da API OVHcloud.**

## Casos de utilização

Os cenários de utilização de um volume clonado são múltiplos. Encontrará abaixo alguns exemplos.

### Permitir o acesso aos dados para fins de qualidade, teste ou formação

Os sistemas de formação, de qualidade e de teste podem necessitar de ser atualizados regularmente com dados vindos do ambiente de produção.<br>

Graças à clonagem de volumes, podem ser implementadas operações de automatização para criar conjuntos de dados baseados em dados atualizados rapidamente e sem dar acesso aos dados de produção.

![CloneVolumeUseCaseEnvironmentSync](images/clone_volume_use_case_1.png){.thumbnail}

### Lutar contra a corrupção de dados

A corrupção lógica dos dados pode ser causada por um erro de software, por um erro humano ou por um ato malicioso.<br>

Ao criar pontos de backup regulares com a ajuda de uma [Política de Snapshots](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_snapshot_policy) e ao utilizar a funcionalidade de clonagem de volumes, tem a possibilidade de analisar facilmente as causas das corrupções dos dados, criando um novo volume a partir dos dados existentes.

![CloneVolumeUseCaseDataCorruption](images/clone_volume_use_case_2.png){.thumbnail}

## Requisitos

- Ter uma oferta OVHcloud [Enterprise File Storage](/links/storage/enterprise-file-storage)
- Estar ligado à [API OVHcloud](/links/api)
- Dispor de um volume Enterprise File Storage com uma snapshot `manual`

<!-- CP-NAV-START:storage-enterprise-file-storage -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Enterprise File Storage](/links/control-panel/storage-enterprise-file-storage)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Enterprise File Storage`{.action}

---
<!-- CP-NAV-END:storage-enterprise-file-storage -->

> [!primary]
>
> Pode criar um volume e uma snapshot de tipo "manual" graças à [API OVHcloud](/links/api) ou a partir do seu [espaço cliente OVHcloud](/links/manager).

> [!success]
> Se não está familiarizado com a utilização da API OVHcloud, consulte o nosso guia « [Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

## Limites da funcionalidade

- Apenas as snapshots de tipo `manual` podem ser utilizadas para clonar um volume.
No entanto, se pretender clonar um volume utilizando uma snapshot do tipo `automatic`, pode conservar esta snapshot para a transformar numa snapshot do tipo `manual`.
Consulte [guia de conservação de snapshots automáticas](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_hold_automatic_snapshot) para obter mais informações.

- A criação de um volume clonado a partir de uma snapshot do tipo `system` não é suportada.

- O tamanho do volume clonado deve ser **superior ou igual** ao tamanho do snapshot utilizado para a operação de clonagem.

## Instruções

1\. Identifique o ID` da snapshot a utilizar através da seguinte chamada API:

> [!api]
>
> @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

**Parâmetros:**

- `serviceName`: é o identificador único do serviço
- `shareId`: é o identificador do volume ao qual pertence a snapshot

![CloneVolume](images/clone_volume_step_1.png){.thumbnail}

2\. Crie o volume a partir da snapshot com a seguinte chamada de API:

> [!api]
>
> @api {POST} /storage/netapp/{serviceName}/share
>

**Parâmetros:**

- `serviceName`: é o identificador único do serviço
- `size`: é o tamanho do volume. Deve ser superior ou igual ao tamanho da snapshot.
- "protocol`: é o protocolo do volume. Apenas o protocolo NFS é suportado.
- `snapshotID`: é o identificador da snapshot a utilizar para criar o volume
- `name`: (Opcional) é o nome do volume
- `description`: (Opcional) é a descrição do volume

![CloneVolume](images/clone_volume_step_2.png){.thumbnail}

A API OVHcloud retornará um código HTTP 201, bem como a informação correspondente ao volume criado.<br>

O estado do volume será alterado para `creating_from_snapshot` e, em seguida, para ser `available` uma vez que a criação do volume esteja terminada.<br>
A criação do volume pode levar algum tempo, dependendo do tamanho da snapshot utilizada.

**É criado um novo volume a partir da snapshot do seu volume principal.**

## Quer saber mais? <a name="go-further"></a>

Se necessitar de formação ou de assistência técnica para a implementação das nossas soluções, contacte o seu representante de vendas ou clique [neste link](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projeto aos nossos peritos da equipa Professional Services.

Fale com a nossa [comunidade de utilizadores](/links/community).