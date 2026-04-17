---
title: 'Web Cloud Databases - Come gestire i log?'
excerpt: 'Questa guida ti mostra come gestire i log dei database ospitati sul tuo server Web Cloud Databases'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Un log corrisponde a un evento che si verifica su un sistema informatico (server, computer, applicazione, sito Web, database, rete informatica, ecc.).
Ad esempio, un log può registrare e contenere uno o più dei seguenti elementi:

- Il timestamp (data, ora, minuto, secondo, ecc.) dell'evento.
- La natura dell'evento (connessione, disconnessione, errore, download, upload, avviso, ecc.).
- Informazioni aggiuntive sull'evento (pagina o file consultato, applicazione avviata, server remoto contattato, nome del file caricato o scaricato, ecc.)
- L'origine dell'evento (identificativo dell'utente, indirizzo IP sorgente, programma sorgente, ecc.).
- Lo stato del sistema in cui si verifica l'evento (risorse disponibili, memoria rimanente, utilizzo della CPU, ecc.).

Nella maggior parte dei casi, i log vengono generati direttamente dai sistemi informatici in cui si verificano gli eventi.
Vengono archiviati in file di testo, denominati anche file di log.

I file di log consentono quindi di effettuare le seguenti operazioni:

- Analizzare il comportamento del sistema informatico che genera i log.
- Identificare gli errori verificatisi sul sistema informatico.
- Risolvere gli errori riscontrati sul sistema informatico.
- Ottimizzare e migliorare le prestazioni del sistema informatico.

La soluzione [Web Cloud Databases](/links/web/databases) genera i propri log.

In alcune situazioni, potrebbe essere necessario consultare o recuperare i log:

- Del server Web Cloud Databases.
- Di uno dei database ospitati sul server Web Cloud Databases.

**Questa guida ti mostra come visualizzare e gestire i log della tua soluzione Web Cloud Databases.**

## Prerequisiti

- Disporre di un'[istanza Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleziona il tuo servizio di database

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedura

> [!warning]
>
> Questa guida è stata creata per aiutarti nelle operazioni più comuni. Tuttavia, ti consigliamo di contattare un [fornitore specializzato](/links/partner) in caso di difficoltà. Non saremo in grado di fornirti assistenza nell'interpretazione dei log disponibili con la tua soluzione Web Cloud Databases. Per maggiori informazioni, consulta la sezione [Per saperne di più](#go-further) di questa guida.
>

### Visualizzare i log in tempo reale del tuo Web Cloud Databases

Clicca sulle schede qui sotto per visualizzare ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Log`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}
>>
>> In questa console integrata troverai, in tempo reale, i log della tua soluzione Web Cloud Databases.
>>
>> > [!primary]
>> >
>> > I log sono disponibili qui solo in tempo reale. Appariranno solo se vengono generati mentre ti trovi sulla scheda `Log`{.action}.
>> >
>> > Se lasci la scheda `Log`{.action} e vi torni in seguito, lo storico visualizzato in precedenza non sarà più disponibile.

### Recuperare lo storico dei log della tua soluzione Web Cloud Databases

Per recuperare lo storico dei log della tua soluzione Web Cloud Databases, devi connetterti tramite SFTP.

> [!warning]
>
> Prima di connetterti, verifica che l'indirizzo IP pubblico del computer che stai utilizzando sia autorizzato sul tuo server Web Cloud Databases con l'opzione `SFTP` attivata.
>
> Per verificarlo, recupera l'indirizzo IP pubblico del tuo punto di accesso a Internet, quindi consulta la sezione **Autorizzare un indirizzo IP** di [questa guida](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

Per trovare le informazioni di connessione SFTP della tua soluzione Web Cloud Databases, clicca sulle schede qui sotto per visualizzare ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella scheda `Informazioni generali`{.action}, individua il riquadro **Dati di accesso**. Sotto la voce `SFTP`{.action}, troverai le informazioni necessarie per la connessione SFTP.
>>
>> > [!primary]
>> >
>> > Se non conosci la `Password del server`, clicca sul pulsante `...`{.action} a destra per modificarla.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Una volta recuperate le credenziali di accesso SFTP, connettiti tramite un client FTP (FileZilla, Cyberduck, WinSCP, ecc.).

In FileZilla, vai in alto a sinistra nel menu `File`{.action} e clicca su `Gestione siti`{.action}.

Clicca su `Nuovo sito`{.action} e inserisci i parametri recuperati in precedenza.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

Il file di log, denominato `stdout.log`, si trova nella directory principale.

Scaricalo sul tuo computer per consultarlo.

> [!primary]
>
> Un file di log aggiuntivo denominato `slow-query.log` può apparire nella directory principale SFTP del tuo server Web Cloud Databases.
> Questo file contiene lo storico delle query lente eseguite sul tuo server Web Cloud Databases.
>
> Per impostazione predefinita, il valore è impostato a 1 secondo sulle soluzioni Web Cloud Databases nella variabile **long_query_time**.
>
> Grazie a questo file, puoi ottimizzare i tuoi script e il contenuto del/dei tuo/tuoi database per migliorare le prestazioni dei tuoi diversi servizi associati.
>

### Sottoscrivere i log della tua soluzione Web Cloud Databases a Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) è una piattaforma per la gestione dei log. Facilita l'aggregazione e la gestione dei log, in particolare per le infrastrutture che generano un grande volume di log.

Funziona recuperando i log generati dalla tua infrastruttura, dai tuoi siti Web o dalle tue applicazioni, ad esempio per:

- archiviarli;
- visualizzarli in dashboard in tempo reale;
- consentire agli utenti di eseguire query complesse;
- filtrarli per data, applicazione, tipo o contenuto.

Per maggiori informazioni su Logs Data Platform, consulta la nostra guida [Introduzione a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Dato che le soluzioni [Web Cloud Databases](/links/web/databases) possono essere utilizzate con numerosi servizi (hosting condivisi, VPS, server dedicati, ecc.), queste possono, oltre ai log in tempo reale già disponibili, essere sottoscritte tramite flusso di dati a Logs Data Platform.

Per sottoscrivere la tua soluzione Web Cloud Databases a un flusso di dati su Logs Data Platform, possono presentarsi due situazioni.

**Clicca su ciascun caso per visualizzarne il contenuto.**

<a name="wcdb-ldp-case1"></a>

/// details | Caso 1 - Sottoscrivere un flusso di dati esistente sulla tua soluzione Logs Data Platform

Clicca sulle schede qui sotto per visualizzare ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Log`{.action}, poi sul pulsante `Sottoscrivi`{.action} situato a destra del riquadro dei log in tempo reale.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Se disponi di più soluzioni Logs Data Platform, seleziona il riferimento desiderato dall'elenco a discesa situato sotto il pulsante `Aggiungi un flusso di dati`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Il flusso esistente appare nella tabella in fondo alla pagina. Clicca sul pulsante `Sottoscrivi`{.action} situato a destra della riga corrispondente.
>>
>> Dopo alcuni secondi, un messaggio conferma che la sottoscrizione è stata creata correttamente.

///

/// details | Caso 2 - Sottoscrivere un nuovo flusso di dati sulla tua soluzione Logs Data Platform

Clicca sulle schede qui sotto per visualizzare ciascuno dei **5** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Log`{.action}, poi sul pulsante `Sottoscrivi`{.action} situato a destra del riquadro dei log in tempo reale.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Se disponi di più soluzioni Logs Data Platform, seleziona il riferimento desiderato dall'elenco a discesa situato sotto il pulsante `Aggiungi un flusso di dati`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Dato che il flusso di dati non esiste ancora, clicca sul pulsante `Aggiungi un flusso di dati`{.action}. Verrai reindirizzato a una pagina che ti permetterà di creare un nuovo flusso di dati sulla tua soluzione Logs Data Platform.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}
>>
>> Se necessario, consulta le nostre guide "[Introduzione a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)" (EN) e "[Iniziare rapidamente con Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)" (EN).
>>
> **Passaggio 5**
>>
>> Una volta compilati i formulari, clicca su `Salva`{.action}. Verrai reindirizzato alla scheda `Flusso di dati` della tua soluzione Logs Data Platform.
>>
>> Per sottoscrivere la tua soluzione Web Cloud Databases a questo nuovo flusso, torna alla scheda `Log`{.action} della tua soluzione Web Cloud Databases, quindi segui il [Caso 1](#wcdb-ldp-case1) descritto sopra.

///

## Per saperne di più <a name="go-further"></a>

[Primi passi con il tuo Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Introduzione a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Iniziare rapidamente con Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/partner).

Contatta la nostra [Community di utenti](/links/community).
