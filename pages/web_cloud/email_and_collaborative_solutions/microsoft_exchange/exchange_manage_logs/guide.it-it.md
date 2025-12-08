---
title: Exchange - Come gestire i log
excerpt: Scopri come visualizzare e gestire i log sulla tua offerta Private Exchange o Trusted Exchange
updated: 2025-10-28
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Obiettivo 

I log corrispondono agli eventi verificatisi su un sistema informatico (server, computer, applicazione, sito web, database, rete informatica, ecc.). Per esempio, i log possono registrare e contenere uno o più elementi tra i seguenti:

- L'orario (data, ora, minuto, secondo) dell'evento.
- La natura dell'evento (connessione, disconnessione, errore, download, upload, allerta, ecc.).
- Informazioni aggiuntive sull'evento (pagine o file consultati, applicazioni avviate, server remoti chiamati, nome di un file caricato o scaricato, ecc.).
- L'origine dell'evento (identificativo dell'utente, indirizzo IP sorgente, programma sorgente, ecc.).
- Lo stato del sistema al momento dell'evento (risorse disponibili, memoria rimanente, utilizzo della CPU, ecc.).

In generale, i log vengono generati direttamente dai sistemi informatici sui quali si verificano gli eventi. Vengono memorizzati e archiviati in file di testo, noti anche come file log.

I file log permettono di effettuare le seguenti azioni:

- Analizzare il comportamento del sistema informatico che genera i log.
- Individuare gli errori verificatisi sul sistema informatico.
- Risolvere gli errori riscontrati sul sistema informatico.
- Ottimizzare il funzionamento e le prestazioni del sistema informatico.

La tua offerta Private Exchange o Trusted Exchange genera quindi i propri log. Potresti dover consultare o recuperare i log per analizzare gli accessi alle tue caselle di posta elettronica o seguire i flussi di posta elettronica.

**Scopri come visualizzare e gestire i log sulla tua offerta Private Exchange o Trusted Exchange**

## Prerequisiti

- Avere sottoscritto un'offerta [Private Exchange](/links/web/emails-hosted-exchange) o [Trusted Exchange](/links/web/emails-trusted-exchange).
- Un account Logs Data Platform (LDP). Questa guida ti guiderà in tutte le fasi necessarie: [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Essere connesso al tuo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

### Visualizzare i log della tua piattaforma Exchange in tempo reale

Per accedere ai log in tempo reale sulla tua offerta Private o Trusted Exchange, segui le seguenti istruzioni:

1. Accedi al tuo [Spazio Cliente OVHcloud](/links/manager).
1. Vai alla sezione `Web Cloud`{.action}.
1. Nella sezione `MICROSOFT`, clicca su `Exchange`{.action}.
1. Seleziona la piattaforma interessata.
1. A destra della serie di schede, clicca sulla scheda `Altre opzioni`{.action} e poi su `Log`{.action}.

![exchange - logs](images/exchange-logs01.png){.thumbnail}

> [!warning]
>
> Poiché si tratta di una console in tempo reale, i log appaiono solo quando sei sulla scheda `Log`{.action}. Se esci dalla scheda `Log`{.action} e ci torni sopra, l'history precedente sarà scomparsa.

I servizi Exchange offrono 2 tipi di log:

- **Access** : Permette di consultare l'attività delle connessioni sul tuo servizio Exchange.
- **Messagetracking** : Permette di consultare i log dettagliati del flusso di posta elettronica che attraversa il tuo servizio Exchange. Troverai le seguenti informazioni:
    - lo stato di consegna delle e-mail sui tuoi account Exchange;
    - lo stato di invio delle e-mail dal tuo servizio Exchange;
    - la dimensione delle e-mail trasmesse;
    - ecc.

### Integrare i log della tua soluzione Exchange su Logs Data Platform

La soluzione Logs Data Platform può rivelarsi utile se disponi di un'infrastruttura importante o se i tuoi servizi generano una grande quantità di log. Infatti, questa piattaforma è progettata per facilitare l'aggregazione e la gestione dei log.

Funziona recuperando i log generati dalla tua infrastruttura, dai tuoi siti web o applicazioni per, ad esempio:

- memorizzarli;
- visualizzarli in dashboard in tempo reale;
- permettere agli utenti di effettuare query complesse;
- filtrarli per data, applicazione, tipo o contenuto.

> [!primary]
>
> Per ulteriori dettagli su Logs Data Platform, consulta la nostra guida introduttiva a [Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

Le soluzioni Exchange sono compatibili con diversi servizi come l'hosting condiviso, i VPS e i server dedicati. Possono inoltre essere completate da flussi di dati su Logs Data Platform, in aggiunta ai log in tempo reale già disponibili.

Per abbonare i log della tua soluzione Exchange a un flusso di dati su Logs Data Platform, effettua le seguenti azioni:

1. Accedi al tuo [Spazio Cliente OVHcloud](/links/manager).
1. Vai alla sezione `Web Cloud`{.action}.
1. Nella sezione `MICROSOFT`, clicca su `Exchange`{.action}.
1. Seleziona la piattaforma interessata.
1. A destra della serie di schede, clicca sulla scheda `Altre opzioni`{.action} e poi su `Log`{.action}.
1. A destra del riquadro in cui vengono visualizzati i tuoi log in tempo reale, clicca sul pulsante `Abbonati`{.action}.

![exchange - logs](images/exchange-logs02.png){.thumbnail}

Dalla pagina che appare, seleziona l'account Logs Data Platform desiderato nel menu a discesa posto sopra la tabella.

![exchange - logs](images/exchange-logs03.png){.thumbnail}

Si presentano due casi per abbonare la tua soluzione Exchange:

> [!tabs]
> **Caso n°1**
>> **Iscriversi a un flusso già esistente sulla tua soluzione Logs Data Platform**
>>
>> Se il flusso esiste già, apparirà come una riga nella tabella. In questo caso specifico, per abbonare la tua soluzione Exchange a questo flusso esistente, basta cliccare sul pulsante `Abbonati`{.action} a destra della riga corrispondente al flusso.
>>
>> Dopo pochi istanti e se rimani sulla stessa pagina, apparirà un messaggio nel tuo Spazio Cliente per indicarti che l'abbonamento è stato creato con successo.
>>
> **Caso n°2**
>> **Iscriversi a un nuovo flusso di dati sulla tua soluzione Logs Data Platform**
>>
>> Se il flusso non esiste ancora, clicca sul pulsante `Aggiungi un flusso di dati`{.action}. Verrai quindi reindirizzato a una nuova pagina del tuo Spazio Cliente OVHcloud, dove potrai creare un nuovo flusso di dati sulla tua soluzione Logs Data Platform.
>>
>> Consulta le nostre guide « [Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) » e « [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » per effettuare questa azione.
>>
>> Una volta compilato il modulo, clicca sul pulsante `Salva`{.action}.
>>
>> ![exchange - logs](images/exchange-logs04.png){.thumbnail}
>>
>> Verrai quindi reindirizzato alla scheda `Flusso di dati`{.action} della tua soluzione Logs Data Platform.
>>
>> Puoi ora abbonare la tua soluzione Exchange al tuo nuovo flusso Logs Data Platform seguendo le istruzioni all'inizio del capitolo.

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (posizionamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

[Primi passi con il servizio Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)

[Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

Se desideri ricevere un supporto sull'utilizzo e la configurazione delle tue soluzioni OVHcloud, ti invitiamo a consultare le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).