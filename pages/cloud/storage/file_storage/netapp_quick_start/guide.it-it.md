---
title: Enterprise File Storage - Iniziare a utilizzare le API
slug: netapp/quick-start
excerpt: Iniziare a utilizzare la soluzione Enterprise File Storage con le API OVHcloud
section: Enterprise File Storage
order: 2
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 27/10/2021**

## Obiettivo

In questa guida, scopri come iniziare a utilizzare la soluzione Enterprise File Storage.

**Questa guida ti mostra come recuperare le informazioni relative alla tua offerta e creare il tuo primo volume utilizzando le API OVHcloud.**

## Prerequisiti

- Disporre di una soluzione OVHcloud Enterprise File Storage
- Essere connesso alla pagina delle [API OVHcloud](https://api.ovh.com/)
- Saper [eseguire il mount di un NAS tramite NFS](https://docs.ovh.com/it/storage/nas-nfs/)

## L'essenziale

L'offerta OVHcloud Enterprise File Storage permette di creare volumi e gestire così la condivisione di file accessibili su una rete.

È possibile scegliere la dimensione dei volumi, gestire gli accessi tramite ACL o creare Snapshot (copia istantanea del volume).

## Procedura

Tutte le API utilizzate per questa guida sono disponibili nella sezione */storage*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Quando si utilizzano le API, tutti i campi contrassegnati con un asterisco (\*) sono obbligatori.
>

### Recupera le informazioni del tuo servizio

Tutti i tuoi servizi attivi possono essere recuperati utilizzando la rotta API seguente:

> [!api]
>
> @api {GET} /storage/netapp
>

### Crea un nuovo volume

Un volume è un'unità di storage con dimensioni e protocollo.

Per creare un volume, utilizza la rotta API seguente:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> ID del servizio
>> >
>> > **NetAppShare** *
>> >
>> >> **description**
>> >>
>> >> > Descrizione del volume
>> >>
>> >> **name**
>> >>
>> >> > Nome del volume
>> >>
>> >> **protocol** *
>> >>
>> >> > Protocollo utilizzato dal volume
>> >>
>> >> **size**
>> >>
>> >> > Dimensione in GB del volume
>

Seleziona il protocollo `NFS` e una dimensione di `10` gigabyte, ad esempio.

### Aggiungi un'ACL al volume

Le ACL consentono di autorizzare o rifiutare l'accesso a un volume.

> [!warning]
>
> Il comportamento di default consiste nel rifiutare l'accesso a un nuovo volume.
>

Dopo aver creato un volume, è necessario creare una nuova ACL per accedervi.

Per creare una nuova ACL che ti permetterà di connetterti al tuo volume, utilizza la rotta API seguente:

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
>> > **NetAppShareACLRule** *
>> >
>> >> **accessLevel** *
>> >>
>> >> > Livello di accesso ACL. Può essere **rw** (lettura e scrittura) o **ro** (sola lettura).
>> >>
>> >> **accessoTo** *
>> >>
>> >> > Indirizzo IP o intervallo di indirizzi IP in notazione CIDR.
>

> [!primary]
>
> Utilizzando il rating CIDR, potrai autorizzare l'accesso al volume dal range di indirizzi IP X.X.X.X/X.
> Ad esempio: 192.0.2.0/24
>

### Montare il volume

Verifica lo stato di creazione dell'ACL utilizzando la seguente via API:

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
>> > **aclRuleId** *
>> >
>> >> ID ACL
>

Sostituisci `aclRuleId` con l'ID dell'ACL creata per il tuo volume.

> [!primary]
>
> Lo stato ACL deve essere `active`.
>

Una volta attivata l'ACL, recupera i percorsi di accesso del volume utilizzando questa API:

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

Per il tuo volume saranno disponibili uno o più accessi.

A questo punto puoi eseguire il mount del volume con questo comando:

```sh
mount -t nfs accessPath
```

> [!primary]
>
> Se utilizzi Linux, il pacchetto `nfs-utils` deve essere installato.
>

Una volta montato, il tuo volume è utilizzabile per archiviare i tuoi file.

### Elimina il volume

Puoi eliminare il tuo volume utilizzando la strada API seguente:

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

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
