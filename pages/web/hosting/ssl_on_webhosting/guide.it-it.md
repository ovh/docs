---
title: 'Gestire un certificato SSL su un hosting Web'
slug: i_certificati_ssl_sugli_hosting_web_ovh
excerpt: 'Come attivare e utilizzare un certificato SSL sugli hosting Web OVH'
section: SSL
order: 1
legacy_guide_number: g1594
---

**Ultimo aggiornamento: 08/07/2019**

## Obiettivo

Le operazioni di gestione degli hosting Web OVH, disponibili direttamente nell’area utente dedicata, includono diverse azioni eseguibili sui certificati SSL generati in OVH o ottenuti presso altri provider e poi importati. Installare questi certificati è importante, in quanto consentono ai siti Internet di stabilire una connessione SSL sicura alla rete ed essere accessibili in HTTPS. 

**Questa guida ti mostra come eseguire le principali operazioni per gestire un certificato SSL sul tuo hosting Web OVH**.

## Prerequisiti

- Disporre di un piano di [hosting Web OVH](https://www.ovh.it/hosting-web/){.external} attivo
- Aver registrato almeno un [dominio](https://www.ovh.it/domini/){.external}
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}.

## Procedura

Per gestire i certificati SSL attivi sugli hosting Web OVH sono disponibili diverse azioni. Prosegui nella lettura di questa guida in base all’operazione che vuoi effettuare. 

- [Attivare un certificato SSL su un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/#attivare-un-certificato-ssl-su-un-hosting-web){.external}: permette di utilizzare un certificato SSL gratuito o a pagamento ordinato in OVH o importarne uno ottenuto presso un fornitore esterno.

- [Attivare un certificato SSL su un multisito](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/#attivare-un-certificato-ssl-su-un-multisito){.external}: permette di utilizzare, se il servizio e il certificato lo consentono, una connessione protetta da SSL per i multisiti. 

- [Rigenerare un certificato SSL di un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/#rigenerare-un-certificato-ssl-di-un-hosting-web){.external}: permette di rigenerare il certificato dell’hosting in caso di attivazione dell’SSL su uno o più multisiti. 

- [Eliminare un certificato SSL da un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/#eliminare-un-certificato-ssl-di-un-hosting-web){.external}: permette di rimuovere il certificato SSL da un hosting. Questa operazione non è priva di rischi e può avere impatto sugli eventuali siti che lo utilizzano. 

### Attivare un certificato SSL su un hosting Web

Gli hosting Web OVH permettono di attivare diversi tipi di [certificati SSL](https://www.ovh.it/ssl/){.external}:

- un certificato SSL gratuito Let’s Encrypt, [incluso nei piani di hosting Web compatibili](https://www.ovh.it/ssl/){.external}
- un certificato SSL a pagamento, [in opzione nei piani di hosting Web compatibili](https://www.ovh.it/ssl/){.external}
- un certificato SSL ottenuto presso un altro provider e importato sull’hosting Web OVH

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e seleziona il tuo servizio nella sezione `Hosting`{.action} del menu a sinistra. Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Nel riquadro **Configurazione**, sotto **Certificato SSL** dovrebbe comparire la voce “No”: significa che sull’hosting Web non risulta installato nessun certificato SSL. Clicca sui tre puntini in corrispondenza di “Ceritificato SSL” e seleziona `Ordina un certificato SSL`{.action}.

Nel caso che invece compaia la voce “Sì”, significa che sull’hosting Web è già installato un certificato e non sarà possibile ordinarne un altro fino a quando quello esistente risulterà attivo.

![Gestione SSL](images/manage-ssl-step1.png){.thumbnail}

Nella nuova finestra, seleziona il certificato che vuoi generare. Ti ricordiamo che, in base al [piano di hosting Web](https://www.ovh.it/hosting-web/){.external} attivo e alla sua configurazione, alcune delle soluzioni elencate in questa guida potrebbero non essere disponibili. Una volta effettuata la scelta, clicca sul pulsante `Seguente`{.action}.

![Gestione SSL](images/manage-ssl-step2.png){.thumbnail}

A seconda dell’opzione selezionata, potrebbero essere necessari alcuni step aggiuntivi:

- i **certificati SSL gratuiti** non dovrebbero richiedere ulteriori azioni, tranne nell’eventualità che un elemento tecnico impedisca l’attivazione del certificato (in questo caso compare un messaggio nello Spazio Cliente OVH, che indica gli elementi da verificare) o la convalida del dominio necessaria per il suo ottenimento. Anche in questo caso riceverai una notifica e sarà necessario seguire le indicazioni fornite.

- i **certificati SSL a pagamento** richiedono il completamento degli step del processo d’ordine per essere generati. Per alcune tipologie sono necessarie convalide specifiche ed è quindi possibile che vengano inviate una o più email a questo proposito. Segui le indicazioni contenute in questi messaggi per completare l’installazione.

- l’**importazione di un certificato SSL** richiede l’inserimento di alcune informazioni aggiuntive. Segui le indicazioni fornite dal provider che lo ha generato. 

In base alla tipologia di certificato scelta, l’installazione può durare da pochi minuti a diversi giorni. Per verificare che l’operazione sia stata effettuata correttamente, ritorna alla scheda `Informazioni generali`{.action} dello Spazio Cliente OVH e verifica che nel riquadro **Configurazione** sotto **Certificato SSL** compaia la voce “Sì”. 

![Gestione SSL](images/manage-ssl-step4.png){.thumbnail}

Una volta completata l’operazione, passa allo step successivo per assicurarti che su tutti i tuoi siti sia attiva una connessione SSL.

### Attivare un certificato SSL su un multisito

In base al [certificato SSL](https://www.ovh.it/ssl/){.external} ordinato, hai la possibilità di attivare una connessione protetta tramite SSL su uno o più dei tuoi multisiti. Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} del menu a sinistra e clicca sulla scheda `Multisito`{.action}.

Visualizzi una tabella con tutti i domini aggiunti sul tuo hosting: nella colonna “SSL” viene indicato lo stato di attivazione delle connessioni SSL sicure sui diversi multisiti. 

![Gestione SSL](images/manage-ssl-step5.png){.thumbnail}

Gli stati visualizzati possono essere tre:

|Stato|Descrizione|
|---|---|
|Attivo|Sul multisito è già attivo un certificato SSL. Se il tuo sito non è disponibile in HTTPS, consulta la nostra guida [Attivare HTTPS su un sito Internet tramite il certificato SSL](https://docs.ovh.com/it/hosting/attivare-https-su-sito-internet-tramite-certificato-ssl/){.external}.|
|Da generare|Sul multisito è stato attivato un certificato SSL ma tecnicamente non è ancora abilitato. In questo caso, è necessario rigenerarlo in modo che includa i nuovi domini del multisito.|
|Disattivo|Sul multisito non è attivo nessun certificato SSL. Per attivarlo, segui le indicazioni descritte qui sotto.|

Per attivare un certificato SSL su un multisito, clicca sull’icona a forma di ingranaggio in corrispondenza del servizio interessato e seleziona `Modifica`{.action}. Nella nuova finestra, scegli l’opzione `SSL`{.action} e completa gli step fino alla conferma dell’operazione.

Una volta inoltrata la richiesta di attivazione, lo stato della connessione SSL per il multisito si aggiornerà in pochi secondi e diventerà “Da generare”. Ripeti questa operazione per tutti i multisiti su cui vuoi attivare L’SSL. A questo punto puoi passare allo step successivo.

![Gestione SSL](images/manage-ssl-step6.png){.thumbnail}

### Rigenerare un certificato SSL di un hosting Web

> [!primary]
>
> Questa operazione è valida esclusivamente per i certificati che consentono l’attivazione di una connessione SSL sicura su più multisiti.
>

Una volta attivata la connessione SSL su uno o più dei tuoi multisiti, lo stato visualizzato è “Da generare”. Questo passaggio è indispensabile per poter aggiungere i domini interessati al certificato SSL dell’hosting. 

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e seleziona il tuo servizio nella sezione `Hosting`{.action} del menu a sinistra e Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Clicca sui tre puntini in corrispondenza di “Ceritificato SSL” e seleziona `Rigenera il certificato SSL`{.action}.

![Gestione SSL](images/manage-ssl-step7.png){.thumbnail}

Leggi le informazioni che compaiono nella nuova finestra, clicca su `Conferma`{.action} e attendi il tempo necessario alla rigenerazione del certificato. Questa operazione potrebbe durare anche diverse ore.

Ti ricordiamo che Let's Encrypt, l’autorità che fornisce i certificati SSL sugli hosting Web OVH, impone un [limite di cinque rigenerazioni a settimana](https://letsencrypt.org/docs/rate-limits/){.external}. Ti consigliamo quindi di verificare attentamente il numero di rigenerazioni settimanali da eseguire, per evitare qualsiasi impatto sulla tua attività.

![Gestione SSL](images/manage-ssl-step8.png){.thumbnail}

### Eliminare un certificato SSL da un hosting Web

Il certificato SSL installato su un hosting può essere eliminato in qualsiasi momento. Prima di effettuare questa operazione **ti consigliamo di assicurarti che la rimozione del certificato non abbia impatto sulla raggiungibilità dei tuoi siti Internet**. Ti ricordiamo inoltre che se il tuo sito utilizza il protocollo HTTPS ma non usufruisce di una connessione SSL, i tuoi visitatori visualizzeranno un errore di sicurezza.

Queste operazioni sono relative ai parametri dei tuoi siti, per cui OVH non fornisce assistenza. In caso di difficoltà o dubbi, ti consigliamo di contattare un esperto del settore.  

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e seleziona il tuo servizio nella sezione `Hosting`{.action} del menu a sinistra. Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Clicca sui tre puntini in corrispondenza di “Ceritificato SSL” e seleziona `Elimina SSL`{.action}.

Nella nuova pagina, conferma l’eliminazione: l’operazione diventerà effettiva entro poche ore. 

![Gestione SSL](images/manage-ssl-step9.png){.thumbnail}

## Per saperne di più

[Attivare HTTPS su un sito Internet tramite il certificato SSL](https://docs.ovh.com/it/hosting/attivare-https-su-sito-internet-tramite-certificato-ssl/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community>.