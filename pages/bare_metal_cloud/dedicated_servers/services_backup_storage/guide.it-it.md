---
title: Utilizzare il Backup Storage su un server dedicato
excerpt: Come attivare e accedere allo spazio di storage aggiuntivo
updated: 2025-10-09
---

## Obiettivo

I server dedicati OVHcloud includono uno spazio di backup aggiuntivo per salvare i dati e i file di configurazione importanti. Questo spazio è scalabile, sicuro e indipendente dal server principale

**Questa guida ti mostra come attivare e utilizzare il tuo spazio di backup**.

> [!primary]
> Per maggiori informazioni, consulta la [pagina commerciale](/links/bare-metal/backup-storage) dell'opzione Backup Storage.
>
> Questa guida non si applica ai servizi OVHcloud US.
>

## Prerequisiti

* Disporre di un [server dedicato](/links/bare-metal/bare-metal) sul proprio account OVHcloud
* Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](/links/bare-metal/eco-about).
>
> Per maggiori informazioni, consulta la nostra [a confronto](/links/bare-metal/eco-compare).
>

## Procedura

### Attiva il tuo Backup Storage

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Nella scheda `Backup Storage`{.action}, clicca sul pulsante `Attiva il Backup Storage`{.action}.

![Attiva il tuo Backup Storage](images/backup-storage01.png){.thumbnail}

Clicca su `Conferma`{.action} nel menu contestuale che appare.

![Attiva il tuo Backup Storage](images/backup-storage02.png){.thumbnail}

Il tuo Backup Storage sarà configurato in pochi minuti. Una volta completata la configurazione, riceverai un'email di conferma.

### Configura il controllo degli accessi

L'accesso allo spazio di storage è limitato per indirizzi IP tramite una lista di controllo degli accessi (<i>Access Control List</i> o ACL). Possono accedere allo storage solo gli indirizzi IP del tuo account OVHcloud registrati nell'ACL. I protocolli di accesso (FTP, NFS e CIFS) non sono autorizzati di default ma possono essere selezionati durante l'aggiunta di indirizzi IP.

#### Aggiungere un accesso backup

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Seleziona la scheda `Backup Storage`{.action} e clicca sul pulsante `Aggiungi un accesso`{.action}.

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
Per recuperare i backup da un servizio di un'altra localizzazione.

> [!warning]
> Possono essere autorizzati solo gli indirizzi IP OVHcloud.
>

Accedi alla [console API OVHcloud](/links/api) con le credenziali del tuo account cliente e utilizza la chiamata seguente:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/features/backupFTP/access
>


Modificare le impostazioni come indicato di seguito:

- `serviceName`: inserisci il nome interno del tuo server (`ns1111111.ip-203-0-113.eu`).
- `cifs`: se utilizzate questo protocollo, impostate questo parametro su `true`.
- `ftp`: se utilizzate questo protocollo, impostate questo parametro su `true`.
- `ipBlock`: inserisci l’indirizzo IP che vi avrà accesso, nella forma `203.0.113.100/32`.
- `nfs`: se utilizzate questo protocollo, impostate questo parametro su `true`.

Clicca sul pulsante `EXECUTE`{.action}.

Per verificare che il tuo indirizzo IP sia autorizzato, utilizza questa chiamata:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/features/backupFTP/access
>


### Reimposta la password

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Seleziona la scheda `Backup Storage`{.action} e clicca sul pulsante `Password dimenticata`{.action}.

Dopo aver cliccato su `Conferma`{.action} nella nuova finestra, riceverai un'email di recupero password all'indirizzo email salvato sul tuo account amministratore. Segui le istruzioni riportate per reimpostare la password.

### Eliminare il Backup Storage

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Seleziona la scheda `Backup Storage`{.action} e clicca sul pulsante `Elimina il Backup Storage`{.action}.

Clicca su `Conferma`{.action} sul messaggio di avvertimento per procedere all'eliminazione. Il tuo Backup Storage sarà eliminato dopo pochi minuti. Tutti i dati dello spazio di storage verranno eliminati.

### Ordina spazio disco aggiuntivo

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. Seleziona la scheda `Backup Storage`{.action} e clicca sul pulsante Ordina `spazio disco`{.action}.

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

> [!primary]
> Per recuperare il *Hostname* del Backup Storage, clicca sulla scheda `Backup Storage`{.action} nell’interfaccia del server dedicato interessato. *Hostname* è generalmente scritto in formato `ftpback-rbxX-YYY.ip-Z.Z.Z.net` o `ftpback-bhsX-YYY.ip-Z.Z.net`.
>

#### FTP/FTPS

##### NcFTP (per Linux)

Per salvare un solo file, esegui il comando:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Questo comando non supporta il protocollo FTPS. Per effettuare un trasferimento sicuro, utilizza il client LFTP o cURL.**

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **FolderLocation**: percorso completo della cartella di destinazione in cui salvare il file
- **File**: nome del file di cui vuoi effettuare un backup

Per realizzare il backup di una directory è sufficiente archiviarla e trasferirla nello spazio di backup, con il comando: 

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **FolderName**: percorso completo della cartella di cui vuoi effettuare un backup
- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **ArchiveName**: nome della cartella di cui vuoi effettuare un backup

Per scaricare un file di backup dallo spazio di storage, utilizza questo il comando:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **LocalFolder**: percorso completo della cartella locale in cui vuoi salvare il file
- **File**: percorso completo del file da scaricare

##### cURL (per Linux)

