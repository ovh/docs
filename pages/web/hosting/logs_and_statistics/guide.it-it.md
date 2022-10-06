---
title: 'Hosting condiviso: consulta le statistiche e i log del tuo sito'
excerpt: Accedi alle statistiche del tuo sito
slug: hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito
section: Ottimizza il tuo sito
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 05/01/2021**

## Obiettivo

L'accesso ai log e alle statistiche del tuo sito è incluso nella tua offerta di hosting Web, accessibile dal tuo Spazio Cliente OVHcloud.

**Questa guida ti mostra come consultare le statistiche e i log del tuo sito Web.**

## Prerequisiti

- Disporre di un piano [di hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} attivo
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Clicca sulla scheda `Web Cloud`{.action} e poi su `Hosting`{.action}.

Seleziona l'hosting interessato e clicca sulla scheda `Statistiche e log`{.action}

![hosting](images/statistics01.png){.thumbnail}

La finestra che appare è composta da 3 sezioni. Il primo presenta le **statistiche**, il secondo i **log** lordi del tuo hosting, l'ultimo è dedicato **all'amministrazione degli utenti** autorizzati ad accedere alle statistiche.

![hosting](images/statistics02u.png){.thumbnail}

### Gestione degli utenti

La creazione di un utente permetterà a una persona di accedere alle statistiche del tuo hosting senza avere accesso al tuo Spazio Cliente OVHcloud. 

Clicca sul pulsante `Crea un nuovo utente`{.action} nella sezione `Amministrazione utenti` e segui le istruzioni come mostrato qui di seguito.  

![hosting](images/user-statistics01.png){.thumbnail}

> [!warning] 
>
> Se hai attivato i log separati su un [record multisito](../configurare-un-multisito-su-un-hosting-web/#step-2-aggiungi-un-dominio-o-un-sottodominio), gli utenti creati qui non possono accedere alle statistiche di questo record multisito.
>

### Statistiche delle visite

Per monitorare e gestire al meglio il traffico dei tuoi siti Web, hai a disposizione uno strumento di statistica di frequentazione e misurazione dell'audience dei tuoi siti Internet ospitati sul tuo hosting condiviso, **OVHcloud Web Statistics**.

![hosting](images/OWStats01.gif){.thumbnail}

La dashboard di OVHcloud Web Statistics si presenta in 6 sezioni nel pannello di sinistra.

- Dashboard: visualizzazione del traffico sui siti del tuo hosting.
- Browsers: classifica i browser più utilizzati per visualizzare i tuoi siti.
- Geolocalization:  proporzione di visitatori in funzione della loro localizzazione.
- Requests: classifica le pagine più consultate sui tuoi siti.
- Robots : visualizzazione dei robot che passano sui tuoi siti.
- Stato: statistiche sugli insuccessi e sui successi riscontrati in base ai codici HTTP restituiti.
- FAQ: sezione dedicata alle questioni più frequenti

Il riquadro `Period selection` in alto a destra vi permette di selezionare un periodo preciso.

### Logs

I log grezzi del tuo sito possono essere visualizzati con un ritardo di circa 5 minuti.

![hosting](images/logs01.png){.thumbnail}

Sono a tua disposizione diversi tipi di log:

- Logs Web: qui puoi trovare i log di consultazione del tuo sito e le diverse azioni realizzate a partire dal tuo sito. che permette di individuare, ad esempio, tentativi di azioni dolorose.
- Logs FTP: le diverse connessioni FTP saranno registrate e conservate in questi log.
- Logs errore: i diversi errori generati dal tuo sito.
- Logs CGI: i diversi appelli agli scripts cgi.bin realizzati.
- Logs out: le statistiche del tuo hosting sulle diverse chiamate esterne effettuate.
- Logs SSH: questi log indicano le differenti connessioni realizzate con il protocollo SSH.
- Logs CRON: il risultato dell'esecuzione delle operazioni pianificate ([Le operazioni automatizzate (CRON) sul tuo hosting](../hosting_web_task_automatizzaticron/)).

### Attività dell'hosting

In questa sezione trovi l'attività dell'infrastruttura del tuo hosting, per visualizzare il consumo delle risorse messe a tua disposizione.

Clicca sulla scheda `Informazioni generali`{.action} e poi giù in fondo alla pagina.

![hosting](images/statistics03.png){.thumbnail}

È possibile visualizzare diversi tipi di grafici dal menu a tendina in alto a sinistra:

- Connessioni in uscita: richieste inviate dal vostro sito verso un sito esterno.
- Utilizzo CPU: livello di consumo del processore sull'istanza di hosting.
- Superamento del massimale delle risorse: indica i momenti in cui il tuo hosting supera la sua quota di risorse.
- Richieste SQL: quantità di richieste verso i database del tuo hosting.
- Tempi di risposta SQL: tempo di risposta delle richieste inviate ai database del tuo hosting.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
