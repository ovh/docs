---
title: "Come creare un’istanza Public Cloud e connettersi"
excerpt: "Scopri come configurare le istanze Public Cloud nello Spazio Cliente OVHcloud e come iniziare a utilizzare le istanze"
updated: 2024-08-21
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

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Obiettivo

Le istanze Public Cloud sono semplici da installare e gestire. In quanto membri dell'ecosistema Public Cloud di OVHcloud, le istanze offrono numerose opzioni di configurazione e possono essere adattate ai diversi casi d'uso. Le istruzioni seguenti includono tutti gli step necessari (e anche quelli facoltativi) per creare un’istanza nello Spazio Cliente OVHcloud e accedervi da remoto.  
Per saperne di più sul tuo progetto Public Cloud in base alle tue necessità.

**Questa guida ti mostra come iniziare a utilizzare un’istanza Public Cloud.**

## Prerequisiti

- Un [progetto Public Cloud](/links/public-cloud/public-cloud) nel tuo account OVHcloud
- Accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

> [!primary]
>
> Se non hai ancora creato progetti Public Cloud, inizia con la nostra [guida sulla creazione di progetti](/pages/public_cloud/compute/create_a_public_cloud_project).
>
> **I dettagli tecnici** importanti relativi al Public Cloud di OVHcloud sono disponibili su [questa pagina](/pages/public_cloud/compute/00-essential-info-to-get-started-on-public-cloud).
>

### Presentazione del contenuto