> [!primary]
>
> Per utilizzare il protocollo FTPS è necessario modificare il nome del Backup Storage: “ftpback-rbxX-YYY.ip- Z.Z.Z.Z.net”, ad esempio, dovrà essere cambiato in “ftpback-rbxX-YYY.mybackup.ovh.net”. Dovrai inoltre aggiungere l'argomento `-ssl` al seguente comando.  
> Se il Backup Storage si trova in Canada (BHS), è necessario cambiarlo nel formato “ftpback-bhsX-YYY.mybackup.ovh.ca”.
>

Per salvare un solo file, esegui il comando:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **File**: nome del file di cui vuoi effettuare un backup
- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **FolderLocation**: percorso completo della cartella di destinazione in cui vuoi salvare il file

Per realizzare il backup di una directory è sufficiente archiviarla e trasferirla nello spazio di backup, con il comando: 

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **FolderName**: percorso di accesso alla cartella di cui vuoi effettuare un backup
- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **FolderLocation**: percorso completo della cartella locale di destinazione in cui vuoi salvare il file
- **ArchiveName**: nome della cartella di cui vuoi effettuare un backup

Per scaricare un file di backup dallo spazio di storage, utilizza questo il comando:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **LocalFolder**: nome della cartella locale in cui salvare il file
- **File**: percorso completo del file da scaricare

#### lftp (per Linux)

> [!primary]
>
> Di default, lftp utilizza FTP+SSL/TLS. È quindi necessario modificare il nome del Backup Storage: “ftpback-rbxX-YYY.ip- Z.Z.Z.Z.net”, ad esempio, dovrà essere cambiato in “ftpback-rbxX-YYY.mybackup.ovh.net”.  
> Se il Backup Storage si trova in Canada (BHS), è necessario cambiarlo nel formato “ftpback-bhsX-YYY.mybackup.ovh.ca”.
>

Per salvare un solo file, esegui il comando:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **File**: nome del file di cui vuoi effettuare un backup
- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **FolderLocation**: percorso di accesso alla cartella di destinazione in cui salvare il file

Per realizzare il backup di una directory è sufficiente archiviarla e trasferirla nello spazio di backup, con il comando: 

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **FolderName**: percorso di accesso alla cartella di cui vuoi effettuare un backup
- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **FolderLocation**: percorso completo della cartella locale di destinazione in cui vuoi salvare il file
- **ArchiveName**: nome della cartella di cui vuoi effettuare un backup

Per scaricare un file archiviato dal tuo spazio di backup storage, utilizza questo comando:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **FtpUsername**: nome utente FTP
- **FtpPassword**: password FTP
- **HostName**: nome del Backup Storage
- **LocalFolder**: nome della cartella locale in cui salvare il file
- **File**: percorso completo del file da scaricare

##### FileZilla

Dopo aver installato FileZilla sul server, è possibile configurarlo per accedere al Backup Storage utilizzando le credenziali FTP ricevute al momento dell’attivazione. Per effettuare il login ti verranno richiesti il nome utente e la password associata.

#### NFS

Per prima cosa, accertati di aver autorizzato i blocchi di indirizzi IP ad accedere allo spazio di storage e utilizzare il protocollo NFS. In base al sistema operativo Linux utilizzato, è possibile che sia necessario installare il client NFS e avviare il servizio NFS/portmap prima di eseguire il mount della share NFS come una normale partizione:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **HostName**: nome del Backup Storage
- **ServiceName**: nome del server (ex:`ns1111111.ip-203-0-113.eu`)
- **FolderMount**: cartella in cui vuoi eseguire il mount della share NFS

Una volta effettuato il mount della share, è possibile utilizzare comandi come **cp** e **rsync** come in una normale directory.

#### CIFS

##### Windows

Accedi al tuo server, apri il prompt dei comandi e digita questo comando:

```sh
net use z: \\HostName\ServiceName 
```

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **HostName**: nome del Backup Storage
- **ServiceName**: nome del server (ex:`ns1111111.ip-203-0-113.eu`)

È possibile che venga visualizzato il seguente messaggio di errore:

```console
System error 1272 has occurred.

You can't access this shared folder because your organization's security policies block unauthenticated guest access. These policies help protect your PC from unsafe or malicious devices on the network.
```

> [!primary]
>
> Per correggere questo errore, è necessario modificare il registro di sistema di Windows. A tal fine, aprire l'editor del registro (regedit), quindi accedere alla chiave `HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters`.<br>
> Assegnare il valore "1" al parametro `AllowInsecureGuestAuth`.<br>
> Trova ulteriori informazioni su questo argomento sulle [pagine di supporto Microsoft](https://learn.microsoft.com/it-it/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3).

##### Linux

Accedi al tuo server in SSH ed esegui questo comando:

```sh
mount -t cifs -o vers=2.0,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

> [!warning]
>
> Per effettuare il mount delle condivisioni per nome host (al contrario degli indirizzi IP), è necessario utilizzare l’utilità `mount.cifs`. Fa generalmente parte del pacchetto `cifs-utils`.
>
> `mount.cifs` è un wrapper che risolve i nomi host e aggiunge il parametro `ip=` ai parametri di mount passati al kernel.
>
> Senza `mount.cifs`, i tentativi di mount per hostname genereranno il seguente errore:
>
> ```text
> mount: /mnt/FolderMount: mount(2) system call failed: No route to host.
>        dmesg(1) may have more information after failed mount system call.
> ```

> [!primary]
>
> SMB 2.1 e versioni successive non sono attualmente supportate.

Sostituisci le variabili dell’esempio con le informazioni dei tuoi servizi.

- **HostName**: nome del Backup Storage
- **ServiceName**: nome del server (ex:`ns1111111.ip-203-0-113.eu`)
- **FolderMount**: la cartella in cui vuoi effettuare il mount della share (dovrebbe essere già esistente)

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).