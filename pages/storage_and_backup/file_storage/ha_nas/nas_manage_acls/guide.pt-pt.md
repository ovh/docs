---
title: NAS-HA - Gestão dos ACL através da API
excerpt: Saiba como gerir os acessos ao NAS-HA através da API OVHcloud
updated: 2022-07-20
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O serviço NAS-HA da OVHcloud permite-lhe gerir um armazenamento de ficheiros acessível a partir de uma rede.

**Este guia explica como gerir o ACL de uma partição NAS-HA através da API OVHcloud.**

## Requisitos

- Um serviço [NAS-HA OVHcloud](https://www.ovh.pt/nas/)
- Consulte o nosso guia dos [primeiros passos com a API OVHcloud](/pages/manage_and_operate/api/first-steps) para se familiarizar com a APIv6 OVHcloud

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
> @api {v1} /dedicated/nasha GET /dedicated/nasha
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
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
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
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
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

[Montar um NAS através de NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[Configure o seu NAS no Windows Server através do CIFS](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.