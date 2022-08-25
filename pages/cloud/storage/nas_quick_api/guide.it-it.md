---
title: NAS-HA - Iniziare a utilizzare le API
slug: nas/nas-quickapi
excerpt: Come eseguire le prime operazioni su un servizio NAS-HA utilizzando l'API OVHcloud
section: NAS
order: 06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 20/07/2022**

## Obiettivo

Il servizio NAS-HA OVHcloud ti permette di gestire lo storage di file accessibile da una rete. 

**Questa guida ti mostra come utilizzare il tuo servizio NAS-HA tramite l'API OVHcloud.**

## Prerequisiti

- Un servizio [NAS-HA OVHcloud](https://www.ovh.it/nas/)
- Consulta la nostra guida sui [primi passi con l'API OVHcloud](../../api/first-steps-with-ovh-api/) per familiarizzare con l'APIv6 OVHcloud

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
> @api {GET} /dedicated/nasha
>

### Crea una partizione

Per creare una nuova partizione, utilizza la seguente strada:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>> >
>> >> Il nome interno del tuo servizio NAS
>> >
>> > **partitionDescription** 
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

### Aggiunta di un accesso ACL per accedere alla partizione

> [!warning]
>
> L'accesso è rifiutato di default a meno che non sia concesso tramite l'ACL. Possono essere aggiunti solo gli indirizzi IP associati ai tuoi servizi OVHcloud.
>

Puoi verificare gli indirizzi IP che possono essere ammessi ad un accesso tramite queste chiamate API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
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

Per creare un nuovo accesso ACL che ti permetta di connetterti alla tua partizione, utilizza la seguente strada:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > **ip** *
>> >
>> >> L'indirizzo IP o la gamma a cui deve essere concesso l'accesso
>> >
>> > **type** *
>> >
>> >> Tipo di accesso ACL per questo record: *readonly* o *readwrite*
>

> [!primary]
>
> Utilizza il rating CIDR per gli intervalli IP, ad esempio: 192.0.2.0/24.
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

### Elimina una partizione

Per eliminare una partizione, utilizza questa pagina:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}
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

[Eseguire il mount di un NAS tramite NFS](https://docs.ovh.com/it/storage/nas-nfs/)

[Configura il tuo NAS su Windows Server tramite CIFS](../nas-cifs/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.