---
title: Enterprise File Storage - Gestire gli Snapshot di un volume
slug: netapp/volume-snapshots
excerpt: Come gestire gli Snapshot di un volume Enterprise File Storage utilizzando le API OVHcloud
section: Enterprise File Storage
order: 5
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 27/10/2021**

## Obiettivo

Questa guida ti mostra come gestire gli Snapshot dei volumi del servizio OVHcloud Enterprise File Storage.

**Questa guida ti mostra come recuperare gli Snapshot esistenti, creare un nuovo Snapshot, recuperare le informazioni dettagliate relative a uno Snapshot e rimuovere uno Snapshot utilizzando le API OVHcloud.**

## Prerequisiti

- Disporre di una soluzione OVHcloud Enterprise File Storage con un volume
- Essere connesso alla pagina delle [API OVHcloud](https://api.ovh.com/)

## L'essenziale

Uno Snapshot di un volume è una copia in un istante specifico e in sola lettura di un volume.

Gli Snapshot vengono creati a partire da un volume operativo.

> [!warning]
>
> Gli Snapshot sono associati a un volume e non possono esistere senza di esso.
>

## Procedura

Tutte le API utilizzate per questa guida sono disponibili nella sezione */storage*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Quando si utilizzano le API, tutti i campi contrassegnati con un asterisco (\*) sono obbligatori.
>

### Elencare gli Snapshot

Tutti gli Snapshot esistenti di un volume possono essere recuperati utilizzando la seguente via API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>>
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> ID del servizio
>> >
>> > **shareId** *
>> >
>> >> ID del volume
>

Sostituisci `serviceName` con l'ID del tuo servizio e `shareId` con il tuo ID del volume.

Di default, non è necessario che gli Snapshot vengano restituiti per un nuovo volume.

### Crea uno Snapshot a partire da un volume

Per creare uno snapshot, utilizza la rotta API seguente:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> ID del servizio
>> >
>> > **shareId** *
>> >
>> >> ID del volume
>> >
>> > **NetAppShareSnapshot**
>> >
>> >> **description**
>> >>
>> >> > Descrizione dello Snapshot
>> >>
>> >> **name**
>> >>
>> >> > Nome dello Snapshot
>

Sostituisci `serviceName` con l'ID del tuo servizio e `shareId` con l'ID del volume.

I parametri `name` e la `descrizione` dello Snapshot sono facoltativi.

### Recupera le informazioni di uno snapshot

Per recuperare le informazioni relative a uno Snapshot, utilizza la seguente via API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> ID del servizio
>> >
>> > **shareId** *
>> >
>> >> ID del volume
>> >
>> > **snapshotId** *
>> >
>> >> ID dello snapshot
>

Sostituisci `serviceName` con l'ID del tuo servizio, `shareId` con l'ID del volume e `snapshotId` con l'ID dello Snapshot.

### Elimina uno Snapshot

Per eliminare uno snapshot, utilizza la rotta API seguente:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> ID del servizio
>> >
>> > **shareId** *
>> >
>> >> ID del volume
>> >
>> > **snapshotId**
>> >
>> >> ID dello snapshot
>

Sostituisci `serviceName` con l'ID del tuo servizio, `shareId` con l'ID del volume e `snapshotId` con l'ID dello Snapshot da eliminare.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
