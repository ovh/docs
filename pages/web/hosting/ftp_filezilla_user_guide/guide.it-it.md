---
title: 'Tutorial - Utilizzare FileZilla con il tuo hosting OVHcloud'
slug: hosting_condiviso_guida_allutilizzo_di_filezilla
excerpt: 'Consulta qui una guida all'utilizzo del software Filezilla sul tuo hosting condiviso.'
section: FTP e SSH
order: 04
---

**Ultimo aggiornamento: 13/09/2022**

> [!primary]
>
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

FileZilla è un software disponibile gratuitamente su diversi sistemi operativi (Windows, macOS, ecc...).
Permette di pubblicare online file o sito Internet [accedendo allo spazio FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) del tuo hosting.

**Questa guida ti mostra come utilizzare Filezilla con il tuo hosting condiviso.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla gestione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/) o contattare l'amministratore del software. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
> 

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di una soluzione di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} attiva
- Aver installato il software Filezilla sul tuo computer Disponibile gratuitamente sulla pagina [filezilla-project.org](https://filezilla-project.org/download.php){.external}

## Presentazione dell'interfaccia <a name="interface"></a>

![hosting](images/1818.png){.thumbnail}

- La parte superiore **incorniciata** permette una connessione rapida al tuo hosting inserendo il nome dell'**hosting**, il nome dell'**utente**, la **password** associata e il numero di **porta** utilizzato.
- **zona 1**\: dettagli sullo storico delle operazioni, sulla connessione allo spazio FTP, sui trasferimenti di file, sugli errori, ecc. Per saperne di più, consulta la [documentazione ufficiale di Filezilla](https://filezilla-project.org/){.external}.
- **zona 2**\: archivia directory/file locali sul tuo computer
- **zona 3**\: archivia directory/file remoti quando sei connesso al tuo hosting.
- **zona 4**\: elenco delle directory/file nella directory selezionata in locale sul tuo computer.
- **zona 5**\: elenco delle directory/file remoti nella directory selezionata sul tuo hosting.
- **zona 6**\: lista delle operazioni di trasferimento in corso, in attesa o in errore tra il tuo computer e il tuo hosting.

## Procedura

### Connessione con Filezilla en FTP

![hosting](images/quickcnt.png){.thumbnail}

Dalla barra di connessione rapida, completa le informazioni seguendo la tabella:

|Informazione|Descrizione|
|---|---|
|Host| Indirizzo del server che permette di accedere allo spazio di archiviazione del tuo hosting.<br><br> Per gli hosting condivisi, ha generalmente questa forma: `ftp.clusterXXX.hosting.ovh.net` (i `XXX` rappresentano il numero di cluster in cui si trova il tuo hosting)|
|Utente|Identificativo che ti permette di accedere allo spazio di storage del tuo hosting.|
|Password|Password associata all'utente.|
|Porta|In genere viene completato automaticamente dal software. Altrimenti, inserisci:<br><br>\- la porta "21" per una connessione FTP;<br>\- la porta "22" per una connessione SFTP (se attiva). Per maggiori informazioni sul protocollo SFTP, consulta [la sezione dedicata di questo tutorial](#sftp).|

Se non ne sei in possesso, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione "Web Cloud" e clicca su `Hosting`{.action}. Seleziona il nome dell’hosting interessato e clicca sulla scheda `FTP - SSH`{.action}. A questo punto visualizzi le informazioni relative al tuo spazio di storage:

![hosting](images/loginFTP-SSH.png){.thumbnail}

> [!warning]
>
> Alcune offerte OVHcloud non utilizzano la porta 22 per le connessioni SFTP e/o SSH. Utilizza le porte che appaiono nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
>

Una volta che tutto è stato inserito correttamente nel riquadro **1** dell'immagine qui sotto, clicca su `Connessione rapida`{.action}.

![hosting](images/1819.png){.thumbnail}

Se la connessione è stata effettuata correttamente, ti informeremo tramite lo stato presente nel riquadro **2** dell'immagine qui sotto. In questo modo è possibile visualizzare le directory/cartelle e file già presenti sul tuo hosting (riquadro **3**).

### Connessione con Filezilla in SFTP <a name="sftp"></a>

Lo **SFTP** (per ****Secure ****File ****Transfer ****Protocol) è un protocollo simile al **FTP**. Come SSH, utilizza la porta 22 predefinita invece della porta 21. Se utilizzi un piano di hosting Cloud Web, è necessario utilizzare la porta che appare nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. La porta 22 è disattivata in SSH e SFTP per gli hosting Cloud Web.

> [!success]
>
> SFTP è attivabile gratuitamente per tutte le offerte di hosting OVHcloud (tranne le vecchie offerte 60free/demo1g).
> 

#### Verifica l'attivazione di SFTP

Per prima cosa verifica che l'SFTP sia attivo per il tuo **Login FTP**.

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione "Web Cloud" e clicca su `Hosting`{.action}. Seleziona il nome dell’hosting interessato e clicca sulla scheda `FTP - SSH`{.action}.

Verifica che il **protocollo SFTP** sia attivo nella tabella in basso.

![Attivazione SFTP offerta start](images/enable_sftp_start.png){.thumbnail}

Se non è attivo:

- Clicca sui tre puntini `...`{.action} in corrispondenza della tabella e seleziona `Modifica`{.action}.

![Attivazione SFTP 1](images/enable_sftp_1.png){.thumbnail}

- Nella nuova finestra, verifica che sia attiva una delle 2 opzioni seguenti:
    - **FTP e SFTP**\: per attivare solo il protocollo SFTP oltre al protocollo FTP.
    - **FTP, SFTP e SSH**\: per attivare FTP, SFTP e SSH.

![Attivazione SFTP 2](images/enable_sftp_2.png){.thumbnail}

- Clicca su `Seguente`{.action} e poi su `Conferma`{.action}

#### Avvia la connessione SFTP

![hosting](images/quickcnt.png){.thumbnail}

Nella parte superiore di Filezilla e per stabilire la connessione al server remoto (hosting), inserisci questi elementi:

- Host: `ftp.clusterXXX.hosting.ovh.net` (ricordati di sostituire gli `X` con quelli del tuo cluster di hosting)
- Identificativo: il tuo login FTP
- Password: la password FTP associata al login
- Porta: 22

Dopo aver cliccato sul pulsante `Connessione rapida`{.action}, si apre una casella di dialogo (vedi l'immagine qui sotto) per certificare la connessione all'host su cui ti stai per connetterti. Accedendo all'host OVHcloud, seleziona la casella *Sempre di fiducia nell'host, aggiungi la chiave alla cache* affinché il software non te la richieda più in futuro.

![hosting](images/1834.png){.thumbnail}

### Errori di connessione

Il messaggio visualizzato qui sotto indica un errore di identificazione durante la connessione in FTP o SFTP all'hosting condiviso:

![hosting](images/1820.png){.thumbnail}

Questo tipo di messaggio è generato da un errore nella coppia Login/Password.

Verifica le tue credenziali per assicurarti che non vengano inseriti errori. Se necessario, è possibile modificare la password di accesso FTP dell'hosting direttamente dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

> [!success]
> Per modificare la [password FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/) sulle offerte condivise, consulta questa guida.

Nel caso sotto riportato, l'errore è generato da un nome host non valido:

![hosting](images/1824.png){.thumbnail}

Verifica la configurazione in relazione all'hostname indicato nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

### Trasferimento dei file

Per effettuare il trasferimento dei tuoi file in FTP, selezionali e trascina le directory/file dalla finestra di sinistra *(computer)* alla finestra di destra *(hosting)* (**zone 4 e 5** descritte nella sezione di questo tutorial relativa [all'interfaccia](#interface) di Filezilla).

Seleziona la directory di destinazione nella finestra di destra.

Una volta effettuata questa operazione, i tuoi file si metteranno automaticamente in coda per essere depositati sul server.

![hosting](images/drag-drop-en.png){.thumbnail}

### Vista sulla coda di attesa

È disponibile una vista sulla coda di attesa (**zona 6** descritta nella sezione di questo tutorial relativa all'[interfaccia](#interface) di Filezilla).

In questa zona trovi:

- i file in attesa di essere depositati sul server remoto ancora presenti nella coda di attesa;
- i file per i quali il trasferimento non è andato a buon fine;
- i file per i quali il trasferimento è stato effettuato sull'hosting remoto.

![hosting](images/1822.png){.thumbnail}

### Menu contestuale Server

Fai click con il tasto destro su uno dei file presenti nella **zona 5** (descritta nella sezione di questo tutorial relativa [all'interfaccia](#interface) di Filezilla).

Appare un menu contestuale e ti vengono proposte diverse opzioni:

- Scarica: scarica il file nella cartella locale aperta.
- Aggiungere i file alla coda d'attesa: aggiungi il file alla coda di attesa, ti permette ad esempio di rinviare il download dei dati.
- Mostra/Modifica: ti permette di visualizzare o modificare direttamente un file presente sul tuo hosting. ma è necessario disporre di un software in grado di leggere il file installato sulla tua postazione.
- Crea una cartella: ti permette di creare una nuova cartella direttamente sull'hosting remoto.
- Aggiorna: aggiorna la visualizzazione dei dati per visualizzare correttamente i diversi file presenti.
- Elimina: permette di eliminare il file selezionato.
- Rinomina: ti permette di rinominare il file selezionato.
- Copia l'indirizzo(i) negli appunti: ti permette di copiare automaticamente il link diretto al file selezionato. Esempio di URL che può essere generato: `ftp://loginftp@ftp.cluster0XX.hosting.ovh.net/www/mondossier1/monfichier.jpg`
- Permessi di file: ti dà la possibilità di modificare i diritti dei file (Chmod)

![hosting](images/1830.png){.thumbnail}

## Informazioni utili

### Diritti di accesso (Chmod) su file e cartelle

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

![hosting](images/1831.png){.thumbnail}

Inserisci i permessi da assegnare, il valore Chmod verrà automaticamente aggiornato.

Seleziona la casella "Sicurezza nelle sottocartelle".

Ciò comporterà la modifica dei diritti del fascicolo in questione, nonché dei fascicoli e dei file che potrebbero essere presenti in quest'ultimo.

### Riapertura del sito

> [!primary]
>
> Indipendentemente da un intervento da parte tua, il tuo hosting può essere disattivato in seguito al rilevamento di file malevoli o non autorizzati sul tuo hosting dai nostri sistemi di sicurezza.
>
> In questo caso, è necessario [proteggere le soluzioni](https://docs.ovh.com/it/hosting/diagnostic-403-forbidden/) correggendo le falle di sicurezza indicate nella notifica di blocco ricevuta via email.
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

![hosting](images/1829.png){.thumbnail}

Se si ottiene l'errore `550 would not chance perms on /. not such file or director`, esegui il comando:

```bash
SITE CHMOD 705.
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

### Trasferimento di file binari

Per i file di tipo binario, come ad esempio i file di tipo **CGI**, può essere interessante scegliere il modo in cui il trasferimento sarà effettuato.

Per modificare il tipo di trasferimento, seleziona `Trasferimento`{.action} nel menu principale e poi `Tipo di trasferimento`{.action}.

![hosting](images/1832.png){.thumbnail}

### Confronto cartelle

![hosting](images/1823.png){.thumbnail}

L'opzione di confronto dei file mostra colori nelle **zone 4** e **5** (come mostrato nella sezione di questo tutorial relativa all'[interfaccia](#interface) di Filezilla). Questa opzione permette di evidenziare le differenze tra file e cartelle locali e quelle sul server. 

Cliccando con il tasto destro sull'icona, puoi cambiare il metodo di confronto. Ti verrà chiesto di attivare o disattivare l'opzione, ma anche di:

- confrontare la dimensione dei file
- confrontare l'ora
- nascondi i file identici.

**Significato dei colori:**

- Giallo: il file esiste solo da un lato.
- Verde: il file è più recente del file non colorato dall'altro lato.
- Rosso: le dimensioni dei file sono diverse.

## Per saperne di più <a name="go-further"></a>

Di seguito trovi il link alla nostra guida per [risolvere gli errori ricorrenti nell'utilizzo di un software FTP](https://docs.ovh.com/it/hosting/condividili-problemi-ftp-ricorrenti/).

Più in generale, consulta [le nostre guide relative agli hosting condivisi](https://docs.ovh.com/it/hosting/).

Consulta la [pagina ufficiale di Filezilla](https://filezilla-project.org/).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
