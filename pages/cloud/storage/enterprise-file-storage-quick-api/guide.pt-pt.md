---
title: Enterprise File Storage - Primeiros passos com as API
slug: netapp-quickstart
excerpt: Iniciar a sua oferta Enterprise File Storage com recurso às API OVHcloud
section: Enterprise File Storage
order: 2
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/10/2021**

## Objetivo

Neste guia de arranque rápido, saiba como começar na oferta Enterprise File Storage.

**Aprenderá a recuperar as informações da sua oferta e a criar o seu primeiro volume através das API OVHcloud.**

## Requisitos

- Ter uma oferta OVHcloud Enterprise File Storage
- Ter acesso à página das [API OVHcloud](https://api.ovh.com/)
- Saber [montar um NAS através de NFS](https://docs.ovh.com/pt/storage/nas-nfs/)

## O essencial

A oferta OVHcloud Enterprise File Storage permite-lhe criar volumes e gerir assim partilhas de ficheiros acessíveis numa rede.

Pode escolher o tamanho dos seus volumes, gerir os acessos através de ACL ou ainda criar snapshots (cópia instantânea do volume).

## Instruções

Todas as API utilizadas para este guia estão disponíveis na secção */armazenamento*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Aquando da utilização das API, todos os campos marcados com um asterisco (\*) são obrigatórios.
>

### Obter as informações do seu serviço

Todos os seus serviços ativos podem ser recuperados utilizando a seguinte rota API:

> [!api]
>
> @api {GET} /storage/netapp
>

### Criar um novo volume

Um volume é uma unidade de armazenamento com um tamanho e um protocolo.

Para criar um volume, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> ID do serviço
>> >
>> > **NetAppShare** *
>> >
>> >> **description**
>> >>
>> >> > Descrição do volume
>> >>
>> >> **name**
>> >>
>> >> > Nome do volume
>> >>
>> >> **protocol** *
>> >>
>> >> > Protocolo utilizado pelo volume
>> >>
>> >> **size**
>> >>
>> >> > Tamanho em gigabytes do volume
>

Selecione o protocolo `NFS` e um tamanho de `10` gigabytes, por exemplo.

### Adicionar um ACL ao volume

Os ACL permitem autorizar ou recusar o acesso a um volume.

> [!warning]
>
> O comportamento predefinido consiste em recusar todo o acesso a um novo volume.
>

Depois de criar um volume, deve criar um novo ACL para aceder ao mesmo.

Para criar um novo ACL que lhe permitirá ligar-se ao seu volume, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/acl
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
>> > **NetAppShareACLRule** *
>> >
>> >> **accessLevel** *
>> >>
>> >> > Nível de acesso ACL. Pode ser **rw** (leitura e escrita) ou **ro** (leitura apenas).
>> >>
>> >> **accessTo** *
>> >>
>> >> > Endereço IP ou intervalo de endereços IP em notação CIDR.
>

> [!primary]
>
> Ao utilizar a notação CIDR, pode autorizar o acesso ao volume a partir do intervalo de endereços IP X.X.X.X/X.
> Por exemplo: 192.0.2.0/24
>

### Montar o volume

Verifique o estado de criação do ACL através da seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
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
>> > **aclRuleId** *
>> >
>> >> ID do ACL
>

Substitua o `aclRuleId` pelo ID da ACL criada para o seu volume.

> [!primary]
>
> O estado ACL deve estar `active`.
>

Uma vez ativa a ACL, recupere os caminhos de acesso ao volume através da seguinte API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/accessPath
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

Receberá uma ou mais opções de acesso para o seu volume.

Agora pode aumentar o volume com o seguinte comando:

```sh
mount-nfs accessPath
```

> [!primary]
>
> Se utilizar Linux, o pacote `nfs-utils` deve estar instalado.
>

Uma vez montado, o seu volume pode ser utilizado para armazenar os seus ficheiros.

### Eliminação do volume

Pode eliminar o seu volume através da seguinte rota API:

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

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
