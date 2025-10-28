---
title: "Hosting Web - Come utilizzare FileZilla"
excerpt: "Questa guida ti mostra come accedere allo spazio di storage dell’hosting Web OVHcloud e gestire i dati in esso contenuti grazie al software FileZilla"
updated: 2025-09-12
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

> [!primary]
> **Disattivazione dello strumento FTP Explorer/Net2FTP**
>
> Per gli hosting Web, non è più possibile connettersi allo spazio di storage FTP tramite lo strumento online FTP Explorer/Net2FTP. Per continuare a connettersi in FTP al tuo hosting Web, utilizza i software [FileZilla](https://filezilla-project.org/download.php) o [Cyberduck](https://cyberduck.io/).

## Obiettivo

FileZilla è un software disponibile gratuitamente su diversi sistemi operativi (Windows, macOS, ecc.).

Permette di mettere online file o siti Internet [accedendo allo spazio di storage](/pages/web_cloud/web_hosting/ftp_connection) del tuo hosting Web.

**Questa guida ti mostra come accedere allo spazio di storage dell’hosting Web OVHcloud e gestire i dati in esso contenuti grazie al software FileZilla.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Disporre di una soluzione di [hosting Web](/links/web/hosting) attiva.
- Aver installato il software FileZilla sul tuo computer Disponibile gratuitamente sulla pagina [filezilla-project.org](https://filezilla-project.org/download.php).

## Presentazione dell'interfaccia <a name="interface"></a>

/// details | Fare clic qui per visualizzare il contenuto di questa sezione.

![FileZilla-interface](/pages/assets/screens/other/web-tools/filezilla/main-interface.png){.thumbnail}

- La parte superiore **incorniciata** permette una connessione rapida al tuo hosting inserendo il nome dell'**hosting**, il nome dell'**utente**, la **password** associata e il numero di **porta** utilizzato.
- **zona 1**: Dettagli sullo storico delle operazioni, sulla connessione allo spazio FTP, sui trasferimenti di file, sugli errori, ecc. Per saperne di più, consulta la [documentazione ufficiale di FileZilla](https://filezilla-project.org/).
- **zona 2**: Archivia directory/file locali sul tuo computer.
- **zona 3**: Archivia directory/file remoti quando sei connesso al tuo hosting.
- **zona 4**: Elenco delle directory/file nella directory selezionata in locale sul tuo computer.
- **zona 5**: Elenco delle directory/file remoti nella directory selezionata sul tuo hosting.
- **zona 6**: Lista delle operazioni di trasferimento in corso, in attesa o in errore tra il tuo computer e il tuo hosting.

///

## Procedura

### 1 - Recupera le informazioni di connessione allo spazio di storage dell’hosting Web <a name="part-1"></a>

Eseguire le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}.
4. Nella nuova pagina, visualizzi le informazioni relative allo spazio di storage. Recupera questi elementi:
    - Il `Server FTP e SFTP` rappresentato nel formato seguente: `ftp.clusterXXX.hosting.ovh.net` (dove ciascuno dei 3 `X` corrisponde a una cifra compresa tra `0` e `9`).
    - Uno degli utenti presenti nella colonna `Login` della tabella situata a piè di pagina. In alternativa, è possibile utilizzare il `Login principale`.
    - Il numero della `Porta FTP` o il numero della `Porta SFTP` in base al protocollo di connessione che si desidera utilizzare per connettersi allo spazio di storage.

> [!primary]
>
> Per motivi di sicurezza, la password di un utente non appare sulla pagina della scheda `FTP - SSH`{.action}. Se l’hai dimenticato, consulta [questa guida](/pages/web_cloud/web_hosting/ftp_change_password) per modificarlo.

### 2 - Accedere allo spazio di storage dell’hosting grazie a FileZilla

La connessione può essere effettuata tramite due protocolli di trasferimento file:

- **F**ile **T**ransfer **P**rotocol (**FTP**).
- **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**).

> [!primary]
>
Se possibile, ti consigliamo di utilizzare il protocollo **SFTP** per accedere allo spazio di storage con FileZilla.
>
> Il protocollo **SFTP** cripta lo scambio di dati tra il tuo dispositivo e il tuo hosting Web. In caso di difficoltà di utilizzo, ad esempio nella segmentazione di utenti o cartelle, sarà necessario utilizzare il protocollo **FTP**.

**Fare clic sul protocollo di connessione desiderato per visualizzare le spiegazioni.**

/// details | Accedere in SFTP allo spazio di storage di un hosting Web grazie a FileZilla. <a name="sftp"></a>

Il **SFTP** utilizza, come l'SSH, la porta 22 di default al posto della porta 21. Se utilizzi un piano di hosting Cloud Web, è necessario utilizzare la porta visualizzata nello [Spazio Cliente OVHcloud](/links/manager). Per gli hosting Cloud Web, la porta 22 è stata disattivata in sicurezza in SSH e SFTP.

> [!success]
>
> SFTP è attivabile gratuitamente per tutte le offerte di hosting OVHcloud (eccetto le vecchie offerte 60free e demo1g).
>

**Verifica l'attivazione del protocollo SFTP**

Per farlo, torna alla scheda `FTP-SSH`{.action} dello [Spazio Cliente OVHcloud](/links/manager) come indicato nella [prima parte](#part-1) di questa guida.

Nella tabella a piè di pagina, individua la colonna `SFTP` e verifica che l’utente (presente nella colonna `Login` della tabella) interessato disponga di un accesso SFTP attivo. In caso contrario, comparirà la voce `Disattivato`.

Se l’accesso SFTP dell’utente interessato è `Disattivato` nella tabella, effettuare le seguenti operazioni:

- Per le offerte Personale, spunta la casella a sinistra della voce `Disattivato` nella tabella.

- Per le offerte Pro e Performance:

    - 1: Clicca sul pulsante `...`{.action} a destra della riga corrispondente all’utente e poi su `Modificare`{.action}.
    - 2: Nella finestra che appare, sezione `Protocolli di connessione`, seleziona la scelta `FTP e SFTP`{.action}, poi clicca su `Continua`{.action}.
    - 3: Verifica il riepilogo della modifica richiesta e clicca su `Conferma`{.action}.

**Connettersi in SFTP con FileZilla**

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Nella barra di connessione rapida, completa i campi con le informazioni richieste nella tabella seguente:

|Informazioni da inserire|Dettagli|
|---|---| 
|Host| Indirizzo del server che consente di accedere allo spazio di storage dell’hosting Web.<br> Questa interfaccia è in genere il seguente: `ftp.clusterXXX.hosting.ovh.net` (gli `XXX` rappresentano il numero del cluster in cui si trova l’hosting Web).|
|Utente|Identificativo che ti permette di accedere allo spazio di storage del tuo hosting.|
|Password|Password associata all'utente.|
|Porta|Inserisci il numero della porta SFTP recuperata precedentemente nella [prima parte](#part-1) di questa guida per una connessione SFTP.|

Una volta inserito tutto correttamente nel riquadro **1** dell’immagine qui sotto, clicca su `Connessione rapida`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Si apre una finestra di dialogo (vedi l’immagine qui di seguito) per certificare la connessione all’host sul quale ti stai preparando a connetterti. Una volta effettuato l’accesso a un host OVHcloud, seleziona la casella *Considera sempre attendibile l’host e aggiungi la chiave alla cache*, in modo che il software non richieda più la stessa informazione a te.

![hosting](/pages/assets/screens/other/web-tools/filezilla/unknown-host-key-message.png){.thumbnail}

///

/// details | Accedere in FTP allo spazio di storage di un hosting Web grazie a FileZilla.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Nella barra di connessione rapida, completa i campi con le informazioni richieste nella tabella seguente:

|Informazioni da inserire|Dettagli|
|---|---| 
|Host| Indirizzo del server che consente di accedere allo spazio di storage dell’hosting Web.<br> Questa interfaccia è in genere il seguente: `ftp.clusterXXX.hosting.ovh.net` (gli `XXX` rappresentano il numero del cluster in cui si trova l’hosting Web).|
|Utente|Identificativo che ti permette di accedere allo spazio di storage del tuo hosting.|
|Password|Password associata all'utente.|
|Porta|In genere viene completato automaticamente dal software. In caso contrario, inserisci la porta `21` per una connessione FTP.|

Una volta inserito tutto correttamente nel riquadro **1** dell’immagine qui sotto, clicca su `Connessione rapida`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Se la connessione è stata effettuata correttamente, ti verrà notificato tramite lo stato presente nel riquadro **2** dell'immagine qui sopra. In questo modo è possibile visualizzare le directory/cartelle e i file già presenti sul tuo hosting (riquadro **3**).

///

#### Errori di connessione

**Fare clic sull'errore che si sta riscontrando per visualizzare la soluzione.**

/// details | Authentication failed - Could not connect to server 

Il messaggio visualizzato qui sotto indica un errore di identificazione durante la connessione in FTP o SFTP all'hosting condiviso:

![hosting](/pages/assets/screens/other/web-tools/filezilla/authentification-failed-could-not-connect-server.png){.thumbnail}

Questo tipo di messaggio è generato da un errore nella coppia Login/Password.

Verifica le tue credenziali per assicurarti che non vengano inseriti errori. Se necessario, è possibile [modificare la password di accesso FTP](/pages/web_cloud/web_hosting/ftp_change_password) del proprio hosting Web direttamente dallo [Spazio Cliente OVHcloud](/links/manager).

///

/// details | Connection timed out after 20 seconds of inactivity - Could not connect to server

Nel caso sotto riportato, l'errore è generato da un nome host non valido:

![hosting](/pages/assets/screens/other/web-tools/filezilla/connection-timed-out-after-20s.png){.thumbnail}

Verifica la configurazione in relazione all'hostname indicato nello [Spazio Cliente OVHcloud](/links/manager).

///

### 3 - Trasferimento dei file

Per effettuare il trasferimento dei tuoi file in (S)FTP, selezionali e trascina le directory/file dalla finestra di sinistra *(computer)* alla finestra di destra *(hosting)* (**zone 4 e 5** descritte nella sezione di questo tutorial relativa [all'interfaccia](#interface) di FileZilla).

Seleziona la directory di destinazione nella finestra di destra.

Una volta effettuata questa operazione, i tuoi file si metteranno automaticamente in coda per essere depositati sul server.

![hosting](/pages/assets/screens/other/web-tools/filezilla/drag-drop-en.png){.thumbnail}

### 4 - Altre funzionalità di FileZilla

**Clicca sui titoli qui sotto per visualizzare i rispettivi contenuti.**

/// details | Vista sulla coda di attesa

È disponibile una vista sulla coda di attesa (**zona 6** descritta nella sezione di questo tutorial relativa all'[interfaccia](#interface) di FileZilla).

In questa zona trovi:

- i file in attesa di essere depositati sul server remoto ancora presenti nella coda di attesa;
- i file per i quali il trasferimento non è andato a buon fine;
- i file per i quali il trasferimento è stato effettuato sull'hosting remoto.

![hosting](/pages/assets/screens/other/web-tools/filezilla/waiting-list-view.png){.thumbnail}

///

/// details | Menu contestuale del server

Fai click con il tasto destro su uno dei file presenti nella **zona 5** (descritta nella sezione di questo tutorial relativa [all'interfaccia](#interface) di FileZilla).

Appare un menu contestuale e ti vengono proposte diverse opzioni:

- Scarica: Scarica il file nella cartella locale aperta.
- Aggiungere i file alla coda d'attesa: Aggiungi il file alla coda di attesa, ti permette ad esempio di rinviare il download dei dati.
- Mostra/Modifica: Ti permette di visualizzare o modificare direttamente un file presente sul tuo hosting. ma è necessario disporre di un software in grado di leggere il file installato sulla tua postazione.
- Crea una cartella: Ti permette di creare una nuova cartella direttamente sull'hosting remoto.
- Aggiorna: Aggiorna la visualizzazione dei dati per visualizzare correttamente i diversi file presenti.
- Elimina: Permette di eliminare il file selezionato.
- Rinomina: Ti permette di rinominare il file selezionato.
- Copia l'indirizzo(i) negli appunti: Ti permette di copiare automaticamente il link diretto al file selezionato. Esempio di URL che può essere generato: `ftp://loginftp@ftp.clusterXXX.hosting.ovh.net/www/my_folder1/my_file.jpg`.
- Permessi di file: Ti dà la possibilità di modificare i diritti dei file (Chmod).

![hosting](/pages/assets/screens/other/web-tools/filezilla/contextual-menu-server.png){.thumbnail}

///

/// details | Diritti di accesso (Chmod) su file e cartelle

Clicca con il tasto destro su uno dei file presenti sul server e seleziona `Permessi di file...`{.action}.

È possibile modificare i diritti di accesso (Chmod) dei file e delle cartelle presenti sull'hosting.

In genere, è più facile gestire i diritti Chmod con il valore `XXX` (composto da 3 cifre che possono variare da 0 a 7). Il gruppo di permessi può quindi passare da `000` (nessun diritto) a `777` (tutti i diritti).

> [!alert]
>
> Attenzione: non è consigliato mettere i diritti Chmod 000 sulle cartelle e sui file. Infatti, non sarà più possibile (almeno in FTP) gestire questo elemento (anche in qualità di amministratore FTP).
>
> Lo stesso vale per i diritti Chmod 777 perché, a differenza di Chmod 000, chiunque può agire sulla cartella o sul file, il che presenta una falla di sicurezza conseguente per i tuoi dati ospitati.
>

Il primo delle tre cifre `XXX` che definisce il Chmod corrisponde ai diritti del proprietario/amministratore, il secondo ai diritti di gruppo (raramente utilizzato e generalmente uguale a 0) e il terzo ai visitatori del tuo sito sul tuo hosting.

Di default, ti consigliamo di non oltrepassare i diritti Chmod **705** per le cartelle e i diritti Chmod **604** per i file.

Più la cifra è alta, più i permessi sono importanti.

![hosting](/pages/assets/screens/other/web-tools/filezilla/change-file-attributes.png){.thumbnail}

Inserisci i permessi da assegnare, il valore Chmod verrà automaticamente aggiornato.

Seleziona la casella "Sicurezza nelle sottocartelle".

Ciò comporterà la modifica dei diritti del fascicolo in questione, nonché dei fascicoli e dei file che potrebbero essere presenti in quest'ultimo.

///

/// details | Riapertura del sito

> [!primary]
>
> Indipendentemente da un intervento da parte tua, il tuo hosting può essere disattivato in seguito al rilevamento di file malevoli o non autorizzati sul tuo hosting dai nostri sistemi di sicurezza.
>
> In questo caso, è necessario [proteggere le soluzioni](/pages/web_cloud/web_hosting/diagnostic_403_forbidden#step-2) correggendo le falle di sicurezza indicate nella notifica di blocco ricevuta via email.
>

Clicca su `Server`{.action} e seleziona `Inserisci un ordine personalizzato`{.action} (questa opzione può anche essere chiamata `Inserisci un ordine FTP`{.action}).

Inserisci questo comando:

```bash
SITE CHMOD 705 /
```

> [!warning]
>
> Questo comando non funziona con SFTP.
>

![hosting](/pages/assets/screens/other/web-tools/filezilla/site-chmod-705-command.png){.thumbnail}

Se si ottiene l'errore `550 would not change perms on /. not such file or directory`, esegui il comando:

```bash
SITE CHMOD 705 .
```

> [!primary]
>
> Per verificare che la riapertura sia effettiva, prova il tuo sito da un browser dopo qualche minuto.
>

> [!warning]
>
> Verifica la visualizzazione dopo massimo 3 ore.<br>
> I nostri robot passano almeno 3 ore per verificare i cambiamenti di stato.<br>
> A seconda del momento in cui verrà effettuata l'operazione, il ripristino della visualizzazione del sito potrà essere più o meno rapido.<br>
> Se il tempo di 3 ore è scaduto e il tuo sito non è ancora online, verifica che l'ordine inserito sia stato completato ripetendo l'operazione.<br>
> Se ancora non funziona, contatta il nostro supporto.
> 

///

/// details | Trasferimento di file binari

Per i file di tipo binario, come ad esempio i file di tipo **CGI**, può essere interessante scegliere il modo in cui il trasferimento sarà effettuato.

Per modificare il tipo di trasferimento, seleziona `Trasferimento`{.action} nel menu principale e poi `Tipo di trasferimento`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/transfert-binary-files.png){.thumbnail}

///

/// details | Confronto cartelle

![hosting](/pages/assets/screens/other/web-tools/filezilla/comparison-tool.png){.thumbnail}

L'opzione di confronto dei file mostra colori nelle **zone 4** e **5** (come mostrato nella sezione di questo tutorial relativa all'[interfaccia](#interface) di FileZilla). Questa opzione permette di evidenziare le differenze tra file e cartelle locali e quelle sul server. 

Cliccando con il tasto destro sull'icona, puoi cambiare il metodo di confronto. Ti verrà chiesto di attivare o disattivare l'opzione, ma anche di:

- confrontare la dimensione dei file.
- confrontare l'ora.
- nascondi i file identici.

**Significato dei colori:**

- Giallo: Il file esiste solo da un lato.
- Verde: Il file è più recente del file non colorato dall'altro lato.
- Rosso: Le dimensioni dei file sono diverse.

///

## Per saperne di più <a name="go-further"></a>

Di seguito trovi il link alla nostra guida per [risolvere gli errori ricorrenti nell'utilizzo di un software FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems).

Più in generale, consulta [le nostre guide relative agli hosting condivisi](/products/web-cloud-hosting).

Consulta la [pagina ufficiale di FileZilla](https://filezilla-project.org/).

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).