---
title: 'Creare due o più VLAN nella vRack'
slug: creare-vlan-vrack
excerpt: 'Scopri come creare molteplici VLAN nella vRack'
section: vRack
---

**Ultimo aggiornamento: 24/02/2022**

## Obiettivo

La [configurazione standard della vRack](https://docs.ovh.com/it/dedicated/configurare-server-dedicati-vrack/){.external} consente di creare soltanto una VLAN. Questo significa che è possibile utilizzare ogni indirizzo IP un’unica volta. Tuttavia, con la versione 2.0 della vRack si possono creare fino a 4.000 reti locali virtuali nella stessa vRack. In questo modo, è possibile utilizzare ciascun indirizzo IP fino a 4.000 volte.

**Questa guida ti mostra come creare due o più VLAN nella stessa vRack.**


## Prerequisiti

- Disporre di uno o più [server dedicati](https://www.ovh.it/server_dedicati/){.external} compatibili con la vRack
- Aver attivato un servizio [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
- Aver accesso all’intervallo di indirizzi IP privati preselezionati
- Essere connesso  in SSH come utente root (con Linux)
- Essere connesso con l’account amministratore (con Windows)
- Aver completato la [configurazione della vRack](https://docs.ovh.com/it/dedicated/configurare-server-dedicati-vrack/){.external}

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

## Procedura

### Con Linux

> [!primary]
>
> In questo esempio utilizzeremo **eno2** per Ubuntu e **eth1** per Debian come interfaccia di rete, **10** come tag VLAN e **192.168.0.0/16** come intervallo di indirizzi IP. 
>
> È necessario adattare tutti i comandi in base alla distribuzione utilizzata. In caso di dubbi, consulta la documentazione ufficiale della tua distribuzione.
>

#### Ubuntu 20 e 21

Questo esempio è basato su Ubuntu 21.10 (Impish Indri).

Come prima cosa, installa il pacchetto VLAN sul tuo server utilizzando il seguente comando:

```sh
sudo apt-get install vlan
```

Carica il modulo kernel 8021q:

```sh
sudo su -c 'echo "8021q" >> /etc/modules'
```

Crea o modifica questo file di configurazione per impedire che vengano apportate automaticamente modifiche alla configurazione di rete:

```sh
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

E aggiungi questa linea:

```sh
network: {config: disabled}
```

Recupera il nome dell'interfaccia di rete e il suo indirizzo MAC:

```sh
ip a
``` 

Ecco l'interfaccia che vogliamo configurare è `eno2` con indirizzo MAC: 'd0:50:99:d6:6b:14'.

![ubuntu VLAN](images/vrack3-ubuntu-01.png)

Aggiungere la configurazione di rete per questa interfaccia di rete e la dichiarazione VLAN nel file seguente:

```sh
sudo nano /etc/netplan/50-cloud-init.yaml
```

```yaml
network:
    version: 2
    ethernets:
        eno2:
            match:
                macaddress: d0:50:99:d6:6b:14
        eno1:
            ...
            ...
    vlans:
        vlan10:
            id: 10                      # VLAN ID    
            link: eno2                  # Interface name
            addresses:
            - 192.168.0.14/16
```

Salva e chiudi il file, quindi esegui i seguenti comandi:

```sh
sudo netplan try
sudo netplan apply
```

Utilizza il comando seguente per confermare la configurazione:

```sh
ip a
``` 

![ubuntu VLAN](images/vrack3-ubuntu-02.png)

#### Debian

Come prima cosa, installa il pacchetto VLAN sul tuo server utilizzando il seguente comando:

```sh
sudo apt-get install vlan
```

È consigliabile creare un tag VLAN, l’identificativo che servirà per distinguere le diverse VLAN:

```sh
vconfig add eth1 10

Added vlan with VID == 10 to IF -:eth1:-
```

Successivamente dovrai dichiarare l’intervallo di indirizzi IP nella vRack e taggarlo con il tuo identificativo, utilizzando questo comando:

```sh
ip addr add 192.168.0.0/16 dev eth1.10
```

Infine, modifica la configurazione dell’interfaccia di rete affinché questa possa riconoscere il tag VLAN. Per completare questo step, apri il file di configurazione dell’interfaccia di rete per modificarlo, come indicato qui di seguito:

```sh
sudo /etc/network/interfaces

auto eth1.10
iface eth1.10 inet static
address 192.168.0.50
netmask 255.255.0.0
broadcast 192.168.255.255
```

### Con Windows

Connettiti al tuo server tramite desktop remoto e apri l’applicazione Server Manager. Seleziona `Local Server`{.action} e clicca sul link `Disabled`{.action} accanto a **NIC Teaming**:

![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}

Crea un nuovo team selezionando un’interfaccia di rete e digitando un nome nel campo **Team name**. Al termine dell’operazione clicca su `OK`{.action} per confermare.

![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}

Poi specifica il tag della VLAN. Nel pannello **Adapters and Interfaces** della schermata **NIC Teaming** clicca con il tasto destro del mouse sull’interfaccia che hai appena aggiunto al nuovo team e infine clicca su `Properties`{.action}. A questo punto, seleziona `Specific VLAN`{.action} e inserisci il tag:

![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}

Adesso non resta che configurare l’indirizzo IP della VLAN. Clicca sul pulsante `Start`{.action} e poi su `Pannello di controllo`{.action}.

![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}

Poi clicca su `Rete e Internet`{.action}.

![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}

Clicca su `Centro connessioni di rete e condivisione`{.action}.

![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}

Poi clicca su `Modifica impostazioni scheda`{.action}.

![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}

Di seguito, clicca con il tasto destro sull’interfaccia VLAN e poi clicca su `Proprietà`{.action}.

![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}

Fai doppio click su `Internet Protocol Version 4`{.action} (TCP/IP/IP v4).

![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}

Clicca su `Utilizza il seguente indirizzo IP`{.action}: in **IP Address** inserisci un indirizzo IP del tuo intervallo e in **Subnet mask** inserisci 255.255.0.0

![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}

Infine clicca sul pulsante `OK`{.action} per salvare le modifiche e concludi l’operazione riavviando il server.

## Per saperne di più

[Configurare due o più server dedicati nella vRack](https://docs.ovh.com/it/dedicated/configurare-server-dedicati-vrack/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.