- [**1** Creazione di chiavi SSH](#create-ssh)
- [**2** Importazione di chiavi SSH](#import-ssh)
- [**3** Preparazione della configurazione di rete](#network)
- [**4** Creazione dell'istanza](#create-instance)
    - [**4.1** Selezione di un modello di istanza](#model)
    - [**4.2** Selezione di una regione](#region)
    - [**4.3** Selezione immagine](#image)
    - [**4.4** Configurazione dell’istanza](#configuration)
    - [**4.5** Configura la ret](#network)
    - [**4.6** Seleziona un periodo di fatturazione](#billing)
- [**5** Connessione all'istanza](#connect-instance)
    - [**5.1** Verifica dell’installazione dell’istanza nello Spazio Cliente OVHcloud](#verify-status)
    - [**5.2** Prima connessione su un’istanza con un OS GNU/Linux installato](#login-linux)
    - [**5.3** Istanze Windows](#windows)
        - [**5.3.1** Fine dell'installazione di un'istanza Windows](#windows)
        - [**5.3.2** Connessione remota da Windows](#login-windows)
        - [**5.3.3** Connessione remota da un altro OS](#login-other)
    - [**5.4** Accesso console VNC](#vnc-console)
- [**6** Iniziare a utilizzare una nuova istanza](#manage-access)
    - [**6.1** Gestione degli utenti](#user-mgmt)
        - [**6.1.1** Impostazione della password per l'account utente corrente](#set-password)
        - [**6.1.2** Attivazione delle connessioni remote tramite password](#remote-password)
    - [**6.2** Chiavi SSH supplementari](#add-keys)


> [!primary]
>
> **Durante la creazione di istanze Public Cloud è necessario fornire una chiave SSH pubblica.** Una volta creata l’istanza, è possibile configurare l’accesso remoto in base alle proprie esigenze.
>
> **Eccezione**: l'autenticazione di accesso sulle istanze Windows richiede un nome utente e una password in quanto Windows utilizza RDP (**R**emote **D**esktop **P**rotocol).
>

<a name="create-ssh"></a>

### Step 1: Crea un key pack SSH

Se disponi già di una coppia di chiavi SSH pronte all'uso, puoi saltare questo step.

Il [protocollo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) permette una comunicazione client-server crittografata. Una **coppia di chiavi SSH** è composta da una chiave pubblica e da una chiave privata.

- La **chiave pubblica** viene aggiunta all’istanza Public Cloud (e può anche essere [archiviata nello Spazio Cliente OVHcloud](#import-ssh)).
- La **chiave privata** è archiviata sul tuo dispositivo locale e deve essere protetta contro l'accesso non autorizzato. Solo i dispositivi client con la chiave privata corrispondente possono accedere all’istanza. Per accedere non è necessario disporre di una password dell'account utente.

Per creare e gestire le tue chiavi SSH, hai 2 opzioni:

- L'interfaccia da riga di comando del tuo OS (semplice cliente **Open SSH**).
- Software aggiuntivo (compatibile con il protocollo **Open SSH**) con riga di comando o interfaccia grafica.

La maggior parte dei sistemi operativi desktop contemporanei include nativamente il client **Open SSH** accessibile tramite l’applicazione da riga di comando del sistema (`cmd`, `Powershell`, `Terminal`, ecc...). Se non hai familiarità con l’utilizzo delle chiavi SSH come metodo di autenticazione, puoi utilizzare le istruzioni di [questa guida](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key) per creare la tua coppia di chiavi.

Se si utilizza un altro software, consultare la relativa documentazione utente. Le istruzioni per la soluzione open source `PuTTY` sono disponibili in [questa guida](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#useputty).

<a name="import-ssh"></a>

### Step 2: Importa le chiavi SSH

Le chiavi SSH pubbliche possono essere archiviate nella sezione `Public Cloud`{.action} dello [Spazio Cliente OVHcloud](/links/manager). Non è obbligatorio, ma rende più pratico il processo di creazione dell’istanza.

> [!primary]
>
> Le chiavi SSH salvate ti permettono di creare le tue istanze più velocemente nello Spazio Cliente. Per modificare le coppie di chiavi e aggiungere utenti dopo aver creato l’istanza, consulta la guida su [chiavi SSH supplementari](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Le chiavi SSH pubbliche aggiunte allo Spazio Cliente OVHcloud saranno disponibili per i servizi Public Cloud di tutte le [Region](/links/public-cloud/region-pci). È possibile archiviare chiavi crittografate con **RSA**, **ECDSA** e **ED25519**.
>

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Public Cloud`{.action} e seleziona il progetto Public Cloud interessato.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Apri `SSH Keys`{.action} nel menu a sinistra sotto **Project Management**. Clicca sul pulsante `Aggiungi una chiave SSH`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

Nella nuova finestra, immettere un nome per la chiave. Compila il campo `Chiave` con la stringa di chiave pubblica, ad esempio quella creata allo [step 1](#create-ssh). Conferma cliccando su `Aggiungi`{.action}.

![add key](images/24-addkey.png){.thumbnail}

Da questo momento è possibile selezionare questa chiave al [Step 4](#create-instance) per aggiungerla a una nuova istanza.

<a name="network"></a>

### Step 3: Prepara la configurazione di rete

Prima di creare l’istanza, ti consigliamo di studiarne l’utilizzo in termini di rete.

- Se al momento non hai bisogno di configurare l’istanza con una rete privata, puoi passare allo [step 4](#create-instance). È possibile creare un'istanza esposta alla rete Internet pubblica (vedere la **Modalità pubblica** [sotto](#networking-modes).)
- Se l’istanza deve essere connessa a una nuova rete privata (OVHcloud [vRack](/links/network/vrack)), **crea la tua vRack** prima di continuare. Per maggiori dettagli consulta la [guida sulla vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-mode"></a>

/// details | Public Cloud Networking - Modalità

**Public Mode**

Le istanze in modalità pubblica sono esposte a Internet direttamente via IPv4/IPv6. Gli indirizzi IP non possono essere modificati, ma le istanze possono avere indirizzi [Additional IP](/links/network/additional-ip) associati ([incluso il proprio IP](/links/network/byoip)) e possono essere connesse a una [vRack](/links/network/vrack).

**Private Mode**

Le istanze in modalità privata possono essere esposte a Internet soltanto tramite un servizio [Gateway](/links/public-cloud/gateway) o [Load Balancer](/links/public-cloud/load-balancer) e indirizzi [Floating IP](/links/public-cloud/floating-ip).

Per maggiori informazioni, consulta le nostre guide disponibili nella sezione [Public Cloud Network Services](/products/public-cloud-network). La [guida ai concetti](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) fornisce un'introduzione al Public Cloud Networking.

**Local Private Mode**

La modalità privata locale viene applicata solo se crei un’istanza in una **Local Zone**. Le istanze possono essere esposte a Internet direttamente tramite IPv4/IPv6. Solo le istanze di una stessa Local Zone possono essere connesse tramite reti private. Le Local Zones non sono compatibili con la [vRack](/links/network/vrack). In questa modalità, DHCP fornisce automaticamente gli indirizzi IP alle istanze.

Per maggiori informazioni, consulta la [pagina Web des Local Zones](/links/public-cloud/local-zones).

///

<a name="create-instance"></a>

### Step 4: Crea l'istanza

> [!primary]
>
> Una chiave SSH pubblica è obbligatoria durante la creazione di un’istanza nello Spazio Cliente OVHcloud (istanze Windows escluse).
>
> Se non disponi di chiavi SSH pronte all'uso, consulta lo [step 1](#create-ssh) e lo [step 2](#import-ssh) di questa guida.
>

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Public Cloud`{.action} e seleziona il progetto Public Cloud interessato.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Nella pagina "**Home**", clicca su `Crea un’istanza`{.action}.

![istanza creazione](immagini/24-istanza-creazione01.png){.thumbnail}

<a name="model"></a>

#### Passaggio 4.1: Seleziona un modello

Nel primo step, seleziona un modello di istanza (chiamato anche *flavour*) che definisce le risorse dell’istanza. Per trovare i modelli di istanze ottimizzati, clicca sulla scheda con la risorsa chiave corrispondente alle tue esigenze.

![istanza model](images/24-instance-creation02.png){.thumbnail}

Nella sezione `Discovery`{.action}, proponiamo modelli di istanze con risorse condivise a prezzi vantaggiosi. Ideali per testare il Public Cloud in generale o un'applicazione Web ad esempio.

I modelli di istanza di tipo `Metal`{.action} forniscono risorse fisiche dedicate.

> [!primary]
>
> Le risorse Public Cloud inizialmente saranno limitate per motivi di controllo dei costi e di sicurezza. È possibile verificare queste quote cliccando su `Quota and Regions`{.action} nella barra di navigazione a sinistra sotto **Project Management**. Per ulteriori informazioni, consultare [la documentazione dedicata](/pages/public_cloud/compute/increasing_public_cloud_quota).
>
> Notare che è possibile **aggiornare** l'istanza dopo la sua creazione per avere più risorse disponibili. Tuttavia, con un'istanza regolare non è possibile passare a un modello più piccolo. Per maggiori informazioni su questo argomento, consulta lo **step 4.4** riportato di seguito.
>

#### Informazioni aggiuntive

/// details | Categorie di modelli di istanza

| Tipo | Risorse garantite | Note sull'utilizzo |
|:---          |     :---:      |          :---  |
| General Purpose   | ✓     | Server di sviluppo, applicazioni Web o aziendali    |
| Compute Optimized     | ✓       | Codifica video o altri calcoli ad alte prestazioni      |
| Memory Optimized    | ✓     | Database, analisi e calcoli in memoria    |
| GPU     | ✓       | Potenza di elaborazione parallela per le applicazioni specializzate (rendering, big data, deep learning, etc.)       |
| Discovery    | -       | Hosting su risorse condivise per ambienti di test e sviluppo      |
| Storage Optimized   | ✓     | Ottimizzato per il trasferimento dei dati su disco    |
| Metal | ✓ | Risorse dedicate con accesso diretto alle risorse di calcolo, storage e rete|

///

/// details | Regioni e Locali Zone

**Regioni**

**Region** è definita come una localizzazione nel mondo composta da uno o più datacenter in cui sono ospitati i servizi OVHcloud. Per maggiori informazioni sulle Region, la distribuzione geografica e la disponibilità dei servizi, accedi alla [pagina Web dedicata](/links/public-cloud/regions-pci) e alla [pagina Web dedicata alle localizzazioni delle infrastrutture OVHcloud](/links/infrareg).

**Local Zone**

Le Local Zones sono un'estensione delle **Region** che avvicinano i servizi OVHcloud a siti specifici, offrendo latenza ridotta e performance migliorate per le applicazioni. Per maggiori informazioni, consulta la [pagina Web delle Local Zones](/links/public-cloud/local-zones) e la [documentazione delle capacità delle Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

<a name="region"></a>

#### Step 4.2: Seleziona una localizzazione

Seleziona una [Region](/links/public-cloud/regions-pci) più vicina ai tuoi utenti o clienti. Questa opzione può essere limitata, a seconda della scelta del modello al **step 4.1**. Si noti che se si seleziona una **Local Zone** in questo passaggio, all'istanza verranno applicate limitazioni di rete (vedere [Passaggio 3](#networking-modes)).

Consulta anche le informazioni della [pagina Web des Local Zones](/links/public-cloud/local-zones) e della [documentazione delle capacità des Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

![selezione della regione](images/24-instance-creation03.png){.thumbnail}

<a name="image"></a>

#### Passaggio 4.3: Seleziona un'immagine

Clicca sulla scheda che preferisci e seleziona un sistema operativo per la tua istanza nel menu a tendina.

![image selection](images/24-instance-creation04.png){.thumbnail}

Le immagini disponibili in questa fase dipendono dalle scelte effettuate nelle fasi precedenti, ovvero dalla compatibilità con il modello di istanza e dalla disponibilità regionale. Ad esempio, se si desidera selezionare un sistema operativo Windows e non sono disponibili opzioni nella scheda Windows, è necessario modificare le scelte effettuate nei passaggi precedenti.

> [!primary]
>
> Se scegli un sistema operativo che richiede una licenza a pagamento, questi costi vengono automaticamente inclusi nella fatturazione del progetto.
>

Questa operazione richiede anche **l’aggiunta di una chiave SSH pubblica** (istanze Windows escluse). Sono disponibili 2 opzioni:

- Utilizzare una chiave pubblica già archiviata nello Spazio Cliente OVHcloud
- Inserisci direttamente una chiave pubblica

Fare clic sulle schede seguenti per visualizzarne la presentazione:


> [!tabs]
> **Utilizza chiave archiviata**
>>
>> Per aggiungere una chiave archiviata nello Spazio Cliente OVHcloud (consulta la sezione [step 2](#import-ssh)), selezionala dalla lista.<br><br>
>>![key selection](images/24-instance-creation05.png){.thumbnail}<br>
>>
> **Inserisci direttamente la chiave**
>>
>> Per aggiungere una chiave pubblica incollando la stringa di chiave, clicca sul pulsante `Aggiungi una chiave`{.action}.<br><br>
>>![key selection](images/24-instance-creation06.png){.thumbnail}<br>
>> Immettere un nome per la chiave e la stringa di chiave nei rispettivi campi. Clicca su `Seguente`{.action}.<br><br>
>>![key selection](images/24-instance-creation07.png){.thumbnail}<br>
>> Prima di cliccare su `Avanti`{.action}, è possibile scegliere di utilizzare il pulsante `Aggiungi chiave`{.action} per salvare la chiave nello Spazio Cliente OVHcloud (per maggiori informazioni, vedere lo [step 2](#import-ssh)).
>>

<a name="configuration"></a>

#### Step 4.4: Configura l’istanza

![istanza select](images/24-instance-creation08.png){.thumbnail}

Questo step offre diverse opzioni di configurazione. Fare clic sulle schede seguenti per visualizzare i dettagli:

> [!tabs]
> **1: Numero di istanze da creare**
>>
>> È possibile creare più istanze in base alle selezioni effettuate durante le fasi di creazione, ma [i limiti di quota delle risorse](/pages/public_cloud/compute/increasing_public_cloud_quota) si applicheranno.<br>
>>
> **2: Istanza flessibile**
>>
>> Se il modello selezionato è compatibile, potete scegliere di creare una **istanza Flex**. Questa opzione consente di eseguire l'aggiornamento a un modello più piccolo (e persino di passare a un'altra categoria di modello), ma limita l'istanza a **50 GB di storage fisso incluso**, indipendentemente da altri upgrade o downgrade.<br>
>>
> **3: Nome dell'istanza**
>>
>> Inserisci un nome completo per la tua istanza. Il riferimento aziendale del modello di istanza è il valore predefinito.<br>
>>
> **4: Script di post-installazione**
>>
>> Potete aggiungere [il vostro script](/pages/public_cloud/compute/launching_script_when_creating_instance) a questo campo.<br>
>>
> **5: Backup automatico delle istanze**
>>
>>  È possibile attivare [backup automatizzati](/pages/public_cloud/compute/save_an_instance) selezionando questa opzione. Ti preghiamo di prendere visione delle informazioni tariffarie e dei dettagli complementari.
>>

<a name="network"></a>

#### Step 4.5: Configura la tua rete

In questo step è necessario applicare la modalità di rete Public Cloud che hai deciso, in base alle informazioni dello [step 3](#network) qui sotto. Le opzioni dipendono dalla [scelta della posizione precedente](#region) per l’istanza (**Region** o **Local Zone**).

##### Regioni

> [!tabs]
> **Private Mode**
>>
>> L'istanza può rimanere completamente privata.<br><br>
>>![network type](images/24-instance-creation09.png){.thumbnail}<br>
>> È possibile connettere l'istanza a una [rete privata](#networking-modes) e a una [Floating IP](/links/public-cloud/floating-ip). Nessun indirizzo IP pubblico dedicato verrà associato.<br><br>
>>![network type](images/24-instance-creation10.png){.thumbnail}<br>
>> Se clicchi su `Crea una nuova rete privata`{.action}, il processo di creazione dell’istanza verrà interrotto e dovrà essere riavviato dall’inizio.<br>
>>
> **Public Mode**
>>
>> The instance will be exposed to the public internet directly via IPv4/IPv6.<br><br>
>>![network type](images/24-instance-creation11.png){.thumbnail}<br>
>> È inoltre possibile connettere l'istanza a una [rete privata](#networking-modes) (vRack) tramite il menu a tendina.<br>
>> Se clicchi su `Crea una nuova rete privata`{.action}, il processo di creazione dell’istanza verrà interrotto e dovrà essere riavviato dall’inizio.
>>

Clicca su `Avanti`{.action} per passare all’ultimo step.

##### Local Zones

Puoi scegliere di associare l'istanza a una rete privata, di renderla accessibile pubblicamente o di entrambe le cose.

![network type](images/24-instance-creation12.png){.thumbnail}

> [!tabs]
> **Public Network**
>>
>> Se si seleziona l’opzione `Rete Public`, l’istanza verrà esposta a Internet direttamente tramite IPv4/IPv6.<br>
>> È inoltre possibile connettere l’istanza a una [rete privata](#networking-modes) (non compatibile con la vRack) selezionando `Rete Privata Locale compatibile con Local Zones` (vedi scheda **Local Private Network**).
>>
> **Local Private Network**
>>
>> Seleziona la casella `Rete Privata Locale compatibile con Local Zones`. Se scegli **questa opzione senza selezionare** `Rete Public`, l’istanza resterà completamente privata, associata a una [rete privata](#networking-modes) (non compatibile con la vRack). Seleziona una rete esistente nell’elenco selezionando l’opzione `Associa una rete privata esistente` o creane una nuova per la Local Zone selezionando `Crea una rete privata locale` (senza interrompere il processo di creazione dell’istanza).<br><br>
>>![network type](images/24-instance-creation13.png){.thumbnail}
>> 

Clicca su `Avanti`{.action} per passare all’ultimo step.

<a name="billing"></a>

#### Step 4.6: Seleziona un periodo di fatturazione

![modalità di fatturazione](immagini/24-istanza-creation14.png){.thumbnail}

> [!primary]
>
> Ti ricordiamo che, in base al modello di istanza scelto, la fatturazione **oraria** può essere l'unica selezione visualizzata. Si tratta di una limitazione temporanea. Presto saranno disponibili nuove opzioni di fatturazione Public Cloud.
>

> [!tabs]
> **Fatturazione mensile**
>>
>> La fatturazione mensile ridurrà i costi nel tempo, ma **non può essere modificato in una fatturazione oraria** dopo la creazione dell’istanza.<br>
>>
> **Fatturazione oraria**
>>
>> La fatturazione oraria è la scelta migliore se non si è certi della durata del periodo di utilizzo. Se si decide di mantenere l'istanza per un utilizzo a lungo termine, è comunque possibile [passare a un abbonamento mensile](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).<br>
>> L’istanza verrà fatturata fino a quando non verrà **eliminata**, a prescindere dall’utilizzo reale dell’istanza.
>>

Per maggiori informazioni, consulta la nostra documentazione dedicata alla fatturazione:

- [Fatturazione del Public Cloud](/pages/public_cloud/compute/analyze_billing)
- [FAQ sulla fatturazione mensile](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Una volta terminata la configurazione dell’istanza, clicca sul pulsante `Crea un’istanza`{.action}. La consegna del servizio potrebbe richiedere alcuni minuti.

<a name="connect-instance"></a>

### Step 5: Accedi all’istanza

Le istruzioni riportate in questa sezione riguardano le connessioni remote tramite i protocolli **Open SSH** e **RDP** tramite una rete pubblica (Internet).

Ti ricordiamo che in OVHcloud sono disponibili metodi di accesso alternativi (utilizzati principalmente per la risoluzione dei problemi), esclusivamente nello Spazio Cliente:

- [Console VNC](#vnc-console)
- [Modalità rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Se hai installato un **OS con applicazione**, consulta la nostra [guida sui primi passi con le applicazioni](/pages/public_cloud/compute/apps_first_steps) oltre alla documentazione ufficiale dell'editor dell'OS.
>

<a name="verify-status"></a>

#### 5.1: Verifica lo stato dell’istanza nello Spazio Cliente

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Public Cloud`{.action} e seleziona il progetto Public Cloud interessato.

![spazio cliente](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Seleziona `Istanze`{.action} nella barra di navigazione a sinistra sotto **Compute**. La tua istanza è pronta quando lo stato è impostato su `Attivato` nella tabella. Se l’istanza è stata creata di recente e ha uno stato diverso, clicca sul pulsante "Aggiorna" accanto al filtro di ricerca.

![pagina istanze](images/24-instance-connect01.png){.thumbnail}

Clicca sul nome dell’istanza in questa tabella per aprire il `Dashboard`{.action}, in cui puoi trovare tutte le informazioni relative all’istanza. Per maggiori informazioni sulle funzioni disponibili su questa pagina, consulta la nostra guida su [gestire le istanze nello Spazio Cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Un **utente con diritti elevati (*sudo*) viene creato automaticamente** sull'istanza. Il nome utente riflette l’immagine installata, ad esempio "ubuntu", "debian", "fedora", ecc. È possibile verificarlo sul lato destro del `Dashboard`{.action} nella sezione **Reti**.

![pagina istanze](images/24-instance-connect02.png){.thumbnail}

Se la tua [coppia di chiavi SSH è configurata correttamente](#create-ssh), puoi accedere all’istanza con l’utente preconfigurato e la tua chiave SSH. Per istruzioni più dettagliate, vedere i paragrafi seguenti.

> [!primary]
>
> L'accesso tramite la **console VNC** su una nuova istanza OS GNU/Linux creata nello Spazio Cliente OVH deve essere attivato come descritto nella [sezione della guida qui di seguito](#vnc-console).
>
> Questa guida non copre la rete privata per le istanze. Consulta la nostra documentazione [Public Cloud Network Services](/products/public-cloud-network) a questo proposito.
>

<a name="login-linux"></a>

#### 5.2: Prima connessione su un’istanza con OS GNU/Linux

> [!primary]
>
> Se ricevi messaggi di errore relativi alle **chiavi SSH**, verifica che il tuo dispositivo locale disponga di una chiave SSH privata configurata correttamente utilizzando le informazioni di [questa guida](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key).</br>
> In caso di difficoltà, è possibile sostituire la coppia di chiavi utilizzando [questa guida](/pages/public_cloud/compute/replacing_lost_ssh_key).
>
> Se hai creato un’istanza senza chiave SSH, tramite l’[API OVHcloud](/pages/manage_and_operate/api/first-steps) o l’[interfaccia OpenStack Horizon](/pages/public_cloud/compute/create_instance_in_horizon), puoi aggiungere una chiave SSH alla tua istanza soltanto tramite il [modo rescue](/pages/public_cloud/compute/an_instance_in_rescue_mode) seguendo le istruzioni descritte in [questa guida](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

È possibile accedere all’istanza immediatamente dopo la sua creazione tramite l’interfaccia della riga di comando della workstation locale (`Terminal`, `Command prompt`, `Powershell`, ecc...) via SSH.

```bash
ssh username@IPv4_instance
```

Esempio:

```bash
ssh ubuntu@203.0.113.101
```

[In base alla configurazione](#create-ssh), sarà necessario immettere una frase segreta che protegga la chiave privata o specificare il percorso del file della chiave. Per maggiori informazioni, consulta la nostra [guida alle chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#multiplekeys).

Se utilizzi un altro client SSH, consulta la sua documentazione utente. Un esempio di utilizzo della soluzione open source `PuTTY` è disponibile in [questa guida](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#useputty).

Continua al [Step 6 qui sotto](#manage-access).

<a name="windows"></a>

#### 5.3: Istanze Windows

##### 5.3.1: Termina l’installazione di un’istanza Windows

Dopo aver verificato che l’istanza Windows sia [installata](#verify-status), apri la scheda `Console VNC`{.action} nel tuo [Spazio Cliente OVHcloud](/links/manager).

A questo punto sarà necessario completare la configurazione iniziale del sistema operativo Windows. Segui i passaggi seguenti scorrendo le schede:

> [!tabs]
> 1. **Impostazioni internazionali**
>>
>> Configura il tuo **paese**, la tua **lingua Windows** preferita e il tuo **layout di tastiera**. Clicca sul pulsante `Avanti`{.action} in basso a destra.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Password amministratore**
>>
>> Definisci una password per il tuo account Windows `Administrator` e confermala, poi clicca su `Finish`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Schermata di login**
>>
>> Windows applicherà le impostazioni e visualizzerà la schermata di accesso. Clicca sul pulsante `Send CtrlAltDel`{.action} in alto a destra per accedere.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login amministratore**
>>
>> Immettere la password `Administrator` creata nel passaggio precedente e fare clic sul pulsante "Freccia".<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

<a name="login-windows"></a>

###### 5.3.2: Connessione remota da Windows

Sul computer Windows locale, è possibile utilizzare l’applicazione client `Remote Desktop Connection` per connettersi all’istanza.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Inserisci l’indirizzo IPv4 dell’istanza, l’identificativo e la password. In genere viene visualizzato un messaggio di avviso che richiede di confermare la connessione a causa di un certificato sconosciuto. Clicca su `Sì`{.action} per accedere.

> [!primary]
>
> In caso di problemi con questa procedura, verificare che sul dispositivo siano consentite connessioni remote (RDP) verificando le impostazioni di sistema, le regole firewall e le eventuali restrizioni di rete.
>

<a name="login-other"></a>

##### 5.3.3: Connessione remota da un altro OS

Le connessioni da un sistema operativo desktop diverso da Windows richiedono in genere un client compatibile con il `Remote Desktop Protocol` (RDP). Alcuni sistemi operativi e ambienti desktop possono avere un client nativo integrato.

Indipendentemente dal client utilizzato, per consentire l’accesso dell’account `Administrator` sono necessari solo l’indirizzo IP dell’istanza e la password.

**Esempio di utilizzo**

Il software libero e open source `Remmina Remote Desktop Client` è disponibile per numerose distribuzioni desktop GNU/Linux. Se Remmina non si trova nel software manager dell'ambiente desktop, è possibile ottenerlo sul [sito ufficiale](https://remmina.org/).

![linux remote](images/24-rem-connect01.png){.thumbnail}<br>


> [!tabs]
> 1. **Connessione**
>>
>> Aprire Remmina e verificare che il protocollo di connessione sia impostato su RDP. Inserisci l’indirizzo IPv4 dell’istanza Public Cloud e clicca su `Enter`.<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Autenticazione**
>>
>> Se compare un avviso di certificato, clicca su `Yes`{.action}. Immettere il nome utente e la password per Windows e fare clic su `OK`{.action} per stabilire la connessione.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Impostazioni**
>>
>> Potete trovare elementi utili nella barra degli strumenti a sinistra. Ad esempio, clicca sull’icona `Toggle dynamic resolution update`{.action} per migliorare la risoluzione della finestra.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

<a name="vnc-console"></a>

#### 5.4: Accesso console VNC

La console VNC ti permette di connetterti alle tue istanze anche quando non sono disponibili altri mezzi di accesso.

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Public Cloud`{.action} e seleziona il progetto Public Cloud interessato.

![spazio cliente](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Seleziona `Istanze`{.action} nella barra di navigazione a sinistra sotto **Compute**. Clicca sul nome dell’istanza e apri la scheda `Console VNC`{.action}.

![console vnc](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Istanza con sistema operativo GNU/Linux installato**
>>
>> Per utilizzare la console VNC è necessario configurare sull’istanza un **account utente con password**. Per impostare una password per l'account preconfigurato, seguire la procedura descritta in [sezione 6.1.1](#set-password).
>>
> **Istanza Windows**
>>
>> Accedi con le credenziali Windows. In caso di sessione attiva, disporrete di un accesso immediato. Ci sarà una latenza significativa rispetto a una connessione RDP.
>>

<a name="manage-access"></a>

### Step 6: primi passi su una nuova istanza

> [!primary]
>
>**Istanze Windows**
>
> Non sono necessari passaggi aggiuntivi per le istanze con sistema operativo Windows installato.
>
> Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) qui sotto.
>

<a name="user-mgmt"></a>

#### 6.1: Gestione degli utenti

<a name="set-password"></a>

> [!primary]
>
> Durante la configurazione degli account utente e dei livelli di autorizzazione su un’istanza, ti consigliamo di utilizzare le informazioni contenute nella nostra [guida sull’account utente](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1: Definisci una password per l’account utente corrente

Durante la [connessione all’istanza](#manage-access), definisci una password per l’utente corrente digitando questo comando:

```bash
sudo passwd
```

Immettere una frase segreta, confermare con `Enter` e ripetere.

```console
New password: 
Retype new password:
passwd: password updated successfully
```

**È sufficiente per attivare i login tramite la [console VNC](#vnc-console) nel tuo [Spazio Cliente OVHcloud](/links/manager)**. Per impostazione predefinita, le connessioni SSH remote con questa password sono sempre **disattivate**.

<a name="remote-password"></a>

#### 6.1.2: Attivazione della connessione remota tramite password (opzionale)

> [!warning]
>
> Questo step non è necessario e deve essere eseguito solo se hai un motivo valido per attivare questo tipo di accesso; ad esempio, se devi collegarti temporaneamente all’istanza da un dispositivo sul quale non è memorizzata la tua chiave SSH privata.
>
> Nell'esempio seguente viene illustrata una soluzione temporanea su un'istanza su cui è installato Ubuntu. Potrebbe essere necessario modificare i comandi in base al sistema operativo. Non è consigliabile conservare questa configurazione in qualsiasi momento in quanto aggiunge un potenziale rischio per la sicurezza aprendo il sistema agli attacchi basati su SSH.
>

Una volta [connesso all’istanza](#manage-access), apri il file di configurazione con un editor di testo. Esempio:

```bash
sudo nano /etc/ssh/sshd_config
```

Modificate la riga `#PasswordAuthentication yes` come segue:

```console
PasswordAuthentication yes
```

Modificare la riga `Include /etc/ssh/sshd_config.d/*.conf` come segue:

```console
#Include /etc/ssh/sshd_config.d/*.conf
```

Salvare il file e chiudere l'editor.

Riavvia il servizio SSH con uno dei comandi seguenti:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Da questo momento è possibile accedere in SSH con nome utente e password.

Annullare le modifiche per ripristinare la connessione a chiave per l'istanza.

<a name="add-keys"></a>

#### 6.2: Chiavi SSH supplementari

Per autorizzare più account utente ad accedere all’istanza, la procedura standard è la seguente:

- Crea l’account sull’istanza.
- Creare una nuova coppia di chiavi SSH sul dispositivo interessato.
- Aggiungere la chiave pubblica all’istanza.

Per una spiegazione dettagliata di questi passaggi, consulta la nostra [guida dedicata](/pages/public_cloud/compute/configuring_additional_ssh_keys).

<a name="go-further"></a>

## Per saperne di più

[Come attivare una licenza Windows per un'istanza in modalità privata](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Come reimpostare una password amministratore di Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Gestione delle istanze nello Spazio Cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Come iniziare con OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)

[Come iniziare con Horizon](/pages/public_cloud/compute/introducing_horizon)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).