---
title: 'Installare Real Time Monitoring (RTM)'
slug: installare-rtm
excerpt: 'Scopri come installare Real Time Monitoring su Linux o Windows'
section: 'Diagnostica e modalità Rescue'
---

**Ultimo aggiornamento: 28/05/2018**

## Obiettivo

Real Time Monitoring (RTM) consente di monitorare parzialmente un server e la sua attività, consultando i dati relativi alla CPU, alla RAM, alle porte aperte, ecc... nello Spazio Cliente. Per rendere disponibili queste informazioni, è necessaria l’installazione del pacchetto RTM.

**Questa guida ti mostra come installare RTM su Windows o Linux**

## Prerequisiti

- Essere connesso in SSH o attraverso l’interfaccia grafica al server Linux (accesso *root*)
- Accedere da desktop in remoto al server Windows (accesso *amministratore*)
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedura

Dopo aver installato RTM, potrai monitorare il server dallo Spazio Cliente, attraverso la sezione `Dedicato`{.action}. Nella pagina principale del server, in `Real Time Monitoring`, appariranno le informazioni relative al monitoraggio. 

![Real Time Monitoring](images/rtm.png)

> [!primary]
>
> Alcune regole del firewall potrebbero impedire il monitoraggio dell'infrastruttura nonostante l'aggiunta di RTM. Non dimenticare di rendere il tuo server accessibile agli indirizzi IP del nostro monitoraggio. Trovi i dettagli [qui - EN](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}
> 

### Installa RTM con Linux

Una volta stabilita la connessione in SSH sul tuo server, è sufficiente eseguire il seguente comando:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/rtm/install_rtm.sh -O install_rtm.sh | sh install_rtm.sh
```

### Installa RTM con Windows

Dopo aver effettuato l’accesso da desktop in remoto, basta seguire questi step:

- installa ActivePerl se RTM non è mai stato installato prima. Clicca su questo link per il download: <http://www.activestate.com/activeperl/>
- scarica e installa l’ultima versione di RTM: <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/> 
- clicca con il tasto destro, poi seleziona `Esegui come amministratore`{.action}.


## Per saperne di più

[IP di monitoraggio di OVH - EN](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/)

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
