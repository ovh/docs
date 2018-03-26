---
title: Trasferisci i tuoi servizi da RunAbove al Public Cloud
excerpt: Trasferisci i tuoi servizi da RunAbove al Public Cloud
slug: trasferisci_i_tuoi_servizi_da_runabove_al_public_cloud
legacy_guide_number: g1942
---


## 
[RunAbove](https://www.runabove.com/index.xml) è il marchio che presenta tutte le innovazioni OVH sotto forma di Lab, ad esempio i [Desktop as a service](https://www.runabove.com/deskaas.xml) e tutto ciò che riguarda [l'IoT](https://www.runabove.com/iot-paas-timeseries.xml).

I Lab come l'[Object Storage](https://www.runabove.com/cloud-storage.xml), le [istanze](https://www.runabove.com/cloud-instance.xml) e i [dischi aggiuntivi](https://www.runabove.com/cloud-disks.xml) non sono più disponibili. Li puoi comunque trovare, in una versione potenziata, nel [Public Cloud OVH](https://www.ovh.it/cloud/).


## 
Ti consigliamo di trasferire il prima possibile i tuoi servizi associati alle istanze, dischi aggiuntivi e Object Storage in quanto, su RunAbove, sono in fase di chiusura.
Se hai bisogno di aiuto per effettuare l'operazione di trasferimento, consulta le guide disponibili.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851)




## Imposta le variabili d'ambiente OpenStack per RunAbove
Come prima cosa, recupera il file RC che contiene tutte le informazioni necessarie all'utilizzo delle API OpenStack:


- Accedi al tuo account RunAbove

- Clicca sul nome in alto a destra e seleziona OpenStack Horizon



![](images/img_3038.jpg){.thumbnail}

- Seleziona la Region sulla sinistra

- Accedi al menu Access & Security, poi alla tab API Access



![](images/img_3039.jpg){.thumbnail}

- Clicca su Download OpenStack RC File

- Imposta le variabili d'ambiente OpenStack per RunAbove utilizzando il file RC


```
root@serveur:~$ source RunAbove_OpenRC.sh
```





## Effettua il trasferimento
Le guide che ti spiegano come trasferire backup di istanze e dischi aggiuntivi da un datacenter a un altro sono compatibili con RunAbove. Puoi quindi consultarle se hai bisogno di aiuto per trasferire i tuoi servizi:

Trasferisci le tue istanze:

- [Trasferisci il backup di un'istanza da un datacenter a un altro]({legacy}1853)


Trasferisci i tuoi dischi aggiuntivi:

- [Trasferisci il backup di un disco aggiutivo da un datacenter a un altro]({legacy}1941)


Per trasferire l'Object Storage, scarica e invia i tuoi dati nel tuo nuovo progetto, o sincronizza 2 container tra di loro:

- [Sincronizza container di oggetti]({legacy}1919)




## Fatturazione
Al contrario di RunAbove, esistono 2 tipi di fatturazione:


- Fatturazione oraria:

con questa modalità, simile a quella esistente su RunAbove, la fattura viene generata il mese successivo, in base ai tuoi consumi.


- Fatturazione mensile:

scegliendo questa modalità, usufruisci di uno sconto del 50%. La fattura viene generata immediatamente, calcolando il prorata temporis relativo al mese in corso.


## Funzionalità
Al momento, alcune funzionalità non sono ancora disponibili sul Public Cloud:


- reti private
- floating IP


Le reti private saranno disponibili a breve e saranno compatibili con la VRack.

Alcune funzionalità non presenti su RunAbove sono invece disponibili sul Public Cloud:


- licenze Windows disponibili per le istanze EG e SP
- importazione di indirizzi IP Failover
- possibilità di utilizzare l'IP Load Balancing




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

