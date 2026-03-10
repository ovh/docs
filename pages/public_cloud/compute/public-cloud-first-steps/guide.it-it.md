---
title: "Come creare un'istanza Public Cloud e connettersi"
excerpt: "Scopri come configurare le istanze Public Cloud nello Spazio Cliente OVHcloud e i primi passaggi con le tue istanze"
updated: 2026-02-24
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

Le istanze Public Cloud sono facili da implementare e gestire. Tuttavia, in quanto parte dell'ecosistema Public Cloud di OVHcloud, le istanze offrono numerose opzioni di configurazione e possono essere adattate a diversi casi d'uso. Le istruzioni seguenti includono tutti i passaggi necessari (e anche quelli facoltativi) per creare un'istanza nello Spazio Cliente OVHcloud e accedervi da remoto.
Potrai poi approfondire il tuo progetto Public Cloud in base alle tue esigenze.

**Questa guida ti mostra i primi passi con un'istanza Public Cloud.**


## Prerequisiti

- Un [progetto Public Cloud](/links/public-cloud/public-cloud) nel tuo account OVHcloud

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Percorso di navigazione:** `Public Cloud`{.action} > Seleziona il tuo project

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!success]
> Approfitta dei prezzi ridotti impegnandoti per un periodo da 1 a 36 mesi sulle tue risorse Public Cloud. Per maggiori informazioni, consulta la pagina [Savings Plans](/links/public-cloud/savings-plan).

## Procedura

