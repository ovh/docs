---
title: "Iniziare a utilizzare un server dedicato"
excerpt: "Come eseguire le prime operazioni sul tuo nuovo server dedicato"
updated: 2024-04-04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Un server dedicato è una macchina fisica localizzata in uno dei nostri datacenter. Diversamente dalle soluzioni di hosting Web (descritte come "condivise"), che sono tecnicamente gestite da OVHcloud, l'amministrazione è interamente responsabilità dell'utente.

**Questa guida ti mostra le operazioni di base da effettuare sul tuo nuovo server.**

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) nello Spazio Cliente OVHcloud
- Essere connesso al tuo server in SSH (accesso root) con Linux o tramite un desktop remoto con Windows
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

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

Quando il tuo server dedicato è configurato per la prima volta durante il processo di ordine, puoi selezionare il sistema operativo da installare.

Reinstalla facilmente il tuo server e scegli un altro modello di sistema operativo nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Nella scheda `Informazioni generali`{.action}, clicca sui tre puntini `...`{.action} in corrispondenza del Sistema operativo e seleziona `Installa`{.action}.

![Pulsante Reinstalla](images/reinstalling-your-server-01.png){.thumbnail}

Nella nuova finestra, seleziona una delle opzioni di installazione:

- `Installare a partire da un template OVHcloud`{.action}: puoi selezionare il sistema operativo e personalizzare la configurazione del tuo server.
- `Installare uno dei tuoi template`{.action}: per applicare un template personalizzato, è necessario aver registrato almeno una configurazione di server. Per effettuare questa operazione, seleziona l'opzione "Salva questa installazione" nella fase 4 del processo di installazione.
- `Installare a partire da un'immagine personalizzata`{.action}: questa opzione ti permette di installare un'immagine esterna sul server. Per maggiori informazioni, consulta la [guida sulla funzionalità Bring Your Own Image](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image).

> [!primary]
>
> Alcuni sistemi operativi o piattaforme proprietarie come Plesk o Windows richiedono licenze che generano costi aggiuntivi. È possibile acquistare licenze [da OVHcloud](https://www.ovhcloud.com/it/bare-metal/os/) o da un rivenditore esterno. In seguito, la licenza dovrà essere applicata nel sistema operativo stesso o dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
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

Una volta terminati gli adeguamenti, clicca su `Seguente`{.action} per accedere alla pagina di riepilogo.

In particolare, sono disponibili domande complementari specifiche per il sistema operativo selezionato.

Ad esempio, se installi un sistema operativo GNU/Linux, puoi aggiungere la tua chiave SSH.

![configurazione SSH](images/reinstalling-your-server-05.png){.thumbnail}

Clicca su `Conferma`{.action} per avviare l’installazione del sistema operativo sul tuo server dedicato.

<a name="connect"></a>

### Connessione al tuo server

#### Linux

Una volta completata l'installazione, riceverai un'email con le istruzioni per l'accesso amministrativo. Accedi al tuo server tramite un terminale di comando o con un cliente terzo utilizzando SSH, che è un protocollo di comunicazione sicuro.

Utilizza questi esempi per connetterti al tuo server e sostituisci le informazioni di identificazione con i tuoi identificativi (l'indirizzo IP e il nome di riferimento del server sono intercambiabili).

```bash
ssh username@IPv4
```

**Esempio:**

```bash
ssh ubuntu@203.0.113.1
```

Per saperne di più su SSH, consulta la nostra guida [Introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

#### Windows

Una volta completata l'installazione, riceverai un'email con la password per l'accesso amministratore (sudo). Utilizza queste credenziali per connetterti al server via RDP (**R**emote **D**esktop **P**rotocol). Una volta connesso, Windows ti guiderà durante l'installazione iniziale.

Consulta anche la nostra guida [Configurare una nuova installazione di Windows Server](/pages/bare_metal_cloud/dedicated_servers/windows_first_config).

<a name="reboot"></a>

### Riavvio del tuo server dedicato

Il riavvio può essere necessario per applicare configurazioni aggiornate o risolvere un problema. Per quanto possibile, effettua un "soft reboot" del server tramite la seguente linea di comando:

```bash
reboot
```

ma è possibile effettuare un reboot "hard" in qualsiasi momento dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Nella scheda `Informazioni generali`{.action}, clicca `...`{.action} in corrispondenza di "Stato" nella sezione **Stato dei servizi** e poi clicca su `Riavvia`{.action} e `Conferma`{.action} nella finestra contestuale.

![Riavvia](images/rebooting-your-server.png){.thumbnail}

<a name="secure"></a>

### Protezione del tuo server dedicato

Come spiegato nella parte iniziale di questa guida, in quanto amministratore del tuo server dedicato In quanto tale, sei responsabile dei tuoi dati e della loro sicurezza. Per maggiori informazioni sulla sicurezza del tuo server, consulta la guida [Mettere in sicurezza un server dedicato](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server).

Se utilizzi un server Windows, consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win).

<a name="monitoring-server"></a>

### Monitoraggio OVHcloud

È possibile attivare o disattivare il monitoraggio di un server dedicato dalla scheda `Informazioni generali`{.action} dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). L'opzione si trova nella sezione `Stato dei servizi`.

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

Per risolvere qualsiasi problema, riavvia il server in modalità Rescue dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). È importante identificare i problemi del server in questa modalità, per escludere i problemi legati al software prima di contattare il nostro team di supporto.

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

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
