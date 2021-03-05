---
title: 'Configurare due o più server dedicati nella vRack'
slug: configurare-server-dedicati-vrack
excerpt: 'Scopri come configurare due o più server dedicati nella vRack'
section: vRack
---

**Ultimo aggiornamento: 30/11/2018**

## Obiettivo

La tecnologia vRack (rack virtuale) permette di raggruppare diversi server, indipendentemente dal numero e dall’ubicazione nei nostri datacenter, e di connetterli ad uno switch virtuale all’interno di una stessa rete privata. In questo modo i server possono comunicare tra loro in modo privato e sicuro tramite una VLAN dedicata.

**Questa guida ti mostra come configurare due o più server dedicati grazie alla vRack.**


## Prerequisiti

- Essere in possesso di una [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
- Disporre di almeno due o più [server compatibili con la vRack](https://www.ovh.it/server_dedicati/){.external}
- Essere connesso in SSH (o attraverso l’interfaccia grafica) al server Linux (accesso <i>root</i>)
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Aver selezionato un intervallo di indirizzi IP privati


## Procedura

### Aggiungi i server alla vRack

1. Dopo aver aggiunto la vRack al tuo account, accedi alla sezione `Cloud`{.action} del tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.
2. Successivamente seleziona il menu `vRack`{.action} nella colonna a sinistra.
3. Seleziona la tua vRack e,
4. nella lista dei servizi compatibili, seleziona i server che vuoi aggiungere alla vRack, poi clicca su `Aggiungi`{.action}.

![Choix du vRack](images/vrack_selection.png){.thumbnail}

### Configura le interfacce di rete

In questo esempio, utilizziamo un intervallo di indirizzi IP interni di *192.168.0.0/16*.

Utilizziamo anche i nomi **eth1** e **eno4** per l’interfaccia di rete secondaria. I server potrebbero utilizzare una terminologia diversa. Puoi verificarlo utilizzando i comandi che indichiamo di seguito.

Per visualizzare l’elenco delle interfacce di rete, utilizza questo comando:

```sh
ifconfig -a | grep eth | awk '{print $ 1}'
```

La prima interfaccia della lista è la tua connessione di rete principale. Puoi verificare quella attiva utilizzando il seguente comando:

```sh
ifconfig eth1 up
```

```sh
ethtool eth1 | grep "Link detected"
```

Se con questo comando appare il messaggio `Link detected: no`, si tratta dell’interfaccia di rete da utilizzare per la configurazione della tua vRack, dopo aver eseguito questo comando:

```sh
ifconfig eth1 down
```

#### CentOS 6 e 7

Apri il file di configurazione dell’interfaccia di rete con questo comando:

```sh
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Premi il tasto `I` della tastiera per passare alla modalità di inserimento.

Configura l’interfaccia di rete secondaria come segue:

```sh
DEVICE=eth1
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Nell’esempio di seguito, puoi utilizzare qualsiasi intervallo di IP privati e qualsiasi indirizzo situato all’interno della stesso.

1. Premi il tasto `Esc`
2. Premi il tasto `Shift + :` per aprire l’editor
3. Digita `wq`
4. Premi il tasto `Invio`
5. Riavvia il server
6. Ripeti tutti gli step per gli altri server e attribuisci ad ognuno un indirizzo IP unico appartenente al tuo intervallo. Subito dopo, i tuoi server potranno comunicare tra di loro all’interno della rete privata.


#### Debian 7 e 8

Apri il file di configurazione dell’interfaccia di rete con questo comando:

```sh
nano /etc/network/interfaces
```

Configura l’interfaccia di rete secondaria come segue:

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Nell’esempio di seguito, puoi utilizzare qualsiasi gamma privata di IP e qualsiasi indirizzo situato all’interno della stessa.


1. Premi `CTRL + X` per abbandonare il file di configurazione di rete
2. Premi il tasto `Y` per salvare le modifiche e infine premi `Invio`
3. Riavvia il server
4. Ripeti tutti gli step per gli altri server e attribuisci ad ognuno un indirizzo IP unico appartenente alla tua gamma interna. Subito dopo, i tuoi server potranno comunicare tra di loro all’interno della rete privata.


#### Debian 9

Apri il file di configurazione dell’interfaccia di rete con questo comando:

```sh
nano /etc/network/interfaces
```

Configura l’interfaccia di rete secondaria come segue:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Nell’esempio di seguito, puoi utilizzare qualsiasi intervallo di IP privati e qualsiasi indirizzo situato all’interno della stesso.

1. Premi `CTRL + X` per abbandonare il file di configurazione di rete
2. Premi il tasto `Y` per salvare le modifiche e infine premi `Invio`
3. Riavvia il server
4. Ripeti tutti gli step per gli altri server e attribuisci ad ognuno un indirizzo IP unico appartenente alla tuo intervallo. Subito dopo, i tuoi server potranno comunicare tra di loro all’interno della rete privata.


#### Ubuntu Server 16

Apri il file di configurazione dell’interfaccia di rete con questo comando:

```sh
vi /etc/network/interfaces
```

Premi il tasto `I` della tastiera per passare alla modalità di inserimento.

Configura l’interfaccia di rete secondaria come segue:

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Nell’esempio di seguito, puoi utilizzare qualsiasi intervallo di IP privati e qualsiasi indirizzo situato all’interno della stessa.

1. Premi il tasto `Esc`
2. Premi il tasto `Shift + :` per aprire l’editor
3. Digita `wq`
4. Premi il tasto `Invio`
5. Riavvia il server
6. Ripeti tutti gli step per gli altri server e attribuisci ad ognuno un indirizzo IP unico appartenente alla tuo intervallo. Subito dopo, i tuoi server potranno comunicare tra di loro all’interno della rete privata.


#### Ubuntu Server 17

Apri il file di configurazione dell’interfaccia di rete con questo comando:

```sh
nano /etc/network/interfaces
```

Configura l’interfaccia di rete secondaria come segue:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Nell’esempio di seguito, puoi utilizzare qualsiasi intervallo di IP privati e qualsiasi indirizzo situato all’interno della stesso.

1. Premi `CTRL + X` per abbandonare il file di configurazione di rete
2. Premi il tasto `Y` per salvare le modifiche e infine premi `Invio`
3. Riavvia il server
4. Ripeti tutti gli step da 1 a 5 per gli altri server e attribuisci a ciascuno di essi un indirizzo IP unico appartenente alla tuo intervallo. Subito dopo, i tuoi server potranno comunicare tra di loro all’interno della rete privata.


#### Windows

In questo esempio, utilizziamo un intervallo di indirizzi IP di *192.168.0.0/16*.


- Connettiti al tuo server Windows tramite il desktop remoto
- Clicca su `Start`{.action}
- Clicca su `Pannello di Controllo`{.action}

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

- Clicca su `Rete e Internet`{.action}

![Network and Internet](images/windows_network_and_internet.png){.thumbnail}

- Clicca su `Centro connessioni di rete e condivisione`{.action}

![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}

- Clicca su `Modifica impostazioni scheda`{.action}

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

- Clicca con il tasto destro sull’interfaccia di rete secondaria

- Clicca su `Proprietà`{.action}

![Windows Properties](images/windows_properties_button.png){.thumbnail}

- Fai un doppio click su `Internet Protocol Version 4`{.action} (TCP/IP/IPv4)

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

- Clicca su `Utilizza il seguente indirizzo IP`{.action}.

    - In `Indirizzo IP`{.action} inserisci un indirizzo IP del tuo intervallo
    - In `Subnet mask`{.action} inserisci 255.255.0.0

![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}

- Clicca sul tasto `OK`{.action} per salvare le modifiche
- Riavvia il server
- Ripeti tutti gli step per gli altri server e attribuisci ad ognuno un indirizzo IP unico appartenente al tuo intervallo. Subito dopo, i tuoi server potranno comunicare tra di loro all’interno della rete privata.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.