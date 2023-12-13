---
title: "Enterprise File Storage - Restaurar um volume utilizando a API de restauro de snapshots"
excerpt: "Descubra como restaurar os volumes da sua solução Enterprise File Storage graças à funcionalidade de restauro de snapshots fornecida pela API OVHcloud"
updated: 2023-09-15
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Neste manual, explicaremos como restaurar um volume para a sua última snapshot, graças à função de *snapshot revert*.

**Saiba como restaurar os volumes da sua solução Enterprise File Storage através da funcionalidade de restauro de snapshots através da API OVHcloud.**

## Requisitos

- Ter uma oferta OVHcloud Enterprise File Storage com um volume
- Estar ligado à [API OVHcloud](https://api.ovh.com/)

## Princípios básicos

Uma snapshot de um volume é uma cópia pontual apenas de leitura de um volume.
As snapshots são criadas a partir de um volume existente e operacional. Uma snapshot não pode ser utilizada se o volume a que pertence já não existir.

> [!warning]
>
> Tenha em conta que, após o restauro de um volume com a utilização de uma snapshot, todos os ficheiros ou snapshots criados posteriormente serão perdidos. Quando um volume é restaurado, todos os dados nele contidos são substituídos pelos dados da snapshot. Esta operação é irreversível.
>

Neste guia, um volume é também chamado "*share*" como na API OVHcloud.

## Limites

Só é possível restaurar um volume à sua snapshot mais recente disponível. No entanto, se pretender restaurar um volume a partir de uma snapshot anterior, deve eliminar as snapshots até que a snapshot a utilizar para o restauro seja a mais recente.

## Instruções

### Cenário 1: restaurar um volume a partir de uma snapshot do tipo `manual`

Neste cenário, deseja restaurar o seu volume para a sua última snapshot do tipo `manual`, criada através da API OVHcloud ou da Área de Cliente OVHcloud.

> [!primary]
> **Requisitos deste cenário:**
>
> - Já criou uma snapshot de tipo `manual`. Caso contrário, pode criar uma snapshot de tipo `manual` através da API OVHcloud ou da Área de Cliente OVHcloud.
> - A snapshot de tipo `manual` deve pertencer ao volume que pretende restaurar.

1\. Identifique a última snapshot do tipo `manual` através da seguinte chamada de API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

- `{serviceName}` é o identificador único do serviço
- `{shareId}` é o volume a restaurar 

![RevertManualSnapshot](images/use_case_1_step_1.png){.thumbnail}

2\. Restaure o seu volume para a última snapshot utilizando a chamada API `/revert` : 

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/revert
>

- `{serviceName}` é o identificador único do serviço
- `{shareId}` é o volume a restaurar
- `{snapshotID}` é a última snapshot do volume

A API da OVHcloud só retornará um código HTTP 202 (*Accepted*).<br>
O estado do volume passará para `reverting` e, a seguir, voltará para `available` após a conclusão do processo de restauro do volume. De forma simultânea, o estado da snapshot passará para `restoring` e voltará para `available` assim que o processo de restauro do volume estiver concluído.

![RevertManualSnapshot](images/use_case_1_step_2.png){.thumbnail}

### Cenário 2: Restaurar um volume a partir de uma snapshot efetuada através da política de snapshots

Neste cenário, uma regra de uma política de snapshots (*Snapshot policy*) realiza snapshots regulares (automáticos) de um volume e deseja restaurar o seu volume para a última snapshot criada pela *Snapshot policy*.

Deverá "conservar" (`hold`) a última snapshot tomada pela política de snapshots associada a um volume para que esta se torne uma snapshot `manual`. Uma vez que a snapshot é do tipo `manual`, o seu volume associado pode ser restaurado.

> [!primary]
> **Requisitos deste cenário:**
>
> - Criou uma *Snapshot policy* e associou-a ao volume a restaurar.
> - Esta *Snapshot policy* criou pelo menos uma snapshot.

> [!primary]
>
> As snapshots efetuadas pela *snapshot policy* são do tipo `automatic`. Para que possam ser utilizados para o restauro de volume, devem ser conservados utilizando a rota API `/hold`. Isto evitará a sua rotação pela *Snapshot policy*.
>

1\. Identifique a última snapshot do tipo `automatic` através da seguinte chamada API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

- `{serviceName}` é o identificador único do serviço
- `{shareId}` é o volume a restaurar

![RevertSnapshot](images/use_case_2_step_1.png){.thumbnail}

2\. Conserve a Snapshot utilizando a seguinte chamada API: 

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}/hold

- `{serviceName}` é o identificador único do serviço
- `{shareId}` é o volume a restaurar
- `{snapshotID}` é a última snapshot automática à data

> [!warning]
>
> Depois de efetuada a operação de conservação (`hold`), o ID e o tipo da snapshot serão alterados. No entanto, as suas propriedades `name`, `created at` e `path` serão conservadas. Queira tomar nota do novo `id` para as etapas seguintes.
>

![RevertSnapshot](images/use_case_2_step_2.png){.thumbnail}

3\. Certifique-se de que a nova snapshot é a última snapshot do tipo `manual` do volume.

Se tiverem sido efetuadas outras snapshots `manual` antes desta snapshot, estas terão de ser eliminadas.

4\. A rota API utilizada para recuperar a lista das snapshots do volume da etapa 1 pode ser reutilizada aqui.

![RevertSnapshot](images/use_case_2_step_3.png){.thumbnail}

5\. Restaure o volume para a última snapshot chamando a rota API `/revert` :

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/revert
>

- `{serviceName}` é o identificador único do serviço
- `{shareId}` é o volume a restaurar
- `{snapshotID}` é a última snapshot do volume

A API da OVHcloud só retornará um código HTTP 202 (*Accepted*).<br>
O estado do volume passará para `reverting` e, a seguir, voltará para `available` após a conclusão do processo de restauro do volume. De forma simultânea, o estado da snapshot passará para `restoring` e voltará para `available` assim que o processo de restauro do volume estiver concluído.

![RevertSnapshot](images/use_case_2_step_4.png){.thumbnail}

O volume será restaurado para a snapshot selecionada.

## Quer saber mais? <a name="go-further"></a>

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.