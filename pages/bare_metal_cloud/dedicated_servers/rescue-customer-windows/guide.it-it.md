---
title: "Modalità rescue Windows su un server dedicato"
excerpt: "Avvia il tuo server dedicato Windows in modalità rescue OVHcloud per risolvere problemi, riparare o reimpostare password"
updated: 2025-01-28
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

La modalità Rescue è uno strumento fornito da OVHcloud che permette di avviare un sistema operativo temporaneo. con lo scopo di diagnosticare e risolvere i problemi sul tuo server.

Il funzionamento generale della modalità rescue è descritto nella nostra guida "[Come attivare e utilizzare la modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)".

L'opzione **Windows customer rescue system** è disponibile solo per i server dedicati su cui è installato un sistema operativo **Windows Server**. Si applicano le seguenti condizioni:

- Il sistema rescue per Windows (`rescue-customer-windows`) funziona in una macchina virtuale (VM) avviata a partire dal sistema rescue client (`rescue-customer`, basato su Debian GNU/Linux).
- I dischi del server sono associati alla VM con *passthrough*, quindi è possibile accedervi.
- Gli altri componenti del server non saranno raggiungibili (CPU, RAM, scheda di rete, scheda RAID).
- La rete è montata con *passthrough* ma senza accesso diretto alla scheda di rete. La VM contiene l'indirizzo IP e l'indirizzo MAC del server *bare metal*.

> [!warning]
>
> Assicurati di eseguire un backup dei tuoi dati se ancora non ne hai uno recente.
>
> Se sul server sono presenti servizi in produzione, la modalità Rescue li interrompe fino al riavvio della macchina in modalità normale.
>

**Questa guida ti mostra come avviare un server nel client di backup di Windows.**

## Prerequisiti

- Microsoft Windows installato sul tuo [server dedicato](/links/bare-metal/bare-metal)
- Almeno 16 GB di RAM installati sul server

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Server dedicati](/links/control-panel/baremetal-dedicated-servers)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server dedicati`{.action} > Seleziona il tuo server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedura

### Attivazione della modalità Rescue per Windows

Clicca sul nome del tuo server per aprire la scheda `Informazioni generali`{.action}.

<a name="netboot"></a>

Nella casella **Informazioni generali**, clicca sul pulsante `...`{.action} accanto a `Boot`. Clicca su `Modifica`{.action} nel menu contestuale.

![Modifica la modalità di avvio](images/rescue-mode-001.png){.thumbnail}

Nella pagina **Modifica il netboot**, seleziona `Avviare in Rescue mode`{.action}.

Seleziona `Windows customer rescue system`{.action} nel menu a tendina.

![Modifica la modalità di avvio](images/manager-rescue-windows-menu.png){.thumbnail width="800"}

L’email di notifica della modalità Rescue e le relative credenziali verranno inviate all’indirizzo e-mail di contatto del tuo account OVHcloud. Per utilizzare un altro indirizzo email, inseriscilo nel campo `Ricevi le credenziali della modalità selezionata all'indirizzo email:`.

Clicca su `Avanti`{.action}.

Nella tappa **Riepilogo**, clicca su `Conferma`{.action}.

![Summary](images/winresc_summ.png){.thumbnail}

A questo punto dovresti avere una notifica relativa al parametro `Netboot` nella scheda `Informazioni generali`{.action}.

![Netboot](images/rescue-mode-006.png){.thumbnail}

L’ultimo step consiste nel riavviare il server. Clicca sul pulsante `...`{.action} accanto a "Stato" nella casella **Stato dei servizi** e poi clicca su `Riavvia`{.action}. Clicca su `Conferma`{.action} nella finestra pop-up.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

*hard reboot* richiederà alcuni minuti per terminare. È possibile verificare lo stato corrente nella scheda `Task`{.action}.

> [!primary]
>
> Dopo aver terminato le operazioni in modalità Rescue, ricordati di reimpostare il parametro `Netboot` su `Avviare da hard disk`{.action} prima di riavviare il server.

### Accedi al tuo server in modalità Rescue

Una volta ricevuta l’email che ti informa che la modalità Rescue è attiva, puoi accedere al sistema in modalità Rescue da Windows e accedere al tuo server.  
Questa email è disponibile anche nello [Spazio Cliente OVHcloud](/links/manager). Clicca sul nome associato al tuo identificativo cliente nella barra dei menu in alto a destra e seleziona `Email di servizio`{.action}.

Per stabilire una sessione remota sul sistema in modalità Rescue di Windows, sono necessarie le seguenti credenziali:

- Indirizzo IP del server
- Nome utente account Administrator temporaneo (`Administrator`)
- Password dell'account amministratore temporaneo

Per accedere al server tramite il sistema in modalità Rescue di Windows, è possibile utilizzare i seguenti metodi di connessione:

- Remote Desktop Protocol (RDP)
- KVM over IP (se il tuo server lo permette)
- OpenSSH (componente ufficiale di Windows Server)

#### RDP

/// details | Espandi questa sezione

Per accedere, utilizzare il client `Remote Desktop Connection` di Windows o qualsiasi applicazione compatibile.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

///

#### KVM

/// details | Espandi questa sezione

Nella schermata di login KVM è possibile selezionare una lingua diversa da tastiera.

