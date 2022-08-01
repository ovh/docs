---
title: NAS-HA - Gestão das snapshots através da API
slug: nas/nas-snapshots-api
excerpt: "Saiba como gerir as snapshots NAS-HA através da API OVHcloud"
section: NAS
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 20/07/2022**

## Objetivo

As NAS-HA da OVHcloud permitem-lhe criar e gerir volumes de ficheiros acessíveis a partir de uma rede. 

**Este manual explica-lhe como gerir as snapshots de uma partição NAS-HA através da API OVHcloud.**

## Requisitos

- Um serviço [NAS-HA OVHcloud](https://www.ovh.pt/nas/)
- Consulte o nosso guia dos [primeiros passos com a API OVHcloud](../../api/first-steps-with-ovh-api/) para se familiarizar com a APIv6 OVHcloud

## Instruções

> [!primary]
> Não hesite em aceder [à página FAQ NAS-HA](../faq-nas/) para encontrar todas as informações relativas à função snapshot.
>

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

Por predefinição, realiza-se uma snapshot dos seus dados a cada hora e é guardado no seu NAS-HA. Pode ativar outras estratégias de snapshot que irão criar snapshots com frequências predefinidas.

### Recuperar o planeamento automático das snapshots

Para apresentar o planeamento de snapshot automático ativo, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
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

### Adicionar um intervalo de snapshot automático

Para criar snapshots automáticas adicionais a uma frequência selecionada, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
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
>> > **snapshotType** *
>> >
>> >> Uma frequência para o snapshot: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

### Recuperação das informações das snapshots automáticas

Para obter os detalhes de uma snapshot automática, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
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
>> > **snapshotType** *
>> >
>> >> A frequência da snapshot em causa: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

### Eliminação de um intervalo de snapshot automático

Utilize a seguinte rota para eliminar uma frequência de snapshot automática:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
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
>> > **snapshotType** *
>> >
>> >> A frequência da snapshot em causa: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

Também pode utilizar snapshots instantâneas com o NAS-HA (snapshots personalizadas) através dos seguintes endpoints.

### Listing das snapshots personalizadas

Utilize a seguinte rota para recuperar snapshots personalizadas existentes:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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

### Criar uma snapshot manual

Para adicionar uma snapshot manual, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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
>> > **expiration**
>> >
>> >> Uma data de expiração facultativa, por exemplo: 2022-06-24 (ISO 8601)
>> >
>> > **name** *
>> >
>> >> Nome da snapshot
>

### Recuperação das informações de uma snapshot personalizada

Para apresentar os detalhes de uma snapshot personalizada, utilize a seguinte rota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
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
>> > **name** *
>> >
>> >> O nome da snapshot
>

### Eliminação de uma snapshot personalizada

Utilize a seguinte rota para eliminar uma snapshot personalizada:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name} 
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
>> > **name** *
>> >
>> >> O nome da snapshot
>

##### **Restauro das snapshots**

A API não permite restaurar as snapshots efetuadas. As snapshots são armazenadas em modo de leitura apenas na partição.

Para aceder às snapshots a partir do seu ponto de montagem, deve aceder ao diretório `.zfs/snapshot` da sua partição.

Por exemplo, num serviço cujo ID é `zpool-123456`, contendo uma partição designada por `partition1` e cujo qual criou uma snapshot chamada `snapshot01`. Pode encontrar a snapshot com este comando:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Para restaurar a sua snapshot, copie-a a partir do caminho de acesso do ficheiro `.zfs` para o novo diretório onde pretende restaurar a snapshot. Pode utilizar uma ferramenta como rsync que lhe permite efetuar restauros.

Para mais informações, aceda à secção [Quer saber mais](#gofurther).


## Quer saber mais?

[Montar um NAS através de NFS](../nas-nfs/)

[Configure o seu NAS no Windows Server através do CIFS](../nas-cifs/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.