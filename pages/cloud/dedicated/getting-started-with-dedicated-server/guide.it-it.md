---
title: 'Iniziare a utilizzare un server dedicato'
slug: iniziare-a-utilizzare-server-dedicato
excerpt: 'Come eseguire le prime operazioni su un server dedicato'
section: 'Per iniziare'
---

**Ultimo aggiornamento: 14/02/2019**

## Obiettivo

Un server dedicato è una macchina fisica localizzata in uno dei nostri datacenter. A differenza delle soluzioni di hosting Web, la cui gestione tecnica è affidata a OVH, per un server dedicato l’amministrazione è sotto la tua completa responsabilità.

**Questa guida ti mostra le operazioni di base da effettuare sul tuo nuovo server.**

> [!warning]
>
> OVH mette a disposizione i server, ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione.  Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente. Questa guida ti aiuta a muovere i primi passi nell’utilizzo del tuo server dedicato. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più”.
>


## Prerequisiti

* Disporre di un [server dedicato](https://www.ovh.it/server_dedicati/){.external}, disponibile nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Dedicato`{.action} > `Server Dedicati`{.action}.


## Procedura

### Accedi al tuo server

#### Con Linux

Una volta completata la prima configurazione del tuo server, ricevi un’email con la password di accesso root per stabilire una connessione totalmente sicura utilizzando il protocollo SSH.  Questo tipo di accesso viene effettuato su Linux e MAC tramite un terminale e, con Windows, utilizzando un software di terze parti (ad esempio PuTTY).

Una volta avviato il terminale, accedi al tuo server digitando il comando indicato qui sotto (sostituisci il testo dopo il simbolo @ con le informazioni richieste: indirizzo IP o nome di riferimento del server). L’indirizzo di riferimento inizia sempre con **ns**.

- Esempio utilizzando un indirizzo IP:

```sh
sh ssh root@IPv4_del_tuo_server 
```

- Esempio utilizzando il riferimento del server:

```sh
ssh root@nome_di_riferimento_del_tuo_server
```

#### Con Windows

Una volta completata la prima configurazione del tuo server, ricevi un’email con la password di accesso amministratore che dovrai utilizzare per collegarti al server tramite *Remote Desktop Protocol* (RDP). Una volta effettuato l’eccesso, Windows ti guiderà nella configurazione iniziale.

### Installa o reinstalla il tuo server dedicato

Le operazioni di installazione possono essere effettuate direttamente dalla pagina del tuo server nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}: nel riquadro `Informazioni generali` clicca sui tre puntini in corrispondenza della riga `Sistema operativo` e seleziona `Reinstalla`{.action}.

![Pulsante Reinstalla](images/reinstalling-your-server-01.png){.thumbnail}

Si apre una nuova finestra. Seleziona `Installa partendo da un template OVH`{.action} per utilizzare uno dei nostri template di installazione o `Installa uno dei tuoi template`{.action} per usarne uno tuo, poi clicca su `Seguente`{.action}.

![Selezione dei template](images/reinstalling-your-server-02.png){.thumbnail}

Seleziona il sistema operativo da installare e clicca su `Seguente`{.action}.

![Selezione delle funzionalità](images/reinstalling-your-server-03.png){.thumbnail}

Segui le istruzioni e clicca su `Conferma`{.action} per procedere con l’installazione.


> [!primary]
>
> Alcune distribuzioni come Plesk e Windows richiedono l’utilizzo di una licenza, che può essere acquistata in OVH (nella sezione `Dedicato`{.action} > `Licenze`{.action} dello  [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}) o presso un altro rivenditore. La licenza dovrà poi essere integrata manualmente o dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. 
> 


### Metti in sicurezza il tuo server dedicato

Come spiegato nella parte iniziale di questa guida, in quanto amministratore del tuo server dedicato sei anche responsabile della sua sicurezza e dei dati in esso contenuti. Ecco alcuni consigli utili per proteggere la tua macchina:

