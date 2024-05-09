---
title: Limiti di velocità delle API Public Cloud
excerpt: "Scopri i limiti e le restrizioni per l'API Public Cloud"
updated: 2023-06-23
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Cos'è un limite di flusso?

Un limite di addebito è una restrizione applicata dall'API al numero di richieste che un cliente può fare all'API in un determinato periodo.

## Perché imporre dei limiti?

I limiti di flusso sono una pratica corrente per le API. Sono state create per diversi motivi:

- ci aiutano a proteggere il backend dell'API contro gli abusi o i cattivi utilizzi dell'API;
- garantiscono una migliore qualità di servizio sull'API grazie ad un accesso equo all'API.

Ad esempio, uno script difettoso o mal ottimizzato potrebbe tentare di utilizzare l'API in modo eccessivo, il che potrebbe causare problemi di performance a livello del backend dell'API. 

Fissando limiti di flusso, assicuriamo che l'API possa mantenere un'esperienza fluida e coerente per tutti i clienti.

## Quali sono i limiti di velocità per la nostra API?

### Keystone (API d'identità OpenStack)

OVHcloud applica limiti di flusso a livello di **utente** OpenStack.

Un utente può effettuare **60 richieste al minuto** prima di ricevere una risposta HTTP 429.

### Nova (API di calcolo OpenStack)

OVHcloud applica limiti di velocità a livello di **progetto** OpenStack.

Un progetto può effettuare **20 richieste al secondo** prima di ricevere una risposta HTTP 429.

### Neutron (API di rete OpenStack)

OVHcloud applica limiti di velocità a livello di **progetto** OpenStack.

Un progetto può effettuare **20 richieste al secondo** prima di ricevere una risposta HTTP 429.

### Glance (API di immagine OpenStack)

OVHcloud applica limiti di velocità a livello di **progetto** OpenStack.

Un progetto può effettuare **20 richieste al secondo** prima di ricevere una risposta HTTP 429.

### Cinder (API di calcolo OpenStack)

OVHcloud applica limiti di velocità a livello di **progetto** OpenStack.

Un progetto può effettuare **20 richieste al secondo** prima di ricevere una risposta HTTP 429.

## Come funzionano i limiti di flusso?

Se effettui troppe richieste di token a Keystone (l'API d'identità) o invii troppe richieste a un punto terminale API come Nova (l'API di calcolo), il punto terminale comincerà a rispondere con un codice di risposta **HTTP 429*** contenente un oggetto JSON come questo:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## Come assicurarsi che non effettui troppe richieste?

Ti consigliamo di ridurre il numero di chiamate all'API effettuate tramite l'automazione, in modo da restare al di sotto del limite di velocità del punto terminale.

In genere è possibile verificare una situazione in cui vengono effettuate contemporaneamente più richieste (utilizzando più processi o thread).

Esistono diversi modi per migliorare l'efficacia della tua automatizzazione, come la messa in cache o l'utilizzo di meccanismi di annullamento dei tentativi (*retry backoffs*).

### Utilizza la cache

Una delle opzioni per ridurre il numero di chiamate è utilizzare la cache.

Ad esempio, un token keystone è valido 24 ore dopo la sua emissione. Puoi richiedere un token, conservarlo nella cache e riutilizzarlo per tutto il giorno!

### Aggiungi la *retry backoff*

Se hai bisogno di avere informazioni regolari dall'API, puoi implementare un'automatizzazione dei nuovi tentativi di richiesta, associata a una disattivazione esponenziale casuale.

Riprovare con una funzione di disattivazione esponenziale significa mettere in standby corta una volta che si verifica un errore nel limite di velocità e quindi bloccare la richiesta fallita.<br>
Se la richiesta fallisce di nuovo, la durata della messa in standby è aumentata e la procedura è ripetuta.<br>
L'operazione proseguirà fino al completamento della domanda o fino al raggiungimento del numero massimo di tentativi.

Questo approccio presenta numerosi vantaggi:

- i nuovi tentativi automatici ti permettono di recuperare gli errori dei limiti di velocità senza blocchi o perdita di dati;
- la disattivazione esponenziale permette di effettuare i primi tentativi rapidamente, usufruendo di tempi più lunghi in caso di fallimento dei primi tentativi;
- l'aggiunta di un termine casuale evita che tutti i tentativi siano effettuati contemporaneamente.

Ti ricordiamo che le richieste non andate a buon fine nel calcolo del limite di velocità. Di conseguenza, il continuo rinvio di una domanda potrebbe funzionare, ma in futuro potremmo cambiare questo comportamento. Ti consigliamo di non fidarti di questo meccanismo

Ecco alcuni esempi di librerie ben note per applicare la funzione *retry backoff* in python:

- tenacity: <https://pypi.org/project/tenacity/>
- backoff : <https://pypi.org/project/backoff/>

## Per saperne di più

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
