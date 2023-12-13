---
title: Enterprise File Storage - Gerir as snapshots de um volume
excerpt: Saiba como gerir as snapshots de um volume Enterprise File Storage utilizando as API OVHcloud
updated: 2021-10-27
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Neste guia, saiba como gerir as snapshots dos volumes para a oferta OVHcloud Enterprise File Storage.

**Aprenderá a recuperar snapshots existentes, criar uma nova snapshot, recuperar informações pormenorizadas de uma snapshot e eliminar uma snapshot utilizando as API da OVHcloud.**

## Requisitos

- Dispor de uma oferta OVHcloud Enterprise File Storage com um volume
- Ter acesso à página das [API OVHcloud](https://api.ovh.com/)

## O essencial

Uma snapshot de um volume é uma cópia em determinado momento e apenas em leitura de um volume.

As snapshots são criadas a partir de um volume operacional.

> [!warning]
>
> As snapshots estão ligadas a um volume, não podem existir sem ele.
>

## Instruções

Todas as API utilizadas para este guia estão disponíveis na secção */armazenamento*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Aquando da utilização das API, todos os campos marcados com um asterisco (\*) são obrigatórios.
>

### Listar as snapshots

Todas as snapshots existentes de um volume podem ser recuperadas através da seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>>
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> ID do serviço
>> >
>> > **shareId** *
>> >
>> >> ID do volume
>

Substitua o `serviceName` pelo ID do seu serviço e `shareId` pelo ID do volume.

Por predefinição, nenhuma snapshot deve ser devolvida para um novo volume.

### Criar uma snapshot a partir de um volume

Para criar uma snapshot, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/snapshot
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> ID do serviço
>> >
>> > **shareId** *
>> >
>> >> ID do volume
>> >
>> > **NetAppShareSnapshot**
>> >
>> >> **description**
>> >>
>> >> > Descrição da snapshot
>> >>
>> >> **name**
>> >>
>> >> > Nome da snapshot
>

Substitua o `serviceName` pelo ID do seu serviço e `shareId` pelo ID do volume.

Os parâmetros `name` e a `descrição` da snapshot são ambos facultativos.

### Obter as informações de uma snapshot

Para obter informações de uma snapshot, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> ID do serviço
>> >
>> > **shareId** *
>> >
>> >> ID do volume
>> >
>> > **snapshotId** *
>> >
>> >> ID da snapshot
>

Substitua o `serviceName` pelo ID do seu serviço, `shareId` pelo ID do volume e `snapshotId` pelo ID da snapshot.

### Eliminar uma snapshot

Para eliminar uma snapshot, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage DELETE /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> ID do serviço
>> >
>> > **shareId** *
>> >
>> >> ID do volume
>> >
>> > **snapshotId**
>> >
>> >> ID da snapshot
>

Substitua o `serviceName` pelo ID do seu serviço, `shareId` pelo ID do volume e `snapshotId` pelo ID do snapshot a eliminar.

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