> [!primary]
>
> Se non hai ancora creato un progetto Public Cloud, inizia con la nostra [guida sulla creazione di un progetto](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
>
> **I dettagli tecnici** importanti relativi al Public Cloud di OVHcloud sono disponibili su [questa pagina](/pages/public_cloud/public_cloud_cross_functional/00-essential-info-to-get-started-on-public-cloud).
>

### Presentazione del contenuto

- [Obiettivo](#obiettivo)
- [Prerequisiti](#prerequisiti)
- [Procedura](#procedura)
  - [Presentazione del contenuto](#presentazione-del-contenuto)
  - [Step 1: creare un set di chiavi SSH](#step-1-creare-un-set-di-chiavi-ssh)
  - [Step 2: Importare le chiavi SSH](#step-2-importare-le-chiavi-ssh)
  - [Step 3: preparare la configurazione di rete](#step-3-preparare-la-configurazione-di-rete)
  - [Step 4: creare l'istanza](#step-4-creare-listanza)
    - [Step 4.1: Nome dell'istanza](#step-41-nome-dellistanza)
    - [Step 4.2: Seleziona una localizzazione](#step-42-seleziona-una-localizzazione)
    - [Step 4.3: Seleziona un modello](#step-43-seleziona-un-modello)
      - [Informazioni aggiuntive](#informazioni-aggiuntive)
    - [Step 4.4: Seleziona un'immagine](#step-44-seleziona-unimmagine)
    - [Step 4.5: Seleziona una chiave SSH (non applicabile alle istanze Windows)](#step-45-seleziona-una-chiave-ssh-non-applicabile-alle-istanze-windows)
    - [Step 4.6: Configura i parametri di backup](#step-46-configura-i-parametri-di-backup)
    - [Step 4.7: Configura la rete](#step-47-configura-la-rete)
    - [Step 4.8: Seleziona un periodo di fatturazione](#step-48-seleziona-un-periodo-di-fatturazione)
    - [Step 4.9: Configura i parametri avanzati](#step-49-configura-i-parametri-avanzati)
      - [Istanza flessibile](#istanza-flessibile)
      - [Script di post-installazione](#script-di-post-installazione)
    - [Step 4.10: Finalizzazione dell'istanza](#step-410-finalizzazione-dellistanza)
  - [Step 5: Connettersi all'istanza](#step-5-connettersi-allistanza)
    - [5.1: Verificare lo stato dell'istanza nello Spazio Cliente](#51-verificare-lo-stato-dellistanza-nello-spazio-cliente)
    - [5.2: Prima connessione su un'istanza con OS GNU/Linux](#52-prima-connessione-su-unistanza-con-os-gnulinux)
    - [5.3: Istanze Windows](#53-istanze-windows)
      - [5.3.1: Completare l'installazione di un'istanza Windows](#531-completare-linstallazione-di-unistanza-windows)
      - [5.3.2: Connettersi da remoto da Windows](#532-connettersi-da-remoto-da-windows)
      - [5.3.3: Connettersi da remoto da un altro OS](#533-connettersi-da-remoto-da-un-altro-os)
    - [5.4: Accesso console VNC](#54-accesso-console-vnc)
  - [Step 6: Primi passi su una nuova istanza](#step-6-primi-passi-su-una-nuova-istanza)
    - [6.1: Gestione degli utenti](#61-gestione-degli-utenti)
      - [6.1.1: Definisci una password per l'account utente attuale](#611-definisci-una-password-per-laccount-utente-attuale)
      - [6.1.2: Attivazione della connessione remota tramite password (opzionale)](#612-attivazione-della-connessione-remota-tramite-password-opzionale)
    - [6.2: Chiavi SSH aggiuntive](#62-chiavi-ssh-aggiuntive)
- [Per saperne di più](#per-saperne-di-piu)

> [!primary]
>
> **Durante la creazione di istanze Public Cloud nel tuo Spazio Cliente, è necessario fornire una chiave SSH pubblica.** Una volta creata l'istanza, puoi configurare l'accesso remoto secondo le tue preferenze.
>
> **Eccezione**: l'autenticazione di accesso sulle istanze Windows richiede un nome utente e una password poiché Windows utilizza RDP (**R**emote **D**esktop **P**rotocol).
>

### Step 1: creare un set di chiavi SSH

Se disponi già di una coppia di chiavi SSH pronta all'uso, puoi saltare questo step.

Il [protocollo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) permette una comunicazione client-server crittografata. Una **coppia di chiavi SSH** è composta da una chiave pubblica e una chiave privata.

- La **chiave pubblica** viene aggiunta alla tua istanza Public Cloud (e può anche essere [archiviata nello Spazio Cliente OVHcloud](#step-2-importare-le-chiavi-ssh)).
- La **chiave privata** è archiviata sul tuo dispositivo locale e deve essere protetta da qualsiasi accesso non autorizzato. Solo i dispositivi client con la chiave privata corrispondente possono accedere alla tua istanza. Per la connessione non è necessaria alcuna password dell'account utente.

Per creare e gestire le tue chiavi SSH hai 2 opzioni:

- L'interfaccia da riga di comando del tuo OS (semplice client **OpenSSH**).
- Un software aggiuntivo (compatibile con il protocollo **OpenSSH**) con riga di comando o interfaccia grafica.

La maggior parte dei sistemi operativi desktop attuali include nativamente il client **OpenSSH**, accessibile tramite l'applicazione da riga di comando del sistema (`cmd`, `Powershell`, `Terminal`, ecc.). Se non hai familiarità con l'utilizzo delle chiavi SSH come metodo di autenticazione, puoi utilizzare le istruzioni di [questa guida](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) per creare la tua coppia di chiavi.

Se utilizzi un altro software, consulta la relativa documentazione utente. Le istruzioni per la soluzione open source `PuTTY` sono disponibili in [questa guida](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

### Step 2: Importare le chiavi SSH

Puoi archiviare le tue chiavi SSH pubbliche nella sezione `Public Cloud`{.action} del tuo [Spazio Cliente OVHcloud](/links/manager). Non è obbligatorio, ma rende più pratico il processo di creazione dell'istanza.

> [!primary]
>
> Le chiavi SSH archiviate ti permettono di creare le tue istanze più velocemente nello Spazio Cliente. Per modificare le coppie di chiavi e aggiungere utenti dopo aver creato l'istanza, consulta la guida sulle [chiavi SSH aggiuntive](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Le chiavi SSH pubbliche aggiunte al tuo Spazio Cliente OVHcloud saranno disponibili per i servizi Public Cloud di tutte le [Region](/links/public-cloud/regions-pci). Puoi archiviare chiavi crittografate con **RSA**, **ECDSA** e **ED25519**.
>

Apri `Chiavi SSH`{.action} nel menu a sinistra sotto **Impostazioni**. Clicca sul pulsante `Aggiungi una chiave SSH`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

Nella nuova finestra, inserisci un nome per la chiave. Compila il campo `Chiave` con la tua stringa di chiave pubblica, ad esempio quella creata allo [step 1](#step-1-creare-un-set-di-chiavi-ssh). Conferma cliccando su `Aggiungi`{.action}.

![add key](images/24-addkey.png){.thumbnail}

Da questo momento puoi selezionare questa chiave allo [Step 4](#step-4-creare-listanza) per aggiungerla a una nuova istanza.

### Step 3: preparare la configurazione di rete

Prima di creare la tua istanza, ti consigliamo di studiare come l'istanza verrà utilizzata in termini di rete.

- Se al momento non hai bisogno di configurare l'istanza con una rete privata, puoi passare allo [step 4](#step-4-creare-listanza). Puoi creare un'istanza esposta alla rete Internet pubblica (vedi la **Modalità pubblica** [qui sotto](#networking-modes).)
- Se l'istanza deve essere connessa a una nuova rete privata (OVHcloud [vRack](/links/network/vrack)), tieni presente che il vRack viene creato automaticamente durante la creazione del progetto Public Cloud. Non è quindi necessaria alcuna azione preliminare. Per maggiori informazioni, consulta la [guida sulla vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modalità

**Modalità pubblica**

Le istanze in modalità pubblica sono esposte a Internet direttamente via IPv4/IPv6. Gli indirizzi IP non possono essere modificati, ma le istanze possono avere indirizzi [Additional IP](/links/network/additional-ip) associati ([incluso il proprio IP](/links/network/byoip)) e possono essere connesse a una [vRack](/links/network/vrack).

**Modalità privata**

Le istanze in modalità privata possono essere esposte a Internet unicamente tramite un servizio [Gateway](/links/public-cloud/gateway) o [Load Balancer](/links/public-cloud/load-balancer) e indirizzi [Floating IP](/links/public-cloud/floating-ip).

Per maggiori informazioni, consulta le nostre guide nella sezione [Public Cloud Network Services](/products/public-cloud-network). La [guida ai concetti](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) fornisce un'introduzione al Public Cloud Networking.

**Modalità privata locale**

La modalità privata locale si applica solo se crei un'istanza in una **Local Zone**. Le istanze possono essere esposte a Internet direttamente via IPv4/IPv6. Solo le istanze di una stessa Local Zone possono essere connesse tramite reti private. Le Local Zone non sono compatibili con la [vRack](/links/network/vrack). In questa modalità, DHCP fornisce automaticamente gli indirizzi IP alle istanze.

Per saperne di più, consulta la [pagina web delle Local Zone](/links/public-cloud/local-zones).

///

### Step 4: creare l'istanza

> [!primary]
>
> Una chiave SSH pubblica è obbligatoria durante la creazione di un'istanza nello Spazio Cliente OVHcloud (ad eccezione delle istanze Windows).
>
> Consulta lo [step 1](#step-1-creare-un-set-di-chiavi-ssh) e lo [step 2](#step-2-importare-le-chiavi-ssh) di questa guida se non disponi di chiavi SSH pronte all'uso.
>

Nella pagina **Home**, clicca su `Crea un'istanza`{.action}.

#### Step 4.1: Nome dell'istanza

Inserisci un nome completo per la tua istanza. Il riferimento commerciale del modello di istanza è il valore predefinito. Se necessario, puoi anche aggiungere la Region e la data per facilitare l'identificazione e la gestione delle tue istanze.

#### Step 4.2: Seleziona una localizzazione

Seleziona una [localizzazione](/links/public-cloud/regions-pci) più vicina ai tuoi utenti o clienti. Tieni presente che se selezioni una **Local Zone** in questo passaggio, verranno applicate limitazioni di rete all'istanza (vedi [Step 3](#networking-modes)).

Consulta anche le informazioni della nostra [pagina web sulle Local Zone](/links/public-cloud/local-zones) e della [documentazione sulle capacità delle Local Zone](/pages/public_cloud/compute/local-zones-capabilities-limitations).

La scelta della Region determina la modalità di deploy della tua istanza (1-AZ, 3-AZ o Local Zones). Per comprendere le differenze in termini di resilienza, disponibilità e architettura, consulta la nostra guida [Confronto e resilienza delle modalità di deploy - Comprendere le regioni 3-AZ / 1-AZ / Local Zones](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).

#### Step 4.3: Seleziona un modello

In questo step, scegli il modello di istanza (chiamato anche flavour), che determina le risorse assegnate alla tua istanza: processore, memoria e capacità associate. Apri l'elenco a discesa `Modello di istanza`, quindi seleziona il tipo di modello più adatto al tuo caso d'uso per accedere alla nostra gamma di istanze ottimizzate.

Il tipo di modello `Discovery` raggruppa istanze a risorse condivise, proposte a tariffe competitive. Sono particolarmente adatte per scoprire il Public Cloud OVHcloud, effettuare test o ospitare carichi di lavoro leggeri come applicazioni web.

I modelli `Metal Instances` offrono risorse fisiche completamente dedicate, garantendo prestazioni costanti e un isolamento massimo per i workload più esigenti.

> [!primary]
>
> Il totale delle tue risorse Public Cloud sarà inizialmente limitato per motivi di controllo dei costi e di sicurezza. Puoi verificare queste quote cliccando su `Quota e Region`{.action} nella barra di navigazione a sinistra sotto **Impostazioni**. Consulta [la documentazione dedicata](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) per maggiori informazioni.
>
> Tieni presente che puoi **aggiornare** la tua istanza dopo la sua creazione per avere più risorse disponibili. Tuttavia, il passaggio a un modello più piccolo non è possibile con un'istanza regolare. Per maggiori informazioni su questo argomento, consulta lo **step 4.9** qui sotto.
>

##### Informazioni aggiuntive

/// details | Categorie di modelli di istanza

| Tipo | Risorse garantite | Note sull'utilizzo |
| :---         |     :---:      |          :--- |
| Best Sellers   | ✓     | Modelli più utilizzati.    |
| General Purpose   | ✓     | Server di sviluppo, applicazioni web o aziendali    |
| Compute Optimized     | ✓       | Codifica video o altri calcoli ad alte prestazioni      |
| Memory Optimized    | ✓     | Database, analisi e calcoli in memoria    |
| Storage Optimized   | ✓     | Ottimizzato per il trasferimento dei dati su disco    |
| Discovery    | -       | Hosting su risorse condivise per ambienti di test e sviluppo      |
| Cloud GPU     | ✓       | Potenza di elaborazione massivamente parallela per applicazioni specializzate (rendering, big data, deep learning, ecc.)       |
| Metal Instances | ✓ | Risorse dedicate con accesso diretto alle risorse di calcolo, storage e rete|

///

/// details | Regioni e Local Zone

**Regioni**

Una **Region** è definita come una localizzazione nel mondo composta da uno o più datacenter in cui sono ospitati i servizi OVHcloud. Per maggiori informazioni sulle Region, la distribuzione geografica e la disponibilità dei servizi, consulta la [pagina web dedicata](/links/public-cloud/regions-pci) e la [pagina web sulle localizzazioni delle infrastrutture OVHcloud](/links/infrareg).

**Local Zone**

Le Local Zone sono un'estensione delle **Region** che avvicinano i servizi OVHcloud a siti specifici, offrendo una latenza ridotta e prestazioni migliorate per le applicazioni. Per maggiori informazioni, consulta la [pagina web delle Local Zone](/links/public-cloud/local-zones) e la [documentazione sulle capacità delle Local Zone](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

#### Step 4.4: Seleziona un'immagine

Apri l'elenco a discesa `Tipo di distribuzione`, seleziona la categoria corrispondente alle tue esigenze, poi scegli il sistema operativo da installare sulla tua istanza tramite il menu a discesa `Versione dell'immagine`.

Le immagini disponibili in questo step dipendono dalle scelte effettuate nei passaggi precedenti, ovvero dalla compatibilità con il modello di istanza e dalla disponibilità regionale. Ad esempio, se desideri selezionare un sistema operativo Windows e non ci sono opzioni nella scheda Windows, devi modificare le scelte dei passaggi precedenti.

> [!primary]
>
> Se scegli un sistema operativo che richiede una licenza a pagamento, questi costi verranno automaticamente inclusi nella fatturazione del progetto.
>

#### Step 4.5: Seleziona una chiave SSH (non applicabile alle istanze Windows)

Ad eccezione delle istanze Windows, la configurazione della tua istanza richiede anche **l'aggiunta di una chiave SSH pubblica**. Hai due opzioni:

- Utilizzare una chiave pubblica già archiviata nello Spazio Cliente OVHcloud
- Inserire direttamente una chiave pubblica

Clicca sulle schede qui sotto per visualizzarne la presentazione:

> [!tabs]
> **Utilizzare una chiave archiviata**
>>
>> Per aggiungere una chiave archiviata nel tuo Spazio Cliente OVHcloud (vedi [Step 2](#step-2-importare-le-chiavi-ssh)), selezionala dalla lista.
>>
> **Inserire direttamente una chiave**
>>
>> Per aggiungere una chiave pubblica incollando la stringa di chiave, clicca sul pulsante `Crea una nuova chiave SSH`{.action}.
>>
>> Inserisci un nome per la chiave e la stringa di chiave nei rispettivi campi. Clicca poi su `Conferma la chiave`{.action}.
>>


#### Step 4.6: Configura i parametri di backup

I [backup automatizzati](/pages/public_cloud/compute/save_an_instance) sono attivati per impostazione predefinita. Consulta le informazioni tariffarie e i dettagli aggiuntivi prima di proseguire.

Successivamente, seleziona il tipo di rotazione, ovvero il numero massimo di backup conservati nello storico: 7 o 14 giorni.

#### Step 4.7: Configura la rete

In questo step configurerai la rete della tua istanza.

**Rete privata**

Puoi connettere la tua istanza a una [rete privata](#networking-modes) e assegnarle una [Floating IP](/links/public-cloud/floating-ip).

Cliccando su `Crea una rete privata`{.action}, puoi crearne una direttamente:

- Denominare la rete
- **Scegliere il VLAN ID:** identificativo che consente di interconnettere più servizi e risorse all'interno della stessa rete privata, tramite un numero di segmentazione di rete comune
- **Definire il CIDR:** intervallo di indirizzi IP della rete
- **Attivare il DHCP selezionando la casella corrispondente, se necessario:** attiva questa opzione se desideri un'assegnazione automatica degli indirizzi IP

> [!primary]
>
> L'istanza può rimanere interamente privata se non le assegni un IP pubblico.
>

**Gateway**

Puoi attivare l'opzione per assegnare un gateway alla tua rete. Per impostazione predefinita, il gateway è di dimensione S, ma potrai modificarne la dimensione successivamente nelle impostazioni.

**Assegnare una connettività pubblica**

Puoi attivare o disattivare questa funzionalità in base alle tue esigenze. Se scegli di attivarla, hai due opzioni:

- **Basic Public IP:** un indirizzo IP pubblico temporaneo, che non persiste oltre la durata di vita dell'istanza. Tieni presente che l'utilizzo di un Basic Public IP non è compatibile con un gateway.
- **Floating IP:** puoi creare una nuova Floating IP o riutilizzare un indirizzo esistente, consentendo un IP pubblico persistente e scollegabile dall'istanza.

#### Step 4.8: Seleziona un periodo di fatturazione

> [!primary]
>
> Ti ricordiamo che, in base al modello di istanza scelto, la fatturazione **oraria** potrebbe essere l'unica selezione visualizzata. Si tratta di una limitazione temporanea; nuove opzioni di fatturazione per il Public Cloud saranno presto disponibili.
>

> [!tabs]
> **Fatturazione mensile**
>>
>> La fatturazione mensile comporterà una riduzione dei costi nel tempo, ma **non può essere modificata** in fatturazione oraria una volta creata l'istanza.
>>
> **Fatturazione oraria**
>>
>> La fatturazione oraria è la scelta migliore se non hai determinato chiaramente la durata del periodo di utilizzo. Se decidi di mantenere l'istanza per un utilizzo a lungo termine, puoi comunque [passare a un abbonamento mensile](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).
>>
>> L'istanza verrà fatturata fino a quando non verrà **eliminata**, indipendentemente dall'utilizzo effettivo dell'istanza.
>>

Ecco la nostra documentazione dedicata alla fatturazione:

- [Fatturazione del Public Cloud](/pages/public_cloud/public_cloud_cross_functional/analyze_billing)
- [FAQ sulla fatturazione mensile](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Una volta completata la configurazione dell'istanza, puoi cliccare sul pulsante `Avvia l'istanza`{.action} o configurare i parametri avanzati (vedi qui sotto). La consegna del servizio potrebbe richiedere qualche minuto.

#### Step 4.9: Configura i parametri avanzati

##### Istanza flessibile

Un'istanza Flex è un'istanza con un disco unico da 50 GB, progettata per offrire un processo di creazione e ripristino degli snapshot più rapido.

Consente di ridimensionare l'istanza verso modelli superiori o inferiori, mantenendo uno spazio di archiviazione fisso. I modelli classici consentono solo un ridimensionamento verso modelli superiori.

##### Script di post-installazione

Puoi aggiungere [il tuo script di post-installazione](/pages/public_cloud/compute/launching_script_when_creating_instance) in questo campo.

#### Step 4.10: Finalizzazione dell'istanza

Sul lato destro dello schermo si trova il riepilogo della tua configurazione. In questa sezione potrai configurare il numero di istanze da creare. Puoi creare più istanze in base alle selezioni effettuate durante i passaggi di creazione, ma si applicheranno [i limiti di quota delle risorse](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota).

Una volta completata la configurazione dell'istanza, clicca sul pulsante `Avvia l'istanza`{.action}. La consegna del servizio potrebbe richiedere qualche minuto.

### Step 5: Connettersi all'istanza

Le istruzioni di questa sezione riguardano le connessioni remote tramite i protocolli **OpenSSH** e **RDP** attraverso una rete pubblica (Internet).

Ti ricordiamo che sono disponibili metodi di accesso alternativi (utilizzati principalmente per la risoluzione dei problemi), accessibili unicamente dallo Spazio Cliente OVHcloud:

- [Console VNC](#54-accesso-console-vnc)
- [Modalità rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Se hai installato un **OS con applicazione**, consulta la nostra [guida sui primi passi con le applicazioni](/pages/public_cloud/compute/apps_first_steps) e la documentazione ufficiale dell'editore dell'OS.
>

#### 5.1: Verificare lo stato dell'istanza nello Spazio Cliente

Seleziona `Istanze`{.action} nella barra di navigazione a sinistra sotto **Compute**. La tua istanza è pronta quando lo stato è impostato su `Attivato` nella tabella. Se l'istanza è stata creata di recente e ha uno stato diverso, clicca sul pulsante "Aggiorna" accanto al filtro di ricerca.

![pagina istanze](images/24-instance-connect01.png){.thumbnail}

Clicca sul nome dell'istanza in questa tabella per aprire il `Dashboard`{.action}, dove puoi trovare tutte le informazioni relative all'istanza. Per maggiori informazioni sulle funzioni disponibili in questa pagina, consulta la nostra guida sulla [gestione delle istanze nello Spazio Cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Un **utente con diritti elevati (*sudo*) viene creato automaticamente** sull'istanza. Il nome utente riflette l'immagine installata, ad esempio "ubuntu", "debian", "fedora", ecc. Puoi verificarlo sul lato destro del `Dashboard`{.action} nella sezione **Reti**.

![pagina istanze](images/24-instance-connect02.png){.thumbnail}

Se la tua [coppia di chiavi SSH è configurata correttamente](#step-1-creare-un-set-di-chiavi-ssh), puoi ora connetterti all'istanza con l'utente preconfigurato e la tua chiave SSH. Troverai istruzioni più dettagliate nei paragrafi seguenti.

> [!primary]
>
> L'accesso tramite la **console VNC** su una nuova istanza OS GNU/Linux creata nello Spazio Cliente deve prima essere attivato come descritto nella [sezione della guida qui sotto](#54-accesso-console-vnc).
>
> Questa guida non tratta la rete privata per le istanze. Consulta la nostra documentazione [Public Cloud Network Services](/products/public-cloud-network) a questo proposito.
>

#### 5.2: Prima connessione su un'istanza con OS GNU/Linux

> [!primary]
>
> Se ricevi messaggi di errore relativi alle tue **chiavi SSH**, verifica che il tuo dispositivo locale disponga di una chiave SSH privata configurata correttamente utilizzando le informazioni di [questa guida](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).<br>
> Se riscontri ancora difficoltà, puoi sostituire la coppia di chiavi con l'aiuto di [questa guida](/pages/public_cloud/compute/replacing_lost_ssh_key).
>
> Se hai creato un'istanza senza chiave SSH, tramite l'[API OVHcloud](/pages/manage_and_operate/api/first-steps) o l'[interfaccia OpenStack Horizon](/pages/public_cloud/compute/create_instance_in_horizon), puoi aggiungere una chiave SSH alla tua istanza solo tramite la [modalità rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) seguendo le istruzioni descritte in [questa guida](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

Puoi accedere alla tua istanza subito dopo la sua creazione tramite l'interfaccia da riga di comando del tuo computer locale (`Terminal`, `Command prompt`, `Powershell`, ecc.) via SSH.

```bash
ssh username@IPv4_instance
```

Esempio:

```bash
ssh ubuntu@203.0.113.101
```

[In base alla tua configurazione](#step-1-creare-un-set-di-chiavi-ssh), dovrai inserire una passphrase che protegge la tua chiave privata o specificare il percorso del file di chiave. Consulta la nostra [guida sulle chiavi SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys) per informazioni dettagliate su questo argomento.

Se utilizzi un altro client SSH, consulta la sua documentazione utente. Un esempio di utilizzo della soluzione open source `PuTTY` è disponibile in [questa guida](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

Prosegui allo [step 6 qui sotto](#step-6-primi-passi-su-una-nuova-istanza).

#### 5.3: Istanze Windows

##### 5.3.1: Completare l'installazione di un'istanza Windows

Dopo aver verificato che l'istanza Windows sia [installata](#51-verificare-lo-stato-dellistanza-nello-spazio-cliente), apri la scheda `Console VNC`{.action} nel tuo [Spazio Cliente OVHcloud](/links/manager).

A questo punto dovrai completare la configurazione iniziale del sistema operativo Windows. Segui i passaggi seguenti scorrendo le schede:

> [!tabs]
> 1. **Impostazioni regionali**
>>
>> Configura il tuo **paese/area geografica**, la **lingua Windows** preferita e la **disposizione della tastiera**. Clicca poi sul pulsante `Avanti`{.action} in basso a destra.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Password amministratore**
>>
>> Definisci una password per il tuo account Windows `Administrator` e confermala, poi clicca su `Fine`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Schermata di accesso**
>>
>> Windows applicherà le impostazioni, poi visualizzerà la schermata di accesso. Clicca sul pulsante `Send CtrlAltDel`{.action} in alto a destra per accedere.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login amministratore**
>>
>> Inserisci la password `Administrator` creata nel passaggio precedente e clicca sul pulsante "Freccia".<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### 5.3.2: Connettersi da remoto da Windows

Sul tuo computer Windows locale, puoi utilizzare l'applicazione client `Remote Desktop Connection` per connetterti alla tua istanza.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Inserisci l'indirizzo IPv4 della tua istanza, il tuo identificativo e la tua password. In genere viene visualizzato un messaggio di avviso che richiede di confermare la connessione a causa di un certificato sconosciuto. Clicca su `Sì`{.action} per connetterti.

> [!primary]
>
> Se riscontri difficoltà con questa procedura, verifica che le connessioni remote (RDP) siano consentite sul tuo dispositivo controllando le impostazioni di sistema, le regole del firewall e le eventuali restrizioni di rete.
>

##### 5.3.3: Connettersi da remoto da un altro OS

Le connessioni da un sistema operativo desktop diverso da Windows richiedono generalmente un software client compatibile con il `Remote Desktop Protocol` (RDP). Alcuni ambienti desktop e sistemi operativi possono avere un client nativo integrato.

Indipendentemente dal client utilizzato, per connetterti hai bisogno solo dell'indirizzo IP della tua istanza e della password dell'account `Administrator`.

**Esempio di utilizzo**

Il software libero e open source `Remmina Remote Desktop Client` è disponibile per numerose distribuzioni desktop GNU/Linux. Se non trovi Remmina nel gestore software del tuo ambiente desktop, puoi ottenerlo dal [sito ufficiale](https://remmina.org/).

![linux remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Connessione**
>>
>> Apri Remmina e assicurati che il protocollo di connessione sia impostato su "RDP". Inserisci l'indirizzo IPv4 della tua istanza Public Cloud e premi "Invio".<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Autenticazione**
>>
>> Se appare un messaggio di avviso relativo al certificato, clicca su `Yes`{.action}. Inserisci il nome utente e la password per Windows e clicca su `OK`{.action} per stabilire la connessione.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Impostazioni**
>>
>> Puoi trovare elementi utili nella barra degli strumenti a sinistra. Ad esempio, clicca sull'icona `Toggle dynamic resolution update`{.action} per migliorare la risoluzione della finestra.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

#### 5.4: Accesso console VNC

La console VNC ti permette di connetterti alle tue istanze anche quando altri mezzi di accesso non sono disponibili.

Seleziona `Istanze`{.action} nella barra di navigazione a sinistra sotto **Compute**. Clicca sul nome dell'istanza e apri la scheda `Console VNC`{.action}.

![console vnc](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Istanza con OS GNU/Linux installato**
>>
>> Per utilizzare la console VNC è necessario configurare sull'istanza un account utente **con una password**. Per definire una password per l'account preconfigurato, segui i passaggi della [sezione 6.1.1 qui sotto](#611-definisci-una-password-per-laccount-utente-attuale).
>>
> **Istanza Windows**
>>
>> Accedi con le tue credenziali Windows. In caso di sessione attiva, disponi di un accesso immediato. Ci sarà una latenza notevole rispetto a una connessione RDP.
>>

### Step 6: Primi passi su una nuova istanza

> [!primary]
>
> **Istanze Windows**
>
> Non sono necessari passaggi aggiuntivi per le istanze su cui è installato un sistema operativo Windows.
>
> Per maggiori informazioni, consulta la sezione [Per saperne di più](#per-saperne-di-piu) qui sotto.
>

#### 6.1: Gestione degli utenti

> [!primary]
>
> Durante la configurazione degli account utente e dei livelli di autorizzazione su un'istanza, ti consigliamo di utilizzare le informazioni della nostra [guida sull'account utente](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1: Definisci una password per l'account utente attuale

Durante la [connessione alla tua istanza](#step-6-primi-passi-su-una-nuova-istanza), definisci una password per l'utente attuale inserendo questo comando:

```bash
sudo passwd
```

Inserisci una passphrase, conferma con `Enter` e ripeti.

```console
New password:
Retype new password:
passwd: password updated successfully
```

**Questo è sufficiente per attivare gli accessi tramite la [console VNC](#54-accesso-console-vnc) nel tuo [Spazio Cliente OVHcloud](/links/manager)**. Tuttavia, le connessioni SSH remote con questa password restano **disattivate** per impostazione predefinita.

##### 6.1.2: Attivazione della connessione remota tramite password (opzionale)

> [!warning]
>
> Questo step non è necessario e deve essere eseguito solo se hai un motivo valido per attivare questo tipo di accesso, ad esempio se devi connetterti temporaneamente all'istanza da un dispositivo sul quale non è archiviata la tua chiave SSH privata.
>
> L'esempio seguente illustra una soluzione temporanea su un'istanza su cui è installato Ubuntu. Tieni presente che potrebbe essere necessario adattare i comandi in base al tuo sistema operativo. Non è consigliabile mantenere questa configurazione in modo permanente poiché aggiunge un potenziale rischio di sicurezza esponendo il sistema ad attacchi basati su SSH.
>

Una volta [connesso alla tua istanza](#step-6-primi-passi-su-una-nuova-istanza), apri il file di configurazione con un editor di testo. Esempio:

```bash
sudo nano /etc/ssh/sshd_config
```

Modifica la riga `#PasswordAuthentication yes` come segue:

```console
PasswordAuthentication yes
```

Modifica la riga `Include /etc/ssh/sshd_config.d/*.conf` come segue:

```console
#Include /etc/ssh/sshd_config.d/*.conf
```

Salva il file e chiudi l'editor.

Riavvia il servizio SSH con uno dei comandi seguenti:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Ora puoi connetterti in SSH con nome utente e password.

Annulla queste modifiche per ripristinare la connessione tramite chiave per l'istanza.

#### 6.2: Chiavi SSH aggiuntive

Se desideri autorizzare più account utente ad accedere all'istanza, la procedura standard è la seguente:

- Creare l'account sull'istanza.
- Creare una nuova coppia di chiavi SSH sul dispositivo interessato.
- Aggiungere la chiave pubblica all'istanza.

Consulta la nostra [guida dedicata](/pages/public_cloud/compute/configuring_additional_ssh_keys) per una spiegazione dettagliata di questi passaggi.

## Per saperne di più

[Come attivare una licenza Windows per un'istanza in modalità privata](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Come reimpostare una password amministratore di Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Gestione delle istanze nello Spazio Cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Come iniziare con OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

[Come iniziare con Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).
