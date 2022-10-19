---
title: NAS-HA - Gestão dos ACL através da API
slug: nas/manage-acls
excerpt: Saiba como gerir os acessos ao NAS-HA através da API OVHcloud
section: NAS
order: 07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 20/07/2022**

## Objetivo

O serviço NAS-HA da OVHcloud permite-lhe gerir um armazenamento de ficheiros acessível a partir de uma rede.

**Este guia explica como gerir o ACL de uma partição NAS-HA através da API OVHcloud.**

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

> [!warning]
>
> O acesso é recusado por predefinição, exceto se for concedido através do ACL. Apenas os endereços IP ligados aos seus serviços OVHcloud podem ser adicionados.
>

### Obter o ACL de uma partição

Para obter os endereços IP que podem aceder à partição, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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

### Recuperação de todos os endereços IP elegíveis

Pode verificar os endereços IP elegíveis para um acesso através das chamadas API seguintes:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> Nome interno do seu serviço NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome da partição
>

### Adicionar uma entrada ACL

Para criar uma nova entrada ACL que lhe permita ligar-se à sua partição, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > **ip** *
>> >
>> >> O endereço IP ou a gama de acesso
>> >
>> > **type** *
>> >
>> >> Tipo de acesso ACL para esta entrada: *readonly* ou *readwrite*
>

> [!primary]
>
> Utilize a notação CIDR para as gamas IP, por exemplo: 192.0.2.0/24.
>

### Eliminação de uma entrada ACL

Para eliminar um endereço IP ou um intervalo de endereços do ACL, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
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
>> > **ip** *
>> >
>> >> O endereço IP ou a gama a recusar
>

## Quer saber mais?

[Montar um NAS através de NFS](https://docs.ovh.com/pt/storage/file-storage/nas/nfs/)

[Configure o seu NAS no Windows Server através do CIFS](https://docs.ovh.com/pt/storage/file-storage/nas/cifs/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.