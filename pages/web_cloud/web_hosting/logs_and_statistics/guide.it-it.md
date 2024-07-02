---
title: "Hosting Web - Consultare le statistiche e i log di un sito Web"
excerpt: "Questa guida ti mostra come consultare le statistiche e i log del tuo sito Web grazie alla tua soluzione di hosting Web"
updated: 2024-02-27
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L’accesso ai log e alle statistiche del sito Web è incluso nella soluzione di hosting Web attiva dallo Spazio Cliente OVHcloud.

**Questa guida ti mostra come consultare le statistiche e i log del tuo sito Web grazie alla tua soluzione di hosting Web.**

## Prerequisiti

- Disporre di un piano di [hosting Web](/links/web/hosting){.external} attivo
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}

## Procedura

Per accedere ai diversi dati statistici e log dell’hosting Web, esegui queste operazioni: 

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Clicca sulla scheda `Statistiche e log`{.action}.

La schermata visualizzata è composta da 4 sezioni:

- [Statistiche delle visite](#website-stats): presenta numerose statistiche relative al tuo hosting Web.
- [Log del sito web](#website-logs): visualizza i log grezzi del tuo hosting web.
- [Statistiche dell'infrastruttura](#infra-stats): presenta statistiche grafiche (richieste HTTP e SQL, comandi FTP, utilizzo CPU, connessioni in uscita, ecc.)
- [Gestione degli utenti](#admin-user): visualizza gli utenti autorizzati ad accedere alle statistiche

![statistics and logs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

### Statistiche delle visite <a name="website-stats"></a>

Per controllare e gestire al meglio il traffico dei siti Web, è possibile utilizzare **OVHcloud Web Statistics**, uno strumento di statistiche delle visite e di misurazione dell'audience dei siti Web ospitati sul piano di hosting.

![ows dashboard](/pages/assets/screens/other/web-tools/logs/ows-presentation.gif){.thumbnail}

La dashboard di**OVHcloud Web Statistics** presenta 7 sezioni:

- **Dashboard**: visualizzazione del traffico sui siti del tuo hosting Web.
- **Browsers**: classifica dei browser Internet più utilizzati per consultare i tuoi siti.
- **Geolocalization**: percentuale di visitatori in base alla localizzazione.
- **Requests**: classifica delle pagine più consultate sui tuoi siti.
- **Robot**: visualizzazione dei robot che transitano sui vostri siti.
- **Status**: statistiche di fallimenti e successi in base ai codici HTTP restituiti.
- **FAQ**: sezione dedicata alle domande più frequenti. Vengono inoltre illustrati i termini tecnici che possono essere utilizzati nello strumento.

Il campo `Period selection` in alto a destra ti permette di selezionare un periodo preciso.

### Logs del sito web <a name="website-logs"></a>

> [primary]
>
> Non saremo in grado di supportarti nell’interpretazione dei log del tuo hosting Web perché questa operazione riguarda esclusivamente lo sviluppo Web e non l’hosting Web.
>
> In caso di difficoltà o dubbi, contatta il tuo [provider specializzato](/links/partner).
>

Potrete visualizzare i log grezzi del vostro sito web con un ritardo di circa 5 minuti.

![osl statistiques dashboard](/pages/assets/screens/other/web-tools/logs/osl-statistics-board.png){.thumbnail}

Diversi tipi di log sono a tua disposizione:

- **Log Web**: contengono i diversi log di consultazione del sito Web, oltre alle diverse azioni realizzate a partire dal sito Web. Ciò consente, ad esempio, di individuare i tentativi di azioni dannose.
- **Log FTP** : le diverse connessioni / comandi in FTP saranno registrati e mantenuti in questi log.
- **Logs errore**: qui trovi i diversi errori generati dal tuo sito Web.
- **Logs CGI**: le varie chiamate agli script cgi.bin che sono stati realizzati sono registrati in questi logs.
- **Logs out**: contengono la cronologia delle diverse richieste esterne (connessioni in uscita TCP) realizzate dal tuo hosting Web verso infrastrutture remote.
- **Log SSH**: questi log indicano le diverse connessioni / comandi effettuati con il protocollo SSH.
- **Logs CRON**: visualizza qui i risultati dell’esecuzione delle operazioni pianificate [(CRON)](/pages/web_cloud/web_hosting/cron_tasks) sul tuo hosting Web.

### Statistiche dell'infrastruttura <a name="infra-stats"></a>

In questa sezione sono riportate le attività dell’infrastruttura del tuo hosting Web, per visualizzare il consumo delle risorse messe a disposizione.

![infrastructure statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

Dal menu a comparsa in alto a sinistra è possibile visualizzare diversi tipi di grafici:

- **Comandi FTP**: indica i comandi principali (upload, download, login, delete) effettuati utilizzando il protocollo FTP sul tuo hosting Web.
- **Richieste HTTP**: indica il numero e il codice restituito delle richieste HTTP eseguite sul tuo hosting Web. Il tutto distinguendo i diversi codici HTTP (2xx/3xx, 4xx e 5xx). Se necessario, è possibile recuperare la lista dei codici HTTP e il loro significato effettuando una ricerca direttamente tramite un motore di ricerca (Google, Yahoo!, bing, ecc...).
- **Connessioni in uscita**: richieste inviate dal vostro sito web verso un sito web esterno.
- **Utilizzo della CPU**: livello di consumo del processore sull’istanza di hosting Web.
- **Superamento del plafond di risorse**: indica i momenti in cui l’hosting Web supera la quota assegnata.
- **Richieste SQL**: quantità di richieste verso i database del tuo hosting Web.
- **Tempo di risposta SQL**: tempo di risposta delle richieste inviate ai database dell’hosting Web.

### Gestione degli utenti <a name="admin-user"></a>

La creazione di un utente consente a una persona di accedere alle statistiche del tuo hosting Web senza avere accesso allo Spazio Cliente OVHcloud.

Nella sezione `Gestione degli utenti`{.action}, clicca su `Crea un nuovo utente`{.action} e segui le istruzioni per completare la creazione di un nuovo utente.

![create a new user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/create-a-new-user.png){.thumbnail}

Per accedere alle statistiche del tuo sito Web con un utente che hai creato, inserisci questo indirizzo sostituendo `000` con il numero del cluster del tuo hosting Web e `domain.tld` con il nome di dominio del tuo sito Web (senza i `www`):

```bash
https://logs.cluster000.hosting.ovh.net/domain.tld/
```

Puoi anche recuperare il link di accesso alle statistiche / log direttamente dal tuo Spazio Cliente:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Clicca sulla scheda `Statistiche e log`{.action}.
6. Accedi alla sezione `Statistiche delle visite`{.action}.
7. Clicca sul pulsante `Visualizza le statistiche`{.action}.

![website visit statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-statistics.png){.thumbnail}

Nella nuova pagina, recupera l’URL che trovi nella barra degli indirizzi del tuo browser.

> [!warning]
>
> Se i log separati sono stati abilitati su una [voce multisito](/pages/web_cloud/web_hosting/multisites_configure_multisite), gli utenti creati qui non potranno accedere alle statistiche relative a tale voce multisito specifica.
>

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).