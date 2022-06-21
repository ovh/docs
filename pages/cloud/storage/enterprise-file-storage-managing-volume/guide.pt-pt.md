---
title: Enterprise File Storage - Gerir os seus volumes
slug: netapp-volumes
excerpt: Saiba como criar e gerir os seus volumes OVHcloud Enterprise File Storage através das API OVHcloud
section: Enterprise File Storage
order: 3
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/10/2021**

## Objetivo

Neste guia, saiba como gerir os volumes da oferta OVHcloud Enterprise File Storage.

**Aprenderá a recuperar os volumes existentes assim como o seu ponto de montagem, criar um novo volume ou ainda eliminar um volume existente a partir das API OVHcloud.**

## Requisitos

- Ter uma oferta OVHcloud Enterprise File Storage
- Ter acesso à página das [API OVHcloud](https://api.ovh.com/)

## O essencial

Um volume é um sistema de ficheiros partilhados persistente, acessível em leitura e/ou escrita.

Pode também ter um nome e uma descrição (facultativo).

> [!warning]
>
> Por predefinição, o acesso a um volume criado é limitado. Deve ser criada uma ACL para permitir o acesso.
>

## Instruções

Todas as rotas API utilizadas para este guia estão disponíveis na secção */armazenamento*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Aquando da utilização das API, todos os campos marcados com um asterisco (\*) são obrigatórios.
>

### Listar os volumes

Para listar os volumes de um serviço, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> ID do serviço
>> >
>

Substitua o `serviceName` pelo ID do seu serviço.

### Obter as informações de um volume

Para recuperar as informações de um volume, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}
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
>

Substitua o `serviceName` pelo ID do seu serviço e `shareId` pelo ID do volume.

### Criar um volume

Para criar um novo volume, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp{serviceNme}/share
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> ID do serviço
>> >
>

Substitua o `serviceName` pelo ID do seu serviço.

Escolha o protocolo `NFS` para o seu novo volume (propriedade `protocol`) e o tamanho deste (propriedade `size`).
Também pode especificar um nome e uma descrição com as propriedades `name` e `descrição`.

### Mostrar os pontos de montagem de um volume

Para conhecer o caminho de montagem de um volume, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp{serviceName}/share/{shareId}/accessPath
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
>

Substitua o `serviceName` pelo ID do seu serviço e `shareId` pelo ID do volume.

Os caminhos de montagem devolvidos podem ser utilizados para aumentar o volume.

O comando de montagem será diferente, consoante o protocolo escolhido para o volume.  

> [!primary]
>
> Para NFS, encontrará as instruções de montagem no guia [Monter o seu NAS através de NFS](https://docs.ovh.com/pt/storage/nas-nfs/).
> Tenha em conta que o caminho de montagem recuperado substitui IP_NAS/NFS_PATH neste manual.
>  

### Eliminar um volume

Para eliminar um volume, utilize a seguinte rota API:  

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}
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
>

Substitua o `serviceName` pelo ID do seu serviço e `shareId` pelo ID do volume a eliminar.

## Saiba mais

[Primeiros passos com as API OVHcloud](https://docs.ovh.com/pt/api/first-steps-with-ovh-api/)(EN)

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
