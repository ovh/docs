---
title: "Installazione di un NAS-HA tramite condivisione NFS"
excerpt: "Come connettersi al tuo NAS-HA utilizzando una condivisione NFS"
updated: 2024-09-04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo 

Il servizio NAS-HA OVHcloud ti permette di gestire uno storage di file accessibile da una rete.

**Questa guida ti mostra come accedere al tuo NAS-HA tramite NFS sui sistemi operativi più utilizzati.**

> [!warning]
> OVHcloud offre una serie di servizi di cui è responsabile la configurazione e la gestione. Spetta quindi a te assicurarti che funzionino correttamente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo VPS. Tuttavia, in caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o alla creazione di servizi su un server, ti consigliamo di rivolgerti a un [fornitore specializzato](https://partner.ovhcloud.com/it/directory/) o di contattare la [nostra community](https://community.ovh.com/en/).
>

## Prerequisiti

- Disporre di una soluzione [NAS-HA OVHcloud](https://www.ovhcloud.com/it/storage-solutions/nas-ha/)
- Disporre di un servizio OVHcloud associato a un indirizzo IP pubblico (Hosted Private Cloud, server dedicato, VPS, istanza Public Cloud, ecc...)
- Disporre di un sistema operativo compatibile con NFS sul server
- [Aver creato una partizione sul tuo servizio con il protocollo NFS attivo](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#partition)
- [Avere un record ACL per l'indirizzo IP del server](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#addaccess)
- Avere accesso amministrativo (sudo) al server via SSH o GUI

## Procedura

Le sezioni seguenti contengono esempi di configurazione per le distribuzioni/sistemi operativi più utilizzati. Per prima cosa accedi al tuo server in SSH o accedi all'interfaccia grafica del tuo sistema operativo installato. Gli esempi che seguono presuppongono che tu sia connesso come utente con elevate autorizzazioni.

Ti ricordiamo inoltre il **nome interno** e **l'indirizzo IP** del tuo servizio NAS-HA, che troverai nell'email ricevuta dopo l'installazione o nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

I seguenti rating sono utilizzati come argomenti nelle sezioni di riga di comando qui di seguito. Sostituiscili con i valori appropriati al momento dell'inserimento degli ordini.

|Argomento|Descrizione|
|---|---|
|IP_HA-NAS|L'indirizzo IP del NAS-HA (esempio: `10.1.1.1`)|
|NFS_PATH|il percorso di accesso alla partizione NAS-HA da creare, composto dal nome del servizio e dal nome delle tue partizioni (esempio: `zpool-123456/partition01`)|
|MOUNTING_FOLDER|La cartella locale per la tua partizione montata|

> [!warning]
>
> L'utente NFS è `root`, le modifiche dei diritti con questo utente possono generare conflitti con i diritti CIFS/SMB esistenti.
>

### Distribuzioni basate su Debian

Installa il package `nfs-common`:

```bash
ubuntu@server:~$ sudo apt install nfs-common
```

A questo punto, utilizza il comando:

```bash
ubuntu@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Esempio:**

```bash
ubuntu@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Adesso puoi accedere alla tua partizione montata nella cartella specificata.

> [!primary]
>
> Per automatizzare il processo di montaggio ad ogni avviamento del server, aggiungi questa riga al file `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### CentOS 7 / AlmaLinux / Rocky Linux

Verifica che le ultime versioni dei package `nfs-utils` e `rpcbind` siano installate:

```bash
centos@server:~$ sudo yum install nfs-utils rpcbind
```

Se necessario, riavvia il servizio `rpcbind` con questo comando:

```bash
centos@server:~$ sudo systemctl restart rpcbind
```

Per effettuare il mount della partizione, utilizza il comando:

```bash
centos@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Esempio:**

```bash
centos@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Adesso puoi accedere alla tua partizione montata nella cartella specificata.

> [!primary]
>
> Per automatizzare il processo di montaggio ad ogni avviamento del server, aggiungi questa riga al file `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### Fedora

Installa il package `nfs-utils`:

```bash
fedora@server:~$ sudo dnf -y install nfs-utils
```

A questo punto, utilizza il comando:

```bash
fedora@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Esempio:**

```bash
fedora@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Adesso puoi accedere alla tua partizione montata nella cartella specificata.

### Proxmox

Nell'interfaccia di amministrazione Proxmox, clicca su `Storage`{.action} nel menu verticale.

![proxmox](images/proxmox1.png){.thumbnail}

Clicca sul pulsante `Add`{.action} e seleziona `NFS`{.action}.

Nella nuova finestra, inserisci le seguenti informazioni:

|Descrizione|Descrizione|
|---|---|
|ID|Identificatore della condivisione|
|Server|Indirizzo IP del NAS-HA (esempio: `10.1.1.1`)|
|Export|Percorso verso la partizione NAS-HA (Deve essere rilevato dalla scansione automatica: selezionalo nella lista)|
|Content|Tipi di contenuti per questa condivisione NFS (Disk image, ISO image, Container template, VZDump backup file, Container, Snippets)|

![proxmox](images/proxmox2.png){.thumbnail}

Clicca su `Add`{.action} per montare la tua partizione.

### VMware ESXI

Dall'interfaccia di amministrazione VMware ESXI, clicca su `Storage`{.action} nel menu a sinistra.

Clicca sul pulsante `New datastore`{.action} per aprire l'assistente.

![ESXI](images/esxi1.png){.thumbnail}

Nella nuova finestra, seleziona `Mount NFS datastore`{.action} e clicca su `Next`{.action}.

![ESXI](images/esxi2.png){.thumbnail}

Compila il form con i seguenti dettagli:

|Descrizione|Descrizione|
|---|---|
|Name|Identificatore della condivisione|
|NFS server|Indirizzo IP del NAS-HA (esempio: `10.1.1.1`)|
|NFS share|Percorso verso la partizione NAS-HA da mount (esempio: `zpool-123456/partition01`)|

![ESXI](images/esxi3.png){.thumbnail}

Clicca su `Next`{.action}. Clicca su `Finish`{.action} nell'ultimo step.

La tua partizione NAS-HA è montata in datastore.

![ESXI](images/esxi4.png){.thumbnail}

### NFSv3/NFSv4

L'offerta NAS-HA supporta i protocolli NFSv3 e NFSv4. Ne spieghiamo l'utilizzo.

**Cosa succede se la versione non viene precisata durante l'ordine NFS?**

In questo caso, il tuo client NFS cercherà di connettersi direttamente alla versione più alta supportata da quest'ultimo.
Ma puoi anche scegliere se utilizzare NFSv3 o NFSv4:

Per forzare l'utilizzo di NFSv3, utilizza questo comando:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Esempio:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Per forzare l'utilizzo di NFSv4, utilizza questo comando:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Esempio:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Per determinare la versione utilizzata dall'installazione corrente, utilizza il seguente comando:

```bash
ubuntu@server:~$ nfsstat -m
```

Nella risposta, le impostazioni `vers=3` o `vers=4` ti indicano il protocollo utilizzato.

L'utilizzo dei comandi sarà simile per CentOS e Fedora.

**È possibile inserire una versione specifica per l'utilizzo di NFSv4?**

Come in precedenza, il tuo client NFS tenterà di connettersi direttamente alla versione più alta supportata da questi servizi.
È possibile scegliere tra NFSv4.1 e NFSv4.2

Per forzare l'utilizzo di NFSv4.1, utilizzare il comando seguente:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Esempio:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Per forzare l'utilizzo di NFSv4.2, utilizzare il comando seguente:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Esempio:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Potete utilizzare questo comando per verificare la versione della timeline corrente:

```bash
ubuntu@server:~$ nfsstat -m
```

## Suggerimenti per ottimizzare le prestazioni e/o la stabilità della tua connessione NFS

Nella maggior parte dei casi, le opzioni di montaggio predefinite configurate nei client Linux sono sufficienti per ottenere prestazioni accettabili. In alcune situazioni, tuttavia, potrebbe essere utile attivare o disattivare determinate opzioni per ottenere prestazioni globali migliori.

Per ottenere prestazioni ottimali ed evitare vari bug identificati nel client NFS, ti consigliamo di utilizzare un kernel Linux il più recente possibile.

Ecco alcuni elementi che potrebbero aiutarti a perfezionare la configurazione del tuo client NFS.

### Alcune opzioni di montaggio da considerare

Per conoscere le opzioni di mount applicate dal client Linux, esegui il comando `mount -l`.

Esempio di restituzione dell'ordine:

```bash
XX.XX.XX.XX:/zpool-XXXXXX/DIR on /mnt type nfs4 (rw,relatime,vers=4.2,rsize=131072,wsize=131072,namlen=255,hard,proto=tcp,timeo=600,retrans=2,...)
```

- `rsize=1048576`: imposta il numero massimo di byte di dati che il client NFS può ricevere per ogni richiesta di LETTURA di rete. Questo valore si applica quando si leggono dati da un file in un file system NFS. Le dimensioni massime possibili (fino a 1048576) garantiscono prestazioni migliori.
- `wsize=1048576`: imposta il numero massimo di byte di dati che il client NFS può inviare per ogni richiesta di SCRITTURA in rete. Questo valore viene applicato quando si scrivono dati in un file in un file system NFS. Le dimensioni massime possibili (fino a 1048576) garantiscono prestazioni migliori.
- `hard`: imposta il comportamento di recupero del client NFS dopo la scadenza di una richiesta. In questo modo le richieste vengono riavviate all'infinito finché il server NAS-HA non risponde. questa opzione garantisce l'integrità dei dati.
- `timeo=150`: imposta il valore di timeout che il client NFS utilizza per attendere una risposta prima di riavviare una query NFS. Utilizzare un valore di almeno 150, equivalente a 15 secondi, per evitare cali di prestazioni.
- `retrans=2`: imposta su 2 il numero di volte che il client NFS avvia una query prima di tentare un'azione di ripristino.
- `tcp`: per accelerare il mount del file system in NFS v3 (non necessario per NFSv4.x che utilizza solo TCP).
- `_netdev` : quando questa opzione è presente nel file /etc/fstab, impedisce al sistema operativo del client di tentare il mount del file system NFS fino a quando la rete non è stata attivata.
- `nofail`: se il sistema operativo del tuo client deve poter essere avviato indipendentemente dallo stato del tuo file system NFS, aggiungi l’opzione `nofail`.
- `actimeo=30`: la specifica `actimeo` imposta tutti i parametri `acregmin`, `acregmax`, `acdirmin` e `acdirmax` sullo stesso valore. L'utilizzo di un valore inferiore a 30 secondi può causare un peggioramento del livello delle prestazioni, poiché la cache degli attributi di file e directory scade troppo rapidamente.
- `nfsvers`: se possibile, evita di utilizzare la versione 4.0 di NFS. Utilizzare invece le versioni 3, 4.1 o 4.2 (se possibile, utilizzare la stessa versione di NFS per tutti i client connessi a una condivisione NFS).
- `nordirplus`: in alcuni ambienti con numerose directory, in cui solo le informazioni di un piccolo sottoinsieme di voci di directory vengono utilizzate da un client NFSv3, READDIRPLUS può provocare un rallentamento delle prestazioni. L'opzione nordirplus consente di disattivare questa funzionalità

### Forza l'utilizzo di NFSv3 in alcuni casi

- Poiché NFSv3 è senza stato, le prestazioni con NFSv3 possono essere notevolmente migliori per alcuni carichi di lavoro, in particolare per i carichi di lavoro che fanno molte chiamate di tipo OPEN, CLOSE, SETATTR e GETATTR.
- Se ospiti un database nella condivisione NFS, ricorda che in caso di disconnessioni di rete il meccanismo di blocco specifico del protocollo NFS v4.x può provocare l’arresto dell’applicazione (per maggiori dettagli, consulta questa rfc: <https://datatracker.ietf.org/doc/rfc3530/>).

### Migliora le prestazioni di lettura modificando l'attributo read_ahead_kb

Alcuni kernel Linux utilizzano un valore `read_ahead_kb` di default di 128 KB. È consigliabile aumentare questo valore fino a 15 MB se si verificano problemi di prestazioni di lettura. Per ulteriori informazioni, vedere la pagina <https://docs.kernel.org/admin-guide/abi-stable.html?highlight=read_ahead_kb#abi-sys-block-disk-queue-read-ahead-kb>.

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
