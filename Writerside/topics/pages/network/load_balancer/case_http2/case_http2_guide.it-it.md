---
title: 'Configurare HTTP/2 su OVH Load Balancer'
excerpt: 'Configurazione di HTTP/2 su OVH Load Balancer'
updated: 2018-01-15
---

## Obiettivo

Attualmente, OVH Load Balancer non supporta il protocollo HTTP/2, ma esiste un modo per aggirare questo limite utilizzando contemporaneamente la modalità TCP e l'estensione ALPN del protocollo TLS.

L’ALPN (Application-Layer Protocol Negotiation) è un'estensione TLS che consente al livello di applicazione di negoziare quale protocollo verrà utilizzato (protocollo h2 nel nostro caso).

**Questa guida ti mostra creare un servizio HTTP/2 con Load Balancer OVH. In questo caso, configuriamo questo servizio per distribuire il carico su diversi server che rispondono in HTTP/2.**

## Prerequisiti

- Disporre di un [Load Balancer OVH](https://www.ovh.it/soluzioni/load-balancer/){.external}
- Aver creato un front-end TCP
- Aver creato una farm TCP e aver aggiunto i server
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

> [!warning]
>
> L'ordine in cui vengono creati gli elementi è importante: prima di poter essere associati a delle regole, i percorsi devono essere configurati.
> 

### Step 1: aggiungi un percorso

Di seguito andiamo a mostrare come aggiungere un percorso al servizio.

#### Tramite l'API

> [!faq]
>
> Servizio:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> `<identificativo del Load Balancer>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<id della farm TCP che deve gestire l’HTTP/2>`
>> >
>> > **frontendId**
>> >
>> >> `<identificativo del tuo front-end TCP 443>`
>

### Step 2: aggiungi una regola

Ora vediamo come aggiungere una regola al percorso appena creato.

#### Tramite l'API

> [!faq]
>
> Servizio:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> `<identificativo del Load Balancer>`
>> >
>> > **routeId**
>> >
>> >> `<identificativo del percorso precedentemente creato>`
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

### Step 3: applica le modifiche

Le modifiche effettuate su OVH Load Balancer devono essere *espressamente applicate* a tutte le zone configurate: solo così saranno visibili ai visitatori. Questo consente di modificare le impostazioni in modo complesso in una sola volta.

Se disponi di più zone, dovrai applicare la stessa configurazione a ogni zona.

#### Tramite l'API

Aggiornamento di una zona:

> [!faq]
>
> Servizio:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> `<identificativo del Load Balancer>`
>> >
>> > **zone**
>> >
>> >> `<zona in cui distribuire la configurazione>`
>

### Step 4: verifica lo stato del servizio

Dopo tutti questi passaggi, Load Balancer dovrebbe essere operativo per i tuoi server HTTP/2. A questo punto verifica e conferma lo stato del servizio inviando una richiesta al tuo OVH Load Balancer e verificandone la risposta:

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.