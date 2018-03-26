---
title: Verificare una macchina in caso di lentezza
excerpt: ''
slug: verificare_una_macchina_in_caso_di_lentezza
legacy_guide_number: g601
---


## 
Ecco i passi da seguire per fare una diagnosi in caso di forti rallentamenti su una VM.

È necessario utilizzare il client vSphere, o accedervi utilizzando il proprio client locale, oppure utilizzando la connessione RDP che ti abbiamo fornito al momento dell'attivazione del tuo Private Cloud.


## Controllo delle macchine virtuali:
Inizialmente, si selezionerà la VM problematica, poi andremo alla scheda "Prestazione". Qui troviamo i grafici di riepilogo dell'utilizzo della nostra VM per la CPU, RAM, ecc. Se constatiamo un utilizzo importante in questa finestra, le irregolarità provengono certamente dalla VM.
In questo caso puoi procedere ad un aumento delle risorse della tua VM,dopo esserti assicurato che non ci siano limitazioni nella sezione "Risorse dei parametri"  della VM (clic destro sulla VM => Modifica impostazioni => Risorse)


## Controllo Cluster / Pool delle risorse
Sul cluster o sul pool di risorse, andiamo sulla scheda "Prestazioni". Questo ti permetterà di vedere i grafici delle prestazioni e di utilizzo delle risorse:

![](images/img_95.jpg){.thumbnail}
Nella sezione "Allocazione delle risorse", potrai vedere in cifre il consumo globale delle tue VM sulle risorse disponibili:

![](images/img_96.jpg){.thumbnail}
Possono esserci due casi:

- Se un host è sovraccarico, è possibile eseguire manualmente la migrazione della tua VM ad un altro host, o una migrazione a caldo con vMotion.

Se possiedi una licenza Enterprise, puoi utilizzare la funzione DRS, che ti permette di gestire automaticamente questa operazione, secondo l'utilizzo delle risorse dei tuoi hosts.


- Qualora tutti i tuoi hosts presentino un carico importante, occorrerà aggiungerne grazie alla sezione "Private Cloud OVH", o "Archivio OVH".




## Controllo degli archivi
Al di là delle risorse di sistema per le tue macchine virtuali, puoi anche monitorare i tuoi archivi. Quando sei in  "Datastore", seleziona il tuo NAS e poi la sezione "Prestazione":

![](images/img_97.jpg){.thumbnail}


## Controllo della rete
Infine, è possibile controllare lo stato della rete.
Dentro il tuo Manager puoi vedere il flusso utilizzato come le limitazioni che hai predisposto sulla tua VLAN:


- Manager v5 -> Private Cloud -> Sommario/Accoglienza



