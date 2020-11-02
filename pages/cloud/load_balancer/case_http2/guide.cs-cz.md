---
deprecated: true
title: Konfigurace HTTP/2 na službě OVH Load Balancer
slug: http2
excerpt: Konfigurace HTTP/2 na službě OVH Load Balancer
section: Příklady užití
---

**Poslední aktualizace 05/02/2018**

## Cíl

Řešení OVH Load Balancer v současné době protokol HTTP/2 nepodporuje. Existuje však způsob, jak toto omezení za použití TCP a rozšíření ALPN protokolu TLS obejít.


ALPN (Application-Layer Protocol Negotiation) je rozšíření protokolu TLS, umožňující aplikační vrstvě rozhodnout, jaký protokol má být použit (v tomto případě h2).

**V této příručce se dozvíte, jak na HTTP/2 v rámci řešení OVH Load Balancer. Předvedeme Vám, jak tuto službu nakonfigurovat tak, aby přerozdělovala datovou zátěž mezi několika servery komunikujícími přes HTTP/2.**


## Prerekvizity

- TCP front-end.
- TCP farma s připojenými servery.


## Postup

> [!warning]
>
> Pořadí, v němž jsou jednotlivé prvky vytvářeny, je důležité: směrování musí být nakonfigurována ještě předtím, než k nim přiřadíte příslušná pravidla.
> 


### Přidání směrování

Nyní k naší službě přidáme směrování.


#### Prostřednictvím API

> [!faq]
>
> Služba:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Parametry:
>
>> > **serviceName** *
>> >
>> >> `<Load Balancer ID>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<ID Vaší TCP farmy, která má spravovat HTTP/2>`
>> >
>> > **frontendId**
>> >
>> >> `<Front-end tcp 443 ID>`
>


### Přidání pravidla

Nyní k našemu směrování přidáme pravidlo.



#### Prostřednictvím API

> [!faq]
>
> Služba:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Parametry:
>
>> > **serviceName** *
>> >
>> >> `<Load Balancer ID>`
>> >
>> > **routeId**
>> >
>> >> `<ID výše vytvořeného směrování>`
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


### Aplikace provedených úprav

Úpravy provedené na Vaší službě OVH Load Balancer musí být *explicitně aplikovány* v každé zóně nakonfigurované pro Vaši službu. Jednině tak budou pro návštěvníky Vašich webových stránek viditelné. Díky tomu lze provádět komplexní změny konfigurace naráz.

Pokud disponujete několika zónami, musíte aplikovat stejnou konfiguraci pro každou z nich.


#### Prostřednictvím API

Obnovení zóny:

> [!faq]
>
> Služba:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Parametry:
>
>> > **serviceName** *
>> >
>> >> `<Load Balancer ID>`
>> >
>> > **zone**
>> >
>> >> `<zóna, v níž má být konfigurace aplikována>`
>

### Potvrzení

Pokud jste provedli výše uvedené kroky, disponujete nyní fungující službou pro redistribuci datové zátěže pro své HTTP/2 servery. Následně můžete potvrdit stav své služby. Chcete-li to provést, zašlete dotaz na svůj OVH Load Balancer a zkontrolujte verzi odpovědi:

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.