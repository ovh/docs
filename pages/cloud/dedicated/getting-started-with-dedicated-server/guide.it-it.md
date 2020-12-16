---
title: 'Iniziare a utilizzare un server dedicato'
slug: iniziare-a-utilizzare-server-dedicato
excerpt: 'Come eseguire le prime operazioni su un server dedicato'
section: 'Per iniziare'
---


**Ultimo aggiornamento: 2 aprile 2020**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Un server dedicato è una macchina fisica localizzata in uno dei nostri datacenter. Diversamente dalle soluzioni di hosting Web (descritte come "condivise"), che sono tecnicamente gestite da OVHcloud, in OVHcloud la gestione del server dedicato è di esclusiva competenza dell'utente.

**Questa guida ti mostra le operazioni di base da effettuare sul tuo nuovo server.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I2G6TkKg0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui sei responsabile. ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più”.
>

## Prerequisiti

- Disporre di un [server dedicato OVH](https://www.ovhcloud.com/it/bare-metal/){.external}
- Essere connesso in SSH (accesso root) con Linux o come amministratore con Windows
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)

## Procedura

Quando il tuo server dedicato è configurato per la prima volta, puoi selezionare il sistema operativo da installare.

### Installa o reinstalla il tuo server dedicato

Reinstalla facilmente il tuo server e scegli un altro modello di sistema operativo nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager). Nella scheda `Informazioni generali`{.action}, clicca sui tre puntini `...`{.action} in corrispondenza del Sistema operativo e seleziona `Installa`{.action}.

![Pulsante Reinstalla](images/reinstalling-your-server-00.png){.thumbnail}

Seleziona `Installa partendo da un template OVH`{.action} (per utilizzare uno dei nostri modelli di installazione) o `Installa uno dei tuoi template`{.action} (per utilizzare il tuo) e clicca su `Seguente`{.action}.

![Selezione del modello](images/reinstalling-your-server-02.png){.thumbnail}

Seleziona il sistema operativo da installare e clicca su `Seguente`{.action}".

![Selezione operativa](images/reinstalling-your-server-03.png){.thumbnail}

Per modificare lo schema di partizione del tuo sistema operativo, seleziona la casella "Personalizza la configurazione delle partizioni" e clicca su `Seguente`{.action}.

![Personalizza la configurazione della partizione](images/SSH_02.png){.thumbnail}

Una volta terminate le modifiche, clicca su `Seguente`{.action} per accedere alla pagina di riepilogo.

### Aggiunta di una chiave SSH (facoltativo)

Se installi un sistema operativo Linux, aggiungi la tua chiave SSH all'ultimo step del processo di installazione.

![Personalizza la configurazione della partizione](images/SSH_03.png){.thumbnail}

Se una chiave SSH è già registrata, appare nel menu a tendina con `Chiavi SSH` in basso. In caso contrario, è necessario aggiungerne uno nella sezione "I tuoi servizi".

Per farlo, apri la barra laterale cliccando sul tuo nome nell'angolo in alto a destra e utilizza la scorciatoia `Prodotti e servizi`{.action}.

![Personalizza la configurazione della partizione](images/SSH_13.png){.thumbnail}

In "I tuoi servizi", passa alla scheda `Chiavi SSH`{.action} e clicca su `Aggiungi una chiave SSH`{.action}.

![Personalizza la configurazione della partizione](images/SSH_14.png){.thumbnail}

Per installare un server dedicato (o un VPS), seleziona "Dedicato" nel menu a tendina.

Nella nuova finestra inserisci un ID (nome a tua scelta) e la chiave stessa (tipo RSA, ECDSA o Ed25519) nei campi corrispondenti.

![Personalizza la configurazione della partizione](images/SSH_12.png){.thumbnail}

