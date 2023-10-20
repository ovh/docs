---
title: NAS-HA - Gestione delle partizioni tramite API
excerpt: Come gestire le partizioni NAS-HA tramite l'API OVHcloud
updated: 2022-07-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il servizio NAS-HA OVHcloud ti permette di gestire uno storage di file accessibile da una rete.

**Questa guida ti mostra come gestire le partizioni del tuo servizio NAS-HA tramite l'API OVHcloud.**

## Prerequisiti

- Un servizio [NAS-HA OVHcloud](https://www.ovh.it/nas/)
- Consulta la nostra guida sui [primi passi con l'API OVHcloud](/pages/manage_and_operate/api/first-steps) per familiarizzare con l'APIv6 OVHcloud

## Procedura

Tutte le rotte API di questa guida sono disponibili nella sezione */dedicated/nasha*: <https://api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> Quando si utilizza l'API, tutti i campi contrassegnati con un asterisco (\*) sono obbligatori.
>

### Recupera informazioni sul tuo servizio

Tutti i tuoi servizi attivi possono essere recuperati utilizzando la strada seguente:

> [!api]
>
> @api {v1} /dedicated/nasha GET /dedicated/nasha
>

### Elenco di tutte le partizioni

Per recuperare le partizioni di un servizio, utilizza la seguente rotta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS-HA
>

### Recupera le proprietà di una partizione

Per visualizzare i dettagli di una partizione, utilizza questa strada:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}
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

### Recupero delle statistiche di una partizione

Per recuperare le informazioni relative all'utilizzo di una partizione, utilizza questa pagina:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/use
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
>> > **type** *
>> >
>> >> Il tipo di statistica da recuperare: *size*, *used* o *usedbysnapshot*
>

### Crea una partizione

Per creare una nuova partizione, utilizza la seguente strada:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS
>> >
>> > **partizioneDescrizione** 
>> >
>> >> Descrizione facoltativa
>> >
>> > **partitionName** *
>> >
>> >> Un nome per la partizione
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS* o *NFS_CIFS* per entrambi 
>> >
>> > **size** *
>> >
>> >> La dimensione della partizione
>

Scegli `NFS` come protocollo e una dimensione di `10` Gigabyte, ad esempio.

### Modifica le proprietà di una partizione

Per modificare una partizione, utilizza questa pagina:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha PUT /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>> >
>> > **partizioneDescrizione**
>> >
>> >> La nuova descrizione
>> >
>> > **size**
>> >
>> >> La nuova dimensione della partizione
>

### Recupera le impostazioni ZFS di una partizione

Per recuperare i parametri ZFS, utilizza questa rotta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS
>> >
>> > **partitionName** *
>> >
>> >> Nome della partizione
>

### Modifica dei parametri ZFS di una partizione

> [!warning]
>
> Tutti i parametri ZFS di default sono ottimizzati. Non è consigliato modificare questi parametri.
>

Per modificare i parametri ZFS, utilizza questa rotta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/options
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
>> > **atime**
>> >
>> >> Parametro di aggiornamento dei tempi di accesso: *on* (default) o *off*
>> >
>> > **recordsize**
>> >
>> >> Dimensione massima del blocco: *131072* (di default), *16384*, *32768*, *4096*, *65536* o *8129*
>> >
>> > **sync**
>> >
>> >> Parametro di sincronizzazione del file: *always*, *disabled* o *standard* (valore predefinito)
>

### Elimina una partizione

Per eliminare una partizione, utilizza questa pagina:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
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

## Per saperne di più

[Eseguire il mount di un NAS tramite NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[Configura il tuo NAS su Windows Server tramite CIFS](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.