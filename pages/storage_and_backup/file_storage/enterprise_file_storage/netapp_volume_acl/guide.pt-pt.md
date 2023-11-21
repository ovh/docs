---
title: Enterprise File Storage - Gerir os ACL de um volume
excerpt: Saiba como gerir os ACL de um volume Enterprise File Storage através das API OVHcloud
updated: 2021-10-27
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Neste guia, saiba como gerir os ACL de um volume para a oferta OVHcloud Enterprise File Storage.

**Aprenderá a recuperar os ACL (Access Control Lists) do seu volume, criar uma nova ACL assim como eliminar uma ACL existente a partir das API OVHcloud.**

## Requisitos

- Dispor de uma oferta OVHcloud Enterprise File Storage com um volume
- Ter acesso à página das [API OVHcloud](https://api.ovh.com/)

## O essencial

Os ACL permitem autorizar ou restringir o acesso a um volume.

> [!warning]
>
> Por predefinição, o acesso a um volume criado é limitado. Deve ser criada uma ACL para permitir o acesso.
>

Com a ajuda dos ACL, pode autorizar um endereço IP ou um intervalo de endereços IP (notação CIDR) a aceder ao seu volume.

## Instruções

Todas as rotas API utilizadas para este guia estão disponíveis na secção */armazenamento*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Ao utilizar a API, todos os campos assinalados com um asterisco (\*) são obrigatórios.
>

### Listar os ACL

Todas as ACL existentes de um volume podem ser recuperadas através da seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>>
>> >> ID do serviço
>>
>> > **shareId** *
>>
>> >> ID do volume
>

Substitua o `serviçoName` pelo ID do seu serviço e `shareId` pelo ID do volume.

Quando utilizar esta chamada API para um novo volume, nenhuma ACL deve ser devolvida por predefinição.

### Autorizar o acesso a um volume com recurso a um ACL

Para criar uma nova ACL, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>>
>> >> ID do serviço
>>
>> > **shareId** *
>>
>> >> ID do volume
>>
>> > **NetAppShareACLRule** *
>>
>> >> **accessLevel** *
>> >>
>> >> > Nível de acesso ACL. Pode ser **rw** (leitura e escrita) ou **ro** (leitura apenas).
>> >>
>> >> **accessTo** *
>> >>
>> >> > Endereço IP ou intervalo de endereços IP em notação CIDR.
>

Substitua o `serviceName` pelo ID do seu serviço e `shareId` pelo ID do volume.

Escolha o nível de acesso que deseja autorizar: ou `ro` (apenas leitura) ou `rw` (leitura e escrita).

Por fim, substitua o `accessTo` pelo endereço IP a partir do qual deseja autorizar as ligações.

### Eliminar uma ACL

A eliminação de um ACL impede qualquer acesso posterior a partir dos endereços IP que especifica.

Para eliminar um ACL, utilize a seguinte rota API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage DELETE /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>>
>> >> ID do serviço
>>
>> > **shareId** *
>>
>> >> ID do volume
>>
>> > **aclRuleId** *
>>
>> >> ID do ACL
>

Substitua o `serviceName` pelo ID do seu serviço e `shareId` pelo ID do volume.

Pode obter o `aclRuleId` a partir da resposta obtida aquando da criação do ACL ou listando os ACL existentes do seu volume.

## Saiba mais

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
