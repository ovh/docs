---
title: Riavvia la tua istanza in modalità di ripristino (Rescue mode)
excerpt: Riavvia la tua istanza in modalità di ripristino (Rescue mode)
slug: riavvia_la_tua_istanza_in_modalita_di_ripristino_rescue_mode
legacy_guide_number: g2029
---


## 
Se non riesci ad accedere alla tua istanza a causa di una configurazione non corretta o perché hai smarrito la tua chiave SSH, puoi accedere ai tuoi dati e correggere i file di configurazione attivando la modalità di ripristino.

Il funzionamento è abbastanza semplice:
La tua istanza viene avviata da un'immagine con un sistema operativo di ripristino. Il disco della tua istanza è associato ad essa come se fosse un disco aggiuntivo: per accedere ai dati, è sufficiente configurarlo.

Questa guida ti mostra come utilizzare il Rescue mode sulla tua istanza.


## Requisiti necessari

- [Crea un'istanza dallo Spazio Cliente OVH]({legacy}1775)




## Attiva la modalità di ripristino
Per attivare il Rescue mode sul tuo server, clicca sulla freccia in alto a destra della tua istanza e seleziona Avvia in modalità Rescue:

![](images/img_3494.jpg){.thumbnail}
Scegli l'immagine su cui vuoi riavviare il tuo server in modalità Rescue:

![](images/img_3495.jpg){.thumbnail}
Puoi scegliere tra le immagini dei sistemi operativi che ti proponiamo o la Distribuzione Rescue Made-in-OVH, che ti permette di accedere in modalità Rescue alla tua istanza utilizzando una password temporanea.

Una volta avviata la modalità di ripristino, visualizzi la password temporanea nella finestra che compare in basso a destra:

![](images/img_3497.jpg){.thumbnail}


## Accedi ai tuoi dati
In modalità Rescue, i dati della tua istanza sono visibili come un disco aggiuntivo.
Per potervi accedere, è sufficiente configurare il disco seguendo questa procedura:


- accedi come utente amministratore:


```
admin@instance:~$ sudo su
```


- verifica i dischi disponibili:


```
root@instance:/home/admin# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part
```


- monta la partizione;


```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```



A questo punto, i tuoi dati sono accessibili nella cartella /mnt.

Puoi eseguire diverse operazioni, ad esempio modificare il file che contiene la lista delle chiavi SSH utilizzabili dall'utente admin:


```
root@instance:/home/admin# vim /mnt/home/admin/.ssh/authorized_keys
```




## Riavvia normalmente la tua istanza
Una volta effettuate queste operazioni, è possibile riavviare normalmente la tua istanza. Per farlo, clicca sulla freccia in alto a destra e seleziona "Chiudi la modalità Rescue":

![](images/img_3496.jpg){.thumbnail}


## Con le API OpenStack
Per riavviare la tua istanza in Rescue mode utilizzando le API OpenStack, esegui questo comando:


```
root@server:~# nova rescue INSTANCE_ID
```


Per uscire dalla modalità Rescue, esegui questo comando:


```
root@server:~# nova unrescue INSTANCE_ID
```




## 

- [Crea chiavi SSH]({legacy}1769)
- [Configura chiavi SSH aggiuntive]({legacy}1924)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

