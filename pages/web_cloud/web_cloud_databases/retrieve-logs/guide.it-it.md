---
title: 'Web Cloud Databases - Come gestire i log?'
excerpt: 'Questa guida ti mostra come gestire i log dei database ospitati sul tuo server Web Cloud Databases'
updated: 2025-02-20
---

## Obiettivo

Un log corrisponde a un evento che si è verificato su un sistema informatico (server, computer, applicazione, sito Web, database, rete informatica, ecc.).
Ad esempio, un log può salvare e contenere uno o più dei seguenti elementi:

- La data e l'ora (data, ora, minuto, secondo, ecc.) dell'evento.
- La natura dell'evento (connessione, disconnessione, errore, download, upload, alert, ecc.).
- Informazioni aggiuntive sull'evento (pagina o file consultato, applicazione avviata, server remoto chiamato, nome di un file caricato o scaricato, ecc.)
- L'origine dell'evento (identificativo dell'utente, indirizzo IP sorgente, programma sorgente, ecc.).
- Lo stato del sistema in cui si svolge l'evento (risorse disponibili, memoria residua, utilizzo della CPU, ecc.).

Nella maggior parte dei casi, i log vengono generati direttamente dai sistemi informatici in cui si verificano gli eventi.
e vengono memorizzati e memorizzati in file di testo, detti anche file di log.

In questo modo, i file di log permettono di effettuare le seguenti azioni:

- Analizzare il comportamento del sistema informatico che genera i log.
- Identificare gli errori del sistema informatico.
- Risolvere gli errori riscontrati sul sistema informatico.
- Ottimizzare e migliorare le prestazioni del sistema informatico.

La soluzione [Web Cloud Databases](/links/web/databases) genera quindi i propri log.

In alcune situazioni, potrebbe essere necessario consultare / recuperare i log:

- del tuo server Web Cloud Databases;
- per uno dei database ospitati sul tuo server Web Cloud Databases.

**Questa guida ti mostra come visualizzare e gestire i log della soluzione Web Cloud Databases.**

## Prerequisiti

- Disporre di una soluzione [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleziona il tuo database service

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedura

> [!warning]
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner). OVHcloud non potrà fornirti assistenza nell’interpretazione dei log disponibili con la tua soluzione Web Cloud Databases. Per maggiori informazioni consulta la sezione "[Per saperne di più](#go-further)" di questa guida.
>

### Visualizzare i log in tempo reale del vostro Web Cloud Databases

Per verificare in tempo reale i log della soluzione Web Cloud Databases, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu `Web Cloud Databases`{.action}.
4. Seleziona l’istanza Web Cloud Databases interessata.
5. Clicca sulla scheda `Log`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}

È in questa console integrata che trovi in tempo reale i log della tua soluzione Web Cloud Databases.

> [!primary]
>
> Come precisato in precedenza, i log sono disponibili qui solo in tempo reale. I log verranno visualizzati solo se generati nel momento in cui ti trovi sulla scheda `Log`{.action}. 
>
> Se esci dalla scheda `Log`{.action} e poi ci ritorni sopra in seguito, la cronologia che appariva in precedenza sarà scomparsa.
>

### Recupera lo storico dei log della tua soluzione Web Cloud Databases

Per recuperare lo storico dei log della soluzione Web Cloud Databases, è necessario accedere in SFTP.

