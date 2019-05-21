---
title: Installa Plesk sulla tua istanza
excerpt: Installa Plesk sulla tua istanza
slug: installa_plesk_sulla_tua_istanza
legacy_guide_number: g1998
---


## 
Plesk è un'interfaccia di gestione dei server dedicati inclusa su tutti i server dedicati e VPS OVH, ma non nella lista delle immagini Public Cloud.

Questa guida ti mostra come installare e configurare Plesk su una delle tue istanze Public Cloud.

Fonte: [Plesk](http://download1.parallels.com/Plesk/Doc/en-US/online/plesk-installation-upgrade-migration-guide/)


## Requisiti necessari

- [Crea un'istanza dallo Spazio Cliente OVH]({legacy}1775)
- [Imposta una password amministratore]({legacy}1786)




## Installazione
È possibile installare facilmente Plesk tramite una connessione SSH.
Per farlo, è sufficiente scaricare ed eseguire lo script di installazione di Plesk:


```
user@poste:~$ wget -O - http://autoinstall.plesk.com/one-click-installer | sh
```


Per effettuare un'installazione personalizzata, scarica ed esegui questo script:


```
user@poste:~$ wget http://autoinstall.plesk.com/plesk-installer
user@poste:~$ sh ./plesk-installer
```




## Configurazione
Una volta completata l'installazione, è possibile accedere all'interfaccia Plesk per configurarla.
Per farlo, apri il tuo browser e connettiti all'indirizzo https://IP.dell.istanza:8443 con le tue credenziali di root.

![](images/img_3301.jpg){.thumbnail}
Compare l'assistente di configurazione guidata, che ti permette di impostare la visualizzazione della tua interfaccia Plesk in base al tuo tipo di attività. Ad esempio, per la rivendita di hosting Web:


- Descrivi il tuo utilizzo di Plesk:



![](images/img_3302.jpg){.thumbnail}

- Scegli il tipo di visualizzazione della tua interfaccia:



![](images/img_3303.jpg){.thumbnail}
Inserisci a dati di accesso alla tua istanza:


- hostname
- indirizzo IP
- password di root



![](images/img_3304.jpg){.thumbnail}
Inserisci le informazioni relative al tuo account amministratore:

![](images/img_3305.jpg){.thumbnail}


## Aggiungi la tua licenza
Per aggiungere la tua licenza, segui queste indicazioni.

## Attenzione:
OVH non fornisce licenze Plesk per il tuo Public Cloud. Per ordinarne una, accedi al [sito di Plesk](http://www.plesk.com/it/#editions).
Per ottenere una chiave di licenza di prova, accedi a [questa pagina](http://www.plesk.com/it/plesk/download/).
Nella pagina che si apre la prima volta che ti connetti, ti viene chiesto di aggiungere la tua licenza:

![](images/img_3307.jpg){.thumbnail}
Installa la tua chiave di licenza

![](images/img_3306.jpg){.thumbnail}
Informazioni utili:
Se vuoi modificare la tua licenza, ad esempio per sostituire la tua chiave di licenza di prova o cambiare la tua offerta, accedi alla sezione Server Management della tua interfaccia Plesk e clicca su Tools & Settings:

![](images/img_3322.jpg){.thumbnail}
Seleziona License Management nella sezione Plesk:

![](images/img_3323.jpg){.thumbnail}
Una volta aggiunta la nuova chiave, il tipo di licenza cambia:

![](images/img_3324.jpg){.thumbnail}


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

