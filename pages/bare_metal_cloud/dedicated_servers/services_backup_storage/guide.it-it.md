---
title: Utilizzare il Backup Storage su un server dedicato
excerpt: Come attivare e accedere allo spazio di storage aggiuntivo
updated: 2023-07-28
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

I server dedicati OVHcloud includono uno spazio di backup aggiuntivo per salvare i dati e i file di configurazione importanti. Questo spazio è scalabile, sicuro e indipendente dal server principale

**Questa guida ti mostra come attivare e utilizzare il tuo spazio di backup**.

> [!primary]
> Per maggiori informazioni, consulta la [pagina commerciale](https://www.ovhcloud.com/it/bare-metal/backup-storage/) dell'opzione Backup Storage.
>
> Questa guida non si applica ai servizi OVHcloud US.
>

## Prerequisiti

* Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external} sul proprio account OVHcloud
* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).
>

## Procedura

### Attiva il tuo Backup Storage

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Nella scheda `Backup Storage`{.action}, clicca sul pulsante `Attiva il Backup Storage`{.action}.

![Attiva il tuo Backup Storage](images/backup-storage01.png){.thumbnail}

Clicca su `Conferma`{.action} nel menu contestuale che appare.

![Attiva il tuo Backup Storage](images/backup-storage02.png){.thumbnail}

Il tuo Backup Storage sarà configurato in pochi minuti. Una volta completata la configurazione, riceverai un'email di conferma.

### Configura il controllo degli accessi

L'accesso allo spazio di storage è limitato per indirizzi IP tramite una lista di controllo degli accessi (<i>Access Control List</i> o ACL). Possono accedere allo storage solo gli indirizzi IP del tuo account OVHcloud registrati nell'ACL. I protocolli di accesso (FTP, NFS e CIFS) non sono autorizzati di default ma possono essere selezionati durante l'aggiunta di indirizzi IP.

#### Aggiungere un accesso backup

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Seleziona la scheda `Backup Storage`{.action} e clicca sul pulsante `Aggiungi un accesso`{.action}.

![Aggiungere un accesso backup](images/backup-storage03.png){.thumbnail}

Seleziona il blocco IP che vuoi autorizzare. Seleziona il(i) protocollo(i) da autorizzare e clicca su `Seguente`{.action}.

> [!primary]
>
> Nello Spazio Cliente OVHcloud è possibile aggiungere all'ACL solo alcuni blocchi di indirizzi IP del tuo account.
>

![Aggiungere un accesso backup](images/backup-storage04.png){.thumbnail}

Conferma cliccando su `Termina`{.action}.

A questo punto è possibile accedere al Backup Storage del server utilizzando il blocco IP selezionato.

#### Modifica o elimina un accesso al backup

Una volta attivato il servizio, la tabella ACL viene visualizzata nella scheda `Backup storage`{.action}. Clicca sui tre puntini `...`{.action} a destra di un blocco IP per aprire il menu di accesso.

![Aggiungere un accesso backup](images/backup-storage05.png){.thumbnail}

Per modificare i protocolli di un blocco IP autorizzato, clicca su `Modifica l'accesso`{.action} e seleziona/deseleziona i protocolli nel menu che appare. Salva le modifiche cliccando su `Conferma`{.action}.

