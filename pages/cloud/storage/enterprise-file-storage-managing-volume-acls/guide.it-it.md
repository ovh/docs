---
title: Enterprise File Storage - Gestire le ACL di un volume
slug: netapp-volume-acl
excerpt: Come gestire le ACL di un volume Enterprise File Storage utilizzando le API OVHcloud
section: Enterprise File Storage
order: 4
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.

**Ultimo aggiornamento: 27/10/2021**

## Obiettivo

Questa guida ti mostra come gestire le ACL di un volume con l'offerta OVHcloud Enterprise File Storage.

**Questa guida ti mostra come recuperare le ACL (Access Control List) del tuo volume, creare una nuova ACL e eliminare una ACL esistente dalle API OVHcloud.**

## Prerequisiti

- Disporre di una soluzione OVHcloud Enterprise File Storage con un volume
- Essere connesso alla pagina delle [API OVHcloud](https://api.ovh.com/)

## L'essenziale

Le ACL consentono di autorizzare o limitare l'accesso a un volume.

> [!warning]
>
> Di default, l'accesso a un volume appena creato è limitato. Per consentire l'accesso è necessario creare un'ACL.
>

Utilizzando le ACL, puoi autorizzare un indirizzo IP o una gamma di indirizzi IP (notazione CIDR) ad accedere al tuo volume.

## Procedura

Tutte le rotte API utilizzate per questa guida sono disponibili nella sezione */storage*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Quando si utilizza l'API, tutti i campi contrassegnati con un asterisco (\*) sono obbligatori.
>

### Elencare le ACL

Tutte le ACL esistenti di un volume possono essere recuperate utilizzando la seguente via API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>>
>> >> ID del servizio
>>
>> > **shareId** *
>>
>> >> ID del volume
>

Sostituisci `serviceName` con l'ID del tuo servizio e `shareId` con l'ID del volume.

Quando utilizzi questa chiamata API per un nuovo volume, non è necessario che ti venga restituita alcuna ACL di default.

### Autorizza l'accesso a un volume con una ACL

Per creare una nuova ACL, utilizza la via API seguente:

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
>>
>> >> ID del servizio
>>
>> > **shareId** *
>>
>> >> ID del volume
>>
>> > **NetAppShareACLRule** *
>>
>> >> **accessLevel** *
>> >>
>> >> > Livello di accesso ACL. Può essere **rw** (lettura e scrittura) o **ro** (sola lettura).
>> >>
>> >> **accessTo** *
>> >>
>> >> > Indirizzo IP o intervallo di indirizzi IP in notazione CIDR.
>

Sostituisci `serviceName` con l'ID del tuo servizio e `shareId` con l'ID del volume.

Scegli il livello di accesso che vuoi autorizzare: o `ro` (sola lettura) o `rw` (lettura e scrittura).

Infine, sostituisci `accessTo` con l'indirizzo IP a partire dal quale vuoi autorizzare le connessioni.

### Elimina una ACL

L'eliminazione di un'ACL impedisce l'accesso successivo a partire dagli indirizzi IP specificati.

Per eliminare una ACL, utilizza la rotta API seguente:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
>> >
>>
>
> Impostazioni:
>
>> > **serviceName** *
>>
>> >> ID del servizio
>>
>> > **shareId** *
>>
>> >> ID del volume
>>
>> > **aclRuleId** *
>>
>> >> ID ACL
>

Sostituisci `serviceName` con l'ID del tuo servizio e `shareId` con l'ID del volume.

Puoi ottenere il `aclRuleId` a partire dalla risposta ottenuta durante la creazione dell'ACL o dall'elenco delle ACL esistenti del tuo volume.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
