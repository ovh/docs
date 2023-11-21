---
title: 'Modalità di ripartizione'
excerpt: 'Scopri le diverse modalità di ripartizione del carico dell’OVH Load Balancer'
updated: 2018-01-17
---

## Obiettivo

La nuova soluzione OVH Load Balancer offre diverse tipologie di ripartizione del carico per i tuoi servizi. Questo processo determina il modo in cui l’OVH Load Balancer ripartisce le richieste ricevute verso i tuoi server.

**Questa guida ti mostra i diversi tipi di ripartizione del carico e ti spiega come modificarli.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di una server farm

## Procedura

### Le diverse tipologie di ripartizione del carico

La ripartizione del carico si utilizza nelle server farm. Attraverso questo parametro si definisce il modo in cui le richieste vengono suddivise tra i server della farm.

Per saperne di più sul servizio OVH Load Balancer, consulta la seguente guida: [Presentazione Load Balancer](/pages/network/load_balancer/use_presentation){.external}.

|Algoritmo|Caratteristiche|
|---|---|
|First|Il primo server disponibile riceve la connessione. La scelta del server avviene in base all’ID, dal più piccolo al più grande.|
|LeastConn|Seleziona il server con il numero minore di connessioni attive: è l’opzione suggerita per lunghe sessioni con poco traffico. L'algoritmo *RoundRobin* si applica sui gruppi di server con lo stesso numero di connessioni attive.|
|RoundRobin|Seleziona i server uno dopo l’altro per ciascuna connessione, **è l’algoritmo di default.**|
|Source|Questo algoritmo ha una funzione di *hash* sull’indirizzo IP di origine e divide il risultato per il numero di server attivi in quel preciso momento. Lo stesso indirizzo IP di origine verrà quindi sempre reindirizzato verso lo stesso server, fino a quando questo resterà attivo.|
|URI|Questo algoritmo ha una funzione di *hash* su una parte dell’URI (o sull’URI per intero) e divide il risultato per il numero dei server attivi in quel preciso momento. Lo stesso URI verrà quindi sempre reindirizzato verso lo stesso server fino a quando questo resterà attivo.|

### Modifica la modalità di ripartizione del carico di una server farm attraverso lo Spazio Cliente

- Nella sezione `Server farm`{.action} (1) puoi visualizzare le farm precedentemente create. è sufficiente modificarne una cliccando sui tre puntini a destra (2) poi su `Modifica`{.action} (3):

![Modification d'une ferme](images/server_cluster_change.png){.thumbnail}

Nella sezione `Opzioni avanzate`{.action} puoi modificare la `Modalità di ripartizione`{.action}:

![Modification d'une ferme](images/distrib_mode_edit.png){.thumbnail}

Una volta modificata la modalità di ripartizione, clicca su `Aggiorna`{.action}, e poi su `Applica la configurazione`{.action} nella barra gialla che apparirà in alto:

![Attivazione della configurazione](images/apply_config.png){.thumbnail}

### Modifica la modalità di ripartizione del carico di una server farm via API

Per cambiare i parametri della modalità di ripartizione attraverso le API è necessario modificare la configurazione della server farm.

- Una server farm nel dettaglio

Questa chiamata API consente di consultare il dettaglio di una farm a partire dal relativo identificativo. In questo esempio utilizziamo una farm HTTP:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Parametro|Significato|
|---|---|
|ServiceName*|Identificativo del tuo servizio Load Balancer|
|farmId*|Identificativo numerico della farm|

|Risposta (BackendHttp)|Significato|
|---|---|
|farmId|Identificativo numerico della farm|
|balance|Tipo di ripartizione attualmente configurato sulla farm|
|zone|Nome della zona in cui è stata configurata la farm|
|port|Porta utilizzata per contattare i server configurati sulla farm|
|probe|Tipo di sonda attualmente configurata sulla farm|
|displayName|Nome assegnato a questa farm|
|stikiness|Modalità di monitoraggio della connessione attualmente configurato sulla farm|

- Modifica la modalità di ripartizione di una server farm

Questa chiamata API consente di consultare il dettaglio di una farm a partire dal relativo identificativo. In questo esempio utilizziamo una farm HTTP: Per modificare la modalità di ripartizione, è necessario aggiornare il campo `BackendHttp.balance` con una modalità di ripartizione disponibile:

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{id}
> 

|Parametro|Significato|
|---|---|
|ServiceName*|Identificativo del tuo servizio Load Balancer|
|farmId*|Identificativo numerico della farm|
|BackendHttp.balance|Tipo di ripartizione preferita per questa farm|

- Applica le modifiche

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

|Parametro|Significato|
|---|---|
|ServiceName*|Identificativo del tuo servizio Load Balancer|
|zone*|Nome della zona in cui distribuire la configurazione|

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
