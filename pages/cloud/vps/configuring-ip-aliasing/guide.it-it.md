---
title: Configurare un indirizzo IP in alias
slug: ip-aliasing-vps
excerpt: Come aggiungere indirizzi IP Failover alla tua configurazione VPS
section: 'Rete e IP'
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 30/11/2021**

## Obiettivo

L'alias IP (*IP aliasing* in inglese) è una configurazione di rete speciale per i tuoi server OVHcloud, che ti permette di associare più indirizzi IP su un'unica interfaccia di rete.

**Questa guida ti mostra come aggiungere indirizzi IP Failover alla tua configurazione di rete.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui sei responsabile. ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più”.
>

## Prerequisiti

- un [VPS](https://www.ovhcloud.com/it/vps/) nel tuo account OVHcloud
- un [indirizzo IP Failover](https://www.ovhcloud.com/it/bare-metal/ip/) o un blocco IP Failover
- un accesso amministratore (root) via SSH o GUI sul tuo server
- conoscenze di base sulle reti e la loro amministrazione


## Procedura

Questa guida ti mostra le configurazioni delle distribuzioni/dei sistemi operativi più comunemente utilizzati. Il primo step consiste sempre nell'connettersi al tuo server tramite SSH o tramite una sessione di connessione all'interfaccia grafica utente (RDP per un VPS Windows). Gli esempi che seguono presuppongono che tu sia connesso come utente con elevate autorizzazioni (Administratore/Sudo).

> [!primary]
>
Per quanto riguarda le diverse versioni di distribuzione, ti ricordiamo che la procedura per configurare la tua interfaccia di rete e i nomi di file possono essere stati modificati. In caso di difficoltà o dubbi, consulta la documentazione relativa al tuo sistema operativo.
>

**Si prega di prendere nota della terminologia che verrà utilizzata negli esempi di codice e nelle istruzioni dettagliate contenute in questa guida:**

|Termine|Descrizione|Esempi|
|---|---|---|
|IP_FAILOVER|Indirizzo IP di Failover attribuito al tuo servizio|169.254.10.254|
|NETWORK_INTERFACE|Nome dell'interfaccia di rete|*eth0*, *ens3*|
|ID|ID dell'alias IP, che inizia con *0* (in base al numero di indirizzi IP aggiuntivi da configurare)|*0*, *1*|

### Debian 10/11

#### Step 1: disattiva la configurazione automatica della rete

Apri il percorso per accedere al file seguente con un editor di testo:

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Inserisci la riga seguente, poi registra e lascia l'editor.

```bash
network: {config: disabled}
```

La creazione di questo file di configurazione impedisce l'esecuzione automatica delle modifiche apportate alla configurazione della tua rete.

#### Step 2: modifica il file di configurazione di rete

Per verificare il nome della tua interfaccia di rete, esegui questo comando:

```bash
ip a
```

Apri il file di configurazione di rete per modificarlo con questo comando:

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Aggiungi queste righe:

```bash
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address IP_FAILOVER
netmask 255.255.255.255
```

#### Step 3: riavvia l'interfaccia

Applica le modifiche utilizzando il seguente comando:

```bash
sudo systemctl restart networking
```

### Ubuntu 20.04

Il file di configurazione dei tuoi indirizzi IP Failover si trova in `/etc/netplan/`. In questo esempio, si chiama "50-cloud-init.yaml". Prima di apportare modifiche, verifica il nome del file effettivo in questa cartella. Ogni indirizzo IP Failover richiede la propria linea nel file.

#### Step 1: disattiva la configurazione automatica della rete

Apri il percorso per accedere al file seguente con un editor di testo:

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Inserisci la riga seguente, poi registra e lascia l'editor.

```bash
network: {config: disabled}
```

La creazione di questo file di configurazione impedisce l'esecuzione automatica delle modifiche apportate alla configurazione della tua rete.

#### Step 2: modifica il file di configurazione

Per verificare il nome della tua interfaccia di rete, esegui questo comando:

```bash
ip a
```

Apri il file di configurazione di rete per modificarlo con questo comando:

```bash
sudo nano /etc/netplan/50-cloud-init.yaml
```

Non modificare le linee esistenti nel file di configurazione. Aggiungi il tuo indirizzo IP Failover aggiungendo un secondo blocco di configurazione per l'interfaccia pubblica, come nell'esempio seguente:

```yaml
network:
    version: 2
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: NETWORK_INTERFACE            
        NETWORK_INTERFACE:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: NETWORK_INTERFACE
            addresses:
            - IP_FAILOVER/32
```

> [!warning]
>
> È importante rispettare l'allineamento di ciascun elemento del file, come indicato nell'esempio di cui sopra. Non utilizzare il tasto di tabulazione per creare la tua spaziatura.
>

Salva e chiudi il file.

#### Step 3: applicare la nuova configurazione di rete

Per testare la tua configurazione utilizza questo comando:

```bash
sudo netplan try
```

Se è corretta, applicala utilizzando il seguente comando:

```bash
sudo netplan apply
```

Ripeti questa procedura per ogni indirizzo IP Failover.

### Windows Server 2016

#### Step 1: verifica la configurazione di rete

Clicca con il tasto destro sul pulsante `Menu Inizia`{.action} e apri `Esegui`{.action}.

Clicca su `cmd` e clicca su `OK`{.action} per aprire l'applicazione della riga di comando.

![compromesso](images/vps_win07.png){.thumbnail}

Per recuperare la configurazione IP corrente, inserisci `ipconfig` nel prompt dei comandi.

![verifica la configurazione IP principale](images/image1-1.png){.thumbnail}

#### Step 2: modifica le proprietà IPv4

A questo punto è necessario modificare le proprietà IP in una configurazione statica.

Apri le impostazioni dell'adattatore nel Pannello di configurazione Windows e apri le `Proprietà`{.action} di `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![modifica la configurazione IP](images/image2.png){.thumbnail}

Nella finestra Proprietà IPv4, seleziona `Utilizza questo indirizzo IP`{.action}. Inserisci l'indirizzo IP recuperato nel primo step e poi clicca su `Avanti`{.action}.

#### Step 3: aggiungi l'indirizzo IP Failover nelle Impostazioni TCP/IP avanzate

Nella nuova finestra, clicca su `Aggiungi...`{.action} sotto "Indirizzi IP". Inserisci il tuo indirizzo IP Failover e la subnet mask (255.255.255.255).

![sezione di configurazione avanzata](images/image4-4.png){.thumbnail}

Per confermare, clicca su `Aggiungi`{.action}.

![Configurazione del trasferimento IP](images/image5-5.png){.thumbnail}

#### Step 4: riavvia l'interfaccia di rete

Di ritorno al pannello di configurazione (`Connessioni di rete`{.action}), clicca con il tasto destro sulla tua interfaccia di rete e seleziona `Disattivare`{.action}.

![disattivazione della rete](images/image6.png){.thumbnail}

Per riavviarla, clicca con il tasto destro e seleziona `Attiva`{.action}.

![attivazione della rete](images/image7.png){.thumbnail}

#### Step 5: verifica la nuova configurazione di rete

Apri il prompt dei comandi (cmd) e inserisci `ipconfig`. La configurazione deve includere il nuovo indirizzo IP Failover.

![verifica la configurazione di rete corrente](images/image8-8.png){.thumbnail}

### cPanel (CentOS 7)/derivati Red Hat

#### Step 1: modifica il file di configurazione di rete

Per verificare il nome della tua interfaccia di rete, esegui questo comando:

```bash
ip a
```

Apri il file di configurazione di rete per modificarlo:

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

Aggiungi queste righe:

```bash
DEVICE=NETWORK_INTERFACE:ID
BOOTPROTO=static
IPADDR=IP_FAILOVER
NETMASK=255.255.255.255
BROADCAST=IP_FAILOVER
ONBOOT=yes
```

#### Step 2: riavvia l'interfaccia

Applica le modifiche utilizzando il seguente comando:

```bash
sudo systemctl restart networking
```

### Plesk

#### Step 1: accedere alla gestione IP di Plesk

Nel pannello di configurazione Plesk, seleziona `Tools & Settings`{.action} nella barra laterale sinistra.

![accesso alla gestione degli indirizzi IP](images/pleskip1.png){.thumbnail}

Clicca su `IP Indirizzi`{.action} con **Tools & Settings**.

#### Step 2: aggiungi le informazioni IP supplementari

In questa sezione, clicca sul pulsante `Add IP Address`{.action}.

![aggiungi informazioni IP](images/pleskip2-2.png){.thumbnail}

Inserisci il tuo indirizzo IP Failover nella forma `xxx.xxx.xxx.xxx/32` nel campo "IP address and subnet mask" e clicca su `OK`{.action}.

![aggiungi informazioni IP](images/pleskip3-3.png){.thumbnail}

#### Step 3: verifica la configurazione IP corrente

Per verificare che l'indirizzo IP Failover sia stato aggiunto correttamente, accedi alla sezione "Indirizzi IP".

![configurazione IP attuale](images/pleskip4-4.png){.thumbnail}

### Diagnostica

Per prima cosa, riavvia il server tramite la linea di comando o l'interfaccia utente. Se non riesci ancora a stabilire una connessione tra la rete pubblica e il tuo indirizzo IP dell'alias e sospetti un problema di rete, riavvia il server in [modalità Rescue](../rescue/). A questo punto puoi configurare l'indirizzo IP Failover direttamente sul server.

Una volta effettuato l'accesso al server via SSH, esegui questo comando:

```bash
ifconfig ens3:0 IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER up
```

Per testare la connessione, ti basta inviare un ping al tuo indirizzo IP Failover dall'esterno. Se risponde in modalità Rescue, significa probabilmente che si è verificato un errore di configurazione. Se l'IP non funziona ancora, informi i nostri team del supporto creando un ticket di assistenza dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

## Per saperne di più

[Attiva la modalità Rescue su un VPS](../rescue/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