> [!warning]
>
> Prima di connetterti, verifica che l’indirizzo IP pubblico della postazione utilizzata sia autorizzato sul tuo server Web Cloud Databases, con l’opzione `SFTP` selezionata.
>
> Per verificare questo, recupera l’indirizzo IP pubblico del tuo punto di accesso a Internet e consulta la sezione **Autorizza un indirizzo IP** di [questa guida](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

Per recuperare le informazioni di connessione in SFTP alla soluzione Web Cloud Databases, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu `Web Cloud Databases`{.action}.
4. Seleziona la soluzione Web Cloud Databases.
5. Nella nuova pagina, rimani sulla scheda `Informazioni generali`{.action} e clicca sul riquadro intitolato `Informazioni di login`{.action}.
6. Sotto la voce `SFTP`{.action} sono disponibili tutte le informazioni necessarie per accedere in SFTP.

> [!primary]
>
> Se non conosci la `Password del server`, clicca sul pulsante `...`{.action} a destra per modificarla.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Una volta recuperate le credenziali SFTP, accedi utilizzando un client FTP (FileZilla, Cyberduck, WinSCP, ecc...).

Per FileZilla, vai in alto a sinistra nel menu `File`{.action} e clicca su `Site Manager`{.action}.

Clicca su `New site`{.action} e inserisci i parametri rilevati precedentemente.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

Il file di log, chiamato `stdout.log`, si trova nella root.

È possibile scaricarlo sul proprio computer per consultarlo.

> [!primary]
>
> Un file supplementare di log chiamato `slow-query.log` può apparire nella root SFTP del tuo server Web Cloud Databases.
> Questo file contiene la cronologia delle richieste lente eseguite sul tuo server Web Cloud Databases. 
> 
> Di default, il valore è impostato su 1 secondo sulle soluzioni Web Cloud Databases nella variabile **long_query_time**.
> 
> Grazie a questo file, potrai ottimizzare i tuoi script e il contenuto dei tuoi database per migliorare le performance dei diversi servizi associati.
>

### Iscrivi i log della tua soluzione Web Cloud Databases a Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) è una piattaforma che permette di gestire i log. Questa soluzione può rivelarsi utile nel caso in cui disponi di una piattaforma molto grande o qualora i tuoi servizi generino numerosi log. Questa piattaforma è infatti concepita per facilitare l'aggregazione e la gestione dei log.

Funziona recuperando i log generati da infrastrutture, siti Web e applicazioni per, ad esempio:

- salvarli;
- visualizzarli in dashboard in tempo reale;
- permettere agli utenti di effettuare richieste complesse;
- filtrarli per data, applicazione, tipo o contenuto;

Per maggiori informazioni su Logs Data Platform, consulta la nostra guida d'[introduzione a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Le soluzioni [Web Cloud Databases](/links/web/databases) possono essere utilizzate con numerosi servizi (hosting condivisi, VPS, server dedicati, ecc.). In aggiunta ai log in tempo reale già disponibili, queste soluzioni possono essere abbonate tramite flussi di dati a Logs Data Platform.

Per iscrivere la tua soluzione Web Cloud Databases a un flusso di dati su Logs Data Platform, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu `Web Cloud Databases`{.action}.
4. Seleziona l'istanza Web Cloud Databases interessata.
5. Clicca sulla scheda `Log`{.action}.
6. A destra del riquadro in cui vengono visualizzati i log in tempo reale, clicca sul pulsante `Abbonati`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}

Nella nuova pagina che si apre e se disponi di più soluzioni Logs Data Platform nel tuo [Spazio Cliente OVHcloud](/links/manager), seleziona, nel menu a tendina situato immediatamente sotto il pulsante intitolato `Aggiungere un flusso di dati`, il riferimento della Logs Data Platform con cui vuoi effettuare la sottoscrizione.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}

In questo caso, sottoscrivi la tua soluzione Web Cloud Databases.

#### Caso n°1 - Iscriversi a un flusso già esistente sulla tua soluzione Logs Data Platform <a name="wcdb-ldp-case1"></a>

Se il flusso esiste già, viene visualizzato come una riga nella tabella a piè di pagina.
In questo caso, per iscrivere la tua soluzione Web Cloud Databases a questo flusso esistente, è sufficiente cliccare sul pulsante `Abbonati`{.action} a destra della linea corrispondente al flusso in questione.

Dopo alcuni secondi e se rimani sulla stessa pagina, comparirà un messaggio nello Spazio Cliente per avvisarti che l’abbonamento è stato creato correttamente.

#### Caso n°2 - Iscriversi a un nuovo flusso di dati sulla tua soluzione Logs Data Platform

Se il flusso in questione non esiste ancora, clicca sul pulsante `Aggiungere un flusso di dati`{.action}.
Verrai reindirizzato a una nuova pagina dello Spazio Cliente OVHcloud che ti permetterà di creare e aggiungere un nuovo flusso di dati sulla tua soluzione Logs Data Platform.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}

Se necessario, consulta le nostre guide "[Introduzione a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)" (EN) e "[Iniziare rapidamente con Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)" (EN) per eseguire queste azioni.

Una volta inseriti i moduli e le informazioni, clicca sul pulsante `Salva`{.action}.

Verrai reindirizzato alla scheda `Flusso di dati` della soluzione Logs Data Platform.

Non ti resta che iscrivere la tua soluzione Web Cloud Databases al feed appena creato sulla soluzione Logs Data Platform.

Per effettuare questa operazione e, come spiegato [in precedenza](#wcdb-ldp), torna alla scheda `Log`{.action} della tua soluzione Web Cloud Databases per iscriverti a questo nuovo flusso di dati, quindi segui questa volta il [Caso n°1](#wcdb-ldp-case1) descritto sopra.

## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare il Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Introduzione a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Iniziare rapidamente con Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).