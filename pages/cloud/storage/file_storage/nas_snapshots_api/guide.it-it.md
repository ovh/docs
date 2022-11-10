---
title: NAS-HA - Gestisci gli Snapshot via API
slug: nas/snapshots-api
excerpt: Come gestire gli snapshot del NAS-HA via API OVHcloud
section: NAS-HA
order: 09
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 20/07/2022**

## Obiettivo

I NAS-HA OVHcloud permettono di creare e gestire volumi di file accessibili da una rete. 

**Questa guida ti mostra come gestire gli snapshot di una partizione NAS-HA via API OVHcloud.**

## Prerequisiti

- Un servizio [NAS-HA OVHcloud](https://www.ovh.it/nas/)
- Consulta la nostra guida sui [primi passi con l'API OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/) per familiarizzare con l'APIv6 OVHcloud

## Procedura

> [!primary]
> Accedi alla [pagina delle FAQ NAS-HA](https://docs.ovh.com/it/storage/faq-nas/) per recuperare tutte le informazioni relative alla funzione Snapshot.
>

Tutte le rotte API di questa guida sono disponibili nella sezione */dedicated/nasha*: <https://api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> Quando si utilizza l'API, tutti i campi contrassegnati con un asterisco (\*) sono obbligatori.
>

### Recupera informazioni sul tuo servizio

Tutti i tuoi servizi attivi possono essere recuperati utilizzando la strada seguente:

> [!api]
>
> @api {GET} /dedicated/nasha
>

Di default, uno Snapshot dei tuoi dati ha luogo ogni ora e viene salvato sul tuo NAS-HA. È possibile attivare altre strategie di Snapshot per creare Snapshot a frequenze predefinite.

### Recupera la pianificazione automatica degli Snapshot

Per visualizzare la pianificazione dello Snapshot automatico attivo, utilizza questa strada:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>

### Aggiunta di un intervallo di snapshot automatico

Per creare Snapshot automatici aggiuntivi con una frequenza selezionata, utilizza questa strada:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>> >
>> > **snapshotType** *
>> >
>> >> Una frequenza per lo Snapshot: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

### Recupero delle informazioni sugli Snapshot automatici

Per recuperare i dettagli di uno Snapshot automatico, utilizza questa strada:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>> >
>> > **snapshotType** *
>> >
>> >> La frequenza degli Snapshot interessati: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

### Elimina un intervallo di snapshot automatico

Per eliminare una frequenza di snapshot automatico, utilizza questo servizio:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>> >
>> > **snapshotType** *
>> >
>> >> La frequenza degli Snapshot interessati: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

È inoltre possibile utilizzare Snapshot istantanei con il tuo NAS-HA (Snapshot personalizzati) tramite questi endpoint.

### Lista degli Snapshot personalizzati

Per recuperare gli Snapshot personalizzati esistenti, utilizza questa pagina:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>

### Crea uno Snapshot manuale

Per aggiungere uno Snapshot manuale, utilizza la seguente strada:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>> >
>> > **expiration**
>> >
>> >> Una data di scadenza facoltativa, ad esempio: 2022-06-24 (ISO 8601)
>> >
>> > **name** *
>> >
>> >> Nome dello snapshot
>

### Recupera le informazioni di uno Snapshot personalizzato

Per visualizzare i dettagli di uno Snapshot personalizzato, utilizza questa strada:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>> >
>> > **name** *
>> >
>> >> Il nome dello snapshot
>

### Elimina uno Snapshot personalizzato

Per eliminare uno Snapshot personalizzato, utilizza questa strada:

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
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>> >
>> > **name** *
>> >
>> >> Il nome dello snapshot
>

##### **Ripristino degli Snapshot**

L'API non consente di ripristinare gli Snapshot effettuati. Gli Snapshot sono salvati in sola lettura sulla partizione.

Per accedere agli snapshot dal tuo punto di mount, devi accedere alla directory `.zfs/snapshot` della tua partizione.

Ad esempio, su un servizio con ID `zpool-123456`, contenente una partizione chiamata `partition1` e di cui hai creato uno snapshot chiamato `snapshot01`. Per visualizzare lo Snapshot esegui questo comando:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Per ripristinare lo Snapshot, copia dal percorso di accesso del file `.zfs` alla nuova cartella in cui vuoi ripristinare lo Snapshot. Puoi utilizzare uno strumento come rsync che ti permette di effettuare interventi di ripristino.

Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.

## Per saperne di più

[Eseguire il mount di un NAS tramite NFS](https://docs.ovh.com/it/storage/file-storage/nas/nfs/)

[Configura il tuo NAS su Windows Server tramite CIFS](https://docs.ovh.com/it/storage/file-storage/nas/cifs/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.