![KVM Login Screen](images/rescue-kvm-login-screen.png){.thumbnail width="800"}

![KVM Language Screen](images/rescue-kvm-login-language.png){.thumbnail width="800"}

È possibile modificare le opzioni di accesso facilitato e attivare la tastiera virtuale:

![KVM accessibility Screen](images/rescue-kvm-login-accessibility.png){.thumbnail width="800"}

![KVM keyboard screen](images/rescue-kvm-login-keyboard.png){.thumbnail width="800"}

Per maggiori informazioni, consulta la nostra guida: [Come utilizzare la console IPMI con un server dedicato](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

///

#### SSH

/// details | Espandi questa sezione

Aprire l'applicazione da riga di comando sul dispositivo locale e immettere il comando seguente:

```bash
ssh Administrator@SERVER_IP
```

Esempio:

```bash
ssh Administrator@203.0.113.100
```

Quando richiesto, immetti la password della modalità Rescue temporanea. Esempio:

```console
Administrator@ns9356771.ip-203-0-113.eu's password:
administrator@WINRESCUEOVH C:\Users\Administrator>
```

Per maggiori informazioni sulle connessioni SSH, consulta la nostra [guida introduttiva a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
È inoltre possibile utilizzare qualsiasi strumento di connessione SSH, ad esempio [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

///

### Importazione di dischi per accedere ai tuoi file

Una volta connesso al client di backup di Windows, è necessario importare (*mount*) i dischi dal server Windows prima di poter accedere al file system.

/// details | Espandi questa sezione

> [!warning]
> Gli esempi di istruzioni e screenshot seguenti illustrano il processo di mount basato su server con due dischi in mirroring (RAID1). I dettagli visualizzati dipendono dalla configurazione del disco del server.  
> Per ulteriori informazioni, consultare la [documentazione ufficiale Microsoft](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management).
>
> Se hai bisogno di assistenza professionale per l'amministrazione del tuo server, consulta la sezione [Per saperne di più](#gofurther) di questa guida.

| ![Gestione dischi Windows](images/rescue-disk-mgmt1.png){.thumbnail} |
|---|
| Clicca con il tasto destro sul pulsante `Start Menu`{.action} e apri `Disk Management`{.action}. |

| ![Gestione dischi Windows](images/rescue-disk-mgmt2.png){.thumbnail width="700"} |
|---|
| `Disk 0` contiene il sistema rescue (volume `C:`). I dischi del tuo server Windows saranno visualizzati come `Offline`. |

| ![Gestione dischi Windows](images/rescue-disk-mgmt3.png){.thumbnail} |
|---|
| Clicca con il tasto destro su ogni disco e seleziona `Online`{.action} nel menu a comparsa. |

| ![Gestione dischi Windows](images/rescue-disk-mgmt4.png){.thumbnail} |
|---|
| I dischi del server sono ora [riconosciuti dal sistema rescue come `Foreign`](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management#a-dynamic-disks-status-is-foreign), uno stato che indica che i dischi collegati appartengono a un sistema operativo diverso. |

| ![Gestione dischi Windows](images/rescue-disk-mgmt5.png){.thumbnail} |
|---|
| Clicca con il tasto destro del mouse su un disco e seleziona `Import Foreign Disks...`{.action} dal menu di scelta rapida. |

| ![Gestione dischi Windows](images/rescue-disk-mgmt6.png){.thumbnail} |
|---|
| Se necessario, selezionare i dischi da importare. Clicca su `OK`{.action}. |

| ![Gestione dischi Windows](images/rescue-disk-mgmt7.png){.thumbnail} |
|---|
| Clicca su `OK`{.action}. |

| ![Gestione dischi Windows](images/rescue-disk-mgmt8.png){.thumbnail} |
|---|
| In questo esempio, i due dischi del server sono in mirroring, quindi verrà visualizzato lo stato `Resynching`. Questo è il normale processo; la risincronizzazione continuerà anche dopo il riavvio del server sul sistema operativo installato. |

| ![Gestione dischi Windows](images/rescue-disk-mgmt9.png){.thumbnail} |
|---|
| Per accedere ai tuoi file, clicca con il tasto destro sulla partizione Windows del tuo `Disk 1` e seleziona `Open`{.action} nel menu contestuale. |

///

### Utilità consigliate

> [!primary]
>
> Nessun software aggiuntivo preinstallato sul sistema in modalità Rescue. Di seguito è riportato un elenco di strumenti consigliati, disponibili sul sito web dei rispettivi sviluppatori.

| Software | Descrizione |
| --- | --- |
| CrystalDiskInfo | Strumento di diagnostica disco |
| 7-Zip | Strumento di gestione degli archivi |
| FileZilla | Client FTP |

### Uscita dalla modalità Rescue

Nel tuo [Spazio Cliente OVHcloud](/links/manager), [modifica la modalità di avvio](#netboot) di nuovo in `Avviare da hard disk`{.action} e conferma.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail width="800"}

Dopodiché utilizza la funzione `Riavvia`{.action} nello Spazio Cliente OVHcloud.

<a name="gofurther"></a>

## Per saperne di più

[Come attivare e utilizzare la modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Come cambiare la password amministratore su un server dedicato Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).