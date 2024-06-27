---
title: "Attivare e utilizzare la modalità Rescue Windows"
excerpt: "Scopri come utilizzare la modalità rescue-customer-windows di OVHcloud per risolvere i problemi del tuo server dedicato"
updated: 2024-05-21
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La modalità *rescue-customer-windows* è uno strumento fornito da OVHcloud che ti permette di avviare un sistema operativo temporaneo con lo scopo di diagnosticare e risolvere i problemi sul tuo server.

La modalità Rescue è generalmente adatta alle seguenti operazioni:

- [Reimposta password amministratore](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)
- Riparazione di un sistema operativo difettoso
- Correzione di una configurazione errata di un firewall software

> [!warning]
>
> Assicurati di eseguire un backup dei tuoi dati se ancora non ne hai.
>
> Se sul server sono presenti servizi in produzione, la modalità Rescue li interrompe fino al riavvio della macchina in modalità normale.
>

**Questa guida ti mostra come riavviare un server in modalità *rescue-customer-windows*.**

## Prerequisiti

- Disporre di un [server dedicato](/links/bare-metal/bare-metal) installato con una versione di Microsoft Windows.
- il server deve avere più di 16 GB di RAM.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Informazioni funzionali

*Rescue-customer-windows* viene eseguito in una macchina virtuale (VM) avviata dal sistema *rescue* (basato su Debian GNU/Linux).<br>
I dischi del server sono associati alla VM in *passthrough*, quindi è possibile accedervi.<br>
Gli altri componenti del server non saranno accessibili (CPU, RAM, NIC, scheda RAID).<br>
La rete è montata in *passthrough* ma senza accesso diretto alla scheda di rete, ciò implica che la VM porti l'indirizzo IP e l'indirizzo MAC del server bare metal.

> [!warning]
>
> Riavvia/spegni la VM del *rescue-customer-windows* non farà riavviare il server sul suo OS d'origine.
> Per riavviare il sistema operativo originale, consulta questa guida.

## Procedura

La modalità Rescue può essere attivata esclusivamente dallo [Spazio Cliente OVHcloud](/links/manager). Seleziona il server nella sezione `Bare Metal Cloud`{.action}, poi `Server dedicati`{.action}.

Cerca "Boot" nella casella **Informazioni generali**, clicca sul pulsante `...`{.action} e poi su `Modificare`{.action}.

![Cambia la modalità di avvio](images/rescue-mode-001.png){.thumbnail}

Nella pagina successiva, seleziona **Avviare in Rescue mode**.

Seleziona `rescue-customer-windows`{.action}. Se non si desidera **** che le credenziali di accesso vengano inviate all'indirizzo principale del proprio account OVHcloud, specificare un altro indirizzo di posta elettronica.

Clicca su `Continua`{.action} e `Conferma`{.action}.

![Modalità rescue-customer](images/manager-rescue-windows-menu.png){.thumbnail}

Una volta completata la modifica, clicca sul pulsante `...`{.action} a destra di "Stato" nella casella intitolata **Stato dei servizi**.

Clicca su `Riavvia`{.action} e il server verrà riavviato in modalità Rescue. Questa operazione potrebbe richiedere alcuni minuti.

È possibile verificare lo stato di avanzamento nella scheda `Operazioni`{.action}. Una volta che il sistema di rescue è disponibile, riceverai un’email con le credenziali (inclusa la password di accesso) dell’utente "Administrator" del Rescue mode.

![Riavvia il server](images/rescue-mode-02.png){.thumbnail}

Una volta terminata l’attività in modalità Rescue, ricordati di reimpostare la modalità di boot (netboot) su `Avviare da hard disk`{.action} e riavvia il server.

### Connessione al *rescue-customer-windows*

Una volta recuperata la password, avrai tre possibilità per accedere al server:

- Remote Desktop Protocol (RDP)
- SSH (componente ufficiale Windows OpenSSH Server)
- KVM su IP (se il tuo server lo permette)

> [!warning]
>
> In ogni caso, ti verrà chiesto di inserire la password.
>
> L’utente che permette di accedere è `Administrator`.
>
> La password viene trasmessa tramite un link `secret-as-a-service`.

#### Utilizzo del KVM su IP

Nella schermata di login del KVM è possibile selezionare una lingua diversa per la tastiera.

![KVM Login Screen](images/rescue-kvm-login-screen.png){.thumbnail}

![KVM Language Screen](images/rescue-kvm-login-language.png){.thumbnail}

È possibile modificare le opzioni di accesso facilitato e attivare la tastiera virtuale:

![KVM accessibility Screen](images/rescue-kvm-login-accessibility.png){.thumbnail}

![KVM keyboard Screen](images/rescue-kvm-login-keyboard.png){.thumbnail}

### Montare i dischi

È possibile che i dischi collegati siano visti come `Volumi Dinamici`. Per poterli utilizzare, consulta la [documentazione ufficiale Microsoft](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management#a-dynamic-disks-status-is-foreign).

### Utilità consigliate

> [!warning]
>
> Di seguito è riportato un elenco dei software consigliati per alcuni casi d’uso.
> Questi software non vengono installati di default sull'immagine *Rescue* e sono facilmente disponibili su Internet.

| Software | Descrizione |
| --- | --- |
| CrystalDiskInfo | Strumento di diagnostica disco |
| 7Zip | Strumento di gestione degli archivi |
| FileZilla | Client FTP open source |

## Per saperne di più

- [Attivare e utilizzare la modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
