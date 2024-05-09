---
title: 'Como configurar o protocolo HTTP/2 no Load Balancer OVH'
excerpt: 'Configuração do protocolo HTTP/2 no Load Balancer OVH'
updated: 2018-01-15
---

## Sumário

Neste momento, o Load Balancer OVH não é compatível com protocolo HTTP/2. No entanto,é possível contornar esta limitação usando o modo TCP com a extensão ALPN do protocolo TLS.

A ALPN (Application-Layer Protocol Negotiation) é uma extensão TLS que permite à Application Layer <b>negociar</b> que protocolo será usado (neste caso, h2).

**Este manual mostra como criar um serviço HTTP/2 com o Load Balancer OVH. Em particular, vamos demonstrar como configurar o serviço para repartir o tráfego por vários servidores que respondam em HTTP/2.**

## Requisitos

- Criar um Frontend TCP.
- Criar uma Server Farm TCP, com servidores adicionados.

## Instruções

> [!warning]
>
> A ordem de criação dos elementos é importante. Os encaminhamentos devem ser configurados antes de lhes serem atribuídas regras.
> 

### Adicionar um encaminhamento

Vamos adicionar um encaminhamento ao serviço.

#### Através da API

> [!faq]
>
> Serviço:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> `<ID do Load Balancer>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<ID da Farm TCP que deve poder gerir o HTTP/2>`
>> >
>> > **frontendId**
>> >
>> >> `<ID do Frontend TCP 443>`
>

### Adicionar uma regra

Agora vamos adicionar uma regra à nossa route.

#### Através da API

> [!faq]
>
> Serviço:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** \
>> >
>> >> `<ID do Load Balancer>`
>> >
>> > **routeId**
>> >
>> >> `<ID da route criada acima>`
>> >
>> > **field**
>> >
>> >> `"protocol"`
>> >
>> > **match**
>> >
>> >> `"is"`
>> >
>> > **pattern**
>> >
>> >> `"http/2.0"`
>

### Aplicar as modificações

As modificações feitas ao Load Balancer OVH devem ser  *aplicadas explicitamente* em cada uma das zonas configuradas para o serviço. Caso contrário, elas não serão visíveis para os seus visitantes. Isto permite efetuar alterações de configuração complexas de uma só vez.

Se tem várias zonas, deve aplicar a mesma configuração a cada uma delas.

#### Através da API

Atualizar uma zona:

> [!faq]
>
> Serviço:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Parâmetros:
>
>> > **serviceName** *
>> >
>> >> `<ID do Load Balancer>`
>> >
>> > **zona**
>> >
>> >> `<zona na qual aplicar a configuração>`
>

### Validar

Depois destas etapas, já dispõe de um serviço de repartição de carga funcional para os seus servidores HTTP/2. Agora pode validar o estado do serviço solicitando-o ao Load Balancer OVH e verificando a versão da resposta:

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.