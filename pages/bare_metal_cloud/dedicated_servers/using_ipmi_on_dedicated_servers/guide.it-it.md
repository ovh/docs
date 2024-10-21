---
title: "Come utilizzare la console IPMI con un server dedicato"
excerpt: "Scopri come accedere al tuo server dal tuo Spazio Cliente senza utilizzare software esterno"
updated: 2024-03-01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La console IPMI (Intelligent Platform Management Interface) consente di stabilire una connessione diretta al tuo server dedicato senza utilizzare software esterni (ad esempio un terminale o PuTTY). Questa guida ti mostra come avviare la console.

Attenzione: incontrerai spesso anche il termine KVM (Keyboard Video and Mouse), che viene utilizzato dai VPS per questa soluzione.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

<a name="procedure"></a>

## Procedura

La connessione all'IPMI può essere effettuata principalmente tramite diversi metodi: l'applet Java (consigliato) o il browser (Serial Over LAN).

- **Applet Java** : permette di utilizzare uno strumento KVM (tastiera, video, topi) tramite una console Java per effettuare le azioni desiderate. Esistono due opzioni: tastiera e mouse.

- **Browser (Serial Over LAN)** : permette di accedere a distanza alla console del server tramite un browser web.

- Un terzo metodo, disponibile solo per i server più recenti, permette di utilizzare un tool KVM da un browser Web.

Per attivare uno di questi metodi, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Nella sezione `Bare Metal Cloud`{.action}, clicca su `Server dedicati`{.action} e seleziona il tuo server, poi clicca sulla scheda `IPMI`{.action}.

### Da applet Java <a name="applet-java"></a>

Per il corretto funzionamento dell'applet, è necessario che Java sia installato sul dispositivo. Se non lo hai ancora fatto, accedi alla [pagina ufficiale](https://www.java.com/en/download/){.external}.

Nella sezione `IPMI`{.action} dello Spazio Cliente OVHcloud, clicca su `Da una applet Java (KVM)`{.action}:

![IPMI Java iniziato](images/java_ipmi_initiate_2022.png){.thumbnail}

Scarica il file `kvm.jnlp` quando sei invitato e lancialo:

![Apertura IPMI Java](images/java_ipmi_activation.png){.thumbnail}

A questo punto accedi alla pagina di login. Inserisci le credenziali di `root`, come in caso di connessione da un terminale o da un software esterno:

![Connessione Java IPMI](images/java_ipmi_login.png){.thumbnail}

Da questo momento puoi gestire il tuo server.

### Utilizza KVM sul tuo browser Web (solo per i server più recenti) <a name="kvm-browser"></a>

Nella sezione `IPMI`{.action} dello Spazio Cliente OVHcloud, clicca su `Dal tuo navigatore (KVM)`{.action}:

![IPMI browser](images/KVM-web-browser01.png){.thumbnail}

L'attivazione richiede alcuni secondi. Un messaggio ti informerà della disponibilità della connessione via IPMI.

![IPMI browser](images/KVM-web-browser02.png){.thumbnail}

Clicca su `Accedi alla console (KVM)`{.action} per aprire la console nel tuo browser.

![IPMI browser](images/KVM-web-browser03b.png){.thumbnail}

### Da browser in modalità Serial Over LAN (SOL)

Anche se ti consigliamo di connetterti tramite l'applet Java, puoi utilizzare l'IPMI anche come Serial Over LAN (SoL). Clicca su `Dal tuo browser (SoL)`{.action} nella sezione `IPMI`{.action} del tuo Spazio Cliente.

![Attiva la dichiarazione di integrità IPMI](images/sol_ipmi_activation_2022.png){.thumbnail}

> [!warning]
>
> La connessione con SoL può richiedere alcuni minuti, motivo per cui è consigliabile utilizzare l'applet Java.
>

### Testa e riavvia l'IPMI

È possibile che l'IPMI non risponda più. Se non riesci ad accedervi, per prima cosa esegui un test cliccando su `Testa IPMI`{.action} e visualizzando il risultato della diagnostica:

![Test IPMI](images/ipmi_test_2022.png){.thumbnail}

Se tutto è normale, come nel nostro esempio, probabilmente ti trovi di fronte a un problema locale (connessione a Internet, postazione locale). Se l'IPMI riscontra effettivamente un problema, hai la possibilità di riavviarlo cliccando su `Riavvia IPMI`{.action}.

![Test IPMI](images/ipmi_reboot_2022.png){.thumbnail}

Il riavvio dell'IPMI richiede alcuni minuti.

> [!primary]
> Questa operazione non incide sul funzionamento del server.
>

### Installazione di un sistema operativo con IPMI v1

> [!warning]
> OVHcloud non garantisce la funzionalità dei sistemi operativi installati tramite IPMI. Questo metodo deve essere preso in considerazione solo da un amministratore di server esperto.
>
> Le versioni a 64 bit di Java possono impedire l’apertura dei menu `Redirect ISO`/`Redirect CDROM` e provocare il blocco di JViewer.

