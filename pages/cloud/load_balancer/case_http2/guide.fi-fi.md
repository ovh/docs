---
deprecated: true
title: HTTP/2-protokollan konfigurointi OVH:n Kuormantasaajaan
slug: lb-http2
excerpt: HTTP/2-protokollan konfigurointi OVH:n Kuormantasaajaan
section: Käyttötapaukset
---

**Päivitetty 16.01.2018**

## Tavoite

OVH:n Kuormantasaaja ei tue tällä hetkellä HTTP/2-protokollaa. On kuitenkin olemassa keino, jolla tämän rajoituksen voi kiertää. Se onnistuu käyttämällä yhdessä TCP-tilaa sekä TLS-protokollan ALPN-lisäosaa.


ALPN (Application-Layer Protocol Negotiation) on TLS-lisäosa, jonka avulla sovelluskerros voi valita, mitä protokollaa käytetään (tässä tapauksessa h2).

**Tämän ohjeen tarkoituksena on auttaa luomaan HTTP/2-palvelu OVH:n Kuormantasaajan kanssa. Konfiguroimme tämän palvelun kuorman jakamiseksi useille HTTP/2-protokollaan vastaaville palvelimille.**


## Edellytykset

- TCP-frontend on luotu
- TCP-palvelinfarmi on luotu ja siihen on lisätty palvelimia


## Käytännössä

> [!warning]
>
> On tärkeää luoda elementit oikeassa järjestyksessä. Reittien on oltava konfiguroituina ennen kuin niihin voidaan liittää sääntöjä.
> 


### Reitin lisääminen

Lisäämme palveluumme reitin.


#### API-ohjelmiston kautta

> [!faq]
>
> Palvelu:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Asetukset:
>
>> > **serviceName***
>> >
>> >> `<Kuormantasaajan tunnus>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<HTTP/2-protokollan hallitsevan tcp-farmisi tunniste>`
>> >
>> > **frontendId**
>> >
>> >> `<tcp-frontend-443-tunniste>`
>


### Säännön lisääminen

Seuraavaksi lisäämme säännön reittiimme.



#### API-ohjelmiston kautta

> [!faq]
>
> Palvelu:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Asetukset:
>
>> > **serviceName** *
>> >
>> >> `<Kuormantasaajan tunnus>`
>> >
>> > **routeId**
>> >
>> >> `<yllä luodun reitin tunnus>`
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


### Ota muokkaukset käyttöön

OVH:n Kuormantasaajaan tehtyjä muutoksia on *sovellettava nimenomaisesti* jokaisella konfiguroidulla alueella palvelussasi. Ainoastaan sillä hetkellä ne tulevat näkyville vierailijoillesi. Tämän ansiosta voidaan suorittaa monimutkainen konfiguraation muutos yhdellä kertaa.

Jos sinulla on useita alueita, sinun on sovellettava samaa konfiguraatiota niihin jokaiseen.


#### API-ohjelmiston kautta

Virkistä alue:

> [!faq]
>
> Palvelu:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Asetukset:
>
>> > **serviceName** *
>> >
>> >> `<Kuormantasaajan tunnus>`
>> >
>> > **zone**
>> >
>> >> `<alue, jossa konfiguraatio otetaan käyttöön>`
>

### Vahvista

Kaikkien näiden vaiheiden jälkeen sinulla on nyt toimiva kuormantasauspalvelu HTTP/2-palvelimillesi. Voit siis vahvistaa palvelun tilan tekemällä kyselyn OVH:n Kuormantasaajalle ja tarkistamalla vastauksen version:

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://www.ovh-hosting.fi/community/foorumi>.