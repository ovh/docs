---
title: Aggiungere un Dedicated Cloud alla vRack 1.5 e configurare una VM
description: In questa guida ti spieghiamo come aggiungere un Dedicated Cloud alla vRack 1.5 utilizzando il tuo Manager o l'API e come configurare una VM sulla vRack, facendo qualche esempio particolare.
excerpt: In questa guida ti spieghiamo come aggiungere un Dedicated Cloud alla vRack 1.5 utilizzando il tuo Manager o l'API e come configurare una VM sulla vRack, facendo qualche esempio particolare.
slug: aggiungere_un_dedicated_cloud_alla_vrack_15_e_configurare_una_vm
legacy_guide_number: g1257
---


## 
Accedi al tuo [Manager](https://www.ovh.com/manager/dedicated/)

Aggiungi il tuo Dedicated Cloud alla vRack trasferendo semplicemente i server dalla sezione di sinistra a quella di destra (utilizzando i pulsanti "Aggiungi/Rimuovi"):

![](images/img_1062.jpg){.thumbnail}
Il pulsante di aggiunta viene creato automaticamente.


## Connessione all'API (via script)
Fai riferimento a questa guida: []({legacy}934)


## Connessione all'API (utilizzando l'interfaccia web)
Vai alla [pagina dell'API](https://api.ovh.com/console/)

Accedi cliccando sul pulsante "Login" che trovi in alto a destra.


## Aggiunta del Dedicated Cloud alla vRack 1.5
Dopo aver effettuato l'accesso, entra nella sezione vRack, poi su GET /vrack e clicca su "Esegui" per recuperare il "ServiceName" della tua vRack:

![](images/img_1054.jpg){.thumbnail}
Dopo aver recuperato il servizio, accedi a POST /vrack/Servicename/DedicatedCloud, inserisci il nome del tuo dedicatedcloud e poi su "Esegui":

![](images/img_1056.jpg){.thumbnail}


## Rimozione del Dedicated Cloud dalla vRack 1.5
Il processo è lo stesso dell'aggiunta, differisce soltanto dall'utilizzo della funzione "DELETE" dell'API:

![](images/img_1057.jpg){.thumbnail}


## In modalità VSS (Virtual Standard Switch)
In questa configurazione, il metodo è molto semplice. Ti basta selezionare il portgroup "VM Network" nei parametri della scheda di rete, come nell'esempio qui sotto:

![](images/img_1059.jpg){.thumbnail}


## In modalità VDS (Virtual Distributed Switch) o 1000v
Il processo è lo stesso che per la modalità VSS ma il nome portgroup cambia:

![](images/img_1060.jpg){.thumbnail}


## Utilizzo delle VXLAN sul 1000v
Potresti anche voler utilizzare una VXLAN per evitare che le tue macchine siano totalmente esposte sulla VLAN pubblica del tuo Dedicated Cloud.

Puoi utilizzare questa procedura dopo aver configurato una macchina aggiuntiva che svolge le funzioni di gateway per le VM nella VXLAN e una scheda sulla "VM Network" del 1000v come in questo esempio:

![](images/img_1061.jpg){.thumbnail}