Per eliminare l'autorizzazione di un blocco IP, clicca su `Elimina l'accesso`{.action} e poi su `Conferma`{.action} nel menu che appare.

#### Accedi al Backup Storage da un IP esterno al tuo servizio <a name="accessbackup"></a>

L'accesso al Backup Storage può essere limitato al servizio associato tramite lo Spazio Cliente OVHcloud.

Per poter aggiungere altri indirizzi IP di diversi servizi, utilizza [l'API OVHcloud](/pages/manage_and_operate/api/first-steps).
per recuperare i backup da un servizio di un'altra localizzazione.

> [!warning]
> Possono essere autorizzati solo gli indirizzi IP OVHcloud.
>

Accedi all'[api.ovh.com](https://api.ovh.com/) e utilizza questa chiamata:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/features/backupFTP/access
>

Inserisci i campi in questo modo:

- `serviceName`: il nome del tuo server dedicato
- `cifs`: barrare se necessario
- `ftp`: barrare se necessario
- `ipBlock`: inserisci l'IP che avrà accesso nella forma `1.2.3.4/32`
- `nfs`: barrare se necessario

![apiacladri](images/aclapi01.png){.thumbnail}

Per verificare che il tuo indirizzo IP sia autorizzato, utilizza questa chiamata:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/features/backupFTP/access
>

![apiacladri](images/aclapi02.png){.thumbnail}

### Reimposta la password

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Seleziona la scheda `Backup Storage`{.action} e clicca sul pulsante `Password dimenticata`{.action}.

Dopo aver cliccato su `Conferma`{.action} nella nuova finestra, riceverai un'email di recupero password all'indirizzo email salvato sul tuo account amministratore. Segui le istruzioni riportate per reimpostare la password.

### Eliminare il Backup Storage

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Seleziona la scheda `Backup Storage`{.action} e clicca sul pulsante `Elimina il Backup Storage`{.action}.

Clicca su `Conferma`{.action} sul messaggio di avvertimento per procedere all'eliminazione. Il tuo Backup Storage sarà eliminato dopo pochi minuti. Tutti i dati dello spazio di storage verranno eliminati.

### Ordina spazio disco aggiuntivo

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Seleziona la scheda `Backup Storage`{.action} e clicca sul pulsante Ordina `spazio disco`{.action}.

![Ordina spazio disco aggiuntivo](images/backup-storage06.png){.thumbnail}

Seleziona la capacità di storage che vuoi ordinare e clicca su `Seguente`{.action}.

Leggi le condizioni generali e conferma l'ordine cliccando su `Conferma`{.action}.
Verrà creato un buono d'ordine. Una volta effettuato il pagamento, riceverai una notifica dell'estensione del tuo spazio di storage.

### Utilizza il Backup Storage

> [!primary]
>
> Il servizio di Backup Storage non effettua un backup automatico dei tuoi dati. ma non prevede il backup automatico dei tuoi dati. Definire una strategia di backup efficiente e scegliere gli strumenti più adatti per attuarla è quindi responsabilità dell’utente. OVHcloud non potrà essere considerata responsabile dei dati contenuti in questi spazi.
>

> [!warning]
>
> Il servizio di Backup Storage ha un limite di tre connessioni simultanee su un IP.
>

#### FTP/FTPS

##### NcFTP (per Linux)

Per salvare un solo file, esegui il comando:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Questo comando non supporta il protocollo FTPS. Per effettuare un trasferimento sicuro, utilizza il client LFTP o cURL.**

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **FolderLocation**: percorso completo della cartella di destinazione in cui salvare il file
* **File**: nome del file di cui vuoi effettuare un backup

Per realizzare il backup di una directory è sufficiente archiviarla e trasferirla nello spazio di backup, con il comando: 

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **FolderName**: percorso completo della cartella di cui vuoi effettuare un backup
* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **ArchiveName**: nome della cartella di cui vuoi effettuare un backup

Per scaricare un file di backup dallo spazio di storage, utilizza questo il comando:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **LocalFolder**: percorso completo della cartella locale in cui vuoi salvare il file
* **File**: percorso completo del file da scaricare

##### cURL (per Linux)

> [!primary]
>
> Per utilizzare il protocollo FTPS è necessario modificare il nome del Backup Storage: “ftpback-rbxX-YYY.ip- Z.Z.Z.Z.net”, ad esempio, dovrà essere cambiato in “ftpback-rbxX-YYY.mybackup.ovh.net”. Dovrai inoltre aggiungere l'argomento `-ssl` al seguente comando.
>

Per salvare un solo file, esegui il comando:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **File**: nome del file di cui vuoi effettuare un backup
* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **FolderLocation**: percorso completo della cartella di destinazione in cui vuoi salvare il file

Per realizzare il backup di una directory è sufficiente archiviarla e trasferirla nello spazio di backup, con il comando: 

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **FolderName**: percorso di accesso alla cartella di cui vuoi effettuare un backup
* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **FolderLocation**: percorso completo della cartella locale di destinazione in cui vuoi salvare il file
* **ArchiveName**: nome della cartella di cui vuoi effettuare un backup

Per scaricare un file di backup dallo spazio di storage, utilizza questo il comando:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **LocalFolder**: nome della cartella locale in cui salvare il file
* **File**: percorso completo del file da scaricare

##### lftp (per Linux)

> [!primary]
>
> Di default, lftp utilizza FTP+SSL/TLS. È quindi necessario modificare il nome del Backup Storage: “ftpback-rbxX-YYY.ip- Z.Z.Z.Z.net”, ad esempio, dovrà essere cambiato in “ftpback-rbxX-YYY.mybackup.ovh.net”.
>

Per salvare un solo file, esegui il comando:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **File**: nome del file di cui vuoi effettuare un backup
* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **FolderLocation**: percorso di accesso alla cartella di destinazione in cui salvare il file

Per realizzare il backup di una directory è sufficiente archiviarla e trasferirla nello spazio di backup, con il comando: 

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **FolderName**: percorso di accesso alla cartella di cui vuoi effettuare un backup
* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **FolderLocation**: percorso completo della cartella locale di destinazione in cui vuoi salvare il file
* **ArchiveName**: nome della cartella di cui vuoi effettuare un backup

Per scaricare un file archiviato dal tuo spazio di backup storage, utilizza questo comando:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **FtpUsername**: nome utente FTP
* **FtpPassword**: password FTP
* **HostName**: nome del Backup Storage
* **LocalFolder**: nome della cartella locale in cui salvare il file
* **File**: percorso completo del file da scaricare

##### FileZilla

Dopo aver installato FileZilla sul server, è possibile configurarlo per accedere al Backup Storage utilizzando le credenziali FTP ricevute al momento dell’attivazione. Per effettuare il login ti verranno richiesti il nome utente e la password associata.

#### NFS

Per prima cosa, accertati di aver autorizzato i blocchi di indirizzi IP ad accedere allo spazio di storage e utilizzare il protocollo NFS. In base al sistema operativo Linux utilizzato, è possibile che sia necessario installare il client NFS e avviare il servizio NFS/portmap prima di eseguire il mount della share NFS come una normale partizione:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **HostName**: nome del Backup Storage
* **ServiceName**: nome del server (ex:ns0000000.ip-123-123-123.net)
* **FolderMount**: cartella in cui vuoi eseguire il mount della share NFS

Una volta effettuato il mount della share, è possibile utilizzare comandi come **cp** e **rsync** come in una normale directory.

#### CIFS

##### Windows

Accedi al tuo server, apri il prompt dei comandi e digita questo comando:

```sh
net use z: \\HostName\ServiceName 
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **HostName**: nome del Backup Storage
* **ServiceName**: nome del server (ex:ns0000000.ip-123-123-123.net)

##### Linux

Accedi al tuo server in SSH ed esegui questo comando:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

* **HostName**: nome del Backup Storage
* **ServiceName**: nome del server (ex:ns0000000.ip-123-123-123.net)
* **FolderMount**: la cartella in cui vuoi effettuare il mount della share (dovrebbe essere già esistente)

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.