Per maggiori informazioni sulla creazione di chiavi SSH, consulta [questa guida](https://docs.ovh.com/it/public-cloud/creare-chiave-ssh/).


> [!primary]
>
> Alcuni sistemi operativi o piattaforme, come Plesk e Windows, richiedono l'acquisizione di una licenza prima dell'installazione. Questa [licenza può essere acquistata presso OVHcloud](https://www.ovhcloud.com/it/bare-metal/os/) o un rivenditore. La licenza dovrà poi essere integrata manualmente, tramite il sistema operativo o attraverso lo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager). Puoi gestire le tue licenze nella cartella di configurazione della sezione `Bare Metal Cloud`{.action} con `Licenze`{.action}. In questa sezione, puoi anche ordinare licenze (tramite il pulsante `Ordina`{.action} a sinistra) o aggiungere la tua licenza di server SQL o Windows SPLA (tramite il pulsante `Aggiungi una licenza SPLA`{.action} a sinistra).
>

### Connessione al tuo server

#### Linux

Una volta completata l'installazione, riceverai un'email con la password per l'accesso root. L’accesso root ti consente di collegarti al tuo server tramite SSH che è un protocollo di comunicazione sicuro. Puoi accedere al tuo server tramite un terminale di comando (Linux o MAC) o tramite un software di terze parti sotto Windows (ad esempio: PuTTY).

Dopo aver aperto il terminale, accedi al tuo server digitando questo comando (sostituisci il testo dopo il simbolo @ con le informazioni richieste: indirizzo IP o nome di riferimento del server). L’indirizzo di riferimento inizia sempre con *ns*.

**Esempio utilizzando un indirizzo IP**

```sh
sh ssh root@IPv4_del_tuo_server 
```

**Esempio utilizzando un riferimento di server**

```sh
ssh root@nome_di_riferimento_del_tuo_server
```

#### Windows

Una volta completata l'installazione, riceverai un'email con la password per l'accesso amministratore (root). Utilizza queste credenziali per connetterti al server via RDP (**R**emote **D**esktop **P**rotocol). Una volta connesso, Windows ti guiderà durante l'installazione iniziale.


### Protezione del tuo server dedicato

Come spiegato nella parte iniziale di questa guida, in quanto amministratore del tuo server dedicato sei anche responsabile della sua sicurezza e dei dati in esso contenuti. Ecco alcuni consigli utili per proteggere della tua macchina:

* aggiornare regolarmente il sistema operativo
* aggiornare regolarmente il software
* modificare la porta SSH predefinita (porta 22) con un’altra
* modifica la password di root
* crea un nuovo utente di sistema con accesso limitato per un utilizzo quotidiano.

Per maggiori informazioni, consulta [questa guida](../mettere-in-sicurezza-un-server-dedicato/).

### Configurazione rete

#### Modalità Bridge IP

La modalità bridge è l’azione eseguita da un dispositivo per creare una rete globale a partire da due o più reti di comunicazione o due o più segmenti di rete. La modalità bridge è diversa dal routing, che permette alle reti di comunicare in modo indipendente pur restando separate.

È la configurazione più utilizzata nell’ambito della virtualizzazione, in quanto permette a ogni macchina virtuale di disporre del proprio indirizzo IP pubblico.

Per maggiori informazioni, consulta la nostra guida: [Modalità Bridge IP](https://docs.ovh.com/gb/en/dedicated/network-bridging/).

#### Modalità Alias IP

L’alias IP è un tipo di configurazione che permette di associare più indirizzi IP a un’interfaccia di rete.   In questo modo il tuo server è in grado di stabilire più connessioni a una rete, ognuna con un obiettivo diverso.

Per maggiori informazioni sulla configurazione dell'alias IP, consulta la guida [Configurare un indirizzo IP con l'alias](../network-ipaliasing).

#### Configurazione IPv6

Tutti i server dedicati OVHcloud includono un blocco /64 IPv6. Per utilizzare gli indirizzi di questo blocco, è necessario apportare modifiche alla configurazione di rete. Consulta la nostra guida: [Configurare IPv6 su un server dedicato](../network-ipv6/).


### Intervento tecnico

OVHcloud distribuisce tutti i server dedicati utilizzando una console IPMI (Intelligent Platform Management Interface), disponibile nel browser o da un'applet Java e permette di connettersi direttamente al server, anche senza connessione di rete. Questa operazione permette di risolvere i problemi che potrebbero aver causato la disconnessione del tuo server.

Per maggiori informazioni, consulta la nostra guida: [Utilizzare l'IPMI sui server dedicati](../utilizzo-ipmi-server-dedicati/).

### Modalità Rescue

In caso di problemi sul tuo server, per prima cosa riavvia il server in modalità Rescue. Per attivare la modalità Rescue, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager) e accedi alla pagina del tuo server. Nel menu `Informazioni generali`, clicca su `...`{.action} poi su `Modifica`{.action} per modificare la modalità di avvio.

![Modifica la selezione di avvio](images/rescue-mode-01.png){.thumbnail}

Nella finestra successiva seleziona `Avviare in modalità Rescue`{.action} e seleziona `rescue64-pro`{.action} nel menu a tendina. Inserisci il tuo indirizzo email nel campo di testo e clicca su `Avanti`{.action}. Se lasci vuoto il campo dell'email, l'indirizzo email associato al tuo account OVHcloud viene utilizzato di default.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Conferma le opzioni selezionate e riavvia il server per applicare le modifiche. 

![Conferma e riavvio](images/rescue-mode-02.png){.thumbnail}

A questo punto il tuo server verrà riavviato in Rescue mode e riceverai le credenziali di accesso via email all'indirizzo indicato. Per uscire dalla modalità Rescue, è sufficiente modificare di nuovo il netboot per rimetterlo su `Boot sull'hard`{.action} disk e riavviare il server.

Per maggiori informazioni sull'utilizzo della modalità Rescue per risolvere i problemi con il tuo server, consulta la nostra guida sulla [modalità Rescue](../rescue_mode/).


#### Diagnostica hardware

I test hardware disponibili in modalità Rescue possono aiutarti a diagnosticare i malfunzionamenti hardware che potrebbero causare problemi al tuo server.

Una volta effettuato l'accesso all'interfaccia Web del Rescue mode, è possibile eseguire test sui seguenti componenti hardware:

* RAM
* Hard disk
* RAID
* Processore
* Connessione di rete

#### Interfaccia Web della modalità Rescue

![Interface Web](images/rescue-mode-04.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
