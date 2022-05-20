---
title: 'Attivare e utilizzare il Rescue mode'
excerpt: 'Come riavviare il tuo server dedicato in modalità Rescue'
slug: rescue_mode
legacy_guide_number: g920
section: 'Diagnostica e modalità Rescue'
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 02/05/2022**

## Obiettivo

La modalità Rescue è una funzione che permette di avviare il tuo servizio su un sistema operativo temporaneo, per diagnosticare e risolvere problemi.

La modalità Rescue è generalmente adatta alle seguenti operazioni:

- Reimposta la password di root
- Diagnostica dei problemi di rete
- Riparazione di un sistema operativo difettoso
- Correzione di una configurazione errata di un firewall software
- Test delle prestazioni dei dischi
- Test del processore e della memoria RAM

Se non disponi ancora di backup recenti, effettua un backup dei tuoi dati.

**Questa guida ti mostra come attivare e utilizzare il Rescue mode sul tuo server.**

## Prerequisiti

- Disporre di un [server dedicato OVHcloud](https://www.ovhcloud.com/it/bare-metal/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

> [!warning]
> Ti ricordiamo che se hai impostato una chiave SSH di default nel tuo spazio per i prodotti dedicati, non riceverai una password di root durante il riavvio di un server in modalità Rescue. In questo caso, è necessario disattivare di default la chiave SSH prima di riavviare il server in modalità Rescue. Per effettuare questa operazione, consulta questa [sezione](../creare-chiave-ssh-dedicata/#disablesshkey) della guida corrispondente.
>

La modalità Rescue può essere attivata solo dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}.

Cerca "Boot" nel riquadro **Informazioni generali** e clicca su `...`{.action} poi su `Modifica`{.action}.

![Modifica la modalità di avvio](images/rescue-mode-001.png){.thumbnail}

Nella pagina successiva, seleziona **Avviare in Rescue mode**. Se il tuo server utilizza un sistema operativo Linux, seleziona `rescue-customer`{.action} nel menu a tendina. Se il tuo server è Windows, scegli `WinRescue`{.action} (consulta la [sezione della guida qui sotto](#windowsrescue)).
Se **non** vuoi che le credenziali di accesso siano inviate all'indirizzo principale del tuo account, inserisci un altro indirizzo email.
<br>Clicca su `Continua`{.action} per procedere al passo successivo, poi su `Conferma`{.action}.

![Modalità rescue-customer](images/rescue-mode-08.png){.thumbnail}

Una volta terminata la modifica, clicca sui tre puntini `...`{.action} in corrispondenza della voce "Stato" nella sezione intitolata **Stato dei servizi**.
<br>Clicca su `Riavvia`{.action} e il server riavvia in modalità Rescue. Questa operazione potrebbe richiedere alcuni minuti.
<br>Per verificare lo stato di avanzamento, clicca sulla scheda `Operazioni`{.action}. Riceverai un'email con le credenziali (inclusa la password di accesso) dell'utente "root" della modalità Rescue.

![Riavvio del server](images/rescue-mode-02.png){.thumbnail}

Una volta terminate le operazioni in modalità Rescue, ricordate di ridefinire il netboot su `Avviare da hard disk`{.action} e riavviare il server.

### Linux

#### Utilizzo della modalità Rescue (SSH)

> [!primary]
>
> Se utilizzi una chiave SSH (attiva anche nello Spazio Cliente OVHcloud), non riceverai alcuna password. Una volta che il server è in modalità Rescue, potrai accedere direttamente alla tua chiave SSH.
>

Dopo il riavvio del server, riceverai un'email con le credenziali di accesso in modalità Rescue. Questa email è disponibile anche nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca sul nome associato al tuo identificativo cliente nell'angolo in alto a destra del tuo Spazio Cliente e poi su `Email di servizio`{.action}.

A questo punto dovrai accedere al tuo server da riga di comando o tramite un tool SSH, utilizzando la password di root generata per la modalità Rescue.

ad esempio:

```bash
ssh root@your_server_IP
root@your_server_password:
```

> [!warning]
>
> Il tuo client SSH probabilmente bloccherà la connessione per prima, a causa di un'incompatibilità dell'impronta ECDSA. Questa operazione è normale perché la modalità Rescue utilizza un server SSH dedicato temporaneamente.
>
> Per aggirare il problema, puoi commentare l'impronta del tuo sistema abituale aggiungendo una `#` davanti alla sua linea nel file *known_hosts*. Elimina questo carattere prima del riavvio del server in modalità normale.
>

La maggior parte delle modifiche apportate al tuo server via SSH in modalità Rescue richiedono il mount di una partizione. Questa modalità possiede infatti il proprio file system temporaneo. e, di conseguenza, le modifiche apportate al file system vengono perse con il reboot della macchina sul disco principale.

#### Montaggio delle partizioni

Il mount delle partizioni viene realizzato con il comando `mount` in SSH. Dovrai prima listare le tue partizioni al fine di poter recuperare il nome di quella che vorrai montare. Puoi fare riferimento ai seguenti esempi di codice:

```bash
rescue-customer:~# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Una volta identificato il nome della partizione da montare, esegui il comando:

```bash
rescue-customer:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> La tua partizione verrà ora montata. A questo punto puoi effettuare operazioni sul file system.
>
> Se il tuo server dispone di una configurazione RAID software, devi montare il tuo volume RAID (in generale `/dev/mdX`).
>

Per uscire dalla modalità Rescue, ridefinisci la modalità di avvio su `Avviare da hard disk`{.action} nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e riavvia il server da riga di comando.

#### Installazione di un datastore

È possibile montare un datastore VMware come descritto in precedenza. Per prima cosa, installa il pacchetto necessario:

```bash
rescue-customer:~# apt-get update && apt-get install vmfs-tools
```

Leggi le tue partizioni per recuperare il nome della partizione del datastore:

```bash
rescue-customer:~# fdisk -l
```

Salva la partizione eseguendo il comando seguente, sostituendo `sdbX` con il valore identificato nello step precedente:

```bash
rescue-customer:~# vmfs-fuse /dev/sdbX /mnt
```

Per uscire dalla modalità Rescue, ridefinisci la modalità di avvio su `Avviare da hard disk`{.action} nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e riavvia il server da riga di comando.

### Windows <a name="windowsrescue"></a>

#### Utilizzo degli strumenti WinRescue

Dopo il riavvio del server, riceverai un'email con le credenziali di accesso in modalità Rescue. Questa email è disponibile anche nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca sul nome associato al tuo identificativo cliente nell'angolo in alto a destra del tuo Spazio Cliente e poi su `Email di servizio`{.action}.

Per utilizzare la modalità Rescue offerta da Windows, scarica e installa una console VNC o utilizza il modulo `IPMI` nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

![WinRescue Windows](images/rescue-mode-07.png){.thumbnail}

Questi strumenti sono già installati in questa modalità:

|Strumento|Descrizione|
|---|---|
|Mozilla ULight|Un browser Web.|
|Memory Diagnostics Tool|Utilizza Windows per testare la memoria RAM.|
|Explorer_Q-Dir|Un provider di file.|
|GSmartControl|Uno strumento di verifica degli hard disk e degli hard disk SSD.|
|PhotoRec|Un tool di recupero di file potenzialmente persi su un disco.|
|SilverSHielD|Un server SSH2 e SFTP.|
|System Recovery|Un tool Windows di ripristino e riparazione del sistema.|
|TestDisk|Software di recupero dati. Ti permette di recuperare e modificare partizioni corrotte, ritrovare partizioni scomparse, riparare un settore di boot e ricostruire un MBR difettoso.|
|FileZilla|Un client FTP open source. Prende in carico i protocolli SSH e SSL e dispone di un’interfaccia <i>Drag and Drop</i> (trascina e rilascia) chiara e intuitiva.  Può essere utilizzato per trasferire i tuoi dati verso un server FTP, come il backup FTP fornito con la maggior parte dei modelli di server OVHcloud.|
|7-ZIP|Software per la compressione e archiviazione di file e cartelle, che legge questi formati: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR e Z. Con 7-ZIP è inoltre possibile creare archivi nei formati: BZIP2, GZIP, TAR, WIM, XZ, Z e ZIP.|

## Per saperne di più

[Modifica la password amministratore su un server dedicato Windows](../modificare-password-admin-su-server-windows/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
