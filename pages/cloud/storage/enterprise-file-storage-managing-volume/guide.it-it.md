---
title: Enterprise File Storage - Gestisci i tuoi volumi
slug: netapp-volumes
excerpt: Come creare e gestire i tuoi volumi OVHcloud Enterprise File Storage utilizzando le API OVHcloud
section: Enterprise File Storage
order: 3
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 27/10/2021**

## Obiettivo

Questa guida ti mostra come gestire i volumi del servizio OVHcloud Enterprise File Storage.

**Questa guida ti mostra come recuperare i volumi esistenti e il loro punto di mount, creare un nuovo volume o eliminare un volume esistente dalle API OVHcloud.**

## Prerequisiti

- Disporre di una soluzione OVHcloud Enterprise File Storage
- Essere connesso alla pagina delle [API OVHcloud](https://api.ovh.com/)

## L'essenziale

Un volume è un file system condiviso persistente, accessibile in lettura e/o scrittura.

Può anche avere un nome e una descrizione (facoltativo).

> [!warning]
>
> Di default, l'accesso a un volume appena creato è limitato. Per consentire l'accesso è necessario creare un'ACL.
>

## Procedura

Tutte le rotte API utilizzate per questa guida sono disponibili nella sezione */storage*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Quando si utilizzano le API, tutti i campi contrassegnati con un asterisco (\*) sono obbligatori.
>

### Elencare i volumi

Per visualizzare i volumi di un servizio, utilizza la rotta API seguente:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> ID del servizio
>> >
>

Sostituisci il `serviceName` con l'ID del tuo servizio.

### Recupera le informazioni di un volume

Per recuperare le informazioni relative a un volume, utilizza la via API seguente:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}
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
>

Sostituisci `serviceName` con l'ID del tuo servizio e `shareId` con l'ID del volume.

### Creare un volume

Per creare un nuovo volume, utilizza la strada API seguente:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp{serviceNme}/share
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> ID del servizio
>> >
>

Sostituisci il `serviceName` con l'ID del tuo servizio.

Scegli il protocollo `NFS` per il tuo nuovo volume (proprietà `protocol`) e la sua dimensione (proprietà `size`).
Puoi anche specificare un nome e una descrizione con le proprietà `name` e `descrizione`.

### Mostra i punti di mount di un volume

Per conoscere il percorso di montaggio di un volume, utilizza la seguente via API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp{serviceName}/share/{shareId}/accessPath
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
>

Sostituisci `serviceName` con l'ID del tuo servizio e `shareId` con l'ID del volume.

Le strade di montaggio restituite possono essere utilizzate per montare il volume.

Il comando di montaggio sarà diverso, a seconda del protocollo scelto per il volume.  

> [!primary]
>
> Per NFS, le istruzioni per l'installazione sono riportate nella guida [Montare il tuo NAS tramite una cartella condivisa NFS](https://docs.ovh.com/it/storage/nas-nfs/).
> Ti ricordiamo che il percorso di mount recuperato sostituisce IP_NAS/NFS_PATH in questa guida.
>  

### Elimina un volume

Per eliminare un volume, utilizza la rotta API seguente:  

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

Sostituisci `serviceName` con l'ID del tuo servizio e `shareId` con l'ID del volume da eliminare.

## Per saperne di più

[Iniziare a utilizzare le API OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
