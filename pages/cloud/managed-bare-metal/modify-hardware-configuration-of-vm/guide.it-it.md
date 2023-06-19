---
title: Modificare le risorse di una macchina virtuale
routes:
    canonical: '/pages/cloud/private-cloud/modify_hardware_configuration_of_vm'
excerpt: Come apportare modifiche alla configurazione della tua macchina virtuale
updated: 2020-11-18
---


**Ultimo aggiornamento: 18/11/2020**

## Obiettivo

Le risorse assegnate a una macchina virtuale in fase di creazione non sono inalterabili ma, con alcune restrizioni, possono essere modificate per aumentare l’agilità della propria infrastruttura.

**Questa guida ti mostra come cambiare le caratteristiche definite per la tua VM.**


## Prerequisiti

- Aver creato una macchina virtuale
- Essere connesso al client vSphere HTML


## Procedura


Le azioni descritte in questa guida devono essere effettuate dal proprio servizio Managed Bare Metal direttamente sul client vSphere, cliccando con il tasto destro sulla VM e selezionando la voce `Edit Settings`{.action}.

![Modifica delle risorse](images/hardware01.png){.thumbnail}

Questo menu permette di aggiungere o rimuovere le risorse della macchina virtuale. 

![Modifica delle risorse](images/hardware02.png){.thumbnail}

Per maggiori informazioni sulla possibilità di aggiungere componenti hardware e periferiche, continua la lettura di questa guida.


### Processore (CPU)

Il numero di CPU sarà limitato agli slot disponibili sull’host.

Se la macchina virtuale viene migrata su un host con un numero di processori inferiore a quello assegnato alla macchina, si attiverà lo stato `CPU ready` che causerà un calo delle prestazioni.

![Aggiunta di CPU](images/hardware03.png){.thumbnail}

È anche possibile riservare una certa frequenza (minima e massima) e scegliere il numero di core per socket.

Selezionare la casella `Enable CPU Hot Add`{.action} permette di modificare questi valori mentre la macchina è in esecuzione.

In base al sistema operativo utilizzato, l’aggiunta di risorse a caldo potrebbe non funzionare e causare malfunzionamenti sull’host.

Alla macchina virtuale può essere attribuito anche un minimo di *MHz* (MegaHertz): questa soglia, illimitata di default, permette di definire per il processore della VM un valore in *MHz*. In questo modo è possibile, ad esempio, limitare una macchina virtuale di sviluppo.


### Memoria (RAM)

Come la CPU, anche la capacità della RAM è limitata alle risorse dell’host.

Anche in questo caso è possibile assegnare la memoria in modo che la macchina virtuale abbia sempre un minimo di RAM riservata.

![Aggiunta di memoria](images/hardware04.png){.thumbnail}


### Hard disk

Relativamente agli hard disk, è possibile aumentarne la dimensione in base allo spazio residuo sul datastore utilizzato dalla macchina virtuale.

![Aggiunta di storage](images/hardware05.png){.thumbnail}

Consigliamo di utilizzare dei controller disk SCSI invece che IDE in quanto questi ultimi non consentono, ad esempio, il backup via Veeam.

È anche possibile selezionare la modalità del disco:

- `Dependent`: include il disco durante lo Snapshot

- `Independent - persistent`: permette di conservare i dati al riavvio di una macchina, ma non viene preso in considerazione durante lo Snapshot

- `Independent - non-persistent`: ha la particolarità di non conservare i dati. In caso di riavvio della macchina tutte le informazioni vengono infatti cancellate.


### Scheda di rete

È possibile modificare la scheda di rete della macchina virtuale, la connessione della scheda all’avvio della VM, modificare il tipo di scheda, verificare il Port ID e l’indirizzo MAC.

![Aggiunta della rete](images/hardware06.png){.thumbnail}

Questa interfaccia è utile in caso di malfunzionamenti di rete, per verificare che il *port ID* corrisponda a quello inserito nelle tab `Networking`{.action} e `Ports`{.action} per la scheda in questione.


### Lettore CD/DVD

Il lettore CD/DVD consente ad esempio di effettuare il mount di un’immagine ISO sulla macchina virtuale.

![Aggiunta di un lettore CD/DVD](images/hardware07.png){.thumbnail}

Consigliamo di eliminare il lettore CD/DVD dopo l’utilizzo, in quanto potrebbe impedire lo spostamento della macchina virtuale.


### Aggiunta di dispositivi

In alto a destra della finestra è possibile aggiungere ulteriori device, come dischi provenienti da altri datastore o schede di rete nel caso in cui la propria attività richieda l’utilizzo di più reti private.

![Aggiunta di componenti](images/hardware08.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
