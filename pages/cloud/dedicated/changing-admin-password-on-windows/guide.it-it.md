---
title: 'Modificare la password amministratore su un server dedicato Windows'
slug: "modificare-password-admin-su-server-windows"
excerpt: 'Come impostare una nuova password amministratore su un server Windows'
section: 'Diagnostica e modalità Rescue'
---

**Ultimo aggiornamento: 16/12/2020**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Durante l’installazione o la reinstallazione di una distribuzione Windows, viene fornita una password per accedere come amministratore. Ti consigliamo vivamente di modificarlo, come spiegato nella nostra guida Mettere in [sicurezza un server dedicato](../mettere-in-sicurezza-un-server-dedicato/){.external}. Se hai perso la password admin, è necessario reimpostarla in modalità Rescue.

**Questa guida ti mostra come modificare la password admin del tuo server utilizzando le configurazioni della modalità Rescue disponibili con un sistema operativo Windows.**

## Prerequisiti

* Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external} Windows
* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}


## Procedura

Negli step successivi descriviamo il processo di modifica della password admin locale tramite la modalità Rescue OVHcloud (basata su Linux) disponibile in qualsiasi momento. Se preferisci utilizzare Windows PE (WinRescue), consulta il metodo dedicato [alla fine di questa guida](./#reimposta-la-password-amministratore-con-winrescue_1).

### Step 1: riavvia il server in modalità Rescue

Il sistema deve essere avviato in modalità Rescue prima di poter modificare la password admin. Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Bare Metal Cloud`{.action} e seleziona il tuo server dal menu dei `Server dedicati`{.action}.

Il netboot deve essere trasferito verso "rescue64-pro (Customer rescue system (Linux)". Cerca "Boot" nel riquadro **Informazioni generali** e clicca su `...`{.action} poi su `Modifica`{.action}.
<br>Nella nuova finestra, seleziona **Avviare in Rescue mode** e seleziona "Rescue64-pro" nel menu. Se le credenziali di accesso devono essere inviate a un indirizzo diverso da quello principale del tuo account, seleziona un indirizzo email nell'ultimo campo. 

Clicca su `Continua`{.action} e poi su `Conferma`{.action}.

![rescuemode](images/adminpw_win_001.png){.thumbnail}

Una volta terminata la modifica, clicca sui tre puntini `...`{.action} in corrispondenza di "Status" nella sezione intitolata **Stato dei servizi**.
<br>Clicca su `Riavvia`{.action} e il server riavvia in modalità Rescue. Questa operazione potrebbe richiedere alcuni minuti.
<br>Per verificare lo stato di avanzamento, clicca sulla scheda `Operazioni`{.action}. Riceverai un'email con gli identificativi (inclusa la password di connessione) dell'utente "root" della modalità Rescue.

![rescuereboot](images/adminpw_win_02.png){.thumbnail}

Per maggiori informazioni sulla modalità Rescue, consulta [questa guida](../rescue_mode/).

### Step 2: esegui il mount della partizione di sistema

Accedi al tuo server via SSH. Se necessario, consulta la guida d'>Trattandosi di un server Windows, le partizioni saranno intitolate "Microsoft LDM data".

```
# fdisk -l
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 54A5B25A-75B9-4355-9185-8CD958DCF32A
 
Device          Start        End    Sectors  Size Type
/dev/sda1        2048     718847     716800  350M EFI System
/dev/sda2      718848     720895       2048    1M Microsoft LDM metadata
/dev/sda3      720896     980991     260096  127M Microsoft reserved
/dev/sda4      980992 3907028991 3906048000  1.8T Microsoft LDM data
/dev/sda5  3907028992 3907029134        143 71.5K Microsoft LDM data
```

In questo esempio, "sda4" è la partizione di sistema, determinata dalla sua dimensione. In genere, esiste anche una seconda partizione mirror che, in questo caso, è intitolata “/dev/sdb**X**”. Nella maggior parte dei casi, infatti, il server avrà diversi dischi con schemi di partizione identici. Per la reimpostazione della password, è importante solo il primo. 

Salva questa partizione:

```
# mount /dev/sda4 /mnt
```

Verifica il punto di mount:

```
# lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sdb      8:16   0  1.8T  0 disk
├─sdb4   8:20   0  1.8T  0 part
├─sdb2   8:18   0    1M  0 part
├─sdb5   8:21   0 71.5K  0 part
├─sdb3   8:19   0  127M  0 part
└─sdb1   8:17   0  350M  0 part
sda      8:0    0  1.8T  0 disk
├─sda4   8:4    0  1.8T  0 part /mnt
├─sda2   8:2    0    1M  0 part
├─sda5   8:5    0 71.5K  0 part
├─sda3   8:3    0  127M  0 part
└─sda1   8:1    0  350M  0 part
```

Nell'esempio di cui sopra, l'operazione è andata a buon fine. Se il mount non è andato a buon fine, riceverai probabilmente un messaggio di errore simile a questo: 

```
The disk contains an unclean file system (0, 0).
Metadata kept in Windows cache, refused to mount.
Failed to mount '/dev/sda4': Operation not permitted
The NTFS partition is in an unsafe state. Please resume and shutdown
Windows fully (no hibernation or fast restarting), or mount the volume
read-only with the 'ro' mount option.
```

In questo caso, esegui il comando seguente e riprova a montare la partizione.

```
# ntfsfix /dev/sda4
# mount /dev/sda4 /mnt
```

### Step 3: eliminare la password corrente

Questo step consiste nella manipolazione del file *SAM* con un tool che permette di cancellare la password dell'utente admin. Accedi alla cartella corretta e individua gli utenti Windows:

```
# cd /mnt/Windows/System32/config
/mnt/Windows/System32/config# chntpw -l SAM

chntpw version 1.00 140201, (c) Petter N Hagen
Hive <SAM> name (from header): <\SystemRoot\System32\Config\SAM>
ROOT KEY at offset: 0x001020 * Subkey indexing type is: 686c <lh>
File size 65536 [10000] bytes, containing 8 pages (+ 1 headerpage)
Used for data: 359/39024 blocks/bytes, unused: 33/18064 blocks/bytes.

| RID -|---------- Username ------------| Admin? |- Lock? --|
| 03e8 | admin                          | ADMIN  | dis/lock |
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

Se il comando non funziona, installa prima lo strumento: `apt get install chntpw`.

Elimina la password dell'utente admin utilizzando il comando seguente. (Scegli "Administrator" se "admin" non esiste)

```
# chntpw -u admin SAM
chntpw version 1.00 140201, (c) Petter N Hagen
Hive <SAM> name (from header): <\SystemRoot\System32\Config\SAM>
ROOT KEY at offset: 0x001020 * Subkey indexing type is: 686c <lh>
File size 65536 [10000] bytes, containing 8 pages (+ 1 headerpage)
Used for data: 361/39344 blocks/bytes, unused: 35/13648 blocks/bytes.
 
================= USER EDIT ====================
 
RID     : 1000 [03e8]a
Username: admin
fullname:
comment :
homedir :
 
00000221 = Users (which has 3 members)
00000220 = Administrators (which has 2 members)
 
Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |
 
Failed login count: 0, while max tries is: 0
Total  login count: 5
 
- - - - User Edit Menu:
 1 - Clear (blank) user password
(2 - Unlock and enable user account) [seems unlocked already]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Premi "1" e premi Invio (↩). (Utilizza prima l'opzione 2 se in corrispondenza di "Disabled" compare una "X").

```
Select: [q] > 1
Password cleared!
================= USER EDIT ====================
 
RID     : 1000 [03e8]
Username: admin
fullname:
comment :
homedir :
 
00000221 = Users (which has 3 members)
00000220 = Administrators (which has 2 members)
 
Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |
 
Failed login count: 0, while max tries is: 0
Total  login count: 5
** No NT MD4 hash found. This user probably has a BLANK password!
** No LANMAN hash found either. Try login with no password!
 
- - - - User Edit Menu:
 1 - Clear (blank) user password
(2 - Unlock and enable user account) [seems unlocked already]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Premi "q" e premi Invio per lasciare il tool. Digita "y" quando sei invitato e premi Invio.

```
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  <SAM>
Write hive files? (y/n) [n] : y
 0  <SAM> - OK
```

### Step 4: Riavviare il server 

Sostituisci il netboot con **Avviare da hard disk** nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) (vedi [Step 1](./#step-1-riavvia-il-server-in-modalita-rescue_1)). 

Di ritorno da riga di comando, smonta la partizione e riavvia il server con questi comandi:

```
# cd
# umount /mnt
# reboot

Broadcast message from root@rescue.ovh.net on pts/0 (Wed 2020-05-27 11:28:53 CEST):

The system is going down for reboot NOW!
```

### Step 5: definire una nuova password (IPMI)

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sulla scheda `IPMI`{.action} per aprire una sessione KVM.

![IPMI](images/adminpw_win_03.png){.thumbnail}

#### Step 5.1: per una versione recente di Windows

L'interfaccia di connessione dovrebbe visualizzare un messaggio che indichi la scadenza della password.

![pwreset](images/adminpw_win_04.png){.thumbnail}

La nuova password per l'utente admin deve essere inserita due volte. Tuttavia, il campo di conferma non è ancora visibile, il che significa che devi lasciare il primo campo vuoto, inserire la tua nuova password nel secondo campo, quindi utilizzare il tasto di tabulazione (“  ↹ ”) della tastiera (virtuale) per passare al terzo campo (“Confermare la password").
<br>Imposta di nuovo la password e clicca sulla freccia per salvarla.

![enterpw](images/adminpw_win_05.png){.thumbnail}

Clicca su `OK`{.action} e sarai connesso.

![adminlogin](images/adminpw_win_06.png){.thumbnail}

#### Step 5.2: per una versione precedente di Windows

Una volta stabilita la sessione KVM, si aprirà una finestra di riga di comando (cmd).

Definisci la password dell'utente attuale ("Administrator"):

```
net user Administrator*
```


![administratorpw](images/adminpw_win_07.png){.thumbnail}

> [!primary]
>
Si raccomanda di utilizzare la tastiera virtuale durante l'inserimento della password in questa interfaccia.
>


### Reimposta la password amministratore con WinRescue

#### Step 1: riavvia il server in modalità Rescue

Il sistema deve essere avviato in modalità Rescue prima di poter modificare la password admin. Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Bare Metal Cloud`{.action} e seleziona il tuo server dal menu dei `Server dedicati`{.action}.

Il netboot deve essere spostato verso "WinRescue (Rescue System for Windows)". Cerca "Boot" nel riquadro **Informazioni generali** e clicca su `...`{.action} poi su `Modifica`{.action}.
<br>Nella nuova finestra, seleziona **Avviare in Rescue mode** e seleziona "WinRescue" nel menu. Se le credenziali di accesso devono essere inviate a un indirizzo diverso da quello principale del tuo account, seleziona un indirizzo email nell'ultimo campo. 

Clicca su `Continua`{.action} e poi su `Conferma`{.action}.

![winrescuemode](images/adminpw_win_008.png){.thumbnail}

Una volta terminata la modifica, clicca sui tre puntini `...`{.action} in corrispondenza di "Status" nella sezione intitolata **Stato dei servizi**.
<br>Clicca su `Riavvia`{.action} e il server riavvia in modalità Rescue. Questa operazione potrebbe richiedere alcuni minuti.
<br>Per verificare lo stato di avanzamento, clicca sulla scheda `Operazioni`{.action}.
<br>Riceverai un'email con le credenziali (inclusa la password di accesso) dell'utente "root" della modalità Rescue.

![rescuereboot](images/adminpw_win_02.png){.thumbnail}

Per maggiori informazioni sulla modalità Rescue, consulta [questa guida](../rescue_mode/).

#### Step 2: eliminare la password corrente

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sulla scheda `IPMI`{.action} per aprire una sessione KVM.

![IPMI](images/adminpw_win_03.png){.thumbnail}

Per reimpostare la password, è necessario il tool NTPWEdit. Una volta connesso tramite KVM, apri il browser e scaricalo dal [sito Web ufficiale](http://www.cdslow.org.ru/en/ntpwedit/). 

Naviga fino alla cartella in cui si trova il file ZIP scaricato ed estrae il contenuto. Apri il file eseguibile *ntpwedit64* per avviare l'applicazione.

![ntpwedit](images/adminpw_win_09.png){.thumbnail}

In questa interfaccia è possibile modificare il file *SAM* per cancellare la password dell'utente admin. Il percorso di accesso predefinito della directory *WINDOWS* è precompilato. Apri il file per visualizzare la lista degli utenti cliccando su `Apri`{.action}.

L'utente interessato sarà "admin" o "Administrator", secondo la versione di Windows. Se sono presenti entrambi, seleziona "admin". Clicca su `Modifica la password`{.action}.

![ntpwedit](images/adminpw_win_10.png){.thumbnail}

Nella finestra che appare, lasciate che i campi siano vuoti e cliccate su `OK`{.action}. e infine clicca su `Salva le modifiche`{.action} e poi su `Via`{.action}.

Il server deve essere riavviato

#### Step 3: riavvia il server 

Sostituisci il netboot con **Avviare da hard disk** nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) (vedi [Step 1](./#step-1-riavvia-il-server-in-modalita-rescue_1)). 

Nella finestra KVM, seleziona l'opzione di arresto `Riavvia`{.action} utilizzando il pulsante Windows "Avvia" in basso a sinistra.

Prosegui nella lettura di questa guida allo [Step 5: impostare una nuova password (IPMI)](./#step-5-definire-una-nuova-password-ipmi).


## Per saperne di più

[Attivare e utilizzare la modalità rescue](../rescue_mode/)

[Utilizzare l’IPMI sui server dedicati](../utilizzo-ipmi-server-dedicati/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
