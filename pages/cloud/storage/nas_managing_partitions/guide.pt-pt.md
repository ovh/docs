---
title: NAS-HA - Gestão das partições por API
slug: nas/nas-partitions-api
excerpt: "Aprenda a gerir as partições NAS-HA graças à API OVHcloud"
section: NAS
order: 08
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 20/07/2022**

## Objetivo

O serviço NAS-HA da OVHcloud permite-lhe gerir um armazenamento de ficheiros acessível a partir de uma rede.

**Este manual explica-lhe como gerir as partições do seu serviço NAS-HA através da API OVHcloud.**

## Requisitos

- Um serviço [NAS-HA OVHcloud](https://www.ovh.pt/nas/)
- Consulte o nosso guia dos [primeiros passos com a API OVHcloud](https://docs.ovh.com/pt/api/first-steps-with-ovh-api/) para se familiarizar com a APIv6 OVHcloud

## Instruções

Todas as rotas API deste guia estão disponíveis na secção */dedicated/nasha*: <https://api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> Ao utilizar a API, todos os campos assinalados com um asterisco (\*) são obrigatórios.
>

### Obter informações sobre o seu serviço

Todos os seus serviços ativos podem ser recuperados utilizando a seguinte rota:

> [!api]
>
> @api {GET} /dedicated/nasha
>

### Lista de todas as partições

Utilize a seguinte rota para recuperar as partições de um serviço:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do seu serviço NAS
>

### Obter as propriedades de uma partição

Para visualizar os detalhes de uma partição, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do serviço NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome da partição
>

### Recuperação das estatísticas de uma partição

Utilize a seguinte rota para recuperar as informações de utilização de uma partição:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/use
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do serviço NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome da partição
>> >
>> > **type** *
>> >
>> >> O tipo de estatística a recuperar: *size*, *used* ou *usedbysnapshots*
>

### Criação de uma partição

Utilize a seguinte rota para criar uma nova partição:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do seu serviço NAS
>> >
>> > **partitionDescription** 
>> >
>> >> Descrição facultativa
>> >
>> > **partitionName** *
>> >
>> >> Um nome para a partição
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS* ou *NFS_CIFS* para ambos 
>> >
>> > **size** *
>> >
>> >> O tamanho da partição
>

Escolha `NFS` como protocol e um tamanho de `10` Gigabytes, por exemplo.

### Modificar as propriedades de uma partição

Para alterar uma partição, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {PUT} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do seu serviço NAS
>> >
>> > **partitionName** *
>> >
>> >> Nome da partição
>> >
>> > **partitionDescription**
>> >
>> >> A nova descrição
>> >
>> > **size**
>> >
>> >> O novo tamanho da partição
>

### Obter os parâmetros ZFS de uma partição

Utilize a seguinte rota para recuperar os parâmetros ZFS:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do seu serviço NAS
>> >
>> > **partitionName** *
>> >
>> >> Nome da partição
>

### Modificação dos parâmetros ZFS de uma partição

> [!warning]
>
> Todos os parâmetros ZFS predefinidos são otimizados. Não é aconselhável alterar estes parâmetros.
>

Para alterar os parâmetros ZFS, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do seu serviço NAS
>> >
>> > **partitionName** *
>> >
>> >> Nome da partição
>> >
>> > **atime**
>> >
>> >> Parâmetro de atualização do tempo de acesso: *on* (default) ou *off*
>> >
>> > **recordsize**
>> >
>> >> Tamanho máximo do bloco: *131072* (por defeito), *16384*, *32768*, *4096*, *65536* ou *8129*
>> >
>> > **sync**
>> >
>> >> Parâmetro de sincronização do ficheiro: *always*, *disabled* ou *standard* (valor predefinido)
>

### Eliminação de uma partição

Utilize a seguinte rota para eliminar uma partição:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do serviço NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome da partição
>

## Quer saber mais?

[Montar um NAS através de NFS](../nas-nfs/)

[Configure o seu NAS no Windows Server através do CIFS](../nas-cifs/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.