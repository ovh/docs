---
title: 'Usare backup automatizzati su un VPS'
slug: usare-backup-automatizzati-su-un-vps
excerpt: 'Scopri come abilitare e utilizzare l’opzione Backup automatizzato nello Spazio Cliente OVHcloud'
section: 'Opzioni di backup'
order: 2
---

**Ultimo aggiornamento: 22/07/2020**


## Obiettivo

Questa opzione offre una comoda modalità per avere frequenti backup sul VPS, disponibili sul tuo Spazio Cliente OVHcloud senza necessità di connetterti al server per crearli e ripristinarli manualmente. Un altro vantaggio è che puoi anche scegliere di montare un backup e quindi accedervi tramite SSH.

**Questa guida spiega l’utilizzo di backup automatizzati per il tuo VPS OVHcloud.**

> [!primary]
>
Prima di applicare le opzioni di backup, consigliamo di fare riferimento alle pagine prodotto [e alle domande frequenti](https://www.ovhcloud.com/it/vps/options/) per confrontare i prezzi e per visualizzare ulteriori dettagli.
>

## Prerequisiti

- avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- un servizio [VPS OVHcloud](https://www.ovhcloud.com/it/vps/) già impostato
- accesso come amministratore (root) mediante SSH al tuo VPS (opzionale)

## Procedura

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), vai alla sezione "Server" e seleziona il tuo server dalla barra laterale sinistra in `VPS`{.action}.

### Step 1: Attivare l’opzione Backup automatizzati

Dopo aver selezionato il tuo VPS, clicca sulla scheda `Backup automatizzato`{.action} nel menu orizzontale.

Nello step successivo, esamina le informazioni sul prezzo, quindi clicca su `Ordina`{.action}. Sarai guidato attraverso la procedura d’ordine e riceverai una email di conferma. A questo punto i backup verranno effettuati giornalmente finché l’opzione non verrà nuovamente disattivata.


### Step 2: Ripristinare un backup dallo Spazio Cliente OVH

Dopo aver selezionato il tuo VPS, clicca sulla scheda `Backup automatizzato`{.action} nel menu orizzontale. Hai a disposizione un massimo di 15 backup giornalieri. Clicca su `...`{.action} accanto al backup che desideri ripristinare e seleziona `Ripristino`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Se hai modificato la tua password root di recente, spunta l’opzione "Modifica la password root quando ripristini" nella finestra di popup, per mantenere la tua attuale password root, e clicca su `Conferma`{.action}. Riceverai una email una volta terminata l’azione. Per il rispristino potrebbe essere necessario un po’ di tempo, a seconda dello spazio utilizzato su disco.

> \[!alert]
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

#### Step 1: Spazio Cliente 

Clicca su `...`{.action} accanto al backup a cui desideri accedere e seleziona `Montaggio`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

A completamento del processo riceverai una email. A questo punto puoi connetterti al tuo VPS e aggiungere la partizione in cui è localizzato il tuo backup.

#### Step 2: Secure Shell

Innanzitutto, connettiti al tuo VPS via SSH.

Puoi utilizzare il comando seguente per verificare il nome dell’ultimo dispositivo collegato:

```
# lsblk
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
sdc       8:32   0   50G  0 disk 
```
In questi esempio, la partizione che contiene il tuo filesystem di backup è nominata “sdb1”.
Quindi, crea una directory per questa partizione e stabilisci che è il punto di montaggio:

```
# mkdir -p /mnt/restore
# mount /dev/sdb1 /mnt/restore
```

Ora puoi passare a questa cartella e accedere ai tuoi dati di backup.


## Per saperne di più

[Usare snapshot su un VPS](../usare-snapshot-su-un-vps)


Partecipa alla nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.