---
title: Configurare un IP su una macchina virtuale
slug: configurazione-ip-macchina-virtuale
excerpt: Come configurare un IP su una macchina virtuale
section: Gestione delle macchine virtuali
order: 5
updated: 2020-10-13
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 12/10/2020**

## Obiettivo

Dopo aver creato una macchina virtuale (VM) nella tua infrastruttura, puoi assegnargli un IP pubblico o privato.

**Questa guida ti mostra come eseguire questa configurazione.**

## Prerequisiti

- Aver creato una macchina virtuale
- Disporre di un blocco IP

## Procedura

### Recupera le informazioni

Per recuperare le informazioni relative al blocco IP pubblico accedi direttamente al client vSphere, seleziona la sezione `Host e cluster`{.action}. Clicca sul tuo datacenter e seleziona la scheda `Configura`{.action}. Clicca su `Rete`{.action} sotto `OVHcloud`.

![Configurazione su OVHcloud Network](images/01config_ip_ovh_network.png){.thumbnail}

Su ogni blocco consegnato da OVHcloud, 5 indirizzi IP sono riservati alla configurazione di rete e non devono mai essere utilizzati per le macchine virtuali. Si tratta del primo e degli ultimi quattro IP del blocco.

Un blocco IP Private Cloud è organizzato come segue:

- il primo indirizzo IP contrassegnato come riservato (`Reserved`) corrisponde all'indirizzo di rete
- questi IP sono utilizzabili per le tue macchine virtuali. Sono indicate come disponibili (`Available`) se nessuna VM le utilizza o utilizzate (`Used`) in caso contrario;
- gli ultimi quattro IP del blocco sono riservati, due sono dedicati ai router OVHcloud per il funzionamento del blocco e gli altri due sono utilizzati per gateway e broadcast.

![Configurazione avanzata sull'OVH Network](images/02config_ip_ovh_network_advanced.png){.thumbnail}

### Configura un IP pubblico

Per configurare un IP pubblico sulla tua macchina virtuale, è necessario aver scelto l'interfaccia `VMNetwork`{.action} nei parametri della scheda di rete della tua VM:

![VMNetwork](images/03vmnetwork.png){.thumbnail}

#### Linux

Ecco un esempio di configurazione sulla distribuzione Debian:

![Interfaccia IP](images/config_ip_interfaces.jpg){.thumbnail}

```sh
auto eth0
iface eth0 inet static
address 46.105.220.xxx
netmask 255.255.255.240
broadcast 46.105.220.xxx
gateway 46.105.220.xxx
DNAMeservers 213.186.33.99
```

Monta la scheda utilizzando un `ifup` della tua interfaccia.

Per verificare la configurazione, utilizza un `ifconfig`.

Se la tua macchina virtuale non trova la rete, verifica che la scheda di rete sia configurata su *VMNetwork* e non su *LocalPortGroup* o una VLAN e che la casella di connessione della scheda sia selezionata.

#### Windows

Ecco un esempio di configurazione su Windows:

Nel `pannello di configurazione`{.action}, accedi a `Rete e Internet`{.action} e poi `Centro rete e condivisione`{.action} e infine `Modifica l'adattatore di rete`{.action}.

Per muoverti più velocemente, clicca sul campo di ricerca Windows e scrivi `Run` (che corrisponde a premere simultaneamente sul tasto *Windows* della tua tastiera e sul tasto *R*). La console di esecuzione Windows si aprirà e inserisci il seguente comando:

```shell
ncpa.cpl
```

Clicca con il tasto destro sulla scheda di rete corrispondente al VMNetwork e `Proprietà`{.action]. Seleziona il `protocollo TCP/IP v4`{.action} e clicca di nuovo su 'Properties' e inserisci le informazioni del tuo IP come segue:

![Configurazione Windows](images/config_ip_windows.jpg){.thumbnail}

```sh
Indirizzo IP: 46.105.220.xxx
Maschera di sottorete: 255.255.255.240
Gateway predefinito: 46.105.220.yyy
Server DNS: 213.186.33.99
```

### Configura un IP privato

La configurazione di un IP privato è simile a quella di un IP pubblico. È tuttavia necessario utilizzare la scheda di rete configurata per la tua VLAN o VxLAN.

Nella scelta dell'interfaccia, potrai modificare questi parametri:

- un'interfaccia VLAN (da 10 a 20 di default e legate alla vRack, potete crearne di più consultando [questa guida](../creazione-vlan-vxlan/));
- un'interfaccia VxLAN interna all'Hosted Private Cloud.

Nelle impostazioni della tua macchina virtuale, puoi utilizzare una VLAN o VxLAN:

![VLAN](images/04vlanBis.png){.thumbnail}

![VLAN](images/05vlan.png){.thumbnail}

![VxLAN](images/06vxlan.png){.thumbnail}

#### Linux

Ecco un esempio di configurazione sulla distribuzione Debian:

![IP privato su Linux](images/linux_private.PNG){.thumbnail}

Modificando il file d'interfacce, potrete indicare un IP privato sulla gamma IP di vostra scelta:

```sh
auto eth0
iface eth0 inet static
address 192.168.70.1
netmask 255.255.255.0
gateway 192.168.70.254
```

Monta la scheda utilizzando un `ifup` della tua interfaccia.

È inoltre possibile verificare la configurazione con un `ifconfig`.

#### Windows

Ecco un esempio di configurazione su Windows:

Nel `pannello di configurazione`{.action}, vai su `Rete e Internet`{.action}, poi `Centro rete e condivisione`{.action} e infine `Modifica l'adattatore di rete`{.action}.

Per muoverti più velocemente, clicca sul campo di ricerca Windows e scrivi `Run` (che corrisponde a premere simultaneamente sul tasto *Windows* della tua tastiera e sul tasto *R*). La console di esecuzione Windows si aprirà e inserisci il seguente comando:

```shell
ncpa.cpl
```

Clicca con il tasto destro sulla scheda di rete corrispondente al VMNetwork e `Proprietà`{.action]. Seleziona il `protocollo TCP/IP v4`{.action} e clicca di nuovo su 'Properties' e inserisci le informazioni del tuo IP come segue:

![Configurazione di Windows IP pubblico](images/windows_private.PNG){.thumbnail}

Modificando questa interfaccia, potrai indicare un IP privato sulla gamma IP di tua scelta:

```sh
Indirizzo IP: 192.168.70.2
Maschera di sottorete: 255.255.255.0
Gateway predefinito: 192.168.70.254
```


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
