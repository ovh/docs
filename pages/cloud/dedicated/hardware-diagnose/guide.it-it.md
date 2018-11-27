---
title: 'Diagnosticare problemi hardware su un server dedicato'
slug: diagnostica-problemi-hardware-server-dedicato
excerpt: 'Scopri come individuare problemi di natura hardware su un server'
section: Sicurezza
---

**Ultimo aggiornamento: 27/11/2018**

## Obiettivo


Con il passare del tempo, l’usura di un server può causare malfunzionamenti dovuti a problemi di tipo hardware. Per questo motivo, i server dedicati OVH sono dotati di numerosi strumenti di diagnostica che permettono di individuare i componenti hardware difettosi.

**Questa guida ti mostra come diagnosticare problemi hardware su un server.**


## Prerequisiti

* Disporre di un [server dedicato](https://www.ovh.it/server_dedicati/){.external}
* Aver riavviato il server in [Rescue mode](https://docs.ovh.com/it/dedicated/rescue_mode/){.external}


## Procedura

### Utilizza l’interfaccia Web

Una volta riavviato il server in [Rescue mode](https://docs.ovh.com/it/dedicated/rescue_mode/), riceverai un’email contenente le credenziali di accesso e un link all’interfaccia Web della modalità Rescue, con il seguente formato: **https://IP_du_serveur:444**.  

Clicca sul link e sarai reindirizzato verso l’interfaccia Web come mostrato nell’immagine di seguito.

![L’interfaccia Web](images/rescue-mode-04.png){.thumbnail}


### Esegui tutti i test hardware

Nella parte superiore dell’interfaccia Web, clicca sul pulsante `Start all tests`{.action} per eseguire contemporaneamente tutti i test hardware disponibili.

![Start all tests](images/rescue-mode-042.png){.thumbnail}


### Esegui i test hardware uno alla volta

L’interfaccia Web consente di eseguire separatamente i seguenti test:

- processori
- connessione di rete
- memoria RAM
- partizioni del disco

Inoltre, per avere informazioni dettagliate sugli hard disk è possibile consultare gli SMART log del server.

 
#### **Processori**

Questo test serve per verificare il corretto funzionamento del processore del server e richiede circa 30 minuti. Se il server si blocca durante il test, significa che il processore è difettoso.

Per avviare il test clicca sul pulsante come indicato nell’immagine seguente:

![Test del processore](images/processors.png){.thumbnail}

#### **Connessione di rete**

Il test di connessione di rete permette di verificare la larghezza di banda interna ed esterna. Per avviare il test clicca sul pulsante come indicato nell’immagine seguente:

![Test di rete](images/network-connection.png){.thumbnail}

#### **Memoria RAM**

Il test di memoria consente di verificare l’integrità dei moduli RAM del server. Se il server si blocca durante il test, significa che uno o più moduli RAM sono difettosi.

Per avviare il test clicca sul pulsante come indicato nell’immagine seguente:

![Test di memoria](images/memory.png){.thumbnail}

#### **Partizioni del disco**

Questo test comprende sia una verifica dell’accesso al disco che un controllo del file system. Il test di accesso al disco serve per verificare che il sistema sia in grado di comunicare con gli hard disk del server. Riguardo al test del file system, si utilizza il comando `fsck -fy`.

> [!warning]
>
> Il controllo del file system su un hard disk danneggiato può provocare una perdita di dati.
>

![Test del disco](images/partitions.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.