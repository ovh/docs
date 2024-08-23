---
title: "Tutorial - Utilizzare Cyberduck con un hosting Web"
excerpt: "Questa guida ti mostra come utilizzare l’applicazione Cyberduck per connettersi a un hosting Web OVHcloud"
updated: 2024-02-23
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Disponibile su macOS e Windows, Cyberduck è un'applicazione open source per il trasferimento di file. Permette di accedere allo spazio di storage FTP dell’hosting Web (utilizzando il protocollo FTP o SFTP).

Per scaricare Cyberduck, accedi al [sito ufficiale](https://cyberduck.io/) dell’applicazione.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/logo.png){.thumbnail}

> [!primary]
>
> - Cyberduck è un'applicazione disponibile su macOS e Windows. L’interfaccia e le funzionalità di Cyberduck sono relativamente simili tra i due sistemi operativi: in questo modo, il tutorial è stato eseguito su una macchina Windows.
> - Questa guida è stata realizzata con una versione gratuita dell'applicazione in versione 8.7.2, scaricata dal [sito ufficiale](https://cyberduck.io/).
>

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o il fornitore del servizio. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni, consulta la sezione [Per saperne di più](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di una soluzione di [hosting Web](/links/web/hosting){.external}.
- Aver scaricato e installato l’applicazione Cyberduck sul proprio computer.

## Procedura

### Interfaccia

Quando avvii l’applicazione, viene visualizzata l’interfaccia qui sotto.

- La parte superiore, racchiusa in arancione, corrisponde alla barra degli strumenti. Ti permette di stabilire una connessione al tuo spazio di hosting, di navigare nella gerarchia delle cartelle e dei file, di consultare la cronologia delle tue azioni e molte altre.
- Il contenuto che si desidera visualizzare è riportato sotto. Ad esempio, se clicchi sull’icona `History`{.action}, comparirà la lista delle tue azioni.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/start-page.png){.thumbnail}

### Personalizza la visualizzazione di Cyberduck

È possibile personalizzare la visualizzazione di Cyberduck per renderla più efficiente e personale.

Nel menu principale, nella parte superiore dell’interfaccia, clicca su `View`{.action} e poi su `Customize Toolbar...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-toolbar.png){.thumbnail}

Nella nuova finestra, trascinare gli elementi desiderati sulla barra degli strumenti. Ad esempio, per aggiungere un’icona `Download`{.action} alla barra degli strumenti, trascinare e rilasciare l’icona `Download`{.action} sulla barra degli strumenti. Per confermare le modifiche, clicca su `Done`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-display.png){.thumbnail}

### Utilizza Cyberduck

#### Connessione SFTP

> [!warning]
>
> Per motivi di sicurezza, non è consigliabile connettersi tramite FTP. La maggior parte dei sistemi operativi vieta la possibilità di connettersi tramite FTP. Preferisci una connessione SFTP.
>

Per accedere allo spazio di hosting Web, segui questi step:

**1.** Nella barra degli strumenti, clicca su `Open Connection`{.action}

**2.** Nel menu a tendina (cornice arancione dell’immagine), seleziona `SFTP (SSH File Transfert Protocol)`{.action}

**3.** Inserisci le informazioni di connessione al tuo spazio FTP:

- Server (Server)
- Username (Nome utente)
- Password (Password)
- Porta (22)

![hosting](/pages/assets/screens/other/web-tools/cyberduck/sftp-connection.png){.thumbnail}

> [!success]
>
> - Puoi salvare la tua password in Cyberduck selezionando `Add to keychain`{.action}. Se non selezioni la casella, inserisci la password per accedere nuovamente allo spazio di hosting Web.
> - Se non conosci tutte le tue informazioni FTP (server, identificativi, ecc...), consulta la guida "[Accedere allo spazio di storage FTP del proprio hosting Web](/pages/web_cloud/web_hosting/ftp_connection)".
> 

Quando effettui la prima connessione al tuo spazio di hosting Web, viene visualizzata una finestra con il titolo `Modified fingerprint`{.action}. Seleziona la casella `Always`{.action} e conferma. Questa operazione permette di certificare definitivamente l’host di connessione (OVHcloud).

> [!success]
>
> - Ti consigliamo di registrare le tue informazioni di connessione tramite un segnalibro. per ricordarsi di alcune informazioni di connessione.
> - Consulta questa parte della guida: [Cos'è un segnalibro?](#signet)
> 

#### Errori di connessione

Durante un tentativo di connessione al tuo spazio di hosting Web, è possibile che si verifichi un errore. Ecco i 2 errori più frequenti che si possono incontrare.

- `Connection failed (<server-SFTP>) - DNS lookup for <server> failed`

Nella maggior parte dei casi, questo errore è legato agli identificativi inseriti, che probabilmente sono errati. È quindi necessario verificare le informazioni di connessione inserite.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/open-session-failed.png){.thumbnail}

> [!success]
>
> - Se non conosci tutte le tue informazioni FTP (server, identificativi, ecc...), consulta la guida "[Connettersi allo spazio di storage FTP del proprio hosting Web](/pages/web_cloud/web_hosting/ftp_connection)".
> 

- `Connection failed (<server-SFTP>) - Operation timed out`

Questo messaggio è accompagnato dalla dicitura `Operation timed out`. Questo messaggio indica in genere che l'host non è raggiungibile o che non è corretto. Verifica le credenziali di accesso inserite.

L'errore può essere causato anche da un firewall o dalla LAN che blocca la porta 21 o 22 utilizzata per connettersi al server. In questo caso, è necessario verificare la configurazione personale.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/connection-failed.png){.thumbnail}

> [!primary]
>
> - Ti ricordiamo che l’host di connessione per il tuo spazio di hosting è `ftp.cluster0XX.hosting.ovh.net` (sostituisci i `XXX` con il tuo numero di cluster).
> - Se necessario, consulta la guida "[Accedere allo spazio di storage FTP del proprio hosting Web](/pages/web_cloud/web_hosting/ftp_connection)".
>

<a name="signet"></a>

### Che cos'è un segnalibro?

Per facilitare l’accesso allo spazio di hosting Web, consigliamo di utilizzare i segnalibri. Permettono di pre-salvare le informazioni di connessione, evitando di inserirle ad ogni connessione.

Per effettuare questa aggiunta:

1. Accedi allo spazio FRP dell’hosting Web.
2. Nella parte superiore dell’interfaccia, sulla barra degli strumenti, clicca sulla scheda `Bookmarks`{.action} (cornice arancione nell’immagine qui sotto).
3. Clicca sull’icona `+`{.action} in basso a sinistra della finestra per aggiungere un nuovo segnalibro.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/add-signet.png){.thumbnail}

Verrà visualizzata una finestra con le informazioni di accesso e una nuova riga nell'elenco dei segnalibri. Al prossimo avvio di Cyberduck, sarà possibile fare doppio clic sul segnalibro per accedere più rapidamente.

### Trasferire file

Il trasferimento di file ti permette di salvare il tuo sito Internet sul tuo spazio di hosting Web. Di default, è necessario salvare i file nella directory (cartella) `www`. Puoi trasferire i tuoi file in diversi modi.

#### Tramite drag&drop

Per effettuare il trasferimento dei tuoi file, seleziona e trascina la selezione dalla finestra della cartella locale (i tuoi file sulla tua macchina) alla finestra di Cyberduck (spazio di archiviazione FTP del tuo hosting Web). Una volta completata l’operazione, i file vengono inseriti automaticamente in coda per essere depositati sul server. A questo punto, si aprirà una finestra.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/drag-drop-transfert-file.png){.thumbnail}

#### Dal menu principale

Nel menu di Cyberduck, clicca su `File`{.action} e poi su `Upload...`{.action}. Seleziona i file da trasferire sul server e clicca su `Upload`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files.png){.thumbnail}

### Visualizza i trasferimenti in corso

È possibile visualizzare la cronologia dei trasferimenti effettuati verso lo spazio di storage FTP del tuo hosting Web. In questo modo è possibile trovare:

- i file in attesa di essere depositati sul server remoto (ancora presenti nella coda di attesa o in corso di invio);
- i file per i quali il trasferimento non è riuscito;
- i file per i quali il trasferimento è stato effettuato con successo sull’hosting web remoto.

Questa finestra viene visualizzata in due modi diversi:

- automaticamente all'avvio di un trasferimento;
- cliccando su `Window`{.action} (nel menu principale) e poi su `Transfers`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

### Azioni possibili su un file / cartella

Fare doppio clic su un file o una cartella per eseguire le operazioni seguenti:

- Leggere le informazioni di un file o di una cartella e modificarne i diritti (CHMOD).
- Modifica il file con l’applicazione che preferisci.
- Rinominare il file o la cartella.
- Eliminare il file o la cartella.
- Scarica gli elementi selezionati.
- Creare una nuova cartella o file.

Questa lista non è esaustiva, sono possibili altre azioni. Se necessario, visitare il [sito ufficiale](https://cyberduck.io/) di Cyberduck.

### Informazioni utili

#### Diritti dei file e delle cartelle

È possibile modificare i diritti (CHMOD) dei file e delle cartelle presenti sull’hosting Web.

Questi ultimi si dividono in 3 famiglie:

- Owner (Proprietario)
- Group (Gruppo)
- Other (Altri)

Clicca due volte su un file o una cartella e seleziona `Info`{.action}. Viene visualizzata la seguente finestra:

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

Clicca sulla scheda `Permissions`{.action} e poi effettua le modifiche:

- UNIX Permissions: questo valore definisce i diritti delle 3 famiglie (Proprietario, Gruppo e altri).
- Selezionare le caselle di controllo: il valore verrà aggiornato automaticamente per i permessi UNIX.

#### Riapertura del sito Web

Per riaprire il sito Web è possibile utilizzare un comando personalizzato.

Nella maggior parte dei casi, questa operazione è stata eseguita in seguito a una chiusura per sicurezza dello spazio di storage FTP dell’hosting Web da parte di OVHcloud, a seguito di un attacco di hacker.

Nel menu di Cyberduck, clicca su `Go`{.action} e poi su `Send command...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/send-ftp-command.png){.thumbnail}

Nella nuova finestra, inserisci il comando `CHMOD 705 /` e clicca su `Send`{.action} per eseguire il comando. Come conferma, il messaggio `200 Permissions changed on /` dovrebbe apparire nel riquadro sottostante.

Per assicurarti che la riapertura avvenga correttamente, accedi al tuo sito Web da un browser Web.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/site-chmod-705-command.png){.thumbnail}

> [!warning]
>
> - Questo comando non funziona in SFTP. Per effettuare questa operazione, utilizza una connessione FTP.
> - Ti ricordiamo di verificare il display dopo 3 ore. Infatti, i nostri robot passano ogni 3 ore per controllare i cambiamenti di stato. In base al momento dell’operazione, il ripristino della visualizzazione del sito potrebbe essere più o meno rapido.
> - Se il termine delle 3 ore è scaduto e il tuo sito Web non è ancora online, contatta il supporto OVHcloud.
>

## Per saperne di più <a name="go-further"></a>

[Tutorial - Utilizzare FileZilla con l’hosting OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Contatta la nostra [Community di utenti](/links/community).