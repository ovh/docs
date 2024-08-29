---
title: "Iniziare a utilizzare un server dedicato"
excerpt: "Come gestire un server dedicato nello Spazio Cliente e come iniziare a utilizzare la configurazione e la protezione di un server"
updated: 2024-05-17
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Un server dedicato è un server fisico ("bare metal") situato in uno dei nostri datacenter. A differenza delle soluzioni di hosting Web (chiamate anche "shared hosting"), gestite tecnicamente da OVHcloud, sei l'unico responsabile della gestione del server dedicato.

**Questa guida ti fornisce tutte le informazioni necessarie per muovere i primi passi nell'utilizzo di un server dedicato.**

## Prerequisiti

- Disporre di un [server dedicato](/links/bare-metal/bare-metal) nello Spazio Cliente OVHcloud
- Essere connesso al tuo server in SSH con Linux o tramite un desktop remoto con Windows
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!primary]
>
> Se il tuo server appartiene alla linea di prodotti **Eco**, consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco).

## Procedura

### Sommario

- [Installazione o reinstallazione di un sistema operativo](#install)
- [Connessione al tuo server](#connect)
- [Riavvio del tuo server dedicato](#reboot)
- [Protezione del tuo server dedicato](#secure)
- [Monitoraggio OVHcloud](#monitoring-server)
- [Configurazione rete](#network)
- [Modalità Rescue](#rescue)
- [Accesso con l'IPMI](#console)
- [Backup Storage](#backup)

<a name="install"></a>

### Installazione o reinstallazione di un sistema operativo

> [!success]
>
> Per maggiori informazioni sui sistemi operativi dei server, accedi alla [pagina Web](/links/bare-metal/os).
>

Reinstalla facilmente il tuo server o scegli un'altra immagine del sistema operativo da installare nel tuo [Spazio Cliente OVHcloud](/links/manager). Nella scheda `Informazioni generali`{.action}, clicca sui tre puntini `...`{.action} in corrispondenza del Sistema operativo e seleziona `Installa`{.action}.

![Pulsante Reinstalla](images/reinstalling-your-server-01.png){.thumbnail}

Nella nuova finestra, seleziona una delle opzioni di installazione:

- `Installare a partire da un template OVHcloud`{.action}: puoi selezionare il sistema operativo e personalizzare la configurazione del tuo server.
- `Installare uno dei tuoi template`{.action}: per applicare un template personalizzato, è necessario aver registrato almeno una configurazione di server. Per effettuare questa operazione, seleziona l'opzione "Salva questa installazione" nella fase 4 del processo di installazione.
- `Installare a partire da un'immagine personalizzata`{.action}: questa opzione ti permette di installare un'immagine esterna sul server. Per maggiori informazioni, consulta la [guida sulla funzionalità Bring Your Own Image](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image).

> [!primary]
>
> Alcuni sistemi operativi o piattaforme proprietarie come Plesk o Windows richiedono licenze che generano costi aggiuntivi. È possibile acquistare licenze [da OVHcloud](/links/bare-metal/os) o da un rivenditore esterno. In seguito, la licenza dovrà essere applicata nel sistema operativo stesso o dallo [Spazio Cliente OVHcloud](/links/manager).
>
> Tutte le licenze sono disponibili nella sezione `Bare Metal Cloud`{.action} con `Licenze`{.action}. In questa sezione è possibile anche ordinare licenze o aggiungere licenze esistenti tramite il pulsante `Actions`{.action}.
>

Clicca su `Avanti`{.action} per continuare.

![Seleziona template](images/reinstalling-your-server-02.png){.thumbnail}

Dopo aver scelto di `Installare a partire da un template OVHcloud`{.action}, puoi selezionare il sistema operativo nei menu a tendina.

![Selezione operativa](images/reinstalling-your-server-03.png){.thumbnail}

Se è necessario modificare lo schema di partizione del sistema operativo, spunta la casella "Personalizza la configurazione delle partizioni" prima di cliccare su `Seguente`{.action}.

![Personalizzare la configurazione delle partizioni](images/reinstalling-your-server-04.png){.thumbnail}

Questo step permette di configurare il tipo di RAID e il partizionamento, nei limiti dell'hardware e del sistema operativo.

> [!warning]
>
> Se il tuo server è dotato di Soft RAID, il nostro sistema darà la priorità all'installazione del sistema operativo utilizzando tutti i tuoi dischi. Questa tecnologia è chiamata RAID 1. RAID 1 (disk mirroring) è la replica di dati su due o più dischi. In questo modo, tutti i dischi vengono montati automaticamente durante la procedura di installazione. Ciò significa anche che l'accesso allo storage avviene su un solo disco e che gli altri dischi vengono utilizzati per la replica dei dati, assicurando la ridondanza in caso di guasto del disco.
>

Se non si desidera utilizzare tutti i dischi per l'installazione, è possibile aggiornarla dopo aver selezionato la casella "Personalizza la configurazione delle partizioni". In questo caso, sarai responsabile del montaggio degli altri dischi nel sistema operativo. Per informazioni su come procedere, consultare la documentazione del sistema operativo.

![select disks](images/choosedisk.png){.thumbnail}

Una volta terminati gli adeguamenti, clicca su `Seguente`{.action} per accedere alla pagina di riepilogo.

In particolare, sono disponibili domande complementari specifiche per il sistema operativo selezionato.          

Ad esempio, se installi un sistema operativo GNU/Linux, puoi aggiungere la tua chiave SSH.

Per maggiori informazioni sulla generazione delle chiavi SSH, consulta la [nostra guida](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated). 

![configurazione SSH](images/reinstalling-your-server-05.png){.thumbnail}

Clicca su `Conferma`{.action} per avviare l’installazione del sistema operativo sul tuo server dedicato.

<a name="connect"></a>

### Connessione al tuo server

> [!warning]
> OVHcloud mette a disposizione i servizi la cui configurazione e gestione sono di vostra responsabilità. È quindi responsabilità dell’utente garantirne il corretto funzionamento.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativamente all’amministrazione, all’utilizzo o all’implementazione dei servizi di un server, ti consigliamo di contattare un [provider di servizi specializzato](/links/partner).
>

#### Linux

Se sul server è stato installato un modello di OS OVHcloud, verrà creato automaticamente un utente con autorizzazioni elevate. Questo utente verrà nominato in base al sistema operativo, ad esempio "ubuntu" o "rocky".

Riceverai un’email con le informazioni necessarie per effettuare il primo accesso in SSH. SSH è un protocollo di comunicazione sicuro, utilizzato per stabilire connessioni criptate verso un host remoto. Per maggiori informazioni, consulta la nostra guida: [Primi passi in SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

La maggior parte dei sistemi operativi attuali dispone di un client **Open SSH** installato nativamente. Le credenziali di accesso consentono quindi di stabilire rapidamente una connessione al server dalla workstation tramite l’applicazione da riga di comando appropriata (`Terminal`, `Command prompt`, `Powershell`, ecc...). Immettere il comando seguente:

```bash
ssh username@IPv4
```

**Esempio:**

```bash
ssh ubuntu@203.0.113.1
```

È inoltre possibile utilizzare qualsiasi applicazione terza compatibile con **Open SSH**.

Una volta effettuato l’accesso, è possibile sostituire la password predefinita dell’utente corrente con una migliore frase segreta (*passphrase*) utilizzando questo comando:

```bash
passwd
```

In una distribuzione GNU/Linux, **il prompt della password non mostrerà le voci della tastiera**.

Digita la password corrente e clicca su `Invio`{.action}. Digitare la nuova frase segreta e quindi ridigitarla al prompt successivo per confermarla.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Attivazione dell'account utente root**
>
> Non è necessario utilizzare l'account utente "root" per avviare l'amministrazione del server. Per utilizzare questo account, è necessario che sia stato abilitato nel sistema operativo del server. Inoltre, per motivi di sicurezza, le connessioni SSH con l’utente "root" sono **disattivate** di default.
> 
Se non diversamente specificato, tutte le operazioni di amministrazione descritte nella nostra documentazione possono essere effettuate dall’account utente predefinito, ovvero digitando `sudo` seguito dal relativo ordine. Per maggiori informazioni su questo argomento, consulta la nostra guida sulla [configurazione degli account utente e dell'accesso root su un server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

A seconda delle esigenze in termini di sicurezza, mobilità e praticità, le chiavi SSH possono servire come metodo di connessione supplementare o anche sostituire un identificativo tramite un nome utente e una password. Questa guida ti mostra come utilizzarle: [Creare e utilizzare chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

#### Windows

Una volta completata l’installazione, riceverai un’email con le credenziali Windows. Accedi al tuo server via RDP (**R**emote **D**esktop **P**rotocol). Nel dispositivo Windows locale, aprire l'applicazione `Remote Desktop Connection`.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Inserisci l’indirizzo IPv4 del server, poi il nome utente e la passphrase. In genere viene visualizzato un messaggio di avviso che richiede di confermare la connessione a causa di un certificato sconosciuto. Clicca su `Sì`{.action} per accedere.

È inoltre possibile utilizzare qualsiasi applicazione di terze parti compatibile con RDP. Questa condizione è necessaria se Windows non è installato nel dispositivo locale.

> [!primary]
>
> In caso di problemi con questo metodo, verificare che le connessioni remote (RDP) siano consentite sulla workstation controllando le impostazioni di sistema, le regole firewall e le eventuali restrizioni di rete.
> 

In modalità di backup, accedi utilizzando la [console IPMI dallo Spazio Cliente OVHcloud](#console).

##### Attivazione dei log di avvio di Windows (facoltativo)

I log di avvio di Windows possono essere utili per la diagnostica degli errori del server.

Per attivarli, segui i passaggi seguenti scorrendo le schede:

> [!tabs]
> 1. **Connettersi al server**
>>
>> Connettiti al server tramite RDP o [IPMI](#console).<br>
>>
> 2. **Apri utilità "Run"**
>>
>> Apri il menu Start di Windows e clicca su `Esegui`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Apri "msconfig"**
>>
>> Inserisci "msconfig" e clicca su `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Attiva i log**
>>
>> Nella nuova finestra, seleziona l’opzione log accanto a `Boot log`. Clicca su `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Al successivo avvio del server, i log verranno salvati in un file `.txt`. Il percorso del file è `C:\Windows\ntbtlog.txt`.

Per accedere al file di log in modalità Rescue, segui le istruzioni nella [guida alla modalità Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

<a name="reboot"></a>

### Riavvio del tuo server dedicato

Il riavvio può essere necessario per applicare configurazioni aggiornate o risolvere un problema. Per quanto possibile, effettua un "soft reboot" del server tramite la seguente linea di comando:

```bash
reboot
```

Tuttavia, puoi effettuare un "hard reboot" in qualsiasi momento nel tuo [Spazio Cliente OVHcloud](/links/manager). Nella scheda `Informazioni generali`{.action}, clicca `...`{.action} in corrispondenza di "Stato" nella sezione **Stato dei servizi** e poi clicca su `Riavvia`{.action} e `Conferma`{.action} nella finestra contestuale.

![Riavvia](images/rebooting-your-server.png){.thumbnail}

<a name="secure"></a>

### Protezione del tuo server dedicato

Come spiegato nella parte iniziale di questa guida, in quanto amministratore del tuo server dedicato In quanto tale, sei responsabile dei tuoi dati e della loro sicurezza. Per maggiori informazioni sulla sicurezza del tuo server, consulta la guida [Mettere in sicurezza un server dedicato](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server).

Se utilizzi un server Windows, consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win).

<a name="monitoring-server"></a>

### Monitoraggio OVHcloud

È possibile attivare o disattivare il monitoraggio di un server dedicato dalla scheda `Informazioni generali`{.action} dello [Spazio Cliente OVHcloud](/links/manager). L'opzione si trova nella sezione `Stato dei servizi`.

![Monitoring](images/monitoring-your-server.png){.thumbnail}

Clicca sul pulsante `Configura`{.action}. Nella nuova finestra, hai tre opzioni per il tuo comportamento di sorveglianza:

- **Disattivato**: Questa opzione blocca i messaggi di alert e gli interventi di OVHcloud. Scegli questa opzione se esegui le azioni di amministrazione sul server che impediscono una risposta ICMP.
- **Attivato con intervento proattivo**: Se il server non risponde più, riceverai un'email di alert e il server sarà verificato da un tecnico.
- **Attivato senza intervento proattivo**: Riceverai un alert via email nel caso in cui il server non risponda più. Per avviare un intervento è necessario attivare l'opzione con intervento proattivo.

![Monitoring](images/monitoring-your-server2.png){.thumbnail}

Clicca su `Conferma`{.action} per aggiornare la tua configurazione di sorveglianza.

Per maggiori informazioni sul monitoraggio, consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring).

<a name="network"></a>

### Configurazione rete

#### Modalità Bridge IP

La modalità bridge è l'azione intrapresa dall'apparecchiatura di rete per creare una rete aggregata a partire da più reti di comunicazione o da più segmenti di rete. La modalità bridge è separata dal routing, che permette alle reti di comunicare in modo indipendente, pur restando separate.

È la configurazione più utilizzata nell’ambito della virtualizzazione, in quanto permette a ogni macchina virtuale di disporre del proprio indirizzo IP pubblico.

Per maggiori informazioni sulla modalità bridge, consulta la nostra guida: [Modalità Bridge IP](/pages/bare_metal_cloud/dedicated_servers/network_bridging).

#### Alias IP

L’alias IP è un tipo di configurazione che permette di associare più indirizzi IP a un’interfaccia di rete. In questo modo il tuo server è in grado di stabilire più connessioni a una rete, ognuna con un obiettivo diverso.

Per maggiori informazioni sulla configurazione dell'alias IP, consulta la guida [Configurare un indirizzo IP con l'alias](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).

#### Configurazione IPv6

Tutti i server dedicati OVHcloud vengono consegnati con un blocco /64 IPv6. Per utilizzare gli indirizzi di questo blocco, è necessario apportare modifiche alla configurazione di rete. Consulta la nostra guida [Configurazione IPv6](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).

<a name="rescue"></a>

### Modalità Rescue

Per risolvere qualsiasi problema, riavvia il server in modalità Rescue dallo [Spazio Cliente OVHcloud](/links/manager). È importante identificare i problemi del server in questa modalità, per escludere i problemi legati al software prima di contattare il nostro team di supporto.

Consulta la guida [Attivare e utilizzare il Rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

<a name="console"></a>

### Accesso con l'IPMI

OVHcloud implementa tutti i server dedicati con una console IPMI (Intelligent Platform Management Interface) che si esegue nel browser o da un'applet Java e ti permette di connetterti direttamente al tuo server anche se non dispone di connessione di rete. che è uno strumento utile per risolvere i problemi che hanno potuto mettere il tuo server online.

Per maggiori informazioni, consulta la guida [Utilizzare l'IPMI sui server dedicati](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).

<a name="backup"></a>

### Backup Storage

I server dedicati OVHcloud includono uno spazio di storage con controllo degli accessi e vengono forniti come opzione gratuita. È preferibile utilizzarlo come opzione di backup supplementare se il server stesso dovesse subire una perdita di dati.

Per attivare e utilizzare l'opzione Backup Storage, consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).

## Per saperne di più

[Configurazione degli account utente e dell'accesso root su un server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Mettere in sicurezza un server dedicato](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Attivare e utilizzare il Rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[OVHcloud API & OS installation](/pages/bare_metal_cloud/dedicated_servers/api-os-installation) (EN)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
