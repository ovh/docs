---
title: 'Web Cloud Databases - Come recuperare i log?'
excerpt: 'Questa guida ti mostra come recuperare i log dei tuoi database ospitati sul tuo server Web Cloud Databases'
updated: 2024-10-24
---

> [!primary]
>
> **Questa guida è attualmente in corso di aggiornamento. Alcune informazioni potrebbero essere incomplete o obsolete. Grazie per la comprensione.**

## Obiettivo

La soluzione [Web Cloud Databases](/links/web/databases) permette di ospitare più database. In alcune situazioni, potrebbe essere necessario consultare / recuperare i log:

- del tuo server Web Cloud Databases;
- per uno dei database ospitati sul tuo server Web Cloud Databases.

**Questa guida ti mostra come recuperare i log dei database ospitati sul tuo server Web Cloud Databases**

## Prerequisiti

- Disporre di una soluzione [Web Cloud Databases](/links/web/databases) (inclusa o meno in una soluzione di [hosting Web performance](/links/web/hosting)).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}.

## Procedura

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner). OVHcloud non potrà fornirti assistenza nell’interpretazione dei log disponibili con la tua soluzione Web Cloud Databases. Per maggiori informazioni consulta la sezione "[Per saperne di più](#go-further)" di questa guida.
>

### Consultare in tempo reale i log della soluzione Web Cloud Databases

Per verificare in tempo reale i log della soluzione Web Cloud Databases, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Web Cloud Databases`{.action}.
4. Seleziona la soluzione Web Cloud Databases.
5. Clicca sulla scheda `Log`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-with-logs.png){.thumbnail}

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
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Web Cloud Databases`{.action}.
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

## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare il Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).