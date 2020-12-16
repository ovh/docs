---
title: Configurare un indirizzo IP in alias
slug: ip-aliasing-vps
excerpt: Come aggiungere indirizzi IP Failover alla tua configurazione VPS
section: 'Rete e IP'
---

**Ultimo aggiornamento: 8 aprile 2020**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

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
- un indirizzo IP Failover o un blocco IP Failover (RIPE)
- un accesso amministratore (root) via SSH o un remote desktop (Windows) sul tuo server


## Procedura

> [!primary]
>
Per utilizzare una distribuzione recente, la procedura per configurare l'interfaccia di rete può richiedere adattamenti. In caso di difficoltà o dubbi, consulta la documentazione relativa al tuo sistema operativo. 
> 

Ecco le configurazioni per le distribuzioni e i sistemi operativi principali.

### Debian 9

#### Step 1: disattiva la configurazione automatica della rete

Apri il file seguente, come indicato qui di seguito:

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Successivamente, modifica il file con la configurazione qui sotto. In questo modo non sarà possibile apportare modifiche alla configurazione della tua rete.

```sh
network: {config: disabled}
```

### Step 2: modifica il file di configurazione di rete

Apri il file di configurazione di rete per modificarlo con questo comando:

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Modifica il file con questa configurazione:

> [!primary]
>
Ti ricordiamo che i nomi delle interfacce di rete nei nostri esempi possono differire dai tuoi nomi. Adatta i nomi di interfaccia appropriati
>

```sh
auto3
iface ens3 inet dhcp

auto3:0
iface ens3:0 inet static
address FailoverIP 0
netmask 255.255.255.255

auto3:1
iface ens3:1 inet static
address FailoverIP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Ogni indirizzo IP Failover richiede la propria linea in questo file. Il file di configurazione dei tuoi indirizzi IP Failover deve essere chiamato "50-cloud-init.yaml".

#### Step 1: crea il file di configurazione

Accedi al tuo server via SSH ed esegui questo comando:

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Successivamente, modifica il file con il contenuto qui sotto:

```sh
network:
    version: 2
    ethernets:
        tua_interface_rete:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: vostra_interfaccia_rete
            addresses:
            - il tuo_ip_failover/32
```

Infine, salva e chiudi il file.

Applica la configurazione:

```sh
# netplan apply
# netplan try
```

Ripeti questa procedura per ogni indirizzo IP Failover.

### CentOS e Fedora (25 versioni precedenti)

#### Step 1: crea il file sorgente

Per prima cosa, copia il file sorgente per poterlo utilizzare come template:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Step 2: modifica il file sorgente

Ora puoi modificare il file eth0:0 per sostituire l'indirizzo IP:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Per prima cosa, sostituisci il nome del "device" e sostituisci l'indirizzo IP esistente con l'indirizzo IP Failover che hai ricevuto:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # Per CentOS, utilizza "statico"
IPADDR="IP_FAILOVER"
NETMASK="255.255.255.255"
BROADCAST="IP_FAILOVER"
```

#### Step 3: riavvia l’interfaccia

Riavvia l'interfaccia:

```sh
ifup eth0:0
```

### Windows Server 2012/2016

#### Step 1: verifica la configurazione IP principale

Per prima cosa, è necessario recuperare le informazioni relative all'indirizzo IP principale:

![verifica la configurazione IP principale](images/image1-1.png){.thumbnail}

#### Step 2: modifica le proprietà IPv4

È necessario modificare manualmente le proprietà IP di configurazione "automatica" in configurazione "statica":

![modifica la configurazione IP](images/image2.png){.thumbnail}

A questo punto puoi definire le informazioni IP ottenute precedentemente:

![modifica la configurazione IP](images/image3-3.png){.thumbnail}

#### Step 3: aggiungi l'indirizzo IP Failover nella sezione "Configurazione avanzata"

![sezione di configurazione avanzata](images/image4-4.png){.thumbnail}

Dobbiamo definire qui le informazioni IP Failover e la subnet mask corrispondente (normalmente la subnet mask è 255.255.255.255).

![Configurazione dell'IP Failover](images/image5-5.png){.thumbnail}

#### Step 4: riavvio dell'interfaccia di rete

Per prima cosa effettuiamo il processo di disattivazione.

![disattivazione della rete](images/image6.png){.thumbnail}

poi il processo di attivazione.

![attivazione della rete](images/image7.png){.thumbnail}

#### Step 5: verifica della nuova configurazione di rete

utilizzando la console e il comando ___ipconfig___, possiamo verificare la nuova configurazione di rete.

![verifica la configurazione di rete corrente](images/image8-8.png){.thumbnail}


### cPanel (sur CentOS 6)

#### Step 1: crea il file sorgente

Per prima cosa, copia il file sorgente, per poter tornare indietro in qualsiasi momento:

```sh
cp /etc/ips /etc/ips.bak
```

#### Step 2: modifica il file sorgente

Modifica il file /etc/ips:

```sh
editor /etc/ips
```

Aggiungi al file l'indirizzo IP Failover:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

e aggiungi l'indirizzo IP in /etc/ipaddrpool:

```bash
IP_FAILOVER
```

#### Step 3: riavvia l’interfaccia

Riavvia l'interfaccia:

```sh
/etc/init.d/ipaliases restart
```

### Plesk Onyx 17.x

#### Step 1: accedere alla gestione degli indirizzi IP nel pannello di configurazione

Accedi alla sezione ```Tools & Settings``` > ```IP Addresses```:

![accesso alla gestione degli indirizzi IP](images/pleskip1.png){.thumbnail}

#### Step 2: aggiungi le informazioni IP supplementari

Clicca sul pulsante `Add IP Address`{.action}:

![aggiungi informazioni IP](images/pleskip2-2.png){.thumbnail}

Inserisci le informazioni IP aggiuntive nel form e clicca su `OK`{.action}.

![aggiungi informazioni IP](images/pleskip3-3.png){.thumbnail}

#### Step 3: verifica la configurazione IP corrente nel pannello di configurazione Plesk

![configurazione IP attuale](images/pleskip4-4.png){.thumbnail}

### Intervento tecnico

Se non riesci a stabilire una connessione tra la rete pubblica e il tuo indirizzo IP dell'alias e sospetti un problema di rete, riavvia il server in modalità Rescue e configura l'alias direttamente sul server.

Una volta riavviato il server in Rescue mode, esegui questo comando:

```sh
ifconfig ens3:0 FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP up
```

Sostituisci FAILOVER_IP con l'indirizzo IP Failover reale.

Poi, basta inviare un ping al tuo IPFO dall'esterno. Se funziona, significa probabilmente che è necessario correggere un errore di configurazione. Se invece l'IP non funziona ancora, informi i nostri team creando una richiesta di supporto dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/manager/dedicated/#/support/tickets/new) per maggiori informazioni.
 
## Spingiti oltre

[Attiva la modalità Rescue su un VPS](../rescue/)

Unisciti alla nostra Community di utenti <https://community.ovh.com/en/>.
