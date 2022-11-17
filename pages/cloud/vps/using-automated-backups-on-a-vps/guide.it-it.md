---
title: 'Usare backup automatizzati su un VPS'
slug: usare-backup-automatizzati-su-un-vps
excerpt: 'Scopri come abilitare e utilizzare l’opzione Backup automatizzato nello Spazio Cliente OVHcloud'
section: 'Opzioni di backup'
order: 2
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 15/11/2022**

## Obiettivo

Questa opzione offre una comoda modalità per avere frequenti backup sul VPS, disponibili sul tuo Spazio Cliente OVHcloud senza necessità di connetterti al server per crearli e ripristinarli manualmente. Un altro vantaggio è che puoi anche scegliere di montare un backup e quindi accedervi tramite SSH.

**Questa guida spiega l’utilizzo di backup automatizzati per il tuo VPS OVHcloud.**

> [!primary]
>
Prima di applicare le opzioni di backup, consigliamo di fare riferimento alle pagine prodotto [e alle domande frequenti](https://www.ovhcloud.com/it/vps/options/) per confrontare i prezzi e per visualizzare ulteriori dettagli.
>

## Prerequisiti

- avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- un servizio [VPS OVHcloud](https://www.ovhcloud.com/it/vps/) già impostato
- accesso come amministratore (root) mediante SSH al tuo VPS (opzionale)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Bare Metal Cloud`{.action} e seleziona il tuo server nella sezione `Server Privati Virtuali`{.action}.

### Step 1: Attivare l’opzione Backup automatizzati

Dopo aver selezionato il tuo VPS, clicca sulla scheda `Backup automatizzato`{.action} nel menu orizzontale.

Nello step successivo, esamina le informazioni sul prezzo, quindi clicca su `Ordina`{.action}. Sarai guidato attraverso la procedura d’ordine e riceverai una email di conferma. A questo punto i backup verranno effettuati giornalmente finché l’opzione non verrà nuovamente disattivata.

#### Configura l'ora del backup

Puoi modificare l'orario in cui avrà luogo il backup. 

Clicca sui tre puntini `...`{.action} in alto a sinistra e seleziona `Modifica`{.action}.

![autobackupvps](images/backup_vps_time01.png){.thumbnail}

Nella nuova finestra, modifica l'orario della giornata (orario UTC 24 ore). Clicca su `Conferma`{.action}.

![autobackupvps](images/backup_vps_time02.png){.thumbnail}

> [!primary]
>
> Una volta convalidato dallo Spazio Cliente, la modifica diventerà effettiva entro 24-48 ore.
>

### Step 2: Ripristinare un backup dallo Spazio Cliente OVHcloud

Dopo aver selezionato il tuo VPS, clicca sulla scheda `Backup automatizzato`{.action} nel menu orizzontale. Hai a disposizione un massimo di 7 backup giornalieri (15 backup giornalieri per i VPS di gamme precedenti). Clicca su `...`{.action} accanto al backup che desideri ripristinare e seleziona `Ripristino`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Se hai modificato la tua password root di recente, spunta l’opzione "Modifica la password root quando ripristini" nella finestra di popup, per mantenere la tua attuale password root, e clicca su `Conferma`{.action}. Riceverai una email una volta terminata l’azione. Per il rispristino potrebbe essere necessario un po’ di tempo, a seconda dello spazio utilizzato su disco.

> [!alert]
>
Ricorda che i backup automatizzati non includono i tuoi dischi aggiuntivi.
>

### Come montare un backup e accedervi

Non è necessario sovrascrivere completamente il tuo servizio esistente con un rispristino. L’opzione "Montaggio" ti consente di accedere ai dati di backup per ripristinare i tuoi file. 

> [!warning]
>OVHcloud fornisce servizi la cui gestione e configurazione sono sotto la tua completa supervisione. Pertanto spetta a te garantire che tali servizi funzionino correttamente.
>
>Questa guida ti mostra come effettuare le operazioni più comuni. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un esperto del settore e/o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni, consulta la sezione “Per saperne di più” di questa guida.
>

Clicca su `...`{.action} accanto al backup a cui desideri accedere e seleziona `Montaggio`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Quando utilizzi questa opzione, viene creata e montata una copia in lettura/scrittura del backup. Il backup originale resta disponibile per i ristoranti futuri.

A completamento del processo riceverai una email. A questo punto puoi connetterti al tuo VPS e aggiungere la partizione in cui è localizzato il tuo backup.

#### Con Secure Shell

Innanzitutto, connettiti al tuo VPS via SSH.

Puoi utilizzare il comando seguente per verificare il nome dell’ultimo dispositivo collegato:

```
$ lsblk
```

Ecco un campione di output di questo comando:

```
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda       8:0    0   25G  0 disk 
├─sda1    8:1    0 24.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part 
sdb       8:16   0   25G  0 disk 
├─sdb1    8:17   0 24.9G  0 part 
├─sdb14   8:30   0    4M  0 part 
└─sdb15   8:31   0  106M  0 part /boot/efi
```

In questi esempio, la partizione che contiene il tuo filesystem di backup è nominata “sdb1”.
Quindi, crea una directory per questa partizione e stabilisci che è il punto di montaggio:

```
$ mkdir -p /mnt/restore
$ mount /dev/sdb1 /mnt/restore
```

Ora puoi passare a questa cartella e accedere ai tuoi dati di backup.

#### Con Windows

Installa una connessione RDP (Remote Desktop) con il tuo VPS.

Clicca con il tasto destro su `Start`{.action} e apri `Gestione disco`{.action}.

![disk management](images/windowsbackup1.png){.thumbnail}

Il tuo backup in salita apparirà come un disco di base con lo stesso spazio di storage del tuo disco principale.

![mounted backup](images/windowsbackup2.png){.thumbnail}

Il disco apparirà come `Offline`, clicca con il tasto destro sul disco e seleziona `Online`(action).

![online backup](images/windowsbackup3.png){.thumbnail}

In seguito, il backup sarà disponibile su `Explora file`.

![file explorer](images/windowsbackup4.png){.thumbnail}

> [!warning]
> Ti ricordiamo che il server si riavvierà durante lo smontaggio del backup.
>

### Best practice per l'utilizzo del backup automatico

La funzionalità di backup automatico è basata sugli Snapshot VPS. Prima di utilizzare questa opzione, ti consigliamo di seguire gli step qui sotto per evitare anomalie.

#### Configurazione dell'agente QEMU su un VPS

Gli Snapshot sono istantanee del proprio sistema in esecuzione (“live snapshot”). Per garantire la disponibilità del sistema durante la creazione dello Snapshot è necessario utilizzare il software QEMU, che  prepara il filesystem al processo.

Il *qemu-guest-agente* richiesto non è installato di default sulla maggior parte delle distribuzioni. e le eventuali restrizioni delle licenze possono impedire a OVHcloud di includerlo nelle immagini degli OS disponibili. Consigliamo pertanto di verificare la presenza del software sul VPS e, in caso contrario, di installarlo. Per eseguire queste operazioni, accedi in SSH al VPS e segui le istruzioni indicate, in base al sistema operativo utilizzato.

##### **Distribuzioni Debian (Debian, Ubuntu)**

Utilizza il comando seguente per verificare che il sistema sia correttamente configurato per effettuare Snapshot:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se il risultato è differente (“No such file or directory”), installa l’ultima versione del pacchetto:

```
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Riavvia il VPS:

```
$ sudo reboot
```

Avvia il servizio per assicurarti che sia in esecuzione:

```
$ sudo service qemu-guest-agent start
```

##### **Distribuzioni Redhat (CentOS, Fedora)**

Utilizza il comando seguente per verificare che il sistema sia correttamente configurato per effettuare Snapshot:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se il risultato è differente (“No such file or directory”), installa e attiva il software:

```
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Riavvia il VPS:

```
$ sudo reboot
```

Avvia il servizio per assicurarti che sia in esecuzione:

```
$ sudo service qemu-guest-agent start
$ sudo service qemu-guest-agent status
```

##### **Windows**

Puoi installare l'agente tramite un file MSI, disponibile sul sito del progetto Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Per verificare che il servizio sia in esecuzione, esegui questo comando powershell:

```
PS C:\Users\Administrator> Get-Service QEMU-GA
Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Per saperne di più

[Usare snapshot su un VPS](../usare-snapshot-su-un-vps)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