* aggiornare regolarmente il sistema operativo
* aggiornare regolarmente il software
* modificare la porta SSH predefinita (porta 22) impostandone un’altra
* modificare la password di accesso root
* creare un nuovo utente di sistema con accesso limitato per un utilizzo quotidiano

Per maggiori informazioni, consulta [questa guida](https://docs.ovh.com/it/dedicated/mettere-in-sicurezza-un-server-dedicato/){.external}.


### Configura una rete

#### Modalità Bridge IP

La modalità bridge è l’azione eseguita da un dispositivo per creare una rete globale a partire da due o più reti di comunicazione o due o più segmenti di rete.

È la configurazione più utilizzata nell’ambito della virtualizzazione, in quanto permette a ogni macchina virtuale di disporre del proprio indirizzo IP pubblico.

Per maggiori informazioni, consulta [questa guida](https://docs.ovh.it/dedicated/network-bridging/){.external}.

#### Modalità Alias IP

L’alias IP è un tipo di configurazione che permette di associare più indirizzi IP a un’interfaccia di rete.   In questo modo il tuo server è in grado di stabilire più connessioni a una rete, ognuna con un obiettivo diverso.

Per maggiori informazioni sulla configurazione dell’Alias IP, consulta [questa guida](https://docs.ovh.com/it/dedicated/network-ipaliasing/){.external}.

#### Configurazione dell’IPv6

Tutti i server dedicati OVH includono un blocco /64 di IPv6. Per utilizzare gli indirizzi di questo blocco è necessario apportare alcune modifiche alla configurazione di rete. Per maggiori informazioni, consulta [questa guida](https://docs.ovh.com/it/dedicated/network-ipv6/){.external}. 


### Risolvi i problemi di configurazione tramite l’IPMI

Su tutti i server dedicati OVH è integrata una console IPMI (Intelligent Platform Management Interface), disponibile tramite browser o applet Java, che consente di stabilire una connessione diretta al server anche in caso di assenza di collegamento di rete. L’utilizzo di questa interfaccia permette di risolvere i problemi che potrebbero aver causato la disconnessione del tuo server.

Per maggiori informazioni sul servizio, consulta [questa guida](https://docs.ovh.com/it/dedicated/utilizzo-ipmi-server-dedicati/){.external}.


### Modalità Rescue

In caso di problemi sul tuo server, il primo passo verso la loro risoluzione è il riavvio della macchina in modalità Rescue. Per attivare questa funzione accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca su `Dedicato`{.action} > `Server Dedicati`{.action} e seleziona il tuo server. Nel riquadro `Informazioni generali`{.action} della scheda `Stato del server`{.action}, clicca sui tre puntini in corrispondenza della riga `Boot`{.action} e seleziona `Modifica`{.action} per cambiare la modalità di avvio.

![Modificare la modalità di avvio](images/rescue-mode-01.png){.thumbnail}

Nella finestra successiva seleziona l’opzione `Avviare in Rescue mode`{.action} e seleziona `rescue64-pro`{.action} nel menu a tendina. Inserisci il tuo indirizzo email nell’area di testo e clicca su `Seguente`{.action}.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Conferma le opzioni selezionate e riavvia il server per applicare le modifiche. 

![Conferma e riavvio](images/rescue-mode-02.png){.thumbnail}

A operazione completata riceverai all’indirizzo fornito un’email con le credenziali di accesso. Per uscire dalla modalità Rescue è sufficiente modificare il boot con l’avvio da hard disk e riavviare nuovamente il server. 

Per maggiori informazioni sull’utilizzo del Rescue mode, consulta [questa guida](https://docs.ovh.com/it/dedicated/rescue_mode/){.external}.


#### Diagnostica hardware

I test hardware disponibili in modalità Rescue sono utili per diagnosticare le cause dei malfunzionamenti del tuo server.

Dall’interfaccia Web del Rescue mode è possibile eseguire test su questi componenti hardware:

* RAM
* hard disk
* RAID
* processore
* connessione di rete

#### Interfaccia Web della modalità Rescue

![Interfaccia Web della modalità Rescue](images/rescue-mode-04.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
