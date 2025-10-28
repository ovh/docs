---
title: "Come reimpostare la password amministratore con Rescue-Customer-Windows"
excerpt: "Come reimpostare la password amministratore con Rescue-Customer-Windows"
updated: 2025-10-22
---

## Obiettivo

Questa guida ti mostra come ripristinare la password `Administrator` con **Windows customer rescue system**.

## Prerequisiti

- Microsoft Windows Server 2016 o versione successiva installata sul tuo [server dedicato](/links/bare-metal/bare-metal)
- Almeno 16 GB di RAM installati sul server
- Accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!warning]
>
> Questa guida non si applica al **sistema Windows Rescue *legacy* (modalità Rescue WinPE)** (per maggiori informazioni, consulta la [guida alla modalità Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)).
>
> Se la versione di Windows Server in uso non è supportata, potrebbe non essere possibile attivare il sistema Rescue corrente per Windows. In questo caso, consulta la nostra guida che spiega [come reimpostare la password amministratore di Windows con il sistema Windows rescue *legacy*](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows).  
> Troverai anche un metodo alternativo per reimpostare la password amministratore con il sistema Rescue Customer di OVHcloud basato su Debian.


## Procedura

### Step 1 - Riavvia il server in modalità Rescue <a name="step1"></a>

Per modificare la password è necessario avviare il sistema in modalità **Windows customer rescue system**.

Per maggiori dettagli, consulta la [guida sul Rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

### Step 2 - Cancella la password corrente <a name="step2"></a>

Connettiti al server con la "Connessione desktop remoto" (RDP) e le credenziali trasmesse via email.

Il nome utente è `Administrator`.

- Se il tuo server utilizza un RAID software sul disco di sistema, devi prima importarlo prima di poter reimpostare la password: segui le istruzioni della [sezione A](#sectionA) di questa guida.
- Se il tuo server non utilizza un RAID software sul disco di sistema, puoi reimpostare la password direttamente seguendo le istruzioni della [sezione B](#sectionB) di questa guida.

#### A - Importare il disco locale Windows <a name="sectionA"></a>

##### 1. Accedi alla gestione dei dischi

Clicca con il tasto destro sul menu `Start`{.action} e seleziona `Disk Management`{.action}.

![disk_manager_menu](images/disk_manager_menu.png){.thumbnail}

Ora è possibile visualizzare i dischi e i volumi del server.

![disk_manager_window](images/disk_manager_window1.png){.thumbnail}

Il disco che contiene Windows sul tuo server è probabilmente il *disk 1*, quindi è necessario importarlo per potervi accedere.

Si noti che se il server dispone di più gruppi di dischi, il numero di disco contenente Windows potrebbe essere diverso e potrebbe essere necessario importare più dischi prima di trovarli.

È inoltre necessario importare il secondo disco per importare correttamente il volume di RAID software.

##### 2. Importa dischi

Clicca con il tasto destro su *Disk 1* e seleziona `Online`{.action}.

![disk_import_disk1](images/disk_manager_disk1on.png){.thumbnail}

Per importare correttamente il volume del RAID software, fare lo stesso con il secondo disco (Disk 2).

Clicca con il tasto destro su *Disk 2* e seleziona`Online`{.action}.

![disk_import_disk2](images/disk_manager_disk2on.png){.thumbnail}

I dischi vengono ora visualizzati come *Dynamic* e *Foreign*.

Clicca con il tasto destro del mouse su *Disk 1* e seleziona `Import Foreign Disks`{.action}.

![disk_import_menu](images/disk_manager_diskimport.png){.thumbnail}

Clicca due volte su `OK`{.action}.

![disk_import1](images/disk_import1.png){.thumbnail}

![disk_import2](images/disk_import2.png){.thumbnail}

Il disco locale è ormai accessibile e il disco Windows corrisponde al volume "(E:)" (che si estende su due dischi configurati in RAID software di tipo Mirrored Volume).

![disk_import_sync](images/disk_import_sync.png){.thumbnail}

> [!primary]
>
> In questo esempio, lo stato del volume è "Resynching" perché il server è stato bruscamente riavviato in modalità Rescue. È uno stato normale che non è causato dal rescue stesso.  
> Questa operazione non avrà alcun impatto sui dati del volume e la risincronizzazione continuerà anche dopo il riavvio del server sul sistema installato.

> [!warning]
>
> È necessario utilizzare il percorso della cartella locale di Windows (in questo caso E:\Windows) quando si naviga per trovare il file di configurazione _SAM_ nella sezione successiva.

A questo punto, è possibile reimpostare la password seguendo le istruzioni riportate nella sezione successiva.

#### B - Reimposta la password <a name="sectionB"></a>

Per reimpostare una password, è necessaria l'utilità NTPWEdit.

Una volta connesso tramite il desktop remoto (RDP), apri il browser Internet (MS Edge) e scarica l’utilità dal [sito Web ufficiale](http://www.cdslow.org.ru/files/ntpwedit/ntpwed07.zip).

Passare alla cartella in cui si trova il file ZIP scaricato ed estrarre il contenuto.

Apri il file eseguibile `ntpwedit64.exe` per avviare l’applicazione.

Tramite questa interfaccia, è possibile modificare il file *SAM* per cancellare la password dell’utente admin.

Per trovare il file *SAM* del sistema, è necessario spostarsi nella cartella locale di Windows.

Fare clic sul pulsante `...`{.action} per spostarsi nell'unità in cui si trova la cartella locale di Windows.

Generalmente è l’unità `Windows (E:\)`

![ntpwedit1](images/ntpwedit_1.png){.thumbnail}

Passare a `E:\WINDOWS\SYSTEM32\CONFIG\`.

Seleziona e apri il file *SAM* per visualizzare gli account utente selezionando `Open`{.action}.

![ntpwedit_sam](images/SAM.png)

Seleziona l’account utente "admin" e clicca su `Change password`{.action}.

![ntpwedit2](images/ntpwedit_2.png){.thumbnail}

Nella nuova finestra, inserisci la nuova password in entrambi i campi e clicca su `OK`{.action}.

> [!warning]
>
> La nuova password verrà accettata senza verificarne la complessità.
>
> Tieni presente che questa password permetterà di connettersi a distanza sul server, una volta riavviato sul suo sistema operativo.

Clicca su `Save changes`{.action} e poi su `Exit`{.action}.

Riavviare il server nel normale sistema operativo.

### Step 3 - Riavvia il server <a name="step3"></a>

Inizia sostituendo il netboot con `Avviare da hard disk`{.action} nello Spazio Cliente OVHcloud (vedi [Step 1](#step1)).

Riavvia il server dallo Spazio Cliente. Clicca sul pulsante `...`{.action} vicino alla sezione "Stato dei servizi" e seleziona `Riavvia`{.action}.

![reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/cp_dedicated_restart.png){.thumbnail}

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).