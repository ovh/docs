---
title: Configura un Additional IP
slug: configure-additional-ip
excerpt: Come aggiungere indirizzi Additional IP alla configurazione della tua istanza
section: Additional IP
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 17/11/2022**

> [!primary]
>
> Dal 6 ottobre 2022, la nostra soluzione "Failover IP" si chiama [Additional IP](https://www.ovhcloud.com/it/network/additional-ip/). e non ha alcun impatto sulle funzionalità o sul funzionamento dei tuoi servizi.
>

## Obiettivo

Potrai configurare indirizzi Additional IP sulle tue istanze, ad esempio se ospiti un gran numero di siti Web sulla tua istanza o se ospiti progetti internazionali. Gli indirizzi Additional IP di OVHcloud permettono di associare più indirizzi IP a un'unica interfaccia di rete.

**Questa guida ti mostra come aggiungere indirizzi Additional IP alla tua configurazione di rete.**

> [!warning]
>OVHcloud fornisce i servizi di cui sei responsabile per la configurazione e la gestione. Sei quindi responsabile del loro corretto funzionamento.
>
>Questa guida ti mostra come eseguire le operazioni necessarie per eseguire l'operazione. Tuttavia, in caso di difficoltà o dubbi relativamente all'amministrazione, all'utilizzo o alla realizzazione dei servizi su un server, ti consigliamo di contattare un fornitore di servizi specializzato.
>

## Prerequisiti

- un'[istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud
- un [indirizzo Additional IP](https://www.ovhcloud.com/it/bare-metal/ip/) o un blocco Additional IP
- un accesso amministratore (root) via SSH o GUI alla tua istanza
- conoscenze di base sulle reti e la loro amministrazione

> [!warning]
> Questa funzionalità al momento non è disponibile per le istanze Metal.
>

## Procedura

Questa guida ti mostra le configurazioni delle distribuzioni/dei sistemi operativi più comunemente utilizzati. Il primo step consiste sempre nell'accedere alla tua istanza via SSH o tramite una sessione di connessione all'interfaccia grafica utente (VNC per un'istanza Windows). Gli esempi che seguono presuppongono che tu sia connesso come utente con elevate autorizzazioni (amministratore/sudo).

> [!primary]
>
Per quanto riguarda le diverse versioni di distribuzione, ti ricordiamo che la procedura per configurare la tua interfaccia di rete e i nomi di file possono essere stati modificati. In caso di difficoltà o dubbi, consulta la documentazione relativa al tuo sistema operativo.
>

**Si prega di prendere nota della terminologia che verrà utilizzata negli esempi di codice e nelle istruzioni dettagliate contenute in questa guida:**

|Termine|Descrizione|Esempi|
|---|---|---|
|ADDITIONAL_IP|Indirizzo Additional IP attribuito al tuo servizio|169.254.10.254|
|NETWORK_INTERFACE|Nome dell'interfaccia di rete|*eth0*, *ens3*|
|ID|ID dell'alias IP, che inizia con *0* (in base al numero di indirizzi IP aggiuntivi da configurare)|*0*, *1*|

### Debian 11

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
address ADDITIONAL_IP
netmask 255.255.255.255
```

#### Step 3: riavvia l'interfaccia

Applica le modifiche utilizzando il seguente comando:

```bash
sudo systemctl restart networking
```

### Ubuntu 22.04

Il file di configurazione dei tuoi indirizzi Additional IP si trova in `/etc/netplan/`. In questo esempio, si chiama "50-cloud-init.yaml". Prima di apportare modifiche, verifica il nome del file effettivo in questa cartella. Ogni indirizzo Additional IP richiede la propria linea nel file.

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

Non modificare le righe esistenti nel file. Aggiungi il tuo indirizzo Additional IP seguendo l'esempio seguente:

```yaml
network:
    version: 2
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: NETWORK_INTERFACE
            addresses:
            - ADDITIONAL_IP/32
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

Ripeti questa procedura per ogni indirizzo Additional IP.

### Windows Server (2016)

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Public Cloud`{.action} e seleziona il tuo progetto.

Apri `Instances`{.action} nel menu a sinistra. Clicca sul nome della tua istanza. Accedi alla scheda `Console VNC`{.action}.

#### Step 1: verifica la configurazione di rete

Clicca con il tasto destro sul pulsante `Menu Inizia`{.action} e apri `Esegui`{.action}.

Clicca su `cmd` e clicca su `OK`{.action} per aprire l'applicazione della riga di comando.

![cmdprompt](images/pci_win07.png){.thumbnail}

Per recuperare la configurazione IP corrente, inserisci `ipconfig` nel prompt dei comandi.

![verifica la configurazione IP principale](images/image1-1.png){.thumbnail}

#### Step 2: modifica le proprietà IPv4

A questo punto è necessario modificare le proprietà IP in una configurazione statica.

Apri le impostazioni dell'adattatore nel Pannello di configurazione Windows e apri le `Proprietà`{.action} di `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![modifica la configurazione IP](images/image2.png){.thumbnail}

Nella finestra Proprietà IPv4, seleziona `Utilizza questo indirizzo IP`{.action}. Inserisci l'indirizzo IP recuperato nel primo step e poi clicca su `Avanti`{.action}.

#### Step 3: aggiungi l'indirizzo Additional IP nelle Impostazioni TCP/IP avanzate

Nella nuova finestra, clicca su `Aggiungi...`{.action} sotto "Indirizzi IP". Inserisci il tuo indirizzo Additional IP e la subnet mask (255.255.255.255).

![sezione di configurazione avanzata](images/image4-4.png){.thumbnail}

Per confermare, clicca su `Aggiungi`{.action}.

![Configurazione del trasferimento IP](images/image5-5.png){.thumbnail}

#### Step 4: riavvia l'interfaccia di rete

Di ritorno al pannello di configurazione (`Connessioni di rete`{.action}), clicca con il tasto destro sulla tua interfaccia di rete e seleziona `Disattivare`{.action}.

![disattivazione della rete](images/image6.png){.thumbnail}

Per riavviarla, clicca con il tasto destro e seleziona `Attiva`{.action}.

![attivazione della rete](images/image7.png){.thumbnail}

#### Step 5: verifica la nuova configurazione di rete

Apri il prompt dei comandi (cmd) e inserisci `ipconfig`. La configurazione deve includere il nuovo indirizzo Additional IP.

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
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
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

Inserisci il tuo indirizzo Additional IP nella forma `xxx.xxx.xxx.xxx/32` nel campo "IP address and subnet mask" e clicca su `OK`{.action}.

![aggiungi informazioni IP](images/pleskip3-3.png){.thumbnail}

#### Step 3: verifica la configurazione IP corrente

Per verificare che l'indirizzo Additional IP sia stato aggiunto correttamente, accedi alla sezione "Indirizzi IP".

![configurazione IP attuale](images/pleskip4-4.png){.thumbnail}

### Diagnostica

Riavvia l'istanza utilizzando il sistema operativo installato nell'istanza o dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Se non riesci ancora a stabilire una connessione tra la rete pubblica e il tuo Additional IP e sospetti un problema di rete, riavvia l'istanza in [modalità Rescue](https://docs.ovh.com/it/public-cloud/riavvia_la_tua_istanza_in_modalita_di_ripristino_rescue_mode/). A questo punto puoi configurare l'indirizzo Additional IP direttamente sull'istanza.


Una volta effettuato l'accesso in Rescue mode via SSH, esegui questo comando:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Per testare la connessione, ti basta inviare un ping al tuo indirizzo Additional IP dall'esterno. Se risponde in modalità Rescue, significa probabilmente che si è verificato un errore di configurazione. Se l'IP non funziona ancora, informi i nostri team del supporto creando un ticket di assistenza dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

## Per saperne di più

[Importa un Additional IP](https://docs.ovh.com/it/publiccloud/network-services/import-additional-ip/)

[Trasferisci un Additional IP](https://docs.ovh.com/it/publiccloud/network-services/migrate-additional-ip/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
