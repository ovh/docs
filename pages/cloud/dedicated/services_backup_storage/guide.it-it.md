---
title: 'Utilizzare il Backup Storage su un server dedicato'
slug: servizio-backup-storage
excerpt: 'Come attivare e gestire l’opzione Backup Storage sul tuo server dedicato OVH'
section: Storage
---

**Ultimo aggiornamento: 04/04/2019**

## Obiettivo

I [server dedicati OVH](https://www.ovh.it/server_dedicati/){.external} offrono l’opzione Backup Storage, uno spazio da 500 GB che permette di [salvare in totale sicurezza i tuoi dati](https://docs.ovh.com/it/dedicated/mettere-in-sicurezza-un-server-dedicato/){.external}.

**Questa guida ti mostra come attivare e utilizzare questo spazio di backup sul tuo server OVH.**


## Prerequisiti

- Disporre di un [server dedicato](https://www.ovh.it/server_dedicati/){.external}
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Bare Metal Cloud`{.action}


## Procedura

### Attiva lo spazio di storage

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio nella sezione `Bare Metal Cloud`{.action} e clicca prima sulla scheda `Backup storage`{.action} e poi sul pulsante `Attiva il backup storage`{.action}, infine conferma. 

![Attiva lo spazio di storage](images/backup_storage_activation.png){.thumbnail}

Riceverai un’email con la conferma dell’attivazione e il tuo Backup Storage sarà disponibile in pochi minuti.


### Configura il controllo degli accessi

L’accesso allo spazio di storage è regolato tramite una lista di controllo degli accessi (in inglese <i>Access Control List</i>, abbreviato in ACL), che autorizza solo determinati indirizzi IP. Di default, tutti gli indirizzi IP associati al tuo account dispongono di un accesso FTP/FTPS allo spazio di storage. Gli altri protocolli (NFS e CIFS) non sono accettati e, per autorizzarli, è necessario creare una ACL.


#### Aggiungere un accesso

Nella scheda `Backup Storage`{.action}, clicca su `Aggiungi un accesso`{.action}.

![Aggiungere un accesso backup](images/add_access.png){.thumbnail}

Seleziona il blocco IP e il protocollo da autorizzare, poi clicca su `Seguente`{.action}.

> [!primary]
>
> È possibile consentire l’accesso allo spazio di backup esclusivamente ai bocchi IP presenti nel tuo account OVH.
>

![Aggiungere un accesso backup](images/add_access_ip.png){.thumbnail}

Verifica la correttezza delle informazioni e clicca su `Termina`{.action} per creare una nuova regola di accesso.

![Aggiungere un accesso backup](images/add_access_confirmation.png){.thumbnail}

A questo punto è possibile accedere al Backup Storage del server utilizzando il blocco IP selezionato.


#### Modificare un accesso

Per modificare i protocolli autorizzati per un blocco IP, clicca sui tre puntini in corrispondenza del blocco da modificare e seleziona `Modifica l’accesso`{.action}. Seleziona o deseleziona i protocolli e, una volta terminato, clicca su `Conferma`{.action} per applicare le modifiche.

![Modifica dell’accesso](images/modify_access.png){.thumbnail}


#### Eliminare un accesso

Per revocare l’autorizzazione a un blocco IP, clicca sui tre puntini in corrispondenza del blocco da rimuovere e seleziona `Elimina l’accesso`{.action}.

![Modifica dell’accesso](images/delete_access.png){.thumbnail}

Clicca su `Conferma`{.action}: l’accesso al Backup Storage sarà negato agli IP selezionati.


### Modifica la password

Nella scheda `Backup Storage`{.action}, clicca su `Hai dimenticato la password?`{.action} e conferma.

![Modificare la password](images/forgotten_password.png){.thumbnail}

Riceverai un’email di recupero password all’indirizzo email salvato nel tuo account amministratore. Per impostare la nuova password è sufficiente seguire il procedimento indicato.


### Elimina il Backup Storage

Nella scheda `Backup Storage`{.action}, clicca su `Elimina il Backup Storage`{.action} e conferma.

![Eliminare il Backup Storage](images/backup_storage_delete.png){.thumbnail}

> [!warning]
> 
> L’operazione di eliminazione è irreversibile.
> 

Il Backup Storage sarà cancellato definitivamente entro pochi minuti.


### Ordina spazio disco aggiuntivo

Nella scheda `Backup Storage`{.action}, clicca sul pulsante `Ordina spazio disco`{.action}. 

![Ordinare spazio disco](images/additional_space_order.png){.thumbnail}

Seleziona la capacità di storage che desideri e clicca su `Seguente`{.action}.

![Scelta dello spazio aggiuntivo](images/additional_space_order_selection.png){.thumbnail}

Leggi e accetta le condizioni contrattuali e clicca su `Conferma`{.action}.

Verrà creato il buono d’ordine e, una volta effettuato il pagamento, lo spazio di storage aggiuntivo sarà disponibile.


### Utilizza il Backup Storage

> [!primary]
>
> Il servizio Backup Storage fornisce esclusivamente lo spazio e i protocolli di accesso, ma non prevede il backup automatico dei tuoi dati. Definire una strategia di backup efficiente e scegliere gli strumenti più adatti per attuarla è quindi responsabilità dell’utente. OVH non potrà essere considerata responsabile dei dati presenti in questo spazio.
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

[Mettere in sicurezza un server dedicato](https://docs.ovh.com/it/dedicated/mettere-in-sicurezza-un-server-dedicato/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.