Per iniziare, apri [IPMI da una applet Java](./#applet-java) attraverso il tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Device`{.action} nella barra dei menu e seleziona `Redirect ISO`{.action} nel menu a tendina.

![Redirect_ISO](images/RedirectISO.jpg){.thumbnail}

Seleziona l'ISO che vuoi utilizzare nel file system del tuo computer locale. Una volta selezionato il tuo ISO, premi il pulsante `Ctrl Alt Del`{.action} nell'angolo superiore destro dello schermo per riavviare il server. Premi il tasto `F` per accedere alle opzioni di avvio.

> [!primary]
> Potrai utilizzare la tastiera software per registrare i record in IPMI. Per effettuare l'accesso, clicca sull'opzione `Keyboard`{.action} nella barra dei menu in alto a destra. Seleziona `Soft Keyboard` nel menu a tendina e clicca su `Show`{.action}.
>

Seleziona l'opzione `UEFI Virtual CDROM 1.00` nel menu di avvio (Boot) per avviare il server a partire dall'ISO precedentemente associata.

![UEFI_Virt](images/UEFIVirt.jpg){.thumbnail}

Segui gli step per installare il sistema operativo. Ricordati di eliminare l'ISO dall'opzione "Redirect ISO".

### Installazione di un sistema operativo con IPMI v1

> [!warning]
> OVHcloud non garantisce la funzionalità dei sistemi operativi installati tramite IPMI. Questo metodo deve essere preso in considerazione solo da un amministratore di server esperto.
>

Per iniziare, apri [IPMI da una applet Java](./#applet-java) attraverso il tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Virtual Media`{.action} e poi su `Virtual Storage`{.action}.

![Virtual storage](images/virtual_storage.png){.thumbnail}

Nella nuova finestra, seleziona `ISO File` nel menu a tendina "Logical Drive Type". Clicca su `Open Image`{.action} e naviga fino al tuo file ISO. Infine clicca su `Plug-in`{.action} e `OK`{.action} per completare.

![ISO_file](images/iso_file.png){.thumbnail}

Per iniziare dal tuo file ISO, è necessario accedere al BIOS e modificare le opzioni di avvio. Clicca su `Power Control`{.action} e poi su `Set Power Reset`{.action}.

![Power_Reserver](images/power_reset.png){.thumbnail}

> [!primary]
> Potrai utilizzare la tastiera software per registrare i record in IPMI. Per accedervi, clicca sull'opzione `Virtual Media`{.action} nella barra dei menu in alto alla finestra. Seleziona `Virtual Keyboard`{.action} nel menu a tendina.
>

Per accedere al BIOS, premi il tasto `SUPPR` durante il processo di avvio. Premi il tasto `F11` e accedi al BIOS selezionando l'opzione `Enter Setup`{.action}.

![Menu_avvio](images/boot_menu.png){.thumbnail}

Nel BIOS, naviga fino alla scheda `Boot`{.action} e sostituisci `UEFI Boot Order #1` con `UEFI USB CD/DVD:UEFI: CDROM virtual ATEN YSOJ`.

![Bios](images/bios.png){.thumbnail}

Premi il tasto `F4` per salvare le modifiche e riavviare il server.

### Installare un OS utilizzando il browser web KVM (solo per i server più recenti)

> [!warning]
> OVHcloud non garantisce la funzionalità dei sistemi operativi installati tramite IPMI. Questo metodo deve essere preso in considerazione solo da un amministratore di server esperto.
>

Dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) è possibile aprire la [console KVM](#kvm-browser).

In questo caso, hai accesso alle stesse informazioni e funzionalità dei moduli IPMI basati su Java.

> [!primary]
>
> Assicurati di eseguire i prossimi step a un buon ritmo. La procedura può essere annullata se tra le azioni si verificano pause più lunghe.
>

Clicca sul pulsante `Browse File`{.action} e seleziona il tuo file di immagine.

![Installazione del KVM](images/kvm_install01.png){.thumbnail}

Clicca su `Start Media`{.action}. Ciò preparerà l'ISO per il processo di installazione.

![Installazione del KVM](images/kvm_install02.png){.thumbnail}

La dimensione del file visualizzato non corrisponde alla dimensione effettiva. È normale perché il file non è completamente trasmesso in questo step.

![Installazione del KVM](images/kvm_install03.png){.thumbnail}

Clicca su `Power`{.action} e seleziona `Reset Server`{.action} (reinizializza il server) nel menu a tendina.

![Installazione del KVM](images/kvm_install04.png){.thumbnail}

Attendi che la schermata di avvio venga visualizzata e premi il tasto corrispondente per accedere al menu di Boot (`F11` in questo esempio).

![Installazione del KVM](images/kvm_install05.png){.thumbnail}

Nel menu boot, seleziona il lettore ottico (`UEFI: AMI Virtual CDROM0` in questo esempio) e clicca su `Entrata`.

![Installazione del KVM](images/kvm_install06.png){.thumbnail}

Il file ISO verrà televersato e il server inizierà dal file.

![Installazione del KVM](images/kvm_install07.png){.thumbnail}

<a name="bios"></a>

### Riavvia un server dal menu BIOS

È possibile accedere al BIOS durante la configurazione o la risoluzione dei problemi del server. Un modo pratico per farlo è utilizzare lo strumento `ipmiutil` (per ulteriori informazioni, consulta la [pagina del progetto](https://ipmiutil.sourceforge.net/)).

Quando il server è in [modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) e una volta effettuato l’accesso, installalo con il comando:

```bash
apt install ipmiutil
```

Riavvia il server con questo comando:

```bash
ipmiutil reset -b
```

Accedi alla [console IPMI](#procedure) dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Verrà visualizzato il menu BIOS del server.

![KVM BIOS](images/kvm_bios.png){.thumbnail}

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
