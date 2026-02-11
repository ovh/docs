---
title: "Attivare e utilizzare il Rescue mode"
excerpt: "Scopri come utilizzare la modalità customer rescue OVHcloud per risolvere i problemi del tuo server dedicato"
updated: 2026-01-09
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

## Obiettivo

La modalità Rescue è una funzione che permette di avviare il tuo servizio su un sistema operativo temporaneo, per diagnosticare e risolvere problemi.

La modalità Rescue è generalmente adatta alle seguenti operazioni:

- [Reimpostare la password utente](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- [Diagnostica dei problemi di rete](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- Riparazione di un sistema operativo difettoso
- Correzione di una configurazione errata di un firewall software
- [Test delle prestazioni dei dischi](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- [Test del processore e della memoria RAM](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

> [!warning]
>
> Assicurati di eseguire un backup dei tuoi dati se ancora non ne hai.
>
> Se sul server sono presenti servizi in produzione, la modalità Rescue li interrompe fino al riavvio della macchina in modalità normale.
>

**Questa guida ti mostra come riavviare un server in modalità rescue e come utilizzarlo.**

## Prerequisiti

- Disporre di un [server dedicato OVHcloud](/links/bare-metal/bare-metal)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

Per utilizzare il Rescue mode, è necessario modificare il parametro `Netboot` del server. Riavvia il server.

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Bare Metal Cloud`{.action} e poi su `Server dedicati`{.action}.

Clicca sul nome del tuo server per aprire la scheda `Informazioni generali`{.action}.

### Attivazione della modalità Rescue

Nella casella **Informazioni generali**, clicca sul pulsante `...`{.action} accanto a `Boot`. Clicca su `Modifica`{.action} nel menu contestuale.

![Modifica la modalità di avvio](images/rescue-mode-001.png){.thumbnail}

<a name="netboot"></a>

#### 1: Opzioni del Rescue mode

Nella pagina **Modifica il netboot**, seleziona `Avviare in Rescue mode`{.action}.

![Modifica la modalità di avvio](images/rescue-mode-002.png){.thumbnail}

Le opzioni disponibili per il Rescue mode dipendono dal tipo di server e dal **sistema operativo** installato.

- Customer rescue system (sempre disponibile)
- Windows customer rescue system (disponibile per i server Windows)
- [iPXE](https://ipxe.org) / ipxe-shell (strumento open source esterno, sempre disponibile)
- [Legacy Windows rescue system](#windows_legacy) (sistema WinPE sconsigliato, pertinente solo se il server non soddisfa i requisiti della modalità rescue corrente per Windows)

> [!primary]
>
> Le istruzioni riportate di seguito sono valide solo per il **customer rescue system**, l'opzione più utilizzata.
>
> Consulta la nostra [guida dedicata per una spiegazione dettagliata sull'utilizzo di **modalità rescue per Windows**](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

Seleziona `Customer rescue system`{.action} nel menu a tendina.

#### 2: Opzioni di autenticazione

La scelta seguente determina il metodo di autenticazione per la connessione SSH al sistema in modalità Rescue. Si tratta principalmente di una questione di praticità poiché ogni sessione in modalità rescue è considerata transitoria e verrà eliminata dopo il riavvio del server dal disco.

- **Autenticazione tramite password**: le credenziali vi saranno comunicate via email.
- **Autenticazione a chiave**: è possibile utilizzare una chiave pubblica di autenticazione a scelta (formati compatibili: `RSA`, `ECDSA`, `ED25519`).

Clicca sulla scheda corrispondente al tuo metodo di connessione:

> [!tabs]
> Autenticazione tramite password
>>
>> Clicca su `Autenticazione tramite password`{.action}.
>>
>>![Auth method](images/rescue-mode-003.png){.thumbnail width="700"}
>>
>> L’email di notifica della modalità Rescue e le relative credenziali verranno inviate all’indirizzo e-mail di contatto del tuo account OVHcloud. Per utilizzare un altro indirizzo email, inseriscilo nel campo `Ricevi le credenziali della modalità selezionata all'indirizzo email:`.
>>
>> Clicca su `Avanti`{.action}.
>>
> Autenticazione a chiave
>>
>> Clicca su `Autenticazione tramite chiave SSH`{.action}.
>>
>>![Auth method](images/rescue-mode-004.png){.thumbnail width="700"}
>>
>> Avete due possibilità:
>>
>> - Selezionare una chiave dal menu a comparsa. È necessario disporre già di almeno una [chiave pubblica archiviata nello Spazio Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).
>> - Copia manualmente la stringa di chiave pubblica e incollala nel campo `La tua chiave SSH pubblica`.
>>
>> Per saperne di più, consulta le nostre guide:
>>
>> - [Come creare e utilizzare chiavi per l'autenticazione SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Come creare e utilizzare chiavi per l'autenticazione SSH con PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>
>> > [!success]
>> > È possibile aggiungere una chiave pubblica di default per la modalità Rescue di un server tramite l'API OVHcloud. Per maggiori informazioni, consulta la [sezione guida qui sotto](#rescuessh) for details.
>>
>> Clicca su `Avanti`{.action}.
>>

#### 3: ultimi step per attivare la modalità Rescue

Nella tappa **Riepilogo**, clicca su `Conferma`{.action}.

![Summary](images/rescue-mode-005.png){.thumbnail}

A questo punto dovresti avere una notifica relativa al parametro `Netboot` nella scheda `Informazioni generali`{.action}.

![Netboot](images/rescue-mode-006.png){.thumbnail}

L’ultimo step consiste nel riavviare il server. Clicca sul pulsante `...`{.action} accanto a "Stato" nella casella **Stato dei servizi** e poi clicca su `Riavvia`{.action}. Clicca su `Conferma`{.action} nella finestra pop-up.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

*hard reboot* richiederà alcuni minuti per terminare. È possibile verificare lo stato corrente nella scheda `Task`{.action}.

> [!primary]
>
> Dopo aver terminato le operazioni in modalità Rescue, ricordati di reimpostare il parametro `Netboot` su `Avviare da hard disk`{.action} prima di riavviare il server.

### Accedere al server in modalità Rescue via SSH

Una volta ricevuta l’email che ti informa dell’attivazione del Rescue mode, puoi accedere al sistema del Rescue mode e accedere al tuo server.  
Questa email è disponibile anche nello [Spazio Cliente OVHcloud](/links/manager). Clicca sul nome associato al tuo identificativo cliente nella barra dei menu in alto a destra e seleziona `Email di servizio`{.action}.

> [!primary]
>
> Il tuo client SSH bloccherà normalmente la connessione all'inizio a causa di un'incompatibilità dell'impronta ECDSA. Questo è normale perché la modalità Rescue utilizza il proprio server SSH temporaneo. Per risolvere il problema, modificare il file `known_hosts` nella cartella locale `.ssh`.  
> Le opzioni disponibili sono due:
>
> - **Elimina il timbro del file.** Il client SSH aggiungerà una nuova impronta digitale per il server quando non utilizzerai più il Rescue mode. Per una spiegazione dettagliata, consulta la sezione "Login et fingerprint" nella nostra [guida d'introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>
> - **Disattiva temporaneamente l’impronta digitale.** Apri il file `known_hosts` con un editor di testo e identifica la stringa dell’impronta digitale del tuo server con il suo indirizzo IP. Aggiungere il carattere `#` all'inizio della riga. Di conseguenza, questa riga è ora un "commento" e verrà ignorata dalle applicazioni che leggono il file. Ricordati di annullare questa modifica prima di riportare il `Netboot` in modalità "normale".
>

Fare clic sulla scheda relativa al metodo di connessione selezionato:

> [!tabs]
> Autenticazione tramite password
>>
>> Aprire l'applicazione da riga di comando sul dispositivo locale e immettere il comando seguente:
>>
>> ```bash
>> ssh root@SERVER_IP
>> ```
>>
>> Esempio:
>>
>> ```bash
>> ssh root@203.0.113.100
>> ```
>>
>> Quando richiesto, immetti la password della modalità Rescue temporanea.
>>
>> ```console
>> root@ns9356771.ip-203-0-113.eu's password:
>> root@rescue-customer-eu (ns9356771.ip-203-0-113.eu) ~ #
>> ```
>>
>> Per maggiori informazioni sulle connessioni SSH, consulta la nostra [guida introduttiva a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
>> È inoltre possibile utilizzare qualsiasi strumento di connessione SSH, ad esempio [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).
>>
> Autenticazione a chiave
>>
>> Aprire l'applicazione da riga di comando sul dispositivo locale e immettere il comando seguente:
>>
>> ```bash
>> ssh -i USER_FOLDER/.ssh/KEY_FILE_NAME root@SERVER_IP
>> ```
>>
>> Example:
>>
>> ```bash
>> ssh -i ~/.ssh/MyAuthKey root@203.0.113.100
>> ```
>>
>> Se richiesto, immettere la password per decrittografare il file della chiave privata.
>>
>> Per saperne di più, consulta le nostre guide:
>>
>> - [Come creare e utilizzare chiavi per l'autenticazione SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Come creare e utilizzare chiavi per l'autenticazione SSH con PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>


### Il mount delle partizioni per accedere ai tuoi file

A meno che non si intenda configurare i dischi del server in modo che debbano essere scollegati (*unmounted*), è necessario prima effettuare il mount della partizione di sistema** per accedere ai dati in modalità Rescue.

Per prima cosa, elenca tutte le partizioni per recuperare il nome della partizione da montare:

```bash
lsblk
```

Esempi di output:

```console
NAME      MAJ:MIN RM  SIZE RO TYPE  MOUNTPOINT
sda         8:0    0  1.8T  0 disk
├─sda1      8:1    0  511M  0 part
├─sda2      8:2    0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
├─sda3      8:3    0  512M  0 part
└─sda4      8:4    0    2M  0 part
sdb         8:16   0  1.8T  0 disk
├─sdb1      8:17   0  511M  0 part
├─sdb2      8:18   0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
└─sdb3      8:19   0  512M  0 part
```

```console
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 894.3G  0 disk
├─nvme1n1p1 259:2    0   511M  0 part
├─nvme1n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:4    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
└─nvme1n1p4 259:5    0   512M  0 part
nvme0n1     259:1    0 894.3G  0 disk
├─nvme0n1p1 259:6    0   511M  0 part
├─nvme0n1p2 259:7    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme0n1p3 259:8    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
├─nvme0n1p4 259:9    0   512M  0 part
└─nvme0n1p5 259:10   0     2M  0 part
```

Eseguire quindi il mount della partizione appropriata:

```bash
mount /dev/PARTITION_NAME /MOUNT_POINT/
```

La partizione da montare deve essere facilmente identificabile da **SIZE** indicato nella tabella (`sda2` nel primo esempio, `nvme1n1p3` nel secondo). Tuttavia, in una [configurazione RAID software](/pages/bare_metal_cloud/dedicated_servers/raid_soft) (un `raid1` di default negli esempi), dovrai utilizzare l’identificativo del volume RAID (`mdX`).  
Utilizzando il nome della cartella `mnt` come punto di mount, per il primo esempio il comando `mount` sarebbe quindi il seguente:

```bash
mount /dev/md127 /mnt/
```

Comando da inserire per il secondo esempio:

```bash
mount /dev/md3 /mnt/
```

> [!warning]
> Gli esempi illustrano semplicemente i passaggi necessari basati su una configurazione server tipica. Le informazioni della tabella di output dipendono dall'hardware del server e dallo schema di partizione. In caso di dubbi, consulta la documentazione del sistema operativo utilizzato.
>
> Se hai bisogno di assistenza professionale per l'amministrazione del tuo server, consulta la sezione [Per saperne di più](#gofurther) di questa guida.

Per ulteriori informazioni tecniche su dischi e partizioni del server, utilizza il comando:

```bash
fdisk -l
```

Alcune operazioni potrebbero richiedere lo scollegamento di dischi o partizioni. utilizzando il comando unmount :

```bash
umount /mnt
```

#### VMware - Montare un datastore

/// details | Espandi questa sezione

È possibile creare un datastore VMware nello stesso modo descritto nello step precedente.

Per recuperare il nome della partizione del datastore, è sufficiente elencare le proprie partizioni:

```bash
lsblk
```

```bash
fdisk -l
```

Monta la partizione con questo comando, sostituendo `sdbX` con il valore identificato nel passaggio precedente:

```bash
vmfs-fuse /dev/sdbX /mnt
```

Se disponi di datastore `VMFS 6`, accedi alla cartella `sbin` e crea la cartella di mount:

```bash
cd /usr/local/sbin/
mkdir /mnt/datastore
```

Per recuperare il nome della partizione del datastore, è sufficiente elencare le proprie partizioni:

```bash
lsblk
```

```bash
fdisk -l
```

Monta la partizione con questo comando, sostituendo `sdbX` con il valore identificato nel passaggio precedente:

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

///

Una volta completata l'operazione di mount, potete accedere ai vostri file ed effettuare operazioni di risoluzione dei problemi all'interno della cartella che avete definito come punto di mount. Esempio:

```bash
cd /mnt
```

Alcune operazioni sul file system (come la configurazione degli account utente) richiedono un passaggio aggiuntivo. Crea un ambiente temporaneo `chroot` nel punto di montaggio con questo comando:

```bash
chroot /mnt/
```

A questo punto dovresti essere in grado di applicare tutte le modifiche necessarie al tuo sistema, ad esempio per [ritrovare l'accesso al server](#gofurther).

### Configurazione dell'aggregazione dei collegamenti in modalità Rescue

L'aggregazione dei collegamenti (LACP) è molto vantaggiosa, poiché consente di aumentare la larghezza di banda totale del server offrendo al contempo ridondanza di rete in caso di guasto di un'interfaccia di rete.

Sebbene la modalità Rescue sia basata sul sistema operativo Debian 12, la sua configurazione di rete si basa sull'utilità `ifupdown`, piuttosto che su `Netplan`.

Se disponi di un server che supporta l'aggregazione di collegamenti e desideri configurarla in modalità rescue, fai riferimento a [questa guida](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

### Uscita dalla modalità Rescue

Se necessario, torna alla shell di connessione della modalità Rescue digitando:

```bash
exit
```

Nel tuo [Spazio Cliente OVHcloud](/links/manager), [modifica la modalità di avvio](#netboot) di nuovo in `Avviare da hard disk`{.action} e conferma.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail}

A questo punto, è possibile riavviare il server dalla shell in modalità Rescue:

```bash
reboot
```

È inoltre possibile utilizzare la funzione `Riavvia`{.action} nello Spazio Cliente.

<a name="rescuessh"></a>

### Come aggiungere una chiave di autenticazione di default per la modalità Rescue

/// details | Espandi questa sezione

Per accelerare il processo, è possibile aggiungere una chiave pubblica predefinita per l’accesso SSH in modalità Rescue al server. Per effettuare questa operazione, utilizza l’[API OVHcloud](/pages/manage_and_operate/api/first-steps).

A tale scopo, nella console Web API aprire il seguente endpoint API:

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Immettere il nome interno del server (`ns111111.ip-203-0-113.eu`) nel campo appropriato.

Modificare quindi il campo di testo seguente:

```bash
{
  "rescueSshKey": "string"
}
```

Sostituisci `string` con la tua stringa di chiave pubblica completa.

Il risultato deve essere simile all'esempio seguente:

![rescue key esempio](images/rescue-mode-008.png){.thumbnail}

Una volta inseriti i valori corretti, clicca sul pulsante `EXECUTE`{.action}.

Il campo `La tua chiave SSH pubblica:` verrà riempito automaticamente con questa stringa di chiave durante la [modifica della modalità `Netboot`](#netboot).

///

<a name="windows_legacy"></a>

### Legacy Windows Rescue System (modalità Rescue WinPE)

/// details | Espandi questa sezione

Una volta ricevuta l’email che ti informa dell’attivazione del Rescue mode, puoi accedere al sistema del Rescue mode e accedere al tuo server.  
Questa email è disponibile anche nello [Spazio Cliente OVHcloud](/links/manager). Clicca sul nome associato al tuo identificativo cliente nella barra dei menu in alto a destra e seleziona `Email di servizio`{.action}.

Per utilizzare l'interfaccia grafica della modalità Rescue di Windows PE, è necessario scaricare e installare una console VNC o utilizzare il [modulo IPMI](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers) (non disponibile su tutti i modelli di server).

![Winrescue Windows](images/rescue-mode-009.png){.thumbnail}

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

///

<a name="gofurther"></a>

## Per saperne di più

[Come utilizzare la modalità Rescue per Windows](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows)

[Come recuperare l'accesso al server in caso di perdita della password](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Come sostituire le chiavi di autenticazione per l'accesso SSH in caso di perdita di chiave](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Configurazione e ricostruzione del RAID software](/pages/bare_metal_cloud/dedicated_servers/raid_soft)

[Come diagnosticare i problemi hardware dei server](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

[Come utilizzare la console IPMI con un server dedicato](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).